import type { CommentSample } from '../public-comment-types';

export default {
  policyId: 'h1b-fee',
  documentId: 'USCIS-2026-0298-0001',
  checkedOn: '2026-09-12',
  publishedCount: 8342,
  status: 'reviewed',
  sampledAt: '2026-09-12T13:08:54.410Z',
  seed: '654429093d674e1f905a2d04e579df3ec1de10f41f387314af9632f785e19a2d',
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
      id: 'USCIS-2026-0298-4278',
      stance: 'unclear',
      themes: ['jobs', 'fraud'],
      summary: {
        zh: '要求优先雇用美国人并加强监管，未表明收费立场。',
        en: 'Calls for American hiring priority and stronger oversight without taking a fee position.',
      },
      postedDate: '2026-08-31T04:00:00Z',
      textSha256:
        'beed5b56a3a350166542cc01eeb60ad7e8d4794f271b380b32001fa04ff41d09',
    },
    {
      id: 'USCIS-2026-0298-1494',
      stance: 'oppose',
      themes: ['legal', 'burden'],
      summary: {
        zh: '反对用高额申请费补贴整个移民体系。',
        en: 'Opposes using a large petition fee to subsidize the broader immigration system.',
      },
      postedDate: '2026-08-26T04:00:00Z',
      textSha256:
        'ed928250e7de2d994437c27d6d2b37d0023b3f9b7fc4e46d44b398f4e6317e78',
    },
    {
      id: 'USCIS-2026-0298-6784',
      stance: 'oppose',
      themes: ['burden', 'talent', 'fraud'],
      summary: {
        zh: '认为叠加费用将阻断合规招聘并推动外包。',
        en: 'Argues stacked fees would stop compliant hiring and encourage offshoring.',
      },
      postedDate: '2026-09-08T04:00:00Z',
      textSha256:
        '6d2eff69e63efc4c86cdae1ebd20dc13d9fb943de17694b73e9a50d6e92849b4',
    },
    {
      id: 'USCIS-2026-0298-8276',
      stance: 'support',
      themes: ['jobs'],
      summary: {
        zh: '支持收费，认为可筛选人才并保护本土岗位。',
        en: 'Supports the fee as a talent filter and protection for domestic jobs.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '84d59550b1551b28826b5c350542e442b9efb51c86fe7b29ad812474aa10286a',
    },
    {
      id: 'USCIS-2026-0298-7224',
      stance: 'oppose',
      themes: ['burden', 'talent', 'students', 'legal'],
      summary: {
        zh: '警告收费将损害小企业、留学和美国经济。',
        en: 'Warns the fee would harm small firms, international study and the U.S. economy.',
      },
      postedDate: '2026-09-10T04:00:00Z',
      textSha256:
        'b5ed1c5813e855e0b466af6e778e0243c1696ece2f65f066ff8f29817f1d9264',
    },
    {
      id: 'USCIS-2026-0298-3934',
      stance: 'oppose',
      themes: ['legal', 'burden', 'talent', 'students', 'tailored'],
      summary: {
        zh: '要求撤回，质疑收费权限、收入模型及小企业影响。',
        en: 'Seeks withdrawal over legal authority, revenue assumptions and small-business impacts.',
      },
      postedDate: '2026-08-28T04:00:00Z',
      textSha256:
        '33e9e24c9b3b9e5d66625db43e57677cb18ca1400e73ba7765a6d2d15c45a095',
    },
    {
      id: 'USCIS-2026-0298-7957',
      stance: 'support',
      themes: ['jobs'],
      summary: {
        zh: '支持以收费降低企业替代美国工人的动机。',
        en: 'Supports changing hiring incentives to reduce replacement of American workers.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '61c40b5c3f1ada9e6bb5fee3d8dabb5dd535d9f022d4f736e74c47936f4ce1b8',
    },
    {
      id: 'USCIS-2026-0298-1393',
      stance: 'oppose',
      themes: ['legal', 'burden'],
      summary: {
        zh: '反对不成比例收费，质疑法律基础及小企业负担。',
        en: 'Opposes the disproportionate fee over legal authority and small-employer burdens.',
      },
      postedDate: '2026-08-26T04:00:00Z',
      textSha256:
        'de5bd4edce9d602b40605db744336721e243ac458fae04c936a8ff54d833b365',
    },
    {
      id: 'USCIS-2026-0298-5632',
      stance: 'oppose',
      themes: ['talent'],
      summary: {
        zh: '认为高额费用将人才推向其他国家。',
        en: 'Argues the high fee sends valuable talent to other countries.',
      },
      postedDate: '2026-09-02T04:00:00Z',
      textSha256:
        '5b5e3a0ab690fffc9d6de6b79dfd7d5183e78364631923454cec7db2dfa50644',
    },
    {
      id: 'USCIS-2026-0298-7221',
      stance: 'oppose',
      themes: ['burden', 'legal', 'students', 'talent', 'fraud', 'tailored'],
      summary: {
        zh: '要求撤回或降低收费，改用针对性反欺诈监管。',
        en: 'Seeks withdrawal or reduction and targeted enforcement against fraud.',
      },
      postedDate: '2026-09-10T04:00:00Z',
      textSha256:
        '88952d45a06dd52532489d547266f17ff3d486b6238c0d4dc41c554665ba4bbb',
    },
    {
      id: 'USCIS-2026-0298-3552',
      stance: 'unclear',
      themes: ['jobs', 'fraud'],
      summary: {
        zh: '批评外籍用工压低工资和招聘歧视，未表明收费立场。',
        en: 'Criticizes wage suppression and discriminatory hiring without a fee position.',
      },
      postedDate: '2026-08-27T04:00:00Z',
      textSha256:
        '6f47f36c76c53afb7326cfa137d210ca4851961b12baab6e4a1cf7c631f1e9d6',
    },
    {
      id: 'USCIS-2026-0298-6797',
      stance: 'unclear',
      themes: ['fraud', 'restriction'],
      summary: {
        zh: '要求暂停就业签证并全面核查，未表明收费立场。',
        en: 'Demands employment-visa pauses and audits without a fee position.',
      },
      postedDate: '2026-09-09T04:00:00Z',
      textSha256:
        'da359ba45a92d8f2652d086cbfbff1efe4faedf82372d8c2d242a7f5ba0830fa',
    },
    {
      id: 'USCIS-2026-0298-3027',
      stance: 'oppose',
      themes: ['legal', 'talent'],
      summary: {
        zh: '反对增收费用，担心加剧医疗人员短缺。',
        en: 'Opposes additional charges and warns of medical staffing shortages.',
      },
      postedDate: '2026-08-27T04:00:00Z',
      textSha256:
        '52f893fa07fb5ded7274dc87ce276a0a1337cd7468196ae816610933fde79f22',
    },
    {
      id: 'USCIS-2026-0298-3205',
      stance: 'support',
      themes: ['restriction'],
      summary: {
        zh: '要求实施收费并覆盖所有 H-1B。',
        en: 'Calls for implementation and coverage of all H-1Bs.',
      },
      postedDate: '2026-08-27T04:00:00Z',
      textSha256:
        'ef1e8cf71c66fbe6e08c823385297bf9dc51148ea36daae127f2370e833a144e',
    },
    {
      id: 'USCIS-2026-0298-4193',
      stance: 'support',
      themes: ['restriction', 'fraud'],
      summary: {
        zh: '主张收费也适用于延期续签并严查咨询公司。',
        en: 'Calls for applying the fee to renewals and cracking down on consultancies.',
      },
      postedDate: '2026-08-28T04:00:00Z',
      textSha256:
        'f255446ec41931a1948bb18354e11fd24a0698dedd138eb5fcc60cf143be6ea9',
    },
    {
      id: 'USCIS-2026-0298-3100',
      stance: 'oppose',
      themes: ['legal', 'burden', 'talent', 'students', 'tailored'],
      summary: {
        zh: '要求撤回，质疑收费权限并警告企业和毕业生受损。',
        en: 'Seeks withdrawal over authority and harms to businesses and graduates.',
      },
      postedDate: '2026-08-27T04:00:00Z',
      textSha256:
        'bf28c91da6313cff22810d59d79512a3a45acf315f5c55636c8b4c23b94cf3e3',
    },
    {
      id: 'USCIS-2026-0298-4481',
      stance: 'oppose',
      themes: ['talent', 'burden', 'jobs'],
      summary: {
        zh: '警告高费用会推动岗位外流而非保护就业。',
        en: 'Warns the fee would offshore jobs instead of protecting employment.',
      },
      postedDate: '2026-08-31T04:00:00Z',
      textSha256:
        '33eb8fb58da6335dd528a0ddeb1d42f1b163c139a310fbd6f3239631e921596c',
    },
    {
      id: 'USCIS-2026-0298-3829',
      stance: 'oppose',
      themes: ['talent'],
      summary: {
        zh: '要求取消收费以吸引高技能移民。',
        en: 'Calls for eliminating the fee to attract skilled immigrants.',
      },
      postedDate: '2026-08-28T04:00:00Z',
      textSha256:
        'b09550929dcccdd1f3627cf32a3bad4ca647bd086a49185714fb0ea508911e89',
    },
    {
      id: 'USCIS-2026-0298-6687',
      stance: 'oppose',
      themes: ['talent', 'jobs', 'burden'],
      summary: {
        zh: '警告收费将人才、投资及美国岗位推向海外。',
        en: 'Warns the fee would move talent, investment and American jobs abroad.',
      },
      postedDate: '2026-09-08T04:00:00Z',
      textSha256:
        'a013c851bc59854d4c68aaf428d6602f9676577df3ba21f25a0a41ec8b87c58a',
    },
    {
      id: 'USCIS-2026-0298-0697',
      stance: 'support',
      themes: ['jobs', 'restriction'],
      summary: {
        zh: '认为收费是良好开端，同时要求取消 H-1B。',
        en: 'Calls the fee a good start and also seeks abolition of H-1B.',
      },
      postedDate: '2026-08-26T04:00:00Z',
      textSha256:
        '2ae7e262a5a9caeca2a3534267795ab6133607b878ce02736db2922a3f3f1e89',
    },
    {
      id: 'USCIS-2026-0298-2876',
      stance: 'oppose',
      themes: ['burden', 'talent', 'fraud', 'jobs'],
      summary: {
        zh: '反对涨费，认为将损害制造业投资及技术人才吸引力。',
        en: 'Opposes the increase over manufacturing investment and skilled-talent impacts.',
      },
      postedDate: '2026-08-27T04:00:00Z',
      textSha256:
        '4da6d83832ae1eda15917a5a305462816e883d7442fad63b752c0fe1f6f0f204',
    },
    {
      id: 'USCIS-2026-0298-6110',
      stance: 'unclear',
      themes: ['fraud'],
      summary: {
        zh: '指控用工及工资欺诈，未表明收费立场。',
        en: 'Alleges employment and payroll fraud without a fee position.',
      },
      postedDate: '2026-09-03T04:00:00Z',
      textSha256:
        'caf144117c7a0f66c4fb934a0b20c3d4532404f2e603e4058fe3de67475a4085',
    },
    {
      id: 'USCIS-2026-0298-2551',
      stance: 'oppose',
      themes: ['burden', 'talent'],
      summary: {
        zh: '认为费用过高，将阻碍小企业招聘人才。',
        en: 'Finds the fee excessive and harmful to small-firm talent recruitment.',
      },
      postedDate: '2026-08-27T04:00:00Z',
      textSha256:
        'c14164cb7162425661ebbf6e28808c408340fc0bb4be2418e55c0e75ebc34382',
    },
    {
      id: 'USCIS-2026-0298-0890',
      stance: 'support',
      themes: ['jobs', 'fraud', 'restriction', 'legal'],
      summary: {
        zh: '认可收费作为开端，并要求更多劳工限制及社区补助。',
        en: 'Endorses the fee as a start and seeks further labor restrictions and community grants.',
      },
      postedDate: '2026-08-26T04:00:00Z',
      textSha256:
        'a5ae7c71198189a3a332c70f567524b1c0177bf9b282ea946794e888c6c82a31',
    },
    {
      id: 'USCIS-2026-0298-0836',
      stance: 'mixed',
      themes: ['restriction', 'legal', 'jobs'],
      summary: {
        zh: '要求改收五十万至一百万美元以补偿社会成本。',
        en: 'Requests a replacement fee of $500,000–$1 million to cover social costs.',
      },
      postedDate: '2026-08-26T04:00:00Z',
      textSha256:
        'e514a53f0b0329aa9c0502b0a901d0e7a1fbc0839d8fc91928c89214c120bfae',
    },
    {
      id: 'USCIS-2026-0298-4183',
      stance: 'oppose',
      themes: ['burden'],
      summary: {
        zh: '认为收费过高且惩罚需要招聘的企业。',
        en: 'Calls the charge excessive and punitive toward employers needing workers.',
      },
      postedDate: '2026-08-28T04:00:00Z',
      textSha256:
        '5857b3d6ab8a7970dd45ac0fa42bf01114c919820ab893f09579899cd4ea11bc',
    },
    {
      id: 'USCIS-2026-0298-4987',
      stance: 'oppose',
      themes: ['legal', 'burden', 'talent'],
      summary: {
        zh: '要求撤回或修改，质疑权限、收入预测及创新影响。',
        en: 'Seeks withdrawal or revision over authority, revenue forecasts and innovation harms.',
      },
      postedDate: '2026-08-31T04:00:00Z',
      textSha256:
        '3f5d4aaaa496e79d9d17043ca86979b6225ee13290f550c72987d8359f19b550',
    },
    {
      id: 'USCIS-2026-0298-5909',
      stance: 'support',
      themes: ['fraud'],
      summary: {
        zh: '支持政策，认为将减少签证欺诈。',
        en: 'Supports the policy as a way to reduce visa fraud.',
      },
      postedDate: '2026-09-03T04:00:00Z',
      textSha256:
        'a5cd1b9c05b4432060fd4325c6ba7dc26cd032f18458aca88e0be8de6422d827',
    },
    {
      id: 'USCIS-2026-0298-2277',
      stance: 'support',
      themes: ['jobs', 'legal'],
      summary: {
        zh: '支持保护本土就业并资助移民机构运作。',
        en: 'Supports protecting domestic jobs and funding immigration agencies.',
      },
      postedDate: '2026-08-26T04:00:00Z',
      textSha256:
        '5c5e0b312cd86e59a0abacedcc0321705926e30e16d0df6b9393bf21b6fb1bb4',
    },
    {
      id: 'USCIS-2026-0298-7905',
      stance: 'support',
      themes: ['jobs'],
      summary: {
        zh: '支持收费改变雇主偏好低成本外劳的动机。',
        en: 'Supports the fee to change incentives favoring cheaper foreign labor.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '61c40b5c3f1ada9e6bb5fee3d8dabb5dd535d9f022d4f736e74c47936f4ce1b8',
    },
    {
      id: 'USCIS-2026-0298-5133',
      stance: 'support',
      themes: ['jobs', 'fraud'],
      summary: {
        zh: '认为收费可纠正滥用并保护美国劳动者。',
        en: 'Sees the fee as correcting abuse and protecting American workers.',
      },
      postedDate: '2026-08-31T04:00:00Z',
      textSha256:
        '043a1513a0fa1fc343ac2e6faa82273c8fc3cfe8307242be710c1c48b97b3087',
    },
    {
      id: 'USCIS-2026-0298-2254',
      stance: 'support',
      themes: ['restriction'],
      summary: {
        zh: '明确支持政策，同时希望费用提高至一百万美元。',
        en: 'Explicitly supports the policy while wishing for a $1 million fee.',
      },
      postedDate: '2026-08-26T04:00:00Z',
      textSha256:
        'd5913dc73876ad10195b84381605abb83a224261b8458e86cb7d8fbf4ba312a1',
    },
    {
      id: 'USCIS-2026-0298-4963',
      stance: 'oppose',
      themes: ['burden', 'talent', 'students', 'tailored'],
      summary: {
        zh: '要求撤回并建议毕业生豁免和按企业规模收费。',
        en: 'Seeks withdrawal and proposes graduate exemptions and size-based fees.',
      },
      postedDate: '2026-08-31T04:00:00Z',
      textSha256:
        'e8cf09d9f55fa04b90ec0d88b944ae9adfc3d1358216e01bb056ca7a7e87cfb2',
    },
    {
      id: 'USCIS-2026-0298-6773',
      stance: 'support',
      themes: ['jobs', 'fraud', 'restriction'],
      summary: {
        zh: '认可收费并要求扩大到其他签证及加强限制。',
        en: 'Endorses the fee and seeks broader visa coverage and restrictions.',
      },
      postedDate: '2026-09-08T04:00:00Z',
      textSha256:
        '342b3dc396e981cb7f4d535a0c52671824d8df04008fc7863952a623e676c52c',
    },
    {
      id: 'USCIS-2026-0298-2817',
      stance: 'support',
      themes: ['jobs', 'fraud', 'restriction'],
      summary: {
        zh: '支持收费且要求提高，以保护美国求职者。',
        en: 'Supports the fee and increases to protect American jobseekers.',
      },
      postedDate: '2026-08-27T04:00:00Z',
      textSha256:
        '6244282d16894bd14e823fc7ece91b12520b08101a2480b5b4f40fd762e74fd8',
    },
    {
      id: 'USCIS-2026-0298-7407',
      stance: 'support',
      themes: ['jobs'],
      summary: {
        zh: '支持收费鼓励企业招聘本土人才。',
        en: 'Supports the fee to encourage domestic recruitment.',
      },
      postedDate: '2026-09-10T04:00:00Z',
      textSha256:
        '61c40b5c3f1ada9e6bb5fee3d8dabb5dd535d9f022d4f736e74c47936f4ce1b8',
    },
    {
      id: 'USCIS-2026-0298-7809',
      stance: 'unclear',
      themes: ['jobs', 'restriction'],
      summary: {
        zh: '要求停止 H-1B 并雇用美国人，未表明收费立场。',
        en: 'Calls for ending H-1B and hiring Americans without a fee position.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        'ee8c1d2d2aaaf89ddf5885b40bbd3362eaa9ced7188ee64a21dfb9d8bcb00aa2',
    },
    {
      id: 'USCIS-2026-0298-1410',
      stance: 'unclear',
      themes: [],
      summary: {
        zh: '无可供判断的评论正文。',
        en: 'No comment body is available to determine a position.',
      },
      postedDate: '2026-08-26T04:00:00Z',
      textSha256:
        'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
      sourceNote: {
        zh: '未取得评论正文且未列出附件，无法判断立场。',
        en: 'No comment body was available and no attachments were listed, so stance cannot be determined.',
      },
    },
    {
      id: 'USCIS-2026-0298-3001',
      stance: 'oppose',
      themes: ['talent', 'students', 'fraud', 'tailored'],
      summary: {
        zh: '警告涨费削弱全球人才优势，主张针对滥用执法。',
        en: 'Warns higher fees undermine global-talent advantages and favors enforcement against abuse.',
      },
      postedDate: '2026-08-27T04:00:00Z',
      textSha256:
        'b23bc27f5b533aa1b9cef55beaa2c7c6d71a5f7c2e29bc34ae863f32e82acf69',
    },
    {
      id: 'USCIS-2026-0298-6592',
      stance: 'oppose',
      themes: ['talent'],
      summary: {
        zh: '反对收费，强调医疗及科技业需要外籍专业人才。',
        en: 'Opposes the fee and stresses healthcare and technology staffing needs.',
      },
      postedDate: '2026-09-08T04:00:00Z',
      textSha256:
        '954a8cd33f630e397de0870592d4fbfc1f7b1b0eaf81de35d95e9d4d044e460e',
    },
    {
      id: 'USCIS-2026-0298-0747',
      stance: 'support',
      themes: ['jobs', 'restriction'],
      summary: {
        zh: '支持提案并要求更高费用以优先雇用美国人。',
        en: 'Supports the proposal and higher fees to prioritize American hiring.',
      },
      postedDate: '2026-08-26T04:00:00Z',
      textSha256:
        '2a54a33511bb51cf6be981a24dbffcf21ac84bf2275698fa21cf78e0f1a1a5e0',
    },
    {
      id: 'USCIS-2026-0298-4941',
      stance: 'oppose',
      themes: ['burden', 'talent', 'students', 'fraud', 'tailored', 'legal'],
      summary: {
        zh: '反对统一高费，主张定向执法及合理分级收费。',
        en: 'Opposes the flat high fee and favors targeted enforcement and proportionate fees.',
      },
      postedDate: '2026-08-31T04:00:00Z',
      textSha256:
        '9de408831c7565cce4a8c4301232d9e2470f5afcf702ebfdff4f26a6a4d7529b',
    },
    {
      id: 'USCIS-2026-0298-0415',
      stance: 'mixed',
      themes: ['restriction', 'jobs'],
      summary: {
        zh: '要求改为一百七十六万六千美元费用。',
        en: 'Requests a replacement fee of $1,766,000.',
      },
      postedDate: '2026-08-25T04:00:00Z',
      textSha256:
        '2353eb700592bf75808e99b4f6f713e75a88fc31a1c8ee759422465c377dfc1f',
    },
    {
      id: 'USCIS-2026-0298-2712',
      stance: 'oppose',
      themes: ['jobs'],
      summary: {
        zh: '批评政策针对议价能力弱的外籍劳动者。',
        en: 'Criticizes the policy for targeting vulnerable foreign workers.',
      },
      postedDate: '2026-08-27T04:00:00Z',
      textSha256:
        '7fa1c43bb5b7c2314527133b807c940e1d82c5687734d5a195baf4ff5c9aca99',
    },
    {
      id: 'USCIS-2026-0298-4561',
      stance: 'oppose',
      themes: ['talent', 'jobs', 'legal'],
      summary: {
        zh: '质疑就业替代假设并警告收费可能减少美国经济活动。',
        en: 'Challenges job-substitution assumptions and warns of reduced U.S. economic activity.',
      },
      postedDate: '2026-08-31T04:00:00Z',
      textSha256:
        'd3ba6688ef57993ce1d1e84e60d1084f6cd7001f6e3ac0bd016ff5f424bb786d',
    },
    {
      id: 'USCIS-2026-0298-6944',
      stance: 'support',
      themes: ['jobs', 'restriction'],
      summary: {
        zh: '支持收费，并要求取消相关工作许可及限制外包。',
        en: 'Supports the fee and seeks elimination of related work permissions and offshoring limits.',
      },
      postedDate: '2026-09-09T04:00:00Z',
      textSha256:
        '85175162b2111c6debfdad3d282de692bd7ecc5c6e308d7989881265bb7b9eab',
    },
    {
      id: 'USCIS-2026-0298-4829',
      stance: 'oppose',
      themes: ['legal', 'students', 'tailored', 'jobs', 'fraud', 'restriction'],
      summary: {
        zh: '要求撤回，质疑成本模型并提出毕业生豁免及替代收入。',
        en: 'Seeks withdrawal over cost assumptions and proposes graduate exemptions and alternative revenue.',
      },
      postedDate: '2026-08-31T04:00:00Z',
      textSha256:
        '972a2dee3e10de63af2f99daa8419cbe8d49621458a83e8f1db3ebf87d6e0216',
      sourceNote: {
        zh: '官方附件下载返回403；仅根据可读正文归类，正文不足的保留为无法判断。',
        en: 'Official attachment downloads returned HTTP403. Classification uses readable body text only; insufficient bodies remain unclassifiable.',
      },
    },
    {
      id: 'USCIS-2026-0298-3995',
      stance: 'mixed',
      themes: ['jobs', 'restriction', 'legal', 'tailored'],
      summary: {
        zh: '要求按工资及财政损失收取百万级分级费用。',
        en: 'Requests million-dollar tiered fees based on wage and fiscal losses.',
      },
      postedDate: '2026-08-28T04:00:00Z',
      textSha256:
        'ffb55ccf1bcd7c87abc1da86f928b80573a2ee020ae3e5a8c3f37d0f05987447',
    },
    {
      id: 'USCIS-2026-0298-4236',
      stance: 'oppose',
      themes: ['talent', 'jobs'],
      summary: {
        zh: '认为收费会推动工作转移海外并损害美国劳动力市场。',
        en: 'Argues the fee incentivizes offshoring and harms the American labor market.',
      },
      postedDate: '2026-08-31T04:00:00Z',
      textSha256:
        '13d4e720fff907511db5d112ade3f43323ff5c3dc0fce2e978abef840874455f',
    },
    {
      id: 'USCIS-2026-0298-6131',
      stance: 'support',
      themes: ['restriction'],
      summary: {
        zh: '支持额外收费覆盖新申请及续签。',
        en: 'Supports an additional fee for new and renewal petitions.',
      },
      postedDate: '2026-09-03T04:00:00Z',
      textSha256:
        '84a1694fa6ea7a395cdbf36fed4671329c36cb5e17c23ff4ca2496d9041283d7',
    },
    {
      id: 'USCIS-2026-0298-4891',
      stance: 'oppose',
      themes: ['legal', 'burden'],
      summary: {
        zh: '反对缺乏雇主退出和申请量实证依据的收费。',
        en: 'Opposes the fee for lacking evidence on employer exit and petition volumes.',
      },
      postedDate: '2026-08-31T04:00:00Z',
      textSha256:
        '9e75b97815ac22f4fcf27ef47c045d8c5e25287f5c616975d0d21db0791ff73b',
      sourceNote: {
        zh: '官方附件下载返回403；仅根据可读正文归类，正文不足的保留为无法判断。',
        en: 'Official attachment downloads returned HTTP403. Classification uses readable body text only; insufficient bodies remain unclassifiable.',
      },
    },
    {
      id: 'USCIS-2026-0298-5583',
      stance: 'unclear',
      themes: ['jobs', 'restriction'],
      summary: {
        zh: '要求关闭项目并声称被替代，未表明收费立场。',
        en: 'Seeks program closure and describes displacement without a fee position.',
      },
      postedDate: '2026-09-01T04:00:00Z',
      textSha256:
        '17cf07cff669a5ce8c37d118bcaa90595a122abd67d4b81a6e9755116e93b158',
    },
    {
      id: 'USCIS-2026-0298-3635',
      stance: 'oppose',
      themes: ['burden'],
      summary: {
        zh: '明确反对过高费用。',
        en: 'Explicitly opposes excessive fees.',
      },
      postedDate: '2026-08-28T04:00:00Z',
      textSha256:
        'b6be4460df2d426e5ea822f9c217f101c307b219ddac05a89e865ddd3926a39a',
    },
    {
      id: 'USCIS-2026-0298-2910',
      stance: 'oppose',
      themes: ['burden', 'legal', 'talent', 'tailored'],
      summary: {
        zh: '要求撤回不成比例收费，保护小企业并合理分摊成本。',
        en: 'Seeks withdrawal of disproportionate fees and fairer costs for small employers.',
      },
      postedDate: '2026-08-27T04:00:00Z',
      textSha256:
        'f85657de6633b6f5e742dabb19268bb46cb1545704592dfc39a59bdc666b0e1a',
    },
    {
      id: 'USCIS-2026-0298-1117',
      stance: 'support',
      themes: ['jobs'],
      summary: {
        zh: '支持涨费，强调美国工人的就业与工资。',
        en: 'Supports higher fees to protect American employment and wages.',
      },
      postedDate: '2026-08-26T04:00:00Z',
      textSha256:
        '15c5d6b16e051afac7d50842a4e1f80b16120f77cc0ee3168f44eb4a6a93429f',
    },
    {
      id: 'USCIS-2026-0298-3085',
      stance: 'oppose',
      themes: ['talent', 'students', 'legal', 'burden'],
      summary: {
        zh: '反对收费，警告岗位和美国培养的人才外流并质疑权限。',
        en: 'Opposes the fee over offshoring, loss of U.S.-trained talent and legal authority.',
      },
      postedDate: '2026-08-27T04:00:00Z',
      textSha256:
        'b351119c2a0fada926b7ff0dc54cd1fe7de41503fe55811e70803c5c1533e9a6',
    },
    {
      id: 'USCIS-2026-0298-6929',
      stance: 'oppose',
      themes: ['students', 'burden', 'tailored', 'fraud', 'restriction'],
      summary: {
        zh: '反对收费，主张按员工比例限制赞助以保护毕业生。',
        en: 'Opposes the fee and proposes workforce-based sponsorship limits to protect graduates.',
      },
      postedDate: '2026-09-09T04:00:00Z',
      textSha256:
        'e21ab65ec399d4e0f587379807d58f869b2e707308a8c85598d1f5ee92d58391',
    },
    {
      id: 'USCIS-2026-0298-4031',
      stance: 'oppose',
      themes: ['legal'],
      summary: {
        zh: '要求撤回，认为向 H-1B 雇主征收跨机构费用缺乏依据。',
        en: 'Seeks withdrawal, challenging interagency charges on H-1B employers.',
      },
      postedDate: '2026-08-28T04:00:00Z',
      textSha256:
        '14d9c2153ea01f75704b811804fac68ef0991ecff42be6233b1861008bdd1f9c',
      sourceNote: {
        zh: '官方附件下载返回403；仅根据可读正文归类，正文不足的保留为无法判断。',
        en: 'Official attachment downloads returned HTTP403. Classification uses readable body text only; insufficient bodies remain unclassifiable.',
      },
    },
    {
      id: 'USCIS-2026-0298-6142',
      stance: 'oppose',
      themes: ['legal', 'burden', 'talent', 'students', 'tailored'],
      summary: {
        zh: '要求全面撤回，指出成本权限、企业及毕业生损害。',
        en: 'Seeks full withdrawal over cost authority and harms to employers and graduates.',
      },
      postedDate: '2026-09-03T04:00:00Z',
      textSha256:
        '037a419468afab9f52f132aeabfc4fa791d1d68d75f0af8bb6ccae277d676315',
    },
    {
      id: 'USCIS-2026-0298-5983',
      stance: 'support',
      themes: ['jobs', 'fraud', 'restriction'],
      summary: {
        zh: '支持提案，同时主张最终取消 H-1B。',
        en: 'Supports the proposal while seeking eventual H-1B abolition.',
      },
      postedDate: '2026-09-03T04:00:00Z',
      textSha256:
        'aa59d27945531bb2b689267d721748bf506d96b89dab183203969f5c0eefc82f',
    },
    {
      id: 'USCIS-2026-0298-4233',
      stance: 'oppose',
      themes: ['jobs', 'talent'],
      summary: {
        zh: '反对用提高合法移民成本回应复杂就业问题。',
        en: 'Rejects higher legal-immigration costs as a response to complex employment problems.',
      },
      postedDate: '2026-08-31T04:00:00Z',
      textSha256:
        '19415247d9f9cd16f4349d3effa03d31fa9dc23753bbe6420642dd9f65ed2c2b',
    },
    {
      id: 'USCIS-2026-0298-3515',
      stance: 'oppose',
      themes: ['burden'],
      summary: {
        zh: '认为成本过高，阻碍雇主参与。',
        en: 'Finds the cost too high for employer participation.',
      },
      postedDate: '2026-08-27T04:00:00Z',
      textSha256:
        '1dc9bf3a4271e05cf6182a216b0b3a57ca4810083e91994731a72552d01d2866',
    },
    {
      id: 'USCIS-2026-0298-0902',
      stance: 'unclear',
      themes: ['jobs', 'restriction'],
      summary: {
        zh: '批评 H-1B 就业及社区影响，未表明收费立场。',
        en: 'Criticizes H-1B employment and community impacts without a fee position.',
      },
      postedDate: '2026-08-26T04:00:00Z',
      textSha256:
        '017f86ceeac571db41a18d6b6ea0ddf4a9354f342414e83d8ecbf75fc9da3874',
    },
    {
      id: 'USCIS-2026-0298-1331',
      stance: 'unclear',
      themes: ['jobs', 'fraud'],
      summary: {
        zh: '要求美国人招聘优先及学历核查，未表明收费立场。',
        en: 'Seeks American hiring priority and degree verification without a fee position.',
      },
      postedDate: '2026-08-26T04:00:00Z',
      textSha256:
        '02fc30cdba6addc754da67076e21f3d0ff7553822f5db4567547a3286b67b57c',
    },
    {
      id: 'USCIS-2026-0298-0309',
      stance: 'support',
      themes: ['jobs'],
      summary: {
        zh: '认可收费为第一步，并批评工资压低及岗位竞争。',
        en: 'Endorses the fee as a first step and criticizes wage suppression and job competition.',
      },
      postedDate: '2026-08-25T04:00:00Z',
      textSha256:
        '6d00357944d775d97fa81bd207298aee31a484be21114640fbf80130348a38dd',
    },
    {
      id: 'USCIS-2026-0298-6241',
      stance: 'support',
      themes: ['jobs', 'fraud', 'restriction'],
      summary: {
        zh: '明确支持收费，并要求最终关闭项目。',
        en: 'Explicitly supports the fee and calls for ending the program.',
      },
      postedDate: '2026-09-04T04:00:00Z',
      textSha256:
        '6327c570831d1f02f9615e16025d17f0e954fc27a20e39028264f8402d56b05b',
    },
    {
      id: 'USCIS-2026-0298-2090',
      stance: 'support',
      themes: ['jobs', 'fraud'],
      summary: {
        zh: '认可措施，认为可保护美国求职者并应对虚假资历。',
        en: 'Endorses the measure to protect American jobseekers and address false credentials.',
      },
      postedDate: '2026-08-26T04:00:00Z',
      textSha256:
        'e5cb75f268fbe155db24aaf0a7dc3990c3d403d92fca587ea1d80b3ee681a9e8',
    },
    {
      id: 'USCIS-2026-0298-0776',
      stance: 'oppose',
      themes: ['legal'],
      summary: {
        zh: '质疑跨机构成本收费与服务费法律基础的关联。',
        en: 'Challenges the connection between interagency charges and lawful service fees.',
      },
      postedDate: '2026-08-26T04:00:00Z',
      textSha256:
        '59facb75963d5491776011f5a1fdfa792fbf185e15feb84e07ca4a0832963926',
    },
    {
      id: 'USCIS-2026-0298-2024',
      stance: 'oppose',
      themes: ['burden', 'talent', 'students'],
      summary: {
        zh: '反对六位数门槛损害小企业和国际毕业生。',
        en: 'Opposes the six-figure barrier harming small employers and international graduates.',
      },
      postedDate: '2026-08-26T04:00:00Z',
      textSha256:
        '5bf25754e04a1704cba96f86560b7b33b7e707a0fd139a84029b1eaf1e80a8f3',
    },
    {
      id: 'USCIS-2026-0298-7455',
      stance: 'support',
      themes: ['jobs'],
      summary: {
        zh: '支持收费鼓励本土招聘。',
        en: 'Supports the fee to encourage domestic hiring.',
      },
      postedDate: '2026-09-10T04:00:00Z',
      textSha256:
        '61c40b5c3f1ada9e6bb5fee3d8dabb5dd535d9f022d4f736e74c47936f4ce1b8',
    },
    {
      id: 'USCIS-2026-0298-5893',
      stance: 'oppose',
      themes: ['students', 'talent', 'jobs'],
      summary: {
        zh: '警告规则减少留学生并导致外包及美国员工裁员。',
        en: 'Warns the rule would reduce international enrollment and cause outsourcing and U.S. layoffs.',
      },
      postedDate: '2026-09-02T04:00:00Z',
      textSha256:
        '22ef5b07a5e18f06de3f545e5eb295dd32c51558c3eea85ab903cc1cfb722b09',
    },
    {
      id: 'USCIS-2026-0298-6616',
      stance: 'oppose',
      themes: ['students', 'talent', 'burden'],
      summary: {
        zh: '反对收费导致研究型雇主及美国培养的科技人才受损。',
        en: 'Opposes harms to research employers and U.S.-trained STEM talent.',
      },
      postedDate: '2026-09-08T04:00:00Z',
      textSha256:
        'bade5d65cf0a0ff60646de99d4b25a24fb05ce6c137ac6f6671bce1af86825b6',
    },
    {
      id: 'USCIS-2026-0298-3574',
      stance: 'oppose',
      themes: [
        'legal',
        'burden',
        'talent',
        'students',
        'tailored',
        'fraud',
        'jobs',
      ],
      summary: {
        zh: '要求撤回并采用工资执法及按企业规模收费等替代措施。',
        en: 'Seeks withdrawal and alternatives including wage enforcement and size-based fees.',
      },
      postedDate: '2026-08-27T04:00:00Z',
      textSha256:
        '1a9de40669404586ed927d9f24383e25f9780013c8c926e3b4a8a0caf51d4f4a',
    },
    {
      id: 'USCIS-2026-0298-7659',
      stance: 'support',
      themes: [],
      summary: {
        zh: '明确支持设立 H-1B 费用。',
        en: 'Explicitly supports establishing the H-1B fee.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        'd000712f1a4fa1a10110229e29fdc6f39e300e73db70373b3abe556c2e72e80b',
    },
    {
      id: 'USCIS-2026-0298-8320',
      stance: 'unclear',
      themes: ['jobs'],
      summary: {
        zh: '呼吁支持总统和美国劳动者，未明确谈及收费。',
        en: 'Calls for supporting the president and American workers without an explicit fee position.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        'e6dc435a323e342a2f273a09ccba8ebf7b34fd5199f52899c950e1e94201834b',
    },
    {
      id: 'USCIS-2026-0298-7737',
      stance: 'unclear',
      themes: ['jobs'],
      summary: {
        zh: '批评项目压低工资并转移财富，未表明收费立场。',
        en: 'Criticizes wage suppression and wealth transfers without a fee position.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '60d82356cec10f0bd74429af71e65f5e393521a1a2a291439eb878ea352bec99',
    },
    {
      id: 'USCIS-2026-0298-2625',
      stance: 'oppose',
      themes: ['legal', 'burden', 'talent', 'students'],
      summary: {
        zh: '要求撤回，认为高费损害初创企业及医疗人才招聘。',
        en: 'Seeks withdrawal over harms to startups and medical talent recruitment.',
      },
      postedDate: '2026-08-27T04:00:00Z',
      textSha256:
        '148a40722f433a34c32ceae925ea9db41a343e6b3cca5735df590f524906838f',
    },
    {
      id: 'USCIS-2026-0298-7075',
      stance: 'oppose',
      themes: ['burden'],
      summary: {
        zh: '担心高费限制换雇主和合同工就业，要求重新考虑。',
        en: 'Seeks reconsideration over barriers to worker mobility and contract employment.',
      },
      postedDate: '2026-09-09T04:00:00Z',
      textSha256:
        '838eba4b62fb77319a69f19c7d2190b1e62bebec135595c7c972dfd34723c0dc',
    },
    {
      id: 'USCIS-2026-0298-1740',
      stance: 'unclear',
      themes: ['jobs', 'fraud', 'restriction'],
      summary: {
        zh: '要求改革或终结项目，未表明收费立场。',
        en: 'Seeks reform or termination without a fee position.',
      },
      postedDate: '2026-08-26T04:00:00Z',
      textSha256:
        '31dc6c42c9ee7c9ade3ffa233ebcc0b502ab6e9bf72846b02afa9293e59488ca',
    },
    {
      id: 'USCIS-2026-0298-5509',
      stance: 'support',
      themes: [],
      summary: {
        zh: '明确表示完全支持。',
        en: 'Expresses full support.',
      },
      postedDate: '2026-09-01T04:00:00Z',
      textSha256:
        'b9b65914d62cd9c4b9e28b7af629964b5b0b63066b4efc606f99cf24f6e32dc9',
    },
    {
      id: 'USCIS-2026-0298-7535',
      stance: 'unclear',
      themes: ['jobs', 'fraud', 'restriction'],
      summary: {
        zh: '要求取消项目并批评廉价劳工替代，未表明收费立场。',
        en: 'Seeks abolition and criticizes cheaper-labor replacement without a fee position.',
      },
      postedDate: '2026-09-10T04:00:00Z',
      textSha256:
        '00481c595b6e54049790a2f299f1c5e09f3adf45dac4e1c154ca2a99fc77e718',
    },
    {
      id: 'USCIS-2026-0298-0705',
      stance: 'oppose',
      themes: ['jobs', 'restriction'],
      summary: {
        zh: '明确拒绝提高费用，主张直接取消签证项目。',
        en: 'Explicitly rejects higher fees and instead calls for visa-program abolition.',
      },
      postedDate: '2026-08-26T04:00:00Z',
      textSha256:
        '7301290f97dfd90f2ac7f8efea29b8e27cf1333167edad11e03aa84e84860180',
    },
    {
      id: 'USCIS-2026-0298-6383',
      stance: 'oppose',
      themes: ['legal', 'burden', 'tailored'],
      summary: {
        zh: '反对集中分摊系统成本，主张更合理收费及财政拨款。',
        en: 'Opposes concentrated system costs and favors proportional fees and appropriations.',
      },
      postedDate: '2026-09-08T04:00:00Z',
      textSha256:
        '2ba5b01e789f1af1df63b625d0b369080b68a9a57c1c319521c3ff92109167e0',
    },
    {
      id: 'USCIS-2026-0298-6553',
      stance: 'oppose',
      themes: ['burden', 'talent', 'legal', 'jobs'],
      summary: {
        zh: '要求完整撤回，指出企业成本、岗位外流及权限问题。',
        en: 'Seeks full withdrawal over employer costs, offshoring and legal authority.',
      },
      postedDate: '2026-09-08T04:00:00Z',
      textSha256:
        '2fc3f2bd28a6ab7d82b793058a1c81cb69acfd7b0349d17f881de4c6a4b40afe',
    },
    {
      id: 'USCIS-2026-0298-2745',
      stance: 'oppose',
      themes: ['burden', 'talent', 'jobs', 'legal', 'tailored'],
      summary: {
        zh: '要求撤回或大幅降费并为受损雇主提供豁免。',
        en: 'Seeks withdrawal or substantial reductions and exemptions for affected employers.',
      },
      postedDate: '2026-08-27T04:00:00Z',
      textSha256:
        '2aedec8159aa6cabc9b72a50e548e98f9adc4df7ae3da2631845896be2e9e87a',
    },
    {
      id: 'USCIS-2026-0298-0882',
      stance: 'support',
      themes: ['jobs', 'restriction'],
      summary: {
        zh: '认可提案为开端，要求每年二十五万美元收费。',
        en: 'Endorses the proposal as a start and seeks an annual $250,000 fee.',
      },
      postedDate: '2026-08-26T04:00:00Z',
      textSha256:
        '171baf3abd13d1f0ab22e9590248d92fc0302c42ecef2c9cdcd7db16611ca24c',
    },
    {
      id: 'USCIS-2026-0298-1402',
      stance: 'oppose',
      themes: ['talent', 'burden', 'legal'],
      summary: {
        zh: '反对伤害企业及人才，质疑减少申请后的收入。',
        en: 'Opposes harms to firms and talent and questions revenue after reduced filings.',
      },
      postedDate: '2026-08-26T04:00:00Z',
      textSha256:
        '3544a2023fe11d9c359d76a59cde07bc889f79147fe583a2a9d133e25c6882d4',
    },
    {
      id: 'USCIS-2026-0298-5226',
      stance: 'oppose',
      themes: ['talent', 'students', 'burden'],
      summary: {
        zh: '警告政策将学生和科研人才推向竞争国家。',
        en: 'Warns the policy would send students and research talent to competitors.',
      },
      postedDate: '2026-09-01T04:00:00Z',
      textSha256:
        'e67d3f96d7584c1bd1e8ced130744357dc5cc3a181640a98cd893c56ff46058e',
    },
    {
      id: 'USCIS-2026-0298-7850',
      stance: 'oppose',
      themes: ['jobs', 'talent', 'legal'],
      summary: {
        zh: '反对缺乏就业收益证据的收费，并警告外包和税收损失。',
        en: 'Opposes the fee for lacking jobs evidence and warns of offshoring and tax losses.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '0c5ad9afdf3f1c3989ee58d6d01da705a30cee2ba30f14cde70435ab94ec75c0',
    },
    {
      id: 'USCIS-2026-0298-1154',
      stance: 'unclear',
      themes: ['jobs', 'fraud', 'restriction'],
      summary: {
        zh: '主张限制滥用并优先雇用美国人，未表明收费立场。',
        en: 'Seeks abuse limits and American hiring priority without a fee position.',
      },
      postedDate: '2026-08-26T04:00:00Z',
      textSha256:
        '49aef5af4485c83448ff2c5034876d30cf3fd704e353b94447dca931ebab9cca',
    },
    {
      id: 'USCIS-2026-0298-5823',
      stance: 'oppose',
      themes: ['students', 'tailored', 'legal', 'burden'],
      summary: {
        zh: '要求撤回收费，至少为已入学学生提供过渡豁免或减费。',
        en: 'Seeks withdrawal of the fee, or at minimum grandfathering or reduced transitional fees for already-enrolled students.',
      },
      postedDate: '2026-09-02T04:00:00Z',
      textSha256:
        'ec2e6434104a5a67a044c69cdc0b00af2b93dac21156d192393665d1b9cf7682',
    },
    {
      id: 'USCIS-2026-0298-1334',
      stance: 'unclear',
      themes: ['jobs', 'fraud'],
      summary: {
        zh: '批评项目滥用及工资就业影响，未表明收费立场。',
        en: 'Criticizes abuse and wage and employment impacts without a fee position.',
      },
      postedDate: '2026-08-26T04:00:00Z',
      textSha256:
        '3c7e569a6e54318cb6ffc400069ecc1d91dde1b0cf8bd1b9b75676cf6ebb6764',
    },
    {
      id: 'USCIS-2026-0298-4142',
      stance: 'support',
      themes: ['jobs', 'fraud', 'restriction'],
      summary: {
        zh: '主张将收费扩展到全部 H-1B，以保护美国就业。',
        en: 'Calls for extending the fee to all H-1Bs to protect American jobs.',
      },
      postedDate: '2026-08-28T04:00:00Z',
      textSha256:
        '88652a11e82938c21f81576659c88c22786051e6b7c552e3c058d93b1d840d61',
    },
    {
      id: 'USCIS-2026-0298-7787',
      stance: 'support',
      themes: ['jobs'],
      summary: {
        zh: '支持收费促进本土招聘及培训。',
        en: 'Supports the fee to encourage domestic hiring and training.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        'b444ab8b2e8d586bb1b98490565feedfb2f68089edd7cf5807deeaac5f2b3560',
    },
    {
      id: 'USCIS-2026-0298-4927',
      stance: 'oppose',
      themes: ['talent', 'jobs', 'burden', 'fraud'],
      summary: {
        zh: '讽刺政策削弱制造业人才引进及本土培训。',
        en: 'Criticizes the policy for undermining manufacturing recruitment and domestic training.',
      },
      postedDate: '2026-08-31T04:00:00Z',
      textSha256:
        'bc8e947409240fa79d9e379f0c0426d89906f47654dd398a3e0db4dfe0f470c1',
    },
    {
      id: 'USCIS-2026-0298-1218',
      stance: 'support',
      themes: ['jobs', 'fraud', 'restriction'],
      summary: {
        zh: '接受费用并要求额外证明美国人招聘未果。',
        en: 'Accepts the fee and seeks additional proof of unsuccessful American recruitment.',
      },
      postedDate: '2026-08-26T04:00:00Z',
      textSha256:
        'de7e42a60f0a639b5ffd137d82cfe8f18e214c064ee32a4af8a70cc6711f801a',
    },
    {
      id: 'USCIS-2026-0298-7826',
      stance: 'oppose',
      themes: ['burden', 'students', 'talent'],
      summary: {
        zh: '反对高费关闭毕业生就业路径并损害小企业。',
        en: 'Opposes barriers to graduate employment and small-business recruitment.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '0d7858ba1e078d72af7a6b0f702b5a9e15f6ffe362d8661f5c19ada27aed8b8d',
    },
    {
      id: 'USCIS-2026-0298-4175',
      stance: 'oppose',
      themes: ['legal', 'burden', 'talent', 'jobs'],
      summary: {
        zh: '要求撤回，质疑成本依据和程序并警告外流。',
        en: 'Seeks withdrawal over cost justification, procedure and offshoring risks.',
      },
      postedDate: '2026-08-28T04:00:00Z',
      textSha256:
        '97f40461ca44375c80bf25a735e58d7dfe8c4009d0ffbe506f1638fd3310f706',
    },
    {
      id: 'USCIS-2026-0298-0179',
      stance: 'unclear',
      themes: ['restriction'],
      summary: {
        zh: '讽刺询问是否追溯收费，未清晰表达提案立场。',
        en: 'Sarcastically asks about retroactive charging without a clear proposal position.',
      },
      postedDate: '2026-08-25T04:00:00Z',
      textSha256:
        '6842472de3e26fa566af853d0caecaed52994ed23b6b8fe56d7890acf0e8bdaa',
    },
    {
      id: 'USCIS-2026-0298-0206',
      stance: 'mixed',
      themes: ['restriction', 'jobs'],
      summary: {
        zh: '要求至少一百万美元费用，认为拟议金额不足。',
        en: 'Requests at least $1 million, finding the proposed amount insufficient.',
      },
      postedDate: '2026-08-25T04:00:00Z',
      textSha256:
        '4901815212827494ec104bde2acf543dbcfc87d2a55b4e199691d0785f871b2e',
    },
    {
      id: 'USCIS-2026-0298-2013',
      stance: 'mixed',
      themes: ['jobs', 'restriction', 'students', 'legal', 'tailored'],
      summary: {
        zh: '主张收回雇主节省的福利成本并限制签证及留学生名额。',
        en: "Proposes recovering employers' benefit savings and restricting visas and international enrollment.",
      },
      postedDate: '2026-08-26T04:00:00Z',
      textSha256:
        '4058fd2444dd2c7f0536a929eff6e2dc6567bf7b5df02ec8fd7611110efc622b',
    },
    {
      id: 'USCIS-2026-0298-7296',
      stance: 'oppose',
      themes: ['students', 'burden'],
      summary: {
        zh: '要求撤回，担心毕业生无法获得雇主赞助。',
        en: 'Seeks withdrawal over barriers to graduate sponsorship.',
      },
      postedDate: '2026-09-10T04:00:00Z',
      textSha256:
        '17b7c1e6335ec4d11b3a0d78fb65608304b68c8bf5c319b4aa4707f55130d3fa',
    },
    {
      id: 'USCIS-2026-0298-6320',
      stance: 'oppose',
      themes: ['burden', 'legal', 'talent'],
      summary: {
        zh: '反对不成比例收费造成小企业障碍和岗位外流。',
        en: 'Opposes disproportionate fees creating small-business barriers and offshoring.',
      },
      postedDate: '2026-09-08T04:00:00Z',
      textSha256:
        '8479bfc2e5d6956542255b2b9e4b46a3a87d990f5e2198da7134fa3ab18913ec',
    },
    {
      id: 'USCIS-2026-0298-3613',
      stance: 'oppose',
      themes: ['burden', 'legal', 'tailored'],
      summary: {
        zh: '要求撤回或按规模合理分级收费。',
        en: 'Seeks withdrawal or proportionate size-based fees.',
      },
      postedDate: '2026-08-27T04:00:00Z',
      textSha256:
        'aa24ae4fbefe35a0ce0f087a82ac32795e6b0e890d4bc6322dba664ce9de0ac1',
    },
    {
      id: 'USCIS-2026-0298-5102',
      stance: 'oppose',
      themes: ['burden', 'talent', 'jobs'],
      summary: {
        zh: '认为收费削弱中小科技公司并将人才推向竞争国家。',
        en: 'Argues the fee weakens smaller technology firms and sends talent to competitors.',
      },
      postedDate: '2026-08-31T04:00:00Z',
      textSha256:
        'ac01dc60cfe02a2ba056454ce6d5124989341894a245e34981bac7df886e085e',
    },
    {
      id: 'USCIS-2026-0298-7579',
      stance: 'unclear',
      themes: ['jobs', 'fraud'],
      summary: {
        zh: '描述招聘歧视及低薪外劳偏好，未表明收费立场。',
        en: 'Describes hiring discrimination and preference for cheaper labor without a fee position.',
      },
      postedDate: '2026-09-10T04:00:00Z',
      textSha256:
        'b4adf23d3d792ebacf56edb29f9a142aae934a25ed19c7ae787176d1ad5f2d30',
    },
    {
      id: 'USCIS-2026-0298-5590',
      stance: 'support',
      themes: ['restriction'],
      summary: {
        zh: '支持收费覆盖新申请、续签及 H-4 EAD。',
        en: 'Supports fees covering new petitions, renewals and H-4 EAD.',
      },
      postedDate: '2026-09-01T04:00:00Z',
      textSha256:
        '32f544db6bd960adade40fa5f37162346388998097245b800dcb6ae0f17c4208',
      sourceNote: {
        zh: '官方附件下载返回403；仅根据可读正文归类，正文不足的保留为无法判断。',
        en: 'Official attachment downloads returned HTTP403. Classification uses readable body text only; insufficient bodies remain unclassifiable.',
      },
    },
    {
      id: 'USCIS-2026-0298-7299',
      stance: 'oppose',
      themes: ['legal', 'burden'],
      summary: {
        zh: '要求撤回并延长评论期，质疑费用权限及收入预测。',
        en: 'Seeks withdrawal and a longer comment period over authority and revenue estimates.',
      },
      postedDate: '2026-09-10T04:00:00Z',
      textSha256:
        '005481229d1b0098b41c1096468c51f249f7ee1fe2119aaf912cb4ad670f98d0',
      sourceNote: {
        zh: '正文保留未填写的模板提示；分类依据已有论述，未补写缺失内容。',
        en: 'The body retains an unfilled template prompt; classification uses the supplied arguments without inventing missing content.',
      },
    },
    {
      id: 'USCIS-2026-0298-4249',
      stance: 'oppose',
      themes: ['legal'],
      summary: {
        zh: '反对 H-1B 雇主承担广泛移民系统成本，要求缩小成本范围。',
        en: 'Opposes broad system costs on H-1B employers and seeks a narrower cost base.',
      },
      postedDate: '2026-08-31T04:00:00Z',
      textSha256:
        '1875346381e49edb994f6785e63a068ef19a8ee067e114f161d9b673c66acd74',
    },
    {
      id: 'USCIS-2026-0298-3477',
      stance: 'oppose',
      themes: ['legal'],
      summary: {
        zh: '要求撤回，认为缺乏国会授权将其他项目费用转嫁给雇主。',
        en: 'Seeks withdrawal for lack of congressional authority to shift other program costs to employers.',
      },
      postedDate: '2026-08-27T04:00:00Z',
      textSha256:
        '26e84b5e41d8b38bfc54c1c999357e145fd9bfcc00cb1eba35e1d85da4d70ae4',
    },
    {
      id: 'USCIS-2026-0298-4148',
      stance: 'oppose',
      themes: ['legal'],
      summary: {
        zh: '反对雇主承担无关政府开支。',
        en: 'Opposes charging employers for unrelated government expenses.',
      },
      postedDate: '2026-08-28T04:00:00Z',
      textSha256:
        '67743f30cfab93e5d3e7ca99be2560e64810ab5883b428afa13e710e1832e246',
    },
    {
      id: 'USCIS-2026-0298-6064',
      stance: 'unclear',
      themes: ['jobs', 'fraud', 'restriction'],
      summary: {
        zh: '支持全面限制签证并批评招聘歧视，未表明收费立场。',
        en: 'Supports broad visa restrictions and criticizes hiring discrimination without a fee position.',
      },
      postedDate: '2026-09-03T04:00:00Z',
      textSha256:
        '61ec3a82cc77ab4445b80578e4957ae5709a990a9ce85a092fe090a365f05554',
    },
    {
      id: 'USCIS-2026-0298-4879',
      stance: 'oppose',
      themes: ['burden', 'students', 'talent'],
      summary: {
        zh: '要求撤回，认为规则偏袒大企业并损害合法人才。',
        en: 'Seeks withdrawal, arguing the rule favors large firms and harms lawful talent.',
      },
      postedDate: '2026-08-31T04:00:00Z',
      textSha256:
        'ef4be9b084f9a05913892c386e869b4fa4ddef18e553fe4347a6f1f43e4b257b',
    },
    {
      id: 'USCIS-2026-0298-0220',
      stance: 'unclear',
      themes: ['jobs', 'restriction'],
      summary: {
        zh: '要求高签证成本及美国人优先，未明确评价拟议收费。',
        en: 'Seeks high visa costs and American priority without evaluating the proposed fee.',
      },
      postedDate: '2026-08-25T04:00:00Z',
      textSha256:
        'ded47c4434afe996fa15a6820fc65cfed2f25ccddbf6efaa943122ffa23ff06e',
    },
    {
      id: 'USCIS-2026-0298-2309',
      stance: 'support',
      themes: ['legal', 'fraud', 'jobs'],
      summary: {
        zh: '支持成本分摊和人才筛选，认为大企业有支付能力。',
        en: "Supports cost allocation and talent screening, citing large firms' ability to pay.",
      },
      postedDate: '2026-08-26T04:00:00Z',
      textSha256:
        '72540fbba14a1c14dbba10ec8e69948c1a62f5ca89b5ecf9ae9c65d354575ebf',
    },
    {
      id: 'USCIS-2026-0298-1814',
      stance: 'oppose',
      themes: ['legal', 'burden', 'tailored'],
      summary: {
        zh: '反对收费权限、需求模型及不足的替代方案分析。',
        en: "Opposes the fee's authority, demand model and inadequate alternatives analysis.",
      },
      postedDate: '2026-08-26T04:00:00Z',
      textSha256:
        '931713433a672ce0b65ed1030c41ccea8e0cfdb40ad5eabfa9efdf21ce70e595',
    },
    {
      id: 'USCIS-2026-0298-5718',
      stance: 'oppose',
      themes: ['students', 'talent', 'burden', 'tailored'],
      summary: {
        zh: '要求撤回或豁免美国培养的毕业生及长期居美青年。',
        en: 'Seeks withdrawal or exemptions for U.S.-educated graduates and long-resident youth.',
      },
      postedDate: '2026-09-02T04:00:00Z',
      textSha256:
        '9814af0f68ad6f3050eab15fd693bd9360c707df0a1959c7323238769987cc15',
    },
    {
      id: 'USCIS-2026-0298-4341',
      stance: 'oppose',
      themes: ['burden'],
      summary: {
        zh: '认为无理由征收巨额费用不公平。',
        en: 'Calls the large unexplained charge unfair.',
      },
      postedDate: '2026-08-31T04:00:00Z',
      textSha256:
        'd40bf4c625bfd81f482ab9c75ac2ccf1a8091d6924c528df9ea054cffd6570f2',
    },
    {
      id: 'USCIS-2026-0298-6237',
      stance: 'mixed',
      themes: ['fraud', 'jobs', 'legal', 'tailored'],
      summary: {
        zh: '有条件支持合理收费，要求收入专门用于核查和执法。',
        en: 'Conditionally supports reasonable fees with revenue dedicated to verification and enforcement.',
      },
      postedDate: '2026-09-04T04:00:00Z',
      textSha256:
        '696b7adf06fb05a5e1cc128dc1c7c86bee66a50b6fd2a2f792d01a450e316d3c',
    },
    {
      id: 'USCIS-2026-0298-2069',
      stance: 'support',
      themes: ['jobs', 'fraud', 'restriction'],
      summary: {
        zh: '支持以收费为起点，最终取消 H-1B 等项目。',
        en: 'Supports the fee as a starting point toward ending H-1B and related programs.',
      },
      postedDate: '2026-08-26T04:00:00Z',
      textSha256:
        '749b857629ed24b8b65507255fd6b7886cece42c25077951c3b12003aba1fd69',
    },
    {
      id: 'USCIS-2026-0298-7939',
      stance: 'support',
      themes: ['jobs'],
      summary: {
        zh: '支持收费推动本土人才招聘。',
        en: 'Supports the fee to encourage domestic recruitment.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '61c40b5c3f1ada9e6bb5fee3d8dabb5dd535d9f022d4f736e74c47936f4ce1b8',
    },
    {
      id: 'USCIS-2026-0298-5446',
      stance: 'oppose',
      themes: ['legal', 'jobs', 'tailored'],
      summary: {
        zh: '反驳收费理由，认为人才价值应通过更高工资体现。',
        en: 'Rejects the fee rationale, arguing talent value should be reflected in higher wages.',
      },
      postedDate: '2026-09-01T04:00:00Z',
      textSha256:
        '0ef54b8883cec82827405578526e02bac048560f083850a100ea6b1d226c83b9',
    },
    {
      id: 'USCIS-2026-0298-2793',
      stance: 'oppose',
      themes: ['talent', 'students', 'jobs'],
      summary: {
        zh: '要求重新考虑收费，警告科研创新及岗位外流。',
        en: 'Seeks reconsideration over innovation harms and offshoring.',
      },
      postedDate: '2026-08-27T04:00:00Z',
      textSha256:
        'dc1ff6b3f1cba84334f1e054b23444d41073148f346254f1e7dec3be9eaa61c0',
    },
    {
      id: 'USCIS-2026-0298-7237',
      stance: 'oppose',
      themes: ['burden', 'talent'],
      summary: {
        zh: '反对增加招聘障碍并推动岗位和投资外移。',
        en: 'Opposes added hiring barriers and relocation of jobs and investment.',
      },
      postedDate: '2026-09-10T04:00:00Z',
      textSha256:
        'b0846cae2f4a6d5ab252821692c159b3ee2a07e238acc88014d5a16f9ba87120',
    },
    {
      id: 'USCIS-2026-0298-7476',
      stance: 'support',
      themes: ['jobs'],
      summary: {
        zh: '支持收费改变低成本外劳招聘动机。',
        en: 'Supports the fee to change incentives favoring cheaper foreign labor.',
      },
      postedDate: '2026-09-10T04:00:00Z',
      textSha256:
        '61c40b5c3f1ada9e6bb5fee3d8dabb5dd535d9f022d4f736e74c47936f4ce1b8',
    },
    {
      id: 'USCIS-2026-0298-3582',
      stance: 'oppose',
      themes: [
        'burden',
        'students',
        'talent',
        'fraud',
        'tailored',
        'legal',
        'jobs',
      ],
      summary: {
        zh: '要求重新考虑收费，以规模收费及定向执法保护小企业和人才。',
        en: 'Seeks reconsideration with size-based fees and targeted enforcement to protect smaller firms and talent.',
      },
      postedDate: '2026-08-27T04:00:00Z',
      textSha256:
        '67abdc2d82ee6cae3c438f667c4b69e1125b6b596467c1a0e45f42da8558b2a6',
    },
    {
      id: 'USCIS-2026-0298-4850',
      stance: 'oppose',
      themes: ['legal', 'burden', 'talent', 'tailored'],
      summary: {
        zh: '要求撤回，反对跨机构成本转嫁及小企业障碍。',
        en: 'Seeks withdrawal over interagency cost shifting and small-business barriers.',
      },
      postedDate: '2026-08-31T04:00:00Z',
      textSha256:
        '98c4e41d90ed3668ee93dc8d2b0337e331e7d8647fa6843bda7016a3395b7441',
    },
    {
      id: 'USCIS-2026-0298-3379',
      stance: 'oppose',
      themes: ['legal', 'burden', 'talent'],
      summary: {
        zh: '反对权限、需求及成本依据不足的巨额收费。',
        en: 'Opposes the large fee over inadequate authority, demand and cost justification.',
      },
      postedDate: '2026-08-27T04:00:00Z',
      textSha256:
        '37191b6d709c4c751f7ee199f07d089d2db6afc6fdf62167cc817d6461d64637',
    },
    {
      id: 'USCIS-2026-0298-7759',
      stance: 'support',
      themes: ['legal'],
      summary: {
        zh: '支持由企业承担政府审核成本而非纳税人。',
        en: 'Supports employers covering government vetting costs instead of taxpayers.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '0670cbede22ace4770d8df6dcebfa78ba542e30b715c45d12c4f426660e51520',
    },
    {
      id: 'USCIS-2026-0298-5687',
      stance: 'oppose',
      themes: [
        'legal',
        'burden',
        'talent',
        'students',
        'tailored',
        'fraud',
        'jobs',
      ],
      summary: {
        zh: '要求撤回或重写，补充长期人才影响及分级替代分析。',
        en: 'Seeks withdrawal or revision with long-term talent analysis and tiered alternatives.',
      },
      postedDate: '2026-09-02T04:00:00Z',
      textSha256:
        '4e2ab469403bc44541fb1abef64c9025e235500e611eaa635e90ba40dd252736',
    },
    {
      id: 'USCIS-2026-0298-2401',
      stance: 'unclear',
      themes: ['jobs'],
      summary: {
        zh: '描述科技业求职困难，未表达收费立场。',
        en: 'Describes technology job-search difficulties without a fee position.',
      },
      postedDate: '2026-08-26T04:00:00Z',
      textSha256:
        '9b4234457402cba90b4f2959520208cf52a71b4182279638ab0ce5afca5e389c',
    },
    {
      id: 'USCIS-2026-0298-1675',
      stance: 'support',
      themes: ['restriction'],
      summary: {
        zh: '认为提案是良好开端，希望费用提高十倍。',
        en: 'Calls the proposal a good start and seeks a tenfold increase.',
      },
      postedDate: '2026-08-26T04:00:00Z',
      textSha256:
        '55ab0bf76b0a41709acf27b73d38b3db4f04b27e5c9eaecd0996819cc90a1235',
    },
    {
      id: 'USCIS-2026-0298-7924',
      stance: 'support',
      themes: ['jobs', 'restriction'],
      summary: {
        zh: '认为收费好于无措施，同时要求取消项目。',
        en: 'Finds the fee better than nothing while seeking program abolition.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        'f30bd23b470ae009ac0027af615b82c724921153c78b0a5be44f3087a05da4a7',
    },
    {
      id: 'USCIS-2026-0298-4896',
      stance: 'oppose',
      themes: ['legal', 'burden', 'talent'],
      summary: {
        zh: '要求撤回，质疑权限及需求模型并警告初创企业受损。',
        en: 'Seeks withdrawal over authority, demand modeling and startup harms.',
      },
      postedDate: '2026-08-31T04:00:00Z',
      textSha256:
        '7a7c543a53bb85c5c9f96620e76d6291d69e9518307ba0bca9961e5799822c80',
    },
    {
      id: 'USCIS-2026-0298-2441',
      stance: 'oppose',
      themes: ['legal', 'talent', 'students', 'jobs'],
      summary: {
        zh: '要求撤回或降费，警告投资和岗位可能外移。',
        en: 'Seeks withdrawal or reduction and warns of investment and jobs moving abroad.',
      },
      postedDate: '2026-08-27T04:00:00Z',
      textSha256:
        '8b62f4876215f61a2954baef8aeb7904cc3ebc0b3d5e51c6d617d7b88f33348d',
    },
    {
      id: 'USCIS-2026-0298-1892',
      stance: 'unclear',
      themes: ['jobs', 'fraud'],
      summary: {
        zh: '指控签证滥用及招聘歧视，未表达收费立场。',
        en: 'Alleges visa abuse and hiring discrimination without a fee position.',
      },
      postedDate: '2026-08-26T04:00:00Z',
      textSha256:
        '91d3024b31e19291c12cd39885a30fae049320820e236aebcc8209a9a7be7958',
    },
    {
      id: 'USCIS-2026-0298-2268',
      stance: 'unclear',
      themes: ['jobs'],
      summary: {
        zh: '批评企业外包及替代美国员工，未表达收费立场。',
        en: 'Criticizes offshoring and displacement without a fee position.',
      },
      postedDate: '2026-08-26T04:00:00Z',
      textSha256:
        'bed3d22a7b40c3de00af3413c72e1ecec404dedef723007614b1356b32354fba',
    },
    {
      id: 'USCIS-2026-0298-6613',
      stance: 'oppose',
      themes: ['burden', 'tailored', 'legal'],
      summary: {
        zh: '要求撤回或降低并按企业规模收费。',
        en: 'Seeks withdrawal or lower size-based fees.',
      },
      postedDate: '2026-09-08T04:00:00Z',
      textSha256:
        'af05c55387b3cb77eba786321412af23229bf611b4c0bbf7751d922d85beb2c8',
    },
    {
      id: 'USCIS-2026-0298-6754',
      stance: 'oppose',
      themes: ['talent', 'students', 'burden'],
      summary: {
        zh: '反对收费推动软件岗位及美国培养人才外流。',
        en: 'Opposes offshoring of software jobs and loss of U.S.-trained talent.',
      },
      postedDate: '2026-09-08T04:00:00Z',
      textSha256:
        '78ec5b6373ea0fa31c79d7f593830789352ed0e3cdfb4f34f7b6990a8ea2dcb4',
    },
    {
      id: 'USCIS-2026-0298-1812',
      stance: 'unclear',
      themes: ['students'],
      summary: {
        zh: '询问境内转身份及高校申请是否适用收费。',
        en: 'Asks whether in-country status changes and university petitions face the fee.',
      },
      postedDate: '2026-08-26T04:00:00Z',
      textSha256:
        '818eb5144e69e61ce3ef50bc2b4f373345716227bdb161430e8fdf423736fa1d',
    },
    {
      id: 'USCIS-2026-0298-0502',
      stance: 'mixed',
      themes: ['jobs', 'restriction', 'tailored', 'students'],
      summary: {
        zh: '要求十五万至五十万美元分级费及更多工作限制。',
        en: 'Requests tiered $150,000–$500,000 fees and further employment restrictions.',
      },
      postedDate: '2026-08-25T04:00:00Z',
      textSha256:
        'ae34f954df1e21ddacc9464755060de286cdd6b337de2846b796a739a36869ca',
    },
    {
      id: 'USCIS-2026-0298-3766',
      stance: 'oppose',
      themes: ['legal', 'burden', 'talent', 'tailored'],
      summary: {
        zh: '要求撤回，质疑法律与收入模型及累积成本。',
        en: 'Seeks withdrawal over legal authority, revenue modeling and cumulative costs.',
      },
      postedDate: '2026-08-28T04:00:00Z',
      textSha256:
        '4012e47be7acb59547bf8d87ef0c503715f4d7c39523c1687016ad1b649225fd',
    },
    {
      id: 'USCIS-2026-0298-1311',
      stance: 'unclear',
      themes: ['jobs'],
      summary: {
        zh: '认为无需引进外劳，未表达收费立场。',
        en: 'Says foreign recruitment is unnecessary without a fee position.',
      },
      postedDate: '2026-08-26T04:00:00Z',
      textSha256:
        'a595a543470145f5afd4e9aef46690eae4b494d7ef14ea02d4dd0a18197d327f',
    },
    {
      id: 'USCIS-2026-0298-7191',
      stance: 'mixed',
      themes: ['tailored'],
      summary: {
        zh: '有条件支持仅向首次受益人收费，保护既有 H-1B 工作者。',
        en: 'Conditionally supports fees only for first-time beneficiaries while protecting established H-1B workers.',
      },
      postedDate: '2026-09-10T04:00:00Z',
      textSha256:
        '3ac81065abc5a4683cd011541f9fce69097135a98f346f826f142411d906286f',
    },
    {
      id: 'USCIS-2026-0298-6852',
      stance: 'unclear',
      themes: ['jobs', 'fraud', 'restriction'],
      summary: {
        zh: '认为提案不足并要求终结项目，未明确认可收费。',
        en: 'Finds the proposal insufficient and seeks program abolition without endorsing the fee.',
      },
      postedDate: '2026-09-09T04:00:00Z',
      textSha256:
        'dfeaf0ab89c96a8322f1dd63c7d44660465a9ab0a827f39529db42133e686eb1',
    },
    {
      id: 'USCIS-2026-0298-6491',
      stance: 'oppose',
      themes: ['burden', 'talent'],
      summary: {
        zh: '反对初创企业无法承受且损害创新的费用。',
        en: 'Opposes fees unaffordable for startups and harmful to innovation.',
      },
      postedDate: '2026-09-08T04:00:00Z',
      textSha256:
        '0c7657677b328248387da3092fe1dbc2c4e475964474bed4e09ce7983803cd96',
    },
    {
      id: 'USCIS-2026-0298-4643',
      stance: 'oppose',
      themes: ['talent', 'burden'],
      summary: {
        zh: '反对提高美国专业工作成本并促使业务迁出。',
        en: 'Opposes making specialized U.S. work costlier and encouraging relocation.',
      },
      postedDate: '2026-08-31T04:00:00Z',
      textSha256:
        'cd290b31cb5fdf115a3291943327670d211a39702b5bf049ce3585de022ff5a0',
    },
    {
      id: 'USCIS-2026-0298-2838',
      stance: 'oppose',
      themes: ['students', 'burden', 'talent'],
      summary: {
        zh: '批评收费破坏毕业生路径、损害小企业并增加既有负担。',
        en: 'Criticizes disruption to graduate pathways, smaller firms and existing burdens.',
      },
      postedDate: '2026-08-27T04:00:00Z',
      textSha256:
        'ffbfd8a879d1194ff645134ed16923e56c84869e1a40acf7332896d522676479',
    },
    {
      id: 'USCIS-2026-0298-5951',
      stance: 'unclear',
      themes: ['jobs'],
      summary: {
        zh: '主张灵活签证规则并关注外包，未明确评价收费。',
        en: 'Favors flexible visa rules and flags offshoring without evaluating the fee.',
      },
      postedDate: '2026-09-03T04:00:00Z',
      textSha256:
        '9521a00426d51726b202d0ae48657ebf95dfec90cbc8da0dc77f10dd0972207b',
    },
    {
      id: 'USCIS-2026-0298-5748',
      stance: 'oppose',
      themes: ['talent', 'students'],
      summary: {
        zh: '认为政策妨碍人才招聘并减少留学生及教育收入。',
        en: 'Argues the policy hinders talent recruitment and reduces international enrollment and education revenue.',
      },
      postedDate: '2026-09-02T04:00:00Z',
      textSha256:
        'a410dabdb67b46f8dc5f6e088eccedea264f93691601db563c7de8c518e792c1',
    },
    {
      id: 'USCIS-2026-0298-5964',
      stance: 'oppose',
      themes: ['legal', 'burden', 'students', 'tailored', 'fraud'],
      summary: {
        zh: '要求撤回，质疑权限与收入并主张学生及小企业保护。',
        en: 'Seeks withdrawal over authority and revenue and protections for students and small firms.',
      },
      postedDate: '2026-09-03T04:00:00Z',
      textSha256:
        '19adeb3ecc46b81c048d0f340585a1904980320cc6981f827655a5104ef1cf5c',
    },
    {
      id: 'USCIS-2026-0298-3720',
      stance: 'oppose',
      themes: ['burden', 'talent', 'students', 'legal', 'jobs'],
      summary: {
        zh: '要求撤回，担心创新、岗位及美国培养人才外流。',
        en: 'Seeks withdrawal over losses of innovation, jobs and U.S.-trained talent.',
      },
      postedDate: '2026-08-28T04:00:00Z',
      textSha256:
        '8ee69be94a81097c88f1d9ae4e2b65b16320b8ba45879911d4764a6b7438d945',
    },
    {
      id: 'USCIS-2026-0298-2059',
      stance: 'support',
      themes: ['jobs'],
      summary: {
        zh: '支持雇主付费以优先保障美国人就业。',
        en: 'Supports employer fees to prioritize American employment.',
      },
      postedDate: '2026-08-26T04:00:00Z',
      textSha256:
        'b629405a7fb2067d9790a6e0b65dd43cda10eb080a9a63015af4c7f5df20d055',
    },
    {
      id: 'USCIS-2026-0298-8118',
      stance: 'support',
      themes: ['jobs'],
      summary: {
        zh: '支持规则以降低企业偏好廉价外劳的动机。',
        en: 'Supports the rule to reduce incentives favoring cheaper foreign labor.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        'fdac144f8a52ec825ac3d383ccd59cd1276bb781f556ba3567014083f7342e56',
    },
    {
      id: 'USCIS-2026-0298-6111',
      stance: 'support',
      themes: ['fraud', 'jobs'],
      summary: {
        zh: '支持收费防欺诈并筛选真正专业岗位。',
        en: 'Supports fees to prevent fraud and select genuinely specialized roles.',
      },
      postedDate: '2026-09-03T04:00:00Z',
      textSha256:
        'd77b4624d06d3b008dea37275418d03826bee7e179af088d706acaa0b1568df8',
    },
    {
      id: 'USCIS-2026-0298-2988',
      stance: 'oppose',
      themes: ['legal', 'burden', 'talent'],
      summary: {
        zh: '反对无关成本转嫁及对小企业和创新的损害。',
        en: 'Opposes unrelated cost shifting and harms to small employers and innovation.',
      },
      postedDate: '2026-08-27T04:00:00Z',
      textSha256:
        '3fd6d2be3d76613f7e13c050dbd3f52a7c5d54caa6e1d98c0a88431823679fa0',
    },
    {
      id: 'USCIS-2026-0298-7436',
      stance: 'support',
      themes: ['jobs'],
      summary: {
        zh: '支持收费并主张美国公民就业优先。',
        en: 'Supports the fee and American-citizen hiring priority.',
      },
      postedDate: '2026-09-10T04:00:00Z',
      textSha256:
        'c217a4611e7061a5b7847b786682fc4cc27da2b13097e4e3bc2babc9e231ab0c',
    },
    {
      id: 'USCIS-2026-0298-0821',
      stance: 'oppose',
      themes: ['legal', 'talent'],
      summary: {
        zh: '批评跨机构收费越权并认为无法阻止外包。',
        en: 'Challenges authority for interagency fees and argues they will not stop offshoring.',
      },
      postedDate: '2026-08-26T04:00:00Z',
      textSha256:
        'dcef4d6ac6a387f5a5c96dcc25b670d96ffd251a22b4109b969a17ec153fe79f',
    },
    {
      id: 'USCIS-2026-0298-4286',
      stance: 'oppose',
      themes: ['talent'],
      summary: {
        zh: '批评政策加剧工程及医疗人才短缺。',
        en: 'Criticizes the policy for worsening engineering and medical talent shortages.',
      },
      postedDate: '2026-08-31T04:00:00Z',
      textSha256:
        '8ae1372d48ba31d1d6bdb86ab04f91002415abf1589129e14b9a1fa377ed2490',
    },
    {
      id: 'USCIS-2026-0298-5287',
      stance: 'oppose',
      themes: [],
      summary: {
        zh: '明确反对拟议规则。',
        en: 'Explicitly opposes the proposed rule.',
      },
      postedDate: '2026-09-01T04:00:00Z',
      textSha256:
        '1ac26b0b314b81ecfef775374023b9374cbb3a6aebb7c431043e13db9eef1d59',
    },
    {
      id: 'USCIS-2026-0298-0278',
      stance: 'support',
      themes: ['jobs', 'restriction'],
      summary: {
        zh: '感谢保护美国工资并希望更高收费。',
        en: 'Welcomes protection of American wages and wishes for higher fees.',
      },
      postedDate: '2026-08-25T04:00:00Z',
      textSha256:
        '6cf6e39493d083dba4a0329f1c483c4657835fecc5488acb1f163a9311ed1e5b',
    },
    {
      id: 'USCIS-2026-0298-6020',
      stance: 'mixed',
      themes: ['legal', 'tailored'],
      summary: {
        zh: '提出让 EB-5 投资移民也分担费用。',
        en: 'Suggests including EB-5 investors among fee payers.',
      },
      postedDate: '2026-09-03T04:00:00Z',
      textSha256:
        '80a95f595121d92e09f782366efb9f057f19feecfc8b640fca3c8795de95ce94',
    },
    {
      id: 'USCIS-2026-0298-5547',
      stance: 'support',
      themes: ['restriction'],
      summary: {
        zh: '支持至少十万美元费用并夸张地要求进一步提高。',
        en: 'Supports at least $100,000 and hyperbolically seeks further increases.',
      },
      postedDate: '2026-09-01T04:00:00Z',
      textSha256:
        '96587d91fd67ada67f17718b89f71806ce80fd053ad65cfe870f641f13c5662f',
    },
    {
      id: 'USCIS-2026-0298-3585',
      stance: 'support',
      themes: ['jobs', 'restriction'],
      summary: {
        zh: '支持征税限制 H-1B 仅用于本土人才短缺岗位。',
        en: 'Supports charging H-1Bs to restrict use to domestic skill shortages.',
      },
      postedDate: '2026-08-27T04:00:00Z',
      textSha256:
        '7f701b86a020e0442fcc8d7b91ea2006afdbd01e853b926866ba364e1b518c62',
    },
    {
      id: 'USCIS-2026-0298-6240',
      stance: 'oppose',
      themes: ['students'],
      summary: {
        zh: '反对规则对赴美学生的不利影响。',
        en: "Opposes the rule's harm to students studying in the United States.",
      },
      postedDate: '2026-09-04T04:00:00Z',
      textSha256:
        '135a5954688f9bb2d4348c797cd8ed9d179cb0e39ed544dc73a51804cefd79bf',
    },
    {
      id: 'USCIS-2026-0298-2377',
      stance: 'mixed',
      themes: ['restriction', 'jobs', 'fraud'],
      summary: {
        zh: '要求更高且年度重复收费以限制滥用。',
        en: 'Requests higher recurring annual fees to constrain abuse.',
      },
      postedDate: '2026-08-26T04:00:00Z',
      textSha256:
        '129dee158c093d6246d719f78e85d3db66e219a2d67502221e8ca2abf47e7bab',
    },
    {
      id: 'USCIS-2026-0298-5037',
      stance: 'oppose',
      themes: ['legal', 'talent'],
      summary: {
        zh: '要求撤回，认为外流削弱税基并使收入模型失效。',
        en: 'Seeks withdrawal, arguing offshoring erodes the tax base and revenue model.',
      },
      postedDate: '2026-08-31T04:00:00Z',
      textSha256:
        '042eccc0a5ca357f11d5dc89ca6c64b4492c6dc77488e675f37ec87dde129498',
    },
    {
      id: 'USCIS-2026-0298-5692',
      stance: 'support',
      themes: ['restriction'],
      summary: {
        zh: '同意收费，但更希望关闭项目。',
        en: 'Agrees with the fee while preferring program closure.',
      },
      postedDate: '2026-09-02T04:00:00Z',
      textSha256:
        'ccbefe1e197345f4dc19597b58d10106257d1a3df0911a7ee92f09cdd28891c0',
    },
    {
      id: 'USCIS-2026-0298-6893',
      stance: 'oppose',
      themes: ['legal', 'burden'],
      summary: {
        zh: '要求撤回，反对跨机构成本转嫁及不可靠收入预测。',
        en: 'Seeks withdrawal over interagency cost shifting and unreliable revenue forecasts.',
      },
      postedDate: '2026-09-09T04:00:00Z',
      textSha256:
        '81014ade1de0b996f388f996730dd7e8543968be2c7fed9d4f9df71bb4d6ea0c',
    },
    {
      id: 'USCIS-2026-0298-2329',
      stance: 'unclear',
      themes: ['jobs', 'restriction', 'legal'],
      summary: {
        zh: '要求大幅涨费及汇款征税，未明确评价拟议金额。',
        en: 'Seeks steep fees and remittance taxes without evaluating the proposed amount.',
      },
      postedDate: '2026-08-26T04:00:00Z',
      textSha256:
        '3ac81f5d79eab37f60c18a0affc2467ce64e346cbbcd5e68f2696cfb64fd475b',
    },
    {
      id: 'USCIS-2026-0298-7201',
      stance: 'oppose',
      themes: ['legal', 'burden', 'students'],
      summary: {
        zh: '要求撤回和延长评论期，指出小企业及毕业生受损。',
        en: 'Seeks withdrawal and a longer comment period, citing small-firm and graduate harms.',
      },
      postedDate: '2026-09-10T04:00:00Z',
      textSha256:
        '892fb7ff0aae9edacd68075979f41b810fd6e764e3fb5be386f61d1ab053f156',
    },
    {
      id: 'USCIS-2026-0298-6446',
      stance: 'oppose',
      themes: ['burden', 'talent', 'students'],
      summary: {
        zh: '反对高费阻碍初创企业投资年轻人才。',
        en: 'Opposes the high fee as a barrier to startups investing in young talent.',
      },
      postedDate: '2026-09-08T04:00:00Z',
      textSha256:
        'ae19d61ba92925543122a116792378bb16d5c47c5ed3a196d3dfffb60ffd9b9f',
    },
    {
      id: 'USCIS-2026-0298-5411',
      stance: 'oppose',
      themes: ['talent'],
      summary: {
        zh: '警告政策破坏美国科技及人工智能竞争力。',
        en: 'Warns the policy would damage U.S. technology and AI competitiveness.',
      },
      postedDate: '2026-09-01T04:00:00Z',
      textSha256:
        'a1fac855e7effa73a59b971adb0b6fe230251606c2418ee2c0084962a66cb245',
    },
    {
      id: 'USCIS-2026-0298-4173',
      stance: 'oppose',
      themes: ['talent', 'burden'],
      summary: {
        zh: '反对关闭人才通道并要求充分经济评估。',
        en: 'Opposes barriers to talent and calls for fuller economic review.',
      },
      postedDate: '2026-08-28T04:00:00Z',
      textSha256:
        'f81efcf19c9bbd86eb2bc995b0a881474c59fb390154e23073052d4bb4cb046e',
    },
    {
      id: 'USCIS-2026-0298-6232',
      stance: 'oppose',
      themes: ['students', 'talent', 'burden', 'fraud', 'tailored', 'jobs'],
      summary: {
        zh: '要求撤回统一费，改用按工资和地区定向监管。',
        en: 'Seeks withdrawal of the flat fee in favor of wage- and location-based oversight.',
      },
      postedDate: '2026-09-04T04:00:00Z',
      textSha256:
        '4aaaf4d99c3b89aba473fb70546583fc85fa71a5d336944de913790cb129a8e4',
    },
    {
      id: 'USCIS-2026-0298-3460',
      stance: 'oppose',
      themes: ['students', 'talent', 'burden'],
      summary: {
        zh: '认为收费将美国培养的科技人才送往竞争国家。',
        en: 'Argues the fee would transfer U.S.-trained scientific talent to competitors.',
      },
      postedDate: '2026-08-27T04:00:00Z',
      textSha256:
        '32f65be0ba30e8338f0075d8be2b705a68a43160ed35e04249b1753e5e76f0a2',
    },
    {
      id: 'USCIS-2026-0298-1436',
      stance: 'oppose',
      themes: ['legal', 'students', 'talent', 'burden', 'tailored'],
      summary: {
        zh: '要求撤回并提出较低费用及美国研究生豁免。',
        en: 'Seeks withdrawal and proposes lower fees and U.S. graduate-degree exemptions.',
      },
      postedDate: '2026-08-26T04:00:00Z',
      textSha256:
        'e1432f3860846b359ee32c2abf5193cd3ed8bf9a88dda829679298452a4dc32b',
    },
    {
      id: 'USCIS-2026-0298-7790',
      stance: 'oppose',
      themes: ['burden', 'talent', 'jobs', 'legal', 'tailored'],
      summary: {
        zh: '要求撤回或合理修改，避免小企业及美国团队受损。',
        en: 'Seeks withdrawal or proportional revision to protect small firms and U.S. teams.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '39b275263229c03a54018b755cb338dce8fca086d336254e2242e14fc287ed7d',
    },
    {
      id: 'USCIS-2026-0298-3770',
      stance: 'mixed',
      themes: ['tailored', 'restriction', 'jobs', 'students'],
      summary: {
        zh: '要求按市场工资两倍浮动收费并扩大适用范围。',
        en: 'Requests a floating fee at twice market salary and broader coverage.',
      },
      postedDate: '2026-08-28T04:00:00Z',
      textSha256:
        '703c2bdac82fdf2f420dd1d083b5b7623d82b1c353d84c326590847601264959',
    },
    {
      id: 'USCIS-2026-0298-7183',
      stance: 'support',
      themes: ['jobs'],
      summary: {
        zh: '支持费用促进美国经济及就业。',
        en: 'Supports the fee for the U.S. economy and job market.',
      },
      postedDate: '2026-09-10T04:00:00Z',
      textSha256:
        'ff36613ed0e9e71ddd78b780484c1f2fc80f68e90fb8af0d5c345bc40d25d385',
    },
    {
      id: 'USCIS-2026-0298-6526',
      stance: 'oppose',
      themes: ['legal'],
      summary: {
        zh: '要求撤回并逐项证明跨系统成本的授权及关联。',
        en: 'Seeks withdrawal and itemized authority and nexus for system-wide costs.',
      },
      postedDate: '2026-09-08T04:00:00Z',
      textSha256:
        'b71c206a9c94ba086ba775586d67b3d646aeba15eb1168ffa71da4d37d5715a4',
    },
    {
      id: 'USCIS-2026-0298-7465',
      stance: 'support',
      themes: ['jobs'],
      summary: {
        zh: '支持收费鼓励招聘本土人才。',
        en: 'Supports the fee to encourage domestic recruitment.',
      },
      postedDate: '2026-09-10T04:00:00Z',
      textSha256:
        'b453c5cd8d53f3bf1b150b2907c2d38c0cb6ad93c355848d0ddf369a9b8717a0',
    },
    {
      id: 'USCIS-2026-0298-7612',
      stance: 'oppose',
      themes: ['burden'],
      summary: {
        zh: '反对将高技能签证变为巨额收费工具。',
        en: 'Opposes turning skilled-worker visas into a large revenue charge.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '7d1b11ec18442dff3d7f1eaed0f01d045f53ae01d636116a071b003f47f2c2fd',
    },
    {
      id: 'USCIS-2026-0298-2850',
      stance: 'oppose',
      themes: ['legal', 'burden', 'talent', 'students'],
      summary: {
        zh: '反对提案并要求延长评论期及完整经济数据。',
        en: 'Opposes the proposal and seeks a longer comment period and full economic data.',
      },
      postedDate: '2026-08-27T04:00:00Z',
      textSha256:
        'b025737052b4b1fad67a666f4ae3d97b7c1fb7bb7971895d14b00fdb852f3a10',
    },
    {
      id: 'USCIS-2026-0298-6215',
      stance: 'oppose',
      themes: ['burden', 'talent'],
      summary: {
        zh: '反对进一步涨费，要求保持可负担的人才通道。',
        en: 'Opposes further increases and seeks affordable access to global talent.',
      },
      postedDate: '2026-09-04T04:00:00Z',
      textSha256:
        'db5c75a662ac51d0ab39c4c8539a21bb9443ec3679eeb77b979a38bc2dd62470',
    },
    {
      id: 'USCIS-2026-0298-2403',
      stance: 'oppose',
      themes: ['students', 'talent', 'burden', 'fraud', 'tailored', 'jobs'],
      summary: {
        zh: '认为高费损害经济，主张直接打击工资及雇主欺诈。',
        en: 'Argues the fee harms the economy and favors direct action against wage and employer fraud.',
      },
      postedDate: '2026-08-26T04:00:00Z',
      textSha256:
        'b7a1235b57e085b1857fb46e6eef4fa2766c82a4034f0a9d87c4c610144dd068',
    },
    {
      id: 'USCIS-2026-0298-2689',
      stance: 'oppose',
      themes: ['talent', 'students', 'legal', 'burden', 'jobs'],
      summary: {
        zh: '要求撤回，警告外包及美国培养人才流失。',
        en: 'Seeks withdrawal over offshoring and loss of U.S.-trained talent.',
      },
      postedDate: '2026-08-27T04:00:00Z',
      textSha256:
        'c66252d9e250bc03e90dc170aca8da903ed137a6367aa80e80979774fd2535c7',
    },
    {
      id: 'USCIS-2026-0298-3199',
      stance: 'oppose',
      themes: ['jobs', 'fraud', 'restriction'],
      summary: {
        zh: '认为收费无效，要求取消工作签证。',
        en: 'Rejects the fee as ineffective and calls for ending work visas.',
      },
      postedDate: '2026-08-27T04:00:00Z',
      textSha256:
        'b3c076d06e80af6b28614e9ee072754cb3e620de1eeb168d98bc456c53e1bb15',
    },
    {
      id: 'USCIS-2026-0298-0123',
      stance: 'unclear',
      themes: [],
      summary: {
        zh: '未表达政策立场，仅表示不愿阅读。',
        en: 'Expresses unwillingness to read without a policy position.',
      },
      postedDate: '2026-08-25T04:00:00Z',
      textSha256:
        '17093e9db23ac5d412b81db3d81bf42b5a5ea248c73b28cee3a3e016e163bdb0',
    },
    {
      id: 'USCIS-2026-0298-3676',
      stance: 'oppose',
      themes: ['burden', 'students', 'talent'],
      summary: {
        zh: '反对高费阻碍小企业及国际毕业生就业。',
        en: 'Opposes barriers to small employers and international-graduate employment.',
      },
      postedDate: '2026-08-28T04:00:00Z',
      textSha256:
        '8d385020e4b7422c15dd3ad3181280330668df92aa8a5b89c2027e7509666602',
    },
    {
      id: 'USCIS-2026-0298-3797',
      stance: 'support',
      themes: [],
      summary: {
        zh: '明确赞成拟议修改。',
        en: 'Explicitly favors the proposed changes.',
      },
      postedDate: '2026-08-28T04:00:00Z',
      textSha256:
        '701855d42470fbd51c974f584556446a0968f6d3497b3d54e9860d85931a4fbc',
    },
    {
      id: 'USCIS-2026-0298-4603',
      stance: 'oppose',
      themes: ['talent', 'jobs', 'legal'],
      summary: {
        zh: '认为收费会推动外包，要求补充分析后再决定。',
        en: 'Argues the fee would encourage offshoring and demands further analysis before finalization.',
      },
      postedDate: '2026-08-31T04:00:00Z',
      textSha256:
        'a280dd693542a2630f49a6b4f52744986a1c259d22d58c315dcc47d0515b2883',
    },
    {
      id: 'USCIS-2026-0298-7548',
      stance: 'oppose',
      themes: ['burden', 'talent', 'fraud', 'tailored'],
      summary: {
        zh: '反对损害小企业招聘，并主张加强非法用工核查。',
        en: 'Opposes small-business recruitment harms and favors stronger unlawful-employment checks.',
      },
      postedDate: '2026-09-10T04:00:00Z',
      textSha256:
        '8ec4d07f4f393ad75cc7260495e9d6910f088a8108c47f3bf3ef29aae653b94c',
    },
    {
      id: 'USCIS-2026-0298-6904',
      stance: 'oppose',
      themes: ['legal', 'burden'],
      summary: {
        zh: '要求撤回并延长评论期，质疑权限及收入依据。',
        en: 'Seeks withdrawal and a longer comment period over authority and revenue assumptions.',
      },
      postedDate: '2026-09-09T04:00:00Z',
      textSha256:
        '005481229d1b0098b41c1096468c51f249f7ee1fe2119aaf912cb4ad670f98d0',
      sourceNote: {
        zh: '正文保留未填写的模板提示；分类依据已有论述，未补写缺失内容。',
        en: 'The body retains an unfilled template prompt; classification uses the supplied arguments without inventing missing content.',
      },
    },
    {
      id: 'USCIS-2026-0298-2991',
      stance: 'unclear',
      themes: ['jobs', 'students'],
      summary: {
        zh: '呼吁按能力平等招聘，未明确评价收费。',
        en: 'Calls for equal merit-based hiring without evaluating the fee.',
      },
      postedDate: '2026-08-27T04:00:00Z',
      textSha256:
        '7f8ba7452d7fd0651333f477b955b21a33606644ead0ab68315db633d6f3ce72',
    },
    {
      id: 'USCIS-2026-0298-6688',
      stance: 'oppose',
      themes: ['talent', 'jobs'],
      summary: {
        zh: '反驳岗位一对一替代假设，警告投资和工作外移。',
        en: 'Rejects one-for-one job substitution assumptions and warns of relocation.',
      },
      postedDate: '2026-09-08T04:00:00Z',
      textSha256:
        '1b852dbcc52c9d9230a92014a49972f884483804a5c97144a39ddc60e77be4a8',
    },
    {
      id: 'USCIS-2026-0298-8312',
      stance: 'unclear',
      themes: ['fraud'],
      summary: {
        zh: '指控虚假学历和项目滥用，未表明收费立场。',
        en: 'Alleges false credentials and program abuse without a fee position.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '8c9ba9eb4526ecdbaa1bfcd11f13ddbc7dce909cf4ee4d5bedd84bee0a5354ca',
    },
    {
      id: 'USCIS-2026-0298-2445',
      stance: 'oppose',
      themes: [
        'legal',
        'burden',
        'talent',
        'students',
        'tailored',
        'jobs',
        'fraud',
      ],
      summary: {
        zh: '要求撤回，指出越权、外流及劳动者议价风险。',
        en: 'Seeks withdrawal over authority, offshoring and worker bargaining risks.',
      },
      postedDate: '2026-08-27T04:00:00Z',
      textSha256:
        '5028bd979856737339519d5cc625468bb00bb685e9f50d4842e54955de0e5006',
    },
    {
      id: 'USCIS-2026-0298-7639',
      stance: 'oppose',
      themes: ['talent', 'jobs'],
      summary: {
        zh: '认为费用无法解决本土就业问题且推动外包。',
        en: 'Argues the fee will not solve domestic employment concerns and encourages offshoring.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        'e84ba5c887d5254032eb00627a7c14fd77726ad8a2065c22954d92610be0e4cc',
    },
    {
      id: 'USCIS-2026-0298-4924',
      stance: 'support',
      themes: ['fraud', 'jobs'],
      summary: {
        zh: '认为收费减少滥用并增加美国毕业生就业。',
        en: 'Sees the fee as reducing abuse and increasing jobs for American graduates.',
      },
      postedDate: '2026-08-31T04:00:00Z',
      textSha256:
        '135df451f7e533519c276cc8c6cca4a3082f541af1a0b4c4e7e50e5596b27dfc',
    },
  ],
  commentPhase: 'open',
  commentDeadline: '2026-09-24',
  sampleSize: 200,
} satisfies CommentSample;
