import type { PolicyContent } from '../policy-types.ts';

export const eadAutoExtension: PolicyContent = {
  "id": "ead-auto-extension",
  "path": "H-1B",
  "tone": "gray",
  "effectState": "in-effect",
  "checkedOn": "2026-11-01",
  "related": [
    "h4-ead",
    "ead-discretion"
  ],
  "process": {
    "kind": "federal-rulemaking",
    "lastCompletedStage": 5,
    "activeStage": null,
    "nextStage": null,
    "litigation": [
      {
        "date": "9·11",
        "zh": "七名原告获个案保护",
        "en": "Relief for seven plaintiffs",
        "afterStage": 5,
        "progress": 45,
        "status": "filed",
        "align": "right",
        "lane": "base"
      }
    ]
  },
  "sources": [
    {
      "href": "https://www.federalregister.gov/documents/2026/10/14/2026-20955/removal-of-automatic-extensions-for-certain-employment-authorization-documents",
      "zh": "Federal Register 10·14 最终规则（91 FR 65306）· 照原样定稿",
      "en": "Federal Register October 14 final rule (91 FR 65306) · interim rule kept unchanged"
    },
    {
      "href": "https://www.govinfo.gov/content/pkg/FR-2025-10-30/pdf/2025-19702.pdf",
      "zh": "2025·10·30 临时规则 · 原始条文和分界日",
      "en": "October 30, 2025 interim rule · original text and cutoff"
    },
    {
      "href": "https://www.uscis.gov/eadautoextend",
      "zh": "USCIS 存档页面 · 含 2025·10·30 取消自动延期提示",
      "en": "Archived USCIS page · includes October 30, 2025 removal alert"
    },
    {
      "href": "https://www.govinfo.gov/content/pkg/FR-2026-10-14/pdf/2026-20955.pdf",
      "zh": "GPO · 10·14 正式刊登版 PDF",
      "en": "GPO · October 14 published PDF"
    },
    {
      "href": "https://www.uscis.gov/policy-manual/volume-10-part-a-chapter-4",
      "zh": "USCIS 现行 Policy Manual · EAD 自动延期",
      "en": "Current USCIS Policy Manual · EAD automatic extensions"
    },
    {
      "href": "https://www.uscis.gov/newsroom/news-releases/under-president-trumps-leadership-uscis-takes-unprecedented-22-million-enforcement-actions",
      "zh": "USCIS 10·29 执法综述（提及取消自动延期）",
      "en": "USCIS October 29 enforcement overview (mentions ending automatic extensions)"
    },
    {
      "href": "https://www.adhikarilaw.com/wp-content/uploads/2026/09/Jane-Doe-1-v.-United-States-Department-of-Homeland-Security-8-26-cv-00060-C.D.-Cal.-Sep-11-2026-ECF-No.-46_TRO.pdf",
      "zh": "Jane Doe 案初步禁令（第 46 项，9·11 生效；保护范围见第 17 页）",
      "en": "Jane Doe preliminary injunction (entry 46, entered September 11; relief on PDF page 17)"
    },
    {
      "href": "https://www.courtlistener.com/docket/72122041/jane-doe-1-v-united-states-department-of-homeland-security/?order_by=desc",
      "zh": "Jane Doe 公开案卷",
      "en": "Jane Doe public docket"
    }
  ],
  "zh": {
    "title": "部分 EAD 续期自动延期已取消",
    "short": "EAD 续期自动延期",
    "status": "已执行 · 最终规则 10·14 生效",
    "effectLabel": "2025·10·30 起执行 · 法定例外仍然有效",
    "agency": "DHS / USCIS",
    "documentId": "1615-AD05 · 2025-19702 / 2026-20955",
    "tldr": "2025 年 10 月 30 日起递交的部分 EAD 续期，旧卡到期后不再自动延期。10·14 的最终规则照原样定稿，分界日不变。9·11 法院的初步禁令只保护起诉的七个人，对其他人无效。",
    "tags": [
      "H-4 EAD",
      "绿卡等待期",
      "续期停工风险"
    ],
    "summary": "从 2025·10·30 起，递交部分 EAD 续期后，旧卡到期就不再自动延长。10·14 刊登并生效的最终规则照原样保留这项规定，分界日不变。另一个案子 Jane Doe 1 v. DHS 的初步禁令（9·11 生效）只保护起诉的七个人，法院没有在全国范围暂停。",
    "audience": "靠 EAD 续期自动延期继续工作的人，比如 H-4 配偶（c26）、等绿卡调整身份的人（c9）。",
    "caveat": "看递交日：2025·10·30 前递交的续期，符合条件的仍按旧规则自动延期。法律规定的例外、TPS 公告的延期、STEM OPT 的 180 天延期，以及不靠 EAD、凭身份本身就能工作的情况，都不受影响。",
    "background": "2025·10·30 的临时规则修改了 8 CFR 274a.13：最长 540 天的自动延期，只留给这天之前递交、符合条件的续期；这天及以后递交的相关类别续期，拿到收据也不再自动延期。\n2026·10·14 刊登并生效的最终规则照原样保留临时规则，分界日不变。它和 RIN 1615-AD14（拟取消 H-4 配偶申请 EAD 的资格）是两回事。\n另一个案子 Jane Doe 1 v. DHS（8:26-cv-00060）：法院 9·10 签署、9·11 生效的初步禁令（第 46 项）只对起诉的七个人暂停 2025 年的临时规则，政府可以在官司期间给他们发 EAD。法院没有在全国范围暂停，并允许政府先就这个命令上诉。",
    "teaser": "续期还没批，旧卡一到期就可能得停工。",
    "headline": "续期收据不再自动延长工作授权。",
    "analysis": "只靠这类 EAD 工作的人，如果旧卡到期时新卡还没批下来，就得停工。实际影响看递交日期、EAD 类别、旧卡到期日，以及有没有别的工作许可。",
    "impacts": [
      {
        "title": "对 H-4 等靠 EAD 工作的人：可能停工",
        "text": "按时递交续期，也不能保证旧卡到期后还能继续工作。",
        "examples": [
          "H-4 配偶 2025·10·30 以后递交续期，旧卡到期后就不能凭收据继续工作；旧卡到期前照常有效。"
        ]
      },
      {
        "title": "对雇主和家庭：先看递交日和工作许可的来源",
        "text": "早递交的续期、法律例外、凭身份本身就能工作的人，结果各不相同。",
        "examples": [
          "两个 c9 申请人，一个在分界日前递交续期、一个在之后：前者仍可凭收据按旧规则延期，后者不行。E、L 签证的配偶凭身份本身就能工作，EAD 到期也可以继续上班。"
        ]
      }
    ],
    "outlook": "关注 USCIS 之后的说明和 Jane Doe 案的后续命令。自己会不会停工，看 EAD 类别、递交日期和有没有别的工作许可。",
    "scenarios": [
      {
        "name": "分界日之后递交的续期",
        "headline": "旧卡到期后不能凭收据工作",
        "assumption": "续期在 2025·10·30 或之后递交，也没有别的工作许可或例外。",
        "effects": "新卡批下来之前会停工。",
        "signals": "续期递交日、EAD 类别、旧卡到期日和其他工作许可。"
      },
      {
        "name": "分界日前递交，或有例外",
        "headline": "可以继续工作",
        "assumption": "续期符合旧规则的延期条件，或有法律／TPS 例外，或凭身份本身就能工作。",
        "effects": "按各自条件和期限继续获得授权。",
        "signals": "续期收据、该类别的具体条件、有效的 I-94，以及最新的法律或 TPS 公告。"
      },
      {
        "name": "最终规则已公布",
        "headline": "规则定稿，分界日不变",
        "assumption": "10·14 的最终规则照原样保留 2025 年的临时规则。",
        "effects": "2025·10·30 的分界日继续有效；现在有效的卡不受影响。",
        "signals": "正式刊登的文本、USCIS 之后的说明和法院命令。"
      }
    ],
    "scope": [
      {
        "label": "分界日",
        "text": "2025·10·30 或之后递交的相关类别续期；最终规则没有改这个日期。"
      },
      {
        "label": "之前递交的续期",
        "text": "分界日前递交、符合条件的续期，仍按旧规定最长延期 540 天，具体看类别。"
      },
      {
        "label": "仍然有效的例外",
        "text": "法律和 TPS 公告另行规定的延期照常；STEM OPT 的 180 天延期是另一条规定。"
      },
      {
        "label": "资格不变",
        "text": "有效的卡照常有效，H-4 配偶仍可申请 EAD；E、L 签证的配偶凭身份本身就能工作。"
      }
    ],
    "milestones": [
      {
        "date": "2025-10-30",
        "text": "临时规则刊登并生效，以递交日划出新旧分界。"
      },
      {
        "date": "2025-12-01",
        "text": "临时规则评论截止。"
      },
      {
        "date": "2026-09-11",
        "text": "Jane Doe 案初步禁令生效（9·10 签署），只保护起诉的七个人，不是全国暂停。"
      },
      {
        "date": "2026-10-13",
        "text": "最终规则预览公开，照原样保留 2025 年的临时规则。"
      },
      {
        "date": "2026-10-14",
        "text": "最终规则刊登并当天生效（91 FR 65306）；2025·10·30 的分界日不变。"
      }
    ],
    "next": [
      {
        "date": "日期未定",
        "text": "USCIS 后续说明及 Jane Doe 案后续命令。"
      }
    ],
    "process": {
      "detail": "取消自动延期的临时规则 2025·10·30 起执行；10·14 最终规则照原样定稿并生效。9·11 的初步禁令只保护起诉的七个人。",
      "currentSummary": "规则已执行；起诉的七人获个案保护",
      "waitingFor": "Jane Doe 案后续命令，以及政府是否上诉。"
    }
  },
  "en": {
    "title": "Automatic Extensions Removed for Certain EAD Renewals",
    "short": "EAD Renewal Extensions",
    "status": "In force · final rule effective October 14",
    "effectLabel": "In force since October 30, 2025 · Legal exceptions still apply",
    "agency": "DHS / USCIS",
    "documentId": "1615-AD05 · 2025-19702 / 2026-20955",
    "tldr": "For certain EAD renewals filed since October 30, 2025, the old card no longer stays valid automatically after it expires. The October 14 final rule keeps this unchanged, with the same cutoff date. A September 11 court order protects only the seven people who sued.",
    "tags": [
      "H-4 EAD",
      "Adjustment pending",
      "Renewal work gaps"
    ],
    "summary": "Since October 30, 2025, filing certain EAD renewals no longer keeps the old card valid after it expires. The final rule published and effective October 14 keeps this unchanged, with the same cutoff date. In a separate case, Jane Doe 1 v. DHS, a preliminary injunction entered September 11 protects only the seven people who sued; the court did not pause the rule nationwide.",
    "audience": "People who relied on EAD renewals being extended automatically to keep working, such as H-4 spouses (c26) and people waiting on a green-card adjustment (c9).",
    "caveat": "It depends on the filing date: eligible renewals filed before October 30, 2025 keep the old automatic extension. Exceptions in the law, TPS notice extensions, the STEM OPT 180-day extension and people whose status itself allows work without an EAD are not affected.",
    "background": "The October 30, 2025 interim rule changed 8 CFR 274a.13: the automatic extension of up to 540 days now applies only to eligible renewals filed before that date. For renewals in the affected categories filed on or after it, a receipt no longer extends the card.\nThe final rule published and effective October 14, 2026 keeps the interim rule unchanged, with the same cutoff. It is separate from RIN 1615-AD14, which would remove H-4 spouses’ ability to apply for an EAD.\nIn a separate case, Jane Doe 1 v. DHS (8:26-cv-00060), a preliminary injunction (entry 46) signed September 10 and entered September 11 sets aside the 2025 interim rule only for the seven people who sued, and lets the government give them EADs while the case goes on. The court did not pause the rule nationwide and allowed an immediate appeal of its order.",
    "teaser": "If your renewal is still pending when the old card expires, you may have to stop working.",
    "headline": "A renewal receipt no longer extends work authorization.",
    "analysis": "If you work only on one of these EADs and the old card expires before the renewal is approved, you have to stop working. How this hits you depends on your filing date, EAD category, card expiration and any other work authorization.",
    "impacts": [
      {
        "title": "For people working on an EAD: you may have to stop work",
        "text": "Filing on time no longer guarantees you can keep working after the old card expires.",
        "examples": [
          "An H-4 spouse who filed a renewal after October 30, 2025 cannot keep working on the receipt once the old card expires; until then the old card is still valid."
        ]
      },
      {
        "title": "For employers and families: check the filing date and the basis for working",
        "text": "Earlier filings, legal exceptions and people whose status itself allows work each end up differently.",
        "examples": [
          "Two c9 applicants file on either side of the cutoff: the earlier one still gets the old extension on the receipt, the later one does not. E and L spouses can work on their status alone, so they can keep working when an EAD expires."
        ]
      }
    ],
    "outlook": "Watch for USCIS guidance and later Jane Doe orders. Whether you face a gap depends on your category, filing date and other authorization.",
    "scenarios": [
      {
        "name": "Renewal filed after the cutoff",
        "headline": "No work on the receipt after the old card expires",
        "assumption": "The renewal was filed on or after October 30, 2025, with no other work authorization or exception.",
        "effects": "Work stops until the new card is approved.",
        "signals": "Renewal filing date, EAD category, card expiration and any other work authorization."
      },
      {
        "name": "Filed before the cutoff, or an exception applies",
        "headline": "Work can continue",
        "assumption": "The renewal meets the old extension rules, or a legal/TPS exception applies, or the person’s status itself allows work.",
        "effects": "Authorization continues under its own conditions and limits.",
        "signals": "The receipt, rules for the category, a valid I-94 and current legal or TPS notices."
      },
      {
        "name": "Final rule published",
        "headline": "Rule finalized, cutoff unchanged",
        "assumption": "The October 14 final rule keeps the 2025 interim rule unchanged.",
        "effects": "The October 30, 2025 cutoff still applies; currently valid cards are unaffected.",
        "signals": "The published text, later USCIS guidance and court orders."
      }
    ],
    "scope": [
      {
        "label": "Cutoff date",
        "text": "Renewals in the affected categories filed on or after October 30, 2025; the final rule did not change that date."
      },
      {
        "label": "Earlier filings",
        "text": "Eligible renewals filed before the cutoff keep the old extension of up to 540 days, depending on category."
      },
      {
        "label": "Exceptions that still apply",
        "text": "Extensions given by law or TPS notices still apply; the STEM OPT 180-day extension is a separate provision."
      },
      {
        "label": "Eligibility unchanged",
        "text": "Valid cards stay valid and H-4 spouses can still apply for an EAD; E and L spouses can work on their status alone."
      }
    ],
    "milestones": [
      {
        "date": "2025-10-30",
        "text": "The interim rule was published and took effect, setting the filing-date cutoff."
      },
      {
        "date": "2025-12-01",
        "text": "Comments on the interim rule closed."
      },
      {
        "date": "2026-09-11",
        "text": "Jane Doe preliminary injunction entered (signed September 10): it protects only the seven people who sued, not everyone."
      },
      {
        "date": "2026-10-13",
        "text": "Final-rule preview released, keeping the 2025 interim rule unchanged."
      },
      {
        "date": "2026-10-14",
        "text": "Final rule published and effective the same day (91 FR 65306); the October 30, 2025 cutoff is unchanged."
      }
    ],
    "next": [
      {
        "date": "Date unknown",
        "text": "USCIS guidance and later Jane Doe orders."
      }
    ],
    "process": {
      "detail": "The interim rule ending automatic extensions has applied since October 30, 2025; the October 14 final rule keeps it unchanged and is in effect. The September 11 preliminary injunction protects only the seven people who sued.",
      "currentSummary": "Rule in force; seven plaintiffs individually protected",
      "waitingFor": "Later Jane Doe orders and whether the government appeals."
    }
  }
};
