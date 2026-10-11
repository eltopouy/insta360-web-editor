import { describe, it } from 'node:test';
import assert from 'node:assert';
import {
  DEFAULT_STITCHING_CONFIG,
  sampleDualFisheyeCoordinates,
} from './equirectangularShader.ts';
import type { StitchingConfig } from '../types/index.ts';

describe('Insta360 Optical Stitching Engine & Math Tests', () => {
  it('default stitching configuration matches Insta360 optical lens specifications', () => {
    assert.strictEqual(DEFAULT_STITCHING_CONFIG.projection, 'equirectangular');
    assert.strictEqual(DEFAULT_STITCHING_CONFIG.lensFov, 200); // 200° FOV native for ONE X/X2/X3/X4
    assert.strictEqual(DEFAULT_STITCHING_CONFIG.blendAngle, 10);
    assert.strictEqual(DEFAULT_STITCHING_CONFIG.centerOffsetX1, 0);
    assert.strictEqual(DEFAULT_STITCHING_CONFIG.centerOffsetY1, 0);
    assert.strictEqual(DEFAULT_STITCHING_CONFIG.centerOffsetX2, 0);
    assert.strictEqual(DEFAULT_STITCHING_CONFIG.centerOffsetY2, 0);
    assert.strictEqual(DEFAULT_STITCHING_CONFIG.radiusScale, 1.0);
  });

  it('samples 100% front lens when ray points forward along optical axis (-Z)', () => {
    const dir = { x: 0, y: 0, z: -1 };
    const result = sampleDualFisheyeCoordinates(dir, DEFAULT_STITCHING_CONFIG);

    assert.strictEqual(result.weightFront, 1.0);
    // Front lens center is (0.25, 0.50)
    assert.ok(Math.abs(result.uv1[0] - 0.25) < 1e-4);
    assert.ok(Math.abs(result.uv1[1] - 0.50) < 1e-4);
  });

  it('samples 100% rear lens when ray points backward along optical axis (+Z)', () => {
    const dir = { x: 0, y: 0, z: 1 };
    const result = sampleDualFisheyeCoordinates(dir, DEFAULT_STITCHING_CONFIG);

    assert.strictEqual(result.weightFront, 0.0);
    // Rear lens center is (0.75, 0.50)
    assert.ok(Math.abs(result.uv2[0] - 0.75) < 1e-4);
    assert.ok(Math.abs(result.uv2[1] - 0.50) < 1e-4);
  });

  it('computes exact 50/50 smoothstep blend on the optical seam boundary (Z = 0)', () => {
    // East side seam: x = 1, y = 0, z = 0
    const dirEast = { x: 1, y: 0, z: 0 };
    const resultEast = sampleDualFisheyeCoordinates(dirEast, DEFAULT_STITCHING_CONFIG);

    assert.ok(
      Math.abs(resultEast.weightFront - 0.5) < 1e-4,
      `Expected weight 0.5 at seam, got ${resultEast.weightFront}`
    );

    // West side seam: x = -1, y = 0, z = 0
    const dirWest = { x: -1, y: 0, z: 0 };
    const resultWest = sampleDualFisheyeCoordinates(dirWest, DEFAULT_STITCHING_CONFIG);

    assert.ok(
      Math.abs(resultWest.weightFront - 0.5) < 1e-4,
      `Expected weight 0.5 at seam, got ${resultWest.weightFront}`
    );
  });

  it('blends seamlessly at Zenith (Y = +1) and Nadir (Y = -1) poles', () => {
    const dirZenith = { x: 0, y: 1, z: 0 };
    const resZenith = sampleDualFisheyeCoordinates(dirZenith, DEFAULT_STITCHING_CONFIG);
    assert.ok(Math.abs(resZenith.weightFront - 0.5) < 1e-4);

    const dirNadir = { x: 0, y: -1, z: 0 };
    const resNadir = sampleDualFisheyeCoordinates(dirNadir, DEFAULT_STITCHING_CONFIG);
    assert.ok(Math.abs(resNadir.weightFront - 0.5) < 1e-4);
  });

  it('smoothly transitions weight across the feather blend overlap zone', () => {
    // Check points transitioning from front to rear across the seam
    const blendRad = (DEFAULT_STITCHING_CONFIG.blendAngle * Math.PI) / 180;
    let prevWeight = 1.0;

    // Moving z from -0.3 (front) to +0.3 (rear)
    for (let z = -0.25; z <= 0.25; z += 0.05) {
      const dir = { x: Math.sqrt(1 - z * z), y: 0, z };
      const { weightFront } = sampleDualFisheyeCoordinates(dir, DEFAULT_STITCHING_CONFIG);

      assert.ok(weightFront >= 0.0 && weightFront <= 1.0);
      assert.ok(weightFront <= prevWeight + 1e-5, 'Weight must decrease monotonically moving toward rear lens');
      prevWeight = weightFront;
    }
  });

  it('applies micro center offsets accurately to lens coordinates', () => {
    const customConfig: StitchingConfig = {
      ...DEFAULT_STITCHING_CONFIG,
      centerOffsetX1: 0.015,
      centerOffsetY1: -0.020,
      centerOffsetX2: -0.010,
      centerOffsetY2: 0.025,
    };

    const frontDir = { x: 0, y: 0, z: -1 };
    const frontRes = sampleDualFisheyeCoordinates(frontDir, customConfig);
    assert.ok(Math.abs(frontRes.uv1[0] - (0.25 + 0.015)) < 1e-4);
    assert.ok(Math.abs(frontRes.uv1[1] - (0.50 - 0.020)) < 1e-4);

    const rearDir = { x: 0, y: 0, z: 1 };
    const rearRes = sampleDualFisheyeCoordinates(rearDir, customConfig);
    assert.ok(Math.abs(rearRes.uv2[0] - (0.75 - 0.010)) < 1e-4);
    assert.ok(Math.abs(rearRes.uv2[1] - (0.50 + 0.025)) < 1e-4);
  });

  it('verifies mountain elevation mathematical 2π-periodicity across x=0 and x=width', () => {
    const width = 2048;
    const height = 1024;
    const halfH = height / 2;
    const twoPi = Math.PI * 2;

    const calcMountainY = (x: number): number => {
      const angle1 = (x / width) * twoPi * 4;
      const angle2 = (x / width) * twoPi * 9;
      const angle3 = (x / width) * twoPi * 15;
      return halfH - 28 - Math.sin(angle1) * 18 - Math.cos(angle2) * 14 - Math.sin(angle3) * 6;
    };

    const yStart = calcMountainY(0);
    const yEnd = calcMountainY(width);

    // Difference must be zero down to float precision
    assert.ok(
      Math.abs(yStart - yEnd) < 1e-10,
      `Expected seamless horizon match at x=0 (${yStart}) and x=width (${yEnd})`
    );
  });
});
