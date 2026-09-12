import { PublicCommentThemeTabs } from './public-comment-theme-tabs';
import type { Language } from './language';
import { publicCommentSamples } from './public-comment-data';
import {
  summarizeComments,
  summarizeThemeGroups,
} from './public-comment-model';

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

export function PublicCommentDistribution({
  policyId,
  language,
}: {
  policyId: string;
  language: Language;
}) {
  const sample = publicCommentSamples[policyId];
  if (!sample) return null;
  const en = language === 'en';
  const sampleSize = sample.sampleSize;
  const ready =
    sample.status === 'reviewed' &&
    sampleSize > 0 &&
    sample.comments.length === sampleSize;
  const stats = ready ? summarizeComments(sample.comments) : null;
  const source = `https://www.regulations.gov/document/${sample.documentId}/comment`;
  const sampledAt = sample.sampledAt
    ? new Intl.DateTimeFormat(en ? 'en-US' : 'zh-CN', {
        timeZone: 'America/New_York',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }).format(new Date(sample.sampledAt)) + ' ET'
    : '';
  return (
    <section
      id="public-comments"
      className="pd-comment-section"
      aria-labelledby="public-comments-title"
    >
      <div className="pd-comment-heading">
        <div>
          <span className="pd-comment-eyebrow">
            {en ? 'PUBLIC COMMENTS' : '公众评论观察'}
          </span>
          <h3 id="public-comments-title">
            {en ? 'Distribution of views' : '评论观点分布'}
          </h3>
        </div>
        <span className="pd-comment-badge">
          {ready
            ? en
              ? `${sampleSize} sampled comments`
              : `随机样本 · ${sampleSize} 条`
            : en
              ? 'Sample pending'
              : '样本待完成'}
        </span>
      </div>
      <p className="pd-comment-meta">
        {en
          ? `Published comments: ${sample.publishedCount.toLocaleString('en-US')} · ${ready ? `Sampled ${sampledAt}` : `Checked ${sample.checkedOn} ET`}`
          : `已公开评论 ${sample.publishedCount.toLocaleString('en-US')} 条 · ${ready ? `采样于 ${sampledAt}` : `核对于 ${sample.checkedOn} ET`}`}
      </p>
      {sample.commentDeadline && (
        <p className="pd-comment-meta">
          {sample.commentPhase === 'closed'
            ? en
              ? `Comment period closed ${sample.commentDeadline} · Sample retained for review`
              : `评论期已于 ${sample.commentDeadline} 结束 · 保留评论样本供查阅`
            : en
              ? `Comments open · Due ${sample.commentDeadline} ET`
              : `评论开放 · 截止 ${sample.commentDeadline} ET`}
        </p>
      )}
      {sample.scopeNote && (
        <p className="pd-comment-note pd-comment-scope-note">
          {sample.scopeNote[language]}
        </p>
      )}
      {stats ? (
        <>
          <h4>{en ? 'Overall position' : '总体立场'}</h4>
          <div className="pd-comment-bars">
            {stats.stances.map((row) => (
              <div className="pd-comment-row" key={row.id}>
                <div>
                  <span>
                    {
                      stanceLabels[language][
                        row.id as keyof typeof stanceLabels.zh
                      ]
                    }
                  </span>
                  <strong>
                    {row.count} / {stats.total} ·{' '}
                    {row.percent.toFixed(1).replace(/\.0$/, '')}%
                  </strong>
                </div>
                <div className="pd-comment-track" aria-hidden="true">
                  <span
                    data-stance={row.id}
                    style={{ width: `${row.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <PublicCommentThemeTabs
            language={language}
            groups={summarizeThemeGroups(sample.comments)}
            labels={Object.fromEntries(
              sample.themes.map((theme) => [theme.id, theme[language]]),
            )}
          />
          <details className="pd-comment-method">
            <summary>
              {en
                ? `Sampling method & all ${sampleSize} records`
                : `采样方法与全部 ${sampleSize} 条记录`}
            </summary>
            <p>
              {en
                ? `A fixed random seed selected ${sampleSize} unique comment IDs from the complete listing of ${sample.frameSize} published records. Sampled ${sampledAt}. This site's AI classified each body into one position and zero or more themes; these are not official labels. Similar submissions with distinct IDs remain separate records.`
                : `从完整的 ${sample.frameSize} 条已公开记录列表中，用固定随机种子不放回抽取 ${sampleSize} 个评论编号。采样时间：${sampledAt}。本站 AI 逐条阅读正文并归类，每条对应一个立场和零个或多个主题，标签非官方认定；内容相似但编号不同的提交仍分别计数。`}
            </p>
            <p>
              {en
                ? 'Positions refer to this proposal: explicit endorsement is support; clear rejection (including an unambiguous statement of harm from this proposal) or a request to withdraw is oppose. Conditional / mixed covers substantive exemptions, alternative schemes or mixed positions. General immigration views without a clear position on this proposal remain unclear. Unavailable attachments are disclosed per record: a clear available body can be classified, while attachment-only records remain unclear. Records are never replaced because of their viewpoint or readability.'
                : '立场针对本项提案：明确赞成归为“支持”，明确反对（包括明确指称本提案会造成损害）或要求撤回归为“反对”；实质性豁免、替代方案或混合意见归为“有条件／混合”。只表达一般移民看法、没有明确评价本提案的，保留为“未明确表态”。附件无法读取时逐条注明：正文立场明确的按正文归类，仅有不可读附件的记为“无法判断”。不会因观点或可读性替换样本。'}
            </p>
            {sample.manifestUrl && (
              <a
                className="pd-comment-source"
                href={sample.manifestUrl}
                download
              >
                {en
                  ? 'Download sampling frame, seed & classifications (JSON)'
                  : '下载抽样编号、随机种子及分类记录（JSON）'}
              </a>
            )}
            <dl className="pd-comment-codebook">
              {sample.themes.map((theme) => (
                <div key={theme.id}>
                  <dt>{theme[language]}</dt>
                  <dd>{theme.description?.[language]}</dd>
                </div>
              ))}
            </dl>
            <ol>
              {sample.comments.map((comment) => (
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
                        .map(
                          (id) =>
                            sample.themes.find((theme) => theme.id === id)?.[
                              language
                            ] ?? id,
                        )
                        .join(' · ')}
                    </small>
                  )}
                  {comment.sourceNote && (
                    <small>{comment.sourceNote[language]}</small>
                  )}
                </li>
              ))}
            </ol>
          </details>
          <p className="pd-comment-note">
            {en
              ? 'This describes the sample, not public opinion or the probability of a final rule. Posted submissions are self-selected and may include coordinated campaigns.'
              : '这是样本分布，不代表整体民意或规则通过概率。公众提交具有自选择性，也可能包含组织化评论。'}
          </p>
        </>
      ) : (
        <p className="pd-comment-pending">
          {en
            ? `The ${sampleSize}-comment random sample is not yet complete. Viewpoint percentages will appear after the original comments have been retrieved and classified.`
            : `${sampleSize} 条随机评论样本尚未完成。取得原文并逐条归类后，这里将显示各观点的数量与占比。`}
        </p>
      )}
      <a
        className="pd-comment-source"
        href={source}
        target="_blank"
        rel="noopener noreferrer"
      >
        {en
          ? 'Read published comments on Regulations.gov ↗'
          : '在 Regulations.gov 查看已公开评论 ↗'}
      </a>
    </section>
  );
}
