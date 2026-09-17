export type ProcessKind = 'federal-rulemaking' | 'administrative-guidance';

export type LitigationMarker = {
  date: string;
  label: string;
  afterStage: number;
  progress: number;
  status: 'filed' | 'upcoming';
  align: 'left' | 'right';
  lane: 'base' | 'raised';
};

export type ProcessTrack = {
  kind: ProcessKind;
  name: string;
  meaning: string;
  detail: string;
  currentSummary: string;
  // Completed events, work in progress and future events are distinct.
  lastCompletedStage: number | null;
  activeStage: number | null;
  nextStage: number | null;
  waitingFor: string | null;
  stages: readonly string[];
  litigation: LitigationMarker[];
};

import type { Language } from './language';

const federalRulemakingStages = [
  '拟稿／议程',
  'OIRA 审查',
  'NPRM 发布',
  '公众评论',
  '最终规则',
  '生效',
] as const;

const administrativeGuidanceStages = [
  '风险通知',
  '口径细化',
  '学校执行',
  '执法观察',
  '后续指引',
] as const;

const federalMeaning =
  '行政机关要改一条有法律约束力的联邦法规，通常先拟稿，交给 OIRA 做发布前审查，再发布 NPRM 征求公众意见。回应意见之后，才能发布最终规则，并在指定日期生效。诉讼是规则发布之后的司法审查。它会影响规则能不能生效、什么时候生效，但不是行政流程里的一段。';

const guidanceMeaning =
  'SEVP／ICE 用 Broadcast、FAQ 这类材料解释现行规则，由学校和 DSO 直接落实。它不改 CFR，所以通常没有 NPRM、公众评论和最终规则这几步。执行可以很快，但法律层级低于正式法规。';

