import type { PolicyContent } from '../policy-types.ts';

export const cptGuidance: PolicyContent = {
  id: 'cpt-guidance',
  path: 'CPT',
  tone: 'red',
  effectState: 'guidance-in-use',
  checkedOn: "2026-10-31",
  related: ['duration-status', 'opt-fee'],
  schoolLink: true,
  process: {
    kind: 'administrative-guidance',
    lastCompletedStage: 1,
    activeStage: 2,
    nextStage: 3,
    litigation: [
      {
        "date": "10·05",
        "zh": "起诉并申请暂缓",
        "en": "Complaint and relief requested",
        "afterStage": 2,
        "progress": 65,
        "status": "filed",
        "align": "left",
        "lane": "base"
      },
      {
        "date": "10·28",
        "zh": "政府反对暂缓",
        "en": "Government opposes relief",
        "afterStage": 2,
        "progress": 75,
        "status": "filed",
        "align": "left",
        "lane": "raised"
      },
      {
        "date": "10·30",
        "zh": "准许提交回复",
        "en": "Reply brief permitted",
        "afterStage": 2,
        "progress": 80,
        "status": "filed",
        "align": "left",
        "lane": "base"
      },
      {
        "date": "11·06",
        "zh": "暂缓申请听证",
        "en": "Relief hearing",
        "afterStage": 2,
        "progress": 85,
        "status": "upcoming",
        "align": "right",
        "lane": "raised"
      }
    ],
  },
  sources: [
    {
      "href": "https://www.ice.gov/doclib/sevis/pdf/bcm260801.pdf",
      "zh": "SEVP 8·12 Broadcast",
      "en": "SEVP August 12 Broadcast"
    },
    {
      "href": "https://www.ice.gov/doclib/sevis/pdf/bcm_260802.pdf",
      "zh": "SEVP 8·24 Broadcast",
      "en": "SEVP August 24 Broadcast"
    },
    {
      "href": "https://www.uscardforum.com/t/topic/524965",
      "zh": "美卡论坛讨论",
      "en": "USCardForum discussion"
    },
    {
      "href": "https://www.brynmawr.edu/inside/offices-services/impact-center/international-advising/issa-announcements",
      "zh": "Bryn Mawr · 9·15 校方通知",
      "en": "Bryn Mawr · September 15 notice"
    },
    {
      "href": "https://www.cmu.edu/oie/news-and-events/2025-2026/august/cpt-broadcast-message.html",
      "zh": "CMU OIE · 8·27 CPT 公告",
      "en": "CMU OIE · August 27 CPT notice"
    },
    {
      "href": "https://www.cmu.edu/oie/employment/f1-students/curricular-practical-training.html",
      "zh": "CMU OIE · 现行 CPT 要求与申请步骤",
      "en": "CMU OIE · Current CPT requirements and application steps"
    },
    {
      "href": "https://www.csd.cs.cmu.edu/academics/doctoral-resources/applying-for-cpt-or-opt",
      "zh": "CMU CSD · 博士 CPT 页面（与 OIE 口径冲突）",
      "en": "CMU CSD · Doctoral CPT page (wording conflicts with OIE)"
    },
    {
      "href": "https://www.nafsa.org/sites/default/files/media/document/CPT%20Complaint%20AAU%20v.%20DHS%20.pdf",
      "zh": "CPT 10·05 诉状 · AAU v. DHS（当事方提交）",
      "en": "CPT October 5 complaint · AAU v. DHS (party filing)"
    },
    {
      "href": "https://www.aau.edu/uploads/files/general/Motion-for-Preliminary-Injunction-and-Stay-of-Agency-Action-CPT-Case.pdf",
      "zh": "10·05 初步禁令及行政行动暂缓申请（不是法院命令）",
      "en": "October 5 preliminary-injunction/stay motion (not a court order)"
    },
    {
      "href": "https://www.aau.edu/uploads/files/general/Memo-in-Support-of-PI-and-Stay-AAU-v-DHS.pdf",
      "zh": "10·06 支持暂缓的法律意见（当事方提交）",
      "en": "October 6 memorandum supporting relief (party filing)"
    },
    {
      "href": "https://www.courtlistener.com/docket/74919449/association-of-american-universities-v-us-department-of-homeland/",
      "zh": "AAU v. DHS 地区法院案卷（含 10·13 听证通知）",
      "en": "AAU v. DHS district docket (including the October 13 hearing notice)"
    },
    {
      "href": "https://www.cmu.edu/oie/news-and-events/2026-2027/october/cpt-lawsuit.html",
      "zh": "CMU OIE · 10·08 CPT 诉讼通知",
      "en": "CMU OIE · October 8 CPT litigation notice"
    },
    {
      "href": "https://www.courtlistener.com/docket/74919449/feed/",
      "zh": "地区法院公开案卷摘要 · 10·19 第 22 项延长期限命令",
      "en": "Public district docket feed · October 19 extension order (entry 22)"
    },
    {
      "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.307243/gov.uscourts.mad.307243.21.0.pdf",
      "zh": "政府 · 答复延期申请（第 21 项，非裁定）",
      "en": "Government · response-extension motion (entry 21, not an order)"
    },
    {
      "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.307243/gov.uscourts.mad.307243.27.0.pdf",
      "zh": "10·28 政府反对暂缓意见 · 第 27 项（不是裁定）",
      "en": "October 28 government opposition · entry 27 (not a ruling)"
    },
    {
      "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.307243/gov.uscourts.mad.307243.27.1.pdf",
      "zh": "第 27-1 项附件 A · 8·12 广播原文",
      "en": "Exhibit A, entry 27-1 · August 12 broadcast"
    },
    {
      "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.307243/gov.uscourts.mad.307243.27.2.pdf",
      "zh": "第 27-2 项附件 B · 8·24 广播原文",
      "en": "Exhibit B, entry 27-2 · August 24 broadcast"
    },
    {
      "href": "https://www.courtlistener.com/docket/74919449/association-of-american-universities-v-us-department-of-homeland/?order_by=desc#entry-29",
      "zh": "法院 10·30 第 29 项电子命令 · 准许回复书状（非暂缓）",
      "en": "Court October 30 electronic order 29 · Reply permitted (not a stay)"
    },
    {
      "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.307243/gov.uscourts.mad.307243.28.0.pdf",
      "zh": "原告第 28 项回复许可动议 · 11·04 前、最多 15 页",
      "en": "Plaintiffs’ reply-permission motion 28 · Up to 15 pages by November 4"
    }
  ],
  zh: {
    title: 'CPT 指引收紧：选修实习课不再够用',
    short: '8·12 / 8·24 CPT 指引',
    status: "指引仍执行 · 原告获准提交回复，11·06 听证",
    effectLabel: '指引已执行 · 按学校与项目核对',
    agency: 'ICE / SEVP',
    documentId: 'Broadcast 2608-01 / 02',
    tldr: "ICE/SEVP 要求学校只批准“完成学位必需、且该项目所有学生都要做”的实习作为 CPT；选修实习课通常不够，雇主还须与学校签合作协议。法院 10·30 准许原告按其动议最迟 11·04 提交不超过 15 页的回复书状，11·06 听证安排未变；准许书状不等于暂停指引。",
    tags: ['CPT', 'Day-1 CPT', '实习'],
    summary:
      "SEVP 要求 CPT 实习是该专业所有学生毕业的必需环节，且雇主与学校须有合作协议。四个高教协会已申请初步禁令及行政行动暂缓；政府 10·28 提交反对意见。法院 10·30 第 29 项准许原告第 28 项动议所请求的最迟 11·04、不超过 15 页的回复，11·06 下午 3 时美东听证未变；这只是书面程序许可，未取得暂停指引的命令。",
    audience: '需要 CPT 实习授权的学生、学校与 DSO。',
    caveat:
      '选修课型的 CPT 和学位必需的实践，要分开核对。已经批下来的授权，以学校的明确通知为准。',
    reviewNote:
      "10·31 复核两份 ICE 广播、SEVP 列表、CPT 案卷及全部 73 条学校记录（69 条校方网页、4 条保存截图；72 所不同学校）。带条目网址可读至第 29 项，重读第 28 项动议全文：原告获准最迟 11·04 提交不超过 15 页回复，11·06 下午 3 时美东听证未变；未取得实际回复或暂停指引的命令。裸案卷及稍后重试为 202 空响应，不能确认更晚记录，镜像可能滞后。新增 Case Western 与 Nebraska–Omaha 公开记录，不外推已有授权失效；CMU、NYU Mathematics、Penn、Trine 等范围或文字冲突仍逐项披露。9 个直连受阻校方页经网页工具读取。论坛本次仅读到原帖，批量与尾部接口被拒，未确认后续社区消息；四份截图只支持历史消息，UNC 页面仍在修订，Caltech／GBC 通用说明不证明恢复。",
    background:
      "8 月 12 日的 Broadcast 强调学校和 DSO 的合规责任。8 月 24 日的问答进一步说明，“全员”也包括美国学生，并重申实习雇主和学校要有 cooperative agreement（合作协议）。\n四个高教协会在 10·05 提起 AAU v. DHS（1:26-cv-14520），挑战 8·12、8·24 广播对“integral”的解释及其执行，指控其违反 APA；这些法律主张属于原告意见，不是法院认定。同日申请初步禁令与行政行动暂缓，10·06 提交支持意见。该案与 D/S 全国暂缓案不同，D/S 命令不自动改变 CPT 指引。10·13 案卷第 19 项把初步禁令与行政行动暂缓申请的听证定在 11·06 下午 3 点（美东），由 Julia E. Kobick 法官主持；10·19 第 22 项电子命令把政府对起诉及初步禁令／暂缓申请的答复延至 10·28；截至 10·23 读取的公开摘要，未取得准许暂缓的命令。学校是否恢复须看之后的裁定及各校通知。\n10·28 政府提交第 27 项反对初步禁令及行政行动暂缓的意见（27 页），并附两份广播原文。政府主张原告缺乏诉讼资格、广播不是可审查的最终行政行动，只解释既有规定且不需公告评论，并否认存在不可弥补损害；这些是政府的诉讼主张，不是法院认定。同日第 26 项电子命令只准许超页提交，不处理暂缓请求的实体结果。11·06 听证安排未变，未取得暂停指引的命令。\n10·29 原告第 28 项申请请求最迟 11·04 提交不超过 15 页的回复，以回应政府关于诉讼资格、追溯适用、最终行政行动及法规文字的论点；政府对该程序请求不持立场。10·30 第 29 项电子命令准许第 28 项动议，要求正式递交获准文件并在标题标明获准日期。第 28-1 项只是原告附上的未签署拟议命令，不能替代法院第 29 项。准许提交书状不表示原告实体胜诉、指引被暂停或各校恢复 CPT。",
    teaser: '从“能否选一门实习课”，转向“实习是否属于学位必需环节”。',
    headline: '实习能否获批，越来越取决于学位本身的课程结构。',
    analysis:
      '新口径把 CPT 和“完成学位必需的实践”绑得更紧。靠选修实习课拿授权的做法压力最大。各校、各院系的培养要求不同，执行结果会明显分化。',
    impacts: [
      {
        title: '对学生：课程选择未必能解决授权问题',
        text: '再选一门实习课，可能还是不符合新口径。能不能批，主要看项目本身的毕业要求和学校怎么认定。',
        examples: [
          '小林找了个实习，想通过注册一门选修实习课来申请 CPT。但新规要求实习必须是这个专业所有学生都必修的毕业要求，光拿学分不够。如果小林的专业允许学生不实习也能毕业，那这门选修课就不符合条件，学校很可能没法给他批 CPT。',
        ],
      },
      {
        title: '对学校：课程文件与雇主协议更关键',
        text: '学校可能重新审项目手册、实习要求和合作协议。就算最后能批，材料核对也会拖慢申请节奏。',
        examples: [
          '小林找的实习已经满足专业必修要求了，但学校还没跟实习公司签合作协议。新规同时要求学校和雇主之间有这份协议，所以光满足课程要求还不够。要是协议签不下来，就算公司已经让他去上班，学校还是可能不批 CPT。',
          '小陈去年靠一门选修实习课成功批了 CPT，今年同一家公司又请他回去。但今年的新申请得按新规来审——实习必须是全体学生的必修要求。如果那门课还是选修课，去年的批准记录不能替代今年的课程要求。所以就算公司和岗位都没变，今年也可能批不下来。',
        ],
      },
      {
        title: '对实习招聘：同校不同项目也可能分化',
        text: '企业更难确定学生什么时候能入职。某个院系的通知，不能代表全校所有学生。',
        examples: [
          '你和室友在同一所大学，但你的专业规定实习是全体学生必须完成的，室友的专业只把实习当作选修课。按新规，学校得分别看两个专业的要求——你的情况可能过关，室友的不行。所以关键看专业怎么规定，跟是不是同一所学校没关系。',
        ],
      },
    ],
    outlook:
      '我们的预判：短期内会出现更多按项目下发的差异化通知。就算恢复，也更可能是针对符合条件的项目或授权类别，而不是所有选修实习一起恢复。',
    scenarios: [
      {
        name: '继续收紧',
        headline: '可选实习对应的授权空间继续缩小',
        assumption: '学校继续暂停或拒绝仅凭选修课程支持的 CPT。',
        effects: '有些实习要改开始日期；项目的课程结构会更早影响择校和求职。',
        signals: '学校新的暂停通知、项目手册解释和适用范围。',
      },
      {
        name: '部分项目恢复',
        headline: '符合要求的项目可能率先恢复办理',
        assumption: '学校完成审查，确认某些学位的实践环节符合要求。',
        effects:
          '结果会更依赖专业、项目和合作雇主。局部恢复不等于所有学生都恢复。',
        signals: '写明项目名称、授权类型、申请日期和协议要求的校方通知。',
      },
      {
        name: '联邦补充解释',
        headline: '执行差异可能收敛，也可能继续扩大',
        assumption: 'SEVP 发布新的问答或澄清文件。',
        effects:
          '标准更具体，学校可能调整操作；如果还有解释空间，项目之间的差异会继续。',
        signals: '新的 Broadcast 原文，以及学校是否同步更新。',
      },
    ],
    scope: [
      {
        label: '核心边界',
        text: '关注学位必须的实践环节，以及学校对全员要求的解释。',
      },
      {
        label: '已有授权',
        text: '已经拿到的 CPT I-20 会不会受影响，要看学校对存量授权的明确通知。',
      },
      {
        label: '证据颗粒度',
        text: '判断时要把学校、院系、项目、授权类型和生效日期分开看。',
      },
    ],
    milestones: [
      {
        "date": "2026-08-12",
        "text": "SEVP Broadcast 2608-01：已提出学位不可缺少、全员必需标准，并强调 DSO 与学校责任。"
      },
      {
        "date": "2026-08-12 后",
        "text": "多所高校暂停 Course Credit / optional CPT，或改为只批学位强制项目。"
      },
      {
        "date": "2026-08-24",
        "text": "Broadcast 2608-02：进一步解释选修课、全员适用与合作协议要求。"
      },
      {
        "date": "2026-10-05",
        "text": "四个高教协会提起 AAU v. DHS 并申请初步禁令及行政行动暂缓；不是法院已经暂缓。"
      },
      {
        "date": "2026-10-06",
        "text": "原告提交支持暂缓的法律意见，争议仍需法院处理。"
      },
      {
        "date": "2026-10-13",
        "text": "法院定于 11·06 就初步禁令与行政行动暂缓申请举行听证（案卷第 19 项）；这是排期，不是裁定。"
      },
      {
        "date": "2026-10-19",
        "text": "法院第 22 项电子命令准许政府延期至 10·28 答复起诉及初步禁令／暂缓申请。此命令只延长期限，不暂停两份 CPT 指引。"
      },
      {
        "date": "2026-10-28",
        "text": "政府提交第 27 项反对初步禁令及行政行动暂缓的意见，附两份广播；第 26 项命令仅准许超页提交，未裁定是否暂缓。11·06 听证安排未变。"
      },
      {
        "date": "2026-10-29",
        "text": "原告第 28 项动议请求最迟 11·04 提交不超过 15 页的回复；所附拟议命令不是法院命令。"
      },
      {
        "date": "2026-10-30",
        "text": "法院第 29 项电子命令准许第 28 项回复动议；这只是书状许可，11·06 听证未变，不暂停指引。"
      }
    ],
    next: [
      {
        "date": "2026-11-04",
        "text": "按法院第 29 项准许的第 28 项动议，原告最迟提交不超过 15 页的回复；须核实实际入卷，不是裁定或恢复日期。"
      },
      {
        "date": "2026-11-06",
        "text": "初步禁令与行政行动暂缓申请听证，美东下午 3 点；法院不一定当庭裁定，听证日也不是恢复日期。"
      },
      {
        "date": "日期未定",
        "text": "各校按课程及后续官方文件核对资格；诉讼本身不替代 DSO 批准。"
      }
    ],
    process: {
      "detail": "SEVP 先发布合规风险通知，再细化 CPT 口径；学校和 DSO 已开始按新口径执行。",
      "currentSummary": "原告获准 11·04 前提交回复；11·06 听证",
      "waitingFor": "按获准第 28 项动议，原告最迟 11·04 提交不超过 15 页的回复；11·06 下午 3 时美东听证及之后裁定。须核实回复实际入卷和校方通知，程序许可不恢复 CPT。"
    },
  },
  en: {
    title:
      'Tighter CPT Guidance: An Elective Internship Course Is No Longer Enough',
    short: 'August 12 / 24 CPT Guidance',
    status: "Guidance in use · Plaintiffs may file reply; hearing November 6",
    effectLabel: 'Guidance in use · Check school and program',
    agency: 'ICE / SEVP',
    documentId: 'Broadcast 2608-01 / 02',
    tldr: "ICE/SEVP limits CPT to training necessary for degree completion and required of every student in the program; an elective internship course is generally insufficient, and an employer-school cooperative agreement is required. On October 30, the court granted plaintiffs’ motion to file a reply of up to 15 pages by November 4. The November 6 hearing remains scheduled; permission to brief does not stay the guidance.",
    tags: ['CPT', 'Day-1 CPT', 'Internships'],
    summary:
      "SEVP requires CPT training to be necessary for every student’s degree completion, with an employer-school cooperative agreement. Four associations sought preliminary relief and a stay; the government opposed that request October 28. On October 30, order 29 granted motion 28 requesting a reply of no more than 15 pages by November 4. The November 6 hearing at 3 p.m. ET is unchanged. This is briefing permission, and no order staying the guidance was obtained.",
    audience: 'students seeking CPT authorization, their schools and DSOs.',
    caveat:
      'Distinguish elective-course CPT from required degree practice; check explicit school notices for existing authorizations.',
    reviewNote:
      "On October 31, both ICE broadcasts, the SEVP list, CPT docket and all 73 school records were reviewed (69 public university pages and four saved screenshots; 72 distinct institutions). An entry-linked URL reached order 29, and motion 28 was reread: plaintiffs may file up to 15 reply pages by November 4, with the November 6 hearing at 3 p.m. ET unchanged. No actual reply or order staying guidance was obtained. Bare-docket and later retries returned empty 202 responses, leaving later records unverified; mirrors may lag. Public Case Western and Nebraska–Omaha records were added without treating existing approvals as invalid. CMU, NYU Mathematics, Penn and Trine scope/text conflicts remain disclosed individually. Nine directly blocked school pages were read through web retrieval. This run read only the forum opener; bulk/tail endpoints were blocked, leaving later reports unverified. Screenshots support historical messages; UNC’s page remains under revision and generic Caltech/GBC instructions do not establish reopening.",
    background:
      "The August 12 Broadcast emphasized school and DSO compliance duties. The August 24 FAQ clarified that all students includes U.S. students and reiterated the employer-school cooperative agreement requirement.\nOn October 5, four associations filed AAU v. DHS (1:26-cv-14520), challenging the August 12/24 interpretation and enforcement as violating the APA. These are plaintiffs’ allegations, not judicial findings. They requested a preliminary injunction and stay the same day and filed supporting argument October 6. This is a separate case from the nationwide D/S relief, which does not automatically change CPT guidance. On October 13, entry 19 set the preliminary-injunction and stay motion for a hearing on November 6 at 3 p.m. ET before District Judge Julia E. Kobick; October 19 electronic order 22 extends the government’s response to the complaint and relief motion to October 28. No order granting relief was obtained from the public feed read October 23. Reopening depends on later rulings and school notices.\nOn October 28, the government filed its 27-page opposition to the preliminary-injunction and stay motion (entry 27), attaching both broadcasts. It argues that plaintiffs lack standing, the broadcasts are not reviewable final agency action, merely interpret existing requirements without requiring notice and comment, and cause no irreparable harm. These are government arguments, not judicial findings. Electronic order 26 that day only permits excess pages and does not decide the merits of relief. The November 6 hearing remains scheduled, and no order staying the guidance was obtained.\nPlaintiffs’ October 29 motion 28 requests a reply of no more than 15 pages by November 4 to address government standing, retroactivity, final-agency-action and regulatory-text arguments; the government takes no position on this procedural request. Electronic order 29 on October 30 grants motion 28, directing counsel to file the authorized document with the permission date in its caption. Entry 28-1 is only an unsigned proposed order attached by plaintiffs, not a substitute for court order 29. Permission to brief is not a merits victory, a stay of guidance or a campus reopening.",
    teaser:
      'The question shifts from whether a student can take an internship course to whether the internship is required by the degree.',
    headline:
      'Internship approval increasingly depends on the degree program’s own curriculum.',
    analysis:
      'The new interpretation ties CPT more closely to practical training required to complete the degree. Arrangements supported by an elective internship course face greater pressure, while differences in school and department requirements will produce divergent outcomes.',
    impacts: [
      {
        title: 'For students: course selection may not resolve authorization',
        text: 'Adding an elective internship course may not satisfy the new interpretation. Approval depends more on formal graduation requirements and the school’s determination.',
        examples: [
          'Lin plans to obtain CPT by enrolling in an elective internship course. The new interpretation requires training needed by every student to complete the degree, not merely an opportunity to earn credit. If students can graduate without it, the elective does not meet that requirement and the school may not authorize CPT on that basis.',
        ],
      },
      {
        title:
          'For schools: curriculum documents and employer agreements matter more',
        text: 'Schools may reexamine program handbooks, internship requirements, and cooperation agreements. Even when approval remains available, document review may affect timing.',
        examples: [
          'Lin’s internship meets the degree requirement, but the school has not signed a cooperation agreement with the employer. The guidance also requires that agreement, so the academic requirement alone is insufficient. An employer’s invitation cannot replace CPT authorization when the agreement requirement remains unmet.',
          'Chen obtained CPT through an elective last year and receives a return offer from the same employer. A new request reviewed under the all-student degree requirement cannot rely on last year’s approval if the course remains optional. The employer and job may be unchanged, but a new CPT authorization could still be unavailable.',
        ],
      },
      {
        title: 'For internship hiring: outcomes may differ within one school',
        text: 'Employers may face less predictable start dates and student availability. A notice from one department cannot represent every student at the school.',
        examples: [
          'You and a roommate attend the same university, but your degree requires an internship for everyone while the roommate’s offers it only as an elective. The new interpretation requires separate checks of those curricula. Your internship may meet that condition while the roommate’s does not; the distinction is the degree requirement, not the university name.',
        ],
      },
    ],
    outlook:
      'Our outlook: more program-specific notices will appear in the near term. Any resumption of processing is also more likely to cover qualifying programs or authorization categories than every elective internship.',
    scenarios: [
      {
        name: 'Further tightening',
        headline: 'Less room to authorize optional internships',
        assumption:
          'Schools continue pausing or denying CPT supported only by elective coursework.',
        effects:
          'Some internships may need new start dates or arrangements. Program curriculum could affect school and job choices earlier.',
        signals:
          'New school suspension notices, program-handbook explanations, and their precise scope.',
      },
      {
        name: 'Some programs resume',
        headline: 'Programs that meet the standard may resume first',
        assumption:
          'Schools complete review and confirm that practical training in certain degrees meets the requirements.',
        effects:
          'Results would depend more on the major, program, and partner-employer conditions. A limited resumption does not mean every student is covered.',
        signals:
          'School notices identifying the program, authorization type, application date, and agreement requirements.',
      },
      {
        name: 'Further federal explanation',
        headline: 'Implementation differences may narrow or widen',
        assumption:
          'SEVP publishes new questions and answers or clarifying material.',
        effects:
          'More specific standards may prompt schools to revise operations. If interpretive room remains, program-level differences may continue.',
        signals:
          'The text of any new Broadcast and whether schools update their guidance in response.',
      },
    ],
    scope: [
      {
        label: 'Core boundary',
        text: 'Focus on practical training required by the degree and the school’s interpretation of requirements for all students.',
      },
      {
        label: 'Existing authorization',
        text: 'Whether a previously issued CPT I-20 is affected depends on an explicit school notice addressing existing authorizations.',
      },
      {
        label: 'Evidence detail',
        text: 'Preserve the school, department, program, authorization type, and effective date.',
      },
    ],
    milestones: [
      {
        "date": "2026-08-12",
        "text": "SEVP Broadcast 2608-01 already required training indispensable to the degree and required for every student, and emphasized DSO and school duties."
      },
      {
        "date": "After 2026-08-12",
        "text": "Several universities paused course-credit or optional CPT, or limited approval to programs with a mandatory degree requirement."
      },
      {
        "date": "2026-08-24",
        "text": "Broadcast 2608-02 further explained elective courses, the all-student standard, and cooperative agreements."
      },
      {
        "date": "2026-10-05",
        "text": "Four associations filed AAU v. DHS and requested a preliminary injunction and stay of agency action; this is not a court-granted stay."
      },
      {
        "date": "2026-10-06",
        "text": "Plaintiffs filed a memorandum supporting relief; the dispute remains for the court to address."
      },
      {
        "date": "2026-10-13",
        "text": "The court set the preliminary-injunction and stay motion for a hearing on November 6 (entry 19); this is a schedule, not a ruling."
      },
      {
        "date": "2026-10-19",
        "text": "Electronic order 22 grants an extension to October 28 for the government to respond to the complaint and preliminary-injunction/stay motion. It extends a filing deadline without staying either CPT guidance document."
      },
      {
        "date": "2026-10-28",
        "text": "The government filed its opposition to the preliminary-injunction and stay motion (entry 27), attaching both broadcasts. Order 26 only permits excess pages without deciding relief. The November 6 hearing remains scheduled."
      },
      {
        "date": "2026-10-29",
        "text": "Plaintiffs’ motion 28 requests a reply of up to 15 pages by November 4; its proposed-order exhibit is not a court order."
      },
      {
        "date": "2026-10-30",
        "text": "Electronic order 29 grants reply motion 28. This is briefing permission; the November 6 hearing is unchanged and the guidance is not stayed."
      }
    ],
    next: [
      {
        "date": "2026-11-04",
        "text": "Under motion 28 granted by order 29, plaintiffs may file a reply of up to 15 pages by this date. Verify actual filing; this is not a ruling or reopening date."
      },
      {
        "date": "2026-11-06",
        "text": "Hearing on the preliminary-injunction and stay motion at 3 p.m. ET; the court may not rule from the bench, and the hearing date is not a reopening date."
      },
      {
        "date": "Date unknown",
        "text": "Schools assess curricula and later official records; litigation alone does not replace DSO authorization."
      }
    ],
    process: {
      "detail": "SEVP first issued a compliance-risk notice and then narrowed the CPT standard. Schools and DSOs are already applying that interpretation.",
      "currentSummary": "Reply permitted by November 4; hearing November 6",
      "waitingFor": "Under granted motion 28, plaintiffs may file a reply of up to 15 pages by November 4; the November 6 hearing at 3 p.m. ET and later ruling follow. Verify actual filing and campus notices; briefing permission does not restore CPT."
    },
  },
};
