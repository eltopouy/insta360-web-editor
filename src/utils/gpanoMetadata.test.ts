import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { createGPanoXmpXml, injectGPanoMetadataToBlob } from './gpanoMetadata.ts';

describe('GPano XMP Metadata Tests', () => {
  test('createGPanoXmpXml generates valid XML with required tags', () => {
    const xml = createGPanoXmpXml(5760, 2880);

    assert.ok(xml.includes('<GPano:UsePanoramaViewer>True</GPano:UsePanoramaViewer>'), 'Must specify UsePanoramaViewer True');
    assert.ok(xml.includes('<GPano:ProjectionType>Equirectangular</GPano:ProjectionType>'), 'Must specify ProjectionType Equirectangular');
    assert.ok(xml.includes('<GPano:FullPanoWidthPixels>5760</GPano:FullPanoWidthPixels>'), 'Must specify FullPanoWidthPixels');
    assert.ok(xml.includes('<GPano:FullPanoHeightPixels>2880</GPano:FullPanoHeightPixels>'), 'Must specify FullPanoHeightPixels');
    assert.ok(xml.includes('<GPano:CroppedAreaImageWidthPixels>5760</GPano:CroppedAreaImageWidthPixels>'));
    assert.ok(xml.includes('<GPano:CroppedAreaImageHeightPixels>2880</GPano:CroppedAreaImageHeightPixels>'));
    assert.ok(xml.includes('xmlns:GPano="http://ns.google.com/photos/1.0/panorama/"'), 'Must include GPano namespace');
  });

  test('injectGPanoMetadataToBlob injects APP1 marker and preserves JFIF APP0', async () => {
    // Construct a minimal dummy JPEG: SOI (FF D8) + APP0 (FF E0 00 10 ...) + SOS + EOI (FF D9)
    const app0Payload = new Uint8Array([
      0xff, 0xd8, // SOI
      0xff, 0xe0, // APP0
      0x00, 0x10, // length = 16
      0x4a, 0x46, 0x49, 0x46, 0x00, // JFIF\0
      0x01, 0x01, 0x00, 0x00, 0x01, 0x00, 0x01, 0x00, 0x00,
      0xff, 0xda, 0x00, 0x08, 0x01, 0x01, 0x00, 0x00, 0x3f, 0x00, // SOS
      0xff, 0xd9  // EOI
    ]);

    const dummyBlob = new Blob([app0Payload], { type: 'image/jpeg' });
    const injectedBlob = await injectGPanoMetadataToBlob(dummyBlob, 4096, 2048);

    assert.strictEqual(injectedBlob.type, 'image/jpeg');
    const bytes = new Uint8Array(await injectedBlob.arrayBuffer());

    // 1. Must start with SOI
    assert.strictEqual(bytes[0], 0xff);
    assert.strictEqual(bytes[1], 0xd8);

    // 2. Must preserve APP0 immediately after SOI
    assert.strictEqual(bytes[2], 0xff);
    assert.strictEqual(bytes[3], 0xe0);

    // 3. Must have APP1 marker (0xFF, 0xE1) after APP0
    const app0Len = (bytes[4] << 8) | bytes[5];
    const app1Start = 2 + 2 + app0Len;
    assert.strictEqual(bytes[app1Start], 0xff, 'Must be APP1 marker prefix 0xFF');
    assert.strictEqual(bytes[app1Start + 1], 0xe1, 'Must be APP1 marker 0xE1');

    // 4. Must contain XMP identifier "http://ns.adobe.com/xap/1.0/"
    const textDecoder = new TextDecoder();
    const segmentSlice = bytes.subarray(app1Start + 4, app1Start + 4 + 28);
    const identifier = textDecoder.decode(segmentSlice);
    assert.strictEqual(identifier, 'http://ns.adobe.com/xap/1.0/');

    // 5. Must contain the GPano tags inside
    const fullText = textDecoder.decode(bytes);
    assert.ok(fullText.includes('<GPano:ProjectionType>Equirectangular</GPano:ProjectionType>'));
  });

  test('injectGPanoMetadataToBlob returns original blob if not JPEG', async () => {
    const pngDummy = new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
    const pngBlob = new Blob([pngDummy], { type: 'image/png' });

    const result = await injectGPanoMetadataToBlob(pngBlob, 100, 100);
    const resultBytes = new Uint8Array(await result.arrayBuffer());
    assert.deepStrictEqual(resultBytes, pngDummy, 'Should not modify non-JPEG files');
  });
});
