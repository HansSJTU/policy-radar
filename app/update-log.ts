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
  "date": "2026-09-10",
  "changes": [
{
  "id": "h1b-fee-table13-correction",
  "category": "规则制定",
  "title": "H-1B 附加费提案新增官方更正",
  "summary": "9·10 更正替换 Table 13 历史申请数量表；$103,265、cap-subject 范围及 9·24 评论截止日均未改变，提案仍未生效。",
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
  "title": "Penn 有条件恢复 CPT 处理；新增 Georgetown 校方说明",
  "summary": "Penn 9·10 顶部通知称恢复符合条件的请求；Georgetown 9·09 说明选修实习不符合资格。",
  "before": "Penn 记录为暂停新申请及待审决定；学校清单为 37 条记录（32 公开、5 社区），覆盖 36 所院校／独立校区。",
  "after": "Penn 改为按现行课程要求有条件恢复处理，保留同页旧暂停文案的核查提示；新增 Georgetown 后为 38 条记录（33 公开、5 社区），覆盖 37 所院校／独立校区。",
  "details": [
    "Penn 须院系确认课程要求、雇主完成合作协议并取得授权 I-20；不能理解为全面恢复。",
    "Georgetown 已联系待审及秋季已授权学生讨论影响和选项，没有保证所有既有授权不受影响。"
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
      "summary": "第 8 项：NPRM 预览稿明确八类工作身份及家属范围，尚未生效。",
      "before": "OIRA 已审完；等待公开提案，发布日期未定。",
      "after": "9 月 10 日预览公开，预定 9 月 11 日正式刊登。拟取消 E-1、E-2、E-3、H-1B、H-1B1、L-1、O-1、TN 及其家属的最长 60 天酌情宽限期。评论期为正式刊登后 60 天；最终规则和生效日期未定，另有合法留美依据的情形须区别判断。",
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
  "title": "新增 UPenn 暂停审批说明和 Northeastern COE 硕士实习次数限制",
  "summary": "按校方公开页面新增两条记录。Penn 通知为 8 月 27 日发布、页面 8 月 31 日更新；NEU 条款发布日期未标明，不将收录日视为新规宣布日。",
  "before": "35 条记录：30 条校方公开来源、5 条社区记录，覆盖 34 所院校／独立校区；尚未收录 Penn 和 Northeastern。",
  "after": "37 条记录：32 条校方公开来源、5 条社区记录，覆盖 36 所院校／独立校区。Penn 暂停新申请和待审申请的审批决定；Northeastern COE 硕士限一次 co-op／internship，最长 8 个月。",
  "details": [
    "Penn 既有 CPT 授权不受此次暂停影响；暂停不等于永久取消或拒绝全部待审请求。",
    "NEU 记录仅限工程学院硕士，不能外推全校，也不能用作“博士全面停批”的证据。"
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
      "summary": "Dashew Center 已公开 9 月 8 日通知，补充论文研究、既有授权及合作协议要求；本次是证据升级，不是新增学校。",
      "before": "UCLA 仅有邮件截图：暂停非全员学位要求的课程学分／支持信 CPT。35 条记录中有 29 条校方公开来源、6 条社区记录。",
      "after": "UCLA 改为校方公开来源：非全员毕业必需的课程学分／支持信 CPT 暂停，学位必需 CPT 继续。35 条记录改为 30 条校方公开来源、5 条社区记录，仍覆盖 34 所院校／独立校区。",
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
      "title": "Northwestern 从审核期间暂停改为明确不批准非全员必需 CPT",
      "summary": "校方 CPT 页面链接的 9 月 3 日通知明确：除非 SEVP 指引改变，学校不能批准非项目全体学生必需的实践。本次更新反映该已发布通知，不将核查日视为通知发布日期。",
      "before": "暂停非全员必修的 CPT 申请；学校审核期间只处理全员必修工作经历。",
      "after": "不再批准非全员必需的 CPT；除非 SEVP 指引改变，学校不能批准此类实践，OISS 正与各项目核实资格。",
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
      "title": "新增 George Mason 校方 CPT 说明：证据记录增至 35 条",
      "summary": "本次收录 OIPS 已公开的政策审核说明：无法证明实践为全项目学生毕业必需的 2026 秋季 CPT 暂停审理。页面未标明该段发布日期，不将本次收录日视为政策宣布日。",
      "before": "34 条证据记录：28 条校方网页、6 条社区记录；按院校／独立校区去重为 33 所。George Mason 尚未收录。",
      "after": "35 条证据记录：29 条校方网页、6 条社区记录；按同一口径去重为 34 所。新增 George Mason：暂停无法证明全员毕业必需的 2026 秋季 CPT 审理。",
      "details": [
        "选修课或多个可选毕业路径之一的实习不满足所列标准；公告未说明既有授权如何处理。",
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
      "summary": "原邮件末段让学生就论文研究所需工作另向 ISS 咨询；此前摘要遗漏了这一限定。本条仍为院系邮件截图证据，不升级为校方网页确认，也不代表研究类 CPT 一定获批。",
      "before": "院系邮件截图称本学期不签 CPT；这是院系口径，不应外推全校",
      "after": "院系邮件截图称本学期不批非必需的实习／co-op CPT；论文研究所需工作应另向 ISS 咨询，仅限 ECE 口径",
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
      "summary": "此前的例子未解释新规则如何影响 master out 后的 OPT，并遗漏同级／降级再入学限制的毕业时间边界。现根据最终规则和 Rice 说明补清。",
      "before": "博士退出拿硕士后“确认能否申请 OPT”；完成美国 F-1 学位后原则上不能再读同级或更低级别。",
      "after": "新规则禁止研究生在读期间改学位层级。Rice 说明学校可发硕士学位，但不能将博士 SEVIS 记录改为硕士，因此不能以该硕士申请 OPT。同级／降级再入学限制不计算生效前完成的学位。",
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
        "summary": "核对 8·12 原文第二页后，更正 9·01 日志中把“全员毕业必需”标准仅归于 8·24 的表述。8·12 已提出该要求；8·24 问答进一步解释选修课、美国学生与合作协议。历史日志原文保留供对照。",
        "before": "8·12 仅列合规提醒；8·24 才提出更窄的 integral 标准，高校调整起点写为 8·24。",
        "after": "8·12 已要求 CPT 对取得学位不可缺少且为该学位全体学生必需；8·24 进一步解释。高校响应时间线改为 8·12 后。",
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
        "summary": "新增 Utah、Delaware、UC San Diego、UMBC、GWU、CU Boulder、UW–Milwaukee、Oregon 和 Kansas。连同 UCI 证据升级，清单由 25 增至 34 条学校／院系记录，对应 33 所不同院校。公告日期保留为原发布日期，本次为网站新增收录。",
        "before": "25 条记录 · 18 条校方网页 / 7 条邮件截图；24 所不同院校。",
        "after": "34 条记录 · 28 条校方网页 / 6 条邮件截图；33 所不同院校。",
        "details": [
          "University of Utah：此前未收录；现记录“自 9·03 起暂停非全员必需的新 CPT”。ISSS 暂停 optional CPT 授权；UAtlas 仍可提交申请，但审核结束前不批准此类请求。既有授权按当前 I-20 的雇主、地点与日期继续。",
          "University of Delaware：此前未收录；现记录“暂停非全员必需的新 CPT 授权”。9·02 公告称 CGPS 暂停 optional CPT；学生仍可提交申请，但审核结束前不签发此类新授权，并可能出现处理延迟。",
          "UC San Diego：此前未收录；现记录“暂停全部 F-1 CPT 请求的提交与处理”。ISEO 专页仍暂停 iServices 全部 CPT 请求；9·02 说明会第 12 页预计 9 月中旬重开，并要求院系证明实习为必需。该时间为计划，尚无具体日期。",
          "University of Maryland, Baltimore County：此前未收录；现记录“待审及未来 CPT 仅限全项目学生必需的实践”。OISS 9·04 更新称，待审与未来申请按全项目学生必需的实践要求审核；已经签发的 2026 秋季 CPT 授权不会被撤销。本条单列 UMBC 校区。",
          "George Washington University：此前未收录；现记录“暂停非全员必需的新 CPT 授权”。ISO 9·02 公告称，不再批准非学位项目全体学生必需的新 CPT；既有授权可按当前 I-20 的雇主地点、日期及其他条件继续。",
          "University of Colorado Boulder：此前未收录；现记录“仅处理课程目录列明的学位／主修必需 CPT”。8·31 更新称，仅限校方列出的实践为学位或主修毕业必需的项目，minor 不符合；仅供选修学分的实习不获批，已授权的 2026 秋季 CPT 不受影响。",
          "University of Wisconsin-Milwaukee：此前未收录；现记录“自 8·24 起仅批准全项目学生必需的 CPT”。ISSS 要求实践为学位项目全体学生明确的必修要求；8·24 前已获批的 CPT 可持续至当前授权结束日。",
          "University of Oregon：此前未收录；现记录“不再批准仅供选修实习学分的 CPT”。ISSS 新政策要求实践为既定课程与学位的必要组成部分；页面另列全员学位必需及完成必需硕士论文／毕业项目、博士论文的情形，研究类须有导师详细证明。",
          "University of Kansas：此前未收录；现记录“校方页面称暂停全部 CPT 请求”。ISS 的 2026 年 8 月更新称，正在判断哪些情形仍可授权，期间暂停所有 CPT 请求；公告未说明既有授权的处理方式。"
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
        "summary": "International Center 公开 CPT 页证实自 8·17 起暂停 Course Credit CPT，UCI 移入校方网页组并保留原邮件截图。",
        "before": "仅由邮件截图支持：暂停 Course Credit CPT；强制毕业要求继续。",
        "after": "公开网页支持 8·17 起暂停 Course Credit CPT；Degree Requirement CPT 须有 UCI 课程目录的毕业要求依据。",
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
        "before": "按新标准复核 CPT 授权与申请；受影响学生由 ISSO 单独通知。",
        "after": "仅批准课程体系内、全员必需且有 cooperative agreement 的 CPT，其他情形暂停；8·24 前获批的 CPT 不撤销。",
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
          '新增 USC 与 University of Alabama 的公开 CPT 要求，记录总数由 23 增至 25；结合 UCSB、NYU 两条证据升级，校方网页组由 14 增至 18，邮件截图组由 9 减至 7。此前“所学校”的计数混入了同校不同范围的记录，现改为学校／院系记录。',
        before: '23 所学校 · 14 所校方网页 / 9 所截图、邮件或论坛材料',
        after: '25 条学校／院系记录 · 18 条校方网页 / 7 条邮件截图；对应 24 所不同院校',
        details: [
          'USC：此前未收录；现收录 8·25 公告，自 8·24 起仅批准毕业必需的 CPT，8·24 前已签发的 2026 秋季授权不会被撤销。',
          'University of Alabama：此前未收录；现收录 8·31 公告，院系须补充证明实践对全项目或方向学生、或论文完成的必要性，并提供课程目录依据。',
          'Purdue ECE 与 Purdue ISS 是同一院校的两条范围记录。更正此前更新日志把这类记录总数写成学校数的口径，历史条目原文保留供对照。',
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
          'NYU Tandon 数学系实习政策页注明，自 9·01 暂停国际学生 CPT 审批。原 NYU 论坛报告移至校方网页组，并将范围限定为该数学系页面覆盖的本科生与研究生。',
        before: 'New York University：8·31 论坛报告称暂停 CPT，尚待校方公开页面确认范围。',
        after: 'New York University (Tandon Mathematics)：校方院系网页支持 9·01 暂停审批；未据此确认 NYU 全校政策。',
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
        before: '仅由邮件截图支持：暂停非学位必需的新 CPT，既有授权不受影响。',
        after: '公开公告支持自 8·17 暂停签发 CPT；页面未细分类别，也未说明既有授权的处理方式。',
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
        title: 'MIT',
        summary:
          'MIT International Students Office 的公开 CPT 页面现已明确：学校暂停 8·24 当日已收到或待审、且实践并非全专业学生完成学位必需经历的新 CPT 申请，并将联系已获 2026 秋季 CPT 授权的学生讨论后续选项。因此 MIT 从邮件截图组移至校方网页已核实组。',
        before: '23 所 · 13 所校方网页 / 10 所截图、邮件或论坛材料；MIT 仅由通知截图支持。',
        after: '23 所 · 14 所校方网页 / 9 所截图、邮件或论坛材料；MIT 由公开校方页面支持。',
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
        title: '#03 D/S 固定期限',
        summary:
          '法院案卷第 47 项确认，9 月 3 日的禁令听证已经举行，双方完成陈述后法院将申请留待裁定。“留待裁定”表示法官没有当庭作出裁决，将继续审议并可能另行发布书面命令；它既不表示禁令已经获批，也不表示禁令已经被驳回。',
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
        title: '#03 D/S 固定期限',
        summary:
          '政府于 9 月 2 日提交一份获双方同意的超页申请，并将拟议反对意见作为 Exhibit A 附上。拟议意见请求法院驳回 APA § 705 暂缓、初步禁令以及在行政记录提交前作出简易判决的请求，并主张任何救济均应限于原告。用户提供的 57 页文件不是法院裁定；9·03 听证与 9·15 计划生效日未因该文件本身改变。',
        before: '政府答辩期限延至 2026-09-02；初步禁令申请待答辩。',
        after: '政府已于 2026-09-02 随超页申请附上拟议反对意见；法院尚未裁定。',
        details: [
          '政府主张四年上限不是要求学生四年内毕业，超过获批期限者可申请延期停留。',
          '政府把原告主张的招生损失、合规成本和项目调整描述为推测性或经济性损害，并否认其构成不可弥补损害。',
          '政府反对全国性救济，并称若法院提供救济，应限于本案原告及其成员。',
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
        title: '学校数量与校方证据',
        summary:
          '清单由 21 所扩至 23 所，有校方网页支持当前状态的学校由 11 所增至 13 所；截图、邮件或论坛材料组仍为 10 所。新增 University of Maryland, College Park 与 Trine University，并保留两校公开材料所能支持的范围。',
        before: '21 所 · 11 所校方网页 / 10 所截图、邮件或论坛材料',
        after: '23 所 · 13 所校方网页 / 10 所截图、邮件或论坛材料',
        details: [
          'University of Maryland, College Park 于 9·02 公布：暂停不属于全专业必修、必修课程或论文研究要求的未批准 CPT；已获批 CPT 可继续。',
          'Trine University 的研究生 CPT 页面仍列 2026–27 申请截止日，并称申请持续开放、按收到顺序审理；页面未单独回应 8·24 指引，因此条目不把该页面解读为全面不受影响。',
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
        title: 'UC Berkeley',
        summary:
          '校方 CPT 页面进一步明确论文型 CPT 的适用条件：只有已 Advanced to Candidacy 的论文型硕士或博士，且实践训练是完成论文所必需、无法由其他研究或数据收集方式合理替代时，才可按个案申请，并需导师书面证明。Course Credit CPT 仍暂停。',
        before: '已暂停 Course Credit CPT；Degree-required 与 thesis/dissertation-required CPT 继续。',
        after: 'Course Credit CPT 仍暂停；论文型 CPT 仅限符合 candidacy、必要性、不可替代性和导师证明要求的严格个案。',
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
        title: '#03 D/S 固定期限',
        summary:
          '此前采用的二手报道把初步禁令听证写成 9 月 9 日；现按法院官方日历和 docket 校正为 2026 年 9 月 3 日上午 11:00（美东）。',
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
          'CPT 条目现在分别说明两份 ICE/SEVP Broadcast：8·12 是对学校与 DSO 的合规责任提醒；8·24 才提出更窄的 “integral” 标准与 cooperative agreement 要求。高校按新资格口径调整 CPT 的时间起点相应更正为 8·24。',
        before: '8·12 起 · 高校按收紧后的资格标准调整 CPT',
        after: '8·12 合规提醒；8·24 资格标准收紧及高校响应',
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
        title: '学校数量与证据级别',
        summary:
          '清单由 13 所扩至 21 所；有校方网页支持当前状态的学校由 6 所增至 11 所，只有截图、邮件或论坛文字材料的学校由 7 所增至 10 所。',
        before: '13 所 · 6 所校方网页 / 7 所论坛材料',
        after: '21 所 · 11 所校方网页 / 10 所截图、邮件或论坛材料',
        details: [
          'University of Michigan 从论坛材料升级为校方网页来源。',
          'Northwestern、Columbia、Harvard 按校方页面加入清单。',
          'New York University 按 8·31 论坛报告加入，仍标为待校方公开页面确认。',
          'University of Washington 按校方通知加入；学校暂停非全专业必修的新 CPT，已获批 CPT 可以继续。',
          'Goldey-Beacom College 与 Purdue University ISS 按已下载到本站的校方邮件截图加入；Purdue ISS 与 Purdue ECE 分开记录。',
          'MIT 的公开 CPT 页面未同步最新暂停范围，因此移至截图材料组；条目改为部分非全专业必修的新 CPT 暂停。',
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
