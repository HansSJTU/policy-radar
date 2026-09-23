import type { Language } from './language';
import { POLICY_IDS, type PolicyId } from './policy-ids.ts';

// Curated source-level developments (federal rulemaking, litigation, official
// guidance). Individual campus notices belong to the CPT school tracker instead.
export type BriefingEntry = {
  id: string;
  date: string;
  policyId: PolicyId;
  // "recent" reports something that happened; "upcoming" announces a dated
  // event. An upcoming entry never moves into the recent list on its own.
  timing: 'recent' | 'upcoming';
  // A later development that makes this upcoming date obsolete.
  supersededOn?: string;
  zh: string;
  en: string;
};

export type BriefingItem = {
  id: string;
  date: string;
  policyId: PolicyId;
  summary: string;
};

// Newest first. Add new entries at the top.
export const briefingEntries: BriefingEntry[] = [
  {
    id: 'grace-comment-deadline',
    date: '2026-11-10',
    policyId: 'grace-period',
    timing: 'upcoming',
    zh: '公众评论截止：美东当日午夜前，案卷 USCIS-2026-0364；这不是生效日。',
    en: 'Public comments due before midnight ET; docket USCIS-2026-0364. This is not an effective date.',
  },
  {
    id: 'h1b-integrity-lca-review-deadline',
    date: '2026-10-18',
    policyId: 'h1b-program-integrity',
    timing: 'upcoming',
    zh: '按签署后 30 个日历天计算，DOL 最迟须开始复查既往 LCA 数据；不是完成期限或统一生效日。',
    en: 'Calculated as 30 calendar days after signature, DOL must begin reviewing prior LCA data by this date; it is not a completion deadline or common effective date.',
  },
  {
    id: 'duration-status-conference',
    date: '2026-10-02',
    policyId: 'duration-status',
    timing: 'upcoming',
    zh: '中午 12 点，波士顿第 1 法庭举行现场状态会议；这是诉讼安排，不是新生效日。',
    en: 'In-person status conference at noon, Courtroom 1, Boston. This is a court proceeding, not a new effective date.',
  },
  {
    id: 'h1b-fee-comment-deadline',
    date: '2026-09-24',
    policyId: 'h1b-fee',
    timing: 'upcoming',
    zh: 'NPRM 评论期截止；窗口关闭后，DHS 将审阅意见并决定是否修订提案。',
    en: 'The NPRM comment period closes. DHS will then review the record and decide whether to revise the proposal.',
  },
  {
    id: 'h1b-integrity-order-signed',
    date: '2026-09-18',
    policyId: 'h1b-program-integrity',
    timing: 'recent',
    zh: '总统签署行政命令，要求跨部门协作、考虑相关裁员并开始复查既往 LCA 数据；原文没有规定裁员即拒签。',
    en: 'The President signed an order directing interagency coordination, consideration of relevant layoffs and review of prior LCA data; it does not impose automatic denial after layoffs.',
  },
  {
    id: 'duration-effective-date',
    date: '2026-09-15',
    policyId: 'duration-status',
    timing: 'upcoming',
    supersededOn: '2026-09-14',
    zh: '若法院未暂停，固定期限规则按计划生效，F/J/I 将不再沿用 D/S。',
    en: 'Unless the court stays it, the rule is scheduled to take effect and F/J/I admissions will no longer use D/S.',
  },
  {
    id: 'duration-cra-introduced',
    date: '2026-09-14',
    policyId: 'duration-status',
    timing: 'recent',
    zh: '议员宣布提出 CRA 决议，拟撤销最终规则；提出不等于成法，法院全国暂缓是另一个程序。',
    en: 'Lawmakers announced a CRA resolution to disapprove the final rule. Introduction is not enactment; the nationwide court stay is a separate proceeding.',
  },
  {
    id: 'duration-nationwide-stay',
    date: '2026-09-14',
    policyId: 'duration-status',
    timing: 'recent',
    zh: '法院全国推迟整项最终规则生效，禁止 DHS 继续实施；不是永久撤销，原 9·15 生效日已推迟。',
    en: 'The court postponed the entire rule nationwide and barred further implementation. This is not permanent vacatur; the September 15 effective date is postponed.',
  },
  {
    id: 'perm-modernization-oira',
    date: '2026-09-14',
    policyId: 'perm-modernization',
    timing: 'recent',
    zh: 'DOL 将 PERM 招聘与雇主合规改革提案送交 OIRA，进入发布前审查；尚未生效。',
    en: 'DOL submitted its PERM recruitment and employer-compliance reform proposal for OIRA prepublication review; it is not in effect.',
  },
  {
    id: 'grace-publication',
    date: '2026-09-11',
    policyId: 'grace-period',
    timing: 'recent',
    zh: 'NPRM 正式刊登，公众评论截止为 11 月 10 日美东午夜前；尚未生效。',
    en: 'The NPRM was published. Public comments are due November 10 before midnight ET; it is not in effect.',
  },
  {
    id: 'opt-fee-oira-completed',
    date: '2026-09-11',
    policyId: 'opt-fee',
    timing: 'recent',
    zh: 'OIRA 带修改完成审查；金额与缴费方尚未公布，尚未生效。',
    en: 'OIRA completed review with changes. The amount and payer remain unpublished; it is not in effect.',
  },
  {
    id: 'grace-preview',
    date: '2026-09-10',
    policyId: 'grace-period',
    timing: 'recent',
    zh: 'NPRM 预览稿公开，涵盖八类工作身份及其家属；现行规则未变。',
    en: 'The NPRM preview is public, covering eight worker classifications and their dependents. The current rule is unchanged.',
  },
  {
    id: 'duration-hearing-under-advisement',
    date: '2026-09-03',
    policyId: 'duration-status',
    timing: 'recent',
    zh: '庭审记录第 70 页：法官希望最迟 9·14 决定，也可能先发短期 TRO 争取时间。这次没有当庭裁决，申请留待裁定，9·14 不是保证。',
    en: 'Transcript p. 70: the judge hoped to decide by September 14 and might first issue a brief TRO for more time. No bench ruling was issued; September 14 is not guaranteed.',
  },
  {
    id: 'duration-injunction-hearing',
    date: '2026-09-03',
    policyId: 'duration-status',
    timing: 'upcoming',
    zh: '法院官方日历列明将举行初步禁令听证；规则是否暂停可能在生效日前明确。',
    en: 'The court’s official calendar lists a preliminary-injunction hearing. Whether the rule is stayed may become clear before its effective date.',
  },
  {
    id: 'duration-government-opposition',
    date: '2026-09-02',
    policyId: 'duration-status',
    timing: 'recent',
    zh: '政府随超页申请附上拟议反对意见，请求法院驳回 APA § 705 暂缓与初步禁令，并主张任何救济都应只限原告。这份文件不是法院裁定。',
    en: 'The government attached its proposed opposition to a motion for leave to exceed the page limit, asking the court to deny APA § 705 relief and a preliminary injunction and arguing that any relief should be limited to the plaintiffs. The filing is not a court ruling.',
  },
  {
    id: 'grace-oira-cleared',
    date: '2026-08-27',
    policyId: 'grace-period',
    timing: 'recent',
    zh: 'OIRA 已带修改放行；DHS 可发布 NPRM，但现行 60 天宽限期暂未改变。',
    en: 'OIRA cleared the proposal with changes. DHS may publish an NPRM, but the current 60-day grace period has not changed.',
  },
  {
    id: 'h1b-fee-nprm',
    date: '2026-08-25',
    policyId: 'h1b-fee',
    timing: 'recent',
    zh: 'DHS 公布附加费提案；覆盖全部 cap-subject petitions，目前仍未生效。',
    en: 'DHS published the surcharge proposal. It covers all cap-subject petitions and is not currently in effect.',
  },
  {
    id: 'cpt-integral-guidance',
    date: '2026-08-24',
    policyId: 'cpt-guidance',
    timing: 'recent',
    zh: 'SEVP 问答进一步解释选修课、全员必需与合作协议要求；选修课型 CPT 已在多校停批。',
    en: 'SEVP’s Q&A further explained elective courses, the all-student requirement, and cooperative agreements; several universities have stopped approving elective-course CPT.',
  },
  {
    id: 'h1b-reform-oira',
    date: '2026-08-24',
    policyId: 'h1b-reform',
    timing: 'recent',
    zh: '拟议规则进入 OIRA 审查；第三方派驻与 cap-exempt 资格可能收紧。',
    en: 'The proposed rule entered OIRA review and may tighten third-party placement and cap-exempt eligibility.',
  },
  {
    id: 'opt-fee-oira',
    date: '2026-08-20',
    policyId: 'opt-fee',
    timing: 'recent',
    zh: '“OPT Fees”进入 OIRA 审查；正文和传闻中的 $100,000 金额均未公开。',
    en: 'The “OPT Fees” rule entered OIRA review. Neither the proposal nor the reported $100,000 amount is public.',
  },
  {
    id: 'duration-lawsuit',
    date: '2026-08-18',
    policyId: 'duration-status',
    timing: 'recent',
    zh: '高校联盟起诉并申请初步禁令，试图阻止固定期限规则在 9·15 生效。',
    en: 'A university coalition sued and requested a preliminary injunction to stop the rule from taking effect on September 15.',
  },
  {
    id: 'cpt-risk-notice',
    date: '2026-08-12',
    policyId: 'cpt-guidance',
    timing: 'recent',
    zh: 'SEVP 已要求 CPT 必须是完成学位不可缺少、且全员必需的环节，并强调学校和 DSO 的合规责任。多所学校随后暂停 optional CPT。',
    en: 'SEVP already required CPT to be indispensable to the degree and required for every student, alongside school and DSO compliance duties; several universities then paused optional CPT.',
  },
  {
    id: 'ead-discretion-comment-close',
    date: '2026-08-04',
    policyId: 'ead-discretion',
    timing: 'recent',
    zh: 'NPRM 评论期已结束。DHS 正在审阅意见，OPT 和 H-4 EAD 的现行审查标准暂时没变。',
    en: 'The NPRM comment period closed. DHS is reviewing comments, while current OPT and H-4 EAD standards remain unchanged.',
  },
];

