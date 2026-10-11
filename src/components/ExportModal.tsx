import React, { useState } from 'react';
import * as THREE from 'three';
import { Orientation, ColorAdjustments, NadirPatchConfig } from '../types';
import { degToRad } from '../utils/sphericalMath';
import {
  EquirectangularFragmentShader,
  EquirectangularVertexShader,
  createShaderRotationMatrix,
} from '../utils/equirectangularShader';
import { injectGPanoMetadataToBlob } from '../utils/gpanoMetadata';
import { Check, Download, Loader2, Sparkles, X } from 'lucide-react';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  sourceWidth: number;
  sourceHeight: number;
  orientation: Orientation;
  colorAdjustments: ColorAdjustments;
  nadirPatch: NadirPatchConfig;
}

export const ExportModal: React.FC<ExportModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
  sourceWidth,
  sourceHeight,
  orientation,
  colorAdjustments,
  nadirPatch,
}) => {
  const [resolution, setResolution] = useState<'orig' | '8k' | '5.7k' | '4k' | '2k'>('orig');
  const [format, setFormat] = useState<'jpeg' | 'png'>('jpeg');
  const [quality, setQuality] = useState(0.95);
  const [embedGPano, setEmbedGPano] = useState(true);
  const [isExporting, setIsExporting] = useState(false);
  const [exportProgress, setExportProgress] = useState(0);

  if (!isOpen) return null;

  const getTargetDimensions = (): { width: number; height: number } => {
    switch (resolution) {
      case '8k': return { width: 7680, height: 3840 };
      case '5.7k': return { width: 5760, height: 2880 }; // Native Insta360 X3 / X4
      case '4k': return { width: 3840, height: 1920 };
      case '2k': return { width: 2048, height: 1024 };
      case 'orig':
      default:
        return {
          width: sourceWidth || 4096,
          height: sourceHeight || 2048,
        };
    }
  };

  const handleExport = async () => {
    setIsExporting(true);
    setExportProgress(10);

    try {
      const { width, height } = getTargetDimensions();

      // Setup offscreen WebGL renderer
      const offscreenCanvas = document.createElement('canvas');
      offscreenCanvas.width = width;
      offscreenCanvas.height = height;

      const renderer = new THREE.WebGLRenderer({
        canvas: offscreenCanvas,
        antialias: true,
        preserveDrawingBuffer: true,
      });
      renderer.setSize(width, height);

      const scene = new THREE.Scene();
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

      // Load texture
      setExportProgress(30);
      const textureLoader = new THREE.TextureLoader();
      const texture = await new Promise<THREE.Texture>((resolve, reject) => {
        textureLoader.load(imageSrc, resolve, undefined, reject);
      });

      setExportProgress(50);
      const mat3 = createShaderRotationMatrix(orientation);

      const shaderMaterial = new THREE.ShaderMaterial({
        vertexShader: EquirectangularVertexShader,
        fragmentShader: EquirectangularFragmentShader,
        uniforms: {
          tSource: { value: texture },
          uRotationMatrix: { value: mat3 },
          uExposure: { value: colorAdjustments.exposure / 100 },
          uBrightness: { value: colorAdjustments.brightness / 100 },
          uContrast: { value: colorAdjustments.contrast / 100 },
          uSaturation: { value: colorAdjustments.saturation / 100 },
          uWarmth: { value: colorAdjustments.warmth / 100 },
          uNadirEnabled: { value: nadirPatch.enabled },
          uNadirRadius: { value: degToRad(nadirPatch.radius) },
          uNadirFeather: { value: nadirPatch.feather / 100 },
          uNadirMode: { value: nadirPatch.mode === 'color' ? 0 : nadirPatch.mode === 'blur' ? 1 : 2 },
          uNadirColor: { value: new THREE.Color(nadirPatch.color) },
        },
      });

      const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), shaderMaterial);
      scene.add(quad);

      renderer.render(scene, camera);
      setExportProgress(70);

      // Convert canvas to blob
      const mime = format === 'jpeg' ? 'image/jpeg' : 'image/png';
      const rawBlob = await new Promise<Blob | null>((resolve) => {
        offscreenCanvas.toBlob(resolve, mime, quality);
      });

      if (!rawBlob) throw new Error('No se pudo generar la imagen');

      let finalBlob = rawBlob;

      // Embed GPano XMP metadata if JPEG
      if (format === 'jpeg' && embedGPano) {
        setExportProgress(85);
        finalBlob = await injectGPanoMetadataToBlob(rawBlob, width, height);
      }

      setExportProgress(100);

      // Trigger browser download
      const downloadUrl = URL.createObjectURL(finalBlob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = `insta360_360edit_${width}x${height}_${Date.now()}.${format === 'jpeg' ? 'jpg' : 'png'}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(downloadUrl);

      // Cleanup
      renderer.dispose();
      texture.dispose();
      shaderMaterial.dispose();

      setTimeout(() => {
        setIsExporting(false);
        onClose();
      }, 500);
    } catch (err) {
      console.error(err);
      alert('Error al exportar la imagen');
      setIsExporting(false);
    }
  };

  const { width: targetW, height: targetH } = getTargetDimensions();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fadeIn">
      <div className="bg-studio-800 border border-white/10 rounded-xl w-full max-w-md overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-studio-900/50">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-studio-accent" />
            <h2 className="text-sm font-bold uppercase tracking-wider text-white">Exportar Foto 360</h2>
          </div>
          <button
            onClick={onClose}
            disabled={isExporting}
            className="text-gray-400 hover:text-white p-1 rounded-md hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-5">
          {/* Resolution Options */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-gray-300">Resolución de Salida</label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: 'orig', label: 'Original', desc: `${sourceWidth || 4096}×${sourceHeight || 2048}` },
                { id: '5.7k', label: '5.7K Insta360', desc: '5760×2880 (Nativa)' },
                { id: '8k', label: '8K Ultra HD', desc: '7680×3840' },
                { id: '4k', label: '4K Standard', desc: '3840×1920' },
              ].map((r) => (
                <button
                  key={r.id}
                  onClick={() => setResolution(r.id as any)}
                  className={`p-2.5 rounded-lg border text-left transition-all ${
                    resolution === r.id
                      ? 'bg-studio-accent/20 border-studio-accent text-white'
                      : 'bg-studio-900/60 border-white/10 text-gray-400 hover:border-white/30'
                  }`}
                >
                  <div className="text-xs font-bold text-gray-200">{r.label}</div>
                  <div className="text-[10px] font-mono text-gray-400">{r.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Format */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-gray-300">Formato de Archivo</label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: 'jpeg', label: 'JPEG (Recomendado)', desc: 'Ligero con metadatos GPano' },
                { id: 'png', label: 'PNG Sin Pérdida', desc: 'Máxima calidad sin compresión' },
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFormat(f.id as any)}
                  className={`p-2.5 rounded-lg border text-left transition-all ${
                    format === f.id
                      ? 'bg-studio-accent/20 border-studio-accent text-white'
                      : 'bg-studio-900/60 border-white/10 text-gray-400 hover:border-white/30'
                  }`}
                >
                  <div className="text-xs font-bold text-gray-200">{f.label}</div>
                  <div className="text-[10px] text-gray-400">{f.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* GPano XMP Checkbox (Only for JPEG) */}
          {format === 'jpeg' && (
            <label htmlFor="embed-gpano-toggle" className="flex items-start gap-3 bg-studio-900/70 p-3 rounded-lg border border-white/5 cursor-pointer">
              <input
                id="embed-gpano-toggle"
                name="embed-gpano-toggle"
                type="checkbox"
                checked={embedGPano}
                onChange={(e) => setEmbedGPano(e.target.checked)}
                className="mt-0.5 rounded border-gray-700 text-studio-accent focus:ring-studio-accent"
              />
              <div className="space-y-0.5 text-left">
                <span className="text-xs font-semibold text-gray-200 flex items-center gap-1.5">
                  Incrustar Metadatos Google Photo Sphere (GPano XMP)
                  <Check className="w-3.5 h-3.5 text-studio-accent" />
                </span>
                <p className="text-[10px] text-gray-400 leading-tight">
                  Permite que Facebook, Google Fotos, visores VR y apps reconozcan el archivo automáticamente como foto 360 interactiva.
                </p>
              </div>
            </label>
          )}

          {/* Progress bar if exporting */}
          {isExporting && (
            <div className="space-y-1.5 pt-2">
              <div className="flex justify-between text-xs font-mono text-gray-400">
                <span>Procesando en GPU...</span>
                <span>{exportProgress}%</span>
              </div>
              <div className="w-full bg-studio-900 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-studio-accent h-full transition-all duration-300"
                  style={{ width: `${exportProgress}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-5 py-4 bg-studio-900/80 border-t border-white/10 flex items-center justify-between">
          <div className="text-[11px] font-mono text-gray-400">
            Salida: {targetW} × {targetH} px
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              disabled={isExporting}
              className="px-4 py-2 rounded-lg text-xs font-medium text-gray-400 hover:text-white transition-colors"
            >
              Cancelar
            </button>
            <button
              onClick={handleExport}
              disabled={isExporting}
              className="px-5 py-2 bg-studio-accent hover:bg-studio-accent/90 text-studio-900 font-bold rounded-lg text-xs transition-all flex items-center gap-2 shadow-lg shadow-studio-accent/20 disabled:opacity-50"
            >
              {isExporting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Renderizando...</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Descargar Foto 360</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
