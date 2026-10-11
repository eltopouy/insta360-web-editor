import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Orientation, ColorAdjustments, NadirPatchConfig, StitchingConfig } from '../types';
import { degToRad } from '../utils/sphericalMath';
import {
  EquirectangularFragmentShader,
  EquirectangularVertexShader,
  createShaderRotationMatrix,
} from '../utils/equirectangularShader';
import { useTranslation } from '../i18n/I18nContext';

interface EquirectangularPreviewProps {
  imageSrc: string;
  orientation: Orientation;
  colorAdjustments: ColorAdjustments;
  nadirPatch: NadirPatchConfig;
  stitching: StitchingConfig;
  onYawChange: (newYaw: number) => void;
  onPitchChange: (newPitch: number) => void;
  onRollChange: (newRoll: number) => void;
}

export const EquirectangularPreview: React.FC<EquirectangularPreviewProps> = ({
  imageSrc,
  orientation,
  colorAdjustments,
  nadirPatch,
  stitching,
  onYawChange,
  onPitchChange,
}) => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.OrthographicCamera | null>(null);
  const shaderMaterialRef = useRef<THREE.ShaderMaterial | null>(null);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const startY = useRef(0);
  const startYaw = useRef(0);
  const startPitch = useRef(0);

  // Initialize WebGL Flat Quad Viewer
  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    rendererRef.current = renderer;

    containerRef.current.innerHTML = '';
    containerRef.current.appendChild(renderer.domElement);

    // Fullscreen quad
    const geometry = new THREE.PlaneGeometry(2, 2);
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(imageSrc, (tex) => {
      tex.wrapS = THREE.RepeatWrapping;
      tex.wrapT = THREE.ClampToEdgeWrapping;
      tex.minFilter = THREE.LinearFilter;
      renderer.render(scene, camera);
    });
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.minFilter = THREE.LinearFilter;

    const mat3 = createShaderRotationMatrix(orientation);

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
    shaderMaterialRef.current = shaderMaterial;

    const quad = new THREE.Mesh(geometry, shaderMaterial);
    scene.add(quad);

    const render = () => {
      renderer.render(scene, camera);
    };
    render();

    // Resize observer
    const resizeObserver = new ResizeObserver(() => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      renderer.setSize(w, h);
      render();
    });
    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
      geometry.dispose();
      shaderMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  // Update texture
  useEffect(() => {
    if (!shaderMaterialRef.current) return;
    const loader = new THREE.TextureLoader();
    loader.load(imageSrc, (texture) => {
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.ClampToEdgeWrapping;
      texture.minFilter = THREE.LinearFilter;
      if (shaderMaterialRef.current) {
        shaderMaterialRef.current.uniforms.tSource.value = texture;
        rendererRef.current?.render(sceneRef.current!, cameraRef.current!);
      }
    });
  }, [imageSrc]);

  // Update uniforms & re-render
  useEffect(() => {
    if (!shaderMaterialRef.current || !rendererRef.current || !sceneRef.current || !cameraRef.current) return;

    const mat3 = createShaderRotationMatrix(orientation);
    shaderMaterialRef.current.uniforms.uRotationMatrix.value = mat3;
    shaderMaterialRef.current.uniforms.uInputProjection.value =
      stitching.projection === 'dual_fisheye' ? 1 : 0;
    shaderMaterialRef.current.uniforms.uLensFovRad.value = degToRad(stitching.lensFov);
    shaderMaterialRef.current.uniforms.uBlendAngleRad.value = degToRad(stitching.blendAngle);
    shaderMaterialRef.current.uniforms.uCenterOffset1.value.set(
      stitching.centerOffsetX1,
      stitching.centerOffsetY1
    );
    shaderMaterialRef.current.uniforms.uCenterOffset2.value.set(
      stitching.centerOffsetX2,
      stitching.centerOffsetY2
    );
    shaderMaterialRef.current.uniforms.uRadiusScale.value = stitching.radiusScale;

    shaderMaterialRef.current.uniforms.uExposure.value = colorAdjustments.exposure / 100;
    shaderMaterialRef.current.uniforms.uBrightness.value = colorAdjustments.brightness / 100;
    shaderMaterialRef.current.uniforms.uContrast.value = colorAdjustments.contrast / 100;
    shaderMaterialRef.current.uniforms.uSaturation.value = colorAdjustments.saturation / 100;
    shaderMaterialRef.current.uniforms.uWarmth.value = colorAdjustments.warmth / 100;

    shaderMaterialRef.current.uniforms.uNadirEnabled.value = nadirPatch.enabled;
    shaderMaterialRef.current.uniforms.uNadirRadius.value = degToRad(nadirPatch.radius);
    shaderMaterialRef.current.uniforms.uNadirFeather.value = nadirPatch.feather / 100;
    shaderMaterialRef.current.uniforms.uNadirMode.value =
      nadirPatch.mode === 'color' ? 0 : nadirPatch.mode === 'blur' ? 1 : 2;
    shaderMaterialRef.current.uniforms.uNadirColor.value = new THREE.Color(nadirPatch.color);

    rendererRef.current.render(sceneRef.current, cameraRef.current);
  }, [orientation, colorAdjustments, nadirPatch, stitching]);

  // Direct mouse drag on 2:1 canvas to pan Yaw and Pitch
  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
    startY.current = e.clientY;
    startYaw.current = orientation.yaw;
    startPitch.current = orientation.pitch;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    const deltaX = e.clientX - startX.current;
    const deltaY = e.clientY - startY.current;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // Moving across width is 360 degrees
    let newYaw = startYaw.current + (deltaX / width) * 360;
    // Normalize to [-180, 180]
    while (newYaw > 180) newYaw -= 360;
    while (newYaw < -180) newYaw += 360;

    let newPitch = startPitch.current - (deltaY / height) * 180;
    newPitch = Math.max(-90, Math.min(90, newPitch));

    onYawChange(Math.round(newYaw * 10) / 10);
    onPitchChange(Math.round(newPitch * 10) / 10);
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-4 bg-studio-900">
      <div className="relative w-full max-w-5xl aspect-[2/1] border border-white/10 rounded-lg overflow-hidden shadow-2xl bg-black">
        <div
          ref={containerRef}
          className="w-full h-full cursor-ew-resize active:cursor-grabbing"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
        />

        {/* Overlay Guides */}
        {/* Center Vertical Line (Main Viewpoint / Center Heading 0°) */}
        <div className="pointer-events-none absolute inset-0 flex justify-center">
          <div className="w-px h-full bg-studio-accent/60 shadow-[0_0_8px_rgba(0,210,106,0.6)]" />
        </div>

        {/* Center Horizontal Line (Equator / Horizon 0°) */}
        <div className="pointer-events-none absolute inset-0 flex items-center">
          <div className="w-full h-px border-t border-dashed border-studio-accent/40" />
        </div>

        {/* Center Target Indicator */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-studio-accent rounded-full flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-studio-accent rounded-full" />
          </div>
          <span className="absolute -translate-y-6 text-[10px] font-mono text-studio-accent bg-studio-900/80 px-1 rounded border border-studio-accent/30">
            {t('centerFront')}
          </span>
        </div>

        {/* Cardinal labels across the top */}
        <div className="pointer-events-none absolute top-2 left-0 right-0 flex justify-between px-4 text-[10px] font-mono text-gray-400">
          <span>{t('cardinalSouth')} (-180°)</span>
          <span className="text-yellow-400">{t('cardinalWest')} (-90°)</span>
          <span className="text-studio-accent font-bold">{t('cardinalNorth')} (0°)</span>
          <span className="text-cyan-400">{t('cardinalEast')} (+90°)</span>
          <span>{t('cardinalSouth')} (+180°)</span>
        </div>

        {/* Drag badge helper */}
        <div className="pointer-events-none absolute bottom-2 right-2 bg-studio-900/80 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded text-[11px] font-mono text-gray-300">
          {t('dragToShiftCenter')}
        </div>
      </div>
    </div>
  );
};
