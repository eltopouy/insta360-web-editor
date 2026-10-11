import test, { describe } from 'node:test';
import assert from 'node:assert/strict';
import { detectInitialLanguage } from '../i18n/detectLanguage.ts';
import { translations, LANGUAGES } from '../i18n/translations.ts';

describe('I18n Language Detection & Dictionary Tests', () => {
  test('detectInitialLanguage respects stored language preference', () => {
    assert.deepEqual(detectInitialLanguage('zh-CN', 'es'), {
      language: 'es',
      wasAutoDetected: false,
    });
    assert.deepEqual(detectInitialLanguage('es-ES', 'en'), {
      language: 'en',
      wasAutoDetected: false,
    });
    assert.deepEqual(detectInitialLanguage('en-US', 'zh'), {
      language: 'zh',
      wasAutoDetected: false,
    });
  });

  test('detectInitialLanguage auto-detects browser language when no preference stored', () => {
    // Chinese variations
    assert.deepEqual(detectInitialLanguage('zh-CN', null), {
      language: 'zh',
      wasAutoDetected: true,
    });
    assert.deepEqual(detectInitialLanguage('zh-TW', null), {
      language: 'zh',
      wasAutoDetected: true,
    });

    // Spanish variations
    assert.deepEqual(detectInitialLanguage('es-ES', null), {
      language: 'es',
      wasAutoDetected: true,
    });
    assert.deepEqual(detectInitialLanguage('es-AR', null), {
      language: 'es',
      wasAutoDetected: true,
    });

    // English and others fallback to English
    assert.deepEqual(detectInitialLanguage('en-US', null), {
      language: 'en',
      wasAutoDetected: true,
    });
    assert.deepEqual(detectInitialLanguage('fr-FR', null), {
      language: 'en',
      wasAutoDetected: true,
    });
    assert.deepEqual(detectInitialLanguage('de-DE', null), {
      language: 'en',
      wasAutoDetected: true,
    });
  });

  test('All translation dictionaries have identical complete keys and non-empty values', () => {
    const esKeys = Object.keys(translations.es).sort();
    const enKeys = Object.keys(translations.en).sort();
    const zhKeys = Object.keys(translations.zh).sort();

    assert.equal(esKeys.length, enKeys.length, 'Spanish and English key counts must match');
    assert.equal(esKeys.length, zhKeys.length, 'Spanish and Chinese key counts must match');

    // Check every key
    for (const key of esKeys) {
      assert.ok(
        key in translations.en,
        `Key "${key}" is present in Spanish but missing in English`
      );
      assert.ok(
        key in translations.zh,
        `Key "${key}" is present in Spanish but missing in Chinese`
      );

      const esVal = (translations.es as any)[key];
      const enVal = (translations.en as any)[key];
      const zhVal = (translations.zh as any)[key];

      assert.ok(typeof esVal === 'string' && esVal.length > 0, `es["${key}"] must be non-empty string`);
      assert.ok(typeof enVal === 'string' && enVal.length > 0, `en["${key}"] must be non-empty string`);
      assert.ok(typeof zhVal === 'string' && zhVal.length > 0, `zh["${key}"] must be non-empty string`);
    }
  });

  test('LANGUAGES registry contains all 3 supported codes', () => {
    const codes = LANGUAGES.map((l) => l.code);
    assert.deepEqual(codes.sort(), ['en', 'es', 'zh'].sort());
  });
});
