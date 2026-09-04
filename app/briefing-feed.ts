export type BriefingItem = {
  id: string;
  date: string;
  policyId: string;
  rank: number;
  policy: string;
  summary: string;
  timing: 'recent' | 'upcoming';
  confirmed: boolean;
};

import type { Language } from './language';

const briefingItems: BriefingItem[] = [
  {
    id: 'duration-hearing-under-advisement',
    date: '2026-09-03',
    policyId: 'duration-status',
    rank: 3,
    policy: 'D/S 固定期限',
    summary: '法院举行禁令听证并听取双方陈述，随后将申请留待裁定；这表示法官没有当庭裁决，不代表禁令已获批准或遭到驳回。',
    timing: 'recent',
    confirmed: true,
  },
  {
    id: 'duration-government-opposition',
    date: '2026-09-02',
    policyId: 'duration-status',
    rank: 3,
    policy: 'D/S 固定期限',
    summary: '政府随超页申请附上拟议反对意见，请求法院驳回 APA § 705 暂缓与初步禁令，并主张任何救济均应限于原告；该文件不是法院裁定。',
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
    summary: 'SEVP 收窄“integral”标准；选修课型 CPT 已在多校停批。',
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
    summary: 'SEVP 强调学校与 DSO 的合规责任，多校随后暂停 optional CPT。',
    timing: 'recent',
    confirmed: true,
  },
  {
    id: 'ead-discretion-comment-close',
    date: '2026-08-04',
    policyId: 'ead-discretion',
    rank: 9,
    policy: 'I-765 犯罪记录审查',
    summary: 'NPRM 评论期结束；DHS 正在审阅意见，OPT 与 H-4 EAD 的现行审查标准暂未改变。',
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

const englishBriefing: Record<string, Pick<BriefingItem, 'policy' | 'summary'>> = {
  'duration-hearing-under-advisement': { policy: 'Fixed F/J admission period', summary: 'The court held the injunction hearing, heard arguments, and took the matter under advisement. The judge did not rule from the bench, so the request has been neither granted nor denied.' },
  'duration-government-opposition': { policy: 'Fixed F/J admission period', summary: 'The government attached its proposed opposition to a motion for leave to exceed the page limit, asking the court to deny APA § 705 relief and a preliminary injunction and arguing that any relief should be limited to the plaintiffs. The filing is not a court ruling.' },
  'grace-oira-cleared': { policy: 'End of 60-day grace period', summary: 'OIRA cleared the proposal with changes. DHS may publish an NPRM, but the current 60-day grace period has not changed.' },
  'h1b-fee-nprm': { policy: 'H-1B $103,265', summary: 'DHS published the surcharge proposal. It covers all cap-subject petitions and is not currently in effect.' },
  'cpt-integral-guidance': { policy: 'Tighter CPT guidance', summary: 'SEVP narrowed the “integral” standard, and several universities have stopped approving elective-course CPT.' },
  'h1b-reform-oira': { policy: 'H-1B classification reform', summary: 'The proposed rule entered OIRA review and may tighten third-party placement and cap-exempt eligibility.' },
  'opt-fee-oira': { policy: 'OPT $100k', summary: 'The “OPT Fees” rule entered OIRA review. Neither the proposal nor the reported $100,000 amount is public.' },
  'duration-lawsuit': { policy: 'Fixed F/J admission period', summary: 'A university coalition sued and requested a preliminary injunction to stop the rule from taking effect on September 15.' },
  'cpt-risk-notice': { policy: 'Tighter CPT guidance', summary: 'SEVP emphasized school and DSO compliance duties; several universities then paused optional CPT.' },
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
    .filter((item) => item.timing === 'upcoming' && item.confirmed && distanceInDays(item) >= 1 && distanceInDays(item) <= 30)
    .sort((a, b) => dateValue(a.date) - dateValue(b.date) || a.rank - b.rank);

  return { recent, upcoming };
}
