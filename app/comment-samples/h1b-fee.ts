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
  ],
  commentPhase: 'open',
  commentDeadline: '2026-09-24',
} satisfies CommentSample;
