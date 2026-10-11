#!/usr/bin/env node
/**
 * Insta360 Web Editor - Model Context Protocol (MCP) Server
 * 
 * Allows AI agents (Claude, Antigravity, Cursor, etc.) to query and control
 * the 360 photo web editor in real-time.
 * 
 * Communication:
 * - stdio: JSON-RPC 2.0 (MCP Protocol standard)
 * - WebSocket on port 5174: Bridge to the browser app
 * - HTTP on port 5174: Telemetry endpoint and REST fallback
 * 
 * Zero external npm dependencies (pure Node.js standard library).
 */

import http from 'node:http';
import crypto from 'node:crypto';
import readline from 'node:readline';

const WS_PORT = process.env.MCP_BRIDGE_PORT ? parseInt(process.env.MCP_BRIDGE_PORT, 10) : 5174;

// Cache of current editor state
let editorState = {
  connected: false,
  orientation: { yaw: 0, pitch: 0, roll: 0 },
  colorAdjustments: {
    exposure: 0,
    brightness: 0,
    contrast: 0,
    saturation: 0,
    warmth: 0,
  },
  nadirPatch: {
    enabled: false,
    radius: 18,
    feather: 40,
    mode: 'blur',
    color: '#15191e',
  },
  stitching: {
    projection: 'equirectangular',
    lensFov: 200,
    blendAngle: 10,
    centerOffsetX1: 0,
    centerOffsetY1: 0,
    centerOffsetX2: 0,
    centerOffsetY2: 0,
    radiusScale: 1.0,
  },
  viewMode: 'split',
  language: 'es',
  fileName: 'demo_insta360_panorama.jpg',
  lastUpdate: Date.now(),
};

// Set of active WebSocket client sockets
const wsClients = new Set();

/**
 * Encodes a text payload into an unmasked RFC 6455 WebSocket frame from server to client.
 */
function encodeWsTextFrame(text) {
  const payload = Buffer.from(text, 'utf8');
  const length = payload.length;
  let header;

  if (length < 126) {
    header = Buffer.alloc(2);
    header[0] = 0x81; // FIN + text opcode
    header[1] = length;
  } else if (length <= 0xffff) {
    header = Buffer.alloc(4);
    header[0] = 0x81;
    header[1] = 126;
    header.writeUInt16BE(length, 2);
  } else {
    header = Buffer.alloc(10);
    header[0] = 0x81;
    header[1] = 127;
    header.writeBigUInt64BE(BigInt(length), 2);
  }

  return Buffer.concat([header, payload]);
}

/**
 * Broadcasts a JSON command object to all active web browser clients.
 */
function broadcastToWeb(messageObj) {
  const jsonStr = JSON.stringify(messageObj);
  const frame = encodeWsTextFrame(jsonStr);
  let count = 0;

  for (const client of wsClients) {
    if (!client.destroyed && client.writable) {
      try {
        client.write(frame);
        count++;
      } catch (err) {
        logStderr(`Error broadcasting to client: ${err.message}`);
      }
    }
  }
  return count;
}

/**
 * Helper to log to stderr so stdout is never polluted for stdio JSON-RPC.
 */
function logStderr(...args) {
  process.stderr.write(`[Insta360-MCP] ${args.join(' ')}\n`);
}

/**
 * Initialize WebSocket / HTTP Bridge Server
 */
const server = http.createServer((req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.url === '/state' || req.url === '/health' || req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(
      JSON.stringify(
        {
          status: 'online',
          browserConnected: wsClients.size > 0,
          clientsCount: wsClients.size,
          editorState,
        },
        null,
        2
      )
    );
    return;
  }

  if (req.method === 'POST' && req.url === '/command') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });
    req.on('end', () => {
      try {
        const parsed = JSON.parse(body);
        const deliveredCount = broadcastToWeb(parsed);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: true, deliveredTo: deliveredCount }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: err.message }));
      }
    });
    return;
  }

  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Not Found');
});

/**
 * Upgrade HTTP request to RFC 6455 WebSocket
 */
