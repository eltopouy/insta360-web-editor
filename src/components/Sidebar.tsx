import React, { useState } from 'react';
import {
  Orientation,
  ColorAdjustments as ColorAdjustmentsType,
  NadirPatchConfig,
} from '../types';
import { OrientationControls } from './OrientationControls';
import { NadirPatchControls } from './NadirPatchControls';
import { ColorAdjustments } from './ColorAdjustments';
import { ReframeTool } from './ReframeTool';
import { useTranslation } from '../i18n/I18nContext';
import { Camera, CircleDot, Rotate3d, Sliders } from 'lucide-react';

interface SidebarProps {
  orientation: Orientation;
  onOrientationChange: (updated: Partial<Orientation>) => void;
  onResetOrientation: () => void;
  onAutoLevel: () => void;

  colorAdjustments: ColorAdjustmentsType;
  onColorChange: (updated: Partial<ColorAdjustmentsType>) => void;
  onResetColors: () => void;

  nadirPatch: NadirPatchConfig;
  onNadirChange: (updated: Partial<NadirPatchConfig>) => void;

  onCaptureReframe: (aspect: string, fov: number) => void;
  is3dViewActive: boolean;
  onSwitchTo3dView: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  orientation,
  onOrientationChange,
  onResetOrientation,
  onAutoLevel,
  colorAdjustments,
  onColorChange,
  onResetColors,
  nadirPatch,
  onNadirChange,
  onCaptureReframe,
  is3dViewActive,
  onSwitchTo3dView,
}) => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'orient' | 'nadir' | 'color' | 'reframe'>('orient');

  const tabs = [
    { id: 'orient', label: t('tabOrientation'), icon: Rotate3d },
    { id: 'nadir', label: t('tabNadir'), icon: CircleDot },
    { id: 'color', label: t('tabColor'), icon: Sliders },
    { id: 'reframe', label: t('tabReframe'), icon: Camera },
  ] as const;

  return (
    <aside className="w-80 bg-studio-800 border-l border-white/10 flex flex-col shrink-0 select-none overflow-hidden z-20">
      {/* Tab Navigation */}
      <div className="flex border-b border-white/10 bg-studio-900/60 p-1 gap-1">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex-1 py-2 rounded-md flex flex-col items-center justify-center gap-1 text-[11px] font-medium transition-all ${
              activeTab === id
                ? 'bg-studio-700 text-studio-accent font-bold shadow-sm'
                : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
            }`}
          >
            <Icon className="w-4 h-4" />
            <span>{label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content Container */}
      <div className="flex-1 overflow-y-auto p-4">
        {activeTab === 'orient' && (
          <OrientationControls
            orientation={orientation}
            onChange={onOrientationChange}
            onReset={onResetOrientation}
            onAutoLevel={onAutoLevel}
          />
        )}

        {activeTab === 'nadir' && (
          <NadirPatchControls
            config={nadirPatch}
            onChange={onNadirChange}
          />
        )}

        {activeTab === 'color' && (
          <ColorAdjustments
            adjustments={colorAdjustments}
            onChange={onColorChange}
            onReset={onResetColors}
          />
        )}

        {activeTab === 'reframe' && (
          <ReframeTool
            onCapture={onCaptureReframe}
            is3dViewActive={is3dViewActive}
            onSwitchTo3dView={onSwitchTo3dView}
          />
        )}
      </div>

      {/* Quick Status Bar at bottom of sidebar */}
      <div className="p-3 bg-studio-900/80 border-t border-white/10 text-[10px] font-mono text-gray-400 flex items-center justify-between">
        <span>Y: {orientation.yaw}° • P: {orientation.pitch}° • R: {orientation.roll}°</span>
        <span className="text-studio-accent font-semibold">LISTO</span>
      </div>
    </aside>
  );
};
