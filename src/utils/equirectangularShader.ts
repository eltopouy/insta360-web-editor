import * as THREE from 'three';
import type { Orientation, ColorAdjustments, NadirPatchConfig } from '../types/index.ts';
import { degToRad } from './sphericalMath.ts';

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
    // Standard Three.js coordinates: Y is up, -Z is forward, X is right
    float cosLat = cos(lat);
    vec3 dir = vec3(
      cosLat * sin(lon),
      sin(lat),
      -cosLat * cos(lon)
    );

    // 3. Apply inverse rotation matrix to sample the original unrotated sphere
    vec3 srcDir = uRotationMatrix * dir;
    srcDir = normalize(srcDir);

    // 4. Convert rotated 3D vector back to source UV
    float srcLat = asin(clamp(srcDir.y, -1.0, 1.0));
    float srcLon = atan(srcDir.x, -srcDir.z);

    vec2 srcUv = vec2(
      srcLon / TWO_PI + 0.5,
      srcLat / PI + 0.5
    );

    // Wrap horizontally seamlessly
    srcUv.x = fract(srcUv.x);
    srcUv.y = clamp(srcUv.y, 0.0001, 0.9999);

    // 5. Sample texture
    vec4 color = texture2D(tSource, srcUv);

    // 6. Nadir Patch (Bottom Pole trip-pod removal)
    if (uNadirEnabled) {
      // Angle from South pole (where lat = -PI/2)
      float southAngle = srcLat - (-PI * 0.5); // 0 at exact nadir pole, increases as we go up
      if (southAngle < uNadirRadius) {
        float featherDist = uNadirRadius * max(0.01, uNadirFeather);
        float t = smoothstep(uNadirRadius - featherDist, uNadirRadius, southAngle);

        vec3 patchColor = uNadirColor;
        if (uNadirMode == 1) { // Blur mode (samples nearby ring)
          vec2 ringUv = vec2(srcUv.x, (-PI * 0.5 + uNadirRadius) / PI + 0.5);
          patchColor = texture2D(tSource, ringUv).rgb;
        } else if (uNadirMode == 2) { // Mirror mode
          float mirroredLat = -PI * 0.5 + (uNadirRadius - southAngle) + uNadirRadius;
          vec2 mirrorUv = vec2(srcUv.x, mirroredLat / PI + 0.5);
          patchColor = texture2D(tSource, mirrorUv).rgb;
        }
        color.rgb = mix(patchColor, color.rgb, t);
      }
    }

    // 7. Color Adjustments
    // Exposure
    color.rgb *= pow(2.0, uExposure * 2.0);

    // Brightness
    color.rgb += uBrightness * 0.5;

    // Contrast
    color.rgb = (color.rgb - 0.5) * (1.0 + uContrast) + 0.5;

    // Warmth / Temperature
    color.r += uWarmth * 0.08;
    color.b -= uWarmth * 0.08;

    // Saturation
    vec3 hsv = rgb2hsv(color.rgb);
    hsv.y = clamp(hsv.y * (1.0 + uSaturation), 0.0, 1.0);
    color.rgb = hsv2rgb(hsv);

    gl_FragColor = vec4(clamp(color.rgb, 0.0, 1.0), 1.0);
  }
`;

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
  // We want to transform output directions to source directions, which is inverse:
  const m4Inv = m4.clone().invert();

  const m3 = new THREE.Matrix3();
  m3.setFromMatrix4(m4Inv);
  return m3;
}
