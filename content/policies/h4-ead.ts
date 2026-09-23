import type { PolicyContent } from '../policy-types.ts';

export const h4Ead: PolicyContent = {
  id: 'h4-ead',
  path: 'H-1B',
  tone: 'gray',
  effectState: 'not-in-effect',
  checkedOn: '2026-09-22',
  related: ['ead-discretion', 'grace-period'],
  process: {
    kind: 'federal-rulemaking',
    lastCompletedStage: 0,
    activeStage: null,
    nextStage: 1,
  },
  sources: [
    {
      href: 'https://www.reginfo.gov/public/do/eAgendaViewRule?RIN=1615-AD14&pubId=202510',
      zh: '统一议程 RIN 1615-AD14',
      en: 'Unified Agenda RIN 1615-AD14',
    },
    {
      href: 'https://www.uscardforum.com/t/topic/528394',
      zh: '美卡论坛讨论',
      en: 'USCardForum discussion',
    },
  ],
  zh: {
    title: '部分 H-4 配偶工作许可拟被取消',
    short: 'H-4 配偶 EAD',
    status: '长期议程 · 尚无提案日期',
    effectLabel: '尚未生效 · 现行规则未变',
    agency: 'DHS / USCIS',
    documentId: '1615-AD14',
    tldr: 'DHS 打算撤销 2015 年那条允许部分 H-4 配偶申请 EAD 的规则。撤销后，符合条件的 H-4 配偶将失去工作许可，但主申请人的 H-1B 身份不受直接影响。',
    tags: ['H-4 家庭', '家庭收入'],
    summary:
      'DHS 打算撤销 2015 年那条允许部分 H-4 配偶申请 EAD 的规则，取消这类配偶凭该规则拿工作许可的资格。主申请人的 H-1B 身份不受直接影响。',
    audience: '依赖现行规则取得工作许可的符合条件 H-4 配偶及其家庭。',
    caveat: '本议程不直接取消主申请人的 H-1B 身份，也没有让已有工作许可失效。',
    background:
      'RIN 1615-AD14 要撤销的是 2015 年那条规则。NPRM 日期标注为 To Be Determined（待定）。目前没有公开文本、评论窗口或生效日期。',
    teaser: '若未来撤销，家庭第二份收入和配偶职业连续性可能同时承压。',
    headline: '双收入家庭的规划，可能面对结构性变化。',
    analysis:
      '如果最终真的撤销，影响不只是少一份收入。配偶的职业会中断，福利安排和一家人住哪里都可能要重新考虑。但眼下它还在长期议程上，适合放进长期预案，不必按“马上就要失效”来安排生活。',
    impacts: [
      {
        title: '对家庭财务：第二份收入可能需要重估',
        text: '靠两份收入付房租、学费和日常开销的家庭，一旦少了配偶这份，能周转的余地会小很多。',
        examples: [
          '小林现在靠 H-4 配偶身份申请了 EAD，并在这张卡下面工作。但这项改革计划要取消的就是 H-4 配偶申请工作许可的资格。如果最终真的取消了，她就没法再靠这条规定拿工作许可了，哪怕雇主还想用她。不过现有的 EAD 怎么处理、什么时候受影响，还得看后续规则，现在不能要求她马上停工。',
        ],
      },
      {
        title: '对配偶职业：中断的影响可能持续更久',
        text: '就算家里短期扛得住，职业空档、错过晋升、福利变化，都会影响以后重新找工作。',
        examples: [
          '小林和她丈夫按两个人的收入来安排房租、托儿费和日常开销。如果她因为 H-4 EAD 被取消而没法继续工作，家里就少了一份工资，但每月固定支出不会自动减少。所以家庭预算受影响，是因为配偶失去了工作许可资格，而不是这项政策直接动了她丈夫的 H-1B。',
        ],
      },
      {
        title: '对留美决定：可能由个人工作变成家庭取舍',
        text: '这项议程不会直接取消主申请人的 H-1B。但全家算下来划不划算、职业机会还剩多少会变，住哪里也可能跟着变。',
      },
    ],
    outlook:
      '我们的判断：近期先看它会不会从长期议程变成正式提案。一旦推进，已有 EAD 怎么处理、续期和过渡期给多长，决定家庭是能慢慢调整，还是要一次性面对收入缺口。',
    scenarios: [
      {
        name: '停留在长期议程',
        headline: '现行安排继续，保留长期风险观察',
        assumption: '仍然没有 NPRM，现行规则没变。',
        effects:
          '家庭可以继续按现有授权安排工作。讨论风险适合放在长期预算里，不要假设许可马上要结束。',
        signals: '议程阶段是否变化、是否送审或公布提案。',
      },
      {
        name: '正式提案发布',
        headline: '家庭与雇主开始评估过渡安排',
        assumption: 'DHS 公布具体撤销方案和评论窗口。',
        effects:
          '配偶雇主会更关注未来续期，家庭也能照着条款算收入变化。提案发布本身不会终止工作许可。',
        signals: '适用群体、已有卡片和续期怎么处理，以及拟议的过渡期。',
      },
      {
        name: '最终撤销实施',
        headline: '收入与职业安排可能逐步或集中改变',
        assumption: '走完规则制定程序后，撤销规则正式生效。',
        effects:
          '影响来得快还是慢，取决于存量保护和卡片处理方式。家庭可能要重新权衡主申请人的工作收益和配偶的职业机会。',
        signals: '最终生效条款、存量卡片安排，以及可能影响执行的法院命令。',
      },
    ],
    scope: [
      {
        label: '相关对象',
        text: '依赖现行规则取得工作许可的符合条件 H-4 配偶。',
      },
      { label: '主申请人', text: '本议程不直接取消 H-1B 身份或抽签资格。' },
      { label: '当前阶段', text: '尚无正式提案、评论窗口或生效日期。' },
    ],
    milestones: [
      { date: '2026 统一议程', text: '项目进入政府长期规则议程。' },
      { date: '截至 2026-09-16', text: '没有 NPRM、评论期或生效日。' },
    ],
    next: [
      {
        date: 'TBD',
        text: '若推进，仍须经历 NPRM、评论、最终规则与可能诉讼。',
      },
    ],
    process: {
      detail: '目前只是统一议程中的长期项目，尚未进入 OIRA 审查或 NPRM 阶段。',
      currentSummary: '长期议程，暂无日期',
      waitingFor: '是否从长期议程进入正式规则制定；尚无提案日期。',
    },
  },
  en: {
    title: 'Proposed End to Work Authorization for Some H-4 Spouses',
    short: 'H-4 Spousal EAD',
    status: 'Long-term agenda · No proposal date',
    effectLabel: 'Not in effect · Current rules unchanged',
    agency: 'DHS / USCIS',
    documentId: '1615-AD14',
    tldr: 'DHS plans to rescind the 2015 rule that allows certain H-4 spouses to apply for employment authorization. The policy would end work authorization for eligible H-4 spouses but would not directly terminate the principal applicant’s H-1B status.',
    tags: ['H-4 families', 'Household income'],
    summary:
      'DHS plans to reverse the 2015 rule that allows certain H-4 spouses to apply for an EAD, removing their eligibility for work authorization under that rule. It would not directly change the principal worker’s H-1B status.',
    audience:
      'eligible H-4 spouses working under the current rule and their families.',
    caveat:
      'The agenda does not directly cancel the principal H-1B status or invalidate existing work authorization.',
    background:
      'RIN 1615-AD14 targets the related 2015 rule, with the NPRM date listed as To Be Determined. There is no public text, comment window or effective date.',
    teaser:
      'A future rescission could strain both a family’s second income and the spouse’s career continuity.',
    headline:
      'Dual-income families could face a structural change in their planning.',
    analysis:
      'If the relevant H-4 EAD rule is eventually rescinded, the pressure would extend beyond one lost income to a spouse’s career interruption, benefits, and the family’s choice of where to live. For now, this remains on the long-term agenda and belongs in long-range scenarios rather than day-to-day plans that assume authorization will soon end.',
    impacts: [
      {
        title: 'For family finances: the second income may need reassessment',
        text: 'Families that rely on two incomes for housing, education, and everyday expenses could lose substantial budget flexibility if spousal income disappears.',
        examples: [
          'Lin currently obtains an EAD through qualifying H-4 spouse eligibility. The plan targets removal of that eligibility category. If the final rule removes the basis Lin uses, employer support would not allow a new permit under that provision. Treatment and timing for existing EADs depend on the future rule; this does not call for stopping work now.',
        ],
      },
      {
        title:
          'For a spouse’s career: an interruption can have lasting effects',
        text: 'Even when a family can absorb the near-term income loss, a career gap and changes in advancement and benefits can affect a later return to work.',
        examples: [
          'Lin and her husband budget for rent, childcare, and groceries using two incomes. If removal of H-4 EAD eligibility prevents Lin from continuing work, her income may disappear while fixed expenses remain. The budget effect comes from the spouse’s work-permit eligibility, not direct cancellation of the husband’s H-1B.',
        ],
      },
      {
        title:
          'For decisions about staying: an individual job becomes a family tradeoff',
        text: 'The principal worker’s H-1B status would not be directly ended by this agenda item, but the family’s net benefit and career options could change, affecting where it chooses to live.',
      },
    ],
    outlook:
      'Our assessment: the next near-term signal is whether this moves from the long-term agenda to a formal proposal. If it does, treatment of existing EADs, renewals, and transition timing will determine whether families adjust gradually or face a concentrated income change.',
    scenarios: [
      {
        name: 'Remains on the long-term agenda',
        headline:
          'Current arrangements continue while the long-term risk remains under review',
        assumption:
          'No NPRM is published and the current rule does not change.',
        effects:
          'Families can continue working under valid current authorization. Future risk is better used in long-term budgeting than as a basis for assuming authorization will soon end.',
        signals:
          'Whether the agenda stage changes, the action is submitted for review, or a proposal is published.',
      },
      {
        name: 'Formal proposal published',
        headline:
          'Families and employers begin evaluating transition arrangements',
        assumption:
          'DHS publishes a specific rescission plan and comment window.',
        effects:
          'Employers of H-4 spouses may pay closer attention to future renewals, and families could assess income changes from actual terms. Publication of a proposal alone would not end work authorization.',
        signals:
          'Covered groups, treatment of existing cards and renewals, and the proposed transition period.',
      },
      {
        name: 'Final rescission takes effect',
        headline:
          'Income and career arrangements may change gradually or all at once',
        assumption: 'After rulemaking, a rescission rule becomes effective.',
        effects:
          'The speed of the effect would depend on protection for existing cases and treatment of issued cards. Families may need to rebalance the principal worker’s job benefits against the spouse’s career opportunities.',
        signals:
          'Final effective-date terms, treatment of issued cards, and any court orders affecting implementation.',
      },
    ],
    scope: [
      {
        label: 'Covered people',
        text: 'Eligible H-4 spouses who receive work authorization under the current rule.',
      },
      {
        label: 'Principal worker',
        text: 'This agenda item does not directly end H-1B status or cap-selection eligibility.',
      },
      {
        label: 'Current stage',
        text: 'There is no formal proposal, comment window, or effective date.',
      },
    ],
    milestones: [
      {
        date: '2026 Unified Agenda',
        text: 'The initiative appeared on the government’s long-term rulemaking agenda.',
      },
      {
        date: 'As of 2026-09-16',
        text: 'No NPRM, comment period, or effective date has been announced.',
      },
    ],
    next: [
      {
        date: 'TBD',
        text: 'If DHS proceeds, it must still publish an NPRM, accept comments, issue a final rule, and may face litigation.',
      },
    ],
    process: {
      detail:
        'The initiative is only a long-term item in the Unified Agenda. It has not entered OIRA review or the NPRM stage.',
      currentSummary: 'Long-term agenda item with no date',
      waitingFor:
        'Whether the long-term agenda item advances into rulemaking; no proposal date is set.',
    },
  },
};
