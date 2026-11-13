import type { PolicyContent } from '../policy-types.ts';

export const cptGuidance: PolicyContent = {
  id: 'cpt-guidance',
  path: 'CPT',
  tone: 'red',
  effectState: 'guidance-in-use',
  checkedOn: "2026-11-11",
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
        "zh": "起诉，请求暂停指引",
        "en": "Lawsuit; pause requested",
        "afterStage": 2,
        "progress": 65,
        "status": "filed",
        "align": "left",
        "lane": "base"
      },
      {
        "date": "10·28",
        "zh": "政府反对",
        "en": "Government opposes",
        "afterStage": 2,
        "progress": 75,
        "status": "filed",
        "align": "left",
        "lane": "raised"
      },
      {
        "date": "10·30",
        "zh": "原告获准回应",
        "en": "Reply allowed",
        "afterStage": 2,
        "progress": 80,
        "status": "filed",
        "align": "left",
        "lane": "base"
      },
      {
        "date": "11·04",
        "zh": "原告提交回应",
        "en": "Plaintiffs replied",
        "afterStage": 2,
        "progress": 83,
        "status": "filed",
        "align": "right",
        "lane": "base"
      },
      {
        "date": "11·06",
        "zh": "已听证，等待裁定",
        "en": "Hearing held; ruling pending",
        "afterStage": 2,
        "progress": 85,
        "status": "filed",
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
      "zh": "CMU OIE · 现行 CPT 要求和申请步骤",
      "en": "CMU OIE · Current CPT requirements and application steps"
    },
    {
      "href": "https://www.csd.cs.cmu.edu/academics/doctoral-resources/applying-for-cpt-or-opt",
      "zh": "CMU CSD · 博士 CPT 页面",
      "en": "CMU CSD · Doctoral CPT page"
    },
    {
      "href": "https://www.nafsa.org/sites/default/files/media/document/CPT%20Complaint%20AAU%20v.%20DHS%20.pdf",
      "zh": "AAU v. DHS · 10·05 起诉状",
      "en": "AAU v. DHS · October 5 complaint"
    },
    {
      "href": "https://www.aau.edu/uploads/files/general/Motion-for-Preliminary-Injunction-and-Stay-of-Agency-Action-CPT-Case.pdf",
      "zh": "原告 10·05 请求暂停指引的申请",
      "en": "Plaintiffs’ October 5 motion to pause the guidance"
    },
    {
      "href": "https://www.courtlistener.com/docket/74919449/association-of-american-universities-v-us-department-of-homeland/",
      "zh": "AAU v. DHS 地区法院案卷",
      "en": "AAU v. DHS district docket"
    },
    {
      "href": "https://www.cmu.edu/oie/news-and-events/2026-2027/october/cpt-lawsuit.html",
      "zh": "CMU OIE · 10·08 CPT 诉讼通知",
      "en": "CMU OIE · October 8 CPT litigation notice"
    },
    {
      "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.307243/gov.uscourts.mad.307243.27.0.pdf",
      "zh": "政府 10·28 反对意见（第 27 项）",
      "en": "Government October 28 opposition (entry 27)"
    },
    {
      "href": "https://www.courtlistener.com/docket/74919449/association-of-american-universities-v-us-department-of-homeland/?order_by=desc#entry-29",
      "zh": "法院 10·30 命令（第 29 项）· 允许原告回应",
      "en": "Court October 30 order (entry 29) · Reply allowed"
    },
    {
      "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.307243/gov.uscourts.mad.307243.32.0.pdf",
      "zh": "原告 11·04 回应 · 第 32 项",
      "en": "Plaintiffs’ November 4 reply · entry 32"
    },
    {
      "href": "https://www.courtlistener.com/docket/74919449/association-of-american-universities-v-us-department-of-homeland/?order_by=desc#entry-31",
      "zh": "法院 11·04 电话旁听命令 · 第 31 项",
      "en": "Court’s November 4 telephone-access order · entry 31"
    },
    {
      "href": "https://www.courtlistener.com/docket/74919449/association-of-american-universities-v-us-department-of-homeland/?order_by=desc#entry-33",
      "zh": "法院 11·06 庭审记录 · 第 33 项",
      "en": "Court’s November 6 hearing notes · entry 33"
    },
  ],
  zh: {
    title: 'CPT 指引收紧：选修实习课不再够用',
    short: '8·12 / 8·24 CPT 指引',
    status: "指引执行中 · 11·06 已听证，等待裁定",
    effectLabel: '正在执行 · 各校做法不同',
    agency: 'ICE / SEVP',
    documentId: 'Broadcast 2608-01 / 02',
    tldr: "ICE/SEVP 8 月给学校发了两份通知，收紧 CPT 标准：只有“这个专业所有学生毕业都必须做”的实习才能批 CPT，选修一门实习课通常不够，雇主还要和学校签合作协议。很多学校已经按新标准暂停或收紧 CPT。四个高校协会起诉，并在 11·04 回应政府，要求法院先暂停这份指引。法官 11·06 已听取双方意见，稍后决定是否暂停指引。法院裁定之前，指引照常执行。",
    tags: ['CPT', 'Day-1 CPT', '实习'],
    summary:
      "SEVP 是 ICE 下面管国际学生和学校的部门。它 8 月发给学校的两份通知（Broadcast）要求：CPT 实习必须是这个专业所有学生毕业都要完成的环节，而且雇主要和学校签合作协议。很多学校因此暂停了“选一门实习课就批 CPT”的做法。四个高校协会起诉，请法院在判决前先暂停这份指引；政府 10·28 提交反对意见。原告 11·04 提交回应，主张指引改变了长期允许选修实习计学分的做法，应先征求公众意见。法官 11·06 已听取双方意见，稍后决定是否暂停指引。法院裁定之前，指引照常执行。",
    audience: "要申请 CPT 的学生（包括打算读 Day 1 CPT 项目的人），以及学校和负责批 CPT 的 DSO。",
    caveat:
      "选修课型 CPT 和学位必修的实习要分开看。已经批下来的 CPT 怎么处理，以你学校的通知为准。",
    background:
      "CPT 是 F-1 学生在读期间，因为课程需要去校外实习或工作的许可。它不经过移民局，由学校的 DSO 审批，批下来后写在你的 I-20 上（CPT I-20）。联邦法规的要求是：CPT 必须是学校既定课程“不可分割的一部分”（integral part of an established curriculum）。\n8 月 12 日的 Broadcast 2608-01 强调学校和 DSO 要对 CPT 审批负责，并把“不可分割”解释为学位必须、所有学生都要做。8 月 24 日的问答（Broadcast 2608-02）进一步说明：“所有学生”也包括美国学生；雇主和学校之间要有合作协议（cooperative agreement），把实习和课程联系起来。\n10 月 5 日，美国大学协会（AAU）等四个高校协会起诉 DHS（AAU v. DHS，案号 1:26-cv-14520）。他们认为，这两份通知对“integral”的解释和执行方式违反《行政程序法》（APA）：实际上改了 CPT 的规则，却没有先公开征求意见。他们请法院在判决前先暂停这份指引。听证于 11 月 6 日美东下午 3 点举行，由 Julia E. Kobick 法官主持。这个案子和 D/S 案分开审理，D/S 案的全国暂缓只管 D/S 规则。\n10 月 28 日政府提交了 27 页的反对意见，理由有三条：一是原告没有起诉资格，也就是协会本身没有受到足够具体的伤害；二是这两份通知只是解释现有规定、不是新规，所以不需要先征求公众意见，法院也不能审查；三是学生没有受到“无法弥补的损害”，而这是法院在判决前暂停一项政策的前提条件之一。10 月 30 日，法院允许原告在 11 月 4 日前交一份不超过 15 页的回应。\n11 月 4 日，原告提交回应。他们主张，过去的法规和长期做法允许选修实习计学分后申请 CPT，两份通知实际改变了这个标准，应该先征求公众意见。他们还说，学生已经失去实习机会，学校和 DSO 也面临处罚压力，请法院在案件审理期间暂停两份通知，并禁止政府按新的解释执行。法院同日允许公众通过电话旁听 11 月 6 日的听证。\n11 月 6 日，法官听取双方关于是否先暂停指引的辩论，决定稍后再裁定。学校继续按现行指引处理 CPT。",
    teaser: "关键不再是能不能选一门实习课，而是你的专业是否要求所有人都实习。",
    headline: "实习能不能批，越来越看你的专业课程怎么规定。",
    analysis:
      "新标准把 CPT 和“学位必须的实习”绑在一起，靠选修一门实习课拿 CPT 的路基本被堵住了。各校、各院系的课程要求不同，结果会差别很大：同一所大学，有的专业所有人都要实习，可以照常批；有的专业实习是选修，就可能批不了。读 Day 1 CPT 项目的同学尤其要看学校最新通知。",
    impacts: [
      {
        "title": "对学生：多选一门实习课解决不了",
        "text": "再选一门实习课，通常还是不符合新标准。能不能批，主要看专业的毕业要求和学校怎么认定。",
        "examples": [
          "小林找到实习，想注册一门选修实习课来申请 CPT。新标准要求实习必须是这个专业所有学生毕业都要完成的，光拿学分不够。如果他的专业不实习也能毕业，这门选修课就不算数，学校很可能批不了。"
        ]
      },
      {
        "title": "对学校：课程规定和雇主协议更关键",
        "text": "学校可能重新审查项目手册、实习要求和合作协议。就算最后能批，审材料也会让申请变慢。",
        "examples": [
          "小林的实习已经符合专业必修要求，但学校还没和实习公司签合作协议。新标准两样都要；缺了协议，就算公司已经让他上班，学校也可能不批。",
          "小陈去年靠一门选修实习课批了 CPT，今年同一家公司又请他回去。今年要按新标准审：实习必须是所有学生的必修要求。如果那门课还是选修，今年就可能批不下来，公司和岗位没变也一样。"
        ]
      },
      {
        "title": "对实习招聘：同一所学校，不同专业结果不同",
        "text": "企业更难确定实习生什么时候能入职。某个院系的通知只适用于这个院系。",
        "examples": [
          "你和室友在同一所大学，你的专业要求所有人都实习，室友的专业把实习当选修。按新标准，你的可能批，室友的不行。看的是专业怎么规定，不是学校名字。"
        ]
      }
    ],
    outlook:
      "我们的判断：近期会有更多学校按专业发通知。11·06 听证后，如果法院暂停指引，学校可能逐步恢复原来的做法；如果法院不暂停，恢复也会是符合条件的专业先恢复，而不是所有选修实习一起恢复。",
    scenarios: [
      {
        name: '继续收紧',
        headline: '选修实习更难批',
        assumption: '学校继续暂停或拒绝只靠选修课的 CPT。',
        effects: '有些实习要推迟开始；选学校、找工作时更要先看专业的课程规定。',
        signals: '学校新的暂停通知和项目手册说明。',
      },
      {
        name: '部分项目恢复',
        headline: '符合要求的专业先恢复',
        assumption: '学校审完课程，确认部分专业的实习符合要求。',
        effects:
          '能不能批看专业、项目和合作雇主；恢复只限这些专业。',
        signals: '写明专业名称、CPT 类型、申请日期和协议要求的学校通知。',
      },
      {
        name: 'SEVP 再发解释',
        headline: '各校做法可能统一，也可能更乱',
        assumption: 'SEVP 发布新的问答或说明。',
        effects:
          '标准写得更具体，学校会跟着调整；如果还留解释空间，各专业的差别会继续存在。',
        signals: '新的 Broadcast 原文，以及学校有没有跟着更新。',
      },
    ],
    scope: [
      {
        "label": "关键标准",
        "text": "实习是不是学位必须的环节，以及学校怎么理解“所有学生都要做”。"
      },
      {
        "label": "已有授权",
        "text": "已经拿到的 CPT I-20 怎么处理，看学校针对已批 CPT 发的通知。"
      },
      {
        "label": "看清范围",
        "text": "读学校通知时，分清是哪个学校、院系、项目、哪类 CPT、从哪天开始。"
      }
    ],
    milestones: [
      {
        "date": "2026-08-12",
        "text": "SEVP Broadcast 2608-01：要求 CPT 是学位不可缺少、所有学生都必须做的实习，并强调 DSO 和学校的责任。"
      },
      {
        "date": "2026-08-12 后",
        "text": "多所学校暂停选修课型 CPT（Course Credit / optional），或只批学位必修的实习。"
      },
      {
        "date": "2026-08-24",
        "text": "Broadcast 2608-02：进一步解释选修课、“所有学生”和合作协议的要求。"
      },
      {
        "date": "2026-10-05",
        "text": "四个高校协会起诉（AAU v. DHS），请法院暂停这份指引。"
      },
      {
        "date": "2026-10-06",
        "text": "原告提交请求暂停的理由。"
      },
      {
        "date": "2026-10-13",
        "text": "法院定于 11·06 开庭听证。"
      },
      {
        "date": "2026-10-19",
        "text": "法院准许政府延期到 10·28 答复。"
      },
      {
        "date": "2026-10-28",
        "text": "政府提交反对意见，认为原告没有起诉资格、通知不能被法院审查。"
      },
      {
        "date": "2026-10-29",
        "text": "原告申请在 11·04 前提交回应。"
      },
      {
        "date": "2026-10-30",
        "text": "法院同意原告提交回应。"
      },
      {
        "date": "2026-11-04",
        "text": "原告提交回应，请求法院暂停两份通知并禁止按新的解释执行；法院准许公众登记后电话旁听 11·06 听证。"
      },
      {
        "date": "2026-11-06",
        "text": "法官听取双方关于是否暂停指引的意见，决定稍后裁定。"
      }
    ],
    next: [
      {
        "date": "日期未定",
        "text": "法院决定是否在案件审理期间暂停两份 CPT 通知。"
      },
      {
        "date": "日期未定",
        "text": "法院裁定后，各校按裁定和课程要求调整 CPT 审批。"
      }
    ],
    process: {
      "detail": "SEVP 先提醒学校注意合规，再收紧 CPT 标准；学校和 DSO 已经按新标准审批。",
      "currentSummary": "指引执行中；11·06 已听证，等待法院裁定",
      "waitingFor": "法院对暂停指引请求的裁定。"
    },
  },
  en: {
    title:
      'Tighter CPT Guidance: An Elective Internship Course Is No Longer Enough',
    short: 'August 12 / 24 CPT Guidance',
    status: "Guidance in use · November 6 hearing held; ruling pending",
    effectLabel: 'In use · Varies by school',
    agency: 'ICE / SEVP',
    documentId: 'Broadcast 2608-01 / 02',
    tldr: "In August, ICE/SEVP sent schools two notices tightening CPT: CPT can be approved only for an internship every student in the program must complete to graduate, an elective internship course usually does not count, and the employer must sign a cooperative agreement with the school. Many schools have paused or narrowed CPT as a result. Four higher-education associations sued to pause the guidance and replied to the government on November 4. The judge heard both sides on November 6 and will decide later whether to pause the guidance. Until the court rules, the guidance applies.",
    tags: ['CPT', 'Day-1 CPT', 'Internships'],
    summary:
      "SEVP is the part of ICE that oversees international students and schools. Its two August notices to schools (Broadcasts) require CPT training to be something every student in the program must complete to graduate, with a cooperative agreement between the employer and the school. Many schools have stopped approving CPT just because a student enrolls in an internship course. Four higher-education associations asked the court to pause the guidance before a final ruling; the government opposed on October 28. Plaintiffs replied on November 4, arguing that the notices changed the longstanding practice of allowing elective internships for credit and required public comment. The judge heard both sides on November 6 and will decide later whether to pause the guidance. Until the court rules, the guidance applies.",
    audience: "Students seeking CPT (including anyone planning a Day 1 CPT program), their schools and the DSOs who approve CPT.",
    caveat:
      "Elective-course CPT and degree-required internships are treated differently. For CPT you already have, follow your school’s notice.",
    background:
      "CPT is permission for F-1 students to work or intern off campus during their studies because their curriculum calls for it. It does not go through USCIS: your school’s DSO approves it and records it on your I-20 (a CPT I-20). The federal regulation says CPT must be an “integral part of an established curriculum.”\nThe August 12 Broadcast 2608-01 stressed that schools and DSOs are responsible for CPT approvals and read “integral” as required for the degree and done by every student. The August 24 FAQ (Broadcast 2608-02) added that “all students” includes U.S. students, and that the employer and school need a cooperative agreement tying the internship to the curriculum.\nOn October 5, the Association of American Universities (AAU) and three other higher-education associations sued DHS (AAU v. DHS, No. 1:26-cv-14520). They argue that the notices’ reading of “integral” and how it is enforced violate the Administrative Procedure Act (APA): the notices effectively changed the CPT rules without first taking public comment. They asked the court to pause the guidance until it rules. The hearing took place on November 6 at 3 p.m. ET before Judge Julia E. Kobick. This case is separate from the D/S case; the nationwide stay there covers only the D/S rule.\nOn October 28 the government filed a 27-page opposition with three arguments: first, the plaintiffs lack standing, meaning the associations themselves have not suffered a concrete enough injury to sue; second, the notices only explain existing rules rather than create new ones, so no public comment was needed and a court cannot review them; third, students suffer no “irreparable harm,” which is one of the conditions for a court to pause a policy before ruling. On October 30 the court let plaintiffs file a reply of up to 15 pages by November 4.\nOn November 4, plaintiffs filed their reply. They argue that the regulation and longstanding practice allowed elective internships for academic credit to qualify for CPT, and that the notices changed that standard and required public comment. They also describe students already losing internships and schools and DSOs facing threats of penalties. They ask the court to pause the notices during the case and bar enforcement of the new interpretation. The court also allowed public telephone access to the November 6 hearing.\nOn November 6, the judge heard both sides on whether to pause the guidance and decided to rule later. Schools continue to process CPT under the current guidance.",
    teaser:
      "What matters now is not whether you can take an internship course, but whether your program requires everyone to do one.",
    headline:
      "Whether your internship is approved now depends on how your program’s curriculum is written.",
    analysis:
      "The new standard ties CPT to internships the degree requires, which largely closes off CPT through an elective internship course. Because schools and departments write their curricula differently, outcomes vary widely: at the same university, a program that requires everyone to intern may keep approving CPT, while one where the internship is elective may not. Students in Day 1 CPT programs should watch their school’s latest notices closely.",
    impacts: [
      {
        "title": "For students: adding an internship course won’t fix it",
        "text": "An extra internship course usually still won’t meet the new standard. Approval depends on your program’s graduation requirements and how your school reads them.",
        "examples": [
          "Lin wants CPT by enrolling in an elective internship course. The new standard requires an internship every student in the program must complete to graduate; earning credit is not enough. If students in his program can graduate without one, the elective doesn’t count and the school likely cannot approve CPT."
        ]
      },
      {
        "title": "For schools: curriculum rules and employer agreements matter more",
        "text": "Schools may re-review program handbooks, internship requirements and cooperative agreements. Even when CPT can be approved, the paperwork slows things down.",
        "examples": [
          "Lin’s internship meets the degree requirement, but the school has not signed a cooperative agreement with the employer. The guidance requires both; without the agreement the school may not approve CPT, even if the employer wants Lin to start.",
          "Chen got CPT through an elective last year, and the same company wants him back. This year’s request is judged by the new all-student standard. If the course is still an elective, CPT may be denied this time, even with the same company and job."
        ]
      },
      {
        "title": "For internship hiring: results differ even within one school",
        "text": "Employers can’t easily tell when an intern can start. A notice from one department applies only to that department.",
        "examples": [
          "You and your roommate go to the same university. Your program requires everyone to do an internship; your roommate’s treats it as an elective. Under the new standard yours may be approved and theirs not. What counts is the program’s rule, not the school’s name."
        ]
      }
    ],
    outlook:
      "Our view: more schools will issue program-by-program notices soon. If the court pauses the guidance after the November 6 hearing, schools may gradually return to their old practice; if it does not, any reopening will start with programs that qualify, not with every elective internship.",
    scenarios: [
      {
        name: 'Further tightening',
        headline: 'Elective internships get harder to approve',
        assumption:
          'Schools keep pausing or denying CPT based only on elective courses.',
        effects:
          'Some internships get pushed back; you’ll need to check a program’s curriculum earlier when choosing schools and jobs.',
        signals:
          'New school pause notices and program-handbook explanations.',
      },
      {
        name: 'Some programs resume',
        headline: 'Qualifying programs reopen first',
        assumption:
          'Schools finish reviewing and confirm that some programs’ internships qualify.',
        effects:
          'Approval depends on the major, program and employer; reopening covers only those programs.',
        signals:
          'School notices naming the program, CPT type, application dates and agreement requirements.',
      },
      {
        name: 'SEVP issues more guidance',
        headline: 'School practices may converge or split further',
        assumption:
          'SEVP publishes a new FAQ or clarification.',
        effects:
          'Clearer standards would lead schools to adjust; if room for interpretation remains, differences between programs will continue.',
        signals:
          'The text of any new Broadcast and whether schools update their pages.',
      },
    ],
    scope: [
      {
        "label": "The key test",
        "text": "Whether the internship is a required part of the degree, and how your school reads “required of all students.”"
      },
      {
        "label": "Existing authorization",
        "text": "For a CPT I-20 you already have, follow your school’s notice about approved CPT."
      },
      {
        "label": "Check the scope",
        "text": "When reading a notice, note the school, department, program, type of CPT and start date."
      }
    ],
    milestones: [
      {
        "date": "2026-08-12",
        "text": "SEVP Broadcast 2608-01: CPT must be indispensable to the degree and required of every student; DSOs and schools are responsible."
      },
      {
        "date": "After 2026-08-12",
        "text": "Several schools paused elective (course-credit or optional) CPT, or approved only degree-required internships."
      },
      {
        "date": "2026-08-24",
        "text": "Broadcast 2608-02 explained more about electives, “all students” and cooperative agreements."
      },
      {
        "date": "2026-10-05",
        "text": "Four associations sued (AAU v. DHS) and asked the court to pause the guidance."
      },
      {
        "date": "2026-10-06",
        "text": "Plaintiffs filed their arguments for pausing the guidance."
      },
      {
        "date": "2026-10-13",
        "text": "The court set a hearing for November 6."
      },
      {
        "date": "2026-10-19",
        "text": "The court gave the government until October 28 to respond."
      },
      {
        "date": "2026-10-28",
        "text": "The government opposed, arguing the plaintiffs lack standing and the notices cannot be reviewed by a court."
      },
      {
        "date": "2026-10-29",
        "text": "Plaintiffs asked to file a reply by November 4."
      },
      {
        "date": "2026-10-30",
        "text": "The court allowed plaintiffs’ reply."
      },
      {
        "date": "2026-11-04",
        "text": "Plaintiffs filed their reply seeking a pause of the notices and a bar on enforcing the new interpretation; the court allowed registered public telephone access to the November 6 hearing."
      },
      {
        "date": "2026-11-06",
        "text": "The judge heard both sides on pausing the guidance and decided to rule later."
      }
    ],
    next: [
      {
        "date": "Date unknown",
        "text": "The court decides whether to pause the two CPT notices while the case proceeds."
      },
      {
        "date": "Date unknown",
        "text": "After the ruling, schools adjust CPT approvals to the ruling and their curricula."
      }
    ],
    process: {
      "detail": "SEVP first warned schools about compliance, then narrowed the CPT standard. Schools and DSOs are already applying it.",
      "currentSummary": "Guidance in use; November 6 hearing held, ruling pending",
      "waitingFor": "The court’s ruling on the request to pause the guidance."
    },
  },
};
