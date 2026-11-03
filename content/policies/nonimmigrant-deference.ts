import type { PolicyContent } from '../policy-types.ts';

export const nonimmigrantDeference: PolicyContent = {
  "id": "nonimmigrant-deference",
  "path": "H-1B",
  "tone": "gray",
  "effectState": "not-in-effect",
  "checkedOn": "2026-11-02",
  "related": [
    "h1b-reform",
    "grace-period"
  ],
  "process": {
    "kind": "federal-rulemaking",
    "lastCompletedStage": 2,
    "activeStage": 3,
    "nextStage": 4
  },
  "sources": [
    {
      "href": "https://www.federalregister.gov/documents/2026/10/14/2026-20941/removing-deference-to-prior-uscis-determinations-of-eligibility",
      "zh": "Federal Register 10·14 NPRM（91 FR 65119）",
      "en": "Federal Register October 14 NPRM (91 FR 65119)"
    },
    {
      "href": "https://public-inspection.federalregister.gov/2026-20941.pdf",
      "zh": "10·13 提案预览稿",
      "en": "October 13 proposal preview"
    },
    {
      "href": "https://www.govinfo.gov/content/pkg/FR-2024-12-18/pdf/2024-29354.pdf",
      "zh": "2024 H-1B 现代化最终规则（现行“参照上次批准”条款）",
      "en": "2024 H-1B modernization final rule (current deference provision)"
    },
    {
      "href": "https://www.govinfo.gov/content/pkg/FR-2026-10-14/pdf/2026-20941.pdf",
      "zh": "GPO · 10·14 正式刊登版 PDF",
      "en": "GPO · October 14 published PDF"
    },
    {
      "href": "https://www.reginfo.gov/public/Forward?SearchTarget=RegReview&textfield=1615-AD26",
      "zh": "OIRA · 1615-AD26 审查记录检索",
      "en": "OIRA · 1615-AD26 review search"
    }
  ],
  "commentUrl": "https://www.regulations.gov/docket/USCIS-2026-0529",
  "zh": {
    "title": "工作签证续期：拟取消“上次批过就参照”的原则",
    "short": "续期不再参照上次批准",
    "status": "正式提案 · 评论截至 11 月 13 日",
    "effectLabel": "尚未生效 · 现行规则未变",
    "agency": "DHS / USCIS",
    "documentId": "1615-AD26 · FR Doc. 2026-20941",
    "tldr": "H-1B 第一期三年到了要延期时，雇主会再递交一份 I-129。现在的规定是：雇主、员工和工作内容都没变，USCIS 一般会参照上次的批准，不从头挑毛病。DHS 提议取消这条照顾，让每次延期都重新审一遍资格。提案 10·14 公布，公众意见 11·13 截止，现在还没生效，延期照旧。",
    "tags": [
      "H-1B 续期",
      "I-129",
      "资格审查"
    ],
    "summary": "I-129 是雇主为 H-1B、L-1、O-1 等工作签证递交的申请表，第一次申请和后来的延期都用它。现行法规 8 CFR 214.1(c)(5) 规定：延期时如果雇主、员工和基本情况都和上次一样，USCIS 一般参照上次的批准结论。DHS 提议删除这一条，让 USCIS 每次都独立判断资格。提案 10·14 正式刊登（91 FR 65119），任何人都可以在 11·13 前提交意见。",
    "audience": "要用 I-129 延期的工作签证持有人和他们的雇主：H-1B、L-1、O-1，以及用这张表办理的 E、TN 申请。对 F-1 学生来说，这关系到以后 H-1B 第一期三年到期时的延期。",
    "caveat": "每份延期申请都按交上去的材料来判断，这一点不变；已经批下来的身份和工作许可照常有效。",
    "background": "现行 8 CFR 214.1(c)(5) 是一条“参照上次批准”的规定：I-129 延期时，如果雇主、员工和基本事实都没变，USCIS 一般沿用上次对资格的认定，不会因为换了一位审查官就推翻重来。这条规定也有例外：上次批错了、情况有重大变化，或者出现了新的重要信息，USCIS 都可以重新审。申请人每次也照样要交证据。\n这次的提案（RIN 1615-AD26）要整条删掉这项规定。DHS 的理由是：每次申请都应该独立审核，由申请人自己证明符合条件。它和还在 OIRA 审查的 H-1B 综合改革（#07，RIN 1615-AD00）是两件事，分开推进。\n提案现在处在公众意见阶段。意见截止后，DHS 要阅读、回应这些意见，再决定最终条文；最终规则公布并生效之后，延期的审法才会改变。",
    "teaser": "上次批过，下次延期可能要从头证明一遍。",
    "headline": "延期可能要从头证明资格。",
    "analysis": "如果按提案定稿，最直接的变化是：同一个雇主、同一个岗位的延期，也可能被要求重新完整说明这个职位为什么符合 H-1B 要求、你本人为什么够格。USCIS 发补件通知（要求补交材料）的机会会变多，准备材料的时间和律师费也可能增加。手里有效的 H-1B 不受影响。",
    "impacts": [
      {
        "title": "对员工：延期时可能要重新证明自己",
        "text": "上次的批准通知仍然可以作为材料附上，但 USCIS 不再需要参照它。",
        "examples": [
          "小李在同一家公司做同一份工作，H-1B 第一期三年快到了，公司为他递交延期。按提案，审查官可以重新要求学位证明、职责说明、学位和工作的关系等材料，就像第一次申请一样。小李现在的 H-1B 照常有效。"
        ]
      },
      {
        "title": "对雇主：材料和审查都会变多",
        "text": "准备成本、补件通知和审批结果的不确定性都会上升。具体多大，要看最终条文和 USCIS 的执行说明。",
        "examples": [
          "一家公司以前批过员工的 L-1，现在为同一员工续期。按提案，上次的批准不再是依靠，公司要准备像首次申请一样完整的材料，也更可能收到补件通知。"
        ]
      }
    ],
    "outlook": "先看 11·13 意见截止后 DHS 怎么定稿。在最终规则生效之前，延期仍然按现在的“参照上次批准”来审。",
    "scenarios": [
      {
        "name": "意见征集期内",
        "headline": "现在照旧参照，先评估影响",
        "assumption": "提案在征求意见，还没有最终规则。",
        "effects": "现在递交的延期仍按现行规定审；雇主可以趁这段时间评估影响。",
        "signals": "意见截止日，以及 DHS 对提案的说明。"
      },
      {
        "name": "最终删除这一条",
        "headline": "每次延期都可能重新审资格",
        "assumption": "最终规则删掉这一条并生效。",
        "effects": "情况没变的延期也要准备更多材料，审查更严。",
        "signals": "最终生效日期、USCIS 的操作说明，以及可能影响执行的法院命令。"
      },
      {
        "name": "提案搁置或修改",
        "headline": "参照原则继续",
        "assumption": "一直没出最终规则，或者最终条文保留了部分参照。",
        "effects": "按现行规定，或按最终公布的修订内容审。",
        "signals": "提案撤回、修改，或最终规则里保留的条款。"
      }
    ],
    "scope": [
      {
        "label": "适用于",
        "text": "雇主、员工和基本事实都没变的 I-129 工作签证延期。"
      },
      {
        "label": "其他申请照旧",
        "text": "领事馆签证、家属用 I-539 办的延期等其他申请，按各自的规定办。"
      },
      {
        "label": "已有的批准",
        "text": "已经批下来的身份和工作许可照常有效。"
      }
    ],
    "milestones": [
      {
        "date": "2026-10-13",
        "text": "提案在联邦公报上预先公开，提议删除 8 CFR 214.1(c)(5)。"
      },
      {
        "date": "2026-10-14",
        "text": "提案正式刊登（91 FR 65119），公众意见 11·13 截止。"
      }
    ],
    "next": [
      {
        "date": "2026-11-13",
        "text": "公众意见截止（美东时间午夜前），在 regulations.gov 的案卷 USCIS-2026-0529 下提交。"
      },
      {
        "date": "日期未定",
        "text": "DHS 审阅意见后，决定最终条文和生效日期。",
        "estimate": true
      }
    ],
    "process": {
      "detail": "提案 10·14 正式刊登，公众意见 11·13 截止。",
      "currentSummary": "提案已公布，正在收集公众意见",
      "waitingFor": "11·13 意见截止，之后看 DHS 会不会发最终规则。"
    }
  },
  "en": {
    "title": "Proposed End to Deference to Prior Approvals in Work-Visa Renewals",
    "short": "Renewal Deference",
    "status": "Proposed rule · Comments due November 13",
    "effectLabel": "Not in effect · Current rules unchanged",
    "agency": "DHS / USCIS",
    "documentId": "1615-AD26 · FR Doc. 2026-20941",
    "tldr": "When the first three years of an H-1B run out, the employer files another I-129 to extend it. Today, if the employer, worker and job are the same, USCIS generally follows its earlier approval instead of starting over. DHS proposes ending that, so every extension can be reviewed from scratch. The proposal was published October 14 and comments close November 13. It is not in effect; extensions work as before for now.",
    "tags": [
      "Work-petition renewals",
      "I-129",
      "Eligibility review"
    ],
    "summary": "Form I-129 is the petition employers file for H-1B, L-1, O-1 and other work visas, both the first time and for extensions. The current regulation, 8 CFR 214.1(c)(5), says that when an extension involves the same employer, worker and basic facts, USCIS generally follows its earlier decision. DHS proposes deleting that provision so USCIS decides eligibility fresh each time. The proposal was published October 14 (91 FR 65119), and anyone can comment until November 13.",
    "audience": "Work-visa holders extending through Form I-129 and their employers: H-1B, L-1, O-1, and E or TN cases filed on that form. For F-1 students, this matters when a future H-1B reaches its first three-year extension.",
    "caveat": "Extensions are still decided on their merits, meaning on the evidence submitted, and approvals and status you already have stay valid.",
    "background": "Current 8 CFR 214.1(c)(5) is a “follow the earlier approval” rule, known as deference. When an I-129 extension involves the same employer, worker and basic facts, USCIS generally keeps its earlier finding on eligibility, so a new officer does not overturn it on a whim. There are exceptions: USCIS can look again if the earlier approval was a mistake, the facts changed materially or important new information appears. Applicants still submit evidence every time.\nThis proposal (RIN 1615-AD26) would delete that provision entirely. DHS’s reasoning is that each petition should be reviewed on its own, with the applicant proving eligibility. It moves separately from the broader H-1B reform (#07, RIN 1615-AD00) still under OIRA review.\nThe proposal is now in its public comment period. After comments close, DHS must read and respond to them before deciding the final text. Extension reviews change only after a final rule is published and takes effect.",
    "teaser": "Being approved last time may no longer carry over to your extension.",
    "headline": "Extensions may need to prove eligibility from scratch.",
    "analysis": "If adopted as proposed, the most direct change is that even a same-employer, same-job extension could require a full new case: why the position qualifies for H-1B and why you qualify for it. USCIS would likely send more requests for evidence (letters asking for more documents), and preparation time and legal fees could go up. Your current H-1B stays valid.",
    "impacts": [
      {
        "title": "For workers: you may have to prove yourself again at extension time",
        "text": "You can still attach the earlier approval notice, but USCIS would no longer have to follow it.",
        "examples": [
          "Li has the same job at the same company, and his first three H-1B years are nearly up, so the company files an extension. Under the proposal, the officer could ask again for his degree, job duties and how the two connect, just like a first petition. Li’s current H-1B stays valid."
        ]
      },
      {
        "title": "For employers: more paperwork and scrutiny",
        "text": "Preparation costs, evidence requests and uncertainty all go up. How much depends on the final text and USCIS instructions.",
        "examples": [
          "A company that got an L-1 approved for an employee now files to extend it. Under the proposal, the earlier approval no longer carries weight, so the company prepares a case as full as the first one and is more likely to get an evidence request."
        ]
      }
    ],
    "outlook": "Watch what DHS finalizes after comments close November 13. Until a final rule takes effect, extensions are still reviewed with deference to earlier approvals.",
    "scenarios": [
      {
        "name": "During the comment period",
        "headline": "Deference continues for now; assess the impact",
        "assumption": "The proposal is open for comment; there is no final rule.",
        "effects": "Extensions filed now are decided under current rules; employers can use the time to assess the impact.",
        "signals": "The comment deadline and DHS’s explanation of the proposal."
      },
      {
        "name": "Provision deleted",
        "headline": "Every extension may be reviewed from scratch",
        "assumption": "A final rule deletes the provision and takes effect.",
        "effects": "Even extensions with unchanged facts need more preparation and face closer review.",
        "signals": "The final start date, USCIS instructions and any court orders affecting it."
      },
      {
        "name": "Proposal stalls or changes",
        "headline": "Deference continues",
        "assumption": "No final rule comes out, or the final text keeps some deference.",
        "effects": "Cases are decided under current rules or the eventual final version.",
        "signals": "A withdrawal, revisions or provisions kept in a final rule."
      }
    ],
    "scope": [
      {
        "label": "Applies to",
        "text": "Form I-129 work-visa extensions with the same employer, worker and basic facts."
      },
      {
        "label": "Other filings",
        "text": "Consular visas, family extensions on Form I-539 and other applications follow their own rules."
      },
      {
        "label": "Existing approvals",
        "text": "Approvals, status and work authorization you already have stay valid."
      }
    ],
    "milestones": [
      {
        "date": "2026-10-13",
        "text": "The proposal was posted for public inspection in the Federal Register, proposing to delete 8 CFR 214.1(c)(5)."
      },
      {
        "date": "2026-10-14",
        "text": "The proposal was published (91 FR 65119); comments close November 13."
      }
    ],
    "next": [
      {
        "date": "2026-11-13",
        "text": "Public comments due before midnight Eastern Time, filed on regulations.gov under docket USCIS-2026-0529."
      },
      {
        "date": "Date unknown",
        "text": "After reviewing comments, DHS decides the final text and start date.",
        "estimate": true
      }
    ],
    "process": {
      "detail": "The proposal was published October 14; public comments close November 13.",
      "currentSummary": "Proposal published; public comments open",
      "waitingFor": "Comments close November 13; then whether DHS issues a final rule."
    }
  }
};
