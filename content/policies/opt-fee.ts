import type { PolicyContent } from '../policy-types.ts';

export const optFee: PolicyContent = {
  id: 'opt-fee',
  path: 'OPT',
  tone: 'blue',
  effectState: 'not-in-effect',
  checkedOn: "2026-11-01",
  related: ['h1b-fee', 'duration-status'],
  process: {
    kind: 'federal-rulemaking',
    lastCompletedStage: 2,
    activeStage: 3,
    nextStage: 4,
  },
  sources: [
    {
      "href": "https://www.federalregister.gov/documents/2026/10/08/2026-20660/optional-practical-training-fees",
      "zh": "Federal Register 10·08 OPT 收费 NPRM",
      "en": "Federal Register October 8 OPT fee NPRM"
    },
    {
      "href": "https://www.govinfo.gov/content/pkg/FR-2026-10-08/pdf/2026-20660.pdf",
      "zh": "OPT 收费 NPRM 官方 PDF",
      "en": "Official OPT fee NPRM PDF"
    },
    {
      "href": "https://www.regulations.gov/commenton/ICEB-2026-0100-0001",
      "zh": "ICEB-2026-0100 评论入口",
      "en": "ICEB-2026-0100 comment portal"
    },
    {
      "href": "https://www.reginfo.gov/public/do/eoDetails?rrid=1506461",
      "zh": "OIRA 9·11 结案记录",
      "en": "OIRA September 11 conclusion"
    },
    {
      "href": "https://iss.washington.edu/dhs-proposes-new-opt-fees/",
      "zh": "华盛顿大学 10·09 提案说明",
      "en": "University of Washington October 9 proposal update"
    },
    {
      "href": "https://ois.uic.edu/news-stories/dhs-advances-proposed-rulemaking-on-opt-fees/",
      "zh": "UIC 8·26 历史状态说明",
      "en": "UIC August 26 historical status update"
    },
    {
      "href": "https://www.uscardforum.com/t/topic/531864",
      "zh": "美卡论坛讨论",
      "en": "USCardForum discussion"
    }
  ],
  zh: {
    title: "OPT 拟收费：首次 7 万美元、后续 3 万美元",
    short: "OPT 首次 7 万美元收费",
    status: "正式提案 · 评论期至 11 月 9 日",
    effectLabel: "尚未生效 · 拟由学校先交费",
    agency: 'DHS / ICE',
    documentId: '1653-AB01',
    tldr: "ICE 提议：DSO 推荐 OPT 之前，学校要先为每名学生交费，第一次 7 万美元，之后每次 OPT（含 STEM 延期）3 万美元。学校可以把这笔钱转给学生或雇主。目前只是提案，还没生效。",
    tags: ['OPT', 'H-1B 转换'],
    summary:
      "ICE 10 月 8 日正式提出：DSO 在 SEVIS 里推荐 OPT 之前，学校要为每名学生向政府缴费，第一次 70,000 美元，之后每次 30,000 美元。毕业前 OPT、毕业后 OPT 和 STEM 延期都算在内。钱由学校交给政府，但学校可以让学生或雇主来出。公众评论 11 月 9 日截止。",
    audience: "准备申请 OPT（毕业前、毕业后或 STEM 延期）的 F-1 学生，以及他们的学校和雇主。",
    caveat:
      "交费的是学校，但学校不必自己承担；这笔钱最后由学校、学生还是雇主出，各校会不一样。",
    background:
      "ICE 2026-08-20 把这项收费规则送交 OIRA 审查，9·11 审完（有修改）。10·08 正式提案（2026-20660，91 FR 64566，案卷 ICEB-2026-0100）公布了金额：第一次 7 万美元，之后每次 3 万美元。此前媒体传的“10 万美元一笔”不是最终提出的方案。\nDSO 在 SEVIS 里推荐 OPT 之前，学校要先交费；不交费，DSO 不能推荐，USCIS 也不会批 OPT 工作许可。学校可以让学生或雇主出这笔钱。所有类型的 OPT 都收费，CPT 不收；只是换雇主不用再交。\n新收费从最终规则公布后第 60 天开始。这天之后的第一次 OPT 推荐收 7 万美元，就算学生以前用过 OPT 也一样；交过这 7 万之后，以后每次推荐收 3 万。已经拿到的 EAD 不受影响。\nOPT 或延期批下来之前，学校可以撤回推荐、申请退款，由 SEVP 逐个决定；批下来之后不退，退款被拒也不能申诉。规则评论 11·09 截止，表格与数据收集部分（PRA）的评论 12·07 截止。",
    teaser: "学校先交钱，DSO 才能推荐 OPT；这笔钱最后谁出，要看学校。",
    headline: "毕业后第一份工作，可能先卡在学校交不交这笔钱。",
    analysis:
      "提案让学校向政府交费，但学校可以把钱转给学生或雇主。影响在 DSO 推荐之前就开始：学校愿不愿意出钱、学生出不出得起、雇主肯不肯分担，决定推荐能不能办下来。第一次 7 万加一次后续 3 万，合计 10 万美元。",
    impacts: [
      {
        "title": "对学生：先看学校出不出这笔钱",
        "text": "学校要先交 7 万美元。学校如果让学生出，学生在 DSO 推荐前就得准备好这笔钱；学校如果资助，学生就不用出或少出。",
        "examples": [
          "小林已拿到毕业后的全职 offer。如果最终规则采用这套收费，学校得先为他的 OPT 推荐缴 7 万美元。学校可能自己出，也可能让小林或雇主出钱；钱没落实，推荐就办不下来。",
          "小周正在挑美国硕士项目。如果规则落地，学校是否资助 OPT、怎么在学生和雇主之间分摊费用，会直接影响毕业后找工作的成本。"
        ]
      },
      {
        "title": "对学校和雇主：推荐之前先把钱落实",
        "text": "学校向政府交费，交了费 DSO 才能推荐、USCIS 才能批。学校可能请雇主出钱，但提案没有要求雇主必须出。",
        "examples": [
          "一家小公司已为新毕业生小陈批好工资预算。如果学校要求雇主承担首次 7 万美元 OPT 费用，公司得重新算预算，可能推迟 offer 或和学校谈分摊。"
        ]
      },
      {
        "title": "对后续 OPT：STEM 延期不一定只收 3 万",
        "text": "后续每次 OPT 推荐（包括 STEM 延期）收 3 万美元，前提是这名学生已经交过第一次的 7 万。没交过的，新规生效后的第一次推荐先收 7 万。"
      }
    ],
    outlook:
      "接下来看评论期后金额、学校交费方式和过渡安排会不会改，以及各校怎么决定这笔钱谁出。",
    scenarios: [
      {
        "name": "按现有提案落地",
        "headline": "学校出不出钱，决定学生能不能用上 OPT",
        "assumption": "最终规则保留第一次 7 万、之后 3 万、学校先交费的做法。",
        "effects": "学校要决定出不出钱、钱从哪来，最后可能是学校、学生或雇主出。经费充裕的学校和家境好的学生会更容易。",
        "signals": "最终条文是否保留金额和“推荐前交费”，以及各校随后公布的资助办法。"
      },
      {
        "name": "金额或过渡安排调整",
        "headline": "谁要交、从什么时候交，可能改变",
        "assumption": "评论之后，最终条文降低金额、缩小范围，或改变已在用 OPT 的人怎么算。",
        "effects": "学校和学生要交多少，看最终条文；已经在用 OPT 或打算延期的人要不要交第一次的 7 万，也看最终条文。",
        "signals": "最终规则里的金额档次、覆盖范围，以及已在用 OPT 的人怎么算。"
      },
      {
        "name": "延后／未实施",
        "headline": "照现在的流程办，不收新费",
        "assumption": "规则拖延、撤回，或者始终没有生效。",
        "effects": "不用交新费，现有 OPT 和 EAD 照常有效。学校和雇主可能仍会提前做预算。",
        "signals": "正式撤回、修改或实施的公告，以及最终规则和生效日期。"
      }
    ],
    scope: [
      {
        "label": "谁交、谁出钱",
        "text": "学校向政府缴费；学校可以把成本转给学生或雇主。"
      },
      {
        "label": "哪些 OPT",
        "text": "毕业前、毕业后和 STEM OPT 都收；CPT 不收；只换雇主不收。"
      },
      {
        "label": "从何时开始",
        "text": "最终规则公布 60 天后的新推荐开始收费；没交过第一次费的，先收 7 万。"
      }
    ],
    milestones: [
      {
        "date": "2026-08-20",
        "text": "收费规则（RIN 1653-AB01）送交 OIRA 审查。"
      },
      {
        "date": "2026-08-26",
        "text": "高校提醒：10 万美元来自媒体报道，政府尚未公布文本。"
      },
      {
        "date": "2026-09-11",
        "text": "OIRA 带修改完成审查。"
      },
      {
        "date": "2026-10-08",
        "text": "正式提案公布：学校先交第一次 7 万、之后每次 3 万；规则评论 11·09 截止，PRA 评论 12·07 截止。"
      }
    ],
    next: [
      {
        "date": "2026-11-09",
        "text": "规则公众评论截止，网上评论须在美东时间当天 23:59 前提交。"
      },
      {
        "date": "2026-12-07",
        "text": "表格与数据收集部分（PRA）的评论截止。"
      },
      {
        "date": "日期未定",
        "text": "最终规则和生效日期；收费从最终规则公布后第 60 天开始。",
        "estimate": true
      }
    ],
    process: {
      "detail": "ICE 在 10 月 8 日公布 NPRM，拟由学校在 OPT 推荐前缴首次 7 万美元、后续 3 万美元。一般评论期至 11 月 9 日。",
      "currentSummary": "正式提案已公布，正在收集评论",
      "waitingFor": "11·09 规则评论截止、12·07 PRA 评论截止，之后 DHS 决定最终条文。"
    },
  },
  en: {
    title: "Proposed OPT Fees: $70,000 Initially, $30,000 Subsequently",
    short: "Proposed $70,000 Initial OPT Fee",
    status: "Proposed rule · Comments through November 9",
    effectLabel: "Not in effect · Schools would pay first",
    agency: 'DHS / ICE',
    documentId: '1653-AB01',
    tldr: "ICE proposes that before a DSO recommends OPT, the school must pay a fee for each student: $70,000 the first time and $30,000 for each later OPT, including STEM extensions. Schools can pass the cost to students or employers. It is only a proposal for now.",
    tags: ['OPT', 'H-1B transition'],
    summary:
      "On October 8 ICE formally proposed that before a DSO recommends OPT in SEVIS, the school must pay the government a fee for each student: $70,000 the first time and $30,000 each time after. Pre-completion OPT, post-completion OPT and STEM extensions all count. The school pays the government, but it can have the student or employer cover the cost. Public comments close November 9.",
    audience:
      "F-1 students planning to apply for OPT (pre-completion, post-completion or a STEM extension), plus their schools and employers.",
    caveat:
      "The school pays, but it does not have to absorb the cost; whether the school, the student or the employer ends up paying will vary by school.",
    background:
      "ICE sent the fee rule to OIRA for review on August 20, 2026; review finished, with changes, on September 11. The October 8 proposal (2026-20660, 91 FR 64566, docket ICEB-2026-0100) set the amounts: $70,000 the first time and $30,000 each time after. The single $100,000 fee reported earlier by the media is not what was proposed.\nThe school pays before the DSO recommends OPT in SEVIS. Without payment, the DSO cannot recommend OPT and USCIS will not approve the work permit. The school can have the student or employer cover the cost. Every type of OPT is covered; CPT is not. Changing employers does not trigger another fee.\nThe fees start 60 days after the final rule is published. The first OPT recommendation after that date costs $70,000, even for a student who used OPT before; after that, each recommendation costs $30,000. EADs already issued are not affected.\nBefore the OPT or extension is approved, the school can withdraw the recommendation and ask for a refund, which SEVP decides case by case. There is no refund after approval and no appeal of a refund denial. Comments on the rule close November 9; comments on its paperwork (PRA) part close December 7.",
    teaser:
      "The school has to pay before the DSO can recommend OPT; who ends up paying depends on the school.",
    headline:
      "Your first job after graduation may hinge on whether your school pays this fee.",
    analysis:
      "The school pays the government but can pass the cost to students or employers. The effect starts before the DSO recommendation: whether the school pays, whether the student can afford it and whether the employer will share the cost decides whether the recommendation goes through. $70,000 the first time plus one $30,000 renewal adds up to $100,000.",
    impacts: [
      {
        "title": "For students: it depends on whether your school pays",
        "text": "The school pays $70,000 first. If the school passes it on, the student needs the money before the DSO recommends OPT; if the school covers it, the student pays less or nothing.",
        "examples": [
          "Lin has a full-time offer after graduation. If the final rule adopts this mechanism, the school must first pay $70,000 for the OPT recommendation. It may pay itself or ask Lin or the employer for the money; until the money is arranged, the recommendation cannot go through.",
          "Zhou is comparing US master’s programs. If the rule takes effect, whether a school funds OPT and how it splits the cost between students and employers will directly affect the cost of working after graduation."
        ]
      },
      {
        "title": "For schools and employers: the money comes before the recommendation",
        "text": "The school pays the government; only then can the DSO recommend and USCIS approve. Schools may ask employers to pay, but the proposal does not require it.",
        "examples": [
          "A small company has budgeted Chen’s salary. If the school asks the employer to cover the $70,000 initial OPT fee, the company has to rework its budget and may delay the offer or negotiate a split with the school."
        ]
      },
      {
        "title": "For later OPT: a STEM extension is not always $30,000",
        "text": "Each later OPT recommendation, including a STEM extension, costs $30,000 only if the student has already paid the $70,000 first fee. Otherwise the first recommendation after the rule starts costs $70,000."
      }
    ],
    outlook:
      "Next, watch whether comments change the amounts, how schools pay or the transition rules, and how each school decides who pays.",
    scenarios: [
      {
        "name": "Current proposal implemented",
        "headline": "Whether schools pay decides who can use OPT",
        "assumption": "The final rule keeps $70,000 first and $30,000 after, with schools paying up front.",
        "effects": "Schools decide whether to pay and where the money comes from; in the end the school, the student or the employer pays. Well-funded schools and better-off students will have an easier time.",
        "signals": "Whether the final text keeps the amounts and the pay-before-recommendation step, and the funding policies schools announce afterward."
      },
      {
        "name": "Fees or transition terms revised",
        "headline": "Who pays, and from when, could change",
        "assumption": "After comments, the final text lowers the amounts, narrows who is covered or changes how people already on OPT are treated.",
        "effects": "How much schools and students pay depends on the final text, including whether people already on OPT or planning an extension owe the $70,000 first fee.",
        "signals": "The final fee levels, coverage, and how people already on OPT are treated."
      },
      {
        "name": "Delayed or not implemented",
        "headline": "Current rules continue; no new fees",
        "assumption": "The rule is delayed, withdrawn or never takes effect.",
        "effects": "No new fees; existing OPT and EADs stay valid. Schools and employers may still budget ahead.",
        "signals": "Formal withdrawal, revisions or implementation notices, and a final rule with an effective date."
      }
    ],
    scope: [
      {
        "label": "Who pays",
        "text": "The school pays the government and can pass the cost to students or employers."
      },
      {
        "label": "Which OPT",
        "text": "Pre-completion, post-completion and STEM OPT are covered; CPT is not; changing employers alone costs nothing."
      },
      {
        "label": "When it starts",
        "text": "Recommendations made from 60 days after the final rule is published; anyone who has not paid the first fee pays $70,000 first."
      }
    ],
    milestones: [
      {
        "date": "2026-08-20",
        "text": "RIN 1653-AB01 was submitted to OMB/OIRA for review."
      },
      {
        "date": "2026-08-26",
        "text": "Universities noted that the $100,000 figure came from media reports; no government text had been published."
      },
      {
        "date": "2026-09-11",
        "text": "OIRA completed review with changes."
      },
      {
        "date": "2026-10-08",
        "text": "The proposal is published: schools pay $70,000 first and $30,000 each time after; rule comments close November 9, PRA comments December 7."
      }
    ],
    next: [
      {
        "date": "2026-11-09",
        "text": "General rule comments close; online comments must arrive by 11:59 p.m. Eastern Time."
      },
      {
        "date": "2026-12-07",
        "text": "Comments on the rule’s paperwork (PRA) part close."
      },
      {
        "date": "Date unknown",
        "text": "The final rule and its effective date; fees would start 60 days after it is published.",
        "estimate": true
      }
    ],
    process: {
      "detail": "ICE published the October 8 NPRM proposing school payment of $70,000 initially and $30,000 subsequently before an OPT recommendation. General comments close November 9.",
      "currentSummary": "Proposal published; comments open",
      "waitingFor": "Rule comments close November 9 and PRA comments December 7; then DHS decides the final text."
    },
  },
  commentUrl: "https://www.regulations.gov/commenton/ICEB-2026-0100-0001",
};
