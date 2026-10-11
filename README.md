# 360 Studio Web — Editor & Optical Stitching Suite for Insta360

[![React](https://img.shields.io/badge/React-18.3-blue.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6.svg)](https://www.typescriptlang.org/)
[![Three.js](https://img.shields.io/badge/Three.js-r170-black.svg)](https://threejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC.svg)](https://tailwindcss.com/)
[![Tests](https://img.shields.io/badge/Tests-31%2F31%20passing-brightgreen.svg)]()
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![MCP](https://img.shields.io/badge/MCP-Bridge%20Ready-purple.svg)](https://modelcontextprotocol.io/)

A modern, high-performance, client-side 360° photo editor designed specifically for **Insta360** action cameras. Runs 100% in the browser using WebGL shaders on the GPU with zero cloud uploads, ensuring complete privacy, blazing speed, and no memory limits for 5.7K, 6K, and 8K panoramas.

---

## 🌟 Supported Cameras & Formats

| Camera Model | Native Resolution | Optical Profile | Supported Formats |
| :--- | :--- | :--- | :--- |
| **Insta360 ONE R (Dual-Lens 360 Mod)** | **6080 × 3040 (6K)** | FOV 198.5°, Feather 11.5° | `.insp`, `.jpg`, `.png` |
| **Insta360 ONE RS (360 Mod)** | **6080 × 3040 (6K)** | FOV 198.5°, Feather 11.5° | `.insp`, `.jpg`, `.png` |
| **Insta360 ONE X & ONE X2** | **5760 × 2880 (5.7K)** | FOV 200.0°, Feather 10.0° | `.insp`, `.jpg`, `.png` |
| **Insta360 X3 & X4** | **5760 × 2880 / 8K (72MP)** | FOV 200.0°, Feather 10.0° | `.insp`, `.jpg`, `.png` |
| **Universal 360 Panoramas** | Any 2:1 Aspect Ratio | Equirectangular ($2\pi$ wrap) | `.jpg`, `.png`, `.webp` |

---

## 🚀 Key Features

### 1. GPU Optical Dual-Fisheye Stitching Engine
* **Real-time Equidistant Projection ($r = f \cdot \theta$):** Translates raw side-by-side circular fisheye images into seamless equirectangular spheres directly in WebGL.
* **$C^1$-Continuous Smoothstep Overlap Blending:** Smoothly blends the optical transition zone between front and back lenses with zero visible seams, cliffs, or exposure hard lines.
* **Camera Model Presets:** 1-click profiles for **ONE R / RS**, **ONE X / X2**, and **X3 / X4**.
* **Micro-Alignment Calibration:** Fine-tune lens centers ($X$ and $Y$ offsets) and optical radius scale with sub-pixel precision.
* **Auto-Detection:** Automatically detects whether an uploaded photo is an unstitched dual-fisheye file or an already-stitched equirectangular panorama.

### 2. Native Insta360 `.insp` File Handling
* Directly drag-and-drop or upload `.insp` files straight from your camera SD card without having to rename or convert them to `.jpg`.

### 3. Interactive Viewports
* **3D Sphere View:** Orbit camera controls, FOV zoom (30° to 120°), horizon line guide, and center reticle.
* **2:1 Flat Equirectangular View:** Full panorama view with direct mouse-drag yaw & pitch recentering.
* **Split-Screen View:** Side-by-side 3D perspective and flat panorama for real-time comparison.
* **"Set as Front" Button:** Click anywhere in the 3D world to instantly make that direction the new heading center (Yaw = 0°).

### 4. Orientation & Auto-Leveling
* Full 3-axis rotation: **Yaw** (-180° to 180°), **Pitch** (-90° to 90°), and **Roll** (-45° to 45°).
* **Auto-Level Horizon:** 1-click button to level tilted shots (resets Pitch & Roll to 0° while preserving your chosen heading).

### 5. Nadir Patch (Tripod & Selfie Stick Remover)
* Automatically conceal or blur the tripod, shadow, or selfie stick at the nadir south pole (-90°).
* Modes: **Blur** (samples surrounding terrain ring), **Mirror** (reflects ground texture), and **Solid Color**.
* Adjustable radius (5° to 40°) and edge feathering (0% to 100%).

### 6. 2D Photo Reframing Tool
* Extract traditional flat photos from any angle and focal length inside your 360 sphere.
* Aspect Ratios: **16:9** (Horizontal), **9:16** (Stories / Reels / TikTok), **1:1** (Instagram), **4:3**.
* Presets: *Tiny Planet*, *Wide Angle*, *Natural 50mm*, and *Telephoto*.

### 7. Google Photo Sphere (GPano XMP) Metadata Injection
* Automatically injects compliant GPano XMP headers into exported JPEGs.
* Ensures Facebook, Google Photos, Google Street View, Meta Quest, Apple Vision Pro, and VR apps recognize the file as an interactive 360 photo.
* Output resolutions: **8K (7680×3840)**, **6K ONE R (6080×3040)**, **5.7K (5760×2880)**, **4K (3840×1920)**, **2K (2048×1024)**, or **Original**.

### 8. Native Trilingual Support (i18n)
* **Español** (Spanish)
* **English** (English)
* **简体中文** (Chinese)
* Auto-detects browser locale with instant manual switching.

### 9. AI Bridge — Model Context Protocol (MCP) Server
* Built-in MCP server (`mcp/server.mjs`) communicating via stdio JSON-RPC and local WebSocket on port `5174`.
* Allows AI coding assistants (Claude Desktop, Antigravity, Cursor, etc.) to query editor telemetry, adjust angles, level horizons, reframe shots, and trigger exports programmatically.

---

## 📦 Installation & Quick Start

### Prerequisites
* [Node.js](https://nodejs.org/) v18+ (tested on Node v20 and v24)
* npm v9+

### Setup
```bash
# Clone the repository
git clone https://github.com/eltopouy/insta360-web-editor.git
cd insta360-web-editor

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🧪 Automated Testing

The project includes 31 unit tests covering all mathematical, optical, metadata, and internationalization routines:

```bash
npm test
```

Test suites include:
* **Insta360 Optical Stitching Engine & Math** (dual-fisheye projection, seam 50/50 blend, ONE R specifications)
* **Equirectangular Shader Math** (3x3 rotation matrices, inverse spherical mapping)
* **Spherical Math** (vector to yaw/pitch conversions, degree-radian conversions)
* **Editor Features & Validation** (angle wrap-around, nadir radius calculations, aspect ratios)
* **GPano XMP Metadata** (APP1 marker injection, JFIF preservation)
* **I18n Registry & Translations** (complete key parity across ES, EN, ZH)
* **MCP Server Protocol** (RFC 6455 WebSocket framing, JSON-RPC 2.0 command handling)

---

## 🤖 Running the MCP Server for AI Agents

To allow an AI assistant to control the editor:

```bash
# Start the MCP WebSocket and stdio bridge
npm run mcp
```

### Claude Desktop Configuration (`claude_desktop_config.json`)
```json
{
  "mcpServers": {
    "insta360-editor": {
      "command": "node",
      "args": ["/path/to/insta360-web-editor/mcp/server.mjs"]
    }
  }
}
```

Available MCP Tools:
* `get_editor_state` — Retrieve current orientation, color adjustments, stitching config, file name.
* `set_orientation` — Update Yaw, Pitch, Roll in degrees.
* `auto_level_horizon` — Auto-level Pitch and Roll to 0°.
* `configure_stitching` — Switch between Dual-Fisheye and Equirectangular, adjust FOV and feather.
* `configure_nadir_patch` — Enable/tune tripod removal patch.
* `set_color_adjustments` — Tune exposure, contrast, saturation, warmth.
* `trigger_reframe_snapshot` — Capture flat 2D snapshot with custom aspect ratio and FOV.
* `set_language` — Switch interface language (`es`, `en`, `zh`).
* `open_export_modal` — Open the 360 panorama export dialog.

---

## 🏗️ Production Build

```bash
npm run build
```

Generates optimized assets in `dist/`. Can be statically hosted on GitHub Pages, Vercel, Netlify, or any static web server.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
