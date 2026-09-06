import type { Language } from './language';

export type ShareContent = { title: string; text: string; url: string };

export function buildShareContent(href: string, language: Language, pageTitle?: string): ShareContent {
  const url = new URL(href);
  // Share the current page and section, not acquisition tags or arbitrary query data.
  url.search = '';
  url.searchParams.set('lang', language);
  const title = pageTitle ?? (language === 'en' ? 'Stay Path Radar' : '留美路径雷达');
  const description = language === 'en'
    ? 'F-1 · CPT · OPT · H-1B policy updates'
    : 'F-1 · CPT · OPT · H-1B 政策追踪';
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
