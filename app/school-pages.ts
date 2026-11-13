import { communitySchools, verifiedSchools, type EvidenceScreenshot } from './cpt-schools.ts';
import type { Language } from './language';
import { localizedPageUrl } from './policy-links.ts';
import { schoolPath } from './school-links.ts';

export { schoolHref, schoolPath } from './school-links.ts';

// One page per CPT school record at /schools/<id>, so a search for
// "<school> CPT" can land on that school's own page.

export type SchoolTone = 'pause' | 'tighten' | 'continue' | 'lead';

export type SchoolPage = {
  id: string;
  school: string;
  checkedOn: string;
  // `lead` marks a record that rests on an email screenshot.
  tone: SchoolTone;
  state: string;
  detail: string;
  href?: string;
  screenshots: EvidenceScreenshot[];
};

export const SCHOOL_IDS: string[] = [...verifiedSchools, ...communitySchools].map(
  (school) => school.id,
);

const schoolIdSet = new Set(SCHOOL_IDS);

export function isSchoolId(value: unknown): value is string {
  return typeof value === 'string' && schoolIdSet.has(value);
}

export function getSchoolPage(id: string, language: Language): SchoolPage | null {
  const verified = verifiedSchools.find((school) => school.id === id);
  if (verified) {
    const { zh, en, ...rest } = verified;
    return { ...rest, ...(language === 'en' ? en : zh) };
  }
  const community = communitySchools.find((school) => school.id === id);
  if (community) {
    const { zh, en, ...rest } = community;
    return { ...rest, tone: 'lead', ...(language === 'en' ? en : zh) };
  }
  return null;
}

// Every school, A to Z, for the index page and cross-links.
export function getSchoolPages(language: Language): SchoolPage[] {
  return SCHOOL_IDS.map((id) => getSchoolPage(id, language)!).sort((a, b) =>
    a.school.localeCompare(b.school, 'en'),
  );
}

export const schoolToneLabels: Record<Language, Record<SchoolTone, string>> = {
  zh: {
    pause: '暂停部分 CPT',
    tighten: '收紧',
    continue: '暂未改变',
    lead: '邮件截图',
  },
  en: {
    pause: 'Some CPT paused',
    tighten: 'Tighter review',
    continue: 'No current change',
    lead: 'Email screenshot',
  },
};

const siteName: Record<Language, string> = {
  zh: '留美路径雷达',
  en: 'Stay Path Radar',
};

// Search results show about 150 characters of a description (about 80 in
// Chinese). Cut at the last sentence end that fits, or at a word.
export function clip(text: string, limit: number): string {
  if (text.length <= limit) return text;
  const head = text.slice(0, limit);
  const sentenceEnd = Math.max(
    head.lastIndexOf('。'),
    head.lastIndexOf('. '),
    head.lastIndexOf('；'),
  );
  if (sentenceEnd > limit * 0.5) return head.slice(0, sentenceEnd + 1).trim();
  const space = head.lastIndexOf(' ');
  return `${(space > limit * 0.5 ? head.slice(0, space) : head).trim()}…`;
}

export function schoolMetadata(school: SchoolPage, language: Language) {
  const english = language === 'en';
  const label = schoolToneLabels[language][school.tone];
  // An email-screenshot record has no confirmed status to put in the title.
  const status = school.tone === 'lead' ? '' : english ? `: ${label}` : `：${label}`;
  const title = english
    ? `${school.school} CPT Policy${status} | ${siteName.en}`
    : `${school.school} CPT 政策${status}｜${siteName.zh}`;
  const separator = english ? ' ' : '';
  const ending = english ? '.' : '。';
  const state = /[.。]$/.test(school.state) ? school.state : `${school.state}${ending}`;
  const description = clip(
    `${state}${separator}${school.detail}`,
    english ? 155 : 80,
  );
  return { title, description, url: localizedPageUrl(schoolPath(school.id), language) };
}

export const schoolIndexCopy: Record<
  Language,
  { title: string; heading: string; description: string; intro: string }
> = {
  zh: {
    title: '各校 CPT 政策一览：哪些学校暂停或收紧了 CPT｜留美路径雷达',
    heading: '各校 CPT 政策',
    description:
      'ICE 8 月收紧 CPT 指引后，美国各大学的 CPT 安排：哪些学校暂停、哪些收紧、哪些照常，每条都附校方页面或邮件截图。',
    intro: '按学校查看 CPT 安排。每条记录都附校方页面或邮件截图。',
  },
  en: {
    title: 'CPT Policies by School: Which Universities Paused or Tightened CPT | Stay Path Radar',
    heading: 'CPT policies by school',
    description:
      'How U.S. universities are handling CPT after ICE’s August guidance: which schools paused it, tightened it or kept it, each with the school’s page or email.',
    intro: 'CPT arrangements school by school. Each record links the school’s page or an email screenshot.',
  },
};
