import type { PolicyContent } from '../policy-types.ts';

export const optFee: PolicyContent = {
  id: 'opt-fee',
  path: 'OPT',
  tone: 'blue',
  effectState: 'not-in-effect',
  checkedOn: '2026-09-26',
  related: ['h1b-fee', 'duration-status'],
  process: {
    kind: 'federal-rulemaking',
    lastCompletedStage: 1,
    activeStage: null,
    nextStage: 2,
  },
  sources: [
    {
      href: 'https://www.reginfo.gov/public/do/eoDetails?rrid=1506461',
      zh: 'OIRA 9·11 结案记录',
      en: 'OIRA September 11 conclusion',
    },
    {
      href: 'https://ois.uic.edu/news-stories/dhs-advances-proposed-rulemaking-on-opt-fees/',
      zh: 'UIC 状态说明',
      en: 'UIC status update',
    },
    {
      href: 'https://www.uscardforum.com/t/topic/531864',
      zh: '美卡论坛讨论',
      en: 'USCardForum discussion',
    },
  ],
  zh: {
    title: 'OPT 可能增收 10 万美元',
    short: 'OPT 10 万美元费用',
    status: 'OIRA 审查已完成 · 尚未生效',
    effectLabel: '尚未生效 · 金额未确认',
    agency: 'DHS / ICE',
    documentId: '1653-AB01',
    tldr: 'ICE 打算新增 OPT 收费，媒体报道的金额是 10 万美元。收多少、谁交、哪些申请要交、能不能减免，官方都还没公布，不能认定由学生承担。',
    tags: ['OPT', 'H-1B 转换'],
    summary:
      'OIRA 已在 9 月 11 日带修改完成 OPT 收费提案的审查，但提案正文还没公开。10 万美元只是媒体报道的数字：金额、谁交、哪些申请要交、有没有减免，官方都没公布，所以不能认定由学生、雇主或学校承担。这项收费尚未生效，现行 OPT 申请费也没变。',
    audience: '计划申请 OPT 或 STEM OPT 延期的 F-1 学生及其雇主。',
    caveat:
      '谁交钱、哪些申请要交、有没有减免，官方都还没公布。10 万美元只是媒体报道，不能认定由学生支付。',
    reviewNote:
      '9·26 读取 OIRA 9·11 结案记录，并按 RIN 检索联邦公报及论坛可访问回复；未核实公开 NPRM。官方金额、缴费方和适用范围仍待正式正文确认；论坛回复不是官方条款。',
    background:
      'ICE 在 2026-08-20 把 Optional Practical Training Fees 送交 OIRA。9·11 的结案记录是 Consistent with Change，也就是带修改完成审查。这只是发布前的审查结束，既不是最终规则，也不代表收费生效。目前还没有公开的 NPRM，缴费责任要等正式条款才能确定。',
    teaser: '这笔高额成本可能落在毕业后的第一份工作上，改变学生和雇主的选择。',
    headline: '毕业后的第一份美国工作，可能先面对一笔高额入场成本。',
    analysis:
      '如果这笔 10 万美元收费大范围落地，毕业后留美工作的账要重算。学生得先拿得出这笔钱。如果由雇主承担，雇主可能抬高应届生的招聘门槛。压力会前移到转 H-1B 之前。',
    impacts: [
      {
        title: '对学生：先过资金关，再谈工作回报',
        text: '如果由申请人在递交时支付，钱要在拿到工资之前先出。储蓄不多、背着教育贷款，或者起薪不高的学生，留美工作的账最难算。',
        examples: [
          '小林马上硕士毕业了，也拿到了全职 offer，打算申请 OPT 然后入职。但如果最终规定要求学生自己掏 10 万美元来办 OPT，那他在还没赚到第一笔工资之前，就得先凑出这笔钱。要是自己拿不出、家里也帮不上，就算工作已经定了，他也可能没法通过 OPT 去上班。目前这只是假设费用由学生付，具体谁出钱还没公布。',
          '小周在犹豫要不要去美国读硕士，家里只准备了学费和生活费，指着毕业后能在美国工作把钱赚回来。但如果以后申请 OPT 还要额外再交 10 万美元，那毕业工作的计划就多了一笔没算进去的开销。这个影响可能现在就会让他重新考虑要不要接受 offer，而不只是等到毕业再说。',
        ],
      },
      {
        title: '对雇主：应届生 offer 可能更难拿',
        text: '如果由企业承担，公司要在员工证明自己之前先掏一笔预算。入门岗位和预算有限的小公司受影响更大，招聘可能更偏向能很快出成绩的人。',
        examples: [
          '一家小公司准备招刚毕业的小陈，连工资预算都批好了。但如果规定改成雇主来付这 10 万美元 OPT 费用，或者公司决定帮他出，那公司就得在工资以外再掏一笔钱。要是预算加不了，公司就可能撤回或推迟 offer——这不是小陈不行，而是招他变贵了。',
        ],
      },
      {
        title: '对留美路径：压力前移到 OPT 这一站',
        text: '很多学生先靠 OPT 工作，再争取转 H-1B。费用一高，这段过渡会更难走。雇主愿不愿意出钱、别的地区有没有机会，都会变得更关键。',
      },
    ],
    outlook:
      '我们的预判：下一轮争论会集中在“谁付、谁免、谁受影响”。最终条款决定这笔钱主要压在学生身上、雇主预算上，还是某几类申请人身上。',
    scenarios: [
      {
        name: '高额广泛收费',
        headline: '常规 OPT 路径的可负担性大幅下降',
        assumption: '10 万美元适用于大多数新申请，减免很少。',
        effects:
          '学生可能放弃自费留美求职，企业也会少招应届生。出得起钱的学生和扛得住成本的雇主会更有优势。',
        signals:
          '正式提案保留这个收费量级，范围很广，也没有实质减免或过渡安排。',
      },
      {
        name: '缩小范围／减免',
        headline: '同样是 F-1，毕业后的选择可能明显分化',
        assumption: '高额收费只覆盖部分申请，或者配有豁免和过渡安排。',
        effects:
          '影响会集中在被覆盖的人身上。真正决定结果的是申请类别、豁免条件和时间界线，而不是笼统地问“留不留得下”。',
        signals:
          '文本里出现分档收费、特定豁免，或者给在读、已递交的人留过渡条款。',
      },
      {
        name: '延后／未推进',
        headline: '短期成本压力缓和，规划仍受政策悬念影响',
        assumption: '规则制定拖长、提案被撤回，或者最终没有实施。',
        effects:
          '只要没有新的生效规则，申请人就不用付这笔钱。但一直悬着不决，仍会影响择校和雇主的招聘预算。',
        signals:
          'OIRA 撤回记录，或者后续公告显示方向变了；只是迟迟不公布，还不足以判断已经放弃。',
      },
    ],
    scope: [
      {
        label: '缴费方',
        text: '学生付，直接压现金流；雇主付，招聘的账要重算。',
      },
      {
        label: '适用范围',
        text: '管不管初次 OPT 和 STEM 延期；谁能豁免；已递交的人怎么办。',
      },
      {
        label: '生效与过渡',
        text: '递交时间线和过渡期，决定哪几届毕业生会被波及。',
      },
    ],
    milestones: [
      { date: '2026-08-20', text: 'RIN 1653-AB01 送交 OMB/OIRA 审查。' },
      {
        date: '2026-08-26',
        text: '高校提醒：$100k 来自媒体报道，不是已公布政府文本。',
      },
      {
        date: '2026-09-11',
        text: 'OIRA 带修改完成审查；不等于 NPRM 已发布或收费已生效。',
      },
    ],
    next: [
      {
        date: '下一步',
        text: '等待 Federal Register 公开 NPRM，确认金额、缴费方、适用范围及评论期限。',
      },
      {
        date: '日期未定',
        text: 'NPRM 刊登、最终规则及生效时间均未确认。',
        estimate: true,
      },
    ],
    process: {
      detail:
        'OIRA 在 9 月 11 日带修改完成 OPT 收费提案的审查。目前没有公开的 NPRM，金额和缴费方未公布，尚未生效。',
      currentSummary: '正文与金额尚未公开',
      waitingFor: '等待 NPRM 正文及公众评论期；确认金额、缴费方和适用范围。',
    },
  },
  en: {
    title: 'OPT May Carry a $100,000 Fee',
    short: '$100,000 OPT Fee',
    status: 'OIRA review completed · Not in effect',
    effectLabel: 'Not in effect · Amount unconfirmed',
    agency: 'DHS / ICE',
    documentId: '1653-AB01',
    tldr: 'ICE proposes a new OPT fee. Media reports suggest $100,000, but the official amount, payer, covered applications and exemptions remain unpublished; student payment cannot be assumed.',
    tags: ['OPT', 'H-1B transition'],
    summary:
      'OIRA completed its review of the OPT fee proposal, with changes, on September 11, but the proposal text is not yet public. The $100,000 figure comes from media reports: the official amount, who pays, which applications are covered and any exemptions are all unpublished, so payment by students, employers or schools cannot be assumed. The fee is not in effect, and the current OPT filing fee is unchanged.',
    audience:
      'F-1 students planning OPT or a STEM OPT extension and their employers.',
    caveat:
      'The payer, covered applications and exemptions are unpublished; $100,000 is media-reported and student payment cannot be assumed.',
    reviewNote:
      'The September 11 OIRA conclusion and current Federal Register RIN search were reviewed September 26 along with accessible forum replies. No public NPRM was verified. The official amount, payer and scope await published text; forum replies are not official terms.',
    background:
      'ICE submitted Optional Practical Training Fees on August 20, 2026; the September 11 OIRA conclusion is Consistent with Change. Completed prepublication review is not a final rule or an effective fee. No public NPRM was located; payment responsibility awaits official provisions.',
    teaser:
      'A major cost at the first post-graduation job could change the choices students and employers make.',
    headline:
      'The first U.S. job after graduation could come with a steep entry cost.',
    analysis:
      'If a $100,000 fee is broadly implemented, it could significantly change the economics of working in the U.S. Students would need greater financial capacity, employers covering the fee could raise the bar for new-graduate hiring, and the pressure would arrive before the H-1B transition.',
    impacts: [
      {
        title: 'For students: financing comes before returns',
        text: 'If applicants must pay when filing, the expense would come before they earn income from the job. Students with limited savings, education debt, or lower expected starting salaries would face a greater challenge in making U.S. employment financially viable.',
        examples: [
          'Lin is finishing a master’s and has a full-time offer, with plans to start after obtaining OPT. If the final rule requires the student to pay $100,000 when applying, Lin would need that money before receiving a first paycheck. If neither Lin nor the family can afford it, the offer alone would not make starting work through OPT possible. This assumes the student pays; the payer has not been announced.',
          'Zhou is deciding whether to accept a US master’s offer. The family has budgeted for tuition and living costs and hopes Zhou will work in the US afterward. If OPT later requires another $100,000 from the student, that work plan would carry a cost outside the original budget. The possible fee could affect the admission decision now, not only decisions after graduation.',
        ],
      },
      {
        title: 'For employers: new-graduate offers may become harder to secure',
        text: 'If employers pay, they would commit more money before an employee has demonstrated value. Entry-level roles and small companies with limited budgets may be more sensitive and may favor candidates who can produce returns sooner.',
        examples: [
          'A small company has budgeted a salary for new graduate Chen. If the final rule makes the employer responsible for the OPT fee, or the company chooses to cover it, the company would need another $100,000 beyond salary. Without a larger hiring budget, it might withdraw or delay the offer because of the added cost, not because Chen is unsuitable for the role.',
        ],
      },
      {
        title: 'For the U.S. pathway: pressure moves to the OPT stage',
        text: 'For students who rely on OPT to begin working and later seek H-1B status, a high fee could make that bridge less accessible. Employer support for the fee and job options in other places may become more important.',
      },
    ],
    outlook:
      'Our outlook: the next debate will center on who pays, who is exempt, and who is affected. Those provisions will determine whether the cost falls mainly on student finances, employer hiring budgets, or particular applicants.',
    scenarios: [
      {
        name: 'Broad high fee',
        headline: 'The standard OPT path becomes far less affordable',
        assumption:
          'The $100,000 fee applies to most new applications, with limited relief.',
        effects:
          'Students may be less willing to fund a U.S. job search themselves, while employers may tighten new-graduate hiring. Applicants with financial resources and employers able to absorb the cost would have a relative advantage.',
        signals:
          'A formal proposal keeps the fee at this level, applies it broadly, and provides no meaningful waiver or transition protection.',
      },
      {
        name: 'Narrower scope or relief',
        headline: 'Post-graduation options diverge sharply among F-1 students',
        assumption:
          'The high fee applies only to some applications or includes exemptions and transition measures.',
        effects:
          'The burden would concentrate on covered groups. Application category, exemption criteria, and timing boundaries would explain outcomes better than a single question of whether students can stay.',
        signals:
          'The text introduces tiered fees, specific exemptions, or transition terms for current students and pending applicants.',
      },
      {
        name: 'Delayed or abandoned',
        headline:
          'Near-term cost pressure eases, but uncertainty still affects planning',
        assumption:
          'Later rulemaking takes longer, the rule is withdrawn, or the proposal never reaches final implementation.',
        effects:
          'Without a new effective rule, applicants would not yet bear this added cost. Continued uncertainty could still influence school choices and future hiring budgets.',
        signals:
          'An OIRA withdrawal record or later announcement changes the plan; publication delay alone is not enough to conclude that it has been abandoned.',
      },
    ],
    scope: [
      {
        label: 'Who pays',
        text: 'Student payment affects cash flow; employer payment changes the cost-benefit calculation for hiring.',
      },
      {
        label: 'Covered applications',
        text: 'Initial OPT, STEM extensions, exempt groups, and protection for existing cases.',
      },
      {
        label: 'Effective date and transition',
        text: 'Filing cutoffs and transition periods determine which graduating classes are affected.',
      },
    ],
    milestones: [
      {
        date: '2026-08-20',
        text: 'RIN 1653-AB01 was submitted to OMB/OIRA for review.',
      },
      {
        date: '2026-08-26',
        text: 'Universities cautioned that the $100,000 figure came from media reporting, not a published government document.',
      },
      {
        date: '2026-09-11',
        text: 'OIRA completed review with changes; this does not mean an NPRM was published or a fee took effect.',
      },
    ],
    next: [
      {
        date: 'Next step',
        text: 'Await a published NPRM to confirm the amount, payer, coverage and comment deadline.',
      },
      {
        date: 'Date unknown',
        text: 'NPRM publication, a final rule and any effective date remain unconfirmed.',
        estimate: true,
      },
    ],
    process: {
      detail:
        'OIRA completed OPT fee proposal review with changes on September 11. No public NPRM was located; the amount and payer are unpublished and the fee is not in effect.',
      currentSummary: 'Rule text and fee amount are not public',
      waitingFor:
        'Publication of an NPRM and comment period, specifying the amount, payer and coverage.',
    },
  },
};
