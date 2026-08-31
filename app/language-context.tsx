'use client';

import { createContext, useContext, type ReactNode } from 'react';
import type { Language } from './language';

const LanguageContext = createContext<Language>('zh');

export function LanguageProvider({ language, children }: { language: Language; children: ReactNode }) {
  return <LanguageContext.Provider value={language}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): Language {
  return useContext(LanguageContext);
}
