/* oxlint-disable next/no-img-element -- Evidence screenshots are served as-is from public/. */
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowRight, ExternalLink, ShieldAlert } from 'lucide-react';

import { VisitorTracker } from '@/components/visitor-tracker';
import { getCommunitySchools, getVerifiedSchools } from '../../cpt-schools';
import { GlossaryText } from '../../glossary-text';
import { getSchoolShareItem } from '../../item-share-model';
import { LanguageProvider } from '../../language-context';
import { resolveRequestLanguage } from '../../language-server';
import { getPolicy } from '../../policy-data';
import { languageAlternates, policyHref } from '../../policy-links';
import {
  getSchoolPage,
  getSchoolPages,
  schoolHref,
  schoolMetadata,
  schoolPath,
  schoolToneLabels,
} from '../../school-pages';
import { ShareButton } from '../../share-button';
import { SiteFooter } from '../../site-footer';
import { SiteHeader } from '../../site-header';
import { jsonLdScript, schoolJsonLd } from '../../structured-data';

export const dynamic = 'force-dynamic';

type Props = {
  params: Promise<{ schoolId: string }>;
  searchParams?: Promise<{ lang?: string }>;
};

const copy = {
  zh: {
    home: '首页',
    schools: 'CPT 学校',
    breadcrumb: '面包屑',
    heading: (school: string) => `${school} CPT 政策`,
    officialPage: '校方页面',
    screenshot: '邮件截图',
    emailBased: '这条记录依据学校发给学生的邮件截图，学校还没在网站上公开。',
    scope: '只适用于这所学校、校区或院系；自己的情况请问 DSO。',
    national: '全国背景',
    nationalIntro: 'ICE/SEVP 8 月给学校发了 CPT 指引，各校据此调整 CPT。',
    readPolicy: '看完整解读',
    others: '其他学校',
    allSchools: '全部学校',
  },
  en: {
    home: 'Home',
    schools: 'CPT Schools',
    breadcrumb: 'Breadcrumb',
    heading: (school: string) => `${school} CPT policy`,
    officialPage: 'University page',
    screenshot: 'Email screenshot',
    emailBased: 'This record is based on an email the school sent to students; the school has not posted it on its website.',
    scope: 'Applies only to the school, campus or department named here. Ask your DSO about your own case.',
    national: 'The national guidance',
    nationalIntro: 'In August, ICE/SEVP sent schools CPT guidance, and schools are adjusting CPT to follow it.',
    readPolicy: 'Read the full brief',
    others: 'Other schools',
    allSchools: 'All schools',
  },
};

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const [{ schoolId }, search] = await Promise.all([params, searchParams]);
  const language = await resolveRequestLanguage(search?.lang);
  const school = getSchoolPage(schoolId, language);
  if (!school) return { title: 'School not found', robots: { index: false, follow: false } };
  const { title, description, url } = schoolMetadata(school, language);
  return {
    title,
    description,
    alternates: languageAlternates(schoolPath(school.id), language),
    openGraph: {
      title,
      description,
      type: 'article',
      url,
      siteName: 'Stay Path Radar',
      locale: language === 'en' ? 'en_US' : 'zh_CN',
    },
  };
}

export default async function SchoolPage({ params, searchParams }: Props) {
  const [{ schoolId }, search] = await Promise.all([params, searchParams]);
  const language = await resolveRequestLanguage(search?.lang);
  const school = getSchoolPage(schoolId, language);
  if (!school) notFound();
  const ui = copy[language];
  const home = `/?lang=${language}`;
  const index = `/schools?lang=${language}`;
  const shareSource =
    getVerifiedSchools(language).find(({ id }) => id === school.id) ??
    getCommunitySchools(language).find(({ id }) => id === school.id)!;
  const guidance = getPolicy('cpt-guidance', language)!;
  const others = getSchoolPages(language).filter(({ id }) => id !== school.id);

  return (
    <LanguageProvider language={language}>
      <main className="school-page" id="top">
        <VisitorTracker />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(schoolJsonLd(school, language)) }}
        />
        <SiteHeader
          language={language}
          current="schools"
          languageAction={schoolPath(school.id)}
          share={<ShareButton language={language} item={getSchoolShareItem(shareSource, language)} />}
          checkedOn={school.checkedOn}
        />

        <nav className="school-page-crumbs" aria-label={ui.breadcrumb}>
          <a href={home}>{ui.home}</a>
          <span aria-hidden="true">›</span>
          <a href={index}>{ui.schools}</a>
          <span aria-hidden="true">›</span>
          <span>{school.school}</span>
        </nav>

        <section className="school-page-hero">
          <span className="school-page-status">
            <i className={`school-state ${school.tone}`} aria-hidden="true" />
            {schoolToneLabels[language][school.tone]}
          </span>
          <h1>{ui.heading(school.school)}</h1>
          <p className="school-page-state"><GlossaryText text={school.state} /></p>
        </section>

        <section className="school-page-body">
          {school.tone === 'lead' && (
            <div className="evidence-banner"><ShieldAlert aria-hidden="true" /><p>{ui.emailBased}</p></div>
          )}
          <p><GlossaryText text={school.detail} /></p>
          <p className="school-page-scope">{ui.scope}</p>
          {school.href && (
            <a className="evidence-official-link" href={school.href} target="_blank" rel="noreferrer">
              {ui.officialPage}<ExternalLink aria-hidden="true" />
            </a>
          )}
          {school.screenshots.map((screenshot, index) => (
            <figure className="school-page-evidence" key={screenshot.src}>
              <img
                src={screenshot.src}
                width={screenshot.width}
                height={screenshot.height}
                alt={`${school.school} ${ui.screenshot} ${index + 1}`}
                loading="lazy"
                decoding="async"
              />
              {school.screenshots.length > 1 && (
                <figcaption>{index + 1} / {school.screenshots.length}</figcaption>
              )}
            </figure>
          ))}
        </section>

        <section className="school-page-context" aria-labelledby="school-national">
          <h2 id="school-national">{ui.national}</h2>
          <p>{ui.nationalIntro}</p>
          <a className="school-page-policy" href={policyHref(guidance.id, language)}>
            <strong>{guidance.title}</strong>
            <span>{guidance.status}</span>
            <p>{guidance.teaser}</p>
            <small>{ui.readPolicy}<ArrowRight aria-hidden="true" /></small>
          </a>
        </section>

        <section className="school-page-others" aria-labelledby="school-others">
          <div className="school-page-others-head">
            <h2 id="school-others">{ui.others}</h2>
            <a href={index}>{ui.allSchools}<ArrowRight aria-hidden="true" /></a>
          </div>
          <ul>
            {others.map((other) => (
              <li key={other.id}>
                <a href={schoolHref(other.id, language)}>
                  <i className={`school-state ${other.tone}`} aria-hidden="true" />
                  {other.school}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <SiteFooter language={language} />
      </main>
    </LanguageProvider>
  );
}
