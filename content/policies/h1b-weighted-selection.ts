import type { PolicyContent } from '../policy-types.ts';

export const h1bWeightedSelection: PolicyContent = {
  id: 'h1b-weighted-selection',
  path: 'H-1B',
  tone: 'red',
  effectState: 'in-effect',
  checkedOn: "2026-11-03",
  related: ['prevailing-wage', 'h1b-fee'],
  process: {
    kind: 'federal-rulemaking',
    lastCompletedStage: 5,
    activeStage: null,
    nextStage: null,
  },
  sources: [
    {
      "href": "https://www.federalregister.gov/documents/2025/12/29/2025-23853/weighted-selection-process-for-registrants-and-petitioners-seeking-to-file-cap-subject-h-1b",
      "zh": "Federal Register 最终规则",
      "en": "Federal Register final rule"
    },
    {
      "href": "https://www.uscardforum.com/t/topic/415560",
      "zh": "美卡论坛讨论",
      "en": "USCardForum discussion"
    },
    {
      "href": "https://www.uscis.gov/working-in-the-united-states/temporary-workers/h-1b-specialty-occupations/h-1b-cap-season",
      "zh": "USCIS 当前 cap 季说明",
      "en": "USCIS current cap-season guidance"
    }
  ],
  zh: {
    title: 'H-1B 已改为工资等级加权抽签',
    short: 'H-1B 工资加权抽签',
    status: '已生效 · FY2027 起使用',
    effectLabel: '已生效 · 2026-02-27',
    agency: 'DHS / USCIS',
    documentId: '1615-AD01',
    tldr: "H-1B 抽签不再人人机会均等，而是看你 offer 的工资等级：一级（入门）进池 1 次，二级 2 次，三级 3 次，四级（资深）4 次，进池次数越多，被抽中的机会越大。规则 2026-02-27 生效，从 FY2027 这一轮抽签（2026 年春天）开始用。",
    tags: ['OPT → H-1B', 'H-1B 抽签', 'Cap-subject'],
    summary:
      "需要抽签的 H-1B 改成按工资等级加权。劳工部把每个职业、每个地区的工资分成四级，一级对应入门岗位，四级对应资深岗位。现在一级进池 1 次，二级 2 次，三级 3 次，四级 4 次。规则 2026-02-27 生效，从 FY2027 抽签季开始使用。FY2027 指美国政府的 2027 财年，这一轮抽签在 2026 年春天进行，抽中的人最早 2026 年 10 月 1 日开始按 H-1B 上班。",
    audience: "参加 H-1B 抽签的人（多数是 OPT 期间的毕业生），以及为他们注册的雇主。",
    caveat: "进池次数决定你相对别人的优势；具体中签率每年随报名人数和各等级的分布变化。这项规则只改抽签方式，雇主必须付的最低工资由另一项规则（#06）管。",
    background:
      "DHS 2025-09-24 公布提案，2025-12-29 发布最终规则（RIN 1615-AD01），2026-02-27 生效。\n抽签时，USCIS 按 offer 对应的 OEWS 工资等级，让每个人进池 1 到 4 次。等级看的是这个职业在工作地点的工资分布，不是单看年薪数字。每个人仍然只算一个人，有几家雇主为你注册都一样。抽签顺序也没变：先抽普通名额，没抽中的美国硕士及以上学历的人再进第二轮，抽美国高等学历名额。",
    teaser: '工资等级决定进池次数，入门岗位和高等级岗位不再站在同一起跑线。',
    headline: '岗位的工资等级，现在直接影响抽签机会。',
    analysis:
      "加权抽签把你选的工作和中签机会绑在了一起。拿入门级 offer 的毕业生，比较 offer 时除了工资和发展，还要把抽签机会算进去。同样的年薪，换个城市或换个职业代码，等级可能就不一样。",
    impacts: [
      {
        title: '对毕业生：第一份工作的工资等级更重要',
        text: '入门职位通常是 Level I，只进池 1 次；要求更多经验、等级更高的职位占优。不过只看年薪高低，看不出是哪个等级。',
        examples: [
          '小林和小陈都报了 H-1B 抽签，小林的工资属于 Level I，小陈属于 Level IV。小林进池 1 次，小陈进池 4 次；最后中不中，还要看当年有多少人报名。',
        ],
      },
      {
        title: '比较 offer 时：同样年薪，等级可能不同',
        text: '工资等级看的是具体职业和工作地点。跨城市、跨岗位直接比工资数字，很容易算错抽签优势。',
        examples: [
          '小李拿到两份年薪都是 10 万的 offer，岗位不同，城市也不同。工资等级按职业和地区的工资数据算，所以这两份 offer 可能属于不同等级；同样年薪，进池次数可能不一样。',
          '小陈想靠加薪提高中签机会。关键是加薪后能不能升到更高等级；如果涨完还在原来的等级，进池次数不变。',
        ],
      },
      {
        title: '对雇主：工资等级要和真实职责对得上',
        text: '企业会更注意岗位和工资数据是否一致。等级要对应真实职责，申报必须如实。',
      },
    ],
    outlook:
      '我们的判断：高等级的优势会一直存在，但能换来多少中签机会，要看每年报名的人。如果新收费或更高的工资门槛也落地，雇主的预算压力会抵消一部分优势。',
    scenarios: [
      {
        "name": "现行抽签方式不变",
        "headline": "高工资等级继续占优",
        "assumption": "规则不变，报名人群也没有明显变化。",
        "effects": "一级的人会更看重岗位晋升，以及下一年再抽的机会。",
        "signals": "USCIS 下一季的注册说明和实际抽中数据。"
      },
      {
        "name": "报名人群变化",
        "headline": "同一等级的中签机会也会变",
        "assumption": "高等级报名的比例上升，或者总报名人数明显变化。",
        "effects": "抽签池变了，个人机会就跟着变；上一年的结果只能当参考。",
        "signals": "各等级的报名人数、当年名额和抽签轮数。"
      },
      {
        "name": "再加上新的成本",
        "headline": "抽签占优，雇主也要算成本",
        "assumption": "新的 H-1B 收费或更高的最低工资要求落地。",
        "effects": "有些雇主会因为成本少报几个人。抽签占优的岗位，雇主也要先决定愿不愿意出这笔钱。",
        "signals": "收费和工资规则的最终文本，以及企业的担保政策。"
      }
    ],
    scope: [
      { label: '适用范围', text: '要抽签的 H-1B 注册和抽签。' },
      { label: '进池次数和中签率', text: '进池次数决定相对优势；实际中签率每年随报名人数变化。' },
      {
        label: '工资门槛是另一项规则',
        text: '这项规则只改抽签方式，不改雇主必须支付的最低工资（见 #06）。',
      },
    ],
    milestones: [
      {
        "date": "2025-09-24",
        "text": "DHS 公布工资加权抽签提案。"
      },
      {
        "date": "2025-12-29",
        "text": "最终规则发布，保留一到四级分别进池 1 到 4 次。"
      },
      {
        "date": "2026-02-27",
        "text": "规则生效，FY2027 H-1B 抽签开始使用。"
      }
    ],
    next: [
      {
        "date": "日期未定",
        "text": "下一个抽签季继续按工资等级加权。"
      }
    ],
    process: {
      detail:
        "DHS 已经走完提案、公众评论和最终规则。规则 2026-02-27 生效，从 FY2027 抽签季开始按工资等级加权。",
      currentSummary: '最终规则已生效',
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
    tldr: "The H-1B lottery no longer gives everyone the same odds. It now depends on the wage level of your offer: Level I (entry) is entered once, Level II twice, Level III three times and Level IV (senior) four times. More entries mean a better chance of being picked. The rule took effect February 27, 2026 and applies from the FY 2027 lottery (held in spring 2026).",
    tags: ['OPT → H-1B', 'H-1B selection', 'Cap-subject'],
    summary:
      "The H-1B lottery is now weighted by wage level. The Department of Labor splits pay for each occupation and area into four levels, from Level I for entry-level jobs to Level IV for senior ones. Level I is now entered once, Level II twice, Level III three times and Level IV four times. The rule took effect February 27, 2026 and applies from the FY 2027 lottery. FY 2027 is the government’s 2027 fiscal year: that lottery was held in spring 2026, and people selected could start H-1B work as early as October 1, 2026.",
    audience:
      "People entering the H-1B lottery (mostly graduates on OPT) and the employers registering them.",
    caveat:
      "Your number of entries sets your advantage over others; actual odds change every year with how many people register and at which levels. This rule changes only the lottery; the minimum wage employers must pay is covered by a separate rule (#06).",
    background:
      "DHS proposed the change on September 24, 2025, published the final rule (RIN 1615-AD01) on December 29, 2025, and it took effect February 27, 2026.\nIn the lottery, USCIS enters each person 1 to 4 times based on the OEWS wage level for the offered job. The level reflects pay for that occupation in that work location, not just the salary figure. Each person still counts once no matter how many employers register them. The order of draws is unchanged: the regular cap is drawn first, then people with U.S. master’s or higher degrees who were not picked go into a second draw for the advanced-degree cap.",
    teaser:
      'Your wage level sets how many times you are entered, so entry-level and senior roles no longer start even.',
    headline:
      'Your job’s wage level now directly affects your lottery odds.',
    analysis:
      "The weighted lottery ties the job you take to your odds. Graduates with entry-level offers now have to weigh lottery chances alongside pay and career growth when comparing offers. The same salary can land in a different level in another city or under a different occupation code.",
    impacts: [
      {
        title: 'For graduates: your first job’s wage level matters more',
        text: 'Entry-level jobs are usually Level I and get one entry; roles needing more experience, at higher levels, have the edge. Salary alone does not tell you the level.',
        examples: [
          'Lin and Chen both register for the H-1B lottery, Lin at wage Level I and Chen at Level IV. Lin is entered once and Chen four times; whether either is picked still depends on how many people register that year.',
        ],
      },
      {
        title: 'Comparing offers: same salary, different level',
        text: 'Wage level depends on the occupation and the work location. Comparing salary numbers across cities or roles can mislead you about your odds.',
        examples: [
          'Li has two $100,000 offers for different jobs in different cities. Wage level is set by occupation and local wage data, so the two offers may fall in different levels and get different numbers of entries.',
          'Chen hopes a raise will improve his odds. What matters is whether the raise moves him up a level; if he stays in the same level, his number of entries doesn’t change.',
        ],
      },
      {
        title:
          'For employers: the wage level must match the real job',
        text: 'Employers will check more carefully that the role matches the wage data. The level has to reflect the real duties, and filings must be accurate.',
      },
    ],
    outlook:
      'Our view: higher levels will keep their edge, but how much it helps depends on who registers each year. If new fees or higher wage floors also take effect, employer budgets could cancel out part of that edge.',
    scenarios: [
      {
        "name": "Current system continues",
        "headline": "Higher wage levels keep their edge",
        "assumption": "The rule stays and the mix of registrants doesn’t change much.",
        "effects": "Level I applicants will care more about promotion and their chances in the next lottery.",
        "signals": "USCIS’s instructions for the next lottery and actual selection numbers."
      },
      {
        "name": "Registrant mix changes",
        "headline": "Odds change even within the same level",
        "assumption": "More registrants come in at higher levels, or total registrations change a lot.",
        "effects": "Changes in the pool change individual chances; last year’s results are only a rough guide.",
        "signals": "Registrations by level, that year’s cap and the number of lottery rounds."
      },
      {
        "name": "New costs added",
        "headline": "Better odds, but employers still weigh the cost",
        "assumption": "A new H-1B fee or higher wage floor takes effect.",
        "effects": "Some employers will register fewer people because of cost. For a role with good odds, the employer still has to decide whether it is worth the money.",
        "signals": "Final fee and wage-rule text, along with employer sponsorship policies."
      }
    ],
    scope: [
      {
        label: 'What it covers',
        text: 'Registration and selection in the H-1B lottery.',
      },
      {
        label: 'Entries and odds',
        text: 'Entries set your relative advantage; actual odds change every year with the number of registrants.',
      },
      {
        label: 'Wage floors are a separate rule',
        text: 'This rule changes only the lottery, not the minimum wage employers must pay (see #06).',
      },
    ],
    milestones: [
      {
        "date": "2025-09-24",
        "text": "DHS proposed the wage-weighted lottery."
      },
      {
        "date": "2025-12-29",
        "text": "DHS published the final rule, keeping 1 to 4 entries for Levels I to IV."
      },
      {
        "date": "2026-02-27",
        "text": "The rule took effect and was used for the FY 2027 H-1B lottery."
      }
    ],
    next: [
      {
        "date": "Date unknown",
        "text": "The next lottery will also be weighted by wage level."
      }
    ],
    process: {
      detail:
        "DHS completed the proposal, public comment and final rule. The rule took effect February 27, 2026 and weights the lottery by wage level from FY 2027.",
      currentSummary: 'Final rule in effect',
      waitingFor: null,
    },
  },
};
