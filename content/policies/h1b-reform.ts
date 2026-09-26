import type { PolicyContent } from '../policy-types.ts';

export const h1bReform: PolicyContent = {
  id: 'h1b-reform',
  path: 'H-1B',
  tone: 'blue',
  effectState: 'not-in-effect',
  checkedOn: '2026-09-26',
  related: ['h1b-fee', 'grace-period'],
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
      zh: '统一议程摘要',
      en: 'Unified Agenda summary',
    },
    {
      href: 'https://www.uscardforum.com/t/topic/527527',
      zh: '美卡论坛讨论',
      en: 'USCardForum discussion',
    },
  ],
  zh: {
    title: 'H-1B 分类改革：豁免与派驻路径待重审',
    short: 'H-1B 分类体系改革',
    status: 'OIRA 审查中 · 尚未生效',
    effectLabel: '尚未生效 · 正文未公开',
    agency: 'DHS / USCIS',
    documentId: '1615-AD00',
    tldr: 'DHS 打算重新界定 H-1B cap-exempt 资格，并加强对有违规记录雇主和第三方工作地点的审查。具体资格边界和证明要求，要以 NPRM 正文为准。',
    tags: ['H-1B', '第三方派驻', 'Cap-exempt'],
    summary:
      'DHS 打算重新界定 H-1B 免年度名额限制（cap-exempt）的资格，并加强对有违规记录雇主和第三方工作地点的审查。具体边界和材料要求，要等提案正文。',
    audience: 'cap-exempt 雇主、第三方派驻人员及有违规记录的企业。',
    caveat: '议程摘要只给了方向。具体资格边界和证明材料，要等公开提案。',
    background:
      'RIN 1615-AD00 在 2026-08-24 送交 OIRA。免抽签资格和费用范围有关联，但这项分类改革和 H-1B 附加费是两条不同的规则。',
    teaser: '豁免资格与第三方派驻审查若调整，部分岗位的证明成本可能上升。',
    headline: '免抽签和派驻岗位，可能需要重新证明合规基础。',
    analysis:
      '议程涉及三件事：cap-exempt 资格、违规雇主、第三方工作地点审查。如果这些方向写进正式条款，最先感受到的是材料变多、办理变慢。之后才会传导到企业愿意提供哪些岗位。',
    impacts: [
      {
        title: '对派驻人员：客户现场证据可能更重要',
        text: '合同、工作地点、岗位职责和实际安排对不对得上，会直接影响案件准备。项目经常变的岗位，协调成本更高。',
        examples: [
          '小林看中了一家机构，目前这家机构符合 H-1B 免抽签条件，所以 HR 跟他说这份工作不用参加抽签。但这次改革要重新定义免抽签资格。如果最终标准把这机构排除在外，那它就没法再按原来的条件免抽签了，小林“不用抽签”的想法也得跟着变。具体哪些机构会受影响，得等正式规则出来才知道。',
        ],
      },
      {
        title: '对 cap-exempt 路径：需要重新核对资格依据',
        text: '如果豁免定义改了，机构和岗位之间的关系会成为关键。不能只凭雇主名字就认定以后一定免抽签。',
        examples: [
          '小陈是外包公司的员工，工资由外包公司发，但实际在客户那边上班。这次改革重点就是要管这种第三方派驻。如果最终规则要求更详细地说明实际工作地点、项目内容和工作安排，外包公司就得补材料，光拿本公司的雇佣合同可能不够用。不过具体要补什么，现在还没公布。',
          '小陈还是那个外包公司的员工，但上一个项目结束了，被派到另一家客户那里。发工资的雇主没变，但实际干活的地方和项目换了。如果新规要求第三方派驻要详细说明，那公司可能也得为新项目补材料。具体要怎么做还没公布，所以现在不能说这次换客户就一定得办什么新手续。',
        ],
      },
      {
        title: '对企业：合规历史可能影响办理成本',
        text: '如果对违规记录的审查加强，企业过去的合规问题会变成更多材料、解释和时间成本。',
        examples: [
          '小周拿到一家公司的 offer，但这公司以前违反过 H-1B 规定。这次改革要加强对这类雇主的审查，所以公司帮小周提交申请时，过去的违规记录可能会被重点盯着。就算小周本人工资和学历都够，也抵消不了雇主的黑历史。具体审查会严到什么程度，还得等规则正文。',
        ],
      },
    ],
    outlook:
      '我们的预判：正式提案出来后，重点比较两件事——资格门槛怎么变，证明材料要多多少。前者可能改变你能走哪条路，后者会让原来的路更贵、更慢。',
    scenarios: [
      {
        name: '豁免边界收紧',
        headline: '部分免抽签安排可能需要重评',
        assumption: 'NPRM 提高或重新界定 cap-exempt 资格条件。',
        effects:
          '依赖特定机构关系的职位可能要补强依据；有些人会重新评估还能不能走免抽签。',
        signals: '豁免定义、关联关系要求，以及现有案件怎么过渡。',
      },
      {
        name: '派驻证明增加',
        headline: '同一岗位也可能需要更多准备时间',
        assumption: '提案保留这条路径，但提高第三方地点的证明要求。',
        effects:
          '企业和客户之间的文件协调会变慢，项目频繁变更的用工模式受影响更大。',
        signals: '工作地点、合同、监督关系和检查要求的具体条文。',
      },
      {
        name: '改革范围缩小',
        headline: '主要变化可能集中在执法与材料层面',
        assumption: '最终公开的内容比议程方向更窄。',
        effects: '对多数规范雇主的资格影响有限，但材料准备和合规管理仍会增加。',
        signals: 'NPRM 和议程摘要的逐项差异，以及后续的评论回应。',
      },
    ],
    scope: [
      {
        label: '关注对象',
        text: 'Cap-exempt 雇主、第三方派驻及有违规记录的企业。',
      },
      {
        label: '当前依据',
        text: '议程摘要只说方向；正式资格边界要看公开文本。',
      },
      {
        label: '与附加费关系',
        text: '免抽签资格和费用范围相关，但是两条不同的规则。',
      },
    ],
    milestones: [
      { date: '2025-10 议程', text: 'DHS 首次较清楚披露改革方向。' },
      { date: '2026-08-24', text: '拟议规则送交 OIRA，进入发布前审查。' },
    ],
    next: [
      {
        date: '2026-09—年末',
        text: '统一议程的 2026 年 8 月 NPRM 目标月份已过，正文仍未公开；可能发布 NPRM 并开放评论。',
        estimate: true,
      },
      {
        date: '2027+',
        text: '若推进，最终规则与诉讼更可能发生在 2027 年以后。',
        estimate: true,
      },
    ],
    process: {
      detail: '拟议规则处于 OIRA 发布前审查，正文尚未公开。',
      currentSummary: 'OIRA 发布前审查',
      waitingFor: 'OIRA 完成审查及 DHS 公开提案；尚无确认发布日期。',
    },
  },
  en: {
    title:
      'H-1B Classification Reform: Exemptions and Third-Party Placements Under Review',
    short: 'H-1B Classification Reform',
    status: 'Under OIRA review · Not in effect',
    effectLabel: 'Not in effect · Text unpublished',
    agency: 'DHS / USCIS',
    documentId: '1615-AD00',
    tldr: 'DHS plans to redefine eligibility for cap-exempt H-1B petitions and increase scrutiny of employers with compliance violations and third-party worksites. The precise eligibility lines and evidence requirements will not be known until the NPRM is public.',
    tags: ['H-1B', 'Third-party placement', 'Cap-exempt'],
    summary:
      'DHS plans to redefine H-1B cap-exempt eligibility and increase scrutiny of employers with program violations and third-party worksites. The precise eligibility boundaries and evidence requirements await the published proposal.',
    audience:
      'cap-exempt employers, workers at third-party sites and employers with violation records.',
    caveat:
      'The agenda gives direction only; eligibility boundaries and evidence requirements await the public proposal.',
    background:
      'RIN 1615-AD00 entered OIRA review on August 24, 2026. Exemption eligibility relates to fee coverage, but classification reform and the H-1B surcharge are separate rules.',
    teaser:
      'Changes to exemption eligibility and third-party placement review could increase the cost of proving some roles qualify.',
    headline:
      'Cap-exempt and placement-based roles may need to reestablish their compliance basis.',
    analysis:
      'The agenda addresses cap-exempt eligibility, noncompliant employers, and scrutiny of third-party worksites. If those directions become formal provisions, the first effects may be heavier evidence burdens and longer processing, followed by changes in the roles employers are willing to offer.',
    impacts: [
      {
        title: 'For placed workers: client-site evidence may matter more',
        text: 'Consistency among contracts, worksites, duties, and actual arrangements may become more important to case preparation. Roles with frequent project changes could face higher coordination costs.',
        examples: [
          'An organization currently qualifies for an H-1B cap exemption, so HR tells Lin the job does not require annual cap selection. The reform plans to revise that eligibility. If the final definition excludes the organization, it cannot continue relying on the old qualification. That could change Lin’s expectations, although the unpublished text does not yet identify the affected organizations.',
        ],
      },
      {
        title: 'For cap-exempt paths: eligibility grounds need a fresh review',
        text: 'If exemption definitions change, the relationship between an institution and a role may become decisive. An employer’s name alone cannot establish that a future filing will remain cap-exempt.',
        examples: [
          'Chen is employed and paid by a staffing company but works at a client. The reform targets third-party placements, potentially bringing closer review of the location, project, and actual arrangement. If the final rule adds evidence requirements, the employer would need to supply them rather than rely only on its employment contract. The specific new documents have not been announced.',
          'Chen remains with the same staffing employer but moves to a new client after a project ends. Because the reform targets the placement arrangement rather than only the payroll employer, a final requirement for fuller project evidence could also matter for that assignment. This illustrates possible preparation needs, not a confirmed requirement for a new type of filing.',
        ],
      },
      {
        title: 'For employers: compliance history may affect filing costs',
        text: 'If review of violations intensifies, past compliance problems may produce more documentation, explanation, and delay.',
        examples: [
          'Zhou’s prospective employer has previously violated H-1B program requirements. The reform explicitly proposes closer scrutiny of employers with that history, which could affect the petition filed for Zhou. The concern comes from employer compliance, even if Zhou’s salary and qualifications are suitable. The detailed review standards remain unpublished.',
        ],
      },
    ],
    outlook:
      'Our outlook: when a formal proposal appears, the key comparison will be between changes to eligibility and added proof requirements. The former could alter available paths; the latter could raise the cost of using existing ones.',
    scenarios: [
      {
        name: 'Exemption boundary narrows',
        headline: 'Some cap-exempt arrangements may need reassessment',
        assumption:
          'The NPRM raises or redefines cap-exempt eligibility requirements.',
        effects:
          'Roles relying on particular institutional relationships may need stronger support. Some job seekers may reassess whether the cap-exempt path remains available.',
        signals:
          'Exemption definitions, affiliation requirements, and transition terms for current cases.',
      },
      {
        name: 'More placement evidence',
        headline: 'The same role may require more preparation time',
        assumption:
          'The proposal preserves the pathway but raises evidence requirements for third-party sites.',
        effects:
          'Document coordination between employers and clients may slow, and work models with frequent project changes may be more affected.',
        signals:
          'Specific provisions on worksites, contracts, supervision, and inspections.',
      },
      {
        name: 'Reform scope narrows',
        headline: 'Most changes may focus on enforcement and documentation',
        assumption:
          'The public proposal is narrower than the direction described in the agenda.',
        effects:
          'Eligibility effects may be limited for most compliant employers, while document preparation and compliance management could still increase.',
        signals:
          'A provision-by-provision comparison of the NPRM and agenda summary, followed by responses to comments.',
      },
    ],
    scope: [
      {
        label: 'Focus populations',
        text: 'Cap-exempt employers, third-party placements, and companies with compliance violations.',
      },
      {
        label: 'Current basis',
        text: 'The agenda summary describes the direction; public text is needed to establish formal eligibility boundaries.',
      },
      {
        label: 'Relationship to surcharge',
        text: 'Cap-exempt eligibility relates to fee coverage but belongs to a separate rule.',
      },
    ],
    milestones: [
      {
        date: 'October 2025 agenda',
        text: 'DHS first described the reform direction in relatively specific terms.',
      },
      {
        date: '2026-08-24',
        text: 'The proposed rule entered OIRA prepublication review.',
      },
    ],
    next: [
      {
        date: 'Sep.–late 2026',
        text: 'DHS may publish an NPRM and open a public comment period.',
        estimate: true,
      },
      {
        date: '2027+',
        text: 'If the rule advances, a final rule and related litigation are more likely in 2027 or later.',
        estimate: true,
      },
    ],
    process: {
      detail:
        'The proposed rule is in OIRA prepublication review. Its text is not yet public.',
      currentSummary: 'OIRA prepublication review',
      waitingFor:
        'Completion of OIRA review and publication of the DHS proposal; no publication date is confirmed.',
    },
  },
};
