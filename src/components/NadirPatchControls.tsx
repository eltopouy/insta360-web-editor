import React from 'react';
import { NadirPatchConfig } from '../types';
import { useTranslation } from '../i18n/I18nContext';
import { CircleDot, Sparkles } from 'lucide-react';

interface NadirPatchControlsProps {
  config: NadirPatchConfig;
  onChange: (updated: Partial<NadirPatchConfig>) => void;
}

export const NadirPatchControls: React.FC<NadirPatchControlsProps> = ({ config, onChange }) => {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-studio-accent flex items-center gap-1.5">
          <CircleDot className="w-4 h-4" />
          {t('nadirTitle')}
        </h3>
        <label htmlFor="nadir-toggle" className="relative inline-flex items-center cursor-pointer">
          <input
            id="nadir-toggle"
            name="nadir-toggle"
            type="checkbox"
            checked={config.enabled}
            onChange={(e) => onChange({ enabled: e.target.checked })}
            className="sr-only peer"
            aria-label={t('nadirEnableAria')}
          />
          <div className="w-9 h-5 bg-studio-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-studio-accent"></div>
        </label>
      </div>

      <p className="text-[11px] text-gray-400 leading-relaxed">
        {t('nadirDescription')}
      </p>

      {config.enabled && (
        <div className="space-y-4 bg-studio-800/60 p-3 rounded-lg border border-white/5 animate-fadeIn">
          {/* Patch Mode */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-300">{t('nadirCoverageMode')}</label>
            <div className="grid grid-cols-3 gap-1.5">
              {[
                { id: 'blur', label: t('nadirModeBlur') },
                { id: 'mirror', label: t('nadirModeMirror') },
                { id: 'color', label: t('nadirModeColor') },
              ].map((m) => (
                <button
                  key={m.id}
                  onClick={() => onChange({ mode: m.id as any })}
                  className={`py-1.5 text-xs font-medium rounded border transition-colors ${
                    config.mode === m.id
                      ? 'bg-studio-accent text-studio-900 font-bold border-studio-accent'
                      : 'bg-studio-900 border-white/10 text-gray-400 hover:text-white'
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>

          {/* Radius */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <label htmlFor="nadir-radius" className="text-gray-300">{t('nadirRadius')}</label>
              <span className="font-mono text-studio-accent">{config.radius}°</span>
            </div>
            <input
              id="nadir-radius"
              name="nadir-radius"
              type="range"
              min={5}
              max={35}
              step={1}
              value={config.radius}
              onChange={(e) => onChange({ radius: Number(e.target.value) })}
              className="w-full"
            />
          </div>

          {/* Feathering */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <label htmlFor="nadir-feather" className="text-gray-300">{t('nadirFeather')}</label>
              <span className="font-mono text-studio-accent">{config.feather}%</span>
            </div>
            <input
              id="nadir-feather"
              name="nadir-feather"
              type="range"
              min={0}
              max={100}
              step={5}
              value={config.feather}
              onChange={(e) => onChange({ feather: Number(e.target.value) })}
              className="w-full"
            />
          </div>

          {/* Color Picker if color mode */}
          {config.mode === 'color' && (
            <div className="flex items-center justify-between text-xs pt-2 border-t border-white/10">
              <label htmlFor="nadir-color" className="text-gray-300">{t('nadirFillColor')}</label>
              <div className="flex items-center gap-2">
                <input
                  id="nadir-color"
                  name="nadir-color"
                  type="color"
                  value={config.color}
                  onChange={(e) => onChange({ color: e.target.value })}
                  className="w-8 h-8 rounded border border-white/20 bg-transparent cursor-pointer"
                />
                <span className="font-mono text-xs text-gray-400">{config.color}</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
