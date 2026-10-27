import type { PolicyContent } from '../policy-types.ts';

export const cptGuidance: PolicyContent = {
  id: 'cpt-guidance',
  path: 'CPT',
  tone: 'red',
  effectState: 'guidance-in-use',
  checkedOn: "2026-10-27",
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
    }
  ],
  zh: {
    title: 'CPT 指引收紧：选修实习课不再够用',
    short: '8·12 / 8·24 CPT 指引',
    status: "学校按新口径执行 · 暂缓申请 11·06 听证",
    effectLabel: '指引已执行 · 按学校与项目核对',
    agency: 'ICE / SEVP',
    documentId: 'Broadcast 2608-01 / 02',
    tldr: "ICE/SEVP 要求学校只批准“完成学位必需、且该项目所有学生都要做”的实习作为 CPT。只注册一门选修实习课通常不够，实习雇主还必须和学校签有 cooperative agreement（合作协议）。 四个高教协会已起诉并请求暂缓这两份指引，法院定于 11·06 听证；起诉和听证本身都不恢复选修 CPT。",
    tags: ['CPT', 'Day-1 CPT', '实习'],
    summary:
      "SEVP 要求 CPT 实习是该专业所有学生毕业的必修环节，而且雇主和学校之间要有合作协议。只注册一门选修实习课，通常拿不到 CPT 授权。四个高教协会已在麻省联邦法院起诉并申请暂缓。10·19 命令将政府对起诉及暂缓申请的答复期限延至 10·28，11·06 听证安排未变；延期不是暂停执行指引。",
    audience: '需要 CPT 实习授权的学生、学校与 DSO。',
    caveat:
      '选修课型的 CPT 和学位必需的实践，要分开核对。已经批下来的授权，以学校的明确通知为准。',
    reviewNote:
      "10·27 通过公开替代读取复核两份 ICE 广播及 SEVP 清单，并读取 CPT 案记录、全部 66 条学校记录（62 条校方网页、4 条保存截图；65 所不同学校）。新增 Wyoming 10·26 通知：仍接受收紧标准下的 CPT 请求，机会减少，未宣布全面停批或无条件恢复。最新可读第 24 项仍仅涉律师退出代理，第 22 项列政府答复 10·28，11·06 下午 3 点听证；未核实后续暂缓命令。部分校方原页经网页或公开替代读取取得。CMU 博士口径冲突、NYU 数学系审批缺口、UPenn 同页冲突及 Trine 一年期旧说明仍逐项披露。论坛开帖可读，最新回复接口被拒。保存截图仅确认当时内容，不确认当前政策；UNC 公开页仍在修订，Caltech 一般 CPT 说明没有确认截图暂停是否解除。",
    background:
      "8 月 12 日的 Broadcast 强调学校和 DSO 的合规责任。8 月 24 日的问答进一步说明，“全员”也包括美国学生，并重申实习雇主和学校要有 cooperative agreement（合作协议）。\n四个高教协会在 10·05 提起 AAU v. DHS（1:26-cv-14520），挑战 8·12、8·24 广播对“integral”的解释及其执行，指控其违反 APA；这些法律主张属于原告意见，不是法院认定。同日申请初步禁令与行政行动暂缓，10·06 提交支持意见。该案与 D/S 全国暂缓案不同，D/S 命令不自动改变 CPT 指引。10·13 案卷第 19 项把初步禁令与行政行动暂缓申请的听证定在 11·06 下午 3 点（美东），由 Julia E. Kobick 法官主持；10·19 第 22 项电子命令把政府对起诉及初步禁令／暂缓申请的答复延至 10·28；截至 10·23 读取的公开摘要，未取得准许暂缓的命令。学校是否恢复须看之后的裁定及各校通知。",
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
      }
    ],
    next: [
      {
        "date": "2026-10-28",
        "text": "政府答复起诉及初步禁令／暂缓申请的延长期限；不是裁定日或恢复日期。"
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
      "currentSummary": "政府答复延至 10·28，暂缓申请 11·06 听证",
      "waitingFor": "10·28 政府答复、11·06 听证及之后的裁定，以及学校明确的资格和恢复通知；截至 10·23 读取的公开摘要，未取得准许暂缓的命令。"
    },
  },
  en: {
    title:
      'Tighter CPT Guidance: An Elective Internship Course Is No Longer Enough',
    short: 'August 12 / 24 CPT Guidance',
    status: "Schools apply new guidance · Relief hearing November 6",
    effectLabel: 'Guidance in use · Check school and program',
    agency: 'ICE / SEVP',
    documentId: 'Broadcast 2608-01 / 02',
    tldr: "ICE/SEVP says schools should authorize CPT only when the training is necessary to complete the degree and is a graduation requirement for every student in the program. Registering for an optional internship course is generally not enough, and the employer must have a cooperative agreement with the school. Four higher-education associations sued and requested a stay, with a hearing set for November 6; neither the suit nor the hearing restores elective CPT.",
    tags: ['CPT', 'Day-1 CPT', 'Internships'],
    summary:
      "SEVP requires CPT training to be mandatory for every student in the program to complete the degree, with an employer-school cooperative agreement. Enrollment in an elective internship course alone generally does not qualify. Four higher-education associations sued in Massachusetts and requested relief. An October 19 order extends the government’s response to the complaint and relief motion to October 28; the November 6 hearing remains scheduled. The extension does not stay the guidance.",
    audience: 'students seeking CPT authorization, their schools and DSOs.',
    caveat:
      'Distinguish elective-course CPT from required degree practice; check explicit school notices for existing authorizations.',
    reviewNote:
      "On October 27, public alternative retrieval supplied both ICE broadcasts and the SEVP list; the CPT docket and all 66 school records were reviewed (62 public university pages and four saved screenshots; 65 distinct institutions). Wyoming’s October 26 notice was added: requests under narrowed standards continue, with fewer opportunities, without a blanket halt or unrestricted reopening. The latest readable entry 24 concerns counsel withdrawal only; order 22 sets the response for October 28 and hearing for November 6 at 3 p.m. ET. No later stay was verified. Some university originals required web or public alternative retrieval. CMU doctoral conflicts, the NYU Mathematics processing gap, conflicting Penn text and Trine’s retained one-year language remain disclosed individually. Forum opening posts were readable but latest-reply endpoints were blocked. Saved screenshots support historical messages only; UNC’s public page remains under revision, and Caltech’s general CPT instructions do not establish that the screenshot pause was lifted.",
    background:
      "The August 12 Broadcast emphasized school and DSO compliance duties. The August 24 FAQ clarified that all students includes U.S. students and reiterated the employer-school cooperative agreement requirement.\nOn October 5, four associations filed AAU v. DHS (1:26-cv-14520), challenging the August 12/24 interpretation and enforcement as violating the APA. These are plaintiffs’ allegations, not judicial findings. They requested a preliminary injunction and stay the same day and filed supporting argument October 6. This is a separate case from the nationwide D/S relief, which does not automatically change CPT guidance. On October 13, entry 19 set the preliminary-injunction and stay motion for a hearing on November 6 at 3 p.m. ET before District Judge Julia E. Kobick; October 19 electronic order 22 extends the government’s response to the complaint and relief motion to October 28. No order granting relief was obtained from the public feed read October 23. Reopening depends on later rulings and school notices.",
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
      }
    ],
    next: [
      {
        "date": "2026-10-28",
        "text": "Extended deadline for the government’s response to the complaint and preliminary-injunction/stay motion; not a ruling or reopening date."
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
      "currentSummary": "Government response extended to October 28; relief hearing November 6",
      "waitingFor": "The October 28 government response, November 6 hearing and later ruling, plus explicit school eligibility/reopening notices; no order granting relief was obtained from the public feed read October 23."
    },
  },
};
