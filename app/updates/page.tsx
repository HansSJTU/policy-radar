import type { Metadata } from 'next';
import { ArrowRight, ArrowUpRight, Rss } from 'lucide-react';

import type { Language } from '@/app/language';
import { resolveRequestLanguage } from '@/app/language-server';
import { SITE_UPDATED_ON } from '@/app/policy-freshness';
import { getUpdateLog } from '@/app/update-log';
import { languageAlternates } from '@/app/policy-links';
import { changeAnchor, feedUrl } from '@/app/update-feed';
import { ShareButton } from '@/app/share-button';
import { SiteFooter } from '@/app/site-footer';
import { SiteHeader } from '@/app/site-header';

export const dynamic = 'force-dynamic';

type UpdatesPageProps = { searchParams?: Promise<{ lang?: string }> };

const updatesCopy = {
  zh: {
    metadataTitle: '留学生签证政策更新记录：OPT、CPT、H-1B 最新变化｜留美路径政策雷达',
    metadataDescription: 'OPT、CPT、H-1B、D/S 等留学生相关政策的最新变化：法院裁定、新规发布、学校 CPT 调整，按日期列出，每条附来源。',
    title: '更新记录',
    entryLabel: '次内容变化',
    subscribe: '用 RSS 订阅更新',
    before: '更新前',
    after: '更新后',
    sources: '来源',
    locale: 'zh-CN',
  },
  en: {
    metadataTitle: 'F-1, OPT, CPT & H-1B Policy Updates | U.S. Stay Path Policy Radar',
    metadataDescription:
      'The latest changes to F-1, OPT, CPT, H-1B and D/S policies: court orders, new rules and school CPT changes, by date, each with its sources.',
    title: 'Updates',
    entryLabel: 'content changes',
    subscribe: 'Subscribe via RSS',
    before: 'Before',
    after: 'After',
    sources: 'Sources',
    locale: 'en-US',
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
    title: updatesCopy[language].metadataTitle,
    description: updatesCopy[language].metadataDescription,
    alternates: {
      ...languageAlternates('/updates', language),
      types: { 'application/atom+xml': feedUrl(language) },
    },
  };
}

export default async function UpdatesPage({ searchParams }: UpdatesPageProps) {
  const language = await pageLanguage(searchParams);
  const ui = updatesCopy[language];
  const updates = getUpdateLog(language);

  return (
    <main className="updates-page" id="top">
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

      <section className="updates-feed" aria-label={ui.title}>
        {updates.map((entry) => (
          <article className="update-release" key={entry.date}>
            <header>
              <div>
                <time dateTime={entry.date}>
                  {new Intl.DateTimeFormat(ui.locale, {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    timeZone: 'UTC',
                  }).format(new Date(`${entry.date}T12:00:00Z`))}
                </time>
                <span>
                  {entry.changes.length} {ui.entryLabel}
                </span>
              </div>
            </header>

            <ol className="update-change-list">
              {entry.changes.map((change) => (
                <li className="update-change" id={changeAnchor(change)} key={change.id}>
                  <div className="update-change-body">
                    <span className="update-change-category">
                      {change.category}
                    </span>
                    <h2>{change.title}</h2>
                    <p>{change.summary}</p>

                    {change.before && change.after ? (
                      <div className="update-diff" aria-label={`${ui.before} / ${ui.after}`}>
                        <div>
                          <small>{ui.before}</small>
                          <strong>{change.before}</strong>
                        </div>
                        <ArrowRight aria-hidden="true" />
                        <div>
                          <small>{ui.after}</small>
                          <strong>{change.after}</strong>
                        </div>
                      </div>
                    ) : null}

                    {change.details ? (
                      <ul className="update-details">
                        {change.details.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                    ) : null}

                    <div className="update-sources" aria-label={ui.sources}>
                      <span>{ui.sources}</span>
                      {change.sources.map((source) => (
                        <a
                          href={source.href}
                          key={source.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {source.label}
                          <ArrowUpRight aria-hidden="true" />
                        </a>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </article>
        ))}
      </section>

      <SiteFooter language={language} />
    </main>
  );
}
