import type { PolicyContent } from '../policy-types.ts';

export const durationStatus: PolicyContent = {
  "id": "duration-status",
  "path": "F-1",
  "tone": "amber",
  "effectState": "not-in-effect",
  "checkedOn": "2026-11-19",
  "related": [
    "cpt-guidance",
    "opt-fee",
    "grace-period"
  ],
  "process": {
    "kind": "federal-rulemaking",
    "lastCompletedStage": 4,
    "activeStage": null,
    "nextStage": 5,
    "litigation": [
      {
        "date": "8·18",
        "zh": "提起诉讼",
        "en": "Lawsuit filed",
        "afterStage": 4,
        "progress": 53,
        "status": "filed",
        "align": "left",
        "lane": "base"
      },
      {
        "date": "9·02",
        "zh": "政府反对",
        "en": "Government opposes",
        "afterStage": 4,
        "progress": 70,
        "status": "filed",
        "align": "left",
        "lane": "raised"
      },
      {
        "date": "9·03",
        "zh": "听证，未当庭裁定",
        "en": "Hearing; no ruling yet",
        "afterStage": 4,
        "progress": 80,
        "status": "filed",
        "align": "right",
        "lane": "base"
      },
      {
        "date": "9·14",
        "zh": "全国暂缓",
        "en": "Nationwide stay",
        "afterStage": 4,
        "progress": 90,
        "status": "filed",
        "align": "right",
        "lane": "raised"
      },
      {
        "date": "10·30",
        "zh": "双方请求判决",
        "en": "Both sides seek judgment",
        "afterStage": 4,
        "progress": 98,
        "status": "filed",
        "align": "right",
        "lane": "base"
      },
      {
        "date": "11·02",
        "zh": "政府交回复",
        "en": "Government reply filed",
        "afterStage": 4,
        "progress": 99,
        "status": "filed",
        "align": "left",
        "lane": "raised"
      },
      {
        "date": "11·16",
        "zh": "法院撤销整项规则",
        "en": "Court vacates entire rule",
        "afterStage": 4,
        "progress": 100,
        "status": "filed",
        "align": "right",
        "lane": "base"
      }
    ]
  },
  "sources": [
    {
      "href": "https://www.presidentsalliance.org/wp-content/uploads/2026/11/2026-11-16-District-Judge-dckt-73_0.pdf",
      "zh": "法院 11·16 撤销整项 D/S 规则的命令（第 73 项；原告托管法院原文）",
      "en": "Court’s November 16 order vacating the entire D/S rule (entry 73; plaintiff-hosted court original)"
    },
    {
      "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.74.0.pdf",
      "zh": "法院 11·16 结案命令（第 74 项）",
      "en": "Court’s November 16 order closing the case (entry 74)"
    },
    {
      "href": "https://www.nafsa.org/sites/default/files/media/document/District-Judge-Julia-E-Kobick-Memorandum-and-Order-on-Plaintiffs-Motion-for-a-Preliminary-Injuntion-11-17.pdf",
      "zh": "CPT 案 11·17 全国暂缓与初步禁令",
      "en": "CPT case: November 17 nationwide stay and preliminary injunction"
    },
    {
      "href": "https://www.federalregister.gov/documents/2026/07/17/2026-14439/establishing-a-fixed-time-period-of-admission-and-an-extension-of-stay-procedure-for-nonimmigrant",
      "zh": "2026 最终规则",
      "en": "2026 final rule"
    },
    {
      "href": "https://www.federalregister.gov/documents/2025/08/28/2025-16554/establishing-a-fixed-time-period-of-admission-and-an-extension-of-stay-procedure-for-nonimmigrant",
      "zh": "2025 拟议规则",
      "en": "2025 proposed rule"
    },
    {
      "href": "https://forms.mad.uscourts.gov/courtlist.html",
      "zh": "法院官方日历",
      "en": "Official court calendar"
    },
    {
      "href": "https://www.courtlistener.com/docket/74661796/feed/",
      "zh": "法院公开案卷摘要",
      "en": "Public court docket feed"
    },
    {
      "href": "https://www.nafsa.org/sites/default/files/media/document/PI%20Hearing%20Court%20Transcript.pdf#page=70",
      "zh": "9·03 官方庭审记录（NAFSA 托管；第 70 页）",
      "en": "September 3 official hearing transcript (NAFSA-hosted; p. 70)"
    },
    {
      "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.46.1.pdf",
      "zh": "政府 9·02 反对意见",
      "en": "Government’s September 2 opposition"
    },
    {
      "href": "https://www.uscardforum.com/t/topic/431784",
      "zh": "美卡论坛规则讨论",
      "en": "USCardForum rule discussion"
    },
    {
      "href": "https://www.uscardforum.com/t/topic/525892",
      "zh": "美卡论坛诉讼讨论",
      "en": "USCardForum litigation discussion"
    },
    {
      "href": "https://oiss.rice.edu/dhs-final-rule-elimination-duration-status-new-academic-mobility-restrictions",
      "zh": "Rice：退博、硕士 OPT 和学位限制说明",
      "en": "Rice: leaving a PhD, master’s OPT and degree limits"
    },
    {
      "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.51.0.pdf",
      "zh": "9·14 初步禁令正文（第 51 项）",
      "en": "September 14 preliminary injunction (entry 51)"
    },
    {
      "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.50.0.pdf",
      "zh": "9·14 法院意见（第 50 项；全国范围见第 46—48 页）",
      "en": "September 14 opinion (entry 50; nationwide scope at pp. 46–48)"
    },
    {
      "href": "https://www.durbin.senate.gov/newsroom/press-releases/durbin-blumenthal-padilla-whitehouse-jayapal-raskin-introduce-cra-resolution-of-disapproval-regarding-regulation-that-changes-how-international-students-and-journalists-maintain-immigration-status",
      "zh": "Durbin 官网 · 9·14 CRA 决议公告",
      "en": "Senator Durbin: September 14 CRA resolution announcement"
    },
    {
      "href": "https://www.durbin.senate.gov/download/cra-on-student-visa-rule&download=1",
      "zh": "S.J.Res.213 决议文本（参议员官网）",
      "en": "S.J.Res.213 text (senator’s website)"
    },
    {
      "href": "https://www.govinfo.gov/app/details/BILLS-119sjres213pcs",
      "zh": "GovInfo · S.J.Res.213 列入参议院待议清单（9·17）",
      "en": "GovInfo · S.J.Res.213 as placed on the Senate calendar (September 17)"
    },
    {
      "href": "https://www.govinfo.gov/app/details/BILLS-119hjres215ih",
      "zh": "GovInfo · H.J.Res.215 众议院版本",
      "en": "GovInfo · H.J.Res.215 (House version)"
    },
    {
      "href": "https://www.govinfo.gov/content/pkg/CCAL-119scal-2026-10-09/html/CCAL-119scal-2026-10-09-pt5.htm",
      "zh": "10·09 官方参议院日历 · S.J.Res.213",
      "en": "October 9 official Senate calendar · S.J.Res.213"
    },
    {
      "href": "https://clearinghouse.net/case/48393/",
      "zh": "地区法院公开案卷",
      "en": "District court public docket"
    },
    {
      "href": "https://www.govinfo.gov/content/pkg/CCAL-119scal-2026-10-13/html/CCAL-119scal-2026-10-13-pt5.htm",
      "zh": "10·13 参议院日历 · S.J.Res.213 第 668 号",
      "en": "October 13 Senate calendar · S.J.Res.213, No. 668"
    },
    {
      "href": "https://www.uscis.gov/i-539",
      "zh": "USCIS I-539 页面（含暂缓说明）",
      "en": "USCIS I-539 page (with stay notice)"
    },
    {
      "href": "https://www.uscis.gov/i-765",
      "zh": "USCIS I-765 页面（含暂缓说明）",
      "en": "USCIS I-765 page (with stay notice)"
    },
    {
      "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.61.0.pdf",
      "zh": "地区法院 10·16 排期命令（第 61 项）",
      "en": "District court October 16 scheduling order (entry 61)"
    },
    {
      "href": "https://www.courtlistener.com/docket/74661796/presidents-alliance-on-higher-education-and-immigration-v-united-states/?order_by=desc#entry-64",
      "zh": "第 64 项 · 10·23 排期命令",
      "en": "Entry 64 · October 23 scheduling order"
    },
    {
      "href": "https://www.courtlistener.com/docket/74908049/feed/",
      "zh": "第一巡回法院 26-2112 公开案卷",
      "en": "First Circuit 26-2112 public docket"
    },
    {
      "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.66.0.pdf",
      "zh": "政府 10·30 判决请求（第 66 项）",
      "en": "Government October 30 motion for judgment (entry 66)"
    },
    {
      "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.68.0.pdf",
      "zh": "原告 10·30 判决请求（第 68 项）",
      "en": "Plaintiffs’ October 30 motion for judgment (entry 68)"
    },
    {
      "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.69.0.pdf",
      "zh": "原告 10·30 补充意见 · 第 69 项",
      "en": "Plaintiffs’ October 30 supplemental memorandum · entry 69"
    },
    {
      "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.70.0.pdf",
      "zh": "政府 11·02 回复 · 第 70 项",
      "en": "Government November 2 reply · entry 70"
    },
    {
      "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.71.0.pdf",
      "zh": "原告 11·02 回应 · 第 71 项",
      "en": "Plaintiffs’ November 2 response · entry 71"
    },
    {
      "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.72.0.pdf",
      "zh": "政府 11·06 补交行政记录目录及摘录的通知 · 第 72 项",
      "en": "Government’s November 6 notice filing record index and excerpts · entry 72"
    }
  ],
  "zh": {
    "title": "D/S 定期停留规则被法院撤销",
    "short": "D/S 固定期限",
    "searchTitle": "F-1 D/S 新规被撤销：固定期限和学业限制均作废",
    "searchDescription": "法院 11·16 撤销整项 D/S 定期停留规则，并依判决结案。F-1、J-1 继续适用 D/S，固定期限、额外延期和学业限制均作废。政府仍可上诉。",
    "status": "法院 11·16 撤销整项规则并结案",
    "effectLabel": "已被法院撤销 · D/S 继续适用",
    "agency": "DHS / ICE",
    "documentId": "最终规则 2026-14439",
    "tldr": "法院 11·16 判原告胜诉，撤销 DHS 整项 D/S 最终规则。规则原本要给 F-1、J-1 等身份设置固定停留期限，并增加延期手续、限制转学和换学位。现在继续按 D/S 停留：维持身份、按规定学习或参加获准活动，就按现行规则留在美国。法院同日依该判决发出结案命令。",
    "tags": [
      "F-1",
      "CPT",
      "OPT"
    ],
    "summary": "麻省联邦法院 11·16 根据双方提交的书面材料作出判决：原告胜诉，整项 D/S 最终规则被撤销，也就是失去法律效力。这比 9 月先推迟生效更进一步。法官认为 DHS 没有合理衡量成本、收益和 SEVIS 替代方案，限制学生选择学业路径也超出法律授权。现行 D/S 制度继续适用。法院同日依该判决发出结案命令，结束地区法院的案件。",
    "audience": "F、J、I 签证持有人及其家属、学校和雇主。整项规则被撤销，现行制度在全国继续适用。",
    "caveat": "政府仍可就最终判决上诉并申请暂停执行判决。现有撤销命令继续有效。CPT 案另于 11·17 获得全国暂缓，各校正按该命令调整流程。",
    "background": "先说新规是什么。现在 F-1 学生入境时，I-94 上写的是 D/S，意思是只要你在按规定读书、维持身份，就可以一直待下去，没有固定的截止日。DHS 2025 年 8 月提出、2026 年 7 月 17 日发布最终规则（2026-14439），要把它改成固定的停留期限：到期还没读完，要另外向移民局申请延期；同时限制转学和中途换学位层级。新规原定 9 月 15 日生效。\n再说官司。8 月 18 日，一批高校和组织在麻省联邦法院起诉。9 月 14 日美东下午 4:55，法院发出初步禁令：在全国范围推迟整项新规生效，并禁止 DHS/ICE 执行，直到法院另有命令或作出最终判决。原定 9 月 15 日的生效日因此停止适用。法院意见第 46—48 页写明这项保护适用于全国，不只是起诉学校的学生；第 42 页认定新规“武断且任意”，这是《行政程序法》（APA）下判断规则违法的常用标准，意思是政府没有给出合理的理由。\n政府 9 月 30 日向第一巡回上诉法院上诉（案号 26-2112），并获准加快审理：法院当时把政府上诉书和附录的截止日定为 11 月 9 日（附录是把地区法院的关键文件汇编给上诉法院），原告收到后 30 天内答辩，政府再在 10 天内回复。上诉期间暂缓继续有效。\n地区法院同时在推进最终判决。法院排定书面程序后，政府 10 月 23 日交出行政记录，也就是 DHS 制定新规时依据的全部材料。10 月 30 日双方都请求直接判决。原告的补充意见认为，DHS 没有好好考虑 SEVIS 系统已经能做到的追踪，限制转学和换学位也违法，应该撤销整项新规。11 月 2 日政府交了最后一轮回复，主张 SEVIS 替代不了新规要求的定期审查、DHS 有权规定停留期限。\n原告 11 月 2 日也回应了政府的判决请求。他们认为 DHS 没有充分衡量新规的成本和收益，也没有充分考虑用 SEVIS 系统加强管理等负担更小的办法。原告还主张，DHS 忽略了重要的公众意见，给这项复杂新规的评论期只有 32 天，时间太短。他们请求法院驳回政府的判决请求，并撤销整项新规。这些请求在 11·16 判决前交由法院决定。\n国会方面，参议员 Durbin 等 9 月 14 日依据《国会审查法》（CRA）提出推翻新规的决议 S.J.Res.213，众议院版本是 H.J.Res.215。9 月 17 日 S.J.Res.213 列入参议院待议清单（第 668 号），还没有表决。要生效，须两院都通过并经总统签署，或者国会推翻总统否决。\n11 月 6 日，政府补交了此前判决请求引用的行政记录目录和摘录。这些是政府制定规则时使用、现在交给法官审阅的材料。全国暂缓继续有效。\n11 月 16 日，法院根据双方提交的书面材料判原告胜诉、政府败诉，并撤销整项规则。法院沿用 9 月意见中的理由，还认定 DHS 没有充分考虑加强现有 SEVIS 管理这一替代方案，限制转学、联合学位和同级学位等学业选择也超出法律授权。法官拒绝政府“把规则发回补充说明但保留规则”的请求，选择让整项规则失去法律效力。现行 D/S 制度继续适用。\n11 月 16 日，法院还依照同日判决发出结案命令，结束地区法院的案件。整项规则被撤销的判决继续有效。",
    "teaser": "法院已撤销整项规则，现行 D/S 照旧。",
    "headline": "D/S 新规已被法院撤销，现行制度继续适用。",
    "keyPoint": {
      "label": "先看这一点",
      "text": "下面三项是被撤销规则原本要带来的变化。**这些要求已随整项规则作废**，现行 D/S 制度继续适用。"
    },
    "analysis": "我们的判断：这次判决同时撤销固定停留期限、额外延期手续和学业限制，对准备转学、读第二个学位或长期博士项目的学生尤其重要。学生继续按现行规则维持身份并办理所需工作许可。后续主要看政府是否上诉，以及法院是否发出新的命令。",
    "impacts": [
      {
        "title": "还没毕业，获准停留期限却先到了怎么办？",
        "text": "研究和论文不一定能按时完成。如果要另外申请延期，准备材料和等审批的时间都得算进学业计划。",
        "examples": [
          "小王博士还要一年才能写完论文，学校也同意他延期毕业。但新规下，合法停留有固定的到期日；如果新的毕业时间晚于这个日期，他还得另外向移民局申请延长。学校同意延期，不会自动延长他的合法停留。"
        ]
      },
      {
        "title": "毕业后申请 OPT，可能要同时办理身份延期",
        "text": "新规下，申请 OPT 通常还要同时递交 I-539 申请延长停留。两者能不能衔接，会影响实际入职时间；新规生效前已经是 D/S 的人，适用单独的过渡规定。",
        "examples": [
          "小林五月毕业，打算七月用 OPT 入职。新规下，申请 OPT 和申请延长停留通常要一起办：一个管能不能工作，一个管能在美国待多久，两件事都得安排好。新规生效后的头六个月有过渡安排，那段时间不是每个人都要同时办。"
        ]
      },
      {
        "title": "想再读一个硕士或中途转学，可能会受限制",
        "text": "新规禁止研究生在读期间换学位层级，也限制中途转学；读同级或更低学位的限制，只算新规生效后拿到的学位。这些限制先卡住学生身份，依赖身份的 OPT 和 CPT 也就跟着卡住。",
        "examples": [
          "小陈在读博士，想中途退出、拿个硕士学位再用 OPT 工作。新规禁止在读期间换学位层级。按 Rice 的解释，学校可以发硕士学位，但不能在 SEVIS 里把他的记录从博士改成硕士；记录改不了，就不能凭这个硕士申请 OPT。手里有毕业证也没用。",
          "假设小李在新规生效后拿到美国硕士学位，OPT 期间没抽中 H-1B，想再读一个硕士、用 Day 1 CPT 边读边工作。新规不允许用同级或更低学位取得或维持 F-1 身份，所以他连第二个硕士的学生身份都办不下来，更谈不上 CPT。这条限制只计算新规生效后拿到的学位，之前拿的不受影响。"
        ],
        "source": {
          "label": "依据：Rice 对硕士 OPT 和学位限制的解释",
          "href": "https://oiss.rice.edu/dhs-final-rule-elimination-duration-status-new-academic-mobility-restrictions"
        }
      }
    ],
    "outlook": "接下来看政府是否上诉最终判决、是否申请暂停执行判决，以及法院如何处理此前针对 9 月临时命令的上诉。",
    "scenarios": [
      {
        "name": "撤销命令继续有效",
        "headline": "D/S 制度照旧",
        "assumption": "法院维持 11·16 撤销整项规则的判决。",
        "effects": "按现行停留、转学和学位规定办理。",
        "signals": "法院后续命令和政府的执行通知。"
      },
      {
        "name": "政府上诉最终判决",
        "headline": "上诉法院审查判决",
        "assumption": "政府就 11·16 判决另行上诉。",
        "effects": "撤销命令继续有效；如法院后来批准暂停执行或改判，再按新命令安排。",
        "signals": "上诉文件、暂停执行申请及法院裁定。"
      },
      {
        "name": "政府重新制定规则",
        "headline": "新的规则程序可能开始",
        "assumption": "DHS 另行提出符合判决要求的新规则。",
        "effects": "学生和学校可就新提案提交意见。",
        "signals": "新的正式提案和公众评论期。"
      }
    ],
    "scope": [
      {
        "label": "全国范围",
        "text": "法院撤销整项最终规则，现行 D/S 制度在全国继续适用。"
      },
      {
        "label": "持续期限",
        "text": "撤销命令继续有效，后续变化由法院新的命令决定。"
      },
      {
        "label": "CPT 指引",
        "text": "D/S 命令撤销的是定期停留规则（2026-14439）。另一个案件的 11·17 命令已在全国暂停 8 月 CPT 指引。"
      }
    ],
    "milestones": [
      {
        "date": "2025-08-28",
        "text": "DHS 发布拟议规则。"
      },
      {
        "date": "2026-07-17",
        "text": "最终规则发布。"
      },
      {
        "date": "2026-08-18",
        "text": "高校联盟等在麻省联邦法院起诉。"
      },
      {
        "date": "2026-09-02",
        "text": "政府提交反对意见，请求法院不要暂缓新规。"
      },
      {
        "date": "2026-09-03",
        "text": "法院听取双方辩论，没有当庭裁定。"
      },
      {
        "date": "2026-09-14",
        "text": "法院发出初步禁令，在全国范围推迟整项新规生效并禁止执行。"
      },
      {
        "date": "2026-09-14",
        "text": "议员提出推翻新规的决议（参议院 S.J.Res.213、众议院 H.J.Res.215）。"
      },
      {
        "date": "2026-09-17",
        "text": "S.J.Res.213 列入参议院待议清单（第 668 号）。"
      },
      {
        "date": "2026-09-30",
        "text": "DHS/ICE 等向第一巡回上诉法院上诉（案号 26-2112）；暂缓继续有效。"
      },
      {
        "date": "2026-10-02",
        "text": "法院召开进度会议，要求双方 10·09 前提出下一步安排。"
      },
      {
        "date": "2026-10-09",
        "text": "双方提交方案：政府请求暂停地区法院的审理、等上诉结果；原告反对，要求尽快判决撤销新规。"
      },
      {
        "date": "2026-10-16",
        "text": "法院排定日程：10·23 交行政记录，10·26 交判决请求，11·02 交回复。"
      },
      {
        "date": "2026-10-19",
        "text": "第一巡回上诉法院排定：政府上诉书和附录 11·09 到期。"
      },
      {
        "date": "2026-10-23",
        "text": "法院把判决请求的期限延到 10·30，回复仍是 11·02；政府交出行政记录。"
      },
      {
        "date": "2026-10-30",
        "text": "双方都请求法院直接判决。"
      },
      {
        "date": "2026-11-02",
        "text": "政府交最后一轮回复，要求判政府赢；退一步，请求只把规则发回 DHS、保留新规，并缩小保护范围。"
      },
      {
        "date": "2026-11-02",
        "text": "原告回应政府的判决请求，主张成本收益分析、SEVIS 替代方案和公众评论程序有问题，请求撤销整项新规。"
      },
      {
        "date": "2026-11-06",
        "text": "政府补交此前判决请求引用的行政记录目录和摘录，供法院审阅。"
      },
      {
        "date": "2026-11-16",
        "text": "法院根据书面材料判原告胜诉，撤销整项 D/S 最终规则；现行 D/S 制度继续适用。"
      },
      {
        "date": "2026-11-16",
        "text": "法院依照同日原告胜诉、整项规则被撤销的判决发出结案命令。"
      }
    ],
    "next": [
      {
        "date": "日期未定",
        "text": "政府是否就最终判决上诉、申请暂停执行判决，以及法院对旧上诉的后续安排。"
      }
    ],
    "process": {
      "detail": "法院 11·16 根据书面材料判原告胜诉，撤销整项最终规则。固定期限、额外延期和学业限制均失去法律效力，现行 D/S 制度继续适用。",
      "currentSummary": "法院已撤销整项规则，地区法院已结案",
      "waitingFor": "政府是否上诉最终判决，以及后续法院命令。"
    }
  },
  "en": {
    "title": "Court Vacates the D/S Fixed-Stay Rule",
    "short": "D/S Fixed Admission Period",
    "searchTitle": "Duration of Status Rule Vacated: F-1 Students Stay on D/S",
    "searchDescription": "The district court vacated the entire D/S rule and closed the case November 16. F-1 and J-1 students continue under D/S; fixed stays, extra extensions and study limits are set aside. The government can appeal.",
    "status": "Court vacated entire rule and closed case November 16",
    "effectLabel": "Vacated by the court · D/S continues",
    "agency": "DHS / ICE",
    "documentId": "Final Rule 2026-14439",
    "tldr": "On November 16, the court ruled for the plaintiffs and vacated DHS’s entire D/S final rule. The rule would have set fixed stay periods for F-1, J-1 and other categories, added extension filings and restricted transfers and degree changes. D/S continues: students who maintain status and study or undertake authorized activities follow the existing stay rules. The court issued an order closing the case the same day.",
    "tags": [
      "F-1",
      "CPT",
      "OPT"
    ],
    "summary": "On November 16, the federal district court in Massachusetts decided the case on the written record for the plaintiffs and vacated the entire D/S final rule, removing its legal effect. This goes further than September’s temporary postponement. The judge found inadequate analysis of costs, benefits and SEVIS alternatives, and held that restrictions on academic choices exceeded statutory authority. The existing D/S framework continues. A separate order that day closed the district-court case in accordance with the ruling.",
    "audience": "F, J and I visa holders, their families, schools and employers. The entire rule is vacated, and the existing framework continues nationwide.",
    "caveat": "The government can appeal the final judgment and ask to pause its effect. The vacatur remains in force. A separate November 17 order stayed the CPT guidance nationwide; schools are adjusting procedures under that order.",
    "background": "First, what the rule does. Today, when an F-1 student enters the U.S., the I-94 says D/S: as long as you study by the rules and keep your status, you can stay, with no fixed end date. DHS proposed a change in August 2025 and published the final rule (2026-14439) on July 17, 2026. It would set a fixed period of stay instead: if you are still studying when it runs out, you apply to USCIS for an extension. It also limits transfers and switching degree level mid-program. It was set to start September 15.\nThen, the lawsuit. On August 18, a group of universities and organizations sued in federal court in Massachusetts. At 4:55 p.m. ET on September 14, the court issued a preliminary injunction: it postponed the entire rule nationwide and barred DHS/ICE from enforcing it until the court orders otherwise or issues a final ruling. The September 15 start date is off. The court’s opinion (pp. 46–48) grants nationwide relief, not just relief for students at the schools that sued, and page 42 finds the rule “arbitrary and capricious,” the usual Administrative Procedure Act (APA) test for an unlawful rule, meaning the government did not give adequate reasons. At that stage the court paused the rule but did not permanently vacate it (strike it down for good); the November 16 ruling later resolved that question.\nThe government appealed to the First Circuit on September 30 (No. 26-2112) on a fast track: the court set November 9 as the deadline for its brief and appendix (the appendix collects the key district-court documents for the appeals court), plaintiffs answer within 30 days of receiving it, and the government replies within 10 days after that. The pause stays in place during the appeal.\nThe district court is moving toward a final ruling at the same time. After it set a written schedule, the government turned over the administrative record on October 23, meaning all the material DHS relied on to write the rule. On October 30 both sides asked the court to decide the case on the papers. Plaintiffs’ supplemental memorandum argues that DHS ignored what the SEVIS system can already track, that the transfer and degree-change limits are unlawful, and that the whole rule should be struck down. On November 2 the government filed its final reply, arguing that SEVIS cannot replace the periodic review the rule requires and that DHS may set periods of stay.\nPlaintiffs also responded to the government on November 2. They argue that DHS did not adequately weigh the rule’s costs and benefits or consider less burdensome options such as improving oversight through SEVIS. They also argue that DHS disregarded significant public comments and allowed only 32 days for comments on a complex rule, too little time. They ask the court to deny the government’s request for judgment and strike down the whole rule. These requests were before the court ahead of its November 16 decision.\nIn Congress, Senator Durbin and colleagues introduced S.J.Res.213 on September 14 to overturn the rule under the Congressional Review Act (CRA); the House version is H.J.Res.215. On September 17 S.J.Res.213 was placed on the Senate calendar (No. 668); there has been no vote. It would take effect only if both chambers pass it and the President signs it, or Congress overrides a veto.\nOn November 6, the government filed an index and excerpts of the administrative record cited in its earlier request for judgment. These are materials the government used in making the rule, now submitted for the judge to review. The nationwide stay remains in force.\nOn November 16, the court decided the case on the written record for the plaintiffs and against the government, vacating the entire rule. It adopted its September reasoning and also held that DHS failed to consider stronger use of existing SEVIS oversight and exceeded its authority by restricting transfers, joint degrees and same-level degrees. The judge rejected the government’s request to send the rule back for a fuller explanation while leaving it in place, and instead removed the entire rule’s legal effect. The existing D/S framework continues.\nOn November 16, the court also issued an order closing the district-court case in accordance with that day’s ruling. The judgment vacating the entire rule remains in force.",
    "teaser": "Entire rule vacated; current D/S continues.",
    "headline": "The D/S rule has been vacated; the existing framework continues.",
    "analysis": "Our view: the ruling sets aside fixed stay periods, extra extension filings and academic restrictions together, which especially matters for transfers, second degrees and long doctoral programs. Students continue maintaining status and obtaining any required work authorization under existing rules. Next, watch for a government appeal and any further court orders.",
    "keyPoint": {
      "label": "Read this first",
      "text": "The three items below describe what the vacated rule would have done. **These requirements were set aside with the entire rule**, and the existing D/S framework continues."
    },
    "impacts": [
      {
        "title": "Still studying when your permitted stay runs out?",
        "text": "Research and dissertations do not always finish on schedule. If you have to apply separately to extend your stay, preparing the paperwork and waiting for approval become part of your academic plan.",
        "examples": [
          "Wang’s school lets him take another year to finish his PhD. Under the new rule, his permitted stay would have a fixed end date; if graduation falls after it, he would also have to ask USCIS for an extension. The school’s approval does not extend his immigration stay."
        ]
      },
      {
        "title": "Applying for OPT may also mean filing to extend your stay",
        "text": "Under the new rule, applying for OPT would usually also mean filing an I-539 to extend your stay. Whether the two line up affects your start date; people already on D/S when the rule starts would follow separate transition rules.",
        "examples": [
          "Lin graduates in May and plans to start work on OPT in July. Under the new rule, the OPT application and the stay extension would usually go together: one covers working, the other how long she can stay. For the first six months after the rule starts, a transition rule means not everyone has to file both at once."
        ]
      },
      {
        "title": "Want a second master’s or to transfer? There would be limits",
        "text": "The rule bars graduate students from switching degree level mid-program and limits transfers; the ban on enrolling at the same or a lower level counts only degrees earned after the rule starts. These limits block student status first, and the OPT or CPT that depends on it goes with it.",
        "examples": [
          "Chen wants to leave a PhD, take a master’s and use it for OPT. The rule bars switching degree level mid-program. Rice explains that it can award the master’s but cannot change his SEVIS record from doctoral to master’s, and without that change he cannot get OPT based on the master’s. Having the diploma does not help.",
          "Say Li earns a U.S. master’s after the rule starts, misses the H-1B lottery while on OPT and plans a second master’s with Day 1 CPT. The rule bars getting or keeping F-1 status through a program at the same or a lower level, so Li could not get student status for the second master’s, let alone CPT. Degrees earned before the rule starts do not count."
        ],
        "source": {
          "label": "Source: Rice on master’s OPT and degree limits",
          "href": "https://oiss.rice.edu/dhs-final-rule-elimination-duration-status-new-academic-mobility-restrictions"
        }
      }
    ],
    "outlook": "Watch whether the government appeals the final judgment or asks to pause it, and how the courts handle the earlier appeal of September’s temporary order.",
    "scenarios": [
      {
        "name": "Vacatur remains in force",
        "headline": "D/S continues",
        "assumption": "The court leaves its November 16 judgment vacating the entire rule in place.",
        "effects": "Existing stay, transfer and degree rules apply.",
        "signals": "Further court orders and government implementation notices."
      },
      {
        "name": "Government appeals final judgment",
        "headline": "The appeals court reviews the decision",
        "assumption": "The government separately appeals the November 16 judgment.",
        "effects": "Vacatur remains in force; a later order pausing or reversing it would determine any changes.",
        "signals": "Appeal filings, requests to pause the judgment and court orders."
      },
      {
        "name": "Government writes a new rule",
        "headline": "A new rulemaking process could begin",
        "assumption": "DHS proposes another rule addressing the judgment.",
        "effects": "Students and schools can comment on the new proposal.",
        "signals": "A new formal proposal and public comment period."
      }
    ],
    "scope": [
      {
        "label": "Nationwide scope",
        "text": "The court vacated the entire final rule; the existing D/S framework continues nationwide."
      },
      {
        "label": "Duration",
        "text": "Vacatur remains in force; any later change depends on a new court order."
      },
      {
        "label": "CPT guidance",
        "text": "The D/S order vacates the fixed-stay rule (2026-14439). A separate November 17 order stayed the August CPT guidance nationwide."
      }
    ],
    "milestones": [
      {
        "date": "2025-08-28",
        "text": "DHS published the proposed rule."
      },
      {
        "date": "2026-07-17",
        "text": "DHS published the final rule."
      },
      {
        "date": "2026-08-18",
        "text": "A coalition of universities and other plaintiffs filed suit in federal court in Massachusetts."
      },
      {
        "date": "2026-09-02",
        "text": "The government filed its opposition, asking the court not to pause the rule."
      },
      {
        "date": "2026-09-03",
        "text": "The court heard arguments and did not rule from the bench."
      },
      {
        "date": "2026-09-14",
        "text": "The court issued a preliminary injunction postponing the entire rule nationwide and barring enforcement."
      },
      {
        "date": "2026-09-14",
        "text": "Lawmakers introduced resolutions to overturn the rule (S.J.Res.213 in the Senate, H.J.Res.215 in the House)."
      },
      {
        "date": "2026-09-17",
        "text": "S.J.Res.213 was placed on the Senate calendar (No. 668)."
      },
      {
        "date": "2026-09-30",
        "text": "DHS/ICE and others appealed to the First Circuit (No. 26-2112); the pause stays in place."
      },
      {
        "date": "2026-10-02",
        "text": "Status conference held; the court asked both sides for next-step proposals by October 9."
      },
      {
        "date": "2026-10-09",
        "text": "Both sides filed proposals: the government asked to pause the district case until the appeal is decided; plaintiffs objected and asked for a quick ruling striking down the rule."
      },
      {
        "date": "2026-10-16",
        "text": "The court set a schedule: administrative record by October 23, judgment requests by October 26, replies by November 2."
      },
      {
        "date": "2026-10-19",
        "text": "The First Circuit set the government’s brief and appendix for November 9."
      },
      {
        "date": "2026-10-23",
        "text": "The court moved judgment requests to October 30 and kept replies due November 2; the government turned over the administrative record."
      },
      {
        "date": "2026-10-30",
        "text": "Both sides asked the court to decide the case on the written record."
      },
      {
        "date": "2026-11-02",
        "text": "The government filed its final reply asking to win; as a fallback, it asks to send the rule back to DHS while keeping it, and to narrow who is protected."
      },
      {
        "date": "2026-11-02",
        "text": "Plaintiffs responded to the government, challenged the cost-benefit analysis, SEVIS alternatives and public-comment process, and asked the court to strike down the whole rule."
      },
      {
        "date": "2026-11-06",
        "text": "The government filed an index and excerpts of the administrative record cited in its earlier request for judgment."
      },
      {
        "date": "2026-11-16",
        "text": "The court decided the case on the written record for the plaintiffs and vacated the entire D/S final rule; existing D/S continues."
      },
      {
        "date": "2026-11-16",
        "text": "The court issued an order closing the case in accordance with the same-day judgment for the plaintiffs vacating the entire rule."
      }
    ],
    "next": [
      {
        "date": "Date unknown",
        "text": "Whether the government appeals the final judgment or asks to pause it, and how the courts handle the earlier appeal."
      }
    ],
    "process": {
      "detail": "On November 16, the court decided the case on the written record for the plaintiffs and vacated the entire final rule. Fixed stay periods, extra extensions and academic restrictions lose legal effect; existing D/S continues.",
      "currentSummary": "Entire rule vacated; district-court case closed",
      "waitingFor": "Any government appeal of the final judgment and further court orders."
    }
  }
};