const processTracks: Record<string, ProcessTrack> = {
  'perm-modernization': {
    kind: 'federal-rulemaking',
    name: '联邦规则制定流程',
    meaning: federalMeaning,
    detail: 'DOL 在 2026-09-14 把 PERM 改革提案送交 OIRA，发布前审查还在进行。本次核查没有找到公开的 NPRM 正文，尚未生效。',
    currentSummary: 'PERM 改革处于发布前审查',
    lastCompletedStage: 0,
    activeStage: 1,
    nextStage: 2,
    waitingFor: 'OIRA 审查结果及 DOL 发布 NPRM；具体条款、评论期限和生效日期待定。',
    stages: federalRulemakingStages,
    litigation: [],
  },
  'opt-fee': {
    kind: 'federal-rulemaking',
    name: '联邦规则制定流程',
    meaning: federalMeaning,
    detail:
      'OIRA 在 9 月 11 日带修改完成 OPT 收费提案的审查。目前没有公开的 NPRM，金额和缴费方未公布，尚未生效。',
    currentSummary: '正文与金额尚未公开',
    lastCompletedStage: 1,
    activeStage: null,
    nextStage: 2,
    waitingFor: '等待 NPRM 正文及公众评论期；确认金额、缴费方和适用范围。',
    stages: federalRulemakingStages,
    litigation: [],
  },
  'h1b-fee': {
    kind: 'federal-rulemaking',
    name: '联邦规则制定流程',
    meaning: federalMeaning,
    detail: 'NPRM 已发布，目前在公众评论阶段。DHS 审阅意见后才能发布最终规则。',
    currentSummary: '正式提案开放评论',
    lastCompletedStage: 2,
    activeStage: 3,
    nextStage: 4,
    waitingFor: '9 月 24 日评论截止，随后由 DHS 审阅意见。',
    stages: federalRulemakingStages,
    litigation: [],
  },
  'h1b-weighted-selection': {
    kind: 'federal-rulemaking',
    name: '联邦规则制定流程',
    meaning: federalMeaning,
    detail:
      'DHS 已完成 NPRM、公众评论和最终规则阶段。规则自 2026-02-27 生效，并从 FY2027 H-1B 注册季开始使用工资等级加权选择。',
    currentSummary: '最终规则已生效并开始执行',
    lastCompletedStage: 5,
    activeStage: null,
    nextStage: null,
    waitingFor: null,
    stages: federalRulemakingStages,
    litigation: [],
  },
  'duration-status': {
    kind: 'federal-rulemaking',
    name: '联邦规则制定流程',
    meaning: federalMeaning,
    detail:
      "法院在 9·14 依据 APA § 705 全国推迟整项最终规则生效，并禁止 DHS/ICE 继续实施，直到另行命令或实体审理结束。原 9·15 生效安排已经改变。",
    currentSummary: "全国暂缓已签发，生效日已推迟",
    lastCompletedStage: 4,
    activeStage: null,
    nextStage: 5,
    waitingFor:
      "10·02 中午 12 点状态会议；关注后续法院命令及上诉，不是新生效日。",
    stages: federalRulemakingStages,
    litigation: [
      {
        date: '8·18',
        label: '提起诉讼',
        afterStage: 4,
        progress: 53,
        status: 'filed',
        align: 'left',
        lane: 'base',
      },
      {
        date: '9·02',
        label: '拟议反对意见',
        afterStage: 4,
        progress: 70,
        status: 'filed',
        align: 'left',
        lane: 'raised',
      },
      {
        date: '9·03',
        label: '听证后待裁定',
        afterStage: 4,
        progress: 80,
        status: 'filed',
        align: 'right',
        lane: 'base',
      },
      {
  "date": "9·14",
  "label": "全国暂缓",
  "afterStage": 4,
  "progress": 90,
  "status": "filed",
  "align": "right",
  "lane": "raised"
},
    ],
  },
  'cpt-guidance': {
    kind: 'administrative-guidance',
    name: 'SEVP 行政指引流程',
    meaning: guidanceMeaning,
    detail:
      'SEVP 先发布合规风险通知，再细化 CPT 口径；学校和 DSO 已开始按新口径执行。',
    currentSummary: '学校已按新口径执行',
    lastCompletedStage: 1,
    activeStage: 2,
    nextStage: 3,
    waitingFor: '学校更新执行通知，以及 SEVP 是否补充解释；没有统一恢复日期。',
    stages: administrativeGuidanceStages,
    litigation: [],
  },
  'prevailing-wage': {
    kind: 'federal-rulemaking',
    name: '联邦规则制定流程',
    meaning: federalMeaning,
    detail:
      'DOL 已经发布 NPRM，公众评论期在 2026 年 5 月 26 日结束。目前仍在提案阶段，DOL 要审阅意见之后才能发布最终规则。',
    currentSummary: '公众评论期已结束，等待后续规则',
    lastCompletedStage: 3,
    activeStage: null,
    nextStage: 4,
    waitingFor: 'DOL 审阅意见、修改提案或推进最终规则；日期未定。',
    stages: federalRulemakingStages,
    litigation: [],
  },
  'h1b-reform': {
    kind: 'federal-rulemaking',
    name: '联邦规则制定流程',
    meaning: federalMeaning,
    detail: '拟议规则处于 OIRA 发布前审查，正文尚未公开。',
    currentSummary: 'OMB 发布前审查',
    lastCompletedStage: 0,
    activeStage: 1,
    nextStage: 2,
    waitingFor: 'OIRA 完成审查及 DHS 公开提案；尚无确认发布日期。',
    stages: federalRulemakingStages,
    litigation: [],
  },
  'grace-period': {
    kind: 'federal-rulemaking',
    name: '联邦规则制定流程',
    meaning: federalMeaning,
    detail:
      'NPRM 在 9 月 11 日正式刊登，公众评论期到 11 月 10 日。目前还没有最终规则。',
    currentSummary: 'NPRM 已发布，公众评论期内',
    lastCompletedStage: 2,
    activeStage: 3,
    nextStage: 4,
    waitingFor: '公众评论在 11 月 10 日美东当日午夜前截止。之后要关注最终规则和生效安排。',
    stages: federalRulemakingStages,
    litigation: [],
  },
  'ead-discretion': {
    kind: 'federal-rulemaking',
    name: '联邦规则制定流程',
    meaning: federalMeaning,
    detail:
      'DHS 已经发布 NPRM，公众评论期在 2026 年 8 月 4 日结束。目前还没有最终规则或生效日期。',
    currentSummary: '公众评论期已结束，尚未形成最终规则',
    lastCompletedStage: 3,
    activeStage: null,
    nextStage: 4,
    waitingFor: 'DHS 审阅意见并决定是否修改或定稿；日期未定。',
    stages: federalRulemakingStages,
    litigation: [],
  },
  'h4-ead': {
    kind: 'federal-rulemaking',
    name: '联邦规则制定流程',
    meaning: federalMeaning,
    detail: '目前只是统一议程中的长期项目，尚未进入 OIRA 审查或 NPRM 阶段。',
    currentSummary: '长期议程，暂无日期',
    lastCompletedStage: 0,
    activeStage: null,
    nextStage: 1,
    waitingFor: '是否从长期议程进入正式规则制定；尚无提案日期。',
    stages: federalRulemakingStages,
    litigation: [],
  },
};

