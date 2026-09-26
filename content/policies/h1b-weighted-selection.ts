import type { PolicyContent } from '../policy-types.ts';

export const h1bWeightedSelection: PolicyContent = {
  id: 'h1b-weighted-selection',
  path: 'H-1B',
  tone: 'red',
  effectState: 'in-effect',
  checkedOn: '2026-09-26',
  related: ['prevailing-wage', 'h1b-fee'],
  process: {
    kind: 'federal-rulemaking',
    lastCompletedStage: 5,
    activeStage: null,
    nextStage: null,
  },
  sources: [
    {
      href: 'https://www.federalregister.gov/documents/2025/12/29/2025-23853/weighted-selection-process-for-registrants-and-petitioners-seeking-to-file-cap-subject-h-1b',
      zh: 'Federal Register 最终规则',
      en: 'Federal Register final rule',
    },
    {
      href: 'https://www.uscardforum.com/t/topic/415560',
      zh: '美卡论坛讨论',
      en: 'USCardForum discussion',
    },
  ],
  zh: {
    title: 'H-1B 已改为工资等级加权抽签',
    short: 'H-1B 工资加权抽签',
    status: '已生效 · FY2027 起使用',
    effectLabel: '已生效 · 2026-02-27',
    agency: 'DHS / USCIS',
    documentId: '1615-AD01',
    tldr: 'USCIS 已经把 cap-subject H-1B 的等概率随机抽签，改成按工资等级加权：Level I、II、III、IV 分别获得 1、2、3、4 份权重。规则 2026-02-27 生效，从 FY2027 注册季开始使用。',
    tags: ['OPT → H-1B', 'H-1B 抽签', 'Cap-subject'],
    summary:
      'USCIS 已经把受年度名额限制的 H-1B 等概率抽签，改为按工资等级加权：Level I、II、III、IV 分别获得 1、2、3、4 份权重。权重不等于固定的个人中签率。',
    audience: '参加 cap-subject H-1B 注册的申请人，以及为这些岗位申报的雇主。',
    caveat: '拿到 1—4 份权重不等于你个人的中签率，也不会直接抬高法定工资门槛。',
    background:
      'DHS 在 2025-12-29 发布 RIN 1615-AD01 最终规则，2026-02-27 生效，从 FY2027 注册季开始使用。USCIS 按职位对应的 OEWS 工资等级给出 1 到 4 份抽签权重。规则保留以受益人为中心的选择方式，普通名额和美国高学历名额的先后顺序也不变。',
    teaser: '工资等级影响抽签权重，入门岗位与较高等级岗位不再处于相同起点。',
    headline: '岗位对应的工资等级，已经成为抽签机会的一部分。',
    analysis:
      '工资加权把岗位条件和抽签机会绑得更紧。入门级职位的毕业生，要把选工作和选身份路径放在一起考虑。但权重只是一种机制，不能直接当成个人的中签概率。',
    impacts: [
      {
        title: '对毕业生：第一份工作的岗位结构更重要',
        text: '入门职位通常对应 Level I，权重最低。更有经验、对应更高等级的职位占优。但只看年薪高低，判断不出属于哪个等级。',
        examples: [
          '小林和小陈都交了 H-1B 抽签申请，但小林的工资属于 Level I，小陈属于 Level IV。新规按工资等级给抽签权重，所以小林拿 1 份权重，小陈拿 4 份。权重高不代表一定能中，也不能直接算出每个人具体的中签概率。',
        ],
      },
      {
        title: '对 offer 比较：职业与地点不能省略',
        text: '工资等级看的是具体职业和工作地点。跨地区、跨岗位直接比薪资数字，很容易算错抽签优势。',
        examples: [
          '小李接到两份年薪都是 10 万的工作，但岗位不一样，城市也不一样。工资等级要看具体职业和地区的工资数据，所以这两份 offer 可能分属不同等级。新规是按等级来分配权重的，也就是说，同样年薪不一定能拿到同样的抽签机会。',
          '小陈想通过加薪来提高 H-1B 中签率。因为新规按工资等级分配权重，所以他得搞清楚一件事：加薪后能不能升到更高的等级？如果涨完还在原来的等级，那这次加薪对抽签权重没有任何影响。',
        ],
      },
      {
        title: '对雇主：工资、职责与申报要能相互支持',
        text: '企业会更看重岗位和工资数据对不对得上。为了拿更高权重去改岗位标签，代替不了真实职责和合规申报。',
      },
    ],
    outlook:
      '我们的判断：高等级的相对优势会持续。但优势最后能变成多少机会，还要看当季的申请池。如果新的费用或工资门槛也落地，雇主的预算压力可能抵消一部分这种优势。',
    scenarios: [
      {
        name: '现行机制延续',
        headline: '较高工资等级继续具有相对优势',
        assumption: '规则保持不变，申请结构没有明显变化。',
        effects:
          'Level I 的人会更看重岗位成长和下一轮申请机会；权重高也不保证入选。',
        signals: 'USCIS 下一季注册说明和实际选择数据。',
      },
      {
        name: '申请结构变化',
        headline: '同一等级的实际机会也可能变化',
        assumption: '高等级申请的人数占比上升，或者总申请人数明显变化。',
        effects:
          '抽签池变了，个人机会就变。上一年的估算或结果，不能直接当成下一年的固定概率。',
        signals: '按等级划分的申请分布、当季名额和选择轮次。',
      },
      {
        name: '叠加新成本',
        headline: '抽签更有利，不一定代表更容易获得担保',
        assumption: '新的 H-1B 费用或更高的法定工资门槛落地。',
        effects:
          '有些雇主可能因为成本减少申请。岗位的抽签优势，和企业的支付意愿可能对不上。',
        signals: '收费和工资规则的最终文本，以及企业的担保政策。',
      },
    ],
    scope: [
      { label: '适用范围', text: 'Cap-subject H-1B 注册与选择机制。' },
      { label: '权重与概率', text: '1—4 份权重不等于固定的个人中签率。' },
      {
        label: '另一项工资规则',
        text: '这项选择机制本身不提高职位必须支付的法定工资门槛。',
      },
    ],
    milestones: [
      { date: '2025-09-24', text: 'DHS 发布工资等级加权抽签 NPRM。' },
      {
        date: '2025-12-29',
        text: '最终规则发布，保留提案中的 Level I 至 IV 四档权重。',
      },
      { date: '2026-02-27', text: '规则生效，并适用于 FY2027 H-1B 注册季。' },
    ],
    next: [
      {
        date: '后续 cap 季',
        text: 'USCIS 将继续按职位、工作地点和申报工资对应的 OEWS 等级进行加权选择，除非规则日后被修改。',
      },
    ],
    process: {
      detail:
        'DHS 已完成 NPRM、公众评论和最终规则阶段。规则自 2026-02-27 生效，并从 FY2027 H-1B 注册季开始使用工资等级加权选择。',
      currentSummary: '最终规则已生效并开始执行',
      waitingFor: null,
    },
  },
  en: {
    title: 'H-1B Selection Now Weights Wage Levels',
    short: 'Wage-Weighted H-1B Selection',
    status: 'In effect · Used beginning with FY2027',
    effectLabel: 'In effect · February 27, 2026',
    agency: 'DHS / USCIS',
    documentId: '1615-AD01',
    tldr: 'USCIS replaced equal-probability selection for cap-subject H-1B cases with a wage-level-weighted process. Wage Levels I, II, III, and IV receive one, two, three, and four entries respectively. The rule took effect on February 27, 2026 and applies beginning with the FY 2027 registration season.',
    tags: ['OPT → H-1B', 'H-1B selection', 'Cap-subject'],
    summary:
      'USCIS has replaced equal-chance cap-subject H-1B selection with wage-level weighting: Levels I, II, III and IV receive 1, 2, 3 and 4 entries, respectively. These weights do not translate into fixed individual selection probabilities.',
    audience:
      'cap-subject H-1B registrants and employers reporting the offered position.',
    caveat:
      'One to four weights are not individual selection probabilities and do not themselves raise the required wage floor.',
    background:
      'DHS published the RIN 1615-AD01 final rule on December 29, 2025; it took effect on February 27, 2026 and applies beginning with the FY 2027 registration season. USCIS assigns one to four entries according to the position’s OEWS wage level. The rule retains beneficiary-centric selection and the existing order for regular and U.S. advanced-degree allocations.',
    teaser:
      'Wage level affects selection weight, so entry-level and higher-level roles no longer start on equal footing.',
    headline:
      'The wage level assigned to a role is now part of its selection chances.',
    analysis:
      'Wage weighting ties job conditions more closely to selection chances. For graduates in entry-level roles, employment choices and immigration strategy now need to be assessed together. Weight is a mechanism, however, and does not directly state an individual probability of selection.',
    impacts: [
      {
        title: 'For graduates: the structure of the first job matters more',
        text: 'An entry-level role assigned Level I receives less weight. Roles requiring more experience or assigned higher levels have a relative advantage, but annual salary alone does not determine the level.',
        examples: [
          'Lin and Chen enter H-1B selection with jobs at wage Levels I and IV respectively. The new system assigns one selection weight to Lin and four to Chen instead of equal weights. Chen’s higher level gives more weight but does not guarantee selection or directly establish either person’s individual probability.',
        ],
      },
      {
        title: 'When comparing offers: occupation and location matter',
        text: 'Wage level depends on the specific occupation and work location. Comparing salary numbers across regions and roles can produce the wrong conclusion about selection advantage.',
        examples: [
          'Li receives two $100,000 offers for different jobs or locations. Wage levels depend on the relevant occupation and geographic wage data, so the offers may fall into different levels. Because selection weights follow those levels rather than salary figures alone, equal salaries do not necessarily mean equal weights.',
          'Chen hopes a raise will improve the H-1B selection chance. Under the new system, the question is whether the increased salary qualifies for a higher wage level. If it remains in the same level, the raise does not increase the selection weight.',
        ],
      },
      {
        title:
          'For employers: wages, duties, and filings must support one another',
        text: 'Employers may pay more attention to consistency between the role and wage data. Changing labels merely to increase weight cannot replace real duties and a compliant filing.',
      },
    ],
    outlook:
      'Our assessment: higher levels will retain a relative advantage, but how many opportunities that produces still depends on the season’s applicant pool. If new fees or wage floors also take effect, employer budgets could offset some of the procedural advantage.',
    scenarios: [
      {
        name: 'Current system continues',
        headline: 'Higher wage levels retain a relative advantage',
        assumption:
          'The rule remains in place and the applicant mix does not change significantly.',
        effects:
          'Level I applicants may place more weight on role growth and later filing opportunities. More entries still do not guarantee selection.',
        signals:
          'USCIS instructions for the next registration season and actual selection data.',
      },
      {
        name: 'Applicant mix changes',
        headline: 'Actual chances can change even within the same level',
        assumption:
          'The share of higher-level registrations rises or the total registration volume changes significantly.',
        effects:
          'Changes in the selection pool alter individual chances. Estimates or results from one year cannot serve as a fixed probability for the next.',
        signals:
          'The distribution of registrations by level, annual allocation, and number of selection rounds.',
      },
      {
        name: 'New costs added',
        headline:
          'Better selection odds may not make sponsorship easier to obtain',
        assumption:
          'A new H-1B fee or a higher statutory wage floor takes effect.',
        effects:
          'Some employers may file fewer petitions because of the cost, separating a role’s selection advantage from the employer’s willingness to pay.',
        signals:
          'Final fee and wage-rule text, along with employer sponsorship policies.',
      },
    ],
    scope: [
      {
        label: 'Covered process',
        text: 'Cap-subject H-1B registration and selection.',
      },
      {
        label: 'Weight and probability',
        text: 'One to four entries do not equal a fixed individual selection rate.',
      },
      {
        label: 'Separate wage rule',
        text: 'This selection mechanism does not itself raise the statutory wage an employer must pay.',
      },
    ],
    milestones: [
      {
        date: '2025-09-24',
        text: 'DHS published the wage-level-weighted selection NPRM.',
      },
      {
        date: '2025-12-29',
        text: 'DHS published the final rule with the proposed four wage-level weights unchanged.',
      },
      {
        date: '2026-02-27',
        text: 'The rule took effect and applied to the FY 2027 H-1B registration season.',
      },
    ],
    next: [
      {
        date: 'Future cap seasons',
        text: 'USCIS will continue weighting selection by the OEWS level for the occupation, work location, and offered wage unless the rule is later changed.',
      },
    ],
    process: {
      detail:
        'DHS completed the NPRM, public-comment, and final-rule stages. The rule took effect on February 27, 2026 and applies wage-level-weighted selection beginning with the FY 2027 H-1B registration season.',
      currentSummary: 'Final rule in effect and implemented',
      waitingFor: null,
    },
  },
};
