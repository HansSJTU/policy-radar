import type { PolicyContent } from '../policy-types.ts';

export const prevailingWage: PolicyContent = {
  id: 'prevailing-wage',
  path: 'H-1B',
  tone: 'amber',
  effectState: 'not-in-effect',
  checkedOn: "2026-11-13",
  related: ['h1b-weighted-selection', 'h1b-fee'],
  process: {
    kind: 'federal-rulemaking',
    lastCompletedStage: 3,
    activeStage: 4,
    nextStage: 5,
  },
  sources: [
    {
      "href": "https://www.reginfo.gov/public/do/eoDetails?rrid=1596562",
      "zh": "OIRA · 11·06 收到工资最终规则，审查中",
      "en": "OIRA · Wage final rule received November 6; review pending"
    },
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
    {
      "href": "https://www.reginfo.gov/public/Forward?SearchTarget=RegReview&textfield=1205-AC30",
      "zh": "OIRA · 1205-AC30 审查记录检索",
      "en": "OIRA · 1205-AC30 review search"
    }
  ],
  zh: {
    title: 'H-1B / PERM 最低工资要求拟上调',
    short: 'H-1B / PERM 最低工资',
    searchTitle: "H-1B / PERM 最低工资拟上调：入门级门槛大幅提高",
    searchDescription: "劳工部提议提高 H-1B 和 PERM 绿卡的最低工资线：入门级从同地区同职业约第 17 百分位提高到约第 34 百分位，其余三级也一起上调。",
    status: "最终规则送 OIRA 审查 · 尚未生效",
    effectLabel: '尚未生效',
    agency: 'DOL',
    documentId: '1205-AC30',
    tldr: "雇主办 H-1B 或 PERM 绿卡，给你的工资不能低于劳工部（DOL）定的最低线。DOL 提议大幅抬高这条线：入门级岗位的最低工资，从“同地区同职业里比约 17% 的人高”提高到“比约 34% 的人高”，其余三级也一起上调。最终规则 11·06 送到白宫 OIRA 做公布前审查，现行工资标准继续适用。",
    tags: ['OPT → H-1B', 'H-1B', 'PERM'],
    summary:
      "H-1B、H-1B1、E-3 和 PERM 都要求雇主付的工资不低于一条最低线，这条线分四个等级，按岗位要求的经验和职责高低来定。DOL 打算把四个等级从同地区同职业工资的约第 17、34、50、67 百分位，提高到第 34、52、70、88 百分位。“第 34 百分位”的意思是：把同地区做这份工作的人按工资从低到高排，这个数比其中 34% 的人高。DOL 已在 11·06 把最终规则送 OIRA 做公布前审查，现行工资标准继续适用。",
    audience: "H-1B、H-1B1（新加坡、智利公民的工作签证）、E-3（澳大利亚公民的工作签证）和 PERM 绿卡的申请人，以及要付工资的雇主。OPT 期间准备找 H-1B 担保的同学尤其要留意。",
    caveat: "这项提案定的是雇主必须付的最低工资。H-1B 抽签按工资等级加权（#04）是另一套规则，已经在执行。上面的百分位来自 3·27 提案；最终幅度、适用申请和过渡安排由公布的最终规则确定。",
    background:
      "雇主为 H-1B 员工递交 LCA（劳工条件申请）、为 PERM 绿卡申请工资认定时，都要先确定这个岗位的“现行工资”，也就是最低线。DOL 用劳工统计局的 OEWS 工资数据，把每个职业、每个地区的工资分成四个等级：一级对应入门岗位，四级对应资深岗位。雇主按岗位要求选等级，工资至少要达到那一级。\n2025 年 9 月 19 日，总统公告要求 DOL 着手调整这些等级。2026 年 3 月 27 日，DOL 公布提案（RIN 1205-AC30），60 天的公众评论 5 月 26 日截止。2026 年 8 月的政府规则计划表仍把它列为提案阶段。DOL 发最终规则之前，工资等级仍按现在的方法算。\n11 月 6 日，OIRA 收到 DOL 的最终规则草案（RIN 1205-AC30），进入公布前审查。这是白宫对重要规则发布前的审查。接下来等 OIRA 审完，再由 DOL 公布最终条文和生效日期。",
    teaser: "除了一次性费用，每年多付的工资也会让雇主更不愿担保。",
    headline: "多年的工资成本，可能成为又一道担保门槛。",
    analysis:
      "如果定稿，雇主多出的是每年的工资，而且会持续好几年，而不只是一笔申请费。对本来就卡在预算边上的岗位，雇主只有三个选择：涨工资、调整招聘计划，或者不再担保。入门级岗位受的冲击最大，因为一级工资的涨幅最大（从约第 17 百分位翻倍到第 34 百分位）。",
    impacts: [
      {
        title: '对求职者：有些岗位可能不再担保',
        text: '雇主付不到新的最低工资，这类岗位可能就不招外籍员工了。入门岗位和预算紧的单位受影响更大。',
        examples: [
          '假设某个岗位现在的最低工资要求是每年 8 万美元，雇主也按这个数给了 offer。如果新标准把它提到 9 万，而且适用于这份申请，雇主就得把 offer 提到至少 9 万；公司不愿加钱，就没法按原工资办。（金额仅为举例。）',
          '小林和小陈都因为新标准需要涨工资。小林的公司愿意把 offer 提上去，小陈的公司不肯加预算。要求一样，但只有愿意涨薪的雇主才能继续办。',
        ],
      },
      {
        title: '对在职员工：下一次申请时也会遇到',
        text: '延期或换雇主需要新的 LCA 时，也要按当时的规则重新核工资，不只是第一次担保才受影响。',
        examples: [
          '小陈上次办 H-1B 时工资符合当时的要求。现在他跳槽，新公司给同样的工资。如果新标准已经生效、这个岗位的最低工资涨了，新公司就得把 offer 提上去。上次够，这次不一定够。',
          '小王的 H-1B 和原来的 LCA（劳工条件申请）都快到期，公司准备帮他续三年，得重新办一份 LCA。公司、岗位、地点都没变，但如果新标准适用于这次申请，就得按新标准重新核他的工资；低于新的最低工资，公司就必须给他涨薪，不愿意加预算就没法按现在的工资续。哪些延期会受影响，要等最终规则和过渡安排。',
        ],
      },
      {
        title: '对绿卡：PERM 预算也要重算',
        text: '如果 PERM 也一起调整，公司从工作签证到绿卡这几年的工资预算都要重算。',
        examples: [
          '小李的公司准备给他办 PERM 绿卡，用人预算按现在的工资定的。如果新标准提高了这个岗位的最低工资，公司就得重算今后的人工成本。这是每年都要多付的工资，不是一次性费用，公司可能会重新考虑还办不办。',
        ],
      },
    ],
    outlook:
      "我们的判断：影响会因职业、地区和雇主预算差别很大。最终涨多少、有没有过渡期，决定成本是一下子压下来，还是随着新申请逐步落地。",
    scenarios: [
      {
        name: '按提案上调',
        headline: '预算边上的岗位更难维持担保',
        assumption: '提案里的四级工资基本不变。',
        effects:
          '有的雇主会涨工资，有的会减少担保岗位。资金充裕的公司更容易消化。',
        signals: '最终的工资算法、适用范围和企业的薪资预算。',
      },
      {
        name: '涨幅或过渡期调整',
        headline: '成本照样上升，但有更多时间调整',
        assumption: '最终规则降低涨幅，或者给出像样的过渡期。',
        effects:
          '雇主可以分阶段调整招聘和工资；什么时候递交申请，会影响你按哪套标准算。',
        signals: '是否分阶段实施、在办申请怎么算、从哪天开始。',
      },
      {
        name: '暂未定稿',
        headline: '工资成本暂时不变，雇主留有余地',
        assumption: 'DOL 继续审阅或重写提案。',
        effects: '眼前压力小一些，但做多年担保计划时仍要预留涨薪空间。',
        signals: "OIRA 审查何时结束，以及 DOL 是否修改或撤回草案。",
      },
    ],
    scope: [
      {
        "label": "涉及哪些签证",
        "text": "H-1B、H-1B1、E-3 和 PERM 的最低工资要求。"
      },
      {
        "label": "提议的新标准",
        "text": "四个等级提高到同地区同职业工资的约第 34、52、70、88 百分位。"
      },
      {
        "label": "现在用哪个标准",
        "text": "现行工资标准照常适用。新标准从哪天起、对哪些申请适用，由最终规则写明。"
      }
    ],
    milestones: [
      {
        "date": "2025-09-19",
        "text": "总统公告要求 DOL 着手调整 H-1B 工资等级。"
      },
      {
        "date": "2026-03-27",
        "text": "DOL 公布提案：四级工资提高到第 34、52、70、88 百分位。"
      },
      {
        "date": "2026-05-26",
        "text": "60 天公众评论期结束，DOL 开始审阅意见。"
      },
      {
        "date": "2026-11-06",
        "text": "DOL 将工资最终规则送 OIRA，进入公布前审查。"
      }
    ],
    next: [
      {
        "date": "日期未定",
        "text": "OIRA 完成最终规则审查；随后 DOL 公布最终条文、过渡安排和生效日期。"
      },
      {
        "date": "日期未定",
        "text": "最终规则公布、到了生效日，新工资标准才开始适用。",
        "estimate": true
      }
    ],
    process: {
      detail:
        "公众评论 5 月 26 日结束。OIRA 11 月 6 日收到 DOL 的最终规则草案，正在做公布前审查。现行工资标准继续适用。",
      currentSummary: "最终规则已送 OIRA，等待公布前审查完成",
      waitingFor: "OIRA 完成审查，以及 DOL 公布最终规则和生效日期。",
    },
  },
  en: {
    title: 'Proposed Increase to H-1B / PERM Wage Floors',
    short: 'H-1B / PERM Wage Floors',
    searchTitle: "H-1B & PERM Prevailing Wage Increase: Higher DOL Wage Levels",
    searchDescription: "DOL proposes raising the minimum wage employers must pay for H-1B and PERM green cards. The entry level moves from about the 17th to about the 34th percentile, and the other levels rise too.",
    status: "Final rule at OIRA · Not in effect",
    effectLabel: 'Not in effect',
    agency: 'DOL',
    documentId: '1205-AC30',
    tldr: "When an employer sponsors you for H-1B or a PERM green card, your pay cannot fall below a minimum set by the Department of Labor (DOL). DOL proposes raising that minimum sharply: for entry-level jobs, from “more than about 17% of people in the same job and area earn” to “more than about 34%,” with the other three levels rising too. On November 6, DOL sent the draft final rule to the White House’s OIRA for review before publication. Current wage levels continue to apply.",
    tags: ['OPT → H-1B', 'H-1B', 'PERM'],
    summary:
      "H-1B, H-1B1, E-3 and PERM all require employers to pay at least a minimum wage, set at four levels according to how much experience and responsibility the job requires. DOL plans to move the four levels from roughly the 17th, 34th, 50th and 67th percentiles of local pay for the job to the 34th, 52nd, 70th and 88th. “34th percentile” means: line up everyone doing this job in the area from lowest to highest paid, and the wage is higher than 34% of them. On November 6, DOL sent the draft final rule to OIRA for review before publication. Current wage levels continue to apply.",
    audience:
      "Applicants for H-1B, H-1B1 (the work visa for citizens of Singapore and Chile), E-3 (the work visa for Australian citizens) and PERM green cards, and the employers paying them. Students on OPT hoping for H-1B sponsorship should pay particular attention.",
    caveat:
      "This proposal sets the minimum wage employers must pay. The wage-weighted H-1B lottery (#04) is a separate rule that is already in effect. The percentiles above come from the March 27 proposal; the published final rule will set the final levels, affected filings and transition arrangements.",
    background:
      "When an employer files an LCA (Labor Condition Application) for an H-1B worker, or seeks a wage determination for a PERM green card, it first has to find the job’s “prevailing wage,” which is the minimum. DOL uses the Bureau of Labor Statistics’ OEWS wage data to split pay for each occupation and area into four levels: Level I for entry-level jobs up to Level IV for senior ones. The employer picks the level that matches the job’s requirements and must pay at least that much.\nOn September 19, 2025, a presidential proclamation told DOL to start revising those levels. On March 27, 2026, DOL published the proposal (RIN 1205-AC30), and the 60-day comment period closed May 26. The August 2026 government rulemaking plan still lists it at the proposal stage. Until DOL issues a final rule, wage levels are calculated the current way.\nOn November 6, OIRA received DOL’s draft final rule (RIN 1205-AC30) for review before publication. This is the White House’s review of major rules before release. Next, OIRA completes its review and DOL publishes the final text and effective date.",
    teaser:
      "Beyond one-time fees, paying more every year would make employers less willing to sponsor.",
    headline:
      "Years of higher salary could become another barrier to sponsorship.",
    analysis:
      "If adopted, the employer’s extra cost is salary every year, for years, not a one-time filing fee. For jobs already at the edge of the budget, employers have three choices: pay more, change hiring plans or stop sponsoring. Entry-level jobs are hit hardest, because Level I rises the most (roughly doubling, from about the 17th to the 34th percentile).",
    impacts: [
      {
        title: 'For job seekers: some jobs may stop offering sponsorship',
        text: 'If an employer can’t pay the new minimum, it may stop hiring visa holders for that job. Entry-level roles and tight-budget employers are hit hardest.',
        examples: [
          'Say a job’s minimum wage is $80,000 a year today and the offer matches it. If the new standard raises it to $90,000 and applies to this petition, the employer must raise the offer to at least $90,000; without the extra budget, it cannot file at the original salary. (Figures are illustrative.)',
          'Under the new standard, both Lin and Chen would need a raise. Lin’s company agrees; Chen’s won’t add budget. Same requirement, but only the employer willing to pay more can go ahead.',
        ],
      },
      {
        title:
          'For current workers: it can hit at your next filing',
        text: 'When an extension or job change needs a new LCA, your pay is checked against the rules in force then, not just at first sponsorship.',
        examples: [
          'Chen’s pay met the minimum for his last H-1B. A new employer now offers the same salary. If the new standard is in effect and the minimum for this job has gone up, the new employer has to raise the offer. Enough last time may not be enough now.',
          'Wang’s H-1B and his Labor Condition Application (LCA) both expire soon, and the company wants to extend him for three years, which needs a new LCA. Same company, job and location, but if the new standard applies, his pay is checked against it; if he is below the new minimum, the company must give him a raise, or it cannot extend him at his current pay. Which extensions are covered depends on the final rule and its transition terms.',
        ],
      },
      {
        title: 'For green cards: PERM budgets need a rethink',
        text: 'If PERM wages rise too, employers have to redo salary budgets for the years from work visa to green card.',
        examples: [
          'Li’s company is starting his PERM green card and budgeted at today’s wage. If the new standard raises the minimum for his job, the company has to redo its salary costs. That is extra pay every year, not a one-time fee, and the company may reconsider whether to continue.',
        ],
      },
    ],
    outlook:
      "Our view: the effect will vary a lot by occupation, region and employer budget. The final numbers and any transition period will decide whether costs hit all at once or phase in as new filings come in.",
    scenarios: [
      {
        name: 'Raised as proposed',
        headline:
          'Jobs at the edge of the budget lose sponsorship',
        assumption:
          'The proposed four wage levels stay mostly as written.',
        effects:
          'Some employers will pay more; others will sponsor fewer jobs. Well-funded companies cope more easily.',
        signals:
          'The final wage method, who it covers and employers’ salary budgets.',
      },
      {
        name: 'Smaller increase or longer transition',
        headline:
          'Costs still rise, with more time to adjust',
        assumption:
          'The final rule lowers the increases or gives a real transition period.',
        effects:
          'Employers can phase in hiring and pay changes; when you file decides which standard applies to you.',
        signals:
          'Whether it phases in, how pending cases are treated and when it starts.',
      },
      {
        name: 'No final rule yet',
        headline:
          'Wage costs stay put for now',
        assumption: 'DOL keeps reviewing or rewrites the proposal.',
        effects:
          'Less pressure for now, but multiyear sponsorship plans should still leave room for raises.',
        signals:
          "When OIRA completes its review and whether DOL revises or withdraws the draft.",
      },
    ],
    scope: [
      {
        "label": "Which visas",
        "text": "Minimum wage requirements for H-1B, H-1B1, E-3 and PERM."
      },
      {
        "label": "Proposed levels",
        "text": "The four levels would move to about the 34th, 52nd, 70th and 88th percentiles of local pay for the job."
      },
      {
        "label": "What applies now",
        "text": "Current wage levels still apply. The final rule will say from when, and to which filings, new levels apply."
      }
    ],
    milestones: [
      {
        "date": "2025-09-19",
        "text": "A presidential proclamation told DOL to start revising H-1B wage levels."
      },
      {
        "date": "2026-03-27",
        "text": "DOL published the proposal: four levels at the 34th, 52nd, 70th and 88th percentiles."
      },
      {
        "date": "2026-05-26",
        "text": "The 60-day public comment period closed and DOL began reviewing comments."
      },
      {
        "date": "2026-11-06",
        "text": "DOL sent the wage final rule to OIRA for review before publication."
      }
    ],
    next: [
      {
        "date": "Date unknown",
        "text": "OIRA completes final-rule review; DOL then publishes the final text, transition arrangements and effective date."
      },
      {
        "date": "Date unknown",
        "text": "New wage levels apply only once a final rule is published and its start date arrives.",
        "estimate": true
      }
    ],
    process: {
      detail:
        "Comments closed May 26. OIRA received DOL’s draft final rule on November 6 and is reviewing it before publication. Current wage levels continue to apply.",
      currentSummary: "Final rule at OIRA; review before publication pending",
      waitingFor:
        "OIRA completing its review and DOL publishing the final rule and effective date.",
    },
  },
};
