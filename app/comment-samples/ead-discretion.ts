import type { CommentSample } from '../public-comment-types';

export default {
  policyId: 'ead-discretion',
  documentId: 'USCIS-2026-0067-0001',
  checkedOn: '2026-09-12',
  publishedCount: 4804,
  frameSize: 4804,
  status: 'reviewed',
  sampledAt: '2026-09-12T13:09:38.478Z',
  seed: '736e626b7f25ced0eb8056b6196f0fdc5aa63527cab71083a37f351f806ed01b',
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
      id: 'USCIS-2026-0067-1381',
      stance: 'oppose',
      themes: ['humanitarian', 'renewals', 'livelihood', 'economy'],
      summary: {
        zh: '要求重新考虑提案并保留守法假释者工作许可，避免积压期间的家庭困境。',
        en: 'Urges reconsideration and preservation of work authorization for compliant parolees to prevent family hardship during backlogs.',
      },
      postedDate: '2026-07-13T04:00:00Z',
      textSha256:
        '5e1010bf98d863e3f13a6dfe284dfeea77bdbb134cd49a39e283219ca44494d5',
    },
    {
      id: 'USCIS-2026-0067-0535',
      stance: 'oppose',
      themes: [
        'humanitarian',
        'livelihood',
        'renewals',
        'everify',
        'discretion',
      ],
      summary: {
        zh: '要求撤回整项提案，认为裁量、年度续期和雇主验证限制伤害阿富汗盟友并违背信赖利益。',
        en: 'Urges withdrawal of the entire proposal, arguing that discretion, annual renewals and employer verification barriers harm Afghan allies and disregard reliance interests.',
      },
      postedDate: '2026-06-09T04:00:00Z',
      textSha256:
        '0807bf7c4e72bcb6ef770a67d15602892d4bf2d0d04e0ffed5b0736715f7ec45',
    },
    {
      id: 'USCIS-2026-0067-4483',
      stance: 'unclear',
      themes: ['economy', 'livelihood'],
      summary: {
        zh: '申请工作许可以贡献经济、纳税并实现自立，未评价提案。',
        en: 'Requests work authorization to contribute economically, pay taxes and become self-sufficient, without assessing the proposal.',
      },
      postedDate: '2026-08-04T04:00:00Z',
      textSha256:
        '768c98386e41bee0c2f979c45f57543f0eab21ebe4b3440162c9310d2726872e',
    },
    {
      id: 'USCIS-2026-0067-1050',
      stance: 'oppose',
      themes: ['criminal', 'economy', 'discretion'],
      summary: {
        zh: '认为提案没有必要且具有歧视性，会伤害无指控记录者并削弱经济贡献。',
        en: 'Calls the proposal unnecessary and discriminatory, arguing it harms people without charges and undermines economic contributions.',
      },
      postedDate: '2026-06-22T04:00:00Z',
      textSha256:
        '087d3f44ccfb69b439539d6319b3f20dcc109a4c3cd395d1debfb63fed96d112',
    },
    {
      id: 'USCIS-2026-0067-0408',
      stance: 'oppose',
      themes: [
        'humanitarian',
        'livelihood',
        'renewals',
        'everify',
        'discretion',
      ],
      summary: {
        zh: '要求撤回整项提案，认为裁量、年度续期和雇主验证限制伤害阿富汗盟友并违背信赖利益。',
        en: 'Urges withdrawal of the entire proposal, arguing that discretion, annual renewals and employer verification barriers harm Afghan allies and disregard reliance interests.',
      },
      postedDate: '2026-06-08T04:00:00Z',
      textSha256:
        '0807bf7c4e72bcb6ef770a67d15602892d4bf2d0d04e0ffed5b0736715f7ec45',
    },
    {
      id: 'USCIS-2026-0067-2372',
      stance: 'unclear',
      themes: ['renewals', 'livelihood'],
      summary: {
        zh: '要求及时续发工作许可、避免工作中断，但未明确评价提案。',
        en: 'Requests timely permits and gap-free renewals to prevent job loss, without clearly assessing the proposal.',
      },
      postedDate: '2026-07-27T04:00:00Z',
      textSha256:
        'dadfbbe1e8fa3854e2f2cd99e7f5a771265dd968da53444599c406d2ae478e72',
    },
    {
      id: 'USCIS-2026-0067-4725',
      stance: 'oppose',
      themes: ['renewals', 'economy', 'livelihood'],
      summary: {
        zh: '要求保护合法工作许可并避免新增障碍，同时改善办理积压和工作中断。',
        en: 'Asks to protect lawful work authorization and avoid new barriers while addressing processing delays and work interruptions.',
      },
      postedDate: '2026-08-04T04:00:00Z',
      textSha256:
        '58d82cc8f8eec5f2b4136f2a934375041f821fb3b02ba9b9bd4e60c18d6a973c',
    },
    {
      id: 'USCIS-2026-0067-4663',
      stance: 'oppose',
      themes: [],
      summary: {
        zh: '组织在正文中明确强烈反对提案，详细理由另见附件。',
        en: 'The organization explicitly strongly opposes the proposal in its body text, with detailed reasons in an attachment.',
      },
      sourceNote: {
        zh: '已尝试官方附件下载，均返回HTTP 403；分类仅依据可读正文，附件内容未获核实。',
        en: 'Official attachment downloads were attempted and returned HTTP 403; classification uses readable body text only, and attachment contents were not verified.',
      },
      postedDate: '2026-08-04T04:00:00Z',
      textSha256:
        '7613a11fd3f7265ca01f8a6921de4457e23181b98470be538af39392e59129a6',
    },
    {
      id: 'USCIS-2026-0067-0996',
      stance: 'oppose',
      themes: ['renewals', 'livelihood'],
      summary: {
        zh: '要求撤回限制，并通过减少积压、简化许可程序保护家庭生计。',
        en: 'Urges withdrawal of restrictions and protection of family livelihoods through reduced backlogs and simpler work authorization.',
      },
      postedDate: '2026-06-17T04:00:00Z',
      textSha256:
        '42193a182759d20cbf33a9a38d867b8d93fe7e3e8844c944fdd7f153275425d8',
    },
    {
      id: 'USCIS-2026-0067-1217',
      stance: 'unclear',
      themes: ['livelihood', 'economy'],
      summary: {
        zh: '担忧失业后家庭无法维持生活，未明确评价提案。',
        en: 'Fears the household cannot meet living expenses after job loss, without clearly assessing the proposal.',
      },
      postedDate: '2026-07-13T04:00:00Z',
      textSha256:
        'e3c2984a03cc059218f1de3ae10714bfd9fa0df167c0e76d80ffea53e4185e52',
    },
    {
      id: 'USCIS-2026-0067-3378',
      stance: 'oppose',
      themes: ['livelihood', 'economy'],
      summary: {
        zh: '要求保护守法家庭继续工作的许可，强调家庭稳定和纳税贡献。',
        en: 'Calls for protecting authorization for compliant families to keep working, emphasizing household stability and tax contributions.',
      },
      postedDate: '2026-07-31T04:00:00Z',
      textSha256:
        '487e64870d9f045c5b9817b6c0f96f06ddd961c69455fb90b61673a5a697b307',
    },
    {
      id: 'USCIS-2026-0067-2541',
      stance: 'oppose',
      themes: ['renewals', 'livelihood', 'economy'],
      summary: {
        zh: '要求避免新增就业障碍，并保留及扩大自动延期和较长有效期以保护家庭与企业。',
        en: 'Asks against new employment barriers and seeks preserved and expanded automatic extensions and longer validity to protect households and businesses.',
      },
      postedDate: '2026-07-29T04:00:00Z',
      textSha256:
        'aeaae5fa245b39168cf59bafe07358406c66cf9da8538e36ab810d62d89f34c9',
    },
    {
      id: 'USCIS-2026-0067-3482',
      stance: 'unclear',
      themes: [],
      summary: {
        zh: '正文仅指向附件，无法据此判断提案立场。',
        en: 'The body only refers to an attachment and does not establish a proposal stance.',
      },
      sourceNote: {
        zh: '已尝试官方附件下载，均返回HTTP 403；分类仅依据可读正文，附件内容未获核实。',
        en: 'Official attachment downloads were attempted and returned HTTP 403; classification uses readable body text only, and attachment contents were not verified.',
      },
      postedDate: '2026-08-03T04:00:00Z',
      textSha256:
        'f57a02c717ada2ce922714836984bad201d137ce4ccc76a60803ff168ce5592e',
    },
    {
      id: 'USCIS-2026-0067-4316',
      stance: 'unclear',
      themes: ['renewals', 'humanitarian', 'livelihood', 'economy'],
      summary: {
        zh: '描述续期延误造成失业和生活困难，要求继续工作但未明确评价提案。',
        en: 'Describes job loss and hardship from renewal delays and seeks continued work, without clearly assessing the proposal.',
      },
      postedDate: '2026-08-03T04:00:00Z',
      textSha256:
        '604bdf2749bfc30ef34746ad86bc8c567563a5d17564da05215e29a8ab4edf1e',
    },
    {
      id: 'USCIS-2026-0067-1680',
      stance: 'unclear',
      themes: ['renewals', 'humanitarian', 'livelihood', 'economy'],
      summary: {
        zh: '要求及时处理乌克兰假释、TPS和工作许可续期，未表达提案立场。',
        en: 'Requests timely Ukrainian parole, TPS and work permit renewals, without expressing a proposal stance.',
      },
      postedDate: '2026-07-16T04:00:00Z',
      textSha256:
        'a86d6ff573ee2a7d196b35ce17bbd0a491072c327146107479aaf06ec9d7afa6',
    },
    {
      id: 'USCIS-2026-0067-3130',
      stance: 'oppose',
      themes: ['discretion', 'renewals', 'economy', 'livelihood'],
      summary: {
        zh: '要求撤回提案并扩大假释、暂缓遣返和监督令群体的工作许可，反对裁量门槛及缩短有效期。',
        en: 'Urges withdrawal and expanded work authorization for parole, deferred action and supervision-order populations, opposing discretionary barriers and shorter validity.',
      },
      postedDate: '2026-07-30T04:00:00Z',
      textSha256:
        '12a76994682881c6a32ae1627a2114f38315a2d3434d644d082faf455f75531a',
    },
    {
      id: 'USCIS-2026-0067-4814',
      stance: 'oppose',
      themes: [
        'humanitarian',
        'renewals',
        'livelihood',
        'economy',
        'discretion',
      ],
      summary: {
        zh: '要求撤回提案，认为新增限制缺乏公共安全收益并损害受保护者生计及雇主。',
        en: 'Calls for withdrawal, arguing added restrictions lack public-safety benefits and harm protected people’s livelihoods and employers.',
      },
      postedDate: '2026-08-05T04:00:00Z',
      textSha256:
        '31cc838fd8b5765a2b51c5341b4d0ab407a4d85349d4459a9be8fcc4ca1380cd',
    },
    {
      id: 'USCIS-2026-0067-2497',
      stance: 'unclear',
      themes: ['humanitarian', 'livelihood'],
      summary: {
        zh: '描述战争避难及合法工作对自立的重要性，未明确评价提案。',
        en: 'Describes refuge from war and the importance of lawful work to self-sufficiency, without clearly assessing the proposal.',
      },
      postedDate: '2026-07-29T04:00:00Z',
      textSha256:
        'bacf0217bd4dc8c9da9df6265879477a94277b370e5661a5be26a1ae3e11f6bb',
    },
    {
      id: 'USCIS-2026-0067-1164',
      stance: 'oppose',
      themes: ['humanitarian', 'livelihood', 'economy'],
      summary: {
        zh: '明确反对提案，要求保留人道假释者工作许可，以保障自立和纳税。',
        en: 'Explicitly opposes the proposal and seeks to retain humanitarian parolees’ work authorization for self-sufficiency and tax contributions.',
      },
      postedDate: '2026-07-06T04:00:00Z',
      textSha256:
        'c93f173f8f7b5c07dded58ff4e429260dac9fbb1d6404cb6a8a88cf14b9feba3',
    },
    {
      id: 'USCIS-2026-0067-3234',
      stance: 'oppose',
      themes: ['renewals', 'livelihood'],
      summary: {
        zh: '要求撤回限制并减少积压、简化工作许可程序，以保障家庭生计。',
        en: 'Urges withdrawal of restrictions and reduced backlogs and simpler work permits to protect family livelihoods.',
      },
      postedDate: '2026-07-30T04:00:00Z',
      textSha256:
        '42193a182759d20cbf33a9a38d867b8d93fe7e3e8844c944fdd7f153275425d8',
    },
    {
      id: 'USCIS-2026-0067-3645',
      stance: 'oppose',
      themes: ['livelihood', 'economy'],
      summary: {
        zh: '要求保留并扩大合法工作机会，反对限制给家庭、企业和社区造成损失。',
        en: 'Calls for preserving and expanding lawful work opportunities, opposing the harm restrictions cause families, businesses and communities.',
      },
      postedDate: '2026-08-03T04:00:00Z',
      textSha256:
        'f90d973168dcc871d368b3750a1e246c82386742aef78d9105c446d9cdbb070d',
    },
    {
      id: 'USCIS-2026-0067-3195',
      stance: 'oppose',
      themes: [
        'humanitarian',
        'livelihood',
        'renewals',
        'everify',
        'discretion',
      ],
      summary: {
        zh: '要求撤回整项提案，认为裁量、年度续期和雇主验证限制伤害阿富汗盟友并违背信赖利益。',
        en: 'Urges withdrawal of the entire proposal, arguing that discretion, annual renewals and employer verification barriers harm Afghan allies and disregard reliance interests.',
      },
      postedDate: '2026-07-30T04:00:00Z',
      textSha256:
        '0807bf7c4e72bcb6ef770a67d15602892d4bf2d0d04e0ffed5b0736715f7ec45',
    },
    {
      id: 'USCIS-2026-0067-0797',
      stance: 'oppose',
      themes: [
        'humanitarian',
        'livelihood',
        'renewals',
        'everify',
        'discretion',
      ],
      summary: {
        zh: '要求撤回整项提案，认为裁量、年度续期和雇主验证限制伤害阿富汗盟友并违背信赖利益。',
        en: 'Urges withdrawal of the entire proposal, arguing that discretion, annual renewals and employer verification barriers harm Afghan allies and disregard reliance interests.',
      },
      postedDate: '2026-06-11T04:00:00Z',
      textSha256:
        '0807bf7c4e72bcb6ef770a67d15602892d4bf2d0d04e0ffed5b0736715f7ec45',
    },
    {
      id: 'USCIS-2026-0067-0641',
      stance: 'oppose',
      themes: [
        'humanitarian',
        'livelihood',
        'renewals',
        'everify',
        'discretion',
      ],
      summary: {
        zh: '要求撤回整项提案，认为裁量、年度续期和雇主验证限制伤害阿富汗盟友并违背信赖利益。',
        en: 'Urges withdrawal of the entire proposal, arguing that discretion, annual renewals and employer verification barriers harm Afghan allies and disregard reliance interests.',
      },
      postedDate: '2026-06-09T04:00:00Z',
      textSha256:
        '0807bf7c4e72bcb6ef770a67d15602892d4bf2d0d04e0ffed5b0736715f7ec45',
    },
    {
      id: 'USCIS-2026-0067-2453',
      stance: 'oppose',
      themes: ['criminal', 'discretion', 'livelihood'],
      summary: {
        zh: '要求撤回提案，反对以无定罪逮捕记录推定拒绝及缺乏复核；豁免仅为备选要求。',
        en: 'Urges withdrawal, opposing denial presumptions based on arrests without convictions and lack of review; exemptions are only a fallback request.',
      },
      postedDate: '2026-07-28T04:00:00Z',
      textSha256:
        'ea49f8539c66dea7f5d4a7b0492442b3392c303a26d8369fc499e62caadaa8d4',
    },
    {
      id: 'USCIS-2026-0067-1247',
      stance: 'oppose',
      themes: ['renewals', 'livelihood', 'humanitarian', 'economy'],
      summary: {
        zh: '要求取消工作许可自动延期禁令，强调及时申请者面临失业和生活费用压力。',
        en: 'Asks to cancel the ban on automatic work permit extensions, citing job loss and living-cost pressures despite timely filing.',
      },
      postedDate: '2026-07-13T04:00:00Z',
      textSha256:
        '884b8d43b47e03e4f86eb0e205a156b0a643ef47a44b7fc7a8da1af5d87d744a',
    },
    {
      id: 'USCIS-2026-0067-0724',
      stance: 'oppose',
      themes: [
        'humanitarian',
        'livelihood',
        'renewals',
        'everify',
        'discretion',
      ],
      summary: {
        zh: '要求撤回整项提案，认为裁量、年度续期和雇主验证限制伤害阿富汗盟友并违背信赖利益。',
        en: 'Urges withdrawal of the entire proposal, arguing that discretion, annual renewals and employer verification barriers harm Afghan allies and disregard reliance interests.',
      },
      postedDate: '2026-06-10T04:00:00Z',
      textSha256:
        '0807bf7c4e72bcb6ef770a67d15602892d4bf2d0d04e0ffed5b0736715f7ec45',
    },
    {
      id: 'USCIS-2026-0067-2147',
      stance: 'oppose',
      themes: ['livelihood'],
      summary: {
        zh: '要求不要限制工作许可，认为限制会损害家庭自立并增加救助需求。',
        en: 'Asks against work permit restrictions, arguing they undermine family self-sufficiency and increase assistance needs.',
      },
      postedDate: '2026-07-23T04:00:00Z',
      textSha256:
        '31f060661d8d455c7a410567bb4bfd327fc7c8d14c2b7a1490b5c2f9e4f8ca0d',
    },
    {
      id: 'USCIS-2026-0067-2001',
      stance: 'oppose',
      themes: ['humanitarian', 'livelihood', 'economy'],
      summary: {
        zh: '要求不要增加合法就业障碍，强调战争避难者的自立、纳税和经济贡献。',
        en: 'Asks against added barriers to lawful work, emphasizing war-displaced people’s self-sufficiency, taxes and economic contributions.',
      },
      postedDate: '2026-07-21T04:00:00Z',
      textSha256:
        '34ce68bc617c8dab43940d45ee56b34636fb437111e60de9199bb23dc26f56f0',
    },
    {
      id: 'USCIS-2026-0067-0465',
      stance: 'oppose',
      themes: [
        'humanitarian',
        'livelihood',
        'renewals',
        'everify',
        'discretion',
      ],
      summary: {
        zh: '要求撤回整项提案，认为裁量、年度续期和雇主验证限制伤害阿富汗盟友并违背信赖利益。',
        en: 'Urges withdrawal of the entire proposal, arguing that discretion, annual renewals and employer verification barriers harm Afghan allies and disregard reliance interests.',
      },
      postedDate: '2026-06-08T04:00:00Z',
      textSha256:
        '0807bf7c4e72bcb6ef770a67d15602892d4bf2d0d04e0ffed5b0736715f7ec45',
    },
    {
      id: 'USCIS-2026-0067-2375',
      stance: 'oppose',
      themes: ['criminal', 'discretion', 'livelihood', 'economy'],
      summary: {
        zh: '明确反对因已解决的轻微记录否定等待绿卡期间的工作许可，强调家庭和稳定就业损失。',
        en: 'Explicitly opposes denial of work authorization during green-card waits over resolved minor records, emphasizing family hardship and loss of stable employment.',
      },
      postedDate: '2026-07-27T04:00:00Z',
      textSha256:
        'eefb0ef89be052d159d02fd55bc541fcf3feeb4d261dbe8a3bb31e754a6a08eb',
    },
    {
      id: 'USCIS-2026-0067-0727',
      stance: 'oppose',
      themes: [
        'humanitarian',
        'livelihood',
        'renewals',
        'everify',
        'discretion',
      ],
      summary: {
        zh: '要求撤回整项提案，认为裁量、年度续期和雇主验证限制伤害阿富汗盟友并违背信赖利益。',
        en: 'Urges withdrawal of the entire proposal, arguing that discretion, annual renewals and employer verification barriers harm Afghan allies and disregard reliance interests.',
      },
      postedDate: '2026-06-10T04:00:00Z',
      textSha256:
        '0807bf7c4e72bcb6ef770a67d15602892d4bf2d0d04e0ffed5b0736715f7ec45',
    },
    {
      id: 'USCIS-2026-0067-3508',
      stance: 'oppose',
      themes: ['criminal', 'discretion', 'livelihood', 'economy'],
      summary: {
        zh: '明确反对笼统限制，要求保留对轻微旧案、康复和个体情况的综合衡量。',
        en: 'Explicitly opposes broad restrictions and seeks to preserve individualized consideration of minor old offenses, rehabilitation and overall circumstances.',
      },
      postedDate: '2026-08-03T04:00:00Z',
      textSha256:
        'ae393115db20d557ef533449eb3434e6f6bedddb945c666f109db378df67250b',
    },
    {
      id: 'USCIS-2026-0067-1941',
      stance: 'unclear',
      themes: ['economy'],
      summary: {
        zh: '赞扬乌克兰人的劳动贡献并支持工作权，未评价提案。',
        en: 'Praises Ukrainians’ work contributions and supports their right to work, without assessing the proposal.',
      },
      postedDate: '2026-07-20T04:00:00Z',
      textSha256:
        '899d32145f893691de653dde82172b6de0980d952b09bff5591cc15a6fa07ca0',
    },
    {
      id: 'USCIS-2026-0067-0679',
      stance: 'oppose',
      themes: ['humanitarian', 'economy', 'livelihood'],
      summary: {
        zh: '认为提案侵犯战争避难者权利，强调安全、工作和纳税贡献。',
        en: 'Says the proposal violates war-displaced people’s rights, emphasizing safety, work and tax contributions.',
      },
      postedDate: '2026-06-10T04:00:00Z',
      textSha256:
        'a715552c79c90faf28f19de1e61e212f01ceb2daf27e48a3702d661ff68a8c7a',
    },
    {
      id: 'USCIS-2026-0067-4601',
      stance: 'oppose',
      themes: ['victims', 'renewals', 'everify', 'criminal', 'discretion'],
      summary: {
        zh: '要求撤回整项提案，认为年度续期及记录限制将破坏U签证受害者保护。',
        en: 'Urges full withdrawal, arguing annual renewals and record restrictions undermine U-visa victim protection.',
      },
      postedDate: '2026-08-04T04:00:00Z',
      textSha256:
        'c514837df541548b5e1e75f1daf19354d1b9f14c122e22db66985189404972a3',
    },
    {
      id: 'USCIS-2026-0067-0553',
      stance: 'oppose',
      themes: [
        'humanitarian',
        'livelihood',
        'renewals',
        'everify',
        'discretion',
      ],
      summary: {
        zh: '要求撤回整项提案，认为裁量、年度续期和雇主验证限制伤害阿富汗盟友并违背信赖利益。',
        en: 'Urges withdrawal of the entire proposal, arguing that discretion, annual renewals and employer verification barriers harm Afghan allies and disregard reliance interests.',
      },
      postedDate: '2026-06-09T04:00:00Z',
      textSha256:
        '0807bf7c4e72bcb6ef770a67d15602892d4bf2d0d04e0ffed5b0736715f7ec45',
    },
    {
      id: 'USCIS-2026-0067-1522',
      stance: 'unclear',
      themes: ['renewals', 'livelihood', 'humanitarian', 'economy'],
      summary: {
        zh: '要求及时办理工作许可以减少家庭和就业困难，未明确评价提案。',
        en: 'Seeks timely work permits to reduce household and employment hardship, without clearly assessing the proposal.',
      },
      postedDate: '2026-07-14T04:00:00Z',
      textSha256:
        'b6b8443f9daa54685c5c7bbeeee178896f25739177aeaa80c846e9a711c7103f',
    },
    {
      id: 'USCIS-2026-0067-4119',
      stance: 'oppose',
      themes: ['livelihood', 'economy'],
      summary: {
        zh: '要求保护合法工作许可、避免新增障碍，强调家庭自立和经济贡献。',
        en: 'Calls for protecting lawful work authorization and avoiding new barriers, emphasizing self-sufficiency and economic contributions.',
      },
      postedDate: '2026-08-03T04:00:00Z',
      textSha256:
        'd53bae8263aa81a1a03c9903cb4c825267ae890ac22621dc29bdc21a3dd79dbb',
    },
    {
      id: 'USCIS-2026-0067-2561',
      stance: 'oppose',
      themes: ['renewals', 'livelihood', 'humanitarian'],
      summary: {
        zh: '要求保护人道假释者工作许可并确保连续准入，避免积压损害家庭。',
        en: 'Calls for protecting humanitarian parolees’ work authorization and continuous access to prevent backlog-related household harm.',
      },
      postedDate: '2026-07-29T04:00:00Z',
      textSha256:
        '85ba1f47a73f14944c4b029ab269d72c45e8b45ea667199bb6d2387ecb333504',
    },
    {
      id: 'USCIS-2026-0067-4285',
      stance: 'oppose',
      themes: ['livelihood', 'economy'],
      summary: {
        zh: '要求保护合法工作许可、避免新增障碍，强调家庭自立和经济贡献。',
        en: 'Calls for protecting lawful work authorization and avoiding new barriers, emphasizing self-sufficiency and economic contributions.',
      },
      postedDate: '2026-08-03T04:00:00Z',
      textSha256:
        'd804e05575ca001ffeafaa49176e5ae8644c6dc20c953fb73db9824c35faff43',
    },
    {
      id: 'USCIS-2026-0067-4218',
      stance: 'oppose',
      themes: [
        'humanitarian',
        'livelihood',
        'renewals',
        'everify',
        'discretion',
      ],
      summary: {
        zh: '要求撤回整项提案，认为裁量、年度续期和雇主验证限制伤害阿富汗盟友并违背信赖利益。',
        en: 'Urges withdrawal of the entire proposal, arguing that discretion, annual renewals and employer verification barriers harm Afghan allies and disregard reliance interests.',
      },
      postedDate: '2026-08-03T04:00:00Z',
      textSha256:
        '0807bf7c4e72bcb6ef770a67d15602892d4bf2d0d04e0ffed5b0736715f7ec45',
    },
    {
      id: 'USCIS-2026-0067-0843',
      stance: 'oppose',
      themes: ['criminal', 'discretion', 'livelihood', 'economy'],
      summary: {
        zh: '反对提案及无指控逮捕记录限制，认为会侵犯权利并损害家庭和企业。',
        en: 'Opposes the proposal and restrictions based on uncharged arrests, arguing they violate rights and harm families and businesses.',
      },
      postedDate: '2026-06-12T04:00:00Z',
      textSha256:
        '493d44737805292f110261726fe67c35790571c5486d4615a40b527b8ee25a74',
    },
    {
      id: 'USCIS-2026-0067-3900',
      stance: 'oppose',
      themes: ['humanitarian', 'renewals', 'livelihood', 'economy'],
      summary: {
        zh: '要求保护乌克兰假释者可靠工作许可，强调短有效期和政策不确定性损害生计。',
        en: 'Seeks reliable work authorization for Ukrainian parolees, citing livelihood harm from short validity and policy uncertainty.',
      },
      postedDate: '2026-08-03T04:00:00Z',
      textSha256:
        '7442ec0a404bebc82e9e00a87267bf88a4dcaf15729ee63876b1e26f9856de6d',
    },
    {
      id: 'USCIS-2026-0067-4470',
      stance: 'oppose',
      themes: ['livelihood', 'economy'],
      summary: {
        zh: '要求保护合法工作许可、避免新增障碍，强调家庭自立和经济贡献。',
        en: 'Calls for protecting lawful work authorization and avoiding new barriers, emphasizing self-sufficiency and economic contributions.',
      },
      postedDate: '2026-08-04T04:00:00Z',
      textSha256:
        'f7a8b2bb4007a7935d74b3743c8ebf17c6a7cf5b736064e4a8b1cf94d477193d',
    },
    {
      id: 'USCIS-2026-0067-2013',
      stance: 'unclear',
      themes: ['renewals', 'livelihood', 'humanitarian', 'economy'],
      summary: {
        zh: '要求及时办理工作许可以减少家庭和就业困难，未明确评价提案。',
        en: 'Seeks timely work permits to reduce household and employment hardship, without clearly assessing the proposal.',
      },
      postedDate: '2026-07-21T04:00:00Z',
      textSha256:
        '3493079f45fc1c685ac5d6c661604ff341f6f230a72c480ef67a5b9671a6b416',
    },
    {
      id: 'USCIS-2026-0067-4630',
      stance: 'oppose',
      themes: ['criminal', 'discretion', 'livelihood'],
      summary: {
        zh: '反对因无定罪逮捕推定拒绝，要求保留个别衡量和程序公平。',
        en: 'Opposes denial presumptions based on arrests without convictions and seeks individualized review and procedural fairness.',
      },
      postedDate: '2026-08-04T04:00:00Z',
      textSha256:
        '4d613659865081afeb156304ab7fdea70bec9c4a8a7def9742733effad86e782',
    },
    {
      id: 'USCIS-2026-0067-3393',
      stance: 'oppose',
      themes: [
        'humanitarian',
        'livelihood',
        'renewals',
        'everify',
        'discretion',
      ],
      summary: {
        zh: '要求撤回整项提案，认为裁量、年度续期和雇主验证限制伤害阿富汗盟友并违背信赖利益。',
        en: 'Urges withdrawal of the entire proposal, arguing that discretion, annual renewals and employer verification barriers harm Afghan allies and disregard reliance interests.',
      },
      postedDate: '2026-07-31T04:00:00Z',
      textSha256:
        '0807bf7c4e72bcb6ef770a67d15602892d4bf2d0d04e0ffed5b0736715f7ec45',
    },
    {
      id: 'USCIS-2026-0067-3679',
      stance: 'oppose',
      themes: ['livelihood', 'economy'],
      summary: {
        zh: '要求保护合法工作许可、避免新增障碍，强调家庭自立和经济贡献。',
        en: 'Calls for protecting lawful work authorization and avoiding new barriers, emphasizing self-sufficiency and economic contributions.',
      },
      postedDate: '2026-08-03T04:00:00Z',
      textSha256:
        '0f75beedafaf6fba6a766fc7fb30347e5dd227aad5b44f8eeb39cbae9ba30a4e',
    },
    {
      id: 'USCIS-2026-0067-2731',
      stance: 'oppose',
      themes: [],
      summary: {
        zh: '要求保护合法工作许可准入。',
        en: 'Calls for protecting lawful access to work authorization.',
      },
      postedDate: '2026-07-29T04:00:00Z',
      textSha256:
        '5a111263d5de77584e6c06b64ea8dbf725048e1fb267bd29da21cdac58dfb3bf',
    },
    {
      id: 'USCIS-2026-0067-0752',
      stance: 'oppose',
      themes: [
        'humanitarian',
        'livelihood',
        'renewals',
        'everify',
        'discretion',
      ],
      summary: {
        zh: '要求撤回整项提案，认为裁量、年度续期和雇主验证限制伤害阿富汗盟友并违背信赖利益。',
        en: 'Urges withdrawal of the entire proposal, arguing that discretion, annual renewals and employer verification barriers harm Afghan allies and disregard reliance interests.',
      },
      postedDate: '2026-06-10T04:00:00Z',
      textSha256:
        '0807bf7c4e72bcb6ef770a67d15602892d4bf2d0d04e0ffed5b0736715f7ec45',
    },
    {
      id: 'USCIS-2026-0067-2404',
      stance: 'unclear',
      themes: ['livelihood', 'economy'],
      summary: {
        zh: '强调工作许可对住房、医疗和家庭自立的重要性，未表达提案立场。',
        en: 'Emphasizes work authorization for housing, healthcare and family independence, without a proposal stance.',
      },
      postedDate: '2026-07-27T04:00:00Z',
      textSha256:
        '31e5d880023824604a03b951704240e6a0babf312891fe97fff8e261bc75cfda',
    },
    {
      id: 'USCIS-2026-0067-4602',
      stance: 'oppose',
      themes: [],
      summary: {
        zh: '正文明确表示反对提案，详细评论在附件。',
        en: 'The body explicitly states opposition to the proposal, with detailed comments in an attachment.',
      },
      postedDate: '2026-08-04T04:00:00Z',
      textSha256:
        '040c8846033d8116dd47d8196d8d885bf476996a29479b7c8f8a7dc7c4806b87',
      sourceNote: {
        zh: '已尝试官方附件下载，均返回HTTP 403；分类仅依据可读正文，附件内容未获核实。',
        en: 'Official attachment downloads were attempted and returned HTTP 403; classification uses readable body text only, and attachment contents were not verified.',
      },
    },
    {
      id: 'USCIS-2026-0067-2642',
      stance: 'unclear',
      themes: ['renewals', 'livelihood', 'humanitarian', 'economy'],
      summary: {
        zh: '要求及时办理工作许可以减少家庭和就业困难，未明确评价提案。',
        en: 'Seeks timely work permits to reduce household and employment hardship, without clearly assessing the proposal.',
      },
      postedDate: '2026-07-29T04:00:00Z',
      textSha256:
        '1c669f9be6c128529ba0dd4c99b958aadad93b62738da2bc7a13e9360e4bba38',
    },
    {
      id: 'USCIS-2026-0067-4571',
      stance: 'oppose',
      themes: ['victims', 'renewals', 'discretion', 'everify', 'livelihood'],
      summary: {
        zh: '要求撤回U签证工作许可限制，反对年度续期、经济必要性和雇主验证障碍。',
        en: 'Urges withdrawal of U-visa work permit restrictions, opposing annual renewal, economic-necessity and employer-verification barriers.',
      },
      postedDate: '2026-08-04T04:00:00Z',
      textSha256:
        'bcb0bfd770b9a633d811618032b0854585489b365faab29a0655f7560f7fb5e4',
    },
    {
      id: 'USCIS-2026-0067-1517',
      stance: 'unclear',
      themes: ['renewals', 'livelihood', 'humanitarian', 'economy'],
      summary: {
        zh: '要求及时办理工作许可以减少家庭和就业困难，未明确评价提案。',
        en: 'Seeks timely work permits to reduce household and employment hardship, without clearly assessing the proposal.',
      },
      postedDate: '2026-07-14T04:00:00Z',
      textSha256:
        'b6b8443f9daa54685c5c7bbeeee178896f25739177aeaa80c846e9a711c7103f',
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
      id: 'USCIS-2026-0067-2032',
      stance: 'unclear',
      themes: ['renewals'],
      summary: {
        zh: '请求处理积压工作许可申请，正文未表达提案立场。',
        en: 'Requests action on a delayed work permit application; the body expresses no proposal stance.',
      },
      postedDate: '2026-07-21T04:00:00Z',
      textSha256:
        'ddb7b018f7c31fd247e21e3fa3dc4ac5134043a7870059d764b22a2009697b4f',
      sourceNote: {
        zh: '已尝试官方附件下载，均返回HTTP 403；分类仅依据可读正文，附件内容未获核实。',
        en: 'Official attachment downloads were attempted and returned HTTP 403; classification uses readable body text only, and attachment contents were not verified.',
      },
    },
    {
      id: 'USCIS-2026-0067-4620',
      stance: 'oppose',
      themes: ['criminal', 'discretion', 'livelihood'],
      summary: {
        zh: '反对因无定罪逮捕推定拒绝，要求保留个别衡量和程序公平。',
        en: 'Opposes denial presumptions based on arrests without convictions and seeks individualized review and procedural fairness.',
      },
      postedDate: '2026-08-04T04:00:00Z',
      textSha256:
        'c42f1d05305163cabb003001ef1db348dce75ed15b59ac8363d7cd5b02cf1d3a',
    },
    {
      id: 'USCIS-2026-0067-2471',
      stance: 'oppose',
      themes: ['livelihood', 'economy'],
      summary: {
        zh: '要求保护合法工作许可、避免新增障碍，强调家庭自立和经济贡献。',
        en: 'Calls for protecting lawful work authorization and avoiding new barriers, emphasizing self-sufficiency and economic contributions.',
      },
      postedDate: '2026-07-29T04:00:00Z',
      textSha256:
        '714c2c4f6a7a277301a723c4a27a4feee7356dd423047e41856b7b8e31705dca',
    },
    {
      id: 'USCIS-2026-0067-3937',
      stance: 'oppose',
      themes: ['humanitarian', 'livelihood'],
      summary: {
        zh: '反对限制人道假释者就业，要求保留保护和家庭稳定。',
        en: 'Opposes restrictions on humanitarian parolees’ work and seeks preserved protection and family stability.',
      },
      postedDate: '2026-08-03T04:00:00Z',
      textSha256:
        '36910d2a75b9cf5e02bbf6846d36b663ee257354b067f89817d80fe0591a445d',
    },
    {
      id: 'USCIS-2026-0067-3698',
      stance: 'oppose',
      themes: ['livelihood', 'economy'],
      summary: {
        zh: '要求保护合法工作机会、避免新增障碍，强调家庭和经济贡献。',
        en: 'Seeks protected lawful work and no new barriers, emphasizing family and economic contributions.',
      },
      postedDate: '2026-08-03T04:00:00Z',
      textSha256:
        '7c9bcbc2e1d28c213a051df0286ab7132d23ee16e7a342e9c02f29830d4f1fb9',
    },
    {
      id: 'USCIS-2026-0067-4645',
      stance: 'oppose',
      themes: ['humanitarian', 'discretion', 'livelihood', 'economy'],
      summary: {
        zh: '反对强迫证明工作必要性，认为这会使避难者陷入生计困境。',
        en: 'Opposes requiring proof of the need to work, arguing it creates livelihood hardship for people seeking refuge.',
      },
      postedDate: '2026-08-04T04:00:00Z',
      textSha256:
        'd871495b66db15b6cc9c5c98e2d2e8a54b457e4af96e7ced4b9de30f09c7a5b8',
    },
    {
      id: 'USCIS-2026-0067-2379',
      stance: 'oppose',
      themes: ['criminal', 'discretion', 'livelihood'],
      summary: {
        zh: '反对无定罪记录触发拒绝推定，要求保留个体衡量和信赖利益。',
        en: 'Opposes denial presumptions from non-conviction records and seeks individualized assessment and respect for reliance interests.',
      },
      postedDate: '2026-07-27T04:00:00Z',
      textSha256:
        'd4039ae8e4f34f3db0a644894f2e64de34934b81c11a2d91e80a42a22c4c8372',
    },
    {
      id: 'USCIS-2026-0067-4234',
      stance: 'oppose',
      themes: ['economy', 'livelihood'],
      summary: {
        zh: '要求保护合法工作许可并避免新增障碍，强调家庭自立及雇主和经济收益。',
        en: 'Calls for protecting lawful work authorization and avoiding added barriers, citing family self-sufficiency and benefits to employers and the economy.',
      },
      postedDate: '2026-08-03T04:00:00Z',
      textSha256:
        'edad4a93dd88074ec3cf441e44ca91c15f2eb5a9ff5a460a3baf1e07e4668ddf',
    },
    {
      id: 'USCIS-2026-0067-4684',
      stance: 'unclear',
      themes: ['renewals', 'livelihood'],
      summary: {
        zh: '担心许可到期影响家庭和工作，立场表述不足。',
        en: 'Fears permit expiration affects family and employment, but gives insufficient proposal position.',
      },
      postedDate: '2026-08-04T04:00:00Z',
      textSha256:
        '1ad6f22624c7397e332e61271a69022e56f5eb50a86d4eb57da7cbafe18b2d45',
    },
    {
      id: 'USCIS-2026-0067-2505',
      stance: 'unclear',
      themes: ['renewals'],
      summary: {
        zh: '希望持续工作并减轻工作许可和身份续期困难，但未明确评价提案。',
        en: 'Wants continued work and relief from permit and status renewal difficulties, without clearly assessing the proposal.',
      },
      postedDate: '2026-07-29T04:00:00Z',
      textSha256:
        'c6efda46153dd6e92e6f9ec3182f5e2079980878b27c73340854fa06283da2ac',
    },
    {
      id: 'USCIS-2026-0067-0275',
      stance: 'oppose',
      themes: ['livelihood', 'economy'],
      summary: {
        zh: '要求保护合法工作机会、避免新增障碍，强调家庭和经济贡献。',
        en: 'Seeks protected lawful work and no new barriers, emphasizing family and economic contributions.',
      },
      postedDate: '2026-06-08T04:00:00Z',
      textSha256:
        '89d9198117ec6e6708385a262045d9c71eb619b20a9d20ee2f3242fd0c23fe42',
    },
    {
      id: 'USCIS-2026-0067-0056',
      stance: 'oppose',
      themes: ['humanitarian', 'livelihood'],
      summary: {
        zh: '反对限制人道假释者就业，要求保留保护和家庭稳定。',
        en: 'Opposes restrictions on humanitarian parolees’ work and seeks preserved protection and family stability.',
      },
      postedDate: '2026-06-08T04:00:00Z',
      textSha256:
        '86154e76ba07f128b2fcff2dc1cc2a0062ad46fe837727d8e57a2ffdb58a4b7e',
    },
    {
      id: 'USCIS-2026-0067-4804',
      stance: 'oppose',
      themes: ['victims', 'everify', 'discretion'],
      summary: {
        zh: '认为E-Verify和统一裁量框架违反受害者保密保护，要求重新考虑或排除U签证申请人。',
        en: 'Argues E-Verify and a uniform discretion framework violate victim confidentiality and seeks reconsideration or exclusion of U-visa applicants.',
      },
      postedDate: '2026-08-05T04:00:00Z',
      textSha256:
        'f4f3b844788bf2e73ce9aa1f3fc39b607c9ffef7cad369e24bea85f1327cb370',
    },
    {
      id: 'USCIS-2026-0067-2809',
      stance: 'oppose',
      themes: [
        'humanitarian',
        'livelihood',
        'renewals',
        'everify',
        'discretion',
      ],
      summary: {
        zh: '要求撤回整项提案，认为裁量、年度续期和雇主验证限制伤害阿富汗盟友并违背信赖利益。',
        en: 'Urges withdrawal of the entire proposal, arguing that discretion, annual renewals and employer verification barriers harm Afghan allies and disregard reliance interests.',
      },
      postedDate: '2026-07-29T04:00:00Z',
      textSha256:
        '0807bf7c4e72bcb6ef770a67d15602892d4bf2d0d04e0ffed5b0736715f7ec45',
    },
    {
      id: 'USCIS-2026-0067-1718',
      stance: 'unclear',
      themes: ['renewals', 'humanitarian', 'livelihood'],
      summary: {
        zh: '请求解决办理积压和工作中断，未明确评价提案。',
        en: 'Requests relief from processing backlogs and interrupted work, without clearly assessing the proposal.',
      },
      postedDate: '2026-07-17T04:00:00Z',
      textSha256:
        '4fc9035d3b1b8ec0ca0cdccf56d72ffc37336abc378b07d486867115f5fe1159',
    },
    {
      id: 'USCIS-2026-0067-4454',
      stance: 'unclear',
      themes: ['livelihood', 'economy'],
      summary: {
        zh: '要求权衡限制就业的人道和经济影响，未明确支持或反对提案。',
        en: 'Asks that human and economic impacts of work limits be weighed, without clearly supporting or opposing the proposal.',
      },
      postedDate: '2026-08-04T04:00:00Z',
      textSha256:
        '4ae527323e94f069464e679bd93f10c01012fbd43648181a414035aa4fe46262',
    },
    {
      id: 'USCIS-2026-0067-0830',
      stance: 'oppose',
      themes: ['criminal', 'discretion', 'livelihood', 'economy'],
      summary: {
        zh: '反对工作许可限制和无定罪逮捕推定，强调程序权利及经济损失。',
        en: 'Opposes permit restrictions and non-conviction arrest presumptions, citing due process and economic harm.',
      },
      postedDate: '2026-06-12T04:00:00Z',
      textSha256:
        'a3ecf9a3289ff6757f6512011ecfd5ea3bc4081a03501e63b8d1d0400ef7068a',
    },
    {
      id: 'USCIS-2026-0067-3640',
      stance: 'oppose',
      themes: ['livelihood', 'economy'],
      summary: {
        zh: '要求保护合法工作机会、避免新增障碍，强调家庭和经济贡献。',
        en: 'Seeks protected lawful work and no new barriers, emphasizing family and economic contributions.',
      },
      postedDate: '2026-08-03T04:00:00Z',
      textSha256:
        '7f164ba4d0106f67ca62a68785ec28c9d132fa16f7c5718e24cd9af7297003ba',
    },
    {
      id: 'USCIS-2026-0067-2107',
      stance: 'oppose',
      themes: ['livelihood', 'economy', 'humanitarian'],
      summary: {
        zh: '要求保留人道假释者工作许可，认为限制会破坏自立和经济贡献。',
        en: 'Seeks preserved work permits for humanitarian parolees, arguing restrictions undermine self-sufficiency and economic contributions.',
      },
      postedDate: '2026-07-23T04:00:00Z',
      textSha256:
        '53132a24a37713e1c836d992b6e7f751ba4a71e81a8e0b4d91e85d6f88625bb1',
    },
    {
      id: 'USCIS-2026-0067-0957',
      stance: 'oppose',
      themes: ['humanitarian', 'livelihood'],
      summary: {
        zh: '反对限制人道假释者就业，要求保留保护和家庭稳定。',
        en: 'Opposes restrictions on humanitarian parolees’ work and seeks preserved protection and family stability.',
      },
      postedDate: '2026-06-16T04:00:00Z',
      textSha256:
        'f206a1271e5144a9fb88d02d08194ee6f4971a2706e5c46dc662c860cbe59b94',
    },
    {
      id: 'USCIS-2026-0067-3946',
      stance: 'oppose',
      themes: ['livelihood', 'economy'],
      summary: {
        zh: '要求保护合法工作机会、避免新增障碍，强调家庭和经济贡献。',
        en: 'Seeks protected lawful work and no new barriers, emphasizing family and economic contributions.',
      },
      postedDate: '2026-08-03T04:00:00Z',
      textSha256:
        '5e1fef4aed95ff10c408df93960b450874ab906a01e0083367d1e11a87f23cfe',
    },
    {
      id: 'USCIS-2026-0067-4779',
      stance: 'unclear',
      themes: ['economy', 'humanitarian'],
      summary: {
        zh: '强调照护行业依赖移民并请求考虑离境背景，未明确提案立场。',
        en: 'Notes caregiving relies on immigrants and seeks consideration of circumstances fled, without a clear proposal stance.',
      },
      postedDate: '2026-08-05T04:00:00Z',
      textSha256:
        'e2a3f4f616e04f2f4e07e5f149936509987f332f46a96a9c293f924de50d6098',
    },
    {
      id: 'USCIS-2026-0067-1329',
      stance: 'unclear',
      themes: ['humanitarian', 'livelihood', 'renewals'],
      summary: {
        zh: '要求恢复乌克兰人工作许可，主要讨论现有暂停和TPS困境而非提案。',
        en: 'Seeks restored Ukrainian work permits, focusing on existing suspensions and TPS hardship rather than the proposal.',
      },
      postedDate: '2026-07-13T04:00:00Z',
      textSha256:
        'fcdfdbd97f69e9b349227f77ea9e9019fa51ff73430c737c02c8060f3848df20',
    },
    {
      id: 'USCIS-2026-0067-3811',
      stance: 'oppose',
      themes: ['humanitarian', 'renewals', 'livelihood'],
      summary: {
        zh: '反对更繁重的要求和程序，要求保留公平可及的人道工作许可。',
        en: 'Opposes heavier requirements and procedures and seeks fair, accessible humanitarian work authorization.',
      },
      postedDate: '2026-08-03T04:00:00Z',
      textSha256:
        '757809ea19f4900de4002e8a3a60c09c3e1d5b2ec4815c8abea684cafe1f16a0',
    },
    {
      id: 'USCIS-2026-0067-3833',
      stance: 'oppose',
      themes: ['livelihood', 'economy'],
      summary: {
        zh: '要求保护合法工作机会、避免新增障碍，强调家庭和经济贡献。',
        en: 'Seeks protected lawful work and no new barriers, emphasizing family and economic contributions.',
      },
      postedDate: '2026-08-03T04:00:00Z',
      textSha256:
        '666c794dc17b91de172f7fea1b27e5aa059dcc5abd90b1c1a19d257c26af288a',
    },
    {
      id: 'USCIS-2026-0067-1070',
      stance: 'oppose',
      themes: ['economy'],
      summary: {
        zh: '明确反对提案，认为失去工作许可会损害社区可持续发展。',
        en: 'Explicitly opposes the proposal, arguing work permit losses harm community sustainability.',
      },
      postedDate: '2026-06-23T04:00:00Z',
      textSha256:
        '8eb67bc5d1fe3573e79b40366ca351f5bfb25a1375b7677f0b8252169a43dfff',
    },
    {
      id: 'USCIS-2026-0067-1998',
      stance: 'unclear',
      themes: ['renewals', 'humanitarian', 'livelihood'],
      summary: {
        zh: '请求解决办理积压和工作中断，未明确评价提案。',
        en: 'Requests relief from processing backlogs and interrupted work, without clearly assessing the proposal.',
      },
      postedDate: '2026-07-20T04:00:00Z',
      textSha256:
        'cc4417f7398363d2915c29e93f86362c302a5fff17333148e203a26edc2958ff',
    },
    {
      id: 'USCIS-2026-0067-2892',
      stance: 'oppose',
      themes: ['livelihood', 'economy'],
      summary: {
        zh: '要求保护合法工作机会、避免新增障碍，强调家庭和经济贡献。',
        en: 'Seeks protected lawful work and no new barriers, emphasizing family and economic contributions.',
      },
      postedDate: '2026-07-29T04:00:00Z',
      textSha256:
        '9c537276c5bb31631e92d10e793be549fc0c9f673f6b940e685d6cdeb4561edc',
    },
    {
      id: 'USCIS-2026-0067-0638',
      stance: 'oppose',
      themes: [
        'humanitarian',
        'livelihood',
        'renewals',
        'everify',
        'discretion',
      ],
      summary: {
        zh: '要求撤回整项提案，认为裁量、年度续期和雇主验证限制伤害阿富汗盟友并违背信赖利益。',
        en: 'Urges withdrawal of the entire proposal, arguing that discretion, annual renewals and employer verification barriers harm Afghan allies and disregard reliance interests.',
      },
      postedDate: '2026-06-09T04:00:00Z',
      textSha256:
        '0807bf7c4e72bcb6ef770a67d15602892d4bf2d0d04e0ffed5b0736715f7ec45',
    },
    {
      id: 'USCIS-2026-0067-3722',
      stance: 'oppose',
      themes: ['humanitarian', 'livelihood'],
      summary: {
        zh: '反对限制人道假释者就业，要求保留保护和家庭稳定。',
        en: 'Opposes restrictions on humanitarian parolees’ work and seeks preserved protection and family stability.',
      },
      postedDate: '2026-08-03T04:00:00Z',
      textSha256:
        '1ecf8936da4376d74e5728b0f858552da31de4f7b11235f4285b2dca27e44374',
    },
    {
      id: 'USCIS-2026-0067-0538',
      stance: 'oppose',
      themes: [
        'humanitarian',
        'livelihood',
        'renewals',
        'everify',
        'discretion',
      ],
      summary: {
        zh: '要求撤回整项提案，认为裁量、年度续期和雇主验证限制伤害阿富汗盟友并违背信赖利益。',
        en: 'Urges withdrawal of the entire proposal, arguing that discretion, annual renewals and employer verification barriers harm Afghan allies and disregard reliance interests.',
      },
      postedDate: '2026-06-09T04:00:00Z',
      textSha256:
        '0807bf7c4e72bcb6ef770a67d15602892d4bf2d0d04e0ffed5b0736715f7ec45',
    },
    {
      id: 'USCIS-2026-0067-1833',
      stance: 'unclear',
      themes: ['renewals', 'humanitarian', 'livelihood'],
      summary: {
        zh: '请求解决办理积压和工作中断，未明确评价提案。',
        en: 'Requests relief from processing backlogs and interrupted work, without clearly assessing the proposal.',
      },
      postedDate: '2026-07-20T04:00:00Z',
      textSha256:
        '802d44f05b0a76f70c2ace0e8be2969acc26c37a53b7074033dfd8b15630fb53',
    },
    {
      id: 'USCIS-2026-0067-3742',
      stance: 'oppose',
      themes: ['livelihood', 'economy'],
      summary: {
        zh: '要求保护合法工作机会、避免新增障碍，强调家庭和经济贡献。',
        en: 'Seeks protected lawful work and no new barriers, emphasizing family and economic contributions.',
      },
      postedDate: '2026-08-03T04:00:00Z',
      textSha256:
        '149179f46f7553e2fede7ae3dea1c2c57f326470361298893e62d37832c5f299',
    },
    {
      id: 'USCIS-2026-0067-1653',
      stance: 'unclear',
      themes: ['livelihood'],
      summary: {
        zh: '强调工作对家庭生存的重要性，未明确评价提案。',
        en: 'Emphasizes work as essential to household survival, without clearly assessing the proposal.',
      },
      postedDate: '2026-07-15T04:00:00Z',
      textSha256:
        'd22e0aaca55284ae7c4f30600780846de87ae82f1ec68fc09dd7b3f9c13dcc14',
    },
    {
      id: 'USCIS-2026-0067-2413',
      stance: 'oppose',
      themes: [
        'humanitarian',
        'renewals',
        'discretion',
        'everify',
        'livelihood',
        'economy',
      ],
      summary: {
        zh: '反对新增经济必要性、裁量和雇主验证障碍，要求保留人道假释者就业。',
        en: 'Opposes added economic-necessity, discretion and employer-verification barriers and seeks preserved work for humanitarian parolees.',
      },
      postedDate: '2026-07-27T04:00:00Z',
      textSha256:
        'd7c4c40b4b284cc6305b62a26f664807588d69a1a0fb58c7b5360340f7f87553',
    },
    {
      id: 'USCIS-2026-0067-3259',
      stance: 'unclear',
      themes: ['livelihood'],
      summary: {
        zh: '强调工作对家庭生存的重要性，未明确评价提案。',
        en: 'Emphasizes work as essential to household survival, without clearly assessing the proposal.',
      },
      postedDate: '2026-07-31T04:00:00Z',
      textSha256:
        '47af5d6ad8093e661723970f3e2a69c2ea15758e8b00513d8c461bef67eab56c',
    },
    {
      id: 'USCIS-2026-0067-2803',
      stance: 'oppose',
      themes: [
        'humanitarian',
        'livelihood',
        'renewals',
        'everify',
        'discretion',
      ],
      summary: {
        zh: '要求撤回整项提案，认为裁量、年度续期和雇主验证限制伤害阿富汗盟友并违背信赖利益。',
        en: 'Urges withdrawal of the entire proposal, arguing that discretion, annual renewals and employer verification barriers harm Afghan allies and disregard reliance interests.',
      },
      postedDate: '2026-07-29T04:00:00Z',
      textSha256:
        '0807bf7c4e72bcb6ef770a67d15602892d4bf2d0d04e0ffed5b0736715f7ec45',
    },
    {
      id: 'USCIS-2026-0067-0857',
      stance: 'unclear',
      themes: ['discretion'],
      summary: {
        zh: '支持工作机会和公平审理，未明确评价提案。',
        en: 'Supports work opportunities and fair hearings, without clearly assessing the proposal.',
      },
      postedDate: '2026-06-15T04:00:00Z',
      textSha256:
        'cea15a0b37a457a5d5df3de451a13a49d72d71ac0e99300a2fd9b29c978a8cfe',
    },
    {
      id: 'USCIS-2026-0067-3562',
      stance: 'oppose',
      themes: ['livelihood', 'economy'],
      summary: {
        zh: '要求保护合法工作许可并避免新增障碍，强调家庭自立和经济贡献。',
        en: 'Seeks protected lawful work authorization without new barriers, emphasizing self-sufficiency and economic contributions.',
      },
      postedDate: '2026-08-03T04:00:00Z',
      textSha256:
        '35541a26efdb1bc743a4304529d142066e344a3f918cb626008e861836f25437',
    },
    {
      id: 'USCIS-2026-0067-0566',
      stance: 'oppose',
      themes: ['renewals', 'livelihood', 'economy'],
      summary: {
        zh: '要求保留合理工作许可准入，避免新程序带来不必要延误和障碍。',
        en: 'Seeks reasonable work authorization access and no unnecessary delays or barriers from new procedures.',
      },
      postedDate: '2026-06-09T04:00:00Z',
      textSha256:
        '5ee651f1849bbf93a1f4bbf8e78b1f85707bb9e4433650512cb5212f4b263c92',
    },
    {
      id: 'USCIS-2026-0067-2617',
      stance: 'oppose',
      themes: ['humanitarian', 'livelihood', 'economy'],
      summary: {
        zh: '要求变更不得增加守法受保护者继续工作的难度。',
        en: 'Asks that changes not make continued work harder for compliant people with humanitarian protection.',
      },
      postedDate: '2026-07-29T04:00:00Z',
      textSha256:
        '609cb208d2d56e63313eda33738403a4103e3f24441410653ec44870194f64ba',
    },
    {
      id: 'USCIS-2026-0067-3077',
      stance: 'oppose',
      themes: [
        'humanitarian',
        'livelihood',
        'renewals',
        'everify',
        'discretion',
      ],
      summary: {
        zh: '要求撤回整项提案，认为裁量、年度续期和雇主验证限制伤害阿富汗盟友并违背信赖利益。',
        en: 'Urges withdrawal of the entire proposal, arguing that discretion, annual renewals and employer verification barriers harm Afghan allies and disregard reliance interests.',
      },
      postedDate: '2026-07-30T04:00:00Z',
      textSha256:
        '0807bf7c4e72bcb6ef770a67d15602892d4bf2d0d04e0ffed5b0736715f7ec45',
    },
    {
      id: 'USCIS-2026-0067-2241',
      stance: 'oppose',
      themes: ['criminal', 'discretion', 'livelihood', 'economy', 'renewals'],
      summary: {
        zh: '要求撤回提案，反对无定罪记录推定和普遍生物识别负担，豁免为备选。',
        en: 'Urges withdrawal, opposing non-conviction presumptions and universal biometrics burdens, with exemptions as fallback.',
      },
      postedDate: '2026-07-24T04:00:00Z',
      textSha256:
        'd68f96de4ad4eeeca14cc30c85494e3449a1d551680954c87bf33c28f0eab04e',
    },
    {
      id: 'USCIS-2026-0067-0039',
      stance: 'oppose',
      themes: ['renewals', 'livelihood', 'economy'],
      summary: {
        zh: '要求保持公平准入及更长许可期限，认为限制伤害家庭和企业。',
        en: 'Seeks fair access and longer permit validity, arguing restrictions harm families and businesses.',
      },
      postedDate: '2026-06-08T04:00:00Z',
      textSha256:
        '724b8b09aa89971456dfc13b8c5b51c99734bacb0c89286c253361a43789e7d4',
    },
    {
      id: 'USCIS-2026-0067-3336',
      stance: 'oppose',
      themes: ['livelihood', 'economy'],
      summary: {
        zh: '要求保护合法工作许可并避免新增障碍，强调家庭自立和经济贡献。',
        en: 'Seeks protected lawful work authorization without new barriers, emphasizing self-sufficiency and economic contributions.',
      },
      postedDate: '2026-07-31T04:00:00Z',
      textSha256:
        'ba954689a28e9c4a1a432d5ea820e1d79bb9526721d7049272bbaacafd21508f',
    },
    {
      id: 'USCIS-2026-0067-2554',
      stance: 'oppose',
      themes: [
        'humanitarian',
        'discretion',
        'everify',
        'renewals',
        'livelihood',
        'economy',
      ],
      summary: {
        zh: '要求保留无新增裁量障碍的准入，豁免E-Verify并在假释续期等待期间继续许可。',
        en: 'Seeks access without new discretionary barriers, E-Verify exemption and continued permits during re-parole waits.',
      },
      postedDate: '2026-07-29T04:00:00Z',
      textSha256:
        '0b875ead1f55d8717f597e7f8ef1d5f67eca2d78db114f7be34ea5611b5e1796',
    },
    {
      id: 'USCIS-2026-0067-1071',
      stance: 'oppose',
      themes: ['renewals', 'livelihood', 'economy'],
      summary: {
        zh: '批评限制工作许可会惩罚守法者并造成财务危机，要求保护工作权。',
        en: 'Criticizes restrictions as punishing compliant people and creating financial crises, and seeks protected work rights.',
      },
      postedDate: '2026-06-24T04:00:00Z',
      textSha256:
        'aebceffa83259b5c37fdc694cf7e3f31d411c82d49bf1b00ed09f788223142c8',
    },
    {
      id: 'USCIS-2026-0067-1439',
      stance: 'unclear',
      themes: ['renewals', 'discretion'],
      summary: {
        zh: '要求透明办理期限和费用减免，未明确对提案表达支持或反对。',
        en: 'Requests transparent processing timelines and fee relief, without clear support or opposition to the proposal.',
      },
      postedDate: '2026-07-13T04:00:00Z',
      textSha256:
        'dfe496c333ae5cdbf68732679a2e39eb0529f4e4faf207c9b9682d6e3070ceb0',
    },
    {
      id: 'USCIS-2026-0067-1114',
      stance: 'oppose',
      themes: ['livelihood', 'economy'],
      summary: {
        zh: '要求保护合法工作许可并避免新增障碍，强调家庭自立和经济贡献。',
        en: 'Seeks protected lawful work authorization without new barriers, emphasizing self-sufficiency and economic contributions.',
      },
      postedDate: '2026-06-29T04:00:00Z',
      textSha256:
        'dafd6c534781452114b6cfd71ad8402c1295a14d1a6f7e96c21f6014fa06b544',
    },
    {
      id: 'USCIS-2026-0067-3464',
      stance: 'oppose',
      themes: ['livelihood', 'economy'],
      summary: {
        zh: '要求保护合法工作许可并避免新增障碍，强调家庭自立和经济贡献。',
        en: 'Seeks protected lawful work authorization without new barriers, emphasizing self-sufficiency and economic contributions.',
      },
      postedDate: '2026-08-03T04:00:00Z',
      textSha256:
        '56c49ce73875c6aaac9d65294802db17c672207a08e94498340b7a6879ab8139',
    },
    {
      id: 'USCIS-2026-0067-1707',
      stance: 'oppose',
      themes: ['humanitarian', 'livelihood', 'economy', 'renewals'],
      summary: {
        zh: '要求重新考虑就业限制，认为其会增加贫困、非法就业和企业损失。',
        en: 'Seeks reconsideration of work restrictions, arguing they increase poverty, unauthorized employment and business losses.',
      },
      postedDate: '2026-07-16T04:00:00Z',
      textSha256:
        '2d738bfad92a7531c483032b0d9d14f49ca5c96a864a5660f23c29f2d803da46',
    },
    {
      id: 'USCIS-2026-0067-3605',
      stance: 'oppose',
      themes: ['livelihood', 'economy'],
      summary: {
        zh: '要求保护合法工作许可并避免新增障碍，强调家庭自立和经济贡献。',
        en: 'Seeks protected lawful work authorization without new barriers, emphasizing self-sufficiency and economic contributions.',
      },
      postedDate: '2026-08-03T04:00:00Z',
      textSha256:
        'f0b7ce10533d9fe12fec3cd4841b63f395965cfb27f93a7b39b129f510ebb98c',
    },
    {
      id: 'USCIS-2026-0067-0856',
      stance: 'oppose',
      themes: ['criminal', 'discretion', 'livelihood', 'economy'],
      summary: {
        zh: '明确反对提案，认为逮捕记录限制不公平并伤害家庭及经济。',
        en: 'Explicitly opposes the proposal, calling arrest-record restrictions unfair and harmful to households and the economy.',
      },
      postedDate: '2026-06-15T04:00:00Z',
      textSha256:
        'a4bc372837f69b7e35de6288668e07c49999236a4a59969c36d092b5a212b4fd',
    },
    {
      id: 'USCIS-2026-0067-0227',
      stance: 'oppose',
      themes: ['humanitarian', 'livelihood', 'economy'],
      summary: {
        zh: '要求保留合法工作准入以维持受战争影响家庭的自立。',
        en: 'Seeks preserved lawful work access to sustain war-affected families’ independence.',
      },
      postedDate: '2026-06-08T04:00:00Z',
      textSha256:
        '3285dcf6cee8ca9833b688b41c76874aadf8911726fc59216459afcdb775094b',
    },
    {
      id: 'USCIS-2026-0067-2322',
      stance: 'oppose',
      themes: ['economy', 'discretion', 'renewals', 'everify'],
      summary: {
        zh: '要求撤回对监督令、暂缓遣返和假释者的限制，强调信赖利益、经济和行政成本。',
        en: 'Urges withdrawal of restrictions on supervision orders, deferred action and parole, citing reliance interests and economic and administrative costs.',
      },
      postedDate: '2026-07-27T04:00:00Z',
      textSha256:
        'd63ebe8d4f49d2f562ba2b33e22df95467ead774750205695ac191d5d3a5c820',
    },
    {
      id: 'USCIS-2026-0067-2038',
      stance: 'oppose',
      themes: [
        'humanitarian',
        'renewals',
        'discretion',
        'everify',
        'livelihood',
        'economy',
      ],
      summary: {
        zh: '反对新增经济必要性、裁量和雇主验证障碍，要求保留人道假释者就业。',
        en: 'Opposes added economic-necessity, discretion and employer-verification barriers and seeks preserved work for humanitarian parolees.',
      },
      postedDate: '2026-07-21T04:00:00Z',
      textSha256:
        '13adf30f9f62f4679dedea54766950f59d42864ea2c970a01048c57c84505fde',
    },
    {
      id: 'USCIS-2026-0067-1219',
      stance: 'oppose',
      themes: ['livelihood', 'economy'],
      summary: {
        zh: '反对增加工作许可难度，强调守法就业者的经济贡献。',
        en: 'Opposes making work permits harder to obtain, emphasizing lawful workers’ economic contributions.',
      },
      postedDate: '2026-07-13T04:00:00Z',
      textSha256:
        '948a938060be86ed573a170325ce5b3274e9a96d9de54e08335a21a15e23cbe8',
    },
    {
      id: 'USCIS-2026-0067-1049',
      stance: 'oppose',
      themes: [
        'humanitarian',
        'livelihood',
        'renewals',
        'everify',
        'discretion',
      ],
      summary: {
        zh: '要求撤回整项提案，认为裁量、年度续期和雇主验证限制伤害阿富汗盟友并违背信赖利益。',
        en: 'Urges withdrawal of the entire proposal, arguing that discretion, annual renewals and employer verification barriers harm Afghan allies and disregard reliance interests.',
      },
      postedDate: '2026-06-22T04:00:00Z',
      textSha256:
        '0807bf7c4e72bcb6ef770a67d15602892d4bf2d0d04e0ffed5b0736715f7ec45',
    },
    {
      id: 'USCIS-2026-0067-1573',
      stance: 'unclear',
      themes: ['renewals', 'livelihood', 'humanitarian', 'economy'],
      summary: {
        zh: '要求及时办理工作许可以减少家庭和就业困难，未明确评价提案。',
        en: 'Seeks timely work permits to reduce household and employment hardship, without clearly assessing the proposal.',
      },
      postedDate: '2026-07-14T04:00:00Z',
      textSha256:
        'b6b8443f9daa54685c5c7bbeeee178896f25739177aeaa80c846e9a711c7103f',
    },
    {
      id: 'USCIS-2026-0067-2093',
      stance: 'oppose',
      themes: ['economy'],
      summary: {
        zh: '要求否决该行动，认为受影响者已成为社会重要贡献者。',
        en: 'Calls for rejecting the action, describing affected people as established contributors to society.',
      },
      postedDate: '2026-07-22T04:00:00Z',
      textSha256:
        'f122a79026f8cf4859746c1f3f5776413dd52347c4bd4fe51d6543b1081a0805',
    },
    {
      id: 'USCIS-2026-0067-4431',
      stance: 'oppose',
      themes: ['criminal', 'discretion', 'livelihood', 'economy'],
      summary: {
        zh: '认为因无定罪逮捕危及许可会不公平地惩罚守法者并违背信赖。',
        en: 'Argues threatening permits over arrests without convictions unfairly punishes compliant people and disregards reliance.',
      },
      postedDate: '2026-08-04T04:00:00Z',
      textSha256:
        '9ea64ca0c28ce98b713406e551de29dad01bdf7698f0ab77fe31d1f3813bd4b2',
    },
    {
      id: 'USCIS-2026-0067-3926',
      stance: 'oppose',
      themes: ['livelihood', 'economy'],
      summary: {
        zh: '要求保护合法工作许可并避免新增障碍，强调家庭自立和经济贡献。',
        en: 'Seeks protected lawful work authorization without new barriers, emphasizing self-sufficiency and economic contributions.',
      },
      postedDate: '2026-08-03T04:00:00Z',
      textSha256:
        'd462fa408545925df7076a1506fe202c9d8e585f7171c8c5e73c2f04279864c6',
    },
    {
      id: 'USCIS-2026-0067-1337',
      stance: 'unclear',
      themes: ['renewals', 'livelihood'],
      summary: {
        zh: '描述办理延误带来的失业和家庭压力，未评价提案。',
        en: 'Describes job loss and household pressure from processing delays, without assessing the proposal.',
      },
      postedDate: '2026-07-13T04:00:00Z',
      textSha256:
        '4127dacca7b349ee5d6b0f57f815d702d2f99d7f9514b6199c2966afdfca51eb',
    },
    {
      id: 'USCIS-2026-0067-4567',
      stance: 'oppose',
      themes: [
        'humanitarian',
        'discretion',
        'everify',
        'renewals',
        'livelihood',
        'economy',
      ],
      summary: {
        zh: '要求撤回人道假释就业限制，反对经济必要性、E-Verify和频繁续期。',
        en: 'Urges withdrawal of humanitarian parole work restrictions, opposing economic necessity, E-Verify and frequent renewals.',
      },
      postedDate: '2026-08-04T04:00:00Z',
      textSha256:
        '27ea4e9ee78ee295e64e3cfa3cd171bfdf3edf6f3d165c533b9b840f108497bf',
    },
    {
      id: 'USCIS-2026-0067-0661',
      stance: 'oppose',
      themes: [
        'humanitarian',
        'livelihood',
        'renewals',
        'everify',
        'discretion',
      ],
      summary: {
        zh: '要求撤回整项提案，认为裁量、年度续期和雇主验证限制伤害阿富汗盟友并违背信赖利益。',
        en: 'Urges withdrawal of the entire proposal, arguing that discretion, annual renewals and employer verification barriers harm Afghan allies and disregard reliance interests.',
      },
      postedDate: '2026-06-09T04:00:00Z',
      textSha256:
        '0807bf7c4e72bcb6ef770a67d15602892d4bf2d0d04e0ffed5b0736715f7ec45',
    },
    {
      id: 'USCIS-2026-0067-3678',
      stance: 'oppose',
      themes: ['livelihood', 'economy'],
      summary: {
        zh: '要求保护合法工作许可，避免增加家庭和经济负担的障碍。',
        en: 'Seeks protected lawful work permits without added barriers burdening families and the economy.',
      },
      postedDate: '2026-08-03T04:00:00Z',
      textSha256:
        '60dd91ff052800d32eff6fb2bd5d65184ccb1cdc1040de586d102a6b04df3027',
    },
    {
      id: 'USCIS-2026-0067-1111',
      stance: 'unclear',
      themes: [],
      summary: {
        zh: '笼统批评对移民群体的待遇，未明确指向提案。',
        en: 'Broadly criticizes treatment of immigrants without clearly addressing the proposal.',
      },
      postedDate: '2026-06-29T04:00:00Z',
      textSha256:
        '9a3da545f08e2c8ba8729e28f8bed6d6f989a4e4c5742b28b8d4cf7fd453b5d5',
    },
    {
      id: 'USCIS-2026-0067-1888',
      stance: 'oppose',
      themes: ['humanitarian', 'livelihood', 'economy'],
      summary: {
        zh: '要求保持公平实用的许可程序，以便合法居留者继续自立。',
        en: 'Seeks a fair and practical permit process so lawfully present people can remain self-sufficient.',
      },
      postedDate: '2026-07-20T04:00:00Z',
      textSha256:
        'e2f5d7fa8f4df7589f9a6f4e0be00de2049a7585032180cfbdaa76dee13c0550',
    },
    {
      id: 'USCIS-2026-0067-3477',
      stance: 'unclear',
      themes: ['humanitarian', 'livelihood'],
      summary: {
        zh: '表达对安全和工作机会的感激，未明确评价提案。',
        en: 'Expresses gratitude for safety and work opportunities, without clearly assessing the proposal.',
      },
      postedDate: '2026-08-03T04:00:00Z',
      textSha256:
        'a88c3e659d4a3158c71269da3bd446bef9fd233d4bc11f79cf4b1d2c3739c708',
    },
    {
      id: 'USCIS-2026-0067-2137',
      stance: 'oppose',
      themes: ['humanitarian', 'renewals', 'livelihood', 'economy'],
      summary: {
        zh: '要求乌克兰假释者继续符合工作许可资格，强调雇主和社区影响。',
        en: 'Seeks continued work permit eligibility for Ukrainian parolees, emphasizing employers and community impacts.',
      },
      postedDate: '2026-07-23T04:00:00Z',
      textSha256:
        'dd4cdd82391d2cd7a6ab80acdcc4ac116ec83498c30d4d33a719667d085644df',
      sourceNote: {
        zh: '已尝试官方附件下载，均返回HTTP 403；分类仅依据可读正文，附件内容未获核实。',
        en: 'Official attachment downloads were attempted and returned HTTP 403; classification uses readable body text only, and attachment contents were not verified.',
      },
    },
    {
      id: 'USCIS-2026-0067-1928',
      stance: 'oppose',
      themes: ['economy', 'livelihood'],
      summary: {
        zh: '批评该决定会造成失业贫困并损失税收。',
        en: 'Criticizes the decision as creating unemployment and poverty and losing tax revenue.',
      },
      postedDate: '2026-07-20T04:00:00Z',
      textSha256:
        'c904e9f86283a017a1f890142161034ddb3d29fe56d201d7a89a5b3e045e78ea',
    },
    {
      id: 'USCIS-2026-0067-0616',
      stance: 'oppose',
      themes: [
        'humanitarian',
        'livelihood',
        'renewals',
        'everify',
        'discretion',
      ],
      summary: {
        zh: '要求撤回整项提案，认为裁量、年度续期和雇主验证限制伤害阿富汗盟友并违背信赖利益。',
        en: 'Urges withdrawal of the entire proposal, arguing that discretion, annual renewals and employer verification barriers harm Afghan allies and disregard reliance interests.',
      },
      postedDate: '2026-06-09T04:00:00Z',
      textSha256:
        '0807bf7c4e72bcb6ef770a67d15602892d4bf2d0d04e0ffed5b0736715f7ec45',
    },
    {
      id: 'USCIS-2026-0067-1465',
      stance: 'unclear',
      themes: ['humanitarian', 'renewals', 'livelihood', 'economy'],
      summary: {
        zh: '要求及时续发乌克兰人工作许可，正文未明确评价提案。',
        en: 'Seeks timely Ukrainian work permit renewals; the body does not clearly assess the proposal.',
      },
      postedDate: '2026-07-13T04:00:00Z',
      textSha256:
        '4cff94ca30699ef7a5393d0d85530b713fe1dd6e8050871eda5b818879b60c97',
      sourceNote: {
        zh: '已尝试官方附件下载，均返回HTTP 403；分类仅依据可读正文，附件内容未获核实。',
        en: 'Official attachment downloads were attempted and returned HTTP 403; classification uses readable body text only, and attachment contents were not verified.',
      },
    },
    {
      id: 'USCIS-2026-0067-4757',
      stance: 'oppose',
      themes: ['humanitarian', 'renewals', 'livelihood'],
      summary: {
        zh: '担心新增要求加剧延误和困境，要求维持可及人道的工作许可。',
        en: 'Warns new requirements worsen delays and hardship and seeks accessible humanitarian work permits.',
      },
      postedDate: '2026-08-05T04:00:00Z',
      textSha256:
        '25fb6628adf2f20161926307f9240a28caf68b53cd09a26625eb98f5fd223c97',
    },
    {
      id: 'USCIS-2026-0067-4377',
      stance: 'oppose',
      themes: ['livelihood', 'economy'],
      summary: {
        zh: '要求保护合法工作许可，避免增加家庭和经济负担的障碍。',
        en: 'Seeks protected lawful work permits without added barriers burdening families and the economy.',
      },
      postedDate: '2026-08-04T04:00:00Z',
      textSha256:
        'a935c09963326ee054568a7e520417df104f9a12a237cbbe6d32a73564ad3c6c',
    },
    {
      id: 'USCIS-2026-0067-1758',
      stance: 'oppose',
      themes: ['renewals', 'economy', 'livelihood'],
      summary: {
        zh: '要求重新考虑限制，认为短期不稳定许可妨碍招聘和职业发展。',
        en: 'Seeks reconsideration of restrictions, arguing short and uncertain permits impede hiring and career development.',
      },
      postedDate: '2026-07-20T04:00:00Z',
      textSha256:
        'deeae485c819ebf0bf21b60740223accef4df1b00c49cb855132ad2fd1611cf8',
    },
    {
      id: 'USCIS-2026-0067-2243',
      stance: 'oppose',
      themes: [],
      summary: {
        zh: '明确反对提案，主张平等和人道待遇。',
        en: 'Explicitly opposes the proposal and calls for equal and humane treatment.',
      },
      postedDate: '2026-07-24T04:00:00Z',
      textSha256:
        '17048d2213958a2f45adb5d5af103cbaef071c58d1889abf1a6f77e4cf11431b',
    },
    {
      id: 'USCIS-2026-0067-1624',
      stance: 'unclear',
      themes: ['renewals', 'livelihood'],
      summary: {
        zh: '描述办理延误带来的失业和家庭压力，未评价提案。',
        en: 'Describes job loss and household pressure from processing delays, without assessing the proposal.',
      },
      postedDate: '2026-07-15T04:00:00Z',
      textSha256:
        '9c078329beca1071cd5a874b23d1fe8f6f5c2a8c149bb966cbb91d18910453d2',
    },
    {
      id: 'USCIS-2026-0067-1305',
      stance: 'unclear',
      themes: ['renewals', 'livelihood'],
      summary: {
        zh: '描述办理延误带来的失业和家庭压力，未评价提案。',
        en: 'Describes job loss and household pressure from processing delays, without assessing the proposal.',
      },
      postedDate: '2026-07-13T04:00:00Z',
      textSha256:
        '9e30db11c1f0683b359a0befd370d4ae56364ef7cf0ec40a72767a8f56c6eec8',
    },
    {
      id: 'USCIS-2026-0067-4137',
      stance: 'oppose',
      themes: ['livelihood', 'economy'],
      summary: {
        zh: '要求保护合法工作许可，避免增加家庭和经济负担的障碍。',
        en: 'Seeks protected lawful work permits without added barriers burdening families and the economy.',
      },
      postedDate: '2026-08-03T04:00:00Z',
      textSha256:
        '11f81d8d81a5ec65c31df763781f2ae8a4879889dc754f8b32661ff0a53e73a4',
    },
    {
      id: 'USCIS-2026-0067-3519',
      stance: 'oppose',
      themes: ['humanitarian'],
      summary: {
        zh: '要求继续给乌克兰人工作许可。',
        en: 'Asks for continued work authorization for Ukrainians.',
      },
      postedDate: '2026-08-03T04:00:00Z',
      textSha256:
        'c6573ab73b9756f58c7ddcd77e052c052ae717bc503a71838861ec97628d23d4',
    },
    {
      id: 'USCIS-2026-0067-1914',
      stance: 'unclear',
      themes: ['economy', 'livelihood'],
      summary: {
        zh: '描述就业和纳税的好处，未表达提案立场。',
        en: 'Describes benefits of employment and taxes, without a proposal stance.',
      },
      postedDate: '2026-07-20T04:00:00Z',
      textSha256:
        'aa7ebcc35d0057ffc81ab6a5837671d5fcf30eabc5f576c26746e8c16572cdc5',
    },
    {
      id: 'USCIS-2026-0067-3756',
      stance: 'oppose',
      themes: ['livelihood', 'economy'],
      summary: {
        zh: '要求保护合法工作许可，避免增加家庭和经济负担的障碍。',
        en: 'Seeks protected lawful work permits without added barriers burdening families and the economy.',
      },
      postedDate: '2026-08-03T04:00:00Z',
      textSha256:
        '603230074340be273b608b3988338cb489a33efcb8bd5d2e2ebd04ab62fc5d49',
    },
    {
      id: 'USCIS-2026-0067-3437',
      stance: 'oppose',
      themes: ['criminal', 'renewals', 'livelihood'],
      summary: {
        zh: '要求撤回限制并减少积压，反对久远记录继续影响就业。',
        en: 'Urges withdrawal and fewer backlogs, opposing old records continuing to affect employment.',
      },
      postedDate: '2026-07-31T04:00:00Z',
      textSha256:
        'ac64ba4d8413709d1d61cd790f04fbf8d4f1650373068bb16c7edeb45af5740b',
    },
    {
      id: 'USCIS-2026-0067-2949',
      stance: 'oppose',
      themes: ['discretion', 'renewals', 'everify', 'criminal', 'livelihood'],
      summary: {
        zh: '要求撤回整项提案，反对裁量、自动终止、雇主验证和逮捕记录门槛。',
        en: 'Urges full withdrawal, opposing discretion, automatic termination, employer verification and arrest-record barriers.',
      },
      postedDate: '2026-07-29T04:00:00Z',
      textSha256:
        '7cc5206e2b6d4a2a99881ed2a4ec082aa6afa064ba38401023ea7d19f1d69d56',
    },
    {
      id: 'USCIS-2026-0067-0476',
      stance: 'oppose',
      themes: ['livelihood', 'economy'],
      summary: {
        zh: '要求避免新增合法就业障碍，强调自立家庭的税收和经济贡献。',
        en: 'Seeks no new lawful-employment barriers, emphasizing self-sufficient households’ taxes and economic contributions.',
      },
      postedDate: '2026-06-09T04:00:00Z',
      textSha256:
        '61c0440ffa67375ade8be17130e0d9029658d7541705839861322adef3b6c58e',
    },
    {
      id: 'USCIS-2026-0067-3970',
      stance: 'unclear',
      themes: ['renewals', 'livelihood', 'economy'],
      summary: {
        zh: '要求解决现有续期积压和工作中断，未明确评价提案。',
        en: 'Seeks relief from existing renewal backlogs and work interruptions, without clearly assessing the proposal.',
      },
      postedDate: '2026-08-03T04:00:00Z',
      textSha256:
        'd3089cd9875c0425350bd386548601a47b9dc0573b83b939ff502e769f050d81',
    },
    {
      id: 'USCIS-2026-0067-2661',
      stance: 'unclear',
      themes: ['renewals', 'livelihood', 'economy'],
      summary: {
        zh: '要求解决现有续期积压和工作中断，未明确评价提案。',
        en: 'Seeks relief from existing renewal backlogs and work interruptions, without clearly assessing the proposal.',
      },
      postedDate: '2026-07-29T04:00:00Z',
      textSha256:
        '197db67a5f70669a12bc93f8ce32c4fac379f23d5ecc7d7fccf3fd0b90d4e7a9',
    },
    {
      id: 'USCIS-2026-0067-1266',
      stance: 'oppose',
      themes: ['economy', 'renewals', 'criminal', 'discretion', 'livelihood'],
      summary: {
        zh: '要求撤回或大改提案，认为限制会伤害经济、增加积压并削弱程序公平。',
        en: 'Urges withdrawal or major revision, arguing restrictions harm the economy, worsen backlogs and weaken due process.',
      },
      postedDate: '2026-07-13T04:00:00Z',
      textSha256:
        'd6b9df18dc3b8557ca8dbf5e86873f499e7123a129edc7c327a5325881a6a604',
    },
    {
      id: 'USCIS-2026-0067-0239',
      stance: 'oppose',
      themes: ['humanitarian', 'livelihood', 'economy'],
      summary: {
        zh: '担忧提案破坏家庭就业，要求保留人道假释者工作机会。',
        en: 'Fears the proposal undermines household employment and seeks preserved work opportunities for humanitarian parolees.',
      },
      postedDate: '2026-06-08T04:00:00Z',
      textSha256:
        'e3b225263c35a2170861bb3e345ea4ee14d842f5a6451cd99cc7698e24df4172',
    },
    {
      id: 'USCIS-2026-0067-2014',
      stance: 'oppose',
      themes: ['humanitarian', 'discretion', 'livelihood'],
      summary: {
        zh: '反对新增裁量、经济需要和工作邀约门槛，要求可靠工作许可。',
        en: 'Opposes added discretion, economic-need and job-offer barriers and seeks reliable work permits.',
      },
      postedDate: '2026-07-21T04:00:00Z',
      textSha256:
        'faaa09e2b5fca19ef7a565fd13a1b646d5f80eb1dddda0e0ded709eae9d9970a',
    },
    {
      id: 'USCIS-2026-0067-3972',
      stance: 'unclear',
      themes: [],
      summary: {
        zh: '正文仅指向附件，无法判断立场。',
        en: 'The body only refers to an attachment and does not establish a stance.',
      },
      postedDate: '2026-08-03T04:00:00Z',
      textSha256:
        '69b8e0ae0de125e1ba22c5680b01989718bd2706dfe91cd1e78d648287a694a8',
      sourceNote: {
        zh: '已尝试官方附件下载，均返回HTTP 403；分类仅依据可读正文，附件内容未获核实。',
        en: 'Official attachment downloads were attempted and returned HTTP 403; classification uses readable body text only, and attachment contents were not verified.',
      },
    },
    {
      id: 'USCIS-2026-0067-4781',
      stance: 'oppose',
      themes: ['humanitarian', 'discretion', 'everify', 'livelihood'],
      summary: {
        zh: '明确反对提案，认为经济必要性及E-Verify会使守法假释者失去自立机会。',
        en: 'Explicitly opposes the proposal, arguing economic necessity and E-Verify undermine compliant parolees’ self-sufficiency.',
      },
      postedDate: '2026-08-05T04:00:00Z',
      textSha256:
        '7c3edb93296bb6156386cf1435dcf78150b604bf229f183c0b4667e2bc9931a4',
    },
    {
      id: 'USCIS-2026-0067-1818',
      stance: 'unclear',
      themes: ['renewals', 'livelihood', 'economy'],
      summary: {
        zh: '要求解决现有续期积压和工作中断，未明确评价提案。',
        en: 'Seeks relief from existing renewal backlogs and work interruptions, without clearly assessing the proposal.',
      },
      postedDate: '2026-07-20T04:00:00Z',
      textSha256:
        'b4a6c740393490721debf554ff74941403778ed79a5041c39b468ef2f7c43a2c',
    },
    {
      id: 'USCIS-2026-0067-1273',
      stance: 'oppose',
      themes: ['renewals', 'livelihood', 'economy', 'humanitarian'],
      summary: {
        zh: '要求不要采纳提案，认为其加剧家庭压力并损害社区就业。',
        en: 'Asks against adoption, arguing the proposal adds household stress and harms community employment.',
      },
      postedDate: '2026-07-13T04:00:00Z',
      textSha256:
        '7d4ca564ae273898c71d0ce3bf29830a8de0cfb3e082b03597b04b9c2cc56ad8',
    },
    {
      id: 'USCIS-2026-0067-3155',
      stance: 'oppose',
      themes: ['discretion'],
      summary: {
        zh: '要求撤回提案，认为其缺乏合理依据并忽视DACA相关信赖利益。',
        en: 'Urges withdrawal, arguing the proposal lacks reasoned justification and ignores DACA-related reliance interests.',
      },
      postedDate: '2026-07-30T04:00:00Z',
      textSha256:
        '94738387fb0f09e71a033a091ea7bd0ca98b426fc48eb46632366204c3129c60',
    },
    {
      id: 'USCIS-2026-0067-0943',
      stance: 'oppose',
      themes: [
        'humanitarian',
        'livelihood',
        'renewals',
        'everify',
        'discretion',
      ],
      summary: {
        zh: '要求撤回整项提案，认为裁量、年度续期和雇主验证限制伤害阿富汗盟友并违背信赖利益。',
        en: 'Urges withdrawal of the entire proposal, arguing that discretion, annual renewals and employer verification barriers harm Afghan allies and disregard reliance interests.',
      },
      postedDate: '2026-06-15T04:00:00Z',
      textSha256:
        '0807bf7c4e72bcb6ef770a67d15602892d4bf2d0d04e0ffed5b0736715f7ec45',
    },
    {
      id: 'USCIS-2026-0067-2780',
      stance: 'oppose',
      themes: [
        'humanitarian',
        'livelihood',
        'renewals',
        'everify',
        'discretion',
        'economy',
      ],
      summary: {
        zh: '要求撤回整项提案，强调对阿富汗盟友的承诺、信赖利益及续期障碍。',
        en: 'Urges full withdrawal, citing commitments to Afghan allies, reliance interests and renewal barriers.',
      },
      postedDate: '2026-07-29T04:00:00Z',
      textSha256:
        '19ae5b9f00f5ffe50dcceb2a4d5ebba300f92d5e1e68d21a91adb3ea281e9620',
    },
    {
      id: 'USCIS-2026-0067-3051',
      stance: 'oppose',
      themes: [
        'humanitarian',
        'livelihood',
        'renewals',
        'everify',
        'discretion',
      ],
      summary: {
        zh: '要求撤回整项提案，认为裁量、年度续期和雇主验证限制伤害阿富汗盟友并违背信赖利益。',
        en: 'Urges withdrawal of the entire proposal, arguing that discretion, annual renewals and employer verification barriers harm Afghan allies and disregard reliance interests.',
      },
      postedDate: '2026-07-30T04:00:00Z',
      textSha256:
        '0807bf7c4e72bcb6ef770a67d15602892d4bf2d0d04e0ffed5b0736715f7ec45',
    },
    {
      id: 'USCIS-2026-0067-3431',
      stance: 'oppose',
      themes: ['criminal', 'discretion', 'economy', 'livelihood'],
      summary: {
        zh: '反对僵化犯罪记录限制，要求考虑康复、已完成刑罚和个别情况。',
        en: 'Opposes rigid criminal-history restrictions and seeks consideration of rehabilitation, completed sentences and individual circumstances.',
      },
      postedDate: '2026-07-31T04:00:00Z',
      textSha256:
        'a20d569c3a37ccbfcbe823d80e8333c8bac763336e9a8188a873eb6875698580',
    },
    {
      id: 'USCIS-2026-0067-1683',
      stance: 'unclear',
      themes: ['renewals', 'humanitarian', 'livelihood', 'economy'],
      summary: {
        zh: '要求及时处理乌克兰假释、TPS和工作许可续期，未表达提案立场。',
        en: 'Requests timely Ukrainian parole, TPS and work permit renewals, without expressing a proposal stance.',
      },
      postedDate: '2026-07-16T04:00:00Z',
      textSha256:
        'a86d6ff573ee2a7d196b35ce17bbd0a491072c327146107479aaf06ec9d7afa6',
    },
    {
      id: 'USCIS-2026-0067-0689',
      stance: 'oppose',
      themes: ['discretion', 'economy', 'livelihood'],
      summary: {
        zh: '批评提案加重任意裁量和办理复杂度，损害移民家庭与经济。',
        en: 'Criticizes added arbitrary discretion and processing complexity as harmful to immigrant households and the economy.',
      },
      postedDate: '2026-06-10T04:00:00Z',
      textSha256:
        '9b7c1072829259d9d7765edb2e118b253e69fb99686b43ad1288be491a740cd7',
    },
    {
      id: 'USCIS-2026-0067-0081',
      stance: 'oppose',
      themes: ['economy', 'livelihood', 'humanitarian'],
      summary: {
        zh: '明确反对提案，认为合法就业支持劳动力需求、自立和人道保护。',
        en: 'Explicitly opposes the proposal, arguing lawful work supports labor demand, self-sufficiency and humanitarian protection.',
      },
      postedDate: '2026-06-08T04:00:00Z',
      textSha256:
        '6cc4b8324b79c0a73107b000ff96ba16612282e8e223fe7462e9836e1becf224',
    },
    {
      id: 'USCIS-2026-0067-3181',
      stance: 'oppose',
      themes: [
        'humanitarian',
        'livelihood',
        'renewals',
        'everify',
        'discretion',
      ],
      summary: {
        zh: '要求撤回整项提案，认为裁量、年度续期和雇主验证限制伤害阿富汗盟友并违背信赖利益。',
        en: 'Urges withdrawal of the entire proposal, arguing that discretion, annual renewals and employer verification barriers harm Afghan allies and disregard reliance interests.',
      },
      postedDate: '2026-07-30T04:00:00Z',
      textSha256:
        '0807bf7c4e72bcb6ef770a67d15602892d4bf2d0d04e0ffed5b0736715f7ec45',
    },
    {
      id: 'USCIS-2026-0067-0611',
      stance: 'oppose',
      themes: [
        'humanitarian',
        'discretion',
        'everify',
        'renewals',
        'livelihood',
      ],
      summary: {
        zh: '要求撤回整项提案，强调对阿富汗盟友的承诺、信赖利益和就业限制。',
        en: 'Urges full withdrawal, emphasizing commitments to Afghan allies, reliance interests and employment restrictions.',
      },
      postedDate: '2026-06-09T04:00:00Z',
      textSha256:
        'e580d79e16e2677512f0f5180d649c3c4b12d243442b9289f8fbd7a8ce697596',
    },
    {
      id: 'USCIS-2026-0067-4525',
      stance: 'unclear',
      themes: [],
      summary: {
        zh: '正文仅指向附件，无法判断立场。',
        en: 'The body only refers to an attachment and does not establish a stance.',
      },
      postedDate: '2026-08-04T04:00:00Z',
      textSha256:
        'f57a02c717ada2ce922714836984bad201d137ce4ccc76a60803ff168ce5592e',
      sourceNote: {
        zh: '已尝试官方附件下载，均返回HTTP 403；分类仅依据可读正文，附件内容未获核实。',
        en: 'Official attachment downloads were attempted and returned HTTP 403; classification uses readable body text only, and attachment contents were not verified.',
      },
    },
    {
      id: 'USCIS-2026-0067-3218',
      stance: 'oppose',
      themes: ['humanitarian', 'renewals', 'livelihood', 'economy'],
      summary: {
        zh: '要求保护及时申请者继续工作的权利，批评因政府积压失去许可的后果。',
        en: 'Seeks protected continued work for timely filers and criticizes permit loss caused by government backlogs.',
      },
      postedDate: '2026-07-30T04:00:00Z',
      textSha256:
        '9a8167ab00d7c3483dcc4c6f599525829d8b5c93053110dfb2983782b8a4704d',
    },
    {
      id: 'USCIS-2026-0067-2964',
      stance: 'oppose',
      themes: [
        'humanitarian',
        'discretion',
        'everify',
        'renewals',
        'livelihood',
      ],
      summary: {
        zh: '要求撤回整项提案，强调对阿富汗盟友的承诺、信赖利益和就业限制。',
        en: 'Urges full withdrawal, emphasizing commitments to Afghan allies, reliance interests and employment restrictions.',
      },
      postedDate: '2026-07-29T04:00:00Z',
      textSha256:
        '8d50f7519e4ac57ac0cfa1f753bb561e5f9225a17ca31cb8d3321c74f180ed8e',
    },
    {
      id: 'USCIS-2026-0067-3139',
      stance: 'oppose',
      themes: ['renewals', 'livelihood', 'economy'],
      summary: {
        zh: '要求保护工作权并简化续期，担忧障碍损害家庭住房和雇主。',
        en: 'Seeks protected work rights and streamlined renewal, warning barriers harm household housing and employers.',
      },
      postedDate: '2026-07-30T04:00:00Z',
      textSha256:
        '09d6e3e1a2d631726d9f2259f80918a9ee2f5d28a38c24d8ff5ae690ca29eb2b',
    },
    {
      id: 'USCIS-2026-0067-0478',
      stance: 'oppose',
      themes: ['livelihood', 'economy'],
      summary: {
        zh: '要求保留合法就业准入、避免新增障碍，强调家庭自立和经济收益。',
        en: 'Seeks preserved lawful employment access without new barriers, emphasizing self-sufficiency and economic benefits.',
      },
      postedDate: '2026-06-09T04:00:00Z',
      textSha256:
        '2e24734bb6604f5ed75ebc0156cd35ec5984619edfee656d355344191e1ca0d6',
    },
    {
      id: 'USCIS-2026-0067-1306',
      stance: 'unclear',
      themes: ['renewals'],
      summary: {
        zh: '描述TPS、假释和工作许可积压，未明确评价提案。',
        en: 'Describes TPS, parole and work permit backlogs, without clearly assessing the proposal.',
      },
      postedDate: '2026-07-13T04:00:00Z',
      textSha256:
        'ea021cb53ec94efa7e06081c852ace99a7fe12e55011202205284056b6ae34a7',
    },
    {
      id: 'USCIS-2026-0067-2861',
      stance: 'oppose',
      themes: ['livelihood', 'economy'],
      summary: {
        zh: '要求保留合法就业准入、避免新增障碍，强调家庭自立和经济收益。',
        en: 'Seeks preserved lawful employment access without new barriers, emphasizing self-sufficiency and economic benefits.',
      },
      postedDate: '2026-07-29T04:00:00Z',
      textSha256:
        '3f4affce905cf1d4951f67a49a094735f50e61979cf1b3e4caa6f5746f4b8bdd',
    },
    {
      id: 'USCIS-2026-0067-1287',
      stance: 'oppose',
      themes: ['renewals', 'livelihood'],
      summary: {
        zh: '明确反对提案造成的限制和延误，要求更可预测的办理以维持家庭稳定。',
        en: 'Explicitly opposes restrictions and delays from the proposal and seeks predictable processing for household stability.',
      },
      postedDate: '2026-07-13T04:00:00Z',
      textSha256:
        'a1b459d812fe3cd0eb240ae2f2d4aa1692c624bde8d6fe6c5a3f73f9fb3935c0',
    },
    {
      id: 'USCIS-2026-0067-4575',
      stance: 'oppose',
      themes: ['victims', 'renewals', 'livelihood', 'economy'],
      summary: {
        zh: '认为限制违背U签证目的并削弱报案合作，建议四年可续工作许可。',
        en: 'Argues restrictions undermine U-visa purposes and crime-reporting cooperation, suggesting renewable four-year permits.',
      },
      postedDate: '2026-08-04T04:00:00Z',
      textSha256:
        '8e804ccf2d50bbc094ff1e8c107d92c07c6c893f52d3f1e4a3514693673aaef5',
    },
    {
      id: 'USCIS-2026-0067-2724',
      stance: 'unclear',
      themes: [],
      summary: {
        zh: '仅表示确认表格，未提供立场。',
        en: 'Only confirms a form and provides no stance.',
      },
      postedDate: '2026-07-29T04:00:00Z',
      textSha256:
        '44008d80f2e68b45240b3847c5e51bbb7769cd5b3c81c6df332fed06f708595e',
    },
    {
      id: 'USCIS-2026-0067-3205',
      stance: 'oppose',
      themes: ['livelihood', 'economy'],
      summary: {
        zh: '要求保留合法就业准入、避免新增障碍，强调家庭自立和经济收益。',
        en: 'Seeks preserved lawful employment access without new barriers, emphasizing self-sufficiency and economic benefits.',
      },
      postedDate: '2026-07-30T04:00:00Z',
      textSha256:
        '368d3dc5f5dc973ee728e61c962b885dc143b16baf9a92f24e64a8b8151eb34c',
    },
    {
      id: 'USCIS-2026-0067-3024',
      stance: 'oppose',
      themes: [
        'renewals',
        'everify',
        'discretion',
        'criminal',
        'economy',
        'livelihood',
      ],
      summary: {
        zh: '要求撤回或大改提案，反对一年期限、E-Verify和逮捕记录限制。',
        en: 'Urges withdrawal or major revision, opposing one-year validity, E-Verify and arrest-record restrictions.',
      },
      postedDate: '2026-07-30T04:00:00Z',
      textSha256:
        'b0db7e9156d80ea93d863c98f16dca9b89d6fbfdbc240cad00f7e0fdb9044459',
    },
    {
      id: 'USCIS-2026-0067-4791',
      stance: 'oppose',
      themes: [],
      summary: {
        zh: '要求不要推进提案，认为会增加个人困难。',
        en: 'Asks not to proceed, arguing the proposal creates additional individual difficulties.',
      },
      postedDate: '2026-08-05T04:00:00Z',
      textSha256:
        'de852dc18dfacbd840491e9a7a230cdbc92b307f0b1399c06a96a06b371ebdef',
    },
    {
      id: 'USCIS-2026-0067-0885',
      stance: 'support',
      themes: ['economy'],
      summary: {
        zh: '明确支持，认为外国劳动者增加本土就业竞争。',
        en: 'Explicitly supports the proposal, arguing foreign workers increase competition for domestic jobs.',
      },
      postedDate: '2026-06-15T04:00:00Z',
      textSha256:
        '763373362535e33c115d2292584bc4a9d7053721efb1b1e7df5ba4f83c9a9244',
    },
    {
      id: 'USCIS-2026-0067-2946',
      stance: 'oppose',
      themes: ['livelihood', 'economy'],
      summary: {
        zh: '要求保留可靠工作许可，认为限制会损害守法家庭和经济贡献。',
        en: 'Seeks preserved reliable work permits, arguing restrictions harm compliant households and economic contributions.',
      },
      postedDate: '2026-07-29T04:00:00Z',
      textSha256:
        '40c6c74972bc48cc24b998a9498c46033d64d1c64cca71e226cbc2219a9cc50e',
    },
    {
      id: 'USCIS-2026-0067-0732',
      stance: 'oppose',
      themes: [
        'humanitarian',
        'livelihood',
        'renewals',
        'everify',
        'discretion',
      ],
      summary: {
        zh: '要求撤回整项提案，认为裁量、年度续期和雇主验证限制伤害阿富汗盟友并违背信赖利益。',
        en: 'Urges withdrawal of the entire proposal, arguing that discretion, annual renewals and employer verification barriers harm Afghan allies and disregard reliance interests.',
      },
      postedDate: '2026-06-10T04:00:00Z',
      textSha256:
        '0807bf7c4e72bcb6ef770a67d15602892d4bf2d0d04e0ffed5b0736715f7ec45',
    },
    {
      id: 'USCIS-2026-0067-2778',
      stance: 'oppose',
      themes: [
        'humanitarian',
        'livelihood',
        'renewals',
        'everify',
        'discretion',
      ],
      summary: {
        zh: '要求撤回整项提案，认为裁量、年度续期和雇主验证限制伤害阿富汗盟友并违背信赖利益。',
        en: 'Urges withdrawal of the entire proposal, arguing that discretion, annual renewals and employer verification barriers harm Afghan allies and disregard reliance interests.',
      },
      postedDate: '2026-07-29T04:00:00Z',
      textSha256:
        '0807bf7c4e72bcb6ef770a67d15602892d4bf2d0d04e0ffed5b0736715f7ec45',
    },
    {
      id: 'USCIS-2026-0067-1039',
      stance: 'oppose',
      themes: [
        'humanitarian',
        'livelihood',
        'renewals',
        'everify',
        'discretion',
      ],
      summary: {
        zh: '要求撤回整项提案，认为裁量、年度续期和雇主验证限制伤害阿富汗盟友并违背信赖利益。',
        en: 'Urges withdrawal of the entire proposal, arguing that discretion, annual renewals and employer verification barriers harm Afghan allies and disregard reliance interests.',
      },
      postedDate: '2026-06-22T04:00:00Z',
      textSha256:
        '0807bf7c4e72bcb6ef770a67d15602892d4bf2d0d04e0ffed5b0736715f7ec45',
    },
    {
      id: 'USCIS-2026-0067-2641',
      stance: 'oppose',
      themes: ['livelihood', 'economy'],
      summary: {
        zh: '要求保留可靠工作许可，认为限制会损害守法家庭和经济贡献。',
        en: 'Seeks preserved reliable work permits, arguing restrictions harm compliant households and economic contributions.',
      },
      postedDate: '2026-07-29T04:00:00Z',
      textSha256:
        '06be7770d5cd0cab68dfdc57db799853d8f773cdda310372508d6918edd7eb67',
    },
    {
      id: 'USCIS-2026-0067-4775',
      stance: 'oppose',
      themes: ['renewals', 'economy'],
      summary: {
        zh: '要求拒绝限制或延误工作许可的规则，强调雇主和社区需求。',
        en: 'Calls for rejecting rules that limit or delay permits, emphasizing employer and community needs.',
      },
      postedDate: '2026-08-05T04:00:00Z',
      textSha256:
        'a45917b6bdbd565e1a0ae5da5ee4d155a460c9fabfb03ca9976ef1b54e06b24b',
    },
    {
      id: 'USCIS-2026-0067-2635',
      stance: 'oppose',
      themes: ['livelihood', 'economy'],
      summary: {
        zh: '要求保留可靠工作许可，认为限制会损害守法家庭和经济贡献。',
        en: 'Seeks preserved reliable work permits, arguing restrictions harm compliant households and economic contributions.',
      },
      postedDate: '2026-07-29T04:00:00Z',
      textSha256:
        'd883bf6239d45084797744e0414e205aa815d04dfd3251a40fbe95da84ea7157',
    },
    {
      id: 'USCIS-2026-0067-0332',
      stance: 'oppose',
      themes: ['humanitarian', 'renewals', 'livelihood', 'economy'],
      summary: {
        zh: '要求撤回或大改提案，认为保护应包括维持生计的合法工作机会。',
        en: 'Urges withdrawal or major revision, arguing protection must include lawful work needed for subsistence.',
      },
      postedDate: '2026-06-08T04:00:00Z',
      textSha256:
        '7f54fe9da3ee4c3acc671238e40a72b3a109e6acb26f218f03b398c70b95d7fb',
    },
    {
      id: 'USCIS-2026-0067-1974',
      stance: 'mixed',
      themes: ['criminal', 'discretion', 'economy', 'livelihood'],
      summary: {
        zh: '支持对严重犯罪的不利裁量，但要求区分守法贡献者并免于不必要负担。',
        en: 'Supports adverse discretion for serious crimes but seeks distinction for compliant contributors and relief from unnecessary burdens.',
      },
      postedDate: '2026-07-20T04:00:00Z',
      textSha256:
        '3ccf97761a486619011459c93bb170f780e9c2d0869a1738d3aaa510e3bd1d71',
    },
    {
      id: 'USCIS-2026-0067-0013',
      stance: 'oppose',
      themes: ['discretion', 'renewals', 'economy', 'livelihood'],
      summary: {
        zh: '反对经济必要性门槛惩罚储蓄和自立，要求撤回该要求，储蓄豁免为备选。',
        en: 'Opposes an economic-necessity barrier as penalizing savings and independence and seeks withdrawal, with a savings exemption as fallback.',
      },
      postedDate: '2026-06-05T04:00:00Z',
      textSha256:
        '6b6caf58e7c3dbec2ce82b3737bd9de7e3ac0fa73b95ead7c1ecb61310a35e5a',
    },
    {
      id: 'USCIS-2026-0067-3905',
      stance: 'unclear',
      themes: ['humanitarian', 'renewals', 'livelihood', 'economy'],
      summary: {
        zh: '请求及时续发乌克兰人工作许可，未明确评价提案。',
        en: 'Requests timely Ukrainian work permit renewals, without clearly assessing the proposal.',
      },
      postedDate: '2026-08-03T04:00:00Z',
      textSha256:
        '65f84f8b22e6a1364f8fdd4be73acaf62dd578d8d516460c9cfe7a59413bbc07',
    },
    {
      id: 'USCIS-2026-0067-2401',
      stance: 'unclear',
      themes: ['economy', 'livelihood'],
      summary: {
        zh: '说明工作许可将支持创业和自立，未表达提案立场。',
        en: 'Explains how a permit would support entrepreneurship and self-sufficiency, without a proposal stance.',
      },
      postedDate: '2026-07-27T04:00:00Z',
      textSha256:
        '28c5280c9002ac5ccf3afc31f928fd6fce7c20034f8fb33278d855ff43f51be7',
    },
    {
      id: 'USCIS-2026-0067-1806',
      stance: 'oppose',
      themes: ['humanitarian', 'livelihood', 'economy'],
      summary: {
        zh: '要求保留人道假释者工作机会，认为限制会损害家庭和雇主。',
        en: 'Seeks preserved work opportunities for humanitarian parolees, arguing restrictions harm families and employers.',
      },
      postedDate: '2026-07-20T04:00:00Z',
      textSha256:
        '9943c2aa2be18000bdb2228a2a490ebc75c51001397505fd38a2d76013fecd3f',
    },
    {
      id: 'USCIS-2026-0067-4451',
      stance: 'oppose',
      themes: ['humanitarian', 'livelihood', 'economy'],
      summary: {
        zh: '要求不要使工作许可程序更复杂，以保障家庭生计和继续纳税。',
        en: 'Asks not to complicate work permit procedures, to protect livelihoods and continued tax contributions.',
      },
      postedDate: '2026-08-04T04:00:00Z',
      textSha256:
        '72ff7c62d850c7cc2a2e63a6650c283c5f9140fb1dbda1865f462f4369382c16',
    },
    {
      id: 'USCIS-2026-0067-4357',
      stance: 'oppose',
      themes: ['criminal', 'discretion', 'livelihood'],
      summary: {
        zh: '要求撤回以逮捕和未证实指控拒绝许可的提案，强调无罪推定和生计。',
        en: 'Seeks withdrawal of permit denials based on arrests and unproven charges, citing presumed innocence and livelihoods.',
      },
      postedDate: '2026-08-04T04:00:00Z',
      textSha256:
        '83ceebb7b9dc2d524acfde525e94529b1be9c9f523497e52d5f5a9f41a022285',
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
      id: 'USCIS-2026-0067-0606',
      stance: 'oppose',
      themes: [
        'humanitarian',
        'livelihood',
        'renewals',
        'everify',
        'discretion',
      ],
      summary: {
        zh: '要求撤回整项提案，认为裁量、年度续期和雇主验证限制伤害阿富汗盟友并违背信赖利益。',
        en: 'Urges withdrawal of the entire proposal, arguing that discretion, annual renewals and employer verification barriers harm Afghan allies and disregard reliance interests.',
      },
      postedDate: '2026-06-09T04:00:00Z',
      textSha256:
        '0807bf7c4e72bcb6ef770a67d15602892d4bf2d0d04e0ffed5b0736715f7ec45',
    },
    {
      id: 'USCIS-2026-0067-1847',
      stance: 'unclear',
      themes: ['economy', 'livelihood'],
      summary: {
        zh: '强调合法就业增加税收、填补岗位并减少救助依赖，未评价提案。',
        en: 'Emphasizes taxes, staffing and reduced assistance from lawful work, without assessing the proposal.',
      },
      postedDate: '2026-07-20T04:00:00Z',
      textSha256:
        'a4716a308b5859f04a7c9cb3d8e1dca4732b42c13ec6a447964b5ac231213ce0',
    },
    {
      id: 'USCIS-2026-0067-0585',
      stance: 'oppose',
      themes: [
        'humanitarian',
        'livelihood',
        'renewals',
        'everify',
        'discretion',
      ],
      summary: {
        zh: '要求撤回整项提案，认为裁量、年度续期和雇主验证限制伤害阿富汗盟友并违背信赖利益。',
        en: 'Urges withdrawal of the entire proposal, arguing that discretion, annual renewals and employer verification barriers harm Afghan allies and disregard reliance interests.',
      },
      postedDate: '2026-06-09T04:00:00Z',
      textSha256:
        '0807bf7c4e72bcb6ef770a67d15602892d4bf2d0d04e0ffed5b0736715f7ec45',
    },
    {
      id: 'USCIS-2026-0067-4746',
      stance: 'oppose',
      themes: ['humanitarian', 'livelihood', 'economy'],
      summary: {
        zh: '要求保护合法工作许可并避免新增障碍，强调战争期间家庭自立。',
        en: 'Seeks protected lawful work permits without new barriers, emphasizing family independence during war.',
      },
      postedDate: '2026-08-05T04:00:00Z',
      textSha256:
        '758f97ba3f1022ee4353870633cadd5259ed88a93791625345e946a834d2ebad',
    },
    {
      id: 'USCIS-2026-0067-4049',
      stance: 'oppose',
      themes: [
        'humanitarian',
        'renewals',
        'discretion',
        'everify',
        'livelihood',
        'economy',
      ],
      summary: {
        zh: '明确反对限制，要求豁免E-Verify、保留自动延期并取消重复经济需要材料。',
        en: 'Explicitly opposes restrictions and seeks E-Verify exemptions, automatic extensions and removal of duplicative economic-need documentation.',
      },
      postedDate: '2026-08-03T04:00:00Z',
      textSha256:
        '0433120071e84b6cdffc7cf7af7cbcebf969632532226537cf98754e74949b44',
    },
    {
      id: 'USCIS-2026-0067-0531',
      stance: 'oppose',
      themes: [
        'humanitarian',
        'livelihood',
        'renewals',
        'everify',
        'discretion',
      ],
      summary: {
        zh: '要求撤回整项提案，认为裁量、年度续期和雇主验证限制伤害阿富汗盟友并违背信赖利益。',
        en: 'Urges withdrawal of the entire proposal, arguing that discretion, annual renewals and employer verification barriers harm Afghan allies and disregard reliance interests.',
      },
      postedDate: '2026-06-09T04:00:00Z',
      textSha256:
        '0807bf7c4e72bcb6ef770a67d15602892d4bf2d0d04e0ffed5b0736715f7ec45',
    },
    {
      id: 'USCIS-2026-0067-0790',
      stance: 'oppose',
      themes: [
        'humanitarian',
        'livelihood',
        'renewals',
        'everify',
        'discretion',
      ],
      summary: {
        zh: '要求撤回整项提案，认为裁量、年度续期和雇主验证限制伤害阿富汗盟友并违背信赖利益。',
        en: 'Urges withdrawal of the entire proposal, arguing that discretion, annual renewals and employer verification barriers harm Afghan allies and disregard reliance interests.',
      },
      postedDate: '2026-06-11T04:00:00Z',
      textSha256:
        '0807bf7c4e72bcb6ef770a67d15602892d4bf2d0d04e0ffed5b0736715f7ec45',
    },
    {
      id: 'USCIS-2026-0067-0636',
      stance: 'oppose',
      themes: [
        'humanitarian',
        'livelihood',
        'renewals',
        'everify',
        'discretion',
      ],
      summary: {
        zh: '要求撤回整项提案，认为裁量、年度续期和雇主验证限制伤害阿富汗盟友并违背信赖利益。',
        en: 'Urges withdrawal of the entire proposal, arguing that discretion, annual renewals and employer verification barriers harm Afghan allies and disregard reliance interests.',
      },
      postedDate: '2026-06-09T04:00:00Z',
      textSha256:
        '0807bf7c4e72bcb6ef770a67d15602892d4bf2d0d04e0ffed5b0736715f7ec45',
    },
  ],
  commentPhase: 'closed',
  commentDeadline: '2026-08-04',
  sampleSize: 200,
} satisfies CommentSample;
