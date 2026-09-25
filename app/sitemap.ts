import { getPolicy } from './policy-data.ts';
import { SITE_UPDATED_ON } from './policy-freshness.ts';
import { POLICY_IDS } from './policy-ids.ts';
import { languageAlternates } from './policy-links.ts';
import type { Language } from './language';

const LANGUAGES: Language[] = ['zh', 'en'];

function localizedEntries(path: string, lastModified: string, priority: number) {
  return LANGUAGES.map((language) => {
    const { canonical, languages } = languageAlternates(path, language);
    return {
      url: canonical,
      lastModified,
      changeFrequency: 'daily' as const,
      priority,
      alternates: { languages },
    };
  });
}

export default function sitemap() {
  return [
    ...localizedEntries('/', SITE_UPDATED_ON, 1),
    ...POLICY_IDS.flatMap((id) =>
      localizedEntries(
        `/policies/${id}`,
        getPolicy(id, 'zh')?.checkedOn ?? SITE_UPDATED_ON,
        0.8,
      ),
    ),
    ...localizedEntries('/updates', SITE_UPDATED_ON, 0.5),
  ];
}