server.on('upgrade', (req, socket, head) => {
  const secKey = req.headers['sec-websocket-key'];
  if (!secKey) {
    socket.destroy();
    return;
  }

  const hash = crypto
    .createHash('sha1')
    .update(secKey + '258EAFA5-E914-47DA-95CA-C5AB0DC85B11')
    .digest('base64');

  const headers = [
    'HTTP/1.1 101 Switching Protocols',
    'Upgrade: websocket',
    'Connection: Upgrade',
    `Sec-WebSocket-Accept: ${hash}`,
    '\r\n',
  ];

  socket.write(headers.join('\r\n'));
  wsClients.add(socket);
  editorState.connected = true;
  logStderr(`Editor web client connected. Total clients: ${wsClients.size}`);

  let buffer = Buffer.alloc(0);

  socket.on('data', (chunk) => {
    buffer = Buffer.concat([buffer, chunk]);

    // Parse WebSocket frames
    while (buffer.length >= 2) {
      const byte0 = buffer[0];
      const byte1 = buffer[1];
      const opcode = byte0 & 0x0f;
      const isMasked = (byte1 & 0x80) !== 0;
      let payloadLen = byte1 & 0x7f;
      let headerLen = 2;

      if (payloadLen === 126) {
        if (buffer.length < 4) break;
        payloadLen = buffer.readUInt16BE(2);
        headerLen = 4;
      } else if (payloadLen === 127) {
        if (buffer.length < 10) break;
        payloadLen = Number(buffer.readBigUInt64BE(2));
        headerLen = 10;
      }

      const maskLen = isMasked ? 4 : 0;
      const totalFrameLen = headerLen + maskLen + payloadLen;

      if (buffer.length < totalFrameLen) {
        // Wait for more chunks
        break;
      }

      let payloadData = buffer.subarray(headerLen + maskLen, totalFrameLen);

      if (isMasked) {
        const maskKey = buffer.subarray(headerLen, headerLen + 4);
        const unmasked = Buffer.alloc(payloadLen);
        for (let i = 0; i < payloadLen; i++) {
          unmasked[i] = payloadData[i] ^ maskKey[i % 4];
        }
        payloadData = unmasked;
      }

      // Slice consumed frame from buffer
      buffer = buffer.subarray(totalFrameLen);

      // Handle opcodes
      if (opcode === 0x08) {
        // Close frame
        socket.end();
        break;
      } else if (opcode === 0x09) {
        // Ping -> respond with Pong (opcode 0x0A)
        const pongHeader = Buffer.from([0x8a, 0x00]);
        socket.write(pongHeader);
      } else if (opcode === 0x01) {
        // Text frame
        try {
          const str = payloadData.toString('utf8');
          const msg = JSON.parse(str);
          if (msg.type === 'STATE_UPDATE' && msg.data) {
            editorState = {
              ...editorState,
              ...msg.data,
              connected: true,
              lastUpdate: Date.now(),
            };
          }
        } catch (err) {
          logStderr(`Failed to parse WS text message: ${err.message}`);
        }
      }
    }
  });

  socket.on('close', () => {
    wsClients.delete(socket);
    editorState.connected = wsClients.size > 0;
    logStderr(`Editor web client disconnected. Remaining clients: ${wsClients.size}`);
  });

  socket.on('error', (err) => {
    logStderr(`Socket error: ${err.message}`);
    wsClients.delete(socket);
  });
});

server.listen(WS_PORT, '127.0.0.1', () => {
  logStderr(`Bridge WebSocket and HTTP listening on ws://127.0.0.1:${WS_PORT}`);
});

/**
 * MCP Tools Definition
 */
