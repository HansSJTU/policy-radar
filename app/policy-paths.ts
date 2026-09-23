import type { PolicyPath } from '../content/policy-types.ts';
import type { Language } from './language';

export type { PolicyPath } from '../content/policy-types.ts';

// The four stay-path stages shown at the top of the home page. Each policy
// names its stage in `path`; the stage colors live in globals.css.
export const POLICY_PATHS: readonly PolicyPath[] = ['F-1', 'CPT', 'OPT', 'H-1B'];

export const pathSubtitles: Record<PolicyPath, Record<Language, string>> = {
  'F-1': { zh: '入学与在读', en: 'Study and enrollment' },
  CPT: { zh: '校内外实习', en: 'Curricular training' },
  OPT: { zh: '毕业后工作', en: 'Post-completion work' },
  'H-1B': { zh: '工作签证', en: 'Employment visa' },
};

export function isPolicyPath(value: unknown): value is PolicyPath {
  return (POLICY_PATHS as readonly unknown[]).includes(value);
}

// "all" or one stage; anything else falls back to "all".
export type PathFilter = PolicyPath | 'all';

export function parsePathFilter(value: unknown): PathFilter {
  return isPolicyPath(value) ? value : 'all';
}

export function filterByPath<T extends { path: PolicyPath }>(
  items: T[],
  filter: PathFilter,
): T[] {
  return filter === 'all' ? items : items.filter((item) => item.path === filter);
}
