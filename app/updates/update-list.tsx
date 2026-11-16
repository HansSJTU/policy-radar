import { ArrowRight, ArrowUpRight } from 'lucide-react';

import type { Language } from '@/app/language';
import type { ContentUpdate } from '@/app/update-log';
import {
  changeAnchor,
  UPDATE_MONTHS,
  updateMonthLabel,
  updateMonthPath,
} from '@/app/update-pages';

export const updatesCopy = {
  zh: {
    title: '更新记录',
    entryLabel: '次内容变化',
    subscribe: '用 RSS 订阅更新',
    before: '更新前',
    after: '更新后',
    sources: '来源',
    byMonth: '按月查看',
    recentNote: '这一页显示最近 30 天的更新。更早的记录按月份保存。',
    backToRecent: '最近 30 天',
    monthTitle: (month: string) => `${month}更新记录`,
    locale: 'zh-CN',
  },
  en: {
    title: 'Updates',
    entryLabel: 'content changes',
    subscribe: 'Subscribe via RSS',
    before: 'Before',
    after: 'After',
    sources: 'Sources',
    byMonth: 'Browse by month',
    recentNote: 'This page shows the last 30 days. Earlier updates are kept by month.',
    backToRecent: 'Last 30 days',
    monthTitle: (month: string) => `Updates in ${month}`,
    locale: 'en-US',
  },
};

export function UpdateReleases({
  updates,
  language,
}: {
  updates: ContentUpdate[];
  language: Language;
}) {
  const ui = updatesCopy[language];
  return (
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
                  <span className="update-change-category">{change.category}</span>
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
                      <a href={source.href} key={source.href} target="_blank" rel="noreferrer">
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
  );
}

/** Links to every month's page. `current` is the month being shown, if any. */
export function UpdateMonthLinks({
  language,
  current,
}: {
  language: Language;
  current?: string;
}) {
  const ui = updatesCopy[language];
  return (
    <nav className="updates-months" aria-label={ui.byMonth}>
      <h2>{ui.byMonth}</h2>
      {current ? null : <p>{ui.recentNote}</p>}
      <ul>
        {UPDATE_MONTHS.map((month) => (
          <li key={month}>
            <a
              href={`${updateMonthPath(month)}?lang=${language}`}
              aria-current={month === current ? 'page' : undefined}
            >
              {updateMonthLabel(month, language)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
