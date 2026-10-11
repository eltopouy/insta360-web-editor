/**
 * Injects Google Photo Sphere (GPano) XMP metadata into a JPEG ArrayBuffer or Blob.
 * Correctly preserves JFIF (APP0) and replaces any existing XMP (APP1) segments.
 * Guarantees that Google Photos, Facebook, VR Headsets (Meta Quest, Vision Pro),
 * and 360 viewers recognize the exported file as a full 360° equirectangular photo.
 */

export function createGPanoXmpXml(width: number, height: number): string {
  return `<x:xmpmeta xmlns:x="adobe:ns:meta/" x:xmptk="Adobe XMP Core 5.1.0-jc003">
  <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
    <rdf:Description rdf:about=""
      xmlns:GPano="http://ns.google.com/photos/1.0/panorama/">
      <GPano:UsePanoramaViewer>True</GPano:UsePanoramaViewer>
      <GPano:CaptureSoftware>360 Studio Web</GPano:CaptureSoftware>
      <GPano:StitchingSoftware>360 Studio Web</GPano:StitchingSoftware>
      <GPano:ProjectionType>Equirectangular</GPano:ProjectionType>
      <GPano:PoseHeadingDegrees>0.0</GPano:PoseHeadingDegrees>
      <GPano:PosePitchDegrees>0.0</GPano:PosePitchDegrees>
      <GPano:PoseRollDegrees>0.0</GPano:PoseRollDegrees>
      <GPano:InitialViewHeadingDegrees>0.0</GPano:InitialViewHeadingDegrees>
      <GPano:InitialViewPitchDegrees>0.0</GPano:InitialViewPitchDegrees>
      <GPano:CroppedAreaImageWidthPixels>${width}</GPano:CroppedAreaImageWidthPixels>
      <GPano:CroppedAreaImageHeightPixels>${height}</GPano:CroppedAreaImageHeightPixels>
      <GPano:FullPanoWidthPixels>${width}</GPano:FullPanoWidthPixels>
      <GPano:FullPanoHeightPixels>${height}</GPano:FullPanoHeightPixels>
      <GPano:CroppedAreaLeftPixels>0</GPano:CroppedAreaLeftPixels>
      <GPano:CroppedAreaTopPixels>0</GPano:CroppedAreaTopPixels>
    </rdf:Description>
  </rdf:RDF>
</x:xmpmeta>`;
}

export async function injectGPanoMetadataToBlob(jpegBlob: Blob, width: number, height: number): Promise<Blob> {
  const arrayBuffer = await jpegBlob.arrayBuffer();
  const bytes = new Uint8Array(arrayBuffer);

  // Validate JPEG SOI (0xFF, 0xD8)
  if (bytes.length < 4 || bytes[0] !== 0xff || bytes[1] !== 0xd8) {
    console.warn("Input is not a standard JPEG, returning original blob");
    return jpegBlob;
  }

  const xmpXml = createGPanoXmpXml(width, height);
  const encoder = new TextEncoder();
  const xmpBytes = encoder.encode(xmpXml);

  // Standard XMP namespace identifier: "http://ns.adobe.com/xap/1.0/\0" (29 bytes)
  const xmpHeader = encoder.encode("http://ns.adobe.com/xap/1.0/\0");

  // APP1 payload length = 2 (for length field itself) + header + xmpBytes
  const payloadLength = 2 + xmpHeader.length + xmpBytes.length;
  if (payloadLength > 65535) {
    console.error("XMP payload too large for a single APP1 marker");
    return jpegBlob;
  }

  // Build the new APP1 segment
  const app1Segment = new Uint8Array(2 + payloadLength);
  app1Segment[0] = 0xff;
  app1Segment[1] = 0xe1; // APP1 marker
  app1Segment[2] = (payloadLength >> 8) & 0xff;
  app1Segment[3] = payloadLength & 0xff;
  app1Segment.set(xmpHeader, 4);
  app1Segment.set(xmpBytes, 4 + xmpHeader.length);

  // Parse existing JPEG segments to find insertion point after APP0 (JFIF)
  // and strip any pre-existing XMP APP1 segments to avoid conflicts
  let pos = 2; // after SOI
  let insertPos = 2;
  const segmentsToKeep: { start: number; end: number }[] = [];

  while (pos < bytes.length - 1) {
    if (bytes[pos] === 0xff) {
      const marker = bytes[pos + 1];

      // Stop scanning if SOS (Start of Scan - 0xDA) or EOI (0xD9)
      if (marker === 0xda || marker === 0xd9) {
        break;
      }

      // Standalone markers without length: RST0..RST7, SOI
      if (marker === 0xd8 || (marker >= 0xd0 && marker <= 0xd7)) {
        pos += 2;
        continue;
      }

      if (pos + 3 >= bytes.length) break;
      const segLength = (bytes[pos + 2] << 8) | bytes[pos + 3];
      const segEnd = pos + 2 + segLength;

      // APP0 (JFIF) marker: must stay before our APP1
      if (marker === 0xe0) {
        insertPos = segEnd;
        pos = segEnd;
        continue;
      }

      // Check if existing APP1 is an XMP packet (starts with "http://ns.adobe.com/xap/1.0/")
      if (marker === 0xe1 && segLength >= 31) {
        const segPayload = bytes.subarray(pos + 4, pos + 4 + 28);
        const headerStr = new TextDecoder().decode(segPayload);
        if (headerStr.startsWith("http://ns.adobe.com/xap/1.0/")) {
          // Skip this old XMP segment
          pos = segEnd;
          continue;
        }
      }

      pos = segEnd;
    } else {
      pos++;
    }
  }

  // Construct final JPEG:
  // [0..insertPos] + [our new APP1 segment] + [insertPos..end]
  const before = bytes.subarray(0, insertPos);
  const after = bytes.subarray(insertPos);

  const combined = new Uint8Array(before.length + app1Segment.length + after.length);
  combined.set(before, 0);
  combined.set(app1Segment, before.length);
  combined.set(after, before.length + app1Segment.length);

  return new Blob([combined], { type: 'image/jpeg' });
}
