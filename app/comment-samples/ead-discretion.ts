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
    {
      id: 'USCIS-2026-0067-2954',
      stance: 'oppose',
      themes: [
        'humanitarian',
        'livelihood',
        'renewals',
        'everify',
        'discretion',
      ],
      summary: {
        zh: '要求撤回提案，认为年度续期、E-Verify 和广泛裁量损害阿富汗盟友生计与信赖利益。',
        en: 'Seeks withdrawal, arguing annual renewals, E-Verify and broad discretion harm Afghan allies’ livelihoods and reliance interests.',
      },
      postedDate: '2026-07-29T04:00:00Z',
      textSha256:
        '0807bf7c4e72bcb6ef770a67d15602892d4bf2d0d04e0ffed5b0736715f7ec45',
    },
    {
      id: 'USCIS-2026-0067-3397',
      stance: 'oppose',
      themes: [
        'humanitarian',
        'livelihood',
        'renewals',
        'everify',
        'discretion',
      ],
      summary: {
        zh: '要求撤回提案，认为年度续期、E-Verify 和广泛裁量损害阿富汗盟友生计与信赖利益。',
        en: 'Seeks withdrawal, arguing annual renewals, E-Verify and broad discretion harm Afghan allies’ livelihoods and reliance interests.',
      },
      postedDate: '2026-07-31T04:00:00Z',
      textSha256:
        '0807bf7c4e72bcb6ef770a67d15602892d4bf2d0d04e0ffed5b0736715f7ec45',
    },
    {
      id: 'USCIS-2026-0067-4738',
      stance: 'mixed',
      themes: ['livelihood', 'renewals'],
      summary: {
        zh: '主张工卡有效期超过一年，以保障家庭收入和医疗需要。',
        en: 'Requests work permits lasting longer than one year to protect household income and medical needs.',
      },
      postedDate: '2026-08-05T04:00:00Z',
      textSha256:
        '53bad12d13611a630d91e083c4154e070283d44a4f9f517e8811c43f8c523c00',
    },
    {
      id: 'USCIS-2026-0067-0324',
      stance: 'oppose',
      themes: ['livelihood', 'economy'],
      summary: {
        zh: '反对新增合法就业障碍，强调家庭自立及雇主和经济受益。',
        en: 'Opposes additional lawful-work barriers, emphasizing self-sufficiency and benefits to employers and the economy.',
      },
      postedDate: '2026-06-08T04:00:00Z',
      textSha256:
        '9f0e0ba2848816f60946ce53d18aa97af9af1c081ecab6e2ffa0bf73dc689791',
    },
    {
      id: 'USCIS-2026-0067-1853',
      stance: 'oppose',
      themes: [
        'humanitarian',
        'livelihood',
        'economy',
        'everify',
        'discretion',
      ],
      summary: {
        zh: '反对人道假释工卡变更，认为经济需求证明、裁量和 E-Verify 要求损害自立与就业。',
        en: 'Opposes humanitarian-parole EAD changes, arguing economic-need evidence, discretion and E-Verify requirements harm self-sufficiency and employment.',
      },
      postedDate: '2026-07-20T04:00:00Z',
      textSha256:
        'af1a4c361e35f11a4d1c752da470a39bdb844d575c427dd3b89117ad7ac7242f',
    },
    {
      id: 'USCIS-2026-0067-0793',
      stance: 'oppose',
      themes: [
        'humanitarian',
        'livelihood',
        'renewals',
        'everify',
        'discretion',
      ],
      summary: {
        zh: '要求撤回提案，认为年度续期、E-Verify 和广泛裁量损害阿富汗盟友生计与信赖利益。',
        en: 'Seeks withdrawal, arguing annual renewals, E-Verify and broad discretion harm Afghan allies’ livelihoods and reliance interests.',
      },
      postedDate: '2026-06-11T04:00:00Z',
      textSha256:
        '0807bf7c4e72bcb6ef770a67d15602892d4bf2d0d04e0ffed5b0736715f7ec45',
    },
    {
      id: 'USCIS-2026-0067-1396',
      stance: 'mixed',
      themes: ['humanitarian', 'livelihood', 'economy', 'renewals'],
      summary: {
        zh: '要求保留足够的 TPS 工卡自动延期，避免及时续期者因政府积压失业。',
        en: 'Requests sufficient TPS EAD automatic extensions to prevent job loss from agency delays after timely renewal filings.',
      },
      postedDate: '2026-07-13T04:00:00Z',
      textSha256:
        'd0fb2b7a98d5c433ab6c9ed4af9b7e81b124e77139cc089733f57aeef318d3c7',
    },
    {
      id: 'USCIS-2026-0067-0557',
      stance: 'oppose',
      themes: ['humanitarian', 'livelihood', 'economy'],
      summary: {
        zh: '反对新增就业障碍，强调战争避难者自雇、纳税和自立。',
        en: 'Opposes new work barriers, emphasizing self-employment, taxes and independence for people displaced by war.',
      },
      postedDate: '2026-06-09T04:00:00Z',
      textSha256:
        '75e63e1512c8c5f4e2165317fdfe5b1832635f9549fd4b1bba06f1468fe0ecd9',
    },
    {
      id: 'USCIS-2026-0067-4150',
      stance: 'unclear',
      themes: ['livelihood'],
      summary: {
        zh: '仅表示需要工卡养家，未评价提案。',
        en: 'States a need for work authorization to support a family without evaluating the proposal.',
      },
      postedDate: '2026-08-03T04:00:00Z',
      textSha256:
        'f122f6cd78ce956645bd98f6d6afd37c2f29d9231f557b125e28f507b0f21ed7',
    },
    {
      id: 'USCIS-2026-0067-1648',
      stance: 'oppose',
      themes: ['humanitarian', 'livelihood', 'economy', 'renewals'],
      summary: {
        zh: '反对增加工卡申请和续期难度，强调战争避难家庭生计与纳税贡献。',
        en: 'Opposes harder EAD applications and renewals, emphasizing war-displaced families’ livelihoods and tax contributions.',
      },
      postedDate: '2026-07-15T04:00:00Z',
      textSha256:
        'cc8283db4b74c5e21e2022bad037028db8056153e835147a4174375c50ce8089',
    },
    {
      id: 'USCIS-2026-0067-0384',
      stance: 'oppose',
      themes: ['livelihood'],
      summary: {
        zh: '要求不实施提案，认为其使普通移民难以养家自立。',
        en: 'Asks that the proposal not be implemented, arguing it prevents ordinary immigrants from supporting their families.',
      },
      postedDate: '2026-06-08T04:00:00Z',
      textSha256:
        'ef90f772ba32e572694032dd7f08c32e29c378d1182bb85ae9b93cdd7916a3bd',
    },
    {
      id: 'USCIS-2026-0067-4556',
      stance: 'oppose',
      themes: ['economy', 'renewals', 'everify', 'criminal', 'discretion'],
      summary: {
        zh: '要求维持现行规则，认为 E-Verify、年度工卡和犯罪记录限制增加雇主负担。',
        en: 'Seeks retention of current rules, arguing E-Verify, annual permits and criminal-record restrictions burden employers.',
      },
      postedDate: '2026-08-04T04:00:00Z',
      textSha256:
        '1b653e6cbb2e2e76c177ad8509f3cb3ad660dcfde16c0c73ad155fb620186d16',
    },
    {
      id: 'USCIS-2026-0067-2495',
      stance: 'oppose',
      themes: ['livelihood', 'economy', 'renewals'],
      summary: {
        zh: '反对新增就业障碍，强调及时工卡对家庭收入和工作连续性的重要性。',
        en: 'Opposes new work barriers and stresses timely EADs for household income and uninterrupted employment.',
      },
      postedDate: '2026-07-29T04:00:00Z',
      textSha256:
        'b74c57c0921fdcbe3fb0c2fe669cd71b22652b80e1e05669ad6d3bf1324cfe3e',
    },
    {
      id: 'USCIS-2026-0067-2921',
      stance: 'oppose',
      themes: ['livelihood', 'economy', 'renewals', 'discretion'],
      summary: {
        zh: '要求保留现有裁量工作许可，认为限制会增加家庭和行政负担，并质疑其法律依据与影响分析。',
        en: 'Seeks preservation of discretionary work access, arguing restrictions increase household and administrative burdens and questioning their legal and analytical basis.',
      },
      postedDate: '2026-07-29T04:00:00Z',
      textSha256:
        '4eb05efb62fcc6b9ccdb2aa979ca03d03cbb8e96fcf9cb1a9cdf73ab125e2c42',
    },
    {
      id: 'USCIS-2026-0067-2737',
      stance: 'unclear',
      themes: ['humanitarian', 'livelihood'],
      summary: {
        zh: '描述战争避难及无法安全返乡，要求继续工作养家；未明确评价提案。',
        en: 'Describes displacement and unsafe return, requesting continued work to support a family without a clear proposal stance.',
      },
      postedDate: '2026-07-29T04:00:00Z',
      textSha256:
        '0bbf2d657d9c43f4f556500e4711df65ef88e213ab984f7ed711422427982933',
    },
    {
      id: 'USCIS-2026-0067-1848',
      stance: 'oppose',
      themes: [
        'humanitarian',
        'livelihood',
        'economy',
        'everify',
        'discretion',
      ],
      summary: {
        zh: '反对经济需求证明和 E-Verify 限制，认为其减少就业与税收并增加家庭依赖。',
        en: 'Opposes economic-need evidence and E-Verify restrictions, arguing they reduce employment and taxes while increasing dependency.',
      },
      postedDate: '2026-07-20T04:00:00Z',
      textSha256:
        'ea2d1d2c2aff61bc8ac263c10fd0dcd8cb9f38d2dd4aba3c354d5a24ab4092b8',
    },
    {
      id: 'USCIS-2026-0067-2165',
      stance: 'unclear',
      themes: [],
      summary: {
        zh: '赞成移民多样性并批评入境限制，但未明确评价工卡提案。',
        en: 'Favors immigrant diversity and criticizes entry restrictions without clearly evaluating the EAD proposal.',
      },
      postedDate: '2026-07-24T04:00:00Z',
      textSha256:
        '87184968ecc603d5dcbf40006dd30d139eb527d5d4432a7a92c6b5c1a5d84930',
    },
    {
      id: 'USCIS-2026-0067-4813',
      stance: 'oppose',
      themes: ['humanitarian', 'livelihood', 'economy', 'renewals'],
      summary: {
        zh: '要求避免新增就业障碍，强调人道假释者和 TPS 持有人的自立与稳定。',
        en: 'Asks against new work barriers, emphasizing independence and stability for humanitarian parolees and TPS holders.',
      },
      postedDate: '2026-08-05T04:00:00Z',
      textSha256:
        '843d7845b7d4ed08324bc062fbb9efabe698a23cfa738eca36c9bc4c1b7c4ba9',
    },
    {
      id: 'USCIS-2026-0067-4410',
      stance: 'unclear',
      themes: [],
      summary: {
        zh: '仅泛谈证件与稳定，无法判断提案立场。',
        en: 'Discusses documents and stability in general; a proposal stance cannot be determined.',
      },
      postedDate: '2026-08-04T04:00:00Z',
      textSha256:
        'c109a11e143cd1b907ad03dcfd2a38b0e4b42371b93b29042bff75c0a2c76d15',
    },
    {
      id: 'USCIS-2026-0067-0381',
      stance: 'oppose',
      themes: ['economy'],
      summary: {
        zh: '反对限制工作许可的规则，认为其会加剧医务人员短缺和就医困难。',
        en: 'Opposes the work-restricting rule, arguing it worsens medical staffing shortages and access to care.',
      },
      postedDate: '2026-06-08T04:00:00Z',
      textSha256:
        'b2f5eabb021d3ac5041ed5e09bde5a1f0b99a113a2797af046cd575835f86e1a',
    },
    {
      id: 'USCIS-2026-0067-0827',
      stance: 'oppose',
      themes: ['livelihood', 'economy', 'criminal', 'discretion'],
      summary: {
        zh: '要求撤回提案，反对以无定罪逮捕记录限制工作并强调家庭和雇主损失。',
        en: 'Seeks withdrawal, opposing non-conviction arrest restrictions and stressing harm to families and employers.',
      },
      postedDate: '2026-06-12T04:00:00Z',
      textSha256:
        'f7cae1e63aaf30d178360415eca33e88059859823f1ffc6d8b4ef388faa7458a',
    },
    {
      id: 'USCIS-2026-0067-3394',
      stance: 'oppose',
      themes: [
        'humanitarian',
        'livelihood',
        'renewals',
        'everify',
        'discretion',
      ],
      summary: {
        zh: '要求撤回提案，认为年度续期、E-Verify 和广泛裁量损害阿富汗盟友生计与信赖利益。',
        en: 'Seeks withdrawal, arguing annual renewals, E-Verify and broad discretion harm Afghan allies’ livelihoods and reliance interests.',
      },
      postedDate: '2026-07-31T04:00:00Z',
      textSha256:
        '0807bf7c4e72bcb6ef770a67d15602892d4bf2d0d04e0ffed5b0736715f7ec45',
    },
    {
      id: 'USCIS-2026-0067-2173',
      stance: 'unclear',
      themes: ['humanitarian'],
      summary: {
        zh: '主张欢迎逃离危险的移民，未明确评价工作许可提案。',
        en: 'Favors welcoming immigrants fleeing danger without clearly evaluating the work-authorization proposal.',
      },
      postedDate: '2026-07-24T04:00:00Z',
      textSha256:
        'ceaa55c86adc34fd2d9f0764aa900806e56b96768ac17747815a37f3ef07618f',
    },
    {
      id: 'USCIS-2026-0067-0117',
      stance: 'unclear',
      themes: ['humanitarian', 'livelihood', 'economy'],
      summary: {
        zh: '主张保留人道假释者工作机会以自立纳税，但未明确评价拟议变更。',
        en: 'Favors continued work access for humanitarian parolees to support themselves and pay taxes, without clearly evaluating proposed changes.',
      },
      postedDate: '2026-06-08T04:00:00Z',
      textSha256:
        '699704862d527b974668cd368a5a3809b17fb4ce89812c4ab59189ac1e6f4738',
    },
    {
      id: 'USCIS-2026-0067-3372',
      stance: 'oppose',
      themes: ['humanitarian', 'livelihood', 'economy', 'renewals'],
      summary: {
        zh: '反对增加工卡申请和续期障碍，强调专业工人及雇主需要稳定许可。',
        en: 'Opposes added EAD application and renewal barriers, emphasizing stable authorization for skilled workers and employers.',
      },
      postedDate: '2026-07-31T04:00:00Z',
      textSha256:
        '64902837d14673ded32baf57a73b85288a20b21202cac5773a3da1cf75ffaca0',
    },
    {
      id: 'USCIS-2026-0067-0364',
      stance: 'oppose',
      themes: [
        'humanitarian',
        'livelihood',
        'renewals',
        'everify',
        'discretion',
      ],
      summary: {
        zh: '要求撤回提案，认为年度续期、E-Verify 和广泛裁量损害阿富汗盟友生计与信赖利益。',
        en: 'Seeks withdrawal, arguing annual renewals, E-Verify and broad discretion harm Afghan allies’ livelihoods and reliance interests.',
      },
      postedDate: '2026-06-08T04:00:00Z',
      textSha256:
        '0807bf7c4e72bcb6ef770a67d15602892d4bf2d0d04e0ffed5b0736715f7ec45',
    },
    {
      id: 'USCIS-2026-0067-1764',
      stance: 'unclear',
      themes: ['humanitarian', 'livelihood', 'renewals'],
      summary: {
        zh: '描述重新假释获批后仍因工卡延误失业，要求及时续期者工作不中断；未直接评价提案。',
        en: 'Describes job loss from EAD delays after re-parole approval and seeks continuity after timely renewal, without directly evaluating the proposal.',
      },
      postedDate: '2026-07-20T04:00:00Z',
      textSha256:
        '0f2c9b035fba8e62861ef6f5e1bf60c0e56edd464152225470b7de6e25acb94c',
    },
    {
      id: 'USCIS-2026-0067-1949',
      stance: 'oppose',
      themes: ['livelihood', 'economy', 'renewals'],
      summary: {
        zh: '要求撤回提案，认为限制合法工作损害家庭和经济，并要求及时审理。',
        en: 'Seeks withdrawal, arguing work restrictions harm families and the economy, and requests timely processing.',
      },
      postedDate: '2026-07-20T04:00:00Z',
      textSha256:
        '286f74a4d6c61823f4bde650c64d66a21e4b225123f22f75c61a2ae79ee36d12',
    },
    {
      id: 'USCIS-2026-0067-2518',
      stance: 'unclear',
      themes: ['humanitarian', 'livelihood', 'economy'],
      summary: {
        zh: '支持 LET THEM WORK 和合法就业自立，但未明确评价提案限制。',
        en: 'Supports LET THEM WORK and lawful employment for self-sufficiency without clearly evaluating the proposal’s restrictions.',
      },
      postedDate: '2026-07-29T04:00:00Z',
      textSha256:
        'faaceeb73e76aa014a38b9aaee6f0357c7cbbb55816c4e06069a30ebbe540b61',
    },
    {
      id: 'USCIS-2026-0067-0423',
      stance: 'oppose',
      themes: [
        'humanitarian',
        'livelihood',
        'renewals',
        'everify',
        'discretion',
      ],
      summary: {
        zh: '要求撤回提案，认为年度续期、E-Verify 和广泛裁量损害阿富汗盟友生计与信赖利益。',
        en: 'Seeks withdrawal, arguing annual renewals, E-Verify and broad discretion harm Afghan allies’ livelihoods and reliance interests.',
      },
      postedDate: '2026-06-08T04:00:00Z',
      textSha256:
        '0807bf7c4e72bcb6ef770a67d15602892d4bf2d0d04e0ffed5b0736715f7ec45',
    },
    {
      id: 'USCIS-2026-0067-4319',
      stance: 'oppose',
      themes: ['humanitarian', 'livelihood', 'economy', 'renewals'],
      summary: {
        zh: '要求撤回提案，强调重新假释后的工卡延误及新增限制危及家庭与小企业。',
        en: 'Seeks withdrawal, stressing that post-re-parole EAD delays and added restrictions threaten families and small businesses.',
      },
      postedDate: '2026-08-03T04:00:00Z',
      textSha256:
        '3bf86c312552311cde97caefd704d0ff3f4301e8ad7fbdc2324cde65f184edc8',
    },
    {
      id: 'USCIS-2026-0067-0245',
      stance: 'oppose',
      themes: ['livelihood', 'economy'],
      summary: {
        zh: '反对实施限制合法就业的行政障碍，强调家庭住房开支与经济贡献。',
        en: 'Opposes administrative barriers restricting lawful employment, emphasizing household housing costs and economic contributions.',
      },
      postedDate: '2026-06-08T04:00:00Z',
      textSha256:
        '2831b7ef2e446807b6c2b388f7105abac7c5ca09693670bad4fbe384c61eacfe',
    },
    {
      id: 'USCIS-2026-0067-0951',
      stance: 'oppose',
      themes: [
        'humanitarian',
        'livelihood',
        'renewals',
        'everify',
        'discretion',
      ],
      summary: {
        zh: '要求撤回提案，认为年度续期、E-Verify 和广泛裁量损害阿富汗盟友生计与信赖利益。',
        en: 'Seeks withdrawal, arguing annual renewals, E-Verify and broad discretion harm Afghan allies’ livelihoods and reliance interests.',
      },
      postedDate: '2026-06-15T04:00:00Z',
      textSha256:
        '0807bf7c4e72bcb6ef770a67d15602892d4bf2d0d04e0ffed5b0736715f7ec45',
    },
    {
      id: 'USCIS-2026-0067-1059',
      stance: 'oppose',
      themes: ['economy', 'discretion'],
      summary: {
        zh: '明确反对资格变更，认为提案成本超过效益且加重合法申请人负担。',
        en: 'Explicitly opposes eligibility changes, arguing costs outweigh benefits and burden lawful applicants.',
      },
      postedDate: '2026-06-23T04:00:00Z',
      textSha256:
        'ad9185e9b7c59da76af63845e18031d13312d6c31b003ac2f442e1bfcad5d327',
    },
    {
      id: 'USCIS-2026-0067-3143',
      stance: 'oppose',
      themes: ['criminal', 'discretion', 'livelihood', 'economy', 'renewals'],
      summary: {
        zh: '要求撤回无定罪逮捕推定和不受复核的裁量安排，强调家庭及雇主信赖利益。',
        en: 'Seeks withdrawal of non-conviction arrest presumptions and unreviewable discretion, stressing families’ and employers’ reliance interests.',
      },
      postedDate: '2026-07-30T04:00:00Z',
      textSha256:
        'd2a8303bc5b3ae8a364d8550a375549b543f4e285c59b9c64cecf397cce8cbac',
    },
    {
      id: 'USCIS-2026-0067-1561',
      stance: 'unclear',
      themes: ['humanitarian', 'livelihood', 'economy', 'renewals'],
      summary: {
        zh: '要求及时办理乌克兰人的工卡和续期，强调安全返乡困难及经济贡献；未明确评价提案。',
        en: 'Requests timely Ukrainian EAD processing and renewals, emphasizing unsafe return and economic contributions, without a clear proposal stance.',
      },
      postedDate: '2026-07-14T04:00:00Z',
      textSha256:
        'b6b8443f9daa54685c5c7bbeeee178896f25739177aeaa80c846e9a711c7103f',
    },
    {
      id: 'USCIS-2026-0067-2053',
      stance: 'oppose',
      themes: ['humanitarian', 'livelihood', 'economy', 'renewals'],
      summary: {
        zh: '认为限制或拖延工卡违背人道假释目的，要求保留工作以维持家庭生计。',
        en: 'Argues EAD restrictions or delays conflict with humanitarian parole and seeks continued work access for family support.',
      },
      postedDate: '2026-07-21T04:00:00Z',
      textSha256:
        '568f6c9ffe69bd910d938147a59ed4fcf2868543ee0a1ed64091235431ddca98',
    },
    {
      id: 'USCIS-2026-0067-3240',
      stance: 'unclear',
      themes: ['humanitarian', 'livelihood', 'economy', 'renewals'],
      summary: {
        zh: '要求及时办理乌克兰人的工卡和续期，强调安全返乡困难及经济贡献；未明确评价提案。',
        en: 'Requests timely Ukrainian EAD processing and renewals, emphasizing unsafe return and economic contributions, without a clear proposal stance.',
      },
      postedDate: '2026-07-30T04:00:00Z',
      textSha256:
        'b6b8443f9daa54685c5c7bbeeee178896f25739177aeaa80c846e9a711c7103f',
    },
    {
      id: 'USCIS-2026-0067-2382',
      stance: 'oppose',
      themes: ['criminal', 'discretion', 'livelihood'],
      summary: {
        zh: '反对依据未经定罪的指控拒发工卡，要求撤回相关条款并尊重正当程序。',
        en: 'Opposes EAD denials based on unproven allegations and seeks withdrawal of those provisions to protect due process.',
      },
      postedDate: '2026-07-27T04:00:00Z',
      textSha256:
        'd3257bb5e2c37c7b2dcb0f4c687b026a0bf4235a30cc5c9b396a40d5b7ccedb8',
    },
    {
      id: 'USCIS-2026-0067-3566',
      stance: 'mixed',
      themes: ['criminal', 'discretion'],
      summary: {
        zh: '建议针对可信身份或金融欺诈证据加强跨部门调查，同时坚持风险导向的个别审查并保护合法申请人。',
        en: 'Proposes coordinated safeguards for credible identity or financial fraud while requiring risk-based individual review and protection of legitimate applicants.',
      },
      postedDate: '2026-08-03T04:00:00Z',
      textSha256:
        'd0109bb783924a0045a984f956c57b180c9899bf033f5e923c8430f3e1a4f487',
    },
    {
      id: 'USCIS-2026-0067-3801',
      stance: 'oppose',
      themes: ['livelihood', 'economy'],
      summary: {
        zh: '反对新增就业障碍，强调家庭照料安排依赖稳定的合法工作收入。',
        en: 'Opposes new work barriers, stressing that family caregiving depends on stable lawful earnings.',
      },
      postedDate: '2026-08-03T04:00:00Z',
      textSha256:
        '16963964b5b69b2e2f33e4f696b910d4b719870cf379b3a716fd7b7b7abe182b',
    },
    {
      id: 'USCIS-2026-0067-0083',
      stance: 'unclear',
      themes: [],
      summary: {
        zh: '仅支持合法在美者工作，未表达对提案的立场。',
        en: 'Only supports lawful work by people legally in the United States, without expressing a proposal stance.',
      },
      postedDate: '2026-06-08T04:00:00Z',
      textSha256:
        '5b31a97848a706e978989b9fb2fa05910df96f59dd875238394eff95833b85d7',
    },
    {
      id: 'USCIS-2026-0067-2536',
      stance: 'oppose',
      themes: ['livelihood', 'economy'],
      summary: {
        zh: '反对新增合法就业障碍，强调家庭、雇主与地方经济受益。',
        en: 'Opposes new lawful-work barriers, emphasizing benefits to families, employers and local economies.',
      },
      postedDate: '2026-07-29T04:00:00Z',
      textSha256:
        'ba954689a28e9c4a1a432d5ea820e1d79bb9526721d7049272bbaacafd21508f',
    },
    {
      id: 'USCIS-2026-0067-1413',
      stance: 'unclear',
      themes: ['humanitarian', 'livelihood', 'renewals'],
      summary: {
        zh: '描述证件到期及续期延误导致失业和学业困难，请求尽快办理；未明确评价提案。',
        en: 'Describes expired documents and renewal delays causing job and education difficulties, requesting faster processing without a clear proposal stance.',
      },
      postedDate: '2026-07-13T04:00:00Z',
      textSha256:
        'b7b9764525a2ffd099170715517fce516e5bcbb41dbaf98b8b0a9e9ce1fb267b',
    },
    {
      id: 'USCIS-2026-0067-2682',
      stance: 'oppose',
      themes: ['humanitarian', 'livelihood', 'economy', 'renewals'],
      summary: {
        zh: '反对新增就业障碍，担心工卡丧失或延误破坏战争避难家庭的稳定。',
        en: 'Opposes new work barriers, fearing EAD loss or delay will undermine stability for a war-displaced family.',
      },
      postedDate: '2026-07-29T04:00:00Z',
      textSha256:
        'a0ce0b0c9465b02cba4f7fe59d436a70adb153dc5aed2995a54ceee1b4e9d495',
    },
    {
      id: 'USCIS-2026-0067-1180',
      stance: 'oppose',
      themes: ['humanitarian', 'livelihood', 'economy'],
      summary: {
        zh: '反对新增合法就业障碍，要求保留乌克兰假释者工作与纳税的机会。',
        en: 'Opposes new lawful-work barriers and seeks continued work and tax contributions by Ukrainian parolees.',
      },
      postedDate: '2026-07-06T04:00:00Z',
      textSha256:
        '08f444e170a8057104682fbdf99ad196c088d5ecfa77337cd85a06c576aea066',
    },
    {
      id: 'USCIS-2026-0067-0800',
      stance: 'oppose',
      themes: [
        'humanitarian',
        'livelihood',
        'renewals',
        'everify',
        'discretion',
      ],
      summary: {
        zh: '要求撤回提案，认为年度续期、E-Verify 和广泛裁量损害阿富汗盟友生计与信赖利益。',
        en: 'Seeks withdrawal, arguing annual renewals, E-Verify and broad discretion harm Afghan allies’ livelihoods and reliance interests.',
      },
      postedDate: '2026-06-11T04:00:00Z',
      textSha256:
        '0807bf7c4e72bcb6ef770a67d15602892d4bf2d0d04e0ffed5b0736715f7ec45',
    },
    {
      id: 'USCIS-2026-0067-4273',
      stance: 'unclear',
      themes: ['humanitarian', 'livelihood', 'economy'],
      summary: {
        zh: '支持工作许可并说明医疗和生活支出需要，但未明确评价提案。',
        en: 'Supports work access and describes medical and living expenses without clearly evaluating the proposal.',
      },
      postedDate: '2026-08-03T04:00:00Z',
      textSha256:
        '13ee6b6cf89f9bfa33521c4f619f3956374049ec1c7b78bb9fb6bfaccdee20a7',
    },
    {
      id: 'USCIS-2026-0067-3776',
      stance: 'unclear',
      themes: ['livelihood', 'economy', 'renewals'],
      summary: {
        zh: '支持帮助移民取得工卡以养家纳税和填补职位，未明确评价提案。',
        en: 'Favors helping immigrants obtain EADs to support themselves, pay taxes and fill jobs, without a clear proposal stance.',
      },
      postedDate: '2026-08-03T04:00:00Z',
      textSha256:
        '204d72f004615dd3ed0753734394dcefa22a7091d12597ae2d73e471f3d4d414',
    },
    {
      id: 'USCIS-2026-0067-2788',
      stance: 'unclear',
      themes: ['humanitarian', 'livelihood', 'economy', 'renewals'],
      summary: {
        zh: '要求加快乌克兰人工卡办理，描述延误对家庭和小企业的影响；未直接评价提案。',
        en: 'Requests faster Ukrainian EAD processing and describes delays affecting families and small businesses, without directly evaluating the proposal.',
      },
      postedDate: '2026-07-29T04:00:00Z',
      textSha256:
        '9db1d6a40ea05d766c81cd07abcda50cd4b15b314bddfc03101f1eb74717ab6e',
    },
  ],
  commentPhase: 'closed',
  commentDeadline: '2026-08-04',
  sampleSize: 100,
  expandedAt: '2026-09-12T12:42:28.157Z',
} satisfies CommentSample;