const TOOLS = [
  {
    name: 'get_editor_state',
    description:
      'Obtiene el estado actual del editor 360: orientación (yaw, pitch, roll), ajustes de color (exposición, saturación, etc.), configuración del parche del nadir, modo de visualización, archivo abierto y estado de conexión.',
    inputSchema: {
      type: 'object',
      properties: {},
    },
  },
  {
    name: 'set_orientation',
    description:
      'Ajusta la orientación del punto de vista 360 en el visor y en el plano equirrectangular. Yaw controla el ángulo de visión horizontal (-180° a 180°), Pitch el cabeceo vertical (-90° a 90°), y Roll la inclinación del horizonte (-180° a 180°).',
    inputSchema: {
      type: 'object',
      properties: {
        yaw: {
          type: 'number',
          description: 'Ángulo horizontal en grados (-180 a 180). 0 es el centro por defecto.',
        },
        pitch: {
          type: 'number',
          description: 'Inclinación vertical en grados (-90 mira hacia abajo/nadir, +90 mira hacia arriba/zenit).',
        },
        roll: {
          type: 'number',
          description: 'Inclinación o nivelación del horizonte en grados (-180 a 180). 0 es nivel perfecto.',
        },
      },
    },
  },
  {
    name: 'auto_level_horizon',
    description:
      'Nivela automáticamente el horizonte de la foto panorámica 360 colocando Pitch y Roll a 0° exactos, manteniendo el Yaw actual.',
    inputSchema: {
      type: 'object',
      properties: {},
    },
  },
  {
    name: 'reset_orientation',
    description:
      'Restablece la orientación completa del panorama a los valores neutros por defecto (yaw=0, pitch=0, roll=0).',
    inputSchema: {
      type: 'object',
      properties: {},
    },
  },
  {
    name: 'set_color_adjustments',
    description:
      'Ajusta los controles fotográficos en tiempo real (shaders WebGL): exposición, brillo, contraste, saturación y temperatura/calidez del color.',
    inputSchema: {
      type: 'object',
      properties: {
        exposure: {
          type: 'number',
          description: 'Compensación de exposición (-1 a 1, donde 0 es neutro).',
        },
        brightness: {
          type: 'number',
          description: 'Brillo general (-1 a 1, donde 0 es neutro).',
        },
        contrast: {
          type: 'number',
          description: 'Contraste tonal (-1 a 1, donde 0 es neutro).',
        },
        saturation: {
          type: 'number',
          description: 'Saturación cromática (-1 a 1, donde -1 es blanco y negro, 0 es neutro).',
        },
        warmth: {
          type: 'number',
          description: 'Temperatura de color (-1 frío/azul a 1 cálido/dorado, 0 es neutro).',
        },
      },
    },
  },
  {
    name: 'reset_colors',
    description:
      'Restablece todos los parámetros de color y exposición fotográfica a sus valores originales por defecto (0).',
    inputSchema: {
      type: 'object',
      properties: {},
    },
  },
  {
    name: 'configure_nadir_patch',
    description:
      'Configura el parche del nadir (la base inferior de la esfera 360) para tapar de forma profesional el trípode, selfie stick o soporte.',
    inputSchema: {
      type: 'object',
      properties: {
        enabled: {
          type: 'boolean',
          description: 'Activar o desactivar el parche del nadir.',
        },
        radius: {
          type: 'number',
          description: 'Radio angular del parche en grados (5° a 45°).',
        },
        feather: {
          type: 'number',
          description: 'Suavizado o degradado del borde en porcentaje (0% a 100%).',
        },
        mode: {
          type: 'string',
          enum: ['blur', 'mirror', 'color'],
          description: 'Método de ocultación: blur (difuminado esférico), mirror (espejado de suelo) o color (disco sólido con logotipo).',
        },
        color: {
          type: 'string',
          description: 'Color hexadecimal para el modo color (ej. "#15191e").',
        },
      },
    },
  },
  {
    name: 'set_view_mode',
    description:
      'Cambia el modo de visualización en la interfaz web: "3d" (visor esférico interactivo con órbita), "equirectangular" (vista plana 2:1 con cuadrícula) o "split" (ambas vistas sincronizadas lado a lado).',
    inputSchema: {
      type: 'object',
      required: ['mode'],
      properties: {
        mode: {
          type: 'string',
          enum: ['3d', 'equirectangular', 'split'],
          description: 'Modo de visualización deseado.',
        },
      },
    },
  },
  {
    name: 'trigger_reframe_snapshot',
    description:
      'Captura y descarga una foto fija 2D (reframe) desde el ángulo y campo de visión actual de la cámara 360.',
    inputSchema: {
      type: 'object',
      properties: {
        aspectRatio: {
          type: 'string',
          enum: ['16:9', '9:16', '1:1', '4:3'],
          description: 'Relación de aspecto para la fotografía 2D (ej. 16:9 para horizontal, 9:16 para Stories/Reels).',
        },
        fov: {
          type: 'number',
          description: 'Campo de visión (FOV) de la lente virtual en grados (30° a 120°, default 75°).',
        },
      },
    },
  },
  {
    name: 'set_language',
    description:
      'Cambia el idioma nativo de la interfaz web entre Español ("es"), Inglés ("en") o Chino simplificado ("zh").',
    inputSchema: {
      type: 'object',
      required: ['language'],
      properties: {
        language: {
          type: 'string',
          enum: ['es', 'en', 'zh'],
          description: 'Código de idioma deseado: "es" (Español), "en" (English), "zh" (简体中文).',
        },
      },
    },
  },
  {
    name: 'open_export_modal',
    description:
      'Abre en la interfaz del usuario la ventana modal de exportación para guardar la foto panorámica equirrectangular con metadatos Google Photo Sphere / GPano XMP.',
    inputSchema: {
      type: 'object',
      properties: {},
    },
  },
  {
    name: 'configure_stitching',
    description:
      'Configura el motor de cosido óptico Insta360: permite alternar entre proyección equirectangular y Dual-Fisheye de 2 lentes, ajustar el FOV óptico (180°-220°), el ángulo de pluma/solapamiento (2°-25°) y la escala de radio.',
    inputSchema: {
      type: 'object',
      properties: {
        projection: {
          type: 'string',
          enum: ['equirectangular', 'dual_fisheye'],
          description: 'Formato de proyección: "equirectangular" (panorámica cosida) o "dual_fisheye" (fotos raw circulares de Insta360).',
        },
        lensFov: {
          type: 'number',
          description: 'Campo de visión de cada lente de ojo de pez en grados (180° a 220°, por defecto 200°).',
        },
        blendAngle: {
          type: 'number',
          description: 'Ángulo de solapamiento y pluma de transición en grados (2° a 25°, por defecto 10°).',
        },
        radiusScale: {
          type: 'number',
          description: 'Escala del radio del círculo óptico (0.90 a 1.10).',
        },
      },
    },
  },
];

