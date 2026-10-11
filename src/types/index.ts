export interface Orientation {
  yaw: number;   // -180 to 180 degrees (Heading / Centro horizontal)
  pitch: number; // -90 to 90 degrees (Inclinación vertical)
  roll: number;  // -45 to 45 degrees (Nivel de horizonte)
}

export interface ColorAdjustments {
  exposure: number;   // -100 to 100
  brightness: number; // -100 to 100
  contrast: number;   // -100 to 100
  saturation: number; // -100 to 100
  warmth: number;     // -100 to 100
}

export interface NadirPatchConfig {
  enabled: boolean;
  radius: number;     // 5 to 40 degrees
  feather: number;    // 0 to 100%
  mode: 'blur' | 'mirror' | 'color';
  color: string;
}

export interface ReframeConfig {
  aspectRatio: '16:9' | '9:16' | '1:1' | '4:3';
  fov: number; // 30 to 160 degrees
}

export type InputProjection = 'equirectangular' | 'dual_fisheye';

export interface StitchingConfig {
  projection: InputProjection;
  lensFov: number;        // Lens Field of View in degrees (e.g. 200 for Insta360)
  blendAngle: number;     // Overlap feather blend angle in degrees (e.g. 10)
  centerOffsetX1: number; // Front lens center micro offset X (-0.05 to 0.05)
  centerOffsetY1: number; // Front lens center micro offset Y (-0.05 to 0.05)
  centerOffsetX2: number; // Rear lens center micro offset X (-0.05 to 0.05)
  centerOffsetY2: number; // Rear lens center micro offset Y (-0.05 to 0.05)
  radiusScale: number;    // Radius scale multiplier (0.90 to 1.10)
}

export type ViewMode = '3d' | 'equirectangular' | 'split';

export interface ImageMetadata {
  name: string;
  width: number;
  height: number;
  sizeBytes: number;
  format: string;
}

