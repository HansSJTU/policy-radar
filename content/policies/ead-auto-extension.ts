import type { PolicyContent } from '../policy-types.ts';

export const eadAutoExtension: PolicyContent = {
  "id": "ead-auto-extension",
  "path": "H-1B",
  "tone": "gray",
  "effectState": "in-effect",
  "checkedOn": "2026-11-02",
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
      },
      {
        "date": "11·16",
        "zh": "诉讼听证",
        "en": "Lawsuit hearing",
        "afterStage": 5,
        "progress": 80,
        "status": "upcoming",
        "align": "left",
        "lane": "raised"
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
    },
    {
      "href": "https://www.courtlistener.com/docket/72122041/jane-doe-1-v-united-states-department-of-homeland-security/?order_by=desc#entry-53",
      "zh": "法院 10·22 命令及 10·30 改期通知 · 第 50、53 项",
      "en": "Court’s October 22 order and October 30 scheduling notice · entries 50, 53"
    }
  ],
  "zh": {
    "title": "部分 EAD 续期自动延期已取消",
    "short": "EAD 续期自动延期",
    "status": "已执行 · 最终规则 10·14 生效",
    "effectLabel": "2025·10·30 起执行 · 法定例外仍然有效",
    "agency": "DHS / USCIS",
    "documentId": "1615-AD05 · 2025-19702 / 2026-20955",
    "tldr": "如果你靠 EAD（工卡）工作，又在 2025 年 10 月 30 日或之后递交了续期，那么旧卡一到期就得停工，等新卡批下来才能接着上班。以前递交续期后，旧卡可以自动多用一段时间（最长 540 天），这段缓冲现在没有了。10·14 的最终规则把这条规定正式定了下来，日期不变。法院 9·11 的禁令只保护起诉的七个人。法院将政府请求结束案件的听证改到 11·16。",
    "tags": [
      "H-4 EAD",
      "绿卡等待期",
      "续期停工风险"
    ],
    "summary": "EAD 就是工卡。过去，很多人只要在旧卡到期前递交续期，拿到收据后，旧卡就能自动延长最长 540 天，新卡还没批也能接着上班。2025 年 10 月 30 日起，DHS 取消了这段自动延期：这天或之后递交的相关类别续期，旧卡到期就是到期，新卡批下来之前不能工作。2026 年 10 月 14 日，最终规则正式刊登并当天生效，内容照原样保留，分界日还是 2025·10·30。在另一个案子 Jane Doe 1 v. DHS 里，法院 9·11 发出初步禁令，只保护起诉的七个人。法院将政府请求结束案件的听证改到 11·16。",
    "audience": "靠 EAD 工作、需要续卡的人。最常见的是 H-4 配偶（工卡类别 c26）和已经递交绿卡调整身份申请、正在等结果的人（类别 c9）。c26、c9 这类编号印在工卡的 Category 一栏。",
    "caveat": "先看你的续期是哪天递交的：2025·10·30 之前递交、符合条件的续期，仍按旧规则自动延期。另外几种情况照常继续：法律本身规定的延期、TPS 公告给的延期、STEM OPT 申请期间的 180 天延期，以及凭身份本身就能工作、不需要 EAD 的人（比如 E、L 签证持有人的配偶）。",
    "background": "2025 年 10 月 30 日，DHS 发布临时规则，修改了联邦法规 8 CFR 274a.13。以前，符合条件的人递交 EAD 续期后，旧卡可以自动延长最长 540 天；从这天起，只有这天之前递交、符合条件的续期还能延期，这天及以后递交的相关类别续期，拿到收据也不再自动延期。公众意见征集到 2025 年 12 月 1 日结束。\n2026 年 10 月 13 日，最终规则在联邦公报上预先公开，10 月 14 日正式刊登并当天生效（91 FR 65306）。最终规则照原样保留了临时规则，分界日仍是 2025·10·30。另一项提案 RIN 1615-AD14 打算取消 H-4 配偶申请 EAD 的资格，那是单独的一件事，现在还在提案阶段。\nJane Doe 1 v. DHS（案号 8:26-cv-00060）是几位工卡持有人起诉的案子。法院 9 月 10 日签署、9 月 11 日生效的初步禁令，只对起诉的七个人暂停 2025 年的临时规则，政府可以在官司进行期间给这七个人发 EAD。其他人仍按新规则办。法院还允许政府现在就对这个命令上诉，不用等官司打完。\n10 月 22 日，法院要求双方说明：10 月 14 日的最终规则出台后，这个案件是否还有需要法院解决的争议。10 月 30 日的排期通知把政府请求结束案件的听证和排期会议，改到 11 月 16 日美西下午 4 点（美东晚上 7 点）。届时法院将听取双方意见，决定案件接下来怎么审理。",
    "teaser": "续期还没批下来、旧卡就到期，可能得先停工。",
    "headline": "续期收据不再自动延长工卡。",
    "analysis": "影响最大的是只靠这类 EAD 工作的人。新卡在旧卡到期前批下来，一切照常；没批下来，从旧卡到期那天起就得停工，一直等到新卡到手。续期越早递交，越有机会在旧卡到期前拿到新卡。会不会停工，要看四件事：续期是哪天递交的、工卡是什么类别、旧卡哪天到期，以及有没有别的工作许可。",
    "impacts": [
      {
        "title": "对 H-4 等靠 EAD 工作的人：可能要停工一段时间",
        "text": "以前按时递交续期，基本就能一直工作到新卡下来。现在旧卡一到期，新卡没到手就不能上班。",
        "examples": [
          "小王是 H-4 配偶，靠 c26 工卡上班，旧卡明年 3 月到期，她 2025 年 12 月递交了续期。3 月之前她照常上班；到了 3 月新卡如果还没批，她就得先停工，等新卡到手再回去。按旧规则，她本来可以凭收据继续工作一段时间。"
        ]
      },
      {
        "title": "对雇主和家庭：先看递交日和工作许可从哪里来",
        "text": "同样是续期，结果可能完全不同。要看续期是在分界日之前还是之后递交的，有没有法律规定的例外，以及这个人是不是凭身份本身就能工作。",
        "examples": [
          "两个人都在等绿卡（工卡类别 c9）。一个 2025 年 10 月 1 日递交续期，另一个 11 月 1 日递交。前一个仍能凭收据按旧规则继续工作；后一个旧卡到期就得停工。",
          "E、L 签证持有人的配偶，身份本身就允许工作，不需要 EAD。他们的 EAD 到期，也可以接着上班。"
        ]
      }
    ],
    "outlook": "接下来看两件事：USCIS 会不会发更细的执行说明，以及 Jane Doe 案的后续命令，包括政府会不会上诉。对你个人来说，最要紧的是查清自己的工卡类别、续期递交日和旧卡到期日。",
    "scenarios": [
      {
        "name": "分界日之后递交的续期",
        "headline": "旧卡到期后，不能凭收据工作",
        "assumption": "续期在 2025·10·30 或之后递交，也没有别的工作许可或例外。",
        "effects": "新卡批下来之前需要停工。",
        "signals": "续期递交日、工卡类别、旧卡到期日，以及有没有别的工作许可。"
      },
      {
        "name": "分界日前递交，或有例外",
        "headline": "可以继续工作",
        "assumption": "续期在分界日前递交且符合旧规则的条件；或者属于法律、TPS 公告规定的例外；或者凭身份本身就能工作。",
        "effects": "按各自的条件和期限继续工作。",
        "signals": "续期收据、这个类别的具体条件、有效的 I-94，以及最新的法律或 TPS 公告。"
      },
      {
        "name": "最终规则已公布",
        "headline": "规则定稿，分界日不变",
        "assumption": "10·14 的最终规则照原样保留 2025 年的临时规则。",
        "effects": "2025·10·30 的分界日继续有效；手里还没到期的工卡照常有效。",
        "signals": "正式刊登的文本、USCIS 之后的说明和法院命令。"
      }
    ],
    "scope": [
      {
        "label": "分界日",
        "text": "2025·10·30 或之后递交的相关类别续期。最终规则没有改这个日期。"
      },
      {
        "label": "之前递交的续期",
        "text": "分界日前递交、符合条件的续期，仍按旧规定自动延期，最长 540 天，具体看类别。"
      },
      {
        "label": "照常有效的例外",
        "text": "法律和 TPS 公告另行规定的延期照常；STEM OPT 的 180 天延期是另一条规定，也照常。"
      },
      {
        "label": "资格不变",
        "text": "手里有效的工卡照常有效；H-4 配偶仍然可以申请 EAD；E、L 签证持有人的配偶凭身份本身就能工作。"
      }
    ],
    "milestones": [
      {
        "date": "2025-10-30",
        "text": "临时规则刊登并生效，以续期递交日划出新旧分界。"
      },
      {
        "date": "2025-12-01",
        "text": "临时规则的公众意见征集结束。"
      },
      {
        "date": "2026-09-11",
        "text": "Jane Doe 案初步禁令生效（9·10 签署），保护起诉的七个人。"
      },
      {
        "date": "2026-10-13",
        "text": "最终规则在联邦公报上预先公开，照原样保留 2025 年的临时规则。"
      },
      {
        "date": "2026-10-14",
        "text": "最终规则正式刊登并当天生效（91 FR 65306），2025·10·30 的分界日不变。"
      },
      {
        "date": "2026-10-22",
        "text": "法院要求双方说明，10·14 最终规则出台后，案件是否还有需要法院解决的争议。"
      },
      {
        "date": "2026-10-30",
        "text": "法院将政府请求结束案件的听证和排期会议改至 11·16。"
      }
    ],
    "next": [
      {
        "date": "2026-11-16",
        "text": "政府请求结束案件的听证及排期会议，美西下午 4 点／美东晚上 7 点。"
      },
      {
        "date": "日期未定",
        "text": "USCIS 的后续说明，以及 Jane Doe 案的后续命令。"
      }
    ],
    "process": {
      "detail": "取消自动延期的临时规则从 2025·10·30 起执行；10·14 的最终规则照原样定稿并生效。9·11 的初步禁令保护起诉的七个人。",
      "currentSummary": "规则已执行；11·16 听取政府结束案件的请求",
      "waitingFor": "11·16 听证后，法院决定案件接下来怎么审理。"
    }
  },
  "en": {
    "title": "Automatic Extensions Removed for Certain EAD Renewals",
    "short": "EAD Renewal Extensions",
    "status": "In force · final rule effective October 14",
    "effectLabel": "In force since October 30, 2025 · Legal exceptions still apply",
    "agency": "DHS / USCIS",
    "documentId": "1615-AD05 · 2025-19702 / 2026-20955",
    "tldr": "If you work on an EAD (work permit) and filed your renewal on or after October 30, 2025, you have to stop working when the old card expires and wait for the new one. Before, filing a renewal kept the old card valid for a while longer (up to 540 days); that cushion is gone. The October 14 final rule makes this permanent, with the same cutoff date. A September 11 court order protects only the seven people who sued. The court moved the hearing on the government’s request to end the case to November 16.",
    "tags": [
      "H-4 EAD",
      "Adjustment pending",
      "Renewal work gaps"
    ],
    "summary": "An EAD is a work permit card. It used to be that if you filed a renewal before the old card expired, the receipt kept the old card valid for up to 540 more days, so you could keep working while USCIS processed the new one. Since October 30, 2025, DHS has ended that automatic extension: for renewals in the affected categories filed on or after that date, the old card expires on its printed date and you cannot work until the new card arrives. The final rule published and effective October 14, 2026 keeps this unchanged, with the same cutoff date. In a separate case, Jane Doe 1 v. DHS, a preliminary injunction entered September 11 protects the seven people who sued. The court moved the hearing on the government’s request to end the case to November 16.",
    "audience": "People who work on an EAD and need to renew it. The most common are H-4 spouses (card category c26) and people with a pending green-card adjustment application (category c9). The category code is printed on the card under “Category.”",
    "caveat": "Check your filing date first: eligible renewals filed before October 30, 2025 keep the old automatic extension. Several other cases also continue as before: extensions written into the law, extensions granted by TPS notices, the 180-day STEM OPT extension, and people whose status itself allows work without an EAD (such as spouses of E and L visa holders).",
    "background": "On October 30, 2025, DHS issued an interim rule changing the federal regulation at 8 CFR 274a.13. Before, eligible people who filed an EAD renewal kept the old card valid for up to 540 days. From that date, only eligible renewals filed before it keep that extension; for renewals in the affected categories filed on or after it, a receipt no longer extends the card. Public comments closed on December 1, 2025.\nThe final rule was posted for public inspection in the Federal Register on October 13, 2026 and published and effective on October 14 (91 FR 65306). It keeps the interim rule unchanged, with the same October 30, 2025 cutoff. A separate proposal, RIN 1615-AD14, would end H-4 spouses’ ability to apply for an EAD; that one is still a proposal.\nJane Doe 1 v. DHS (No. 8:26-cv-00060) was brought by several EAD holders. A preliminary injunction signed September 10 and entered September 11 sets aside the 2025 interim rule for the seven people who sued, and lets the government issue them EADs while the case goes on. Everyone else follows the new rule. The court also let the government appeal this order right away instead of waiting for the end of the case.\nOn October 22, the court asked both sides to explain whether the October 14 final rule left a dispute for the court to decide in this case. An October 30 scheduling notice moved the hearing on the government’s request to end the case and the scheduling conference to November 16 at 4 p.m. Pacific (7 p.m. Eastern). The court will hear both sides on how the case should proceed.",
    "teaser": "If your renewal is still pending when the old card expires, you may have to stop working for a while.",
    "headline": "A renewal receipt no longer extends your work permit.",
    "analysis": "The people hit hardest are those who work only on one of these EADs. If the new card arrives before the old one expires, nothing changes. If it does not, you stop working on the expiration date and wait until the new card is in hand. The earlier you file, the better your chance of getting the new card in time. Whether you face a gap comes down to four things: your filing date, your card category, when the old card expires, and whether you have any other work authorization.",
    "impacts": [
      {
        "title": "For H-4 spouses and others working on an EAD: you may have to stop work for a while",
        "text": "Filing on time used to mean you could keep working until the new card arrived. Now, once the old card expires, you cannot work until the new one is in hand.",
        "examples": [
          "Wang is an H-4 spouse working on a c26 card that expires next March. She filed her renewal in December 2025. She keeps working until March; if the new card has not arrived by then, she has to stop and wait for it. Under the old rule, her receipt would have let her keep working for a while longer."
        ]
      },
      {
        "title": "For employers and families: check the filing date and where the right to work comes from",
        "text": "Two renewals can end up very differently. It depends on whether the renewal was filed before or after the cutoff, whether a legal exception applies, and whether the person’s status itself allows work.",
        "examples": [
          "Two people are both waiting on green cards (category c9). One filed a renewal on October 1, 2025; the other on November 1. The first can still keep working on the receipt under the old rule; the second has to stop when the old card expires.",
          "Spouses of E and L visa holders can work on their status alone, without an EAD. If their EAD expires, they can keep working."
        ]
      }
    ],
    "outlook": "Two things to watch: whether USCIS issues more detailed instructions, and later orders in the Jane Doe case, including whether the government appeals. For you personally, the key facts are your card category, your renewal filing date and when your old card expires.",
    "scenarios": [
      {
        "name": "Renewal filed after the cutoff",
        "headline": "No work on the receipt once the old card expires",
        "assumption": "The renewal was filed on or after October 30, 2025, with no other work authorization or exception.",
        "effects": "You stop working until the new card is approved.",
        "signals": "Your filing date, card category, card expiration and any other work authorization."
      },
      {
        "name": "Filed before the cutoff, or an exception applies",
        "headline": "You can keep working",
        "assumption": "The renewal was filed before the cutoff and meets the old rules; or a legal or TPS exception applies; or the person’s status itself allows work.",
        "effects": "Work continues under each case’s own conditions and time limits.",
        "signals": "The receipt notice, the rules for your category, a valid I-94 and current legal or TPS notices."
      },
      {
        "name": "Final rule published",
        "headline": "Rule finalized, cutoff unchanged",
        "assumption": "The October 14 final rule keeps the 2025 interim rule unchanged.",
        "effects": "The October 30, 2025 cutoff still applies; cards that have not expired stay valid.",
        "signals": "The published text, later USCIS instructions and court orders."
      }
    ],
    "scope": [
      {
        "label": "Cutoff date",
        "text": "Renewals in the affected categories filed on or after October 30, 2025. The final rule kept that date."
      },
      {
        "label": "Earlier filings",
        "text": "Eligible renewals filed before the cutoff keep the old automatic extension of up to 540 days, depending on category."
      },
      {
        "label": "Exceptions that still apply",
        "text": "Extensions given by law or by TPS notices continue; the 180-day STEM OPT extension is a separate provision and also continues."
      },
      {
        "label": "Eligibility unchanged",
        "text": "Valid cards stay valid; H-4 spouses can still apply for an EAD; spouses of E and L visa holders can work on their status alone."
      }
    ],
    "milestones": [
      {
        "date": "2025-10-30",
        "text": "The interim rule was published and took effect, drawing the line by renewal filing date."
      },
      {
        "date": "2025-12-01",
        "text": "Public comments on the interim rule closed."
      },
      {
        "date": "2026-09-11",
        "text": "Jane Doe preliminary injunction entered (signed September 10), protecting the seven people who sued."
      },
      {
        "date": "2026-10-13",
        "text": "The final rule was posted for public inspection in the Federal Register, keeping the 2025 interim rule unchanged."
      },
      {
        "date": "2026-10-14",
        "text": "The final rule was published and took effect the same day (91 FR 65306); the October 30, 2025 cutoff is unchanged."
      },
      {
        "date": "2026-10-22",
        "text": "The court asked both sides whether the October 14 final rule left a dispute for it to decide."
      },
      {
        "date": "2026-10-30",
        "text": "The court moved the hearing on the government’s request to end the case and the scheduling conference to November 16."
      }
    ],
    "next": [
      {
        "date": "2026-11-16",
        "text": "Hearing on the government’s request to end the case and scheduling conference, 4 p.m. Pacific / 7 p.m. Eastern."
      },
      {
        "date": "Date unknown",
        "text": "Further USCIS instructions and later orders in the Jane Doe case."
      }
    ],
    "process": {
      "detail": "The interim rule ending automatic extensions has applied since October 30, 2025; the October 14 final rule keeps it unchanged and is in effect. The September 11 preliminary injunction protects the seven people who sued.",
      "currentSummary": "Rule in force; hearing November 16 on the request to end the case",
      "waitingFor": "The November 16 hearing and the court’s decision on how the case proceeds."
    }
  }
};
