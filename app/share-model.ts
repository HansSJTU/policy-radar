import type { Language } from './language';

export type ShareContent = { title: string; text: string; url: string };

export type ShareItem = {
  kind: 'policy' | 'school';
  id: string;
  title: string;
  summary: string;
  status: string;
  scope: string;
  checkedOn: string;
  caveat: string;
  href: string;
  unverified?: boolean;
};

export const itemShareLabels = {
  zh: {
    brand: '留美路径雷达', policy: '政策追踪', school: 'CPT 学校追踪',
    status: '当前状态', scope: '适用范围', checkedOn: '最后核对',
    caveat: '请留意', entry: '查看原文与最新状态',
    freshness: '状态可能已变化，请打开原文复核。',
    unverified: '社区线索 · 待核实',
  },
  en: {
    brand: 'Stay Path Radar', policy: 'POLICY TRACKER', school: 'CPT SCHOOL TRACKER',
    status: 'Current status', scope: 'Applies to', checkedOn: 'Last checked',
    caveat: 'Keep in mind', entry: 'Read the full record & latest status',
    freshness: 'Status may have changed. Open the record to recheck.',
    unverified: 'Community report · Unverified',
  },
};

export function buildItemShareContent(item: ShareItem, language: Language): ShareContent {
  const ui = itemShareLabels[language];
  // Use the published entry, never the sender's current filter, local host or UTM.
  const url = new URL(item.href);
  url.search = '';
  url.searchParams.set('lang', language);
  url.searchParams.set('utm_source', 'share');
  url.searchParams.set('utm_medium', 'earned');
  url.searchParams.set('utm_campaign', `${item.kind}-${item.id}`);
  const text = [
    item.title,
    `${ui.status}：${item.status}`,
    item.summary,
    `${ui.scope}：${item.scope}`,
    `${ui.caveat}：${item.caveat}`,
    `${ui.checkedOn}：${item.checkedOn} · ET`,
    ui.freshness,
    ui.brand,
    `${ui.entry}：${url.href}`,
  ].join('\n');
  return { title: item.title, text, url: url.href };
}

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
