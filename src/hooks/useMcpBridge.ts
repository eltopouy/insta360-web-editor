import { useEffect, useRef, useState } from 'react';
import {
  Orientation,
  ColorAdjustments,
  NadirPatchConfig,
  ViewMode,
  StitchingConfig,
} from '../types/index.ts';

interface McpBridgeProps {
  orientation: Orientation;
  colorAdjustments: ColorAdjustments;
  nadirPatch: NadirPatchConfig;
  stitching?: StitchingConfig;
  viewMode: ViewMode;
  fileName: string;
  language?: string;
  onUpdateOrientation: (orient: Partial<Orientation>) => void;
  onUpdateColors: (colors: Partial<ColorAdjustments>) => void;
  onUpdateNadir: (nadir: Partial<NadirPatchConfig>) => void;
  onUpdateStitching?: (stitching: Partial<StitchingConfig>) => void;
  onUpdateViewMode: (mode: ViewMode) => void;
  onUpdateLanguage?: (lang: any) => void;
  onResetOrientation: () => void;
  onAutoLevel: () => void;
  onTriggerExport: () => void;
  onTriggerReframe: (aspect: string, fov: number) => void;
}

export function useMcpBridge({
  orientation,
  colorAdjustments,
  nadirPatch,
  stitching,
  viewMode,
  fileName,
  language,
  onUpdateOrientation,
  onUpdateColors,
  onUpdateNadir,
  onUpdateStitching,
  onUpdateViewMode,
  onUpdateLanguage,
  onResetOrientation,
  onAutoLevel,
  onTriggerExport,
  onTriggerReframe,
}: McpBridgeProps) {
  const [isConnected, setIsConnected] = useState(false);
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    let reconnectTimeout: any;

    const connect = () => {
      try {
        const ws = new WebSocket('ws://127.0.0.1:5174');
        socketRef.current = ws;

        ws.onopen = () => {
          setIsConnected(true);
          // Send initial state
          ws.send(
            JSON.stringify({
              type: 'STATE_UPDATE',
              data: {
                orientation,
                colorAdjustments,
                nadirPatch,
                stitching,
                viewMode,
                fileName,
                language,
              },
            })
          );
        };

        ws.onmessage = (event) => {
          try {
            const msg = JSON.parse(event.data);
            switch (msg.type) {
              case 'SET_ORIENTATION':
                onUpdateOrientation(msg.data);
                break;
              case 'AUTO_LEVEL':
                onAutoLevel();
                break;
              case 'RESET_ORIENTATION':
                onResetOrientation();
                break;
              case 'SET_COLORS':
                onUpdateColors(msg.data);
                break;
              case 'SET_NADIR':
                onUpdateNadir(msg.data);
                break;
              case 'SET_STITCHING':
                if (onUpdateStitching && msg.data) {
                  onUpdateStitching(msg.data);
                }
                break;
              case 'SET_VIEW_MODE':
                onUpdateViewMode(msg.data);
                break;
              case 'SET_LANGUAGE':
                if (onUpdateLanguage && msg.data?.language) {
                  onUpdateLanguage(msg.data.language);
                }
                break;
              case 'TRIGGER_EXPORT':
                onTriggerExport();
                break;
              case 'TRIGGER_REFRAME':
                onTriggerReframe(msg.data.aspectRatio, msg.data.fov);
                break;
              default:
                break;
            }
          } catch (err) {
            console.error('MCP Bridge message parse error:', err);
          }
        };

        ws.onclose = () => {
          setIsConnected(false);
          // Auto retry connection every 4 seconds
          reconnectTimeout = setTimeout(connect, 4000);
        };

        ws.onerror = () => {
          setIsConnected(false);
        };
      } catch {
        setIsConnected(false);
        reconnectTimeout = setTimeout(connect, 4000);
      }
    };

    connect();

    return () => {
      clearTimeout(reconnectTimeout);
      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  }, []);

  // Sync state to MCP server whenever state changes
  useEffect(() => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(
        JSON.stringify({
          type: 'STATE_UPDATE',
          data: {
            orientation,
            colorAdjustments,
            nadirPatch,
            stitching,
            viewMode,
            fileName,
            language,
          },
        })
      );
    }
  }, [orientation, colorAdjustments, nadirPatch, stitching, viewMode, fileName, language]);

  return { isConnected };
}