/**
 * Handles an MCP Tool Call
 */
function handleToolCall(name, args) {
  const isWebConnected = wsClients.size > 0;
  const connectionNotice = isWebConnected
    ? ' (enviado y aplicado en vivo en el editor web)'
    : ' (advertencia: no hay pestañas del editor web conectadas en http://localhost:5173; se guardó en memoria)';

  switch (name) {
    case 'get_editor_state': {
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(
              {
                browserConnected: isWebConnected,
                activeClients: wsClients.size,
                currentFile: editorState.fileName,
                viewMode: editorState.viewMode,
                orientation: editorState.orientation,
                colorAdjustments: editorState.colorAdjustments,
                nadirPatch: editorState.nadirPatch,
                lastUpdate: new Date(editorState.lastUpdate).toISOString(),
              },
              null,
              2
            ),
          },
        ],
      };
    }

    case 'set_orientation': {
      const updated = {};
      if (typeof args.yaw === 'number') updated.yaw = args.yaw;
      if (typeof args.pitch === 'number') updated.pitch = args.pitch;
      if (typeof args.roll === 'number') updated.roll = args.roll;

      editorState.orientation = { ...editorState.orientation, ...updated };
      broadcastToWeb({ type: 'SET_ORIENTATION', data: updated });

      return {
        content: [
          {
            type: 'text',
            text: `Orientación actualizada con éxito${connectionNotice}: Yaw: ${editorState.orientation.yaw}°, Pitch: ${editorState.orientation.pitch}°, Roll: ${editorState.orientation.roll}°.`,
          },
        ],
      };
    }

    case 'auto_level_horizon': {
      editorState.orientation = { ...editorState.orientation, pitch: 0, roll: 0 };
      broadcastToWeb({ type: 'AUTO_LEVEL' });

      return {
        content: [
          {
            type: 'text',
            text: `Horizonte nivelado automáticamente${connectionNotice}: Pitch=0°, Roll=0°, Yaw=${editorState.orientation.yaw}°.`,
          },
        ],
      };
    }

    case 'reset_orientation': {
      editorState.orientation = { yaw: 0, pitch: 0, roll: 0 };
      broadcastToWeb({ type: 'RESET_ORIENTATION' });

      return {
        content: [
          {
            type: 'text',
            text: `Orientación restablecida a valores neutros (0, 0, 0)${connectionNotice}.`,
          },
        ],
      };
    }

    case 'set_color_adjustments': {
      const updated = {};
      for (const key of ['exposure', 'brightness', 'contrast', 'saturation', 'warmth']) {
        if (typeof args[key] === 'number') {
          updated[key] = Math.max(-1, Math.min(1, args[key]));
        }
      }

      editorState.colorAdjustments = { ...editorState.colorAdjustments, ...updated };
      broadcastToWeb({ type: 'SET_COLORS', data: updated });

      return {
        content: [
          {
            type: 'text',
            text: `Ajustes de color aplicados${connectionNotice}: ${JSON.stringify(editorState.colorAdjustments)}.`,
          },
        ],
      };
    }

    case 'reset_colors': {
      const reset = { exposure: 0, brightness: 0, contrast: 0, saturation: 0, warmth: 0 };
      editorState.colorAdjustments = reset;
      broadcastToWeb({ type: 'SET_COLORS', data: reset });

      return {
        content: [
          {
            type: 'text',
            text: `Ajustes de color y exposición reseteados a 0${connectionNotice}.`,
          },
        ],
      };
    }

    case 'configure_nadir_patch': {
      const updated = {};
      if (typeof args.enabled === 'boolean') updated.enabled = args.enabled;
      if (typeof args.radius === 'number') updated.radius = Math.max(5, Math.min(45, args.radius));
      if (typeof args.feather === 'number') updated.feather = Math.max(0, Math.min(100, args.feather));
      if (args.mode && ['blur', 'mirror', 'color'].includes(args.mode)) updated.mode = args.mode;
      if (args.color) updated.color = args.color;

      editorState.nadirPatch = { ...editorState.nadirPatch, ...updated };
      broadcastToWeb({ type: 'SET_NADIR', data: updated });

      return {
        content: [
          {
            type: 'text',
            text: `Parche del nadir configurado${connectionNotice}: ${JSON.stringify(editorState.nadirPatch)}.`,
          },
        ],
      };
    }

    case 'set_view_mode': {
      const mode = args.mode || 'split';
      editorState.viewMode = mode;
      broadcastToWeb({ type: 'SET_VIEW_MODE', data: mode });

      return {
        content: [
          {
            type: 'text',
            text: `Modo de visualización cambiado a "${mode}"${connectionNotice}.`,
          },
        ],
      };
    }

    case 'trigger_reframe_snapshot': {
      const aspect = args.aspectRatio || '16:9';
      const fov = typeof args.fov === 'number' ? args.fov : 75;

      if (!isWebConnected) {
        return {
          isError: true,
          content: [
            {
              type: 'text',
              text: 'No se puede capturar la foto reframe porque no hay ninguna ventana del editor web conectada. Inicia la app web en http://localhost:5173 para habilitar la captura 3D.',
            },
          ],
        };
      }

      broadcastToWeb({ type: 'TRIGGER_REFRAME', data: { aspectRatio: aspect, fov } });

      return {
        content: [
          {
            type: 'text',
            text: `Captura reframe ejecutada en el navegador con relación de aspecto ${aspect} y FOV ${fov}°. La descarga de la fotografía 2D se ha iniciado automáticamente.`,
          },
        ],
      };
    }

    case 'set_language': {
      const lang = args.language;
      if (!['es', 'en', 'zh'].includes(lang)) {
        return {
          isError: true,
          content: [
            {
              type: 'text',
              text: `Idioma "${lang}" no válido. Opciones permitidas: "es" (Español), "en" (English), "zh" (简体中文).`,
            },
          ],
        };
      }

      editorState.language = lang;
      broadcastToWeb({ type: 'SET_LANGUAGE', data: { language: lang } });

      const names = { es: 'Español', en: 'English', zh: '简体中文' };
      return {
        content: [
          {
            type: 'text',
            text: `Idioma del editor web cambiado a ${names[lang]} [${lang}]${connectionNotice}.`,
          },
        ],
      };
    }

    case 'open_export_modal': {
      broadcastToWeb({ type: 'TRIGGER_EXPORT' });

      return {
        content: [
          {
            type: 'text',
            text: `Modal de exportación panorámica 360 abierto en la interfaz web${connectionNotice}.`,
          },
        ],
      };
    }

    case 'configure_stitching': {
      const updated = {};
      if (args.projection && ['equirectangular', 'dual_fisheye'].includes(args.projection)) {
        updated.projection = args.projection;
      }
      if (typeof args.lensFov === 'number') {
        updated.lensFov = Math.max(180, Math.min(220, args.lensFov));
      }
      if (typeof args.blendAngle === 'number') {
        updated.blendAngle = Math.max(2, Math.min(25, args.blendAngle));
      }
      if (typeof args.radiusScale === 'number') {
        updated.radiusScale = Math.max(0.9, Math.min(1.1, args.radiusScale));
      }

      editorState.stitching = { ...editorState.stitching, ...updated };
      broadcastToWeb({ type: 'SET_STITCHING', data: updated });

      return {
        content: [
          {
            type: 'text',
            text: `Parámetros de cosido óptico actualizados${connectionNotice}: ${JSON.stringify(editorState.stitching)}.`,
          },
        ],
      };
    }

    default:
      return {
        isError: true,
        content: [
          {
            type: 'text',
            text: `Herramienta desconocida: "${name}".`,
          },
        ],
      };
  }
}

