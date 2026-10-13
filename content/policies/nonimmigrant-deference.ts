import type { PolicyContent } from '../policy-types.ts';

export const nonimmigrantDeference: PolicyContent = {
  "id": "nonimmigrant-deference",
  "path": "H-1B",
  "tone": "gray",
  "effectState": "not-in-effect",
  "checkedOn": "2026-10-13",
  "related": [
    "h1b-reform",
    "grace-period"
  ],
  "process": {
    "kind": "federal-rulemaking",
    "lastCompletedStage": 0,
    "activeStage": 2,
    "nextStage": 3
  },
  "sources": [
    {
      "href": "https://public-inspection.federalregister.gov/2026-20941.pdf",
      "zh": "10·13 NPRM 预览原文 · 预定 10·14 刊登",
      "en": "October 13 NPRM preview · publication scheduled October 14"
    },
    {
      "href": "https://www.federalregister.gov/api/v1/public_inspection_documents/2026-20941",
      "zh": "联邦公报 · 公开预览记录",
      "en": "Federal Register · public-inspection record"
    },
    {
      "href": "https://www.govinfo.gov/content/pkg/FR-2024-12-18/pdf/2024-29354.pdf",
      "zh": "2024 H-1B 现代化最终规则 · 既往批准尊重原则",
      "en": "2024 H-1B modernization final rule · deference provision"
    }
  ],
  "commentUrl": "https://www.regulations.gov/docket/USCIS-2026-0529",
  "zh": {
    "title": "工作身份续期拟取消对既往批准的尊重原则",
    "short": "续期既往批准审查",
    "status": "NPRM 预览已公开 · 预定 10·14 刊登",
    "effectLabel": "尚未生效 · 现行规则未变",
    "agency": "DHS / USCIS",
    "documentId": "1615-AD26 · FR Doc. 2026-20941",
    "tldr": "DHS 拟删除 Form I-129 审理中对相同当事方、相同基本事实的既往批准一般予以尊重的规定，使续期可以重新审查资格。提案预览已公开，尚未生效。",
    "tags": [
      "H-1B 续期",
      "I-129",
      "资格审查"
    ],
    "summary": "DHS 拟删除 8 CFR 214.1(c)(5)，取消 USCIS 在相同当事方和相同基本事实的 Form I-129 申请中一般尊重既往资格认定的规则。10·13 公开的 NPRM 预览预定 10·14 正式刊登；目前不是最终规则。",
    "audience": "通过 Form I-129 申请延长工作或停留的非移民雇员及申请雇主，包括适用该表格的 H-1B、L-1、O-1，以及 E、TN 等申请。",
    "caveat": "拟议调整不自动拒绝续期，也不取消已经批准的身份或许可；现行 deference 本来就有重大错误、事实变化和新重要信息等例外，申请人仍须证明资格。",
    "reviewNote": "10·13 已读取 46 页官方预览及联邦公报公开记录，并核对现行尊重原则的规则来源。正式刊登尚未发生，预览中的评论截止日仍是“刊登后 30 天”占位符；不写成已确定日历期限。Regulations.gov 动态案卷被拒，OIRA 按 RIN 检索未返回记录，完整审查历史、后续说明及诉讼未核实。",
    "background": "现行 8 CFR 214.1(c)(5) 一般要求 USCIS 在相同当事方、相同基本事实的 I-129 请求中尊重既往资格认定；它不免除提交证据的责任，也允许因重大错误、重大变化或新重要信息重新审查。\n本次 RIN 1615-AD26 提议删除并保留空置该款，理由包括独立核对资格与申请人的举证责任。它与尚在 OIRA 审查中的 RIN 1615-AD00 综合 H-1B 改革是不同项目。",
    "teaser": "之前获批，未来可能更难作为续期审查的稳定基础。",
    "headline": "续期的证据准备可能增加，既往批准不等于未来结果。",
    "analysis": "若最终按预览实施，同样岗位和雇主的续期也可能需要更完整地重新解释职位与申请人资格。补件、准备时间和不确定性可能增加，但预览没有规定所有续期必须被拒，也不能从中推算个人拒签率。",
    "impacts": [
      {
        "title": "对在职雇员：续期可能需要重新证明资格",
        "text": "原批准仍可作为材料，但一般尊重既往认定的监管要求拟被删除。",
        "examples": [
          "同一雇主为同一职位续期时，可能需要重新提交学位、职责与职位关系等证据；不是因规则预览公开就失去现有 H-1B。"
        ]
      },
      {
        "title": "对雇主：材料与审查负担可能增加",
        "text": "准备成本、补件和处理不确定性可能上升，实际变化取决于最终条文和执行说明。",
        "examples": [
          "此前获批的 L-1 或其他 I-129 续期不能仅靠旧批准保证结果；该提案也没有要求每件申请一定补件。"
        ]
      }
    ],
    "outlook": "先核对正式刊登、30 天评论窗口与最终文本；只有后续最终规则及其生效条款，才能确定何时改变实际审理要求。",
    "scenarios": [
      {
        "name": "提案进入评论",
        "headline": "现行原则继续，评估证据负担",
        "assumption": "正式刊登后进入评论，尚无生效的最终规则。",
        "effects": "雇主可评估拟议改动，但当前续期仍按现行规定审理。",
        "signals": "正式 NPRM 日期、评论截止日及解释条款。"
      },
      {
        "name": "最终删除该款",
        "headline": "资格可能逐次重新审查",
        "assumption": "最终规则删除该款并按公布的条款生效。",
        "effects": "相同事实的续期可能承受更多准备和审查，不等于自动拒绝。",
        "signals": "最终生效日、操作说明和可能影响执行的法院命令。"
      },
      {
        "name": "提案未推进或被修订",
        "headline": "现行原则继续，关注最终边界",
        "assumption": "没有最终删除规则，或最终条文保留部分尊重原则。",
        "effects": "实际审理仍取决于现行规定或最终公布的修订内容，不能把提案预览当作结果。",
        "signals": "撤回、修订或最终规则中的保留条款。"
      }
    ],
    "scope": [
      {
        "label": "主要对象",
        "text": "Form I-129 下相同当事方、相同基本事实的工作或停留延期请求。"
      },
      {
        "label": "不是所有签证",
        "text": "不能外推所有领事签证、I-539 家属延期或所有移民申请均适用同一变化。"
      },
      {
        "label": "现行授权",
        "text": "提案预览本身不终止已有批准、身份或工作许可。"
      }
    ],
    "milestones": [
      {
        "date": "2026-10-13",
        "text": "NPRM 预览公开，提议删除 8 CFR 214.1(c)(5)。"
      }
    ],
    "next": [
      {
        "date": "2026-10-14",
        "text": "预定正式刊登；仍须核对刊登版本与具体评论日期。"
      },
      {
        "date": "日期未定",
        "text": "预览要求刊登后 30 天内评论；最终规则及生效日尚未确定。"
      }
    ],
    "process": {
      "detail": "NPRM 预览已公开，等待正式刊登；OIRA 审查历史未独立核实。",
      "currentSummary": "提案预览公开，尚未改变现行审理规则",
      "waitingFor": "正式刊登、评论窗口及后续最终规则。"
    }
  },
  "en": {
    "title": "Proposed Removal of Deference to Prior Work-Petition Approvals",
    "short": "Prior-Approval Deference",
    "status": "NPRM preview public · publication scheduled October 14",
    "effectLabel": "Not in effect · Current rules unchanged",
    "agency": "DHS / USCIS",
    "documentId": "1615-AD26 · FR Doc. 2026-20941",
    "tldr": "DHS proposes removing general deference to prior eligibility approvals in Form I-129 requests involving the same parties and underlying facts, allowing renewed eligibility review. The proposal preview is public but not in effect.",
    "tags": [
      "Work-petition renewals",
      "I-129",
      "Eligibility review"
    ],
    "summary": "DHS proposes removing 8 CFR 214.1(c)(5), which generally requires USCIS to defer to prior eligibility determinations in Form I-129 requests involving the same parties and underlying facts. The October 13 NPRM preview is scheduled for October 14 publication; it is not a final rule.",
    "audience": "Nonimmigrant workers and petitioners extending employment or stay through Form I-129, including H-1B, L-1, O-1 and E or TN requests using that form.",
    "caveat": "The proposal does not automatically deny renewals or cancel existing approvals or status. Current deference already has material-error, changed-facts and new-information exceptions, and petitioners must still establish eligibility.",
    "reviewNote": "The 46-page official preview, public-inspection record and regulatory source of current deference were reviewed October 13. Formal publication has not occurred; the preview leaves the comment date as 30 days after publication, not a confirmed calendar deadline. The live Regulations.gov docket was blocked and the OIRA RIN search returned no record; complete review history, later guidance and litigation remain unverified.",
    "background": "Current 8 CFR 214.1(c)(5) generally requires deference to prior eligibility determinations for I-129 requests with the same parties and underlying facts. It does not remove the evidence burden and allows reconsideration for material error, material changes or new material information.\nRIN 1615-AD26 proposes removing and reserving that paragraph to support independent eligibility review and the burden of proof. It is separate from broader H-1B reform RIN 1615-AD00, which remains under OIRA review.",
    "teaser": "A prior approval could become a less stable foundation for a later renewal.",
    "headline": "Renewals may require more evidence; prior approval does not guarantee a future outcome.",
    "analysis": "If finalized as previewed, renewals for the same employer and job may require fuller explanations of the position and worker’s eligibility. Evidence requests, preparation time and uncertainty could increase, but the preview does not mandate denial of every renewal or establish individual denial probabilities.",
    "impacts": [
      {
        "title": "For workers: renewal may require proving eligibility again",
        "text": "A prior approval can still be submitted, but the regulatory requirement of general deference would be removed.",
        "examples": [
          "A same-employer, same-position renewal may need renewed evidence about qualifications and job duties. Publication of this preview does not end the worker’s existing H-1B."
        ]
      },
      {
        "title": "For employers: evidence and review burdens may grow",
        "text": "Preparation costs, evidence requests and uncertainty may increase, depending on final text and implementation guidance.",
        "examples": [
          "A previously approved L-1 or other I-129 renewal cannot rely on the old approval to guarantee an outcome; the proposal does not mandate an evidence request in every case."
        ]
      }
    ],
    "outlook": "First check formal publication, the 30-day comment window and final text. Only a later final rule and its effective provisions can establish when actual adjudication requirements change.",
    "scenarios": [
      {
        "name": "Proposal enters comments",
        "headline": "Current deference continues while evidence burdens are assessed",
        "assumption": "Formal publication opens comments without an effective final rule.",
        "effects": "Employers can assess the proposal; current renewals remain governed by existing regulations.",
        "signals": "Formal NPRM date, comment deadline and explanatory text."
      },
      {
        "name": "Paragraph removed by a final rule",
        "headline": "Eligibility may be reviewed anew on each request",
        "assumption": "A final rule removes the paragraph and becomes effective under its published terms.",
        "effects": "Same-facts renewals may face additional preparation and scrutiny, not automatic denial.",
        "signals": "Final effective date, operational guidance and any court orders affecting implementation."
      },
      {
        "name": "Proposal stalls or is revised",
        "headline": "Current deference continues while final boundaries remain open",
        "assumption": "No final removal rule is issued, or final text retains some deference.",
        "effects": "Adjudication remains governed by current provisions or the eventual published revision; the preview is not the outcome.",
        "signals": "Withdrawal, revisions or retained provisions in a final rule."
      }
    ],
    "scope": [
      {
        "label": "Principal coverage",
        "text": "Form I-129 employment or stay extensions involving the same parties and underlying facts."
      },
      {
        "label": "Not all visas",
        "text": "Do not extend this change to all consular visas, I-539 dependent extensions or all immigration applications."
      },
      {
        "label": "Existing authorization",
        "text": "The proposal preview does not terminate existing approvals, status or employment authorization."
      }
    ],
    "milestones": [
      {
        "date": "2026-10-13",
        "text": "NPRM preview released, proposing removal of 8 CFR 214.1(c)(5)."
      }
    ],
    "next": [
      {
        "date": "2026-10-14",
        "text": "Publication scheduled; verify the published version and exact comment date."
      },
      {
        "date": "Date unknown",
        "text": "The preview calls for comments within 30 days after publication; final text and an effective date are undetermined."
      }
    ],
    "process": {
      "detail": "The NPRM preview is public and awaits formal publication; OIRA review history was not independently verified.",
      "currentSummary": "Proposal preview public; current adjudication rules unchanged",
      "waitingFor": "Formal publication, comments and a later final rule."
    }
  }
};
