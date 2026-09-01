'use client';

import { LANGUAGE_COOKIE, type Language } from './language';

export function persistLanguage(language: Language) {
  const secure = window.location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = `${LANGUAGE_COOKIE}=${language}; Path=/; Max-Age=31536000; SameSite=Lax${secure}`;
}
