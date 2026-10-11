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
      // INSTA360 DUAL-FISHEYE OPTICAL STITCHING ENGINE
      // -------------------------------------------------------------
      float thetaMax = uLensFovRad * 0.5;

      // Front Lens (Facing -Z)
      // theta1 is angle between ray and front optical axis (0, 0, -1)
      float cosTheta1 = clamp(-srcDir.z, -1.0, 1.0);
      float theta1 = acos(cosTheta1);

      // Rear Lens (Facing +Z)
      // theta2 is angle between ray and rear optical axis (0, 0, 1)
      float cosTheta2 = clamp(srcDir.z, -1.0, 1.0);
      float theta2 = acos(cosTheta2);

      // Radii in UV coordinates for a 2:1 side-by-side dual-fisheye frame
      // Width = 2 * Height. Height spans [0..1] in UV Y.
      // So circle radius is 0.5 in Y, and 0.25 in X.
      float rx = 0.25 * uRadiusScale;
      float ry = 0.50 * uRadiusScale;

      // Front lens UV mapping (centered at 0.25, 0.5)
      float d1 = length(srcDir.xy);
      vec2 dir2D1 = (d1 > 1e-6) ? (srcDir.xy / d1) : vec2(0.0, 1.0);
      float rho1 = theta1 / max(1e-4, thetaMax);
      vec2 c1 = vec2(0.25 + uCenterOffset1.x, 0.5 + uCenterOffset1.y);
      vec2 uv1 = c1 + rho1 * vec2(rx * dir2D1.x, ry * dir2D1.y);

      // Rear lens UV mapping (centered at 0.75, 0.5)
      // For rear camera facing +Z, camera right is -X
      vec2 rearDirXY = vec2(-srcDir.x, srcDir.y);
      float d2 = length(rearDirXY);
      vec2 dir2D2 = (d2 > 1e-6) ? (rearDirXY / d2) : vec2(0.0, 1.0);
      float rho2 = theta2 / max(1e-4, thetaMax);
      vec2 c2 = vec2(0.75 + uCenterOffset2.x, 0.5 + uCenterOffset2.y);
      vec2 uv2 = c2 + rho2 * vec2(rx * dir2D2.x, ry * dir2D2.y);

      // Overlap blending between front and rear lenses
      // deltaTheta > 0 means closer to front lens; deltaTheta < 0 means closer to rear lens
      float deltaTheta = theta2 - theta1;
      float halfBlend = max(0.001, uBlendAngleRad);
      float w = smoothstep(-halfBlend, halfBlend, deltaTheta);

      // Hard clamp if outside maximum optical FOV of either lens
      if (theta1 > thetaMax) {
        w = 0.0;
      } else if (theta2 > thetaMax) {
        w = 1.0;
      }

      if (w <= 0.001) {
        color = texture2D(tSource, uv2);
      } else if (w >= 0.999) {
        color = texture2D(tSource, uv1);
      } else {
        vec4 col1 = texture2D(tSource, uv1);
        vec4 col2 = texture2D(tSource, uv2);
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

  // Front Lens (Facing -Z)
  const cosTheta1 = Math.max(-1, Math.min(1, -nz));
  const theta1 = Math.acos(cosTheta1);

  // Rear Lens (Facing +Z)
  const cosTheta2 = Math.max(-1, Math.min(1, nz));
  const theta2 = Math.acos(cosTheta2);

  const rx = 0.25 * config.radiusScale;
  const ry = 0.50 * config.radiusScale;

  // Front lens UV
  const d1 = Math.hypot(nx, ny);
  const dir2D1 = d1 > 1e-6 ? [nx / d1, ny / d1] : [0, 1];
  const rho1 = theta1 / Math.max(1e-4, thetaMax);
  const u1 = 0.25 + config.centerOffsetX1 + rho1 * rx * dir2D1[0];
  const v1 = 0.50 + config.centerOffsetY1 + rho1 * ry * dir2D1[1];

  // Rear lens UV
  const rearDirXY = [-nx, ny];
  const d2 = Math.hypot(rearDirXY[0], rearDirXY[1]);
  const dir2D2 = d2 > 1e-6 ? [rearDirXY[0] / d2, rearDirXY[1] / d2] : [0, 1];
  const rho2 = theta2 / Math.max(1e-4, thetaMax);
  const u2 = 0.75 + config.centerOffsetX2 + rho2 * rx * dir2D2[0];
  const v2 = 0.50 + config.centerOffsetY2 + rho2 * ry * dir2D2[1];

  // Smoothstep blend
  const deltaTheta = theta2 - theta1;
  const halfBlend = Math.max(0.001, blendAngleRad);
  const t = Math.max(0, Math.min(1, (deltaTheta - (-halfBlend)) / (2 * halfBlend)));
  let w = t * t * (3 - 2 * t);

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
