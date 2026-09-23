import type { PolicyContent } from '../policy-types.ts';

export const cptGuidance: PolicyContent = {
  id: 'cpt-guidance',
  path: 'CPT',
  tone: 'red',
  effectState: 'guidance-in-use',
  checkedOn: '2026-09-22',
  related: ['duration-status', 'opt-fee'],
  schoolLink: true,
  process: {
    kind: 'administrative-guidance',
    lastCompletedStage: 1,
    activeStage: 2,
    nextStage: 3,
  },
  sources: [
    {
      href: 'https://www.ice.gov/doclib/sevis/pdf/bcm260801.pdf',
      zh: 'SEVP 8·12 Broadcast',
      en: 'SEVP August 12 Broadcast',
    },
    {
      href: 'https://www.ice.gov/doclib/sevis/pdf/bcm_260802.pdf',
      zh: 'SEVP 8·24 Broadcast',
      en: 'SEVP August 24 Broadcast',
    },
    {
      href: 'https://www.uscardforum.com/t/topic/524965',
      zh: '美卡论坛讨论',
      en: 'USCardForum discussion',
    },
    {
      href: 'https://www.brynmawr.edu/inside/offices-services/impact-center/international-advising/issa-announcements',
      zh: 'Bryn Mawr · 9·15 校方通知',
      en: 'Bryn Mawr · September 15 notice',
    },
  ],
  zh: {
    title: 'CPT 指引收紧：选修实习课不再够用',
    short: '8·12 / 8·24 CPT 指引',
    status: '学校已按新口径执行',
    effectLabel: '指引已执行 · 按学校与项目核对',
    agency: 'ICE / SEVP',
    documentId: 'Broadcast 2608-01 / 02',
    tldr: 'ICE/SEVP 要求学校只批准“完成学位必需、且该项目所有学生都要做”的实习作为 CPT。只注册一门选修实习课通常不够，实习雇主还必须和学校签有 cooperative agreement（合作协议）。',
    tags: ['CPT', 'Day-1 CPT', '实习'],
    summary:
      'SEVP 要求 CPT 实习是该专业所有学生毕业的必修环节，而且雇主和学校之间要有合作协议。只注册一门选修实习课，通常拿不到 CPT 授权。',
    audience: '需要 CPT 实习授权的学生、学校与 DSO。',
    caveat:
      '选修课型的 CPT 和学位必需的实践，要分开核对。已经批下来的授权，以学校的明确通知为准。',
    reviewNote:
      '9·22 复核两份 SEVP 备忘录，学校复核于 9·22 完成。UT Dallas、UC Irvine 与 Washington State 的原文读取仍有缺口，保留上次成功核对日期，不视为政策反转。Penn、Johns Hopkins 和 Purdue 页面保留的新旧文字差异已在单项说明。其余社区截图仍不是校方公开确认。',
    background:
      '8 月 12 日的 Broadcast 强调学校和 DSO 的合规责任。8 月 24 日的问答进一步说明，“全员”也包括美国学生，并重申实习雇主和学校要有 cooperative agreement（合作协议）。',
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
          '你和室友在同一所大学，但你的专业规定实习是全体学生必须完成的，室友的专业只把实习当作选修课。按新规，学校得分别看两个专业的要求——你的情况可能过关，室友的不行。所以关键看专业怎么规定，跟是不是同一所学校没关系。',
          '小陈去年靠一门选修实习课成功批了 CPT，今年同一家公司又请他回去。但今年的新申请得按新规来审——实习必须是全体学生的必修要求。如果那门课还是选修课，去年的批准记录不能替代今年的课程要求。所以就算公司和岗位都没变，今年也可能批不下来。',
        ],
      },
      {
        title: '对实习招聘：同校不同项目也可能分化',
        text: '企业更难确定学生什么时候能入职。某个院系的通知，不能代表全校所有学生。',
        examples: [
          '小林找的实习已经满足专业必修要求了，但学校还没跟实习公司签合作协议。新规同时要求学校和雇主之间有这份协议，所以光满足课程要求还不够。要是协议签不下来，就算公司已经让他去上班，学校还是可能不批 CPT。',
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
        date: '2026-08-12',
        text: 'SEVP Broadcast 2608-01：已提出学位不可缺少、全员必需标准，并强调 DSO 与学校责任。',
      },
      {
        date: '2026-08-12 后',
        text: '多所高校暂停 Course Credit / optional CPT，或改为只批学位强制项目。',
      },
      {
        date: '2026-08-24',
        text: 'Broadcast 2608-02：进一步解释选修课、全员适用与合作协议要求。',
      },
    ],
    next: [
      {
        date: '现在',
        text: '每所学校按自身课程设置和法律意见执行；没有统一恢复日期。',
      },
      {
        date: '未来数周',
        text: '学校可能继续更新政策；SEVP 也可能补充问答或采取执法行动。',
        estimate: true,
      },
    ],
    process: {
      detail:
        'SEVP 先发布合规风险通知，再细化 CPT 口径；学校和 DSO 已开始按新口径执行。',
      currentSummary: '学校已按新口径执行',
      waitingFor:
        '学校更新执行通知，以及 SEVP 是否补充解释；没有统一恢复日期。',
    },
  },
  en: {
    title:
      'Tighter CPT Guidance: An Elective Internship Course Is No Longer Enough',
    short: 'August 12 / 24 CPT Guidance',
    status: 'Schools are applying the new standard',
    effectLabel: 'Guidance in use · Check school and program',
    agency: 'ICE / SEVP',
    documentId: 'Broadcast 2608-01 / 02',
    tldr: 'ICE/SEVP says schools should authorize CPT only when the training is necessary to complete the degree and is a graduation requirement for every student in the program. Registering for an optional internship course is generally not enough, and the employer must have a cooperative agreement with the school.',
    tags: ['CPT', 'Day-1 CPT', 'Internships'],
    summary:
      'SEVP requires CPT training to be mandatory for every student in the program to complete the degree, with a cooperative agreement between the employer and school. Enrollment in an elective internship course alone generally does not qualify.',
    audience: 'students seeking CPT authorization, their schools and DSOs.',
    caveat:
      'Distinguish elective-course CPT from required degree practice; check explicit school notices for existing authorizations.',
    reviewNote:
      'Both SEVP memos were reviewed September 22, with campus checks completed September 22. Original-page access gaps remain for UT Dallas, UC Irvine and Washington State; prior successful review dates are retained, without inferring a policy reversal. Individual entries explain older and newer wording on Penn, Johns Hopkins and Purdue pages. Remaining community screenshots are not public university confirmation.',
    background:
      'The August 12 Broadcast emphasized school and DSO compliance duties. The August 24 FAQ clarified that all students includes U.S. students and reiterated the employer-school cooperative agreement requirement.',
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
          'You and a roommate attend the same university, but your degree requires an internship for everyone while the roommate’s offers it only as an elective. The new interpretation requires separate checks of those curricula. Your internship may meet that condition while the roommate’s does not; the distinction is the degree requirement, not the university name.',
          'Chen obtained CPT through an elective last year and receives a return offer from the same employer. A new request reviewed under the all-student degree requirement cannot rely on last year’s approval if the course remains optional. The employer and job may be unchanged, but a new CPT authorization could still be unavailable.',
        ],
      },
      {
        title: 'For internship hiring: outcomes may differ within one school',
        text: 'Employers may face less predictable start dates and student availability. A notice from one department cannot represent every student at the school.',
        examples: [
          'Lin’s internship meets the degree requirement, but the school has not signed a cooperation agreement with the employer. The guidance also requires that agreement, so the academic requirement alone is insufficient. An employer’s invitation cannot replace CPT authorization when the agreement requirement remains unmet.',
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
        date: '2026-08-12',
        text: 'SEVP Broadcast 2608-01 already required training indispensable to the degree and required for every student, and emphasized DSO and school duties.',
      },
      {
        date: 'After 2026-08-12',
        text: 'Several universities paused course-credit or optional CPT, or limited approval to programs with a mandatory degree requirement.',
      },
      {
        date: '2026-08-24',
        text: 'Broadcast 2608-02 further explained elective courses, the all-student standard, and cooperative agreements.',
      },
    ],
    next: [
      {
        date: 'Now',
        text: 'Each school is applying the guidance to its own curriculum and legal advice; there is no single reopening date.',
      },
      {
        date: 'Coming weeks',
        text: 'Schools may continue updating their policies, and SEVP may issue additional guidance or take enforcement action.',
        estimate: true,
      },
    ],
    process: {
      detail:
        'SEVP first issued a compliance-risk notice and then narrowed the CPT standard. Schools and DSOs are already applying that interpretation.',
      currentSummary: 'Schools are applying the new standard',
      waitingFor:
        'School implementation updates and any further SEVP clarification; there is no common resumption date.',
    },
  },
};
