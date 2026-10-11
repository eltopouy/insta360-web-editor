import React, { useState } from 'react';
import { Camera, Download, Globe2, Sparkles } from 'lucide-react';

interface ReframeToolProps {
  onCapture: (aspectRatio: string, fov: number) => void;
  is3dViewActive: boolean;
  onSwitchTo3dView: () => void;
}

export const ReframeTool: React.FC<ReframeToolProps> = ({
  onCapture,
  is3dViewActive,
  onSwitchTo3dView,
}) => {
  const [aspectRatio, setAspectRatio] = useState<'16:9' | '9:16' | '1:1' | '4:3'>('16:9');
  const [fov, setFov] = useState(75);

  const presets = [
    { label: 'Tiny Planet', fov: 150, desc: 'Efecto planeta esférico' },
    { label: 'Gran Angular', fov: 110, desc: 'Amplio campo de visión' },
    { label: 'Natural / 50mm', fov: 65, desc: 'Perspectiva del ojo humano' },
    { label: 'Teleobjetivo', fov: 40, desc: 'Acercamiento sin distorsión' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-studio-accent flex items-center gap-1.5">
          <Camera className="w-4 h-4" />
          Reencuadre 2D (Foto Plana)
        </h3>
      </div>

      <p className="text-[11px] text-gray-400 leading-relaxed">
        Extrae fotografías tradicionales de alta resolución desde la foto 360 con la dirección y campo de visión que desees.
      </p>

      {!is3dViewActive && (
        <div className="bg-amber-500/10 border border-amber-500/30 p-2.5 rounded-lg flex items-center justify-between">
          <span className="text-xs text-amber-300">Se recomienda usar la vista 3D Esfera para encuadrar</span>
          <button
            onClick={onSwitchTo3dView}
            className="text-xs bg-amber-500 hover:bg-amber-400 text-black font-semibold px-2 py-1 rounded"
          >
            Activar 3D
          </button>
        </div>
      )}

      {/* Aspect Ratio */}
      <div className="space-y-2 bg-studio-800/60 p-3 rounded-lg border border-white/5">
        <label className="text-xs font-semibold text-gray-200">Formato / Relación de Aspecto</label>
        <div className="grid grid-cols-4 gap-1.5">
          {(['16:9', '9:16', '1:1', '4:3'] as const).map((aspect) => (
            <button
              key={aspect}
              onClick={() => setAspectRatio(aspect)}
              className={`py-2 text-xs font-mono font-medium rounded border transition-colors flex flex-col items-center gap-0.5 ${
                aspectRatio === aspect
                  ? 'bg-studio-accent text-studio-900 font-bold border-studio-accent'
                  : 'bg-studio-900 border-white/10 text-gray-400 hover:text-white'
              }`}
            >
              <span>{aspect}</span>
              <span className="text-[9px] opacity-70">
                {aspect === '16:9' ? 'YouTube' : aspect === '9:16' ? 'Reels' : aspect === '1:1' ? 'Post' : 'Foto'}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* FOV */}
      <div className="space-y-3 bg-studio-800/60 p-3 rounded-lg border border-white/5">
        <div className="flex justify-between text-xs">
          <span className="text-gray-200 font-semibold">Campo de Visión (FOV / Zoom)</span>
          <span className="font-mono text-studio-accent">{fov}°</span>
        </div>
        <input
          type="range"
          min={30}
          max={150}
          step={1}
          value={fov}
          onChange={(e) => setFov(Number(e.target.value))}
          className="w-full"
        />

        {/* Presets */}
        <div className="grid grid-cols-2 gap-1.5 pt-1">
          {presets.map((p) => (
            <button
              key={p.label}
              onClick={() => setFov(p.fov)}
              className={`p-1.5 text-left rounded border transition-colors ${
                fov === p.fov
                  ? 'bg-studio-accent/20 border-studio-accent text-studio-accent'
                  : 'bg-studio-900 border-white/10 text-gray-300 hover:border-white/30'
              }`}
            >
              <div className="text-[11px] font-semibold">{p.label}</div>
              <div className="text-[9px] text-gray-400">{p.fov}° • {p.desc}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Snapshot Action */}
      <button
        onClick={() => onCapture(aspectRatio, fov)}
        className="w-full py-3 bg-studio-accent hover:bg-studio-accent/90 active:scale-[0.99] text-studio-900 font-bold rounded-lg text-xs transition-all shadow-lg shadow-studio-accent/20 flex items-center justify-center gap-2"
      >
        <Download className="w-4 h-4" />
        <span>Capturar y Descargar Foto 2D ({aspectRatio})</span>
      </button>
    </div>
  );
};
