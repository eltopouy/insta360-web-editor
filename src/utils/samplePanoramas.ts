/**
 * Generates an equirectangular 360 test panorama with sky, horizon, mountains,
 * compass directions (N, E, S, W), and a tripod at the nadir pole.
 */
export function generateProceduralDemo360(width = 2048, height = 1024): string {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  const halfH = height / 2;

  // 1. Sky Gradient (top half: lat 0 to +90)
  const skyGrad = ctx.createLinearGradient(0, 0, 0, halfH);
  skyGrad.addColorStop(0, '#0b1d3a'); // Zenith deep space blue
  skyGrad.addColorStop(0.5, '#1e4877');
  skyGrad.addColorStop(0.85, '#e0844f'); // Sunset golden glow
  skyGrad.addColorStop(1, '#ffc371'); // Horizon warm line
  ctx.fillStyle = skyGrad;
  ctx.fillRect(0, 0, width, halfH);

  // 2. Stars in zenith
  ctx.fillStyle = '#ffffff';
  for (let i = 0; i < 150; i++) {
    const x = Math.random() * width;
    const y = Math.random() * (halfH * 0.4);
    const r = Math.random() * 1.5;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  // 3. Distant Mountains on Horizon
  ctx.fillStyle = '#2c1e3d';
  ctx.beginPath();
  ctx.moveTo(0, halfH);
  for (let x = 0; x <= width; x += 30) {
    const y = halfH - 25 - Math.sin(x * 0.015) * 20 - Math.cos(x * 0.035) * 15;
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

  // 7. Cardinal compass points (N = 0/center or sides, E = 90°, S = 180°, W = 270°)
  // Equirectangular: center x = width/2 is 0° (North / Forward)
  const points = [
    { label: 'NORTE (0°)', x: width * 0.5, color: '#00d26a' },
    { label: 'ESTE (90°)', x: width * 0.75, color: '#38bdf8' },
    { label: 'SUR (180°)', x: width, color: '#f43f5e' },
    { label: 'SUR (180°)', x: 0, color: '#f43f5e' },
    { label: 'OESTE (-90°)', x: width * 0.25, color: '#fbbf24' },
  ];

  ctx.font = 'bold 24px monospace';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  for (const pt of points) {
    ctx.fillStyle = pt.color;
    ctx.fillRect(pt.x - 70, halfH - 60, 140, 36);
    ctx.fillStyle = '#0d0f12';
    ctx.fillText(pt.label, pt.x, halfH - 42);

    // Vertical line to horizon
    ctx.strokeStyle = pt.color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(pt.x, halfH - 24);
    ctx.lineTo(pt.x, halfH + 20);
    ctx.stroke();
  }

  // 8. Simulated Selfie Stick / Tripod at Nadir (Bottom pole: y near height)
  // This gives the user an immediate object to test the Nadir Patch feature!
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
