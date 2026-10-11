import React from 'react';
import { StitchingConfig } from '../types';
import { useTranslation } from '../i18n/I18nContext';
import {
  Layers,
  Globe,
  RotateCcw,
  Sparkles,
  SlidersHorizontal,
  Compass,
  CheckCircle2,
} from 'lucide-react';

interface StitchingControlsProps {
  config: StitchingConfig;
  onChange: (updated: Partial<StitchingConfig>) => void;
  onReset: () => void;
  onLoadDualFisheyeDemo: () => void;
  onLoadEquirectDemo: () => void;
}

export const StitchingControls: React.FC<StitchingControlsProps> = ({
  config,
  onChange,
  onReset,
  onLoadDualFisheyeDemo,
  onLoadEquirectDemo,
}) => {
  const { t } = useTranslation();

  return (
    <div className="space-y-5 text-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-studio-accent" />
          <h2 className="text-sm font-semibold tracking-wide uppercase">{t('stitchingTitle')}</h2>
        </div>
        <button
          onClick={onReset}
          className="flex items-center gap-1 text-xs text-gray-400 hover:text-white transition-colors px-2 py-1 rounded bg-white/5 hover:bg-white/10"
          title={t('resetStitching')}
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>{t('resetButton')}</span>
        </button>
      </div>

      <p className="text-xs text-gray-400 leading-relaxed">
        {t('stitchingDesc')}
      </p>

      {/* Projection Mode Selector */}
      <div className="space-y-2">
        <label className="text-xs font-semibold text-gray-300 flex items-center justify-between">
          <span>{t('inputProjection')}</span>
          <span className="text-[10px] text-studio-accent font-mono font-bold">
            {config.projection === 'dual_fisheye' ? 'DUAL-FISHEYE' : 'EQUIRECTANGULAR'}
          </span>
        </label>

        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => onChange({ projection: 'equirectangular' })}
            className={`p-3 rounded-lg border text-left transition-all flex flex-col gap-1.5 ${
              config.projection === 'equirectangular'
                ? 'bg-studio-accent/15 border-studio-accent text-white shadow-sm ring-1 ring-studio-accent/30'
                : 'bg-studio-900/60 border-white/10 text-gray-400 hover:text-gray-200 hover:bg-white/5'
            }`}
          >
            <div className="flex items-center justify-between">
              <Globe className={`w-4 h-4 ${config.projection === 'equirectangular' ? 'text-studio-accent' : 'text-gray-400'}`} />
              {config.projection === 'equirectangular' && <CheckCircle2 className="w-3.5 h-3.5 text-studio-accent" />}
            </div>
            <div className="text-xs font-semibold">{t('projEquirectangular')}</div>
            <div className="text-[10px] text-gray-400 leading-tight">2:1 360 Panorama</div>
          </button>

          <button
            type="button"
            onClick={() => onChange({ projection: 'dual_fisheye' })}
            className={`p-3 rounded-lg border text-left transition-all flex flex-col gap-1.5 ${
              config.projection === 'dual_fisheye'
                ? 'bg-studio-accent/15 border-studio-accent text-white shadow-sm ring-1 ring-studio-accent/30'
                : 'bg-studio-900/60 border-white/10 text-gray-400 hover:text-gray-200 hover:bg-white/5'
            }`}
          >
            <div className="flex items-center justify-between">
              <Sparkles className={`w-4 h-4 ${config.projection === 'dual_fisheye' ? 'text-studio-accent' : 'text-gray-400'}`} />
              {config.projection === 'dual_fisheye' && <CheckCircle2 className="w-3.5 h-3.5 text-studio-accent" />}
            </div>
            <div className="text-xs font-semibold">{t('projDualFisheye')}</div>
            <div className="text-[10px] text-gray-400 leading-tight">Insta360 Raw Lenses</div>
          </button>
        </div>
      </div>

      {/* Quick Demo Loaders */}
      <div className="p-3 bg-studio-900/60 rounded-lg border border-white/10 space-y-2">
        <div className="text-[11px] font-semibold text-gray-300">Demos de Prueba</div>
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={onLoadDualFisheyeDemo}
            className="px-2.5 py-1.5 text-[11px] font-medium bg-studio-700/80 hover:bg-studio-600 text-studio-accent hover:text-white rounded border border-studio-accent/30 transition-all text-center"
          >
            {t('loadDualFisheyeDemo')}
          </button>
          <button
            type="button"
            onClick={onLoadEquirectDemo}
            className="px-2.5 py-1.5 text-[11px] font-medium bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white rounded border border-white/10 transition-all text-center"
          >
            {t('loadEquirectDemo')}
          </button>
        </div>
      </div>

      {/* Dual-Fisheye Specific Optical Calibration Sliders */}
      {config.projection === 'dual_fisheye' && (
        <div className="space-y-4 pt-2">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-studio-accent border-b border-studio-accent/20 pb-1">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>{t('stitchingActive')}</span>
          </div>

          {/* Lens FOV */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <span className="text-gray-300">{t('lensFov')}</span>
              <span className="font-mono text-studio-accent">{config.lensFov.toFixed(1)}°</span>
            </div>
            <input
              type="range"
              min="180"
              max="220"
              step="0.5"
              value={config.lensFov}
              onChange={(e) => onChange({ lensFov: parseFloat(e.target.value) })}
              className="w-full accent-studio-accent h-1.5 bg-studio-900 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-gray-500 font-mono">
              <span>180°</span>
              <span>200° (Insta360 Nativo)</span>
              <span>220°</span>
            </div>
          </div>

          {/* Blend Angle / Feather */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <span className="text-gray-300">{t('blendAngle')}</span>
              <span className="font-mono text-studio-accent">{config.blendAngle.toFixed(1)}°</span>
            </div>
            <input
              type="range"
              min="2"
              max="25"
              step="0.5"
              value={config.blendAngle}
              onChange={(e) => onChange({ blendAngle: parseFloat(e.target.value) })}
              className="w-full accent-studio-accent h-1.5 bg-studio-900 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-gray-500 font-mono">
              <span>2° (Nítido)</span>
              <span>10° (Óptimo)</span>
              <span>25° (Suave)</span>
            </div>
          </div>

          {/* Radius Scale */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <span className="text-gray-300">{t('radiusScale')}</span>
              <span className="font-mono text-studio-accent">{(config.radiusScale * 100).toFixed(1)}%</span>
            </div>
            <input
              type="range"
              min="0.90"
              max="1.10"
              step="0.002"
              value={config.radiusScale}
              onChange={(e) => onChange({ radiusScale: parseFloat(e.target.value) })}
              className="w-full accent-studio-accent h-1.5 bg-studio-900 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          {/* Lens Micro Alignment */}
          <div className="space-y-3 pt-2 border-t border-white/10">
            <div className="text-xs font-semibold text-gray-300 flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-studio-accent" />
              <span>{t('lensAlignment')}</span>
            </div>

            {/* Front Lens */}
            <div className="p-2.5 bg-studio-900/80 rounded-lg border border-white/5 space-y-2">
              <div className="text-[11px] font-medium text-gray-300">{t('frontLens')}</div>
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px]">
                    <span className="text-gray-400">{t('offsetX')}</span>
                    <span className="font-mono text-gray-300">{config.centerOffsetX1.toFixed(3)}</span>
                  </div>
                  <input
                    type="range"
                    min="-0.04"
                    max="0.04"
                    step="0.001"
                    value={config.centerOffsetX1}
                    onChange={(e) => onChange({ centerOffsetX1: parseFloat(e.target.value) })}
                    className="w-full accent-studio-accent h-1 bg-studio-700 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px]">
                    <span className="text-gray-400">{t('offsetY')}</span>
                    <span className="font-mono text-gray-300">{config.centerOffsetY1.toFixed(3)}</span>
                  </div>
                  <input
                    type="range"
                    min="-0.04"
                    max="0.04"
                    step="0.001"
                    value={config.centerOffsetY1}
                    onChange={(e) => onChange({ centerOffsetY1: parseFloat(e.target.value) })}
                    className="w-full accent-studio-accent h-1 bg-studio-700 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Rear Lens */}
            <div className="p-2.5 bg-studio-900/80 rounded-lg border border-white/5 space-y-2">
              <div className="text-[11px] font-medium text-gray-300">{t('rearLens')}</div>
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px]">
                    <span className="text-gray-400">{t('offsetX')}</span>
                    <span className="font-mono text-gray-300">{config.centerOffsetX2.toFixed(3)}</span>
                  </div>
                  <input
                    type="range"
                    min="-0.04"
                    max="0.04"
                    step="0.001"
                    value={config.centerOffsetX2}
                    onChange={(e) => onChange({ centerOffsetX2: parseFloat(e.target.value) })}
                    className="w-full accent-studio-accent h-1 bg-studio-700 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px]">
                    <span className="text-gray-400">{t('offsetY')}</span>
                    <span className="font-mono text-gray-300">{config.centerOffsetY2.toFixed(3)}</span>
                  </div>
                  <input
                    type="range"
                    min="-0.04"
                    max="0.04"
                    step="0.001"
                    value={config.centerOffsetY2}
                    onChange={(e) => onChange({ centerOffsetY2: parseFloat(e.target.value) })}
                    className="w-full accent-studio-accent h-1 bg-studio-700 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Equirectangular Info Callout */}
      {config.projection === 'equirectangular' && (
        <div className="p-3 bg-studio-900/70 border border-white/10 rounded-lg text-[11px] text-gray-400 space-y-1.5 leading-relaxed">
          <div className="font-semibold text-studio-accent flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{t('stitchingEquirectActive')}</span>
          </div>
          <p>
            El motor gráfico renderiza con repetición de textura continua en $2\pi$ (`THREE.RepeatWrapping` y filtrado lineal) para evitar artefactos de costura o desenfoque mipmap al rotar la orientación horizontal (Yaw).
          </p>
        </div>
      )}
    </div>
  );
};
