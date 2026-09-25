import type { Metadata } from 'next';
import PolicyRadarClient from './policy-radar-client';
import { buildHomeView } from './home-view';
import { resolveRequestLanguage } from './language-server';
import { parsePathFilter } from './policy-paths';
import {
  languageAlternates,
  localizedPageUrl,
  POLICY_SITE_URL,
} from './policy-links';
import { siteMetadata } from './site-metadata';
import { homeJsonLd, jsonLdScript } from './structured-data';
import { feedUrl } from './update-feed';

export const dynamic = 'force-dynamic';

type PageProps = { searchParams?: Promise<{ lang?: string; path?: string }> };

export async function generateMetadata({
  searchParams,
}: PageProps): Promise<Metadata> {
  const parameters = await searchParams;
  const language = await resolveRequestLanguage(parameters?.lang);
  const { title, description, siteName, locale } = siteMetadata(language);
  const image = `${POLICY_SITE_URL}/share-image?lang=${language}`;
  return {
    title,
    description,
    alternates: {
      ...languageAlternates('/', language),
      types: { 'application/atom+xml': feedUrl(language) },
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url: localizedPageUrl('/', language),
      siteName,
      locale,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

export default async function Page({ searchParams }: PageProps) {
  const parameters = await searchParams;
  const language = await resolveRequestLanguage(parameters?.lang);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(homeJsonLd(language)) }}
      />
      <PolicyRadarClient
        view={buildHomeView(language)}
        language={language}
        initialPath={parsePathFilter(parameters?.path)}
      />
    </>
  );
}
