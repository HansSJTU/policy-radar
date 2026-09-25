import type { Language } from './language';
import { SITE_UPDATED_ON } from './policy-freshness.ts';
import { localizedPageUrl, POLICY_SITE_URL } from './policy-links.ts';
import { getUpdateLog, type ContentChange } from './update-log.ts';

// Enough history for a new subscriber; older changes stay on /updates.
const FEED_LIMIT = 60;

const feedCopy = {
  zh: {
    title: '留美路径政策雷达 · 更新记录',
    subtitle: 'F-1、CPT、OPT、H-1B 相关政策的状态、时间线与来源变化。',
    before: '更新前：',
    after: '更新后：',
    sources: '来源：',
  },
  en: {
    title: 'U.S. Stay Path Policy Radar · Updates',
    subtitle:
      'Changes to the status, timelines, and sources of F-1, CPT, OPT, and H-1B policies.',
    before: 'Before: ',
    after: 'After: ',
    sources: 'Sources: ',
  },
};

export function feedUrl(language: Language): string {
  return `${POLICY_SITE_URL}/feed.xml?lang=${language}`;
}

export function changeAnchor(change: Pick<ContentChange, 'id'>): string {
  return `change-${change.id}`;
}

function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Update log days are Eastern Time dates; noon UTC falls on the same day there.
const timestamp = (day: string) => `${day}T12:00:00Z`;

function changeHtml(change: ContentChange, language: Language): string {
  const ui = feedCopy[language];
  const parts = [`<p>${escapeXml(change.summary)}</p>`];
  if (change.before) {
    parts.push(`<p><strong>${ui.before}</strong>${escapeXml(change.before)}</p>`);
  }
  if (change.after) {
    parts.push(`<p><strong>${ui.after}</strong>${escapeXml(change.after)}</p>`);
  }
  if (change.details?.length) {
    parts.push(
      `<ul>${change.details.map((detail) => `<li>${escapeXml(detail)}</li>`).join('')}</ul>`,
    );
  }
  if (change.sources.length) {
    const links = change.sources.map(
      (source) => `<a href="${escapeXml(source.href)}">${escapeXml(source.label)}</a>`,
    );
    parts.push(`<p>${ui.sources}${links.join(' · ')}</p>`);
  }
  return parts.join('');
}

export function buildUpdateFeed(language: Language): string {
  const ui = feedCopy[language];
  const updatesUrl = localizedPageUrl('/updates', language);
  const log = getUpdateLog(language);
  const entries = log
    .flatMap((update) =>
      update.changes.map((change) => ({ date: update.date, change })),
    )
    .slice(0, FEED_LIMIT);

  const entryXml = entries.map(({ date, change }) =>
    [
      '<entry>',
      `<id>tag:${new URL(POLICY_SITE_URL).host},${date}:${language}/${escapeXml(change.id)}</id>`,
      `<title>${escapeXml(`${change.category} · ${change.title}`)}</title>`,
      `<link rel="alternate" type="text/html" href="${escapeXml(`${updatesUrl}#${changeAnchor(change)}`)}"/>`,
      `<updated>${timestamp(date)}</updated>`,
      `<category term="${escapeXml(change.category)}"/>`,
      `<summary>${escapeXml(change.summary)}</summary>`,
      `<content type="html">${escapeXml(changeHtml(change, language))}</content>`,
      '</entry>',
    ].join('\n'),
  );

  return [
    '<?xml version="1.0" encoding="utf-8"?>',
    `<feed xmlns="http://www.w3.org/2005/Atom" xml:lang="${language === 'zh' ? 'zh-CN' : 'en'}">`,
    `<id>${escapeXml(feedUrl(language))}</id>`,
    `<title>${escapeXml(ui.title)}</title>`,
    `<subtitle>${escapeXml(ui.subtitle)}</subtitle>`,
    `<link rel="self" type="application/atom+xml" href="${escapeXml(feedUrl(language))}"/>`,
    `<link rel="alternate" type="text/html" href="${escapeXml(updatesUrl)}"/>`,
    `<updated>${timestamp(log[0]?.date ?? SITE_UPDATED_ON)}</updated>`,
    `<author><name>${escapeXml(ui.title)}</name></author>`,
    ...entryXml,
    '</feed>',
    '',
  ].join('\n');
}
