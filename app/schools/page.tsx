import type { Metadata } from 'next';

import { VisitorTracker } from '@/components/visitor-tracker';
import { resolveRequestLanguage } from '../language-server';
import { SITE_UPDATED_ON } from '../policy-freshness';
import { languageAlternates } from '../policy-links';
import {
  getSchoolPages,
  schoolHref,
  schoolIndexCopy,
  schoolToneLabels,
} from '../school-pages';
import { ShareButton } from '../share-button';
import { SiteFooter } from '../site-footer';
import { SiteHeader } from '../site-header';

export const dynamic = 'force-dynamic';

type Props = { searchParams?: Promise<{ lang?: string }> };

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const language = await resolveRequestLanguage((await searchParams)?.lang);
  const ui = schoolIndexCopy[language];
  return {
    title: ui.title,
    description: ui.description,
    alternates: languageAlternates('/schools', language),
  };
}

export default async function SchoolsPage({ searchParams }: Props) {
  const language = await resolveRequestLanguage((await searchParams)?.lang);
  const ui = schoolIndexCopy[language];
  const schools = getSchoolPages(language);

  return (
    <main className="schools-index" id="top">
      <VisitorTracker />
      <SiteHeader
        language={language}
        current="schools"
        languageAction="/schools"
        share={<ShareButton language={language} pageTitle={ui.heading} />}
        checkedOn={SITE_UPDATED_ON}
      />

      <section className="school-page-hero">
        <h1>{ui.heading}</h1>
        <p>{ui.intro}</p>
      </section>

      <ul className="schools-index-list">
        {schools.map((school) => (
          <li key={school.id}>
            <a href={schoolHref(school.id, language)}>
              <span className="school-page-status">
                <i className={`school-state ${school.tone}`} aria-hidden="true" />
                {schoolToneLabels[language][school.tone]}
              </span>
              <strong>{school.school}</strong>
              <p>{school.state}</p>
            </a>
          </li>
        ))}
      </ul>

      <SiteFooter language={language} />
    </main>
  );
}
