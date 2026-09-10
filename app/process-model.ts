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
  '行政机关修改具有法律约束力的联邦法规时，通常先拟稿并接受 OIRA 发布前审查，再发布 NPRM 征求公众意见；回应意见后才能发布最终规则，并在指定日期生效。诉讼属于规则发布后的并行司法审查，会影响规则能否或何时生效，但不是行政流程本身的一段。';

const guidanceMeaning =
  'SEVP／ICE 通过 Broadcast、FAQ 等材料解释现行规则，由学校和 DSO 直接落实。它不修改 CFR，因此通常没有 NPRM、公众评论和最终规则这些步骤；执行可以很快，但法律层级低于正式法规。';

const processTracks: Record<string, ProcessTrack> = {
  'opt-fee': {
    kind: 'federal-rulemaking',
    name: '联邦规则制定流程',
    meaning: federalMeaning,
    detail:
      'ICE 的费用提案目前处于 OIRA 发布前审查。审查结束后才会公开 NPRM 正文和金额。',
    currentSummary: '正文与金额尚未公开',
    lastCompletedStage: 0,
    activeStage: 1,
    nextStage: 2,
    waitingFor: 'OIRA 完成发布前审查，随后才可能公开提案。',
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
      'DHS 已走完 NPRM、公众评论和最终规则。法院于 9 月 3 日举行禁令听证、听取双方陈述，并将申请留待裁定；这表示法官没有当庭作出决定，将继续审议并可能另行发布书面命令。9 月 15 日仍是未被暂缓或禁止时的计划生效日。',
    currentSummary: '听证已举行；禁令申请留待裁定',
    lastCompletedStage: 4,
    activeStage: null,
    nextStage: 5,
    waitingFor:
      '法院对禁令申请作出裁定；9 月 15 日仍是未被暂缓时的计划生效日。',
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
      'DOL 已发布 NPRM，公众评论期于 2026 年 5 月 26 日结束。目前仍处于提案阶段，DOL 需要审阅意见后才能发布最终规则。',
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
      'NPRM 预览稿已于 9 月 10 日公开，预定 9 月 11 日正式刊登；尚未形成最终规则。',
    currentSummary: '预览稿已公开，等待正式刊登',
    lastCompletedStage: 1,
    activeStage: null,
    nextStage: 2,
    waitingFor: '9 月 11 日在 Federal Register 正式刊登 NPRM，并确认刊登后 60 天的评论截止日期。',
    stages: federalRulemakingStages,
    litigation: [],
  },
  'ead-discretion': {
    kind: 'federal-rulemaking',
    name: '联邦规则制定流程',
    meaning: federalMeaning,
    detail:
      'DHS 已发布 NPRM，公众评论期于 2026 年 8 月 4 日结束。目前尚无最终规则或生效日期。',
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
  'opt-fee': {
    name: 'Federal rulemaking',
    meaning: federalMeaningEnglish,
    detail:
      'ICE’s fee proposal is in OIRA prepublication review. The NPRM text and any fee amount can become public only after that review.',
    waitingFor: 'Completion of OIRA review before a proposal can be published.',
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
      'DHS completed the NPRM, comment, and final-rule stages. The court held the injunction hearing on September 3, heard arguments, and took the matter under advisement. That means the judge did not rule from the bench and will continue considering the request, potentially through a later written order. September 15 remains the scheduled effective date unless the rule is stayed or enjoined.',
    waitingFor:
      'A court decision on the injunction request; September 15 remains the scheduled effective date unless stayed.',
    currentSummary: 'Hearing held; matter under advisement',
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
      'The NPRM preview became public September 10 and is scheduled for publication September 11. It is not a final rule.',
    waitingFor:
      'Federal Register publication of the NPRM scheduled September 11, and confirmation of the comment deadline 60 days after publication.',
    currentSummary: 'Preview public; awaiting formal publication',
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
