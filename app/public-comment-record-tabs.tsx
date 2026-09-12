'use client';

import { Tabs } from '@base-ui/react/tabs';
import type { Language } from './language';
import type { CommentSample } from './public-comment-types';
import { groupCommentRecords } from './public-comment-model';

const stanceLabels = {
  zh: {
    oppose: '反对提案',
    support: '支持提案',
    mixed: '有条件支持／混合立场',
    unclear: '未明确表态／无法判断',
  },
  en: {
    oppose: 'Oppose',
    support: 'Support',
    mixed: 'Conditional / mixed',
    unclear: 'Unclear / unclassifiable',
  },
};

export function PublicCommentRecordTabs({
  comments,
  themeLabels,
  language,
}: {
  comments: CommentSample['comments'];
  themeLabels: Record<string, string>;
  language: Language;
}) {
  const en = language === 'en';
  const groups = groupCommentRecords(comments);
  const tabLabels = en
    ? {
        all: 'All',
        support: 'Support',
        oppose: 'Oppose',
        mixed: 'Conditional / mixed',
        unclear: 'Unclear',
      }
    : {
        all: '所有',
        support: '支持',
        oppose: '反对',
        mixed: '条件／混合',
        unclear: '不明确',
      };
  return (
    <Tabs.Root defaultValue="all" className="pd-comment-record-tabs">
      <Tabs.List
        className="pd-comment-tab-list pd-comment-record-tab-list"
        aria-label={
          en ? 'Filter comment records by position' : '按立场筛选评论记录'
        }
      >
        {groups.map((group) => (
          <Tabs.Tab className="pd-comment-tab" key={group.id} value={group.id}>
            {tabLabels[group.id]} <span>{group.comments.length}</span>
          </Tabs.Tab>
        ))}
      </Tabs.List>
      {groups.map((group) => (
        <Tabs.Panel
          className="pd-comment-record-panel"
          key={group.id}
          value={group.id}
        >
          <p className="pd-comment-note">
            {en
              ? `${tabLabels[group.id]}: ${group.comments.length} comments`
              : `${tabLabels[group.id]}：${group.comments.length} 条评论`}
          </p>
          {group.comments.length > 0 ? (
            <ol>
              {group.comments.map((comment) => (
                <li key={comment.id}>
                  <a
                    href={`https://www.regulations.gov/comment/${comment.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {comment.id} ↗
                  </a>
                  <span>
                    {stanceLabels[language][comment.stance]} ·{' '}
                    {comment.summary[language]}
                  </span>
                  {comment.themes.length > 0 && (
                    <small>
                      {comment.themes
                        .map((id) => themeLabels[id] ?? id)
                        .join(' · ')}
                    </small>
                  )}
                  {comment.sourceNote && (
                    <small>{comment.sourceNote[language]}</small>
                  )}
                </li>
              ))}
            </ol>
          ) : (
            <p className="pd-comment-note">
              {en
                ? 'No sampled comments in this group.'
                : '当前样本中没有这一立场的评论。'}
            </p>
          )}
        </Tabs.Panel>
      ))}
    </Tabs.Root>
  );
}
