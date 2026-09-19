export type BriefingItem = {
  id: string;
  date: string;
  policyId: string;
  rank: number;
  policy: string;
  summary: string;
  timing: 'recent' | 'upcoming';
  confirmed: boolean;
  supersededOn?: string;
};

import type { Language } from './language';

// Curated source-level developments (federal rulemaking, litigation, official
// guidance). Individual campus notices belong to the CPT school tracker instead.
export const briefingItems: BriefingItem[] = [
  { id: 'h1b-integrity-order-signed', date: '2026-09-18', policyId: 'h1b-program-integrity', rank: 12, policy: 'H-1B 裁员审查行政命令', summary: '总统签署行政命令，要求跨部门协作、考虑相关裁员并开始复查既往 LCA 数据；原文没有规定裁员即拒签。', timing: 'recent', confirmed: true },
  { id: 'h1b-integrity-lca-review-deadline', date: '2026-10-18', policyId: 'h1b-program-integrity', rank: 12, policy: 'H-1B 裁员审查行政命令', summary: '按签署后 30 个日历天计算，DOL 最迟须开始复查既往 LCA 数据；不是完成期限或统一生效日。', timing: 'upcoming', confirmed: true },
{
  "id": "duration-nationwide-stay",
  "date": "2026-09-14",
  "policyId": "duration-status",
  "rank": 3,
  "policy": "D/S 固定期限",
  "summary": "法院全国推迟整项最终规则生效，禁止 DHS 继续实施；不是永久撤销，原 9·15 生效日已推迟。",
  "timing": "recent",
  "confirmed": true
},
{
  "id": "duration-status-conference",
  "date": "2026-10-02",
  "policyId": "duration-status",
  "rank": 3,
  "policy": "D/S 固定期限",
  "summary": "中午 12 点，波士顿第 1 法庭举行现场状态会议；这是诉讼安排，不是新生效日。",
  "timing": "upcoming",
  "confirmed": true
},
  { id: 'perm-modernization-oira', date: '2026-09-14', policyId: 'perm-modernization', rank: 11, policy: 'PERM 劳工认证改革', summary: 'DOL 将 PERM 招聘与雇主合规改革提案送交 OIRA，进入发布前审查；尚未生效。', timing: 'recent', confirmed: true },
{"id": "opt-fee-oira-completed", "date": "2026-09-11", "policyId": "opt-fee", "rank": 1, "policy": "OPT 收费", "summary": "OIRA 带修改完成审查；金额与缴费方尚未公布，尚未生效。", "timing": "recent", "confirmed": true},
{"id": "grace-comment-deadline", "date": "2026-11-10", "policyId": "grace-period", "rank": 8, "policy": "取消 60 天宽限期", "summary": "公众评论截止：美东当日午夜前，案卷 USCIS-2026-0364；这不是生效日。", "timing": "upcoming", "confirmed": true},
{"id": "grace-preview", "date": "2026-09-10", "policyId": "grace-period", "rank": 8, "policy": "取消 60 天宽限期", "summary": "NPRM 预览稿公开，涵盖八类工作身份及其家属；现行规则未变。", "timing": "recent", "confirmed": true},
{"id": "grace-publication", "date": "2026-09-11", "policyId": "grace-period", "rank": 8, "policy": "取消 60 天宽限期", "summary": "NPRM 正式刊登，公众评论截止为 11 月 10 日美东午夜前；尚未生效。", "timing": "recent", "confirmed": true},
  {
    id: 'duration-hearing-under-advisement',
    date: '2026-09-03',
    policyId: 'duration-status',
    rank: 3,
    policy: 'D/S 固定期限',
    summary: '庭审记录第 70 页：法官希望最迟 9·14 决定，也可能先发短期 TRO 争取时间。这次没有当庭裁决，申请留待裁定，9·14 不是保证。',
    timing: 'recent',
    confirmed: true,
  },
  {
    id: 'duration-government-opposition',
    date: '2026-09-02',
    policyId: 'duration-status',
    rank: 3,
    policy: 'D/S 固定期限',
    summary: '政府随超页申请附上拟议反对意见，请求法院驳回 APA § 705 暂缓与初步禁令，并主张任何救济都应只限原告。这份文件不是法院裁定。',
    timing: 'recent',
    confirmed: true,
  },
  {
    id: 'grace-oira-cleared',
    date: '2026-08-27',
    policyId: 'grace-period',
    rank: 8,
    policy: '取消 60 天宽限期',
    summary: 'OIRA 已带修改放行；DHS 可发布 NPRM，但现行 60 天宽限期暂未改变。',
    timing: 'recent',
    confirmed: true,
  },
  {
    id: 'h1b-fee-nprm',
    date: '2026-08-25',
    policyId: 'h1b-fee',
    rank: 2,
    policy: 'H-1B $103,265',
    summary: 'DHS 公布附加费提案；覆盖全部 cap-subject petitions，目前仍未生效。',
    timing: 'recent',
    confirmed: true,
  },
  {
    id: 'cpt-integral-guidance',
    date: '2026-08-24',
    policyId: 'cpt-guidance',
    rank: 5,
    policy: 'CPT 指引收紧',
    summary: 'SEVP 问答进一步解释选修课、全员必需与合作协议要求；选修课型 CPT 已在多校停批。',
    timing: 'recent',
    confirmed: true,
  },
  {
    id: 'h1b-reform-oira',
    date: '2026-08-24',
    policyId: 'h1b-reform',
    rank: 7,
    policy: 'H-1B 分类改革',
    summary: '拟议规则进入 OIRA 审查；第三方派驻与 cap-exempt 资格可能收紧。',
    timing: 'recent',
    confirmed: true,
  },
  {
    id: 'opt-fee-oira',
    date: '2026-08-20',
    policyId: 'opt-fee',
    rank: 1,
    policy: 'OPT $100k',
    summary: '“OPT Fees”进入 OIRA 审查；正文和传闻中的 $100,000 金额均未公开。',
    timing: 'recent',
    confirmed: true,
  },
  {
    id: 'duration-lawsuit',
    date: '2026-08-18',
    policyId: 'duration-status',
    rank: 3,
    policy: 'D/S 固定期限',
    summary: '高校联盟起诉并申请初步禁令，试图阻止固定期限规则在 9·15 生效。',
    timing: 'recent',
    confirmed: true,
  },
  {
    id: 'cpt-risk-notice',
    date: '2026-08-12',
    policyId: 'cpt-guidance',
    rank: 5,
    policy: 'CPT 指引收紧',
    summary: 'SEVP 已要求 CPT 必须是完成学位不可缺少、且全员必需的环节，并强调学校和 DSO 的合规责任。多所学校随后暂停 optional CPT。',
    timing: 'recent',
    confirmed: true,
  },
  {
    id: 'ead-discretion-comment-close',
    date: '2026-08-04',
    policyId: 'ead-discretion',
    rank: 9,
    policy: 'I-765 犯罪记录审查',
    summary: 'NPRM 评论期已结束。DHS 正在审阅意见，OPT 和 H-4 EAD 的现行审查标准暂时没变。',
    timing: 'recent',
    confirmed: true,
  },
  {
    id: 'duration-injunction-hearing',
    date: '2026-09-03',
    policyId: 'duration-status',
    rank: 3,
    policy: 'D/S 固定期限',
    summary: '法院官方日历列明将举行初步禁令听证；规则是否暂停可能在生效日前明确。',
    timing: 'upcoming',
    confirmed: true,
  },
  {
    id: 'duration-effective-date',
    supersededOn: '2026-09-14',
    date: '2026-09-15',
    policyId: 'duration-status',
    rank: 3,
    policy: 'D/S 固定期限',
    summary: '若法院未暂停，固定期限规则按计划生效，F/J/I 将不再沿用 D/S。',
    timing: 'upcoming',
    confirmed: true,
  },
  {
    id: 'h1b-fee-comment-deadline',
    date: '2026-09-24',
    policyId: 'h1b-fee',
    rank: 2,
    policy: 'H-1B $103,265',
    summary: 'NPRM 评论期截止；窗口关闭后，DHS 将审阅意见并决定是否修订提案。',
    timing: 'upcoming',
    confirmed: true,
  },
];

