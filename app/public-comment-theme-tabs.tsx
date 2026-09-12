'use client';

import { Tabs } from '@base-ui/react/tabs';
import type { Language } from './language';
import type { summarizeThemeGroups } from './public-comment-model';

export function PublicCommentThemeTabs({
  groups,
  labels,
  language,
}: {
  groups: ReturnType<typeof summarizeThemeGroups>;
  labels: Record<string, string>;
  language: Language;
}) {
  const en = language === 'en';
  const tabLabels = en
    ? { all: 'All', support: 'Support', oppose: 'Oppose' }
    : { all: '所有', support: '支持', oppose: '反对' };
  return (
    <>
      <h4>{en ? 'Themes discussed' : '讨论主题分布'}</h4>
      <p className="pd-comment-note">
        {en
          ? 'Supporters and opponents may discuss the same theme. A comment can have multiple labels; percentages use the selected group’s comment count, so totals may exceed 100%.'
          : '支持和反对者可能讨论同一主题。一条评论可有多个标签；占比以当前分组的评论数为分母，合计可能超过 100%。'}
      </p>
      <Tabs.Root defaultValue="all" className="pd-comment-theme-tabs">
        <Tabs.List
          className="pd-comment-tab-list"
          aria-label={en ? 'Filter themes by position' : '按立场筛选讨论主题'}
        >
          {groups.map((group) => (
            <Tabs.Tab
              className="pd-comment-tab"
              key={group.id}
              value={group.id}
            >
              {tabLabels[group.id]} <span>{group.total}</span>
            </Tabs.Tab>
          ))}
        </Tabs.List>
        {groups.map((group) => (
          <Tabs.Panel
            key={group.id}
            value={group.id}
            className="pd-comment-theme-panel"
          >
            <p className="pd-comment-note">
              {en
                ? `${tabLabels[group.id]}: ${group.total} comments · Percentages within this group`
                : `${tabLabels[group.id]}：${group.total} 条评论 · 占比按本组计算`}
            </p>
            {group.themes.length ? (
              <div className="pd-comment-bars">
                {group.themes.map((row) => (
                  <div className="pd-comment-row" key={row.id}>
                    <div>
                      <span>{labels[row.id] ?? row.id}</span>
                      <strong>
                        {row.count} / {group.total} ·{' '}
                        {row.percent.toFixed(1).replace(/\.0$/, '')}%
                      </strong>
                    </div>
                    <div className="pd-comment-track" aria-hidden="true">
                      <span
                        data-stance={group.id}
                        style={{ width: `${row.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="pd-comment-note">
                {group.total === 0
                  ? en
                    ? 'No sampled comments in this group.'
                    : '当前样本中没有这一立场的评论。'
                  : en
                    ? 'No discussion themes identified in this group.'
                    : '本组评论尚未识别出讨论主题。'}
              </p>
            )}
          </Tabs.Panel>
        ))}
      </Tabs.Root>
    </>
  );
}
