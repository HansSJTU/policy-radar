import type { PolicyContent } from '../policy-types.ts';

export const prevailingWage: PolicyContent = {
  id: 'prevailing-wage',
  path: 'H-1B',
  tone: 'amber',
  effectState: 'not-in-effect',
  checkedOn: "2026-11-01",
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
    {
      "href": "https://www.reginfo.gov/public/Forward?SearchTarget=RegReview&textfield=1205-AC30",
      "zh": "OIRA · 1205-AC30 审查记录检索",
      "en": "OIRA · 1205-AC30 review search"
    }
  ],
  zh: {
    title: 'H-1B / PERM 最低工资要求拟上调',
    short: 'H-1B / PERM 最低工资',
    status: '评论期已结束 · 尚未生效',
    effectLabel: '尚未生效',
    agency: 'DOL',
    documentId: '1205-AC30',
    tldr: 'DOL 提议提高 H-1B、H-1B1、E-3 和 PERM 的最低工资要求：四个工资等级从同地区同职业工资的约第 17、34、50、67 百分位，提高到第 34、52、70、88 百分位。还只是提案。',
    tags: ['OPT → H-1B', 'H-1B', 'PERM'],
    summary:
      'DOL 打算把 H-1B、H-1B1、E-3 和 PERM 的四级最低工资，从同地区同职业工资的约第 17、34、50、67 百分位，提高到第 34、52、70、88 百分位。评论期已结束，还没有最终规则。',
    audience: 'H-1B、H-1B1、E-3 和 PERM 的申请人，以及要付工资的雇主。',
    caveat: '这项提案改的是雇主必须付的最低工资，和 H-1B 抽签按工资等级加权（#04）是两套规则。',
    background:
      '提案（RIN 1205-AC30）2026-03-27 公布，公众评论 5 月 26 日截止。2026 年 8 月的政府规则计划表仍把它列为提案；DOL 还没发最终规则，现在的工资等级算法没变。',
    teaser: '除了一次性费用，每年多付的工资也会让雇主更不愿担保。',
    headline: '多年的工资成本，可能成为又一道担保门槛。',
    analysis:
      '如果定稿，影响落在长期的用人成本上，而不只是一笔申请费。本来就卡在预算边上的岗位，雇主只有三个选择：涨工资、改招聘计划，或者不担保。',
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
      '我们的判断：影响会因职业、地区和雇主预算差别很大。最终涨多少、有没有过渡期，决定成本是一下子压下来，还是逐步落到新申请上。',
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
        signals: '最终规则何时送 OIRA、计划表的变化和后续公告。',
      },
    ],
    scope: [
      { label: '涉及哪些签证', text: 'H-1B、H-1B1、E-3 和 PERM 的工资要求。' },
      { label: '提议的新标准', text: '四个等级提高到同地区同职业工资的约第 34、52、70、88 百分位。' },
      {
        label: '现在用哪个标准',
        text: '现行工资标准不变；新标准从何时、对哪些申请适用，看最终规则。',
      },
    ],
    milestones: [
      {
        date: '2025-09-19',
        text: '总统公告要求 DOL 着手调整 H-1B 工资等级。',
      },
      {
        date: '2026-03-27',
        text: 'DOL 公布提案：四级工资提高到第 34、52、70、88 百分位。',
      },
      { date: '2026-05-26', text: '60 天公众评论截止，DOL 开始审评论。' },
    ],
    next: [
      {
        "date": "日期未定",
        "text": "DOL 可能修改提案并把最终规则送 OIRA 审查；没有公布时间。"
      },
      {
        "date": "日期未定",
        "text": "最终规则发布并到生效日后，新工资标准才开始适用。",
        "estimate": true
      }
    ],
    process: {
      detail:
        'DOL 已公布提案，公众评论 2026 年 5 月 26 日结束。DOL 审完评论后才能发最终规则。',
      currentSummary: '评论期已结束，等待最终规则',
      waitingFor: 'DOL 审评论、修改提案或推进最终规则；日期未定。',
    },
  },
  en: {
    title: 'Proposed Increase to H-1B / PERM Wage Floors',
    short: 'H-1B / PERM Wage Floors',
    status: 'Comment period closed · Not in effect',
    effectLabel: 'Not in effect',
    agency: 'DOL',
    documentId: '1205-AC30',
    tldr: 'DOL proposes raising the minimum wages for H-1B, H-1B1, E-3 and PERM: the four wage levels would move from roughly the 17th, 34th, 50th and 67th percentiles of local pay for the job to the 34th, 52nd, 70th and 88th. It is only a proposal.',
    tags: ['OPT → H-1B', 'H-1B', 'PERM'],
    summary:
      'DOL plans to move the four minimum-wage levels for H-1B, H-1B1, E-3 and PERM from roughly the 17th, 34th, 50th and 67th percentiles of local pay for the job to the 34th, 52nd, 70th and 88th. Comments have closed; there is no final rule.',
    audience:
      'H-1B, H-1B1, E-3 and PERM applicants and the employers paying them.',
    caveat:
      'This proposal is about the minimum wage employers must pay; it is separate from the wage-weighted H-1B lottery (#04).',
    background:
      'The proposal (RIN 1205-AC30) was published March 27, 2026; comments closed May 26. The August 2026 government rulemaking plan still lists it as a proposal. DOL has not issued a final rule, so wage levels are still calculated the current way.',
    teaser:
      'Beyond one-time fees, paying more every year would make employers less willing to sponsor.',
    headline:
      'Years of higher salary could become another barrier to sponsorship.',
    analysis:
      'If adopted, the cost is ongoing salary, not a one-time filing fee. For jobs already at the edge of the budget, employers have three choices: pay more, change hiring plans or stop sponsoring.',
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
      'Our view: the effect will vary a lot by occupation, region and employer budget. The final numbers and any transition period will decide whether costs hit all at once or phase in with new filings.',
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
          'When a final rule goes to OIRA, changes to the rulemaking plan and later announcements.',
      },
    ],
    scope: [
      {
        label: 'Which visas',
        text: 'Wage requirements for H-1B, H-1B1, E-3 and PERM.',
      },
      {
        label: 'Proposed levels',
        text: 'The four levels would move to about the 34th, 52nd, 70th and 88th percentiles of local pay for the job.',
      },
      {
        label: 'What applies now',
        text: 'Current wage levels still apply; when and to which filings new ones apply depends on the final rule.',
      },
    ],
    milestones: [
      {
        date: '2025-09-19',
        text: 'A presidential proclamation told DOL to start revising H-1B wage levels.',
      },
      {
        date: '2026-03-27',
        text: 'DOL published the proposal: four levels at the 34th, 52nd, 70th and 88th percentiles.',
      },
      {
        date: '2026-05-26',
        text: 'The 60-day comment period closed and DOL began reviewing comments.',
      },
    ],
    next: [
      {
        "date": "Date unknown",
        "text": "DOL may revise the proposal and send a final rule to OIRA; no timeline has been announced."
      },
      {
        "date": "Date unknown",
        "text": "New wage levels apply only once a final rule is published and takes effect.",
        "estimate": true
      }
    ],
    process: {
      detail:
        'DOL published the proposal and comments closed May 26, 2026. DOL has to review the comments before issuing a final rule.',
      currentSummary: 'Comment period closed; awaiting a final rule',
      waitingFor:
        'DOL’s review of comments and next steps toward a final rule; no date set.',
    },
  },
};
