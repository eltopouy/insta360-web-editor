import React from 'react';
import { ColorAdjustments as ColorAdjustmentsType } from '../types';
import { useTranslation } from '../i18n/I18nContext';
import { Sliders, RotateCcw } from 'lucide-react';

interface ColorAdjustmentsProps {
  adjustments: ColorAdjustmentsType;
  onChange: (updated: Partial<ColorAdjustmentsType>) => void;
  onReset: () => void;
}

export const ColorAdjustments: React.FC<ColorAdjustmentsProps> = ({
  adjustments,
  onChange,
  onReset,
}) => {
  const { t } = useTranslation();

  const fields = [
    { id: 'exposure', label: t('colorExposure'), min: -100, max: 100 },
    { id: 'brightness', label: t('colorBrightness'), min: -100, max: 100 },
    { id: 'contrast', label: t('colorContrast'), min: -100, max: 100 },
    { id: 'saturation', label: t('colorSaturation'), min: -100, max: 100 },
    { id: 'warmth', label: t('colorWarmth'), min: -100, max: 100 },
  ] as const;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-studio-accent flex items-center gap-1.5">
          <Sliders className="w-4 h-4" />
          {t('colorTitle')}
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

      <div className="space-y-4 bg-studio-800/60 p-3 rounded-lg border border-white/5">
        {fields.map(({ id, label, min, max }) => {
          const val = adjustments[id];
          return (
            <div key={id} className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <label htmlFor={`color-${id}`} className="text-gray-300 font-medium">{label}</label>
                <span className="font-mono text-studio-accent">
                  {val > 0 ? `+${val}` : val}
                </span>
              </div>
              <input
                id={`color-${id}`}
                name={`color-${id}`}
                type="range"
                min={min}
                max={max}
                value={val}
                onChange={(e) => onChange({ [id]: Number(e.target.value) })}
                className="w-full"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
