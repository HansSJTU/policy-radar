import type { CommentSample } from '../public-comment-types';

export default {
  policyId: 'ead-discretion',
  documentId: 'USCIS-2026-0067-0001',
  checkedOn: '2026-09-12',
  publishedCount: 4804,
  frameSize: 4804,
  status: 'reviewed',
  sampledAt: '2026-09-12T12:27:21.632Z',
  seed: '3a4f9cdeb8e59408ec88d3f117eaddceecd5e89dc1a13e681e69fcb120f8918a',
  manifestUrl: '/comment-samples/ead-discretion-2026-09-12.json',
  scopeNote: {
    zh: '样本来自整份拟议规则的公开评论，不仅涉及本卡片强调的犯罪记录审查，也涵盖人道假释、暂缓遣返和监督令等工作许可。立场针对整份提案；主题可多选，通用工卡诉求不足以推断立场。',
    en: 'This sample covers comments on the full proposed rule, including parole, deferred-action and supervision-order work authorization, beyond the criminal-record review highlighted by this card. Stances concern the full proposal; themes overlap, and generic EAD requests alone do not establish a stance.',
  },
  themes: [
    {
      id: 'livelihood',
      zh: '家庭生计与自立',
      en: 'Livelihood and self-sufficiency',
      description: {
        zh: '工作许可对住房、医疗、家庭收入及减少救助依赖的影响。',
        en: 'Work authorization effects on housing, healthcare, household income and reliance on assistance.',
      },
    },
    {
      id: 'economy',
      zh: '雇主、税收与经济贡献',
      en: 'Employers, taxes and economic contributions',
      description: {
        zh: '劳动力、企业经营、税收与地方经济的影响。',
        en: 'Effects on staffing, business operations, taxes and local economies.',
      },
    },
    {
      id: 'humanitarian',
      zh: '人道保护与安全返乡',
      en: 'Humanitarian protection and safe return',
      description: {
        zh: '乌克兰、阿富汗及其他受保护群体的安全和保护承诺。',
        en: 'Safety and protection commitments for Ukrainian, Afghan and other protected populations.',
      },
    },
    {
      id: 'renewals',
      zh: '续期、积压与工作连续性',
      en: 'Renewals, backlogs and work continuity',
      description: {
        zh: '办理时长、年度续期、费用及过渡或豁免安排。',
        en: 'Processing times, annual renewals, fees, transitions and exemptions.',
      },
    },
    {
      id: 'everify',
      zh: 'E-Verify 与自雇限制',
      en: 'E-Verify and self-employment barriers',
      description: {
        zh: '指定雇主验证要求对小企业、自雇和就业的影响。',
        en: 'Employer verification requirements affecting small businesses, self-employment and jobs.',
      },
    },
    {
      id: 'criminal',
      zh: '逮捕记录与个别衡量',
      en: 'Arrest records and individual assessment',
      description: {
        zh: '无定罪记录、康复表现以及犯罪历史推定的公平性。',
        en: 'Non-conviction records, rehabilitation and fairness of criminal-history presumptions.',
      },
    },
    {
      id: 'discretion',
      zh: '裁量权、程序与信赖利益',
      en: 'Discretion, procedure and reliance interests',
      description: {
        zh: '裁量标准、复核、生物识别及行政法和信赖利益论点。',
        en: 'Discretionary standards, review, biometrics, administrative-law arguments and reliance interests.',
      },
    },
    {
      id: 'victims',
      zh: '犯罪受害者保护',
      en: 'Protection for crime victims',
      description: {
        zh: 'U 签证等待、暂缓遣返、工作许可及报案合作的关系。',
        en: 'U-visa waits, deferred action, work authorization and cooperation in reporting crime.',
      },
    },
  ],
  comments: [
    {
      id: 'USCIS-2026-0067-2492',
      stance: 'oppose',
      themes: ['livelihood', 'economy', 'renewals'],
      summary: {
        zh: '反对限制工卡，强调家庭与雇主需要公平、可预测的办理程序。',
        en: 'Opposes EAD restrictions and seeks fair, predictable processing for families and employers.',
      },
      postedDate: '2026-07-29T04:00:00Z',
      textSha256:
        '1deaaa455b723b73c5a5ca54c12cd8798a607b619f3c572a2ffe83121b930601',
    },
    {
      id: 'USCIS-2026-0067-2935',
      stance: 'oppose',
      themes: [
        'humanitarian',
        'livelihood',
        'renewals',
        'everify',
        'discretion',
      ],
      summary: {
        zh: '要求撤回提案，认为年度续期、E-Verify 和广泛裁量会损害阿富汗盟友及其信赖利益。',
        en: 'Seeks withdrawal, arguing annual renewals, E-Verify and broad discretion harm Afghan allies and their reliance interests.',
      },
      postedDate: '2026-07-29T04:00:00Z',
      textSha256:
        '0807bf7c4e72bcb6ef770a67d15602892d4bf2d0d04e0ffed5b0736715f7ec45',
    },
    {
      id: 'USCIS-2026-0067-0173',
      stance: 'oppose',
      themes: ['livelihood', 'economy', 'humanitarian'],
      summary: {
        zh: '支持 LET THEM WORK 倡议，反对新增合法就业障碍，强调教育、家庭和经济贡献。',
        en: 'Supports LET THEM WORK and opposes new lawful-work barriers, emphasizing education, family and economic contributions.',
      },
      postedDate: '2026-06-08T04:00:00Z',
      textSha256:
        '5b6c504276b424bf1fc1ce24711cf5116398d973a18c6c0399d5a750440765d3',
    },
    {
      id: 'USCIS-2026-0067-1876',
      stance: 'oppose',
      themes: ['economy', 'livelihood', 'renewals'],
      summary: {
        zh: '认为限制或拖延工卡会损害合法劳动力、税收与社区。',
        en: 'Argues restricting or delaying EADs harms the authorized workforce, tax revenue and communities.',
      },
      postedDate: '2026-07-20T04:00:00Z',
      textSha256:
        '5e38677b3f04d80fa9b89fa65cf92b8de52851d22febd6bd5e70f1b19725d21b',
    },
    {
      id: 'USCIS-2026-0067-2212',
      stance: 'oppose',
      themes: ['criminal', 'discretion', 'livelihood', 'renewals'],
      summary: {
        zh: 'H-4 配偶反对凭无定罪逮捕记录拒发工卡，要求保留个别衡量并减少生物识别负担。',
        en: 'An H-4 spouse opposes denial based on non-conviction arrests and seeks individualized review with fewer biometric burdens.',
      },
      postedDate: '2026-07-24T04:00:00Z',
      textSha256:
        '4c1967bd53dbf09a9d8eb352f52644d3ba7d6cdf6ac89dd9b7e28e64080f8b95',
    },
    {
      id: 'USCIS-2026-0067-3313',
      stance: 'oppose',
      themes: ['livelihood', 'economy', 'humanitarian'],
      summary: {
        zh: '反对新增就业障碍，强调失业对家庭收入和医疗保障的影响。',
        en: 'Opposes new work barriers, emphasizing loss of household income and access to medical care.',
      },
      postedDate: '2026-07-31T04:00:00Z',
      textSha256:
        'dd43f6d9fc13643a2746634fc5517c1325b27f7b8745d7b174212f3e3f04b15c',
    },
    {
      id: 'USCIS-2026-0067-1352',
      stance: 'oppose',
      themes: ['humanitarian', 'livelihood', 'economy', 'renewals'],
      summary: {
        zh: '担心新增限制和延误使乌克兰假释者失业，影响家庭照料及雇主。',
        en: 'Fears additional restrictions and delays will cost Ukrainian parolees jobs and harm family caregiving and employers.',
      },
      postedDate: '2026-07-13T04:00:00Z',
      textSha256:
        'e63ad8fcfeea4d33fd1abceff4223b34d2cfde32b4458521f484e8cf3509cb0d',
    },
    {
      id: 'USCIS-2026-0067-1245',
      stance: 'unclear',
      themes: ['livelihood', 'economy'],
      summary: {
        zh: '主张允许守法且愿意工作的人自立，同时要求福利与求职努力挂钩；未明确评价提案。',
        en: 'Favors work access for willing, law-abiding people and benefit accountability, without a clear position on this proposal.',
      },
      postedDate: '2026-07-13T04:00:00Z',
      textSha256:
        '417a789741a9dd9b8b7de547d3c1b7ecfee50f37d926d7031abfed80893e95cb',
    },
    {
      id: 'USCIS-2026-0067-2057',
      stance: 'mixed',
      themes: ['humanitarian', 'livelihood', 'economy', 'renewals', 'everify'],
      summary: {
        zh: '要求豁免现有工卡持有人、放宽 E-Verify 并简化续期，以防延误导致失业。',
        en: 'Requests exemptions for current EAD holders, E-Verify flexibility and streamlined renewals to prevent job loss.',
      },
      postedDate: '2026-07-21T04:00:00Z',
      textSha256:
        '57e07492ef8c0383216d3490abc1424923ff9f42c7afc8b9ecd92ba1e25ec49b',
    },
    {
      id: 'USCIS-2026-0067-1377',
      stance: 'oppose',
      themes: ['livelihood', 'economy', 'everify'],
      summary: {
        zh: '反对限制合法就业，特别担心自雇者和小企业难以满足 E-Verify 要求。',
        en: 'Opposes work restrictions, particularly E-Verify barriers for self-employed people and small businesses.',
      },
      postedDate: '2026-07-13T04:00:00Z',
      textSha256:
        '6570225b5d8b03e9e04728da0e2418f0651c7c052928db3a7660df65aa1a936b',
    },
    {
      id: 'USCIS-2026-0067-4599',
      stance: 'oppose',
      themes: [
        'humanitarian',
        'livelihood',
        'economy',
        'renewals',
        'discretion',
      ],
      summary: {
        zh: '要求撤回提案，认为让申请人承担政府积压后果忽视信赖利益并损害经济。',
        en: 'Seeks withdrawal, arguing that shifting agency-backlog costs to applicants disregards reliance interests and harms the economy.',
      },
      postedDate: '2026-08-04T04:00:00Z',
      textSha256:
        '199dcf02873ffa09e38b775621842c8c4a245dcbca6839bc6ae8560a2dc2d5fb',
    },
    {
      id: 'USCIS-2026-0067-2384',
      stance: 'oppose',
      themes: ['criminal', 'discretion', 'livelihood', 'renewals'],
      summary: {
        zh: '调整身份申请人反对无定罪记录推定、生物识别负担和缺乏复核，要求撤回。',
        en: 'An adjustment applicant opposes non-conviction presumptions, biometric burdens and lack of review, seeking withdrawal.',
      },
      postedDate: '2026-07-27T04:00:00Z',
      textSha256:
        '08cccd73c5e8f7d437c98416a0b1e0466ea6ce017a712a0a722d63a0d0a74151',
    },
    {
      id: 'USCIS-2026-0067-3621',
      stance: 'oppose',
      themes: ['livelihood', 'economy'],
      summary: {
        zh: '反对新增就业障碍，强调合法收入用于生活、保险和缴税。',
        en: 'Opposes additional work barriers, stressing lawful income for living costs, insurance and taxes.',
      },
      postedDate: '2026-08-03T04:00:00Z',
      textSha256:
        '2db09ea5358ee083ba4df965d1439c286db9d5b00b2d0cc5b89aa6d2363b7afa',
    },
    {
      id: 'USCIS-2026-0067-3459',
      stance: 'oppose',
      themes: ['livelihood', 'renewals'],
      summary: {
        zh: '要求撤回限制，改为简化工卡流程并减少积压。',
        en: 'Seeks withdrawal of restrictions and simpler EAD processing with reduced backlogs.',
      },
      postedDate: '2026-07-31T04:00:00Z',
      textSha256:
        '42193a182759d20cbf33a9a38d867b8d93fe7e3e8844c944fdd7f153275425d8',
    },
    {
      id: 'USCIS-2026-0067-1173',
      stance: 'oppose',
      themes: ['humanitarian', 'livelihood', 'renewals', 'everify'],
      summary: {
        zh: '主张人道假释应继续配套工作许可，反对先找工作再获许可等障碍。',
        en: 'Argues humanitarian parole should retain work access and rejects barriers such as securing work before authorization.',
      },
      postedDate: '2026-07-06T04:00:00Z',
      textSha256:
        '2b6a769a06c6506ca13f64487cfba1d58eed3db7d6683f15f910dd9faae14d72',
    },
    {
      id: 'USCIS-2026-0067-1209',
      stance: 'oppose',
      themes: ['humanitarian', 'livelihood', 'economy'],
      summary: {
        zh: '以乌克兰家庭创业和社区服务为例，要求撤回限制人道假释就业的提案。',
        en: 'Cites Ukrainian families’ businesses and community services in seeking withdrawal of humanitarian-parole work restrictions.',
      },
      postedDate: '2026-07-09T04:00:00Z',
      textSha256:
        '7192a0a6601cebf442880cc14818345dc46811c8f73d094d47c3ee3ceebe9628',
    },
    {
      id: 'USCIS-2026-0067-2296',
      stance: 'unclear',
      themes: ['humanitarian', 'livelihood', 'economy', 'renewals'],
      summary: {
        zh: '要求及时向合资格乌克兰人签发和续发工卡；未直接评价提案条款。',
        en: 'Requests timely EAD issuance and renewal for eligible Ukrainians without directly addressing the proposal.',
      },
      postedDate: '2026-07-27T04:00:00Z',
      textSha256:
        'b6b8443f9daa54685c5c7bbeeee178896f25739177aeaa80c846e9a711c7103f',
    },
    {
      id: 'USCIS-2026-0067-4676',
      stance: 'oppose',
      themes: ['humanitarian', 'livelihood', 'economy'],
      summary: {
        zh: '反对新增工卡障碍，强调战争期间家庭安全和经济自立。',
        en: 'Opposes additional EAD barriers, emphasizing family safety during war and economic independence.',
      },
      postedDate: '2026-08-04T04:00:00Z',
      textSha256:
        '36f877b059ba50be6750635b76bf8f0c928cfe2344b3f1d9da8e879601c0cbb0',
    },
    {
      id: 'USCIS-2026-0067-4516',
      stance: 'oppose',
      themes: ['humanitarian', 'livelihood', 'economy'],
      summary: {
        zh: '反对新增就业障碍，希望通过工作支付生活与医疗开支并继续纳税。',
        en: 'Opposes new work barriers and seeks employment to cover living and medical costs while paying taxes.',
      },
      postedDate: '2026-08-04T04:00:00Z',
      textSha256:
        '9087842e7da0ce906f66d5485959409a660ae0480a3c88faf5a08eaad7ac4d18',
    },
    {
      id: 'USCIS-2026-0067-0014',
      stance: 'unclear',
      themes: [],
      summary: {
        zh: '正文仅提示查看附件；附件无法取得，不能判断立场。',
        en: 'The body only points to an attachment; unavailable attachment content prevents a stance determination.',
      },
      postedDate: '2026-06-05T04:00:00Z',
      textSha256:
        'f57a02c717ada2ce922714836984bad201d137ce4ccc76a60803ff168ce5592e',
      sourceNote: {
        zh: '正文仅有附件提示；官方附件 PDF 经直接下载和网页读取均返回 HTTP 403，未能审阅。',
        en: 'Body contains only an attachment pointer; the official PDF returned HTTP 403 through direct download and web retrieval and could not be reviewed.',
      },
    },
    {
      id: 'USCIS-2026-0067-3821',
      stance: 'oppose',
      themes: ['humanitarian', 'livelihood', 'economy'],
      summary: {
        zh: '反对新增许可障碍，强调独自抚养子女者需要合法工作维持安全生活。',
        en: 'Opposes additional authorization barriers, stressing lawful work for a sole provider supporting children in safety.',
      },
      postedDate: '2026-08-03T04:00:00Z',
      textSha256:
        '587cdf8b0510fef7be3dc21ac3c8ba2365b425ecc7d439b8563cdd6b039e3e8e',
    },
    {
      id: 'USCIS-2026-0067-3882',
      stance: 'oppose',
      themes: ['humanitarian', 'livelihood', 'economy'],
      summary: {
        zh: '担心提案影响战争避难家庭，要求继续允许合法在美者工作自立。',
        en: 'Expresses concern about the proposal’s effect on war-displaced families and seeks continued lawful work access.',
      },
      postedDate: '2026-08-03T04:00:00Z',
      textSha256:
        '8763856d424e5e14532f7bd4c36fa46e93096f9e5f42dc872ddb05c397d63048',
    },
    {
      id: 'USCIS-2026-0067-4007',
      stance: 'oppose',
      themes: ['livelihood', 'economy'],
      summary: {
        zh: '反对新增就业障碍，强调家庭收入与医疗需求。',
        en: 'Opposes new work barriers, emphasizing household income and medical needs.',
      },
      postedDate: '2026-08-03T04:00:00Z',
      textSha256:
        '8e1a4c506b29a8b880c3a68decf52466656c85b40d2afb3418d53ad10bba4dac',
    },
    {
      id: 'USCIS-2026-0067-1662',
      stance: 'unclear',
      themes: ['humanitarian', 'livelihood', 'renewals'],
      summary: {
        zh: '描述等待工卡期间失业与抚养子女困难，要求尽快审理个案；未明确评价提案。',
        en: 'Describes unemployment and family hardship while waiting for EADs and requests case processing, without a clear proposal stance.',
      },
      postedDate: '2026-07-15T04:00:00Z',
      textSha256:
        '3f5b9f2bad57cbbc832d70150e1814b05f023da291f0824c4f461ec358ea3bf1',
    },
    {
      id: 'USCIS-2026-0067-2576',
      stance: 'support',
      themes: ['livelihood', 'economy'],
      summary: {
        zh: '明确支持并要求定稿，理由是希望保持合资格申请人的工作许可和家庭自立。',
        en: 'Explicitly supports finalization, citing continued work authorization for eligible applicants and household self-sufficiency.',
      },
      postedDate: '2026-07-29T04:00:00Z',
      textSha256:
        'b4ab2b10e00d5b60ceeb9664895ac161eaa9b5e761518419c244c3e7a043135b',
      sourceNote: {
        zh: '按明确的“支持”和“请定稿”编码；正文理由赞成工作许可，可能误解提案作用，未据此改写其明示立场。',
        en: 'Coded from explicit support and a request to finalize. The pro-work-access rationale may misunderstand the proposal; the expressed stance was retained.',
      },
    },
    {
      id: 'USCIS-2026-0067-1859',
      stance: 'unclear',
      themes: ['humanitarian', 'livelihood', 'economy', 'renewals'],
      summary: {
        zh: '主张乌克兰人工作许可应透明、及时，强调经济贡献；未明确支持或反对提案。',
        en: 'Seeks transparent, timely Ukrainian work authorization and emphasizes economic contributions, without a clear proposal stance.',
      },
      postedDate: '2026-07-20T04:00:00Z',
      textSha256:
        '88c990be29953810386ce0dff3da6927a974791583642cf60ea28971aaa86268',
    },
    {
      id: 'USCIS-2026-0067-3239',
      stance: 'oppose',
      themes: ['livelihood', 'economy'],
      summary: {
        zh: '要求不要限制通过合法途径入境者就业，强调减少救助依赖和社区贡献。',
        en: 'Asks against limiting work for lawful entrants, emphasizing independence from assistance and community contributions.',
      },
      postedDate: '2026-07-30T04:00:00Z',
      textSha256:
        'f0ef889f49555840ba6a8867f5dc1382eb9ac9bf071ac0883c7a7023d4db7a9c',
    },
    {
      id: 'USCIS-2026-0067-1604',
      stance: 'unclear',
      themes: ['humanitarian', 'livelihood', 'economy', 'renewals'],
      summary: {
        zh: '要求及时处理合资格乌克兰人的工卡和续期，未明确评价拟议变更。',
        en: 'Requests timely EAD processing and renewal for eligible Ukrainians without clearly evaluating the proposed changes.',
      },
      postedDate: '2026-07-14T04:00:00Z',
      textSha256:
        'cc4417f7398363d2915c29e93f86362c302a5fff17333148e203a26edc2958ff',
    },
    {
      id: 'USCIS-2026-0067-3655',
      stance: 'oppose',
      themes: ['livelihood', 'economy', 'renewals'],
      summary: {
        zh: '反对新增就业障碍，并说明长期等待工卡使多子女家庭缺乏稳定。',
        en: 'Opposes additional work barriers and describes EAD waits undermining stability for a household with children.',
      },
      postedDate: '2026-08-03T04:00:00Z',
      textSha256:
        '0f3c2dae0359605b80c9441ffdb0ceac5c20495ede160b89456003f0d2d2514a',
    },
    {
      id: 'USCIS-2026-0067-4241',
      stance: 'oppose',
      themes: ['criminal', 'discretion', 'livelihood', 'renewals'],
      summary: {
        zh: 'H-4 配偶要求撤回逮捕记录推定和不受复核的裁量安排，保留个别衡量。',
        en: 'An H-4 spouse seeks withdrawal of arrest-based presumptions and unreviewable discretion, preserving individual assessment.',
      },
      postedDate: '2026-08-03T04:00:00Z',
      textSha256:
        'b876652719a96d6fea1dafa62105a3347cb6f985678d846c7daa180eceea0040',
    },
    {
      id: 'USCIS-2026-0067-0291',
      stance: 'oppose',
      themes: ['livelihood', 'renewals'],
      summary: {
        zh: '反对拖延、涨费及限制性变更，支持保留合法工作机会。',
        en: 'Opposes delays, fee increases and restrictive changes, favoring continued lawful work access.',
      },
      postedDate: '2026-06-08T04:00:00Z',
      textSha256:
        '1e7f11bd055dcf2e2e7ce92cde55eece7e8310f2b9f085e7a71b0e29c69ad74a',
    },
    {
      id: 'USCIS-2026-0067-2369',
      stance: 'oppose',
      themes: [
        'humanitarian',
        'livelihood',
        'renewals',
        'everify',
        'discretion',
      ],
      summary: {
        zh: '要求撤回提案，认为对阿富汗盟友的续期、雇主和裁量限制违背保护承诺。',
        en: 'Seeks withdrawal, arguing renewal, employer and discretion restrictions breach protection commitments to Afghan allies.',
      },
      postedDate: '2026-07-27T04:00:00Z',
      textSha256:
        '44e5285709a01bfaf53b55f7a112854967baa0dc38976ce0eff3ec56bdcec7c0',
    },
    {
      id: 'USCIS-2026-0067-1118',
      stance: 'oppose',
      themes: ['humanitarian', 'economy', 'renewals', 'everify'],
      summary: {
        zh: '反对经济需求证明、E-Verify 雇主限制与年度续期，担心家庭及小企业受损。',
        en: 'Opposes financial-need paperwork, E-Verify employer restrictions and annual renewals as harmful to families and small businesses.',
      },
      postedDate: '2026-06-29T04:00:00Z',
      textSha256:
        '64af67a2f17b8f3865dc63233bca83e2260650d7a2613e2c996db42c8f108d66',
    },
    {
      id: 'USCIS-2026-0067-4215',
      stance: 'oppose',
      themes: [
        'humanitarian',
        'livelihood',
        'renewals',
        'everify',
        'discretion',
      ],
      summary: {
        zh: '要求撤回，强调阿富汗盟友信赖利益，并反对因政府积压失去工作许可。',
        en: 'Seeks withdrawal, stressing Afghan allies’ reliance interests and opposing work losses caused by agency backlogs.',
      },
      postedDate: '2026-08-03T04:00:00Z',
      textSha256:
        '0807bf7c4e72bcb6ef770a67d15602892d4bf2d0d04e0ffed5b0736715f7ec45',
    },
    {
      id: 'USCIS-2026-0067-3567',
      stance: 'oppose',
      themes: ['criminal'],
      summary: {
        zh: '明确反对，认为多年未再犯且已改过的人不应失去工卡资格。',
        en: 'Explicitly opposes excluding rehabilitated people with years without further offenses from EAD eligibility.',
      },
      postedDate: '2026-08-03T04:00:00Z',
      textSha256:
        'e5197f8398ac6abc206bbc40979284c2156d9cd8d73d976f34da63a80317150f',
    },
    {
      id: 'USCIS-2026-0067-0416',
      stance: 'oppose',
      themes: [
        'humanitarian',
        'livelihood',
        'renewals',
        'everify',
        'discretion',
      ],
      summary: {
        zh: '认为限制工卡违背对阿富汗盟友的承诺，要求撤回并顾及信赖利益。',
        en: 'Argues EAD restrictions break commitments to Afghan allies and seeks withdrawal with consideration of reliance interests.',
      },
      postedDate: '2026-06-08T04:00:00Z',
      textSha256:
        '0807bf7c4e72bcb6ef770a67d15602892d4bf2d0d04e0ffed5b0736715f7ec45',
    },
    {
      id: 'USCIS-2026-0067-1751',
      stance: 'oppose',
      themes: ['humanitarian', 'livelihood', 'economy', 'renewals'],
      summary: {
        zh: '反对新增就业障碍，描述续期延误对家庭、雇主和客户的影响。',
        en: 'Opposes additional work barriers and describes renewal delays affecting a family, employers and clients.',
      },
      postedDate: '2026-07-20T04:00:00Z',
      textSha256:
        '7d6b00850fc7e125831901d6a6746af75019be77f09ff2f0c42e2c77c3c95522',
    },
    {
      id: 'USCIS-2026-0067-1585',
      stance: 'unclear',
      themes: ['humanitarian', 'livelihood', 'economy', 'renewals'],
      summary: {
        zh: '请求及时办理乌克兰人的工卡以便自立，未明确评价拟议规则。',
        en: 'Requests timely Ukrainian EAD processing to remain self-supporting without clearly evaluating the proposed rule.',
      },
      postedDate: '2026-07-14T04:00:00Z',
      textSha256:
        '26ada26e79ff5c47f4c2a00b93f2339ac9b244c6a38689f03a436d57329e099c',
    },
    {
      id: 'USCIS-2026-0067-2664',
      stance: 'oppose',
      themes: ['humanitarian', 'livelihood', 'economy'],
      summary: {
        zh: '要求不限制人道项目入境者就业，强调纳税、自立和战争避难需要。',
        en: 'Asks against restricting humanitarian entrants’ work, emphasizing taxes, independence and refuge from war.',
      },
      postedDate: '2026-07-29T04:00:00Z',
      textSha256:
        'a9a1369f9388249a7a2feb5ccefaad8c459e5b195d93154101fab2fa4d5a401d',
    },
    {
      id: 'USCIS-2026-0067-2214',
      stance: 'unclear',
      themes: [],
      summary: {
        zh: '只表达对稳定、安全与生存的普遍愿望，无法判断提案立场。',
        en: 'Expresses only a general desire for stability, safety and life; a proposal stance cannot be determined.',
      },
      postedDate: '2026-07-24T04:00:00Z',
      textSha256:
        '38f118b0e889df743a68273d520ff2e2ba74e97fe3d6758c7aa8b3c8bab86f82',
    },
    {
      id: 'USCIS-2026-0067-4768',
      stance: 'oppose',
      themes: ['criminal', 'discretion'],
      summary: {
        zh: '反对无定罪逮捕记录的不利推定，要求尊重司法结果并恢复个别衡量。',
        en: 'Opposes adverse presumptions from non-conviction arrests and seeks respect for court outcomes and individualized review.',
      },
      postedDate: '2026-08-05T04:00:00Z',
      textSha256:
        'f67d61da139dbfad2fae1461cc945021414e8134097ab46711a940115226c5b4',
    },
    {
      id: 'USCIS-2026-0067-0626',
      stance: 'oppose',
      themes: [
        'humanitarian',
        'livelihood',
        'renewals',
        'everify',
        'discretion',
      ],
      summary: {
        zh: '要求撤回，认为年度续期、E-Verify 和广泛裁量危及阿富汗盟友生计。',
        en: 'Seeks withdrawal, arguing annual renewals, E-Verify and broad discretion threaten Afghan allies’ livelihoods.',
      },
      postedDate: '2026-06-09T04:00:00Z',
      textSha256:
        '0807bf7c4e72bcb6ef770a67d15602892d4bf2d0d04e0ffed5b0736715f7ec45',
    },
    {
      id: 'USCIS-2026-0067-3633',
      stance: 'mixed',
      themes: ['humanitarian', 'economy', 'renewals'],
      summary: {
        zh: '要求明确保护乌克兰假释者企业的就业连续性，并增加过渡安排以避免停业。',
        en: 'Requests explicit work-continuity protections and transition provisions for Ukrainian parolee businesses to avoid shutdowns.',
      },
      postedDate: '2026-08-03T04:00:00Z',
      textSha256:
        '61938624900f38aad3170db8255bee2c22cab62ff2fa5c3aba9574d191dd8f34',
    },
    {
      id: 'USCIS-2026-0067-0186',
      stance: 'oppose',
      themes: ['victims', 'livelihood', 'renewals', 'discretion'],
      summary: {
        zh: 'U 签证申请人要求撤回，认为年度不确定性会损害受害者康复、生计和报案合作。',
        en: 'A U-visa applicant seeks withdrawal, arguing annual uncertainty harms survivors’ recovery, livelihoods and cooperation with authorities.',
      },
      postedDate: '2026-06-08T04:00:00Z',
      textSha256:
        '2ec57eced95bf1f192e0302743ab3350179fd33f359d58f4adda8d3d6ca4596e',
    },
    {
      id: 'USCIS-2026-0067-0841',
      stance: 'oppose',
      themes: ['livelihood', 'economy'],
      summary: {
        zh: '明确反对提案，以移民家庭经历强调工作机会、教育和社区贡献。',
        en: 'Explicitly opposes the proposal, citing immigrant-family experiences of work, education and community contribution.',
      },
      postedDate: '2026-06-12T04:00:00Z',
      textSha256:
        '6f6f5af36bf22abfaaf183d15bdf331fb9e14fd2b9f76f89eeed7aa6d5849e52',
    },
    {
      id: 'USCIS-2026-0067-4311',
      stance: 'unclear',
      themes: ['humanitarian', 'livelihood', 'economy'],
      summary: {
        zh: '说明家庭依靠合法工作支付重要医疗和生活开支，但未明确评价规则。',
        en: 'Explains reliance on lawful work for essential medical and living costs without clearly evaluating the rule.',
      },
      postedDate: '2026-08-03T04:00:00Z',
      textSha256:
        '689d3b30e6b45902a798c18d7808d7a3e22c05a541c49d7cf12c2c0617554b1d',
    },
    {
      id: 'USCIS-2026-0067-1879',
      stance: 'unclear',
      themes: ['humanitarian', 'livelihood', 'economy'],
      summary: {
        zh: '希望工卡流程公平且可及，强调纳税与家庭自立；未明确评价提案。',
        en: 'Seeks a fair, accessible EAD process and emphasizes taxes and self-sufficiency, without a clear proposal stance.',
      },
      postedDate: '2026-07-20T04:00:00Z',
      textSha256:
        'd7fd0da4973f1ffee18fd5c0bb11886e06c8bae1d9e0943e2326a985e4fc05e3',
    },
    {
      id: 'USCIS-2026-0067-1161',
      stance: 'oppose',
      themes: ['humanitarian', 'livelihood', 'economy', 'renewals'],
      summary: {
        zh: '反对新增就业障碍，描述工卡长期延误妨碍专业工作和家庭支持。',
        en: 'Opposes additional work barriers and describes prolonged EAD delays preventing professional work and family support.',
      },
      postedDate: '2026-07-06T04:00:00Z',
      textSha256:
        'f024868192a2a6422cbcb89a9e14f5a9cbb8267f0de8734bf5b3de83fcd4df89',
    },
    {
      id: 'USCIS-2026-0067-0645',
      stance: 'oppose',
      themes: [
        'humanitarian',
        'livelihood',
        'renewals',
        'everify',
        'discretion',
      ],
      summary: {
        zh: '要求撤回，认为新限制忽视阿富汗盟友信赖利益并将积压成本转嫁给家庭。',
        en: 'Seeks withdrawal, arguing restrictions ignore Afghan allies’ reliance interests and shift backlog costs onto families.',
      },
      postedDate: '2026-06-09T04:00:00Z',
      textSha256:
        '0807bf7c4e72bcb6ef770a67d15602892d4bf2d0d04e0ffed5b0736715f7ec45',
    },
    {
      id: 'USCIS-2026-0067-1874',
      stance: 'oppose',
      themes: [
        'humanitarian',
        'livelihood',
        'economy',
        'renewals',
        'discretion',
      ],
      summary: {
        zh: '要求撤回，认为新增裁量层级增加积压、损害经济并使弱势工人面临剥削。',
        en: 'Seeks withdrawal, arguing added discretion worsens backlogs, harms the economy and exposes vulnerable workers to exploitation.',
      },
      postedDate: '2026-07-20T04:00:00Z',
      textSha256:
        '0535256dc0d67676c54a7892356e84e52b8225127debc86fc363af7d1f727521',
    },
  ],
  commentPhase: 'closed',
  commentDeadline: '2026-08-04',
} satisfies CommentSample;
