import type { Language } from './language';

export type UpdateSource = {
  label: string;
  href: string;
};

export type ContentChange = {
  id: string;
  category: string;
  title: string;
  summary: string;
  before?: string;
  after?: string;
  details?: string[];
  sources: UpdateSource[];
};

export type ContentUpdate = {
  date: string;
  changes: ContentChange[];
};

const chineseUpdates: ContentUpdate[] = [
  {
    "date": "2026-11-01",
    "changes": [
      {
        "id": "ead-seven-plaintiff-injunction-text",
        "category": "#09 EAD 自动延期诉讼",
        "title": "补入只救济七名原告的初步禁令",
        "summary": "Jane Doe 案第 46 项（9·11 录入）只保护起诉的七个人，法院没有在全国范围暂停；10·14 最终规则照常生效。",
        "before": "已列出取消自动延期和 10·14 的最终规则，没有 Jane Doe 案的个案命令。",
        "after": "新增 9·10 签署、9·11 录入的初步禁令及来源、时间线和诉讼标记，写明只保护起诉的七个人，法院允许先就这个命令上诉。一般规则状态仍为已执行。",
        "sources": [
          {
            "label": "Jane Doe order 46 · PDF page 17",
            "href": "https://www.adhikarilaw.com/wp-content/uploads/2026/09/Jane-Doe-1-v.-United-States-Department-of-Homeland-Security-8-26-cv-00060-C.D.-Cal.-Sep-11-2026-ECF-No.-46_TRO.pdf"
          },
          {
            "label": "Jane Doe public docket",
            "href": "https://www.courtlistener.com/docket/72122041/jane-doe-1-v-united-states-department-of-homeland-security/?order_by=desc"
          }
        ]
      },
      {
        "id": "pcc-depaul-cpt-public-records",
        "category": "#05 CPT 学校追踪",
        "title": "新增 PCC 与 DePaul 校方 CPT 记录",
        "summary": "PCC 暂停非必需课程的 CPT；DePaul 列出三类合格课程结构，须 ISS 个案审批。",
        "before": "73 条记录：69 条校方网页、4 条社区截图；72 所不同学校。",
        "after": "75 条记录：71 条校方网页、4 条社区截图；74 所不同学校。PCC 通知未标日期；DePaul 就业页标注 9·14 更新，列出可在论文与计学分实习之间选择的必需路径。两校政策此前已发布，本次新收录。",
        "sources": [
          {
            "label": "Portland Community College (PCC)",
            "href": "https://www.pcc.edu/international-students/student-resources/"
          },
          {
            "label": "DePaul University",
            "href": "https://offices.depaul.edu/global-engagement/student-resources/student-services/Pages/employment.aspx"
          }
        ]
      }
    ]
  },
  {
    "date": "2026-10-31",
    "changes": [
      {
        "id": "duration-cross-motions-text-confirmed",
        "category": "#03 D/S 全国暂缓诉讼",
        "title": "取得双方 10·30 判决请求原文",
        "summary": "政府要求全部胜诉，退一步也希望只把规则发回 DHS 修改而不撤销，或缩小暂缓范围；原告要求全部胜诉、撤销新规。法院尚未裁定。",
        "before": "只列出第 66、67 项，没有写明谁提交、请求什么；第 68、69 项还没列。",
        "after": "补入第 66、67、68 项正文：双方都请求法院判自己全部胜诉，政府退一步也希望只把规则发回修改而不撤销，或缩小暂缓范围。同步状态、摘要、流程、时间线、诉讼标记和简报；全国暂缓、11·02 回复和 11·09 上诉排期不变。",
        "sources": [
          {
            "label": "第 66 项政府判决请求",
            "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.66.0.pdf"
          },
          {
            "label": "第 67 项政府支持意见",
            "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.67.0.pdf"
          },
          {
            "label": "第 68 项原告判决请求",
            "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.68.0.pdf"
          }
        ]
      },
      {
        "id": "case-western-uno-cpt-public-records",
        "category": "#05 CPT 学校追踪",
        "title": "新增 Case Western 与 Nebraska–Omaha 校方记录",
        "summary": "Case Western 暂停新申请；UNO 只批所有学生毕业必修的实习。",
        "before": "71 条记录：67 条校方网页、4 条社区截图；70 所不同学校。",
        "after": "73 条记录：69 条校方网页、4 条社区截图；72 所不同学校。Case Western 自 9·08 暂停新申请并修订流程；UNO 9·17 通知要求所有学生毕业必修，并须先取得带 CPT 授权的 I-20。两校通知此前已发布，本次新收录。",
        "sources": [
          {
            "label": "Case Western Reserve University (CWRU)",
            "href": "https://case.edu/visa/international-students/international-student-employment/f-1-student-employment-and-training"
          },
          {
            "label": "University of Nebraska at Omaha (UNO)",
            "href": "https://web.unomaha.edu/curricular-practical-training-cpt-information"
          }
        ]
      }
    ]
  },
  {
    "date": "2026-10-30",
    "changes": [
      {
        "id": "cpt-reply-permission-and-november4",
        "category": "#05 CPT 指引诉讼",
        "title": "法院准许原告 11·04 前提交最多 15 页回复",
        "summary": "法院准许原告 11·04 前提交回复；11·06 听证照常，指引继续执行。",
        "before": "只列了政府 10·28 的反对意见和 11·06 听证，没有原告回应这一步。",
        "after": "加入 10·29 申请、10·30 准许及 11·04 回复日期，同步摘要、状态、诉讼路径、时间线与简报。",
        "sources": [
          {
            "label": "第 29 项电子命令",
            "href": "https://www.courtlistener.com/docket/74919449/association-of-american-universities-v-us-department-of-homeland/?order_by=desc#entry-29"
          },
          {
            "label": "第 28 项回复许可动议全文",
            "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.307243/gov.uscourts.mad.307243.28.0.pdf"
          }
        ]
      },
      {
        "id": "duration-october30-document-types",
        "category": "#03 D/S 全国暂缓诉讼",
        "title": "补入 10·30 新案卷条目",
        "summary": "公开案卷新增判决请求（第 66、67 项）。",
        "before": "案卷只列到第 65 项，下一步写的是 10·30 判决请求截止。",
        "after": "新增第 66、67 项到时间线和简报；11·02 回复和 11·09 上诉排期不变，全国暂缓继续。",
        "sources": [
          {
            "label": "地区案卷第 66、67 项（仅文件类型）",
            "href": "https://www.courtlistener.com/docket/74661796/presidents-alliance-on-higher-education-and-immigration-v-united-states/?order_by=desc#entry-66"
          }
        ]
      },
      {
        "id": "mit-cpt-calendar-2027",
        "category": "#05 CPT 学校追踪 · MIT",
        "title": "补入修订后的 2027 CPT 日历窗口",
        "summary": "春季改为 01·30 开始、暑期改为 08·17 结束、秋季改为 08·18 开始；资格要求不变。",
        "before": "条目只写了暂停不是学位必修的新 CPT、学校会联系已批秋季 CPT 的学生，没有 2027 日历。",
        "after": "补入 2027 春季 01·30—05·19、暑期 05·20—08·17、秋季 08·18—12·17，并保留学期内仅兼职、部分学生更晚开始和须实际获批的条件。",
        "sources": [
          {
            "label": "MIT ISO · 现行 CPT 页面日期表",
            "href": "https://iso.mit.edu/employment/f-1-curricular-practical-training/"
          }
        ]
      },
      {
        "id": "illinois-arizona-uconn-public-cpt",
        "category": "#05 CPT 学校追踪",
        "title": "新增 Illinois Tech、Arizona 和 UConn 校方记录",
        "summary": "三校都限制非必需 CPT：Illinois Tech 暂停无强制实践的项目，Arizona 保留学位／论文必需个案，UConn 要求公开的所有学生必修课程要求。",
        "before": "68 条记录：64 条校方网页、4 条社区截图；67 所不同学校。",
        "after": "71 条记录：67 条校方网页、4 条社区截图；70 所不同学校。",
        "sources": [
          {
            "label": "Illinois Institute of Technology (Illinois Tech)",
            "href": "https://www.iit.edu/global-services/student-employment/curricular-practical-training-cpt"
          },
          {
            "label": "University of Arizona",
            "href": "https://international.arizona.edu/international-students/cpt"
          },
          {
            "label": "University of Connecticut (UConn)",
            "href": "https://international.global.uconn.edu/2026/08/30/immigration-changes-regarding-internships/"
          }
        ]
      }
    ]
  },
  {
    "date": "2026-10-29",
    "changes": [
      {
        "id": "h1b-fee-entry144-text-and-date-conflict",
        "category": "#02 H-1B 附加费 · 10 万美元入境费案",
        "title": "另项收费案：法院拒绝暂停地区诉讼",
        "summary": "第 144 项记录法院拒绝第 133 项暂停动议，并要求政府提交行政记录。",
        "before": "10·28 只列了一条案卷标题，没有动议结果、会议日期和新排期。",
        "after": "新增第 144 项会议记录：拒绝暂停地区诉讼、要求提交行政记录。记录里的会议和期限日期前后不一，等法院澄清后再列入。上诉排期 11·06／12·04 不变；103,265 美元提案状态不变。",
        "sources": [
          {
            "label": "法院第 144 项纯文字记录",
            "href": "https://www.courtlistener.com/docket/71541425/global-nurse-force-v-trump/?order_by=desc#entry-144"
          }
        ]
      },
      {
        "id": "georgia-tech-fall-cpt-extension-restriction",
        "category": "#05 CPT 学校追踪 · Georgia Tech",
        "title": "补入秋季 CPT 延期不获授权的校方限制",
        "summary": "OIE 新增秋季 CPT 延期限制；新表单最迟 11·16 提供的说明仍在。",
        "before": "条目只列了新表单和学位必修项目。",
        "after": "状态和详情加入：2026 秋季 CPT 的延期请求不再授权。",
        "sources": [
          {
            "label": "Georgia Tech OIE · CPT 官方页面",
            "href": "https://isss.oie.gatech.edu/curricular-practical-training-cpt"
          }
        ]
      },
      {
        "id": "trine-cpt-start-and-renewal-transition",
        "category": "#05 CPT 学校追踪 · Trine",
        "title": "更新新生开工、申请处理及 2027·06·13 续期过渡截止日",
        "summary": "新生不能因提前取得 I-20 而提前开工；原一年期续期说明已被过渡安排替换。",
        "before": "条目里还留着一年期续期的旧说法，和 2027 春季按学期授权对不上。",
        "after": "续期过渡最迟 2027·06·13，或更早的项目／资格终止日；新生最早按开课日工作，2027 春季为 01·11。补入 OPT 随 SEVIS transfer release 结束、缺件／填错须重新申请、续期待审期间不延长旧授权；页面上不一致的说法提示向 DSO 确认。",
        "sources": [
          {
            "label": "Trine · 研究生 CPT 官方页面",
            "href": "https://www.trine.edu/international/hybrid/experiential-learning/cpt-information.aspx"
          }
        ]
      },
      {
        "id": "queens-bgsu-public-cpt-records",
        "category": "#05 CPT 学校追踪",
        "title": "新增 Queens College 暂停与 BGSU 复核现有授权的公开记录",
        "summary": "Queens College 暂停申请；BGSU 按所有学生必修标准审查，既有授权必要时可能撤销。",
        "before": "66 条记录：62 条校方网页、4 条社区截图；65 所不同学校，还没有这两所。",
        "after": "68 条记录：64 条校方网页、4 条社区截图；67 所不同学校。Queens College 的学位必需实践须先联系 ISSO；BGSU 会复核已有授权，必要时撤销。",
        "sources": [
          {
            "label": "Queens College (CUNY)",
            "href": "https://www.qc.cuny.edu/academics/iss/iss-virtual-office-assistant/cpt/"
          },
          {
            "label": "Bowling Green State University (BGSU)",
            "href": "https://www.bgsu.edu/international-programs-and-partnerships/immigration-updates-f-1-j-1-students"
          }
        ]
      }
    ]
  },
  {
    "date": "2026-10-28",
    "changes": [
      {
        "id": "cpt-government-opposition-october28",
        "category": "#05 CPT 指引诉讼",
        "title": "政府提交反对暂缓意见，11·06 听证安排未变",
        "summary": "政府反对暂缓，主张原告无诉讼资格、广播不是最终行政行动；11·06 听证照常。",
        "before": "当前程序在等政府 10·28 答复。",
        "after": "摘要、状态、诉讼路径、时间线及简报补入政府反对意见，移除已履行的答复期限；保留 10·19 延期记录和 11·06 下午 3 时（美东）听证。",
        "sources": [
          {
            "label": "政府反对意见全文 · 第 27 项",
            "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.307243/gov.uscourts.mad.307243.27.0.pdf"
          },
          {
            "label": "地区法院案卷 · 第 26 项超页命令及第 27 项提交",
            "href": "https://www.courtlistener.com/docket/74919449/association-of-american-universities-v-us-department-of-homeland/"
          }
        ]
      },
      {
        "id": "h1b-fee-october28-docket-title",
        "category": "#02 H-1B 附加费 · 10 万美元入境费案",
        "title": "补入 10·28 案卷条目",
        "summary": "另项收费案案卷新增会议和暂停动议相关条目；移除已过的 10·27 会议。",
        "before": "下一步还列着 10·27 Zoom 案件管理会议。",
        "after": "时间线及简报补入 10·28 新条目；10·27 会议移入历史。103,265 美元提案状态不变。",
        "sources": [
          {
            "label": "法院案卷 · 10·28 新条目（仅标题）",
            "href": "https://www.courtlistener.com/docket/71541425/global-nurse-force-v-trump/?order_by=desc#minute-entry-483258424"
          }
        ]
      }
    ]
  },
  {
    "date": "2026-10-27",
    "changes": [
      {
        "id": "cpt-wyoming-public-notice",
        "category": "#05 CPT 学校追踪",
        "title": "新增 Wyoming 校方通知：收紧标准下继续接受 CPT 请求",
        "summary": "10·26 通知称仍能批准部分请求，但许多学生的机会减少。",
        "before": "65 条证据记录：61 条校方网页、4 条社区截图；64 所不同学校，未收录 Wyoming。",
        "after": "66 条记录：62 条校方网页、4 条社区截图；65 所不同学校。学生可继续找机会并尽早提交 ISS 审核。",
        "sources": [
          {
            "label": "University of Wyoming · 10·26 校方通讯",
            "href": "https://www.uwyo.edu/uwgrad/newsletter/isa-immigration-support-fall2026.html"
          }
        ]
      }
    ]
  },
  {
    "date": "2026-10-26",
    "changes": [
      {
        "id": "duration-independent-appeal-schedule",
        "category": "#03 D/S 诉讼",
        "title": "补入上诉排期：政府上诉书／附录 11·09 到期",
        "summary": "第一巡回法院 10·19 排定政府上诉书和附录 11·09 到期；全国暂缓继续。",
        "before": "11·09 只来自政府第 63 项文件的说法，下一步没有日期。",
        "after": "加入第一巡回 26-2112 公开案卷，当前摘要、下一步和简报列明 11·09 政府上诉书／附录；答辩在上诉书送达后 30 天、回复在答辩送达后 10 天。",
        "sources": [
          {
            "label": "第一巡回法院 26-2112 公开案卷 · 10·09 与 10·19 排期记录",
            "href": "https://www.courtlistener.com/docket/74908049/feed/"
          }
        ]
      },
      {
        "id": "targeted-perm-enforcement-and-cloudera",
        "category": "#13 跨部门审查 · 相关 PERM 执法",
        "title": "补入微软、Adobe 等定向 PERM 暂停公告及 Cloudera 和解",
        "summary": "企业个案、既往 LCA 数据复查和 AC29 规则制定分开列；Cloudera 的 24 个月从最近一次撤回申请日起算。",
        "before": "条目只有行政命令和以前 LCA 的复查，没有 10·08 点名企业的 PERM 暂停和 10·16 Cloudera 和解。",
        "after": "增加白宫 10·08 发布会上的定向暂停公告，以及 DOJ 公布的 Cloudera 和解第 17 段：撤回相关未决 PERM，自最近一次撤回日起自我禁入 24 个月，期间不得提交 ETA Form 9089 或刊登 PERM 招聘广告。",
        "sources": [
          {
            "label": "白宫 · 10·08 发布会视频",
            "href": "https://www.whitehouse.gov/videos/vice-president-jd-vance-holds-press-conference-on-fighting-visa-fraud/"
          },
          {
            "label": "DOJ · 10·16 Cloudera 和解公告",
            "href": "https://www.justice.gov/opa/pr/us-departments-justice-and-labor-secure-settlement-cloudera-enforce-two-year-perm-debarment"
          },
          {
            "label": "Cloudera 和解原文 · 第 17 段",
            "href": "https://www.justice.gov/crt/media/1465571/dl?inline="
          }
        ]
      }
    ]
  },
  {
    "date": "2026-10-25",
    "changes": [
      {
        "id": "duration-order64-and-record65-confirmed",
        "category": "#03 D/S 诉讼",
        "title": "法院延期命令：动议 10·30、回复 11·02",
        "summary": "第 64 项命令把动议延到 10·30，回复仍为 11·02；全国暂缓继续。",
        "before": "10·23 只有裁定和第 65 项的标题，下一步没有日期，旧的未来期限暂不显示。",
        "after": "补入第 64 项命令及第 65 项行政记录索引。当前下一步及简报列出 10·30 动议、11·02 回复。",
        "sources": [
          {
            "label": "法院第 64 项完整电子命令",
            "href": "https://www.courtlistener.com/docket/74661796/presidents-alliance-on-higher-education-and-immigration-v-united-states/?order_by=desc#entry-64"
          },
          {
            "label": "第 65 项行政记录索引提交通知",
            "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.65.0.pdf"
          },
          {
            "label": "地区法院案卷另一镜像",
            "href": "https://clearinghouse.net/case/48393/"
          }
        ]
      },
      {
        "id": "perm-oira-conclusion-october23",
        "category": "#12 PERM 劳工认证改革",
        "title": "OIRA 于 10·23 以 Consistent with Change 结案",
        "summary": "发布前审查完成；下一步是 DOL 公开 NPRM。",
        "before": "网站显示 OIRA 审查中，链接的是 9·14 收件记录。",
        "after": "以结案记录 rrid=1533011 为首要来源，状态与流程改为 OIRA 已完成、等待 NPRM；同步摘要、下一步、情景和简报，保留送审历史。",
        "sources": [
          {
            "label": "OIRA 结案详情 · 1205-AC29",
            "href": "https://www.reginfo.gov/public/do/eoDetails?rrid=1533011"
          },
          {
            "label": "OIRA 按 RIN 的跨记录检索",
            "href": "https://www.reginfo.gov/public/Forward?SearchTarget=RegReview&textfield=1205-AC29"
          }
        ]
      }
    ]
  },
  {
    "date": "2026-10-23",
    "changes": [
      {
        "id": "duration-october22-extension-request",
        "category": "#03 D/S 诉讼",
        "title": "政府申请延长书面期限",
        "summary": "10·22 第 63 项请求把动议延到 10·30、回复延到 11·06；全国暂缓不变。",
        "before": "最新程序文件为 10·16 第 61 项命令：行政记录 10·23、动议 10·26、回复 11·02。",
        "after": "加入第 63 项申请、时间线和简报；第 61 项期限在法院裁定前保持不变。",
        "sources": [
          {
            "label": "政府 10·22 延期动议 · 第 63 项",
            "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.63.0.pdf"
          }
        ]
      },
      {
        "id": "trine-spring2027-semester-cpt",
        "category": "#05 CPT 学校记录 · Trine",
        "title": "Trine 新增 2027 春季按学期授权及重新申请要求",
        "summary": "同一雇主也须每学期获批；11·16 前既有批准不因本次调整撤销。",
        "before": "只列了开放申请、2026–27 截止日和审批流程；原页下一个开始日是 2026·12·14 和 2027·05·24，授权一年。",
        "after": "改列 2027 春季起按学期授权、开课日起止限制、每学期重新申请、续期不自动延长，以及已有批准不受影响。下一可开始日更新为 2027·01·11、2027·06·14，截止日不变。",
        "sources": [
          {
            "label": "Trine · CPT Information",
            "href": "https://www.trine.edu/international/hybrid/experiential-learning/cpt-information.aspx"
          }
        ]
      },
      {
        "id": "duration-october23-ruling-record-gap",
        "category": "#03 D/S 诉讼",
        "title": "补入 10·23 延期裁定记录",
        "summary": "D/S 案新增延期裁定和第 65 项通知。",
        "before": "只列了第 63 项申请；下一步和简报还把 10·26、11·02 当作现行期限。",
        "after": "加入 10·23 新记录；原 10·26、11·02 期限暂停展示，等裁定正文。",
        "sources": [
          {
            "label": "法院公开案卷摘要 · 10·23 新记录",
            "href": "https://www.courtlistener.com/docket/74661796/feed/"
          }
        ]
      },
      {
        "id": "cpt-georgia-tech-public-source",
        "category": "#05 CPT 学校记录 · Georgia Tech",
        "title": "新增 Georgia Tech 官方资格与表单时间说明",
        "summary": "新表单最迟 11·16 提供，本硕限定列出的学位必需项目，博士须为论文必需。",
        "before": "64 条证据记录：60 条校方网页、4 条社区截图；63 所不同学校，未收录 Georgia Tech。",
        "after": "65 条记录：61 条校方网页、4 条社区截图；64 所不同学校。列明合格本硕项目、博士论文条件及合作协议要求；新表单最迟 11·16 提供。",
        "sources": [
          {
            "label": "Georgia Tech OIE · CPT",
            "href": "https://isss.oie.gatech.edu/curricular-practical-training-cpt"
          }
        ]
      }
    ]
  },
  {
    "date": "2026-10-21",
    "changes": [
      {
        "id": "duration-october16-summary-judgment-order",
        "category": "#03 D/S 固定停留期限",
        "title": "补入 10·16 判决日程命令",
        "summary": "第 61 项命令排定行政记录 10·23、判决请求 10·26、回复 11·02；全国暂缓继续。",
        "before": "下一步没有日期，在等法院处理双方方案。",
        "after": "详情、当前程序、里程碑、下一步和 30 天简报列出法院确定的三个书面期限。",
        "sources": [
          {
            "label": "地区法院 10·16 命令 · 第 61 项",
            "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.61.0.pdf"
          }
        ]
      },
      {
        "id": "cpt-october19-response-extension",
        "category": "#05 CPT 诉讼",
        "title": "政府答复延至 10·28，11·06 听证安排未变",
        "summary": "10·19 第 22 项命令把政府答复期限延到 10·28；指引继续执行。",
        "before": "仅列 11·06 听证，未列政府答复延长期限。",
        "after": "摘要、当前程序、下一步和简报加入 10·28 政府答复期限。",
        "sources": [
          {
            "label": "法院第 22 项电子命令",
            "href": "https://www.courtlistener.com/docket/74919449/feed/"
          }
        ]
      },
      {
        "id": "h1b-separate-fee-october15-20-filings",
        "category": "#02 H-1B 附加费（10 万美元入境费案）",
        "title": "补入另项收费案双方意见及联合案件管理说明",
        "summary": "10·15 原告反对、10·19 政府回复、10·20 联合说明；9·30 命令继续有效。",
        "before": "只列了政府暂停地区诉讼的请求和第九巡回法院的排期通知。",
        "after": "加入第 140、141、142 项及来源，把已提交的 10·20 联合说明从下一步移入历史；10·27 会议照 9·30 命令列示。",
        "sources": [
          {
            "label": "原告 10·15 反对意见 · 第 140 项",
            "href": "https://storage.courtlistener.com/recap/gov.uscourts.cand.457426/gov.uscourts.cand.457426.140.0.pdf"
          },
          {
            "label": "政府 10·19 回复 · 第 141 项",
            "href": "https://storage.courtlistener.com/recap/gov.uscourts.cand.457426/gov.uscourts.cand.457426.141.0.pdf"
          },
          {
            "label": "双方 10·20 联合说明 · 第 142 项",
            "href": "https://storage.courtlistener.com/recap/gov.uscourts.cand.457426/gov.uscourts.cand.457426.142.0.pdf"
          }
        ]
      },
      {
        "id": "cpt-adelphi-ncstate-wmu-public-records",
        "category": "#05 CPT 学校记录",
        "title": "补入 Adelphi、NC State 与 Western Michigan 官方政策",
        "summary": "学校列表由 61 条增至 64 条记录：60 条校方网页、4 条社区截图；63 所不同学校。",
        "before": "61 条记录：57 条校方网页、4 条社区截图；60 所不同学校，还没有这三所。",
        "after": "Adelphi 10·15 修订强调课程必需与合作协议；NC State 限学位必需或严格论文研究；WMU 10·16 通知从 2027 春季起收紧。",
        "sources": [
          {
            "label": "Adelphi · 10·15 CPT 政策",
            "href": "https://www.adelphi.edu/policies/curricular-practical-training-cpt-policy/"
          },
          {
            "label": "NC State · CPT",
            "href": "https://internationalservices.ncsu.edu/curricular-practical-training/"
          },
          {
            "label": "Western Michigan · 10·16 通知",
            "href": "https://wmich.edu/international/immigration/news"
          }
        ]
      },
      {
        "id": "cpt-uic-october16-hearing-notice",
        "category": "#05 CPT 学校记录",
        "title": "UIC 通知补充 11·06 听证",
        "summary": "10·16 修改的校方通知新增听证日期，CPT 授权资格不变。",
        "before": "UIC 条目只写了诉讼和资格核对，没有听证日期。",
        "after": "条目加入 11·06 听证。",
        "sources": [
          {
            "label": "UIC · 10·16 修改的通知",
            "href": "https://ois.uic.edu/news-stories/sevps-cpt-memos-challenged-in-court/"
          }
        ]
      }
    ]
  },
  {
    "date": "2026-10-14",
    "changes": [
      {
        "id": "h1b-separate-fee-appeal-26-6667-schedule",
        "category": "#02 H-1B 附加费 · 10 万美元入境费案",
        "title": "10 万美元入境费案：上诉案号和书面意见日期确定",
        "summary": "第九巡回法院上诉案号 26-6667：政府上诉书 11·06、原告答辩 12·04。",
        "before": "只记录了政府 10·09 上诉和暂停地区诉讼的请求，没有案号和书面意见日期。",
        "after": "补入法院 10·09 的排期通知（10·14 录入地区案卷）：26-6667 上诉书 11·06、答辩 12·04，政府可在答辩送达后 21 天内回复。上诉期间 9·30 命令继续有效。",
        "sources": [
          {
            "label": "第九巡回上诉案号与书面排期通知 · 地区案卷第 138 项",
            "href": "https://storage.courtlistener.com/recap/gov.uscourts.cand.457426/gov.uscourts.cand.457426.138.0.pdf"
          }
        ]
      },
      {
        "id": "nonimmigrant-deference-october-14-published",
        "category": "#14 工作身份续期审查",
        "title": "取消“上次批过就参照”原则的提案正式刊登，评论 11·13 截止",
        "summary": "10·14 刊登于 91 FR 65119，评论 11·13 截止。",
        "before": "状态是预览、预定 10·14 刊登，评论期只写了“刊登后 30 天”。",
        "after": "改为正式提案、评论中，原文链接换成联邦公报刊登版，下一步和 30 天简报列出 11·13 评论截止。",
        "sources": [
          {
            "label": "Federal Register · 10·14 NPRM",
            "href": "https://www.federalregister.gov/documents/2026/10/14/2026-20941/removing-deference-to-prior-uscis-determinations-of-eligibility"
          }
        ]
      },
      {
        "id": "ead-auto-extension-october-14-final-rule",
        "category": "#09 EAD 续期自动延期",
        "title": "取消部分 EAD 续期自动延期的最终规则刊登并生效",
        "summary": "10·14 刊登于 91 FR 65306 并当天生效，照原样保留 2025 年的临时规则；分界日仍是 2025·10·30。",
        "before": "状态是最终规则预览、预定 10·14 刊登。",
        "after": "改为最终规则 10·14 生效，原文链接换成刊登版；写明取消自动延期从 2025·10·30 就已开始。",
        "sources": [
          {
            "label": "Federal Register · 10·14 最终规则",
            "href": "https://www.federalregister.gov/documents/2026/10/14/2026-20955/removal-of-automatic-extensions-for-certain-employment-authorization-documents"
          }
        ]
      },
      {
        "id": "cpt-relief-hearing-november-6",
        "category": "#05 CPT 指引",
        "title": "CPT 诉讼定于 11·06 听证",
        "summary": "AAU v. DHS 案（第 19 项，10·13）把是否暂停 CPT 指引的听证定在 11·06 美东下午 3 点。",
        "before": "写的是还没有听证或恢复日期。",
        "after": "状态、时间线、下一步、诉讼标记和 30 天简报加入 11·06 听证；指引照常执行。",
        "sources": [
          {
            "label": "AAU v. DHS 地区法院案卷",
            "href": "https://www.courtlistener.com/docket/74919449/association-of-american-universities-v-us-department-of-homeland/"
          }
        ]
      },
      {
        "id": "h1b-separate-fee-ninth-circuit-appeal",
        "category": "#02 H-1B 附加费",
        "title": "10 万美元入境费案：政府上诉并申请暂停地区诉讼",
        "summary": "Global Nurse Force 案中，政府 10·09 就 9·30 命令向第九巡回法院上诉，并申请暂停地区诉讼；上诉期间命令继续有效。这和 103,265 美元附加费提案无关。",
        "before": "9·30 之后的进展还没列，10·20、10·27 的排期照常显示。",
        "after": "背景、时间线和简报补入上诉和暂停诉讼请求，并注明 10·20、10·27 排期可能调整。",
        "sources": [
          {
            "label": "Global Nurse Force 案卷公开镜像",
            "href": "https://www.courtlistener.com/docket/71541425/global-nurse-force-v-trump/"
          }
        ]
      },
      {
        "id": "october-14-content-review-corrections",
        "category": "内容核对",
        "title": "逐条核对政策，修正范围说法和放错位置的例子",
        "summary": "对照联邦公报、行政命令原文、OIRA 记录和法院案卷核对 14 条政策；文号、刊登日、评论截止和生效日都对得上，另修正了下面几处。",
        "details": [
          "#13 行政命令：第 3(a) 节要求在 LCA、petition、签证和入境四个环节都考虑裁员，重点提示改为四个环节都写到；命令没有定义“处境相近”的美国员工，删去“其他部门的裁员不算”的说法。",
          "#07 H-1B 分类改革、#11 H-4 EAD、#05 CPT 指引：把放错位置的例子移回对应的影响标题下。",
          "把会过时的“今天／明天”改成具体日期（EAD 自动延期、H-4 和 3 条学校记录）；CPT 详情里的诉讼说明改用指引而不是规则的说法。"
        ],
        "sources": [
          {
            "label": "Federal Register · 行政命令 14431",
            "href": "https://www.federalregister.gov/documents/2026/09/23/2026-19555/enhancing-program-integrity-and-interagency-coordination-in-the-administration-of-the-h-1b"
          }
        ]
      }
    ]
  },
  {
    "date": "2026-10-13",
    "changes": [
      {
        "id": "nonimmigrant-deference-october-13-preview",
        "category": "#14 工作身份续期审查",
        "title": "新增：取消 I-129“上次批过就参照”原则的提案预览",
        "summary": "10·13 公开 46 页提案预览（RIN 1615-AD26），预定 10·14 刊登。",
        "before": "还没有收录 AD26；H-1B 综合改革（AD00）另外跟踪。",
        "after": "新增独立条目、原文和简报：雇主、员工和基本事实都没变的续期，将不再一般参照上次的批准。",
        "details": [
          "预览里评论期写的是“刊登后 30 天”，具体日期等正式版。"
        ],
        "sources": [
          {
            "label": "官方 NPRM 预览 · FR Doc. 2026-20941",
            "href": "https://public-inspection.federalregister.gov/2026-20941.pdf"
          }
        ]
      },
      {
        "id": "ead-auto-extension-october-13-final-preview",
        "category": "#09 EAD 续期自动延期",
        "title": "补入已执行的取消 EAD 自动延期规则和最终规则预览",
        "summary": "最终规则预览照原样保留 2025·10·30 的临时规则，预定 10·14 刊登；取消从 2025·10·30 就已开始。",
        "before": "没有单独展示 AD05；H-4 条目只跟踪以后可能取消申请资格的议程。",
        "after": "新增独立条目，分清 2025·10·30 分界日、分界日前的合格续期和法律例外，并在 H-4 详情里关联说明。",
        "details": [
          "部分 H-4、c9 等续期不再凭收据自动延期；有效的卡和 H-4 申请资格不受影响。",
          "STEM OPT 的 180 天延期、法律和 TPS 公告的例外、E／L 配偶凭身份工作，都另有规定。"
        ],
        "sources": [
          {
            "label": "2025·10·30 临时最终规则 · 已生效",
            "href": "https://www.govinfo.gov/content/pkg/FR-2025-10-30/pdf/2025-19702.pdf"
          },
          {
            "label": "10·13 最终稿预览 · 照原样定稿",
            "href": "https://public-inspection.federalregister.gov/2026-20955.pdf"
          }
        ]
      }
    ]
  },
  {
    "date": "2026-10-12",
    "changes": [
      {
        "id": "duration-plaintiffs-october-9-plan",
        "category": "#03 D/S 诉讼",
        "title": "D/S 案：原告要求尽快判决撤销新规",
        "summary": "第 60 项：原告反对暂停地区诉讼，要求法院马上作出撤销新规的最终判决。",
        "before": "已收录第 59 项政府请求，还没有原告的立场。",
        "after": "详情、时间线和 30 天简报补入原告立场。",
        "details": [
          "原告提出的备选日程：10·16 交行政记录、10·23 补充意见、10·30 回复。",
          "上诉书的 21 天期限，从上诉法院排期入卷那天开始算。"
        ],
        "sources": [
          {
            "label": "10·09 原告程序方案 · 第 60 项",
            "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.60.0.pdf"
          }
        ]
      }
    ]
  },
  {
    "date": "2026-10-11",
    "changes": [
      {
        "id": "opt-fee-october-8-nprm",
        "category": "#01 OPT 收费",
        "title": "OPT 收费正式提案：第一次 7 万、之后 3 万，由学校先交",
        "summary": "10·08 提案公布金额、推荐前交费、学校可把钱转给学生或雇主，以及过渡安排；规则评论 11·09 截止，PRA 评论 12·07 截止。",
        "before": "标题还是媒体报道的“10 万美元一笔”，状态停在 OIRA 审完。",
        "after": "改为正式提案、评论中：第一次 7 万美元，交过之后每次 OPT 3 万美元；学校先交，可以转给学生或雇主。",
        "details": [
          "毕业前、毕业后和 STEM OPT 都收；只换雇主不收。",
          "从最终规则公布后第 60 天开始收；以前用过 OPT 但没交过第一次费的，先交 7 万。已有的 EAD 不受影响。"
        ],
        "sources": [
          {
            "label": "Federal Register · 10·08 NPRM",
            "href": "https://www.federalregister.gov/documents/2026/10/08/2026-20660/optional-practical-training-fees"
          }
        ]
      },
      {
        "id": "cpt-associations-october-5-lawsuit",
        "category": "#05 CPT 指引",
        "title": "补入：四个高校协会起诉，请法院暂停 CPT 指引",
        "summary": "10·05 起诉（AAU v. DHS，1:26-cv-14520）并请求暂停指引，10·06 提交理由；在法院裁定前指引照常执行。",
        "before": "只跟踪两份 SEVP 广播和学校执行情况，还没有这起诉讼。",
        "after": "详情、流程说明和简报加入这起诉讼，并写明它和 D/S 案是两回事。",
        "sources": [
          {
            "label": "10·05 诉状",
            "href": "https://www.nafsa.org/sites/default/files/media/document/CPT%20Complaint%20AAU%20v.%20DHS%20.pdf"
          },
          {
            "label": "初步禁令及暂缓申请",
            "href": "https://www.aau.edu/uploads/files/general/Motion-for-Preliminary-Injunction-and-Stay-of-Agency-Action-CPT-Case.pdf"
          }
        ]
      },
      {
        "id": "duration-october-conference-and-procedure",
        "category": "#03 D/S 诉讼",
        "title": "D/S 案 10·02 进度会议已开，政府提交下一步请求",
        "summary": "第 56 项记录会议；第 59 项政府请求暂停地区诉讼等上诉，或采用备选日程。",
        "before": "10·02 会议还列为未来事件，案卷只到 9·30 上诉。",
        "after": "会议移入历史，补入 10·09 双方提交；政府称已申请加快上诉。",
        "sources": [
          {
            "label": "10·09 政府意见 · 第 59 项",
            "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.59.0.pdf"
          },
          {
            "label": "法院案卷公开镜像 · 第 56、59—60 项",
            "href": "https://clearinghouse.net/case/48393/"
          }
        ]
      },
      {
        "id": "h1b-separate-fee-september-30-order",
        "category": "#02 H-1B 收费",
        "title": "补入：法院 9·30 禁止征收另一笔 10 万美元入境费",
        "summary": "Global Nurse Force 案第 130 号命令撤销收费政策，并禁止按原公告和延长公告收费，除非先走完公开征求意见的程序。",
        "before": "10 万美元入境费的背景只到 6·08 撤销、7·24 拒绝暂缓和 9·18 延长。",
        "after": "补入 9·30 命令，以及 10·20 联合说明和 10·27 会议日期；这些和 103,265 美元附加费提案无关。",
        "details": [
          "会议和后续日期按 9·30 命令列出。"
        ],
        "sources": [
          {
            "label": "GovInfo · Global Nurse Force 第 130 号命令",
            "href": "https://www.govinfo.gov/content/pkg/USCOURTS-cand-4_25-cv-08454/pdf/USCOURTS-cand-4_25-cv-08454-17.pdf"
          }
        ]
      },
      {
        "id": "cpt-four-public-school-additions-october-11",
        "category": "CPT 学校清单",
        "title": "新增 Yale、Oklahoma、UVA、UIC 的校方网页记录",
        "summary": "新增四条校方网页记录。",
        "before": "57 条记录：53 条校方网页、4 条社区截图；56 所不同学校。",
        "after": "61 条记录：57 条校方网页、4 条社区截图；60 所不同学校。",
        "details": [
          "Yale 10·07：只批专业所有学生毕业必须做的实习；Oklahoma 10·08：8·24 起的新申请仍然暂停。",
          "UVA：学位必修的照常办，选修学分型 CPT 暂停；UIC 10·07：逐个核对资格、关注诉讼。"
        ],
        "sources": [
          {
            "label": "Yale OISS · 10·07",
            "href": "https://oiss.yale.edu/news/cpt-update-sevp-broadcast-messages-and-pending-litigation"
          },
          {
            "label": "Oklahoma ISS · 10·08 页面",
            "href": "https://www.ou.edu/globalengagement/iss/curricular-practical-training"
          },
          {
            "label": "UVA ISSP · CPT Update",
            "href": "https://issp.virginia.edu/cpt-update"
          },
          {
            "label": "UIC OIS · 10·07",
            "href": "https://ois.uic.edu/news-stories/sevps-cpt-memos-challenged-in-court/"
          }
        ]
      },
      {
        "id": "kansas-degree-required-cpt-page",
        "category": "CPT 学校",
        "title": "Kansas：现在可以批学位必修的 CPT",
        "summary": "ISS 页首撤下了全部暂停的通知，现在写的是可以为学位必修的实习／实践授权 CPT。",
        "before": "条目称暂停全部 CPT 请求。",
        "after": "改为记录现在的学位必修 CPT 和申请流程。",
        "sources": [
          {
            "label": "Kansas ISS · F-1 CPT",
            "href": "https://iss.ku.edu/f-1-cpt-curricular-practical-training"
          }
        ]
      },
      {
        "id": "nyu-tandon-pause-notice-absent",
        "category": "CPT 学校",
        "title": "NYU Tandon 数学系撤下旧的暂停通知",
        "summary": "现在的页面列出一般的 CPT 申请步骤；院系没有公布恢复日期，申请前请先问院系。",
        "before": "条目称校方页面明确自 9·01 暂停 CPT 审批。",
        "after": "改为记录旧通知已撤下、现在的申请步骤；本条仅限 Tandon 数学系。",
        "sources": [
          {
            "label": "NYU Tandon Mathematics · Internships",
            "href": "https://math.nyu.edu/dynamic/sites/tandon/internships/"
          }
        ]
      }
    ]
  },
  {
    date: '2026-10-01',
    changes: [
      {
        id: 'cmu-cpt-official-notice-added',
        category: 'CPT 学校清单',
        title: '补入 CMU 的 CPT 收紧通知和现行申请要求',
        summary: '补入 CMU OIE 8·27 公告和现行 CPT 页面：只批所有学生毕业必修的实习，选修实习改申请毕业前 OPT；论文相关的校外工作还在审。',
        before: '56 条记录：52 条校方网页、4 条社区截图；55 所不同学校。未收录 CMU。',
        after: '57 条记录：53 条校方网页、4 条社区截图；56 所不同学校。新增 CMU 校方网页记录。',
        details: ['CMU 的 CPT 页面还在修订；计算机系（CSD）博士页和 OIE 说法不一致，以 OIE 为准。'],
        sources: [
          { label: 'CMU OIE · 8·27 CPT 公告', href: 'https://www.cmu.edu/oie/news-and-events/2025-2026/august/cpt-broadcast-message.html' },
          { label: 'CMU OIE · 现行 CPT 页面', href: 'https://www.cmu.edu/oie/employment/f1-students/curricular-practical-training.html' },
          { label: 'CMU CSD · 博士 CPT 资源页', href: 'https://www.csd.cs.cmu.edu/academics/doctoral-resources/applying-for-cpt-or-opt' },
        ],
      },
      {
        id: 'duration-government-appeal-september-30',
        category: 'D/S 诉讼',
        title: 'D/S 案政府上诉，全国暂缓继续有效',
        summary: '9·30 地区案卷第 53—55 项：政府上诉，第一巡回法院案号 26-2112。上诉期间 9·14 的全国暂缓继续有效。',
        before: '诉讼进展止于 9·14 全国暂缓及 10·02 状态会议排期。',
        after: '加入 9·30 上诉和案号，全国暂缓状态不变。',
        sources: [{ label: '法院案卷公开镜像 · 第 53—55 项', href: 'https://www.courtlistener.com/docket/74661796/feed/' }],
      },
      {
        id: 'ucsd-cpt-current-application-process',
        category: 'CPT 学校',
        title: 'UC San Diego 官网列出合格专业的申请流程',
        summary: 'ISEO 撤下了“全部 CPT 请求暂停”的通知，列出审核通过的专业和 iServices、院系、ISEO 的审批流程。',
        before: '学校条目仍标为暂停全部 F-1 CPT 请求。',
        after: '改为记录合格专业的申请方式；没列出的专业可以请院系申请审核。',
        sources: [{ label: 'UC San Diego ISEO · F-1 CPT', href: 'https://iseo.ucsd.edu/student-services/working-in-us/f1-cpt.html' }],
      },
      {
        id: 'northwestern-cpt-september-29-cleanup',
        category: 'CPT 学校',
        title: 'Northwestern 9·29 页面删掉了冲突的旧说法',
        summary: 'OISS 页面仍要求实习是所有学生毕业必修的，并删掉了 9·25 页面下方“integral to or required”的旧说法。',
        before: '条目提醒同页下方仍有旧版措辞。',
        after: '更新为 9·29 页面统一使用“所有学生必修”的标准，旧通知截图保留作对照。',
        sources: [{ label: 'Northwestern OISS · Curricular Practical Training', href: 'https://www.northwestern.edu/international/international-students/student-employment/f-1-practical-training/curricular-practical-training/' }],
      },
    ],
  },
  {
    date: '2026-09-28',
    changes: [
      {
        id: 'northwestern-cpt-september-25-page',
        category: 'CPT 学校',
        title: 'Northwestern 公布“所有学生必修”的条件和 CPT 申请步骤',
        summary: 'OISS 9·25 更新的页面：实习必须是项目所有学生毕业都要做的；做完必修实习后不能再申请额外 CPT；申请需要合作协议、学业负责人确认和 CPT I-20。',
        before: '条目只依据 9·03 通知写了非必修 CPT 停批，没有现在的申请流程。',
        after: '改为 9·25 页面的资格和办理条件，旧通知截图保留作对照。',
        sources: [{ label: 'Northwestern OISS · Curricular Practical Training', href: 'https://www.northwestern.edu/international/international-students/student-employment/f-1-practical-training/curricular-practical-training/' }],
      },
      {
        id: 'oregon-cpt-current-page-clarification',
        category: 'CPT 学校',
        title: 'Oregon CPT 页面加入 DMA 项目和新的学分说明',
        summary: 'ISSS 页面把 DMA 结业项目列为可能符合的必修实践，并说学分数按项目和导师商定；原来统一一学分的最低要求已撤下。',
        before: '条目列了所有学生必修、硕士论文／毕业项目和博士论文，没有 DMA 和现在的学分说明。',
        after: '补齐现在的范围和学分说明；只为拿选修实习学分仍然不能申请 CPT。',
        sources: [{ label: 'University of Oregon ISSS · Curricular Practical Training', href: 'https://isss.uoregon.edu/curricular-practical-training-cpt' }],
      },
    ],
  },
  {
    date: '2026-09-27',
    changes: [
      {
        id: 'ucsb-cpt-current-page',
        category: 'CPT 学校',
        title: 'UCSB 官网重新列出 CPT 申请流程',
        summary: '校方页面说明怎么申请、获批后怎么领 CPT I-20；之前的暂停通知已撤下。',
        before: '条目依据 8 月截图和旧公告，写的是 UCSB 自 8·17 暂停签发 CPT。',
        after: '改为描述现在官网上的流程，旧截图保留作对照。',
        sources: [{ label: 'UCSB OISS · Curricular Practical Training', href: 'https://oiss.ucsb.edu/curricular-practical-training' }],
      },
      {
        id: 'h1b-separate-100k-proclamation-context',
        category: 'H-1B 收费',
        title: '分清另一笔 10 万美元入境费和 103,265 美元附加费提案',
        summary: '白宫 9·18 把针对部分境外 H-1B 的 10 万美元入境费延长到 2027·09·21；但收这笔钱的政策已被地区法院撤销，第一巡回法院也拒绝暂缓，所以目前收不了。它和 103,265 美元附加费提案是两回事。',
        before: '#02 只讲了 103,265 美元提案，没有交代另一笔 10 万美元入境费的延期和诉讼。',
        after: '详情和 30 天简报把两件事分开写，附上白宫公告和两级法院的命令。',
        sources: [
          { label: 'White House · September 18 proclamation', href: 'https://www.whitehouse.gov/presidential-actions/2026/09/restriction-on-entry-of-certain-nonimmigrant-workers-faad/' },
          { label: 'District of Massachusetts · June 8 order', href: 'https://oag.ca.gov/system/files/attachments/press-docs/H1B%20Order.pdf' },
          { label: 'First Circuit · July 24 order', href: 'https://www.ca1.uscourts.gov/sites/ca1/files/opnfiles/26-1699O-01A.pdf' },
        ],
      },
    ],
  },
  {
    date: '2026-09-26',
    changes: [
      {
        id: 'h1b-fee-comments-closed',
        category: 'H-1B 拟议收费',
        title: '#02 103,265 美元附加费提案评论期结束',
        summary: '评论 9·24 截止；DHS 还没发最终规则。',
        before: '状态是“正式提案 · 评论截至 9 月 24 日”，9·24 列在下一步，首页还有提交评论的入口。',
        after: '状态改为“正式提案 · 评论期已结束”；9·24 移入时间线，下一步是 DHS 审评论，去掉提交评论入口。',
        sources: [{ label: 'Federal Register · 2026-17324', href: 'https://www.federalregister.gov/documents/2026/08/25/2026-17324/fee-for-certain-h-1b-petitions' }],
      },
      {
        id: 'cpt-four-public-notices-added',
        category: 'CPT 学校',
        title: '新增 PLU、IU Global、Rutgers 与 UCF 的公开 CPT 通知',
        summary: 'PLU 9·25 公告：只批毕业必修的实习。另外三校较早的通知分别是：暂停大部分申请、明确合格的照常办、只批所有学生必修的。',
        before: '52 条记录：48 条校方网页、4 条社区截图；51 所不同学校。',
        after: '56 条记录：52 条校方网页、4 条社区截图；55 所不同学校。新增四条校方网页记录。',
        sources: [
          { label: 'Pacific Lutheran University ISS', href: 'https://www.plu.edu/iss/announcements/' },
          { label: 'Indiana University · IU Global', href: 'https://www.oid.iu.edu/resources/visa-immigration-updates.html' },
          { label: 'Rutgers Global Alerts', href: 'https://global.rutgers.edu/all-alerts' },
          { label: 'UCF Global', href: 'https://global.ucf.edu/immigrationupdates/' },
        ],
      },
    ],
  },
  {
    date: '2026-09-24',
    changes: [
      {
        id: 'cpt-texas-state-added',
        category: 'CPT 学校',
        title: '补入 Texas State 的 CPT 条件',
        summary: '校方说明：只选实习课或拿学分不够，实习必须是课程必修；申请流程照常，没有全面暂停。',
        before: '51 条记录：47 条校方网页、4 条社区截图；50 所不同学校。',
        after: '52 条记录：48 条校方网页、4 条社区截图；51 所不同学校。',
        sources: [{ label: 'Texas State University ISSS', href: 'https://www.international.txst.edu/current-f1-students/work-authorization/cpt.html' }],
      },
      {
        id: 'cpt-columbia-hardship-fund',
        category: 'CPT 学校',
        title: 'Columbia 更新 CPT 应对时间线及困难基金信息',
        summary: '校方 9·24 页面列出对受影响学生的安排，2026 秋季困难补助 9·23 开放申请；CPT 审批标准没变。',
        before: 'CPT 条目写了 Columbia 的必修要求、暂停范围和已有授权的处理，没有困难补助。',
        after: '补入 9·24 的时间表和 9·23 开放困难补助；审批标准不变。',
        sources: [{ label: 'Columbia ISSO · F-1 CPT', href: 'https://isso.columbia.edu/content/f-1-cpt-curricular-practical-training' }],
      },
    ],
  },
{
  "date": "2026-09-23",
  "changes": [
    {
      "id": "duration-cra-senate-calendar",
      "category": "国会动向",
      "title": "推翻 D/S 新规的决议进入参议院待议清单",
      "summary": "S.J.Res.213 9·17 经请愿进入参议院待议清单（第 668 号）；众议院版本是 H.J.Res.215。",
      "before": "D/S 条目只记录了 9·14 提出决议，没有编号。",
      "after": "补入两院决议编号、9·17 进入待议清单的时间点和 GovInfo 来源，并加入 30 天简报。还没有表决；法院暂缓另外跟踪。",
      "sources": [
        {
          "label": "GovInfo · S.J.Res.213 列入议程文本",
          "href": "https://www.govinfo.gov/app/details/BILLS-119sjres213pcs"
        },
        {
          "label": "GovInfo · H.J.Res.215",
          "href": "https://www.govinfo.gov/app/details/BILLS-119hjres215ih"
        }
      ]
    },
    {
      "id": "h1b-program-integrity-fr-text-verified",
      "category": "行政命令",
      "title": "#12 联邦公报刊登版和白宫原文一致",
      "summary": "联邦公报刊登版（91 FR 60501—60503）和白宫原文内容一致，只有排版、页码和签名行不同。",
      "before": "编号和刊登信息来自联邦公报的检索结果。",
      "after": "来源和时间线补上 91 FR 页码；命令内容、状态和 10·18 期限不变。",
      "sources": [
        {
          "label": "GovInfo · 2026-19555",
          "href": "https://www.govinfo.gov/content/pkg/FR-2026-09-23/pdf/2026-19555.pdf"
        }
      ]
    },
    {
      "id": "cpt-vanderbilt-stony-brook-uci",
      "category": "CPT 学校",
      "title": "补录 Vanderbilt 与 Stony Brook，更新 UC Irvine",
      "summary": "新增两校的公开通知；UC Irvine 页面改为常设政策说明，并新增论文必需 CPT。",
      "before": "49 条记录：45 条校方网页、4 条社区截图；48 所不同学校。",
      "after": "51 条记录：47 条校方网页、4 条社区截图；50 所不同学校。UT Dallas、UC Irvine、Washington State 更新了核对日期。",
      "sources": [
        {
          "label": "Vanderbilt University",
          "href": "https://www.vanderbilt.edu/isss/2026/09/15/updates-to-curricular-practical-training-eligibility/"
        },
        {
          "label": "Stony Brook University",
          "href": "https://www.stonybrook.edu/visa/resources/news-and-events/immigration-policy-updates/cpt-new-guidance.html"
        },
        {
          "label": "UC Irvine",
          "href": "https://ic.uci.edu/welcome-students/students-current-students/students-current-employment-information/curricular-practical-training/"
        }
      ]
    },
    {
      "id": "h1b-program-integrity-eo-14431",
      "category": "行政命令",
      "title": "#12 补上编号：第 14431 号行政命令",
      "summary": "联邦公报 9·23 刊登了 9·18 签署的 H-1B 裁员审查行政命令，编号 EO 14431（FR Doc. 2026-19555）。",
      "before": "文件编号显示为“2026-09-18 行政命令”，还没有编号；来源是白宫原文和论坛讨论。",
      "after": "文件编号改为“行政命令 14431”，新增 9·23 联邦公报刊登的时间点和来源。命令内容、状态和 10·18 开始复查 LCA 的期限不变。",
      "details": [
        "编号和刊登信息来自联邦公报官网的检索结果。"
      ],
      "sources": [
        {
          "label": "联邦公报 · EO 14431",
          "href": "https://www.federalregister.gov/documents/2026/09/23/2026-19555/enhancing-program-integrity-and-interagency-coordination-in-the-administration-of-the-h-1b"
        }
      ]
    }
  ]
},
{
  "date": "2026-09-22",
  "changes": [
    {
      "id": "cpt-kennesaw-toledo",
      "category": "CPT 学校",
      "title": "补录 Kennesaw State 与 Toledo 的 CPT 限制",
      "summary": "两校公开页面收紧了非必修实习的 CPT 资格。",
      "before": "47 条记录：43 条校方网页、4 条社区截图；46 所不同学校。",
      "after": "49 条记录：45 条校方网页、4 条社区截图；48 所不同学校。Kennesaw State 只开放三个专业；Toledo 没有全面暂停。",
      "sources": [
        {
          "label": "Kennesaw State University",
          "href": "https://campus.kennesaw.edu/current-students/academics/global-education/international-student-scholar-services/f-1/curricular-practical-training.php"
        },
        {
          "label": "University of Toledo",
          "href": "https://www.utoledo.edu/cisp/international/CPT.html"
        }
      ]
    }
  ]
},
{
  "date": "2026-09-20",
  "changes": [
    {
      "id": "duration-cra-introduced",
      "category": "国会动向",
      "title": "D/S：补入推翻新规的国会决议",
      "summary": "补入参议员官网 9·14 的公告和决议文本：要用《国会审查法》（CRA）推翻 D/S 新规。",
      "before": "D/S 条目记录了法院全国暂缓和 10·02 进度会议，没有国会决议。",
      "after": "新增决议提出的时间点、原文来源和简报；决议还要两院通过、总统签署才生效，和法院暂缓分开跟踪。",
      "sources": [
        {
          "label": "Durbin 官网公告",
          "href": "https://www.durbin.senate.gov/newsroom/press-releases/durbin-blumenthal-padilla-whitehouse-jayapal-raskin-introduce-cra-resolution-of-disapproval-regarding-regulation-that-changes-how-international-students-and-journalists-maintain-immigration-status"
        },
        {
          "label": "联合否决决议文本",
          "href": "https://www.durbin.senate.gov/download/cra-on-student-visa-rule&download=1"
        }
      ]
    },
    {
      "id": "cpt-wm-rochester-purdue-evidence",
      "category": "CPT 学校",
      "title": "新增两校通知，Purdue ISS 用公开网页确认",
      "summary": "补入 William & Mary 9·16 和 Rochester 8·28 的公告，并用 Purdue ISS 的公开网页确认了原来邮件里的说法。",
      "before": "45 条证据记录：40 条校方网页、5 条社区截图；44 所不同学校。",
      "after": "47 条记录：43 条校方网页、4 条社区截图；46 所不同学校。Purdue ECE 和 ISS 仍是同一所学校的两条记录。",
      "sources": [
        {
          "label": "William & Mary",
          "href": "https://www.wm.edu/offices/revescenter/issp/visasandimmigration/immigration-updates/"
        },
        {
          "label": "University of Rochester",
          "href": "https://www.rochester.edu/provost/important-update-for-international-students-on-cpt/"
        },
        {
          "label": "Purdue ISS · CPT",
          "href": "https://www.purdue.edu/gpp/iss/student/f1/employment/cpt.html"
        }
      ]
    }
  ]
},
{
  "date": "2026-09-19",
  "changes": [
    {
      "id": "h1b-program-integrity-added",
      "category": "行政命令",
      "title": "新增 #12 H-1B 裁员审查行政命令",
      "summary": "总统 9·18 签署行政命令：各部门审 H-1B 时要考虑雇主的相关裁员，劳工部 30 天内开始复查以前的 LCA。",
      "before": "网站收录 11 项政策，还没有这份行政命令。",
      "after": "新增 #12，共 12 项政策。状态：已签署，各部门落实中；行政命令不经过提案和公众评论。",
      "details": [
        "命令要求考虑的裁员要同时满足三条：递交申请的雇主、同类岗位、过去一年内或已计划；命令没说有裁员就拒签。",
        "10·18（签署后 30 天）是劳工部开始复查以前 LCA 的最晚日期。",
        "#02 的 103,265 美元附加费是 DHS 的另一份提案，分开跟踪。"
      ],
      "sources": [
        {
          "label": "白宫 · 9·18 行政命令全文",
          "href": "https://www.whitehouse.gov/presidential-actions/2026/09/enhancing-program-integrity-and-integrity-and-interagency-coordination-in-the-administration-of-the-h-1b-nonimmigrant-visa-program/"
        }
      ]
    }
  ]
},
  {
    date: '2026-09-17',
    changes: [{
      id: 'perm-modernization-added',
      category: '规则制定',
      title: 'H-1B 路径新增 #11 PERM 改革',
      summary: 'DOL 的 PERM 改革提案（RIN 1205-AC29）9·14 送交 OIRA 审查，涉及招聘方式、裁员保护和雇主合规。',
      before: 'H-1B 路径此前没有单列 RIN 1205-AC29，网站共收录 10 项政策。',
      after: '新增 #11，共 11 项政策。状态：OIRA 审查中；具体条款、评论期和生效日期等提案公布。',
      details: ['计划表里的 2026 年 7 月是原定公布提案的月份。本项和 #06 工资提案（RIN 1205-AC30）分开跟踪。'],
      sources: [
        { label: 'OIRA · RIN 1205-AC29 · September 14', href: 'https://www.reginfo.gov/public/do/eoDetails?rrid=1532863' },
        { label: '统一议程 · PERM 改革', href: 'https://www.reginfo.gov/public/do/eAgendaViewRule?pubId=202510&RIN=1205-AC29' },
      ],
    }, {
      id: 'perm-modernization-directions',
      category: '内容补充',
      title: 'PERM 条目改写，补上五种业内推测',
      summary: '#11 的中文说明改写得更直白，新增业内预测的五项招聘变化，并补上 8·04 司法部和 OpenAI 的和解。',
      before: '原来只笼统写了“招聘和留档要求可能提高”，没有列出可能的渠道变化，也没有提到司法部和解。',
      after: '新增“业内预测的五项变化”：取消强制报纸广告；改用社交媒体等现代渠道、去掉电台电视；不再要求邮寄简历；在公司招聘页面发布职位；通过 ATS 接收申请。页面写明这些是预测，不是已公布的条款。',
      details: [
        '2026-08-04 司法部与 OpenAI 就 PERM 招聘歧视达成 320 万美元和解，要求它公开发布职位、接受网上申请；司法部认定“只收邮寄纸质申请”和“深夜投放电台广告”会劝退美国求职者。这和上面几项预测方向一致。',
        '规则还在 OIRA 审查，五项预测都还没生效，具体以提案为准。',
      ],
      sources: [
        { label: '司法部 · OpenAI PERM 和解（2026-08-04）', href: 'https://www.justice.gov/opa/pr/civil-rights-division-secures-settlement-openai-discriminating-against-us-workers' },
        { label: 'OIRA · RIN 1205-AC29 · September 14', href: 'https://www.reginfo.gov/public/do/eoDetails?rrid=1532863' },
        { label: '统一议程 · PERM 改革', href: 'https://www.reginfo.gov/public/do/eAgendaViewRule?pubId=202510&RIN=1205-AC29' },
      ],
    }, {
      id: 'ut-dallas-cpt-catalog-requirement',
      category: 'CPT 学校',
      title: 'UT Dallas 改为只批学位目录要求的实习课',
      summary: 'ISSO 9·17 新通知取代了 8·25 的“流程不变”：按 SEVP 的澄清，只有学位目录写明要修实习课的学生才能批 CPT，没有个案例外。',
      before: '条目原来写的是“截至 8·25 流程不变”。',
      after: '改为“9·17 起只批学位目录要求的实习课”。目录没有这项要求的学生不能批；需要在校外做论文研究的研究生可以申请 Academic CPT。',
      details: ['同时把 UC Irvine 的条目从“8·17 起暂停 Course Credit CPT”更新为页首 9·14 的三项条件：学位要求、所有学生必修、学校和雇主有合作协议。'],
      sources: [
        { label: 'UT Dallas ISSO · 9·17 CPT 政策通知', href: 'https://isso.utdallas.edu/2026/09/17/update-on-cpt-policy-sevp-broadcast/' },
        { label: 'UC Irvine International Center · CPT 页面', href: 'https://ic.uci.edu/welcome-students/students-current-students/students-current-employment-information/curricular-practical-training/' },
      ],
    }],
  },
{
  "date": "2026-09-16",
  "changes": [
    {
      "id": "cpt-bryn-mawr-buffalo-dearborn",
      "category": "CPT 学校",
      "title": "新增 Bryn Mawr、Buffalo、Michigan–Dearborn 的 CPT 通知",
      "summary": "Bryn Mawr 9·15 宣布暂停新的选修型 CPT；补入 Buffalo 的学位必修例外，以及 Dearborn 只开放两个硕士项目。",
      "before": "37 条公开校方证据、5 条社区证据，共 42 条，覆盖 41 所不同学校／校区。",
      "after": "40 条公开校方证据、5 条社区证据，共 45 条，覆盖 44 所不同学校／校区。Purdue 两条院系／校级证据仍只计一所学校。",
      "details": [
        "Buffalo 和 Dearborn 已批的 2026 秋季 CPT 可以继续。Dearborn 只开放应用行为分析和临床健康心理学两个硕士项目，本条只适用于 Dearborn 校区。",
        "Berkeley 明确说 CPT 指引和 D/S 新规是两回事：D/S 被暂缓，选修型 CPT 不会因此恢复。"
      ],
      "sources": [
        {
          "label": "Bryn Mawr · 9/15",
          "href": "https://www.brynmawr.edu/inside/offices-services/impact-center/international-advising/issa-announcements"
        },
        {
          "label": "University at Buffalo · CPT FAQ",
          "href": "https://www.buffalo.edu/international-student-services/immigration-visa/f-1-student/curricular-practical-training--cpt-/cpt-policy-change---faqs.html"
        },
        {
          "label": "Michigan–Dearborn · OIA",
          "href": "https://umdearborn.edu/office-international-affairs/important-updates"
        },
        {
          "label": "UC Berkeley · CPT",
          "href": "https://internationaloffice.berkeley.edu/students/employment/cpt"
        }
      ]
    }
  ]
},
{
  "date": "2026-09-14",
  "changes": [
    {
      "id": "duration-nationwide-stay",
      "category": "03 · D/S",
      "title": "法院全国暂缓 D/S 新规，原定 9·15 生效日作废",
      "summary": "法院美东下午 4:55 发出初步禁令，在全国范围推迟整项新规生效，并禁止 DHS/ICE 执行。",
      "before": "9·03 听证后等裁定；如果法院不暂缓，新规 9·15 生效。",
      "after": "全国暂缓持续到法院另有命令或作出最终判决；新规还没被永久撤销，也没有新的生效日。10·02 中午 12 点在波士顿第 1 法庭开进度会议。",
      "details": [
        "法院意见（第 50 项）第 46—48 页写明暂缓适用于全国，不只是起诉学校；第 51 项命令第 2—5 段写明范围和期限。",
        "原告要求直接撤销新规的请求被驳回，但可以再提。8 月的 CPT 指引是另一份文件，不受这个命令影响。"
      ],
      "sources": [
        {
          "label": "9·14 初步禁令 · 第 51 项",
          "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.51.0.pdf"
        },
        {
          "label": "9·14 法院意见 · 第 50 项",
          "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.50.0.pdf"
        },
        {
          "label": "案卷第 52 项 · 状态会议",
          "href": "https://www.courtlistener.com/docket/74661796/feed/"
        }
      ]
    },
    {
      "id": "cpt-uw-followup-wsu",
      "category": "CPT 学校",
      "title": "补入 UW 的后续处理和 WSU 2027 春季的全职 CPT 限制",
      "summary": "UW 9·08 通知：秋季待审的非必修 CPT 一律驳回。新增 WSU 8·07 公告，这是学校自己的计划，早于 8 月 SEVP 指引。",
      "before": "UW 原来只记录了新申请暂停。当时共 41 条记录（36 条校方网页、5 条社区截图），覆盖 40 所学校。",
      "after": "UW 写明待审申请怎么处理、需要顾问证明。加上 WSU 后共 42 条记录（37 条校方网页、5 条社区截图），覆盖 41 所学校。",
      "details": [
        "WSU 从 2027 春季起限制学期内的全职 CPT，课程必修的实习除外；暑期和兼职不受影响。",
        "这是 WSU 学校自己的规定，不是联邦政策。"
      ],
      "sources": [
        {
          "label": "UW · 9·08 后续通知",
          "href": "https://iss.washington.edu/follow-up-on-cpt-policy/"
        },
        {
          "label": "WSU · 8·07 公告",
          "href": "https://ip.wsu.edu/august-7th-2026-special-immigration-advisory/"
        }
      ]
    }
  ]
},
{
  "date": "2026-09-13",
  "changes": [
    {
      "id": "cpt-bc-jhu",
      "category": "CPT 学校",
      "title": "新增 Boston College 和 Johns Hopkins 的 CPT 通知",
      "summary": "BC 暂停不是所有学生必修的校外 CPT。JHU 新申请和待审申请只批毕业必修、符合 SEVP 备忘录的实践。",
      "before": "共 39 条记录（34 条校方网页、5 条社区截图），覆盖 38 所学校。",
      "after": "共 41 条记录（36 条校方网页、5 条社区截图），覆盖 40 所学校。JHU 页面下方的旧选修说法以页首通知为准。",
      "sources": [
        {
          "label": "Boston College OISS · September 9",
          "href": "https://www.bc.edu/content/bc-web/sites/global-engagement/sites/office-of-international-students-and-scholars/maintain/jcr%3Acontent/bottompar/bc_padded_section/par/bc_news_notes.newsItems.html"
        },
        {
          "label": "Johns Hopkins OIS · CPT",
          "href": "https://ois.jhu.edu/students/current-f-1-students/f-1-training-and-employment/curricular-practical-training/"
        }
      ]
    }
  ]
},
{
  "date": "2026-09-12",
  "changes": [
{
  "id": "duration-hearing-transcript",
  "category": "诉讼",
  "title": "补入 D/S 庭审记录和 9·14 的裁定目标",
  "summary": "庭审记录第 70 页：法官希望最晚 9·14 作出决定，也提到可能先发短期临时禁令。",
  "before": "原来只写了 9·03 听证后留待裁定，没有庭审原文和时间目标。",
  "after": "新增 NAFSA 托管的官方庭审记录、9·14 的目标日期和可能先发的短期临时禁令，并写清法官提问和政府答辩分别是谁说的。",
  "sources": [
    {
      "label": "Official September 3 hearing transcript · p. 70",
      "href": "https://www.nafsa.org/sites/default/files/media/document/PI%20Hearing%20Court%20Transcript.pdf#page=70"
    }
  ]
},
{
  "id": "opt-oira-completed",
  "category": "规则制定",
  "title": "OPT 收费规则 9·11 审完",
  "summary": "OIRA 的结论是 Consistent with Change（要求修改后同意发布）；提案还没公布。",
  "before": "网站显示 OIRA 审查中，用的是旧的审查记录。",
  "after": "改为 9·11 审完（有修改）。金额、由谁交、适用范围和豁免要等提案公布。",
  "sources": [
    {
      "label": "OIRA · RIN 1653-AB01",
      "href": "https://www.reginfo.gov/public/do/eoDetails?rrid=1506461"
    }
  ]
},
{
  "id": "comment-direction-review",
  "category": "公众评论",
  "title": "四项政策的公众评论统计改按“支持还是反对收紧”归类",
  "summary": "重新审了同一批 800 条样本：只要评论表达了支持或反对收紧，就计入相应一方，不再要求评论明确提到提案的具体条款。共 123 条改了归类。",
  "before": "按具体提案立场统计（反对／支持／条件或混合／不明确）：H-1B 为 110／49／11／30。宽限期 150／30／12／8。工资门槛 120／35／18／27。I-765 152／1／1／46。",
  "after": "按政策方向统计（反对收紧／支持收紧／条件或混合／不明确）：H-1B 为 110／83／1／6。宽限期 156／32／6／6。工资门槛 119／67／2／12。I-765 195／1／0／4。",
  "details": [
    "要求进一步收紧、甚至取消相关签证的，归为支持收紧；维护合法工作机会的，归为反对收紧。",
    "样本编号、随机种子和采样时间都没变；正文或附件读不到的评论，逐条标注。"
  ],
  "sources": [
    {
      "label": "Regulations.gov · H-1B 用工评论 3552",
      "href": "https://www.regulations.gov/comment/USCIS-2026-0298-3552"
    },
    {
      "label": "Regulations.gov · I-765 工作许可诉求 4483",
      "href": "https://www.regulations.gov/comment/USCIS-2026-0067-4483"
    }
  ]
},
{
  "id": "jmu-cpt-pause",
  "category": "CPT 学校清单",
  "title": "新增 JMU 的 CPT 暂停通知",
  "summary": "JMU 在审查课程和流程期间，新申请和待审申请暂不作决定。",
  "before": "38 条记录：33 条校方网页、5 条社区截图，覆盖 37 所学校／校区。",
  "after": "39 条记录：34 条校方网页、5 条社区截图，覆盖 38 所学校／校区。",
  "details": [
    "页面日期是 9·10，CPT 一栏的标题写的是 2026 年 8 月。",
    "通知没有给出恢复日期。"
  ],
  "sources": [
    {
      "label": "JMU · Immigration Announcements",
      "href": "https://www.jmu.edu/global/isss/announcements.shtml"
    }
  ]
},
    {
      "id": "grace-nprm-published",
      "category": "规则制定",
      "title": "取消 60 天宽限期的提案正式刊登",
      "summary": "提案 9·11 正式刊登，评论 11·10 美东午夜前截止。",
      "before": "9·10 预览公开，预定 9·11 刊登，评论截止日等正式版。",
      "after": "9·11 刊登于 91 FR 57807，评论到 2026-11-10。现行宽限期照常。",
      "sources": [
        {
          "label": "Federal Register · 91 FR 57807",
          "href": "https://www.govinfo.gov/content/pkg/FR-2026-09-11/pdf/2026-18631.pdf"
        }
      ]
    }
  ]
},
{
  "date": "2026-09-10",
  "changes": [
{
  "id": "h1b-fee-table13-correction",
  "category": "规则制定",
  "title": "H-1B 附加费提案发布更正",
  "summary": "9·10 更正替换了 Table 13 的历史申请数；103,265 美元、适用范围和 9·24 评论截止都没变。",
  "sources": [
    {
      "label": "Federal Register C1-2026-17324",
      "href": "https://www.govinfo.gov/content/pkg/FR-2026-09-10/pdf/C1-2026-17324.pdf"
    }
  ]
},
{
  "id": "penn-resumption-georgetown-cpt",
  "category": "CPT 学校清单",
  "title": "Penn 有条件恢复办理 CPT；新增 Georgetown",
  "summary": "Penn 9·10 页首通知：符合条件的申请恢复办理。Georgetown 9·09：选修实习不能申请。",
  "before": "Penn 原来记录为新申请和待审申请暂停决定。当时共 37 条记录（32 条校方网页、5 条社区截图），覆盖 36 所学校／校区。",
  "after": "Penn 改为按课程要求有条件恢复办理。加上 Georgetown 共 38 条记录（33 条校方网页、5 条社区截图），覆盖 37 所学校／校区。",
  "details": [
    "Penn 要求院系确认课程要求、雇主签合作协议，并拿到新的 I-20。",
    "Georgetown 已联系待审学生和已获秋季授权的学生，讨论影响和选择。"
  ],
  "sources": [
    {
      "label": "Penn ISSS · September 10",
      "href": "https://global.upenn.edu/isss/cpt/"
    },
    {
      "label": "Georgetown OGS · September 9",
      "href": "https://internationalservices.georgetown.edu/immigration-updates/"
    }
  ]
},
    {
      "id": "grace-period-nprm-preview",
      "category": "规则制定",
      "title": "取消 60 天宽限期的提案预览公开",
      "summary": "#08：提案预览写明涉及八类工作签证及其家属。",
      "before": "OIRA 已审完，等提案公布，日期未定。",
      "after": "9·10 预览公开，预定 9·11 正式刊登。拟取消 E-1、E-2、E-3、H-1B、H-1B1、L-1、O-1、TN 及其家属在工作提前结束后最长 60 天的宽限期。评论期为刊登后 60 天。有其他合法身份的人不受影响。",
      "sources": [
        {
          "label": "Federal Register 2026-18631",
          "href": "https://public-inspection.federalregister.gov/2026-18631.pdf"
        }
      ]
    }
  ]
},
{
  "date": "2026-09-09",
  "changes": [
{
  "id": "penn-neu-cpt-public-sources",
  "category": "CPT 学校清单",
  "title": "新增 Penn 暂停审批和 Northeastern 工程学院硕士实习限制",
  "summary": "根据校方网页新增两条记录。Penn 通知 8·27 发布、页面 8·31 更新；NEU 的规定没有写发布日期。",
  "before": "35 条记录：30 条校方网页、5 条社区截图，覆盖 34 所学校／校区；还没有 Penn 和 Northeastern。",
  "after": "37 条记录：32 条校方网页、5 条社区截图，覆盖 36 所学校／校区。Penn 暂停对新申请和待审申请作决定；Northeastern 工程学院硕士只能做一次 co-op／实习，最长 8 个月。",
  "details": [
    "Penn 已批的 CPT 不受这次暂停影响。",
    "NEU 这条只适用于工程学院硕士。"
  ],
  "sources": [
    {
      "label": "Penn ISSS CPT",
      "href": "https://global.upenn.edu/isss/cpt/"
    },
    {
      "label": "Northeastern COE graduate co-op FAQ",
      "href": "https://coe.northeastern.edu/academics-experiential-learning/co-op-experiential-learning/co-op/graduate-co-op/co-op-faqs/"
    }
  ]
},
    {
      "id": "ucla-cpt-public-source",
      "category": "CPT 学校清单",
      "title": "UCLA 改用校方公开通知作依据",
      "summary": "Dashew Center 公开了 9·08 通知，补充了论文研究、已有授权和合作协议的要求。学校数不变。",
      "before": "UCLA 原来只有邮件截图：暂停不是学位必修的课程学分／推荐信 CPT。当时 35 条记录中 29 条校方网页、6 条社区截图。",
      "after": "UCLA 改为校方公开通知：不是所有学生毕业必修的课程学分／推荐信 CPT 暂停，学位必修的照常。35 条记录变为 30 条校方网页、5 条社区截图，仍覆盖 34 所学校／校区。",
      "details": [
        "论文、研究或 capstone 需要的实践，必须是 UCLA General Catalog 里所有学生的项目要求。",
        "8·12 前已批并签发 CPT I-20 的不受影响；所有 CPT 申请都要附院系和雇主的合作协议。"
      ],
      "sources": [
        {
          "label": "UCLA Dashew Center · September 8 notice",
          "href": "https://internationalcenter.ucla.edu/September8message"
        },
        {
          "label": "UCLA Dashew Center Messages",
          "href": "https://internationalcenter.ucla.edu/dashew-center-messages"
        }
      ]
    }
  ]
},
{
  "date": "2026-09-08",
  "changes": [
    {
      "id": "northwestern-cpt-september3-policy",
      "category": "CPT 学校清单",
      "title": "Northwestern 明确：不是所有学生必修的 CPT 不批",
      "summary": "校方 CPT 页面链接的 9·03 通知写明：除非 SEVP 改指引，学校不能批准不是项目所有学生必修的实践。",
      "before": "不是所有学生必修的 CPT 申请暂停；学校审核期间只处理所有学生必修的。",
      "after": "不再批不是所有学生必修的 CPT，除非 SEVP 改指引；OISS 正和各项目核对资格。",
      "sources": [
        {
          "label": "Northwestern OISS CPT webpage",
          "href": "https://www.northwestern.edu/international/international-students/student-employment/f-1-practical-training/curricular-practical-training/"
        },
        {
          "label": "Northwestern OISS September 3 notice",
          "href": "https://mailchi.mp/37923185e320/international-student-newsletter-month-day-5100682"
        }
      ]
    }
  ]
},
{
  "date": "2026-09-07",
  "changes": [
    {
      "id": "gmu-cpt-public-source",
      "category": "CPT 学校清单",
      "title": "新增 George Mason 的 CPT 说明，记录增至 35 条",
      "summary": "OIPS 公开的政策审核说明：2026 秋季的 CPT，证明不了是项目所有学生毕业必修的，暂停审理。",
      "before": "34 条记录：28 条校方网页、6 条社区截图，去重后 33 所学校／校区；还没有 George Mason。",
      "after": "35 条记录：29 条校方网页、6 条社区截图，去重后 34 所学校／校区。新增 George Mason。",
      "details": [
        "选修课，或只是多个可选毕业方式之一的实习，都不符合标准。",
        "Purdue ECE 与校级 ISS 合并计为一所；UMD College Park 与 UMBC 继续按独立校区分别计数。"
      ],
      "sources": [
        {
          "label": "George Mason OIPS：Important CPT Policy Review",
          "href": "https://oips.gmu.edu/current-immigration-information/"
        }
      ]
    },
    {
      "id": "purdue-ece-research-scope-clarification",
      "category": "CPT 证据摘要更正",
      "title": "Purdue ECE 摘要补回“论文研究另问 ISS”",
      "summary": "原邮件最后一段说，论文研究需要的工作要另外问 ISS，之前的摘要漏了这句。",
      "before": "院系邮件截图写的是本学期不签 CPT。",
      "after": "院系邮件截图：本学期不批非必修的实习／co-op CPT；论文研究需要的工作另问 ISS。这是 ECE 院系的说法。",
      "sources": [
        {
          "label": "Purdue ECE 原邮件截图（末段）",
          "href": "/cpt-evidence/cpt_purdue.jpeg"
        }
      ]
    },
    {
      "id": "duration-status-academic-restrictions-clarification",
      "category": "政策说明更正",
      "title": "#03 讲清退博后的 OPT 问题和再读学位的限制",
      "summary": "之前的例子没解释新规怎么影响退博拿硕士后的 OPT，也漏了“同级或更低学位”限制只算生效后的学位。现在按最终规则和 Rice 的说明补上。",
      "before": "退博拿硕士后写的是“确认能否申请 OPT”；拿完美国学位后原则上不能再读同级或更低学位。",
      "after": "新规禁止研究生在读期间换学位层级。Rice 说明学校可以发硕士学位，但不能把博士 SEVIS 记录改成硕士，所以不能凭这个硕士申请 OPT。同级或更低学位的限制，不算新规生效前拿到的学位。",
      "sources": [
        {
          "label": "2026 最终规则",
          "href": "https://www.federalregister.gov/documents/2026/07/17/2026-14439/establishing-a-fixed-time-period-of-admission-and-an-extension-of-stay-procedure-for-nonimmigrant"
        },
        {
          "label": "Rice 博士退出与学位限制说明",
          "href": "https://oiss.rice.edu/dhs-final-rule-elimination-duration-status-new-academic-mobility-restrictions"
        }
      ]
    }
  ]
},
  {
    "date": "2026-09-06",
    "changes": [
      {
        "id": "cpt-broadcast-august12-correction",
        "category": "政策内容更正",
        "title": "#05 更正 CPT 指引的起始日期",
        "summary": "8·12 广播第二页已经提出“所有学生毕业必修”的标准；9·01 日志把它只算在 8·24 名下，现在更正。8·24 的问答是进一步解释选修课、美国学生和合作协议。",
        "before": "8·12 只写成合规提醒；更窄的 integral 标准和学校的反应都从 8·24 算起。",
        "after": "8·12 就已要求 CPT 是学位不可缺少、所有学生必修的环节，8·24 进一步解释；学校反应的时间线改为从 8·12 之后开始。",
        "sources": [
          {
            "label": "SEVP 8·12 Broadcast，第 2 页",
            "href": "https://www.ice.gov/doclib/sevis/pdf/bcm260801.pdf"
          },
          {
            "label": "SEVP 8·24 Broadcast（MIT 保存的原文）",
            "href": "https://iso.mit.edu/wp-content/uploads/2026/08/2026_0824_SEVP_BroadcastMessage2608-02_CPT_Guidance.pdf"
          }
        ]
      },
      {
        "id": "cpt-school-records-2026-09-06",
        "category": "CPT 学校清单",
        "title": "新增 9 所学校的 CPT 记录",
        "summary": "新增 Utah、Delaware、UC San Diego、UMBC、GWU、CU Boulder、UW–Milwaukee、Oregon 和 Kansas。加上 UCI 改用校方网页，记录从 25 条增至 34 条，覆盖 33 所学校。日期写的是各校原通知的发布日期。",
        "before": "25 条记录 · 18 条校方网页 / 7 条邮件截图，24 所不同院校。",
        "after": "34 条记录 · 28 条校方网页 / 6 条邮件截图，33 所不同院校。",
        "details": [
          "University of Utah：9·03 起暂停不是所有学生必修的新 CPT（optional CPT）。UAtlas 仍可提交，但审核结束前不批。已有的 CPT 按当前 I-20 上的雇主、地点和日期继续。",
          "University of Delaware：9·02 公告，CGPS 暂停选修型（optional）CPT。学生仍可提交，但审核结束前不发新授权，处理也可能变慢。",
          "UC San Diego：ISEO 页面暂停 iServices 里的全部 CPT 请求。9·02 说明会第 12 页说计划 9 月中旬重开，并要求院系证明实习是必修的。",
          "University of Maryland, Baltimore County：OISS 9·04 更新，待审和新的申请都只批专业所有学生必修的实践；已签发的 2026 秋季 CPT 不会撤销。本条为 UMBC 校区。",
          "George Washington University：ISO 9·02 公告，不再批准不是学位项目所有学生必修的新 CPT；已有的 CPT 按当前 I-20 的条件继续。",
          "University of Colorado Boulder：8·31 更新，只批校方列出的、学位或主修毕业必修的实践，minor 不算；只为拿选修学分的实习不批。已批的 2026 秋季 CPT 不受影响。",
          "University of Wisconsin-Milwaukee：8·24 起只批学位项目所有学生明确必修的实践；8·24 前已批的 CPT 可以用到当前授权结束。",
          "University of Oregon：只为拿选修实习学分的 CPT 不再批。新政策要求实践是课程和学位的必要部分；页面另列所有学生必修、必修的硕士论文／毕业项目和博士论文这几种情况，研究类要导师详细说明。",
          "University of Kansas：ISS 2026 年 8 月更新，在确定哪些情况还能批之前，暂停所有 CPT 请求。"
        ],
        "sources": [
          {
            "label": "University of Utah CPT",
            "href": "https://www.isss.utah.edu/news/posts/2026/cpt-broadcast-message-update.php"
          },
          {
            "label": "University of Delaware CPT",
            "href": "https://www.udel.edu/academics/global/isss/announcements/"
          },
          {
            "label": "UC San Diego CPT",
            "href": "https://iseo.ucsd.edu/student-services/working-in-us/f1-cpt.html"
          },
          {
            "label": "UC San Diego 9·02 说明会，第 12 页",
            "href": "https://iseo.ucsd.edu/_files/student-services/working-in-us/Students_Understanding_CPT_9_2_26.pdf"
          },
          {
            "label": "University of Maryland, Baltimore County CPT",
            "href": "https://isss.umbc.edu/updates/"
          },
          {
            "label": "George Washington University CPT",
            "href": "https://internationalservices.gwu.edu/updated-guidance-curricular-practical-training-cpt"
          },
          {
            "label": "University of Colorado Boulder CPT",
            "href": "https://www.colorado.edu/isss/2026/08/20/change-cpt-authorization-policy-faqs"
          },
          {
            "label": "University of Wisconsin-Milwaukee CPT",
            "href": "https://uwm.edu/cie/services/students/employment/curricular-practical-training/"
          },
          {
            "label": "University of Oregon CPT",
            "href": "https://isss.uoregon.edu/curricular-practical-training-cpt"
          },
          {
            "label": "University of Kansas CPT",
            "href": "https://iss.ku.edu/f-1-cpt-curricular-practical-training"
          }
        ]
      },
      {
        "id": "uci-cpt-public-source",
        "category": "CPT 学校清单",
        "title": "UCI 改用校方网页作依据",
        "summary": "国际中心公开的 CPT 页面确认 8·17 起暂停 Course Credit CPT。UCI 移到校方网页组，原邮件截图保留。",
        "before": "只有邮件截图：暂停 Course Credit CPT，毕业必修的照常。",
        "after": "公开网页确认 8·17 起暂停 Course Credit CPT；学位必修 CPT 要有 UCI 课程目录里的毕业要求作依据。",
        "sources": [
          {
            "label": "UCI International Center CPT 页面",
            "href": "https://ic.uci.edu/welcome-students/students-current-students/students-current-employment-information/curricular-practical-training/"
          }
        ]
      },
      {
        "id": "columbia-cpt-scope",
        "category": "CPT 学校清单",
        "title": "Columbia 写明暂停范围和已批 CPT 的处理",
        "summary": "用 ISSO 的 CPT 专页补上具体暂停范围，以及 8·24 前已批 CPT 怎么处理。",
        "before": "按新标准复核 CPT 申请和已批授权，受影响的学生由 ISSO 单独通知。",
        "after": "只批课程要求里、所有学生必修、并有合作协议的 CPT，其他暂停；8·24 前批下的不撤销。",
        "sources": [
          {
            "label": "Columbia ISSO CPT 页面",
            "href": "https://isso.columbia.edu/content/f-1-cpt-curricular-practical-training"
          }
        ]
      }
    ]
  },
  {
    date: '2026-09-05',
    changes: [
      {
        id: 'cpt-school-records-2026-09-05',
        category: 'CPT 学校清单',
        title: '新增 USC、Alabama，并改正计数方式',
        summary:
          '新增 USC 和 University of Alabama，记录从 23 条增至 25 条；加上 UCSB、NYU 改用校方网页，校方网页组从 14 条增至 18 条，邮件截图组从 9 条减至 7 条。同一所学校不同范围的通知，以前被当成不同学校计数，现在改为按“学校／院系记录”计数。',
        before: '23 所学校 · 14 所校方网页 / 9 所截图、邮件或论坛材料',
        after: '25 条学校／院系记录 · 18 条校方网页 / 7 条邮件截图，对应 24 所不同院校',
        details: [
          'USC：8·25 公告，8·24 起只批毕业必修的 CPT；8·24 前签发的 2026 秋季 CPT 不会撤销。',
          'University of Alabama：8·31 公告，院系要证明实践是项目或方向所有学生必修的、或是完成论文必需的，并附课程目录依据。',
          'Purdue ECE 和 Purdue ISS 是同一所学校的两条记录。以前的日志把记录数写成了学校数，这里更正。',
        ],
        sources: [
          { label: 'USC OIS 8·25 CPT 公告', href: 'https://ois.usc.edu/important-update-regarding-curricular-practical-training/' },
          { label: 'University of Alabama 8·31 CPT 公告', href: 'https://international.ua.edu/news/curricular-practical-training-cpt-changes-effective-immediately/' },
          { label: 'Purdue ECE 邮件截图', href: '/cpt-evidence/cpt_purdue.jpeg' },
          { label: 'Purdue ISS 邮件截图', href: '/cpt-evidence/cpt_purdue_iss.jpeg' },
        ],
      },
      {
        id: 'nyu-tandon-math-cpt-public-source',
        category: 'CPT 学校清单',
        title: 'NYU Tandon 数学系改用院系网页作依据',
        summary:
          'NYU Tandon 数学系的实习页写明 9·01 起暂停国际学生 CPT 审批。原来的论坛报告改为院系网页，范围限于这个数学系的本科生和研究生。',
        before: 'New York University：8·31 论坛报告说暂停 CPT，还没有校方公开页面。',
        after: 'New York University (Tandon Mathematics)：院系网页确认 9·01 起暂停审批，只适用于这个数学系。',
        sources: [
          { label: 'NYU Tandon 数学系实习政策页', href: 'https://math.nyu.edu/dynamic/sites/tandon/internships/' },
        ],
      },
      {
        id: 'ucsb-cpt-public-source',
        category: 'CPT 学校清单',
        title: 'UCSB 改用校方网页作依据',
        summary:
          'UCSB OISS 公开的 CPT 页面写明，8·17 起暂停签发 CPT，正在咨询法律顾问。该条移到校方网页组，两张邮件截图保留。',
        before: '只有邮件截图：暂停不是学位必修的新 CPT，已有的 CPT 不受影响。',
        after: '公开公告确认 8·17 起暂停签发 CPT，没有细分类别。',
        sources: [
          { label: 'UCSB OISS CPT 页面', href: 'https://oiss.ucsb.edu/curricular-practical-training' },
        ],
      },
    ],
  },
  {
    date: '2026-09-04',
    changes: [
      {
        id: 'mit-cpt-public-source',
        category: 'CPT 学校清单',
        title: 'MIT 改用校方网页作依据',
        summary:
          'MIT International Students Office 的公开 CPT 页面写明：8·24 当天已收到或待审、而且不是所有学生必修的新 CPT 申请暂停；学校会联系已获 2026 秋季 CPT 的学生商量后续。MIT 因此从邮件截图组移到校方网页组。',
        before: '23 所 · 13 所校方网页 / 10 所截图、邮件或论坛材料。MIT 原来只有通知截图。',
        after: '23 所 · 14 所校方网页 / 9 所截图、邮件或论坛材料。MIT 现在有校方公开页面支持。',
        sources: [
          {
            label: 'MIT International Students Office CPT 页面',
            href: 'https://iso.mit.edu/employment/f-1-curricular-practical-training/',
          },
        ],
      },
    ],
  },
  {
    date: '2026-09-03',
    changes: [
      {
        id: 'duration-hearing-under-advisement',
        category: '诉讼进展',
        title: 'D/S 听证已举行，申请留待裁定',
        summary:
          '法院案卷第 47 项确认 9·03 的禁令听证已经开过。双方陈述完后，法院留待裁定，也就是没有当庭作出裁决，之后会继续审议、另发书面命令。',
        before: '2026-09-03 上午 11:00 的初步禁令听证还没开。',
        after: '听证已开、双方陈述完毕，法院留待裁定。',
        details: [
          '目前新规没有被暂停。',
          '如果法院在 9·15 前不暂缓，新规按计划 9·15 生效。',
        ],
        sources: [
          {
            label: '案卷第 47 项电子书记员笔记（CourtListener/RECAP）',
            href: 'https://www.courtlistener.com/docket/74661796/feed/',
          },
        ],
      },
      {
        id: 'duration-government-opposition',
        category: '诉讼进展',
        title: 'D/S 案：政府提交反对意见',
        summary:
          '政府 9·02 提交超页申请，并附上反对意见（Exhibit A）：请法院驳回 APA § 705 暂缓、初步禁令，以及在行政记录提交前直接判决的请求，并主张任何救济都只应限于原告。这份文件是政府的意见，不是法院裁定；9·03 听证和 9·15 生效日都没变。',
        before: '政府答辩期限延至 2026-09-02，禁令申请在等政府答辩。',
        after: '政府 2026-09-02 提交反对意见；法院还没裁定。',
        details: [
          '政府说四年上限不等于要求学生四年内毕业，超期的人可以申请延期。',
          '政府认为原告说的招生减少、合规成本和项目调整只是推测或经济损失，不算无法弥补的损害。',
          '政府反对在全国范围暂停，认为就算给救济，也只应限于本案原告及其成员。',
        ],
        sources: [
          {
            label: '政府 9·02 反对意见（57 页 PDF）',
            href: 'https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.46.1.pdf',
          },
          {
            label: '诉讼 docket 汇总',
            href: 'https://clearinghouse.net/case/48393/',
          },
        ],
      },
      {
        id: 'cpt-school-evidence-2026-09-03',
        category: 'CPT 学校清单',
        title: '学校清单扩至 23 所，校方网页增至 13 所',
        summary:
          '清单从 21 所增至 23 所；有校方网页支持的从 11 所增至 13 所，截图、邮件或论坛材料组仍是 10 所。新增 University of Maryland, College Park 和 Trine University。',
        before: '21 所 · 11 所校方网页 / 10 所截图、邮件或论坛材料',
        after: '23 所 · 13 所校方网页 / 10 所截图、邮件或论坛材料',
        details: [
          'University of Maryland, College Park 9·02 公布：暂停既不是专业必修、也不是必修课程或论文研究要求的未批 CPT；已批的可以继续。',
          'Trine University 研究生 CPT 页面仍列着 2026–27 的申请截止日，说申请一直开放、按收到顺序审理；页面没有单独提到 8·24 指引。',
        ],
        sources: [
          {
            label: 'University of Maryland, College Park CPT 页面',
            href: 'https://marylandglobal.umd.edu/global-learning-all/international-students-scholars/employment-taxes/employment-f-1-international-students/curricular-practical-training-cpt',
          },
          {
            label: 'Trine University CPT 页面',
            href: 'https://www.trine.edu/international/hybrid/experiential-learning/cpt-information.aspx',
          },
        ],
      },
    ],
  },
  {
    date: '2026-09-02',
    changes: [
      {
        id: 'uc-berkeley-cpt-criteria',
        category: 'CPT 学校清单',
        title: 'UC Berkeley 明确论文型 CPT 条件',
        summary:
          '校方 CPT 页面写明论文型 CPT 的条件：只限已 Advanced to Candidacy 的论文型硕士或博士；实践必须是完成论文所必需，而且无法由其他研究或数据收集方式合理替代；逐个审批，并需要导师书面证明。Course Credit CPT 仍暂停。',
        before: '已暂停 Course Credit CPT。Degree-required 与 thesis/dissertation-required CPT 继续。',
        after: 'Course Credit CPT 仍暂停。论文型 CPT 只批同时满足四个条件的个案：已进入候选阶段、确有必要、无法替代、有导师证明。',
        sources: [
          {
            label: 'UC Berkeley International Office CPT 页面',
            href: 'https://internationaloffice.berkeley.edu/students/employment/cpt',
          },
        ],
      },
    ],
  },
  {
    date: '2026-09-01',
    changes: [
      {
        id: 'duration-hearing',
        category: '日期调整',
        title: '听证日期由 9·09 更正为 9·03',
        summary:
          '之前引用的二手报道把初步禁令听证写成 9·09，现按法院官方日历和案卷改为 2026-09-03 上午 11:00（美东）。',
        before: '2026-09-09 · 初步禁令听证（错误）',
        after: '2026-09-03 · 初步禁令听证',
        sources: [
          {
            label: '法院官方日历',
            href: 'https://forms.mad.uscourts.gov/courtlist.html',
          },
          {
            label: '诉讼 docket 汇总',
            href: 'https://clearinghouse.net/case/48393/',
          },
          {
            label: '原告方案件页面',
            href: 'https://www.presidentsalliance.org/duration-of-status-litigation/',
          },
        ],
      },
      {
        id: 'cpt-guidance-dates',
        category: '政策内容',
        title: '#05 分开说明 8·12 和 8·24 两份 CPT 指引',
        summary:
          'CPT 条目现在分别说明两份 ICE/SEVP 广播：8·12 提醒学校和 DSO 的合规责任，8·24 提出更窄的“integral”标准和合作协议要求。学校调整 CPT 的起点相应改为 8·24。（这一说法 9·06 又做了更正：8·12 已提出该标准。）',
        before: '8·12 起 · 高校按收紧后的资格标准调整 CPT',
        after: '8·12 合规提醒；8·24 收紧资格标准，学校随后调整',
        sources: [
          {
            label: 'SEVP 8·12 Broadcast',
            href: 'https://www.ice.gov/doclib/sevis/pdf/bcm260801.pdf',
          },
          {
            label: 'SEVP 8·24 Broadcast',
            href: 'https://www.ice.gov/doclib/sevis/pdf/bcm_260802.pdf',
          },
        ],
      },
      {
        id: 'cpt-school-evidence',
        category: 'CPT 学校清单',
        title: '学校清单扩至 21 所，证据类别同步更新',
        summary:
          '清单由 13 所扩至 21 所。有校方网页支持当前状态的学校由 6 所增至 11 所，只有截图、邮件或论坛文字材料的学校由 7 所增至 10 所。',
        before: '13 所 · 6 所校方网页 / 7 所论坛材料',
        after: '21 所 · 11 所校方网页 / 10 所截图、邮件或论坛材料',
        details: [
          'University of Michigan 从论坛材料升级为校方网页来源。',
          'Northwestern、Columbia、Harvard 按校方页面加入清单。',
          'New York University 根据 8·31 论坛报告加入，标为等待校方公开页面。',
          'University of Washington 根据校方通知加入：暂停不是所有学生必修的新 CPT，已批的可以继续。',
          'Goldey-Beacom College 和 Purdue University ISS 根据本站保存的校方邮件截图加入；Purdue ISS 和 Purdue ECE 分开记录。',
          'MIT 的公开 CPT 页面还没写最新的暂停范围，所以先移到截图组；条目改为部分不是所有学生必修的新 CPT 暂停。',
        ],
        sources: [
          {
            label: 'University of Washington',
            href: 'https://iss.washington.edu/update-on-cpt-policy/',
          },
          {
            label: 'Michigan',
            href: 'https://internationalcenter.umich.edu/about/news/updated-guidance-curricular-practical-training-cpt',
          },
          {
            label: 'Northwestern',
            href: 'https://www.northwestern.edu/international/international-students/student-employment/f-1-practical-training/curricular-practical-training/',
          },
          {
            label: 'Columbia',
            href: 'https://communications.news.columbia.edu/news/important-updates-regarding-cpt-f-1-students',
          },
          {
            label: 'Harvard',
            href: 'https://www.hio.harvard.edu/employment-training/curricular-practical-training',
          },
          {
            label: 'Goldey-Beacom 邮件截图',
            href: '/cpt-evidence/cpt_goldey_beacom.jpeg',
          },
          {
            label: 'Purdue ISS 邮件截图',
            href: '/cpt-evidence/cpt_purdue_iss.jpeg',
          },
          {
            label: 'MIT 通知截图',
            href: '/cpt-evidence/cpt_mit.jpeg',
          },
        ],
      },
    ],
  },
];