export const englishBriefing: Record<string, Pick<BriefingItem, 'policy' | 'summary'>> = {
  'h1b-integrity-order-signed': { policy: 'H-1B layoff-review executive order', summary: 'The President signed an order directing interagency coordination, consideration of relevant layoffs and review of prior LCA data; it does not impose automatic denial after layoffs.' },
  'h1b-integrity-lca-review-deadline': { policy: 'H-1B layoff-review executive order', summary: 'Calculated as 30 calendar days after signature, DOL must begin reviewing prior LCA data by this date; it is not a completion deadline or common effective date.' },
  'duration-nationwide-stay': { policy: 'D/S final rule', summary: 'The court postponed the entire rule nationwide and barred further implementation. This is not permanent vacatur; the September 15 effective date is postponed.' },
  'duration-status-conference': { policy: 'D/S final rule', summary: 'In-person status conference at noon, Courtroom 1, Boston. This is a court proceeding, not a new effective date.' },
  'perm-modernization-oira': { policy: 'PERM labor certification reform', summary: 'DOL submitted its PERM recruitment and employer-compliance reform proposal for OIRA prepublication review; it is not in effect.' },
  'duration-hearing-under-advisement': { policy: 'Fixed F/J admission period', summary: 'Transcript p. 70: the judge hoped to decide by September 14 and might first issue a brief TRO for more time. No bench ruling was issued; September 14 is not guaranteed.' },
  'duration-government-opposition': { policy: 'Fixed F/J admission period', summary: 'The government attached its proposed opposition to a motion for leave to exceed the page limit, asking the court to deny APA § 705 relief and a preliminary injunction and arguing that any relief should be limited to the plaintiffs. The filing is not a court ruling.' },
  'grace-comment-deadline': { policy: 'End of 60-day grace period', summary: 'Public comments due before midnight ET; docket USCIS-2026-0364. This is not an effective date.' },
  'grace-preview': { policy: 'End of 60-day grace period', summary: 'The NPRM preview is public, covering eight worker classifications and their dependents. The current rule is unchanged.' },
  'grace-publication': { policy: 'End of 60-day grace period', summary: 'The NPRM was published. Public comments are due November 10 before midnight ET; it is not in effect.' },
  'grace-oira-cleared': { policy: 'End of 60-day grace period', summary: 'OIRA cleared the proposal with changes. DHS may publish an NPRM, but the current 60-day grace period has not changed.' },
  'h1b-fee-nprm': { policy: 'H-1B $103,265', summary: 'DHS published the surcharge proposal. It covers all cap-subject petitions and is not currently in effect.' },
  'cpt-integral-guidance': { policy: 'Tighter CPT guidance', summary: 'SEVP’s Q&A further explained elective courses, the all-student requirement, and cooperative agreements; several universities have stopped approving elective-course CPT.' },
  'h1b-reform-oira': { policy: 'H-1B classification reform', summary: 'The proposed rule entered OIRA review and may tighten third-party placement and cap-exempt eligibility.' },
  'opt-fee-oira-completed': { policy: 'OPT fee', summary: 'OIRA completed review with changes. The amount and payer remain unpublished; it is not in effect.' },
  'opt-fee-oira': { policy: 'OPT $100k', summary: 'The “OPT Fees” rule entered OIRA review. Neither the proposal nor the reported $100,000 amount is public.' },
  'duration-lawsuit': { policy: 'Fixed F/J admission period', summary: 'A university coalition sued and requested a preliminary injunction to stop the rule from taking effect on September 15.' },
  'cpt-risk-notice': { policy: 'Tighter CPT guidance', summary: 'SEVP already required CPT to be indispensable to the degree and required for every student, alongside school and DSO compliance duties; several universities then paused optional CPT.' },
  'ead-discretion-comment-close': { policy: 'I-765 criminal-record review', summary: 'The NPRM comment period closed. DHS is reviewing comments, while current OPT and H-4 EAD standards remain unchanged.' },
  'duration-injunction-hearing': { policy: 'Fixed F/J admission period', summary: 'The court’s official calendar lists a preliminary-injunction hearing. Whether the rule is stayed may become clear before its effective date.' },
  'duration-effective-date': { policy: 'Fixed F/J admission period', summary: 'Unless the court stays it, the rule is scheduled to take effect and F/J/I admissions will no longer use D/S.' },
  'h1b-fee-comment-deadline': { policy: 'H-1B $103,265', summary: 'The NPRM comment period closes. DHS will then review the record and decide whether to revise the proposal.' },
};

