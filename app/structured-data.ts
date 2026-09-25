import type { Language } from './language';
import type { Policy } from './policy-data.ts';
import { isForumLink } from './forum-links.ts';
import { localizedPageUrl, POLICY_SITE_URL } from './policy-links.ts';
import { siteMetadata } from './site-metadata.ts';

// schema.org descriptions that search engines and AI answers read directly:
// what the page is, when it was last checked, and which documents it cites.

const inLanguage = (language: Language) => (language === 'zh' ? 'zh-CN' : 'en');

function website(language: Language) {
  return {
    '@type': 'WebSite',
    name: siteMetadata(language).siteName,
    url: localizedPageUrl('/', language),
  };
}

export function homeJsonLd(language: Language) {
  const { title, description } = siteMetadata(language);
  return {
    '@context': 'https://schema.org',
    ...website(language),
    alternateName: title,
    description,
    inLanguage: inLanguage(language),
  };
}

export function policyJsonLd(policy: Policy, language: Language) {
  const url = localizedPageUrl(`/policies/${policy.id}`, language);
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: policy.title,
    description: policy.teaser,
    url,
    mainEntityOfPage: url,
    dateModified: policy.checkedOn,
    inLanguage: inLanguage(language),
    image: `${POLICY_SITE_URL}/policies/${policy.id}/share-image?lang=${language}`,
    isPartOf: website(language),
    publisher: { '@type': 'Organization', name: siteMetadata(language).siteName },
    citation: policy.sources
      .filter((source) => !isForumLink(source.href))
      .map((source) => ({
        '@type': 'CreativeWork',
        name: source.label,
        url: source.href,
      })),
  };
}

// Escapes `<` so a string in the data can never close the script element.
export function jsonLdScript(data: object): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
