import type { PolicyContent } from '../policy-types.ts';

export const h1bReform: PolicyContent = {
  id: 'h1b-reform',
  path: 'H-1B',
  tone: 'blue',
  effectState: 'not-in-effect',
  checkedOn: "2026-11-01",
  related: [
    "h1b-fee",
    "grace-period",
    "nonimmigrant-deference"
  ],
  process: {
    kind: 'federal-rulemaking',
    lastCompletedStage: 0,
    activeStage: 1,
    nextStage: 2,
  },
  sources: [
    {
      href: 'https://www.reginfo.gov/public/do/eoDetails?rrid=1505714',
      zh: 'OIRA 审查记录',
      en: 'OIRA review record',
    },
    {
      href: 'https://www.reginfo.gov/public/do/eAgendaViewRule?RIN=1615-AD00&pubId=202510',
      zh: '统一议程摘要（政府规则计划表）',
      en: 'Unified Agenda summary (the government’s rulemaking plan)',
    },
    {
      href: 'https://www.uscardforum.com/t/topic/527527',
      zh: '美卡论坛讨论',
      en: 'USCardForum discussion',
    },
    {
      "href": "https://www.reginfo.gov/public/Forward?SearchTarget=RegReview&textfield=1615-AD00",
      "zh": "OIRA · 1615-AD00 审查记录检索",
      "en": "OIRA · 1615-AD00 review search"
    }
  ],
  zh: {
    title: 'H-1B 改革：免抽签资格和外派岗位要重新审',
    short: 'H-1B 资格改革',
    status: 'OIRA 审查中 · 尚未生效',
    effectLabel: '尚未生效 · 提案内容未公开',
    agency: 'DHS / USCIS',
    documentId: '1615-AD00',
    tldr: 'DHS 打算重新规定哪些雇主可以免抽签（cap-exempt），并加严审查有违规记录的雇主和派到客户那里上班的岗位。提案正在 OIRA 审查，具体内容还没公开。',
    tags: ['H-1B', '第三方派驻', 'Cap-exempt'],
    summary:
      'DHS 打算重新规定 H-1B 免抽签（cap-exempt）的资格，并加严审查有违规记录的雇主，以及员工被派到客户现场工作的情况。具体标准和要交的材料，要等提案公开。',
    audience: '免抽签的雇主（如大学、研究机构）、被外派到客户现场的员工，以及有违规记录的公司。',
    caveat: '目前只有政府规则计划表里的一段摘要，具体怎么改要等提案公开。',
    background:
      '这项规则（RIN 1615-AD00）2026-08-24 送交 OIRA 审查。免抽签资格会影响谁要交 #02 的附加费，但这两项是不同的规则。',
    teaser: '免抽签和外派岗位如果改规，有些工作要证明的东西会多很多。',
    headline: '免抽签和外派岗位，可能要重新证明自己合格。',
    analysis:
      '计划里有三件事：谁能免抽签、有违规记录的雇主、外派到客户现场的岗位。如果写进正式规则，最先感到的是材料变多、审批变慢，然后才是公司愿意提供哪些岗位。',
    impacts: [
      {
        title: '对外派员工：客户现场的证明更重要',
        text: '合同、工作地点、岗位职责和实际工作是否一致，会直接影响申请。经常换项目的岗位，准备起来更麻烦。',
        examples: [
          '小陈是外包公司的员工，工资由外包公司发，但实际在客户那边上班。这次改革重点就是第三方派驻。如果最终规则要求更详细地说明实际工作地点、项目内容和工作安排，外包公司就得补材料，光有本公司的雇佣合同可能不够。',
          '小陈还是那个外包公司的员工，上一个项目结束后被派到另一家客户。发工资的雇主没变，但干活的地方和项目换了。如果新规要求详细说明第三方派驻，公司可能也要为新项目补材料。',
        ],
      },
      {
        title: '对免抽签的工作：资格要重新确认',
        text: '如果免抽签的定义改了，机构和岗位是什么关系会变得很关键。现在免抽签的雇主，改规后不一定还免。',
        examples: [
          '小林看中了一家机构，目前这家机构符合 H-1B 免抽签条件，HR 跟他说这份工作不用抽签。但这次改革要重新定义免抽签资格；如果最终标准把这家机构排除在外，它就不能再免抽签，小林也得重新打算。',
        ],
      },
      {
        title: '对公司：过去的违规记录会增加成本',
        text: '如果加严审查违规记录，公司过去的问题会变成更多材料、解释和等待时间。',
        examples: [
          '小周拿到一家公司的 offer，但这家公司以前违反过 H-1B 规定。改革要加强对这类雇主的审查，所以公司为小周提交申请时，过去的违规记录可能被重点审查。小周本人工资和学历再合格，也绕不开雇主的记录。',
        ],
      },
    ],
    outlook:
      '我们的判断：提案公开后，重点看两件事——资格门槛怎么变、要多交多少材料。前者决定你能不能走这条路，后者决定这条路贵不贵、慢不慢。',
    scenarios: [
      {
        name: '免抽签范围收紧',
        headline: '部分免抽签的工作要重新评估',
        assumption: '提案提高或重新规定免抽签的条件。',
        effects:
          '靠和大学等机构合作而免抽签的岗位要补证明；有人会重新考虑还能不能走免抽签。',
        signals: '免抽签的新定义、对合作关系的要求，以及在办案件怎么处理。',
      },
      {
        name: '外派证明加码',
        headline: '同样的岗位，准备时间更长',
        assumption: '外派仍然可以，但对客户现场的证明要求提高。',
        effects:
          '公司和客户之间来回准备文件会更慢，经常换项目的用工方式受影响最大。',
        signals: '关于工作地点、合同、谁来管理员工和现场检查的具体条文。',
      },
      {
        name: '改革范围缩小',
        headline: '主要是加强执法、多交材料',
        assumption: '公开的提案比计划表里写的范围窄。',
        effects: '守规矩的雇主资格基本不受影响，但准备材料和合规工作还是会增加。',
        signals: '提案和计划表摘要逐条对比，以及之后 DHS 对评论的回应。',
      },
    ],
    scope: [
      {
        label: '涉及谁',
        text: '免抽签的雇主、外派到客户现场的员工，以及有违规记录的公司。',
      },
      {
        label: '现在知道多少',
        text: '只有计划表里的方向；具体标准要看提案原文。',
      },
      {
        label: '和附加费的关系',
        text: '免抽签资格决定谁不用交 #02 的附加费，但两者是不同的规则。',
      },
    ],
    milestones: [
      { date: '2025-10 议程', text: 'DHS 在规则计划表里写明改革方向。' },
      { date: '2026-08-24', text: '提案送交 OIRA 审查。' },
    ],
    next: [
      {
        "date": "日期未定",
        "text": "OIRA 审完、DHS 公开提案；原定 8 月，新日期还没公布。"
      },
      {
        "date": "日期未定",
        "text": "提案公开后先征求公众意见，之后才是最终规则。",
        "estimate": true
      }
    ],
    process: {
      detail: '提案正在 OIRA 审查，内容还没公开。',
      currentSummary: 'OIRA 审查中',
      waitingFor: 'OIRA 审完，DHS 公开提案。',
    },
  },
  en: {
    title:
      'H-1B Reform: Cap-Exempt Status and Client-Site Jobs Under Review',
    short: 'H-1B Eligibility Reform',
    status: 'Under OIRA review · Not in effect',
    effectLabel: 'Not in effect · Proposal not yet public',
    agency: 'DHS / USCIS',
    documentId: '1615-AD00',
    tldr: 'DHS plans to redefine which employers can skip the H-1B lottery (cap-exempt) and to scrutinize employers with past violations and jobs placed at client sites more closely. The proposal is under OIRA review and its text is not public yet.',
    tags: ['H-1B', 'Third-party placement', 'Cap-exempt'],
    summary:
      'DHS plans to redefine who qualifies as cap-exempt for H-1B and to look harder at employers with past violations and at workers placed at client sites. The exact standards and paperwork will be known once the proposal is published.',
    audience:
      'Cap-exempt employers (such as universities and research institutes), workers placed at client sites, and companies with past violations.',
    caveat:
      'So far there is only a short summary in the government’s rulemaking plan; the details will come with the published proposal.',
    background:
      'The rule (RIN 1615-AD00) went to OIRA for review on August 24, 2026. Cap-exempt status affects who pays the #02 surcharge, but they are separate rules.',
    teaser:
      'If the rules for cap-exempt and client-site jobs change, some jobs will need a lot more proof.',
    headline:
      'Cap-exempt and client-site jobs may have to prove again that they qualify.',
    analysis:
      'The plan covers three things: who can be cap-exempt, employers with past violations and jobs placed at client sites. If they become rules, the first effect will be more paperwork and slower approvals; changes in which jobs companies offer would follow.',
    impacts: [
      {
        title: 'For workers at client sites: proof about the client site matters more',
        text: 'Whether the contract, worksite, duties and actual work line up will directly affect the petition. Jobs that change projects often will be harder to document.',
        examples: [
          'Chen is employed and paid by a staffing company but works at a client. The reform targets third-party placements. If the final rule requires more detail on the actual worksite, project and arrangement, the staffing company would have to supply it; its own employment contract may not be enough.',
          'Chen stays with the same staffing employer but moves to a new client after a project ends. The payroll employer is unchanged, but the worksite and project are new. If the rule requires fuller evidence for third-party placements, the company may need to document the new assignment too.',
        ],
      },
      {
        title: 'For cap-exempt jobs: eligibility needs rechecking',
        text: 'If the definition changes, the institution’s relationship to the job becomes key. An employer that is cap-exempt today may not be after the change.',
        examples: [
          'An organization currently qualifies for an H-1B cap exemption, so HR tells Lin the job does not require cap selection. The reform plans to redefine that eligibility. If the final definition excludes the organization, it can no longer file cap-exempt, and Lin would need a new plan.',
        ],
      },
      {
        title: 'For companies: past violations raise costs',
        text: 'If past violations get more scrutiny, a company’s history turns into more paperwork, more explaining and more waiting.',
        examples: [
          'Zhou’s prospective employer has previously violated H-1B program requirements. The reform proposes closer scrutiny of employers with that history, which could affect the petition filed for Zhou. Zhou’s own salary and qualifications do not offset the employer’s record.',
        ],
      },
    ],
    outlook:
      'Our view: once the proposal is out, look at two things: how the eligibility bar changes and how much more paperwork is required. The first decides whether a path is open to you; the second, how costly and slow it is.',
    scenarios: [
      {
        name: 'Cap-exempt status narrowed',
        headline: 'Some cap-exempt jobs need a second look',
        assumption:
          'The proposal raises or redefines the cap-exempt requirements.',
        effects:
          'Jobs that are cap-exempt through ties to a university or similar institution would need more proof; some job seekers will rethink whether that path is still open.',
        signals:
          'The new definition, what affiliation is required and how pending cases are handled.',
      },
      {
        name: 'More placement evidence',
        headline: 'The same job takes longer to prepare',
        assumption:
          'Client-site placements stay allowed, but proof requirements go up.',
        effects:
          'Paperwork between the employer and the client slows down, and staffing models with frequent project changes are hit hardest.',
        signals:
          'The specific rules on worksites, contracts, who supervises the worker and site inspections.',
      },
      {
        name: 'Reform scope narrows',
        headline: 'Mostly more enforcement and paperwork',
        assumption:
          'The published proposal is narrower than the plan described.',
        effects:
          'Compliant employers keep their eligibility, but paperwork and compliance work still increase.',
        signals:
          'A line-by-line comparison of the proposal with the plan summary, then DHS’s response to comments.',
      },
    ],
    scope: [
      {
        label: 'Who it affects',
        text: 'Cap-exempt employers, workers placed at client sites and companies with past violations.',
      },
      {
        label: 'What we know now',
        text: 'Only the direction in the rulemaking plan; the exact standards will be in the proposal.',
      },
      {
        label: 'Link to the surcharge',
        text: 'Cap-exempt status decides who skips the #02 surcharge, but they are separate rules.',
      },
    ],
    milestones: [
      {
        date: 'October 2025 agenda',
        text: 'DHS described the reform in its rulemaking plan.',
      },
      {
        date: '2026-08-24',
        text: 'The proposal went to OIRA for review.',
      },
    ],
    next: [
      {
        "date": "Date unknown",
        "text": "OIRA finishes review and DHS publishes the proposal; it was planned for August and no new date has been announced."
      },
      {
        "date": "Date unknown",
        "text": "Once published, the proposal opens for public comment before any final rule.",
        "estimate": true
      }
    ],
    process: {
      detail:
        'The proposal is under OIRA review; its text is not public yet.',
      currentSummary: 'Under OIRA review',
      waitingFor:
        'OIRA finishes review and DHS publishes the proposal.',
    },
  },
};
