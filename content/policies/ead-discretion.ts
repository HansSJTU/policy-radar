import type { PolicyContent } from '../policy-types.ts';

export const eadDiscretion: PolicyContent = {
  id: 'ead-discretion',
  path: 'OPT',
  tone: 'amber',
  effectState: 'not-in-effect',
  checkedOn: '2026-09-22',
  related: ['opt-fee', 'h4-ead'],
  process: {
    kind: 'federal-rulemaking',
    lastCompletedStage: 3,
    activeStage: null,
    nextStage: 4,
  },
  sources: [
    {
      href: 'https://www.federalregister.gov/d/2026-11285',
      zh: 'Federal Register NPRM',
      en: 'Federal Register NPRM',
    },
    {
      href: 'https://www.regulations.gov/document/USCIS-2026-0067-0001',
      zh: 'Regulations.gov 文档',
      en: 'Regulations.gov document',
    },
    {
      href: 'https://www.uscardforum.com/t/topic/521188',
      zh: '美卡论坛讨论',
      en: 'USCardForum discussion',
    },
  ],
  zh: {
    title: 'I-765 拟扩大犯罪记录审查',
    short: 'I-765 犯罪记录审查',
    status: '评论期已结束 · 尚未生效',
    effectLabel: '尚未生效',
    agency: 'DHS / USCIS',
    documentId: '1615-AC98',
    tldr: 'DHS 提议要求 USCIS 对 OPT、H-4 EAD 等多数酌情工作许可加强犯罪记录审查。申请人如果曾被捕、被刑事指控、被起诉或被定罪，USCIS 通常会拒绝 I-765，除非有重大的相反公共利益。',
    tags: ['OPT', 'H-4 EAD', 'I-765'],
    summary:
      'DHS 打算把犯罪记录的负面裁量标准，扩大到 OPT、H-4 EAD 等多数酌情工作许可申请。有相关被捕、刑事指控、起诉或定罪记录的，I-765 通常会被拒，除非存在重大的相反公共利益。',
    audience: '有相关刑事记录、申请 OPT、H-4 EAD 等酌情工作许可的人。',
    caveat:
      '普通的民事交通罚单不能一概当成刑事记录。提案也不会自动撤销已经签发的 EAD。',
    background:
      'RIN 1615-AC98 在 2026-06-05 发布，评论期 8 月 4 日结束。拟议标准覆盖多数 8 CFR 274a.12(c) 类别，并要求相关初次和续期 I-765 提交生物识别信息。',
    teaser:
      '相关刑事记录可能增加申请材料和裁量风险，影响 OPT 与其他 EAD 衔接。',
    headline: '刑事记录的审查风险，可能传导到工作许可与入职时间。',
    analysis:
      '如果提案定稿，有记录的申请人要多花力气解释记录和案件结果。影响集中在相关记录和适用类别上。能递交申请，和最终拿到有利裁量，中间会多一道更高的材料门槛。',
    impacts: [
      {
        title: '对有相关记录的人：案件结果材料更关键',
        text: '被捕、刑事指控、定罪的记录，可能要逐项解释。没有被定罪，也不代表提案下就没有负面裁量因素。',
        examples: [
          '小张以前因刑事案件被逮捕过，但后来没被定罪。可是提案把“被捕”这类记录列为通常拒绝工作许可的理由，除非申请人能证明有非常重要的公共利益需要照顾。所以如果这条标准用在他的 OPT 申请上，没定罪不代表这段记录不会影响结果。真正的风险是工作许可可能被拒，而不只是审批变慢。',
        ],
      },
      {
        title: '对工作衔接：审查风险也会影响时间安排',
        text: '如果需要补材料，或者个案评估更复杂，什么时候能准备好、什么时候能上班就更难预测。雇主也得跟着调整入职时间。',
      },
      {
        title: '对其他申请人：重点是类别与记录性质',
        text: '不能把这项提案说成“所有 OPT 都会被拒”，也不能把普通民事罚单直接当成刑事记录。类别和事实不同，结论也不同。',
        examples: [
          '小陈之前已经拿到过工作许可，但他本人有提案里提到的刑事记录。如果新标准适用他下次续期，移民局会按续期时的规定重新决定批不批，不会因为上次批了这次就自动给。如果续期被拒，旧卡到期后他就没法再靠这类许可继续工作了。',
        ],
      },
    ],
    outlook:
      '我们的预判：看最终条款怎么界定三件事——“相关犯罪行为”、公共利益例外、证据要求。这比笼统说一句“加强审查”更能说明实际影响。边界清不清楚，也会影响各地处理是否一致。',
    scenarios: [
      {
        name: '按提案广泛适用',
        headline: '有相关记录的申请人面临更高解释门槛',
        assumption: '多数酌情工作许可类别纳入新的负面裁量标准。',
        effects: '记录性质和案件材料会更重要，部分人的申请风险和准备成本上升。',
        signals: '最终适用的类别、负面因素标准和公共利益例外。',
      },
      {
        name: '标准边界收窄',
        headline: '影响可能更集中在明确列举的情形',
        assumption: '最终规则缩小适用行为，或者澄清排除情形。',
        effects:
          '边界更清楚，不确定性会少一些。但记录落在范围内的，仍要面对个案审查。',
        signals: '评论回应、行为定义、记录处分和证据规则。',
      },
      {
        name: '延后推行',
        headline: '当前标准延续，材料准备仍需完整',
        assumption: '机构继续审阅或修改，还没有新的生效规则。',
        effects: '这项提案本身暂时不增加新的拒绝标准，现有审查要求继续适用。',
        signals: '最终规则公告，以及申请表和执行指引的更新。',
      },
    ],
    scope: [
      {
        label: '相关类别',
        text: '包括 OPT 与 H-4 EAD 在内的多数 8 CFR 274a.12(c) 类别。',
      },
      {
        label: '记录性质',
        text: '刑事行为和记录需要具体判断，不能泛化到所有民事交通罚单。',
      },
      {
        label: '已签发卡片',
        text: '提案本身不会自动撤销已有 EAD。续期时按什么标准，要另看最终规则。',
      },
    ],
    milestones: [
      { date: '2026-03-31', text: 'OIRA 完成 NPRM 的发布前审查。' },
      { date: '2026-06-05', text: 'DHS 发布酌情工作许可 NPRM。' },
      { date: '2026-08-04', text: '60 天公众评论期结束。' },
    ],
    next: [
      {
        date: '下一步',
        text: 'DHS 审阅评论并决定是否修改或发布最终规则；目前没有公开日期。',
      },
      {
        date: '日期未定',
        text: '若定稿，新标准只会按最终规则规定的生效日适用于相关初次或续期申请。',
        estimate: true,
      },
    ],
    process: {
      detail:
        'DHS 已经发布 NPRM，公众评论期在 2026 年 8 月 4 日结束。目前还没有最终规则或生效日期。',
      currentSummary: '公众评论期已结束，尚未形成最终规则',
      waitingFor: 'DHS 审阅意见并决定是否修改或定稿；日期未定。',
    },
  },
  en: {
    title: 'Proposed Expansion of Criminal-Record Review for Form I-765',
    short: 'I-765 Criminal-Record Review',
    status: 'Comment period closed · Not in effect',
    effectLabel: 'Not in effect',
    agency: 'DHS / USCIS',
    documentId: '1615-AC98',
    tldr: 'DHS proposes enhanced criminal-record review for most discretionary employment-authorization applications, including OPT and H-4 EAD. USCIS would generally deny Form I-765 if the applicant has been arrested, criminally charged, indicted, or convicted, unless a significant countervailing public interest exists.',
    tags: ['OPT', 'H-4 EAD', 'Form I-765'],
    summary:
      'DHS proposes extending adverse criminal-record discretion standards to most discretionary work-permit applications, including OPT and H-4 EAD. Relevant arrests, criminal charges, indictments or convictions would generally lead to I-765 denial unless significant countervailing public interests apply.',
    audience:
      'applicants with related criminal records seeking discretionary work authorization, including OPT and H-4 EAD.',
    caveat:
      'Ordinary civil traffic tickets are not automatically criminal records; the proposal does not automatically revoke existing EADs.',
    background:
      'RIN 1615-AC98 was published on June 5, 2026 and comments closed August 4. The proposal covers most 8 CFR 274a.12(c) categories and includes biometrics for initial and renewal I-765 filings.',
    teaser:
      'Relevant criminal records could add evidence and discretionary risk, affecting OPT and other EAD transitions.',
    headline:
      'Criminal-record review could affect work authorization and employment start dates.',
    analysis:
      'If finalized, the proposal could require some applicants to explain criminal records and case outcomes more fully. The effect would concentrate on relevant records and covered categories. A higher evidence threshold could separate eligibility to apply from a favorable exercise of discretion.',
    impacts: [
      {
        title:
          'For people with relevant records: case dispositions matter more',
        text: 'Arrests, criminal charges, and convictions may need separate explanations. The absence of a conviction would not necessarily mean there is no adverse discretionary factor under the proposal.',
        examples: [
          'Zhang was arrested in a criminal case but not convicted. The proposal treats specified criminal history, including arrest, as a ground for generally denying these work permits absent significant countervailing public interests. If applied to OPT, the lack of a conviction would not by itself remove the approval risk; the issue is possible denial, not merely delay.',
        ],
      },
      {
        title: 'For employment transitions: review risk affects timing',
        text: 'If supplemental evidence or more complex individual review is required, preparation and work start dates may become harder to predict. Employers may also need to adjust onboarding.',
      },
      {
        title:
          'For other applicants: category and nature of the record are central',
        text: 'The proposal cannot be reduced to a claim that every OPT application will be denied, nor should an ordinary civil traffic ticket automatically be treated as a criminal record. Categories and facts require separate analysis.',
        examples: [
          'Chen previously received a work permit but has criminal history covered by the proposal. If the new standard governs renewal, the agency would assess that application under the new standard rather than issue a card automatically because an earlier one was approved. A denial could prevent continued work through that category after the existing permission ends.',
        ],
      },
    ],
    outlook:
      'Our outlook: the final definitions of relevant criminal conduct, public-interest exceptions, and evidence requirements will explain the practical effect better than a general statement about tougher review. Clear boundaries would also affect consistency in adjudication.',
    scenarios: [
      {
        name: 'Broad application as proposed',
        headline:
          'Applicants with relevant records face a higher burden of explanation',
        assumption:
          'Most discretionary employment-authorization categories become subject to the new adverse discretionary standard.',
        effects:
          'The nature of a record and its case documents would matter more, potentially raising filing risk and preparation costs for some people.',
        signals:
          'Final covered categories, standards for adverse factors, and public-interest exceptions.',
      },
      {
        name: 'Narrower boundaries',
        headline: 'Effects concentrate on clearly identified circumstances',
        assumption:
          'The final rule narrows covered conduct or clarifies exclusions.',
        effects:
          'Clearer boundaries may reduce some uncertainty, while people whose records remain within scope would still face individual review.',
        signals:
          'Responses to comments, definitions of conduct, disposition of records, and evidence rules.',
      },
      {
        name: 'Implementation delayed',
        headline:
          'Current standards continue, while complete preparation remains necessary',
        assumption:
          'The agency keeps reviewing or revising the rule, with no new standard in effect.',
        effects:
          'The proposal itself would not yet add a new denial standard. Existing review requirements would continue to apply.',
        signals:
          'Publication of a final rule and updates to forms and implementation guidance.',
      },
    ],
    scope: [
      {
        label: 'Covered categories',
        text: 'Most categories under 8 CFR 274a.12(c), including OPT and H-4 EAD.',
      },
      {
        label: 'Nature of records',
        text: 'Criminal conduct and records require specific analysis and should not be generalized to every civil traffic ticket.',
      },
      {
        label: 'Existing cards',
        text: 'The proposal would not automatically revoke an issued EAD; future renewal standards require separate analysis.',
      },
    ],
    milestones: [
      {
        date: '2026-03-31',
        text: 'OIRA completed prepublication review of the NPRM.',
      },
      {
        date: '2026-06-05',
        text: 'DHS published the discretionary employment-authorization NPRM.',
      },
      {
        date: '2026-08-04',
        text: 'The 60-day public comment period closed.',
      },
    ],
    next: [
      {
        date: 'Next step',
        text: 'DHS will review comments and decide whether to revise or finalize the rule; no public date is available.',
      },
      {
        date: 'Date unknown',
        text: 'If finalized, the new standard would apply to affected initial or renewal filings only according to the final rule’s effective-date provisions.',
        estimate: true,
      },
    ],
    process: {
      detail:
        'DHS published the NPRM and the public comment period closed on August 4, 2026. There is no final rule or effective date.',
      currentSummary: 'Comment period closed; no final rule',
      waitingFor:
        'DHS review of comments and a decision on revisions or a final rule; no date is set.',
    },
  },
};
