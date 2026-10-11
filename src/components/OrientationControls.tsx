import React from 'react';
import { Orientation } from '../types';
import { useTranslation } from '../i18n/I18nContext';
import { Compass, Rotate3d, RotateCcw, ShieldCheck } from 'lucide-react';

interface OrientationControlsProps {
  orientation: Orientation;
  onChange: (updated: Partial<Orientation>) => void;
  onReset: () => void;
  onAutoLevel: () => void;
}

export const OrientationControls: React.FC<OrientationControlsProps> = ({
  orientation,
  onChange,
  onReset,
  onAutoLevel,
}) => {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-studio-accent flex items-center gap-1.5">
          <Rotate3d className="w-4 h-4" />
          {t('orientationTitle')}
        </h3>
        <button
          onClick={onReset}
          className="text-[11px] text-gray-400 hover:text-white flex items-center gap-1 transition-colors"
          title={t('resetButton')}
        >
          <RotateCcw className="w-3 h-3" />
          {t('resetButton')}
        </button>
      </div>

      {/* Yaw / Heading (Giro Horizontal / Centro) */}
      <div className="space-y-2 bg-studio-800/60 p-3 rounded-lg border border-white/5">
        <div className="flex items-center justify-between text-xs">
          <label htmlFor="yaw-number" className="font-semibold text-gray-200 flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-studio-accent" />
            <span>{t('yawLabel')}</span>
          </label>
          <div className="flex items-center gap-1">
            <input
              id="yaw-number"
              name="yaw"
              type="number"
              min={-180}
              max={180}
              step="any"
              value={orientation.yaw}
              onChange={(e) => onChange({ yaw: Number(e.target.value) })}
              className="w-14 bg-studio-900 border border-white/10 rounded px-1.5 py-0.5 text-right font-mono text-xs text-studio-accent"
            />
            <span className="text-gray-400 font-mono text-xs">°</span>
          </div>
        </div>
        <input
          id="yaw-range"
          name="yaw-range"
          type="range"
          min={-180}
          max={180}
          step={0.5}
          value={orientation.yaw}
          onChange={(e) => onChange({ yaw: Number(e.target.value) })}
          className="w-full"
        />
        <div className="flex justify-between text-[10px] text-gray-400 font-mono pt-0.5">
          <span>-180° ({t('yawSouth')})</span>
          <span className="text-studio-accent">{t('yawNorth')}</span>
          <span>+180° ({t('yawSouth')})</span>
        </div>
        {/* Quick Yaw shifts */}
        <div className="flex gap-1.5 pt-1">
          {[-90, 0, 90, 180].map((deg) => (
            <button
              key={deg}
              onClick={() => onChange({ yaw: deg })}
              className={`flex-1 py-1 rounded text-[10px] font-mono border transition-colors ${
                Math.round(orientation.yaw) === deg
                  ? 'bg-studio-accent text-studio-900 font-bold border-studio-accent'
                  : 'bg-studio-900/80 border-white/10 text-gray-400 hover:text-white'
              }`}
            >
              {deg}°
            </button>
          ))}
        </div>
      </div>

      {/* Pitch (Inclinación Vertical) */}
      <div className="space-y-2 bg-studio-800/60 p-3 rounded-lg border border-white/5">
        <div className="flex items-center justify-between text-xs">
          <label htmlFor="pitch-number" className="font-semibold text-gray-200">
            <span>{t('pitchLabel')}</span>
          </label>
          <div className="flex items-center gap-1">
            <input
              id="pitch-number"
              name="pitch"
              type="number"
              min={-90}
              max={90}
              step="any"
              value={orientation.pitch}
              onChange={(e) => onChange({ pitch: Number(e.target.value) })}
              className="w-14 bg-studio-900 border border-white/10 rounded px-1.5 py-0.5 text-right font-mono text-xs text-studio-accent"
            />
            <span className="text-gray-400 font-mono text-xs">°</span>
          </div>
        </div>
        <input
          id="pitch-range"
          name="pitch-range"
          type="range"
          min={-90}
          max={90}
          step={0.5}
          value={orientation.pitch}
          onChange={(e) => onChange({ pitch: Number(e.target.value) })}
          className="w-full"
        />
        <div className="flex justify-between text-[10px] text-gray-400 font-mono pt-0.5">
          <span>{t('pitchGround')}</span>
          <span>{t('pitchLevel')}</span>
          <span>{t('pitchZenith')}</span>
        </div>
      </div>

      {/* Roll (Nivel de Horizonte) */}
      <div className="space-y-2 bg-studio-800/60 p-3 rounded-lg border border-white/5">
        <div className="flex items-center justify-between text-xs">
          <label htmlFor="roll-number" className="font-semibold text-gray-200">
            <span>{t('rollLabel')}</span>
          </label>
          <div className="flex items-center gap-1">
            <input
              id="roll-number"
              name="roll"
              type="number"
              min={-45}
              max={45}
              step="any"
              value={orientation.roll}
              onChange={(e) => onChange({ roll: Number(e.target.value) })}
              className="w-14 bg-studio-900 border border-white/10 rounded px-1.5 py-0.5 text-right font-mono text-xs text-studio-accent"
            />
            <span className="text-gray-400 font-mono text-xs">°</span>
          </div>
        </div>
        <input
          id="roll-range"
          name="roll-range"
          type="range"
          min={-45}
          max={45}
          step={0.2}
          value={orientation.roll}
          onChange={(e) => onChange({ roll: Number(e.target.value) })}
          className="w-full"
        />
        <div className="flex justify-between text-[10px] text-gray-400 font-mono pt-0.5">
          <span>-45°</span>
          <span className="text-studio-accent">{t('rollLevel')}</span>
          <span>+45°</span>
        </div>
      </div>

      {/* Quick Leveling Action */}
      <button
        onClick={onAutoLevel}
        className="w-full py-2 bg-studio-700 hover:bg-studio-600 border border-white/10 rounded-lg text-xs font-medium text-gray-200 hover:text-white transition-all flex items-center justify-center gap-2"
      >
        <ShieldCheck className="w-4 h-4 text-studio-accent" />
        {t('autoLevelButton')}
      </button>
    </div>
  );
};
