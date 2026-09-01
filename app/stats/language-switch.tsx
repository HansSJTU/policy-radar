'use client';

import { useEffect } from 'react';

import { persistLanguage } from '@/app/language-client';
import type { Language } from '@/app/language';

export function StatsLanguageSwitch({
  language,
  label,
}: {
  language: Language;
  label: string;
}) {
  useEffect(() => {
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  }, [language]);

  return (
    <form
      className="language-switch"
      aria-label={label}
      action="/stats"
      method="get"
    >
      <button
        type="submit"
        name="lang"
        value="zh"
        className={language === 'zh' ? 'active' : ''}
        aria-pressed={language === 'zh'}
        onClick={() => persistLanguage('zh')}
      >
        中
      </button>
      <button
        type="submit"
        name="lang"
        value="en"
        className={language === 'en' ? 'active' : ''}
        aria-pressed={language === 'en'}
        onClick={() => persistLanguage('en')}
      >
        EN
      </button>
    </form>
  );
}
