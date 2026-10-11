# Conector MCP (Model Context Protocol) para Insta360 Web Editor

Este servidor permite que cualquier Inteligencia Artificial (Claude, Antigravity, Cursor, o agentes basados en MCP) controle el editor panorámico 360 en tiempo real a través de comandos y consultas en lenguaje natural.

---

## 🚀 Cómo Iniciar el Conector

### 1. Iniciar la aplicación web
```bash
npm run dev
```
La aplicación web se abrirá en [http://localhost:5173](http://localhost:5173).

### 2. Iniciar el servidor MCP
```bash
npm run mcp
```
* O configurarlo en tu cliente MCP (Claude Desktop, etc.) usando el archivo [`mcp-config.example.json`](./mcp-config.example.json).

Al conectarse, verás en la barra superior del editor el indicador **`MCP IA: CONECTADO`** iluminado en verde.

---

## 🛠️ Herramientas MCP Disponibles para la IA

| Herramienta | Parámetros | Descripción |
| :--- | :--- | :--- |
| `get_editor_state` | *Ninguno* | Consulta el estado actual: ángulos (`yaw`, `pitch`, `roll`), ajustes de color, modo nadir, modo de pantalla y archivo abierto. |
| `set_orientation` | `yaw`, `pitch`, `roll` | Rota la cámara 360 y modifica el centro del panorama equirrectangular. |
| `auto_level_horizon` | *Ninguno* | Nivela instantáneamente el horizonte fijando `pitch: 0` y `roll: 0`. |
| `reset_orientation` | *Ninguno* | Restablece los 3 ángulos a 0° (vista frontal centrada). |
| `set_color_adjustments` | `exposure`, `brightness`, `contrast`, `saturation`, `warmth` | Aplica correcciones de color y exposición fotográfica en tiempo real. |
| `reset_colors` | *Ninguno* | Restablece todos los parámetros de color a valores neutros (0). |
| `configure_nadir_patch` | `enabled`, `radius`, `feather`, `mode`, `color` | Oculta el trípode/soporte en la base del suelo esférico (`blur`, `mirror`, o `color`). |
| `set_view_mode` | `mode` (`"3d"`, `"equirectangular"`, `"split"`) | Cambia entre vista esférica 3D, plano 2:1 o vista dividida sincronizada. |
| `trigger_reframe_snapshot` | `aspectRatio` (`"16:9"`, `"9:16"`, `"1:1"`, `"4:3"`), `fov` | Toma y descarga una foto fija 2D encuadrada desde el punto de vista actual. |
| `open_export_modal` | *Ninguno* | Abre la ventana de exportación equirrectangular completa con metadatos GPano XMP. |

---

## 🌐 Telemetría y Endpoints HTTP

El servidor MCP también expone un endpoint local en el puerto `5174`:
* `GET http://127.0.0.1:5174/state`: Devuelve el JSON con el estado actual del editor.
* `POST http://127.0.0.1:5174/command`: Permite enviar comandos manuales mediante curl o scripts externos.
