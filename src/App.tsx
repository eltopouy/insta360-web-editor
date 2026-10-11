import React, { useEffect, useRef, useState } from 'react';
import { Orientation, ColorAdjustments, NadirPatchConfig, ViewMode, StitchingConfig } from './types';
import {
  generateProceduralDemo360,
  generateProceduralDualFisheyeDemo,
  detectInputProjection,
} from './utils/samplePanoramas';
import { DEFAULT_STITCHING_CONFIG } from './utils/equirectangularShader';
import { Viewer360 } from './components/Viewer360';
import { EquirectangularPreview } from './components/EquirectangularPreview';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { ExportModal } from './components/ExportModal';
import { useMcpBridge } from './hooks/useMcpBridge';
import { useTranslation } from './i18n/I18nContext';
import { UploadCloud } from 'lucide-react';

export const App: React.FC = () => {
  const { t, language, setLanguage } = useTranslation();
  // State
  const [imageSrc, setImageSrc] = useState<string>('');
  const [fileName, setFileName] = useState<string>('demo_insta360_panorama.jpg');
  const [imageDimensions, setImageDimensions] = useState<{ width: number; height: number }>({
    width: 2048,
    height: 1024,
  });

  const [stitching, setStitching] = useState<StitchingConfig>(DEFAULT_STITCHING_CONFIG);

  const [orientation, setOrientation] = useState<Orientation>({
    yaw: 0,
    pitch: 0,
    roll: 0,
  });

  const [colorAdjustments, setColorAdjustments] = useState<ColorAdjustments>({
    exposure: 0,
    brightness: 0,
    contrast: 0,
    saturation: 0,
    warmth: 0,
  });

  const [nadirPatch, setNadirPatch] = useState<NadirPatchConfig>({
    enabled: false,
    radius: 18,
    feather: 40,
    mode: 'blur',
    color: '#15191e',
  });

  const [viewMode, setViewMode] = useState<ViewMode>('split');
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [isDraggingFile, setIsDraggingFile] = useState(false);

  const viewerRef = useRef<{ captureSnapshot: (aspect: string, fov: number) => string } | null>(null);

  const currentObjectUrlRef = useRef<string | null>(null);

  const cleanupObjectUrl = () => {
    if (currentObjectUrlRef.current) {
      URL.revokeObjectURL(currentObjectUrlRef.current);
      currentObjectUrlRef.current = null;
    }
  };

  // Load procedural demo image on startup
  useEffect(() => {
    const demo = generateProceduralDemo360(2048, 1024);
    setImageSrc(demo);
    return () => {
      cleanupObjectUrl();
    };
  }, []);

  // Handle uploaded file (fast, zero memory explosion for 5.7K/8K files)
  const handleProcessFile = (file: File) => {
    cleanupObjectUrl();
    const isInsp = file.name.toLowerCase().endsWith('.insp');
    // Insta360 .insp files are binary JPEGs with proprietary metadata trailer.
    // Explicitly creating an image/jpeg blob ensures any browser decodes it natively.
    const blob = isInsp ? new Blob([file], { type: 'image/jpeg' }) : file;
    const objectUrl = URL.createObjectURL(blob);
    currentObjectUrlRef.current = objectUrl;

    setImageSrc(objectUrl);
    setFileName(file.name);

    // Detect image dimensions and projection format (Dual-Fisheye vs Equirectangular)
    const img = new Image();
    img.onload = () => {
      setImageDimensions({ width: img.width, height: img.height });
      const detected = detectInputProjection(img);
      setStitching((prev) => ({ ...prev, projection: detected }));
    };
    img.src = objectUrl;

    // Reset orientation for new file
    setOrientation({ yaw: 0, pitch: 0, roll: 0 });
  };

  // Drag and drop handlers
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDraggingFile(true);
  };

  const handleDragLeave = () => {
    setIsDraggingFile(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDraggingFile(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleProcessFile(e.dataTransfer.files[0]);
    }
  };

  // Stitching handlers
  const handleStitchingChange = (updated: Partial<StitchingConfig>) => {
    setStitching((prev) => ({ ...prev, ...updated }));
  };

  const handleResetStitching = () => {
    setStitching((prev) => ({
      ...DEFAULT_STITCHING_CONFIG,
      projection: prev.projection,
    }));
  };

  const handleLoadDualFisheyeDemo = () => {
    cleanupObjectUrl();
    const demo = generateProceduralDualFisheyeDemo(2048, 1024);
    setImageSrc(demo);
    setFileName('insta360_dualfisheye_raw.jpg');
    setImageDimensions({ width: 2048, height: 1024 });
    setStitching({ ...DEFAULT_STITCHING_CONFIG, projection: 'dual_fisheye' });
    setOrientation({ yaw: 0, pitch: 0, roll: 0 });
  };

  const handleLoadEquirectDemo = () => {
    cleanupObjectUrl();
    const demo = generateProceduralDemo360(2048, 1024);
    setImageSrc(demo);
    setFileName('demo_insta360_panorama.jpg');
    setImageDimensions({ width: 2048, height: 1024 });
    setStitching({ ...DEFAULT_STITCHING_CONFIG, projection: 'equirectangular' });
    setOrientation({ yaw: 0, pitch: 0, roll: 0 });
  };

  // Orientation handlers
  const handleOrientationChange = (updated: Partial<Orientation>) => {
    setOrientation((prev) => ({ ...prev, ...updated }));
  };

  const handleResetOrientation = () => {
    setOrientation({ yaw: 0, pitch: 0, roll: 0 });
  };

  const handleAutoLevel = () => {
    setOrientation((prev) => ({ ...prev, pitch: 0, roll: 0 }));
  };

  // Set current camera view as the new center of the 360 photo
  const handleSetCurrentViewAsCenter = (deltaYaw: number, deltaPitch: number) => {
    setOrientation((prev) => {
      let newYaw = prev.yaw + deltaYaw;
      while (newYaw > 180) newYaw -= 360;
      while (newYaw < -180) newYaw += 360;

      let newPitch = prev.pitch + deltaPitch;
      newPitch = Math.max(-90, Math.min(90, newPitch));

      return {
        ...prev,
        yaw: Math.round(newYaw * 10) / 10,
        pitch: Math.round(newPitch * 10) / 10,
      };
    });
  };

  // Color handlers
  const handleColorChange = (updated: Partial<ColorAdjustments>) => {
    setColorAdjustments((prev) => ({ ...prev, ...updated }));
  };

  const handleResetColors = () => {
    setColorAdjustments({
      exposure: 0,
      brightness: 0,
      contrast: 0,
      saturation: 0,
      warmth: 0,
    });
  };

  // Nadir patch handler
  const handleNadirChange = (updated: Partial<NadirPatchConfig>) => {
    setNadirPatch((prev) => ({ ...prev, ...updated }));
  };

  // Capture Reframe snapshot (2D photo)
  const handleCaptureReframe = (aspectRatio: string, fov: number) => {
    if (viewerRef.current) {
      const dataUrl = viewerRef.current.captureSnapshot(aspectRatio, fov);
      if (dataUrl) {
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = `insta360_reframe_${aspectRatio.replace(':', 'x')}_${Date.now()}.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  };

  // MCP Bridge to enable AI control (Claude, Antigravity, MCP agents)
  const { isConnected: isMcpConnected } = useMcpBridge({
    orientation,
    colorAdjustments,
    nadirPatch,
    stitching,
    viewMode,
    fileName,
    language,
    onUpdateOrientation: handleOrientationChange,
    onUpdateColors: handleColorChange,
    onUpdateNadir: handleNadirChange,
    onUpdateStitching: handleStitchingChange,
    onUpdateViewMode: setViewMode,
    onUpdateLanguage: setLanguage,
    onResetOrientation: handleResetOrientation,
    onAutoLevel: handleAutoLevel,
    onTriggerExport: () => setIsExportModalOpen(true),
    onTriggerReframe: (aspect, fov) => handleCaptureReframe(aspect, fov),
  });

  return (
    <div
      className="flex flex-col h-screen w-screen overflow-hidden bg-studio-900 text-gray-100"
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {/* Top Header */}
      <Header
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        onFileUpload={handleProcessFile}
        onLoadDemo={handleLoadEquirectDemo}
        onOpenExport={() => setIsExportModalOpen(true)}
        fileName={fileName}
        isMcpConnected={isMcpConnected}
      />

      {/* Main Workspace (Viewport + Sidebar) */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Viewport Area */}
        <main className="flex-1 relative overflow-hidden bg-black flex">
          {imageSrc ? (
            <>
              {/* 3D View */}
              {(viewMode === '3d' || viewMode === 'split') && (
                <div className={`relative h-full ${viewMode === 'split' ? 'w-1/2 border-r border-white/10' : 'w-full'}`}>
                  {viewMode === 'split' && (
                    <div className="absolute top-2 left-2 z-20 bg-studio-900/80 px-2 py-0.5 rounded text-[10px] font-mono text-studio-accent border border-white/10">
                      {t('interactive3dView')}
                    </div>
                  )}
                  <Viewer360
                    imageSrc={imageSrc}
                    orientation={orientation}
                    colorAdjustments={colorAdjustments}
                    nadirPatch={nadirPatch}
                    stitching={stitching}
                    onSetCurrentViewAsCenter={handleSetCurrentViewAsCenter}
                    viewerRef={viewerRef}
                  />
                </div>
              )}

              {/* Equirectangular Flat View */}
              {(viewMode === 'equirectangular' || viewMode === 'split') && (
                <div className={`relative h-full ${viewMode === 'split' ? 'w-1/2' : 'w-full'}`}>
                  {viewMode === 'split' && (
                    <div className="absolute top-2 left-2 z-20 bg-studio-900/80 px-2 py-0.5 rounded text-[10px] font-mono text-cyan-400 border border-white/10">
                      {t('equirectangularView')}
                    </div>
                  )}
                  <EquirectangularPreview
                    imageSrc={imageSrc}
                    orientation={orientation}
                    colorAdjustments={colorAdjustments}
                    nadirPatch={nadirPatch}
                    stitching={stitching}
                    onYawChange={(yaw) => handleOrientationChange({ yaw })}
                    onPitchChange={(pitch) => handleOrientationChange({ pitch })}
                    onRollChange={(roll) => handleOrientationChange({ roll })}
                  />
                </div>
              )}
            </>
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-gray-500">
              <UploadCloud className="w-16 h-16 text-gray-600 mb-3" />
              <p className="text-sm">{t('dragDropPrompt')}</p>
            </div>
          )}
        </main>

        {/* Sidebar Controls */}
        <Sidebar
          stitching={stitching}
          onStitchingChange={handleStitchingChange}
          onResetStitching={handleResetStitching}
          onLoadDualFisheyeDemo={handleLoadDualFisheyeDemo}
          onLoadEquirectDemo={handleLoadEquirectDemo}
          orientation={orientation}
          onOrientationChange={handleOrientationChange}
          onResetOrientation={handleResetOrientation}
          onAutoLevel={handleAutoLevel}
          colorAdjustments={colorAdjustments}
          onColorChange={handleColorChange}
          onResetColors={handleResetColors}
          nadirPatch={nadirPatch}
          onNadirChange={handleNadirChange}
          onCaptureReframe={handleCaptureReframe}
          is3dViewActive={viewMode === '3d' || viewMode === 'split'}
          onSwitchTo3dView={() => setViewMode('3d')}
        />
      </div>

      {/* Drag & Drop Overlay */}
      {isDraggingFile && (
        <div className="absolute inset-0 z-50 bg-studio-900/90 backdrop-blur-md flex flex-col items-center justify-center border-4 border-dashed border-studio-accent m-4 rounded-2xl animate-pulse pointer-events-none">
          <UploadCloud className="w-20 h-20 text-studio-accent mb-4" />
          <h2 className="text-2xl font-bold text-white">{t('dragDropOverlayTitle')}</h2>
          <p className="text-sm text-gray-300 mt-2">{t('dragDropOverlaySubtitle')}</p>
        </div>
      )}

      {/* Export Modal */}
      <ExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        imageSrc={imageSrc}
        sourceWidth={imageDimensions.width}
        sourceHeight={imageDimensions.height}
        orientation={orientation}
        colorAdjustments={colorAdjustments}
        nadirPatch={nadirPatch}
        stitching={stitching}
      />
    </div>
  );
};

export default App;
