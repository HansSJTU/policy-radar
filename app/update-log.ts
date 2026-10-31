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
    "date": "2026-10-31",
    "changes": [
      {
        "id": "duration-cross-motions-text-confirmed",
        "category": "#03 D/S 全国暂缓诉讼",
        "title": "取得双方 10·30 简易判决动议正文",
        "summary": "第 66、67 项为政府动议与支持意见，第 68 项为原告再次申请；不是法院已判决。",
        "before": "只取得第 66、67 项文件类型，提交方与具体请求均未验证；尚未列第 68、69 项。",
        "after": "取得第 66、67、68 项正文，确认双方分别请求各项争议判其胜诉。政府意见另提出发回但不撤销或限缩救济的备选主张，均非裁定。第 69 项支持意见及附件仍未取得，不归纳其论证。同步状态、摘要、流程、时间线、诉讼标记和简报；全国暂缓与原 11·02 回复、11·09 上诉排期保留。",
        "sources": [
          {
            "label": "第 66 项政府动议",
            "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.66.0.pdf"
          },
          {
            "label": "第 67 项政府支持意见",
            "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.67.0.pdf"
          },
          {
            "label": "第 68 项原告再次申请",
            "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.68.0.pdf"
          }
        ]
      },
      {
        "id": "case-western-uno-cpt-public-records",
        "category": "#05 CPT 学校追踪",
        "title": "新增 Case Western 与 Nebraska–Omaha 校方记录",
        "summary": "前者暂停新申请，后者限于全员毕业必需实习；不推断已有授权失效或其他校区口径。",
        "before": "71 条记录：67 条校方网页、4 条社区截图；70 所不同学校。",
        "after": "73 条记录：69 条校方网页、4 条社区截图；72 所不同学校。Case Western 自 9·08 暂停新申请并修订流程；UNO 9·17 公开通知要求全员毕业必需及先取得授权 I-20。这是新增已存在的公开通知，不是两校今天才改变政策；已有授权处理和后续调整的缺口逐项保留。",
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
        "summary": "第 29 项电子命令准许第 28 项程序动议；11·06 听证未变，不是准许暂停指引。",
        "before": "当前程序只列政府 10·28 反对意见及 11·06 听证，尚未列原告回复安排。",
        "after": "加入 10·29 申请、10·30 准许及 11·04 回复日期，同步摘要、状态、诉讼路径、时间线与简报。第 28-1 项为未签署拟议命令，实际回复书状未取得；指引仍在执行。",
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
        "title": "补入 10·30 新文件条目，正文及提交方待核实",
        "summary": "第 66、67 项分别显示简易判决和支持动议意见类型；不据类型认定法院已作判决。",
        "before": "镜像最新仍至第 65 项，当前程序和下一步列 10·30 简易判决动议期限。",
        "after": "新增第 66、67 项历史及简报，当前下一步核实正文、提交方及是否有其他提交；原 11·02 回复和 11·09 上诉排期保留。没有取得新实体裁定，全国暂缓状态不变；19:00 空响应的缺口单独披露。",
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
        "summary": "春季改列 01·30 开始、暑期改列 08·17 结束、秋季改列 08·18 开始；资格限制未解除。",
        "before": "条目仅列非全员学位必需的新 CPT 暂停及校方联系秋季已获批学生，未列 2027 日历。",
        "after": "补入 2027 春季 01·30—05·19、暑期 05·20—08·17、秋季 08·18—12·17，并保留学期兼职限制、特定学生更晚开始及须实际获批的条件。日历不代表选修 CPT 恢复。",
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
        "summary": "三校均限制非必需 CPT；分别保留旧学分措辞、严格论文路径及公告日期冲突。",
        "before": "68 条记录：64 条校方网页、4 条社区截图；67 所不同学校。",
        "after": "71 条记录：67 条校方网页、4 条社区截图；70 所不同学校。Illinois Tech 暂停无强制实践要求项目，Arizona 保留学位／论文必需实践个案，UConn 要求指出公开的全员必需课程要求；不外推所有 CPT 停办或已有授权失效。UConn 页面 8·30 与所称邮件 8·31 的日期冲突未解决。",
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
        "category": "#02 H-1B 附加费 · 另项 100,000 美元案",
        "title": "取得第 144 项正文：拒绝暂停地区诉讼，日期冲突待澄清",
        "summary": "正文明确记录第 133 项动议被拒；会议及行政记录期限的日期相互矛盾，不推算或采用为已核实排期。",
        "before": "10·28 条目仅有标题，无法确认动议结果、会议日期或新的排期。",
        "after": "新增第 144 项纯文字记录，确认其记载拒绝暂停地区诉讼并要求行政记录；披露录入 10·28、会议 12·01、21 天括注 11·17、后续会议 11·24 的冲突。当前下一步等待法院澄清，保留上诉 11·06／12·04 原书面排期，不表述为恢复收费或改变 103,265 美元 NPRM 状态。",
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
        "before": "条目仅列新表单及学位必需项目，称既有授权处理方式未说明。",
        "after": "状态和详情加入 2026 秋季所做 CPT 的延期请求不获授权；不外推为撤销所有已有 I-20。公告日期、例外及具体授权影响仍未说明。",
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
        "title": "更新新生开工、申请处理及 2027·06·13 续期过渡界线",
        "summary": "新生不能因提前取得 I-20 而提前开工；原一年期续期说明已被过渡安排替换。",
        "before": "条目披露下方仍保留一年期续期措辞，与 2027 春季按学期授权衔接不明。",
        "after": "续期过渡最迟 2027·06·13，或更早项目／资格终止日；新生最早按开课日工作，2027 春季为 01·11。补入 OPT 随 SEVIS transfer release 结束、错误／缺件须新申请和待审续期不延长旧授权；页面补件队列、30／60 天窗口等冲突继续披露。",
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
        "summary": "Queens College 暂停申请；BGSU 按全员必需标准审查，既有授权必要时可能撤销。",
        "before": "66 条证据记录：62 条校方网页、4 条社区截图；65 所不同学校，未收录这两所学校。",
        "after": "68 条证据记录：64 条校方网页、4 条社区截图；67 所不同学校。Queens College 的学位必需实践须先联系 ISSO，不外推整个 CUNY；BGSU 仅称已有授权将复核、必要时撤销，不写成全部已撤销。两项校方通知发布日期及个别授权结果未核实。",
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
        "summary": "取得第 27 项政府反对意见全文及两份广播附件；第 26 项命令仅准许超页，未裁定暂缓。",
        "before": "当前程序等待 10·28 政府答复；核查说明称公开案卷最新仍至第 24 项，未取得后续答复正文。",
        "after": "摘要、状态、诉讼路径、时间线及简报补入政府反对初步禁令／行政行动暂缓的意见，移除已履行的未来答复事项；保留 10·19 延期历史和 11·06 下午 3 时美东听证。明确政府关于资格、最终行政行动及既有规定的主张不是法院认定，未取得准许暂缓的命令。",
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
        "category": "#02 H-1B 附加费 · 另项 100,000 美元案",
        "title": "补入 10·28 案卷条目，会议及暂停动议结果待核实",
        "summary": "公开镜像新增涉及会议、暂停动议与听证排期的标题，但没有正文；移除已过的 10·27 未来事项。",
        "before": "下一步仍列 10·27 Zoom 案件管理会议；核查说明称会议时间尚未到，最新案卷仅至 10·26 律师通知。",
        "after": "时间线及简报补入 10·28 新案卷标题，明确正文、动议裁定结果及新排期尚未取得；10·27 仅保留在历史文件记载中，不再作为未来日期。不据标题认定会议已按原日期举行、动议获准／被拒或恢复收费；103,265 美元 NPRM 的提案状态不变。",
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
        "summary": "10·26 通知称仍能批准部分请求，但许多学生的机会减少；不是全校停批或无条件恢复。",
        "before": "65 条证据记录：61 条校方网页、4 条社区截图；64 所不同学校，未收录 Wyoming。",
        "after": "新增 Wyoming 公开通知后为 66 条记录：62 条校方网页、4 条社区截图；65 所不同学校。说明学生可继续寻找机会并尽早提交 ISS 核查，未逐项核实所有合格项目或已有授权处理；11·06 听证不等于恢复日期。",
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
        "title": "独立核实上诉排期：政府主书状／附录 11·09 到期",
        "summary": "第一巡回法院 10·19 案卷排期与 10·09 相对期限命令已取得；全国暂缓继续。",
        "before": "11·09 仅按政府第 63 项记载，上诉最新排期未独立核实，下一步列日期未定。",
        "after": "加入第一巡回 26-2112 公开案卷，当前摘要、下一步和简报列明 11·09 政府主书状／附录；后续答辩在主书状送达后 30 天、回复在答辩送达后 10 天，不预设固定 12·09 期限。保留此前来源缺口的历史快照，明确排期没有解除全国暂缓。",
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
        "summary": "区分企业个案、既往 LCA 数据复查和 AC29 规则制定；Cloudera 的 24 个月从最近一次撤回申请日起算。",
        "before": "条目仅列行政命令及既往 LCA 数据复查的落实缺口，未列 10·08 企业定向 PERM 公告或 10·16 Cloudera 和解。",
        "after": "增加白宫 10·08 发布会中的定向暂停公告，以及 DOJ 公布的 Cloudera 和解第 17 段：撤回相关未决 PERM，最近一次撤回日起自我禁入 24 个月，期间不得提交 ETA Form 9089 或刊登 PERM 招聘广告。披露最新企业书面暂停／恢复通知及实际起止日期缺口；不表述为全国 PERM 停办、现有 H-1B 自动失效、LCA 复查已启动或 AC29 NPRM 已发布。",
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
        "title": "核实延期电子命令与行政记录索引，动议 10·30、回复 11·02",
        "summary": "第 64 项没有采用政府请求的 11·06 回复日期；全国暂缓继续。",
        "before": "仅取得 10·23 延期裁定及第 65 项标题，下一步为日期未定，未来旧排期卡片停显。",
        "after": "读取第 64 项完整电子命令及第 65 项索引通知和三份附件。当前下一步及未来简报列法院明确的 10·30 动议、11·02 回复，解除标题正文缺口；不将索引提交表述为全部行政记录已逐份核验，不改变全国暂缓。此前核查快照和旧命令日期保留。",
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
        "summary": "发布前审查完成；公开 NPRM、评论期限和生效日仍待核实。",
        "before": "网站显示 OIRA 审查中，采用 9·14 待审链接，流程停在进行中的 OIRA 审查。",
        "after": "以新的结案记录 rrid=1533011 为首要来源，状态与流程改为 OIRA 已完成、等待 NPRM；同步摘要、下一步、情景和简报，保留送审历史。结案记录未公开具体修改，联邦公报 RIN 查询未列公开提案，不推断条款或实施日期。",
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
        "title": "政府申请延长书面期限，未核实法院批准",
        "summary": "10·22 第 63 项请求改为 10·30 动议、11·06 回复，全国暂缓不变。",
        "before": "最新程序文件为 10·16 第 61 项命令：行政记录 10·23、动议 10·26、回复 11·02。",
        "after": "加入第 63 项申请、历史和简报，保留第 61 项法院期限并标明延期未获独立核实批准。政府文件称上诉主书状及附录 11·09 到期，明确仅为当事人记载，未取得独立上诉排期。",
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
        "before": "仅列申请开放、2026–27 截止日期和审理流程；原页下一开始日为 2026·12·14、2027·05·24，一年期授权。",
        "after": "改列 2027 春季起按学期授权、开课日起止限制、每学期重新申请、续期不自动延长，以及既有批准保护。下一可开始日更新为 2027·01·11、2027·06·14，原截止日未变；披露页内仍有一年期续期旧说明，过渡衔接待 DSO 确认。学校数和证据等级不变。",
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
        "title": "出现 10·23 延期裁定记录，最新排期正文待核实",
        "summary": "摘要新增延期裁定和第 65 项通知，尚不能确认延期是否获准或新期限。",
        "before": "最新摘要只列第 63 项申请；下一步及未来简报仍将 10·26、11·02 列作现行法院期限。",
        "after": "加入 10·23 新记录和具体访问缺口。第 61 项日期及第 63 项请求保留在历史中，旧的未来日期卡片停止展示，下一步改为日期未定并等待正文。未把政府请求写成获准，也未推断第 65 项就是行政记录提交。",
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
        "after": "新增一条校方网页，变为 65 条记录：61 条校方网页、4 条社区截图；64 所不同学校。列明本硕项目、严格博士论文条件及合作协议，说明未来表单日期不等于已恢复审批；已有授权处理及发布日期未确认。",
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
        "title": "取得 10·16 简易判决排期命令，全国暂缓继续",
        "summary": "第 61 项命令排定行政记录 10·23、简易判决动议 10·26、回复 11·02；没有解除 9·14 暂缓令。",
        "before": "下一步仅写日期未定，等待法院处理双方程序方案。",
        "after": "详情、当前程序、里程碑、下一步和 30 天简报列出法院确定的三个书面期限，明确它们不是判决日、暂缓令到期日或新生效日。",
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
        "summary": "10·19 第 22 项命令准许延长起诉及暂缓申请的答复期限，不暂停指引。",
        "before": "仅列 11·06 听证，未列政府答复延长期限。",
        "after": "摘要、当前程序、下一步和简报加入 10·28 政府答复，保留听证不是恢复日期的说明。",
        "sources": [
          {
            "label": "法院第 22 项电子命令",
            "href": "https://www.courtlistener.com/docket/74919449/feed/"
          }
        ]
      },
      {
        "id": "h1b-separate-fee-october15-20-filings",
        "category": "#02 H-1B 附加费（另项 100,000 美元收费案）",
        "title": "补入另项收费案双方意见及联合案件管理说明",
        "summary": "10·15 原告反对、10·19 政府回复、10·20 联合说明均为当事人文件；尚不改变 9·30 命令。",
        "before": "最新文件只列政府暂停地区诉讼请求及第九巡回排期通知。",
        "after": "加入第 140、141、142 项及来源，把已提交的 10·20 联合说明从下一步移入历史；10·27 会议按 9·30 命令及联合说明列示。暂停地区诉讼请求仍待裁，建议的实体排期不是法院期限，也不恢复收费。",
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
        "before": "61 条记录：57 条校方网页、4 条社区截图；60 所不同学校，未收录这三所学校。",
        "after": "新增三条校方网页记录，既有社区证据等级不变。Adelphi 10·15 修订强调课程必需与合作协议；NC State 限学位必需或严格论文研究；WMU 10·16 通知将收紧安排放在 2027 春季，不能写成当前全面停批。",
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
        "summary": "10·16 修改的校方通知新增听证日期，没有扩大 CPT 授权资格。",
        "before": "UIC 条目仅介绍诉讼和核对授权资格，未列听证日期。",
        "after": "条目加入 11·06 听证，并继续明确没有宣布全面停批、恢复或已有授权失效。",
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
        "category": "#02 H-1B 附加费（另项 100,000 美元收费诉讼）",
        "title": "取得第九巡回上诉案号及书面排期通知",
        "summary": "地区案卷第 138 项附载第九巡回 26-6667 排期：主书状 11·06、答辩 12·04；通知不恢复收费。",
        "before": "仅记载政府 10·09 上诉及暂停地区诉讼的请求，未列上诉案号或确定的上诉书状日期。",
        "after": "补充 10·09 签发、10·14 录入地区案卷的法院通知：26-6667 主书状 11·06、答辩 12·04，可选回复在答辩送达后 21 天；最新地区排期仍有核查缺口，9·30 命令未因这份通知而暂停。",
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
        "title": "取消既往批准尊重原则的 NPRM 正式刊登，评论截至 11·13",
        "summary": "10·14 刊登于 91 FR 65119，评论截止 11·13；尚未生效，不自动拒绝续期。",
        "before": "状态为预览公开、预定 10·14 刊登，评论期限只有“刊登后 30 天”占位。",
        "after": "改为正式提案和评论中，原文链接改为联邦公报刊登版，并在下一步与 30 天简报中列出 11·13 评论截止。",
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
        "summary": "10·14 刊登于 91 FR 65306 并于当日生效，原样承接 2025 临时最终规则；续期界线仍为 2025·10·30。",
        "before": "状态为最终稿预览公开、预定 10·14 刊登。",
        "after": "改为最终规则 10·14 生效，原文链接改为刊登版；强调取消自 2025·10·30 起已在执行，不是 10·14 才首次取消。",
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
        "title": "CPT 诉讼的暂缓申请定于 11·06 听证",
        "summary": "AAU v. DHS 案卷第 19 项（10·13）把初步禁令与行政行动暂缓申请的听证定在 11·06 美东下午 3 点；听证不是裁定。",
        "before": "写作“未确认听证或恢复日期”，未核实最新案卷。",
        "after": "状态、时间线、下一步、诉讼标记和 30 天简报加入 11·06 听证；截至 10·14 案卷中没有准许暂缓的命令。",
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
        "title": "另项 10 万美元收费案：政府上诉并申请暂停地区诉讼",
        "summary": "Global Nurse Force 案中，政府 10·09 就 9·30 命令向第九巡回法院上诉并申请暂停地区诉讼程序；上诉本身不暂停该命令，也不涉及 103,265 美元 NPRM。",
        "before": "写作 9·30 后的上诉或暂缓命令未核实，10·20、10·27 排期照常列出。",
        "after": "背景、时间线和简报补入上诉与暂停诉讼动议，并注明 10·20、10·27 排期可能调整。",
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
        "title": "逐条核对政策内容，修正范围表述与错位例子",
        "summary": "对照联邦公报、行政命令原文、OIRA 记录与法院案卷复核 14 条政策；文号、刊登日、评论截止与生效日均一致，另修正以下问题。",
        "details": [
          "#13 行政命令：第 3(a) 节要求在 LCA、petition、签证和入境四个环节都考虑裁员，重点提示不再写成只落在签证和入境；“处境相近”的美国工人命令未定义，不再断言其他部门裁员不算。",
          "#07 H-1B 分类改革、#11 H-4 EAD、#05 CPT 指引：把放错位置的例子移回对应的影响标题下。",
          "把会过时的“今天／明天”改成具体日期，涉及 EAD 自动延期、H-4 核查说明及 3 条学校记录；CPT 详情页的诉讼说明改为指引适用的表述。"
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
        "title": "新增取消既往批准尊重原则的 I-129 提案预览",
        "summary": "10·13 公开 RIN 1615-AD26 的 46 页 NPRM 预览，预定 10·14 刊登；不是已生效规则。",
        "before": "尚未收录 AD26；综合 H-1B 改革 AD00 仍单独跟踪 OIRA 审查。",
        "after": "新增独立条目、原文及简报，说明相同当事方和事实的续期拟不再一般尊重既往资格认定，不能等同自动拒绝。",
        "details": [
          "预览中的评论期限为刊登后 30 天占位符；具体日历截止日待正式版本确认。"
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
        "title": "补入已执行的 EAD 自动延期取消规则及今天的最终稿预览",
        "summary": "最终稿预览原样承接 2025·10·30 临时最终规则，预定 10·14 刊登；不是明天首次取消。",
        "before": "未独立展示 AD05 自动延期规则；H-4 条目仅跟踪未来申请资格撤销议程。",
        "after": "新增独立条目，区分 2025·10·30 续期递交界线、界线前合格延期和法定例外，并在 H-4 详情关联说明。",
        "details": [
          "部分 H-4、c9 等受覆盖续期不再凭收据自动延期；有效卡片和 H-4 申请资格不因此自动取消。",
          "STEM OPT 180 天延期、TPS 法定公告例外及 E／L 随身份工作授权不能套用同一结论。"
        ],
        "sources": [
          {
            "label": "2025·10·30 临时最终规则 · 已生效",
            "href": "https://www.govinfo.gov/content/pkg/FR-2025-10-30/pdf/2025-19702.pdf"
          },
          {
            "label": "10·13 最终稿预览 · 原样承接",
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
        "title": "补入原告要求立即最终判决并撤销规则的程序方案",
        "summary": "第 60 项正文已取得：原告反对暂停地区诉讼，请求立即作出撤销规则的最终判决；这份提交不是法院已准许的判决。",
        "before": "已收录第 59 项政府暂停诉讼请求；第 60 项原告正文未取得，原告立场与其引用的上诉程序未展示。",
        "after": "详情、历史时间线及 30 天简报补入原告立场；文件引用上诉 21／30／10 天相对期限，但原命令与正式排期尚未独立核实。",
        "details": [
          "原告提出 10·16 提供行政记录、10·23 补充意见和 10·30 答复的备选地区程序；未核实法院采纳，不列为已确定的未来期限。",
          "引用的上诉开篇期限从书面排期入案卷起算，不能直接从 10·09 算起；本次未核实改变第 51 项全国暂缓令的新命令。"
        ],
        "sources": [
          {
            "label": "10·09 原告程序方案 · 第 60 项（当事方提交）",
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
        "title": "正式 OPT 提案公布首次 7 万美元、后续 3 万美元及学校缴费责任",
        "summary": "10·08 NPRM 公布具体金额、推荐前付款、成本可转嫁及过渡条件；一般评论截止 11·09，PRA 评论截止 12·07，尚未生效。",
        "before": "仍以媒体单笔 100,000 美元报道为标题；状态停在 OIRA 结案，金额、缴费方与提案日期待公布。",
        "after": "改为正式提案和评论中；首次 70,000 美元、已缴首次费后的后续 OPT 30,000 美元，学校先缴且可转嫁经济成本。",
        "details": [
          "适用于毕业前、毕业后及 STEM OPT；单纯换雇主不触发费用。",
          "过渡界线拟为最终规则公布后第 60 天；此前参加过 OPT 但未缴首次费，不自动适用 30,000 美元。现有 EAD 不因 NPRM 自动失效。"
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
        "title": "补入四个高教协会挑战 CPT 指引的诉讼与暂缓请求",
        "summary": "10·05 提起 AAU v. DHS（1:26-cv-14520）并申请初步禁令／行政行动暂缓，10·06 提交支持意见；申请暂缓不等于法院已准许。",
        "before": "只跟踪两份 SEVP 广播与学校执行，尚未收录新诉讼。",
        "after": "详情、流程说明和 30 天简报加入诉讼及请求，明确与 D/S 暂缓案不同；最新案卷／暂缓裁定仍有核查缺口。",
        "sources": [
          {
            "label": "10·05 诉状（当事方提交）",
            "href": "https://www.nafsa.org/sites/default/files/media/document/CPT%20Complaint%20AAU%20v.%20DHS%20.pdf"
          },
          {
            "label": "初步禁令及暂缓申请（不是法院命令）",
            "href": "https://www.aau.edu/uploads/files/general/Motion-for-Preliminary-Injunction-and-Stay-of-Agency-Action-CPT-Case.pdf"
          }
        ]
      },
      {
        "id": "duration-october-conference-and-procedure",
        "category": "#03 D/S 诉讼",
        "title": "10·02 状态会议已举行，政府提交后续程序请求",
        "summary": "第 56 项确认会议举行，第 59 项政府意见请求暂停地区诉讼等待上诉，或采用备选排期；不是规则恢复令。",
        "before": "把 10·02 状态会议列为未来事件，后续案卷止于 9·30 上诉。",
        "after": "将会议记为历史，补入 10·09 书面提交；政府称已申请加速上诉，法院是否采纳及第 60 项正文仍未核实。",
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
        "title": "补入另项 100,000 美元收费政策的 9·30 法院禁令",
        "summary": "Global Nurse Force 第 130 号命令撤销机构政策，并禁止按原公告及延长公告执行，直到完成 APA 通知评论及 RFA 分析。",
        "before": "另项 100,000 美元背景仅列 6·08 撤销、7·24 拒绝暂缓及 9·18 延长公告。",
        "after": "补入 9·30 命令、10·20 联合说明和 10·27 案件管理会议排期；这些不是 103,265 美元 NPRM 的裁判或生效日期。",
        "details": [
          "后续案卷和当前法院日历未完整读取；排期仅按 9·30 命令记载，不声称已再次确认。"
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
        "title": "补入 Yale、Oklahoma、UVA、UIC 的校方网页证据",
        "summary": "新增四条公开校方记录，区分毕业必需 CPT、部分或全部新请求暂停及诉讼跟踪，不改变既有社区截图的证据级别。",
        "before": "57 条记录：53 条校方网页、4 条社区截图；56 所不同学校。",
        "after": "61 条记录：57 条校方网页、4 条社区截图；60 所不同学校。",
        "details": [
          "Yale 10·07 确认仅处理全员毕业必需实践；Oklahoma 10·08 页面仍暂停 8·24 起新请求。",
          "UVA 继续处理学位必需实践，暂停非必需课程学分型 CPT；UIC 10·07 说明核对资格及跟踪诉讼，未宣布全校停批或全面恢复。"
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
        "title": "Kansas 现行页面改为授权毕业必需 CPT",
        "summary": "ISS 页首不再显示先前暂停所有请求的通知，现称可授权学位必需的实习／实践；没有注明调整日期。",
        "before": "条目称暂停全部 CPT 请求。",
        "after": "改为记录现行毕业必需实践授权口径及申请流程，不声称所有选修实习恢复。",
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
        "title": "NYU Tandon 数学系页面不再显示旧暂停通知",
        "summary": "现行页面列通用 CPT 申请步骤；这不足以证明暂停解除，当前审批和恢复日期仍需校方确认。",
        "before": "条目称校方页面明确自 9·01 暂停 CPT 审批。",
        "after": "改为披露旧通知不再显示及现行审批缺口，不外推 NYU 全校，也不声称已经恢复。",
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
        title: '补录 CMU 官方 CPT 收紧通知与现行申请要求',
        summary: '补入此前遗漏的 CMU OIE 8·27 公告及现行 CPT 页面：全员毕业必修实践才符合要求，选修实习需改申请 pre-completion OPT；论文相关校外工作仍在审查。不是 10·01 新发布的通知。',
        before: '56 条记录：52 条校方网页、4 条社区截图；55 所不同学校。未收录 CMU。',
        after: '57 条记录：53 条校方网页、4 条社区截图；56 所不同学校。新增 CMU 校方网页记录，社区证据级别不变。',
        details: ['保留现行页仍在修订、CSD 博士页口径冲突及既有授权处理未说明的限制，不声称全校停批或博士 CPT 已恢复。'],
        sources: [
          { label: 'CMU OIE · 8·27 CPT 公告', href: 'https://www.cmu.edu/oie/news-and-events/2025-2026/august/cpt-broadcast-message.html' },
          { label: 'CMU OIE · 现行 CPT 页面', href: 'https://www.cmu.edu/oie/employment/f1-students/curricular-practical-training.html' },
          { label: 'CMU CSD · 博士 CPT 资源页', href: 'https://www.csd.cs.cmu.edu/academics/doctoral-resources/applying-for-cpt-or-opt' },
        ],
      },
      {
        id: 'duration-government-appeal-september-30',
        category: 'D/S 诉讼',
        title: 'D/S 案政府上诉，暂缓令仍按原命令执行',
        summary: '9·30 地区法院案卷第 53—55 项显示政府提出上诉、记录移送，并获第一巡回法院案号 26-2112。未核实有上诉法院中止暂缓令的命令；上诉本身不使 9·14 全国暂缓失效。',
        before: '诉讼进展止于 9·14 全国暂缓及 10·02 状态会议排期。',
        after: '加入 9·30 上诉及案号，保留全国暂缓状态，并披露上诉案卷未独立读取。',
        sources: [{ label: '法院案卷公开镜像 · 第 53—55 项', href: 'https://www.courtlistener.com/docket/74661796/feed/' }],
      },
      {
        id: 'ucsd-cpt-current-application-process',
        category: 'CPT 学校',
        title: 'UC San Diego 现行官网改列合格项目申请流程',
        summary: 'ISEO 页面不再显示此前“全部 CPT 请求暂停”通知，列出经审核项目和 iServices 申请、院系／ISEO 审批流程；未注明恢复日期，也不代表全校所有项目开放。',
        before: '学校条目仍标为暂停全部 F-1 CPT 请求。',
        after: '改为记录符合条件项目可申请及其程序，未列项目仍需院系申请核实。',
        sources: [{ label: 'UC San Diego ISEO · F-1 CPT', href: 'https://iseo.ucsd.edu/student-services/working-in-us/f1-cpt.html' }],
      },
      {
        id: 'northwestern-cpt-september-29-cleanup',
        category: 'CPT 学校',
        title: 'Northwestern 9·29 页面删去冲突的旧版 CPT 口径',
        summary: 'OISS 现行页面仍要求实践为项目所有学生毕业所必需，且不再保留 9·25 页面下方“integral to or required”的旧措辞；选修实习并未因此开放。',
        before: '条目提醒同页下方仍有旧版措辞。',
        after: '更新为 9·29 页面统一使用全员必需标准，保留历史通知截图。',
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
        title: 'Northwestern 公布全员必需条件与 CPT 申请步骤',
        summary: 'OISS 标注 9·25 更新的页面明确：实践须为项目所有学生毕业所必需，完成必需实践后不能再申请额外 CPT；合格申请需合作协议、学业负责人确认和 CPT I-20。页面下方旧文案仍在，不能据此推断选修实习恢复。',
        before: '条目仅依据 9·03 通知描述非全员必需 CPT 停批，未列现行申请流程。',
        after: '条目改为描述 9·25 页面列出的资格和办理条件，旧通知截图保留作历史对照。',
        sources: [{ label: 'Northwestern OISS · Curricular Practical Training', href: 'https://www.northwestern.edu/international/international-students/student-employment/f-1-practical-training/curricular-practical-training/' }],
      },
      {
        id: 'oregon-cpt-current-page-clarification',
        category: 'CPT 学校',
        title: 'Oregon 当前 CPT 页面补充 DMA 项目和学分口径',
        summary: 'ISSS 当前页面将 DMA 结业项目列为可能符合条件的必需实践，并称学分数依项目和导师决定。旧页面的一学分统一最低要求不再显示；校方未注明修订日期，不能据此断定个别项目无需学分。',
        before: '条目列全员必需、硕士论文／毕业项目及博士论文，未列 DMA 或当前学分说明。',
        after: '补齐当前官网范围和学分说明，保留选修实习不能单独支持 CPT 的限制。',
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
        title: 'UCSB 当前页面重新列出 CPT 申请流程',
        summary: '校方现行页面说明合格申请如何提交及获批后如何取得 CPT I-20；此前暂停通知不再显示，但未给出撤销暂停日期或全面恢复声明。',
        before: '条目以 8 月截图和旧公告称 UCSB 自 8·17 暂停签发 CPT。',
        after: '条目改为描述现行官网流程，旧截图保留为历史证据；不声称所有类别无条件恢复。',
        sources: [{ label: 'UCSB OISS · Curricular Practical Training', href: 'https://oiss.ucsb.edu/curricular-practical-training' }],
      },
      {
        id: 'h1b-separate-100k-proclamation-context',
        category: 'H-1B 收费',
        title: '区分另项 100,000 美元入境限制与 103,265 美元提案',
        summary: '白宫 9·18 将针对部分境外 H-1B 的旧限制延至 2027·09·21；机构执行政策被地区法院撤销，第一巡回法院拒绝暂缓。延长公告不代表恢复征收，也不使 103,265 美元 NPRM 生效。',
        before: '#02 只解释 103,265 美元 NPRM，没有交代另项 100,000 美元限制的延期及诉讼状态。',
        after: '详情与 30 天简报将两项政策分开叙述，附白宫公告和两级法院命令。',
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
        title: '#02 103,265 美元附加费提案的评论期已结束',
        summary: '联邦公报列明 9·24 评论截止日；该日期已过，DHS 尚未发布最终规则，提案未生效。',
        before: '状态为“正式提案 · 评论截至 9 月 24 日”；9·24 评论截止列在未来节点，首页仍显示提交评论入口。',
        after: '状态改为“正式提案 · 评论期已结束”；9·24 移入已发生里程碑，未来等待 DHS 审阅，关闭提交评论入口。',
        sources: [{ label: 'Federal Register · 2026-17324', href: 'https://www.federalregister.gov/documents/2026/08/25/2026-17324/fee-for-certain-h-1b-petitions' }],
      },
      {
        id: 'cpt-four-public-notices-added',
        category: 'CPT 学校',
        title: '新增 PLU、IU Global、Rutgers 与 UCF 的公开 CPT 通知',
        summary: 'PLU 9·25 公告收紧毕业必需条件；其余三校较早的公开通知分别说明暂停大部分申请、继续处理明确合格申请，以及收紧全员必需标准。本次补录不代表三校当日新规。',
        before: '52 条记录：48 条校方网页、4 条社区截图；51 所不同学校。',
        after: '56 条记录：52 条校方网页、4 条社区截图；55 所不同学校。四条都是新增校方网页证据，不改变既有四条社区截图的证据级别。',
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
        title: '补录 Texas State 的 CPT 课程必需条件',
        summary: '校方说明仅注册实习课或取得学分不足以符合 CPT 资格；页面仍保留申请流程，未称全面暂停。校方未注明这段口径的更新日期，本条是补录。',
        before: '51 条记录：47 条校方网页、4 条社区截图；50 所不同学校。',
        after: '52 条记录：48 条校方网页、4 条社区截图；51 所不同学校。',
        sources: [{ label: 'Texas State University ISSS', href: 'https://www.international.txst.edu/current-f1-students/work-authorization/cpt.html' }],
      },
      {
        id: 'cpt-columbia-hardship-fund',
        category: 'CPT 学校',
        title: 'Columbia 更新 CPT 应对时间线及困难基金信息',
        summary: '校方 9·24 页面列明受影响学生的应对安排，并称 2026 秋季困难基金于 9·23 开放；CPT 审批标准未变。',
        before: 'CPT 条目记录 Columbia 的必修要求、暂停范围和既有授权处理，未列困难基金。',
        after: '补充校方 9·24 时间线及 9·23 困难基金开放信息；原审批口径不变。',
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
      "title": "D/S 撤销决议列入参议院议程",
      "summary": "S.J.Res.213 于 9·17 经请愿解除参议院司法委员会审议，列入参议院一般议程（第 668 号）；众议院配套案为 H.J.Res.215。",
      "before": "D/S 条目只记录 9·14 提出 CRA 决议，决议文本未填编号，后续进度未核实。",
      "after": "补入两院决议编号、9·17 列入参议院议程的里程碑与 GovInfo 来源，并加入 30 天简报。列入议程不是表决或通过；法院全国暂缓另行跟踪，案卷镜像仍止于第 52 项。",
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
      "title": "#12 联邦公报刊登文本已逐字核对",
      "summary": "当日稍晚读取 GovInfo 刊登文本（91 FR 60501—60503），与白宫原文逐字比对，除排版、页码标记和签名行外一致。",
      "before": "上一条日志的编号与刊登信息来自检索结果中的联邦公报条目，刊登文本未逐字比对。",
      "after": "条目核查说明改为已核对刊登文本；来源与里程碑补充 91 FR 页码。命令内容、状态和 10·18 期限不变。上一条日志原文保留供对照。",
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
      "summary": "新增两校公开通知；UC Irvine 页面已改为常设政策说明，并新增论文必需 CPT 路径。这些是补录既有通知与页面变化，不是本日新规。",
      "before": "49 条记录：45 条校方网页、4 条社区截图；48 所不同学校。UT Dallas、UC Irvine、Washington State 因原文无法读取而保留 9·17 核查日期。",
      "after": "51 条记录：47 条校方网页、4 条社区截图；50 所不同学校。三校恢复直接读取并更新核查日期；8 所学校页面拒绝了本次访问，保留 9·22 核查日期并在单项注明。",
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
      "title": "#12 补充编号：第 14431 号行政命令",
      "summary": "联邦公报于 9·23 刊登 9·18 签署的 H-1B 裁员审查行政命令，编号为 EO 14431（FR Doc. 2026-19555）。",
      "before": "文件编号显示为“2026-09-18 行政命令 · 编号待核”；来源为白宫原文与论坛讨论。",
      "after": "文件编号改为“行政命令 14431”，新增 9·23 联邦公报刊登里程碑与来源。命令内容、状态和 10·18 启动 LCA 复查的期限不变。",
      "details": [
        "编号与刊登信息来自检索结果中的联邦公报官网条目；本次未能直接打开联邦公报全文，未逐字比对刊登文本。该缺口已写入条目核查说明。"
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
      "summary": "两校公开页面收紧非必需实践资格；这是补录既有通知，不是本日新规。",
      "before": "47 条记录：43 条校方网页、4 条社区截图；46 所不同学校。",
      "after": "49 条记录：45 条校方网页、4 条社区截图；48 所不同学校。Kennesaw State 页首仅列三个项目；Toledo 不属于全面暂停。",
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
      "title": "D/S 补充 CRA 撤销决议已提出",
      "summary": "补录议员官网 9·14 公告与决议文本：拟通过 CRA 撤销 D/S 最终规则。",
      "before": "D/S 条目记录法院全国暂缓及 10·02 状态会议，未收录国会决议。",
      "after": "新增决议提出里程碑、原文来源与近期简报。提出不等于通过或成法，法院暂缓另行跟踪。",
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
      "title": "新增两校通知，Purdue ISS 升为校方公开证据",
      "summary": "补录 William & Mary 9·16、Rochester 8·28 公告，并用 Purdue ISS 公开页面核实原邮件口径。",
      "before": "45 条证据记录：40 条校方网页、5 条社区截图；44 所不同学校。",
      "after": "47 条记录：43 条校方网页、4 条社区截图；46 所不同学校。Purdue ECE 与 ISS 仍为同校的两条记录。",
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
      "title": "新增 #12 H-1B 裁员审查与跨部门协作行政命令",
      "summary": "总统于 9·18 签署行政命令，要求跨部门 H-1B 审查考虑相关裁员，并在 30 天内开始复查既往 LCA 数据。",
      "before": "网站收录 11 项政策，尚未单独收录 2026-09-18 H-1B 项目合规行政命令。",
      "after": "新增 #12 h1b-program-integrity，共 12 项政策。标注行政命令已签署、部门落实待跟踪；它本身没有 NPRM 或公众评论阶段。",
      "details": [
        "命令要求考虑过去一年及计划中的、对同类美国工人就业产生负面影响的相关裁员，条件限定在提交申请的雇主、同类被裁岗位和时间三项，没有规定裁员即自动拒签。",
        "按签署日加 30 个日历天计算，10·18 是 DOL 最迟开始复查既往 LCA 数据的期限，不是完成期限或另行宣布的生效日。",
        "#02 的 $103,265 收费提案是 DHS 的另一份文件，与本命令分开跟踪。"
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
      title: 'H-1B 路径新增 #11 PERM 劳工认证改革',
      summary: 'DOL 的 RIN 1205-AC29 在 9 月 14 日进入 OIRA 审查。该提案拟更新招聘、裁员保护和雇主合规要求，目前尚未生效。',
      before: 'H-1B 路径此前没有单列 RIN 1205-AC29，网站共收录 10 项政策。',
      after: '网站新增 #11 perm-modernization，共收录 11 项政策。状态为 OIRA 审查中，具体条款、评论期限和生效日期都还没确定。',
      details: ['议程中的 2026 年 7 月是原计划的 NPRM 月份，不能当成已发布或生效日期。本项与 #06 工资等级提案（RIN 1205-AC30）分别跟踪。'],
      sources: [
        { label: 'OIRA · RIN 1205-AC29 · September 14', href: 'https://www.reginfo.gov/public/do/eoDetails?rrid=1532863' },
        { label: '统一议程 · PERM 改革', href: 'https://www.reginfo.gov/public/do/eAgendaViewRule?pubId=202510&RIN=1205-AC29' },
      ],
    }, {
      id: 'perm-modernization-directions',
      category: '内容补充',
      title: 'PERM 条目改写，补上五种业内推测',
      summary: '#11 的中文说明已改写得更直白。新增业内推测的五种招聘变化。还补上 8 月 4 日司法部与 OpenAI 和解对其中多项的印证。',
      before: '原来只笼统写“招聘与留档要求可能提高”。没有列出可能的渠道变化，也没有提到司法部和解。',
      after: '新增“业内推测的五种可能变化”。一是取消强制性报纸广告。二是改用社交媒体等现代渠道，剔除广播电视。三是不再要求邮寄简历。四是在公司招聘页面发布职位。五是通过 ATS 接收申请。页面标明这些是推测，不是已公布条款。',
      details: [
        '司法部与 OpenAI 就 PERM 招聘歧视达成和解。和解日期为 2026-08-04，金额 320 万美元。和解要求 OpenAI 公开招聘职位并接受电子申请。司法部还认定“只收纸质邮寄申请”和“深夜投放广播广告”属于劝退美国工人。这与上述多项推测方向一致。',
        '协议仍处于 OIRA 发布前审查，五项推测均未生效。具体条款以 NPRM 正文为准。',
      ],
      sources: [
        { label: '司法部 · OpenAI PERM 和解（2026-08-04）', href: 'https://www.justice.gov/opa/pr/civil-rights-division-secures-settlement-openai-discriminating-against-us-workers' },
        { label: 'OIRA · RIN 1205-AC29 · September 14', href: 'https://www.reginfo.gov/public/do/eoDetails?rrid=1532863' },
        { label: '统一议程 · PERM 改革', href: 'https://www.reginfo.gov/public/do/eAgendaViewRule?pubId=202510&RIN=1205-AC29' },
      ],
    }, {
      id: 'ut-dallas-cpt-catalog-requirement',
      category: 'CPT 学校',
      title: 'UT Dallas 由“流程未变”改为只批准学位目录要求的实习课',
      summary: 'ISSO 在 9·17 发布新通知，取代 8·25 的“流程未变”口径。按 SEVP 对选修课的澄清，只有学位目录写明实习课要求的学生才能获批 CPT，没有个案例外。',
      before: '本条目此前记录“截至 8·25 表示流程未变”，核查日期保留 9·14。',
      after: '改为“9·17 改为只批准学位目录要求的实习课”。目录没有实习课要求的学生不能获批 CPT；需在校外完成论文或学位论文的研究生可申请 Academic CPT。',
      details: ['本次同时把 UC Irvine 的条目从“自 8·17 起暂停 Course Credit CPT”更新为页面顶部 9·14 的三项条件标准：学位要求、全项目学生必需、学校与雇主有合作协议。'],
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
      "title": "新增 Bryn Mawr、Buffalo、Michigan–Dearborn CPT 通知",
      "summary": "Bryn Mawr 在 9·15 宣布暂停新的非必需 CPT。补录 Buffalo 的学位必需例外，以及 Dearborn 的两个硕士项目限制。",
      "before": "37 条公开校方证据、5 条社区证据，共 42 条，覆盖 41 所不同学校／校区。",
      "after": "40 条公开校方证据、5 条社区证据，共 45 条，覆盖 44 所不同学校／校区。Purdue 两条院系／校级证据仍只计一所学校。",
      "details": [
        "Bryn Mawr 没有宣布撤销既有授权。Buffalo 与 Dearborn 都允许既有 2026 秋季授权继续。Dearborn 仅列应用行为分析与临床健康心理学硕士，不能外推 Ann Arbor 校区。",
        "Berkeley 校方明确 CPT 指引独立于 D/S 规则。法院暂缓 D/S 不会自动恢复 optional CPT。"
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
      "title": "法院全国暂缓 D/S 最终规则，原 9·15 生效日已推迟",
      "summary": "法院在美东下午 4:55 签发初步禁令，依据 APA § 705 全国推迟整项最终规则生效并禁止继续实施。",
      "before": "9·03 听证后待裁定；若无暂缓，9·15 计划生效。",
      "after": "全国暂缓持续至法院另行下令或实体审理结束。尚未永久撤销，未设新生效日。10·02 中午 12 点在波士顿第 1 法庭举行现场状态会议。",
      "details": [
        "第 50 号意见第 46—48 页明确救济不限原告成员学校；第 51 号命令第 2—5 段规定范围与期限。",
        "法院未批准永久撤销或简易判决，相关请求可再次提出。该命令不自动撤销独立的 CPT 行政指引。"
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
      "title": "补录 UW 后续处理要求与 WSU 2027 春季全职 CPT 限制",
      "summary": "UW 在 9·08 通知中明确驳回秋季待审的非必需 CPT。新增 WSU 8·07 公告，区分校内计划与 8 月 SEVP 指引。",
      "before": "UW 此前仅记录新申请暂停。当时清单为 36 条公开校方证据、5 条社区证据，共 41 条，覆盖 40 所不同学校。",
      "after": "UW 明确待审申请的处理方式和顾问证明要求。新增 WSU 后为 37 条公开证据、5 条社区证据，共 42 条，覆盖 41 所不同学校。",
      "details": [
        "WSU 的限制从 2027 春季开始，针对学年内全职 CPT，课程必需实习除外。这不是当前全面停批。公告提示校区适用范围有限。",
        "WSU 校方索引正文可读，直接访问与后续执行状态仍待复核。不将该限制写成今天新发布的联邦政策。"
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
      "title": "新增 Boston College 与 Johns Hopkins 校方 CPT 通知",
      "summary": "BC 暂停非全员毕业必需的校外 CPT。JHU 仅处理符合毕业要求及 SEVP 备忘录的新申请和待审请求。",
      "before": "34 条公开校方证据、5 条社区证据，共 39 条，覆盖 38 所不同学校。",
      "after": "36 条公开校方证据、5 条社区证据，共 41 条，覆盖 40 所不同学校；JHU 下方旧选修口径不构成恢复依据。",
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
  "title": "补充 D/S 庭审记录与 9·14 裁决时间目标",
  "summary": "庭审记录第 70 页披露，法官希望最迟 9·14 作出决定，并提到可能先发短期 TRO。这些都不等于已签发命令。",
  "before": "此前只说 9·03 听证后留待裁定，没有列庭审原文和时间目标。",
  "after": "新增 NAFSA 托管的官方庭审记录、9·14 非保证时间目标，以及可能先发短期 TRO。同时补充法官质疑和政府答辩的归属。",
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
  "title": "OPT 收费提案 9·11 完成 OIRA 审查",
  "summary": "结论为 Consistent with Change。这不代表 NPRM 已发布、10 万美元已确认或收费已生效。",
  "before": "网站此前显示 OIRA 审查中，沿用旧的在审记录。",
  "after": "改为 9·11 带修改完成审查。金额、缴费方、适用范围和豁免仍待公开条款确认，不能认定由学生承担。",
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
  "title": "四项政策的评论统计改按政策方向归类",
  "summary": "复核同一批 800 条样本。支持或反对改按相关政策收紧方向判断，不再要求明确评价提案具体条款。共 123 条分类调整。",
  "before": "按具体提案立场统计（反对／支持／条件或混合／不明确）：H-1B 为 110／49／11／30。宽限期 150／30／12／8。工资门槛 120／35／18／27。I-765 152／1／1／46。",
  "after": "按政策方向统计（反对收紧／支持收紧／条件或混合／不明确）：H-1B 为 110／83／1／6。宽限期 156／32／6／6。工资门槛 119／67／2／12。I-765 195／1／0／4。",
  "details": [
    "要求进一步收紧、甚至取消相关签证的，归为支持收紧；维护合法工作机会的，归为反对收紧。",
    "样本编号、随机种子和采样时间保持不变；不可读正文或附件的限制逐条保留。"
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
  "title": "新增 JMU 校方 CPT 暂停通知",
  "summary": "JMU 暂缓新申请及待审 CPT 决定，等待校内课程与流程审查。",
  "before": "38 条证据记录：33 条校方公开来源、5 条社区记录，覆盖 37 所院校／独立校区。",
  "after": "39 条证据记录：34 条校方公开来源、5 条社区记录，覆盖 38 所院校／独立校区。",
  "details": [
    "页头日期为 9·10，CPT 栏标题为 2026 年 8 月。不能据此断言暂停从 9·10 开始。",
    "通知没有说明既有授权如何处理，也没有给出恢复日期。"
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
      "title": "取消 60 天宽限期提案正式刊登",
      "summary": "9·11 NPRM 正式发布，评论截止为 11·10 美东午夜前。该提案仍未生效。",
      "before": "9·10 预览稿公开，预定 9·11 刊登。当时评论截止日期还待正式版确认。",
      "after": "9·11 正式刊登于 91 FR 57807，公众评论期至 2026-11-10。现行宽限期未变。",
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
  "title": "H-1B 附加费提案新增官方更正",
  "summary": "9·10 更正替换 Table 13 历史申请数量表。$103,265、cap-subject 范围及 9·24 评论截止日均未改变，提案仍未生效。",
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
  "title": "Penn 有条件恢复 CPT 处理，新增 Georgetown 校方说明",
  "summary": "Penn 在 9·10 顶部通知中称恢复符合条件的请求。Georgetown 9·09 说明选修实习不符合资格。",
  "before": "Penn 此前记录为暂停新申请及待审决定。当时学校清单为 37 条记录（32 公开、5 社区），覆盖 36 所院校／独立校区。",
  "after": "Penn 改为按现行课程要求有条件恢复处理，同页旧暂停文案保留核查提示。新增 Georgetown 后为 38 条记录（33 公开、5 社区），覆盖 37 所院校／独立校区。",
  "details": [
    "Penn 须由院系确认课程要求、雇主完成合作协议，并取得授权 I-20。这不等于全面恢复。",
    "Georgetown 已联系待审及秋季已授权学生，讨论影响和选项。校方没有保证所有既有授权不受影响。"
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
      "title": "失业后 60 天宽限期取消提案公开预览",
      "summary": "第 8 项：NPRM 预览稿明确八类工作身份及家属范围。该提案尚未生效。",
      "before": "OIRA 已审完，正在等待公开提案。发布日期未定。",
      "after": "9 月 10 日预览公开，预定 9 月 11 日正式刊登。拟取消 E-1、E-2、E-3、H-1B、H-1B1、L-1、O-1、TN 及其家属的最长 60 天酌情宽限期。评论期为正式刊登后 60 天。最终规则和生效日期未定。另有合法留美依据的情形须区别判断。",
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
  "title": "新增 UPenn 暂停审批说明与 Northeastern COE 硕士实习限制",
  "summary": "按校方公开页面新增两条记录。Penn 通知在 8 月 27 日发布，页面 8 月 31 日更新。NEU 条款没有标明发布日期，不把收录日当新规宣布日。",
  "before": "35 条记录：30 条校方公开来源、5 条社区记录，覆盖 34 所院校／独立校区。当时还没有收录 Penn 和 Northeastern。",
  "after": "37 条记录：32 条校方公开来源、5 条社区记录，覆盖 36 所院校／独立校区。Penn 暂停新申请和待审申请的审批决定。Northeastern COE 硕士限一次 co-op／internship，最长 8 个月。",
  "details": [
    "Penn 既有 CPT 授权不受此次暂停影响。暂停不等于永久取消，也不等于拒绝全部待审请求。",
    "NEU 记录仅限工程学院硕士，不能外推全校。也不能用它证明“博士全面停批”。"
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
      "title": "UCLA 证据升级为校方公开通知",
      "summary": "Dashew Center 已公开 9 月 8 日通知，补充论文研究、既有授权及合作协议要求。本次是证据升级，不是新增学校。",
      "before": "UCLA 此前仅有邮件截图：暂停非全员学位要求的课程学分／支持信 CPT。当时 35 条记录中有 29 条校方公开来源、6 条社区记录。",
      "after": "UCLA 改为校方公开来源。非全员毕业必需的课程学分／支持信 CPT 暂停，学位必需 CPT 继续。35 条记录改为 30 条校方公开来源、5 条社区记录，仍覆盖 34 所院校／独立校区。",
      "details": [
        "论文、研究或 capstone 所需实践须在 UCLA General Catalog 中列为全项目学生的要求。",
        "8 月 12 日前已批准并签发 CPT I-20 的授权不受影响；所有 CPT 申请须附院系与雇主的合作协议。"
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
      "title": "Northwestern 改为明确不批准非全员必需 CPT",
      "summary": "校方 CPT 页面链接的 9 月 3 日通知明确了一点。除非 SEVP 指引改变，学校不能批准非项目全体学生必需的实践。本次更新反映该通知已发布，不把核查日当通知发布日期。",
      "before": "申请暂停非全员必修的 CPT。学校审核期间只处理全员必修工作经历。",
      "after": "不再批准非全员必需的 CPT。除非 SEVP 指引改变，学校不能批准此类实践。OISS 正与各项目核实资格。",
      "sources": [
        {
          "label": "Northwestern OISS CPT webpage",
          "href": "https://www.northwestern.edu/international/international-students/student-employment/cpt-for-f1-students.html"
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
      "title": "新增 George Mason 校方 CPT 说明，记录增至 35 条",
      "summary": "本次收录 OIPS 已公开的政策审核说明。无法证明实践为全项目学生毕业必需的 2026 秋季 CPT 暂停审理。页面没有标明该段发布日期，不把本次收录日当政策宣布日。",
      "before": "34 条证据记录：28 条校方网页、6 条社区记录，按院校／独立校区去重为 33 所。当时 George Mason 还没有收录。",
      "after": "35 条证据记录：29 条校方网页、6 条社区记录，按同一口径去重为 34 所。新增 George Mason，暂停无法证明全员毕业必需的 2026 秋季 CPT 审理。",
      "details": [
        "选修课或多个可选毕业路径之一的实习，不满足所列标准。公告没有说明既有授权如何处理。",
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
      "title": "Purdue ECE 摘要补回论文研究个案咨询提示",
      "summary": "原邮件末段让学生就论文研究所需工作另向 ISS 咨询，此前摘要遗漏了这一限定。本条仍为院系邮件截图证据，不升级为校方网页确认，也不代表研究类 CPT 一定获批。",
      "before": "院系邮件截图称本学期不签 CPT。这是院系口径，不应外推全校。",
      "after": "院系邮件截图称本学期不批非必需的实习／co-op CPT。论文研究所需工作应另向 ISS 咨询，仅限 ECE 口径。",
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
      "title": "#03 补明博士退出后的 OPT 障碍与第二学位限制边界",
      "summary": "此前的例子没有解释新规则如何影响 master out 后的 OPT，也遗漏了同级／降级再入学限制的毕业时间边界。现根据最终规则和 Rice 说明补清。",
      "before": "博士退出拿硕士后“确认能否申请 OPT”。完成美国 F-1 学位后原则上不能再读同级或更低级别。",
      "after": "新规则禁止研究生在读期间改学位层级。Rice 说明学校可以发硕士学位，但不能把博士 SEVIS 记录改为硕士，因此不能以该硕士申请 OPT。同级／降级再入学限制不计算生效前完成的学位。",
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
        "title": "#05 CPT 指引的时间起点",
        "summary": "核对 8·12 原文第二页后，更正 9·01 日志中的一处表述。该日志曾把“全员毕业必需”标准只归于 8·24。8·12 已经提出该要求，8·24 问答进一步解释选修课、美国学生与合作协议。历史日志原文保留供对照。",
        "before": "8·12 仅列合规提醒。8·24 才提出更窄的 integral 标准，高校调整起点写为 8·24。",
        "after": "8·12 已经要求 CPT 对取得学位不可缺少，且为该学位全体学生必需。8·24 进一步解释。高校响应时间线改为 8·12 之后。",
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
        "title": "新增 9 所院校的公开 CPT 记录",
        "summary": "新增 Utah、Delaware、UC San Diego、UMBC、GWU、CU Boulder、UW–Milwaukee、Oregon 和 Kansas。连同 UCI 证据升级，清单由 25 增至 34 条学校／院系记录，对应 33 所不同院校。公告日期保留为原发布日期，本次是网站新增收录。",
        "before": "25 条记录 · 18 条校方网页 / 7 条邮件截图，24 所不同院校。",
        "after": "34 条记录 · 28 条校方网页 / 6 条邮件截图，33 所不同院校。",
        "details": [
          "University of Utah：此前没有收录。现记录“自 9·03 起暂停非全员必需的新 CPT”。ISSS 暂停 optional CPT 授权。UAtlas 仍可提交申请，但审核结束前不批准这类请求。既有授权按当前 I-20 的雇主、地点与日期继续。",
          "University of Delaware：此前没有收录。现记录“暂停非全员必需的新 CPT 授权”。9·02 公告称 CGPS 暂停 optional CPT。学生仍可提交申请，但审核结束前不签发这类新授权，并可能出现处理延迟。",
          "UC San Diego：此前没有收录。现记录“暂停全部 F-1 CPT 请求的提交与处理”。ISEO 专页仍暂停 iServices 全部 CPT 请求。9·02 说明会第 12 页预计 9 月中旬重开，并要求院系证明实习为必需。该时间只是计划，尚无具体日期。",
          "University of Maryland, Baltimore County：此前没有收录。现记录“待审及未来 CPT 仅限全项目学生必需的实践”。OISS 9·04 更新称，待审与未来申请按全项目学生必需的实践要求审核。已经签发的 2026 秋季 CPT 授权不会被撤销。本条单列 UMBC 校区。",
          "George Washington University：此前没有收录。现记录“暂停非全员必需的新 CPT 授权”。ISO 9·02 公告称，不再批准非学位项目全体学生必需的新 CPT。既有授权可按当前 I-20 的雇主地点、日期及其他条件继续。",
          "University of Colorado Boulder：此前没有收录。现记录“仅处理课程目录列明的学位／主修必需 CPT”。8·31 更新称，仅限校方列出的、为学位或主修毕业必需的实践，minor 不符合。仅供选修学分的实习不获批。已授权的 2026 秋季 CPT 不受影响。",
          "University of Wisconsin-Milwaukee：此前没有收录。现记录“自 8·24 起仅批准全项目学生必需的 CPT”。ISSS 要求实践为学位项目全体学生明确的必修要求。8·24 前已获批的 CPT 可持续至当前授权结束日。",
          "University of Oregon：此前没有收录。现记录“不再批准仅供选修实习学分的 CPT”。ISSS 新政策要求实践为既定课程与学位的必要组成部分。页面另列全员学位必需，以及完成必需硕士论文／毕业项目、博士论文的情形。研究类须有导师详细证明。",
          "University of Kansas：此前没有收录。现记录“校方页面称暂停全部 CPT 请求”。ISS 的 2026 年 8 月更新称，正在判断哪些情形仍可授权，期间暂停所有 CPT 请求。公告没有说明既有授权的处理方式。"
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
        "title": "UCI 升级为校方网页证据",
        "summary": "International Center 公开 CPT 页，证实自 8·17 起暂停 Course Credit CPT。UCI 移入校方网页组，并保留原邮件截图。",
        "before": "此前只有邮件截图支持：暂停 Course Credit CPT，强制毕业要求继续。",
        "after": "公开网页支持自 8·17 起暂停 Course Credit CPT。Degree Requirement CPT 须有 UCI 课程目录的毕业要求依据。",
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
        "title": "Columbia 明确暂停范围与既有授权",
        "summary": "采用 ISSO CPT 专页补充具体暂停范围，以及 8·24 前已批授权的处理方式。",
        "before": "按新标准复核 CPT 授权与申请。受影响学生由 ISSO 单独通知。",
        "after": "仅批准课程体系内、全员必需且有 cooperative agreement 的 CPT，其他情形暂停。8·24 前获批的 CPT 不撤销。",
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
        title: '新增 USC、Alabama，并校正记录计数',
        summary:
          '新增 USC 与 University of Alabama 的公开 CPT 要求，记录总数由 23 增至 25。结合 UCSB、NYU 两条证据升级，校方网页组由 14 增至 18，邮件截图组由 9 减至 7。此前“所学校”的计数混入了同校不同范围的记录，现改为学校／院系记录。',
        before: '23 所学校 · 14 所校方网页 / 9 所截图、邮件或论坛材料',
        after: '25 条学校／院系记录 · 18 条校方网页 / 7 条邮件截图，对应 24 所不同院校',
        details: [
          'USC：此前没有收录。现收录 8·25 公告，自 8·24 起仅批准毕业必需的 CPT。8·24 前已签发的 2026 秋季授权不会被撤销。',
          'University of Alabama：此前没有收录。现收录 8·31 公告，院系须补充证明实践对全项目或方向学生、或论文完成的必要性，并提供课程目录依据。',
          'Purdue ECE 与 Purdue ISS 是同一院校的两条范围记录。此前更新日志把这类记录总数写成学校数，现在更正口径。历史条目原文保留供对照。',
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
        title: 'NYU Tandon Mathematics',
        summary:
          'NYU Tandon 数学系实习政策页注明，自 9·01 暂停国际学生 CPT 审批。原 NYU 论坛报告移至校方网页组，范围限定为该数学系页面覆盖的本科生与研究生。',
        before: 'New York University：8·31 论坛报告称暂停 CPT，范围还待校方公开页面确认。',
        after: 'New York University (Tandon Mathematics)：校方院系网页支持 9·01 暂停审批。未据此确认 NYU 全校政策。',
        sources: [
          { label: 'NYU Tandon 数学系实习政策页', href: 'https://math.nyu.edu/dynamic/sites/tandon/internships/' },
        ],
      },
      {
        id: 'ucsb-cpt-public-source',
        category: 'CPT 学校清单',
        title: 'UCSB',
        summary:
          'UCSB OISS 的公开 CPT 页面称，自 8·17 暂停签发 CPT，并正在咨询法律顾问。该条移至校方网页组，原有两张邮件截图保留。',
        before: '此前只有邮件截图支持：暂停非学位必需的新 CPT，既有授权不受影响。',
        after: '公开公告支持自 8·17 暂停签发 CPT。页面没有细分类别，也没有说明既有授权的处理方式。',
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
        title: 'MIT 升级为校方网页已核实证据',
        summary:
          'MIT International Students Office 的公开 CPT 页面现已明确。学校暂停 8·24 当日已收到或待审的新 CPT 申请。这些申请涉及的实践，不是全专业学生完成学位必需的经历。学校将联系已获 2026 秋季 CPT 授权的学生，讨论后续选项。因此 MIT 从邮件截图组移至校方网页已核实组。',
        before: '23 所 · 13 所校方网页 / 10 所截图、邮件或论坛材料。MIT 此前仅有通知截图支持。',
        after: '23 所 · 14 所校方网页 / 9 所截图、邮件或论坛材料。MIT 现由公开校方页面支持。',
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
          '法院案卷第 47 项确认，9 月 3 日的禁令听证已经举行。双方完成陈述后，法院将申请留待裁定。“留待裁定”表示法官没有当庭作出裁决，会继续审议并可能另行发布书面命令。它既不表示禁令已经获批，也不表示禁令已经被驳回。',
        before: '2026-09-03 上午 11:00 的初步禁令听证待举行；法院尚未裁定。',
        after: '听证已经举行、双方陈述完毕；法院留待裁定，尚未批准或驳回禁令。',
        details: [
          '现阶段没有法院命令暂停最终规则。',
          '若截至该日法院仍无暂缓或禁令，9 月 15 日仍是计划生效日。',
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
        title: '政府提交反对意见，法院尚未裁定',
        summary:
          '政府于 9 月 2 日提交一份获双方同意的超页申请，并把拟议反对意见作为 Exhibit A 附上。拟议意见请求法院驳回 APA § 705 暂缓、初步禁令，以及在行政记录提交前作出简易判决的请求。它还主张任何救济都应限于原告。用户提供的 57 页文件不是法院裁定。9·03 听证与 9·15 计划生效日没有因该文件本身改变。',
        before: '政府答辩期限延至 2026-09-02；初步禁令申请待答辩。',
        after: '政府已于 2026-09-02 随超页申请附上拟议反对意见；法院尚未裁定。',
        details: [
          '政府主张四年上限不是要求学生四年内毕业。超过获批期限的人可以申请延期停留。',
          '政府把原告主张的招生损失、合规成本和项目调整称为推测性或经济性损害。政府否认这些构成不可弥补损害。',
          '政府反对全国性救济。政府称，若法院提供救济，应限于本案原告及其成员。',
        ],
        sources: [
          {
            label: '政府 9·02 拟议反对意见附件（57 页 PDF）',
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
        title: '清单扩至 23 所，校方网页证据增至 13 所',
        summary:
          '清单由 21 所扩至 23 所。有校方网页支持当前状态的学校由 11 所增至 13 所，截图、邮件或论坛材料组仍为 10 所。新增 University of Maryland, College Park 与 Trine University，并保留两校公开材料所能支持的范围。',
        before: '21 所 · 11 所校方网页 / 10 所截图、邮件或论坛材料',
        after: '23 所 · 13 所校方网页 / 10 所截图、邮件或论坛材料',
        details: [
          'University of Maryland, College Park 于 9·02 公布：暂停不属于全专业必修、必修课程或论文研究要求的未批准 CPT。已获批 CPT 可以继续。',
          'Trine University 的研究生 CPT 页面仍列 2026–27 申请截止日，并称申请持续开放、按收到顺序审理。页面没有单独回应 8·24 指引，因此条目不把该页面解读为全面不受影响。',
        ],
        sources: [
          {
            label: 'University of Maryland, College Park CPT 页面',
            href: 'https://marylandglobal.umd.edu/global-learning-all/international-students-scholars/employment-taxes/employment-f-1-international-students/curricular-practical-training-cpt',
          },
          {
            label: 'Trine University CPT 页面',
            href: 'https://www.trine.edu/international/graduate/cpt-information.aspx',
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
          '校方 CPT 页面进一步明确论文型 CPT 的适用条件。申请者仅限已 Advanced to Candidacy 的论文型硕士或博士。实践训练必须是完成论文所必需，且无法由其他研究或数据收集方式合理替代。这类申请按个案处理，并需导师书面证明。Course Credit CPT 仍暂停。',
        before: '已暂停 Course Credit CPT。Degree-required 与 thesis/dissertation-required CPT 继续。',
        after: 'Course Credit CPT 仍暂停。论文型 CPT 仅限符合 candidacy、必要性、不可替代性和导师证明要求的严格个案。',
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
          '此前采用的二手报道把初步禁令听证写成 9 月 9 日。现按法院官方日历和 docket 校正为 2026 年 9 月 3 日上午 11:00（美东）。',
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
        title: '#05 8·12 / 8·24 CPT 指引',
        summary:
          'CPT 条目现在分别说明两份 ICE/SEVP Broadcast。8·12 是对学校与 DSO 的合规责任提醒。8·24 才提出更窄的 “integral” 标准与 cooperative agreement 要求。高校按新资格口径调整 CPT 的时间起点相应更正为 8·24。',
        before: '8·12 起 · 高校按收紧后的资格标准调整 CPT',
        after: '8·12 合规提醒，8·24 资格标准收紧及高校响应',
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
        title: '清单扩至 21 所，证据级别同步更新',
        summary:
          '清单由 13 所扩至 21 所。有校方网页支持当前状态的学校由 6 所增至 11 所，只有截图、邮件或论坛文字材料的学校由 7 所增至 10 所。',
        before: '13 所 · 6 所校方网页 / 7 所论坛材料',
        after: '21 所 · 11 所校方网页 / 10 所截图、邮件或论坛材料',
        details: [
          'University of Michigan 从论坛材料升级为校方网页来源。',
          'Northwestern、Columbia、Harvard 按校方页面加入清单。',
          'New York University 按 8·31 论坛报告加入，仍标为待校方公开页面确认。',
          'University of Washington 按校方通知加入。学校暂停非全专业必修的新 CPT，已获批 CPT 可以继续。',
          'Goldey-Beacom College 与 Purdue University ISS 按已下载到本站的校方邮件截图加入。Purdue ISS 与 Purdue ECE 分开记录。',
          'MIT 的公开 CPT 页面没有同步最新暂停范围，因此移至截图材料组。条目改为部分非全专业必修的新 CPT 暂停。',
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
            href: 'https://www.northwestern.edu/international/international-students/student-employment/cpt-for-f1-students.html',
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
    "date": "2026-10-31",
    "changes": [
      {
        "id": "duration-cross-motions-text-confirmed",
        "category": "#03 D/S nationwide-stay litigation",
        "title": "Obtain both sides’ October 30 summary-judgment motions",
        "summary": "Entries 66/67 are the government motion/memorandum; entry 68 is plaintiffs’ renewed motion. None is a court judgment.",
        "before": "Only entries 66/67 document types were verified; filers and requested relief were unknown, with entries 68/69 not yet listed.",
        "after": "Obtain full entries 66/67/68, confirming opposing requests for judgment on all claims. The government alternatively seeks remand without vacatur or narrower relief; these are party arguments. Entry 69’s supporting text/exhibits remain unavailable and are not summarized. Update status, summaries, procedure, timeline, litigation marker and briefing while retaining nationwide relief and the original November 2 reply/November 9 appellate schedule.",
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
        "summary": "Case Western pauses new applications; UNO limits training to an all-student graduation requirement, without invalidating existing approvals or generalizing across campuses.",
        "before": "71 evidence entries: 67 public university pages and four community screenshots; 70 distinct institutions.",
        "after": "73 evidence entries: 69 public university pages and four community screenshots; 72 distinct institutions. Case Western pauses new applications from September 8 while revising its process. UNO’s public September 17 notice requires an all-student graduation requirement and an authorized I-20 before starting. These are newly tracked historical notices, not policy changes first made today; existing-approval treatment and later-revision gaps remain explicit.",
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
        "summary": "Electronic order 29 grants procedural motion 28; the November 6 hearing is unchanged and guidance is not stayed.",
        "before": "Current procedure listed the October 28 government opposition and November 6 hearing without a plaintiffs’ reply step.",
        "after": "Add the October 29 request, October 30 permission and November 4 reply date to summaries, status, litigation track, timeline and briefing. Entry 28-1 is an unsigned proposed order; the actual reply was not obtained. Guidance remains in use.",
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
        "title": "Add October 30 document entries; text and filers unverified",
        "summary": "Entries 66/67 show summary-judgment and supporting-memorandum types; those labels do not establish a court judgment.",
        "before": "The mirror ended at entry 65, and current procedure/next steps listed the October 30 summary-judgment deadline.",
        "after": "Add entries 66/67 to history and briefing; await text, filers and any other submissions. Retain the original November 2 reply and November 9 appellate schedule. No new merits ruling was obtained; the nationwide stay remains, with the 19:00 empty-response gap disclosed.",
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
        "summary": "Spring now starts January 30, Summer ends August 17 and Fall starts August 18; eligibility restrictions remain.",
        "before": "The entry described the pause of non-program-wide-required new CPT and contact with previously approved Fall students, without the 2027 calendar.",
        "after": "Add Spring January 30–May 19, Summer May 20–August 17 and Fall August 18–December 17, retaining term part-time limits, later starts for some students and actual-approval requirements. A calendar does not reopen elective CPT.",
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
        "summary": "All three restrict non-required CPT, with retained credit wording, a narrow research pathway and a notice-date conflict disclosed.",
        "before": "68 evidence entries: 64 public university pages and four community screenshots; 67 distinct institutions.",
        "after": "71 evidence entries: 67 public university pages and four community screenshots; 70 distinct institutions. Illinois Tech pauses programs without mandatory training; Arizona retains narrow degree/thesis cases; UConn requires a published all-student curricular requirement. Do not generalize to a blanket CPT halt or revoked existing approvals. UConn’s August 30 page/August 31 email date conflict is unresolved.",
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
        "title": "Entry 144 text obtained: district-stay motion denied; conflicting dates unresolved",
        "summary": "The text records denial of motion 133; conflicting conference and record-production dates are not inferred or adopted as confirmed settings.",
        "before": "The October 28 entry supplied only a title, leaving the motion outcome, conference date and new settings unverified.",
        "after": "Add text-only entry 144 recording denial of a district-proceedings stay and directing record production. Disclose the conflict among the October 28 entry date, December 1 conference, 21-day deadline parenthetically labeled November 17 and November 24 further conference. Await court clarification; retain the original November 6/December 4 appellate schedule without claiming resumed collection or a change to the separate $103,265 NPRM.",
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
        "before": "The entry described new forms and degree-required programs, with treatment of existing approvals unspecified.",
        "after": "Status and detail now state that extensions for CPT performed in Fall 2026 will not be authorized, without generalizing to revocation of every existing I-20. Publication date, exceptions and individual authorization effects remain unspecified.",
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
        "before": "The entry disclosed retained one-year renewal text with no explanation of the transition to Spring 2027 semester approvals.",
        "after": "Transition extensions end by June 13, 2027 or an earlier program/eligibility end. New-student work starts no earlier than classes, January 11 for Spring 2027. Add OPT ending on SEVIS transfer release, new applications for incomplete/incorrect filings and no work extension while renewal is pending. Conflicting correction-queue and 30/60-day window instructions remain disclosed.",
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
        "before": "66 evidence entries: 62 public university pages and four community screenshots; 65 distinct institutions, excluding these two schools.",
        "after": "68 evidence entries: 64 public university pages and four community screenshots; 67 distinct institutions. Degree-required training at Queens College needs ISSO guidance, without generalizing to all CUNY campuses. BGSU says approvals will be reevaluated and rescinded when necessary, not that all have been rescinded. Campus publication dates and individual authorization outcomes remain unverified.",
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
        "summary": "Obtained the full opposition (entry 27) and both broadcast exhibits; order 26 only permits excess pages without deciding relief.",
        "before": "Current process awaited the October 28 government response; the review note said the public docket ended at entry 24 with no later response text obtained.",
        "after": "Summaries, status, litigation track, timeline and briefing now report the opposition to preliminary relief and a stay, removing the fulfilled response step from future events. The October 19 extension remains in history and the November 6 hearing at 3 p.m. ET remains scheduled. Government standing, final-agency-action and existing-requirements arguments are identified as party arguments, with no order granting relief obtained.",
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
        "title": "Add October 28 docket entry; conference and stay outcome unverified",
        "summary": "The public mirror adds a title concerning a conference, stay motion and hearing settings without operative text; remove the elapsed October 27 future step.",
        "before": "Next steps still listed the October 27 Zoom conference; the review note said it had not yet occurred, and the latest docket covered the October 26 attorney notice.",
        "after": "The timeline and briefing add the October 28 docket title, expressly leaving the operative text, motion outcome and new settings unverified. October 27 remains in historical documents and is no longer a future date. The title does not establish that the conference occurred as scheduled, that the motion was granted/denied or that collection resumed. The $103,265 NPRM remains a proposal.",
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
        "summary": "The October 26 notice says some requests can still be approved, with fewer opportunities for many students; it is neither a blanket halt nor unrestricted reopening.",
        "before": "65 evidence entries: 61 public university pages and four community reports; 64 distinct institutions, without Wyoming.",
        "after": "Adding Wyoming’s public notice brings the list to 66 evidence entries: 62 public university pages and four community reports; 65 distinct institutions. Students may continue seeking opportunities and submit early for ISS review. Every qualifying program and existing-authorization treatment remain unspecified; the November 6 hearing is not a reopening date.",
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
        "title": "Independently verified appellate schedule: opening brief/appendix due November 9",
        "summary": "The First Circuit’s October 19 schedule and October 9 relative-deadline order were obtained; the nationwide stay continues.",
        "before": "November 9 was attributed only to government motion 63; the independent appellate schedule remained a gap and the next step was undated.",
        "after": "Added the First Circuit 26-2112 public docket. Current summary, next steps and briefing now list November 9 for the government’s opening brief/appendix, response 30 days after service of the opening brief and reply 10 days after service of the response, without assuming December 9 as fixed. Earlier gap snapshots remain historical; scheduling does not lift the nationwide stay.",
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
        "summary": "Separate employer cases from prior-LCA review and AC29 rulemaking; Cloudera’s 24 months run from its latest application withdrawal.",
        "before": "The entry covered the executive order and prior-LCA implementation gap, without the October 8 targeted PERM announcement or October 16 Cloudera settlement.",
        "after": "Added the targeted suspension announcement in the White House October 8 video and DOJ’s Cloudera settlement paragraph 17: withdraw affected pending PERMs, then self-debar for 24 months from the latest withdrawal, without ETA Form 9089 filings or PERM recruitment advertisements. Current written employer suspension/resumption notices and actual period dates remain unverified. These do not establish a nationwide PERM halt, automatic H-1B invalidation, initiation of LCA review or publication of the AC29 NPRM.",
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
        "title": "Extension order and record index verified: motions October 30, replies November 2",
        "summary": "Order 64 does not adopt the requested November 6 reply date; the nationwide stay continues.",
        "before": "Only October 23 ruling/notice titles were obtained; next steps were undated and older upcoming deadline cards withheld.",
        "after": "Read the complete electronic order 64, index notice 65 and three attachments. Current next steps and upcoming briefing now show the court’s October 30 motion and November 2 reply dates, resolving the title-only gap. Filing an index does not mean every record was individually reviewed and does not lift nationwide relief. Earlier audit snapshots and order dates remain intact.",
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
        "summary": "Prepublication review is complete; a public NPRM, comment deadline and effective date remain unverified.",
        "before": "The site showed ongoing OIRA review, linked the September 14 pending record and marked OIRA as the active stage.",
        "after": "Lead with conclusion detail rrid=1533011 and mark OIRA complete, awaiting an NPRM. Update summary, next steps, scenario and briefing while preserving submission history. The conclusion does not disclose specific revisions; the Federal Register RIN query lists no public proposal, so terms and implementation dates are not inferred.",
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
        "title": "Government seeks briefing extensions; no granting order verified",
        "summary": "October 22 entry 63 requests motions on October 30 and replies on November 6; the nationwide stay is unchanged.",
        "before": "Latest procedural document was order 61 of October 16: record October 23, motions October 26, replies November 2.",
        "after": "Add motion 63, history and briefing while retaining order 61’s deadlines and identifying the unverified request. Attribute the reported November 9 appellate opening brief/appendix deadline to the government; an independent appellate schedule was not obtained.",
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
        "before": "The tracker listed open applications, 2026–27 deadlines and review steps. The source previously gave December 14, 2026 and May 24, 2027 next starts and one-year authorization.",
        "after": "Add semester authorizations, class-date limits, new applications each semester, no automatic extension from renewal requests, and protection for existing approvals. Next available starts become January 11 and June 14, 2027, with deadlines unchanged. Disclose retained one-year extension text and unclarified transition; school count and evidence level are unchanged.",
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
        "title": "October 23 extension ruling appears; current schedule remains unverified",
        "summary": "The feed adds an extension ruling and notice 65, without texts confirming disposition or new deadlines.",
        "before": "The latest feed covered motion 63 only; next steps and upcoming briefing still treated October 26 and November 2 as current court deadlines.",
        "after": "Add the October 23 records and concrete access gaps. Keep order 61’s dates and motion 63’s requests as history, withhold old upcoming date cards and use Date unknown pending the texts. Do not assume the extension was granted or that notice 65 submitted the record.",
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
        "after": "Add one public-page record: 65 evidence entries, comprising 61 public pages and four community reports; 64 distinct institutions. Specify programs, narrow doctoral research and the agreement requirement. The future form date does not establish resumed processing; existing-approval treatment and publication date remain unspecified.",
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
        "title": "October 16 summary-judgment schedule obtained; nationwide stay continues",
        "summary": "Order 61 sets the record for October 23, motions for October 26 and replies for November 2, without lifting the September 14 stay.",
        "before": "Next steps had no fixed date while court treatment of the parties’ proposals was awaited.",
        "after": "The detail, current process, milestones, next steps and 30-day briefing now show the three court-ordered deadlines, distinguishing them from a judgment date, stay expiration or new effective date.",
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
        "summary": "October 19 order 22 extends the response to the complaint and relief motion without staying the guidance.",
        "before": "Only the November 6 hearing was listed, without the extended government response date.",
        "after": "The summary, current process, next steps and briefing add the October 28 response deadline, retaining that a hearing is not a reopening date.",
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
        "summary": "The October 15 opposition, October 19 reply and October 20 joint statement are party filings, without changing the September 30 order.",
        "before": "Latest documents covered the government’s district-stay request and the Ninth Circuit scheduling notice.",
        "after": "Add entries 140, 141 and 142 with sources, moving the filed October 20 statement from next steps to history. Retain the October 27 conference from the September 30 order and joint statement. District-stay requests remain pending; proposed merits dates are not court deadlines or resumed collection.",
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
        "after": "Three public-page records are added without upgrading existing community evidence. Adelphi’s October 15 revision requires curricular necessity and a cooperative agreement; NC State limits CPT to degree requirements or indispensable thesis research; WMU’s October 16 notice applies changes from spring 2027, not a current blanket pause.",
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
        "summary": "The university notice modified October 16 adds a hearing date without broadening CPT eligibility.",
        "before": "The UIC record described litigation and eligibility review without the hearing date.",
        "after": "The record adds the November 6 hearing while retaining that no blanket pause, unrestricted reopening or invalidation of existing approvals is announced.",
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
        "title": "Ninth Circuit appeal number and briefing dates confirmed from court notice",
        "summary": "District entry 138 contains the Ninth Circuit schedule for 26-6667: opening brief November 6, answering brief December 4; it does not resume collection.",
        "before": "The October 9 appeal and request to pause district proceedings were recorded without an appellate case number or confirmed appellate briefing dates.",
        "after": "Add the October 9 court notice recorded in the district docket October 14: appeal 26-6667, opening brief November 6, answering brief December 4, optional reply within 21 days after service. The latest district schedule remains incompletely verified; this notice does not stay the September 30 order.",
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
        "title": "The NPRM removing prior-approval deference is published, with comments due November 13",
        "summary": "Published October 14 at 91 FR 65119 with comments due November 13; it is not in effect and does not automatically deny renewals.",
        "before": "The entry showed a public preview scheduled for October 14 publication, with only a 30-days-after-publication placeholder for comments.",
        "after": "The entry now shows a published proposal with comments open, links the published Federal Register version, and lists the November 13 deadline in next steps and the 30-day briefing.",
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
        "summary": "Published October 14 at 91 FR 65306 and effective that day, adopting the 2025 IFR unchanged; the renewal cutoff remains October 30, 2025.",
        "before": "The entry showed a public final-rule preview scheduled for October 14 publication.",
        "after": "The entry now shows the final rule effective October 14 and links the published version, stressing that removal has applied since October 30, 2025 rather than first beginning October 14.",
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
        "title": "CPT relief motion set for a November 6 hearing",
        "summary": "AAU v. DHS docket entry 19 (October 13) sets the preliminary-injunction and stay motion for a hearing on November 6 at 3 p.m. ET; a hearing is not a ruling.",
        "before": "The entry said no hearing or reopening date was confirmed and the latest docket was unverified.",
        "after": "Status, timeline, next steps, the litigation marker and the 30-day briefing include the November 6 hearing; through October 14 the docket shows no order granting relief.",
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
        "title": "Separate $100,000 case: government appeals and moves to stay district proceedings",
        "summary": "In Global Nurse Force, the government appealed the September 30 order to the Ninth Circuit on October 9 and moved to stay district proceedings. The appeal alone does not stay that order and does not concern the $103,265 NPRM.",
        "before": "Later appeals or stay orders after September 30 were described as unverified, and the October 20 and 27 settings were listed unchanged.",
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
        "title": "Policy-by-policy review corrects scope wording and misplaced examples",
        "summary": "All 14 policies were rechecked against the Federal Register, the executive order text, OIRA records and court dockets. Document numbers, publication dates, comment deadlines and effective dates match; the following problems were corrected.",
        "details": [
          "#13 Executive order: section 3(a) requires layoffs to be considered in the LCA, petition, visa and entry, so the key point no longer limits the change to visa and entry; the order does not define similarly situated U.S. workers, so the entry no longer says layoffs in other departments do not count.",
          "#07 H-1B classification reform, #11 H-4 EAD and #05 CPT guidance: misplaced examples moved under the impact they illustrate.",
          "Today/tomorrow wording that would go stale was replaced with dates in the EAD extension entry, the H-4 review note and three school records; the CPT litigation note now uses guidance rather than rulemaking wording."
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
        "title": "Add the proposal preview to remove I-129 prior-approval deference",
        "summary": "The 46-page RIN 1615-AD26 NPRM preview was released October 13, with publication scheduled October 14; it is not effective.",
        "before": "AD26 was not tracked; broader H-1B reform AD00 remained a separate OIRA-review item.",
        "after": "A separate entry, source and briefing explain proposed removal of general deference in same-parties, same-facts renewals without implying automatic denial.",
        "details": [
          "The preview leaves comments at 30 days after publication; the calendar deadline awaits the published version."
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
        "title": "Add the operative EAD-extension removal and today’s final-rule preview",
        "summary": "The final preview adopts the October 30, 2025 IFR unchanged, with publication scheduled October 14; removal does not first begin tomorrow.",
        "before": "AD05 automatic-extension removal was not separately presented; the H-4 entry tracked future eligibility rescission only.",
        "after": "A separate entry distinguishes the October 30, 2025 filing cutoff, qualifying earlier extensions and legal exceptions, with a linked explanation on the H-4 detail page.",
        "details": [
          "Covered H-4, c9 and other renewals no longer receive receipt-based automatic extensions; valid cards and H-4 eligibility are not automatically canceled.",
          "The separate STEM OPT 180-day provision, statutory/TPS exceptions and E/L status-based authorization require distinct checks."
        ],
        "sources": [
          {
            "label": "October 30, 2025 IFR · in effect",
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
        "title": "Add plaintiffs’ request for immediate final judgment vacating the rule",
        "summary": "Entry 60 is now available: plaintiffs oppose pausing district proceedings and request immediate final judgment vacating the rule. The filing is not a judgment granting that relief.",
        "before": "Entry 59 recorded the government’s stay request; entry 60 was unavailable, leaving plaintiffs’ position and quoted appellate procedure undisplayed.",
        "after": "The detail page, historical timeline and 30-day briefing now include plaintiffs’ position. The filing quotes relative appellate periods of 21/30/10 days, but the original order and entered schedule remain independently unverified.",
        "details": [
          "Plaintiffs propose October 16 record production, October 23 supplemental briefs and October 30 replies as an alternative district procedure. Court adoption was not verified, so these are not listed as confirmed future deadlines.",
          "The quoted opening-brief period starts when a briefing schedule enters the docket, not automatically on October 9. No new order changing entry 51’s nationwide relief was verified in this check."
        ],
        "sources": [
          {
            "label": "October 9 plaintiffs’ procedural plan · entry 60 (party filing)",
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
        "title": "Published OPT proposal specifies $70,000 initial/$30,000 subsequent fees and school payment",
        "summary": "The October 8 NPRM specifies pre-recommendation payment, permitted cost pass-through and transition terms. General comments close November 9, PRA comments December 7; the fee is not effective.",
        "before": "Title used the reported single $100,000 amount; status stopped at OIRA conclusion with amount, payer and publication awaiting disclosure.",
        "after": "Published proposal with comments open: $70,000 initially and $30,000 for later OPT after initial payment; schools prepay and may pass through economic costs.",
        "details": [
          "Covers pre-completion, post-completion and STEM OPT; an employer change alone does not trigger payment.",
          "The proposed boundary is 60 days after final-rule publication. Prior OPT without initial-fee payment does not automatically qualify for $30,000. The NPRM does not automatically invalidate existing EADs."
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
        "title": "Add higher-education associations’ CPT lawsuit and relief requests",
        "summary": "AAU v. DHS (1:26-cv-14520) was filed October 5 with preliminary-injunction/stay requests, followed by supporting argument October 6. Requested relief is not court-granted relief.",
        "before": "Tracked two SEVP broadcasts and school practice without the new lawsuit.",
        "after": "Details, process copy and briefing add the case and requests, distinguish D/S litigation, and disclose incomplete latest-docket/stay verification.",
        "sources": [
          {
            "label": "October 5 complaint (party filing)",
            "href": "https://www.nafsa.org/sites/default/files/media/document/CPT%20Complaint%20AAU%20v.%20DHS%20.pdf"
          },
          {
            "label": "Preliminary-injunction/stay motion (not a court order)",
            "href": "https://www.aau.edu/uploads/files/general/Motion-for-Preliminary-Injunction-and-Stay-of-Agency-Action-CPT-Case.pdf"
          }
        ]
      },
      {
        "id": "duration-october-conference-and-procedure",
        "category": "#03 D/S litigation",
        "title": "October 2 conference occurred; government filed next-step requests",
        "summary": "Entry 56 records the conference. The government’s entry 59 seeks a district-proceedings stay pending appeal or an alternative schedule, not restoration of the rule.",
        "before": "October 2 conference remained a future event; later docket coverage ended at September 30 appeal.",
        "after": "Records the held conference and October 9 submissions. The government reports expedited-appeal filing; court adoption and entry 60 text remain unverified.",
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
        "title": "Add September 30 injunction against the separate $100,000 agency policy",
        "summary": "Global Nurse Force order 130 vacates agency policies and bars implementation under the original/extended proclamations until APA notice-and-comment and RFA analyses are completed.",
        "before": "Separate $100,000 background ended with June 8 vacatur, July 24 stay denial and September 18 extension.",
        "after": "Adds the September 30 order and its October 20 statement/October 27 conference dates, distinct from the $103,265 NPRM and its effective timing.",
        "details": [
          "Later dockets/current calendar were not fully read; scheduling is attributed to the September 30 order, not independently reconfirmed."
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
        "title": "Add public CPT records for Yale, Oklahoma, UVA and UIC",
        "summary": "Four official-page records distinguish required training, limited/all new-request pauses and litigation tracking without upgrading existing screenshot reports.",
        "before": "57 evidence entries: 53 public university pages and 4 community reports; 56 distinct institutions.",
        "after": "61 evidence entries: 57 public university pages and 4 community reports; 60 distinct institutions.",
        "details": [
          "Yale’s October 7 notice processes only program-wide required training; Oklahoma’s October 8 page retains the pause for requests since August 24.",
          "UVA processes degree-required training but pauses optional course-credit CPT. UIC’s October 7 notice reviews eligibility and tracks litigation without announcing a blanket pause or unrestricted reopening."
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
        "title": "Kansas current page permits degree-required CPT",
        "summary": "The ISS notice no longer pauses all requests and now permits degree-required internships/practica without dating the change.",
        "before": "The entry said all CPT requests were paused.",
        "after": "Records the current required-training authorization route and application process, without reopening all elective internships.",
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
        "title": "NYU Tandon Mathematics page no longer shows the old pause notice",
        "summary": "Current generic application instructions do not establish lifting of the pause; approvals and a reopening date remain unverified.",
        "before": "The entry said the university page expressly paused approvals from September 1.",
        "after": "Discloses the absent notice and current-approval gap without claiming reopening or a university-wide NYU policy.",
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
        title: 'Add omitted CMU CPT notice and current application requirements',
        summary: 'Adds the August 27 OIE notice and current CPT page: training must be required for all students to graduate, elective internships need pre-completion OPT, and thesis/dissertation-related external work remains under review. This is an earlier notice, not an October 1 announcement.',
        before: '56 evidence entries: 52 public university pages and 4 community reports; 55 distinct institutions. CMU was missing.',
        after: '57 evidence entries: 53 public university pages and 4 community reports; 56 distinct institutions. Adds CMU public-page evidence; community evidence levels are unchanged.',
        details: ['Discloses the page under construction, conflicting CSD doctoral wording and unspecified treatment of existing approvals; does not claim a university-wide pause or reopened doctoral CPT.'],
        sources: [
          { label: 'CMU OIE · August 27 CPT notice', href: 'https://www.cmu.edu/oie/news-and-events/2025-2026/august/cpt-broadcast-message.html' },
          { label: 'CMU OIE · Current CPT page', href: 'https://www.cmu.edu/oie/employment/f1-students/curricular-practical-training.html' },
          { label: 'CMU CSD · Doctoral CPT resources', href: 'https://www.csd.cs.cmu.edu/academics/doctoral-resources/applying-for-cpt-or-opt' },
        ],
      },
      {
        id: 'duration-government-appeal-september-30',
        category: 'D/S litigation',
        title: 'Government appeals D/S case; nationwide stay remains operative',
        summary: 'September 30 district docket entries 53–55 show the government appeal, record transfer and First Circuit case 26-2112. No appellate order lifting the stay was verified; filing an appeal alone does not undo the September 14 nationwide relief.',
        before: 'The litigation timeline ended with the September 14 stay and October 2 conference schedule.',
        after: 'Adds the appeal and case number while retaining the stay status and disclosing the appellate-docket gap.',
        sources: [{ label: 'Public court docket mirror · entries 53–55', href: 'https://www.courtlistener.com/docket/74661796/feed/' }],
      },
      {
        id: 'ucsd-cpt-current-application-process',
        category: 'CPT schools',
        title: 'UC San Diego now lists applications for qualifying CPT programs',
        summary: 'The ISEO page no longer shows its earlier pause of all CPT requests and lists verified programs plus iServices, department and ISEO review. It does not date the change or authorize every program.',
        before: 'The school entry still said all F-1 CPT requests were paused.',
        after: 'Records the current limited application route and review for unlisted programs.',
        sources: [{ label: 'UC San Diego ISEO · F-1 CPT', href: 'https://iseo.ucsd.edu/student-services/working-in-us/f1-cpt.html' }],
      },
      {
        id: 'northwestern-cpt-september-29-cleanup',
        category: 'CPT schools',
        title: 'Northwestern removes conflicting older CPT wording on September 29',
        summary: 'The OISS page still requires training for every student to graduate, but no longer retains the September 25 page’s older “integral to or required” wording. It does not reopen elective internships.',
        before: 'The entry warned that older wording remained lower on the same page.',
        after: 'Reflects the September 29 page’s consistent program-wide standard while retaining historical screenshots.',
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
        title: 'Northwestern sets out the program-wide requirement and CPT application steps',
        summary: 'The OISS page updated September 25 requires training for every student to graduate, disallows further CPT after the required experiential component is complete, and describes the cooperative agreement, academic certification and CPT I-20 process. Older wording remains lower on the page and does not establish that elective internships reopened.',
        before: 'The entry relied on the September 3 notice and did not describe the current application process.',
        after: 'The entry now states the eligibility and process on the September 25 page and retains the earlier screenshot as history.',
        sources: [{ label: 'Northwestern OISS · Curricular Practical Training', href: 'https://www.northwestern.edu/international/international-students/student-employment/f-1-practical-training/curricular-practical-training/' }],
      },
      {
        id: 'oregon-cpt-current-page-clarification',
        category: 'CPT schools',
        title: 'Oregon CPT page adds DMA projects and revises credit guidance',
        summary: 'The current ISSS page includes required DMA culminating projects and says credit registration depends on the program and advisor. The former uniform one-credit minimum no longer appears. The page does not date the revision, and its removal does not establish that particular programs need no credit.',
        before: 'The entry listed program-wide requirements and required master’s and doctoral research, without DMA or the current credit guidance.',
        after: 'The entry reflects the current scope and credit guidance while retaining the restriction on optional internship credit.',
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
        summary: 'The current university page describes applying and receiving a CPT I-20 after approval. The earlier pause notice is gone, but no removal date or blanket resumption announcement appears.',
        before: 'The entry described issuance as paused since August 17 based on earlier university material and screenshots.',
        after: 'The entry reflects the current university page and retains older screenshots as history, without claiming unrestricted resumption.',
        sources: [{ label: 'UCSB OISS · Curricular Practical Training', href: 'https://oiss.ucsb.edu/curricular-practical-training' }],
      },
      {
        id: 'h1b-separate-100k-proclamation-context',
        category: 'H-1B fees',
        title: 'Distinguish the separate $100,000 entry restriction from the proposed $103,265 fee',
        summary: 'The White House extended the restriction for certain overseas H-1B cases to September 21, 2027. The district court vacated its agency implementation policy and the First Circuit denied a stay. Extension does not itself restore collection or activate the separate $103,265 NPRM.',
        before: 'Policy #02 covered only the $103,265 NPRM, without distinguishing the extension and litigation of the other $100,000 policy.',
        after: 'The detail and 30-day briefing distinguish the two measures and link the proclamation and both court orders.',
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
        title: '#02 Proposed $103,265 surcharge comment period closed',
        summary: 'The Federal Register set a September 24 comment deadline. That date has passed; DHS has not issued a final rule, and the proposal is not in effect.',
        before: 'Status said “Proposed rule · Comments due September 24”; the deadline was in future steps and the site offered a submit-comment link.',
        after: 'Status says “Proposed rule · Comment period closed”; September 24 is a past milestone, DHS review is next, and the submit-comment link is removed.',
        sources: [{ label: 'Federal Register · 2026-17324', href: 'https://www.federalregister.gov/documents/2026/08/25/2026-17324/fee-for-certain-h-1b-petitions' }],
      },
      {
        id: 'cpt-four-public-notices-added',
        category: 'CPT schools',
        title: 'Add public CPT notices from PLU, IU Global, Rutgers and UCF',
        summary: 'PLU’s September 25 notice narrows eligibility to graduation-required training. Earlier notices from the other three describe a pause for most requests, continued review for clearly eligible requests, and a program-wide requirement. Their addition does not imply they issued new rules today.',
        before: '52 evidence entries: 48 public university pages and 4 community reports; 51 distinct institutions.',
        after: '56 evidence entries: 52 public university pages and 4 community reports; 55 distinct institutions. These are four new public-page entries; the four community reports retain their evidence level.',
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
        title: 'Add Texas State’s curriculum-required CPT conditions',
        summary: 'The university says course enrollment or credit alone is insufficient and retains an application process, without announcing a blanket pause. The wording has no dated update; this adds an existing explanation.',
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
      "title": "D/S disapproval resolution placed on the Senate calendar",
      "summary": "On September 17, S.J.Res.213 was discharged from the Senate Judiciary Committee by petition and placed on the Senate calendar under General Orders (Calendar No. 668); the House companion is H.J.Res.215.",
      "before": "The D/S entry recorded only the September 14 introduction of a CRA resolution; the text left the number blank and later steps were unverified.",
      "after": "Added both resolution numbers, a September 17 Senate-calendar milestone, GovInfo sources and a 30-day briefing item. Placement on the calendar is not a vote or passage; the nationwide court stay is tracked separately, and the docket mirror still ends at entry 52.",
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
      "title": "#12 Federal Register text compared word for word",
      "summary": "Later the same day, the GovInfo published text (91 FR 60501–60503) was read and compared with the White House text; they match apart from formatting, page markers and the signature line.",
      "before": "The previous log item took the number and publication details from Federal Register listings in search results, without a word-for-word comparison.",
      "after": "The entry’s review note now reflects the checked published text, and the source and milestone add the 91 FR pages. The order’s content, status and the October 18 deadline are unchanged. The previous log item is kept as written for comparison.",
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
      "summary": "Two public campus notices were added, and the UC Irvine page is now a standing policy page with a new thesis/dissertation CPT pathway. These are additions of existing notices and a page change, not new rules issued today.",
      "before": "49 evidence entries: 45 public university pages and 4 community reports; 48 distinct institutions. UT Dallas, UC Irvine and Washington State kept September 17 review dates because their pages could not be read.",
      "after": "51 evidence entries: 47 public university pages and 4 community reports; 50 distinct institutions. Those three pages were read directly again and their dates updated; 8 university pages refused access during this check, so their September 22 dates are retained and noted in each entry.",
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
      "before": "The document ID read “September 18, 2026 executive order · Number pending verification”; sources were the White House text and a forum discussion.",
      "after": "The document ID now reads “Executive Order 14431”, with a September 23 Federal Register milestone and source. The order’s content, status and the October 18 deadline to begin the LCA review are unchanged.",
      "details": [
        "The number and publication details come from Federal Register listings in search results; the full Federal Register text could not be opened directly in this check and was not compared word for word. The entry’s review note discloses this gap."
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
      "summary": "Public university pages narrow eligibility for optional training. These are additions of existing notices, not new rules issued today.",
      "before": "47 evidence entries: 43 public university pages and 4 community reports; 46 distinct institutions.",
      "after": "49 evidence entries: 45 public university pages and 4 community reports; 48 distinct institutions. Kennesaw State lists three programs; Toledo does not announce a blanket pause.",
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
      "title": "D/S: add introduction of CRA disapproval resolution",
      "summary": "Add the September 14 senator announcement and text proposing CRA disapproval of the D/S final rule.",
      "before": "The entry tracked the nationwide stay and October 2 conference, without the congressional resolution.",
      "after": "Add the introduction milestone, primary sources and briefing. Introduction is not passage or enactment; the court stay is tracked separately.",
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
      "title": "Added #12 H-1B layoff-review and interagency-coordination executive order",
      "summary": "The President signed the order September 18, directing coordinated H-1B review that considers relevant layoffs and the start of a prior-LCA data review within 30 days.",
      "before": "The site contained 11 policies and did not separately track the September 18, 2026 H-1B program-integrity executive order.",
      "after": "Added #12 h1b-program-integrity, bringing the site to 12 policies. The order is signed, with agency implementation to be tracked; the order itself has no NPRM or public-comment stage.",
      "details": [
        "The order requires consideration of relevant past-year or planned layoffs negatively affecting similarly situated U.S. workers, limited by three conditions — the employer filing the case, comparable roles cut and timing; it does not mandate automatic visa denial after layoffs.",
        "October 18, calculated as 30 calendar days after signature, is the deadline for DOL to begin reviewing prior LCA data, not to finish or a separately announced effective date.",
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
      title: 'Added #11 PERM labor certification reform to the H-1B path',
      summary: 'DOL’s RIN 1205-AC29 entered OIRA review on September 14, covering recruitment, layoff protections and employer compliance. It is not in effect.',
      before: 'The H-1B path did not separately track RIN 1205-AC29; the site contained 10 policies.',
      after: 'Added #11 perm-modernization, bringing the site to 11 policies. It is under OIRA prepublication review; detailed provisions, comment deadline and effective date remain unconfirmed.',
      details: ['The agenda’s July 2026 entry was an original NPRM target, not a publication or effective date. This action is tracked separately from the #06 wage-level proposal, RIN 1205-AC30.'],
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
      title: 'UT Dallas moves from “process unchanged” to catalog-required internship courses only',
      summary: 'ISSO published a new notice on September 17 that supersedes its August 25 “no changes” post. Under SEVP’s elective-course clarification, only students whose degree catalog lists an internship course requirement can be approved for CPT, with no case-by-case exceptions.',
      before: 'The entry read “process unchanged as of August 25” and retained September 14 as its last successful review date.',
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
        "Bryn Mawr does not announce revocation of existing approvals. Buffalo and Dearborn allow existing Fall 2026 authorizations to continue. Dearborn lists only Applied Behavior Analysis and Clinical Health Psychology MS programs; this cannot be generalized to Ann Arbor.",
        "Berkeley explicitly separates CPT guidance from the D/S rule: the D/S stay does not automatically restore optional CPT."
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
      "title": "Court stays the D/S final rule nationwide; September 15 effective date postponed",
      "summary": "At 4:55 p.m. ET, the court issued preliminary relief under APA § 705 postponing the entire rule nationwide and barring further implementation.",
      "before": "Decision pending after the September 3 hearing; September 15 scheduled effectiveness unless stayed.",
      "after": "Nationwide stay until further court order or a merits resolution; no permanent vacatur or replacement effective date. An in-person status conference is set for October 2 at noon in Courtroom 1, Boston.",
      "details": [
        "Opinion 50, pp. 46–48, extends relief beyond plaintiff-member schools; order 51, paragraphs 2–5, sets the scope and duration.",
        "Vacatur and summary judgment were denied without prejudice to renewal. The order does not automatically rescind separate CPT guidance."
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
      "summary": "UW’s September 8 notice dismisses pending non-required autumn CPT. Add WSU’s August 7 notice while distinguishing its university policy from the August SEVP guidance.",
      "before": "UW recorded only a pause on new requests; 36 public university entries plus 5 community entries, 41 entries covering 40 distinct schools.",
      "after": "UW now specifies pending-request treatment and adviser attestation. Adding WSU yields 37 public entries plus 5 community entries, 42 entries covering 41 distinct schools.",
      "details": [
        "WSU plans to restrict full-time academic-year CPT from Spring 2027, except curricular-required internships. It is not a current blanket pause, and the notice cautions about campus scope.",
        "Substantive indexed official-page text was available; direct access and later implementation remain unverified. This is not presented as a new federal policy issued today."
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
      "after": "36 public university evidence entries and 5 community entries: 41 entries across 40 distinct schools. Older JHU elective-course text does not establish reopening.",
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
  "title": "Add D/S hearing transcript and September 14 decision target",
  "summary": "Transcript p. 70 records a hoped-for decision by September 14 and a possible brief TRO, neither an issued order.",
  "before": "Only reported the September 3 hearing and matter under advisement, without the transcript or timing target.",
  "after": "Adds the NAFSA-hosted official transcript, non-guaranteed September 14 target and possible brief TRO, with attributed judicial questions and government arguments.",
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
  "title": "OPT fee proposal completed OIRA review September 11",
  "summary": "The conclusion is Consistent with Change, not NPRM publication, confirmation of $100,000 or an effective fee.",
  "before": "The site showed pending OIRA review using the older review record.",
  "after": "Review completed with changes September 11; the amount, payer, coverage and exemptions await public provisions. Student payment cannot be assumed.",
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
  "title": "Comment statistics for four policies now describe policy direction",
  "summary": "Re-reviewed the same 800 sampled records using the direction of related restrictions, without requiring explicit views on exact proposal provisions; 123 classifications changed.",
  "before": "Proposal-specific counts (oppose / support / conditional or mixed / unclear): H-1B 110/49/11/30; grace period 150/30/12/8; wages 120/35/18/27; I-765 152/1/1/46.",
  "after": "Directional counts (oppose tightening / support tightening / conditional or mixed / unclear): H-1B 110/83/1/6; grace period 156/32/6/6; wages 119/67/2/12; I-765 195/1/0/4.",
  "details": [
    "Calls for tighter restrictions or visa abolition count as support for tightening; defending lawful work access counts as opposition.",
    "Sample IDs, random seeds and sampling timestamps are unchanged; unreadable-body and attachment limitations remain disclosed per record."
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
    "The page date is September 10, but the CPT section is headed August 2026; this does not establish a September 10 start to the pause.",
    "The notice does not specify treatment of existing authorizations or a resumption date."
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
      "title": "60-day grace-period NPRM formally published",
      "summary": "The September 11 NPRM sets comments due November 10 before midnight ET; it is not in effect.",
      "before": "September 10 preview, with publication scheduled September 11 and exact comment deadline unconfirmed.",
      "after": "Published September 11 at 91 FR 57807; comments due November 10, 2026. The current grace period remains unchanged.",
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
  "title": "Official correction added to H-1B surcharge proposal",
  "summary": "The September 10 correction replaces Table 13 historical receipt figures. The $103,265 amount, cap-subject scope and September 24 comment deadline are unchanged; the proposal is not in effect.",
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
  "after": "Penn now conditionally resumes processing under current curricular requirements, with a caveat about older pause text on the same page. Adding Georgetown brings the list to 38 entries (33 public, 5 community), covering 37 institutions or separate campuses.",
  "details": [
    "Penn requires departmental confirmation, an employer cooperative agreement and an authorized I-20; this is not unrestricted reopening.",
    "Georgetown contacted pending applicants and fall-authorized students about impacts and options, without guaranteeing all existing authorizations are unaffected."
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
      "title": "60-day grace-period proposal enters public inspection",
      "summary": "Policy 8: the NPRM preview specifies eight worker classifications and their dependents; it is not in effect.",
      "before": "OIRA review complete; public proposal and publication date pending.",
      "after": "Preview released September 10, scheduled for publication September 11. It would remove the up-to-60-day discretionary period for E-1, E-2, E-3, H-1B, H-1B1, L-1, O-1, TN and their dependents. Comments are due 60 days after publication. No final rule or effective date is set; people otherwise authorized to remain lawfully must be distinguished.",
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
  "summary": "Two records are added from public university pages. Penn’s notice is dated August 27 on a page updated August 31. The NEU provision has no stated publication date; the date of inclusion is not a new-policy announcement date.",
  "before": "35 entries: 30 public university sources and 5 community records, covering 34 distinct institutions or separate campuses. Penn and Northeastern were not listed.",
  "after": "37 entries: 32 public university sources and 5 community records, covering 36 distinct institutions or separate campuses. Penn pauses decisions on new and pending requests; Northeastern COE master’s students are limited to one co-op/internship, up to eight months.",
  "details": [
    "Penn’s existing CPT authorizations are unaffected by this pause, which is neither permanent elimination nor denial of all pending requests.",
    "The NEU entry covers COE master’s students only. It neither establishes a university-wide rule nor confirms a blanket PhD suspension."
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
      "title": "Upgrade UCLA to a public university notice",
      "summary": "The Dashew Center published a September 8 notice clarifying research cases, existing authorizations, and cooperative agreements. This upgrades an existing entry; it does not add a school.",
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
      "title": "Northwestern clarifies it cannot approve CPT that is not required for every student",
      "summary": "The September 3 notice linked from the university CPT page states that this restriction continues unless SEVP guidance changes. The audit date is not the announcement date.",
      "before": "CPT not required for every student was on hold during the university review.",
      "after": "Northwestern cannot approve experiential learning that is not required for every student unless SEVP guidance changes; OISS is working with programs to determine eligibility.",
      "sources": [
        {
          "label": "Northwestern OISS CPT webpage",
          "href": "https://www.northwestern.edu/international/international-students/student-employment/cpt-for-f1-students.html"
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
      "summary": "The newly collected OIPS notice pauses Fall 2026 CPT processing when students cannot prove that training is required for everyone in the degree program to graduate. The section has no publication date; the collection date is not the announcement date.",
      "before": "34 evidence entries: 28 public university webpages and 6 community records, covering 33 distinct institutions or separate campuses. George Mason was not listed.",
      "after": "35 evidence entries: 29 public university webpages and 6 community records, covering 34 distinct institutions or separate campuses. George Mason is added with Fall 2026 CPT processing paused without proof of a program-wide graduation requirement.",
      "details": [
        "An elective internship or one of several optional ways to satisfy a degree requirement does not qualify under the stated standard. The notice does not address existing authorizations.",
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
      "title": "Restore the thesis-research consultation caveat in Purdue ECE’s summary",
      "summary": "The email’s final paragraph directs students to consult ISS about work needed for thesis research, a qualification omitted from the previous summary. This remains department-email screenshot evidence, without an upgrade to public-webpage confirmation or a guarantee of research CPT approval.",
      "before": "A department email screenshot says it will not sign CPT this semester; this is an ECE position and should not be generalized to the entire university.",
      "after": "A department email screenshot says non-required internship/co-op CPT will not be approved this semester; students should separately consult ISS about work needed for thesis research. This statement covers ECE only.",
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
      "title": "#03 Explain the OPT obstacle after a PhD exit and the boundary on another degree",
      "summary": "The earlier example did not explain how the rule affects OPT after a master’s exit and omitted the completion-date boundary for same/lower-level study. The final rule and Rice guidance clarify both.",
      "before": "After a PhD exit with a master’s, “check OPT eligibility”; completing a U.S. F-1 degree generally barred another same/lower-level program.",
      "after": "The rule prohibits graduate-level changes during study. Rice explains that a master’s can be awarded without changing doctoral SEVIS records, preventing OPT based on that master’s. Degrees completed before the effective date do not count toward the same/lower-level re-enrollment limit.",
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
        "title": "#05 CPT guidance timeline",
        "summary": "Page 2 of the August 12 broadcast corrects the September 1 log’s attribution of the all-student graduation requirement solely to August 24. August 12 already stated that standard; the August 24 Q&A elaborated on elective courses, American students, and cooperative agreements. The earlier log is retained for comparison.",
        "before": "August 12 was described only as a compliance reminder; the narrower integral standard and university responses were dated from August 24.",
        "after": "August 12 already required CPT to be indispensable to obtaining the degree and required for all students pursuing it. August 24 elaborated on the standard; the school-response timeline now starts after August 12.",
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
        "summary": "Utah, Delaware, UC San Diego, UMBC, GWU, CU Boulder, UW–Milwaukee, Oregon, and Kansas are newly listed. Together with the UCI evidence upgrade, the list grows from 25 to 34 school/department records covering 33 distinct institutions. Original notice dates are preserved; these are new additions to the website.",
        "before": "25 records · 18 university webpages / 7 email screenshots; 24 distinct institutions.",
        "after": "34 records · 28 university webpages / 6 email screenshots; 33 distinct institutions.",
        "details": [
          "University of Utah: previously unlisted. New CPT not required for every student is paused from September 3. ISSS paused optional CPT authorizations. UAtlas still accepts requests, but optional cases will not be approved until review is complete. Existing authorizations continue under the employer, location, and dates on the current I-20.",
          "University of Delaware: previously unlisted. New CPT not required for every student is paused. The September 2 notice says CGPS paused optional CPT. Students may still submit requests, but no new optional authorizations will be issued until review is complete, and processing delays are expected.",
          "UC San Diego: previously unlisted. All F-1 CPT request submission and processing is paused. The ISEO page still pauses all CPT requests in iServices. Page 12 of the September 2 presentation plans reopening in mid-September and requires department confirmation that the internship is required. No exact reopening date is specified.",
          "University of Maryland, Baltimore County: previously unlisted. Pending and future CPT is limited to training required for every student in the program. The September 4 OISS update limits pending and future requests to programs requiring practical training for every student. Already issued Fall 2026 CPT authorizations will not be revoked. This record covers the UMBC campus.",
          "George Washington University: previously unlisted. New CPT not required for every student is paused. The September 2 ISO notice pauses new CPT that is not required for all students in the degree program. Existing authorizations continue under the employer location, dates, and other conditions on the current I-20.",
          "University of Colorado Boulder: previously unlisted. CPT is limited to catalog-listed degree or major requirements. The August 31 update limits CPT to listed programs requiring practical training for degree or major completion; a minor does not qualify. Elective internship credit alone is insufficient. Already authorized Fall 2026 CPT is unaffected.",
          "University of Wisconsin-Milwaukee: previously unlisted. Only CPT required for every student in the program is approved from August 24. ISSS requires an articulated practical-training requirement for all students in the academic program. CPT approved before August 24 remains authorized through its current end date.",
          "University of Oregon: previously unlisted. CPT solely for optional internship credit is no longer authorized. The new ISSS policy requires training to be integral to the curriculum and degree. The page lists program-wide degree requirements and work needed for a required master’s thesis/final project or doctoral dissertation; research cases require detailed faculty documentation.",
          "University of Kansas: previously unlisted. The university page says all CPT requests are paused. The ISS August 2026 update pauses all CPT requests while the office determines which cases can be authorized. The notice does not explain how existing authorizations are treated."
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
        title: 'USC and Alabama added; evidence-record count corrected',
        summary:
          'Public CPT requirements from USC and the University of Alabama expand the list from 23 to 25 records. Together with the UCSB and NYU evidence upgrades, university-webpage records increase from 14 to 18 and email-screenshot records decrease from 9 to 7. The headline now counts school/department records because separate notices from one institution had been counted as separate schools.',
        before: '23 schools · 14 university webpages / 9 screenshot, email, or forum reports',
        after: '25 school/department records · 18 university webpages / 7 email screenshots; 24 distinct institutions',
        details: [
          'USC: newly added from its August 25 notice. From August 24, CPT must be required for graduation; Fall 2026 authorizations issued before August 24 will not be rescinded.',
          'University of Alabama: newly added from its August 31 notice. Departments must document whether training is required for all students in the program or track, or for thesis/dissertation completion, with academic-catalog evidence.',
          'Purdue ECE and Purdue ISS are two scope records for one institution. This corrects earlier update-log references that called such record totals school counts; the historical wording is retained for comparison.',
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
        title: 'NYU Tandon Mathematics',
        summary:
          'The NYU Tandon mathematics internship page says international-student CPT approvals have been paused since September 1. The former NYU forum report moves to the university-webpage group, with its scope narrowed to the undergraduate and graduate mathematics students covered by this page.',
        before: 'New York University: an August 31 forum report said CPT was paused, with the scope awaiting a public university source.',
        after: 'New York University (Tandon Mathematics): a public department page supports a September 1 approval pause; it does not establish a university-wide NYU policy.',
        sources: [
          { label: 'NYU Tandon mathematics internship policies', href: 'https://math.nyu.edu/dynamic/sites/tandon/internships/' },
        ],
      },
      {
        id: 'ucsb-cpt-public-source',
        category: 'CPT SCHOOL LIST',
        title: 'UCSB',
        summary:
          'The public UCSB OISS CPT page says CPT issuance has been paused since August 17 while the office consults legal counsel. The entry moves to the university-webpage group and retains both email screenshots.',
        before: 'Email screenshots only: new CPT that was not degree-required was paused, while existing authorizations were unaffected.',
        after: 'A public notice supports an August 17 pause in CPT issuance; it does not distinguish categories or explain treatment of existing authorizations.',
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
        title: 'MIT',
        summary:
          'MIT International Students Office now states on its public CPT page that the university paused new requests received or pending as of August 24 when the training is not required for every student to complete the degree, and that it will contact students already issued Fall 2026 CPT to discuss options. MIT therefore moves from the email-screenshot group to the university-verified group.',
        before: '23 schools · 13 university webpages / 10 screenshot, email, or forum reports; MIT was supported only by a notice screenshot.',
        after: '23 schools · 14 university webpages / 9 screenshot, email, or forum reports; MIT is supported by a public university page.',
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
        title: '#03 Fixed F/J admission period',
        summary:
          'Docket entry 47 confirms that the September 3 injunction hearing was held. After hearing arguments, the court took the matter under advisement. This means the judge did not rule from the bench and will continue considering the request, potentially through a later written order; the injunction has been neither granted nor denied.',
        before: 'The preliminary-injunction hearing was scheduled for 11:00 a.m. on September 3; the court had not ruled.',
        after: 'The hearing was held and arguments were completed; the matter is under advisement, with no grant or denial yet.',
        details: [
          'No court order currently stays the final rule.',
          'September 15 remains the scheduled effective date unless the court first issues a stay or injunction.',
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
        title: '#03 Fixed F/J admission period',
        summary:
          'On September 2, the government filed an assented motion for leave to exceed the page limit and attached its proposed opposition as Exhibit A. The proposed brief asks the court to deny APA § 705 relief, a preliminary injunction, and summary judgment before the administrative record is filed, and argues that any relief should be limited to the plaintiffs. The 57-page document supplied by the user is not a court ruling; the filing itself did not change the September 3 hearing or the scheduled September 15 effective date.',
        before: 'The government response was due September 2; the injunction request was awaiting that response.',
        after: 'The government attached its proposed opposition to its September 2 page-limit motion; the court has not ruled.',
        details: [
          'The government says the four-year cap does not require students to graduate within four years because eligible students may seek an extension of stay.',
          'It characterizes the asserted enrollment losses, compliance costs, and program adjustments as speculative or economic injuries rather than irreparable harm.',
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
        title: 'School count and university evidence',
        summary:
          'The list expanded from 21 to 23 schools. Entries supported by university webpages increased from 11 to 13, while the screenshot, email, or forum-evidence group remains at 10. The University of Maryland, College Park and Trine University were added within the limits of their public materials.',
        before: '21 schools · 11 university webpages / 10 screenshot, email, or forum reports',
        after: '23 schools · 13 university webpages / 10 screenshot, email, or forum reports',
        details: [
          'The University of Maryland, College Park stated on September 2 that unapproved CPT outside a program-wide requirement, required course, or thesis or dissertation research requirement is paused; previously authorized CPT may continue.',
          'Trine University’s graduate CPT page still lists 2026–27 application deadlines and says applications remain open and are reviewed in the order received. Because it does not separately address the August 24 guidance, the entry does not treat the page as proof that every CPT category is unaffected.',
        ],
        sources: [
          {
            label: 'University of Maryland, College Park CPT page',
            href: 'https://marylandglobal.umd.edu/global-learning-all/international-students-scholars/employment-taxes/employment-f-1-international-students/curricular-practical-training-cpt',
          },
          {
            label: 'Trine University CPT page',
            href: 'https://www.trine.edu/international/graduate/cpt-information.aspx',
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
        title: 'UC Berkeley',
        summary:
          'The university CPT page now states the narrow thesis and dissertation criteria explicitly: only thesis-track master’s or doctoral students who have Advanced to Candidacy may apply, and the practical training must be necessary to complete the thesis or dissertation, not reasonably replaceable by another research or data-collection method, and documented by the faculty adviser. Course Credit CPT remains paused.',
        before: 'Course-credit CPT is paused; degree-required and thesis/dissertation-required CPT continue.',
        after: 'Course Credit CPT remains paused; thesis and dissertation CPT is limited to cases meeting the candidacy, necessity, non-replaceability, and faculty-documentation requirements.',
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
        title: '#03 Fixed F/J admission period',
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
        title: '#05 August 12 / August 24 CPT guidance',
        summary:
          'The CPT entry now separates the two ICE/SEVP Broadcasts: the August 12 notice emphasized school and DSO compliance duties, while the August 24 notice introduced the narrower “integral” standard and cooperative-agreement requirement. The start of university responses to the new eligibility standard was corrected to August 24.',
        before: 'From August 12 · Universities respond to the tighter eligibility standard',
        after: 'August 12 compliance reminder; August 24 eligibility change and university response',
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
        title: 'School count and evidence level',
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
          'MIT moved to the screenshot-evidence group because its public CPT webpage does not show the latest pause; the entry now describes the narrower scope shown in the university notice.',
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
            href: 'https://www.northwestern.edu/international/international-students/student-employment/cpt-for-f1-students.html',
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
