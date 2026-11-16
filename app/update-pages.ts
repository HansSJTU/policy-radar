import type { Language } from './language';
import { getUpdateLog, type ContentChange, type ContentUpdate } from './update-log.ts';

// /updates shows the last 30 days, so it stops growing with every update.
// Every change also has a permanent place on the page of its month, and
// links to a change (the feed) point there.
export const RECENT_UPDATE_DAYS = 30;

export const monthOf = (date: string) => date.slice(0, 7);

// Months that have updates, newest first. Both languages log the same days.
export const UPDATE_MONTHS: string[] = [
  ...new Set(getUpdateLog('zh').map((update) => monthOf(update.date))),
];

export function isUpdateMonth(value: string): boolean {
  return UPDATE_MONTHS.includes(value);
}

// The window ends on the newest update, not on today: the page is rendered
// when the site is deployed and must not empty out between deploys.
export function recentUpdates(language: Language): ContentUpdate[] {
  const log = getUpdateLog(language);
  if (!log.length) return [];
  const newest = Date.parse(`${log[0].date}T12:00:00Z`);
  const firstDay = new Date(newest - (RECENT_UPDATE_DAYS - 1) * 86_400_000)
    .toISOString()
    .slice(0, 10);
  return log.filter((update) => update.date >= firstDay);
}

export function updatesInMonth(language: Language, month: string): ContentUpdate[] {
  return getUpdateLog(language).filter((update) => monthOf(update.date) === month);
}

export function updateMonthPath(month: string): string {
  return `/updates/${month}`;
}

export function updateMonthLabel(month: string, language: Language): string {
  return new Intl.DateTimeFormat(language === 'zh' ? 'zh-CN' : 'en-US', {
    year: 'numeric',
    month: 'long',
    timeZone: 'UTC',
  }).format(new Date(`${month}-15T12:00:00Z`));
}

export function changeAnchor(change: Pick<ContentChange, 'id'>): string {
  return `change-${change.id}`;
}

// Path and anchor of a change on its month page, without the language.
export function changeLocation(changeId: string): { path: string; anchor: string } | null {
  const update = getUpdateLog('zh').find(({ changes }) =>
    changes.some((change) => change.id === changeId),
  );
  return update
    ? { path: updateMonthPath(monthOf(update.date)), anchor: changeAnchor({ id: changeId }) }
    : null;
}
