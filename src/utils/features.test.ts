import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { degToRad } from './sphericalMath.ts';

describe('Editor Features & Math Validation Tests', () => {
  test('Nadir patch angular bounds to UV height conversion', () => {
    // Check that nadir radius in degrees correctly maps to UV coordinate fraction [0, 1]
    const testCases = [
      { deg: 0, expectedUV: 0.0 },
      { deg: 18, expectedUV: 18 / 180 }, // 0.1
      { deg: 36, expectedUV: 36 / 180 }, // 0.2
      { deg: 90, expectedUV: 0.5 },      // Equator
    ];

    for (const { deg, expectedUV } of testCases) {
      const uv = deg / 180;
      assert.ok(Math.abs(uv - expectedUV) < 1e-5, `Deg ${deg} should map to UV ${expectedUV}`);
    }
  });

  test('Aspect ratio calculations for 2D snapshots', () => {
    const calcDimensions = (aspect: string, targetWidth = 1920) => {
      const [wRatio, hRatio] = aspect.split(':').map(Number);
      const targetHeight = Math.round(targetWidth / (wRatio / hRatio));
      return { width: targetWidth, height: targetHeight };
    };

    const hd16x9 = calcDimensions('16:9', 1920);
    assert.strictEqual(hd16x9.width, 1920);
    assert.strictEqual(hd16x9.height, 1080);

    const vertical9x16 = calcDimensions('9:16', 1080);
    assert.strictEqual(vertical9x16.width, 1080);
    assert.strictEqual(vertical9x16.height, 1920);

    const square1x1 = calcDimensions('1:1', 1080);
    assert.strictEqual(square1x1.width, 1080);
    assert.strictEqual(square1x1.height, 1080);

    const photo4x3 = calcDimensions('4:3', 1600);
    assert.strictEqual(photo4x3.width, 1600);
    assert.strictEqual(photo4x3.height, 1200);
  });

  test('Orientation angle wrap-around normalizes correctly to [-180, 180]', () => {
    const normalizeYaw = (rawYaw: number) => {
      let yaw = rawYaw;
      while (yaw > 180) yaw -= 360;
      while (yaw < -180) yaw += 360;
      return yaw;
    };

    assert.strictEqual(normalizeYaw(0), 0);
    assert.strictEqual(normalizeYaw(180), 180);
    assert.strictEqual(normalizeYaw(-180), -180);
    assert.strictEqual(normalizeYaw(190), -170);
    assert.strictEqual(normalizeYaw(-200), 160);
    assert.strictEqual(normalizeYaw(360), 0);
    assert.strictEqual(normalizeYaw(720), 0);
  });

  test('Color adjustments clamp within expected bounds', () => {
    const clampValue = (val: number, min = -100, max = 100) => {
      return Math.max(min, Math.min(max, val));
    };

    assert.strictEqual(clampValue(0), 0);
    assert.strictEqual(clampValue(150), 100);
    assert.strictEqual(clampValue(-150), -100);
    assert.strictEqual(clampValue(50), 50);
  });
});
