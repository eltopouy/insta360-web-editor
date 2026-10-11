import type { Language } from './translations.ts';

export const STORAGE_KEY = 'insta360_lang';

export function detectInitialLanguage(
  navLanguage?: string,
  storedLanguage?: string | null
): { language: Language; wasAutoDetected: boolean } {
  // 1. Check user preference stored in localStorage
  if (storedLanguage && (storedLanguage === 'es' || storedLanguage === 'en' || storedLanguage === 'zh')) {
    return { language: storedLanguage as Language, wasAutoDetected: false };
  }

  // 2. Auto-detect from browser navigator language
  const detected = (navLanguage || (typeof navigator !== 'undefined' ? navigator.language : '')).toLowerCase();

  if (detected.startsWith('zh')) {
    return { language: 'zh', wasAutoDetected: true };
  }
  if (detected.startsWith('es')) {
    return { language: 'es', wasAutoDetected: true };
  }

  // Default to English
  return { language: 'en', wasAutoDetected: true };
}
