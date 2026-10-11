import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from '../i18n/I18nContext';
import { LANGUAGES, Language } from '../i18n/translations';
import { Check, ChevronDown, Globe, Sparkles } from 'lucide-react';

export const LanguageSelector: React.FC = () => {
  const { language, setLanguage, t, wasAutoDetected } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentOption = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={t('languageSelector')}
        className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-medium transition-all ${
          isOpen
            ? 'bg-studio-700 border-studio-accent/40 text-white shadow-sm'
            : 'bg-studio-900/80 border-white/10 text-gray-300 hover:text-white hover:bg-studio-700/60'
        }`}
        title={wasAutoDetected ? `${t('languageSelector')} (${t('autoDetected')})` : t('languageSelector')}
      >
        <Globe className="w-3.5 h-3.5 text-studio-accent" />
        <span className="font-semibold text-[11px]">{currentOption.short}</span>
        {wasAutoDetected && (
          <span className="w-1.5 h-1.5 rounded-full bg-studio-accent" title={t('autoDetected')} />
        )}
        <ChevronDown className={`w-3 h-3 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div
          role="listbox"
          aria-label={t('languageSelector')}
          className="absolute right-0 mt-1.5 w-44 bg-studio-800 border border-white/15 rounded-xl shadow-2xl p-1 z-50 animate-fadeIn backdrop-blur-md"
        >
          <div className="px-2.5 py-1.5 border-b border-white/10 flex items-center justify-between text-[10px] font-mono text-gray-400">
            <span>{t('languageSelector')}</span>
            {wasAutoDetected && (
              <span className="text-studio-accent flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5" />
                {t('autoDetected')}
              </span>
            )}
          </div>

          <div className="py-1 space-y-0.5">
            {LANGUAGES.map(({ code, nativeName, name, flag }) => {
              const isSelected = language === code;
              return (
                <button
                  key={code}
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => handleSelect(code)}
                  className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-xs transition-colors ${
                    isSelected
                      ? 'bg-studio-accent/20 text-studio-accent font-bold'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-sm leading-none">{flag}</span>
                    <div className="text-left">
                      <div className="text-xs leading-none">{nativeName}</div>
                      <div className="text-[10px] text-gray-400 font-normal">{name}</div>
                    </div>
                  </div>
                  {isSelected && <Check className="w-3.5 h-3.5 text-studio-accent" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
