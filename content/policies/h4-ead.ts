import type { PolicyContent } from '../policy-types.ts';

export const h4Ead: PolicyContent = {
  id: 'h4-ead',
  path: 'H-1B',
  tone: 'gray',
  effectState: 'not-in-effect',
  checkedOn: "2026-11-13",
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
    searchTitle: "H-4 EAD 拟取消：H-1B 配偶工卡最新进展",
    searchDescription: "DHS 打算取消 H-1B 配偶（H-4）凭 I-140 获批等条件申请工卡的资格。持 H-1B 的一方不受影响。查看进展和对家庭的影响。",
    status: '长期计划 · 还没有提案日期',
    effectLabel: '尚未生效 · 现行规则未变',
    agency: 'DHS / USCIS',
    documentId: '1615-AD14',
    tldr: "H-1B 的配偶持 H-4 身份，本身不能工作。2015 年起，如果 H-1B 一方已经走上绿卡路（比如 I-140 已获批），配偶可以申请 EAD（工卡）上班。DHS 打算取消这项资格。持 H-1B 的一方不受影响。目前只写在政府的长期计划里，还没有提案，现在的规则照常。",
    tags: ['H-4 家庭', '家庭收入'],
    summary:
      "DHS 打算撤销 2015 年的一条规则。按这条规则，部分 H-4 配偶可以申请 EAD 工作：主要是 H-1B 一方的 I-140（雇主为其递交的绿卡移民申请）已经获批，或者 H-1B 一方已经按 AC21 法律把身份延长到六年以上。撤销以后，这些配偶就不能再凭这条规则拿工卡；持 H-1B 的一方身份不变。现在它只出现在政府的长期计划里，还没有正式提案，也没有时间表。",
    audience: "现在凭这条规则拿 EAD 工作的 H-4 配偶和他们的家庭，以及 H-1B 一方已经在办绿卡、配偶打算以后申请 H-4 EAD 的家庭。",
    caveat: "持 H-1B 的一方身份不受影响；已经拿到的工卡继续有效；现在符合条件的配偶也照常可以申请。",
    background:
      "这项计划的编号是 RIN 1615-AD14（RIN 是政府给每项规则分配的追踪编号），要撤销的是 2015 年开放 H-4 配偶工卡的规则。政府的规则计划表把它放在长期项目里，提案日期写的是“待定”。正常流程是：先公布拟议规则，征求公众意见，再发最终规则，最终规则里才会写生效日期。这几步现在一步都还没开始。\n另一项规则（RIN 1615-AD05）已经从 2025·10·30 起取消部分 EAD 续期的自动延期，10·14 的最终规则照原样定稿。那项规则管的是续卡期间能不能接着上班，AD14 管的是能不能申请工卡，两件事分开进行：H-4 配偶现在仍然可以申请 EAD，只是续期收据不再自动延长旧卡。",
    teaser: "如果真的取消，家里会少一份收入，配偶的职业也会中断。",
    headline: "双职工家庭的安排，可能要大改。",
    analysis:
      "如果最终取消，影响不只是少一份收入。配偶的职业会中断，医保等福利可能跟着工作一起没了，全家要不要继续留在美国也可能要重新考虑。不过它现在只在长期计划里，从提案到生效通常还要走很长的流程。可以把它放进长远打算，眼下的工作照常。",
    impacts: [
      {
        "title": "对家庭收入：可能少一份工资",
        "text": "靠两份收入付房租、学费和日常开销的家庭，少了配偶这份，周转余地会小很多。",
        "examples": [
          "小林和她丈夫按两个人的收入安排房租、托儿费和日常开销。如果 H-4 EAD 被取消、她没法继续工作，家里就少了一份工资，固定支出却不会变。受影响的是配偶的工卡，丈夫的 H-1B 不变。"
        ]
      },
      {
        "title": "对配偶的职业：中断的影响更长远",
        "text": "就算家里短期扛得住，职业空档、错过晋升、失去福利，都会让以后重新找工作更难。",
        "examples": [
          "小林凭 H-4 配偶身份拿到 EAD，在这张卡下工作。计划要取消的正是这项申请资格。如果最终取消，雇主再想留她，她也没法凭这条规定拿新的工卡。手里的 EAD 怎么处理、从哪天起受影响，要等最终规则写明。"
        ]
      },
      {
        "title": "对留美决定：从个人工作变成全家权衡",
        "text": "持 H-1B 的一方身份不受影响。但全家留下来值不值得、配偶还有哪些机会，可能都会变，住在哪里也可能跟着变。"
      }
    ],
    outlook:
      "我们的判断：近期先看它会不会从长期计划变成正式提案。如果推进，最关键的是三点：手里的 EAD 能不能用到期、续期怎么处理、过渡期给多长。这决定了家庭可以慢慢调整，还是要一下子面对收入缺口。",
    scenarios: [
      {
        "name": "一直停在长期计划",
        "headline": "照常工作，长期留意",
        "assumption": "一直没有提案，现行规则不变。",
        "effects": "配偶照常凭现有工卡工作，这个风险放进长期预算里考虑就行。",
        "signals": "规则计划表里的阶段有没有变化，有没有送 OIRA 审查或公布提案。"
      },
      {
        "name": "正式提案发布",
        "headline": "家庭和雇主开始考虑怎么过渡",
        "assumption": "DHS 公布具体的取消方案，并征求公众意见。",
        "effects": "配偶的雇主会更关注以后的续期，家庭也能照着条款算收入变化。提案阶段，工卡照常有效。",
        "signals": "适用哪些人、已有工卡和续期怎么处理、过渡期多长。"
      },
      {
        "name": "最终取消生效",
        "headline": "收入和职业安排逐步或一次性改变",
        "assumption": "走完提案、征求意见和最终规则的流程后，取消正式生效。",
        "effects": "影响来得快还是慢，看已有的卡能不能用到期。家庭可能要重新权衡 H-1B 这份工作的收益和配偶的职业机会。",
        "signals": "最终生效日期、已有工卡怎么处理，以及可能影响执行的法院命令。"
      }
    ],
    scope: [
      {
        "label": "涉及谁",
        "text": "现在凭这条规则拿工卡的 H-4 配偶，以及以后打算申请的人。"
      },
      {
        "label": "持 H-1B 的一方",
        "text": "H-1B 身份和抽签资格都不受影响。"
      },
      {
        "label": "现在到哪一步",
        "text": "只在长期计划里。提案、意见征集和生效日期都还没有。"
      }
    ],
    milestones: [
      {
        "date": "2026 统一议程",
        "text": "列入政府规则计划表的长期项目。"
      }
    ],
    next: [
      {
        "date": "日期未定",
        "text": "如果推进，DHS 要先公布提案、征求公众意见，再发最终规则；之后也可能有人起诉。"
      }
    ],
    process: {
      detail: "目前只在政府规则计划表的长期项目里，还没有送 OIRA 审查，也没有提案。",
      currentSummary: '长期计划，暂无日期',
      waitingFor: "它会不会从长期计划进入正式的规则制定流程。",
    },
  },
  en: {
    title: 'Proposed End to Work Authorization for Some H-4 Spouses',
    short: 'H-4 Spousal EAD',
    searchTitle: "H-4 EAD Removal: Latest on Work Permits for H-1B Spouses",
    searchDescription: "DHS plans to end work authorization for H-4 spouses of H-1B workers on the green-card path, such as those with an approved I-140. The H-1B worker is not affected.",
    status: 'Long-term plan · No proposal date',
    effectLabel: 'Not in effect · Current rules unchanged',
    agency: 'DHS / USCIS',
    documentId: '1615-AD14',
    tldr: "Spouses of H-1B workers hold H-4 status, which does not allow work on its own. Since 2015, if the H-1B holder is on the green-card path (for example, an approved I-140), the spouse can apply for an EAD (work permit). DHS plans to end that eligibility. The H-1B holder is not affected. For now it is only on the government’s long-term plan, with no proposal, and the current rule still applies.",
    tags: ['H-4 families', 'Household income'],
    summary:
      "DHS plans to undo a 2015 rule that lets some H-4 spouses apply for an EAD. Under that rule, the spouse qualifies mainly when the H-1B holder has an approved I-140 (the employer’s green-card petition) or has extended H-1B status beyond six years under the AC21 law. If the rule is undone, those spouses could no longer get a work permit this way; the H-1B holder’s status is unchanged. For now it appears only on the government’s long-term plan, with no formal proposal and no timeline.",
    audience:
      "H-4 spouses who work on an EAD under this rule today and their families, plus families where the H-1B holder is in the green-card process and the spouse plans to apply later.",
    caveat:
      "The H-1B holder’s status is unchanged, work permits already issued stay valid, and spouses who qualify today can still apply.",
    background:
      "The plan is tracked as RIN 1615-AD14 (a RIN is the tracking number the government gives each rule). It would undo the 2015 rule that opened work permits to H-4 spouses. The government’s rulemaking plan lists it as a long-term item with the proposal date “to be determined.” The normal path is: publish a proposed rule, take public comments, then issue a final rule, which is where a start date would appear. None of those steps has started.\nA different rule, RIN 1615-AD05, has already ended automatic extensions for certain EAD renewals filed since October 30, 2025, and was finalized unchanged on October 14. That rule is about whether you can keep working while a renewal is pending, and is separate from AD14, which is about eligibility. H-4 spouses can still apply for an EAD today; a renewal receipt just no longer extends the old card.",
    teaser:
      "If it happens, the family loses an income and the spouse’s career is interrupted.",
    headline:
      "Two-income families may have to rethink their plans.",
    analysis:
      "If the rule is eventually undone, the hit goes beyond one lost paycheck. The spouse’s career stops, benefits such as health insurance may go with the job, and the family may rethink whether to stay in the U.S. at all. But it is only on the long-term plan for now, and a rule usually takes a long time to get from proposal to effect. Factor it into long-range planning; day-to-day work continues as usual.",
    impacts: [
      {
        "title": "For family finances: one income could go",
        "text": "Families that pay rent, tuition and daily costs on two incomes would have far less room if the spouse’s income stopped.",
        "examples": [
          "Lin and her husband budget for rent, childcare and groceries on two incomes. If H-4 EAD eligibility is removed and Lin cannot keep working, her income disappears while fixed expenses stay. The change hits the spouse’s work permit; the husband’s H-1B is unchanged."
        ]
      },
      {
        "title": "For the spouse’s career: the gap lasts",
        "text": "Even if the family can manage in the short term, a career gap, missed promotions and lost benefits make it harder to go back to work later.",
        "examples": [
          "Lin works on an EAD she got through H-4 spouse eligibility, which is exactly what the plan would remove. If it is removed, Lin could not get a new permit this way even if her employer wants to keep her. What happens to existing EADs, and from when, will be set out in the final rule."
        ]
      },
      {
        "title": "For staying in the U.S.: a family decision, not just one job",
        "text": "The H-1B holder’s status is unaffected. But whether staying still makes sense for the whole family, and what options the spouse has, could change, and so could where you live."
      }
    ],
    outlook:
      "Our view: the first thing to watch is whether this moves from the long-term plan to a formal proposal. If it does, three details matter most: whether existing EADs last until they expire, how renewals are handled, and how long the transition is. Those decide whether families can adjust gradually or lose the income all at once.",
    scenarios: [
      {
        "name": "Stays on the long-term plan",
        "headline": "Keep working; keep an eye on it",
        "assumption": "No proposal comes out and the current rule stays.",
        "effects": "Spouses keep working on their current permits; families just factor this risk into long-term budgeting.",
        "signals": "Whether its stage in the rulemaking plan changes, or it goes to OIRA or is published as a proposal."
      },
      {
        "name": "Formal proposal published",
        "headline": "Families and employers start planning for a transition",
        "assumption": "DHS publishes a specific plan and opens public comments.",
        "effects": "The spouse’s employer will watch future renewals more closely, and families can work out the income impact from the actual terms. Work permits stay valid while it is only a proposal.",
        "signals": "Who is covered, how existing cards and renewals are handled and how long the transition lasts."
      },
      {
        "name": "Final rescission takes effect",
        "headline": "Income and careers change gradually or all at once",
        "assumption": "After the proposal, comments and a final rule, the repeal takes effect.",
        "effects": "How fast it hits depends on whether existing cards can be used until they expire. Families may have to weigh the H-1B job against the spouse’s career.",
        "signals": "The final start date, how existing cards are handled and any court orders affecting it."
      }
    ],
    scope: [
      {
        "label": "Who it affects",
        "text": "H-4 spouses who get work permits under this rule today, and those who plan to apply."
      },
      {
        "label": "The H-1B holder",
        "text": "H-1B status and lottery eligibility are not affected."
      },
      {
        "label": "Where it stands",
        "text": "Only on the long-term plan. There is no proposal, comment period or start date yet."
      }
    ],
    milestones: [
      {
        "date": "2026 Unified Agenda",
        "text": "Listed as a long-term item in the government’s rulemaking plan."
      }
    ],
    next: [
      {
        "date": "Date unknown",
        "text": "If DHS moves ahead, it must publish a proposal, take public comments and then issue a final rule; lawsuits could follow."
      }
    ],
    process: {
      detail:
        "It is only a long-term item in the government’s rulemaking plan; it has not gone to OIRA and there is no proposal.",
      currentSummary: 'Long-term plan; no date',
      waitingFor:
        "Whether it moves from the long-term plan into formal rulemaking.",
    },
  },
};
