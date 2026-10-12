import * as THREE from 'three';
import type { Orientation, StitchingConfig } from '../types/index.ts';
import { degToRad } from './sphericalMath.ts';

export const DEFAULT_STITCHING_CONFIG: StitchingConfig = {
  projection: 'equirectangular',
  lensFov: 200,        // 200° native FOV for Insta360 ONE X/X2/X3/X4 fisheye lenses
  blendAngle: 10,      // 10° overlap feather blend
  centerOffsetX1: 0,   // Front lens micro X offset
  centerOffsetY1: 0,   // Front lens micro Y offset
  centerOffsetX2: 0,   // Rear lens micro X offset
  centerOffsetY2: 0,   // Rear lens micro Y offset
  radiusScale: 1.0,    // Circle radius scale

  // Advanced Optical & Physical Parameters (Insta360 Studio Engine)
  distortionK1: 0.0,
  distortionK2: 0.0,
  chromaticAbRed: 0.0,
  chromaticAbBlue: 0.0,
  lensBaselineMm: 28.0,      // 28mm inter-lens baseline for Insta360 ONE R
  convergenceDistance: 2.5,  // 2.5 meters default subject convergence distance
  exposureBalance: 0.0,
};

export const EquirectangularVertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

export const EquirectangularFragmentShader = /* glsl */ `
  precision highp float;
  varying vec2 vUv;

  uniform sampler2D tSource;
  uniform mat3 uRotationMatrix; // Rotation matrix for Yaw, Pitch, Roll
  
  // Optical Stitching Uniforms
  uniform int uInputProjection; // 0 = Equirectangular, 1 = Insta360 Dual-Fisheye
  uniform float uLensFovRad;    // Lens Field of View in radians (e.g. 200 deg)
  uniform float uBlendAngleRad; // Overlap feather zone in radians (e.g. 10 deg)
  uniform vec2 uCenterOffset1;  // Front lens center offset (u, v)
  uniform vec2 uCenterOffset2;  // Rear lens center offset (u, v)
  uniform float uRadiusScale;   // Lens circle radius scale

  // Advanced Optical & Physical Calibration Uniforms
  uniform float uDistortionK1;        // Polynomial radial distortion k1
  uniform float uDistortionK2;        // Polynomial radial distortion k2
  uniform float uChromaticAbRed;      // Lateral chromatic aberration Red factor
  uniform float uChromaticAbBlue;     // Lateral chromatic aberration Blue factor
  uniform float uLensBaselineMm;      // Inter-lens baseline in mm (e.g. 28mm)
  uniform float uConvergenceDistance; // Convergence distance in meters
  uniform float uExposureBalance;     // Overlap photometric exposure balance (-1 to 1)

  // Color adjustments
  uniform float uExposure;   // -1.0 to 1.0
  uniform float uBrightness; // -1.0 to 1.0
  uniform float uContrast;   // -1.0 to 1.0
  uniform float uSaturation; // -1.0 to 1.0
  uniform float uWarmth;     // -1.0 to 1.0

  // Nadir patch
  uniform bool uNadirEnabled;
  uniform float uNadirRadius; // in radians from south pole
  uniform float uNadirFeather;
  uniform int uNadirMode; // 0 = color, 1 = blur, 2 = mirror
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
    // 1. Convert output UV (0..1) to Spherical Coordinates (lon, lat)
    float lon = (vUv.x - 0.5) * TWO_PI;
    float lat = (vUv.y - 0.5) * PI;

    // 2. Spherical to 3D unit direction vector
    // Standard coordinates: Y is up, -Z is forward, X is right
    float cosLat = cos(lat);
    vec3 dir = vec3(
      cosLat * sin(lon),
      sin(lat),
      -cosLat * cos(lon)
    );

    // 3. Apply inverse rotation matrix to sample the original unrotated sphere
    vec3 srcDir = uRotationMatrix * dir;
    srcDir = normalize(srcDir);

    vec4 color;

    // 4. Sample Texture according to projection type
    if (uInputProjection == 1) {
      // -------------------------------------------------------------
      // INSTA360 DUAL-FISHEYE OPTICAL STITCHING ENGINE (ADVANCED)
      // -------------------------------------------------------------
      float thetaMax = uLensFovRad * 0.5;

      // Inter-lens physical baseline parallax correction:
      // Front lens nodal point is offset along -Z, rear lens along +Z.
      float baselineM = uLensBaselineMm * 0.001;
      float distM = max(0.2, uConvergenceDistance);
      vec3 dirFront = normalize(distM * srcDir - vec3(0.0, 0.0, -baselineM * 0.5));
      vec3 dirRear  = normalize(distM * srcDir - vec3(0.0, 0.0,  baselineM * 0.5));

      // Front Lens (Facing -Z)
      float cosTheta1 = clamp(-dirFront.z, -1.0, 1.0);
      float theta1 = acos(cosTheta1);

      // Rear Lens (Facing +Z)
      float cosTheta2 = clamp(dirRear.z, -1.0, 1.0);
      float theta2 = acos(cosTheta2);

      // Radii in UV coordinates for a 2:1 side-by-side dual-fisheye frame
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

      // Optical center distance quality factor (sharpness drops towards perimeter)
      float q1 = max(0.001, 1.0 - clamp(rho1 * rho1, 0.0, 1.0));
      float q2 = max(0.001, 1.0 - clamp(rho2 * rho2, 0.0, 1.0));
      float wQuality = q1 / (q1 + q2);
      float w = mix(wAngle, wQuality, 0.15);

      // Hard clamp if outside maximum optical FOV of either lens
      if (theta1 > thetaMax) {
        w = 0.0;
      } else if (theta2 > thetaMax) {
        w = 1.0;
      }

      // Sample color channels with Lateral Chromatic Aberration correction
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

      // Symmetric Photometric Exposure Balance in Overlap
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
      // -------------------------------------------------------------
      // EQUIRECTANGULAR 360 PROJECTION (SEAMLESS)
      // -------------------------------------------------------------
      float srcLat = asin(clamp(srcDir.y, -1.0, 1.0));
      float srcLon = atan(srcDir.x, -srcDir.z);

      // Without fract() and with RepeatWrapping, WebGL hardware derivative dFdx
      // stays continuous and eliminates the blurry vertical seam line!
      vec2 srcUv = vec2(
        srcLon / TWO_PI + 0.5,
        clamp(srcLat / PI + 0.5, 0.0001, 0.9999)
      );

      color = texture2D(tSource, srcUv);
    }

    // 5. Nadir Patch (Tripod / selfie-stick removal at South Pole)
    float srcLatPole = asin(clamp(srcDir.y, -1.0, 1.0));
    if (uNadirEnabled) {
      float southAngle = srcLatPole - (-PI * 0.5);
      if (southAngle < uNadirRadius) {
        float featherDist = uNadirRadius * max(0.01, uNadirFeather);
        float t = smoothstep(uNadirRadius - featherDist, uNadirRadius, southAngle);

        vec3 patchColor = uNadirColor;
        if (uNadirMode == 1) { // Blur mode
          float ringLat = -PI * 0.5 + uNadirRadius;
          float srcLon = atan(srcDir.x, -srcDir.z);
          vec2 ringUv = vec2(srcLon / TWO_PI + 0.5, ringLat / PI + 0.5);
          patchColor = texture2D(tSource, ringUv).rgb;
        } else if (uNadirMode == 2) { // Mirror mode
          float mirroredLat = -PI * 0.5 + (uNadirRadius - southAngle) + uNadirRadius;
          float srcLon = atan(srcDir.x, -srcDir.z);
          vec2 mirrorUv = vec2(srcLon / TWO_PI + 0.5, clamp(mirroredLat / PI + 0.5, 0.0001, 0.9999));
          patchColor = texture2D(tSource, mirrorUv).rgb;
        }
        color.rgb = mix(patchColor, color.rgb, t);
      }
    }

    // 6. Color Adjustments
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

/**
 * Calculates UV coordinates and blend weight for dual fisheye lenses
 * matching the GPU optical shader exactly.
 */
export function sampleDualFisheyeCoordinates(
  dir: { x: number; y: number; z: number },
  config: StitchingConfig
): {
  uv1: [number, number];
  uv2: [number, number];
  weightFront: number;
} {
  const len = Math.hypot(dir.x, dir.y, dir.z);
  const nx = dir.x / (len || 1);
  const ny = dir.y / (len || 1);
  const nz = dir.z / (len || 1);

  const thetaMax = degToRad(config.lensFov * 0.5);
  const blendAngleRad = degToRad(config.blendAngle);

  // Inter-lens physical baseline parallax correction
  const baselineM = (config.lensBaselineMm ?? 0) * 0.001;
  const distM = Math.max(0.2, config.convergenceDistance ?? 2.5);

  const fz = distM * nz - (-baselineM * 0.5);
  const rz = distM * nz - (baselineM * 0.5);
  const fxLen = Math.hypot(distM * nx, distM * ny, fz);
  const rxLen = Math.hypot(distM * nx, distM * ny, rz);

  const fDir = { x: (distM * nx) / (fxLen || 1), y: (distM * ny) / (fxLen || 1), z: fz / (fxLen || 1) };
  const rDir = { x: (distM * nx) / (rxLen || 1), y: (distM * ny) / (rxLen || 1), z: rz / (rxLen || 1) };

  // Front Lens (Facing -Z)
  const cosTheta1 = Math.max(-1, Math.min(1, -fDir.z));
  const theta1 = Math.acos(cosTheta1);

  // Rear Lens (Facing +Z)
  const cosTheta2 = Math.max(-1, Math.min(1, rDir.z));
  const theta2 = Math.acos(cosTheta2);

  const rx = 0.25 * config.radiusScale;
  const ry = 0.50 * config.radiusScale;

  const k1 = config.distortionK1 ?? 0;
  const k2 = config.distortionK2 ?? 0;

  // Front lens UV
  const d1 = Math.hypot(fDir.x, fDir.y);
  const dir2D1 = d1 > 1e-6 ? [fDir.x / d1, fDir.y / d1] : [0, 1];
  const rho1 = theta1 / Math.max(1e-4, thetaMax);
  const rho1Sq = rho1 * rho1;
  const rho1Poly = rho1 * (1.0 + k1 * rho1Sq + k2 * rho1Sq * rho1Sq);
  const u1 = 0.25 + config.centerOffsetX1 + rho1Poly * rx * dir2D1[0];
  const v1 = 0.50 + config.centerOffsetY1 + rho1Poly * ry * dir2D1[1];

  // Rear lens UV
  const rearDirXY = [-rDir.x, rDir.y];
  const d2 = Math.hypot(rearDirXY[0], rearDirXY[1]);
  const dir2D2 = d2 > 1e-6 ? [rearDirXY[0] / d2, rearDirXY[1] / d2] : [0, 1];
  const rho2 = theta2 / Math.max(1e-4, thetaMax);
  const rho2Sq = rho2 * rho2;
  const rho2Poly = rho2 * (1.0 + k1 * rho2Sq + k2 * rho2Sq * rho2Sq);
  const u2 = 0.75 + config.centerOffsetX2 + rho2Poly * rx * dir2D2[0];
  const v2 = 0.50 + config.centerOffsetY2 + rho2Poly * ry * dir2D2[1];

  // Blend weights
  const deltaTheta = theta2 - theta1;
  const halfBlend = Math.max(0.001, blendAngleRad);
  const t = Math.max(0, Math.min(1, (deltaTheta - (-halfBlend)) / (2 * halfBlend)));
  const wAngle = t * t * (3 - 2 * t);

  const q1 = Math.max(0.001, 1.0 - Math.min(1, rho1 * rho1));
  const q2 = Math.max(0.001, 1.0 - Math.min(1, rho2 * rho2));
  const wQuality = q1 / (q1 + q2);
  let w = 0.85 * wAngle + 0.15 * wQuality;

  if (theta1 > thetaMax) w = 0;
  else if (theta2 > thetaMax) w = 1;

  return {
    uv1: [u1, v1],
    uv2: [u2, v2],
    weightFront: w,
  };
}

/**
 * Creates or updates the rotation matrix uniform from Yaw, Pitch, Roll.
 */
export function createShaderRotationMatrix(orientation: Orientation): THREE.Matrix3 {
  const euler = new THREE.Euler(
    degToRad(orientation.pitch),
    degToRad(orientation.yaw),
    degToRad(orientation.roll),
    'YXZ'
  );
  const m4 = new THREE.Matrix4().makeRotationFromEuler(euler);
  // Transform output directions to source directions (inverse rotation)
  const m4Inv = m4.clone().invert();

  const m3 = new THREE.Matrix3();
  m3.setFromMatrix4(m4Inv);
  return m3;
}
