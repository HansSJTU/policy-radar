import type { CommentSample } from '../public-comment-types';

export default {
  policyId: 'grace-period',
  documentId: 'USCIS-2026-0364-0001',
  checkedOn: '2026-09-12',
  publishedCount: 526,
  frameSize: 526,
  status: 'reviewed',
  sampledAt: '2026-09-12T12:27:21.096Z',
  seed: '7870361dc317ce8e3b24c30fb36617239fc4fd7c841280b51bc5bbb35a58eeb6',
  manifestUrl: '/comment-samples/grace-period-2026-09-12.json',
  themes: [
    {
      id: 'transition',
      zh: '求职与有序离境',
      en: 'Job transitions and orderly departure',
      description: {
        zh: '讨论求职、转雇主申请及依法离境所需时间。',
        en: 'Time needed for hiring, transfer filings, and lawful departure.',
      },
    },
    {
      id: 'family',
      zh: '家属、教育与健康',
      en: 'Families, education and health',
      description: {
        zh: '涉及配偶、子女教育、医疗及情绪压力。',
        en: 'Effects on spouses, children, schooling, healthcare, and emotional wellbeing.',
      },
    },
    {
      id: 'finances',
      zh: '住房与财务善后',
      en: 'Housing and financial obligations',
      description: {
        zh: '涉及房屋、租约、资产处置与搬迁成本。',
        en: 'Homes, leases, asset disposal, and relocation costs.',
      },
    },
    {
      id: 'talent',
      zh: '雇主用人与人才竞争',
      en: 'Employer needs and talent retention',
      description: {
        zh: '讨论企业招聘、经济贡献与国际人才竞争。',
        en: 'Employer hiring, economic contributions, and competition for talent.',
      },
    },
    {
      id: 'temporary',
      zh: '临时签证与工作绑定',
      en: 'Temporary status tied to employment',
      description: {
        zh: '主张临时工作结束后应结束停留，限制转换身份延续。',
        en: 'Arguments for ending stays when employment ends and limiting status bridges.',
      },
    },
    {
      id: 'domestic',
      zh: '本土就业与工资',
      en: 'Domestic jobs and wages',
      description: {
        zh: '涉及美国劳动者就业、工资及招聘公平的主张。',
        en: 'Claims concerning U.S. workers’ jobs, wages, and fair hiring.',
      },
    },
    {
      id: 'enforcement',
      zh: '反滥用与执法',
      en: 'Abuse prevention and enforcement',
      description: {
        zh: '涉及欺诈指控、合规监管或定向执法。',
        en: 'Allegations of fraud, compliance oversight, or targeted enforcement.',
      },
    },
    {
      id: 'legal',
      zh: '法律衔接与规则依据',
      en: 'Legal coherence and rule justification',
      description: {
        zh: '讨论可携带性、信赖利益、行政负担及论证充分性。',
        en: 'Portability, reliance interests, administrative workload, and adequacy of justification.',
      },
    },
    {
      id: 'alternatives',
      zh: '期限调整与群体保护',
      en: 'Alternative periods and protections',
      description: {
        zh: '提出不同期限、祖父条款或积压群体保护。',
        en: 'Different durations, grandfathering, or protections for backlogged workers.',
      },
    },
  ],
  comments: [
    {
      id: 'USCIS-2026-0364-0409',
      stance: 'oppose',
      themes: ['transition', 'family', 'finances', 'talent'],
      summary: {
        zh: '要求保留60天，以便完成招聘和签证手续并保护家庭稳定。',
        en: 'Seeks to retain 60 days for hiring and visa filings while protecting family stability.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '391bdde5251142e6f29626aff71941c29a60a5630be0f37588f236e61f8475dd',
    },
    {
      id: 'USCIS-2026-0364-0027',
      stance: 'support',
      themes: ['temporary'],
      summary: {
        zh: '认为工作结束应终止相应停留，反对以宽限期反复寻找担保延续临时身份。',
        en: 'Argues that employment ending should end the corresponding stay rather than enable repeated sponsorship bridges.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        'cc0ad9fc6da5e4f3d8bc058e32c496717eccc3b0d735ec6da54692c31f355713',
    },
    {
      id: 'USCIS-2026-0364-0285',
      stance: 'oppose',
      themes: ['transition', 'family', 'finances'],
      summary: {
        zh: '认为搬迁、财务善后和儿童转学需要合理时间，要求保留宽限期。',
        en: 'Requests retention because relocation, financial arrangements, and school transitions take time.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '6c5ea7366695971302587e4daca15cb4436c180c907bac2ffcd13941a1906cc7',
    },
    {
      id: 'USCIS-2026-0364-0354',
      stance: 'oppose',
      themes: ['transition', 'family', 'finances', 'legal', 'enforcement'],
      summary: {
        zh: '要求保留过渡期以便家庭有序离境或维持合法身份，并以定向措施处理滥用。',
        en: 'Seeks retention for orderly family departure or lawful status transitions, with targeted measures against misuse.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '90143d6eedcd6020e85e89d7d89603a246adcf4065816f464a961b6422635d6d',
    },
    {
      id: 'USCIS-2026-0364-0165',
      stance: 'oppose',
      themes: ['transition', 'family', 'finances', 'talent', 'legal'],
      summary: {
        zh: '质疑取消的实践可行性及行政减负理由，强调家庭信赖与企业转雇主手续。',
        en: 'Questions practical feasibility and administrative savings, emphasizing family reliance and employer transfer filings.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '42a1f197f2f1d01f7f058f01c9fd2911fd9ab791ce1a6155bb6c26d2fd769590',
    },
    {
      id: 'USCIS-2026-0364-0479',
      stance: 'support',
      themes: ['domestic'],
      summary: {
        zh: '支持取消，认为应优先保障美国人的工作机会。',
        en: 'Supports repeal to prioritize jobs for Americans.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        'd826b78ec2e02cfe27ea5f78445c551b95908b917b572a3ada6163a1ff3746e3',
    },
    {
      id: 'USCIS-2026-0364-0129',
      stance: 'oppose',
      themes: ['family', 'alternatives'],
      summary: {
        zh: '认为60天必不可少，希望延至120天，并诉及长期绿卡等待对家庭的影响。',
        en: 'Calls 60 days necessary, seeks 120 days, and describes family hardship during a long green-card wait.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '8851799458b61699895e4768d811a8578f92eda8ec43ba519dffc4327d3bb6b0',
    },
    {
      id: 'USCIS-2026-0364-0242',
      stance: 'oppose',
      themes: ['finances', 'domestic', 'legal', 'alternatives'],
      summary: {
        zh: '要求撤回，质疑信赖利益及工资影响分析；退而要求保护已在境内者。',
        en: 'Requests withdrawal, challenges reliance and wage analysis, and alternatively seeks grandfathering.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        'a4223144cd7866b3c2f2e153bfa916fb84de820f4276e75386a9d9ad21dcd8f9',
    },
    {
      id: 'USCIS-2026-0364-0236',
      stance: 'oppose',
      themes: [],
      summary: {
        zh: '直接表示反对本规则，未提供理由。',
        en: 'States opposition to the rule without reasons.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '190ec4cc4660270be8bbcfec968f68f0fb5089f795e4f800c2bf5dfda6b1c3fd',
    },
    {
      id: 'USCIS-2026-0364-0510',
      stance: 'oppose',
      themes: ['transition', 'talent', 'enforcement'],
      summary: {
        zh: '认为取消会将科技与科研人才推向其他国家，主张保留并定向查处滥用。',
        en: 'Argues repeal would drive scientific talent abroad; seeks retention and targeted enforcement.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        'efb6f7b174ee9d701aed38bb691ef6a17d67b920e613538a58395b6580c21233',
    },
    {
      id: 'USCIS-2026-0364-0340',
      stance: 'oppose',
      themes: ['family', 'alternatives'],
      summary: {
        zh: '认为长期等待绿卡的家庭被迫迁离会伤害子女及未来世代，负面后果更大。',
        en: 'Argues uprooting long-settled, backlogged families would harm children and future generations.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '0f311fae26fd9bde604eb01020520332350e51069c28bcccc06bda5429ada115',
    },
    {
      id: 'USCIS-2026-0364-0368',
      stance: 'support',
      themes: ['domestic', 'enforcement'],
      summary: {
        zh: '支持采取该措施，并声称移民劳动力压低工资，要求加强遣返。',
        en: 'Supports the measure, alleges immigrant labor depresses wages, and calls for stronger removals.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        'fff633cbb799bdfe27aa805400ead43f7e210d50f3fdfbf9a69154e26f4a7414',
    },
    {
      id: 'USCIS-2026-0364-0405',
      stance: 'support',
      themes: ['temporary', 'domestic', 'enforcement'],
      summary: {
        zh: '支持涵盖TN等类别的取消方案，认为临时签证应回归临时用途，并提出资质欺诈指控。',
        en: 'Supports repeal across covered categories including TN, stresses temporary visas, and alleges credential fraud.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        'a90d99b319b8ae5e5e43f937960d3bc3b04931b33c58dec538a8909d15b30a8f',
    },
    {
      id: 'USCIS-2026-0364-0472',
      stance: 'oppose',
      themes: ['family', 'finances', 'legal', 'transition'],
      summary: {
        zh: '要求保留时间处理子女教育、房产和持续医疗，并认为取消会增加紧急申请。',
        en: 'Seeks time for schooling, property, and medical care, and argues repeal would increase emergency filings.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '51063e568622c20d874e42c0dc933b0169edef30bf438bb37b2b8a503c128c64',
    },
    {
      id: 'USCIS-2026-0364-0376',
      stance: 'oppose',
      themes: ['family', 'finances', 'transition', 'talent'],
      summary: {
        zh: '认为立即搬离不现实，会伤害儿童、家庭财务和企业招聘，要求保留60天。',
        en: 'Seeks retention because immediate relocation harms children, household finances, and employer hiring.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '202fa6b8d36fc2d7965ca1fea3e31914512502ac1059c45f12b8663a5293e178',
    },
    {
      id: 'USCIS-2026-0364-0216',
      stance: 'oppose',
      themes: ['family', 'finances', 'transition'],
      summary: {
        zh: '强调非自愿失业对整个家庭的影响，要求保留60天或足够酌情过渡时间。',
        en: 'Emphasizes family consequences of involuntary job loss and seeks retention or sufficient discretionary transition time.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        'd8292ba3daeeb87700e70fb23979b3662ee3247fb7f1edb4eec87d5ae3bead73',
    },
    {
      id: 'USCIS-2026-0364-0362',
      stance: 'support',
      themes: ['domestic'],
      summary: {
        zh: '支持取消，认为有助于本土应届毕业生就业，并陈述招聘不公的个人看法。',
        en: 'Supports repeal to improve domestic graduates’ job prospects and describes perceived hiring unfairness.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '5d6d320b25c48c8848fe3c19dd0b207f3c3f07b95226a2ecea3a6871effe799b',
    },
    {
      id: 'USCIS-2026-0364-0037',
      stance: 'oppose',
      themes: ['family', 'finances', 'transition', 'talent'],
      summary: {
        zh: '要求保留宽限期，使非自愿失业家庭有时间完成招聘手续并避免子女生活突变。',
        en: 'Seeks retention so families facing involuntary job loss can complete hiring and avoid abrupt disruption to children.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '149fa600ea5c86c2332e66e91382f33b63fd07f5398523f7b90e70db55e3f481',
    },
    {
      id: 'USCIS-2026-0364-0101',
      stance: 'unclear',
      themes: [],
      summary: {
        zh: '正文仅指向附件；附件未能读取，无法判断立场。',
        en: 'Body only refers to an attachment; the unavailable attachment prevents a stance determination.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        'f57a02c717ada2ce922714836984bad201d137ce4ccc76a60803ff168ce5592e',
      sourceNote: {
        zh: '官方附件 attachment_1.pdf 经网页读取失败且下载返回403；保留原抽样，正文无实质内容。',
        en: 'Official attachment_1.pdf failed web retrieval and returned HTTP 403 on download; original selection retained, with no substantive body.',
      },
    },
    {
      id: 'USCIS-2026-0364-0346',
      stance: 'oppose',
      themes: ['transition', 'finances'],
      summary: {
        zh: '认为有限过渡期有助于公平求职及有序处理房产和搬迁，并非不公平优势。',
        en: 'Defends a limited period for fair job competition, property arrangements, and orderly relocation.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '5947717bbeeab6356132c41eaffd8fde2d2b399371f1019f37764e8d14f9045b',
    },
    {
      id: 'USCIS-2026-0364-0091',
      stance: 'unclear',
      themes: [],
      summary: {
        zh: '仅泛泛赞扬工作，未明确说明对取消提案的立场。',
        en: 'Offers generic praise without identifying a position on repeal.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '316d44b7dda994770c5c0fa023add5dd21e36481ca727936fcdeb8232fd815d5',
    },
    {
      id: 'USCIS-2026-0364-0168',
      stance: 'support',
      themes: ['domestic', 'enforcement'],
      summary: {
        zh: '支持取消，认为企业应改善招聘留任并优先本土劳动力，同时建议加强H-4企业合规监管。',
        en: 'Supports repeal, calls for domestic hiring and retention, and proposes stronger oversight of H-4 business activity.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        'ccd041d38c364944da22557a7b3207673cfa6a7ac74a895164d39548a87035d1',
    },
    {
      id: 'USCIS-2026-0364-0231',
      stance: 'mixed',
      themes: ['alternatives', 'family', 'finances', 'legal', 'transition'],
      summary: {
        zh: '批评取消对绿卡积压家庭的影响，具体要求为已批I-140者保留宽限期或豁免。',
        en: 'Criticizes effects on backlogged families and specifically seeks retained grace periods or grandfathering for approved I-140 holders.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        'baf0a214b0ae045595b743be194eea639ce198f985dee23a25a115726f7ecf9e',
    },
    {
      id: 'USCIS-2026-0364-0093',
      stance: 'oppose',
      themes: ['alternatives', 'family', 'finances', 'transition'],
      summary: {
        zh: '要求延长而非取消宽限期，尤其保护已批I-140且有子女的长期居民。',
        en: 'Seeks a longer rather than eliminated grace period, especially for long-term residents with approved I-140s and children.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '2aacafe623f7f80d384b3f7a39d5df7d126104929517a01923cb9cc7f5e04034',
    },
    {
      id: 'USCIS-2026-0364-0125',
      stance: 'oppose',
      themes: ['transition', 'family', 'finances'],
      summary: {
        zh: '要求保留60天，让劳动者求职并为家庭完成离境前的生活善后。',
        en: 'Seeks 60 days for job searches and families’ practical departure arrangements.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '25e5ad0ea553a712e0b2ed649062ba91db0d3c21dd7693993976488d65affd17',
    },
    {
      id: 'USCIS-2026-0364-0202',
      stance: 'oppose',
      themes: ['transition', 'talent', 'legal'],
      summary: {
        zh: '认为取消妨碍专业招聘、损害创新并增加海外签证处理负担，要求撤回。',
        en: 'Requests withdrawal, citing disrupted specialist hiring, innovation losses, and more overseas visa processing.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '228214ed97a0b924f7c4c0566efcd77158e455e55136380342fb463b833a140c',
    },
    {
      id: 'USCIS-2026-0364-0522',
      stance: 'oppose',
      themes: ['family', 'finances', 'transition'],
      summary: {
        zh: '以有幼儿和住房的长期家庭为例，要求保留求职或有序离境的时间。',
        en: 'Describes an established household with young children and a home, seeking time to find work or depart orderly.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '8ef2dbd9b59c3322978559b291a41f2194ee52877d0fa16c648b26f5191e254e',
    },
    {
      id: 'USCIS-2026-0364-0463',
      stance: 'oppose',
      themes: ['finances', 'family', 'transition'],
      summary: {
        zh: '强调搬家、租约处罚和心理压力，要求保留宽限期以便履行义务。',
        en: 'Emphasizes moving logistics, lease penalties, and emotional distress, seeking time to settle obligations.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        'c075547ed75b5b18f60c38b1bc9ecee4f5ea672634559bee300ae9b3f6d7b88d',
    },
    {
      id: 'USCIS-2026-0364-0154',
      stance: 'oppose',
      themes: ['family', 'talent', 'legal', 'alternatives'],
      summary: {
        zh: '要求撤回，质疑信赖和可携带性分析，并提出较短期限或已批I-140者保护作为替代。',
        en: 'Requests withdrawal, challenges reliance and portability analysis, and offers shorter periods or I-140 protections as alternatives.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        'a0912c0560826677c4c3fe7ee9d12a1cdd7cbf464fe08c2ad14d17735e5b9476',
    },
    {
      id: 'USCIS-2026-0364-0517',
      stance: 'support',
      themes: ['temporary', 'domestic', 'enforcement'],
      summary: {
        zh: '支持工作结束即结束相应身份，并声称招聘网络和身份转换损害本土毕业生机会。',
        en: 'Supports ending status with employment and alleges hiring networks and status switches disadvantage domestic graduates.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        'b8b97de21579ab953d59d39ee11624314a46040b76025949e3435ca936d06e65',
    },
    {
      id: 'USCIS-2026-0364-0433',
      stance: 'oppose',
      themes: ['transition', 'talent'],
      summary: {
        zh: '认为宽限期让市场检验人才需求，有利于企业和经济，要求保留。',
        en: 'Seeks retention so employer demand can retain skilled workers and benefit the economy.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '27e5c01ad4aeb5ae3b738e13ae1183b4d8e3a85bf478ce92d430b39dc6df9edb',
    },
    {
      id: 'USCIS-2026-0364-0013',
      stance: 'oppose',
      themes: ['transition', 'talent'],
      summary: {
        zh: '担忧取消使转职和裁员后求职更困难，并降低美国对人才的吸引力。',
        en: 'Warns repeal would complicate job changes and layoffs and reduce U.S. attractiveness to talent.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '15d6ce24afcaabd171b09533efd2a666a5512a62259bee3e1085a661a3588e5c',
    },
    {
      id: 'USCIS-2026-0364-0054',
      stance: 'oppose',
      themes: ['transition', 'talent', 'enforcement'],
      summary: {
        zh: '要求保留必要求职时间和企业招聘灵活性，以较温和措施解决合规问题。',
        en: 'Seeks retention for job searches and employer flexibility, with less restrictive compliance measures.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '3ce73536fd8b9c4a0c4a988cf450ebb3cf23dc7a2c579875283fffebff83e41d',
    },
    {
      id: 'USCIS-2026-0364-0287',
      stance: 'oppose',
      themes: ['transition', 'family', 'talent'],
      summary: {
        zh: '要求保留并提高宽限期可预测性，避免家庭不确定性及企业人才损失。',
        en: 'Seeks retention and predictability to reduce family uncertainty and employer talent losses.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '7262bc447c74a662a6abf117e4b8cd8c91733bc381f48e3d0acdcf075e4ec443',
    },
    {
      id: 'USCIS-2026-0364-0345',
      stance: 'oppose',
      themes: ['family', 'finances'],
      summary: {
        zh: '认为取消会让子女和家庭承担巨大压力与资产损失，无法一日完成迁离。',
        en: 'Warns of pressure on children and households and asset losses from an impractical one-day departure.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        'b1862dcc4522a1241de52699517a146b27cd54bcd85ad071b5893d2901b9aa31',
    },
    {
      id: 'USCIS-2026-0364-0413',
      stance: 'oppose',
      themes: ['transition', 'talent'],
      summary: {
        zh: '指出招聘及转签手续需时间，要求保留以免美国企业流失境内人才。',
        en: 'Seeks retention because hiring and transfer filings take time and employers could lose available talent.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        'def0e887ee441a6435729df1ec66d3a7ec9410ce890094be81cd3891a01c5fb9',
    },
    {
      id: 'USCIS-2026-0364-0111',
      stance: 'oppose',
      themes: ['transition', 'family', 'domestic', 'enforcement'],
      summary: {
        zh: '要求保留60天，同时加强以证据为基础的反欺诈、工资及公平招聘监管。',
        en: 'Supports retaining 60 days alongside evidence-based fraud enforcement, wage protections, and fair hiring.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '8e33427f73ffaaa230ea0b638882ddaa22d7ee3c1c415099850120db26c3a6bf',
    },
    {
      id: 'USCIS-2026-0364-0452',
      stance: 'mixed',
      themes: ['alternatives', 'transition'],
      summary: {
        zh: '赞成取消60天，但要求保留4至5天办理离境善后。',
        en: 'Supports removing 60 days but requests four to five days to wind up affairs.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        'c5583dfba741482fbfdb9acad60340b72bc2f92d0e8fdaaf2edea92fca22374d',
    },
    {
      id: 'USCIS-2026-0364-0339',
      stance: 'support',
      themes: ['temporary', 'domestic', 'enforcement'],
      summary: {
        zh: '支持取消，认为工作结束后不应继续竞争本土岗位，并声称项目存在欺诈。',
        en: 'Supports repeal to end post-employment competition for domestic jobs and alleges program fraud.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        'c39d334e81322fb874dfa12641032a39f83d943e21f6a197f8c0f43bec3e7bbc',
    },
    {
      id: 'USCIS-2026-0364-0193',
      stance: 'oppose',
      themes: ['transition', 'family', 'finances', 'talent', 'legal'],
      summary: {
        zh: '要求保留，认为取消损害家庭、企业和地方经济，行政便利不足以支持其代价。',
        en: 'Seeks retention, arguing family, employer, and local economic harms outweigh administrative convenience.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '79e020ef4a4bcecec6fe663e7a7e8bb4b5569d058c83120e51d20125f9456c24',
    },
    {
      id: 'USCIS-2026-0364-0227',
      stance: 'oppose',
      themes: ['family', 'finances', 'transition', 'domestic'],
      summary: {
        zh: '从家属角度要求保留，强调儿童稳定、搬迁时间及劳动者离开不良工作环境的能力。',
        en: 'Seeks retention for dependents’ stability, relocation time, and workers’ ability to leave poor conditions.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '3860eb364ad5a3b6fb6176149296f3c8920ffd19d42de937ea08a2654d5d8631',
    },
    {
      id: 'USCIS-2026-0364-0304',
      stance: 'support',
      themes: [],
      summary: {
        zh: '直接要求取消60天宽限期，未提供理由。',
        en: 'Directly requests elimination of the 60-day period without reasons.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '2b675351f1cdf88c4d18e91c67ccc44b6e5be9f831392042ff2b95c38f187bcf',
    },
    {
      id: 'USCIS-2026-0364-0104',
      stance: 'oppose',
      themes: ['family', 'finances', 'transition'],
      summary: {
        zh: '强调家庭、子女和财务义务不能一夜清理，要求保留合理过渡期。',
        en: 'Seeks retention because family, schooling, and financial obligations cannot be resolved overnight.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '779428494eab1aa62f35a556b89ac6126a440f70b56c3a787d5ca8ebcc268493',
    },
    {
      id: 'USCIS-2026-0364-0248',
      stance: 'oppose',
      themes: ['transition', 'talent'],
      summary: {
        zh: '反对取消，认为合法工作并贡献社区者应有时间寻找新机会。',
        en: 'Opposes repeal, seeking time for lawful workers who contribute to communities to find new opportunities.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        'd73b6d0c35472f1c888738ac6d075d20862ab512ae76b45302fd9aeac77a10aa',
    },
    {
      id: 'USCIS-2026-0364-0088',
      stance: 'unclear',
      themes: ['legal'],
      summary: {
        zh: '要求明确本规则与H-1B法定可携带性的关系，未明确支持或反对取消。',
        en: 'Requests a clear interpretation of statutory H-1B portability without stating a position on repeal.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        'db884f534cd471f58575154abf65fcd2eb100cc069b00176ac85bfdd91cd155c',
    },
    {
      id: 'USCIS-2026-0364-0357',
      stance: 'support',
      themes: ['domestic'],
      summary: {
        zh: '要求取消，并表达对签证依赖型劳动力制度的负面看法。',
        en: 'Requests repeal and expresses a negative view of visa-dependent labor arrangements.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '5a36da4f9a2c45b1826a6da26cc03548512bb5e3952a31f28acc56b84db390a1',
    },
    {
      id: 'USCIS-2026-0364-0300',
      stance: 'mixed',
      themes: ['finances', 'family', 'alternatives', 'legal'],
      summary: {
        zh: '有条件称欢迎取消，却质疑住房信赖损失，要求政府补偿房产并限制未来购房。',
        en: 'Conditionally welcomes repeal while challenging property reliance losses and demanding government compensation and future purchase restrictions.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '1232920d04a46c78125bb3778ccffb411bd293adef9a465dc282179121bfdfc6',
    },
    {
      id: 'USCIS-2026-0364-0138',
      stance: 'oppose',
      themes: ['transition', 'family', 'finances', 'talent', 'enforcement'],
      summary: {
        zh: '要求保留，主张针对欺诈和违法雇主执法，避免合法家庭和企业受损。',
        en: 'Seeks retention and targeted action against fraud and unlawful employers to avoid harming lawful families and businesses.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '6edb309e1afc89a4838bfbc5d5b50877791ae60b9eb6bde06b4b9d421285cfde',
    },
    {
      id: 'USCIS-2026-0364-0350',
      stance: 'oppose',
      themes: ['transition', 'legal', 'alternatives'],
      summary: {
        zh: '要求保留现有60天，质疑零天与可携带性及信赖利益的冲突；退而建议30天。',
        en: 'Seeks current 60 days, questions effects on portability and reliance, and alternatively suggests 30 days.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        'b627a425d5dd63b19d833a156c5fbc700334a96a3daff52283b87eced8ab8663',
    },
    {
      id: 'USCIS-2026-0364-0465',
      stance: 'support',
      themes: ['domestic', 'enforcement'],
      summary: {
        zh: '要求立即取消并进一步限制外籍用工，声称相关渠道损害美国就业且存在滥用。',
        en: 'Requests immediate repeal and wider foreign-worker restrictions, alleging job displacement and abuse.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        'ecd8920c88f1bdd3b56c9710ef5e36dc1d909bff707265331ce6d74bf665f86e',
    },
    {
      id: 'USCIS-2026-0364-0402',
      stance: 'oppose',
      themes: ['transition', 'family', 'finances', 'talent'],
      summary: {
        zh: '要求撤回，认为取消会损害企业招聘、人才竞争及家庭稳定。',
        en: 'Requests withdrawal, citing employer hiring, talent competitiveness, and family stability.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        'bd261b12039ce86ce21f0d9f2b34576d7c9ea1cb944f3eeb26c0c0db2d3e366e',
    },
    {
      id: 'USCIS-2026-0364-0145',
      stance: 'oppose',
      themes: ['transition', 'family', 'legal'],
      summary: {
        zh: '要求保留，认为行政减负不足以抵消家庭及转职损害。',
        en: 'Seeks retention, arguing administrative savings do not justify family and job-transition harms.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        'a0e9e81cbb407534abd3b0ecf33c0f10fcfd7c5261f4e89a3ae56e96f9990334',
    },
    {
      id: 'USCIS-2026-0364-0062',
      stance: 'oppose',
      themes: ['transition', 'family'],
      summary: {
        zh: '认为60天求职已很困难，取消会进一步伤害家庭和子女教育。',
        en: 'Argues job searches are already difficult within 60 days and repeal would harm families and schooling.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '0894013755765b7af6bc1a2fe174a81601475dda58bf1d487f7b222e87c04abf',
    },
    {
      id: 'USCIS-2026-0364-0169',
      stance: 'oppose',
      themes: ['family', 'finances', 'transition', 'talent', 'alternatives'],
      summary: {
        zh: '要求保留，强调长期积压家庭、子女及有序离境和招聘所需时间。',
        en: 'Seeks retention for backlogged families, children, orderly departure, and employer hiring.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        'f2cf8b727ea7f02a0cb45d2f8878c3614bfa9b825b8e0217de0f679ad34eed0c',
    },
    {
      id: 'USCIS-2026-0364-0387',
      stance: 'support',
      themes: ['temporary', 'enforcement'],
      summary: {
        zh: '支持取消，主张工作结束即离境，并声称身份转换和中介用工存在滥用。',
        en: 'Supports repeal and departure when work ends, alleging abuse of status changes and staffing arrangements.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '2b8e07290bcceed2fbca0c7fa21e36d0f667acfdabae6c1ab00490897b5c9e2f',
    },
    {
      id: 'USCIS-2026-0364-0147',
      stance: 'oppose',
      themes: ['family', 'finances', 'transition'],
      summary: {
        zh: '要求保留，认为家庭、教育和财务善后无法立即完成。',
        en: 'Seeks retention because family, schooling, and financial arrangements cannot be completed immediately.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        'ddaa98c4382fac4318a244fdf5ca31959455be1dfd4de51481f1f16c338ace7f',
    },
    {
      id: 'USCIS-2026-0364-0071',
      stance: 'oppose',
      themes: ['transition', 'family', 'finances', 'talent', 'enforcement'],
      summary: {
        zh: '要求保留并加强定向监管，以保障招聘时间、家庭和财务稳定。',
        en: 'Seeks retention with targeted safeguards to protect hiring time, families, and financial stability.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        'f156f55b275866d4a6340a57b704bec45138f821a1d88c7e448dfeeb2373f3ee',
    },
    {
      id: 'USCIS-2026-0364-0175',
      stance: 'oppose',
      themes: [],
      summary: {
        zh: '正文简短表达反对，未提供实质理由；附件未能读取。',
        en: 'Body briefly expresses opposition without substantive reasons; attachment could not be read.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '1afafb1d5812d520cf440773aa912dd2f51a1449c5190be81f1a173de3ac5a40',
      sourceNote: {
        zh: '正文“Appose”按反对的拼写错误理解；官方附件网页读取失败且下载返回403，未能核实附件内容。',
        en: 'Body “Appose” is interpreted as a misspelling of opposition; official attachment web retrieval failed and download returned 403, so its contents could not be verified.',
      },
    },
    {
      id: 'USCIS-2026-0364-0254',
      stance: 'oppose',
      themes: ['family'],
      summary: {
        zh: '反对政府推进该规则，认为会影响众多家庭。',
        en: 'Opposes proceeding with the rule because of its effects on families.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        'a2b0799639fda996c133c86bb93545981251bd92562e67083c8412f3e76435ba',
    },
    {
      id: 'USCIS-2026-0364-0450',
      stance: 'oppose',
      themes: [
        'transition',
        'talent',
        'finances',
        'enforcement',
        'alternatives',
      ],
      summary: {
        zh: '要求保留并考虑延至90天，同时加强反欺诈监管。',
        en: 'Seeks retention and consideration of 90 days alongside stronger fraud enforcement.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '7085af9f4ac440e6df03f4dab36ce91d1324e9099d1e1d7c30f27421a4aeb114',
    },
    {
      id: 'USCIS-2026-0364-0320',
      stance: 'oppose',
      themes: ['transition', 'talent'],
      summary: {
        zh: '要求撤回，强调招聘、LCA和转雇主申请需要数周。',
        en: 'Requests withdrawal, emphasizing weeks needed for hiring, LCAs, and employer-transfer petitions.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '62132211f402816676071260429e2d4df013f75dbfa4f17b603c8d76b039acb3',
    },
    {
      id: 'USCIS-2026-0364-0194',
      stance: 'oppose',
      themes: ['family', 'finances', 'transition', 'talent'],
      summary: {
        zh: '认为60天有助于儿童转学和出行、财产善后及人才留用。',
        en: 'Defends 60 days for children’s school and travel arrangements, financial affairs, and talent retention.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '7fe5e1373c67211c3bc121dc36104e98949a71f382c6a1e1231034d68254621a',
    },
    {
      id: 'USCIS-2026-0364-0011',
      stance: 'oppose',
      themes: ['family', 'legal', 'finances', 'talent'],
      summary: {
        zh: '要求保留，强调持续医疗需求、信赖利益和紧急申请负担。',
        en: 'Seeks retention, emphasizing continuity of medical care, reliance interests, and emergency filing burdens.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '1e7bb454c3448ee51f780d30489095e406934d456697ef62900d654075a7f11b',
    },
    {
      id: 'USCIS-2026-0364-0343',
      stance: 'oppose',
      themes: ['transition', 'talent', 'alternatives'],
      summary: {
        zh: '要求保留以适应招聘周期，避免长期积压人才和企业受损。',
        en: 'Seeks retention to accommodate hiring timelines and protect backlogged workers and employers.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '958041258ef7610c6e423dd98e3501b5d84be882d2d5905254fc44972e02c39d',
    },
    {
      id: 'USCIS-2026-0364-0112',
      stance: 'support',
      themes: ['domestic', 'enforcement'],
      summary: {
        zh: '支持取消宽限期并进一步取消相关用工项目，声称其损害本土招聘公平。',
        en: 'Supports grace-period repeal and wider program abolition, alleging unfairness to domestic applicants.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '01e080941c0cb66f71e73fc32589b06cbc0d72dd04c2194de888eff662a11f24',
    },
    {
      id: 'USCIS-2026-0364-0423',
      stance: 'support',
      themes: ['temporary', 'legal', 'enforcement'],
      summary: {
        zh: '支持取消，认为可强化身份与就业联系并降低行政负担。',
        en: 'Supports repeal to tie status to employment and reduce administrative burden.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        'd3012854e0e83b66df0e37976ad0efd6977a6e4af8686dfe13bb10d989e042a6',
    },
    {
      id: 'USCIS-2026-0364-0118',
      stance: 'unclear',
      themes: ['domestic', 'enforcement'],
      summary: {
        zh: '要求取消H-1B和H-4 EAD并加强限制，但未明确评论宽限期取消。',
        en: 'Calls for H-1B and H-4 EAD abolition and tighter restrictions without addressing grace-period repeal specifically.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '30c09337ac41d8b6bee8e03d9d3cb21103966f07980fcea36b477a54796aa034',
    },
    {
      id: 'USCIS-2026-0364-0283',
      stance: 'oppose',
      themes: ['transition', 'family', 'talent'],
      summary: {
        zh: '要求保留，认为合理转职窗口有利于家庭和美国雇主留才。',
        en: 'Seeks retention because a reasonable transition window helps families and employer talent retention.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '9e8d17910db86ba13bbe7c0fcbdce8881cf9898827ca8310ea914a5402ed7991',
    },
    {
      id: 'USCIS-2026-0364-0122',
      stance: 'oppose',
      themes: ['transition', 'family', 'legal', 'alternatives'],
      summary: {
        zh: '反对取消，退而要求保护非自愿失业者并设置祖父条款和过渡安排。',
        en: 'Opposes repeal and alternatively seeks involuntary-layoff protections, grandfathering, and transition provisions.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '4a8359ec8fb238e355de065e33f8140ef7828a045d2a7f72031ed5ff4e3c2613',
    },
    {
      id: 'USCIS-2026-0364-0492',
      stance: 'oppose',
      themes: ['transition', 'family', 'finances', 'talent', 'legal'],
      summary: {
        zh: '要求撤回，质疑取消的依据及行政成本，并强调家庭和招聘损害。',
        en: 'Requests withdrawal, questioning justification and administrative costs while emphasizing family and hiring harms.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        'a666c1842504ff21b073aae8c0c1d33b8120b94788cd9d7ab0189ac7fbaa35e3',
    },
    {
      id: 'USCIS-2026-0364-0025',
      stance: 'oppose',
      themes: ['talent'],
      summary: {
        zh: '反对取消，认为经济需要这些外籍人才且取消没有必要。',
        en: 'Opposes repeal as unnecessary and argues the economy needs these foreign professionals.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '0d634292fe9c19bd643879d45a0c5d6b6f6947afd8e00d204f98afa707b84f36',
    },
    {
      id: 'USCIS-2026-0364-0429',
      stance: 'oppose',
      themes: ['transition', 'talent'],
      summary: {
        zh: '要求保留，认为取消会冻结人才流动、削弱创新并增加企业招聘成本。',
        en: 'Seeks retention to avoid reduced talent mobility, weaker innovation, and higher hiring costs.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '305af70adc020deceac04030d070dd2732d7f02435a8ac802ea2ee4c295cb986',
    },
    {
      id: 'USCIS-2026-0364-0078',
      stance: 'oppose',
      themes: ['talent'],
      summary: {
        zh: '认为取消会破坏高技能行业连续性、生产率和人才供给稳定。',
        en: 'Argues repeal would disrupt high-skilled industries, productivity, and workforce stability.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '5749d8bc7652a1a7557b4477478a1732327d58988eea5cc3d7193e312c0fb95d',
    },
    {
      id: 'USCIS-2026-0364-0480',
      stance: 'oppose',
      themes: ['family', 'finances', 'transition', 'alternatives'],
      summary: {
        zh: '要求保留，以便长期积压家庭处理求职、住房、教育和离境安排。',
        en: 'Seeks retention so backlogged families can manage employment, housing, schooling, and departure.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '4e3a1882829d80e63f5976a50992a00918f33d8490b6b1d0f2bb232566e3866b',
    },
    {
      id: 'USCIS-2026-0364-0036',
      stance: 'oppose',
      themes: ['transition', 'family', 'talent'],
      summary: {
        zh: '要求撤回或保留合理过渡时间，强调雇主招聘与家庭生活。',
        en: 'Requests withdrawal or preservation of reasonable transition time for employer hiring and families.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        'cccffd228faff557c6a367b6f3353522da084c4a10046d5817c8efc7ba7f6635',
    },
    {
      id: 'USCIS-2026-0364-0048',
      stance: 'oppose',
      themes: ['transition', 'family', 'finances', 'talent', 'legal'],
      summary: {
        zh: '反对取消或缩短，强调招聘合规手续、医疗教育、财务善后和人才竞争。',
        en: 'Opposes repeal or shortening, citing hiring procedures, healthcare, schooling, finances, and talent competition.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        'fece03606e5203e32016a7bf7ad388b09bef3a025d935bf8e6dcd342df4964a3',
    },
    {
      id: 'USCIS-2026-0364-0200',
      stance: 'oppose',
      themes: ['transition', 'talent', 'legal'],
      summary: {
        zh: '要求撤回，认为取消会阻碍国内招聘并增加境外签证办理负担。',
        en: 'Requests withdrawal because repeal would obstruct domestic hiring and increase overseas visa-processing burdens.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        'cb38fc6fd7c527430785ff7238d39f8357a52f32df00ae0f0a48d1dc0b0532a6',
    },
    {
      id: 'USCIS-2026-0364-0137',
      stance: 'oppose',
      themes: ['transition', 'family', 'talent'],
      summary: {
        zh: '要求保留，避免长期居民、家庭及依赖熟练人才的企业受损。',
        en: 'Seeks retention to protect long-term residents, families, and employers relying on experienced talent.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        'fc6498fb0511541bbd61faba8847312254732940681536508b7d9afb503e7d09',
    },
    {
      id: 'USCIS-2026-0364-0335',
      stance: 'mixed',
      themes: ['family', 'finances', 'transition', 'alternatives'],
      summary: {
        zh: '要求明确合理的过渡机制，使失业家庭有时间处理住房、教育和合法身份。',
        en: 'Requests a clearly defined, reasonable transition mechanism for housing, schooling, and lawful status after job loss.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        'bde1fc0fb06d014caec789fd0b5152f6f5d6efa69d4c6c724958394e6533007a',
    },
    {
      id: 'USCIS-2026-0364-0126',
      stance: 'oppose',
      themes: ['family', 'finances', 'transition', 'legal'],
      summary: {
        zh: '要求保留，强调家庭长期投资、子女教育及转职和资产处理所需时间。',
        en: 'Seeks retention, citing family investments, schooling, and time for job transitions and asset arrangements.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        'e9bd758605cd7f1b61c07e743b3382891ed08a3d552ea4036e14b4b8dc904cd9',
    },
    {
      id: 'USCIS-2026-0364-0271',
      stance: 'oppose',
      themes: ['transition', 'legal'],
      summary: {
        zh: '要求保留酌情宽限期并明确适用指引，以应对手续延误和意外情况。',
        en: 'Seeks retention with clear discretionary guidance for processing delays and unexpected circumstances.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        'f5c49dea3d0424154442c9f1e3db4c3cafd2c3fe2b6dde2ea46718306efef413',
    },
    {
      id: 'USCIS-2026-0364-0411',
      stance: 'oppose',
      themes: ['transition', 'family', 'finances', 'talent', 'enforcement'],
      summary: {
        zh: '要求保留并定向查处滥用，强调子女教育、债务和雇主留才。',
        en: 'Seeks retention with targeted enforcement, citing schooling, debts, and employer talent retention.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '677aa22d258b71f70024176ac85aa3711a423602e9b15ee9627ce4ab4a4db401',
    },
    {
      id: 'USCIS-2026-0364-0034',
      stance: 'unclear',
      themes: ['enforcement', 'domestic'],
      summary: {
        zh: '要求加强身份核验、雇主审计和反欺诈监管，未明确支持或反对取消。',
        en: 'Requests identity checks, employer audits, and fraud oversight without a clear position on repeal.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '09eaa0c539b327119bb642136b2bbde619daa710de8d371b312a3384f76df053',
    },
    {
      id: 'USCIS-2026-0364-0016',
      stance: 'oppose',
      themes: ['transition', 'family', 'talent', 'enforcement', 'domestic'],
      summary: {
        zh: '要求保留并针对违法雇主执法，避免劳动者受制于雇主及家属失业。',
        en: 'Seeks retention with targeted employer enforcement to reduce worker vulnerability and dependent employment losses.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '91671b53cd8414877bff166cf8935c5e51b7ec49de69c79101e9a0c03e789529',
    },
    {
      id: 'USCIS-2026-0364-0475',
      stance: 'oppose',
      themes: ['talent', 'family', 'finances', 'transition'],
      summary: {
        zh: '要求保留，认为取消会增加企业招聘成本并损害家庭财务和人才吸引力。',
        en: 'Seeks retention to avoid higher hiring costs, family financial harm, and reduced talent appeal.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '41184f93a5808a05951a73705fb42d34acf782feb050914d470c02b2563e281d',
    },
    {
      id: 'USCIS-2026-0364-0250',
      stance: 'oppose',
      themes: [],
      summary: {
        zh: '直接要求不要取消60天宽限期，未提供理由。',
        en: 'Directly asks not to eliminate the 60-day period without providing reasons.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '369519dae4c9a2d372978a06e139763ad776a4188972dfac717b16fb0324f5fe',
    },
    {
      id: 'USCIS-2026-0364-0156',
      stance: 'oppose',
      themes: ['family', 'finances', 'transition', 'talent'],
      summary: {
        zh: '要求保留，保护配偶和子女稳定并支持雇主留用人才。',
        en: 'Seeks retention to protect spouses and children and support employer talent retention.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '1bad5988bbb86406fd81f1c4da0e7f0b5311a9353ddb2c61ac3ffa8bd00b1043',
    },
    {
      id: 'USCIS-2026-0364-0360',
      stance: 'oppose',
      themes: [
        'transition',
        'family',
        'finances',
        'talent',
        'legal',
        'alternatives',
      ],
      summary: {
        zh: '要求撤回并考虑延长，质疑规则转向依据、信赖利益和对小企业的影响。',
        en: 'Requests withdrawal and possible extension, questioning the reversal’s justification, reliance analysis, and small-business effects.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        'a30e82d1d2ead0c547d73aa0489638b1cccf5f766600e440d07851b444f2fddf',
    },
    {
      id: 'USCIS-2026-0364-0485',
      stance: 'oppose',
      themes: ['family', 'finances', 'transition', 'talent'],
      summary: {
        zh: '认为家庭无法一天内完成迁离，且会波及地方企业和债权人。',
        en: 'Argues families cannot relocate within a day and local businesses and creditors would also suffer.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '7a489cafc4f1f7c282b5c39aa68182bb6e96ef841a4a373c51da1c7b7cc5496c',
    },
    {
      id: 'USCIS-2026-0364-0170',
      stance: 'oppose',
      themes: ['transition', 'talent', 'family', 'domestic'],
      summary: {
        zh: '主张保留合理期限，担忧取消会加强咨询公司议价权并损害家庭和其他雇主。',
        en: 'Favors a reasonable period, warning repeal would strengthen consulting firms’ leverage and harm families and other employers.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        'b645dff081a8253f4c0c2b28f98537fd5fcc9094f017692bf6322636768c6aa0',
    },
    {
      id: 'USCIS-2026-0364-0442',
      stance: 'oppose',
      themes: ['transition', 'family', 'finances'],
      summary: {
        zh: '反对方案，认为子女教育及住房车辆处理需要更多时间。',
        en: 'Opposes the proposal because schooling and home and vehicle arrangements need time.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '766a3ecefffe3c92ae4bc0ee6e0856f85596d8c8485a331b9f209694a9fb9b85',
    },
    {
      id: 'USCIS-2026-0364-0443',
      stance: 'support',
      themes: ['domestic', 'temporary'],
      summary: {
        zh: '主张失业后离境且不应再有求职机会，以优先保障本土毕业生就业。',
        en: 'Favors departure without another job-search opportunity to prioritize domestic graduates.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        'e6d3510b15ba77902b634c8b87d26f82963a78e1dc9f2e2f556fe4f76a282cc4',
    },
    {
      id: 'USCIS-2026-0364-0348',
      stance: 'support',
      themes: ['enforcement', 'domestic'],
      summary: {
        zh: '支持取消，认为可打击签证滥用并保护美国劳动者就业和工资。',
        en: 'Supports repeal as a means to address visa abuse and protect U.S. jobs and wages.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '0881d5b641badec63a20a4bd747aced37d497b4e6207d748c8d9d5e1c95132ba',
    },
    {
      id: 'USCIS-2026-0364-0524',
      stance: 'oppose',
      themes: ['finances', 'transition', 'talent', 'legal'],
      summary: {
        zh: '要求保留，强调资产清理、合同义务及企业通过可携带性留才。',
        en: 'Seeks retention for asset disposal, contractual obligations, and employer retention through portability.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '1fa9db59ef2b9969f1c7cde0e63601d8434c40299eac23f9053e32a5af8241a8',
    },
    {
      id: 'USCIS-2026-0364-0448',
      stance: 'oppose',
      themes: ['family', 'finances', 'transition', 'talent'],
      summary: {
        zh: '要求保留，避免家庭承受骤然离境压力并保障雇主招聘人才。',
        en: 'Seeks retention to avoid abrupt family disruption and preserve employer access to talent.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '942bab7db041877b263e34a433dfb4d8fc0547e79baf2b6f90f97b71abb2d9c4',
    },
    {
      id: 'USCIS-2026-0364-0033',
      stance: 'support',
      themes: ['enforcement', 'domestic', 'temporary'],
      summary: {
        zh: '明确支持取消并要求更广泛限制外籍用工，声称存在欺诈和本土就业损害。',
        en: 'Explicitly supports repeal and wider foreign-worker restrictions, alleging fraud and harm to domestic employment.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '6f8c571fda6377c45a50a2419bb0191886971c38d6e734021a4e2748f9169f3e',
    },
    {
      id: 'USCIS-2026-0364-0432',
      stance: 'oppose',
      themes: ['transition', 'family', 'finances', 'talent', 'legal'],
      summary: {
        zh: '要求撤回，认为行政便利不能抵消家庭负担和企业招聘障碍。',
        en: 'Requests withdrawal, arguing administrative convenience cannot outweigh family burdens and hiring obstacles.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '5ab22561ccf1d626bb2a518fe58695f57cfe78aab076032fd14376c76aeab14b',
    },
    {
      id: 'USCIS-2026-0364-0252',
      stance: 'oppose',
      themes: ['transition', 'family', 'finances', 'enforcement'],
      summary: {
        zh: '要求保留，以便合法求职或有序离境，并以合规监管处理滥用。',
        en: 'Seeks retention for lawful job searches or orderly departure, with compliance measures against misuse.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        'ec24e679112fbb63aae53d07ee0ee4756c5b35fedefeadc6dfaac3d0b9cf0704',
    },
    {
      id: 'USCIS-2026-0364-0274',
      stance: 'oppose',
      themes: [],
      summary: {
        zh: '要求不要实施该方案，认为其不人道。',
        en: 'Asks that the proposal not be implemented, calling it inhumane.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        'da60436a7c8084c6dc2f92aea6602bd3ff9e6e6709c64f50d7582d59d01c0735',
    },
    {
      id: 'USCIS-2026-0364-0281',
      stance: 'oppose',
      themes: [
        'transition',
        'family',
        'finances',
        'talent',
        'legal',
        'alternatives',
      ],
      summary: {
        zh: '要求撤回并考虑延至90或180天，以适应招聘周期及长期家庭承诺。',
        en: 'Requests withdrawal and consideration of 90 or 180 days to reflect hiring cycles and long-term family commitments.',
      },
      postedDate: '2026-09-11T04:00:00Z',
      textSha256:
        '25ceb10314dc191f0afa930c8e0ecf08eb805acd3199f1cb66b0a04d62b29aec',
    },
  ],
  scopeNote: {
    zh: '基于已公开526条中的固定随机100条；1条仅有附件且附件不可读，保留为不明确。观点摘要为评论者主张，并非事实或法律结论。',
    en: 'Fixed random sample of 100 from 526 published comments; one attachment-only comment was unreadable and retained as unclear. Summaries describe commenters’ views, not factual or legal findings.',
  },
  commentPhase: 'open',
  commentDeadline: '2026-11-10',
  sampleSize: 100,
  expandedAt: '2026-09-12T12:42:16.444Z',
} satisfies CommentSample;
