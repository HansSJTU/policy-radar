import type { CommentSample } from '../public-comment-types';

export default {
  policyId: 'h1b-fee',
  documentId: 'USCIS-2026-0298-0001',
  checkedOn: '2026-09-12',
  publishedCount: 8342,
  status: 'reviewed',
  sampledAt: '2026-09-12T12:17:18.756Z',
  seed: '2d87d703ff11fe7baf5eed9dff4040a76d5df5404fe74fae2a93cff42d3c9191',
  frameSize: 8342,
  manifestUrl: '/comment-samples/h1b-fee-2026-09-12.json',
  themes: [
    {
      id: 'jobs',
      zh: '本土就业与工资',
      en: 'U.S. jobs and wages',
      description: {
        zh: '涉及美国劳动者的岗位替代、工资压力、招聘优先或培训。',
        en: 'Discusses displacement, wage pressure, hiring priority or training of U.S. workers.',
      },
    },
    {
      id: 'fraud',
      zh: '反欺诈与用工监管',
      en: 'Fraud prevention and labor enforcement',
      description: {
        zh: '提出或回应欺诈、项目滥用、招聘歧视、工资执法及核查问题。',
        en: 'Raises or addresses fraud, program abuse, recruitment discrimination, wage enforcement or verification.',
      },
    },
    {
      id: 'restriction',
      zh: '要求更高费用或更严签证限制',
      en: 'Higher fees or tighter visa limits',
      description: {
        zh: '要求超过提案的收费、扩大征收范围、重复收费或进一步限制／取消签证。',
        en: 'Seeks a higher fee, broader coverage, recurring charges or further visa restrictions or abolition.',
      },
    },
    {
      id: 'burden',
      zh: '费用负担与企业准入',
      en: 'Fee burden and employer access',
      description: {
        zh: '担忧收费或既有办理成本、企业承受力以及付费门槛造成的不平等。',
        en: 'Expresses concern about fees or existing processing costs, affordability or unequal access based on ability to pay.',
      },
    },
    {
      id: 'talent',
      zh: '人才、创新与岗位外流',
      en: 'Talent, innovation and offshoring',
      description: {
        zh: '担忧技术人才、创业、创新、投资或相关岗位因收费流失。',
        en: 'Warns of losing skilled talent, entrepreneurship, innovation, investment or related jobs because of the fee.',
      },
    },
    {
      id: 'legal',
      zh: '收费权限、成本分摊与收入',
      en: 'Authority, cost allocation and revenue',
      description: {
        zh: '讨论法律路径、跨部门成本分摊、公共财政、收费或收入测算。',
        en: 'Discusses the legal route, interagency cost allocation, public finances or fee and revenue estimates.',
      },
    },
    {
      id: 'tailored',
      zh: '差异化收费、豁免或替代措施',
      en: 'Targeted fees, exemptions or alternatives',
      description: {
        zh: '提出按规模、工资、用工模式或合规风险收费、豁免，或用针对性执法替代统一收费。',
        en: 'Proposes fees or exemptions based on size, wages, hiring model or compliance risk, or targeted enforcement instead of a uniform fee.',
      },
    },
    {
      id: 'students',
      zh: '在美学生与既有教育投入',
      en: 'U.S.-educated students and prior investment',
      description: {
        zh: '提到在美就读、美国培养的毕业生、教育投入或从学生身份转向工作的影响。',
        en: 'Mentions current U.S. study, U.S.-educated graduates, educational investment or the transition from study to work.',
      },
    },
  ],
  comments: [
    {
      id: 'USCIS-2026-0298-1458',
      stance: 'support',
      themes: ['restriction'],
      summary: {
        zh: '支持收费，并要求进一步暂停移民和收紧身份政策。',
        en: 'Supports the fee and calls for a broader immigration moratorium and status restrictions.',
      },
      postedDate: '2026-08-26T04:00:00Z',
      textSha256:
        '1daf502896823cfa315c5ca2e6bfb29cae2aa0eaa5ae27a3fbf0fa7ad2a66562',
    },
    {
      id: 'USCIS-2026-0298-0483',
      stance: 'support',
      themes: ['jobs', 'restriction', 'fraud'],
      summary: {
        zh: '称自己因低薪签证用工失业，要求费用覆盖续签并整治招聘歧视。',
        en: 'Attributes a layoff to lower-cost visa hiring and seeks coverage of renewals and action on discriminatory recruitment.',
      },
      postedDate: '2026-08-25T04:00:00Z',
      textSha256:
        '7e773b40f856575a803628324a1c1587ca856c8314426f26d30b16bb0c4d3d09',
    },
    {
      id: 'USCIS-2026-0298-2413',
      stance: 'oppose',
      themes: ['burden', 'talent', 'legal', 'tailored', 'fraud', 'jobs'],
      summary: {
        zh: '质疑跨部门成本分摊和税收测算，主张工资执法及按企业情况分级收费。',
        en: 'Questions interagency cost allocation and tax assumptions, favoring wage enforcement and graduated fees.',
      },
      postedDate: '2026-08-26T04:00:00Z',
      textSha256:
        'ebc465dcee6bcfc0e1dda6284ef650da6f68995e18eadf525bd8d081cc661581',
    },
    {
      id: 'USCIS-2026-0298-3491',
      stance: 'oppose',
      themes: ['legal', 'burden', 'tailored'],
      summary: {
        zh: '认为费用与单份申请成本关联不足，并要求重算收入、照顾小企业。',
        en: 'Questions the link to petition costs and asks for stronger revenue analysis and small-business adjustments.',
      },
      postedDate: '2026-08-27T04:00:00Z',
      textSha256:
        '2c7a09e081ecc04ffec5251fe13c2933256acf83cea23fddefd0d0ec2436d19c',
    },
    {
      id: 'USCIS-2026-0298-2004',
      stance: 'support',
      themes: ['restriction'],
      summary: {
        zh: '认为方向正确，但要求更高收费。',
        en: 'Endorses the direction of the proposal but wants a higher fee.',
      },
      postedDate: '2026-08-26T04:00:00Z',
      textSha256:
        '6ea125bcc8f8fd3fedaf913a63a0a7c5e776282cfcedd1df8c698298f15933fc',
    },
    {
      id: 'USCIS-2026-0298-3355',
      stance: 'oppose',
      themes: ['legal', 'burden', 'tailored'],
      summary: {
        zh: '提交内容是一段反对提案的写作提示，列出法律权限、收入和企业负担等论点。',
        en: 'The submission is a drafting prompt seeking opposition to the proposal on authority, revenue and employer-burden grounds.',
      },
      postedDate: '2026-08-27T04:00:00Z',
      textSha256:
        '95d66bb7ee4792f9043f85b5eecabc1004c307bb25762a8e44efc4c6643694d1',
    },
    {
      id: 'USCIS-2026-0298-1848',
      stance: 'support',
      themes: ['jobs', 'restriction'],
      summary: {
        zh: '认为项目损害劳动者利益，支持收费并主张最终取消 H-1B。',
        en: 'Views the program as harmful to workers, supports the fee and favors ending H-1B.',
      },
      postedDate: '2026-08-26T04:00:00Z',
      textSha256:
        '0388b208172f2986a3bf0f4d90fbc7d255ebb613f620152a799c829a7771b57c',
    },
    {
      id: 'USCIS-2026-0298-6233',
      stance: 'mixed',
      themes: ['burden', 'talent', 'tailored', 'fraud'],
      summary: {
        zh: '支持对外包中介收费，但要求区分初创企业和直接雇用的技术岗位。',
        en: 'Supports fees for staffing firms but seeks different treatment for startups and direct technology hiring.',
      },
      postedDate: '2026-09-04T04:00:00Z',
      textSha256:
        'dee0e4ef08f93a753e2c816a1364621ea1684ef8cda77ab135843291058e84ba',
    },
    {
      id: 'USCIS-2026-0298-0346',
      stance: 'support',
      themes: ['jobs', 'fraud', 'legal'],
      summary: {
        zh: '认为费用能检验真实招聘需求、保护工资并分担公共成本，反对豁免。',
        en: 'Argues the fee tests genuine hiring needs, protects wages and funds public costs, opposing exemptions.',
      },
      postedDate: '2026-08-25T04:00:00Z',
      textSha256:
        'f048aa4f7f619ea8a57f137d7332c9d46e158caae0daf93768a442d4fccbc52c',
    },
    {
      id: 'USCIS-2026-0298-0843',
      stance: 'support',
      themes: ['jobs', 'restriction', 'fraud'],
      summary: {
        zh: '要求更高、不可规避且重复征收的费用，并证明已考虑美国劳动者。',
        en: 'Seeks higher, unavoidable, recurring fees and proof that U.S. workers were considered.',
      },
      postedDate: '2026-08-26T04:00:00Z',
      textSha256:
        '9f397a40a9d9366339fbeae5e3c8391778307c0cd3f10b98e7196c4de96d0687',
    },
    {
      id: 'USCIS-2026-0298-3377',
      stance: 'support',
      themes: ['jobs', 'fraud', 'legal'],
      summary: {
        zh: '认为签证用工压低工资，支持预缴费用并加强劳工和移民项目监管。',
        en: 'Argues visa hiring suppresses wages and supports an upfront fee alongside stronger program oversight.',
      },
      postedDate: '2026-08-27T04:00:00Z',
      textSha256:
        '160b3c8abf5be1b367894d6841134d6d6e8a09dcc8ccec7d1225615b30396e4b',
    },
    {
      id: 'USCIS-2026-0298-3637',
      stance: 'oppose',
      themes: ['burden'],
      summary: {
        zh: '认为金额过高、形成付费准入，并损害美国政府声誉。',
        en: 'Criticizes the high price as pay-to-play access that damages the government’s reputation.',
      },
      postedDate: '2026-08-28T04:00:00Z',
      textSha256:
        'c5d6b324a429f731ec1264dc7bd24d5e8358b9c9eb3ebc81724f699d2162ab8d',
    },
    {
      id: 'USCIS-2026-0298-4586',
      stance: 'oppose',
      themes: ['talent', 'jobs'],
      summary: {
        zh: '强调技术移民未来可能创业和创造岗位，担忧长期贡献流失。',
        en: 'Emphasizes future entrepreneurship and job creation and fears losing those long-term contributions.',
      },
      postedDate: '2026-08-31T04:00:00Z',
      textSha256:
        '91712ed569a0ea7a6aa5994b33e81d39ffdf24ee5f360d0d9ee148ff1e0c8c68',
    },
    {
      id: 'USCIS-2026-0298-7999',
      stance: 'support',
      themes: ['jobs'],
      summary: {
        zh: '认为提高雇用成本有助于减少替代美国劳动者并促进本土招聘。',
        en: 'Argues higher hiring costs would reduce displacement and encourage domestic recruitment.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        'f03f16fb0f965728fcb57f4cc9b01cc2e6cadeece22ef206b3bd8ed8eec7a64c',
    },
    {
      id: 'USCIS-2026-0298-5963',
      stance: 'support',
      themes: ['jobs', 'fraud', 'legal'],
      summary: {
        zh: '以裁员、工资和滥用问题支持收费，并支持用收入加强审查和监管。',
        en: 'Cites layoffs, wages and abuse in support of the fee and funding additional review and enforcement.',
      },
      postedDate: '2026-09-03T04:00:00Z',
      textSha256:
        '1e84fcc400d18d6d7e31aacc128a89f8f9578226021bf0f06607afc0d769b6ec',
    },
    {
      id: 'USCIS-2026-0298-7448',
      stance: 'support',
      themes: ['jobs'],
      summary: {
        zh: '认为收费可改变雇主使用较低成本签证劳动力的选择。',
        en: 'Argues the fee would change employers’ preference for lower-cost visa labor.',
      },
      postedDate: '2026-09-10T04:00:00Z',
      textSha256:
        '61c40b5c3f1ada9e6bb5fee3d8dabb5dd535d9f022d4f736e74c47936f4ce1b8',
    },
    {
      id: 'USCIS-2026-0298-7625',
      stance: 'support',
      themes: ['jobs', 'fraud'],
      summary: {
        zh: '以美国劳动者失业和签证滥用为由支持政策。',
        en: 'Supports the policy on the grounds of U.S. unemployment and alleged visa abuse.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '9f8641ccce8cbc66e9a2ca25ca79656d95976e0f36685cb2ce7d2d0b7d55b9db',
    },
    {
      id: 'USCIS-2026-0298-6729',
      stance: 'oppose',
      themes: ['talent', 'students', 'burden', 'jobs'],
      summary: {
        zh: '担忧人才、研发和投资外流，以及在美学生的就业路径受阻。',
        en: 'Fears offshoring of talent, research and investment and barriers to employment for U.S.-educated students.',
      },
      postedDate: '2026-09-08T04:00:00Z',
      textSha256:
        'e66b5af7876506fa0432680818160b7ec3adfec232eea04c56d7d587d846eb89',
    },
    {
      id: 'USCIS-2026-0298-7352',
      stance: 'support',
      themes: ['jobs'],
      summary: {
        zh: '认为收费早该实施，以减少企业用低成本外籍员工替代美国人。',
        en: 'Regards the fee as overdue to reduce replacement of Americans with lower-cost foreign hires.',
      },
      postedDate: '2026-09-10T04:00:00Z',
      textSha256:
        'd1740a6c7f3b5bb747aa19519e006afa88649ca86c9af94921cf3d5cf9e4b1eb',
    },
    {
      id: 'USCIS-2026-0298-3306',
      stance: 'support',
      themes: ['restriction', 'fraud', 'legal'],
      summary: {
        zh: '要求所有签证按年收取更高费用，用于核验和反欺诈。',
        en: 'Calls for higher annual fees across visa types to fund verification and fraud prevention.',
      },
      postedDate: '2026-08-27T04:00:00Z',
      textSha256:
        '356975c262ab87f2a67b9bb155dca563bc0fee29a28ac677a25d5ff48ae4b37f',
    },
    {
      id: 'USCIS-2026-0298-0045',
      stance: 'support',
      themes: ['jobs', 'fraud', 'legal'],
      summary: {
        zh: '支持通过收费弥补行政成本并减少压低工资和替代本土员工的行为。',
        en: 'Supports recovering administrative costs and discouraging wage suppression and worker displacement.',
      },
      postedDate: '2026-08-25T04:00:00Z',
      textSha256:
        'b8a0baa7ea976ffd6d25cf7c6b593afc4b2b5b4c16b1070a6fffac2e1c5f6c27',
    },
    {
      id: 'USCIS-2026-0298-1557',
      stance: 'support',
      themes: ['jobs', 'restriction'],
      summary: {
        zh: '要求大幅提高费用，并主张优先保障美国人的就业机会。',
        en: 'Calls for a much higher fee and prioritizing job opportunities for Americans.',
      },
      postedDate: '2026-08-26T04:00:00Z',
      textSha256:
        '78941ae1968af07e1b6e94a9483ad8fd3e4aea6cd28c61e5727359954faa306c',
    },
    {
      id: 'USCIS-2026-0298-6404',
      stance: 'oppose',
      themes: ['legal', 'burden', 'talent'],
      summary: {
        zh: '质疑收入目标依据，担忧企业减少招聘和投资后税收反而下降。',
        en: 'Questions the revenue target and fears reduced hiring and investment would lower tax receipts.',
      },
      postedDate: '2026-09-08T04:00:00Z',
      textSha256:
        '2ff8bf9fe8b6b95c1b5e8362639e4078beabedec21479daf7da35a1b584e3087',
    },
    {
      id: 'USCIS-2026-0298-1779',
      stance: 'support',
      themes: ['fraud', 'jobs'],
      summary: {
        zh: '支持加强费用要求和合规监管，以防止滥用并保护美国劳动者。',
        en: 'Supports stronger financial requirements and compliance controls to prevent abuse and protect U.S. workers.',
      },
      postedDate: '2026-08-26T04:00:00Z',
      textSha256:
        '7b737456a09f38d6118a9ed75486e99f037cda53ff20f89cb834bfcf4735e0db',
    },
    {
      id: 'USCIS-2026-0298-5888',
      stance: 'oppose',
      themes: ['burden', 'talent', 'fraud', 'tailored', 'jobs'],
      summary: {
        zh: '担忧小企业招聘受阻和岗位外流，主张以执法和工资保障替代统一高收费。',
        en: 'Fears barriers for small employers and offshoring, favoring enforcement and wage protections over a uniform high fee.',
      },
      postedDate: '2026-09-02T04:00:00Z',
      textSha256:
        'f46f7a8d4a5c1ae4c205b38726bbee4116b0e18ab8eb4de22cbcd500582785ba',
    },
    {
      id: 'USCIS-2026-0298-2546',
      stance: 'unclear',
      themes: ['burden', 'jobs'],
      summary: {
        zh: '否认 H-1B 员工获招聘优待，指出既有法律手续成本；未明确表态收费提案。',
        en: 'Rejects claims that H-1B workers receive hiring preference and notes existing legal costs, without a clear position on the fee.',
      },
      postedDate: '2026-08-27T04:00:00Z',
      textSha256:
        '58151832a38e866b588acb35f9ac3eb22ad2d95d85f351c569802ce36b946f22',
    },
    {
      id: 'USCIS-2026-0298-4108',
      stance: 'oppose',
      themes: ['burden', 'talent', 'tailored', 'fraud'],
      summary: {
        zh: '要求针对外包和违规企业加强监管，避免初创企业承担一刀切费用。',
        en: 'Seeks targeted oversight of outsourcing and violations instead of a blanket fee on startups.',
      },
      postedDate: '2026-08-28T04:00:00Z',
      textSha256:
        'e8c3f80265fc67ee695405d941a15545d050db3684f485ee146ea8f354113671',
    },
    {
      id: 'USCIS-2026-0298-1951',
      stance: 'oppose',
      themes: ['legal', 'burden', 'tailored'],
      summary: {
        zh: '质疑把广泛政府成本集中分摊给 H-1B 雇主，并建议小企业减免和分级收费。',
        en: 'Questions allocating broad government costs to H-1B employers and proposes small-employer relief and graduated fees.',
      },
      postedDate: '2026-08-26T04:00:00Z',
      textSha256:
        '580a53f053af9438625595c7cd6400911d0e93acfedc545c527401ff0b05b2c0',
    },
    {
      id: 'USCIS-2026-0298-2027',
      stance: 'unclear',
      themes: ['jobs', 'restriction'],
      summary: {
        zh: '主张取消所有签证并担忧就业和公共资源，但未直接评价这笔费用。',
        en: 'Calls for ending visas and raises employment and public-resource concerns, without directly evaluating the fee.',
      },
      postedDate: '2026-08-26T04:00:00Z',
      textSha256:
        '0597cde341be6dc48ef74ae4d8443b904b259ec141ae4665fd9f1463912e67cf',
    },
    {
      id: 'USCIS-2026-0298-1122',
      stance: 'support',
      themes: ['jobs', 'fraud', 'legal'],
      summary: {
        zh: '支持收费，同时要求真实招聘核验、审计和收入用途公开。',
        en: 'Supports the fee together with genuine recruitment checks, audits and transparency about revenue use.',
      },
      postedDate: '2026-08-26T04:00:00Z',
      textSha256:
        '07abee9ef4c2738d8e6f5572ea7c52582a325fc5aedc957cd691897ebf086025',
    },
    {
      id: 'USCIS-2026-0298-1642',
      stance: 'support',
      themes: ['jobs'],
      summary: {
        zh: '明确要求实施提案，以优先保障美国人的就业。',
        en: 'Urges adoption of the proposal to prioritize jobs for Americans.',
      },
      postedDate: '2026-08-26T04:00:00Z',
      textSha256:
        'bcc1111fc410efc740d72654d4517f75a10ed8e43b2ac3fee290b6819298ef4b',
    },
    {
      id: 'USCIS-2026-0298-7167',
      stance: 'oppose',
      themes: ['burden', 'talent', 'tailored', 'fraud', 'jobs', 'students'],
      summary: {
        zh: '担忧人才流向他国、初创企业处于劣势，建议针对违规行为执法。',
        en: 'Fears talent flight and disadvantages for startups, favoring enforcement against violations.',
      },
      postedDate: '2026-09-10T04:00:00Z',
      textSha256:
        '2ca895b93163c152c4f95690d65caafd8f1ed4db40e7eee3fcd911c79c637411',
    },
    {
      id: 'USCIS-2026-0298-7114',
      stance: 'support',
      themes: ['restriction', 'jobs', 'fraud'],
      summary: {
        zh: '要求费用提高至两到三倍，以遏制所称的外包和欺诈问题。',
        en: 'Wants the fee doubled or tripled to counter alleged outsourcing and fraud.',
      },
      postedDate: '2026-09-09T04:00:00Z',
      textSha256:
        'b20dbc3f88606da597b06c85511577083984b3d019fdf8e96625c943c216e69d',
    },
    {
      id: 'USCIS-2026-0298-1748',
      stance: 'unclear',
      themes: ['jobs', 'restriction'],
      summary: {
        zh: '主张优先本土招聘并收紧 H-1B 权利和再次申请条件，未明确评价费用。',
        en: 'Seeks domestic hiring priority and tighter H-1B rights and reapplication conditions, without stating a fee position.',
      },
      postedDate: '2026-08-26T04:00:00Z',
      textSha256:
        'f868bc35f25479803ef5f22e9e49c0fde579d5cd42e8dcdb0c0d8b9e52b5e705',
    },
    {
      id: 'USCIS-2026-0298-1405',
      stance: 'support',
      themes: [],
      summary: {
        zh: '明确支持该提案，没有展开具体理由。',
        en: 'Explicitly supports the proposal without developing a specific argument.',
      },
      postedDate: '2026-08-26T04:00:00Z',
      textSha256:
        'd8a3a2e9e42af8019e877982523ece2eec4a3b644a30a853982e6481cecbc8d4',
    },
    {
      id: 'USCIS-2026-0298-6282',
      stance: 'unclear',
      themes: ['restriction', 'fraud', 'legal'],
      summary: {
        zh: '批评规则制定效率和司法阻力，主张立法收费及加强核查；对本提案立场不明。',
        en: 'Criticizes rulemaking and litigation delays, preferring legislation and stronger checks; its position on this proposal is unclear.',
      },
      postedDate: '2026-09-04T04:00:00Z',
      textSha256:
        'f93d0bd4e96f3b7a81f081a0eb3691a672ab5824ddb920a1a845886c243a96cc',
    },
    {
      id: 'USCIS-2026-0298-2681',
      stance: 'oppose',
      themes: [],
      summary: {
        zh: '简短反对十万美元收费，没有展开理由。',
        en: 'Briefly opposes the six-figure fee without giving a reason.',
      },
      postedDate: '2026-08-27T04:00:00Z',
      textSha256:
        '85021f8e19ea34ee097acf77d2a1d847cd72d79a51650a6fd9975ade45011d0b',
    },
    {
      id: 'USCIS-2026-0298-8048',
      stance: 'support',
      themes: ['jobs'],
      summary: {
        zh: '认为收费有助于抑制较低成本签证用工并促进本土招聘。',
        en: 'Argues the fee would discourage lower-cost visa hiring and encourage domestic recruitment.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '61c40b5c3f1ada9e6bb5fee3d8dabb5dd535d9f022d4f736e74c47936f4ce1b8',
    },
    {
      id: 'USCIS-2026-0298-0090',
      stance: 'oppose',
      themes: ['burden', 'talent', 'legal', 'tailored', 'fraud', 'jobs'],
      summary: {
        zh: '承认保护本土劳动者的目标，但要求按执法风险、企业规模和人才稀缺程度调整收费。',
        en: 'Recognizes U.S.-worker protection goals but seeks a structure reflecting enforcement risk, employer size and skill scarcity.',
      },
      postedDate: '2026-08-25T04:00:00Z',
      textSha256:
        '284eed2abfb5073456254a6e30dd5f98f16f10da850aae1187fec572a218f28d',
    },
    {
      id: 'USCIS-2026-0298-0064',
      stance: 'support',
      themes: ['jobs'],
      summary: {
        zh: '认为收费可减少替代美国员工，并推动企业培训现有员工。',
        en: 'Believes the fee would reduce displacement and encourage training of existing employees.',
      },
      postedDate: '2026-08-25T04:00:00Z',
      textSha256:
        '328dac9c37058d456f2a5c4cb59b5ee677f208e14245b75b95c8c9c65481715a',
    },
    {
      id: 'USCIS-2026-0298-3187',
      stance: 'oppose',
      themes: ['talent', 'burden', 'legal', 'students', 'jobs'],
      summary: {
        zh: '担忧技术岗位外迁、在美培养的人才流失，并质疑跨部门收费权限。',
        en: 'Fears technology offshoring and loss of U.S.-educated talent and questions authority for interagency cost recovery.',
      },
      postedDate: '2026-08-27T04:00:00Z',
      textSha256:
        'c7672229f05cc9f36f5899133ae70446fbd8f17d8007d9ead07b7e2541e4992a',
    },
    {
      id: 'USCIS-2026-0298-1366',
      stance: 'unclear',
      themes: ['jobs', 'fraud', 'restriction'],
      summary: {
        zh: '主张关闭签证项目，并提出就业和欺诈担忧；未明确评价费用提案。',
        en: 'Calls for ending visa programs and raises employment and fraud concerns, without explicitly addressing the fee.',
      },
      postedDate: '2026-08-26T04:00:00Z',
      textSha256:
        '47eb9ca548ac572ab265d56c41f7d08381c3fa467042d4c753f0366fe3cd0815',
    },
    {
      id: 'USCIS-2026-0298-1205',
      stance: 'mixed',
      themes: ['jobs', 'tailored'],
      summary: {
        zh: '建议费用与工资按一比一挂钩，以减少低成本用工动机。',
        en: 'Proposes a fee equal to the worker’s salary to discourage low-cost labor substitution.',
      },
      postedDate: '2026-08-26T04:00:00Z',
      textSha256:
        'e5783dc7b704af5109e12b9e62ac5544d96ce2d498d227a2492e130db18a71bf',
    },
    {
      id: 'USCIS-2026-0298-8267',
      stance: 'oppose',
      themes: ['burden', 'talent', 'jobs'],
      summary: {
        zh: '认为收费过高；在优先招聘美国人的前提下，应合理定价以满足技术人才需求。',
        en: 'Objects to the high price and favors affordable access to needed skills after prioritizing U.S. recruitment.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '9d17490aa426eb284079eeb1c48358a171b4b8657ee607f3ae3b8d68b25ab27b',
    },
    {
      id: 'USCIS-2026-0298-1744',
      stance: 'support',
      themes: ['jobs', 'restriction'],
      summary: {
        zh: '支持新收费，同时要求彻底取消 H-1B，减少就业竞争。',
        en: 'Supports the fee and also calls for abolishing H-1B to reduce job competition.',
      },
      postedDate: '2026-08-26T04:00:00Z',
      textSha256:
        '3ba335f91552fab4c48d77d6a4ee16809f1ac3dd4c3c09f7f4a9e8fa72317bc8',
    },
    {
      id: 'USCIS-2026-0298-0850',
      stance: 'unclear',
      themes: ['fraud', 'jobs'],
      summary: {
        zh: '指称项目存在欺诈和招聘歧视，但没有明确表态这笔收费。',
        en: 'Alleges program fraud and discriminatory recruitment without taking an explicit position on the fee.',
      },
      postedDate: '2026-08-26T04:00:00Z',
      textSha256:
        '949d137b8bece70e3ef5a4e03916a5311db9b5346cb49c9ed13b9a60cb79e573',
    },
    {
      id: 'USCIS-2026-0298-2962',
      stance: 'oppose',
      themes: [
        'legal',
        'burden',
        'talent',
        'tailored',
        'students',
        'jobs',
        'fraud',
      ],
      summary: {
        zh: '质疑法定权限和税费性质，建议按实际成本及企业规模收费，并担忧岗位和人才外流。',
        en: 'Questions statutory authority and the tax-like charge, favoring cost-linked, size-based fees and warning of offshoring and talent loss.',
      },
      postedDate: '2026-08-27T04:00:00Z',
      textSha256:
        '98667a203c29635b1f121106cee0006e59987ab5972ca2b28c32646a1faddd3d',
      sourceNote: {
        zh: '正文已读取；附带的 DOCX 下载返回 403，本条按正文归类。',
        en: 'Body reviewed; the attached DOCX returned HTTP 403. Classification is based on the body.',
      },
    },
    {
      id: 'USCIS-2026-0298-6119',
      stance: 'mixed',
      themes: ['students', 'tailored', 'burden'],
      summary: {
        zh: '支持规则，但要求豁免已经在美国大学就读的学生，以保护既有教育投入。',
        en: 'Supports the rule but seeks an exemption for students already at U.S. universities to protect prior educational investment.',
      },
      postedDate: '2026-09-03T04:00:00Z',
      textSha256:
        'db8d5b7f5124315fc9f5327e6f1ed3ced72335c8f372257881eedfd69c72e59e',
    },
    {
      id: 'USCIS-2026-0298-4996',
      stance: 'support',
      themes: ['jobs', 'restriction', 'legal'],
      summary: {
        zh: '支持提高收费和扩大成本回收，并建议将金额上调至 104,000 美元。',
        en: 'Supports the fee and broader cost recovery and suggests raising the amount to $104,000.',
      },
      postedDate: '2026-08-31T04:00:00Z',
      textSha256:
        '5502f6e2ff26651de7907234d82f99a69098a7ab8c091a3f8cabbe82970df13c',
    },
    {
      id: 'USCIS-2026-0298-2152',
      stance: 'unclear',
      themes: ['jobs', 'restriction'],
      summary: {
        zh: '描述本土员工被外包劳动力替代的经历并要求取消项目，未明确评价费用。',
        en: 'Describes domestic workers being replaced by contractors and calls for ending the program, without explicitly evaluating the fee.',
      },
      postedDate: '2026-08-26T04:00:00Z',
      textSha256:
        'e443e1b4eaddc04d7caba9d41cf4ae0266bf35a518aeb1161bf27bd37953ede6',
    },
    {
      id: 'USCIS-2026-0298-7134',
      stance: 'support',
      themes: ['jobs', 'fraud'],
      summary: {
        zh: '支持收费，认为雇主利用签证依赖压低劳动条件，并主张更广泛劳工改革。',
        en: 'Supports the fee, alleging sponsorship dependency worsens working conditions and seeking broader labor reform.',
      },
      postedDate: '2026-09-09T04:00:00Z',
      textSha256:
        'de200d5a30fec47ce8bd8f4768e59c5f101c84d19787e9f2b8248aaf0fd0479b',
    },
    {
      id: 'USCIS-2026-0298-5929',
      stance: 'oppose',
      themes: ['jobs'],
      summary: {
        zh: '认为提案无助就业市场，要求放弃。',
        en: 'Rejects the proposal as unhelpful to the job market.',
      },
      postedDate: '2026-09-03T04:00:00Z',
      textSha256:
        'a1cf2a6d05b84369cedc8e933e6794cd15b4b2115a2ec73355990a089361d8a2',
    },
    {
      id: 'USCIS-2026-0298-2449',
      stance: 'oppose',
      themes: ['legal'],
      summary: {
        zh: '要求撤回提案，质疑条文编号、适用范围、退款程序与跨部门资金监管。',
        en: 'Seeks withdrawal over drafting ambiguity, coverage, refund procedures and interagency financial controls.',
      },
      postedDate: '2026-08-27T04:00:00Z',
      textSha256:
        'b0a55b9f744648def4b916818fb7f3cfb69f016ba35a2476db66e1496d549fb3',
    },
    {
      id: 'USCIS-2026-0298-6044',
      stance: 'oppose',
      themes: [],
      summary: {
        zh: '反对实施，担忧增加 H-1B 持有人的不确定性。',
        en: 'Opposes adoption because of added uncertainty for H-1B holders.',
      },
      postedDate: '2026-09-03T04:00:00Z',
      textSha256:
        '8c8ceb64641dfa777f7c8235421ea6521f8c8c437593983b8016993796c828ce',
    },
    {
      id: 'USCIS-2026-0298-4220',
      stance: 'oppose',
      themes: ['burden', 'legal'],
      summary: {
        zh: '不排斥合理涨费，但认为六位数收费缺乏成本依据并阻碍合法移民。',
        en: 'Accepts reasonable increases but rejects the six-figure charge as unjustified and exclusionary.',
      },
      postedDate: '2026-08-31T04:00:00Z',
      textSha256:
        '6248c72e908de1abfd1dbd7090915485c6ce290bd10c21f4c7e2504fca73a37e',
    },
    {
      id: 'USCIS-2026-0298-0403',
      stance: 'mixed',
      themes: ['jobs', 'fraud', 'restriction', 'legal'],
      summary: {
        zh: '认为拟议费用仍太低，要求提高收费并强化本土招聘核查和执法。',
        en: 'Considers the proposed amount insufficient and seeks a higher fee with stronger domestic recruitment checks and enforcement.',
      },
      postedDate: '2026-08-25T04:00:00Z',
      textSha256:
        '0c4e8c1e6116db1057ad4d69256e08e7d944109a4f266320723e2e0d0118d815',
    },
    {
      id: 'USCIS-2026-0298-6322',
      stance: 'support',
      themes: ['jobs', 'restriction'],
      summary: {
        zh: '表达赞同，并主张减少外国劳工、优先本土就业。',
        en: 'Expresses approval and favors fewer foreign workers and domestic hiring priority.',
      },
      postedDate: '2026-09-08T04:00:00Z',
      textSha256:
        'db664e7c48d230bda675e4f6d52a65490dba9b8b3581e7b4e781438739dccffa',
    },
    {
      id: 'USCIS-2026-0298-1716',
      stance: 'unclear',
      themes: ['jobs', 'fraud', 'restriction'],
      summary: {
        zh: '要求限制签证和追究雇主低薪用工，未明确评价本项费用。',
        en: 'Seeks visa limits and employer accountability for low wages without explicitly evaluating this fee.',
      },
      postedDate: '2026-08-26T04:00:00Z',
      textSha256:
        '9e7db436ddc2e42cd309d441f5a74fe266d257415a0c7205e5171081127c4a5b',
    },
    {
      id: 'USCIS-2026-0298-5147',
      stance: 'oppose',
      themes: [
        'burden',
        'talent',
        'students',
        'legal',
        'tailored',
        'fraud',
        'jobs',
      ],
      summary: {
        zh: '要求撤回或大幅降低收费，担忧人才、学生就业和小雇主受损，主张针对性执法。',
        en: 'Seeks withdrawal or a major reduction, citing talent, student transitions and small employers while favoring targeted enforcement.',
      },
      postedDate: '2026-08-31T04:00:00Z',
      textSha256:
        '71cabd626c2b6d0ae80549ea7cfd2e01ceef8e737f830b3217c108060ce96a59',
      sourceNote: {
        zh: '官方附件下载返回 403；保留该随机样本，仅按可读正文分类，正文不足则列为无法判断。',
        en: 'Official attachment downloads returned 403. The sampled record is retained and classified only from readable body text; insufficient text is unclassifiable.',
      },
    },
    {
      id: 'USCIS-2026-0298-2002',
      stance: 'oppose',
      themes: [],
      summary: {
        zh: '正文明确反对六位数附加费，详细理由仅在不可访问附件中。',
        en: 'The body explicitly opposes the six-figure surcharge; detailed reasoning is in an inaccessible attachment.',
      },
      postedDate: '2026-08-26T04:00:00Z',
      textSha256:
        'f23b94b2495bbf2ec7aa6fd8e05fd8a4929cd01b3d8caf49daabc598f087a048',
      sourceNote: {
        zh: '官方附件下载返回 403；保留该随机样本，仅按可读正文分类，正文不足则列为无法判断。',
        en: 'Official attachment downloads returned 403. The sampled record is retained and classified only from readable body text; insufficient text is unclassifiable.',
      },
    },
    {
      id: 'USCIS-2026-0298-0857',
      stance: 'unclear',
      themes: ['fraud', 'jobs'],
      summary: {
        zh: '指称学历造假和签证滥用排挤本土技术人才，未明确表态本项费用。',
        en: 'Alleges credential fraud and visa abuse displace domestic tech workers without stating a fee position.',
      },
      postedDate: '2026-08-26T04:00:00Z',
      textSha256:
        '45f6bf56c771c2fbc30f9991b0ca9e188d91059bb069e84f0c0bc8b13ea79376',
    },
    {
      id: 'USCIS-2026-0298-4589',
      stance: 'support',
      themes: ['jobs', 'fraud'],
      summary: {
        zh: '支持高额费用，认为可减少低薪替代并检验真实技能需求。',
        en: 'Supports the fee as a check on lower-cost substitution and a test of genuine skill needs.',
      },
      postedDate: '2026-08-31T04:00:00Z',
      textSha256:
        'e5051dd6405e30c4714e535568f2bece6a9a6861addb825c36ca9258587f2f06',
    },
    {
      id: 'USCIS-2026-0298-7263',
      stance: 'support',
      themes: ['jobs', 'fraud', 'students'],
      summary: {
        zh: '支持收费，质疑部分招聘的技能缺口理由，并关注技术岗位能力。',
        en: 'Supports the fee, questioning claimed skill shortages and competence in technical hiring.',
      },
      postedDate: '2026-09-10T04:00:00Z',
      textSha256:
        'dc7be0e02e422a59346fe115eb5dbb7605c2fa38970e9ac8573e27c1943073d6',
    },
    {
      id: 'USCIS-2026-0298-3168',
      stance: 'oppose',
      themes: ['burden', 'talent', 'legal', 'tailored', 'fraud', 'jobs'],
      summary: {
        zh: '要求撤回，担忧小企业和公共服务岗位受阻、税收及人才流失，主张成本收费与定向豁免。',
        en: 'Seeks withdrawal over small-employer barriers and talent and tax losses, favoring cost-based fees and targeted exemptions.',
      },
      postedDate: '2026-08-27T04:00:00Z',
      textSha256:
        '8651da5d730458f34ed092a31f5893f6bddf93ec364a5e9254cc9690e1cd5de3',
    },
    {
      id: 'USCIS-2026-0298-8260',
      stance: 'support',
      themes: ['jobs', 'restriction', 'fraud'],
      summary: {
        zh: '支持定稿，并要求费用覆盖 L-1 等替代路径及加强招聘核查。',
        en: 'Supports finalization and broader coverage of alternatives such as L-1, with stronger recruitment checks.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        'f60b8527d06db1a172df275c66f8966148755b99666bff9837807f10f93fe217',
    },
    {
      id: 'USCIS-2026-0298-6544',
      stance: 'oppose',
      themes: ['burden', 'talent', 'jobs'],
      summary: {
        zh: '要求重新考虑收费，担忧金融机构将专业团队和相关就业迁往海外。',
        en: 'Urges reconsideration, warning that financial firms may move specialized teams and related jobs abroad.',
      },
      postedDate: '2026-09-08T04:00:00Z',
      textSha256:
        '674541fae7a767cd26e8688efea505334a1ff7757e31d013989f5aa5153b0f50',
    },
    {
      id: 'USCIS-2026-0298-3877',
      stance: 'oppose',
      themes: ['burden', 'talent', 'legal', 'jobs'],
      summary: {
        zh: '反对高额收费与跨部门资金使用，认为会促使岗位外迁，并要求更多评论时间。',
        en: 'Rejects the large fee and interagency funding, warning of offshoring and seeking more comment time.',
      },
      postedDate: '2026-08-28T04:00:00Z',
      textSha256:
        'e8e972ff76cf1dfa2f0d914bfaa5aa652249f0c4b46e0ff85bb3c194e611d6b4',
    },
    {
      id: 'USCIS-2026-0298-2950',
      stance: 'oppose',
      themes: ['burden', 'talent'],
      summary: {
        zh: '反对收费，认为会排斥小雇主和非营利机构并损害人才留存。',
        en: 'Opposes the fee as a barrier to smaller and nonprofit employers and talent retention.',
      },
      postedDate: '2026-08-27T04:00:00Z',
      textSha256:
        '5d8da2e2d933cb5f6dcb561ad42fcecfb506b76d29f7096c745c79e46d0cad4d',
    },
    {
      id: 'USCIS-2026-0298-2678',
      stance: 'oppose',
      themes: ['legal', 'burden', 'students', 'talent'],
      summary: {
        zh: '反对跨部门收费与六位数门槛，担忧毕业生就业，并质疑审查和评论时间。',
        en: 'Opposes interagency funding and the six-figure barrier, citing graduate hiring and insufficient review and comment time.',
      },
      postedDate: '2026-08-27T04:00:00Z',
      textSha256:
        '30bf289d77b8de20e57ab604395e249af13aa9a075704d9744d2ca58793aaa35',
    },
    {
      id: 'USCIS-2026-0298-7387',
      stance: 'unclear',
      themes: ['jobs'],
      summary: {
        zh: '要求优先雇用美国人，未明确评价本项费用。',
        en: 'Calls for hiring Americans first without explicitly evaluating this fee.',
      },
      postedDate: '2026-09-10T04:00:00Z',
      textSha256:
        'e57e7733c420de5b287da00e02874ff2421a4a417e9c99eafca7b55bd05cc4d9',
    },
    {
      id: 'USCIS-2026-0298-5609',
      stance: 'support',
      themes: [],
      summary: {
        zh: '明确表示强烈支持，未提供进一步理由。',
        en: 'Explicitly expresses strong support without further reasoning.',
      },
      postedDate: '2026-09-01T04:00:00Z',
      textSha256:
        'b7ec4309047fcaef3b079e257416b4e93ead5aa9b3a55b60eb72a3a9f2cbceb1',
    },
    {
      id: 'USCIS-2026-0298-1420',
      stance: 'unclear',
      themes: ['restriction'],
      summary: {
        zh: '要求停止发放签证，未直接评价本项费用。',
        en: 'Calls for ending visas without directly evaluating this fee.',
      },
      postedDate: '2026-08-26T04:00:00Z',
      textSha256:
        '30c352590ce7fa5a2d551e68d6d7627360a235510e512452b55cc759306a122c',
    },
    {
      id: 'USCIS-2026-0298-8209',
      stance: 'oppose',
      themes: ['talent', 'burden'],
      summary: {
        zh: '要求拒绝提案，认为高费用会妨碍吸引和留住劳动力。',
        en: 'Seeks rejection, arguing that high fees impede attracting and retaining workers.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        'c1643874e7569a6804e890cc1c412fba61f6d20763c8fb62a5877d707f7cafaa',
    },
    {
      id: 'USCIS-2026-0298-2929',
      stance: 'unclear',
      themes: [],
      summary: {
        zh: '仅提交附件，未取得可读正文，无法可靠判断立场。',
        en: 'Provides only an inaccessible attachment, preventing a reliable stance assessment.',
      },
      postedDate: '2026-08-27T04:00:00Z',
      textSha256:
        'f57a02c717ada2ce922714836984bad201d137ce4ccc76a60803ff168ce5592e',
      sourceNote: {
        zh: '官方附件下载返回 403；保留该随机样本，仅按可读正文分类，正文不足则列为无法判断。',
        en: 'Official attachment downloads returned 403. The sampled record is retained and classified only from readable body text; insufficient text is unclassifiable.',
      },
    },
    {
      id: 'USCIS-2026-0298-2391',
      stance: 'oppose',
      themes: ['students', 'talent', 'burden', 'tailored', 'fraud', 'jobs'],
      summary: {
        zh: '要求撤回或大幅降费，保护在美培养的人才和小企业，并以工资及反欺诈执法替代。',
        en: 'Seeks withdrawal or a large reduction to protect U.S.-trained talent and small firms, favoring wage and fraud enforcement.',
      },
      postedDate: '2026-08-26T04:00:00Z',
      textSha256:
        '99707a5b46042fc985e6acdbb68bf14aa367c34fe281eb86e4c277ab1a9bac10',
    },
    {
      id: 'USCIS-2026-0298-3021',
      stance: 'oppose',
      themes: [
        'burden',
        'talent',
        'students',
        'legal',
        'tailored',
        'fraud',
        'jobs',
      ],
      summary: {
        zh: '反对收费造成企业准入不平等和学生人才流失，主张合理成本收费及合规执法。',
        en: 'Opposes unequal employer access and student talent losses, favoring proportionate cost-based fees and compliance enforcement.',
      },
      postedDate: '2026-08-27T04:00:00Z',
      textSha256:
        '511722c6e190fc09fa7c797a1df2fefcb0678e578f3b689809bae20b8c10b740',
    },
    {
      id: 'USCIS-2026-0298-2175',
      stance: 'oppose',
      themes: ['legal'],
      summary: {
        zh: '要求撤回，质疑向移民法庭分配收入的权限、预算重复和公开资料不足。',
        en: 'Seeks withdrawal over authority for immigration-court transfers, duplicate funding and inadequate disclosure.',
      },
      postedDate: '2026-08-26T04:00:00Z',
      textSha256:
        'dea242e97f24224b0c279b01ce5cc3e176e9da1687c2f384716c679808f713b5',
    },
    {
      id: 'USCIS-2026-0298-1898',
      stance: 'mixed',
      themes: ['restriction'],
      summary: {
        zh: '主张改收 100 万美元，以更高价格检验特殊人才需求。',
        en: 'Proposes a $1 million fee as a stronger test of exceptional talent needs.',
      },
      postedDate: '2026-08-26T04:00:00Z',
      textSha256:
        'e4a09bed42998f7d05489379e0edd5a7b7da796e350998f9ce29628cbce01877',
    },
    {
      id: 'USCIS-2026-0298-7643',
      stance: 'oppose',
      themes: ['burden', 'talent', 'legal', 'jobs'],
      summary: {
        zh: '要求拒绝提案，担忧小雇主、人才供给和经济活动受损，要求费用对应行政成本。',
        en: 'Seeks rejection over small-employer, talent and economic harms, arguing fees should match administrative costs.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '7316870c996521cab3923d22bb33c26a258c061b409e91ef60e7a11889573ffd',
    },
    {
      id: 'USCIS-2026-0298-5887',
      stance: 'oppose',
      themes: ['burden'],
      summary: {
        zh: '认为 10.3 万美元收费不可接受，要求不予通过。',
        en: 'Rejects the proposed amount as unacceptable and asks that it not proceed.',
      },
      postedDate: '2026-09-02T04:00:00Z',
      textSha256:
        'b860fb0b97de688c50661f7009d674e9db80dfd6ba14aa82d3d2c3c5bc659cdb',
    },
    {
      id: 'USCIS-2026-0298-5481',
      stance: 'unclear',
      themes: ['jobs', 'fraud', 'restriction', 'legal'],
      summary: {
        zh: '要求取消签证并提高汇款税，指称就业和安全问题，但未明确评价费用。',
        en: 'Seeks visa abolition and higher remittance taxes, alleging employment and security harms without a fee position.',
      },
      postedDate: '2026-09-01T04:00:00Z',
      textSha256:
        '1217d2b17aceb87376123b7d26e796f4e5e60b1f5d714547f7b440555233f957',
    },
    {
      id: 'USCIS-2026-0298-7821',
      stance: 'oppose',
      themes: ['burden', 'talent', 'students', 'legal'],
      summary: {
        zh: '反对提案，担忧在美培养的 STEM 人才和技术岗位外流，并质疑收费权限。',
        en: 'Opposes the proposal over losses of U.S.-trained STEM talent and technical jobs, questioning fee authority.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '834ec1b0a9014a4eb17eaeda622c5d7860734e4c16dfaec4e9bd74cf42e6c5a3',
    },
    {
      id: 'USCIS-2026-0298-8115',
      stance: 'mixed',
      themes: ['restriction', 'jobs'],
      summary: {
        zh: '要求将费用改为 25 万美元以优先本土招聘。',
        en: 'Proposes a $250,000 fee to prioritize domestic hiring.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '5890b82a8c6f46ca9be2ecfeafd17444df4dfcd847f4798b2d15599eabc961fb',
    },
    {
      id: 'USCIS-2026-0298-7785',
      stance: 'unclear',
      themes: ['legal'],
      summary: {
        zh: '要求说明更正数据对收入测算的影响并延长评论机会，未明确支持或反对费用。',
        en: 'Seeks clarity on corrected data and revenue estimates and additional comment time, without endorsing or opposing the fee.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        'aac87f3ffaaa14c39412287418c5920e348587be29f0d5a60f1b288bcf4c9d43',
    },
    {
      id: 'USCIS-2026-0298-7509',
      stance: 'support',
      themes: ['jobs'],
      summary: {
        zh: '支持拟议费用，认为可减少外国劳工替代本土员工。',
        en: 'Supports the proposed fee as a response to displacement of domestic workers.',
      },
      postedDate: '2026-09-10T04:00:00Z',
      textSha256:
        '9526bb5fd4d008bdc30e110f0f132dd84236df6d327f7ddf8830a0674f7e18c7',
    },
    {
      id: 'USCIS-2026-0298-5060',
      stance: 'oppose',
      themes: [
        'burden',
        'legal',
        'talent',
        'students',
        'tailored',
        'fraud',
        'jobs',
      ],
      summary: {
        zh: '要求撤回统一高额收费，质疑收入假设与跨部门分摊，主张分级收费和针对性监管。',
        en: 'Seeks withdrawal, questioning revenue assumptions and interagency allocation while favoring graduated fees and targeted enforcement.',
      },
      postedDate: '2026-08-31T04:00:00Z',
      textSha256:
        '4b55ec7dbca6f0d2f59d4dfbf4691629f487c86480d97994f7eb9ba44991d945',
    },
    {
      id: 'USCIS-2026-0298-3489',
      stance: 'oppose',
      themes: ['burden', 'talent', 'students', 'legal'],
      summary: {
        zh: '反对收费，担忧初创企业外迁和毕业生流失，并质疑成本回收权限。',
        en: 'Opposes the fee over startup offshoring and graduate losses, questioning cost-recovery authority.',
      },
      postedDate: '2026-08-27T04:00:00Z',
      textSha256:
        '61c50e8a1e3ccf4acc4ac5e2e13aa90e07992a2fe6690b297e7f65cd74bb0aeb',
    },
    {
      id: 'USCIS-2026-0298-6848',
      stance: 'oppose',
      themes: ['burden', 'fraud', 'tailored'],
      summary: {
        zh: '认为收费不合理，主张按工作类型和工资条件治理滥用。',
        en: 'Rejects the fee as unreasonable and favors job-type and wage conditions to address abuse.',
      },
      postedDate: '2026-09-09T04:00:00Z',
      textSha256:
        '1dbd132a41f8438d69acb569cc2972be1acc95df9421f81d03c56db2a1a459ac',
    },
    {
      id: 'USCIS-2026-0298-2774',
      stance: 'oppose',
      themes: ['talent', 'students', 'legal', 'burden'],
      summary: {
        zh: '要求撤回，担忧 AI 与网络安全人才外流，并质疑广泛跨部门收费。',
        en: 'Seeks withdrawal over AI and cybersecurity talent losses and broad interagency cost allocation.',
      },
      postedDate: '2026-08-27T04:00:00Z',
      textSha256:
        '95d8a3926ebb1b835840cbb81278c188cf4d20187cc8b9cc4252f371aac8f4af',
    },
    {
      id: 'USCIS-2026-0298-0354',
      stance: 'mixed',
      themes: ['restriction', 'jobs', 'legal'],
      summary: {
        zh: '主张至少收取 35 万美元、按通胀调整并扩至所有担保岗位，且不得税前列支。',
        en: 'Proposes at least $350,000, inflation indexing and coverage of all sponsored jobs, without business-expense deductions.',
      },
      postedDate: '2026-08-25T04:00:00Z',
      textSha256:
        '8653c8d2877769df20bae139e86e8ca88b04958091301fbb5b4cfd6bc017221c',
    },
    {
      id: 'USCIS-2026-0298-5654',
      stance: 'oppose',
      themes: ['legal', 'talent', 'burden'],
      summary: {
        zh: '要求完整撤回，认为收费越权、收入假设矛盾并将研究岗位推向海外。',
        en: 'Seeks full withdrawal, alleging excessive authority, inconsistent revenue assumptions and research offshoring.',
      },
      postedDate: '2026-09-02T04:00:00Z',
      textSha256:
        '0424ae0cbabfd3ef2d59da614d30a3f797ee9f319fb12b1216af72a1ff5eb5f5',
    },
    {
      id: 'USCIS-2026-0298-4915',
      stance: 'oppose',
      themes: ['talent', 'legal', 'jobs'],
      summary: {
        zh: '反对提案，指出预期成本会在提交申请前就促使企业转向海外招聘。',
        en: 'Opposes the proposal, arguing expected costs shift hiring abroad before petitions appear in the data.',
      },
      postedDate: '2026-08-31T04:00:00Z',
      textSha256:
        '89e0efc10ef0a0bf1a4feeb60f6beea617bbc85debe1682856eb40ea5a566a6e',
    },
    {
      id: 'USCIS-2026-0298-0560',
      stance: 'support',
      themes: ['jobs', 'fraud', 'restriction'],
      summary: {
        zh: '支持费用，并要求本土招聘证明、严格审计和限制近期裁员企业申请。',
        en: 'Supports the fee and seeks domestic recruitment proof, audits and restrictions on employers with recent layoffs.',
      },
      postedDate: '2026-08-25T04:00:00Z',
      textSha256:
        'd5c95a1780becaf53d18efe342c14202279b059e163be41ad548dc870b18c2d7',
    },
    {
      id: 'USCIS-2026-0298-2964',
      stance: 'oppose',
      themes: ['burden', 'talent', 'students', 'legal', 'tailored', 'jobs'],
      summary: {
        zh: '要求撤回，担忧岗位、人才和税基外流，提出对离岸服务征税作为替代。',
        en: 'Seeks withdrawal over offshoring, talent and tax-base losses, proposing a tax on offshore services instead.',
      },
      postedDate: '2026-08-27T04:00:00Z',
      textSha256:
        '1fdc6e6f70c09a1775f02f715c56fee26515a9982c03453a65380504306efc74',
    },
    {
      id: 'USCIS-2026-0298-0107',
      stance: 'unclear',
      themes: ['jobs', 'fraud', 'restriction'],
      summary: {
        zh: '要求优先本土招聘、加强核查并考虑取消工作与学生签证，未评价本项费用。',
        en: 'Seeks domestic hiring priority, audits and possible visa abolition without evaluating this fee.',
      },
      postedDate: '2026-08-25T04:00:00Z',
      textSha256:
        '95de31e667637afe1d2721709d42ca2fb20e6fdd08de05c177308cefe7ab1b8a',
    },
    {
      id: 'USCIS-2026-0298-2284',
      stance: 'mixed',
      themes: ['restriction'],
      summary: {
        zh: '要求停止签证或将每份收费改为 50 万美元。',
        en: 'Proposes halting visas or charging $500,000 each.',
      },
      postedDate: '2026-08-26T04:00:00Z',
      textSha256:
        'abc13e124baad6942b0aa2ce54aee4e4760ffc5661b2ef688312771aee068602',
    },
    {
      id: 'USCIS-2026-0298-2517',
      stance: 'oppose',
      themes: ['legal'],
      summary: {
        zh: '反对收费，质疑把移民法庭及其他签证项目成本转嫁给 H-1B 雇主的权限。',
        en: 'Opposes the fee, questioning authority to charge H-1B employers for courts and other visa programs.',
      },
      postedDate: '2026-08-27T04:00:00Z',
      textSha256:
        'e7eadbab9a787b6200a7b330050f426e6691430394ff3e91bad366fca86d0743',
    },
    {
      id: 'USCIS-2026-0298-5625',
      stance: 'unclear',
      themes: ['jobs', 'fraud', 'restriction'],
      summary: {
        zh: '主张更严监管和更高合规费用，未明确认可或反对拟议金额。',
        en: 'Seeks stricter oversight and higher compliance fees without clearly endorsing or rejecting the proposed amount.',
      },
      postedDate: '2026-09-01T04:00:00Z',
      textSha256:
        '8bb1810c472c9682ea7595d308b9a1f16960e0834ca134ce6c0577a760fb7272',
    },
    {
      id: 'USCIS-2026-0298-5653',
      stance: 'support',
      themes: ['jobs', 'legal'],
      summary: {
        zh: '支持实施，认为收费可降低低成本替代并让雇主承担跨政府管理成本。',
        en: 'Supports adoption as a deterrent to lower-cost substitution and a way for employers to fund government-wide administration.',
      },
      postedDate: '2026-09-02T04:00:00Z',
      textSha256:
        '4b56b8104d3ef606a83c32c62e4aa039df95421b43dfbcd13926535938da9ea0',
    },
    {
      id: 'USCIS-2026-0298-7356',
      stance: 'support',
      themes: ['restriction'],
      summary: {
        zh: '认为提案是良好开端，并要求进一步提高费用。',
        en: 'Endorses the proposal as a good start and seeks a higher fee.',
      },
      postedDate: '2026-09-10T04:00:00Z',
      textSha256:
        '1aef466f97b8ff92244c6a420fbc388a3eeddd5bdf0018fd7882792643675cb0',
    },
  ],
  commentPhase: 'open',
  commentDeadline: '2026-09-24',
  sampleSize: 100,
  expandedAt: '2026-09-12T12:41:56.209Z',
} satisfies CommentSample;
