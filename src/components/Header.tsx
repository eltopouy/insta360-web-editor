import React, { useRef } from 'react';
import { ViewMode } from '../types';
import {
  Bot,
  Camera,
  Columns,
  Download,
  Eye,
  FileImage,
  Globe2,
  Map,
  Sparkles,
  Upload,
} from 'lucide-react';

interface HeaderProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  onFileUpload: (file: File) => void;
  onLoadDemo: () => void;
  onOpenExport: () => void;
  fileName: string;
  isMcpConnected?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  viewMode,
  onViewModeChange,
  onFileUpload,
  onLoadDemo,
  onOpenExport,
  fileName,
  isMcpConnected = false,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onFileUpload(e.target.files[0]);
    }
  };

  return (
    <header className="h-14 bg-studio-800 border-b border-white/10 px-4 flex items-center justify-between shrink-0 select-none z-30">
      {/* Brand & Project Info */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-studio-accent/20 border border-studio-accent/40 flex items-center justify-center text-studio-accent shadow-[0_0_12px_rgba(0,210,106,0.3)]">
            <Globe2 className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-sm tracking-tight text-white">360 Studio Web</span>
              <span className="text-[10px] font-mono font-semibold px-1.5 py-0.2 bg-studio-accent/20 text-studio-accent rounded border border-studio-accent/30">
                INSTA360
              </span>
            </div>
            <div className="text-[11px] text-gray-400 font-mono truncate max-w-[200px]" title={fileName}>
              {fileName}
            </div>
          </div>
        </div>

        {/* MCP AI Status Badge */}
        <div
          className={`hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono border transition-all ${
            isMcpConnected
              ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.15)]'
              : 'bg-studio-900/40 border-white/5 text-gray-400'
          }`}
          title={
            isMcpConnected
              ? 'Conector MCP IA Activo: Tu asistente IA puede controlar la vista 360 en vivo (ws://127.0.0.1:5174)'
              : 'Conector MCP IA en espera de conexión local (ws://127.0.0.1:5174)'
          }
        >
          <Bot className={`w-3.5 h-3.5 ${isMcpConnected ? 'text-emerald-400' : 'text-gray-500'}`} />
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              isMcpConnected ? 'bg-emerald-400 animate-pulse' : 'bg-gray-600'
            }`}
          />
          <span className="font-semibold">
            MCP IA: {isMcpConnected ? 'CONECTADO' : 'OFFLINE'}
          </span>
        </div>
      </div>

      {/* View Mode Switcher */}
      <div className="flex items-center bg-studio-900/90 p-1 rounded-lg border border-white/10">
        <button
          onClick={() => onViewModeChange('3d')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
            viewMode === '3d'
              ? 'bg-studio-700 text-white shadow-sm font-semibold'
              : 'text-gray-400 hover:text-white'
          }`}
          title="Vista 3D Interactiva (Esfera)"
        >
          <Eye className="w-3.5 h-3.5 text-studio-accent" />
          <span>3D Esfera</span>
        </button>

        <button
          onClick={() => onViewModeChange('equirectangular')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
            viewMode === 'equirectangular'
              ? 'bg-studio-700 text-white shadow-sm font-semibold'
              : 'text-gray-400 hover:text-white'
          }`}
          title="Vista Equirrectangular Plana (2:1)"
        >
          <Map className="w-3.5 h-3.5 text-cyan-400" />
          <span>Plano 2:1</span>
        </button>

        <button
          onClick={() => onViewModeChange('split')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
            viewMode === 'split'
              ? 'bg-studio-700 text-white shadow-sm font-semibold'
              : 'text-gray-400 hover:text-white'
          }`}
          title="Vista Dividida (Ambas pantallas)"
        >
          <Columns className="w-3.5 h-3.5 text-amber-400" />
          <span>Dividida</span>
        </button>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">
        <input
          id="file-upload-input"
          name="file-upload-input"
          aria-label="Subir foto 360"
          ref={fileInputRef}
          type="file"
          accept="image/*,.insp"
          onChange={handleFileChange}
          className="hidden"
        />

        <button
          onClick={() => fileInputRef.current?.click()}
          className="flex items-center gap-1.5 bg-studio-700 hover:bg-studio-600 text-gray-200 hover:text-white border border-white/10 px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
        >
          <Upload className="w-3.5 h-3.5 text-studio-accent" />
          <span>Subir Foto 360</span>
        </button>

        <button
          onClick={onLoadDemo}
          className="flex items-center gap-1.5 bg-studio-700/60 hover:bg-studio-700 text-gray-300 hover:text-white border border-white/5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all"
          title="Cargar panorama de prueba"
        >
          <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
          <span>Demo</span>
        </button>

        <button
          onClick={onOpenExport}
          className="flex items-center gap-1.5 bg-studio-accent hover:bg-studio-accent/90 text-studio-900 px-4 py-1.5 rounded-lg text-xs font-bold transition-all shadow-md shadow-studio-accent/20 active:scale-95"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Exportar 360</span>
        </button>
      </div>
    </header>
  );
};
