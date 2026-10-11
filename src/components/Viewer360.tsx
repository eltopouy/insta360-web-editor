import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Orientation, ColorAdjustments, NadirPatchConfig } from '../types';
import { degToRad } from '../utils/sphericalMath';
import { Compass, Crosshair, Eye, RotateCcw } from 'lucide-react';

interface Viewer360Props {
  imageSrc: string;
  orientation: Orientation;
  colorAdjustments: ColorAdjustments;
  nadirPatch: NadirPatchConfig;
  onSetCurrentViewAsCenter: (yaw: number, pitch: number) => void;
  viewerRef?: React.MutableRefObject<{ captureSnapshot: (aspect: string, fov: number) => string } | null>;
}

const SphereVertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const SphereFragmentShader = /* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform sampler2D tSource;

  uniform float uExposure;
  uniform float uBrightness;
  uniform float uContrast;
  uniform float uSaturation;
  uniform float uWarmth;

  uniform bool uNadirEnabled;
  uniform float uNadirHeight; // fraction of UV height from 0 (south pole)
  uniform float uNadirFeather;
  uniform int uNadirMode;
  uniform vec3 uNadirColor;

  vec3 rgb2hsv(vec3 c) {
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
  }

  vec3 hsv2rgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
  }

  void main() {
    // Flip X so panorama is not mirrored when viewed from inside
    vec2 uv = vec2(1.0 - vUv.x, vUv.y);
    vec4 color = texture2D(tSource, uv);

    // Nadir Patch (South Pole: vUv.y near 0.0)
    if (uNadirEnabled) {
      if (uv.y < uNadirHeight) {
        float featherDist = uNadirHeight * max(0.01, uNadirFeather);
        float t = smoothstep(uNadirHeight - featherDist, uNadirHeight, uv.y);

        vec3 patchColor = uNadirColor;
        if (uNadirMode == 1) { // Blur (sample ring at border)
          patchColor = texture2D(tSource, vec2(uv.x, uNadirHeight)).rgb;
        } else if (uNadirMode == 2) { // Mirror
          float mirroredY = uNadirHeight + (uNadirHeight - uv.y);
          patchColor = texture2D(tSource, vec2(uv.x, clamp(mirroredY, 0.0, 1.0))).rgb;
        }
        color.rgb = mix(patchColor, color.rgb, t);
      }
    }

    // Color Adjustments
    color.rgb *= pow(2.0, uExposure * 2.0);
    color.rgb += uBrightness * 0.5;
    color.rgb = (color.rgb - 0.5) * (1.0 + uContrast) + 0.5;
    color.r += uWarmth * 0.08;
    color.b -= uWarmth * 0.08;

    vec3 hsv = rgb2hsv(color.rgb);
    hsv.y = clamp(hsv.y * (1.0 + uSaturation), 0.0, 1.0);
    color.rgb = hsv2rgb(hsv);

    gl_FragColor = vec4(clamp(color.rgb, 0.0, 1.0), 1.0);
  }
`;

export const Viewer360: React.FC<Viewer360Props> = ({
  imageSrc,
  orientation,
  colorAdjustments,
  nadirPatch,
  onSetCurrentViewAsCenter,
  viewerRef,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const sphereMeshRef = useRef<THREE.Mesh | null>(null);
  const shaderMaterialRef = useRef<THREE.ShaderMaterial | null>(null);

  const [cameraLon, setCameraLon] = useState(0); // Yaw
  const [cameraLat, setCameraLat] = useState(0); // Pitch
  const [cameraFov, setCameraFov] = useState(75);
  const [showGuides, setShowGuides] = useState(true);

  const isUserInteracting = useRef(false);
  const onPointerDownPointerX = useRef(0);
  const onPointerDownPointerY = useRef(0);
  const onPointerDownLon = useRef(0);
  const onPointerDownLat = useRef(0);

  // Expose capture snapshot to parent
  useEffect(() => {
    if (viewerRef) {
      viewerRef.current = {
        captureSnapshot: (aspect: string, fov: number) => {
          if (!rendererRef.current || !sceneRef.current || !cameraRef.current) return '';

          const [wRatio, hRatio] = aspect.split(':').map(Number);
          const origAspect = cameraRef.current.aspect;
          const origFov = cameraRef.current.fov;

          const targetW = 2560;
          const targetH = Math.round(targetW / (wRatio / hRatio));

          const renderTarget = new THREE.WebGLRenderTarget(targetW, targetH);
          cameraRef.current.aspect = wRatio / hRatio;
          cameraRef.current.fov = fov;
          cameraRef.current.updateProjectionMatrix();

          rendererRef.current.setRenderTarget(renderTarget);
          rendererRef.current.render(sceneRef.current, cameraRef.current);
          rendererRef.current.setRenderTarget(null);

          const pixels = new Uint8Array(targetW * targetH * 4);
          rendererRef.current.readRenderTargetPixels(renderTarget, 0, 0, targetW, targetH, pixels);
          renderTarget.dispose();

          cameraRef.current.aspect = origAspect;
          cameraRef.current.fov = origFov;
          cameraRef.current.updateProjectionMatrix();

          const canvas = document.createElement('canvas');
          canvas.width = targetW;
          canvas.height = targetH;
          const ctx = canvas.getContext('2d');
          if (!ctx) return '';

          const imgData = ctx.createImageData(targetW, targetH);
          for (let y = 0; y < targetH; y++) {
            for (let x = 0; x < targetW; x++) {
              const srcIdx = ((targetH - 1 - y) * targetW + x) * 4;
              const dstIdx = (y * targetW + x) * 4;
              imgData.data[dstIdx] = pixels[srcIdx];
              imgData.data[dstIdx + 1] = pixels[srcIdx + 1];
              imgData.data[dstIdx + 2] = pixels[srcIdx + 2];
              imgData.data[dstIdx + 3] = pixels[srcIdx + 3];
            }
          }
          ctx.putImageData(imgData, 0, 0);
          return canvas.toDataURL('image/jpeg', 0.95);
        },
      };
    }
  }, [viewerRef]);

  // Setup Three.js scene
  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(cameraFov, width / height, 1, 1100);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, preserveDrawingBuffer: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    rendererRef.current = renderer;

    containerRef.current.innerHTML = '';
    containerRef.current.appendChild(renderer.domElement);

    // Sphere geometry (Radius 500)
    const geometry = new THREE.SphereGeometry(500, 64, 32);

    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(imageSrc, () => {
      renderer.render(scene, camera);
    });

    const shaderMaterial = new THREE.ShaderMaterial({
      vertexShader: SphereVertexShader,
      fragmentShader: SphereFragmentShader,
      uniforms: {
        tSource: { value: texture },
        uExposure: { value: colorAdjustments.exposure / 100 },
        uBrightness: { value: colorAdjustments.brightness / 100 },
        uContrast: { value: colorAdjustments.contrast / 100 },
        uSaturation: { value: colorAdjustments.saturation / 100 },
        uWarmth: { value: colorAdjustments.warmth / 100 },
        uNadirEnabled: { value: nadirPatch.enabled },
        uNadirHeight: { value: nadirPatch.radius / 180 }, // radius degrees / 180 = UV fraction
        uNadirFeather: { value: nadirPatch.feather / 100 },
        uNadirMode: { value: nadirPatch.mode === 'color' ? 0 : nadirPatch.mode === 'blur' ? 1 : 2 },
        uNadirColor: { value: new THREE.Color(nadirPatch.color) },
      },
      side: THREE.BackSide, // Texture rendered on inside of sphere
    });
    shaderMaterialRef.current = shaderMaterial;

    const mesh = new THREE.Mesh(geometry, shaderMaterial);
    // Apply initial orientation
    mesh.rotation.set(
      degToRad(orientation.pitch),
      degToRad(-orientation.yaw),
      degToRad(orientation.roll),
      'YXZ'
    );
    scene.add(mesh);
    sphereMeshRef.current = mesh;

    // Render loop
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      const currentLat = Math.max(-85, Math.min(85, cameraLat));
      const phi = degToRad(90 - currentLat);
      const theta = degToRad(cameraLon);

      const targetX = 500 * Math.sin(phi) * Math.cos(theta);
      const targetY = 500 * Math.cos(phi);
      const targetZ = 500 * Math.sin(phi) * Math.sin(theta);

      camera.lookAt(targetX, targetY, targetZ);
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      geometry.dispose();
      shaderMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  // Update texture when imageSrc changes
  useEffect(() => {
    if (!shaderMaterialRef.current) return;
    const loader = new THREE.TextureLoader();
    loader.load(imageSrc, (texture) => {
      if (shaderMaterialRef.current) {
        shaderMaterialRef.current.uniforms.tSource.value = texture;
      }
    });
  }, [imageSrc]);

  // Update mesh rotation directly when orientation changes
  useEffect(() => {
    if (sphereMeshRef.current) {
      sphereMeshRef.current.rotation.set(
        degToRad(orientation.pitch),
        degToRad(-orientation.yaw),
        degToRad(orientation.roll),
        'YXZ'
      );
    }
  }, [orientation]);

  // Update uniforms when colors or nadir patch changes
  useEffect(() => {
    if (!shaderMaterialRef.current) return;
    shaderMaterialRef.current.uniforms.uExposure.value = colorAdjustments.exposure / 100;
    shaderMaterialRef.current.uniforms.uBrightness.value = colorAdjustments.brightness / 100;
    shaderMaterialRef.current.uniforms.uContrast.value = colorAdjustments.contrast / 100;
    shaderMaterialRef.current.uniforms.uSaturation.value = colorAdjustments.saturation / 100;
    shaderMaterialRef.current.uniforms.uWarmth.value = colorAdjustments.warmth / 100;

    shaderMaterialRef.current.uniforms.uNadirEnabled.value = nadirPatch.enabled;
    shaderMaterialRef.current.uniforms.uNadirHeight.value = nadirPatch.radius / 180;
    shaderMaterialRef.current.uniforms.uNadirFeather.value = nadirPatch.feather / 100;
    shaderMaterialRef.current.uniforms.uNadirMode.value =
      nadirPatch.mode === 'color' ? 0 : nadirPatch.mode === 'blur' ? 1 : 2;
    shaderMaterialRef.current.uniforms.uNadirColor.value = new THREE.Color(nadirPatch.color);
  }, [colorAdjustments, nadirPatch]);

  // Mouse / Touch Drag Handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    isUserInteracting.current = true;
    onPointerDownPointerX.current = e.clientX;
    onPointerDownPointerY.current = e.clientY;
    onPointerDownLon.current = cameraLon;
    onPointerDownLat.current = cameraLat;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isUserInteracting.current) return;
    const deltaX = e.clientX - onPointerDownPointerX.current;
    const deltaY = e.clientY - onPointerDownPointerY.current;

    const speed = (cameraFov / 75) * 0.15;
    setCameraLon((onPointerDownLon.current - deltaX * speed + 360) % 360);
    setCameraLat(Math.max(-85, Math.min(85, onPointerDownLat.current + deltaY * speed)));
  };

  const handlePointerUp = () => {
    isUserInteracting.current = false;
  };

  const handleWheel = (e: React.WheelEvent) => {
    const delta = e.deltaY * 0.05;
    const newFov = Math.max(30, Math.min(120, cameraFov + delta));
    setCameraFov(newFov);
    if (cameraRef.current) {
      cameraRef.current.fov = newFov;
      cameraRef.current.updateProjectionMatrix();
    }
  };

  // Button: "Fijar esta vista como centro"
  const handleSetCurrentViewAsCenter = () => {
    let targetYaw = (cameraLon > 180 ? cameraLon - 360 : cameraLon);
    let targetPitch = cameraLat;

    onSetCurrentViewAsCenter(-targetYaw, -targetPitch);
    setCameraLon(0);
    setCameraLat(0);
  };

  const handleResetCamera = () => {
    setCameraLon(0);
    setCameraLat(0);
    setCameraFov(75);
    if (cameraRef.current) {
      cameraRef.current.fov = 75;
      cameraRef.current.updateProjectionMatrix();
    }
  };

  return (
    <div className="relative w-full h-full bg-black overflow-hidden select-none">
      <div
        ref={containerRef}
        className="w-full h-full cursor-grab active:cursor-grabbing"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onWheel={handleWheel}
      />

      {showGuides && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="relative w-12 h-12 opacity-40">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-white" />
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white" />
            <div className="absolute inset-2 border border-white rounded-full" />
          </div>

          <div className="absolute left-6 right-6 top-1/2 h-px border-t border-dashed border-studio-accent/40 flex justify-between items-center">
            <span className="text-[10px] font-mono text-studio-accent/70 bg-studio-900/80 px-1 rounded -translate-y-1/2">
              HORIZONTE 0°
            </span>
            <span className="text-[10px] font-mono text-studio-accent/70 bg-studio-900/80 px-1 rounded -translate-y-1/2">
              NIVEL
            </span>
          </div>
        </div>
      )}

      {/* Overlay Status HUD */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-3 bg-studio-900/80 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-md text-xs font-mono text-gray-300 shadow-lg">
        <div className="flex items-center gap-1.5 text-studio-accent font-semibold">
          <Compass className="w-4 h-4" />
          <span>DIR: {Math.round(cameraLon)}°</span>
        </div>
        <div className="h-3 w-px bg-white/20" />
        <span>ELEV: {Math.round(cameraLat)}°</span>
        <div className="h-3 w-px bg-white/20" />
        <span>FOV: {Math.round(cameraFov)}°</span>
      </div>

      {/* Floating Viewport Quick Controls */}
      <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
        <button
          onClick={handleSetCurrentViewAsCenter}
          title="Fijar esta dirección como el nuevo centro del panorama 360"
          className="flex items-center gap-1.5 bg-studio-accent/20 hover:bg-studio-accent/30 text-studio-accent border border-studio-accent/40 px-3 py-1.5 rounded-md text-xs font-medium transition-all shadow-md active:scale-95"
        >
          <Crosshair className="w-3.5 h-3.5" />
          <span>Fijar como Frente</span>
        </button>

        <button
          onClick={() => setShowGuides(!showGuides)}
          title="Mostrar/Ocultar guías de horizonte y cruz central"
          className={`p-2 rounded-md border text-xs transition-colors backdrop-blur-md ${
            showGuides
              ? 'bg-white/15 border-white/30 text-white'
              : 'bg-studio-900/80 border-white/10 text-gray-400 hover:text-white'
          }`}
        >
          <Eye className="w-4 h-4" />
        </button>

        <button
          onClick={handleResetCamera}
          title="Restablecer posición de cámara"
          className="p-2 rounded-md border border-white/10 bg-studio-900/80 hover:bg-white/10 text-gray-400 hover:text-white transition-colors backdrop-blur-md"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 pointer-events-none text-center bg-studio-900/70 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full text-[11px] text-gray-400">
        Arrastra con el ratón para mirar en 360° • Rueda para zoom
      </div>
    </div>
  );
};
