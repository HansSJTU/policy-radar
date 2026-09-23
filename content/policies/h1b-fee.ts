import type { PolicyContent } from '../policy-types.ts';

export const h1bFee: PolicyContent = {
  id: 'h1b-fee',
  path: 'H-1B',
  tone: 'amber',
  effectState: 'not-in-effect',
  checkedOn: '2026-09-22',
  commentUrl: 'https://www.regulations.gov/commenton/USCIS-2026-0298-0001',
  related: ['opt-fee', 'prevailing-wage', 'h1b-reform'],
  process: {
    kind: 'federal-rulemaking',
    lastCompletedStage: 2,
    activeStage: 3,
    nextStage: 4,
  },
  sources: [
    {
      href: 'https://www.federalregister.gov/documents/2026/08/25/2026-17324/fee-for-certain-h-1b-petitions',
      zh: 'Federal Register NPRM',
      en: 'Federal Register NPRM',
    },
    {
      href: 'https://www.govinfo.gov/content/pkg/FR-2026-09-10/pdf/C1-2026-17324.pdf',
      zh: 'Federal Register 9·10 更正',
      en: 'Federal Register September 10 correction',
    },
    {
      href: 'https://www.uscardforum.com/t/topic/527162',
      zh: '美卡论坛讨论',
      en: 'USCardForum discussion',
    },
  ],
  zh: {
    title: 'H-1B 拟加收 103,265 美元',
    short: 'H-1B 10.3 万美元附加费',
    status: '正式提案 · 评论截至 9 月 24 日',
    effectLabel: '尚未生效',
    agency: 'DHS / USCIS',
    documentId: '1615-AD20',
    tldr: 'DHS 提议在现有费用之外，对每份 cap-subject H-1B 申请加收 103,265 美元。美国硕士名额和 F-1 境内转身份都要交，cap-exempt 申请不用。',
    tags: ['OPT → H-1B', 'H-1B 抽签'],
    summary:
      'DHS 打算在现有费用之外，对每份受年度名额限制的 H-1B 申请加收 103,265 美元。美国硕士名额和 F-1 境内转身份也要交，cap-exempt 申请除外。',
    audience:
      '走 cap-subject H-1B 的申请人，以及为他们担保的雇主，包括美国硕士名额和 F-1 境内转身份。',
    caveat: '这项附加费不打算向 cap-exempt 申请收取。',
    background:
      'RIN 1615-AD20 在 2026-08-25 公布，公众评论截止到 9 月 24 日。9 月 10 日的更正只替换了 Table 13 的历史申请数量，拟议金额、适用范围和评论截止日都没变。',
    teaser:
      '抽签之外，雇主能不能接受这笔高额担保成本，可能决定 offer 还能不能延续。',
    headline: '雇主的担保预算，可能比能否抽中更先成为门槛。',
    analysis:
      '这笔附加费如果落地，雇主为一份申请要投的钱会明显变多。对 OPT 转 H-1B 的应届生来说，雇主可能在决定要不要支持你申请时就开始算成本，而不是等抽签结果出来。',
    impacts: [
      {
        title: '对毕业生：offer 与担保承诺可能分离',
        text: '企业愿意在你 OPT 期间雇你，不等于愿意承担后面的高额 H-1B 成本。费用一落地，企业会更早评估要不要留用。',
        examples: [
          '小陈用 OPT 入职的时候，HR 说过以后会帮他申 H-1B。但如果收费提案真的通过了，而且他的申请属于要参加抽签的那种，公司就得在正常费用之外再多交 103,265 美元。HR 当初可能没把这笔钱算进去，所以公司得重新批预算，才能兑现之前的承诺。',
          '小林用 OPT 干了一年了，主管挺满意，想把她留下来。但如果她申 H-1B 时要多交 103,265 美元，主管就得向上面申请这笔钱。要是财务不批，公司还是可能不给她申——她干得好不好，跟这笔费用免不免没有关系。',
        ],
      },
      {
        title: '对雇主：预算会向关键岗位集中',
        text: '每份受覆盖的申请都要多花这笔钱，招聘预算可能向难替代、回报明确的岗位倾斜。小企业能调整的空间更小。',
        examples: [
          '一家小公司本来打算给三个员工申 H-1B（都是要抽签的那种）。如果提案按现在的金额生效，光这笔附加费三份加起来就是 309,795 美元，这还不算原来的申请费。如果公司只够付一个人的，那就只能减少担保人数，没法按原计划来。',
        ],
      },
      {
        title: '对路径：cap-exempt 的相对吸引力可能上升',
        text: '提案把 cap-exempt 排除在外，这类职位可能更受关注。但职位供给、个人匹配，以及另一项分类改革，仍会限制这条路径。',
        examples: [
          '小李手上有两个 offer，一个是普通公司，一个是大学实验室。普通公司的 H-1B 要抽签，大学的不用。按现在的提案，普通公司得交这笔附加费，大学不用。所以就算两个岗位工资差不多，雇主实际花的钱不一样，这可能会影响他们愿不愿意帮小李办 H-1B。',
        ],
      },
    ],
    outlook:
      '我们的预判：争论会围绕费用高低、法律依据和雇主能不能承受。对就业市场的影响，可能先出现在担保意愿和招聘预算上，再反映到实际申请量。',
    scenarios: [
      {
        name: '按提案定稿',
        headline: '企业担保会更集中于高价值岗位',
        assumption: '103,265 美元附加费保留，覆盖提案列出的 cap-subject 申请。',
        effects:
          '应届生和预算有限的企业受影响更大。有些雇主会直接减少承诺担保的岗位，不用等到提交申请才调整。',
        signals: '最终费用、覆盖范围、生效时间，以及企业下一轮招聘的担保政策。',
      },
      {
        name: '费用／范围调整',
        headline: '担保意愿可能部分回升，但差异更大',
        assumption: '最终规则降低金额，或者增加实质性例外。',
        effects:
          '成本压力可能缓解，但不同规模的雇主、申请类别和岗位之间仍会分化。例外覆盖了谁，比总金额更值得看。',
        signals: '评论回应、修订后的费用模型和最终豁免条款。',
      },
      {
        name: '实施被推迟',
        headline: '短期预算压力缓和，长期承诺仍可能谨慎',
        assumption: '规则制定拖长，或者法院命令暂缓实施。',
        effects:
          '企业可能继续按现在的成本办理，但对多年担保承诺留一手。暂缓一次不等于政策被否决。',
        signals: '最终规则是否发布、法院命令的实际内容和适用范围。',
      },
    ],
    scope: [
      {
        label: '受覆盖申请',
        text: '提案覆盖 cap-subject，包括美国高学历名额。境内转身份不能因为人已经在美国就排除。',
      },
      { label: '未覆盖申请', text: 'Cap-exempt 不在附加费的拟议范围内。' },
      {
        label: '费用关系',
        text: '这是现有费用之外新加的拟议附加费，按 cap-subject 申请划分范围。',
      },
    ],
    milestones: [
      { date: '2026-08-25', text: '新的 $103,265 收费 NPRM 发布。' },
      {
        date: '2026-09-10',
        text: 'Federal Register 更正 Table 13 历史申请数量；金额、范围及评论期限未变。',
      },
    ],
    next: [
      { date: '2026-09-24', text: '公众评论截止；这是当前最明确的参与节点。' },
      {
        date: '2026 年末—2027+',
        text: 'DHS 可能发布最终规则，之后仍可能遭遇诉讼。',
        estimate: true,
      },
    ],
    process: {
      detail:
        'NPRM 已发布，目前在公众评论阶段。DHS 审阅意见后才能发布最终规则。',
      currentSummary: '正式提案开放评论',
      waitingFor: '9 月 24 日评论截止，随后由 DHS 审阅意见。',
    },
  },
  en: {
    title: 'Proposed $103,265 H-1B Surcharge',
    short: '$103,265 H-1B Surcharge',
    status: 'Proposed rule · Comments due September 24',
    effectLabel: 'Not in effect',
    agency: 'DHS / USCIS',
    documentId: '1615-AD20',
    tldr: 'DHS proposes a $103,265 surcharge, in addition to existing fees, for every cap-subject H-1B petition. The proposal includes U.S. advanced-degree cases and F-1 change-of-status petitions; cap-exempt petitions are outside the surcharge.',
    tags: ['OPT → H-1B', 'H-1B selection'],
    summary:
      'DHS proposes a $103,265 surcharge on each cap-subject H-1B petition, on top of existing fees. U.S. advanced-degree cases and F-1 changes of status are included; cap-exempt petitions are excluded.',
    audience:
      'cap-subject H-1B applicants and sponsors, including U.S. advanced-degree cases and F-1 changes of status.',
    caveat: 'Cap-exempt petitions are outside the proposed surcharge.',
    background:
      'RIN 1615-AD20 was published on August 25, 2026, with comments due September 24. A September 10 correction replaced the historical receipt figures in Table 13; it did not change the proposed amount, scope or comment deadline.',
    teaser:
      'Beyond selection, whether an employer will absorb a high sponsorship cost may determine whether an offer continues.',
    headline:
      'An employer’s sponsorship budget could become a barrier before selection does.',
    analysis:
      'If adopted, the proposed surcharge would push the one-time sponsorship investment much higher. For new graduates moving from OPT to H-1B, employers may reassess the cost when deciding whether to support a petition, rather than waiting for the selection result.',
    impacts: [
      {
        title:
          'For graduates: an offer may not include a sponsorship commitment',
        text: 'A company willing to employ a student during OPT may not be willing to bear a much higher later H-1B cost. If the fee takes effect, retention decisions may happen sooner.',
        examples: [
          'When Chen started on OPT, HR promised future H-1B sponsorship. If the proposal takes effect and the petition is cap-subject, filing it would require another $103,265 on top of existing fees. HR’s earlier promise may not have included that new charge, so the company would need fresh budget approval before it could follow through.',
          'Lin’s manager wants to retain her after a successful year on OPT. If the upcoming H-1B petition requires the $103,265 surcharge, the manager would need company approval for that expense. Finance could refuse the extra budget and the company might not file, even though the manager values Lin’s work.',
        ],
      },
      {
        title: 'For employers: budgets may concentrate on critical roles',
        text: 'If each covered petition carries the added cost, hiring budgets may shift toward hard-to-replace roles with clear business returns. Smaller businesses may have less room to adjust.',
        examples: [
          'A small company plans three cap-subject H-1B petitions. At the proposed rate, the additional fees alone would total $309,795, before existing costs. If the company can fund only one petition, it may reduce the number of employees it sponsors rather than proceed with all three.',
        ],
      },
      {
        title:
          'For pathways: cap-exempt roles may become relatively more attractive',
        text: 'The proposal excludes cap-exempt petitions. Those roles may draw more interest, though limited openings, individual fit, and a separate classification reform would still constrain this path.',
        examples: [
          'Li receives offers from a company and a university lab. Suppose the company’s petition is cap-subject and the university’s qualifies as cap-exempt. The current proposal would charge the additional fee on the former but exclude the latter. Similar salaries could therefore come with different sponsorship costs and affect the employers’ willingness to file.',
        ],
      },
    ],
    outlook:
      'Our outlook: debate will focus on the fee level, legal authority, and employers’ ability to absorb it. Labor-market effects may first appear in sponsorship willingness and budget decisions before they show up in petition volume.',
    scenarios: [
      {
        name: 'Finalized as proposed',
        headline: 'Employer sponsorship concentrates on high-value roles',
        assumption:
          'The $103,265 surcharge remains and covers the cap-subject petitions identified in the proposal.',
        effects:
          'New graduates and employers with limited budgets may be hit harder. Some employers may reduce the number of roles eligible for sponsorship before petitions are filed.',
        signals:
          'The final fee, coverage definition, effective date, and employer sponsorship policies for the next hiring cycle.',
      },
      {
        name: 'Fee or scope revised',
        headline:
          'Sponsorship interest partly recovers, with wider differences among employers',
        assumption:
          'The final rule lowers the amount or adds meaningful exceptions.',
        effects:
          'Cost pressure may ease, but outcomes would still vary by employer size, petition category, and role. Who qualifies for an exception would matter more than a single headline amount.',
        signals:
          'Responses to comments, a revised fee model, and final exemption terms.',
      },
      {
        name: 'Implementation delayed',
        headline:
          'Near-term budget pressure eases, while long-term commitments remain cautious',
        assumption:
          'Rulemaking takes longer or a later court order pauses implementation.',
        effects:
          'Employers may continue filing under current costs but remain cautious about multiyear sponsorship commitments. A temporary pause would not mean the policy has been invalidated.',
        signals:
          'Publication of a final rule, the actual terms and reach of any court order.',
      },
    ],
    scope: [
      {
        label: 'Covered petitions',
        text: 'The proposal covers cap-subject petitions, including the U.S. advanced-degree allocation; a change of status is not excluded simply because the worker is in the United States.',
      },
      {
        label: 'Excluded petitions',
        text: 'Cap-exempt petitions fall outside the proposed surcharge.',
      },
      {
        label: 'Relationship to other fees',
        text: 'This is a proposed surcharge on top of existing fees; its scope turns on whether the petition is cap-subject.',
      },
    ],
    milestones: [
      { date: '2026-08-25', text: 'DHS published the $103,265 fee NPRM.' },
      {
        date: '2026-09-10',
        text: 'Federal Register corrected Table 13 historical receipt figures; the amount, scope and comment deadline are unchanged.',
      },
    ],
    next: [
      {
        date: '2026-09-24',
        text: 'The public comment period closes, providing the clearest current opportunity to participate.',
      },
      {
        date: 'Late 2026–2027+',
        text: 'DHS may issue a final rule, which could then face litigation.',
        estimate: true,
      },
    ],
    process: {
      detail:
        'The NPRM is public and the comment period is open. DHS must review the comments before it can issue a final rule.',
      currentSummary: 'Published proposal open for comment',
      waitingFor:
        'The September 24 comment deadline, followed by DHS review of comments.',
    },
  },
};
