import React, { useState } from 'react';
import * as THREE from 'three';
import { Orientation, ColorAdjustments, NadirPatchConfig, StitchingConfig } from '../types';
import { degToRad, combineOrientations, formatDegrees } from '../utils/sphericalMath';
import {
  EquirectangularFragmentShader,
  EquirectangularVertexShader,
  createShaderRotationMatrix,
} from '../utils/equirectangularShader';
import { injectGPanoMetadataToBlob } from '../utils/gpanoMetadata';
import { useTranslation } from '../i18n/I18nContext';
import { Camera, Check, Compass, Download, Globe, Loader2, Sparkles, X } from 'lucide-react';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  sourceWidth: number;
  sourceHeight: number;
  orientation: Orientation;
  activeCameraPose?: { lon: number; lat: number; fov: number };
  colorAdjustments: ColorAdjustments;
  nadirPatch: NadirPatchConfig;
  stitching: StitchingConfig;
  onBakeActiveViewToOrientation?: (baked: Orientation) => void;
  viewerRef?: React.MutableRefObject<{
    captureSnapshot: (aspect: string, fov: number) => string;
    getCurrentView?: () => { lon: number; lat: number; fov: number };
  } | null>;
}

export const ExportModal: React.FC<ExportModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
  sourceWidth,
  sourceHeight,
  orientation,
  activeCameraPose,
  colorAdjustments,
  nadirPatch,
  stitching,
  onBakeActiveViewToOrientation,
  viewerRef,
}) => {
  const { t } = useTranslation();

  // Export mode: 360 full equirectangular panorama OR 2D framed snapshot
  const [exportType, setExportType] = useState<'360' | '2d'>('360');
  const [aspectRatio2d, setAspectRatio2d] = useState<'16:9' | '9:16' | '1:1' | '4:3'>('16:9');

  const hasActiveCamera =
    Boolean(activeCameraPose) &&
    (Math.abs(activeCameraPose!.lon) > 0.05 || Math.abs(activeCameraPose!.lat) > 0.05);

  const [useActive3dView, setUseActive3dView] = useState<boolean>(true);

  // Compute effective orientation
  const effectiveOrientation: Orientation =
    hasActiveCamera && useActive3dView && activeCameraPose
      ? combineOrientations(orientation, activeCameraPose.lon, activeCameraPose.lat)
      : orientation;

  const [resolution, setResolution] = useState<'orig' | '8k' | '6k' | '5.7k' | '4k' | '2k'>('orig');
  const [format, setFormat] = useState<'jpeg' | 'png'>('jpeg');
  const [quality] = useState(0.95);
  const [embedGPano, setEmbedGPano] = useState(true);
  const [isExporting, setIsExporting] = useState(false);
  const [exportProgress, setExportProgress] = useState(0);

  if (!isOpen) return null;

  const getTargetDimensions = (): { width: number; height: number } => {
    switch (resolution) {
      case '8k': return { width: 7680, height: 3840 };
      case '6k': return { width: 6080, height: 3040 }; // Native Insta360 ONE R / RS
      case '5.7k': return { width: 5760, height: 2880 }; // Native Insta360 X3 / X4 / ONE X
      case '4k': return { width: 3840, height: 1920 };
      case '2k': return { width: 2048, height: 1024 };
      case 'orig':
      default:
        return {
          width: sourceWidth || 6080,
          height: sourceHeight || 3040,
        };
    }
  };

  const handleExport = async () => {
    setIsExporting(true);
    setExportProgress(10);

    try {
      if (exportType === '2d') {
        // Export 2D Reframe Snapshot
        setExportProgress(50);
        if (viewerRef?.current) {
          const fov = activeCameraPose?.fov || 75;
          const dataUrl = viewerRef.current.captureSnapshot(aspectRatio2d, fov);
          if (!dataUrl) throw new Error('No se pudo generar el encuadre 2D');

          setExportProgress(90);
          const link = document.createElement('a');
          link.href = dataUrl;
          link.download = `insta360_reframe_${aspectRatio2d.replace(':', 'x')}_${Date.now()}.jpg`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
        setExportProgress(100);
        setTimeout(() => {
          setIsExporting(false);
          onClose();
        }, 500);
        return;
      }

      // Export 360 Full Equirectangular with centered viewpoint
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
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.ClampToEdgeWrapping;
      texture.minFilter = THREE.LinearFilter;

      setExportProgress(50);
      // Generate exact rotation matrix from effective orientation
      const mat3 = createShaderRotationMatrix(effectiveOrientation);

      const shaderMaterial = new THREE.ShaderMaterial({
        vertexShader: EquirectangularVertexShader,
        fragmentShader: EquirectangularFragmentShader,
        uniforms: {
          tSource: { value: texture },
          uRotationMatrix: { value: mat3 },
          uInputProjection: { value: stitching.projection === 'dual_fisheye' ? 1 : 0 },
          uLensFovRad: { value: degToRad(stitching.lensFov) },
          uBlendAngleRad: { value: degToRad(stitching.blendAngle) },
          uCenterOffset1: { value: new THREE.Vector2(stitching.centerOffsetX1, stitching.centerOffsetY1) },
          uCenterOffset2: { value: new THREE.Vector2(stitching.centerOffsetX2, stitching.centerOffsetY2) },
          uRadiusScale: { value: stitching.radiusScale },
          uDistortionK1: { value: stitching.distortionK1 ?? 0 },
          uDistortionK2: { value: stitching.distortionK2 ?? 0 },
          uChromaticAbRed: { value: stitching.chromaticAbRed ?? 0 },
          uChromaticAbBlue: { value: stitching.chromaticAbBlue ?? 0 },
          uLensBaselineMm: { value: stitching.lensBaselineMm ?? 28 },
          uConvergenceDistance: { value: stitching.convergenceDistance ?? 2.5 },
          uExposureBalance: { value: stitching.exposureBalance ?? 0 },
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

      // If effective orientation changed due to active 3D camera, optionally persist to orientation state
      if (useActive3dView && hasActiveCamera && onBakeActiveViewToOrientation) {
        onBakeActiveViewToOrientation(effectiveOrientation);
      }

      setTimeout(() => {
        setIsExporting(false);
        onClose();
      }, 500);
    } catch (err) {
      console.error(err);
      alert(t('exportError'));
      setIsExporting(false);
    }
  };

  const { width: targetW, height: targetH } = getTargetDimensions();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fadeIn">
      <div className="bg-studio-800 border border-white/10 rounded-xl w-full max-w-lg overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-studio-900/50">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-studio-accent" />
            <h2 className="text-sm font-bold uppercase tracking-wider text-white">{t('exportModalTitle')}</h2>
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
        <div className="p-5 space-y-4 max-h-[75vh] overflow-y-auto">
          {/* Export Type Selection (360 vs 2D Snapshot) */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-300">{t('exportTypeLabel')}</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setExportType('360')}
                className={`p-3 rounded-lg border text-left transition-all flex flex-col gap-1 ${
                  exportType === '360'
                    ? 'bg-studio-accent/20 border-studio-accent text-white shadow-sm'
                    : 'bg-studio-900/60 border-white/10 text-gray-400 hover:border-white/30'
                }`}
              >
                <div className="flex items-center gap-1.5 text-xs font-bold text-gray-100">
                  <Globe className="w-4 h-4 text-studio-accent" />
                  <span>{t('exportType360')}</span>
                </div>
                <div className="text-[10px] text-gray-400 leading-tight">
                  {t('exportType360Desc')}
                </div>
              </button>

              <button
                onClick={() => setExportType('2d')}
                className={`p-3 rounded-lg border text-left transition-all flex flex-col gap-1 ${
                  exportType === '2d'
                    ? 'bg-studio-accent/20 border-studio-accent text-white shadow-sm'
                    : 'bg-studio-900/60 border-white/10 text-gray-400 hover:border-white/30'
                }`}
              >
                <div className="flex items-center gap-1.5 text-xs font-bold text-gray-100">
                  <Camera className="w-4 h-4 text-yellow-400" />
                  <span>{t('exportType2d')}</span>
                </div>
                <div className="text-[10px] text-gray-400 leading-tight">
                  {t('exportType2dDesc')}
                </div>
              </button>
            </div>
          </div>

          {/* Viewpoint Info Card */}
          <div className="bg-studio-900/80 border border-white/10 p-3.5 rounded-lg space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-gray-200 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-studio-accent" />
                <span>{t('exportViewpointTitle')}</span>
              </span>
              <div className="flex items-center gap-2 font-mono text-[11px] text-studio-accent">
                <span>Yaw: {formatDegrees(effectiveOrientation.yaw)}</span>
                <span>•</span>
                <span>Pitch: {formatDegrees(effectiveOrientation.pitch)}</span>
                <span>•</span>
                <span>Roll: {formatDegrees(effectiveOrientation.roll)}</span>
              </div>
            </div>

            {/* Toggle between Active 3D camera pose and Fixed orientation */}
            {hasActiveCamera && (
              <div className="pt-1 flex gap-2">
                <button
                  onClick={() => setUseActive3dView(true)}
                  className={`flex-1 py-1 px-2 rounded text-[11px] border font-mono transition-colors text-left flex items-center justify-between ${
                    useActive3dView
                      ? 'bg-studio-accent/20 border-studio-accent text-white'
                      : 'bg-studio-800 border-white/10 text-gray-400 hover:text-white'
                  }`}
                >
                  <span>{t('exportViewpointActive')}</span>
                  {useActive3dView && <Check className="w-3 h-3 text-studio-accent" />}
                </button>
                <button
                  onClick={() => setUseActive3dView(false)}
                  className={`flex-1 py-1 px-2 rounded text-[11px] border font-mono transition-colors text-left flex items-center justify-between ${
                    !useActive3dView
                      ? 'bg-studio-accent/20 border-studio-accent text-white'
                      : 'bg-studio-800 border-white/10 text-gray-400 hover:text-white'
                  }`}
                >
                  <span>{t('exportViewpointFixed')}</span>
                  {!useActive3dView && <Check className="w-3 h-3 text-studio-accent" />}
                </button>
              </div>
            )}

            {exportType === '360' && (
              <p className="text-[10px] text-gray-400 leading-tight">
                {t('exportBakeNotice')}
              </p>
            )}
          </div>

          {/* 2D Aspect Ratio (Only when 2D is selected) */}
          {exportType === '2d' && (
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-300">{t('reframeAspectRatio')}</label>
              <div className="grid grid-cols-4 gap-2">
                {(['16:9', '9:16', '1:1', '4:3'] as const).map((aspect) => (
                  <button
                    key={aspect}
                    onClick={() => setAspectRatio2d(aspect)}
                    className={`p-2 rounded-lg border text-center transition-all ${
                      aspectRatio2d === aspect
                        ? 'bg-studio-accent text-studio-900 font-bold border-studio-accent'
                        : 'bg-studio-900/60 border-white/10 text-gray-300 hover:border-white/30'
                    }`}
                  >
                    <div className="text-xs font-mono">{aspect}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Resolution Options (for 360 export) */}
          {exportType === '360' && (
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-300">{t('exportOutputResolution')}</label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'orig', label: t('resOriginal'), desc: `${sourceWidth || 6080}×${sourceHeight || 3040}` },
                  { id: '6k', label: t('res6k'), desc: t('res6kDesc') },
                  { id: '5.7k', label: t('res57k'), desc: t('res57kDesc') },
                  { id: '8k', label: t('res8k'), desc: '7680×3840' },
                  { id: '4k', label: t('res4k'), desc: '3840×1920' },
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
          )}

          {/* Format (only for 360) */}
          {exportType === '360' && (
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-300">{t('exportFileFormat')}</label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'jpeg', label: t('formatJpegTitle'), desc: t('formatJpegDesc') },
                  { id: 'png', label: t('formatPngTitle'), desc: t('formatPngDesc') },
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
          )}

          {/* GPano XMP Checkbox (Only for JPEG in 360 mode) */}
          {exportType === '360' && format === 'jpeg' && (
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
                  {t('embedGPanoTitle')}
                  <Check className="w-3.5 h-3.5 text-studio-accent" />
                </span>
                <p className="text-[10px] text-gray-400 leading-tight">
                  {t('embedGPanoDesc')}
                </p>
              </div>
            </label>
          )}

          {/* Progress bar if exporting */}
          {isExporting && (
            <div className="space-y-1.5 pt-2">
              <div className="flex justify-between text-xs font-mono text-gray-400">
                <span>{t('exportingGpu')}</span>
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
            {exportType === '360'
              ? `${t('exportOutputInfo')}: ${targetW} × ${targetH} px`
              : `${t('exportOutputInfo')}: 2560 px (${aspectRatio2d})`}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              disabled={isExporting}
              className="px-4 py-2 rounded-lg text-xs font-medium text-gray-400 hover:text-white transition-colors"
            >
              {t('cancel')}
            </button>
            <button
              onClick={handleExport}
              disabled={isExporting}
              className="px-5 py-2 bg-studio-accent hover:bg-studio-accent/90 text-studio-900 font-bold rounded-lg text-xs transition-all flex items-center gap-2 shadow-lg shadow-studio-accent/20 disabled:opacity-50"
            >
              {isExporting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>{t('rendering')}</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>{exportType === '360' ? t('download360Photo') : t('download2dPhoto')}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