const dayMs = 86_400_000;

function dateValue(date: string): number {
  return Date.parse(`${date}T00:00:00Z`);
}

export function getThirtyDayBriefing(asOf: string, language: Language = 'zh'): { recent: BriefingItem[]; upcoming: BriefingItem[] } {
  const asOfValue = dateValue(asOf);
  const distanceInDays = (item: BriefingItem) => Math.round((dateValue(item.date) - asOfValue) / dayMs);

  const localizedItems = language === 'en'
    ? briefingItems.map((item) => ({ ...item, ...englishBriefing[item.id] }))
    : briefingItems;

  const recent = localizedItems
    .filter((item) => item.timing === 'recent' && distanceInDays(item) <= 0 && distanceInDays(item) >= -29)
    .sort((a, b) => dateValue(b.date) - dateValue(a.date) || a.rank - b.rank);

  const upcoming = localizedItems
    .filter((item) => item.timing === 'upcoming' && item.confirmed && (!item.supersededOn || asOf < item.supersededOn) && distanceInDays(item) >= 1 && distanceInDays(item) <= 30)
    .sort((a, b) => dateValue(a.date) - dateValue(b.date) || a.rank - b.rank);

  return { recent, upcoming };
}

export function getBriefingDateLabels(asOf: string) {
  const label = (offset: number) => new Date(dateValue(asOf) + offset * dayMs)
    .toISOString().slice(5, 10).replace('-', '·');
  return { recent: `${label(-29)}—${label(0)}`, upcoming: `${label(1)}—${label(30)}` };
}
