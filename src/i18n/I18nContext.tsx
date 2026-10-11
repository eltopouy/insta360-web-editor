import React, { createContext, useContext, useEffect, useState } from 'react';
import type { Language, TranslationKey } from './translations';
import { translations } from './translations';
import { detectInitialLanguage, STORAGE_KEY } from './detectLanguage';

export { detectInitialLanguage };

export interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey, params?: Record<string, string | number>) => string;
  wasAutoDetected: boolean;
}

const I18nContext = createContext<I18nContextType | null>(null);

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [langState, setLangState] = useState<{ language: Language; wasAutoDetected: boolean }>(() => {
    let stored: string | null = null;
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        stored = window.localStorage.getItem(STORAGE_KEY);
      }
    } catch {
      // Ignore storage errors in restricted contexts
    }
    return detectInitialLanguage(undefined, stored);
  });

  const setLanguage = (lang: Language) => {
    setLangState({ language: lang, wasAutoDetected: false });
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem(STORAGE_KEY, lang);
      }
    } catch {
      // Ignore
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = langState.language;
    }
  }, [langState.language]);

  const t = (key: TranslationKey, params?: Record<string, string | number>): string => {
    const dict = translations[langState.language] || translations.en;
    let text: string = (dict as any)[key] || (translations.en as any)[key] || String(key);

    if (params) {
      for (const [k, v] of Object.entries(params)) {
        text = text.replace(new RegExp(`\\{${k}\\}`, 'g'), String(v));
      }
    }
    return text;
  };

  return (
    <I18nContext.Provider
      value={{
        language: langState.language,
        setLanguage,
        t,
        wasAutoDetected: langState.wasAutoDetected,
      }}
    >
      {children}
    </I18nContext.Provider>
  );
};

export function useTranslation(): I18nContextType {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error('useTranslation must be used within an I18nProvider');
  }
  return ctx;
}
