import type { Metadata } from 'next';
import { Rss } from 'lucide-react';

import type { Language } from '@/app/language';
import { resolveRequestLanguage } from '@/app/language-server';
import { SITE_UPDATED_ON } from '@/app/policy-freshness';
import { languageAlternates } from '@/app/policy-links';
import { feedUrl } from '@/app/update-feed';
import { recentUpdates } from '@/app/update-pages';
import { ShareButton } from '@/app/share-button';
import { SiteFooter } from '@/app/site-footer';
import { SiteHeader } from '@/app/site-header';

import { OlderChangeRedirect } from './older-change-redirect';
import { UpdateMonthLinks, UpdateReleases, updatesCopy } from './update-list';

export const dynamic = 'force-dynamic';

type UpdatesPageProps = { searchParams?: Promise<{ lang?: string }> };

const metadataCopy = {
  zh: {
    title: '留学生签证政策更新记录：OPT、CPT、H-1B 最新变化｜留美路径政策雷达',
    description: 'OPT、CPT、H-1B、D/S 等留学生相关政策的最新变化：法院裁定、新规发布、学校 CPT 调整，按日期列出，每条附来源。',
  },
  en: {
    title: 'F-1, OPT, CPT & H-1B Policy Updates | U.S. Stay Path Policy Radar',
    description:
      'The latest changes to F-1, OPT, CPT, H-1B and D/S policies: court orders, new rules and school CPT changes, by date, each with its sources.',
  },
};

async function pageLanguage(
  searchParams?: Promise<{ lang?: string }>,
): Promise<Language> {
  const parameters = await searchParams;
  return resolveRequestLanguage(parameters?.lang);
}

export async function generateMetadata({
  searchParams,
}: UpdatesPageProps): Promise<Metadata> {
  const language = await pageLanguage(searchParams);
  return {
    title: metadataCopy[language].title,
    description: metadataCopy[language].description,
    alternates: {
      ...languageAlternates('/updates', language),
      types: { 'application/atom+xml': feedUrl(language) },
    },
  };
}

export default async function UpdatesPage({ searchParams }: UpdatesPageProps) {
  const language = await pageLanguage(searchParams);
  const ui = updatesCopy[language];

  return (
    <main className="updates-page" id="top">
      <OlderChangeRedirect />
      <SiteHeader
        language={language}
        current="updates"
        languageAction="/updates"
        share={<ShareButton language={language} pageTitle={ui.title} />}
        checkedOn={SITE_UPDATED_ON}
      />

      <section className="updates-hero">
        <h1>{ui.title}</h1>
        <a className="updates-feed-link" href={`/feed.xml?lang=${language}`}>
          <Rss aria-hidden="true" />
          {ui.subscribe}
        </a>
      </section>

      <UpdateReleases updates={recentUpdates(language)} language={language} />
      <UpdateMonthLinks language={language} />

      <SiteFooter language={language} />
    </main>
  );
}
