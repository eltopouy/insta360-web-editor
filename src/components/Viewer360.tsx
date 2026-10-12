import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Orientation, ColorAdjustments, NadirPatchConfig, StitchingConfig } from '../types';
import { degToRad } from '../utils/sphericalMath';
import { useTranslation } from '../i18n/I18nContext';
import { Compass, Crosshair, Eye, RotateCcw } from 'lucide-react';

interface Viewer360Props {
  imageSrc: string;
  orientation: Orientation;
  colorAdjustments: ColorAdjustments;
  nadirPatch: NadirPatchConfig;
  stitching: StitchingConfig;
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

  // Stitching Uniforms
  uniform int uInputProjection; // 0 = Equirectangular, 1 = Dual-Fisheye
  uniform float uLensFovRad;
  uniform float uBlendAngleRad;
  uniform vec2 uCenterOffset1;
  uniform vec2 uCenterOffset2;
  uniform float uRadiusScale;

  // Advanced Optical Calibration Uniforms
  uniform float uDistortionK1;
  uniform float uDistortionK2;
  uniform float uChromaticAbRed;
  uniform float uChromaticAbBlue;
  uniform float uLensBaselineMm;
  uniform float uConvergenceDistance;
  uniform float uExposureBalance;

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

  const float PI = 3.14159265358979323846;
  const float TWO_PI = 6.28318530717958647692;

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
    vec4 color;

