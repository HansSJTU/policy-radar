import type { PolicyContent } from '../policy-types.ts';

export const optFee: PolicyContent = {
  id: 'opt-fee',
  path: 'OPT',
  tone: 'blue',
  effectState: 'not-in-effect',
  checkedOn: "2026-10-13",
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
    effectLabel: "尚未生效 · 学校拟先缴费",
    agency: 'DHS / ICE',
    documentId: '1653-AB01',
    tldr: "ICE 提议由学校在 DSO 推荐 OPT 前缴费：首次 70,000 美元，已缴首次费用后的每次后续 OPT 30,000 美元，包括 STEM 延期。学校可把经济成本转给学生或雇主；提案尚未生效。",
    tags: ['OPT', 'H-1B 转换'],
    summary:
      "ICE 在 10 月 8 日公布正式提案，拟要求学校在 DSO 录入 OPT 推荐前为每名学生缴费：首次 70,000 美元，之后每次后续 OPT 30,000 美元。范围包括毕业前、毕业后和 STEM OPT 延期。学校是向政府缴费的一方，但正文允许学校向学生、全体学生或雇主转移经济成本。公众评论截止 11 月 9 日；这项新费用尚未生效。",
    audience: "准备申请毕业前、毕业后或 STEM OPT 的 F-1 学生、SEVP 认证学校及相关雇主。",
    caveat:
      "学校拟负责向政府先缴费，但不必自行吸收全部成本；具体资助与转嫁安排取决于学校。",
    reviewNote:
      "10·13 重读 10·08 正式 NPRM 与官方 PDF，确认金额、学校先缴费责任、允许成本转嫁、过渡条款及两项评论期限；联邦公报官方 API 按 RIN 检索截至当天仅列此提案。Regulations.gov 动态案卷未完整读取；学校具体资助或转嫁办法、最终规则和实际生效日期尚未确认。",
    background:
      "ICE 在 2026-08-20 把 Optional Practical Training Fees 送交 OIRA，9·11 带修改完成审查。10·08 的 NPRM（2026-20660，91 FR 64566，ICEB-2026-0100）首次公布具体收费：70,000 美元首次费、30,000 美元后续费。此前媒体报道的单笔 100,000 美元不能继续当作本提案的首次收费。\n学校拟在 DSO 向 SEVIS 录入推荐前缴费；未缴费就不能推荐，USCIS 也不能据此批准工作许可。正文没有禁止学校向学生、全体学生或雇主转嫁经济成本。它覆盖各类 OPT，不包括 CPT；单纯换雇主不会触发新一笔后续费。\n拟议过渡界线是最终规则公布后的第 60 天，不是 NPRM 公布后的第 60 天。界线之后的第一次新 OPT 推荐拟收 70,000 美元，即使学生此前参加过 OPT；只有已缴首次费后的后续推荐才拟收 30,000 美元。现有 EAD 不会因为这份提案自动失效。\n学校可在相关 EAD 或延期尚未获批时申请退款，并先撤除 SEVIS 推荐；SEVP 拟逐案决定，获批后不退费，退款决定不可行政上诉。规则一般评论截止 11·09，信息收集评论截止 12·07；最终规则和实际生效日期尚未确认。",
    teaser: "学校的 OPT 推荐拟先经过缴费环节，学生和雇主还要看学校怎样分配成本。",
    headline: "第一份毕业工作，可能先遇到学校缴费与资助安排这一关。",
    analysis:
      "提案把向政府缴费的责任放在学校，学校却可以把经济成本转给学生或雇主。影响会从 DSO 推荐前就开始：学校是否愿意资助、学生是否承担费用、雇主是否参与，都可能决定能否完成推荐。首次 7 万美元加一次后续 3 万美元会形成 10 万美元的两次费用总额，但这不等于每次申请都收 10 万美元。",
    impacts: [
      {
        "title": "对学生：先看学校怎样资助或分配费用",
        "text": "学校拟先缴首次 7 万美元。若学校把费用转给学生，学生会在 DSO 推荐前面对资金需求；若有资助，个人负担可能不同。",
        "examples": [
          "小林已拿到毕业后的全职 offer，但如果最终规则采用这套收费，学校必须先为他的 OPT 推荐缴 7 万美元。学校可以自行资助，也可能要求小林或雇主提供资金。能否完成推荐，取决于学校安排和资金来源；不能直接认定小林必须向政府支付。",
          "小周正在选择美国硕士项目。如果最终规则落地，不同学校是否资助 OPT、如何向学生或雇主分配费用，可能影响毕业后的工作成本。提案没有确定各校将采取哪种办法。"
        ]
      },
      {
        "title": "对学校和雇主：推荐前需要安排资金",
        "text": "学校拟成为向政府缴费的一方，DSO 推荐和 USCIS 工作许可将受缴费限制。雇主可能被要求资助，但提案没有统一规定雇主必须承担费用。",
        "examples": [
          "一家小公司已为新毕业生小陈批好工资预算。如果学校要求雇主资助首次 7 万美元 OPT 费用，公司就得评估额外预算，可能推迟 offer 或与学校协商。法律上的政府缴费方仍是学校，是否由公司最终负担取决于资助安排。"
        ]
      },
      {
        "title": "对后续 OPT：不能只按 STEM 延期算 3 万美元",
        "text": "后续费覆盖多种新 OPT 推荐，包括 STEM 延期。若此前未为该学生缴过首次 7 万美元，最终规则界线后的第一次推荐拟先收 7 万美元；已有首次付款后才适用 3 万美元后续费。"
      }
    ],
    outlook:
      "下一步看公众评论是否改变金额、学校缴费责任和过渡条款，也要看学校是否公布资助或转嫁安排。正式提案已经给出机制，最终规则仍可能修改。",
    scenarios: [
      {
        "name": "按现有提案落地",
        "headline": "学校资助能力与成本分配影响 OPT 可用性",
        "assumption": "最终规则保留首次 7 万美元、后续 3 万美元和学校先缴费机制。",
        "effects": "学校需要决定是否资助及怎样筹款；经济成本可能由学校、学生或雇主承担，资源不同的学校和学生可能面对不同结果。",
        "signals": "最终条文保留金额、推荐前付款要求，以及学校随后公布的资助办法。"
      },
      {
        "name": "金额或过渡安排调整",
        "headline": "受影响群体与时间界线可能改变",
        "assumption": "评论后最终条文降低金额、缩小范围，或调整旧 OPT 与新推荐的过渡安排。",
        "effects": "学校和学生的负担会随具体条文变化；不能仅凭已持有 OPT 或计划延期就判断是否免首次费。",
        "signals": "最终规则对收费档次、适用范围、已有 OPT 与首次已缴费条件的修改。"
      },
      {
        "name": "延后／未实施",
        "headline": "现行申请流程继续，新收费仍是规划悬念",
        "assumption": "规则制定延后、提案撤回，或没有新的生效规则。",
        "effects": "提案本身不产生新缴费义务；现有 OPT 与 EAD 不因 NPRM 自动失效。学校与雇主仍可能提前评估预算。",
        "signals": "正式撤回、修订或实施公告，以及最终规则和生效日期；仅未及时发布不足以证明放弃。"
      }
    ],
    scope: [
      {
        "label": "谁缴、谁负担",
        "text": "学校拟向政府先缴费；正文允许把经济成本转给学生、全体学生或雇主。"
      },
      {
        "label": "哪些 OPT",
        "text": "毕业前、毕业后和 STEM OPT 均在拟议范围；CPT 不在本提案范围；单纯换雇主不触发费用。"
      },
      {
        "label": "过渡与首次费",
        "text": "以最终规则公布后第 60 天的新 DSO 推荐为拟议界线；此前未缴首次费不能自动按 3 万美元后续费计算。"
      }
    ],
    milestones: [
      {
        "date": "2026-08-20",
        "text": "RIN 1653-AB01 送交 OMB/OIRA 审查。"
      },
      {
        "date": "2026-08-26",
        "text": "高校提醒：$100k 来自媒体报道，不是已公布政府文本。"
      },
      {
        "date": "2026-09-11",
        "text": "OIRA 带修改完成审查；不等于 NPRM 已发布或收费已生效。"
      },
      {
        "date": "2026-10-08",
        "text": "正式 NPRM 公布学校先缴首次 70,000 美元、后续 30,000 美元；一般评论截止 11·09，信息收集评论截止 12·07。"
      }
    ],
    next: [
      {
        "date": "2026-11-09",
        "text": "规则公众评论截止，线上评论须在当天美东时间 23:59 前提交。"
      },
      {
        "date": "2026-12-07",
        "text": "信息收集（PRA）评论截止；与规则一般评论期限不同。"
      },
      {
        "date": "日期未定",
        "text": "等待最终规则及实际生效安排；拟议收费界线为最终规则公布后的第 60 天。",
        "estimate": true
      }
    ],
    process: {
      "detail": "ICE 在 10 月 8 日公布 NPRM，拟由学校在 OPT 推荐前缴首次 7 万美元、后续 3 万美元。一般评论期至 11 月 9 日；最终规则与实际生效日期尚未确认。",
      "currentSummary": "正式提案公开，公众评论进行中",
      "waitingFor": "11 月 9 日一般评论截止、12 月 7 日信息收集评论截止，以及 DHS 对最终条文的决定。"
    },
  },
  en: {
    title: "Proposed OPT Fees: $70,000 Initially, $30,000 Subsequently",
    short: "Proposed $70,000 Initial OPT Fee",
    status: "Proposed rule · Comments through November 9",
    effectLabel: "Not in effect · Schools would pay first",
    agency: 'DHS / ICE',
    documentId: '1653-AB01',
    tldr: "ICE proposes school payment before a DSO recommends OPT: $70,000 initially and $30,000 for each later OPT after the initial fee has been paid, including STEM extensions. Schools may pass the cost to students or employers. The proposal is not in effect.",
    tags: ['OPT', 'H-1B transition'],
    summary:
      "ICE published an NPRM October 8 requiring schools to pay before a DSO enters an OPT recommendation: $70,000 initially and $30,000 for each subsequent OPT. It covers pre-completion, post-completion and STEM OPT extensions. Schools would remit the fee to the government, but the text permits passing the economic cost to students, all students or employers. General comments close November 9; the new fees are not in effect.",
    audience:
      "F-1 students seeking pre-completion, post-completion or STEM OPT, SEVP-certified schools and relevant employers.",
    caveat:
      "Schools would remit the fee first but need not absorb the whole economic cost; funding and pass-through arrangements would vary by school.",
    reviewNote:
      "The October 8 NPRM and official PDF were reread October 13 to confirm fees, school prepayment, permitted cost pass-through, transition terms and both comment deadlines. The official Federal Register RIN API lists only this proposal through the check date. The live Regulations.gov docket was not fully retrieved; school funding arrangements, final text and an actual effective date remain unconfirmed.",
    background:
      "ICE submitted Optional Practical Training Fees to OIRA August 20, 2026; review concluded with changes September 11. The October 8 NPRM (2026-20660, 91 FR 64566, ICEB-2026-0100) publishes a $70,000 initial fee and $30,000 subsequent fee. The earlier media-reported single $100,000 amount no longer describes the proposed initial fee.\nSchools would pay before a DSO enters a recommendation in SEVIS. Without payment, the DSO could not recommend OPT and USCIS could not grant employment authorization. The text does not prohibit schools from passing the economic cost to F-1 students, all students or employers. It covers all OPT types and excludes CPT; an employer change alone would not trigger a subsequent fee.\nThe proposed transition boundary is 60 days after FINAL-rule publication, not NPRM publication. The first new OPT recommendation after that boundary would require $70,000 even if the student previously participated in OPT; the $30,000 subsequent fee applies after the initial fee has been paid. This proposal does not automatically invalidate existing EADs.\nSchools could seek a discretionary refund before the associated EAD or extension is granted, after removing the SEVIS recommendation. No refund would follow authorization, and refund decisions would have no administrative appeal. General comments close November 9 and information-collection comments December 7; a final rule and actual effective date remain unconfirmed.",
    teaser:
      "Schools would fund the OPT recommendation first; students and employers would also need to understand how each school allocates the cost.",
    headline:
      "The first post-graduation job could depend on the school’s OPT funding arrangements.",
    analysis:
      "The school would remit payment, while the economic cost could be passed to students or employers. That could affect the process before a DSO recommendation: school funding, student resources and employer support may determine whether it can proceed. A $70,000 initial fee plus one $30,000 subsequent fee totals $100,000 across two recommendations; it is not a $100,000 fee for every application.",
    impacts: [
      {
        "title": "For students: school funding and cost allocation matter",
        "text": "Schools would first pay $70,000. A school passing the cost to the student could create a funding need before the DSO recommendation; school support could produce a different personal burden.",
        "examples": [
          "Lin has a full-time offer after graduation. If the final rule adopts this mechanism, the school must first pay $70,000 for the OPT recommendation. It could fund the payment itself or seek funds from Lin or the employer. Completing the recommendation would depend on the funding arrangement; direct government payment by Lin cannot be assumed.",
          "Zhou is comparing US master’s programs. If the proposal becomes effective, school OPT support and allocation of costs to students or employers could affect the price of post-graduation work. The proposal does not establish which funding approach each school will choose."
        ]
      },
      {
        "title": "For schools and employers: funding precedes the recommendation",
        "text": "Schools would remit the payment, with DSO recommendations and USCIS authorization dependent on it. Employers could be asked to fund it, but the proposal does not uniformly require employers to bear the cost.",
        "examples": [
          "A small company has budgeted Chen’s salary. If the school requests employer support for the $70,000 initial OPT fee, the company would assess the added budget and might delay the offer or negotiate with the school. The school remains the government payer; whether the company bears the cost depends on the funding arrangement."
        ]
      },
      {
        "title": "For later OPT: a STEM extension is not automatically $30,000",
        "text": "Subsequent fees cover several types of new OPT recommendation, including STEM extensions. If the $70,000 initial fee has not previously been paid for the student, the first recommendation after the final-rule boundary would first require $70,000; the $30,000 subsequent fee applies after that initial payment."
      }
    ],
    outlook:
      "Watch whether public comments change the fees, school-payment mechanism or transition provisions, and whether schools announce funding or pass-through policies. The NPRM now specifies the mechanism, but a final rule could revise it.",
    scenarios: [
      {
        "name": "Current proposal implemented",
        "headline": "School support and cost allocation affect OPT access",
        "assumption": "A final rule retains the $70,000 initial fee, $30,000 subsequent fee and school prepayment mechanism.",
        "effects": "Schools would decide whether to fund the fees and how to obtain funds. Schools, students or employers could bear the economic cost, producing different outcomes across institutions and students with different resources.",
        "signals": "Final text retains the amounts and pre-recommendation payment requirement, followed by school funding policies."
      },
      {
        "name": "Fees or transition terms revised",
        "headline": "Coverage and timing boundaries could change",
        "assumption": "Following comments, final text reduces amounts, narrows coverage or revises transition treatment of existing OPT and new recommendations.",
        "effects": "The burden would depend on the final terms. Existing OPT participation or a planned extension alone cannot establish an exemption from the initial fee.",
        "signals": "Changes to fee tiers, coverage, existing OPT treatment and the prior initial-payment condition."
      },
      {
        "name": "Delayed or not implemented",
        "headline": "Current application rules continue while the proposed fees remain uncertain",
        "assumption": "Rulemaking is delayed, withdrawn or produces no new effective rule.",
        "effects": "The proposal alone creates no new payment obligation or automatic loss of existing OPT or EADs. Schools and employers might still assess future budgets.",
        "signals": "Formal withdrawal, revisions or implementation announcements and a final rule with an effective date; publication delay alone does not prove abandonment."
      }
    ],
    scope: [
      {
        "label": "Remitter and economic cost",
        "text": "Schools would pay the government first; the text permits passing the economic cost to students, all students or employers."
      },
      {
        "label": "Covered OPT",
        "text": "Pre-completion, post-completion and STEM OPT are covered; CPT is excluded. An employer change alone does not trigger the fee."
      },
      {
        "label": "Transition and initial payment",
        "text": "The proposed boundary follows final-rule publication by 60 days. Without prior initial-fee payment, a student does not automatically qualify for the $30,000 subsequent fee."
      }
    ],
    milestones: [
      {
        "date": "2026-08-20",
        "text": "RIN 1653-AB01 was submitted to OMB/OIRA for review."
      },
      {
        "date": "2026-08-26",
        "text": "Universities cautioned that the $100,000 figure came from media reporting, not a published government document."
      },
      {
        "date": "2026-09-11",
        "text": "OIRA completed review with changes; this does not mean an NPRM was published or a fee took effect."
      },
      {
        "date": "2026-10-08",
        "text": "The NPRM publishes school prepayment of $70,000 initially and $30,000 subsequently; general comments close November 9 and information-collection comments December 7."
      }
    ],
    next: [
      {
        "date": "2026-11-09",
        "text": "General rule comments close; online comments must arrive by 11:59 p.m. Eastern Time."
      },
      {
        "date": "2026-12-07",
        "text": "Information-collection (PRA) comments close, separately from the general rule comment deadline."
      },
      {
        "date": "Date unknown",
        "text": "Await a final rule and actual implementation terms; the proposed fee boundary is 60 days after final-rule publication.",
        "estimate": true
      }
    ],
    process: {
      "detail": "ICE published the October 8 NPRM proposing school payment of $70,000 initially and $30,000 subsequently before an OPT recommendation. General comments close November 9; a final rule and actual effective date remain unconfirmed.",
      "currentSummary": "Published NPRM; public comments open",
      "waitingFor": "November 9 general comments, December 7 information-collection comments, and DHS’s decision on final text."
    },
  },
  commentUrl: "https://www.regulations.gov/commenton/ICEB-2026-0100-0001",
};
