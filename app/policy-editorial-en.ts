import type { PolicyEditorial } from './policy-editorial';

export const englishPolicyEditorial: PolicyEditorial[] = [
  {
    id: 'opt-fee',
    discovery: {
      status: 'Under OIRA review',
      identities: ['F-1', 'OPT / STEM OPT'],
      summary:
        'ICE plans an added OPT fee. The media-reported $100,000 amount, payer and exemptions remain unconfirmed; current application fees are unchanged.',
    },
    title: 'OPT May Carry a $100,000 Fee',
    short: '$100,000 OPT Fee',
    group: 'OPT',
    agency: 'DHS / ICE',
    rin: '1653-AB01',
    status: 'Under OIRA review',
    effectLabel: 'Not in effect · Amount unconfirmed',
    audience:
      'F-1 students planning OPT or a STEM OPT extension and their employers.',
    caveat:
      'The payer, covered applications and exemptions are unpublished; $100,000 is a media-reported figure.',
    summary:
      'ICE plans a new fee for F-1 Optional Practical Training. Media reports put the possible amount at $100,000, but the official fee schedule, payer, covered applications and exemptions have not been published.',
    background:
      'ICE submitted Optional Practical Training Fees to OIRA on August 20, 2026 as an economically significant rule; the review record does not include public fee provisions.',
    effectState: 'not-in-effect',
    note: 'The $100,000 figure comes from media reports',
    deck: 'How would this change the first job after graduation and the path to staying in the U.S.?',
    headline:
      'The first U.S. job after graduation could come with a steep entry cost.',
    analysis:
      'If a $100,000 fee is broadly implemented, it could significantly change the economics of working in the U.S. Students would need greater financial capacity, employers covering the fee could raise the bar for new-graduate hiring, and the pressure would arrive before the H-1B transition.',
    teaser:
      'A major cost at the first post-graduation job could change the choices students and employers make.',
    impacts: [
      [
        'For students: financing comes before returns',
        'If applicants must pay when filing, the expense would come before they earn income from the job. Students with limited savings, education debt, or lower expected starting salaries would face a greater challenge in making U.S. employment financially viable.',
      ],
      [
        'For employers: new-graduate offers may become harder to secure',
        'If employers pay, they would commit more money before an employee has demonstrated value. Entry-level roles and small companies with limited budgets may be more sensitive and may favor candidates who can produce returns sooner.',
      ],
      [
        'For the U.S. pathway: pressure moves to the OPT stage',
        'For students who rely on OPT to begin working and later seek H-1B status, a high fee could make that bridge less accessible. Employer support for the fee and job options in other places may become more important.',
      ],
    ],
    outlook:
      'Our outlook: the next debate will center on who pays, who is exempt, and who is affected. Those provisions will determine whether the cost falls mainly on student finances, employer hiring budgets, or particular applicants.',
    scenarios: [
      [
        'Broad high fee',
        'The standard OPT path becomes far less affordable',
        'The $100,000 fee applies to most new applications, with limited relief.',
        'Students may be less willing to fund a U.S. job search themselves, while employers may tighten new-graduate hiring. Applicants with financial resources and employers able to absorb the cost would have a relative advantage.',
        'A formal proposal keeps the fee at this level, applies it broadly, and provides no meaningful waiver or transition protection.',
      ],
      [
        'Narrower scope or relief',
        'Post-graduation options diverge sharply among F-1 students',
        'The high fee applies only to some applications or includes exemptions and transition measures.',
        'The burden would concentrate on covered groups. Application category, exemption criteria, and timing boundaries would explain outcomes better than a single question of whether students can stay.',
        'The text introduces tiered fees, specific exemptions, or transition terms for current students and pending applicants.',
      ],
      [
        'Delayed or abandoned',
        'Near-term cost pressure eases, but uncertainty still affects planning',
        'Review takes longer, the rule is withdrawn, or the proposal never reaches final implementation.',
        'Without a new effective rule, applicants would not yet bear this added cost. Continued uncertainty could still influence school choices and future hiring budgets.',
        'An OIRA withdrawal record or later announcement changes the plan; publication delay alone is not enough to conclude that it has been abandoned.',
      ],
    ],
    scope: [
      [
        'Who pays',
        'Student payment affects cash flow; employer payment changes the cost-benefit calculation for hiring.',
      ],
      [
        'Covered applications',
        'Initial OPT, STEM extensions, exempt groups, and protection for existing cases.',
      ],
      [
        'Effective date and transition',
        'Filing cutoffs and transition periods determine which graduating classes are affected.',
      ],
    ],
    related: ['h1b-fee', 'duration-status'],
  },
  {
    id: 'h1b-fee',
    discovery: {
      status: 'Public proposal',
      identities: ['H-1B'],
      summary:
        'The proposed $103,265 surcharge covers cap-subject H-1B petitions, including U.S. advanced-degree cases and F-1 changes of status. Cap-exempt petitions are excluded; the surcharge is not in effect.',
      next: { date: '2026-09-24', text: 'Public comment deadline' },
    },
    title: 'Proposed $103,265 H-1B Surcharge',
    short: '$103,265 H-1B Surcharge',
    group: 'H-1B',
    agency: 'DHS / USCIS',
    rin: '1615-AD20',
    status: 'Formal proposal · Comments open',
    effectLabel: 'Not in effect',
    audience:
      'cap-subject H-1B applicants and sponsors, including U.S. advanced-degree cases and F-1 changes of status.',
    caveat: 'Cap-exempt petitions are outside the proposed surcharge.',
    summary:
      'DHS proposes a $103,265 surcharge on each cap-subject H-1B petition, on top of existing fees. U.S. advanced-degree cases and F-1 changes of status are included; cap-exempt petitions are excluded.',
    background:
      'RIN 1615-AD20 was published on August 25, 2026, with comments due September 24. This proposed fee would be additional to existing fees and should be distinguished from the earlier presidential-proclamation charge.',
    effectState: 'not-in-effect',
    note: 'Scope is defined by cap-subject filings',
    deck: 'After selection, will the employer still be willing to sponsor you?',
    headline:
      'An employer’s sponsorship budget could become a barrier before selection does.',
    analysis:
      'If adopted, the proposed surcharge would push the one-time sponsorship investment much higher. For new graduates moving from OPT to H-1B, employers may reassess the cost when deciding whether to support a petition, rather than waiting for the selection result.',
    teaser:
      'Beyond selection, whether an employer will absorb a high sponsorship cost may determine whether an offer continues.',
    impacts: [
      [
        'For graduates: an offer may not include a sponsorship commitment',
        'A company willing to employ a student during OPT may not be willing to bear a much higher later H-1B cost. If the fee takes effect, retention decisions may happen sooner.',
      ],
      [
        'For employers: budgets may concentrate on critical roles',
        'If each covered petition carries the added cost, hiring budgets may shift toward hard-to-replace roles with clear business returns. Smaller businesses may have less room to adjust.',
      ],
      [
        'For pathways: cap-exempt roles may become relatively more attractive',
        'The proposal excludes cap-exempt petitions. Those roles may draw more interest, though limited openings, individual fit, and a separate classification reform would still constrain this path.',
      ],
    ],
    outlook:
      'Our outlook: debate will focus on the fee level, legal authority, and employers’ ability to absorb it. Labor-market effects may first appear in sponsorship willingness and budget decisions before they show up in petition volume.',
    scenarios: [
      [
        'Finalized as proposed',
        'Employer sponsorship concentrates on high-value roles',
        'The $103,265 surcharge remains and covers the cap-subject petitions identified in the proposal.',
        'New graduates and employers with limited budgets may be hit harder. Some employers may reduce the number of roles eligible for sponsorship before petitions are filed.',
        'The final fee, coverage definition, effective date, and employer sponsorship policies for the next hiring cycle.',
      ],
      [
        'Fee or scope revised',
        'Sponsorship interest partly recovers, with wider differences among employers',
        'The final rule lowers the amount or adds meaningful exceptions.',
        'Cost pressure may ease, but outcomes would still vary by employer size, petition category, and role. Who qualifies for an exception would matter more than a single headline amount.',
        'Responses to comments, a revised fee model, and final exemption terms.',
      ],
      [
        'Implementation delayed',
        'Near-term budget pressure eases, while long-term commitments remain cautious',
        'Rulemaking takes longer or a later court order pauses implementation.',
        'Employers may continue filing under current costs but remain cautious about multiyear sponsorship commitments. A temporary pause would not mean the policy has been invalidated.',
        'Publication of a final rule, the actual terms and reach of any court order.',
      ],
    ],
    scope: [
      [
        'Covered petitions',
        'The proposal covers cap-subject petitions, including the U.S. advanced-degree allocation; a change of status is not excluded simply because the worker is in the United States.',
      ],
      [
        'Excluded petitions',
        'Cap-exempt petitions fall outside the proposed surcharge.',
      ],
      [
        'Relationship to other fees',
        'This is a proposed surcharge on top of existing fees; it should not be conflated with the fee under the earlier presidential proclamation.',
      ],
    ],
    related: ['opt-fee', 'prevailing-wage', 'h1b-reform'],
  },
  {
    id: 'duration-status',
    discovery: {
      status: 'Final rule · In litigation',
      identities: ['F / J'],
      summary:
        'The final rule would replace D/S with fixed periods generally capped at four years, requiring USCIS extensions for longer stays. It is not yet effective; current D/S holders have transition provisions.',
      next: {
        date: '2026-09-15',
        text: 'Scheduled effective date, unless stayed or enjoined beforehand',
      },
    },
    title: 'F/J Status Will Shift from D/S to Fixed Admission Periods',
    short: 'Fixed F/J Periods and Litigation',
    group: 'F-1',
    agency: 'DHS / ICE',
    rin: 'Final Rule 2026-14439',
    status: 'Final rule · In litigation',
    effectLabel: 'Not in effect · Scheduled September 15',
    audience:
      'F/J status holders, especially those planning extensions, OPT or travel and reentry.',
    caveat:
      'Current D/S holders have transition provisions; a hearing does not pause the rule, and court orders determine any relief.',
    summary:
      'The DHS final rule would replace F/J duration of status (D/S) with fixed admission periods generally capped at four years. Longer stays would require a USCIS extension, and relevant OPT applications would generally require both I-765 and I-539 filings.',
    background:
      'The 2025 proposal became a final rule on July 17, 2026, generally setting a four-year maximum and requiring USCIS extensions. After hearing arguments on September 3, the court took the request under advisement without granting or denying it from the bench.',
    effectState: 'not-in-effect',
    note: 'Scheduled to take effect September 15; watch for court orders',
    deck: 'Which transitions in study, transfers, and post-graduation work would become more complex?',
    headline:
      'Status management would follow an expiration date more closely than the course of study.',
    analysis:
      'If the final rule takes effect as scheduled, students will need to coordinate program length, extensions of status, and work authorization earlier. The effect goes beyond one form: academic changes and career transitions may allow less timing flexibility, and same-level degree programs and transfers previously used as bridges would also face limits.',
    teaser:
      'Fixed end dates, extension filings, and transfer limits would reorder the academic and employment timeline.',
    impacts: [
      [
        'For current students: program extensions depend more on administrative timing',
        'Research, dissertations, and training plans do not always finish on an exact schedule. If a separate extension is required, document preparation and processing time become part of academic planning.',
      ],
      [
        'For graduates: OPT and extensions of status must be coordinated',
        'Under the new system, related OPT applications would generally also require an I-539 filing. Coordination between status and work authorization could affect actual start dates, while current D/S holders would need to review the transition rules separately.',
      ],
      [
        'For backup paths: less room for additional study and transfers',
        'The rule prohibits graduate-level changes during study and restricts mid-program transfers. The same/lower-level re-enrollment limit counts only degrees completed after the effective date. These provisions affect student status before the OPT or CPT plans that depend on it.',
      ],
    ],
    outlook:
      'Our outlook: the first near-term question is whether a court pauses the rule and how broadly. The practical student experience will then depend on transition categories and how schools and USCIS administer the extension process.',
    scenarios: [
      [
        'Takes effect on schedule',
        'Fall travel and status transitions require closer coordination',
        'No court order changes implementation before the effective date.',
        'Students covered by the new system may prepare extensions sooner and have less room for last-minute academic changes. Different entry and filing dates would produce different transition rules.',
        'Written court orders, implementation status on September 15, and school operating guidance.',
      ],
      [
        'Court pauses the rule first',
        'Transition pressure eases temporarily while the case continues',
        'A court issues an operative stay or injunction covering the relevant people.',
        'Current procedures may continue in the short term, but schools and students would still need to track the order’s scope, duration, and any appeal. A temporary pause is not a final repeal.',
        'The people receiving relief, provisions paused, duration, and appeal treatment in the order itself.',
      ],
      [
        'Only some provisions paused',
        'Students may need to understand two sets of rules at once',
        'A court blocks only part of the rule while other provisions take effect.',
        'Administration could become even more complex. Transfers, extensions, and work authorization may not share the same coverage boundaries.',
        'The provisions addressed individually by the court and later implementation guidance from ICE and USCIS.',
      ],
    ],
    scope: [
      [
        'Current and new populations',
        'Current D/S holders have transition provisions; rules for new entrants cannot describe every current student.',
      ],
      [
        'Departure and reentry',
        'Reentry after the effective date may change which system applies, depending on the specific conditions.',
      ],
      [
        'Litigation status',
        'A hearing by itself does not pause a rule; legal effect depends on an order issued by the court.',
      ],
    ],
    related: ['cpt-guidance', 'opt-fee', 'grace-period'],
  },
  {
    id: 'h1b-weighted-selection',
    discovery: {
      status: 'In effect',
      identities: ['H-1B'],
      summary:
        'H-1B selection has changed from equal-chance selection to wage weighting: Levels I–IV receive one to four weights. These are not individual selection probabilities and do not directly raise required wage floors.',
    },
    title: 'H-1B Selection Now Weights Wage Levels',
    short: 'Wage-Weighted H-1B Selection',
    group: 'H-1B',
    agency: 'DHS / USCIS',
    rin: '1615-AD01',
    status: 'Final rule · Used from FY 2027',
    effectLabel: 'In effect · February 27, 2026',
    audience:
      'cap-subject H-1B registrants and employers reporting the offered position.',
    caveat:
      'One to four weights are not individual selection probabilities and do not themselves raise the required wage floor.',
    summary:
      'USCIS has replaced equal-chance cap-subject H-1B selection with wage-level weighting: Levels I, II, III and IV receive 1, 2, 3 and 4 entries, respectively. These weights do not translate into fixed individual selection probabilities.',
    background:
      'DHS published the RIN 1615-AD01 final rule on December 29, 2025, retaining beneficiary-centric selection and the existing order for regular and U.S. advanced-degree allocations.',
    effectState: 'in-effect',
    note: 'Levels I–IV receive one to four entries respectively',
    deck: 'Why do two people with offers now enter the selection process from different starting points?',
    headline:
      'The wage level assigned to a role is now part of its selection chances.',
    analysis:
      'Wage weighting ties job conditions more closely to selection chances. For graduates in entry-level roles, employment choices and immigration strategy now need to be assessed together. Weight is a mechanism, however, and does not directly state an individual probability of selection.',
    teaser:
      'Wage level affects selection weight, so entry-level and higher-level roles no longer start on equal footing.',
    impacts: [
      [
        'For graduates: the structure of the first job matters more',
        'An entry-level role assigned Level I receives less weight. Roles requiring more experience or assigned higher levels have a relative advantage, but annual salary alone does not determine the level.',
      ],
      [
        'When comparing offers: occupation and location matter',
        'Wage level depends on the specific occupation and work location. Comparing salary numbers across regions and roles can produce the wrong conclusion about selection advantage.',
      ],
      [
        'For employers: wages, duties, and filings must support one another',
        'Employers may pay more attention to consistency between the role and wage data. Changing labels merely to increase weight cannot replace real duties and a compliant filing.',
      ],
    ],
    outlook:
      'Our assessment: higher levels will retain a relative advantage, but how many opportunities that produces still depends on the season’s applicant pool. If new fees or wage floors also take effect, employer budgets could offset some of the procedural advantage.',
    scenarios: [
      [
        'Current system continues',
        'Higher wage levels retain a relative advantage',
        'The rule remains in place and the applicant mix does not change significantly.',
        'Level I applicants may place more weight on role growth and later filing opportunities. More entries still do not guarantee selection.',
        'USCIS instructions for the next registration season and actual selection data.',
      ],
      [
        'Applicant mix changes',
        'Actual chances can change even within the same level',
        'The share of higher-level registrations rises or the total registration volume changes significantly.',
        'Changes in the selection pool alter individual chances. Estimates or results from one year cannot serve as a fixed probability for the next.',
        'The distribution of registrations by level, annual allocation, and number of selection rounds.',
      ],
      [
        'New costs added',
        'Better selection odds may not make sponsorship easier to obtain',
        'A new H-1B fee or a higher statutory wage floor takes effect.',
        'Some employers may file fewer petitions because of the cost, separating a role’s selection advantage from the employer’s willingness to pay.',
        'Final fee and wage-rule text, along with employer sponsorship policies.',
      ],
    ],
    scope: [
      ['Covered process', 'Cap-subject H-1B registration and selection.'],
      [
        'Weight and probability',
        'One to four entries do not equal a fixed individual selection rate.',
      ],
      [
        'Separate wage rule',
        'This selection mechanism does not itself raise the statutory wage an employer must pay.',
      ],
    ],
    related: ['prevailing-wage', 'h1b-fee'],
  },
  {
    id: 'cpt-guidance',
    discovery: {
      status: 'Schools implementing',
      identities: ['F-1 / CPT'],
      summary:
        'CPT training must be required for every student to complete the degree; an elective internship course is generally insufficient. Schools are applying this standard; check school notices for specific programs and existing authorizations.',
    },
    title:
      'Tighter CPT Guidance: An Elective Internship Course Is No Longer Enough',
    short: 'August 12 / 24 CPT Guidance',
    group: 'CPT',
    agency: 'ICE / SEVP',
    rin: 'Broadcast 2608-01 / 02',
    status: 'Schools implementing guidance',
    effectLabel: 'Guidance in use · Check school and program',
    audience: 'students seeking CPT authorization, their schools and DSOs.',
    caveat:
      'Distinguish elective-course CPT from required degree practice; check explicit school notices for existing authorizations.',
    summary:
      'SEVP requires CPT training to be mandatory for every student in the program to complete the degree, with a cooperative agreement between the employer and school. Enrollment in an elective internship course alone generally does not qualify.',
    background:
      'The August 12 Broadcast emphasized school and DSO compliance duties. The August 24 FAQ clarified that all students includes U.S. students and reiterated the employer-school cooperative agreement requirement.',
    effectState: 'guidance-in-use',
    note: 'Specific authorization still depends on school and program notices',
    deck: 'Why does continued internship eligibility require checking the specific school and degree program?',
    headline:
      'Internship approval increasingly depends on the degree program’s own curriculum.',
    analysis:
      'The new interpretation ties CPT more closely to practical training required to complete the degree. Arrangements supported by an elective internship course face greater pressure, while differences in school and department requirements will produce divergent outcomes.',
    teaser:
      'The question shifts from whether a student can take an internship course to whether the internship is required by the degree.',
    impacts: [
      [
        'For students: course selection may not resolve authorization',
        'Adding an elective internship course may not satisfy the new interpretation. Approval depends more on formal graduation requirements and the school’s determination.',
      ],
      [
        'For schools: curriculum documents and employer agreements matter more',
        'Schools may reexamine program handbooks, internship requirements, and cooperation agreements. Even when approval remains available, document review may affect timing.',
      ],
      [
        'For internship hiring: outcomes may differ within one school',
        'Employers may face less predictable start dates and student availability. A notice from one department cannot represent every student at the school.',
      ],
    ],
    outlook:
      'Our outlook: more program-specific notices will appear in the near term. Any resumption of processing is also more likely to cover qualifying programs or authorization categories than every elective internship.',
    scenarios: [
      [
        'Further tightening',
        'Less room to authorize optional internships',
        'Schools continue pausing or denying CPT supported only by elective coursework.',
        'Some internships may need new start dates or arrangements. Program curriculum could affect school and job choices earlier.',
        'New school suspension notices, program-handbook explanations, and their precise scope.',
      ],
      [
        'Some programs resume',
        'Programs that meet the standard may resume first',
        'Schools complete review and confirm that practical training in certain degrees meets the requirements.',
        'Results would depend more on the major, program, and partner-employer conditions. A limited resumption does not mean every student is covered.',
        'School notices identifying the program, authorization type, application date, and agreement requirements.',
      ],
      [
        'Further federal explanation',
        'Implementation differences may narrow or widen',
        'SEVP publishes new questions and answers or clarifying material.',
        'More specific standards may prompt schools to revise operations. If interpretive room remains, program-level differences may continue.',
        'The text of any new Broadcast and whether schools update their guidance in response.',
      ],
    ],
    scope: [
      [
        'Core boundary',
        'Focus on practical training required by the degree and the school’s interpretation of requirements for all students.',
      ],
      [
        'Existing authorization',
        'Whether a previously issued CPT I-20 is affected depends on an explicit school notice addressing existing authorizations.',
      ],
      [
        'Evidence detail',
        'Preserve the school, department, program, authorization type, and effective date.',
      ],
    ],
    related: ['duration-status', 'opt-fee'],
    schoolLink: true,
  },
  {
    id: 'prevailing-wage',
    discovery: {
      status: 'Comments closed',
      identities: ['H-1B / H-1B1', 'E-3', 'PERM'],
      summary:
        'DOL proposes raising the four prevailing-wage floors to roughly the 34th, 52nd, 70th and 88th percentiles. Current standards are unchanged; this proposal concerns required wage floors.',
    },
    title: 'Proposed Increase to H-1B / PERM Wage Floors',
    short: 'H-1B / PERM Wage Floors',
    group: 'H-1B',
    agency: 'DOL',
    rin: '1205-AC30',
    status: 'Comment period closed',
    effectLabel: 'Not in effect',
    audience:
      'H-1B, H-1B1, E-3 and PERM applicants and employers funding their wages.',
    caveat:
      'This proposal concerns required wage floors, separate from H-1B selection weights.',
    summary:
      'DOL proposes raising the four prevailing-wage thresholds used for H-1B, H-1B1, E-3 and PERM from approximately the 17th, 34th, 50th and 67th percentiles to the 34th, 52nd, 70th and 88th percentiles.',
    background:
      'RIN 1205-AC30 was published on March 27, 2026 and comments closed May 26. It proposes moving the four levels from roughly the 17th, 34th, 50th and 67th percentiles to the 34th, 52nd, 70th and 88th; the August agenda still lists a proposal.',
    effectState: 'not-in-effect',
    note: 'Affects minimum wages, not selection weight',
    deck: 'Even if an employer will sponsor, can its wage budget still support the role?',
    headline:
      'A multiyear wage commitment could become another sponsorship barrier.',
    analysis:
      'If the proposed increase to statutory wage floors is finalized, the effect would appear in ongoing employment costs, not just a filing fee. Roles already near budget limits may face a choice among higher pay, revised hiring plans, or no sponsorship.',
    teaser:
      'Beyond one-time fees, ongoing wage costs may further reduce employers’ room to sponsor.',
    impacts: [
      [
        'For job seekers: some roles may no longer support sponsorship',
        'Employers unable to raise pay to the applicable floor may reduce hiring for those roles. Entry-level jobs and budget-constrained organizations may be more sensitive.',
      ],
      [
        'For current workers: the effect may arrive with the next filing',
        'An extension or employer change requiring a new LCA may need a fresh wage review under future applicable rules; attention should not stop at initial sponsorship.',
      ],
      [
        'For long-term paths: PERM budgets may also face pressure',
        'If the PERM adjustment also takes effect, employers may recalculate years of employment costs from work visa through permanent residence. Selection and wage floors remain separate issues.',
      ],
    ],
    outlook:
      'Our outlook: the practical effect will vary by occupation, region, and employer budget. The final increases and transition terms will determine whether costs arrive at once or phase into new filings.',
    scenarios: [
      [
        'Raised as proposed',
        'Roles at the margin become harder to sustain within sponsorship budgets',
        'The proposed four-level wage structure remains largely intact.',
        'Some employers may raise wages while others reduce covered roles. Better-funded companies would be relatively better able to absorb the adjustment.',
        'The final wage methodology, covered filings, and employer compensation budgets.',
      ],
      [
        'Increase or transition revised',
        'Costs still rise, but employers may have more time to adjust',
        'The final text lowers the increases or provides a meaningful transition period.',
        'Employers may phase changes into hiring and pay. Filing dates and transition criteria would affect workers differently.',
        'Phased implementation, treatment of existing cases, and effective-date boundaries in the final rule.',
      ],
      [
        'No final rule yet',
        'Current costs continue while employers retain budget flexibility',
        'The agency continues reviewing or rewrites the proposal.',
        'Immediate pressure may ease, but multiyear sponsorship plans may still reserve room for wage adjustments.',
        'Submission of a final rule for review, agenda changes, and later announcements.',
      ],
    ],
    scope: [
      [
        'Covered programs',
        'Relevant wage requirements for H-1B, H-1B1, E-3, and PERM.',
      ],
      [
        'Proposed structure',
        'The four levels would move to approximately the 34th, 52nd, 70th, and 88th percentiles.',
      ],
      [
        'Current standard',
        'The proposal has not changed current wage standards; future coverage depends on effective-date and transition terms.',
      ],
    ],
    related: ['h1b-weighted-selection', 'h1b-fee'],
  },
  {
    id: 'h1b-reform',
    discovery: {
      status: 'Under OIRA review',
      identities: ['H-1B'],
      summary:
        'The agenda proposes revised cap-exempt eligibility and closer scrutiny of employers with violations and third-party worksites. Formal text is unpublished, so eligibility boundaries and evidence requirements remain unresolved.',
    },
    title:
      'H-1B Classification Reform: Exemptions and Third-Party Placements Under Review',
    short: 'H-1B Classification Reform',
    group: 'H-1B',
    agency: 'DHS / USCIS',
    rin: '1615-AD00',
    status: 'Under OIRA review',
    effectLabel: 'Not in effect · Text unpublished',
    audience:
      'cap-exempt employers, workers at third-party sites and employers with violation records.',
    caveat:
      'The agenda gives direction only; eligibility boundaries and evidence requirements await the public proposal.',
    summary:
      'DHS plans to redefine H-1B cap-exempt eligibility and increase scrutiny of employers with program violations and third-party worksites. The precise eligibility boundaries and evidence requirements await the published proposal.',
    background:
      'RIN 1615-AD00 entered OIRA review on August 24, 2026. Exemption eligibility relates to fee coverage, but classification reform and the H-1B surcharge are separate rules.',
    effectState: 'not-in-effect',
    note: 'The reform direction comes from the regulatory agenda summary',
    deck: 'What new boundaries could cap-exempt employers and third-party placements face?',
    headline:
      'Cap-exempt and placement-based roles may need to reestablish their compliance basis.',
    analysis:
      'The agenda addresses cap-exempt eligibility, noncompliant employers, and scrutiny of third-party worksites. If those directions become formal provisions, the first effects may be heavier evidence burdens and longer processing, followed by changes in the roles employers are willing to offer.',
    teaser:
      'Changes to exemption eligibility and third-party placement review could increase the cost of proving some roles qualify.',
    impacts: [
      [
        'For placed workers: client-site evidence may matter more',
        'Consistency among contracts, worksites, duties, and actual arrangements may become more important to case preparation. Roles with frequent project changes could face higher coordination costs.',
      ],
      [
        'For cap-exempt paths: eligibility grounds need a fresh review',
        'If exemption definitions change, the relationship between an institution and a role may become decisive. An employer’s name alone cannot establish that a future filing will remain cap-exempt.',
      ],
      [
        'For employers: compliance history may affect filing costs',
        'If review of violations intensifies, past compliance problems may produce more documentation, explanation, and delay.',
      ],
    ],
    outlook:
      'Our outlook: when a formal proposal appears, the key comparison will be between changes to eligibility and added proof requirements. The former could alter available paths; the latter could raise the cost of using existing ones.',
    scenarios: [
      [
        'Exemption boundary narrows',
        'Some cap-exempt arrangements may need reassessment',
        'The NPRM raises or redefines cap-exempt eligibility requirements.',
        'Roles relying on particular institutional relationships may need stronger support. Some job seekers may reassess whether the cap-exempt path remains available.',
        'Exemption definitions, affiliation requirements, and transition terms for current cases.',
      ],
      [
        'More placement evidence',
        'The same role may require more preparation time',
        'The proposal preserves the pathway but raises evidence requirements for third-party sites.',
        'Document coordination between employers and clients may slow, and work models with frequent project changes may be more affected.',
        'Specific provisions on worksites, contracts, supervision, and inspections.',
      ],
      [
        'Reform scope narrows',
        'Most changes may focus on enforcement and documentation',
        'The public proposal is narrower than the direction described in the agenda.',
        'Eligibility effects may be limited for most compliant employers, while document preparation and compliance management could still increase.',
        'A provision-by-provision comparison of the NPRM and agenda summary, followed by responses to comments.',
      ],
    ],
    scope: [
      [
        'Focus populations',
        'Cap-exempt employers, third-party placements, and companies with compliance violations.',
      ],
      [
        'Current basis',
        'The agenda summary describes the direction; public text is needed to establish formal eligibility boundaries.',
      ],
      [
        'Relationship to surcharge',
        'Cap-exempt eligibility relates to fee coverage but belongs to a separate rule.',
      ],
    ],
    related: ['h1b-fee', 'grace-period'],
  },
  {
    id: 'grace-period',
    discovery: {
      status: 'NPRM preview public',
      identities: ['E categories', 'H-1B / H-1B1', 'L-1 / O-1 / TN'],
      summary:
        'The plan would remove the discretionary grace period of up to 60 days after early employment termination. The current grace period is unchanged; this does not concern the F-1 post-completion grace period.',
      next: { text: 'Scheduled publication September 11; then a 60-day comment period' },
    },
    title: 'Proposed End to the Up-to-60-Day Grace Period After Job Loss',
    short: 'Ending the 60-Day Post-Termination Grace Period',
    group: 'H-1B',
    agency: 'DHS / USCIS',
    rin: '1615-AD22',
    status: 'NPRM preview public · Publication scheduled September 11',
    effectLabel: 'Not in effect · Current rule unchanged',
    audience:
      'E-1, E-2, E-3, H-1B, H-1B1, L-1, O-1 and TN workers whose employment or qualifying activity ends early, and their dependents.',
    caveat:
      'This is a proposal; current rules remain unchanged. If finalized as drafted, people otherwise authorized to remain lawfully would not all have to depart immediately. The F-1 post-completion grace period is separate.',
    summary:
      'DHS plans to remove the discretionary grace period of up to 60 days after early termination of employment for H-1B, H-1B1, E, L-1, O-1, TN and related work statuses. This does not concern the F-1 grace period after program completion.',
    background:
      'Document 2026-18631 entered public inspection September 10, with publication scheduled September 11; docket USCIS-2026-0364. It would remove 8 CFR 214.1(l)(2) and make a conforming reference change for compelling-circumstances EADs. Comments are due 60 days after publication; the exact deadline awaits the published version. No final rule or effective date is set.',
    effectState: 'not-in-effect',
    note: 'Addresses the buffer after early termination of employment',
    deck: 'After a layoff, how much time might remain to find work, change status, and arrange family matters?',
    headline:
      'The time buffer after a layoff could become a more fragile part of the U.S. pathway.',
    analysis:
      'If the discretionary grace period of up to 60 days is removed, job loss could affect status and family arrangements sooner. For people whose status depends on an employer, the risk of a mismatch between company decisions and personal response time could rise.',
    teaser:
      'A shorter post-employment buffer could make employer changes, status transitions, and family arrangements more urgent.',
    impacts: [
      [
        'For workers: less time to respond to an unexpected layoff',
        'Finding a new employer, preparing filings, and planning departure all take time. With a smaller buffer, several tasks may need to happen at once.',
      ],
      [
        'For job changes: transition planning affects risk',
        'During a job change, the gap between the end of one employment relationship and the start of the next arrangement may matter more. Coordination costs for employers and filing materials could also rise.',
      ],
      [
        'For families: the principal worker’s change affects everyone',
        'A spouse’s job, children’s schooling, and housing arrangements may all be affected. The magnitude still depends on each family member’s status and actual expiration date.',
      ],
    ],
    outlook:
      'Watch whether public comments lead DHS to revise the proposal and what effective-date and transition terms appear in any final rule. The preview specifies removal of the buffer but does not change current requirements.',
    scenarios: [
      [
        'Current buffer removed',
        'Unexpected unemployment leaves less time for deliberate planning',
        'The proposal removes the discretionary grace period of up to 60 days without a comparable replacement.',
        'A change in employment may create status-transition pressure sooner, making family planning and employer preparation speed more important.',
        'The NPRM’s specific treatment of status, employment termination, and later filings.',
      ],
      [
        'Specific exceptions retained',
        'Risk varies by reason for job loss and personal circumstances',
        'The text preserves a buffer for some people, situations, or transition periods.',
        'People covered by an exception may retain time to respond. Others would depend more on advance planning, and no single number would describe everyone.',
        'Covered exceptions, evidence requirements, discretion standards, and transition terms.',
      ],
      [
        'No further action yet',
        'The current rule continues to provide a buffer',
        'The proposal is not finalized or does not take effect.',
        'Near-term decisions would continue under the current rule, though employers and workers may pay more attention to future changes during layoffs and job transitions.',
        'A final rule, withdrawal, or subsequent revision.',
      ],
    ],
    scope: [
      [
        'Covered statuses',
        'E-1, E-2, E-3, H-1B, H-1B1, L-1, O-1 and TN, plus their dependents, including H-4, L-2, E dependents, O-3 and TD.',
      ],
      [
        'Covered event',
        'Early termination of employment, not every visa expiration or unemployment situation.',
      ],
      [
        'Separate rule',
        'The F-1 post-completion grace period is separate. The separately authorized up-to-10-day periods around petition validity dates do not replace the 60-day period after early termination. A dependent losing employment does not itself cause the principal or dependent to lose status.',
      ],
    ],
    related: ['h1b-reform', 'h4-ead', 'duration-status'],
  },
  {
    id: 'ead-discretion',
    discovery: {
      status: 'Comments closed',
      identities: ['OPT', 'H-4 EAD and others'],
      summary:
        'The proposal would extend adverse criminal-record discretion standards to most discretionary I-765 categories: relevant arrests, criminal charges, indictments or convictions would generally lead to denial unless significant countervailing public interests exist. It is not in effect.',
      audience:
        'Applicants with related criminal records seeking OPT, H-4 EAD or other covered work authorization.',
    },
    title: 'Proposed Expansion of Criminal-Record Review for Form I-765',
    short: 'I-765 Criminal-Record Review',
    group: 'OPT',
    agency: 'DHS / USCIS',
    rin: '1615-AC98',
    status: 'Comment period closed',
    effectLabel: 'Not in effect',
    audience:
      'applicants with related criminal records seeking discretionary work authorization, including OPT and H-4 EAD.',
    caveat:
      'Ordinary civil traffic tickets are not automatically criminal records; the proposal does not automatically revoke existing EADs.',
    summary:
      'DHS proposes extending adverse criminal-record discretion standards to most discretionary work-permit applications, including OPT and H-4 EAD. Relevant arrests, criminal charges, indictments or convictions would generally lead to I-765 denial unless significant countervailing public interests apply.',
    background:
      'RIN 1615-AC98 was published on June 5, 2026 and comments closed August 4. The proposal covers most 8 CFR 274a.12(c) categories and includes biometrics for initial and renewal I-765 filings.',
    effectState: 'not-in-effect',
    note: 'Covers most discretionary employment-authorization categories',
    deck: 'Which records could affect work authorization and later hiring or renewal?',
    headline:
      'Criminal-record review could affect work authorization and employment start dates.',
    analysis:
      'If finalized, the proposal could require some applicants to explain criminal records and case outcomes more fully. The effect would concentrate on relevant records and covered categories. A higher evidence threshold could separate eligibility to apply from a favorable exercise of discretion.',
    teaser:
      'Relevant criminal records could add evidence and discretionary risk, affecting OPT and other EAD transitions.',
    impacts: [
      [
        'For people with relevant records: case dispositions matter more',
        'Arrests, criminal charges, and convictions may need separate explanations. The absence of a conviction would not necessarily mean there is no adverse discretionary factor under the proposal.',
      ],
      [
        'For employment transitions: review risk affects timing',
        'If supplemental evidence or more complex individual review is required, preparation and work start dates may become harder to predict. Employers may also need to adjust onboarding.',
      ],
      [
        'For other applicants: category and nature of the record are central',
        'The proposal cannot be reduced to a claim that every OPT application will be denied, nor should an ordinary civil traffic ticket automatically be treated as a criminal record. Categories and facts require separate analysis.',
      ],
    ],
    outlook:
      'Our outlook: the final definitions of relevant criminal conduct, public-interest exceptions, and evidence requirements will explain the practical effect better than a general statement about tougher review. Clear boundaries would also affect consistency in adjudication.',
    scenarios: [
      [
        'Broad application as proposed',
        'Applicants with relevant records face a higher burden of explanation',
        'Most discretionary employment-authorization categories become subject to the new adverse discretionary standard.',
        'The nature of a record and its case documents would matter more, potentially raising filing risk and preparation costs for some people.',
        'Final covered categories, standards for adverse factors, and public-interest exceptions.',
      ],
      [
        'Narrower boundaries',
        'Effects concentrate on clearly identified circumstances',
        'The final rule narrows covered conduct or clarifies exclusions.',
        'Clearer boundaries may reduce some uncertainty, while people whose records remain within scope would still face individual review.',
        'Responses to comments, definitions of conduct, disposition of records, and evidence rules.',
      ],
      [
        'Implementation delayed',
        'Current standards continue, while complete preparation remains necessary',
        'The agency keeps reviewing or revising the rule, with no new standard in effect.',
        'The proposal itself would not yet add a new denial standard. Existing review requirements would continue to apply.',
        'Publication of a final rule and updates to forms and implementation guidance.',
      ],
    ],
    scope: [
      [
        'Covered categories',
        'Most categories under 8 CFR 274a.12(c), including OPT and H-4 EAD.',
      ],
      [
        'Nature of records',
        'Criminal conduct and records require specific analysis and should not be generalized to every civil traffic ticket.',
      ],
      [
        'Existing cards',
        'The proposal would not automatically revoke an issued EAD; future renewal standards require separate analysis.',
      ],
    ],
    related: ['opt-fee', 'h4-ead'],
  },
  {
    id: 'h4-ead',
    discovery: {
      status: 'Long-term agenda',
      identities: ['H-4'],
      summary:
        'Current rules remain unchanged; no proposal date has been announced.',
      audience:
        'Eligible H-4 spouses who obtain work authorization under the current rule.',
    },
    title: 'Proposed End to Work Authorization for Some H-4 Spouses',
    short: 'H-4 Spousal EAD',
    group: 'H-1B',
    agency: 'DHS / USCIS',
    rin: '1615-AD14',
    status: 'Long-term agenda · No proposal date',
    effectLabel: 'Not in effect · Current rules unchanged',
    audience:
      'eligible H-4 spouses working under the current rule and their families.',
    caveat:
      'The agenda does not directly cancel the principal H-1B status or invalidate existing work authorization.',
    summary:
      'DHS plans to reverse the 2015 rule that allows certain H-4 spouses to apply for an EAD, removing their eligibility for work authorization under that rule. It would not directly change the principal worker’s H-1B status.',
    background:
      'RIN 1615-AD14 targets the related 2015 rule, with the NPRM date listed as To Be Determined. There is no public text, comment window or effective date.',
    effectState: 'not-in-effect',
    note: 'The current agenda stage does not change existing work-authorization rules',
    deck: 'How would a loss of spousal work authorization change a family’s plan to stay in the U.S.?',
    headline:
      'Dual-income families could face a structural change in their planning.',
    analysis:
      'If the relevant H-4 EAD rule is eventually rescinded, the pressure would extend beyond one lost income to a spouse’s career interruption, benefits, and the family’s choice of where to live. For now, this remains on the long-term agenda and belongs in long-range scenarios rather than day-to-day plans that assume authorization will soon end.',
    teaser:
      'A future rescission could strain both a family’s second income and the spouse’s career continuity.',
    impacts: [
      [
        'For family finances: the second income may need reassessment',
        'Families that rely on two incomes for housing, education, and everyday expenses could lose substantial budget flexibility if spousal income disappears.',
      ],
      [
        'For a spouse’s career: an interruption can have lasting effects',
        'Even when a family can absorb the near-term income loss, a career gap and changes in advancement and benefits can affect a later return to work.',
      ],
      [
        'For decisions about staying: an individual job becomes a family tradeoff',
        'The principal worker’s H-1B status would not be directly ended by this agenda item, but the family’s net benefit and career options could change, affecting where it chooses to live.',
      ],
    ],
    outlook:
      'Our assessment: the next near-term signal is whether this moves from the long-term agenda to a formal proposal. If it does, treatment of existing EADs, renewals, and transition timing will determine whether families adjust gradually or face a concentrated income change.',
    scenarios: [
      [
        'Remains on the long-term agenda',
        'Current arrangements continue while the long-term risk remains under review',
        'No NPRM is published and the current rule does not change.',
        'Families can continue working under valid current authorization. Future risk is better used in long-term budgeting than as a basis for assuming authorization will soon end.',
        'Whether the agenda stage changes, the action is submitted for review, or a proposal is published.',
      ],
      [
        'Formal proposal published',
        'Families and employers begin evaluating transition arrangements',
        'DHS publishes a specific rescission plan and comment window.',
        'Employers of H-4 spouses may pay closer attention to future renewals, and families could assess income changes from actual terms. Publication of a proposal alone would not end work authorization.',
        'Covered groups, treatment of existing cards and renewals, and the proposed transition period.',
      ],
      [
        'Final rescission takes effect',
        'Income and career arrangements may change gradually or all at once',
        'After rulemaking, a rescission rule becomes effective.',
        'The speed of the effect would depend on protection for existing cases and treatment of issued cards. Families may need to rebalance the principal worker’s job benefits against the spouse’s career opportunities.',
        'Final effective-date terms, treatment of issued cards, and any court orders affecting implementation.',
      ],
    ],
    scope: [
      [
        'Covered people',
        'Eligible H-4 spouses who receive work authorization under the current rule.',
      ],
      [
        'Principal worker',
        'This agenda item does not directly end H-1B status or cap-selection eligibility.',
      ],
      [
        'Current stage',
        'There is no formal proposal, comment window, or effective date.',
      ],
    ],
    related: ['ead-discretion', 'grace-period'],
  },
];
