import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {
  degToRad,
  radToDeg,
  getRotationMatrix,
  vectorToYawPitch,
  formatDegrees,
  combineOrientations,
} from './sphericalMath.ts';

describe('Spherical Math Tests', () => {
  test('degToRad and radToDeg should convert accurately', () => {
    assert.strictEqual(degToRad(0), 0);
    assert.strictEqual(degToRad(180), Math.PI);
    assert.strictEqual(degToRad(360), Math.PI * 2);
    assert.strictEqual(degToRad(-90), -Math.PI / 2);

    assert.strictEqual(radToDeg(0), 0);
    assert.strictEqual(radToDeg(Math.PI), 180);
    assert.strictEqual(radToDeg(Math.PI * 2), 360);
    assert.strictEqual(radToDeg(-Math.PI / 2), -90);
  });

  test('formatDegrees should format positive and negative values correctly', () => {
    assert.strictEqual(formatDegrees(0, 1), '0.0°');
    assert.strictEqual(formatDegrees(15.23, 1), '+15.2°');
    assert.strictEqual(formatDegrees(-45.67, 1), '-45.7°');
  });

  test('getRotationMatrix returns identity when orientation is zero', () => {
    const mat = getRotationMatrix({ yaw: 0, pitch: 0, roll: 0 });
    const identity = new THREE.Matrix4();
    assert.ok(mat.equals(identity), 'Matrix at 0,0,0 must be identity');
  });

  test('getRotationMatrix transforms vectors predictably', () => {
    // 90 degree Yaw (around Y axis)
    const mat = getRotationMatrix({ yaw: 90, pitch: 0, roll: 0 });
    const forward = new THREE.Vector3(0, 0, -1);
    forward.applyMatrix4(mat);

    // After 90 deg Yaw, forward (-Z) should rotate towards East (+X)
    assert.ok(Math.abs(forward.x - 1.0) < 1e-4, 'Forward rotates to +X (East)');
    assert.ok(Math.abs(forward.y) < 1e-5, 'Y should remain 0');
    assert.ok(Math.abs(forward.length() - 1) < 1e-5, 'Length should remain 1');
  });

  test('vectorToYawPitch converts unit vectors to correct spherical angles', () => {
    // Forward direction: (0, 0, -1) -> yaw 0, pitch 0
    const forward = new THREE.Vector3(0, 0, -1);
    const angles1 = vectorToYawPitch(forward);
    assert.ok(Math.abs(angles1.yaw) < 1e-4, 'Forward Yaw should be 0');
    assert.ok(Math.abs(angles1.pitch) < 1e-4, 'Forward Pitch should be 0');

    // Zenith direction: (0, 1, 0) -> pitch +90
    const zenith = new THREE.Vector3(0, 1, 0);
    const angles2 = vectorToYawPitch(zenith);
    assert.strictEqual(Math.round(angles2.pitch), 90, 'Zenith Pitch should be 90°');

    // Nadir direction: (0, -1, 0) -> pitch -90
    const nadir = new THREE.Vector3(0, -1, 0);
    const angles3 = vectorToYawPitch(nadir);
    assert.strictEqual(Math.round(angles3.pitch), -90, 'Nadir Pitch should be -90°');
  });

  test('combineOrientations accurately composes 3D camera pose into orientation', () => {
    // Starting from 0, looking 45° right and 20° up
    const combined1 = combineOrientations({ yaw: 0, pitch: 0, roll: 0 }, 45, 20);
    assert.strictEqual(combined1.yaw, 45, 'Yaw must be +45°');
    assert.strictEqual(combined1.pitch, 20, 'Pitch must be +20°');

    // Combining with existing yaw +20°
    const combined2 = combineOrientations({ yaw: 20, pitch: 0, roll: 0 }, 30, 0);
    assert.strictEqual(combined2.yaw, 50, 'Yaw must be 20 + 30 = 50°');
  });
});