const dayMs = 86_400_000;

function dateValue(date: string): number {
  return Date.parse(`${date}T00:00:00Z`);
}

// Same-day entries are ordered by policy rank.
const rankOf = (id: PolicyId) => POLICY_IDS.indexOf(id);

export function getThirtyDayBriefing(
  asOf: string,
  language: Language = 'zh',
): { recent: BriefingItem[]; upcoming: BriefingItem[] } {
  const asOfValue = dateValue(asOf);
  const daysFromNow = (entry: BriefingEntry) =>
    Math.round((dateValue(entry.date) - asOfValue) / dayMs);
  const localize = ({
    id,
    date,
    policyId,
    ...entry
  }: BriefingEntry): BriefingItem => ({
    id,
    date,
    policyId,
    summary: entry[language],
  });

  const recent = briefingEntries
    .filter(
      (entry) =>
        entry.timing === 'recent' &&
        daysFromNow(entry) <= 0 &&
        daysFromNow(entry) >= -29,
    )
    .sort(
      (a, b) =>
        dateValue(b.date) - dateValue(a.date) ||
        rankOf(a.policyId) - rankOf(b.policyId),
    )
    .map(localize);

  const upcoming = briefingEntries
    .filter(
      (entry) =>
        entry.timing === 'upcoming' &&
        (!entry.supersededOn || asOf < entry.supersededOn) &&
        daysFromNow(entry) >= 1 &&
        daysFromNow(entry) <= 30,
    )
    .sort(
      (a, b) =>
        dateValue(a.date) - dateValue(b.date) ||
        rankOf(a.policyId) - rankOf(b.policyId),
    )
    .map(localize);

  return { recent, upcoming };
}

export function getBriefingDateLabels(asOf: string) {
  const label = (offset: number) =>
    new Date(dateValue(asOf) + offset * dayMs)
      .toISOString()
      .slice(5, 10)
      .replace('-', '·');
  return {
    recent: `${label(-29)}—${label(0)}`,
    upcoming: `${label(1)}—${label(30)}`,
  };
}
