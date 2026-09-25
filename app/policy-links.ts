import type { Language } from './language';
import { isPolicyId } from './policy-ids.ts';
import { isPolicyPath } from './policy-paths.ts';

export const POLICY_SITE_URL = 'https://policy-radar.uspolicy.workers.dev';

export function localizedPageUrl(path: string, language: Language): string {
  return `${POLICY_SITE_URL}${path}?lang=${language}`;
}

// Each page renders in either language. The `?lang=` URLs are the indexable
// versions; the bare path picks a language per visitor, so it is x-default.
export function languageAlternates(path: string, language: Language) {
  return {
    canonical: localizedPageUrl(path, language),
    languages: {
      'zh-CN': localizedPageUrl(path, 'zh'),
      en: localizedPageUrl(path, 'en'),
      'x-default': POLICY_SITE_URL + path,
    },
  };
}

export function policyHref(
  id: string,
  language: Language,
  section?: string,
  from?: string,
): string {
  const origin =
    from === 'all' || isPolicyPath(from)
      ? `&from=${encodeURIComponent(from)}`
      : '';
  return `/policies/${encodeURIComponent(id)}?lang=${language}${origin}${section ? `#${encodeURIComponent(section)}` : ''}`;
}

export function legacyPolicyHref(
  hash: string,
  language: Language,
): string | null {
  let id: string;
  try {
    id = decodeURIComponent(hash.replace(/^#/, ''));
  } catch {
    return null;
  }
  return isPolicyId(id) ? policyHref(id, language) : null;
}
