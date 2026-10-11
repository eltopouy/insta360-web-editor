import * as THREE from 'three';
import type { Orientation } from '../types/index.ts';

/**
 * Converts degrees to radians.
 */
export const degToRad = (deg: number) => (deg * Math.PI) / 180;

/**
 * Converts radians to degrees.
 */
export const radToDeg = (rad: number) => (rad * 180) / Math.PI;

/**
 * Builds a 3x3 rotation matrix for Yaw, Pitch, Roll (ZYX / YXZ order).
 * Yaw: rotation around Y-axis (heading)
 * Pitch: rotation around X-axis (elevation)
 * Roll: rotation around Z-axis (bank / horizon tilt)
 */
export function getRotationMatrix(orientation: Orientation): THREE.Matrix4 {
  const euler = new THREE.Euler(
    degToRad(orientation.pitch),
    degToRad(orientation.yaw),
    degToRad(orientation.roll),
    'YXZ'
  );
  const matrix = new THREE.Matrix4();
  matrix.makeRotationFromEuler(euler);
  return matrix;
}

/**
 * Converts a 3D direction vector from Three.js camera to spherical yaw and pitch.
 */
export function vectorToYawPitch(dir: THREE.Vector3): { yaw: number; pitch: number } {
  const normalized = dir.clone().normalize();
  // pitch: latitude angle from equator
  const pitch = Math.asin(normalized.y);
  // yaw: longitude angle around Y axis
  const yaw = Math.atan2(normalized.x, -normalized.z);

  return {
    yaw: radToDeg(yaw),
    pitch: radToDeg(pitch),
  };
}

/**
 * Formats degrees into a clean string like "+15.2°"
 */
export function formatDegrees(deg: number, decimals: number = 1): string {
  const rounded = deg.toFixed(decimals);
  return deg > 0 ? `+${rounded}°` : `${rounded}°`;
}