    if (uInputProjection == 1) {
      // INSTA360 DUAL-FISHEYE OPTICAL STITCHING (ADVANCED)
      float lon = (uv.x - 0.5) * TWO_PI;
      float lat = (uv.y - 0.5) * PI;

      float cosLat = cos(lat);
      vec3 dir = vec3(
        cosLat * sin(lon),
        sin(lat),
        -cosLat * cos(lon)
      );

      float thetaMax = uLensFovRad * 0.5;

      // Inter-lens baseline parallax correction
      float baselineM = uLensBaselineMm * 0.001;
      float distM = max(0.2, uConvergenceDistance);
      vec3 dirFront = normalize(distM * dir - vec3(0.0, 0.0, -baselineM * 0.5));
      vec3 dirRear  = normalize(distM * dir - vec3(0.0, 0.0,  baselineM * 0.5));

      float theta1 = acos(clamp(-dirFront.z, -1.0, 1.0));
      float theta2 = acos(clamp(dirRear.z, -1.0, 1.0));

      float rx = 0.25 * uRadiusScale;
      float ry = 0.50 * uRadiusScale;

      // Front lens UV mapping with Kannala-Brandt polynomial & LCA
      float d1 = length(dirFront.xy);
      vec2 dir2D1 = (d1 > 1e-6) ? (dirFront.xy / d1) : vec2(0.0, 1.0);
      float rho1 = theta1 / max(1e-4, thetaMax);
      float rho1Sq = rho1 * rho1;
      float rho1Poly = rho1 * (1.0 + uDistortionK1 * rho1Sq + uDistortionK2 * rho1Sq * rho1Sq);

      float rho1R = rho1Poly * (1.0 + uChromaticAbRed * rho1Sq);
      float rho1G = rho1Poly;
      float rho1B = rho1Poly * (1.0 + uChromaticAbBlue * rho1Sq);

      vec2 c1 = vec2(0.25 + uCenterOffset1.x, 0.5 + uCenterOffset1.y);
      vec2 uv1R = c1 + rho1R * vec2(rx * dir2D1.x, ry * dir2D1.y);
      vec2 uv1G = c1 + rho1G * vec2(rx * dir2D1.x, ry * dir2D1.y);
      vec2 uv1B = c1 + rho1B * vec2(rx * dir2D1.x, ry * dir2D1.y);

      // Rear lens UV mapping with Kannala-Brandt polynomial & LCA
      vec2 rearDirXY = vec2(-dirRear.x, dirRear.y);
      float d2 = length(rearDirXY);
      vec2 dir2D2 = (d2 > 1e-6) ? (rearDirXY / d2) : vec2(0.0, 1.0);
      float rho2 = theta2 / max(1e-4, thetaMax);
      float rho2Sq = rho2 * rho2;
      float rho2Poly = rho2 * (1.0 + uDistortionK1 * rho2Sq + uDistortionK2 * rho2Sq * rho2Sq);

      float rho2R = rho2Poly * (1.0 + uChromaticAbRed * rho2Sq);
      float rho2G = rho2Poly;
      float rho2B = rho2Poly * (1.0 + uChromaticAbBlue * rho2Sq);

      vec2 c2 = vec2(0.75 + uCenterOffset2.x, 0.5 + uCenterOffset2.y);
      vec2 uv2R = c2 + rho2R * vec2(rx * dir2D2.x, ry * dir2D2.y);
      vec2 uv2G = c2 + rho2G * vec2(rx * dir2D2.x, ry * dir2D2.y);
      vec2 uv2B = c2 + rho2B * vec2(rx * dir2D2.x, ry * dir2D2.y);

      // Coverage-Depth & Optical Quality Blend Weight
      float deltaTheta = theta2 - theta1;
      float halfBlend = max(0.001, uBlendAngleRad);
      float wAngle = smoothstep(-halfBlend, halfBlend, deltaTheta);

      float q1 = max(0.001, 1.0 - clamp(rho1 * rho1, 0.0, 1.0));
      float q2 = max(0.001, 1.0 - clamp(rho2 * rho2, 0.0, 1.0));
      float wQuality = q1 / (q1 + q2);
      float w = mix(wAngle, wQuality, 0.15);

      if (theta1 > thetaMax) {
        w = 0.0;
      } else if (theta2 > thetaMax) {
        w = 1.0;
      }

      // Sample color channels with LCA correction
      vec4 col1 = vec4(
        texture2D(tSource, uv1R).r,
        texture2D(tSource, uv1G).g,
        texture2D(tSource, uv1B).b,
        1.0
      );
      vec4 col2 = vec4(
        texture2D(tSource, uv2R).r,
        texture2D(tSource, uv2G).g,
        texture2D(tSource, uv2B).b,
        1.0
      );

      // Symmetric Photometric Exposure Balance
      float G = pow(2.0, uExposureBalance * 1.5);
      float sqrtG = sqrt(max(0.01, G));
      float invSqrtG = 1.0 / sqrtG;
      float seamWeight = 2.0 * min(w, 1.0 - w);
      col1.rgb *= mix(1.0, invSqrtG, seamWeight);
      col2.rgb *= mix(1.0, sqrtG, seamWeight);

      if (w <= 0.001) {
        color = col2;
      } else if (w >= 0.999) {
        color = col1;
      } else {
        color = mix(col2, col1, w);
      }
    } else {
      // Seamless equirectangular
      color = texture2D(tSource, uv);
    }

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
  stitching,
  onSetCurrentViewAsCenter,
  viewerRef,
}) => {
  const { t } = useTranslation();
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
    const texture = textureLoader.load(imageSrc, (tex) => {
      tex.wrapS = THREE.RepeatWrapping;
      tex.wrapT = THREE.ClampToEdgeWrapping;
      tex.minFilter = THREE.LinearFilter;
      renderer.render(scene, camera);
    });
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.minFilter = THREE.LinearFilter;

    const shaderMaterial = new THREE.ShaderMaterial({
      vertexShader: SphereVertexShader,
      fragmentShader: SphereFragmentShader,
      uniforms: {
        tSource: { value: texture },
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
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.ClampToEdgeWrapping;
      texture.minFilter = THREE.LinearFilter;
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

  // Update uniforms when colors, nadir patch, or stitching changes
  useEffect(() => {
    if (!shaderMaterialRef.current) return;
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
    shaderMaterialRef.current.uniforms.uDistortionK1.value = stitching.distortionK1 ?? 0;
    shaderMaterialRef.current.uniforms.uDistortionK2.value = stitching.distortionK2 ?? 0;
    shaderMaterialRef.current.uniforms.uChromaticAbRed.value = stitching.chromaticAbRed ?? 0;
    shaderMaterialRef.current.uniforms.uChromaticAbBlue.value = stitching.chromaticAbBlue ?? 0;
    shaderMaterialRef.current.uniforms.uLensBaselineMm.value = stitching.lensBaselineMm ?? 28;
    shaderMaterialRef.current.uniforms.uConvergenceDistance.value = stitching.convergenceDistance ?? 2.5;
    shaderMaterialRef.current.uniforms.uExposureBalance.value = stitching.exposureBalance ?? 0;

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
  }, [colorAdjustments, nadirPatch, stitching]);

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
              {t('horizon0')}
            </span>
            <span className="text-[10px] font-mono text-studio-accent/70 bg-studio-900/80 px-1 rounded -translate-y-1/2">
              {t('level')}
            </span>
          </div>
        </div>
      )}

      {/* Overlay Status HUD */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-3 bg-studio-900/80 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-md text-xs font-mono text-gray-300 shadow-lg">
        <div className="flex items-center gap-1.5 text-studio-accent font-semibold">
          <Compass className="w-4 h-4" />
          <span>{t('dirLabel')}: {Math.round(cameraLon)}°</span>
        </div>
        <div className="h-3 w-px bg-white/20" />
        <span>{t('elevLabel')}: {Math.round(cameraLat)}°</span>
        <div className="h-3 w-px bg-white/20" />
        <span>{t('fovLabel')}: {Math.round(cameraFov)}°</span>
      </div>

      {/* Floating Viewport Quick Controls */}
      <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
        <button
          onClick={handleSetCurrentViewAsCenter}
          title={t('setAsFrontTitle')}
          className="flex items-center gap-1.5 bg-studio-accent/20 hover:bg-studio-accent/30 text-studio-accent border border-studio-accent/40 px-3 py-1.5 rounded-md text-xs font-medium transition-all shadow-md active:scale-95"
        >
          <Crosshair className="w-3.5 h-3.5" />
          <span>{t('setAsFront')}</span>
        </button>

        <button
          onClick={() => setShowGuides(!showGuides)}
          title={t('toggleGuidesTitle')}
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
          title={t('resetCameraTitle')}
          className="p-2 rounded-md border border-white/10 bg-studio-900/80 hover:bg-white/10 text-gray-400 hover:text-white transition-colors backdrop-blur-md"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 pointer-events-none text-center bg-studio-900/70 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full text-[11px] text-gray-400">
        {t('mouseLookHelp')}
      </div>
    </div>
  );
};