const federalRulemakingStagesEnglish = [
  'Draft / agenda',
  'OIRA review',
  'NPRM published',
  'Public comment',
  'Final rule',
  'Effective',
] as const;

const administrativeGuidanceStagesEnglish = [
  'Risk notice',
  'Standard clarified',
  'School implementation',
  'Enforcement monitoring',
  'Further guidance',
] as const;

const federalMeaningEnglish =
  'When a federal agency changes legally binding regulations, it generally drafts the rule, completes OIRA prepublication review, publishes an NPRM for public comment, responds to comments, and then issues a final rule with an effective date. Litigation is a parallel judicial review that can change whether or when a rule takes effect; it is not a stage of the agency process.';
const guidanceMeaningEnglish =
  'SEVP/ICE uses Broadcast messages, FAQs, and similar materials to explain existing rules, and schools and DSOs apply that guidance directly. Because guidance does not amend the CFR, it generally has no NPRM, public-comment, or final-rule stages. Implementation can be rapid, but guidance has less legal force than a regulation.';

const englishProcessTracks: Record<
  string,
  Pick<
    ProcessTrack,
    | 'name'
    | 'meaning'
    | 'detail'
    | 'currentSummary'
    | 'stages'
    | 'litigation'
    | 'waitingFor'
  >
> = {
  'perm-modernization': {
    name: 'Federal rulemaking',
    meaning: federalMeaningEnglish,
    detail: 'DOL submitted its PERM reform proposal to OIRA on September 14, 2026. Prepublication review is ongoing; this check did not locate a public NPRM, and the reform is not in effect.',
    currentSummary: 'PERM reform is in prepublication review',
    waitingFor: 'The OIRA review outcome and a DOL NPRM; detailed provisions, comment deadline and effective date remain unknown.',
    stages: federalRulemakingStagesEnglish,
    litigation: [],
  },
  'opt-fee': {
    name: 'Federal rulemaking',
    meaning: federalMeaningEnglish,
    detail:
      'OIRA completed OPT fee proposal review with changes on September 11. No public NPRM was located; the amount and payer are unpublished and the fee is not in effect.',
    waitingFor: 'Publication of an NPRM and comment period, specifying the amount, payer and coverage.',
    currentSummary: 'Rule text and fee amount are not public',
    stages: federalRulemakingStagesEnglish,
    litigation: [],
  },
  'h1b-fee': {
    name: 'Federal rulemaking',
    meaning: federalMeaningEnglish,
    detail:
      'The NPRM is public and the comment period is open. DHS must review the comments before it can issue a final rule.',
    waitingFor:
      'The September 24 comment deadline, followed by DHS review of comments.',
    currentSummary: 'Published proposal open for comment',
    stages: federalRulemakingStagesEnglish,
    litigation: [],
  },
  'h1b-weighted-selection': {
    name: 'Federal rulemaking',
    meaning: federalMeaningEnglish,
    detail:
      'DHS completed the NPRM, public-comment, and final-rule stages. The rule took effect on February 27, 2026 and applies wage-level-weighted selection beginning with the FY 2027 H-1B registration season.',
    waitingFor: null,
    currentSummary: 'Final rule in effect and implemented',
    stages: federalRulemakingStagesEnglish,
    litigation: [],
  },
  'duration-status': {
    name: 'Federal rulemaking',
    meaning: federalMeaningEnglish,
    detail:
      "On September 14, the court postponed the entire final rule nationwide under APA § 705 and barred DHS/ICE from implementation until further order or resolution on the merits. The September 15 effective date is postponed.",
    waitingFor:
      "October 2 status conference at noon; monitor later court orders and appeals. This is not an effective date.",
    currentSummary: "Nationwide stay issued; effective date postponed",
    stages: federalRulemakingStagesEnglish,
    litigation: [
      {
        date: '8·18',
        label: 'Lawsuit filed',
        afterStage: 4,
        progress: 53,
        status: 'filed',
        align: 'left',
        lane: 'base',
      },
      {
        date: '9·02',
        label: 'Proposed opposition',
        afterStage: 4,
        progress: 70,
        status: 'filed',
        align: 'left',
        lane: 'raised',
      },
      {
        date: '9·03',
        label: 'Hearing held; decision pending',
        afterStage: 4,
        progress: 80,
        status: 'filed',
        align: 'right',
        lane: 'base',
      },
      {
  "date": "9·14",
  "label": "Nationwide stay",
  "afterStage": 4,
  "progress": 90,
  "status": "filed",
  "align": "right",
  "lane": "raised"
},
    ],
  },
  'cpt-guidance': {
    name: 'SEVP administrative guidance',
    meaning: guidanceMeaningEnglish,
    detail:
      'SEVP first issued a compliance-risk notice and then narrowed the CPT standard. Schools and DSOs are already applying that interpretation.',
    waitingFor:
      'School implementation updates and any further SEVP clarification; there is no common resumption date.',
    currentSummary: 'Schools are applying the new standard',
    stages: administrativeGuidanceStagesEnglish,
    litigation: [],
  },
  'prevailing-wage': {
    name: 'Federal rulemaking',
    meaning: federalMeaningEnglish,
    detail:
      'DOL published an NPRM and the public comment period closed on May 26, 2026. The initiative remains a proposal while DOL reviews comments.',
    waitingFor:
      'DOL review of comments, revisions or further action toward a final rule; no date is set.',
    currentSummary: 'Comment period closed; awaiting further rulemaking',
    stages: federalRulemakingStagesEnglish,
    litigation: [],
  },
  'h1b-reform': {
    name: 'Federal rulemaking',
    meaning: federalMeaningEnglish,
    detail:
      'The proposed rule is in OIRA prepublication review. Its text is not yet public.',
    waitingFor:
      'Completion of OIRA review and publication of the DHS proposal; no publication date is confirmed.',
    currentSummary: 'OMB prepublication review',
    stages: federalRulemakingStagesEnglish,
    litigation: [],
  },
  'grace-period': {
    name: 'Federal rulemaking',
    meaning: federalMeaningEnglish,
    detail:
      'The NPRM was published September 11, with public comments due November 10. It is not a final rule.',
    waitingFor:
      'Public comments due November 10 before midnight Eastern Time; then monitor any final rule and effective-date provisions.',
    currentSummary: 'NPRM published; public comments open',
    stages: federalRulemakingStagesEnglish,
    litigation: [],
  },
  'ead-discretion': {
    name: 'Federal rulemaking',
    meaning: federalMeaningEnglish,
    detail:
      'DHS published the NPRM and the public comment period closed on August 4, 2026. There is no final rule or effective date.',
    waitingFor:
      'DHS review of comments and a decision on revisions or a final rule; no date is set.',
    currentSummary: 'Comment period closed; no final rule',
    stages: federalRulemakingStagesEnglish,
    litigation: [],
  },
  'h4-ead': {
    name: 'Federal rulemaking',
    meaning: federalMeaningEnglish,
    detail:
      'The initiative is only a long-term item in the Unified Agenda. It has not entered OIRA review or the NPRM stage.',
    waitingFor:
      'Whether the long-term agenda item advances into rulemaking; no proposal date is set.',
    currentSummary: 'Long-term agenda item with no date',
    stages: federalRulemakingStagesEnglish,
    litigation: [],
  },
};

export function getProcessTrack(
  policyId: string,
  language: Language = 'zh',
): ProcessTrack {
  const track = processTracks[policyId];
  if (!track) throw new Error(`Unknown policy process: ${policyId}`);
  if (language === 'en') return { ...track, ...englishProcessTracks[policyId] };
  return track;
}

export type ProcessStageState = 'complete' | 'active' | 'upcoming';

export function getProcessStageState(
  track: ProcessTrack,
  index: number,
): ProcessStageState {
  if (track.lastCompletedStage !== null && index <= track.lastCompletedStage)
    return 'complete';
  if (index === track.activeStage) return 'active';
  return 'upcoming';
}

export function getProcessStageLabel(
  track: ProcessTrack,
  index: number,
  language: Language,
): string {
  const english = language === 'en';
  const state = getProcessStageState(track, index);
  if (state === 'complete')
    return index === track.lastCompletedStage
      ? english
        ? 'Last completed'
        : '最近已完成'
      : english
        ? 'Completed'
        : '已完成';
  if (state === 'active') return english ? 'In progress' : '进行中';
  return index === track.nextStage
    ? english
      ? 'Next · Not yet reached'
      : '下一节点 · 尚未发生'
    : english
      ? 'Not yet reached'
      : '尚未发生';
}
