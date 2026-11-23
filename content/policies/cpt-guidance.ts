import type { PolicyContent } from '../policy-types.ts';

export const cptGuidance: PolicyContent = {
  id: 'cpt-guidance',
  path: 'CPT',
  tone: 'red',
  effectState: 'not-in-effect',
  checkedOn: "2026-11-22",
  related: ['duration-status', 'opt-fee'],
  schoolLink: true,
  process: {
    kind: 'administrative-guidance',
    lastCompletedStage: 1,
    activeStage: null,
    nextStage: 2,
    litigation: [
      {
        "date": "11·17",
        "zh": "全国暂缓，成员获禁令保护",
        "en": "Nationwide stay; member protection",
        "afterStage": 2,
        "progress": 95,
        "status": "filed",
        "align": "right",
        "lane": "raised"
      },
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
        "zh": "法院听取双方意见",
        "en": "Court heard both sides",
        "afterStage": 2,
        "progress": 85,
        "status": "filed",
        "align": "right",
        "lane": "raised"
      }
    ],
  },
  sources: [
    { href: "https://www.nafsa.org/sites/default/files/media/document/District-Judge-Julia-E-Kobick-Memorandum-and-Order-on-Plaintiffs-Motion-for-a-Preliminary-Injuntion-11-17.pdf", zh: "法院 11·17 暂缓与初步禁令（第 36 项；NAFSA 托管法院原文）", en: "Court’s November 17 stay and preliminary injunction (entry 36; NAFSA-hosted court original)" },
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
    {
      "href": "https://www.buffalo.edu/international-student-services/immigration-visa/f-1-student/curricular-practical-training--cpt-.html",
      "zh": "University at Buffalo · 11·17 CPT 安排",
      "en": "University at Buffalo · November 17 CPT arrangements"
    },
    {
      "href": "https://iss.ku.edu/f-1-cpt-curricular-practical-training",
      "zh": "University of Kansas · 11·17 CPT 安排",
      "en": "University of Kansas · November 17 CPT arrangements"
    },
    {
      "href": "https://internationalcenter.umich.edu/about/news/federal-court-temporarily-blocks-sevp-guidance-curricular-practical-training-cpt",
      "zh": "University of Michigan · 11·17 CPT 安排",
      "en": "University of Michigan · November 17 CPT arrangements"
    },
    {
      "href": "https://immigration.columbia.edu/news/important-updates-cpt-opt-duration-status",
      "zh": "Columbia University · 11·18 恢复考虑选修 CPT",
      "en": "Columbia University · November 18 elective CPT review resumes"
    },
    {
      "href": "https://blogs.illinois.edu/view/8569/1744245392",
      "zh": "UIUC · 11·17 CPT 安排",
      "en": "UIUC · November 17 CPT arrangements"
    },
    {
      "href": "https://iss.washington.edu/preliminary-injunction-cpt/",
      "zh": "University of Washington · 11·17 CPT 安排",
      "en": "University of Washington · November 17 CPT arrangements"
    },
    {
      "href": "https://international.globallearning.cornell.edu/alerts/cpt-applications-reopening-november-20",
      "zh": "Cornell · 11·20 更新，CPT 申请已开放",
      "en": "Cornell · November 20 update; CPT applications now open"
    },
  ],
  zh: {
    "title": "CPT 8 月指引全国暂缓，学校陆续调整",
    "short": "8·12 / 8·24 CPT 指引",
    "searchTitle": "CPT 新规全国暂缓：选修实习可重新按原标准审核",
    "searchDescription": "法院 11·17 在全国暂停 SEVP 8 月两份 CPT 指引。部分学校恢复原有标准，其他学校正在调整流程；学生申请和开工仍须取得学校 CPT 授权。",
    "status": "法院 11·17 全国暂缓",
    "effectLabel": "指引暂停执行 · 各校调整流程",
    "agency": "ICE / SEVP",
    "documentId": "Broadcast 2608-01 / 02",
    "tldr": "法院 11·17 在全国暂停 SEVP 8 月两份 CPT 指引。政府在案件审理期间须停止按“实习必须是所有学生的毕业要求”这个新标准执行。选修实习计学分的 CPT 可以重新按原有法规审核；部分学校已经恢复，其他学校正在调整申请流程。",
    "tags": [
      "CPT",
      "Day-1 CPT",
      "实习"
    ],
    "summary": "法院 11·17 下令：SEVP 8 月两份 CPT 通知在全国暂停执行，直到法院进一步审理。法院还禁止政府按通知中的解释，对四个起诉协会及其成员学校、员工和学生采取行动，这项保护也包括通知发布前的 CPT。对学生来说，选修实习计学分的申请可以重新按原有法规审核。Buffalo、Kansas 等学校已宣布恢复；Columbia 已恢复考虑选修 CPT，Michigan 等仍在准备后续指引。",
    "audience": "要申请 CPT 的学生（包括打算读 Day 1 CPT 项目的人），以及学校和负责批 CPT 的 DSO。",
    "caveat": "申请和开始工作仍须按本校流程取得有效 CPT I-20；已被拒或待审的申请，按学校公布的重审办法办理。",
    "background": "CPT 是 F-1 学生在读期间，因为课程需要去校外实习或工作的许可。它不经过移民局，由学校的 DSO 审批，批下来后写在你的 I-20 上（CPT I-20）。联邦法规的要求是：CPT 必须是学校既定课程“不可分割的一部分”（integral part of an established curriculum）。\n8 月 12 日的 Broadcast 2608-01 强调学校和 DSO 要对 CPT 审批负责，并把“不可分割”解释为学位必须、所有学生都要做。8 月 24 日的问答（Broadcast 2608-02）进一步说明：“所有学生”也包括美国学生；雇主和学校之间要有合作协议（cooperative agreement），把实习和课程联系起来。\n10 月 5 日，美国大学协会（AAU）等四个高校协会起诉 DHS（AAU v. DHS，案号 1:26-cv-14520）。他们认为，这两份通知对“integral”的解释和执行方式违反《行政程序法》（APA）：实际上改了 CPT 的规则，却没有先公开征求意见。他们请法院在判决前先暂停这份指引。听证于 11 月 6 日美东下午 3 点举行，由 Julia E. Kobick 法官主持。这个案子和 D/S 案分开审理，D/S 案的全国暂缓只管 D/S 规则。\n10 月 28 日政府提交了 27 页的反对意见，理由有三条：一是原告没有起诉资格，也就是协会本身没有受到足够具体的伤害；二是这两份通知只是解释现有规定、不是新规，所以不需要先征求公众意见，法院也不能审查；三是学生没有受到“无法弥补的损害”，而这是法院在判决前暂停一项政策的前提条件之一。10 月 30 日，法院允许原告在 11 月 4 日前交一份不超过 15 页的回应。\n11 月 4 日，原告提交回应。他们主张，过去的法规和长期做法允许选修实习计学分后申请 CPT，两份通知实际改变了这个标准，应该先征求公众意见。他们还说，学生已经失去实习机会，学校和 DSO 也面临处罚压力，请法院在案件审理期间暂停两份通知，并禁止政府按新的解释执行。法院同日允许公众通过电话旁听 11 月 6 日的听证。\n11 月 6 日，法官听取双方关于是否先暂停指引的辩论，决定稍后再裁定。学校当时继续按现行指引处理 CPT。\n11 月 17 日，法官批准暂缓和初步禁令。暂缓让两份通知在全国暂停执行；初步禁令另行保护四个起诉协会及其成员、员工和学生，包括通知发布前的 CPT。法官认为，政府突然改变长期允许选修实习计学分的做法，却没有充分解释，也没有认真考虑学校和学生原先的安排，因此原告很可能胜诉。案件仍要继续审理，法院先让学校按原有法规处理申请。",
    "teaser": "选修实习计学分的申请可以重新按原有法规审核。",
    "headline": "全国暂缓已经生效，接下来留意本校何时恢复、怎样申请。",
    "analysis": "我们的判断：对依靠选修实习课程申请 CPT 的学生，这次命令解除了一项重要的联邦限制。学校仍要确认实习和专业课程的关系，调整表格、材料和审批流程，各校恢复时间会有差别。",
    "impacts": [
      {
        "title": "对学生：选修实习课程可以重新考虑",
        "text": "原有法规要求实践是既定课程不可分割的一部分。学校可以按课程学分、正式实践环节等条件重新审核。",
        "examples": [
          "小林的专业允许选修一门带正式实习环节的课程。学校恢复原有流程后，他可以按课程和专业要求申请 CPT。"
        ]
      },
      {
        "title": "对学校：恢复原有标准并调整申请流程",
        "text": "部分学校已经恢复处理；其他学校正在与院系和法律顾问确定步骤。",
        "examples": [
          "Michigan 要求非学位必需实践的学生先等待更新后的申请说明。",
          "UIUC 已恢复审核有正式实践环节的课程，以及与拟定论文研究直接相关的实践。"
        ]
      },
      {
        "title": "对实习招聘：按学校恢复时间安排入职",
        "text": "同一法院命令下，各校公布的申请时间和材料要求仍会不同。",
        "examples": [
          "Buffalo 已恢复按 8 月前标准审核，UW 暂时保留秋季安排，冬春季办法将在未来数周公布。"
        ]
      }
    ],
    "outlook": "我们的判断：下一步会有更多学校更新 CPT 流程。法院目前先暂停指引，案件继续审理；后续上诉、法院命令和学校的新通知会决定接下来的安排。",
    "scenarios": [
      {
        "name": "更多学校恢复",
        "headline": "原有 CPT 申请方式逐步开放",
        "assumption": "学校完成流程调整并公布申请说明。",
        "effects": "有课程或论文支持的学生可以按更新后的步骤申请。",
        "signals": "学校明确公布受理日期、课程要求和材料清单。"
      },
      {
        "name": "学校继续准备",
        "headline": "部分学生仍需等待校内安排",
        "assumption": "学校需要与院系和法律顾问确定执行步骤。",
        "effects": "申请时间和实习开始日期需要配合学校公布的流程。",
        "signals": "学校关于冬春季 CPT、待审或被拒申请的后续通知。"
      },
      {
        "name": "案件继续审理",
        "headline": "后续法院命令可能改变安排",
        "assumption": "政府上诉或地区法院继续处理案件。",
        "effects": "学生和学校按届时有效的命令和校方流程办理。",
        "signals": "新的法院命令及政府执行说明。"
      }
    ],
    "scope": [
      {
        "label": "全国暂缓",
        "text": "8 月 12 日和 24 日两份通知在案件审理期间暂停执行。"
      },
      {
        "label": "成员学校的额外保护",
        "text": "初步禁令保护起诉协会及其成员、员工和学生，也覆盖通知前的 CPT。"
      },
      {
        "label": "课程要求",
        "text": "原有法规继续要求实践属于既定课程的一部分，由学校审核专业、课程和岗位的关系。"
      }
    ],
    "milestones": [
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
      },
      {
        "date": "2026-11-17",
        "text": "法院批准全国暂缓，两份 8 月 CPT 通知暂停执行；另发初步禁令保护起诉协会及其成员、员工和学生。"
      }
    ],
    "next": [
      {
        "date": "日期未定",
        "text": "各校公布恢复申请、重审既有申请和冬春季 CPT 的具体流程。"
      },
      {
        "date": "日期未定",
        "text": "案件继续审理；关注政府是否上诉及法院后续命令。"
      }
    ],
    "process": {
      "detail": "SEVP 8 月收紧标准后，学校曾按新标准调整审批。法院 11·17 先在全国暂停两份通知，各校开始恢复或调整流程。",
      "currentSummary": "全国暂缓生效；学校陆续调整 CPT 流程",
      "waitingFor": "学校后续申请说明，以及案件的下一步安排。"
    }
  },
  en: {
    "title": "August CPT Guidance Stayed Nationwide; Schools Adjust",
    "short": "August 12 / 24 CPT Guidance",
    "searchTitle": "CPT Restrictions Stayed Nationwide: Elective Internship Review Resumes",
    "searchDescription": "The court stayed both August CPT broadcasts nationwide November 17. Schools are restoring standards or preparing procedures; students need CPT authorization before working.",
    "status": "Nationwide court stay · November 17",
    "effectLabel": "Guidance paused · Schools adjusting procedures",
    "agency": "ICE / SEVP",
    "documentId": "Broadcast 2608-01 / 02",
    "tldr": "The court stayed both August SEVP CPT broadcasts nationwide November 17. While the case proceeds, the government must stop applying the new standard that training be required of every student for graduation. CPT based on elective internship credit can again be reviewed under the existing regulation. Some schools have resumed; others are preparing procedures.",
    "tags": [
      "CPT",
      "Day-1 CPT",
      "Internships"
    ],
    "summary": "The November 17 order pauses both August SEVP CPT broadcasts nationwide while the court reviews the case. A separate preliminary injunction protects the four plaintiff associations, their member schools, employees and students, including CPT predating the broadcasts. For students, elective internship credit can again support review under the existing regulation. Buffalo and Kansas have announced resumptions; Columbia is again considering elective CPT; Michigan and others are preparing further guidance.",
    "audience": "Students seeking CPT (including anyone planning a Day 1 CPT program), their schools and the DSOs who approve CPT.",
    "caveat": "Apply and begin work with a valid CPT I-20 under your school’s procedures. Follow the school’s reconsideration instructions for denied or pending requests.",
    "background": "CPT is permission for F-1 students to work or intern off campus during their studies because their curriculum calls for it. It does not go through USCIS: your school’s DSO approves it and records it on your I-20 (a CPT I-20). The federal regulation says CPT must be an “integral part of an established curriculum.”\nThe August 12 Broadcast 2608-01 stressed that schools and DSOs are responsible for CPT approvals and read “integral” as required for the degree and done by every student. The August 24 FAQ (Broadcast 2608-02) added that “all students” includes U.S. students, and that the employer and school need a cooperative agreement tying the internship to the curriculum.\nOn October 5, the Association of American Universities (AAU) and three other higher-education associations sued DHS (AAU v. DHS, No. 1:26-cv-14520). They argue that the notices’ reading of “integral” and how it is enforced violate the Administrative Procedure Act (APA): the notices effectively changed the CPT rules without first taking public comment. They asked the court to pause the guidance until it rules. The hearing took place on November 6 at 3 p.m. ET before Judge Julia E. Kobick. This case is separate from the D/S case; the nationwide stay there covers only the D/S rule.\nOn October 28 the government filed a 27-page opposition with three arguments: first, the plaintiffs lack standing, meaning the associations themselves have not suffered a concrete enough injury to sue; second, the notices only explain existing rules rather than create new ones, so no public comment was needed and a court cannot review them; third, students suffer no “irreparable harm,” which is one of the conditions for a court to pause a policy before ruling. On October 30 the court let plaintiffs file a reply of up to 15 pages by November 4.\nOn November 4, plaintiffs filed their reply. They argue that the regulation and longstanding practice allowed elective internships for academic credit to qualify for CPT, and that the notices changed that standard and required public comment. They also describe students already losing internships and schools and DSOs facing threats of penalties. They ask the court to pause the notices during the case and bar enforcement of the new interpretation. The court also allowed public telephone access to the November 6 hearing.\nOn November 6, the judge heard both sides on whether to pause the guidance and decided to rule later. Schools continued to process CPT under the guidance at that time.\nOn November 17, the judge granted a stay and preliminary injunction. The stay pauses both broadcasts nationwide. The injunction separately protects the four plaintiff associations, their members, employees and students, including CPT predating the broadcasts. The judge found that the plaintiffs were likely to succeed because the government had abruptly changed its longstanding treatment of elective internship credit without adequately explaining the change or considering schools’ and students’ existing plans. The case continues, with applications again reviewed under the existing regulation.",
    "teaser": "CPT based on elective internship credit can again be reviewed under the existing regulation.",
    "headline": "The nationwide stay is in force. Watch your school’s application dates and procedures.",
    "analysis": "Our view: this order removes a major federal restriction for students relying on elective internship courses. Schools still need to assess how the job connects to the curriculum and update forms, documents and approval procedures, so reopening dates will differ.",
    "impacts": [
      {
        "title": "For students: elective internship courses can be considered again",
        "text": "The existing regulation requires training to be an integral part of an established curriculum. Schools can again review course credit and formal practical components.",
        "examples": [
          "Lin’s program offers an elective course with a formal internship component. Once his school restores its procedures, he can apply under the course and program requirements."
        ]
      },
      {
        "title": "For schools: restore earlier standards and adjust procedures",
        "text": "Some schools have resumed processing. Others are coordinating next steps with departments and legal counsel.",
        "examples": [
          "Michigan asks students seeking training that is not degree-required to wait for updated application instructions.",
          "UIUC has resumed reviewing courses with a formal practical component and training directly related to proposed thesis research."
        ]
      },
      {
        "title": "For internship hiring: plan around the school’s reopening date",
        "text": "Application dates and document requirements can differ across schools under the same court order.",
        "examples": [
          "Buffalo has restored its pre-August review standards. UW is keeping its autumn arrangements for now and will announce winter and spring procedures in the coming weeks."
        ]
      }
    ],
    "outlook": "Our view: more schools are likely to update their CPT procedures next. The court has paused the guidance while the case continues; appeals, further court orders and school announcements will shape subsequent arrangements.",
    "scenarios": [
      {
        "name": "More schools resume",
        "headline": "Earlier CPT application routes gradually reopen",
        "assumption": "Schools finish adjusting procedures and publish instructions.",
        "effects": "Students with supporting courses or thesis research can apply under the updated steps.",
        "signals": "Published application dates, course requirements and document lists."
      },
      {
        "name": "Schools continue preparations",
        "headline": "Some students still await campus procedures",
        "assumption": "Schools need to coordinate implementation with departments and counsel.",
        "effects": "Applications and internship start dates depend on the procedures each school announces.",
        "signals": "Further notices about winter and spring CPT and pending or denied requests."
      },
      {
        "name": "Litigation continues",
        "headline": "Further court orders could change arrangements",
        "assumption": "The government appeals or the district court continues reviewing the case.",
        "effects": "Students and schools follow the orders and campus procedures then in force.",
        "signals": "Further court orders and government implementation instructions."
      }
    ],
    "scope": [
      {
        "label": "Nationwide stay",
        "text": "The August 12 and August 24 broadcasts are paused while the case is reviewed."
      },
      {
        "label": "Additional protection for member schools",
        "text": "The preliminary injunction protects the plaintiff associations, their members, employees and students, including CPT predating the broadcasts."
      },
      {
        "label": "Curriculum requirements",
        "text": "The existing regulation still requires training to be part of an established curriculum. Schools assess the connection between the major, course and job."
      }
    ],
    "milestones": [
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
      },
      {
        "date": "2026-11-17",
        "text": "The court stayed both August CPT broadcasts nationwide and separately issued a preliminary injunction protecting the plaintiff associations, their members, employees and students."
      }
    ],
    "next": [
      {
        "date": "Date unknown",
        "text": "Schools publish procedures for resumed applications, reconsideration and winter or spring CPT."
      },
      {
        "date": "Date unknown",
        "text": "The case continues; watch for a government appeal and further court orders."
      }
    ],
    "process": {
      "detail": "SEVP narrowed the standard in August and schools adjusted approvals. The court stayed both broadcasts nationwide November 17; schools are restoring or adjusting procedures.",
      "currentSummary": "Nationwide stay in force; schools adjusting CPT procedures",
      "waitingFor": "Further school application instructions and the next steps in the case."
    }
  }
};
