import type { PolicyContent } from '../policy-types.ts';

export const cptGuidance: PolicyContent = {
  id: 'cpt-guidance',
  path: 'CPT',
  tone: 'red',
  effectState: 'guidance-in-use',
  checkedOn: "2026-11-01",
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
        "date": "11·06",
        "zh": "开庭听证",
        "en": "Hearing",
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
    }
  ],
  zh: {
    title: 'CPT 指引收紧：选修实习课不再够用',
    short: '8·12 / 8·24 CPT 指引',
    status: "指引执行中 · 11·06 听证",
    effectLabel: '正在执行 · 各校做法不同',
    agency: 'ICE / SEVP',
    documentId: 'Broadcast 2608-01 / 02',
    tldr: "ICE/SEVP 要求：只有“这个专业所有学生毕业都必须做”的实习才能批 CPT，选修实习课通常不行，雇主还得和学校签合作协议。四个高校协会已起诉，请法院暂停这份指引，11·06 开庭听证。法院裁定前，指引照常执行。",
    tags: ['CPT', 'Day-1 CPT', '实习'],
    summary:
      "SEVP 要求 CPT 实习必须是这个专业所有学生毕业都要完成的环节，而且雇主要和学校签合作协议。四个高校协会请法院暂停这份指引；政府 10·28 反对，原告 11·04 前回应，法院 11·06 美东下午 3 点开庭。法院裁定前，指引照常执行。",
    audience: '要申请 CPT 的学生，以及学校和 DSO。',
    caveat:
      '选修课型 CPT 和学位必修的实习要分开看。已经批下来的 CPT 会不会受影响，看学校通知。',
    background:
      "8 月 12 日的 Broadcast 强调学校和 DSO 要对 CPT 审批负责。8 月 24 日的问答进一步说明：“所有学生”也包括美国学生，并重申雇主和学校之间要有合作协议（cooperative agreement）。\n10·05，四个高校协会起诉 DHS（AAU v. DHS，1:26-cv-14520），认为这两份广播对“integral”（学位不可缺少）的解释和执行违反《行政程序法》（APA），并请法院先暂停指引。这个案子和 D/S 案是两回事，D/S 的暂缓管不到 CPT。听证定在 11·06 美东下午 3 点，由 Julia E. Kobick 法官主持。\n10·28 政府提交 27 页反对意见，理由是：原告没有资格起诉；广播只是解释现有规定、不是新规，所以不用先征求公众意见，法院也不能审；而且学生没有受到无法弥补的损害。10·30 法院允许原告在 11·04 前交一份不超过 15 页的回应。",
    teaser: '关键不再是能不能选一门实习课，而是你的专业是否要求所有人都实习。',
    headline: '实习能不能批，越来越看你的专业课程怎么规定。',
    analysis:
      '新标准把 CPT 和“学位必须的实习”绑在一起，靠选修实习课拿 CPT 的路基本被堵住。各校、各院系的课程要求不同，结果会差别很大。',
    impacts: [
      {
        title: '对学生：多选一门实习课解决不了',
        text: '再选一门实习课，通常还是不符合新标准。能不能批，主要看专业的毕业要求和学校怎么认定。',
        examples: [
          '小林找到实习，想注册一门选修实习课来申请 CPT。但新标准要求实习必须是这个专业所有学生毕业都要完成的，光拿学分不够。如果他的专业不实习也能毕业，这门选修课就不算数，学校很可能批不了。',
        ],
      },
      {
        title: '对学校：课程规定和雇主协议更关键',
        text: '学校可能重新审查项目手册、实习要求和合作协议。就算最后能批，审材料也会让申请变慢。',
        examples: [
          '小林的实习已经符合专业必修要求，但学校还没和实习公司签合作协议。新标准两样都要；缺了协议，就算公司已经让他上班，学校也可能不批。',
          '小陈去年靠一门选修实习课批了 CPT，今年同一家公司又请他回去。今年要按新标准审：实习必须是全体学生的必修要求。如果那门课还是选修，今年就可能批不下来，公司和岗位没变也一样。',
        ],
      },
      {
        title: '对实习招聘：同一所学校，不同专业结果不同',
        text: '企业更难确定实习生什么时候能入职。某个院系的通知只适用于这个院系。',
        examples: [
          '你和室友在同一所大学，你的专业要求所有人都实习，室友的专业把实习当选修。按新标准，你的可能批，室友的不行。看的是专业怎么规定，不是学校名字。',
        ],
      },
    ],
    outlook:
      '我们的判断：近期会有更多学校按专业发通知。就算恢复，也会是符合条件的专业先恢复，而不是所有选修实习一起恢复。',
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
        label: '关键标准',
        text: '实习是不是学位必须的环节，以及学校怎么理解“所有学生都要做”。',
      },
      {
        label: '已有授权',
        text: '已经拿到的 CPT I-20 会不会受影响，看学校有没有针对已批 CPT 发通知。',
      },
      {
        label: '看清范围',
        text: '看学校通知时，分清是哪个学校、院系、项目、哪类 CPT、从哪天开始。',
      },
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
        "text": "法院准许政府延期至 10·28 答复。"
      },
      {
        "date": "2026-10-28",
        "text": "政府提交反对意见，认为原告无权起诉、广播不能被法院审查。"
      },
      {
        "date": "2026-10-29",
        "text": "原告申请在 11·04 前提交回应。"
      },
      {
        "date": "2026-10-30",
        "text": "法院同意原告提交回应。"
      }
    ],
    next: [
      {
        "date": "2026-11-04",
        "text": "原告回应截止。"
      },
      {
        "date": "2026-11-06",
        "text": "法院就是否暂停指引开庭听证，美东下午 3 点。"
      },
      {
        "date": "日期未定",
        "text": "法院裁定后，各校按裁定和课程要求调整 CPT 审批。"
      }
    ],
    process: {
      "detail": "SEVP 先提醒学校注意合规，再收紧 CPT 标准；学校和 DSO 已经按新标准审批。",
      "currentSummary": "指引执行中；11·06 听证",
      "waitingFor": "11·04 原告回应、11·06 美东下午 3 点听证，以及之后的裁定。"
    },
  },
  en: {
    title:
      'Tighter CPT Guidance: An Elective Internship Course Is No Longer Enough',
    short: 'August 12 / 24 CPT Guidance',
    status: "Guidance in use · Hearing November 6",
    effectLabel: 'In use · Varies by school',
    agency: 'ICE / SEVP',
    documentId: 'Broadcast 2608-01 / 02',
    tldr: "ICE/SEVP says CPT can be approved only for an internship every student in the program must complete to graduate; an elective internship course usually does not count, and the employer must sign a cooperative agreement with the school. Four higher-education associations have sued to pause the guidance, with a hearing on November 6. Until the court rules, the guidance applies.",
    tags: ['CPT', 'Day-1 CPT', 'Internships'],
    summary:
      "SEVP requires CPT training to be something every student in the program must complete to graduate, with a cooperative agreement between the employer and the school. Four higher-education associations asked the court to pause the guidance; the government opposed on October 28, plaintiffs respond by November 4 and the court holds a hearing November 6 at 3 p.m. ET. Until the court rules, the guidance applies.",
    audience: 'Students seeking CPT authorization, their schools and DSOs.',
    caveat:
      'Elective-course CPT and degree-required internships are treated differently. Whether CPT you already have is affected depends on your school’s notice.',
    background:
      "The August 12 Broadcast stressed that schools and DSOs are responsible for CPT approvals. The August 24 FAQ added that “all students” includes U.S. students and repeated that the employer and school need a cooperative agreement.\nOn October 5, four higher-education associations sued DHS (AAU v. DHS, 1:26-cv-14520), arguing that the broadcasts’ reading of “integral” and how it is enforced violate the Administrative Procedure Act (APA), and asked the court to pause the guidance in the meantime. This is a separate case from the D/S one; the D/S stay does not cover CPT. The hearing is set for November 6 at 3 p.m. ET before Judge Julia E. Kobick.\nOn October 28 the government filed a 27-page opposition, arguing that the plaintiffs cannot sue, that the broadcasts only explain existing rules rather than create new ones (so no public comment was needed and a court cannot review them), and that students suffer no irreparable harm. On October 30 the court let plaintiffs file a reply of up to 15 pages by November 4.",
    teaser:
      'What matters now is not whether you can take an internship course, but whether your program requires everyone to do one.',
    headline:
      'Whether your internship is approved now depends on how your program’s curriculum is written.',
    analysis:
      'The new standard ties CPT to internships the degree requires, which largely closes off CPT through an elective internship course. Because schools and departments write their curricula differently, outcomes will vary widely.',
    impacts: [
      {
        title: 'For students: adding an internship course won’t fix it',
        text: 'An extra internship course usually still won’t meet the new standard. Approval depends on your program’s graduation requirements and how your school reads them.',
        examples: [
          'Lin wants CPT by enrolling in an elective internship course. The new standard requires an internship every student in the program must complete to graduate; earning credit is not enough. If students in his program can graduate without one, the elective doesn’t count and the school likely cannot approve CPT.',
        ],
      },
      {
        title:
          'For schools: curriculum rules and employer agreements matter more',
        text: 'Schools may re-review program handbooks, internship requirements and cooperative agreements. Even when CPT can be approved, the paperwork slows things down.',
        examples: [
          'Lin’s internship meets the degree requirement, but the school has not signed a cooperative agreement with the employer. The guidance requires both; without the agreement the school may not approve CPT, even if the employer wants Lin to start.',
          'Chen got CPT through an elective last year, and the same company wants him back. This year’s request is judged by the new all-student standard. If the course is still an elective, CPT may be denied this time, even with the same company and job.',
        ],
      },
      {
        title: 'For internship hiring: results differ even within one school',
        text: 'Employers can’t easily tell when an intern can start. A notice from one department applies only to that department.',
        examples: [
          'You and your roommate go to the same university. Your program requires everyone to do an internship; your roommate’s treats it as an elective. Under the new standard yours may be approved and theirs not. What counts is the program’s rule, not the school’s name.',
        ],
      },
    ],
    outlook:
      'Our view: more schools will issue program-by-program notices soon. Any reopening will start with programs that qualify, not with every elective internship.',
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
        label: 'The key test',
        text: 'Whether the internship is a required part of the degree, and how your school reads “required of all students.”',
      },
      {
        label: 'Existing authorization',
        text: 'Whether an existing CPT I-20 is affected depends on whether your school has sent a notice about approved CPT.',
      },
      {
        label: 'Check the scope',
        text: 'When reading a notice, note the school, department, program, type of CPT and start date.',
      },
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
        "text": "The government opposed, arguing the plaintiffs cannot sue and the broadcasts cannot be reviewed by a court."
      },
      {
        "date": "2026-10-29",
        "text": "Plaintiffs asked to file a reply by November 4."
      },
      {
        "date": "2026-10-30",
        "text": "The court allowed plaintiffs’ reply."
      }
    ],
    next: [
      {
        "date": "2026-11-04",
        "text": "Plaintiffs’ reply due."
      },
      {
        "date": "2026-11-06",
        "text": "Hearing on whether to pause the guidance, 3 p.m. ET."
      },
      {
        "date": "Date unknown",
        "text": "After the ruling, schools adjust CPT approvals to the ruling and their curricula."
      }
    ],
    process: {
      "detail": "SEVP first warned schools about compliance, then narrowed the CPT standard. Schools and DSOs are already applying it.",
      "currentSummary": "Guidance in use; hearing November 6",
      "waitingFor": "Plaintiffs’ November 4 reply, the November 6 hearing at 3 p.m. ET and the ruling after it."
    },
  },
};
