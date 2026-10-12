import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { createShaderRotationMatrix } from './equirectangularShader.ts';
import { degToRad } from './sphericalMath.ts';

describe('Equirectangular Shader Math Tests', () => {
  test('createShaderRotationMatrix returns 3x3 identity when orientation is 0', () => {
    const mat3 = createShaderRotationMatrix({ yaw: 0, pitch: 0, roll: 0 });
    const identity3 = new THREE.Matrix3();

    assert.deepStrictEqual(mat3.elements, identity3.elements, 'Matrix elements must match identity');
  });

  test('createShaderRotationMatrix maps output center to chosen yaw and pitch in source sphere', () => {
    // When Yaw is +90°, destination center (0, 0, -1) maps to source +90° longitude (East)
    const matYaw = createShaderRotationMatrix({ yaw: 90, pitch: 0, roll: 0 });
    const dirYaw = new THREE.Vector3(0, 0, -1).applyMatrix3(matYaw);
    const lonYaw = Math.atan2(dirYaw.x, -dirYaw.z) * 180 / Math.PI;
    assert.ok(Math.abs(lonYaw - 90) < 1e-4, 'Yaw +90° must map to source lon +90°');

    // When Pitch is +30°, destination center maps to source +30° latitude (Zenith)
    const matPitch = createShaderRotationMatrix({ yaw: 0, pitch: 30, roll: 0 });
    const dirPitch = new THREE.Vector3(0, 0, -1).applyMatrix3(matPitch);
    const latPitch = Math.asin(dirPitch.y) * 180 / Math.PI;
    assert.ok(Math.abs(latPitch - 30) < 1e-4, 'Pitch +30° must map to source lat +30°');

    // When Pitch is -30°, destination center maps to source -30° latitude (Ground)
    const matGround = createShaderRotationMatrix({ yaw: 0, pitch: -30, roll: 0 });
    const dirGround = new THREE.Vector3(0, 0, -1).applyMatrix3(matGround);
    const latGround = Math.asin(dirGround.y) * 180 / Math.PI;
    assert.ok(Math.abs(latGround - (-30)) < 1e-4, 'Pitch -30° must map to source lat -30°');
  });

  test('createShaderRotationMatrix handles pitch and roll combinations without NaN', () => {
    const mat3 = createShaderRotationMatrix({ yaw: -45, pitch: 30, roll: -15 });
    for (const el of mat3.elements) {
      assert.ok(!Number.isNaN(el), 'Matrix elements must not be NaN');
      assert.ok(Number.isFinite(el), 'Matrix elements must be finite');
    }
  });
});
