/**
 * Generates an equirectangular 360 test panorama with sky, horizon, mountains,
 * compass directions (N, E, S, W), and a tripod at the nadir pole.
 * Mathematically 2π-periodic to guarantee zero seam discontinuity across x=0 and x=width.
 */
export function generateProceduralDemo360(width = 2048, height = 1024): string {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  const halfH = height / 2;
  const twoPi = Math.PI * 2;

  // 1. Sky Gradient (top half: lat 0 to +90)
  const skyGrad = ctx.createLinearGradient(0, 0, 0, halfH);
  skyGrad.addColorStop(0, '#0b1d3a'); // Zenith deep space blue
  skyGrad.addColorStop(0.5, '#1e4877');
  skyGrad.addColorStop(0.85, '#e0844f'); // Sunset golden glow
  skyGrad.addColorStop(1, '#ffc371'); // Horizon warm line
  ctx.fillStyle = skyGrad;
  ctx.fillRect(0, 0, width, halfH);

  // 2. Stars in zenith (strictly periodic distribution)
  ctx.fillStyle = '#ffffff';
  for (let i = 0; i < 150; i++) {
    const x = ((i * 137.5) % width);
    const y = ((i * 73.1) % (halfH * 0.4));
    const r = (i % 3) * 0.5 + 0.8;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  // 3. Distant Mountains on Horizon - STRICTLY 2π-PERIODIC FREQUENCIES
  // Integer harmonics k * 2π / width guarantee f(0) == f(width) and f'(0) == f'(width)
  ctx.fillStyle = '#2c1e3d';
  ctx.beginPath();
  ctx.moveTo(0, halfH);
  for (let x = 0; x <= width; x += 16) {
    const angle1 = (x / width) * twoPi * 4;  // Harmonic 4
    const angle2 = (x / width) * twoPi * 9;  // Harmonic 9
    const angle3 = (x / width) * twoPi * 15; // Harmonic 15
    const y = halfH - 28 - Math.sin(angle1) * 18 - Math.cos(angle2) * 14 - Math.sin(angle3) * 6;
    ctx.lineTo(x, y);
  }
  ctx.lineTo(width, halfH);
  ctx.closePath();
  ctx.fill();

  // 4. Ground Gradient (bottom half: lat 0 to -90)
  const groundGrad = ctx.createLinearGradient(0, halfH, 0, height);
  groundGrad.addColorStop(0, '#1a2a1f'); // Horizon green/dark
  groundGrad.addColorStop(0.3, '#142017');
  groundGrad.addColorStop(0.7, '#0d1510');
  groundGrad.addColorStop(1, '#080d0a'); // Nadir pole
  ctx.fillStyle = groundGrad;
  ctx.fillRect(0, halfH, width, halfH);

  // 5. Ground perspective grid
  ctx.strokeStyle = 'rgba(0, 210, 106, 0.15)';
  ctx.lineWidth = 1;
  for (let i = 1; i <= 12; i++) {
    const y = halfH + (halfH * (i / 13) ** 1.8);
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }
  for (let x = 0; x < width; x += width / 24) {
    ctx.beginPath();
    ctx.moveTo(x, halfH);
    ctx.lineTo(x, height);
    ctx.stroke();
  }

  // 6. Horizon line (Latitude = 0°)
  ctx.strokeStyle = '#00d26a';
  ctx.lineWidth = 2;
  ctx.setLineDash([8, 8]);
  ctx.beginPath();
  ctx.moveTo(0, halfH);
  ctx.lineTo(width, halfH);
  ctx.stroke();
  ctx.setLineDash([]);

  // 7. Cardinal compass points (N = 0/center, E = 90°, S = 180° seam, W = -90°)
  const points = [
    { label: 'NORTE (0°)', x: width * 0.5, color: '#00d26a' },
    { label: 'ESTE (90°)', x: width * 0.75, color: '#38bdf8' },
    { label: 'OESTE (-90°)', x: width * 0.25, color: '#fbbf24' },
  ];

  ctx.font = 'bold 22px monospace';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  for (const pt of points) {
    ctx.fillStyle = pt.color;
    ctx.fillRect(pt.x - 70, halfH - 60, 140, 36);
    ctx.fillStyle = '#0d0f12';
    ctx.fillText(pt.label, pt.x, halfH - 42);

    ctx.strokeStyle = pt.color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(pt.x, halfH - 24);
    ctx.lineTo(pt.x, halfH + 20);
    ctx.stroke();
  }

  // Draw SOUTH tag with periodic wrapping across x=0 and x=width
  const drawSouthTag = (cx: number) => {
    ctx.fillStyle = '#f43f5e';
    ctx.fillRect(cx - 70, halfH - 60, 140, 36);
    ctx.fillStyle = '#0d0f12';
    ctx.fillText('SUR (180°)', cx, halfH - 42);

    ctx.strokeStyle = '#f43f5e';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cx, halfH - 24);
    ctx.lineTo(cx, halfH + 20);
    ctx.stroke();
  };
  // Render at both boundaries so wrapping in 360 is seamless
  drawSouthTag(0);
  drawSouthTag(width);

  // 8. Simulated Selfie Stick / Tripod at Nadir (Bottom pole: y near height)
  ctx.fillStyle = '#111111';
  ctx.beginPath();
  ctx.arc(width / 2, height - 20, 50, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#ff4d4f';
  ctx.lineWidth = 3;
  ctx.stroke();

  // Tripod legs
  ctx.strokeStyle = '#666666';
  ctx.lineWidth = 4;
  for (let a = 0; a < Math.PI * 2; a += (Math.PI * 2) / 3) {
    ctx.beginPath();
    ctx.moveTo(width / 2, height - 20);
    ctx.lineTo(width / 2 + Math.cos(a) * 90, height - 20 + Math.sin(a) * 40);
    ctx.stroke();
  }

  ctx.fillStyle = '#ff4d4f';
  ctx.font = 'bold 14px sans-serif';
  ctx.fillText('TRÍPODE INSTA360 (NADIR)', width / 2, height - 75);

  return canvas.toDataURL('image/jpeg', 0.95);
}

/**
 * Generates an authentic Insta360 unstitched Dual-Fisheye circular sample.
 * Left half: Front lens circle (200° FOV, facing 0° North).
 * Right half: Rear lens circle (200° FOV, facing 180° South).
 * Black circular boundaries outside the lens apertures.
 */
export function generateProceduralDualFisheyeDemo(width = 2048, height = 1024): string {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  // 1. Black Sensor Housing
  ctx.fillStyle = '#060709';
  ctx.fillRect(0, 0, width, height);

  const radius = height * 0.485;
  const c1x = width * 0.25;
  const c1y = height * 0.5;
  const c2x = width * 0.75;
  const c2y = height * 0.5;

  // Function to render a fisheye circle
  const renderFisheyeLens = (
    cx: number,
    cy: number,
    label: string,
    skyTop: string,
    horizonColor: string,
    groundColor: string,
    cardinalText: string,
    accentColor: string
  ) => {
    ctx.save();
    // Clip circle
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.clip();

    // Fisheye gradient
    const sky = ctx.createRadialGradient(cx, cy - radius * 0.2, 10, cx, cy, radius);
    sky.addColorStop(0, skyTop);
    sky.addColorStop(0.65, horizonColor);
    sky.addColorStop(0.85, groundColor);
    sky.addColorStop(1, '#05070a');
    ctx.fillStyle = sky;
    ctx.fillRect(cx - radius, cy - radius, radius * 2, radius * 2);

    // Concentric fisheye coordinate rings (at 45°, 90°, 100° FOV)
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
    ctx.lineWidth = 1;
    [0.45, 0.90, 1.0].forEach((ratio) => {
      ctx.beginPath();
      ctx.arc(cx, cy, radius * ratio, 0, Math.PI * 2);
      ctx.stroke();
    });

    // Optical Equator (90° boundary)
    ctx.strokeStyle = accentColor;
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.arc(cx, cy, radius * 0.90, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);

    // Horizon line
    ctx.strokeStyle = 'rgba(0, 210, 106, 0.4)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cx - radius, cy);
    ctx.lineTo(cx + radius, cy);
    ctx.stroke();

    // Center Crosshair
    ctx.strokeStyle = accentColor;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cx - 20, cy);
    ctx.lineTo(cx + 20, cy);
    ctx.moveTo(cx, cy - 20);
    ctx.lineTo(cx, cy + 20);
    ctx.stroke();

    // Central Label Badge
    ctx.fillStyle = 'rgba(10, 14, 20, 0.85)';
    ctx.strokeStyle = accentColor;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.roundRect(cx - 100, cy - 55, 200, 36, 6);
    ctx.fill();
    ctx.stroke();

    ctx.font = 'bold 15px monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = accentColor;
    ctx.fillText(cardinalText, cx, cy - 37);

    // Title label at top
    ctx.font = 'bold 13px sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(label, cx, cy - radius + 30);

    // Overlap zone indicator
    ctx.font = '11px monospace';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.fillText('SOLAPAMIENTO 200° FOV', cx, cy + radius - 25);

    // Selfie stick base at nadir
    ctx.fillStyle = '#1c1f24';
    ctx.beginPath();
    ctx.arc(cx, cy + radius - 45, 18, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#f43f5e';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.restore();

    // Outer aperture ring
    ctx.strokeStyle = '#222831';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.stroke();
  };

  // Render Front Lens (North 0°)
  renderFisheyeLens(
    c1x,
    c1y,
    'LENTE FRONTAL (INSTA360)',
    '#0b224d',
    '#e0844f',
    '#1c2921',
    'FRONT: NORTE (0°)',
    '#00d26a'
  );

  // Render Rear Lens (South 180°)
  renderFisheyeLens(
    c2x,
    c2y,
    'LENTE TRASERA (INSTA360)',
    '#1a153b',
    '#d9534f',
    '#25201c',
    'REAR: SUR (180°)',
    '#38bdf8'
  );

  return canvas.toDataURL('image/jpeg', 0.95);
}

/**
 * Automatically inspects an image to determine if it is an unstitched Insta360
 * Dual-Fisheye file or an already-stitched Equirectangular panorama.
 */
export function detectInputProjection(
  canvas: HTMLCanvasElement | HTMLImageElement
): 'equirectangular' | 'dual_fisheye' {
  try {
    const testCanvas = document.createElement('canvas');
    testCanvas.width = 64;
    testCanvas.height = 32;
    const ctx = testCanvas.getContext('2d');
    if (!ctx) return 'equirectangular';

    ctx.drawImage(canvas, 0, 0, 64, 32);
    const imgData = ctx.getImageData(0, 0, 64, 32).data;

    // Sample the 4 outer corners and center split top/bottom
    // In dual-fisheye files, all corners outside the circular lenses are black (< 25 luminance)
    const checkPixelLuminance = (x: number, y: number): number => {
      const idx = (y * 64 + x) * 4;
      return (imgData[idx] * 0.299 + imgData[idx + 1] * 0.587 + imgData[idx + 2] * 0.114);
    };

    const corner1 = checkPixelLuminance(1, 1);
    const corner2 = checkPixelLuminance(62, 1);
    const corner3 = checkPixelLuminance(1, 30);
    const corner4 = checkPixelLuminance(62, 30);
    const centerTop = checkPixelLuminance(32, 1);
    const centerBottom = checkPixelLuminance(32, 30);

    // Center of front and back lenses (should be bright)
    const centerLens1 = checkPixelLuminance(16, 16);
    const centerLens2 = checkPixelLuminance(48, 16);

    const cornersDark = (corner1 < 25 && corner2 < 25 && corner3 < 25 && corner4 < 25 && centerTop < 25 && centerBottom < 25);
    const centersBright = (centerLens1 > 35 || centerLens2 > 35);

    if (cornersDark && centersBright) {
      return 'dual_fisheye';
    }
  } catch {
    // Fallback on security/cors
  }
  return 'equirectangular';
}
