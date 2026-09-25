'use client';

import { useEffect, type MouseEvent } from 'react';

import {
  hasPersistedLanguage,
  persistLanguage,
} from '@/app/language-client';
import { languageFromReferrer, type Language } from '@/app/language';

// Each page is rendered in one language on the server, so switching reloads the
// page in the other language. With JavaScript the current query and section are
// kept; without it the form still submits to `action`.
export function PageLanguageSwitch({
  action,
  language,
  label,
  hidden = {},
}: {
  action: string;
  language: Language;
  label: string;
  hidden?: Record<string, string>;
}) {
  useEffect(() => {
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    // A first visit from a Chinese community opened in Chinese; keep that
    // for later direct visits, which carry no referrer.
    if (
      !hasPersistedLanguage() &&
      languageFromReferrer(document.referrer) === language
    ) {
      persistLanguage(language);
    }
  }, [language]);

  const switchTo = (event: MouseEvent<HTMLButtonElement>, next: Language) => {
    persistLanguage(next);
    event.preventDefault();
    if (next === language) return;
    const url = new URL(window.location.href);
    url.searchParams.set('lang', next);
    window.location.assign(url);
  };

  return (
    <form
      className="language-switch"
      aria-label={label}
      action={action}
      method="get"
    >
      {Object.entries(hidden).map(([name, value]) => (
        <input key={name} type="hidden" name={name} value={value} />
      ))}
      {(['zh', 'en'] as const).map((option) => (
        <button
          key={option}
          type="submit"
          name="lang"
          value={option}
          className={language === option ? 'active' : ''}
          aria-pressed={language === option}
          onClick={(event) => switchTo(event, option)}
        >
          {option === 'zh' ? '中' : 'EN'}
        </button>
      ))}
    </form>
  );
}