const englishUpdates: ContentUpdate[] = [
  {
    "date": "2026-11-01",
    "changes": [
      {
        "id": "ead-seven-plaintiff-injunction-text",
        "category": "#09 EAD automatic-extension litigation",
        "title": "Add the preliminary injunction limited to seven plaintiffs",
        "summary": "Jane Doe order 46 (entered September 11) covers only the seven people who sued; the court declined nationwide relief, and the October 14 final rule is in effect.",
        "before": "The end of automatic extensions and the October 14 final rule were listed, but not the Jane Doe order.",
        "after": "Add the preliminary injunction signed September 10 and entered September 11, with sources, timeline entry and litigation marker, limiting relief to the seven people who sued; the court allowed an immediate appeal of the order. The general rule remains in force.",
        "sources": [
          {
            "label": "Jane Doe order 46 · PDF page 17",
            "href": "https://www.adhikarilaw.com/wp-content/uploads/2026/09/Jane-Doe-1-v.-United-States-Department-of-Homeland-Security-8-26-cv-00060-C.D.-Cal.-Sep-11-2026-ECF-No.-46_TRO.pdf"
          },
          {
            "label": "Jane Doe public docket",
            "href": "https://www.courtlistener.com/docket/72122041/jane-doe-1-v-united-states-department-of-homeland-security/?order_by=desc"
          }
        ]
      },
      {
        "id": "pcc-depaul-cpt-public-records",
        "category": "#05 CPT school tracker",
        "title": "Add official PCC and DePaul CPT records",
        "summary": "PCC pauses CPT for non-required courses; DePaul lists three qualifying program structures, each reviewed by ISS.",
        "before": "73 evidence entries: 69 official university/college pages and four community screenshots; 72 distinct institutions.",
        "after": "75 evidence entries: 71 official pages and four community screenshots; 74 distinct institutions. PCC’s notice is undated. DePaul’s policy is labeled September 14 and includes a program requirement that can be met by either a thesis or a credit-bearing internship. Both policies were published earlier and are newly tracked.",
        "sources": [
          {
            "label": "Portland Community College (PCC)",
            "href": "https://www.pcc.edu/international-students/student-resources/"
          },
          {
            "label": "DePaul University",
            "href": "https://offices.depaul.edu/global-engagement/student-resources/student-services/Pages/employment.aspx"
          }
        ]
      }
    ]
  },
  {
    "date": "2026-10-31",
    "changes": [
      {
        "id": "duration-cross-motions-text-confirmed",
        "category": "#03 D/S nationwide-stay litigation",
        "title": "Obtain both sides’ October 30 summary-judgment motions",
        "summary": "The government asks to win every claim, or at least to have the rule sent back to DHS without being struck down, or the pause narrowed; plaintiffs ask to win every count. No ruling yet.",
        "before": "Only entries 66 and 67 were listed, without who filed them or what they asked for; entries 68 and 69 were not listed yet.",
        "after": "Add full entries 66/67/68: both sides ask for judgment on all claims, with the government’s fallback of sending the rule back without striking it down, or narrowing the pause. Update status, summaries, procedure, timeline, litigation marker and briefing; the nationwide stay, November 2 replies and November 9 appellate schedule are unchanged.",
        "sources": [
          {
            "label": "Government motion 66",
            "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.66.0.pdf"
          },
          {
            "label": "Government memorandum 67",
            "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.67.0.pdf"
          },
          {
            "label": "Plaintiffs’ renewed motion 68",
            "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.68.0.pdf"
          }
        ]
      },
      {
        "id": "case-western-uno-cpt-public-records",
        "category": "#05 CPT school tracker",
        "title": "Add official Case Western and Nebraska–Omaha records",
        "summary": "Case Western pauses new applications; UNO approves only internships required for every student’s graduation.",
        "before": "71 evidence entries: 67 public university pages and four community screenshots; 70 distinct institutions.",
        "after": "73 evidence entries: 69 public university pages and four community screenshots; 72 distinct institutions. Case Western pauses new applications from September 8 while revising its process. UNO’s September 17 notice requires an all-student graduation requirement and a CPT-authorized I-20 before starting. Both notices were published earlier and are newly tracked.",
        "sources": [
          {
            "label": "Case Western Reserve University (CWRU)",
            "href": "https://case.edu/visa/international-students/international-student-employment/f-1-student-employment-and-training"
          },
          {
            "label": "University of Nebraska at Omaha (UNO)",
            "href": "https://web.unomaha.edu/curricular-practical-training-cpt-information"
          }
        ]
      }
    ]
  },
  {
    "date": "2026-10-30",
    "changes": [
      {
        "id": "cpt-reply-permission-and-november4",
        "category": "#05 CPT guidance litigation",
        "title": "Court permits a reply of up to 15 pages by November 4",
        "summary": "Plaintiffs may reply by November 4; the November 6 hearing stands and the guidance remains in use.",
        "before": "Only the October 28 government opposition and the November 6 hearing were listed, without the plaintiffs’ reply.",
        "after": "Add the October 29 request, October 30 permission and November 4 reply date to summaries, status, litigation track, timeline and briefing.",
        "sources": [
          {
            "label": "Electronic court order 29",
            "href": "https://www.courtlistener.com/docket/74919449/association-of-american-universities-v-us-department-of-homeland/?order_by=desc#entry-29"
          },
          {
            "label": "Full reply-permission motion 28",
            "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.307243/gov.uscourts.mad.307243.28.0.pdf"
          }
        ]
      },
      {
        "id": "duration-october30-document-types",
        "category": "#03 D/S nationwide-stay litigation",
        "title": "Add October 30 docket entries",
        "summary": "Summary-judgment filings (entries 66 and 67) appear on the public docket.",
        "before": "The docket listing ended at entry 65, and the next step was the October 30 deadline for judgment requests.",
        "after": "Add entries 66/67 to the timeline and briefing; the November 2 replies and November 9 appellate schedule are unchanged, and the nationwide stay continues.",
        "sources": [
          {
            "label": "District entries 66/67 (document types only)",
            "href": "https://www.courtlistener.com/docket/74661796/presidents-alliance-on-higher-education-and-immigration-v-united-states/?order_by=desc#entry-66"
          }
        ]
      },
      {
        "id": "mit-cpt-calendar-2027",
        "category": "#05 CPT school tracker · MIT",
        "title": "Add revised 2027 CPT calendar windows",
        "summary": "Spring now starts January 30, Summer ends August 17 and Fall starts August 18; eligibility rules are unchanged.",
        "before": "The entry covered the pause on new CPT not required for the degree and the school contacting students with approved Fall CPT, without the 2027 calendar.",
        "after": "Add Spring January 30–May 19, Summer May 20–August 17 and Fall August 18–December 17, with term-time part-time limits, later starts for some students and approval required in each case.",
        "sources": [
          {
            "label": "MIT ISO · Current CPT date table",
            "href": "https://iso.mit.edu/employment/f-1-curricular-practical-training/"
          }
        ]
      },
      {
        "id": "illinois-arizona-uconn-public-cpt",
        "category": "#05 CPT school tracker",
        "title": "Add official Illinois Tech, Arizona and UConn records",
        "summary": "All three restrict non-required CPT: Illinois Tech pauses programs without mandatory training, Arizona keeps narrow degree/thesis cases, and UConn requires a published all-student requirement.",
        "before": "68 evidence entries: 64 public university pages and four community screenshots; 67 distinct institutions.",
        "after": "71 evidence entries: 67 public university pages and four community screenshots; 70 distinct institutions.",
        "sources": [
          {
            "label": "Illinois Institute of Technology (Illinois Tech)",
            "href": "https://www.iit.edu/global-services/student-employment/curricular-practical-training-cpt"
          },
          {
            "label": "University of Arizona",
            "href": "https://international.arizona.edu/international-students/cpt"
          },
          {
            "label": "University of Connecticut (UConn)",
            "href": "https://international.global.uconn.edu/2026/08/30/immigration-changes-regarding-internships/"
          }
        ]
      }
    ]
  },
  {
    "date": "2026-10-29",
    "changes": [
      {
        "id": "h1b-fee-entry144-text-and-date-conflict",
        "category": "#02 H-1B surcharge · separate $100,000 case",
        "title": "Separate fee case: district-stay motion denied",
        "summary": "Entry 144 records denial of stay motion 133 and orders the administrative record produced.",
        "before": "October 28 showed only a docket title, without the motion outcome, conference date or new schedule.",
        "after": "Add minute entry 144: stay of district proceedings denied and record production ordered. The conference and deadline dates in the entry are inconsistent and will be added once the court clarifies them. The November 6/December 4 appellate schedule and the $103,265 proposal’s status are unchanged.",
        "sources": [
          {
            "label": "Court text-only entry 144",
            "href": "https://www.courtlistener.com/docket/71541425/global-nurse-force-v-trump/?order_by=desc#entry-144"
          }
        ]
      },
      {
        "id": "georgia-tech-fall-cpt-extension-restriction",
        "category": "#05 CPT school tracker · Georgia Tech",
        "title": "Add official restriction on Fall CPT extensions",
        "summary": "OIE adds a Fall CPT extension restriction while still promising new forms by November 16.",
        "before": "The entry listed only the new forms and degree-required programs.",
        "after": "Status and detail now state that extensions for Fall 2026 CPT will not be authorized.",
        "sources": [
          {
            "label": "Georgia Tech OIE · Official CPT page",
            "href": "https://isss.oie.gatech.edu/curricular-practical-training-cpt"
          }
        ]
      },
      {
        "id": "trine-cpt-start-and-renewal-transition",
        "category": "#05 CPT school tracker · Trine",
        "title": "Update new-student starts, application handling and June 13, 2027 renewal transition",
        "summary": "An early I-20 does not permit work before classes begin; transition instructions replace the old one-year renewal wording.",
        "before": "The entry still carried the old one-year renewal wording, which didn’t fit the Spring 2027 semester approvals.",
        "after": "Transition extensions end by June 13, 2027 or an earlier program/eligibility end. New students start no earlier than classes, January 11 for Spring 2027. Add OPT ending on SEVIS transfer release, resubmission for incomplete or incorrect applications and no extension of current authorization while a renewal is pending; inconsistent page wording is flagged for DSO confirmation.",
        "sources": [
          {
            "label": "Trine · Official graduate CPT page",
            "href": "https://www.trine.edu/international/hybrid/experiential-learning/cpt-information.aspx"
          }
        ]
      },
      {
        "id": "queens-bgsu-public-cpt-records",
        "category": "#05 CPT school tracker",
        "title": "Add Queens College pause and BGSU review of existing CPT",
        "summary": "Queens College pauses applications; BGSU applies the all-student requirement and may rescind existing approvals when necessary.",
        "before": "66 evidence entries: 62 public university pages and four community screenshots; 65 distinct institutions, without these two schools.",
        "after": "68 evidence entries: 64 public university pages and four community screenshots; 67 distinct institutions. Degree-required training at Queens College needs ISSO guidance first; BGSU will reevaluate existing approvals and rescind them when necessary.",
        "sources": [
          {
            "label": "Queens College (CUNY)",
            "href": "https://www.qc.cuny.edu/academics/iss/iss-virtual-office-assistant/cpt/"
          },
          {
            "label": "Bowling Green State University (BGSU)",
            "href": "https://www.bgsu.edu/international-programs-and-partnerships/immigration-updates-f-1-j-1-students"
          }
        ]
      }
    ]
  },
  {
    "date": "2026-10-28",
    "changes": [
      {
        "id": "cpt-government-opposition-october28",
        "category": "#05 CPT guidance litigation",
        "title": "Government opposition filed; November 6 hearing unchanged",
        "summary": "The government opposes relief, arguing plaintiffs lack standing and the broadcasts are not final agency action; the November 6 hearing stands.",
        "before": "The current step was waiting for the government’s October 28 response.",
        "after": "Summaries, status, litigation track, timeline and briefing now include the government’s opposition, and the completed response deadline is removed from upcoming events. The October 19 extension stays in history and the November 6 hearing at 3 p.m. ET remains scheduled.",
        "sources": [
          {
            "label": "Full government opposition · entry 27",
            "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.307243/gov.uscourts.mad.307243.27.0.pdf"
          },
          {
            "label": "District docket · excess-page order 26 and filing 27",
            "href": "https://www.courtlistener.com/docket/74919449/association-of-american-universities-v-us-department-of-homeland/"
          }
        ]
      },
      {
        "id": "h1b-fee-october28-docket-title",
        "category": "#02 H-1B surcharge · separate $100,000 case",
        "title": "Add October 28 docket entry",
        "summary": "The separate fee case adds an entry on the conference and stay motion; the past October 27 conference is removed from upcoming events.",
        "before": "Next steps still listed the October 27 Zoom case-management conference.",
        "after": "The timeline and briefing add the October 28 entry; October 27 moves to history. The $103,265 proposal’s status is unchanged.",
        "sources": [
          {
            "label": "Court docket · October 28 new entry (title only)",
            "href": "https://www.courtlistener.com/docket/71541425/global-nurse-force-v-trump/?order_by=desc#minute-entry-483258424"
          }
        ]
      }
    ]
  },
  {
    "date": "2026-10-27",
    "changes": [
      {
        "id": "cpt-wyoming-public-notice",
        "category": "#05 CPT school tracker",
        "title": "Add Wyoming’s notice: CPT requests continue under narrowed standards",
        "summary": "The October 26 notice says some requests can still be approved, with fewer opportunities for many students.",
        "before": "65 evidence entries: 61 public university pages and four community reports; 64 distinct institutions, without Wyoming.",
        "after": "66 evidence entries: 62 public university pages and four community reports; 65 distinct institutions. Students can keep looking and submit early for ISS review.",
        "sources": [
          {
            "label": "University of Wyoming · October 26 university newsletter",
            "href": "https://www.uwyo.edu/uwgrad/newsletter/isa-immigration-support-fall2026.html"
          }
        ]
      }
    ]
  },
  {
    "date": "2026-10-26",
    "changes": [
      {
        "id": "duration-independent-appeal-schedule",
        "category": "#03 D/S litigation",
        "title": "Add the appellate schedule: opening brief/appendix due November 9",
        "summary": "The First Circuit set the government’s opening brief and appendix for November 9; the nationwide stay continues.",
        "before": "November 9 came only from the government’s motion 63, and the next step had no date.",
        "after": "Add the First Circuit 26-2112 public docket. Current summary, next steps and briefing list November 9 for the opening brief/appendix, with the response 30 days after service and the reply 10 days after that.",
        "sources": [
          {
            "label": "First Circuit 26-2112 public docket · October 9 and October 19 schedule records",
            "href": "https://www.courtlistener.com/docket/74908049/feed/"
          }
        ]
      },
      {
        "id": "targeted-perm-enforcement-and-cloudera",
        "category": "#13 Interagency review · Related PERM enforcement",
        "title": "Added targeted PERM announcement and Cloudera settlement",
        "summary": "Employer-specific actions are listed apart from prior-LCA review and AC29 rulemaking; Cloudera’s 24 months run from its latest withdrawal.",
        "before": "The entry covered the executive order and the review of past LCAs, without the October 8 PERM suspension for named companies or the October 16 Cloudera settlement.",
        "after": "Add the targeted suspension announced at the October 8 White House press conference and DOJ’s Cloudera settlement paragraph 17: withdraw affected pending PERMs, then self-debar for 24 months from the latest withdrawal, with no ETA Form 9089 filings or PERM recruitment ads.",
        "sources": [
          {
            "label": "White House · October 8 press-conference video",
            "href": "https://www.whitehouse.gov/videos/vice-president-jd-vance-holds-press-conference-on-fighting-visa-fraud/"
          },
          {
            "label": "DOJ · October 16 Cloudera settlement announcement",
            "href": "https://www.justice.gov/opa/pr/us-departments-justice-and-labor-secure-settlement-cloudera-enforce-two-year-perm-debarment"
          },
          {
            "label": "Cloudera settlement · paragraph 17",
            "href": "https://www.justice.gov/crt/media/1465571/dl?inline="
          }
        ]
      }
    ]
  },
  {
    "date": "2026-10-25",
    "changes": [
      {
        "id": "duration-order64-and-record65-confirmed",
        "category": "#03 D/S litigation",
        "title": "Extension order: motions October 30, replies November 2",
        "summary": "Order 64 moves motions to October 30 and keeps replies due November 2; the nationwide stay continues.",
        "before": "October 23 showed only the ruling and entry 65 titles; the next step had no date and old upcoming deadlines were hidden.",
        "after": "Add order 64 and record-index notice 65. Current next steps and upcoming briefing show the October 30 motion and November 2 reply dates.",
        "sources": [
          {
            "label": "Court entry 64: complete electronic order",
            "href": "https://www.courtlistener.com/docket/74661796/presidents-alliance-on-higher-education-and-immigration-v-united-states/?order_by=desc#entry-64"
          },
          {
            "label": "Record-index filing notice 65",
            "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.65.0.pdf"
          },
          {
            "label": "Second district docket mirror",
            "href": "https://clearinghouse.net/case/48393/"
          }
        ]
      },
      {
        "id": "perm-oira-conclusion-october23",
        "category": "#12 PERM labor certification reform",
        "title": "OIRA concluded review October 23 as Consistent with Change",
        "summary": "Prepublication review is complete; next, DOL publishes the NPRM.",
        "before": "The site showed OIRA review in progress, linking to the September 14 submission.",
        "after": "Lead with conclusion detail rrid=1533011 and mark OIRA complete, awaiting an NPRM. Update summary, next steps, scenario and briefing while keeping the submission history.",
        "sources": [
          {
            "label": "OIRA conclusion detail · 1205-AC29",
            "href": "https://www.reginfo.gov/public/do/eoDetails?rrid=1533011"
          },
          {
            "label": "OIRA cross-record RIN search",
            "href": "https://www.reginfo.gov/public/Forward?SearchTarget=RegReview&textfield=1205-AC29"
          }
        ]
      }
    ]
  },
  {
    "date": "2026-10-23",
    "changes": [
      {
        "id": "duration-october22-extension-request",
        "category": "#03 D/S litigation",
        "title": "Government seeks briefing extensions",
        "summary": "October 22 entry 63 asks for motions on October 30 and replies on November 6; the nationwide stay is unchanged.",
        "before": "Latest procedural document was order 61 of October 16: record October 23, motions October 26, replies November 2.",
        "after": "Add motion 63 to the timeline and briefing; order 61’s deadlines stand until the court rules.",
        "sources": [
          {
            "label": "Government October 22 extension motion · entry 63",
            "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.63.0.pdf"
          }
        ]
      },
      {
        "id": "trine-spring2027-semester-cpt",
        "category": "#05 CPT school record · Trine",
        "title": "Trine adds semester authorizations and renewals from Spring 2027",
        "summary": "New approval each semester even with the same employer; pre-November 16 approvals are not rescinded by this change.",
        "before": "The tracker listed open applications, 2026–27 deadlines and review steps; the page’s next start dates were December 14, 2026 and May 24, 2027, with one-year approvals.",
        "after": "Add semester authorizations, class-date limits, new applications each semester, no automatic extension from renewal requests, and protection for existing approvals. Next available starts become January 11 and June 14, 2027; deadlines are unchanged.",
        "sources": [
          {
            "label": "Trine · CPT Information",
            "href": "https://www.trine.edu/international/hybrid/experiential-learning/cpt-information.aspx"
          }
        ]
      },
      {
        "id": "duration-october23-ruling-record-gap",
        "category": "#03 D/S litigation",
        "title": "Add October 23 extension ruling",
        "summary": "The D/S docket adds an extension ruling and notice 65.",
        "before": "Only motion 63 was listed; next steps and the briefing still showed October 26 and November 2 as current deadlines.",
        "after": "Add the October 23 records; the October 26 and November 2 deadline cards are held back until the ruling’s text is available.",
        "sources": [
          {
            "label": "Public court docket feed · October 23 records",
            "href": "https://www.courtlistener.com/docket/74661796/feed/"
          }
        ]
      },
      {
        "id": "cpt-georgia-tech-public-source",
        "category": "#05 CPT school record · Georgia Tech",
        "title": "Add Georgia Tech’s official criteria and form-availability date",
        "summary": "New forms are due by November 16; listed bachelor’s/master’s programs and indispensable doctoral research are eligible categories.",
        "before": "64 evidence entries: 60 public university pages and four community reports; 63 distinct institutions, without Georgia Tech.",
        "after": "65 evidence entries: 61 public pages and four community reports; 64 distinct institutions. List eligible bachelor’s and master’s programs, the doctoral dissertation condition and the agreement requirement; new forms are due by November 16.",
        "sources": [
          {
            "label": "Georgia Tech OIE · CPT",
            "href": "https://isss.oie.gatech.edu/curricular-practical-training-cpt"
          }
        ]
      }
    ]
  },
  {
    "date": "2026-10-21",
    "changes": [
      {
        "id": "duration-october16-summary-judgment-order",
        "category": "#03 D/S fixed admission periods",
        "title": "Add the October 16 summary-judgment schedule",
        "summary": "Order 61 sets the record for October 23, motions for October 26 and replies for November 2; the nationwide stay continues.",
        "before": "Next steps had no fixed date while court treatment of the parties’ proposals was awaited.",
        "after": "The detail, current process, milestones, next steps and 30-day briefing show the three court-ordered deadlines.",
        "sources": [
          {
            "label": "District court October 16 order · entry 61",
            "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.61.0.pdf"
          }
        ]
      },
      {
        "id": "cpt-october19-response-extension",
        "category": "#05 CPT litigation",
        "title": "Government response extended to October 28; November 6 hearing unchanged",
        "summary": "October 19 order 22 extends the government’s response to October 28; the guidance remains in use.",
        "before": "Only the November 6 hearing was listed, without the extended government response date.",
        "after": "The summary, current process, next steps and briefing add the October 28 response deadline.",
        "sources": [
          {
            "label": "Electronic court order 22",
            "href": "https://www.courtlistener.com/docket/74919449/feed/"
          }
        ]
      },
      {
        "id": "h1b-separate-fee-october15-20-filings",
        "category": "#02 H-1B surcharge (separate $100,000 case)",
        "title": "Add both parties’ filings and the joint case management statement",
        "summary": "The October 15 opposition, October 19 reply and October 20 joint statement; the September 30 order remains in force.",
        "before": "Latest documents covered the government’s district-stay request and the Ninth Circuit scheduling notice.",
        "after": "Add entries 140, 141 and 142 with sources, moving the filed October 20 statement from next steps to history; the October 27 conference is listed per the September 30 order.",
        "sources": [
          {
            "label": "Plaintiffs’ October 15 opposition · entry 140",
            "href": "https://storage.courtlistener.com/recap/gov.uscourts.cand.457426/gov.uscourts.cand.457426.140.0.pdf"
          },
          {
            "label": "Government October 19 reply · entry 141",
            "href": "https://storage.courtlistener.com/recap/gov.uscourts.cand.457426/gov.uscourts.cand.457426.141.0.pdf"
          },
          {
            "label": "October 20 joint statement · entry 142",
            "href": "https://storage.courtlistener.com/recap/gov.uscourts.cand.457426/gov.uscourts.cand.457426.142.0.pdf"
          }
        ]
      },
      {
        "id": "cpt-adelphi-ncstate-wmu-public-records",
        "category": "#05 CPT school records",
        "title": "Add official Adelphi, NC State and Western Michigan policies",
        "summary": "The list increases from 61 to 64 evidence entries: 60 public university pages and four community reports, covering 63 distinct institutions.",
        "before": "61 evidence entries: 57 public university pages and four community reports; 60 distinct institutions. These three schools were not listed.",
        "after": "Adelphi’s October 15 revision requires curricular necessity and a cooperative agreement; NC State limits CPT to degree requirements or indispensable thesis research; WMU’s October 16 notice tightens CPT from Spring 2027.",
        "sources": [
          {
            "label": "Adelphi · October 15 CPT policy",
            "href": "https://www.adelphi.edu/policies/curricular-practical-training-cpt-policy/"
          },
          {
            "label": "NC State · CPT",
            "href": "https://internationalservices.ncsu.edu/curricular-practical-training/"
          },
          {
            "label": "Western Michigan · October 16 notice",
            "href": "https://wmich.edu/international/immigration/news"
          }
        ]
      },
      {
        "id": "cpt-uic-october16-hearing-notice",
        "category": "#05 CPT school records",
        "title": "UIC notice adds the November 6 hearing",
        "summary": "The notice modified October 16 adds a hearing date; CPT eligibility is unchanged.",
        "before": "The UIC record described litigation and eligibility review without the hearing date.",
        "after": "The record adds the November 6 hearing.",
        "sources": [
          {
            "label": "UIC · notice modified October 16",
            "href": "https://ois.uic.edu/news-stories/sevps-cpt-memos-challenged-in-court/"
          }
        ]
      }
    ]
  },
  {
    "date": "2026-10-14",
    "changes": [
      {
        "id": "h1b-separate-fee-appeal-26-6667-schedule",
        "category": "#02 H-1B surcharge (separate $100,000 payment litigation)",
        "title": "$100,000 fee case: appeal number and brief dates set",
        "summary": "Ninth Circuit appeal 26-6667: government brief November 6, plaintiffs’ answer December 4.",
        "before": "Only the October 9 appeal and request to pause the district case were listed, without a case number or brief dates.",
        "after": "Add the court’s October 9 schedule (entered in the district docket October 14): appeal 26-6667, government brief November 6, answer December 4, optional reply within 21 days after that. The September 30 order stays in force during the appeal.",
        "sources": [
          {
            "label": "Ninth Circuit appeal number and briefing schedule · district entry 138",
            "href": "https://storage.courtlistener.com/recap/gov.uscourts.cand.457426/gov.uscourts.cand.457426.138.0.pdf"
          }
        ]
      },
      {
        "id": "nonimmigrant-deference-october-14-published",
        "category": "#14 Work-petition renewals",
        "title": "Proposal ending deference to prior approvals published; comments close November 13",
        "summary": "Published October 14 at 91 FR 65119; comments close November 13.",
        "before": "The entry showed a preview due October 14, with the comment period only as “30 days after publication.”",
        "after": "Now shows a published proposal open for comment, links the Federal Register version and lists the November 13 deadline in next steps and the 30-day briefing.",
        "sources": [
          {
            "label": "Federal Register · October 14 NPRM",
            "href": "https://www.federalregister.gov/documents/2026/10/14/2026-20941/removing-deference-to-prior-uscis-determinations-of-eligibility"
          }
        ]
      },
      {
        "id": "ead-auto-extension-october-14-final-rule",
        "category": "#09 EAD renewal extensions",
        "title": "The final rule removing certain EAD renewal extensions is published and effective",
        "summary": "Published October 14 at 91 FR 65306 and effective that day, keeping the 2025 interim rule unchanged; the cutoff is still October 30, 2025.",
        "before": "The entry showed a public final-rule preview scheduled for October 14 publication.",
        "after": "Now shows the final rule effective October 14 and links the published version, noting that automatic extensions ended on October 30, 2025.",
        "sources": [
          {
            "label": "Federal Register · October 14 final rule",
            "href": "https://www.federalregister.gov/documents/2026/10/14/2026-20955/removal-of-automatic-extensions-for-certain-employment-authorization-documents"
          }
        ]
      },
      {
        "id": "cpt-relief-hearing-november-6",
        "category": "#05 CPT guidance",
        "title": "CPT lawsuit hearing set for November 6",
        "summary": "AAU v. DHS (entry 19, October 13) set the hearing on pausing the CPT guidance for November 6 at 3 p.m. ET.",
        "before": "The entry said there was no hearing or reopening date yet.",
        "after": "Status, timeline, next steps, the litigation marker and the 30-day briefing add the November 6 hearing; the guidance still applies.",
        "sources": [
          {
            "label": "AAU v. DHS district docket",
            "href": "https://www.courtlistener.com/docket/74919449/association-of-american-universities-v-us-department-of-homeland/"
          }
        ]
      },
      {
        "id": "h1b-separate-fee-ninth-circuit-appeal",
        "category": "#02 H-1B surcharge",
        "title": "$100,000 fee case: government appeals and asks to pause the district case",
        "summary": "In Global Nurse Force, the government appealed the September 30 order to the Ninth Circuit on October 9 and asked to pause the district case; the order stays in force during the appeal. This is unrelated to the $103,265 surcharge proposal.",
        "before": "Developments after September 30 were not yet listed, and the October 20 and 27 dates were shown as scheduled.",
        "after": "Background, timeline and briefing add the appeal and stay motion and note that the October 20 and 27 settings may change.",
        "sources": [
          {
            "label": "Global Nurse Force public docket mirror",
            "href": "https://www.courtlistener.com/docket/71541425/global-nurse-force-v-trump/"
          }
        ]
      },
      {
        "id": "october-14-content-review-corrections",
        "category": "Content review",
        "title": "Policy-by-policy check fixes scope wording and misplaced examples",
        "summary": "All 14 policies were checked against the Federal Register, the executive order, OIRA records and court dockets. Document numbers and dates all match; the fixes below were made.",
        "details": [
          "#13 Executive order: section 3(a) covers layoffs at the LCA, petition, visa and entry stages, so the key point now names all four; the order doesn’t define “similarly situated” workers, so the claim that other departments’ layoffs don’t count was removed.",
          "#07 H-1B classification reform, #11 H-4 EAD and #05 CPT guidance: misplaced examples moved under the impact they illustrate.",
          "“Today/tomorrow” wording was replaced with dates (EAD extensions, H-4 and three school records); the CPT litigation note now talks about guidance rather than a rule."
        ],
        "sources": [
          {
            "label": "Federal Register · Executive Order 14431",
            "href": "https://www.federalregister.gov/documents/2026/09/23/2026-19555/enhancing-program-integrity-and-interagency-coordination-in-the-administration-of-the-h-1b"
          }
        ]
      }
    ]
  },
  {
    "date": "2026-10-13",
    "changes": [
      {
        "id": "nonimmigrant-deference-october-13-preview",
        "category": "#14 Work-petition renewals",
        "title": "New: preview of the proposal ending I-129 deference to prior approvals",
        "summary": "The 46-page proposal preview (RIN 1615-AD26) was released October 13, due to be published October 14.",
        "before": "AD26 was not tracked; the broader H-1B reform (AD00) was tracked separately.",
        "after": "Adds a separate entry, source and briefing: renewals with the same employer, worker and facts would no longer generally follow the earlier approval.",
        "details": [
          "The preview gives comments 30 days after publication; the exact date comes with the published version."
        ],
        "sources": [
          {
            "label": "Official NPRM preview · FR Doc. 2026-20941",
            "href": "https://public-inspection.federalregister.gov/2026-20941.pdf"
          }
        ]
      },
      {
        "id": "ead-auto-extension-october-13-final-preview",
        "category": "#09 EAD renewal extensions",
        "title": "Add the EAD automatic-extension removal and its final-rule preview",
        "summary": "The final-rule preview keeps the October 30, 2025 interim rule unchanged, due October 14; the extensions ended on October 30, 2025.",
        "before": "AD05 was not shown separately; the H-4 entry tracked only the possible future repeal of eligibility.",
        "after": "A separate entry explains the October 30, 2025 cutoff, eligible earlier renewals and legal exceptions, with a link from the H-4 page.",
        "details": [
          "Some H-4, c9 and other renewals no longer get an automatic extension on the receipt; valid cards and H-4 eligibility are unaffected.",
          "The STEM OPT 180-day extension, legal and TPS exceptions, and E/L spouses’ status-based work each follow their own rules."
        ],
        "sources": [
          {
            "label": "October 30, 2025 interim rule · in effect",
            "href": "https://www.govinfo.gov/content/pkg/FR-2025-10-30/pdf/2025-19702.pdf"
          },
          {
            "label": "October 13 final-rule preview · unchanged adoption",
            "href": "https://public-inspection.federalregister.gov/2026-20955.pdf"
          }
        ]
      }
    ]
  },
  {
    "date": "2026-10-12",
    "changes": [
      {
        "id": "duration-plaintiffs-october-9-plan",
        "category": "#03 D/S litigation",
        "title": "D/S case: plaintiffs ask for a quick ruling striking down the rule",
        "summary": "Entry 60: plaintiffs oppose pausing the district case and ask for an immediate final ruling striking down the rule.",
        "before": "Entry 59, the government’s request, was listed; plaintiffs’ position was not.",
        "after": "The detail page, timeline and 30-day briefing add plaintiffs’ position.",
        "details": [
          "Plaintiffs’ alternative schedule: administrative record October 16, supplemental briefs October 23, replies October 30.",
          "The 21-day period for the appeal brief starts when the appeals court enters its schedule."
        ],
        "sources": [
          {
            "label": "October 9 plaintiffs’ procedural plan · entry 60",
            "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.60.0.pdf"
          }
        ]
      }
    ]
  },
  {
    "date": "2026-10-11",
    "changes": [
      {
        "id": "opt-fee-october-8-nprm",
        "category": "#01 OPT fees",
        "title": "OPT fee proposal: $70,000 first, $30,000 after, paid by schools",
        "summary": "The October 8 proposal sets the amounts, payment before the recommendation, schools’ ability to pass on the cost and transition terms. Rule comments close November 9, PRA comments December 7.",
        "before": "The title used the media-reported single $100,000 fee, and the status stopped at OIRA review.",
        "after": "Now a published proposal open for comment: $70,000 the first time, $30,000 for each OPT after that; schools pay first and can pass on the cost.",
        "details": [
          "Pre-completion, post-completion and STEM OPT are covered; changing employers alone costs nothing.",
          "Fees start 60 days after the final rule is published; anyone who used OPT before but never paid the first fee pays $70,000 first. Existing EADs are unaffected."
        ],
        "sources": [
          {
            "label": "Federal Register · October 8 NPRM",
            "href": "https://www.federalregister.gov/documents/2026/10/08/2026-20660/optional-practical-training-fees"
          }
        ]
      },
      {
        "id": "cpt-associations-october-5-lawsuit",
        "category": "#05 CPT guidance",
        "title": "Add: four higher-education groups sue to pause the CPT guidance",
        "summary": "AAU v. DHS (1:26-cv-14520) was filed October 5 with a request to pause the guidance, and arguments followed October 6; the guidance applies until the court rules.",
        "before": "Only the two SEVP broadcasts and school practice were tracked, not the lawsuit.",
        "after": "The detail page, process copy and briefing add the case and explain that it is separate from the D/S case.",
        "sources": [
          {
            "label": "October 5 complaint",
            "href": "https://www.nafsa.org/sites/default/files/media/document/CPT%20Complaint%20AAU%20v.%20DHS%20.pdf"
          },
          {
            "label": "Preliminary-injunction/stay motion",
            "href": "https://www.aau.edu/uploads/files/general/Motion-for-Preliminary-Injunction-and-Stay-of-Agency-Action-CPT-Case.pdf"
          }
        ]
      },
      {
        "id": "duration-october-conference-and-procedure",
        "category": "#03 D/S litigation",
        "title": "D/S case: October 2 conference held; government files next-step requests",
        "summary": "Entry 56 records the conference; in entry 59 the government asks to pause the district case pending appeal or adopt an alternative schedule.",
        "before": "The October 2 conference was still listed as upcoming, and the docket ended at the September 30 appeal.",
        "after": "The conference moves to history and the October 9 filings are added; the government says it asked to speed up the appeal.",
        "sources": [
          {
            "label": "October 9 government brief · entry 59",
            "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.59.0.pdf"
          },
          {
            "label": "Public docket mirror · entries 56, 59–60",
            "href": "https://clearinghouse.net/case/48393/"
          }
        ]
      },
      {
        "id": "h1b-separate-fee-september-30-order",
        "category": "#02 H-1B fees",
        "title": "Add: September 30 order blocking the separate $100,000 entry fee",
        "summary": "Global Nurse Force order 130 strikes down the collection policy and bars collection under both proclamations until the government goes through public notice and comment.",
        "before": "Background on the $100,000 entry fee ended with the June 8 ruling, July 24 stay denial and September 18 extension.",
        "after": "Adds the September 30 order and the October 20 statement and October 27 conference dates; none of this affects the $103,265 surcharge proposal.",
        "details": [
          "Conference and later dates are listed as set in the September 30 order."
        ],
        "sources": [
          {
            "label": "GovInfo · Global Nurse Force order 130",
            "href": "https://www.govinfo.gov/content/pkg/USCOURTS-cand-4_25-cv-08454/pdf/USCOURTS-cand-4_25-cv-08454-17.pdf"
          }
        ]
      },
      {
        "id": "cpt-four-public-school-additions-october-11",
        "category": "CPT school list",
        "title": "Add official CPT pages for Yale, Oklahoma, UVA and UIC",
        "summary": "Four official-page records added.",
        "before": "57 evidence entries: 53 public university pages and 4 community reports; 56 distinct institutions.",
        "after": "61 evidence entries: 57 public university pages and 4 community reports; 60 distinct institutions.",
        "details": [
          "Yale (October 7): only training every student must do to graduate; Oklahoma (October 8): requests since August 24 still paused.",
          "UVA: degree-required training continues, elective course-credit CPT paused; UIC (October 7): eligibility checked case by case while the lawsuit proceeds."
        ],
        "sources": [
          {
            "label": "Yale OISS · October 7",
            "href": "https://oiss.yale.edu/news/cpt-update-sevp-broadcast-messages-and-pending-litigation"
          },
          {
            "label": "Oklahoma ISS · October 8 page",
            "href": "https://www.ou.edu/globalengagement/iss/curricular-practical-training"
          },
          {
            "label": "UVA ISSP · CPT Update",
            "href": "https://issp.virginia.edu/cpt-update"
          },
          {
            "label": "UIC OIS · October 7",
            "href": "https://ois.uic.edu/news-stories/sevps-cpt-memos-challenged-in-court/"
          }
        ]
      },
      {
        "id": "kansas-degree-required-cpt-page",
        "category": "CPT schools",
        "title": "Kansas now approves degree-required CPT",
        "summary": "ISS took down its notice pausing all requests and now says it will authorize CPT for degree-required internships and practica.",
        "before": "The entry said all CPT requests were paused.",
        "after": "Now records the current degree-required CPT route and how to apply.",
        "sources": [
          {
            "label": "Kansas ISS · F-1 CPT",
            "href": "https://iss.ku.edu/f-1-cpt-curricular-practical-training"
          }
        ]
      },
      {
        "id": "nyu-tandon-pause-notice-absent",
        "category": "CPT schools",
        "title": "NYU Tandon Mathematics takes down its old pause notice",
        "summary": "The page now lists general CPT application steps; the department hasn’t announced a reopening date, so check with it before applying.",
        "before": "The entry said the university page expressly paused approvals from September 1.",
        "after": "Now records that the old notice is gone and lists the current steps; this entry covers Tandon Mathematics only.",
        "sources": [
          {
            "label": "NYU Tandon Mathematics · Internships",
            "href": "https://math.nyu.edu/dynamic/sites/tandon/internships/"
          }
        ]
      }
    ]
  },
  {
    date: '2026-10-01',
    changes: [
      {
        id: 'cmu-cpt-official-notice-added',
        category: 'CPT school list',
        title: 'Add CMU’s CPT notice and current application rules',
        summary: 'Adds CMU OIE’s August 27 notice and current CPT page: only internships every student must do to graduate; electives use pre-completion OPT; thesis-related outside work is still under review.',
        before: '56 evidence entries: 52 public university pages and 4 community reports; 55 distinct institutions. CMU was missing.',
        after: '57 evidence entries: 53 public university pages and 4 community reports; 56 distinct institutions. Adds CMU’s official page.',
        details: ['CMU’s CPT page is still being revised; the CSD doctoral page differs from OIE, and OIE governs.'],
        sources: [
          { label: 'CMU OIE · August 27 CPT notice', href: 'https://www.cmu.edu/oie/news-and-events/2025-2026/august/cpt-broadcast-message.html' },
          { label: 'CMU OIE · Current CPT page', href: 'https://www.cmu.edu/oie/employment/f1-students/curricular-practical-training.html' },
          { label: 'CMU CSD · Doctoral CPT resources', href: 'https://www.csd.cs.cmu.edu/academics/doctoral-resources/applying-for-cpt-or-opt' },
        ],
      },
      {
        id: 'duration-government-appeal-september-30',
        category: 'D/S litigation',
        title: 'Government appeals D/S ruling; nationwide stay stays in place',
        summary: 'District entries 53–55 (September 30): the government appealed; First Circuit No. 26-2112. The September 14 nationwide stay stays in place during the appeal.',
        before: 'The litigation timeline ended with the September 14 stay and October 2 conference schedule.',
        after: 'Adds the appeal and case number; the stay status is unchanged.',
        sources: [{ label: 'Public court docket mirror · entries 53–55', href: 'https://www.courtlistener.com/docket/74661796/feed/' }],
      },
      {
        id: 'ucsd-cpt-current-application-process',
        category: 'CPT schools',
        title: 'UC San Diego now lists applications for qualifying CPT programs',
        summary: 'ISEO took down its notice pausing all CPT requests and now lists approved programs and the iServices, department and ISEO review steps.',
        before: 'The school entry still said all F-1 CPT requests were paused.',
        after: 'Now records how qualifying programs apply; unlisted programs can ask their department to request review.',
        sources: [{ label: 'UC San Diego ISEO · F-1 CPT', href: 'https://iseo.ucsd.edu/student-services/working-in-us/f1-cpt.html' }],
      },
      {
        id: 'northwestern-cpt-september-29-cleanup',
        category: 'CPT schools',
        title: 'Northwestern removes conflicting old wording on September 29',
        summary: 'The OISS page still requires training every student must do to graduate and drops the older “integral to or required” wording from the September 25 page.',
        before: 'The entry warned that older wording remained lower on the same page.',
        after: 'Reflects the September 29 page’s single “required of every student” standard; the old screenshot is kept for comparison.',
        sources: [{ label: 'Northwestern OISS · Curricular Practical Training', href: 'https://www.northwestern.edu/international/international-students/student-employment/f-1-practical-training/curricular-practical-training/' }],
      },
    ],
  },
  {
    date: '2026-09-28',
    changes: [
      {
        id: 'northwestern-cpt-september-25-page',
        category: 'CPT schools',
        title: 'Northwestern publishes its all-student requirement and CPT steps',
        summary: 'The OISS page updated September 25: training must be something every student in the program does to graduate; no extra CPT after that; applications need a cooperative agreement, academic sign-off and a CPT I-20.',
        before: 'The entry relied on the September 3 notice and didn’t describe the current application process.',
        after: 'The entry now states the eligibility and process on the September 25 page and retains the earlier screenshot as history.',
        sources: [{ label: 'Northwestern OISS · Curricular Practical Training', href: 'https://www.northwestern.edu/international/international-students/student-employment/f-1-practical-training/curricular-practical-training/' }],
      },
      {
        id: 'oregon-cpt-current-page-clarification',
        category: 'CPT schools',
        title: 'Oregon CPT page adds DMA projects and revises credit guidance',
        summary: 'The ISSS page adds required DMA culminating projects and says credit is set by program and advisor; the old one-credit minimum has been removed.',
        before: 'The entry listed program-wide requirements and required master’s and doctoral research, without DMA or the current credit guidance.',
        after: 'Adds the current scope and credit guidance; CPT just for elective internship credit is still not allowed.',
        sources: [{ label: 'University of Oregon ISSS · Curricular Practical Training', href: 'https://isss.uoregon.edu/curricular-practical-training-cpt' }],
      },
    ],
  },
  {
    date: '2026-09-27',
    changes: [
      {
        id: 'ucsb-cpt-current-page',
        category: 'CPT schools',
        title: 'UCSB now displays a CPT application process',
        summary: 'The university page explains how to apply and get a CPT I-20 once approved; the earlier pause notice has been taken down.',
        before: 'The entry described issuance as paused since August 17 based on earlier university material and screenshots.',
        after: 'Now describes the current page; older screenshots are kept for comparison.',
        sources: [{ label: 'UCSB OISS · Curricular Practical Training', href: 'https://oiss.ucsb.edu/curricular-practical-training' }],
      },
      {
        id: 'h1b-separate-100k-proclamation-context',
        category: 'H-1B fees',
        title: 'Separate the $100,000 entry fee from the proposed $103,265 surcharge',
        summary: 'On September 18 the White House extended the $100,000 entry fee for some H-1B petitions for people abroad to September 21, 2027. But a district court struck down the collection policy and the First Circuit refused to pause that ruling, so it cannot be collected now. It is separate from the $103,265 surcharge proposal.',
        before: '#02 covered only the $103,265 proposal, without the extension and lawsuits over the other $100,000 fee.',
        after: 'The detail page and 30-day briefing now treat the two separately and link the proclamation and both court orders.',
        sources: [
          { label: 'White House · September 18 proclamation', href: 'https://www.whitehouse.gov/presidential-actions/2026/09/restriction-on-entry-of-certain-nonimmigrant-workers-faad/' },
          { label: 'District of Massachusetts · June 8 order', href: 'https://oag.ca.gov/system/files/attachments/press-docs/H1B%20Order.pdf' },
          { label: 'First Circuit · July 24 order', href: 'https://www.ca1.uscourts.gov/sites/ca1/files/opnfiles/26-1699O-01A.pdf' },
        ],
      },
    ],
  },
  {
    date: '2026-09-26',
    changes: [
      {
        id: 'h1b-fee-comments-closed',
        category: 'Proposed H-1B fee',
        title: '#02 $103,265 surcharge proposal: comments closed',
        summary: 'Comments closed September 24; DHS has not issued a final rule.',
        before: 'Status said “Proposed rule · Comments due September 24”; the deadline was in future steps and the site offered a submit-comment link.',
        after: 'Status says “Proposed rule · Comment period closed”; September 24 is a past milestone, DHS review is next, and the submit-comment link is removed.',
        sources: [{ label: 'Federal Register · 2026-17324', href: 'https://www.federalregister.gov/documents/2026/08/25/2026-17324/fee-for-certain-h-1b-petitions' }],
      },
      {
        id: 'cpt-four-public-notices-added',
        category: 'CPT schools',
        title: 'Add public CPT notices from PLU, IU Global, Rutgers and UCF',
        summary: 'PLU’s September 25 notice limits CPT to graduation-required training. Earlier notices from the other three: most requests paused; clearly qualifying requests continue; only training required of every student.',
        before: '52 evidence entries: 48 public university pages and 4 community reports; 51 distinct institutions.',
        after: '56 evidence entries: 52 public university pages and 4 community reports; 55 distinct institutions. Four official pages added.',
        sources: [
          { label: 'Pacific Lutheran University ISS', href: 'https://www.plu.edu/iss/announcements/' },
          { label: 'Indiana University · IU Global', href: 'https://www.oid.iu.edu/resources/visa-immigration-updates.html' },
          { label: 'Rutgers Global Alerts', href: 'https://global.rutgers.edu/all-alerts' },
          { label: 'UCF Global', href: 'https://global.ucf.edu/immigrationupdates/' },
        ],
      },
    ],
  },
  {
    date: '2026-09-24',
    changes: [
      {
        id: 'cpt-texas-state-added',
        category: 'CPT campuses',
        title: 'Add Texas State’s CPT conditions',
        summary: 'The university says an internship course or credit alone isn’t enough; training must be required by the curriculum. Applications continue; there is no blanket pause.',
        before: '51 evidence entries: 47 public university pages and 4 community reports; 50 distinct institutions.',
        after: '52 evidence entries: 48 public university pages and 4 community reports; 51 distinct institutions.',
        sources: [{ label: 'Texas State University ISSS', href: 'https://www.international.txst.edu/current-f1-students/work-authorization/cpt.html' }],
      },
      {
        id: 'cpt-columbia-hardship-fund',
        category: 'CPT campuses',
        title: 'Columbia updates its CPT response timeline and hardship fund information',
        summary: 'The September 24 university page describes support for affected students and says the Fall 2026 hardship fund opened September 23; CPT approval standards remain unchanged.',
        before: 'The CPT entry described Columbia’s requirement, pause scope and existing authorizations without the hardship fund.',
        after: 'Add the September 24 response timeline and September 23 fund opening; the approval policy is unchanged.',
        sources: [{ label: 'Columbia ISSO · F-1 CPT', href: 'https://isso.columbia.edu/content/f-1-cpt-curricular-practical-training' }],
      },
    ],
  },
{
  "date": "2026-09-23",
  "changes": [
    {
      "id": "duration-cra-senate-calendar",
      "category": "Congress",
      "title": "Resolution to overturn D/S rule placed on the Senate calendar",
      "summary": "S.J.Res.213 was placed on the Senate calendar by petition on September 17 (No. 668); the House version is H.J.Res.215.",
      "before": "The D/S entry recorded only the September 14 introduction, without the resolution number.",
      "after": "Adds both resolution numbers, the September 17 calendar date and GovInfo sources, plus a 30-day briefing item. No vote has been held; the court stay is tracked separately.",
      "sources": [
        {
          "label": "GovInfo · S.J.Res.213 as placed on the calendar",
          "href": "https://www.govinfo.gov/app/details/BILLS-119sjres213pcs"
        },
        {
          "label": "GovInfo · H.J.Res.215",
          "href": "https://www.govinfo.gov/app/details/BILLS-119hjres215ih"
        }
      ]
    },
    {
      "id": "h1b-program-integrity-fr-text-verified",
      "category": "Executive order",
      "title": "#12 Federal Register text matches the White House text",
      "summary": "The Federal Register version (91 FR 60501–60503) matches the White House text apart from formatting, page markers and the signature line.",
      "before": "The number and publication details came from Federal Register search listings.",
      "after": "The source and timeline add the 91 FR pages; the order’s content, status and October 18 deadline are unchanged.",
      "sources": [
        {
          "label": "GovInfo · 2026-19555",
          "href": "https://www.govinfo.gov/content/pkg/FR-2026-09-23/pdf/2026-19555.pdf"
        }
      ]
    },
    {
      "id": "cpt-vanderbilt-stony-brook-uci",
      "category": "CPT campuses",
      "title": "Add Vanderbilt and Stony Brook; update UC Irvine",
      "summary": "Two campus notices added; the UC Irvine page is now a standing policy page with a new thesis/dissertation CPT route.",
      "before": "49 evidence entries: 45 public university pages and 4 community reports; 48 distinct institutions.",
      "after": "51 evidence entries: 47 public university pages and 4 community reports; 50 distinct institutions. UT Dallas, UC Irvine and Washington State have updated check dates.",
      "sources": [
        {
          "label": "Vanderbilt University",
          "href": "https://www.vanderbilt.edu/isss/2026/09/15/updates-to-curricular-practical-training-eligibility/"
        },
        {
          "label": "Stony Brook University",
          "href": "https://www.stonybrook.edu/visa/resources/news-and-events/immigration-policy-updates/cpt-new-guidance.html"
        },
        {
          "label": "UC Irvine",
          "href": "https://ic.uci.edu/welcome-students/students-current-students/students-current-employment-information/curricular-practical-training/"
        }
      ]
    },
    {
      "id": "h1b-program-integrity-eo-14431",
      "category": "Executive order",
      "title": "#12 now carries its number: Executive Order 14431",
      "summary": "The Federal Register published the September 18 H-1B layoff-review order on September 23 as EO 14431 (FR Doc. 2026-19555).",
      "before": "The document ID read “September 18, 2026 executive order” without a number; sources were the White House text and a forum discussion.",
      "after": "The document ID now reads “Executive Order 14431”, with a September 23 Federal Register milestone and source. The order’s content, status and the October 18 deadline to begin the LCA review are unchanged.",
      "details": [
        "The number and publication details come from Federal Register search listings."
      ],
      "sources": [
        {
          "label": "Federal Register · EO 14431",
          "href": "https://www.federalregister.gov/documents/2026/09/23/2026-19555/enhancing-program-integrity-and-interagency-coordination-in-the-administration-of-the-h-1b"
        }
      ]
    }
  ]
},
{
  "date": "2026-09-22",
  "changes": [
    {
      "id": "cpt-kennesaw-toledo",
      "category": "CPT campuses",
      "title": "Add Kennesaw State and Toledo CPT restrictions",
      "summary": "Both universities’ pages narrow CPT for non-required training.",
      "before": "47 evidence entries: 43 public university pages and 4 community reports; 46 distinct institutions.",
      "after": "49 evidence entries: 45 public university pages and 4 community reports; 48 distinct institutions. Kennesaw State limits CPT to three programs; Toledo has no blanket pause.",
      "sources": [
        {
          "label": "Kennesaw State University",
          "href": "https://campus.kennesaw.edu/current-students/academics/global-education/international-student-scholar-services/f-1/curricular-practical-training.php"
        },
        {
          "label": "University of Toledo",
          "href": "https://www.utoledo.edu/cisp/international/CPT.html"
        }
      ]
    }
  ]
},
{
  "date": "2026-09-20",
  "changes": [
    {
      "id": "duration-cra-introduced",
      "category": "Congress",
      "title": "D/S: add the congressional resolution to overturn the rule",
      "summary": "Adds the senator’s September 14 announcement and resolution text seeking to overturn the D/S rule under the Congressional Review Act (CRA).",
      "before": "The entry tracked the nationwide stay and October 2 conference, without the congressional resolution.",
      "after": "Adds the introduction date, sources and briefing; the resolution needs both chambers and the President to take effect, and is tracked apart from the court stay.",
      "sources": [
        {
          "label": "Senator Durbin announcement",
          "href": "https://www.durbin.senate.gov/newsroom/press-releases/durbin-blumenthal-padilla-whitehouse-jayapal-raskin-introduce-cra-resolution-of-disapproval-regarding-regulation-that-changes-how-international-students-and-journalists-maintain-immigration-status"
        },
        {
          "label": "Joint resolution text",
          "href": "https://www.durbin.senate.gov/download/cra-on-student-visa-rule&download=1"
        }
      ]
    },
    {
      "id": "cpt-wm-rochester-purdue-evidence",
      "category": "CPT schools",
      "title": "Add two campus notices and verify Purdue ISS with a public page",
      "summary": "Add William & Mary’s September 16 and Rochester’s August 28 notices; confirm the earlier Purdue ISS email through its public webpage.",
      "before": "45 evidence entries: 40 public university pages and 5 community screenshots; 44 distinct schools.",
      "after": "47 entries: 43 public university pages and 4 community screenshots; 46 distinct schools. Purdue ECE and ISS remain two records of one institution.",
      "sources": [
        {
          "label": "William & Mary",
          "href": "https://www.wm.edu/offices/revescenter/issp/visasandimmigration/immigration-updates/"
        },
        {
          "label": "University of Rochester",
          "href": "https://www.rochester.edu/provost/important-update-for-international-students-on-cpt/"
        },
        {
          "label": "Purdue ISS · CPT",
          "href": "https://www.purdue.edu/gpp/iss/student/f1/employment/cpt.html"
        }
      ]
    }
  ]
},
{
  "date": "2026-09-19",
  "changes": [
    {
      "id": "h1b-program-integrity-added",
      "category": "Executive order",
      "title": "Added #12: H-1B layoff-review executive order",
      "summary": "The President signed an order on September 18: agencies must consider employers’ relevant layoffs when reviewing H-1B cases, and DOL must start re-checking past LCAs within 30 days.",
      "before": "The site tracked 11 policies and did not yet include this order.",
      "after": "Added #12, for 12 policies in total. Status: signed, agencies implementing; an executive order has no proposal or comment stage.",
      "details": [
        "The layoffs to be considered must meet three conditions: the employer filing the case, similar jobs, and within the past year or planned. The order does not say layoffs mean denial.",
        "October 18 (30 days after signing) is the latest date for DOL to start re-checking past LCAs.",
        "The #02 $103,265 surcharge is a separate DHS document, tracked apart from this order."
      ],
      "sources": [
        {
          "label": "White House · September 18 executive order",
          "href": "https://www.whitehouse.gov/presidential-actions/2026/09/enhancing-program-integrity-and-integrity-and-interagency-coordination-in-the-administration-of-the-h-1b-nonimmigrant-visa-program/"
        }
      ]
    }
  ]
},
  {
    date: '2026-09-17',
    changes: [{
      id: 'perm-modernization-added',
      category: 'Rulemaking',
      title: 'Added #11 PERM reform to the H-1B path',
      summary: 'DOL’s PERM reform proposal (RIN 1205-AC29) went to OIRA for review on September 14, covering recruiting, layoff protections and employer compliance.',
      before: 'The H-1B path did not separately track RIN 1205-AC29; the site contained 10 policies.',
      after: 'Added #11, for 11 policies in total. Status: under OIRA review; details, comment period and start date will come with the proposal.',
      details: ['July 2026 in the rulemaking plan was the original target for the proposal. This is tracked separately from the #06 wage proposal (RIN 1205-AC30).'],
      sources: [
        { label: 'OIRA · RIN 1205-AC29 · September 14', href: 'https://www.reginfo.gov/public/do/eoDetails?rrid=1532863' },
        { label: 'Unified Agenda · PERM reform', href: 'https://www.reginfo.gov/public/do/eAgendaViewRule?pubId=202510&RIN=1205-AC29' },
      ],
    }, {
      id: 'perm-modernization-directions',
      category: 'Content',
      title: 'PERM entry: clearer Chinese copy and five practitioner expectations',
      summary: 'Rewrote the #11 Chinese copy in plainer language and added five expected recruitment changes, plus the August 4 Justice Department settlement that already reflects several of them.',
      before: 'The entry said only that recruitment and recordkeeping requirements might tighten, without listing possible channel changes or the DOJ settlement.',
      after: 'Added “five changes practitioners expect”: dropping the mandatory newspaper ad, moving to modern channels and cutting radio and television, ending mailed-resume requirements, posting roles on the company careers page, and accepting applications through the ATS. The page labels all five as expectations, not published terms.',
      details: [
        'On August 4, 2026, the Justice Department reached a $3.2 million PERM discrimination settlement with OpenAI requiring it to post roles on its public careers site and accept electronic applications; DOJ also found that paper-mail-only applications and late-night radio ads discouraged U.S. workers. That matches several of the expected directions.',
        'The rule remains in OIRA prepublication review; none of the five expectations is in effect, and the NPRM text will control.',
      ],
      sources: [
        { label: 'Justice Department · OpenAI PERM settlement (August 4, 2026)', href: 'https://www.justice.gov/opa/pr/civil-rights-division-secures-settlement-openai-discriminating-against-us-workers' },
        { label: 'OIRA · RIN 1205-AC29 · September 14', href: 'https://www.reginfo.gov/public/do/eoDetails?rrid=1532863' },
        { label: 'Unified Agenda · PERM reform', href: 'https://www.reginfo.gov/public/do/eAgendaViewRule?pubId=202510&RIN=1205-AC29' },
      ],
    }, {
      id: 'ut-dallas-cpt-catalog-requirement',
      category: 'CPT schools',
      title: 'UT Dallas now approves only catalog-required internship courses',
      summary: 'ISSO published a new notice on September 17 that supersedes its August 25 “no changes” post. Under SEVP’s elective-course clarification, only students whose degree catalog lists an internship course requirement can be approved for CPT, with no case-by-case exceptions.',
      before: 'The entry said “process unchanged as of August 25.”',
      after: 'Changed to “from September 17, only catalog-required internship courses are approved.” Students without that catalog requirement cannot be approved; graduate students who must complete research off campus for a thesis or dissertation may use Academic CPT.',
      details: ['This audit also updated the UC Irvine entry from “Course Credit CPT paused since August 17” to the newer September 14 three-condition test shown at the top of the page: a degree requirement, required of all students in the program, and a cooperative agreement between the school and the employer.'],
      sources: [
        { label: 'UT Dallas ISSO · September 17 CPT policy notice', href: 'https://isso.utdallas.edu/2026/09/17/update-on-cpt-policy-sevp-broadcast/' },
        { label: 'UC Irvine International Center · CPT page', href: 'https://ic.uci.edu/welcome-students/students-current-students/students-current-employment-information/curricular-practical-training/' },
      ],
    }],
  },
{
  "date": "2026-09-16",
  "changes": [
    {
      "id": "cpt-bryn-mawr-buffalo-dearborn",
      "category": "CPT schools",
      "title": "Add CPT notices from Bryn Mawr, Buffalo and Michigan–Dearborn",
      "summary": "Bryn Mawr announced a new optional-CPT pause on September 15; add Buffalo’s degree-required exception and Dearborn’s two eligible MS programs.",
      "before": "37 public university entries and 5 community entries: 42 records covering 41 distinct institutions/campuses.",
      "after": "40 public university entries and 5 community entries: 45 records covering 44 distinct institutions/campuses. The two Purdue office/department records still count as one institution.",
      "details": [
        "Buffalo and Dearborn let approved Fall 2026 CPT continue. Dearborn opens only the Applied Behavior Analysis and Clinical Health Psychology MS programs; this entry covers the Dearborn campus only.",
        "Berkeley says the CPT guidance is separate from the D/S rule: the D/S stay does not bring back optional CPT."
      ],
      "sources": [
        {
          "label": "Bryn Mawr · 9/15",
          "href": "https://www.brynmawr.edu/inside/offices-services/impact-center/international-advising/issa-announcements"
        },
        {
          "label": "University at Buffalo · CPT FAQ",
          "href": "https://www.buffalo.edu/international-student-services/immigration-visa/f-1-student/curricular-practical-training--cpt-/cpt-policy-change---faqs.html"
        },
        {
          "label": "Michigan–Dearborn · OIA",
          "href": "https://umdearborn.edu/office-international-affairs/important-updates"
        },
        {
          "label": "UC Berkeley · CPT",
          "href": "https://internationaloffice.berkeley.edu/students/employment/cpt"
        }
      ]
    }
  ]
},
{
  "date": "2026-09-14",
  "changes": [
    {
      "id": "duration-nationwide-stay",
      "category": "03 · D/S",
      "title": "Court pauses the D/S rule nationwide; September 15 start date off",
      "summary": "At 4:55 p.m. ET the court issued a preliminary injunction postponing the entire rule nationwide and barring DHS/ICE from enforcing it.",
      "before": "A ruling was pending after the September 3 hearing; without a stay, the rule would start September 15.",
      "after": "The nationwide pause lasts until the court orders otherwise or rules on the merits; the rule has not been permanently struck down and has no new start date. A status conference is set for October 2 at noon in Courtroom 1, Boston.",
      "details": [
        "The opinion (entry 50, pp. 46–48) says the pause applies nationwide, not just to the schools that sued; order 51, paragraphs 2–5, sets its scope and length.",
        "Plaintiffs’ request to strike down the rule outright was denied, but they may ask again. The August CPT guidance is a separate document and is not affected."
      ],
      "sources": [
        {
          "label": "September 14 injunction · entry 51",
          "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.51.0.pdf"
        },
        {
          "label": "September 14 opinion · entry 50",
          "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.50.0.pdf"
        },
        {
          "label": "Docket entry 52 · status conference",
          "href": "https://www.courtlistener.com/docket/74661796/feed/"
        }
      ]
    },
    {
      "id": "cpt-uw-followup-wsu",
      "category": "CPT schools",
      "title": "Add UW follow-up requirements and WSU Spring 2027 full-time CPT restriction",
      "summary": "UW’s September 8 notice dismisses pending non-required autumn CPT. WSU’s August 7 notice is added; it is the university’s own plan and predates the August SEVP guidance.",
      "before": "UW recorded only a pause on new requests; 36 public university entries plus 5 community entries, 41 entries covering 40 distinct schools.",
      "after": "UW now specifies pending-request treatment and adviser attestation. Adding WSU yields 37 public entries plus 5 community entries, 42 entries covering 41 distinct schools.",
      "details": [
        "WSU restricts full-time CPT during the school year from Spring 2027, except curriculum-required internships; summer and part-time CPT are not affected.",
        "This is WSU’s own policy, not a federal one."
      ],
      "sources": [
        {
          "label": "UW · September 8 follow-up",
          "href": "https://iss.washington.edu/follow-up-on-cpt-policy/"
        },
        {
          "label": "WSU · August 7 notice",
          "href": "https://ip.wsu.edu/august-7th-2026-special-immigration-advisory/"
        }
      ]
    }
  ]
},
{
  "date": "2026-09-13",
  "changes": [
    {
      "id": "cpt-bc-jhu",
      "category": "CPT schools",
      "title": "Add Boston College and Johns Hopkins university CPT notices",
      "summary": "BC pauses off-campus CPT not required of every student; JHU processes new and pending requests only for degree-required training consistent with SEVP memos.",
      "before": "34 public university evidence entries and 5 community entries: 39 entries across 38 distinct schools.",
      "after": "41 entries (36 public university pages, 5 community entries) across 40 schools. Older elective wording lower on the JHU page is superseded by its notice.",
      "sources": [
        {
          "label": "Boston College OISS · September 9",
          "href": "https://www.bc.edu/content/bc-web/sites/global-engagement/sites/office-of-international-students-and-scholars/maintain/jcr%3Acontent/bottompar/bc_padded_section/par/bc_news_notes.newsItems.html"
        },
        {
          "label": "Johns Hopkins OIS · CPT",
          "href": "https://ois.jhu.edu/students/current-f-1-students/f-1-training-and-employment/curricular-practical-training/"
        }
      ]
    }
  ]
},
{
  "date": "2026-09-12",
  "changes": [
{
  "id": "duration-hearing-transcript",
  "category": "Litigation",
  "title": "Add the D/S hearing transcript and the September 14 target",
  "summary": "Transcript page 70: the judge hoped to decide by September 14 and mentioned possibly issuing a short temporary restraining order first.",
  "before": "The entry said only that the matter was under advisement after September 3, without the transcript or timing.",
  "after": "Adds the NAFSA-hosted official transcript, the September 14 target and the possible short restraining order, with the judge’s questions and the government’s answers attributed.",
  "sources": [
    {
      "label": "Official September 3 hearing transcript · p. 70",
      "href": "https://www.nafsa.org/sites/default/files/media/document/PI%20Hearing%20Court%20Transcript.pdf#page=70"
    }
  ]
},
{
  "id": "opt-oira-completed",
  "category": "Rulemaking",
  "title": "OPT fee rule cleared OIRA review September 11",
  "summary": "OIRA’s conclusion was Consistent with Change (cleared after changes); the proposal had not been published.",
  "before": "The site showed pending OIRA review using the older review record.",
  "after": "Now shows review finished with changes on September 11. The amount, who pays, coverage and exemptions will come with the proposal.",
  "sources": [
    {
      "label": "OIRA · RIN 1653-AB01",
      "href": "https://www.reginfo.gov/public/do/eoDetails?rrid=1506461"
    }
  ]
},
{
  "id": "comment-direction-review",
  "category": "Public comments",
  "title": "Comment statistics for four policies now sorted by support for or opposition to tightening",
  "summary": "The same 800 sampled comments were re-reviewed: any comment that supports or opposes tightening now counts on that side, without needing to mention specific provisions. 123 classifications changed.",
  "before": "Proposal-specific counts (oppose / support / conditional or mixed / unclear): H-1B 110/49/11/30; grace period 150/30/12/8; wages 120/35/18/27; I-765 152/1/1/46.",
  "after": "Directional counts (oppose tightening / support tightening / conditional or mixed / unclear): H-1B 110/83/1/6; grace period 156/32/6/6; wages 119/67/2/12; I-765 195/1/0/4.",
  "details": [
    "Calls for tighter restrictions or visa abolition count as support for tightening; defending lawful work access counts as opposition.",
    "Sample IDs, random seeds and sampling times are unchanged; comments whose text or attachments could not be read are marked individually."
  ],
  "sources": [
    {
      "label": "Regulations.gov · H-1B hiring comment 3552",
      "href": "https://www.regulations.gov/comment/USCIS-2026-0298-3552"
    },
    {
      "label": "Regulations.gov · I-765 work-access comment 4483",
      "href": "https://www.regulations.gov/comment/USCIS-2026-0067-4483"
    }
  ]
},
{
  "id": "jmu-cpt-pause",
  "category": "CPT school list",
  "title": "Add JMU public CPT pause notice",
  "summary": "JMU pauses decisions on new and pending CPT requests while reviewing programs and processes.",
  "before": "38 evidence entries: 33 public university sources and 5 community reports; 37 institutions or separate campuses.",
  "after": "39 evidence entries: 34 public university sources and 5 community reports; 38 institutions or separate campuses.",
  "details": [
    "The page is dated September 10; the CPT section is headed August 2026.",
    "The notice gives no reopening date."
  ],
  "sources": [
    {
      "label": "JMU · Immigration Announcements",
      "href": "https://www.jmu.edu/global/isss/announcements.shtml"
    }
  ]
},
    {
      "id": "grace-nprm-published",
      "category": "Rulemaking",
      "title": "Proposal to end the 60-day grace period published",
      "summary": "The proposal was published September 11; comments close before midnight ET on November 10.",
      "before": "September 10 preview, with publication scheduled September 11 and exact comment deadline unconfirmed.",
      "after": "Published September 11 at 91 FR 57807; comments open until November 10, 2026. The current grace period still applies.",
      "sources": [
        {
          "label": "Federal Register · 91 FR 57807",
          "href": "https://www.govinfo.gov/content/pkg/FR-2026-09-11/pdf/2026-18631.pdf"
        }
      ]
    }
  ]
},
{
  "date": "2026-09-10",
  "changes": [
{
  "id": "h1b-fee-table13-correction",
  "category": "Rulemaking",
  "title": "Correction issued for the H-1B surcharge proposal",
  "summary": "The September 10 correction replaced the historical filing counts in Table 13; the $103,265 amount, scope and September 24 deadline are unchanged.",
  "sources": [
    {
      "label": "Federal Register C1-2026-17324",
      "href": "https://www.govinfo.gov/content/pkg/FR-2026-09-10/pdf/C1-2026-17324.pdf"
    }
  ]
},
{
  "id": "penn-resumption-georgetown-cpt",
  "category": "CPT school evidence",
  "title": "Penn conditionally resumes CPT processing; add Georgetown guidance",
  "summary": "Penn’s September 10 top notice resumes eligible requests; Georgetown’s September 9 update excludes elective internships.",
  "before": "Penn was listed as pausing decisions on new and pending requests; 37 entries (32 public, 5 community) covered 36 institutions or separate campuses.",
  "after": "Penn now conditionally resumes processing under current curriculum rules. With Georgetown, 38 entries (33 public, 5 community) cover 37 schools or campuses.",
  "details": [
    "Penn requires department confirmation, an employer cooperative agreement and a new I-20.",
    "Georgetown has contacted pending applicants and students with fall authorization about impacts and options."
  ],
  "sources": [
    {
      "label": "Penn ISSS · September 10",
      "href": "https://global.upenn.edu/isss/cpt/"
    },
    {
      "label": "Georgetown OGS · September 9",
      "href": "https://internationalservices.georgetown.edu/immigration-updates/"
    }
  ]
},
    {
      "id": "grace-period-nprm-preview",
      "category": "Rulemaking",
      "title": "Proposal to end the 60-day grace period previewed",
      "summary": "#08: the preview lists eight work-visa types and their families.",
      "before": "OIRA review complete; public proposal and publication date pending.",
      "after": "Previewed September 10, due to be published September 11. It would end the grace period of up to 60 days for E-1, E-2, E-3, H-1B, H-1B1, L-1, O-1 and TN workers and their families after a job ends early. Comments run 60 days after publication. People with another lawful status are not affected.",
      "sources": [
        {
          "label": "Federal Register 2026-18631",
          "href": "https://public-inspection.federalregister.gov/2026-18631.pdf"
        }
      ]
    }
  ]
},
{
  "date": "2026-09-09",
  "changes": [
{
  "id": "penn-neu-cpt-public-sources",
  "category": "CPT school evidence",
  "title": "Add Penn’s approval pause and Northeastern COE master’s placement limit",
  "summary": "Two records added from official pages. Penn’s notice is dated August 27 on a page updated August 31; the NEU rule has no publication date.",
  "before": "35 entries: 30 public university sources and 5 community records, covering 34 distinct institutions or separate campuses. Penn and Northeastern were not listed.",
  "after": "37 entries: 32 public university sources and 5 community records, covering 36 distinct institutions or separate campuses. Penn pauses decisions on new and pending requests; Northeastern COE master’s students are limited to one co-op/internship, up to eight months.",
  "details": [
    "Penn’s existing CPT approvals are not affected by the pause.",
    "The NEU entry applies to College of Engineering master’s students only."
  ],
  "sources": [
    {
      "label": "Penn ISSS CPT",
      "href": "https://global.upenn.edu/isss/cpt/"
    },
    {
      "label": "Northeastern COE graduate co-op FAQ",
      "href": "https://coe.northeastern.edu/academics-experiential-learning/co-op-experiential-learning/co-op/graduate-co-op/co-op-faqs/"
    }
  ]
},
    {
      "id": "ucla-cpt-public-source",
      "category": "CPT school evidence",
      "title": "UCLA now backed by an official notice",
      "summary": "The Dashew Center published a September 8 notice covering research cases, existing approvals and cooperative agreements. The school count is unchanged.",
      "before": "UCLA relied on an email screenshot describing a pause on non-degree-required course-credit and support-letter CPT. The 35 entries comprised 29 public university sources and 6 community records.",
      "after": "UCLA now has a public source: non-degree-required course-credit and support-letter CPT is suspended; degree-required CPT continues. The 35 entries now comprise 30 public university sources and 5 community records, still covering 34 distinct institutions or separate campuses.",
      "details": [
        "Dissertation, thesis, research, or capstone training must be a program-wide requirement listed in the UCLA General Catalog.",
        "CPT approved with an I-20 issued before August 12 is unaffected. All CPT applications require a department-employer cooperative agreement."
      ],
      "sources": [
        {
          "label": "UCLA Dashew Center · September 8 notice",
          "href": "https://internationalcenter.ucla.edu/September8message"
        },
        {
          "label": "UCLA Dashew Center Messages",
          "href": "https://internationalcenter.ucla.edu/dashew-center-messages"
        }
      ]
    }
  ]
},
{
  "date": "2026-09-08",
  "changes": [
    {
      "id": "northwestern-cpt-september3-policy",
      "category": "CPT school tracker",
      "title": "Northwestern: no CPT unless every student must do it",
      "summary": "The September 3 notice linked from the CPT page says the school cannot approve training not required of every student unless SEVP changes its guidance.",
      "before": "CPT not required for every student was on hold during the university review.",
      "after": "Northwestern cannot approve experiential learning that is not required for every student unless SEVP guidance changes; OISS is working with programs to determine eligibility.",
      "sources": [
        {
          "label": "Northwestern OISS CPT webpage",
          "href": "https://www.northwestern.edu/international/international-students/student-employment/f-1-practical-training/curricular-practical-training/"
        },
        {
          "label": "Northwestern OISS September 3 notice",
          "href": "https://mailchi.mp/37923185e320/international-student-newsletter-month-day-5100682"
        }
      ]
    }
  ]
},
{
  "date": "2026-09-07",
  "changes": [
    {
      "id": "gmu-cpt-public-source",
      "category": "CPT SCHOOL LIST",
      "title": "Add George Mason’s public CPT notice; evidence entries increase to 35",
      "summary": "OIPS’s policy-review notice pauses Fall 2026 CPT unless the training is shown to be required of every student in the program to graduate.",
      "before": "34 evidence entries: 28 public university webpages and 6 community records, covering 33 distinct institutions or separate campuses. George Mason was not listed.",
      "after": "35 evidence entries: 29 public university pages and 6 community records, covering 34 distinct schools or campuses. George Mason added.",
      "details": [
        "An elective, or an internship that is only one of several ways to graduate, does not qualify.",
        "Purdue ECE and university-level ISS count as one institution; UMD College Park and UMBC remain separate campuses."
      ],
      "sources": [
        {
          "label": "George Mason OIPS: Important CPT Policy Review",
          "href": "https://oips.gmu.edu/current-immigration-information/"
        }
      ]
    },
    {
      "id": "purdue-ece-research-scope-clarification",
      "category": "CPT EVIDENCE SUMMARY CORRECTION",
      "title": "Purdue ECE summary restores “ask ISS about thesis research”",
      "summary": "The email’s last paragraph tells students to ask ISS about work needed for thesis research; the earlier summary left this out.",
      "before": "A department email screenshot said it would not sign CPT this semester.",
      "after": "Department email screenshot: no non-required internship/co-op CPT this semester; ask ISS about thesis research work. This is the ECE department’s position.",
      "sources": [
        {
          "label": "Original Purdue ECE email screenshot (final paragraph)",
          "href": "/cpt-evidence/cpt_purdue.jpeg"
        }
      ]
    },
    {
      "id": "duration-status-academic-restrictions-clarification",
      "category": "Policy clarification",
      "title": "#03 Explains OPT after leaving a PhD and limits on another degree",
      "summary": "The earlier example didn’t explain how the rule affects OPT after leaving a PhD with a master’s, or that the same-or-lower-level limit counts only degrees earned after the rule starts. Both are now explained using the final rule and Rice’s guidance.",
      "before": "After a PhD exit with a master’s, “check OPT eligibility”; completing a U.S. F-1 degree generally barred another same/lower-level program.",
      "after": "The rule bars switching degree level mid-program. Rice explains that it can award the master’s but cannot change the doctoral SEVIS record, so the master’s cannot be used for OPT. Degrees earned before the rule starts don’t count toward the same-or-lower-level limit.",
      "sources": [
        {
          "label": "2026 final rule",
          "href": "https://www.federalregister.gov/documents/2026/07/17/2026-14439/establishing-a-fixed-time-period-of-admission-and-an-extension-of-stay-procedure-for-nonimmigrant"
        },
        {
          "label": "Rice guidance on PhD exit and degree restrictions",
          "href": "https://oiss.rice.edu/dhs-final-rule-elimination-duration-status-new-academic-mobility-restrictions"
        }
      ]
    }
  ]
},
  {
    "date": "2026-09-06",
    "changes": [
      {
        "id": "cpt-broadcast-august12-correction",
        "category": "POLICY CORRECTION",
        "title": "#05 Corrects when the CPT guidance started",
        "summary": "Page 2 of the August 12 broadcast already set the “required of every student to graduate” standard; the September 1 log credited it only to August 24, which is now corrected. The August 24 FAQ explained electives, U.S. students and cooperative agreements.",
        "before": "August 12 was described only as a compliance reminder; the narrower “integral” standard and school responses were dated from August 24.",
        "after": "August 12 already required CPT to be indispensable to the degree and required of every student; August 24 explained further. School responses now date from after August 12.",
        "sources": [
          {
            "label": "SEVP August 12 Broadcast, page 2",
            "href": "https://www.ice.gov/doclib/sevis/pdf/bcm260801.pdf"
          },
          {
            "label": "SEVP August 24 Broadcast preserved by MIT",
            "href": "https://iso.mit.edu/wp-content/uploads/2026/08/2026_0824_SEVP_BroadcastMessage2608-02_CPT_Guidance.pdf"
          }
        ]
      },
      {
        "id": "cpt-school-records-2026-09-06",
        "category": "CPT SCHOOL LIST",
        "title": "Public CPT records added for nine institutions",
        "summary": "Adds Utah, Delaware, UC San Diego, UMBC, GWU, CU Boulder, UW–Milwaukee, Oregon and Kansas. With UCI moving to an official page, the list grows from 25 to 34 records covering 33 schools. Dates shown are each school’s original notice date.",
        "before": "25 records · 18 university webpages / 7 email screenshots; 24 distinct institutions.",
        "after": "34 records · 28 university webpages / 6 email screenshots; 33 distinct institutions.",
        "details": [
          "University of Utah: from September 3, new optional CPT (not required of every student) is paused. Requests can still be submitted in UAtlas but won’t be approved until review ends. Existing CPT continues under the employer, location and dates on the current I-20.",
          "University of Delaware: the September 2 notice says CGPS paused optional CPT. Students can still submit requests, but no new optional CPT will be issued until review ends, and processing may slow.",
          "UC San Diego: the ISEO page pauses all CPT requests in iServices. Page 12 of the September 2 presentation plans to reopen in mid-September and requires the department to confirm the internship is required.",
          "University of Maryland, Baltimore County: the September 4 OISS update limits pending and new requests to training required of every student in the program; Fall 2026 CPT already issued will not be revoked. This entry covers UMBC.",
          "George Washington University: the September 2 ISO notice stops new CPT not required of every student in the degree program; existing CPT continues under the current I-20.",
          "University of Colorado Boulder: the August 31 update approves only listed programs where training is required for the degree or major; a minor doesn’t count, and elective internship credit alone isn’t enough. Approved Fall 2026 CPT is unaffected.",
          "University of Wisconsin-Milwaukee: since August 24, only training clearly required of every student in the program; CPT approved before August 24 stays valid until it ends.",
          "University of Oregon: no more CPT just for elective internship credit. The new policy requires training to be an essential part of the curriculum and degree; the page lists program-wide requirements and work needed for a required master’s thesis or final project or a dissertation, with detailed faculty documentation for research.",
          "University of Kansas: ISS’s August 2026 update pauses all CPT requests while it works out which cases can still be approved."
        ],
        "sources": [
          {
            "label": "University of Utah CPT",
            "href": "https://www.isss.utah.edu/news/posts/2026/cpt-broadcast-message-update.php"
          },
          {
            "label": "University of Delaware CPT",
            "href": "https://www.udel.edu/academics/global/isss/announcements/"
          },
          {
            "label": "UC San Diego CPT",
            "href": "https://iseo.ucsd.edu/student-services/working-in-us/f1-cpt.html"
          },
          {
            "label": "UC San Diego September 2 presentation, page 12",
            "href": "https://iseo.ucsd.edu/_files/student-services/working-in-us/Students_Understanding_CPT_9_2_26.pdf"
          },
          {
            "label": "University of Maryland, Baltimore County CPT",
            "href": "https://isss.umbc.edu/updates/"
          },
          {
            "label": "George Washington University CPT",
            "href": "https://internationalservices.gwu.edu/updated-guidance-curricular-practical-training-cpt"
          },
          {
            "label": "University of Colorado Boulder CPT",
            "href": "https://www.colorado.edu/isss/2026/08/20/change-cpt-authorization-policy-faqs"
          },
          {
            "label": "University of Wisconsin-Milwaukee CPT",
            "href": "https://uwm.edu/cie/services/students/employment/curricular-practical-training/"
          },
          {
            "label": "University of Oregon CPT",
            "href": "https://isss.uoregon.edu/curricular-practical-training-cpt"
          },
          {
            "label": "University of Kansas CPT",
            "href": "https://iss.ku.edu/f-1-cpt-curricular-practical-training"
          }
        ]
      },
      {
        "id": "uci-cpt-public-source",
        "category": "CPT SCHOOL LIST",
        "title": "UCI upgraded to university-webpage evidence",
        "summary": "The International Center public CPT page confirms an August 17 pause in Course Credit CPT. UCI moves to the university-webpage group and retains its original email screenshot.",
        "before": "Email screenshot only: Course Credit CPT paused; mandatory graduation requirements continued.",
        "after": "A public page supports an August 17 Course Credit CPT pause. Degree Requirement CPT must be documented as a graduation requirement in the UCI catalog.",
        "sources": [
          {
            "label": "UCI International Center CPT page",
            "href": "https://ic.uci.edu/welcome-students/students-current-students/students-current-employment-information/curricular-practical-training/"
          }
        ]
      },
      {
        "id": "columbia-cpt-scope",
        "category": "CPT SCHOOL LIST",
        "title": "Columbia clarifies the pause and existing authorizations",
        "summary": "The ISSO CPT page supplies the specific pause scope and treatment of authorizations approved before August 24.",
        "before": "CPT authorizations and requests under review; ISSO would contact affected students.",
        "after": "Only CPT integral to the curriculum, required for all students, and supported by a cooperative agreement is approved. Other cases are paused; pre-August 24 approvals will not be rescinded.",
        "sources": [
          {
            "label": "Columbia ISSO CPT page",
            "href": "https://isso.columbia.edu/content/f-1-cpt-curricular-practical-training"
          }
        ]
      }
    ]
  },
  {
    date: '2026-09-05',
    changes: [
      {
        id: 'cpt-school-records-2026-09-05',
        category: 'CPT SCHOOL LIST',
        title: 'Add USC and Alabama; fix how records are counted',
        summary:
          'USC and the University of Alabama bring the list from 23 to 25 records; with UCSB and NYU moving to official pages, official-page records rise from 14 to 18 and email screenshots fall from 9 to 7. Separate notices from one school used to be counted as separate schools; the count is now by school/department record.',
        before: '23 schools · 14 university webpages / 9 screenshot, email, or forum reports',
        after: '25 school/department records · 18 university webpages / 7 email screenshots; 24 distinct institutions',
        details: [
          'USC: its August 25 notice approves only graduation-required CPT from August 24; Fall 2026 CPT issued before August 24 will not be revoked.',
          'University of Alabama: its August 31 notice requires departments to show, with catalog evidence, that training is required of every student in the program or track, or needed to finish a thesis.',
          'Purdue ECE and Purdue ISS are two records for one school. Earlier logs called the record count a school count; this corrects it.',
        ],
        sources: [
          { label: 'USC OIS August 25 CPT notice', href: 'https://ois.usc.edu/important-update-regarding-curricular-practical-training/' },
          { label: 'University of Alabama August 31 CPT notice', href: 'https://international.ua.edu/news/curricular-practical-training-cpt-changes-effective-immediately/' },
          { label: 'Purdue ECE email screenshot', href: '/cpt-evidence/cpt_purdue.jpeg' },
          { label: 'Purdue ISS email screenshot', href: '/cpt-evidence/cpt_purdue_iss.jpeg' },
        ],
      },
      {
        id: 'nyu-tandon-math-cpt-public-source',
        category: 'CPT SCHOOL LIST',
        title: 'NYU Tandon Mathematics now backed by a department page',
        summary:
          'The NYU Tandon Mathematics internship page says international-student CPT approvals have been paused since September 1. The earlier forum report is replaced by the department page, covering the department’s undergraduate and graduate students.',
        before: 'New York University: an August 31 forum report said CPT was paused, without an official page yet.',
        after: 'New York University (Tandon Mathematics): the department page confirms a September 1 approval pause, covering that department only.',
        sources: [
          { label: 'NYU Tandon mathematics internship policies', href: 'https://math.nyu.edu/dynamic/sites/tandon/internships/' },
        ],
      },
      {
        id: 'ucsb-cpt-public-source',
        category: 'CPT SCHOOL LIST',
        title: 'UCSB now backed by an official page',
        summary:
          'The public UCSB OISS CPT page says CPT issuance has been paused since August 17 while the office consults legal counsel. The entry moves to the university-webpage group and retains both email screenshots.',
        before: 'Email screenshots only: new CPT that was not degree-required was paused, while existing authorizations were unaffected.',
        after: 'A public notice confirms CPT issuance paused since August 17, without separating categories.',
        sources: [
          { label: 'UCSB OISS CPT page', href: 'https://oiss.ucsb.edu/curricular-practical-training' },
        ],
      },
    ],
  },
  {
    date: '2026-09-04',
    changes: [
      {
        id: 'mit-cpt-public-source',
        category: 'CPT SCHOOL LIST',
        title: 'MIT now backed by an official page',
        summary:
          'The MIT International Students Office CPT page says new requests received or pending on August 24 for training not required of every student are paused, and that it will contact students who already have Fall 2026 CPT. MIT moves from the email-screenshot group to the official-page group.',
        before: '23 schools · 13 official pages / 10 screenshot, email or forum reports; MIT had only a notice screenshot.',
        after: '23 schools · 14 official pages / 9 screenshot, email or forum reports; MIT is now backed by an official page.',
        sources: [
          {
            label: 'MIT International Students Office CPT page',
            href: 'https://iso.mit.edu/employment/f-1-curricular-practical-training/',
          },
        ],
      },
    ],
  },
  {
    date: '2026-09-03',
    changes: [
      {
        id: 'duration-hearing-under-advisement',
        category: 'LITIGATION',
        title: 'D/S hearing held; matter taken under advisement',
        summary:
          'Docket entry 47 confirms the September 3 injunction hearing took place. After arguments, the court took the matter under advisement: it did not rule from the bench and will decide later in a written order.',
        before: 'The preliminary-injunction hearing was set for 11:00 a.m. on September 3.',
        after: 'The hearing was held and arguments finished; the matter is under advisement.',
        details: [
          'The rule is not paused yet.',
          'Unless the court pauses it first, the rule takes effect as planned on September 15.',
        ],
        sources: [
          {
            label: 'Docket entry 47 electronic clerk’s notes (CourtListener/RECAP)',
            href: 'https://www.courtlistener.com/docket/74661796/feed/',
          },
        ],
      },
      {
        id: 'duration-government-opposition',
        category: 'LITIGATION',
        title: 'D/S case: government files its opposition',
        summary:
          'On September 2 the government asked to exceed the page limit and attached its opposition (Exhibit A): it asks the court to deny an APA § 705 stay, a preliminary injunction and any judgment before the administrative record is filed, and argues relief should cover only the plaintiffs. The September 3 hearing and September 15 start date stay as scheduled.',
        before: 'The government response was due September 2; the injunction request was awaiting that response.',
        after: 'The government attached its proposed opposition to its September 2 page-limit motion; the court has not ruled.',
        details: [
          'The government says the four-year cap doesn’t mean students must graduate in four years, because they can apply to extend their stay.',
          'It calls the enrollment losses, compliance costs and program changes the plaintiffs describe speculative or purely economic, not irreparable harm.',
          'It opposes nationwide relief and argues that any remedy should be limited to the plaintiffs and their members.',
        ],
        sources: [
          {
            label: 'Government’s September 2 proposed opposition exhibit (57-page PDF)',
            href: 'https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.46.1.pdf',
          },
          {
            label: 'Docket summary',
            href: 'https://clearinghouse.net/case/48393/',
          },
        ],
      },
      {
        id: 'cpt-school-evidence-2026-09-03',
        category: 'CPT SCHOOL LIST',
        title: 'School list grows to 23; 13 backed by official pages',
        summary:
          'The list grows from 21 to 23 schools; schools backed by official pages rise from 11 to 13, with 10 still relying on screenshots, emails or forum posts. Adds the University of Maryland, College Park and Trine University.',
        before: '21 schools · 11 university webpages / 10 screenshot, email, or forum reports',
        after: '23 schools · 13 university webpages / 10 screenshot, email, or forum reports',
        details: [
          'The University of Maryland, College Park stated on September 2 that unapproved CPT outside a program-wide requirement, required course, or thesis or dissertation research requirement is paused; previously authorized CPT may continue.',
          'Trine University’s graduate CPT page still lists 2026–27 deadlines and says applications stay open and are reviewed in order received; it doesn’t mention the August 24 guidance.',
        ],
        sources: [
          {
            label: 'University of Maryland, College Park CPT page',
            href: 'https://marylandglobal.umd.edu/global-learning-all/international-students-scholars/employment-taxes/employment-f-1-international-students/curricular-practical-training-cpt',
          },
          {
            label: 'Trine University CPT page',
            href: 'https://www.trine.edu/international/hybrid/experiential-learning/cpt-information.aspx',
          },
        ],
      },
    ],
  },
  {
    date: '2026-09-02',
    changes: [
      {
        id: 'uc-berkeley-cpt-criteria',
        category: 'CPT SCHOOL LIST',
        title: 'UC Berkeley spells out thesis CPT conditions',
        summary:
          'The university CPT page now states the narrow thesis and dissertation criteria explicitly: only thesis-track master’s or doctoral students who have Advanced to Candidacy may apply, and the practical training must be necessary to complete the thesis or dissertation, not reasonably replaceable by another research or data-collection method, and documented by the faculty adviser. Course Credit CPT remains paused.',
        before: 'Course-credit CPT is paused; degree-required and thesis/dissertation-required CPT continue.',
        after: 'Course Credit CPT stays paused; thesis and dissertation CPT is approved only when all four conditions are met: candidacy, necessity, no reasonable substitute and faculty documentation.',
        sources: [
          {
            label: 'UC Berkeley International Office CPT page',
            href: 'https://internationaloffice.berkeley.edu/students/employment/cpt',
          },
        ],
      },
    ],
  },
  {
    date: '2026-09-01',
    changes: [
      {
        id: 'duration-hearing',
        category: 'DATE CHANGE',
        title: 'Hearing date corrected from September 9 to September 3',
        summary:
          'A secondary report previously placed the preliminary-injunction hearing on September 9. The date is now corrected to September 3, 2026, at 11:00 a.m. Eastern Time based on the court’s official calendar and docket.',
        before: 'September 9, 2026 · Preliminary-injunction hearing (incorrect)',
        after: 'September 3, 2026 · Preliminary-injunction hearing',
        sources: [
          {
            label: 'Official court calendar',
            href: 'https://forms.mad.uscourts.gov/courtlist.html',
          },
          {
            label: 'Docket summary',
            href: 'https://clearinghouse.net/case/48393/',
          },
          {
            label: 'Plaintiffs’ case page',
            href: 'https://www.presidentsalliance.org/duration-of-status-litigation/',
          },
        ],
      },
      {
        id: 'cpt-guidance-dates',
        category: 'POLICY CONTENT',
        title: '#05 Separates the August 12 and August 24 CPT notices',
        summary:
          'The CPT entry now describes the two ICE/SEVP broadcasts separately: August 12 stressed school and DSO compliance; August 24 set the narrower “integral” standard and the cooperative-agreement rule. School responses were re-dated to August 24. (Corrected again on September 6: August 12 had already set the standard.)',
        before: 'From August 12 · Universities respond to the tighter eligibility standard',
        after: 'August 12 compliance reminder; August 24 eligibility tightened and schools respond',
        sources: [
          {
            label: 'SEVP August 12 Broadcast',
            href: 'https://www.ice.gov/doclib/sevis/pdf/bcm260801.pdf',
          },
          {
            label: 'SEVP August 24 Broadcast',
            href: 'https://www.ice.gov/doclib/sevis/pdf/bcm_260802.pdf',
          },
        ],
      },
      {
        id: 'cpt-school-evidence',
        category: 'CPT SCHOOL LIST',
        title: 'School list grows to 21; evidence groups updated',
        summary:
          'The list expanded from 13 to 21 schools. Entries whose current status is supported by university webpages increased from 6 to 11, while screenshot, email, or forum-text entries increased from 7 to 10.',
        before: '13 schools · 6 university webpages / 7 forum reports',
        after: '21 schools · 11 university webpages / 10 screenshot, email, or forum reports',
        details: [
          'The University of Michigan entry moved from forum-only evidence to a university webpage.',
          'Northwestern, Columbia, and Harvard were added from university webpages.',
          'New York University was added from an August 31 forum report and remains marked as awaiting a public university page.',
          'The University of Washington was added from its university notice: new CPT not required for every student is paused, while previously authorized CPT may continue.',
          'Goldey-Beacom College and Purdue University ISS were added from university email screenshots stored on this site; Purdue ISS remains separate from Purdue ECE.',
          'MIT’s public CPT page did not yet show the latest pause, so it moved to the screenshot group; the entry now describes the narrower pause in the university’s notice.',
        ],
        sources: [
          {
            label: 'University of Washington',
            href: 'https://iss.washington.edu/update-on-cpt-policy/',
          },
          {
            label: 'Michigan',
            href: 'https://internationalcenter.umich.edu/about/news/updated-guidance-curricular-practical-training-cpt',
          },
          {
            label: 'Northwestern',
            href: 'https://www.northwestern.edu/international/international-students/student-employment/f-1-practical-training/curricular-practical-training/',
          },
          {
            label: 'Columbia',
            href: 'https://communications.news.columbia.edu/news/important-updates-regarding-cpt-f-1-students',
          },
          {
            label: 'Harvard',
            href: 'https://www.hio.harvard.edu/employment-training/curricular-practical-training',
          },
          {
            label: 'Goldey-Beacom email screenshot',
            href: '/cpt-evidence/cpt_goldey_beacom.jpeg',
          },
          {
            label: 'Purdue ISS email screenshot',
            href: '/cpt-evidence/cpt_purdue_iss.jpeg',
          },
          {
            label: 'MIT notice screenshot',
            href: '/cpt-evidence/cpt_mit.jpeg',
          },
        ],
      },
    ],
  },
];

export function getUpdateLog(language: Language): ContentUpdate[] {
  return language === 'en' ? englishUpdates : chineseUpdates;
}
