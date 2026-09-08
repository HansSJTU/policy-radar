import type { Language } from './language';

export type ShareContent = { title: string; text: string; url: string };

export function buildShareContent(href: string, language: Language, pageTitle?: string, pageDescription?: string): ShareContent {
  const url = new URL(href);
  const path = url.searchParams.get('path');
  // Allow only content parameters; keep the current section in url.hash.
  url.search = '';
  url.searchParams.set('lang', language);
  if (url.pathname === '/' && path && ['F-1', 'CPT', 'OPT', 'H-1B'].includes(path)) {
    url.searchParams.set('path', path);
  }
  const title = pageTitle ?? (language === 'en' ? 'Stay Path Radar' : '留美路径雷达');
  const description = pageDescription ?? (language === 'en'
    ? 'F-1 · CPT · OPT · H-1B policy updates'
    : 'F-1 · CPT · OPT · H-1B 政策追踪');
  return { title, url: url.href, text: title + '\n' + description + '\n' + url.href };
}

export function buildShareLinks(content: ShareContent, appleMobile: boolean) {
  const text = encodeURIComponent(content.text);
  return {
    messages: 'sms:' + (appleMobile ? '&' : '?') + 'body=' + text,
    email: 'mailto:?subject=' + encodeURIComponent(content.title) + '&body=' + text,
    whatsapp: 'https://wa.me/?text=' + text,
  };
}