/**
 * Handle incoming JSON-RPC 2.0 requests via stdio
 */
function handleJsonRpc(line) {
  let req;
  try {
    req = JSON.parse(line.trim());
  } catch (err) {
    return;
  }

  const { id, method, params } = req;

  // Handle standard MCP methods
  if (method === 'initialize') {
    sendResponse({
      jsonrpc: '2.0',
      id,
      result: {
        protocolVersion: '2024-11-05',
        capabilities: {
          tools: {},
        },
        serverInfo: {
          name: 'insta360-web-editor-mcp',
          version: '1.0.0',
        },
      },
    });
    return;
  }

  if (method === 'notifications/initialized') {
    // Acknowledge notification, no response required
    return;
  }

  if (method === 'ping') {
    sendResponse({
      jsonrpc: '2.0',
      id,
      result: {},
    });
    return;
  }

  if (method === 'tools/list') {
    sendResponse({
      jsonrpc: '2.0',
      id,
      result: {
        tools: TOOLS,
      },
    });
    return;
  }

  if (method === 'tools/call') {
    const { name, arguments: args } = params || {};
    try {
      const toolResult = handleToolCall(name, args || {});
      sendResponse({
        jsonrpc: '2.0',
        id,
        result: toolResult,
      });
    } catch (err) {
      sendResponse({
        jsonrpc: '2.0',
        id,
        error: {
          code: -32000,
          message: err.message,
        },
      });
    }
    return;
  }

  // Method not found
  if (id !== undefined) {
    sendResponse({
      jsonrpc: '2.0',
      id,
      error: {
        code: -32601,
        message: `Method not found: ${method}`,
      },
    });
  }
}

function sendResponse(resp) {
  const jsonStr = JSON.stringify(resp);
  process.stdout.write(jsonStr + '\n');
}

// Read lines from standard input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on('line', (line) => {
  if (line.trim().length > 0) {
    handleJsonRpc(line);
  }
});

process.on('SIGINT', () => {
  server.close();
  process.exit(0);
});

process.on('SIGTERM', () => {
  server.close();
  process.exit(0);
});
