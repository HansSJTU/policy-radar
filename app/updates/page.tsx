import type { Metadata } from 'next';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
} from 'lucide-react';

import { GitHubProjectLink } from '@/app/github-link';
import type { Language } from '@/app/language';
import { resolveRequestLanguage } from '@/app/language-server';
import { PageLanguageSwitch } from '@/app/page-language-switch';
import { getUpdateLog } from '@/app/update-log';
import { ShareButton } from '@/app/share-button';
import { MobileSiteMenu } from '@/app/mobile-site-menu';

export const dynamic = 'force-dynamic';

type UpdatesPageProps = { searchParams?: Promise<{ lang?: string }> };

const updatesCopy = {
  zh: {
    metadataTitle: '更新记录｜留美路径政策雷达',
    metadataDescription: '留美路径政策雷达的政策、时间与 CPT 学校材料更新记录。',
    back: '返回政策雷达',
    bar: '内容更新记录',
    switchLabel: '切换网站语言',
    kicker: 'CONTENT CHANGELOG',
    title: '更新记录',
    entryLabel: '次内容变化',
    before: '更新前',
    after: '更新后',
    sources: '来源',
    locale: 'zh-CN',
  },
  en: {
    metadataTitle: 'Updates | U.S. Stay Path Policy Radar',
    metadataDescription:
      'Content updates to policy status, dates, and CPT school evidence in the U.S. Stay Path Policy Radar.',
    back: 'Back to policy radar',
    bar: 'Content updates',
    switchLabel: 'Switch site language',
    kicker: 'CONTENT CHANGELOG',
    title: 'Updates',
    entryLabel: 'content changes',
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
  };
}

export default async function UpdatesPage({ searchParams }: UpdatesPageProps) {
  const language = await pageLanguage(searchParams);
  const ui = updatesCopy[language];
  const updates = getUpdateLog(language);

  return (
    <main className="updates-page">
      <header className="updates-page-bar">
        <form action="/" method="get">
          {language === 'en' ? (
            <input type="hidden" name="lang" value="en" />
          ) : null}
          <button type="submit" className="stats-back">
            <ArrowLeft aria-hidden="true" />
            {ui.back}
          </button>
        </form>
        <div className="updates-page-actions">
          <span>{ui.bar}</span>
          <GitHubProjectLink language={language} />
          <ShareButton language={language} pageTitle={ui.title} />
          <PageLanguageSwitch
            action="/updates"
            language={language}
            label={ui.switchLabel}
          />
          <MobileSiteMenu current="updates" language={language} />
        </div>
      </header>

      <section className="updates-hero">
        <span className="section-kicker">{ui.kicker}</span>
        <h1>{ui.title}</h1>
      </section>

      <section className="updates-feed" aria-label={ui.title}>
        {updates.map((entry) => (
          <article className="update-release" key={entry.date}>
            <header>
              <div className="update-date-mark" aria-hidden="true">
                <CalendarDays />
              </div>
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
                <li className="update-change" key={change.id}>
                  <div className="update-change-number" aria-hidden="true" />
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
    </main>
  );
}
