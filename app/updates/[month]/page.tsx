import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

import type { Language } from '@/app/language';
import { resolveRequestLanguage } from '@/app/language-server';
import { SITE_UPDATED_ON } from '@/app/policy-freshness';
import { languageAlternates } from '@/app/policy-links';
import { feedUrl } from '@/app/update-feed';
import {
  isUpdateMonth,
  updateMonthLabel,
  updateMonthPath,
  updatesInMonth,
} from '@/app/update-pages';
import { ShareButton } from '@/app/share-button';
import { SiteFooter } from '@/app/site-footer';
import { SiteHeader } from '@/app/site-header';

import { UpdateMonthLinks, UpdateReleases, updatesCopy } from '../update-list';

export const dynamic = 'force-dynamic';

type Props = {
  params: Promise<{ month: string }>;
  searchParams?: Promise<{ lang?: string }>;
};

const metadataCopy = {
  zh: {
    title: (month: string) => `${month}留学生签证政策更新记录：OPT、CPT、H-1B｜留美路径政策雷达`,
    description: (month: string) =>
      `${month} OPT、CPT、H-1B、D/S 等留学生相关政策的变化：法院裁定、新规发布、学校 CPT 调整，按日期列出，每条附来源。`,
  },
  en: {
    title: (month: string) => `F-1, OPT, CPT & H-1B Policy Updates, ${month} | U.S. Stay Path Policy Radar`,
    description: (month: string) =>
      `Changes to F-1, OPT, CPT, H-1B and D/S policies in ${month}: court orders, new rules and school CPT changes, by date, each with its sources.`,
  },
};

async function pageLanguage(searchParams: Props['searchParams']): Promise<Language> {
  const parameters = await searchParams;
  return resolveRequestLanguage(parameters?.lang);
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const [{ month }, language] = await Promise.all([params, pageLanguage(searchParams)]);
  if (!isUpdateMonth(month)) {
    return { title: 'Updates not found', robots: { index: false, follow: false } };
  }
  const label = updateMonthLabel(month, language);
  return {
    title: metadataCopy[language].title(label),
    description: metadataCopy[language].description(label),
    alternates: {
      ...languageAlternates(updateMonthPath(month), language),
      types: { 'application/atom+xml': feedUrl(language) },
    },
  };
}

export default async function UpdateMonthPage({ params, searchParams }: Props) {
  const [{ month }, language] = await Promise.all([params, pageLanguage(searchParams)]);
  if (!isUpdateMonth(month)) notFound();
  const ui = updatesCopy[language];
  const title = ui.monthTitle(updateMonthLabel(month, language));

  return (
    <main className="updates-page" id="top">
      <SiteHeader
        language={language}
        current="updates"
        languageAction={updateMonthPath(month)}
        share={<ShareButton language={language} pageTitle={title} />}
        checkedOn={SITE_UPDATED_ON}
      />

      <section className="updates-hero">
        <h1>{title}</h1>
        <a className="updates-feed-link updates-back-link" href={`/updates?lang=${language}`}>
          <ArrowLeft aria-hidden="true" />
          {ui.backToRecent}
        </a>
      </section>

      <UpdateReleases updates={updatesInMonth(language, month)} language={language} />
      <UpdateMonthLinks language={language} current={month} />

      <SiteFooter language={language} />
    </main>
  );
}
