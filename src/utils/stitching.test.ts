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

  it('verifies optical projection with Insta360 ONE R (Dual-Lens 360 Mod) specifications', () => {
    const oneRConfig: StitchingConfig = {
      projection: 'dual_fisheye',
      lensFov: 198.5,     // ONE R modular 360 lens FOV
      blendAngle: 11.5,    // Feather overlap angle
      centerOffsetX1: 0,
      centerOffsetY1: 0,
      centerOffsetX2: 0,
      centerOffsetY2: 0,
      radiusScale: 0.99,
      distortionK1: -0.035,
      distortionK2: 0.008,
      chromaticAbRed: 0.004,
      chromaticAbBlue: -0.005,
      lensBaselineMm: 28.0,
      convergenceDistance: 2.0,
      exposureBalance: 0.0,
    };

    // Forward ray (-Z)
    const front = sampleDualFisheyeCoordinates({ x: 0, y: 0, z: -1 }, oneRConfig);
    assert.strictEqual(front.weightFront, 1.0);
    assert.ok(Math.abs(front.uv1[0] - 0.25) < 1e-4);
    assert.ok(Math.abs(front.uv1[1] - 0.50) < 1e-4);

    // Seam equator ray (X=1, Z=0)
    const seam = sampleDualFisheyeCoordinates({ x: 1, y: 0, z: 0 }, oneRConfig);
    assert.ok(Math.abs(seam.weightFront - 0.5) < 1e-4, 'ONE R seam must blend symmetrically');

    // Rear ray (+Z)
    const rear = sampleDualFisheyeCoordinates({ x: 0, y: 0, z: 1 }, oneRConfig);
    assert.strictEqual(rear.weightFront, 0.0);
    assert.ok(Math.abs(rear.uv2[0] - 0.75) < 1e-4);
    assert.ok(Math.abs(rear.uv2[1] - 0.50) < 1e-4);
  });

  it('verifies polynomial distortion (k1, k2) radially compresses or expands perimeter rays', () => {
    // 45 degree angle ray between optical axis and edge
    const angleRad = Math.PI / 4;
    const dir = { x: Math.sin(angleRad), y: 0, z: -Math.cos(angleRad) };

    const linearConfig: StitchingConfig = {
      ...DEFAULT_STITCHING_CONFIG,
      distortionK1: 0.0,
      distortionK2: 0.0,
      lensBaselineMm: 0,
    };
    const linearRes = sampleDualFisheyeCoordinates(dir, linearConfig);

    const barrelConfig: StitchingConfig = {
      ...DEFAULT_STITCHING_CONFIG,
      distortionK1: -0.08, // negative k1 pulls perimeter inward (barrel compensation)
      distortionK2: 0.0,
      lensBaselineMm: 0,
    };
    const barrelRes = sampleDualFisheyeCoordinates(dir, barrelConfig);

    // Barrel compensation pulls UV coordinate towards center (0.25)
    const linearDistFromCenter = Math.abs(linearRes.uv1[0] - 0.25);
    const barrelDistFromCenter = Math.abs(barrelRes.uv1[0] - 0.25);

    assert.ok(
      barrelDistFromCenter < linearDistFromCenter,
      `Expected barrel distortion to reduce radius: ${barrelDistFromCenter} < ${linearDistFromCenter}`
    );
  });

  it('verifies inter-lens baseline parallax adjusts rays at close convergence distances', () => {
    // Oblique ray where baseline parallax is active
    const dir = { x: 0.7071, y: 0, z: -0.7071 };

    const infinityConfig: StitchingConfig = {
      ...DEFAULT_STITCHING_CONFIG,
      lensBaselineMm: 28,
      convergenceDistance: 50.0, // practically infinity
    };
    const closeConfig: StitchingConfig = {
      ...DEFAULT_STITCHING_CONFIG,
      lensBaselineMm: 28,
      convergenceDistance: 0.8, // 80cm close subject
    };

    const infRes = sampleDualFisheyeCoordinates(dir, infinityConfig);
    const closeRes = sampleDualFisheyeCoordinates(dir, closeConfig);

    // Close subject ray shifts relative to infinity
    const uvShift = Math.hypot(closeRes.uv1[0] - infRes.uv1[0], closeRes.uv1[1] - infRes.uv1[1]);
    assert.ok(uvShift > 1e-4, 'Close range convergence must apply parallax offset to nodal point');
  });
});
