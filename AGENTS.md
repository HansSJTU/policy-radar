# Agent instructions

Read `CONTRIBUTING.md` and `DESIGN.md` before changing content or UI. This file covers how to write the copy readers see.

## Write for the student, not for the audit

Readers are students on the F-1 → CPT → OPT → H-1B path. They want to know what applies to them, from when, and how serious it is. Write like a careful friend who read the documents, not like a reviewer covering themselves.

- **Say what is true.** "The stay remains in force during the appeal", not "the appeal alone does not establish that the stay has been lifted".
- **Do not list what a document fails to prove.** Drop clauses such as 不能据此认定…, 不能外推…, 不代表…, 不等于…, "does not establish…", "cannot be generalized…". If a boundary matters to the reader, state it once, positively: "Approved Fall 2026 CPT continues", not "the notice does not establish that existing approvals are revoked".
- **Do not narrate your review.** No "11·01 重读…", "本次另读…", "was retrieved through web access", "title-only", "access gap", "returned 502/202", "text not obtained", "remains unverified". What you checked and how goes in the commit message and PR description.
- **No review-scope field.** Policies have no `reviewNote` and pages have no "核查范围 / Review scope" block; a test fails if one comes back. Source gaps, unread exhibits and pages that would not load belong in the PR description, not on the site.
- **Wait for the text.** If a docket entry or notice shows only a title, do not add a milestone, briefing entry or update-log entry saying so. Add the event once you can say what it does.
- **One caveat per item, in its place.** A policy's boundary goes in `caveat`; do not repeat it in `tldr`, `summary`, `teaser`, every example and every scenario.
- **Milestones are real events,** dated when they happened: a filing, an order, a publication. Re-checks ("As of 10·29, still no NPRM") are not events.
- **No raw URLs in prose.** Links go in `href` or `sources`.
- **Explain, even if it takes more words.** Readers are not lawyers. When a step in a lawsuit or rulemaking matters, say what it is and what it means for the student: "双方都请法官不开庭、直接根据书面材料判决", not just "双方提交直接判决动议". A longer, clear paragraph beats a short, cryptic one.
- **Short sentences.** One fact per sentence; use more sentences rather than packing clauses. Chinese copy should read as natural Chinese, not translated legal English.
- **Name documents, not docket numbers.** In prose write "政府 11·02 的最后一轮回复" or "the September 14 preliminary injunction", not "第 70 项" or "entry 51". Entry numbers may stay in `sources` labels so readers can find the file.

### Examples

| Instead of | Write |
| --- | --- |
| 上诉本身不解除全国暂缓令 | 上诉期间暂缓令继续有效 |
| 这是书状日期，不是恢复 CPT 或法院裁定的日期 | 原告回复书状截止 |
| 未说明已有授权如何处理，不能外推全校所有 CPT 停批 | (omit, or state what the notice does say about existing approvals) |
| No public NPRM was obtained in this check; provisions remain undetermined | Next, DOL publishes the NPRM |
| This is not an effective date. | (omit) |
| 命令没说有裁员就拒 | 裁员是审查时要考虑的一项因素 |
| 政府第 70 项回复：备选主张发回 DHS 但保留规则、限缩救济 | 政府退一步请求：只把规则发回 DHS 补充说明、新规保留，并让暂缓只保护起诉方 |
| 这份文件是政府的意见，不是法院裁定 | 法院还没裁定 |

### Plain words

Write the way you would explain it to a friend. Explain a legal term the first time it appears, or use the everyday word. Terms that recur across pages belong in `app/glossary.ts`, which pops up a plain definition wherever the term appears; add an entry rather than leaving a term unexplained.

| Avoid | Use |
| --- | --- |
| 口径、执行口径 | 标准、说法、做法 |
| 受覆盖的续期、合格续期 | 相关类别的续期、符合条件的续期 |
| 原样承接 | 照原样定稿 |
| 界线 | 分界日、截止日 |
| 随身份自带的工作授权 | 凭身份本身就能工作（不需要 EAD） |
| 全员必需、课程体系 | 所有学生必修、课程要求 |
| 简易判决、实体裁定、书状 | 直接判决、最终判决、上诉书／答辩书 |
| 当事方 | 原告、政府（说清是谁） |
| IFR, covered renewal, operative order | interim rule, renewal in an affected category, the order in force |
| 救济、限缩救济 | 保护、让暂缓只保护起诉方 |
| 无权起诉 | 没有起诉资格（并说明意思：没受到足够具体的损害） |
| 第 N 项、entry N（正文中） | 文件名和日期：9·14 初步禁令、政府 11·02 回复 |
| summary judgment, remand, relief | decide the case on the written record, send the rule back to the agency, protection |

`tests/plain-language.test.mjs` checks every policy, school record, briefing entry, update-log entry, glossary definition, public-comment note and the main interface copy for the most common review-note phrases and officialese. Do not work around it with synonyms; rewrite the sentence.

## Daily policy updates

- Update `checkedOn` only for entries whose sources you actually reviewed, and `SITE_UPDATED_ON` in `app/policy-freshness.ts` when the site changes.
- Add an update-log entry only for a change a reader would notice: a new event, a new school, a changed status. A routine re-check with no change needs no entry.
- Run `npm test`, `npm run lint` and `npm run build` before opening a PR.
