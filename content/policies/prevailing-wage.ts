import type { PolicyContent } from '../policy-types.ts';

export const prevailingWage: PolicyContent = {
  id: 'prevailing-wage',
  path: 'H-1B',
  tone: 'amber',
  effectState: 'not-in-effect',
  checkedOn: '2026-09-22',
  related: ['h1b-weighted-selection', 'h1b-fee'],
  process: {
    kind: 'federal-rulemaking',
    lastCompletedStage: 3,
    activeStage: null,
    nextStage: 4,
  },
  sources: [
    {
      href: 'https://www.federalregister.gov/d/2026-06017',
      zh: 'Federal Register NPRM',
      en: 'Federal Register NPRM',
    },
    {
      href: 'https://www.dol.gov/newsroom/releases/eta/eta20260326-0',
      zh: 'DOL 规则说明',
      en: 'DOL rule summary',
    },
    {
      href: 'https://www.uscardforum.com/t/topic/439546',
      zh: '美卡论坛讨论',
      en: 'USCardForum discussion',
    },
  ],
  zh: {
    title: 'H-1B / PERM 法定工资门槛拟上调',
    short: 'H-1B / PERM 工资门槛',
    status: '评论期已结束 · 尚未生效',
    effectLabel: '尚未生效',
    agency: 'DOL',
    documentId: '1205-AC30',
    tldr: 'DOL 提议把 H-1B、H-1B1、E-3 和 PERM 使用的四级法定工资门槛，从约第 17、34、50、67 百分位提高到第 34、52、70、88 百分位。这项提案尚未生效。',
    tags: ['OPT → H-1B', 'H-1B', 'PERM'],
    summary:
      'DOL 打算把 H-1B、H-1B1、E-3 和 PERM 使用的四级法定工资门槛，从约第 17、34、50、67 百分位提高到第 34、52、70、88 百分位。',
    audience: 'H-1B、H-1B1、E-3 与 PERM 的申请人及承担工资的雇主。',
    caveat: '提案改的是法定工资下限，和 H-1B 抽签权重是两套规则。',
    background:
      'RIN 1205-AC30 在 2026-03-27 发布，公众评论期 5 月 26 日结束。2026 年 8 月的统一议程仍把它列在提案阶段；DOL 还没有发布最终规则，现行工资等级的计算方式没有改变。',
    teaser: '一次性费用之外，持续工资成本可能进一步压缩雇主的担保空间。',
    headline: '持续多年的工资预算，可能成为另一道担保门槛。',
    analysis:
      '如果这项提案定稿，影响会落在长期的用工成本上，而不只是一笔申请费。本来就卡在预算边界的职位，雇主只有三个选择：涨工资、改招聘计划，或者放弃担保。',
    impacts: [
      {
        title: '对求职者：部分岗位可能退出可担保范围',
        text: '如果雇主没法把工资提到门槛，这类岗位可能就不招了。入门岗位和预算紧张的单位受影响更大。',
        examples: [
          '假设某个岗位现在的法定工资门槛是每年 8 万美元，雇主也按这个数给了 offer。但如果新标准把这个岗位的门槛提到 9 万，而且适用于这份申请，雇主就得把 offer 提到至少 9 万才能过关。要是公司不愿加钱，那就没法按原工资办下来。这里的金额只是举例说明，不是真实标准。',
          '小林和小陈都因为新标准得涨工资。小林的公司愿意把 offer 提到新门槛；小陈的公司不愿加预算，只肯给原来的工资。所以两个人面对的是同一个要求，但只有愿意涨薪的雇主才能继续办下去。',
        ],
      },
      {
        title: '对在职者：影响也可能出现在下一次申请',
        text: '延期或换雇主需要提交新的 LCA 时，也要按届时适用的规则重新核对工资。别只盯着第一次担保。',
        examples: [
          '小陈上次办 H-1B 的时候，工资是符合当时门槛的。现在他想跳槽，新公司愿意给同样的工资。但如果新标准生效了，而且这个岗位的门槛已经涨了，那公司就得把 offer 再往上提，才能让新申请达标。以前批过不代表现在也能过。',
          '小王的H-1B签证和原来的LCA（也就是劳工条件申请）都快到期了，公司准备帮他续三年，所以得重新办一份LCA。虽然公司、岗位、工作地点都没变，但如果新的工资标准适用于这次申请，公司就得按新标准重新核一遍他的工资。要是小王现在的工资低于新的法定门槛，公司就必须给他涨薪，才能满足延期申请的要求。如果公司不愿意增加这笔预算，那就没法按现在的工资水平帮他办延期。至于哪些延期申请会受到新标准的影响，还得等最终的规则和过渡安排公布后才能确定。',
        ],
      },
      {
        title: '对长期路径：PERM 预算可能同步承压',
        text: '如果 PERM 也一起调整，企业从工作签证到绿卡的多年预算都要重算。抽签和工资门槛仍然是两件事。',
        examples: [
          '小李的公司准备给他办 PERM 绿卡，长期用工预算也是按现在的工资水平安排的。如果新标准把这个岗位的法定工资门槛提高了，公司就得重新算今后的人工成本。这不是一次性费用，而是持续性的工资支出，所以公司可能会重新考虑还值不值得继续办绿卡。',
        ],
      },
    ],
    outlook:
      '我们的预判：实际影响会因职业、地区和雇主预算而分化。最终涨多少、过渡期怎么安排，决定成本是一次性压下来，还是分批落到新申请上。',
    scenarios: [
      {
        name: '按提案上调',
        headline: '边际岗位更难维持担保预算',
        assumption: '提案里的四级工资结构基本保留。',
        effects:
          '有些雇主会涨工资，有些会减少受覆盖岗位。资金充裕的企业更容易消化。',
        signals: '最终的工资计算方式、覆盖范围和企业的薪资预算。',
      },
      {
        name: '调幅／过渡调整',
        headline: '成本仍会上升，但调整窗口可能更长',
        assumption: '最终文本降低涨幅，或者给出实质性过渡安排。',
        effects:
          '雇主可以分期调整招聘和薪资。申请时间和过渡条件会影响不同员工的待遇。',
        signals: '分阶段实施、存量申请怎么处理、生效边界在哪。',
      },
      {
        name: '暂未定稿',
        headline: '当前成本结构延续，企业保留预算弹性',
        assumption: '机构继续审阅或重写提案。',
        effects: '眼前压力可能减轻，但多年担保规划仍要预留涨薪空间。',
        signals: '最终规则何时送审、议程变动和后续公告。',
      },
    ],
    scope: [
      { label: '覆盖项目', text: 'H-1B、H-1B1、E-3 及 PERM 的相关工资要求。' },
      { label: '提案结构', text: '四级门槛拟移至约第 34、52、70、88 百分位。' },
      {
        label: '当前适用',
        text: '提案还没有改变现行工资标准；最终怎么适用，要看生效日和过渡条款。',
      },
    ],
    milestones: [
      {
        date: '2025-09-19',
        text: '总统公告要求 DOL 启动规则制定，调整 H-1B prevailing wage 等级。',
      },
      {
        date: '2026-03-27',
        text: 'DOL 发布 NPRM，提出第 34、52、70、88 百分位的新四级工资结构。',
      },
      { date: '2026-05-26', text: '60 天公众评论期结束，DOL 开始审阅意见。' },
    ],
    next: [
      {
        date: '下一步',
        text: 'DOL 可能修改提案并将最终规则送交 OIRA；目前没有公开完成日期。',
      },
      {
        date: '日期未定',
        text: '只有最终规则发布并到达其生效日后，新工资等级才会开始适用。',
        estimate: true,
      },
    ],
    process: {
      detail:
        'DOL 已经发布 NPRM，公众评论期在 2026 年 5 月 26 日结束。目前仍在提案阶段，DOL 要审阅意见之后才能发布最终规则。',
      currentSummary: '公众评论期已结束，等待后续规则',
      waitingFor: 'DOL 审阅意见、修改提案或推进最终规则；日期未定。',
    },
  },
  en: {
    title: 'Proposed Increase to H-1B / PERM Wage Floors',
    short: 'H-1B / PERM Wage Floors',
    status: 'Comment period closed · Not in effect',
    effectLabel: 'Not in effect',
    agency: 'DOL',
    documentId: '1205-AC30',
    tldr: 'DOL proposes raising the four prevailing-wage thresholds used for H-1B, H-1B1, E-3, and PERM cases from roughly the 17th, 34th, 50th, and 67th percentiles to the 34th, 52nd, 70th, and 88th percentiles. The proposal is not in effect.',
    tags: ['OPT → H-1B', 'H-1B', 'PERM'],
    summary:
      'DOL proposes raising the four prevailing-wage thresholds used for H-1B, H-1B1, E-3 and PERM from approximately the 17th, 34th, 50th and 67th percentiles to the 34th, 52nd, 70th and 88th percentiles.',
    audience:
      'H-1B, H-1B1, E-3 and PERM applicants and employers funding their wages.',
    caveat:
      'This proposal concerns required wage floors, separate from H-1B selection weights.',
    background:
      'RIN 1205-AC30 was published on March 27, 2026, and comments closed May 26. The August 2026 Unified Agenda still lists it at the proposed-rule stage; DOL has not published a final rule, so the current wage-level calculation has not changed.',
    teaser:
      'Beyond one-time fees, ongoing wage costs may further reduce employers’ room to sponsor.',
    headline:
      'A multiyear wage commitment could become another sponsorship barrier.',
    analysis:
      'If the proposed increase to statutory wage floors is finalized, the effect would appear in ongoing employment costs, not just a filing fee. Roles already near budget limits may face a choice among higher pay, revised hiring plans, or no sponsorship.',
    impacts: [
      {
        title: 'For job seekers: some roles may no longer support sponsorship',
        text: 'Employers unable to raise pay to the applicable floor may reduce hiring for those roles. Entry-level jobs and budget-constrained organizations may be more sensitive.',
        examples: [
          'Suppose a role currently has an $80,000 annual wage threshold and an offer at that amount. If a new applicable threshold becomes $90,000, the employer must raise the offer to at least $90,000 to meet that requirement. Without the added budget, it cannot file on the original salary. These figures illustrate the calculation rather than actual wage standards.',
          'Both Lin’s and Chen’s roles require higher pay under a new applicable standard. Lin’s employer raises the offer to meet the threshold, while Chen’s insists on the old salary. The requirement is similar, but the employers’ willingness to meet it determines whether the respective filings can satisfy that wage condition.',
        ],
      },
      {
        title:
          'For current workers: the effect may arrive with the next filing',
        text: 'An extension or employer change requiring a new LCA may need a fresh wage review under future applicable rules; attention should not stop at initial sponsorship.',
        examples: [
          'Chen’s salary met the legal threshold for the previous H-1B filing. A new employer now offers the same pay. If the new wage standard applies to this petition and raises the threshold for the role, the new employer must increase the offer accordingly. Meeting the previous filing’s standard does not satisfy a higher standard applicable to this one.',
          'Wang’s H-1B and existing Labor Condition Application (LCA) are both nearing expiration. The company plans to extend his employment for another three years, so it needs a new LCA. Even with the same employer, role, and work location, if the new wage standard applies to this filing, the company must check his pay against the new standard. If his current salary falls below the new required wage, the company must raise it to meet the extension’s wage requirement. Without the extra budget, it may be unable to proceed at his current pay. Which extensions would be covered depends on the final rule and transition provisions.',
        ],
      },
      {
        title: 'For long-term paths: PERM budgets may also face pressure',
        text: 'If the PERM adjustment also takes effect, employers may recalculate years of employment costs from work visa through permanent residence. Selection and wage floors remain separate issues.',
        examples: [
          'Li’s employer budgets for PERM sponsorship using the existing wage level. If a new applicable standard raises the wage requirement for that case, the employer must revisit the salary budget. That is a change to wage costs rather than a one-time legal or filing fee, and it could affect willingness to proceed.',
        ],
      },
    ],
    outlook:
      'Our outlook: the practical effect will vary by occupation, region, and employer budget. The final increases and transition terms will determine whether costs arrive at once or phase into new filings.',
    scenarios: [
      {
        name: 'Raised as proposed',
        headline:
          'Roles at the margin become harder to sustain within sponsorship budgets',
        assumption:
          'The proposed four-level wage structure remains largely intact.',
        effects:
          'Some employers may raise wages while others reduce covered roles. Better-funded companies would be relatively better able to absorb the adjustment.',
        signals:
          'The final wage methodology, covered filings, and employer compensation budgets.',
      },
      {
        name: 'Increase or transition revised',
        headline:
          'Costs still rise, but employers may have more time to adjust',
        assumption:
          'The final text lowers the increases or provides a meaningful transition period.',
        effects:
          'Employers may phase changes into hiring and pay. Filing dates and transition criteria would affect workers differently.',
        signals:
          'Phased implementation, treatment of existing cases, and effective-date boundaries in the final rule.',
      },
      {
        name: 'No final rule yet',
        headline:
          'Current costs continue while employers retain budget flexibility',
        assumption: 'The agency continues reviewing or rewrites the proposal.',
        effects:
          'Immediate pressure may ease, but multiyear sponsorship plans may still reserve room for wage adjustments.',
        signals:
          'Submission of a final rule for review, agenda changes, and later announcements.',
      },
    ],
    scope: [
      {
        label: 'Covered programs',
        text: 'Relevant wage requirements for H-1B, H-1B1, E-3, and PERM.',
      },
      {
        label: 'Proposed structure',
        text: 'The four levels would move to approximately the 34th, 52nd, 70th, and 88th percentiles.',
      },
      {
        label: 'Current standard',
        text: 'The proposal has not changed current wage standards; future coverage depends on effective-date and transition terms.',
      },
    ],
    milestones: [
      {
        date: '2025-09-19',
        text: 'A presidential proclamation directed DOL to begin rulemaking on H-1B prevailing-wage levels.',
      },
      {
        date: '2026-03-27',
        text: 'DOL published an NPRM proposing four levels at the 34th, 52nd, 70th, and 88th percentiles.',
      },
      {
        date: '2026-05-26',
        text: 'The 60-day public comment period closed and DOL began reviewing comments.',
      },
    ],
    next: [
      {
        date: 'Next step',
        text: 'DOL may revise the proposal and send a final rule to OIRA; no completion date is public.',
      },
      {
        date: 'Date unknown',
        text: 'The new wage levels would apply only after a final rule is published and reaches its effective date.',
        estimate: true,
      },
    ],
    process: {
      detail:
        'DOL published an NPRM and the public comment period closed on May 26, 2026. The initiative remains a proposal while DOL reviews comments.',
      currentSummary: 'Comment period closed; awaiting further rulemaking',
      waitingFor:
        'DOL review of comments, revisions or further action toward a final rule; no date is set.',
    },
  },
};
