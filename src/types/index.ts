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

export type ViewMode = '3d' | 'equirectangular' | 'split';

export interface ImageMetadata {
  name: string;
  width: number;
  height: number;
  sizeBytes: number;
  format: string;
}
