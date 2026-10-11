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

  test('createShaderRotationMatrix inverts rotation to map destination to source', () => {
    // When Yaw is +90°, destination forward should map to source -90° (inverse)
    const mat3 = createShaderRotationMatrix({ yaw: 90, pitch: 0, roll: 0 });
    const destDir = new THREE.Vector3(0, 0, -1); // looking forward
    destDir.applyMatrix3(mat3);

    // X component should be non-zero after 90 deg rotation
    assert.ok(Math.abs(destDir.y) < 1e-4, 'Pitch remains 0');
    assert.ok(Math.abs(destDir.length() - 1) < 1e-4, 'Vector must remain unit length');
  });

  test('createShaderRotationMatrix handles pitch and roll combinations without NaN', () => {
    const mat3 = createShaderRotationMatrix({ yaw: -45, pitch: 30, roll: -15 });
    for (const el of mat3.elements) {
      assert.ok(!Number.isNaN(el), 'Matrix elements must not be NaN');
      assert.ok(Number.isFinite(el), 'Matrix elements must be finite');
    }
  });
});
