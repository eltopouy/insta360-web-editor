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
 * Builds a 3D rotation matrix for Yaw, Pitch, Roll (Euler 'YXZ' order).
 * Yaw: heading (turn right > 0)
 * Pitch: elevation (tilt up > 0)
 * Roll: bank (horizon tilt clockwise > 0)
 */
export function getRotationMatrix(orientation: Orientation): THREE.Matrix4 {
  if (orientation.yaw === 0 && orientation.pitch === 0 && orientation.roll === 0) {
    return new THREE.Matrix4();
  }
  const euler = new THREE.Euler(
    degToRad(orientation.pitch),
    degToRad(-orientation.yaw),
    degToRad(-orientation.roll),
    'YXZ'
  );
  const matrix = new THREE.Matrix4();
  matrix.makeRotationFromEuler(euler);
  return matrix;
}

/**
 * Combines an existing orientation with an interactive 3D camera pose (lon, lat).
 * Uses exact 3D matrix multiplication to prevent gimbal lock and preserve the hit point.
 */
export function combineOrientations(prev: Orientation, cameraLon: number, cameraLat: number): Orientation {
  const mCam = new THREE.Matrix4().makeRotationFromEuler(
    new THREE.Euler(degToRad(cameraLat), degToRad(-cameraLon), 0, 'YXZ')
  );
  const mCurrent = getRotationMatrix(prev);
  const mTotal = mCam.multiply(mCurrent);
  const newEuler = new THREE.Euler().setFromRotationMatrix(mTotal, 'YXZ');

  let newYaw = -newEuler.y * (180 / Math.PI);
  while (newYaw > 180) newYaw -= 360;
  while (newYaw < -180) newYaw += 360;

  let newPitch = newEuler.x * (180 / Math.PI);
  newPitch = Math.max(-90, Math.min(90, newPitch));

  let newRoll = -newEuler.z * (180 / Math.PI);
  while (newRoll > 180) newRoll -= 360;
  while (newRoll < -180) newRoll += 360;

  return {
    yaw: Math.round(newYaw * 10) / 10,
    pitch: Math.round(newPitch * 10) / 10,
    roll: Math.round(newRoll * 10) / 10,
  };
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
