import React, { useRef } from 'react';
import { ViewMode } from '../types';
import { useTranslation } from '../i18n/I18nContext';
import { LanguageSelector } from './LanguageSelector';
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
  const { t } = useTranslation();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onFileUpload(e.target.files[0]);
      e.target.value = '';
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
              <span className="font-bold text-sm tracking-tight text-white">{t('appTitle')}</span>
              <span className="text-[10px] font-mono font-semibold px-1.5 py-0.2 bg-studio-accent/20 text-studio-accent rounded border border-studio-accent/30">
                {t('badgeInsta360')}
              </span>
            </div>
            <div className="text-[11px] text-gray-400 font-mono truncate max-w-[200px]" title={fileName}>
              {fileName}
            </div>
          </div>
        </div>

        {/* MCP AI Status Badge */}
        <div
          className={`hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono border transition-all ${
            isMcpConnected
              ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.15)]'
              : 'bg-studio-900/40 border-white/5 text-gray-400'
          }`}
          title={isMcpConnected ? t('mcpTooltipConnected') : t('mcpTooltipOffline')}
        >
          <Bot className={`w-3.5 h-3.5 ${isMcpConnected ? 'text-emerald-400' : 'text-gray-500'}`} />
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              isMcpConnected ? 'bg-emerald-400 animate-pulse' : 'bg-gray-600'
            }`}
          />
          <span className="font-semibold">
            {isMcpConnected ? t('mcpConnected') : t('mcpOffline')}
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
          title={t('view3dSphere')}
        >
          <Eye className="w-3.5 h-3.5 text-studio-accent" />
          <span>{t('view3dSphere')}</span>
        </button>

        <button
          onClick={() => onViewModeChange('equirectangular')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
            viewMode === 'equirectangular'
              ? 'bg-studio-700 text-white shadow-sm font-semibold'
              : 'text-gray-400 hover:text-white'
          }`}
          title={t('view2dEqui')}
        >
          <Map className="w-3.5 h-3.5 text-cyan-400" />
          <span>{t('view2dEqui')}</span>
        </button>

        <button
          onClick={() => onViewModeChange('split')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
            viewMode === 'split'
              ? 'bg-studio-700 text-white shadow-sm font-semibold'
              : 'text-gray-400 hover:text-white'
          }`}
          title={t('viewSplit')}
        >
          <Columns className="w-3.5 h-3.5 text-amber-400" />
          <span>{t('viewSplit')}</span>
        </button>
      </div>

      {/* Actions & Language Selector */}
      <div className="flex items-center gap-2">
        <input
          id="file-upload-input"
          name="file-upload-input"
          aria-label={t('upload360')}
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
          <span className="hidden sm:inline">{t('upload360')}</span>
        </button>

        <button
          onClick={onLoadDemo}
          className="flex items-center gap-1.5 bg-studio-700/60 hover:bg-studio-700 text-gray-300 hover:text-white border border-white/5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all"
          title={t('loadDemo')}
        >
          <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
          <span className="hidden sm:inline">{t('loadDemo')}</span>
        </button>

        <button
          onClick={onOpenExport}
          className="flex items-center gap-1.5 bg-studio-accent hover:bg-studio-accent/90 text-studio-900 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all shadow-md shadow-studio-accent/20 active:scale-95"
        >
          <Download className="w-3.5 h-3.5" />
          <span>{t('export360')}</span>
        </button>

        {/* Language Selector Dropdown */}
        <LanguageSelector />
      </div>
    </header>
  );
};
