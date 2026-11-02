import type { PolicyContent } from '../policy-types.ts';

export const h4Ead: PolicyContent = {
  id: 'h4-ead',
  path: 'H-1B',
  tone: 'gray',
  effectState: 'not-in-effect',
  checkedOn: "2026-11-01",
  related: [
    "ead-auto-extension",
    "ead-discretion",
    "grace-period"
  ],
  process: {
    kind: 'federal-rulemaking',
    lastCompletedStage: 0,
    activeStage: null,
    nextStage: 1,
  },
  sources: [
    {
      "href": "https://www.reginfo.gov/public/do/eAgendaViewRule?RIN=1615-AD14&pubId=202510",
      "zh": "政府规则计划表 · RIN 1615-AD14",
      "en": "Unified Agenda (rulemaking plan) · RIN 1615-AD14"
    },
    {
      "href": "https://www.ecfr.gov/current/title-8/section-274a.12#p-274a.12(c)(26)",
      "zh": "eCFR · 现行 H-4 EAD 申请条件",
      "en": "eCFR · current H-4 EAD eligibility"
    },
    {
      "href": "https://www.uscis.gov/working-in-the-united-states/temporary-workers/h-1b-specialty-occupations/employment-authorization-for-certain-h-4-dependent-spouses",
      "zh": "USCIS · H-4 配偶工作许可申请条件",
      "en": "USCIS · H-4 spouse work-permit eligibility"
    },
    {
      "href": "https://www.uscardforum.com/t/topic/528394",
      "zh": "美卡论坛讨论",
      "en": "USCardForum discussion"
    },
    {
      "href": "https://www.reginfo.gov/public/Forward?SearchTarget=RegReview&textfield=1615-AD14",
      "zh": "OIRA · 1615-AD14 审查记录检索",
      "en": "OIRA · 1615-AD14 review search"
    }
  ],
  zh: {
    title: '部分 H-4 配偶工作许可拟被取消',
    short: 'H-4 配偶 EAD',
    status: '长期计划 · 还没有提案日期',
    effectLabel: '尚未生效 · 现行规则未变',
    agency: 'DHS / USCIS',
    documentId: '1615-AD14',
    tldr: 'DHS 打算撤销 2015 年那条让部分 H-4 配偶可以申请工作许可（EAD）的规则。撤销后，这些配偶就不能再凭它申请工作许可；持 H-1B 的一方不受影响。目前只在政府的长期计划里，还没有提案。',
    tags: ['H-4 家庭', '家庭收入'],
    summary:
      'DHS 打算撤销 2015 年那条让部分 H-4 配偶可以申请 EAD 的规则。撤销后，这类配偶不能再凭这条规则拿工作许可；持 H-1B 的一方身份不变。还没有正式提案。',
    audience: '现在凭这条规则工作的 H-4 配偶，以及他们的家庭。',
    caveat: '持 H-1B 的一方身份不受影响；已经拿到的工作许可继续有效。',
    background:
      "这项规则（RIN 1615-AD14）要撤销的是 2015 年那条规则，提案日期写的是“待定”。目前没有公开文本、评论期或生效日期。\n另一项规则（RIN 1615-AD05）已经从 2025·10·30 起取消部分 EAD 续期的自动延期，10·14 的最终规则原样定稿。这和 AD14 是两回事：H-4 配偶现在仍然可以申请 EAD，只是续期收据不再自动延长工作许可。",
    teaser: '如果真的撤销，家里少一份收入，配偶的职业也会中断。',
    headline: '双职工家庭的安排，可能要大改。',
    analysis:
      '如果最终撤销，影响不只是少一份收入：配偶的职业会中断，福利和全家住在哪里也可能要重新考虑。不过眼下它只在长期计划里，可以放进长远打算，不必当成马上就要发生。',
    impacts: [
      {
        title: '对家庭收入：可能少一份工资',
        text: '靠两份收入付房租、学费和日常开销的家庭，少了配偶这份，周转余地会小很多。',
        examples: [
          '小林和她丈夫按两个人的收入安排房租、托儿费和日常开销。如果 H-4 EAD 被取消、她没法继续工作，家里就少了一份工资，固定支出却不会变。受影响的是配偶的工作许可，丈夫的 H-1B 不变。',
        ],
      },
      {
        title: '对配偶的职业：中断的影响更长远',
        text: '就算家里短期扛得住，职业空档、错过晋升、失去福利，都会影响以后重新找工作。',
        examples: [
          '小林现在凭 H-4 配偶身份拿到 EAD，在这张卡下工作。改革计划取消的正是这项申请资格。如果最终取消，雇主再想用她，她也没法凭这条规定拿新的工作许可。现有 EAD 怎么处理、何时受影响，要看最终规则。',
        ],
      },
      {
        title: '对留美决定：从个人工作变成全家权衡',
        text: '持 H-1B 的一方身份不受影响，但全家留下来划不划算、配偶还有哪些机会会变，住哪里也可能跟着变。',
      },
    ],
    outlook:
      '我们的判断：近期先看它会不会从长期计划变成正式提案。如果推进，已有 EAD 怎么处理、续期和过渡期给多长，决定家庭能慢慢调整，还是要一下子面对收入缺口。',
    scenarios: [
      {
        name: '一直停在长期计划',
        headline: '照常工作，长期留意',
        assumption: '一直没有提案，现行规则不变。',
        effects:
          '家庭照现有工作许可正常工作，这个风险放进长期预算考虑就行。',
        signals: '计划表阶段有没有变化，是否送 OIRA 审查或公布提案。',
      },
      {
        name: '正式提案发布',
        headline: '家庭和雇主开始考虑怎么过渡',
        assumption: 'DHS 公布具体撤销方案并征求意见。',
        effects:
          '配偶的雇主会更关注以后的续期，家庭也能照着条款算收入变化。提案阶段工作许可照常有效。',
        signals: '适用哪些人、已有卡和续期怎么处理、过渡期多长。',
      },
      {
        name: '最终撤销生效',
        headline: '收入和职业安排逐步或一次性改变',
        assumption: '走完规则程序后，撤销正式生效。',
        effects:
          '影响来得快还是慢，看已有的卡能不能用到期。家庭可能要重新权衡 H-1B 这份工作的收益和配偶的职业机会。',
        signals: '最终生效日期、已有卡片怎么处理，以及可能影响执行的法院命令。',
      },
    ],
    scope: [
      {
        label: '涉及谁',
        text: '现在凭这条规则拿工作许可的 H-4 配偶。',
      },
      { label: '持 H-1B 的一方', text: 'H-1B 身份和抽签资格都不受影响。' },
      { label: '现在到哪一步', text: '还没有提案、评论期或生效日期。' },
    ],
    milestones: [
      {
        "date": "2026 统一议程",
        "text": "列入政府长期规则计划。"
      }
    ],
    next: [
      {
        date: '日期未定',
        text: '如果推进，还要经过提案、公众评论、最终规则，也可能被起诉。',
      },
    ],
    process: {
      detail: '目前只在政府规则计划表的长期项目里，还没送 OIRA 审查，也没有提案。',
      currentSummary: '长期计划，暂无日期',
      waitingFor: '是否从长期计划进入正式规则程序；还没有提案日期。',
    },
  },
  en: {
    title: 'Proposed End to Work Authorization for Some H-4 Spouses',
    short: 'H-4 Spousal EAD',
    status: 'Long-term plan · No proposal date',
    effectLabel: 'Not in effect · Current rules unchanged',
    agency: 'DHS / USCIS',
    documentId: '1615-AD14',
    tldr: 'DHS plans to undo the 2015 rule that lets some H-4 spouses apply for a work permit (EAD). Those spouses would no longer be able to get one under it; the H-1B holder is not affected. For now it is only on the government’s long-term plan, with no proposal.',
    tags: ['H-4 families', 'Household income'],
    summary:
      'DHS plans to undo the 2015 rule that lets some H-4 spouses apply for an EAD. Those spouses would lose that route to a work permit; the H-1B holder’s status is unchanged. There is no formal proposal yet.',
    audience:
      'H-4 spouses working under this rule today, and their families.',
    caveat:
      'The H-1B holder’s status is not affected, and work permits already issued stay valid.',
    background:
      "This rule (RIN 1615-AD14) would undo the 2015 rule; its proposal date is listed as “to be determined.” There is no public text, comment period or start date.\nA different rule (RIN 1615-AD05) has already ended automatic extensions for certain EAD renewals filed since October 30, 2025, and was finalized unchanged on October 14. That is separate from AD14: H-4 spouses can still apply for an EAD, but a renewal receipt no longer extends the work permit automatically.",
    teaser:
      'If it happens, the family loses an income and the spouse’s career is interrupted.',
    headline:
      'Two-income families may have to rethink their plans.',
    analysis:
      'If it is eventually undone, the hit goes beyond one lost income: the spouse’s career stops, and benefits and where the family lives may need rethinking. For now it is only on the long-term plan, so treat it as a long-range possibility rather than something happening soon.',
    impacts: [
      {
        title: 'For family finances: one income could go',
        text: 'Families that pay rent, tuition and daily costs on two incomes would have far less room if the spouse’s income stopped.',
        examples: [
          'Lin and her husband budget for rent, childcare and groceries on two incomes. If H-4 EAD eligibility is removed and Lin cannot keep working, her income disappears while fixed expenses stay. The change hits the spouse’s work permit; the husband’s H-1B is unchanged.',
        ],
      },
      {
        title:
          'For the spouse’s career: the gap lasts',
        text: 'Even if the family can manage in the short term, a career gap, missed promotions and lost benefits make it harder to go back to work later.',
        examples: [
          'Lin works on an EAD obtained through H-4 spouse eligibility. The plan targets that eligibility category. If it is removed, Lin could not get a new permit under that provision even if her employer wants to keep her. What happens to existing EADs, and when, depends on the final rule.',
        ],
      },
      {
        title:
          'For staying in the U.S.: a family decision, not just one job',
        text: 'The H-1B holder’s status is unaffected, but whether staying still makes sense for the whole family, and what options the spouse has, could change, and so could where you live.',
      },
    ],
    outlook:
      'Our view: the first thing to watch is whether this moves from the long-term plan to a formal proposal. If it does, how existing EADs, renewals and the transition period are handled will decide whether families can adjust gradually or lose the income all at once.',
    scenarios: [
      {
        name: 'Stays on the long-term plan',
        headline:
          'Keep working; keep an eye on it',
        assumption:
          'No proposal comes out and the current rule stays.',
        effects:
          'Families keep working on current permits and simply factor this risk into long-term budgeting.',
        signals:
          'Whether the plan’s stage changes, or it goes to OIRA or is published as a proposal.',
      },
      {
        name: 'Formal proposal published',
        headline:
          'Families and employers start planning for a transition',
        assumption:
          'DHS publishes a specific plan and opens comments.',
        effects:
          'The spouse’s employer will watch future renewals more closely, and families can work out the income impact from the actual terms. Work permits stay valid while it is only a proposal.',
        signals:
          'Who is covered, how existing cards and renewals are handled and how long the transition lasts.',
      },
      {
        name: 'Final rescission takes effect',
        headline:
          'Income and careers change gradually or all at once',
        assumption: 'After the full rulemaking process, the repeal takes effect.',
        effects:
          'How fast it hits depends on whether existing cards can be used until they expire. Families may have to weigh the H-1B job against the spouse’s career.',
        signals:
          'The final start date, how existing cards are handled and any court orders affecting it.',
      },
    ],
    scope: [
      {
        label: 'Who it affects',
        text: 'H-4 spouses who get work permits under this rule today.',
      },
      {
        label: 'The H-1B holder',
        text: 'H-1B status and lottery eligibility are not affected.',
      },
      {
        label: 'Where it stands',
        text: 'No proposal, comment period or start date yet.',
      },
    ],
    milestones: [
      {
        "date": "2026 Unified Agenda",
        "text": "Added to the government’s long-term rulemaking plan."
      }
    ],
    next: [
      {
        date: 'Date unknown',
        text: 'If DHS moves ahead, it still needs a proposal, public comment and a final rule, and could face lawsuits.',
      },
    ],
    process: {
      detail:
        'It is only a long-term item in the government’s rulemaking plan; it has not gone to OIRA and there is no proposal.',
      currentSummary: 'Long-term plan; no date',
      waitingFor:
        'Whether it moves from the long-term plan into formal rulemaking; no proposal date yet.',
    },
  },
};
