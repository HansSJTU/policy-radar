import type { PolicyContent } from '../policy-types.ts';

export const eadAutoExtension: PolicyContent = {
  "id": "ead-auto-extension",
  "path": "H-1B",
  "tone": "gray",
  "effectState": "in-effect",
  "checkedOn": "2026-10-13",
  "related": [
    "h4-ead",
    "ead-discretion"
  ],
  "process": {
    "kind": "federal-rulemaking",
    "lastCompletedStage": 5,
    "activeStage": null,
    "nextStage": null
  },
  "sources": [
    {
      "href": "https://www.govinfo.gov/content/pkg/FR-2025-10-30/pdf/2025-19702.pdf",
      "zh": "2025·10·30 已生效临时最终规则 · 原始条文",
      "en": "October 30, 2025 effective interim final rule · operative text"
    },
    {
      "href": "https://public-inspection.federalregister.gov/2026-20955.pdf",
      "zh": "10·13 最终规则预览 · 承接原规则，预定 10·14 刊登",
      "en": "October 13 final-rule preview · carries forward the IFR, scheduled October 14"
    },
    {
      "href": "https://www.federalregister.gov/api/v1/public_inspection_documents/2026-20955",
      "zh": "联邦公报 · 最终稿公开预览记录",
      "en": "Federal Register · final-rule public-inspection record"
    },
    {
      "href": "https://www.uscis.gov/eadautoextend",
      "zh": "USCIS 存档页面 · 含 2025·10·30 取消自动延期提示",
      "en": "Archived USCIS page · includes October 30, 2025 removal alert"
    }
  ],
  "zh": {
    "title": "部分 EAD 续期自动延期已取消",
    "short": "EAD 续期自动延期",
    "status": "取消自动延期已执行 · 最终稿预览公开",
    "effectLabel": "自 2025·10·30 起执行 · 保留法定例外",
    "agency": "DHS / USCIS",
    "documentId": "1615-AD05 · 2025-19702 / 2026-20955",
    "tldr": "DHS 已取消 2025 年 10 月 30 日起递交的部分 EAD 续期申请所享有的自动延期。10·13 最终稿预览原样承接该规定，预定 10·14 刊登；此前合格续期和法定例外仍须分别核对。",
    "tags": [
      "H-4 EAD",
      "绿卡等待期",
      "续期停工风险"
    ],
    "summary": "DHS 已从 2025·10·30 起取消部分 EAD 续期申请的自动延期：递交续期不再自动延长过期或即将过期卡片的效力及适用的工作授权。10·13 公开的最终稿预览不修改原临时最终规则，预定 10·14 刊登并于刊登日生效；不是明天首次取消。",
    "audience": "依赖受覆盖 EAD 续期自动延期继续工作的人员，包括符合条件的 H-4 配偶（c26）与身份调整待审人员（c9）等；不能外推所有工作许可类别。",
    "caveat": "旧界线仍是续期申请递交日 2025·10·30；此前合格申请的自动延期不被追溯取消。法定及 TPS 公告例外、STEM OPT 的独立 180 天条款、随有效身份自带的工作授权须分开核对。",
    "reviewNote": "10·13 已读取 2025 临时最终规则的适用及过渡条款、196 页最终稿预览和公开记录。USCIS 自动延期页明确标为存档，并保留取消提示及较早说明，不能把其旧表格视为所有新申请仍可延期。逐类别例外、最新 TPS 公告、完整后续诉讼及个案可否继续工作尚未全部核实；10·14 刊登版本须再核对。",
    "background": "2025·10·30 临时最终规则修改 8 CFR 274a.13：旧的最长 540 天自动延期仅保留给该日前递交、符合规定的续期申请；该日及之后递交的受覆盖续期不再因收据自动延期。\n2026·10·13 最终稿预览明确“原样承接”临时最终规则，保留原来的申请日期界线。它并不删除 H-4 配偶的 EAD 申请资格，也不是 RIN 1615-AD14 的资格撤销议程。",
    "teaser": "仍能申请 EAD，不代表续期等待期间一定能继续工作。",
    "headline": "续期收据与实际工作授权，需要分别确认。",
    "analysis": "对于仅凭这类 EAD 工作的人，旧卡到期而新卡尚未批准时，取消自动延期可能造成工作空档。影响取决于递交日期、类别、原卡期限及是否有独立授权，不能要求所有人仅凭这份最终稿预览立即停工。",
    "impacts": [
      {
        "title": "对 H-4 等依赖 EAD 的人员：可能出现授权空档",
        "text": "符合申请资格并及时递交续期，不再保证受覆盖的新续期可在旧卡到期后继续工作。",
        "examples": [
          "H-4 配偶在 2025·10·30 或之后递交受覆盖续期，不能仅以收据主张原有 540 天自动延期；旧卡仍有效时不因预览公开而失效。"
        ]
      },
      {
        "title": "对雇主与家庭：需核对过渡界线和授权依据",
        "text": "旧申请、法定例外及随身份自带的授权可能产生不同结果，不能统一处理。",
        "examples": [
          "两名 c9 续期申请人分别在界线前后递交，是否能凭旧卡与收据继续工作可能不同。E／L 配偶如有有效的随身份工作授权，也不能仅凭 EAD 到期就认定必须停工。"
        ]
      }
    ],
    "outlook": "继续核对 10·14 正式最终文本、USCIS 当前说明与相关法院命令；对工作空档的判断应回到具体类别、申请日期和独立授权，不能只看“最终规则”标题。",
    "scenarios": [
      {
        "name": "界线后递交的受覆盖续期",
        "headline": "旧卡到期后可能不能凭收据工作",
        "assumption": "续期在 2025·10·30 或之后递交，且没有适用的独立授权或例外。",
        "effects": "新授权未取得前可能出现工作空档，需核对具体到期和资格条件。",
        "signals": "续期递交日、EAD 类别、卡片期限和其他授权依据。"
      },
      {
        "name": "界线前合格申请或独立例外",
        "headline": "不能按取消自动延期一概停工",
        "assumption": "符合旧申请的延期条件，或有法定／TPS 例外、独立的随身份工作授权。",
        "effects": "是否继续获授权取决于各自条件及期限，原规则不追溯取消此前合格延期。",
        "signals": "申请收据、类别专属条件、有效 I-94 及最新法定或 TPS 公告。"
      },
      {
        "name": "最终稿正式刊登",
        "headline": "规则定稿，申请界线没有重置",
        "assumption": "最终规则按预览原样承接临时最终规则并正式刊登。",
        "effects": "现有 2025·10·30 界线继续适用，不产生明天首次取消或所有有效卡片失效的结论。",
        "signals": "正式刊登版本、后续部门说明及法院命令。"
      }
    ],
    "scope": [
      {
        "label": "日期界线",
        "text": "受覆盖续期于 2025·10·30 或之后递交；最终稿预览没有重设这条界线。"
      },
      {
        "label": "旧申请",
        "text": "此前符合条件的续期仍按原规定核对最长 540 天及其他类别限制，不保证每案都获 540 天。"
      },
      {
        "label": "保留例外",
        "text": "法律及适用 TPS 公告另有规定的延期保留；STEM OPT 180 天延期是不同条款。"
      },
      {
        "label": "不等于取消资格",
        "text": "不自动撤销有效卡片或 H-4 EAD 申请资格；E／L 随身份工作授权须单独核对。"
      }
    ],
    "milestones": [
      {
        "date": "2025-10-30",
        "text": "临时最终规则刊登并生效，建立新旧续期申请日期界线。"
      },
      {
        "date": "2025-12-01",
        "text": "临时最终规则评论期截止。"
      },
      {
        "date": "2026-10-13",
        "text": "最终稿预览公开，原样承接 2025 临时最终规则。"
      }
    ],
    "next": [
      {
        "date": "2026-10-14",
        "text": "预定刊登最终规则并于刊登日生效；保留 2025·10·30 的续期界线，须核对正式版本。"
      },
      {
        "date": "日期未定",
        "text": "跟踪后续部门说明及可能影响执行的法院命令。"
      }
    ],
    "process": {
      "detail": "取消自动延期的临时最终规则已执行；今天公开的是承接原条款的最终稿预览。",
      "currentSummary": "2025 规则已执行，最终稿预览待正式刊登",
      "waitingFor": null
    }
  },
  "en": {
    "title": "Automatic Extensions Removed for Certain EAD Renewals",
    "short": "EAD Renewal Extensions",
    "status": "Removal in force · final-rule preview public",
    "effectLabel": "In force since October 30, 2025 · statutory exceptions retained",
    "agency": "DHS / USCIS",
    "documentId": "1615-AD05 · 2025-19702 / 2026-20955",
    "tldr": "DHS has removed automatic extensions for certain EAD renewals filed on or after October 30, 2025. The October 13 final-rule preview adopts that provision unchanged, with publication scheduled October 14; earlier qualifying renewals and legal exceptions require separate checks.",
    "tags": [
      "H-4 EAD",
      "Adjustment pending",
      "Renewal work gaps"
    ],
    "summary": "Since October 30, 2025, DHS has removed automatic extensions for certain EAD renewals: filing no longer automatically extends expiring cards and applicable work authorization. The October 13 final-rule preview adopts the IFR unchanged and is scheduled for October 14 publication, effective on publication. This is not the first removal tomorrow.",
    "audience": "People relying on covered EAD-renewal extensions, including qualifying H-4 spouses (c26) and adjustment applicants (c9), among other categories; not every work-permit category.",
    "caveat": "The renewal-filing cutoff remains October 30, 2025; qualifying earlier extensions are not retroactively canceled. Statutory and TPS-notice exceptions, the separate STEM OPT 180-day provision and employment authorization incident to valid status require distinct checks.",
    "reviewNote": "The 2025 IFR’s coverage and transition terms, the 196-page final-rule preview and its public record were read October 13. The USCIS auto-extension page is explicitly archived, retaining the removal alert and older guidance; its old table does not establish extension eligibility for all new applications. Category-specific exceptions, latest TPS notices, complete later litigation and individual work eligibility were not fully verified. The October 14 published version needs another check.",
    "background": "The October 30, 2025 IFR amended 8 CFR 274a.13: the former up-to-540-day extension remains available only to qualifying renewal applications filed before that date. Covered renewals filed on or after it no longer receive automatic extensions merely through a receipt.\nThe October 13, 2026 final-rule preview adopts the IFR unchanged and retains its filing cutoff. It does not remove H-4 EAD eligibility and is separate from the RIN 1615-AD14 eligibility-rescission agenda.",
    "teaser": "Eligibility to apply for an EAD does not guarantee work authorization while a renewal is pending.",
    "headline": "A renewal receipt and actual work authorization require separate checks.",
    "analysis": "For people working only through these EADs, expiration before a renewal approval can cause a work gap without automatic extension. The result depends on filing date, category, card validity and independent authorization. The final-rule preview does not require everyone to stop work immediately.",
    "impacts": [
      {
        "title": "For EAD-dependent workers: renewal may leave an authorization gap",
        "text": "Eligibility and timely filing no longer guarantee continued work after card expiration for covered new renewals.",
        "examples": [
          "An H-4 spouse filing a covered renewal on or after October 30, 2025 cannot rely solely on the receipt for the former 540-day extension. A currently valid card is not invalidated by this preview."
        ]
      },
      {
        "title": "For employers and families: verify the cutoff and authorization basis",
        "text": "Earlier applications, legal exceptions and status-based authorization can yield different outcomes and cannot be treated uniformly.",
        "examples": [
          "Two c9 applicants filing on opposite sides of the cutoff may have different receipt-based work eligibility. An E or L spouse with valid status-based employment authorization is not necessarily required to stop work because an EAD expires."
        ]
      }
    ],
    "outlook": "Check the October 14 published final text, current USCIS guidance and relevant court orders. Work-gap assessments must use the actual category, filing date and independent authorization, rather than the final-rule headline alone.",
    "scenarios": [
      {
        "name": "Covered renewal filed after the cutoff",
        "headline": "A receipt may not authorize work after the old card expires",
        "assumption": "The renewal was filed on or after October 30, 2025 with no applicable independent authorization or exception.",
        "effects": "A work gap may occur until new authorization is obtained, subject to individual expiration and eligibility conditions.",
        "signals": "Renewal filing date, EAD category, card validity and other authorization bases."
      },
      {
        "name": "Qualifying earlier renewal or separate exception",
        "headline": "Removal does not require a blanket work stoppage",
        "assumption": "The earlier filing satisfies extension conditions, or a statutory/TPS exception or independent status-based authorization applies.",
        "effects": "Continued authorization depends on its own conditions and limits; the rule does not retroactively cancel qualifying earlier extensions.",
        "signals": "Receipt, category-specific conditions, valid I-94 and current legal or TPS notices."
      },
      {
        "name": "Final rule formally published",
        "headline": "Finalization leaves the filing cutoff intact",
        "assumption": "The published final rule adopts the IFR unchanged as previewed.",
        "effects": "The existing October 30, 2025 cutoff continues; publication does not first remove extensions tomorrow or invalidate all valid cards.",
        "signals": "Published text, subsequent agency guidance and court orders."
      }
    ],
    "scope": [
      {
        "label": "Filing cutoff",
        "text": "Covered renewals filed on or after October 30, 2025; the final preview does not reset that cutoff."
      },
      {
        "label": "Earlier applications",
        "text": "Qualifying earlier renewals remain subject to the former up-to-540-day provision and category limits; 540 days is not guaranteed in every case."
      },
      {
        "label": "Retained exceptions",
        "text": "Extensions otherwise provided by law or applicable TPS notices remain; STEM OPT’s 180-day extension uses a separate provision."
      },
      {
        "label": "Not eligibility rescission",
        "text": "Valid cards and H-4 EAD application eligibility are not automatically canceled; E/L status-based authorization requires its own check."
      }
    ],
    "milestones": [
      {
        "date": "2025-10-30",
        "text": "IFR published and effective, establishing the renewal-filing cutoff."
      },
      {
        "date": "2025-12-01",
        "text": "IFR comment period closed."
      },
      {
        "date": "2026-10-13",
        "text": "Final-rule preview released, adopting the 2025 IFR unchanged."
      }
    ],
    "next": [
      {
        "date": "2026-10-14",
        "text": "Final publication scheduled, effective on publication; the October 30, 2025 cutoff remains. Verify the published version."
      },
      {
        "date": "Date unknown",
        "text": "Track later agency guidance and any court orders affecting implementation."
      }
    ],
    "process": {
      "detail": "The IFR removing automatic extensions is already in force; today’s preview carries its provisions forward as a final rule.",
      "currentSummary": "2025 rule in force; final-rule preview awaits publication",
      "waitingFor": null
    }
  }
};
