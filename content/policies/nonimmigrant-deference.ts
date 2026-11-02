import type { PolicyContent } from '../policy-types.ts';

export const nonimmigrantDeference: PolicyContent = {
  "id": "nonimmigrant-deference",
  "path": "H-1B",
  "tone": "gray",
  "effectState": "not-in-effect",
  "checkedOn": "2026-11-01",
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
    "tldr": "现在用 Form I-129 续期时，如果雇主、员工和基本情况都没变，USCIS 一般会参照上次的批准。DHS 提议取消这一条，让每次续期都可以重新审资格。提案 10·14 正式公布，评论 11·13 截止，还没生效。",
    "tags": [
      "H-1B 续期",
      "I-129",
      "资格审查"
    ],
    "summary": "DHS 提议删除 8 CFR 214.1(c)(5)。这一条要求 USCIS 在雇主、员工和基本事实都没变的 Form I-129 续期中，一般参照上次的批准。提案 10·14 正式刊登（91 FR 65119），公众评论 11·13 截止。",
    "audience": "用 Form I-129 延期的工作签证持有人和雇主，包括 H-1B、L-1、O-1，以及用这张表的 E、TN 申请。",
    "caveat": "续期照样按材料审，已经批下来的身份和许可不受影响。现在的参照原则本来就有例外（上次批错了、情况变了、出现新的重要信息），申请人也一直要自己证明资格。",
    "background": "现行 8 CFR 214.1(c)(5) 规定：Form I-129 续期时，如果雇主、员工和基本事实都没变，USCIS 一般参照上次的资格认定。申请人仍要交证据；上次批错了、情况有重大变化或出现新的重要信息时，也可以重新审。\n这次的提案（RIN 1615-AD26）要删掉这一条，理由是每次都应独立审核资格、由申请人自己证明。它和还在 OIRA 审查的 H-1B 综合改革（#07，RIN 1615-AD00）是两回事。",
    "teaser": "上次批过，下次续期不一定还能顺利过。",
    "headline": "续期可能要从头证明资格。",
    "analysis": "如果按提案定稿，同样的岗位和雇主续期时，也可能要重新完整说明职位和本人资格，补件和准备时间都会增加。",
    "impacts": [
      {
        "title": "对员工：续期可能要重新证明资格",
        "text": "上次的批准仍然可以作为材料交，但 USCIS 不再需要参照它。",
        "examples": [
          "同一雇主为同一职位续期时，可能需要重新提交学位、职责与职位关系等证据；现有 H-1B 照常有效。"
        ]
      },
      {
        "title": "对雇主：材料和审查都会变多",
        "text": "准备成本、补件和审批的不确定性都会上升，具体看最终条文和执行说明。",
        "examples": [
          "以前批过的 L-1 或其他 I-129 续期，不能再靠上次的批准，可能被要求补件。"
        ]
      }
    ],
    "outlook": "先看 11·13 评论截止后 DHS 怎么定稿；只有最终规则生效，续期的审查方式才会真正改变。",
    "scenarios": [
      {
        "name": "评论期内",
        "headline": "现在照旧参照，先评估影响",
        "assumption": "提案在征求意见，还没有最终规则。",
        "effects": "雇主可以先评估影响，眼下的续期仍按现行规定审。",
        "signals": "评论截止日和 DHS 对提案的说明。"
      },
      {
        "name": "最终删除这一条",
        "headline": "每次续期都可能重新审资格",
        "assumption": "最终规则删掉这一条并生效。",
        "effects": "相同事实的续期要准备更多材料，审查也更严。",
        "signals": "最终生效日期、USCIS 的操作说明，以及可能影响执行的法院命令。"
      },
      {
        "name": "提案搁置或修改",
        "headline": "参照原则继续",
        "assumption": "没有出最终规则，或者最终条文保留部分参照。",
        "effects": "按现行规定或最终公布的修订内容审理。",
        "signals": "撤回、修改，或最终规则里保留的条款。"
      }
    ],
    "scope": [
      {
        "label": "适用于",
        "text": "雇主、员工和基本事实都没变的 Form I-129 工作或停留延期。"
      },
      {
        "label": "不适用于",
        "text": "领事签证、I-539 家属延期等其他申请。"
      },
      {
        "label": "已有的批准",
        "text": "已经批下来的身份和工作许可不受影响。"
      }
    ],
    "milestones": [
      {
        "date": "2026-10-13",
        "text": "提案预览稿公开，提议删除 8 CFR 214.1(c)(5)。"
      },
      {
        "date": "2026-10-14",
        "text": "提案正式刊登（91 FR 65119），评论 11·13 截止。"
      }
    ],
    "next": [
      {
        "date": "2026-11-13",
        "text": "公众评论截止（美东午夜前），案卷 USCIS-2026-0529。"
      },
      {
        "date": "日期未定",
        "text": "DHS 审评论后决定最终条文和生效日期。",
        "estimate": true
      }
    ],
    "process": {
      "detail": "提案 10·14 正式刊登，公众评论 11·13 截止。",
      "currentSummary": "提案已公布，正在收集评论",
      "waitingFor": "11·13 评论截止，之后看 DHS 是否发最终规则。"
    }
  },
  "en": {
    "title": "Proposed End to Deference to Prior Approvals in Work-Visa Renewals",
    "short": "Renewal Deference",
    "status": "Proposed rule · Comments due November 13",
    "effectLabel": "Not in effect · Current rules unchanged",
    "agency": "DHS / USCIS",
    "documentId": "1615-AD26 · FR Doc. 2026-20941",
    "tldr": "Today, when an I-129 renewal has the same employer, worker and basic facts, USCIS generally follows its earlier approval. DHS proposes dropping that rule so every renewal can be reviewed from scratch. The proposal was published October 14; comments close November 13. It is not in effect.",
    "tags": [
      "Work-petition renewals",
      "I-129",
      "Eligibility review"
    ],
    "summary": "DHS proposes deleting 8 CFR 214.1(c)(5), which generally requires USCIS to follow its earlier approval when an I-129 renewal involves the same employer, worker and basic facts. The proposal was published October 14 (91 FR 65119); public comments close November 13.",
    "audience": "Work-visa holders and employers extending through Form I-129, including H-1B, L-1, O-1 and E or TN cases filed on that form.",
    "caveat": "Renewals are still decided on their merits, and existing approvals and status are unaffected. Current deference already has exceptions for material error, changed facts and new information, and petitioners must still prove eligibility.",
    "background": "Current 8 CFR 214.1(c)(5) says that when an I-129 renewal involves the same employer, worker and basic facts, USCIS generally follows its earlier eligibility decision. Applicants still have to submit evidence, and USCIS can look again if the earlier approval was a mistake, the facts changed materially or important new information appears.\nThis proposal (RIN 1615-AD26) would delete that provision so that eligibility is reviewed fresh each time and the applicant carries the burden of proof. It is separate from the broader H-1B reform (#07, RIN 1615-AD00) still under OIRA review.",
    "teaser": "Being approved last time would no longer smooth the way for your renewal.",
    "headline": "Renewals may need to prove eligibility from scratch.",
    "analysis": "If adopted as proposed, even a renewal with the same job and employer may need a full new case for the position and the worker’s qualifications, with more evidence requests and prep time.",
    "impacts": [
      {
        "title": "For workers: renewals may mean proving yourself again",
        "text": "You can still submit the earlier approval, but USCIS would no longer have to follow it.",
        "examples": [
          "A same-employer, same-position renewal may need fresh evidence about qualifications and job duties. The worker’s existing H-1B stays valid."
        ]
      },
      {
        "title": "For employers: more paperwork and scrutiny",
        "text": "Preparation costs, evidence requests and uncertainty go up; how much depends on the final text and USCIS guidance.",
        "examples": [
          "A previously approved L-1 or other I-129 renewal can no longer lean on the old approval and may draw an evidence request."
        ]
      }
    ],
    "outlook": "Watch what DHS finalizes after comments close November 13; renewal reviews change only once a final rule takes effect.",
    "scenarios": [
      {
        "name": "During the comment period",
        "headline": "Deference continues for now; assess the impact",
        "assumption": "The proposal is open for comment; there is no final rule.",
        "effects": "Employers can assess the impact; renewals filed now are still decided under current rules.",
        "signals": "The comment deadline and DHS’s explanation of the proposal."
      },
      {
        "name": "Provision deleted",
        "headline": "Every renewal may be reviewed from scratch",
        "assumption": "A final rule deletes the provision and takes effect.",
        "effects": "Same-facts renewals need more preparation and face closer review.",
        "signals": "The final start date, USCIS guidance and any court orders affecting it."
      },
      {
        "name": "Proposal stalls or changes",
        "headline": "Deference continues",
        "assumption": "No final rule comes out, or the final text keeps some deference.",
        "effects": "Cases are decided under current rules or the eventual final revision.",
        "signals": "A withdrawal, revisions or provisions kept in a final rule."
      }
    ],
    "scope": [
      {
        "label": "Applies to",
        "text": "Form I-129 work or stay extensions with the same employer, worker and basic facts."
      },
      {
        "label": "Does not apply to",
        "text": "Consular visas, I-539 family extensions and other applications."
      },
      {
        "label": "Existing approvals",
        "text": "Existing approvals, status and work authorization are unaffected."
      }
    ],
    "milestones": [
      {
        "date": "2026-10-13",
        "text": "Proposal preview released, proposing to delete 8 CFR 214.1(c)(5)."
      },
      {
        "date": "2026-10-14",
        "text": "Proposal published (91 FR 65119); comments close November 13."
      }
    ],
    "next": [
      {
        "date": "2026-11-13",
        "text": "Public comments due before midnight Eastern Time; docket USCIS-2026-0529."
      },
      {
        "date": "Date unknown",
        "text": "After reviewing comments, DHS decides the final text and start date.",
        "estimate": true
      }
    ],
    "process": {
      "detail": "The proposal was published October 14; public comments close November 13.",
      "currentSummary": "Proposal published; comments open",
      "waitingFor": "Comments close November 13; then whether DHS issues a final rule."
    }
  }
};
