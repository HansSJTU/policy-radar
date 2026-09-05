export type EnglishPolicy = {
  title: string;
  tldr: string;
  status: string;
  current: string;
  route: string[];
  milestones: Array<{ date: string; text: string }>;
  next: Array<{ date: string; text: string; estimate?: boolean }>;
  impacts: string[];
  sourceLabels: string[];
};

export const englishPolicies: Record<string, EnglishPolicy> = {
  'opt-fee': {
    title: 'OPT May Carry a $100,000 Fee',
    tldr: 'F-1 students may be required to pay $100,000 when applying for OPT. The amount comes from media reporting; the government has not released the proposed rule, the actual fee, who would pay it, or any exemptions.',
    status: 'Under OMB review · Amount not officially confirmed',
    current: 'ICE submitted its proposed Optional Practical Training Fees rule to OMB/OIRA on August 20, 2026. It is classified as an economically significant rule. As of this report, neither the rule text nor a fee amount is public, and the current OPT filing fee has not changed.',
    route: ['OPT', 'H-1B transition'],
    milestones: [
      { date: '2026-08-20', text: 'RIN 1653-AB01 was submitted to OMB/OIRA for review.' },
      { date: '2026-08-26', text: 'Universities cautioned that the $100,000 figure came from media reporting, not a published government document.' },
    ],
    next: [
      { date: 'Next step', text: 'An NPRM could appear in the Federal Register only after OIRA completes its review.' },
      { date: 'Weeks to months', text: 'The proposal may become public; a final rule is more likely in late 2026 or 2027 and beyond.', estimate: true },
    ],
    impacts: [
      'If the rule charges an individual or employer $100,000, the fee would apply at the OPT application stage before an H-1B registration or petition.',
      'Employers could consider the added OPT cost when deciding whether to hire international graduates who have not yet entered the H-1B selection process.',
      'No new fee is currently due. The NPRM will need to identify who pays, which applicants are covered, any exemptions, and the effective date.',
    ],
    sourceLabels: ['OIRA review record', 'UIC status update', 'USCardForum discussion'],
  },
  'h1b-fee': {
    title: 'New $103,265 H-1B Surcharge',
    tldr: 'DHS proposes a $103,265 surcharge, in addition to existing fees, for every cap-subject H-1B petition. The proposal includes U.S. advanced-degree cases and F-1 change-of-status petitions; cap-exempt petitions are outside the surcharge.',
    status: 'Published NPRM · Not in effect',
    current: 'DHS published RIN 1615-AD20 on August 25, 2026. The proposal would add $103,265 to the existing filing fees for each cap-subject H-1B petition. Cap-exempt petitions would not pay this surcharge.',
    route: ['OPT → H-1B', 'H-1B selection'],
    milestones: [
      { date: '2026-06-08', text: 'A federal district court vacated implementation of the earlier presidential proclamation imposing a $100,000 fee; the government is appealing.' },
      { date: '2026-08-25', text: 'DHS published a new $103,265 fee NPRM under a different legal authority.' },
    ],
    next: [
      { date: '2026-09-24', text: 'The public comment period closes, providing the clearest current opportunity to participate.' },
      { date: 'Late 2026–2027+', text: 'DHS may issue a final rule, which could then face litigation.', estimate: true },
    ],
    impacts: [
      'Employers filing cap-subject H-1B petitions for recent F-1 or OPT hires would face the proposed surcharge if the rule becomes final.',
      'The proposal is not limited to applicants entering from abroad; coverage turns on whether the petition is cap-subject.',
      'Qualifying universities, research organizations, and other cap-exempt employers are outside this surcharge, although other H-1B rules still apply.',
    ],
    sourceLabels: ['Federal Register NPRM', 'USCardForum discussion'],
  },
  'duration-status': {
    title: 'F/J Status Would No Longer Use Duration of Status',
    tldr: 'A DHS final rule replaces Duration of Status admission for F/J holders with a fixed period, generally no longer than four years. People who need more time must apply to USCIS for an extension; an OPT filing would generally require both Form I-765 and Form I-539.',
    status: 'Final rule · In litigation',
    current: 'The rule proposed in 2025 became final on July 17, 2026. F/J admission would cover the approved program but generally no more than four years, and extensions would require a USCIS filing. Transitional provisions cover current D/S holders, but a later departure and reentry would generally place them under the fixed-period system. After hearing arguments on September 3, the court took the injunction request under advisement: the judge did not rule from the bench and will continue considering the matter, potentially through a later written order. This is neither a grant nor a denial of relief.',
    route: ['F-1', 'CPT', 'OPT'],
    milestones: [
      { date: '2025-08-28', text: 'DHS published the proposed rule.' },
      { date: '2026-07-17', text: 'DHS published the final rule.' },
      { date: '2026-08-18', text: 'A coalition of universities and other plaintiffs filed suit in federal court in Massachusetts.' },
      { date: '2026-08-31', text: 'The court extended the government response deadline to September 2; the September 3 preliminary-injunction hearing remained on the calendar.' },
      { date: '2026-09-02', text: 'The government attached its proposed opposition to a motion for leave to exceed the page limit, asking the court to deny APA § 705 relief and a preliminary injunction and opposing summary judgment before the administrative record is filed.' },
      { date: '2026-09-03', text: 'The court held the injunction hearing and heard arguments; the judge did not rule from the bench and took the matter under advisement.' },
    ],
    next: [
      { date: '2026-09-15', text: 'The rule remains scheduled to take effect unless the court first issues a stay or injunction.' },
    ],
    impacts: [
      'After completing a U.S. F-1 degree, a student generally could not begin another program at the same or a lower educational level in F-1 status, directly narrowing the Day-1 CPT fallback route.',
      'Graduate students would face tighter limits on changing programs or schools mid-program unless SEVP approves an exception for special circumstances.',
      'Under the new system, an OPT applicant would generally need both Form I-765 and Form I-539 approved before beginning employment.',
      'The general departure period would fall to 30 days, and the transition rules for current status holders are more complex.',
    ],
    sourceLabels: ['2025 proposed rule', '2026 final rule', 'Official court calendar', 'Docket entry 47 electronic clerk’s notes', 'Government’s September 2 proposed opposition', 'USCardForum rule discussion', 'USCardForum litigation discussion'],
  },
  'h1b-weighted-selection': {
    title: 'H-1B Selection Is Now Weighted by Wage Level',
    tldr: 'USCIS replaced equal-probability selection for cap-subject H-1B cases with a wage-level-weighted process. Wage Levels I, II, III, and IV receive one, two, three, and four entries respectively. The rule took effect on February 27, 2026 and applies beginning with the FY 2027 registration season.',
    status: 'Final rule in effect · Used beginning with FY 2027',
    current: 'DHS published the RIN 1615-AD01 final rule on December 29, 2025, and it took effect on February 27, 2026. USCIS assigns one to four selection entries according to the position’s OEWS wage level while retaining beneficiary-centric selection and the existing order between the regular cap and the U.S. advanced-degree exemption.',
    route: ['OPT → H-1B', 'H-1B selection', 'Cap-subject'],
    milestones: [
      { date: '2025-09-24', text: 'DHS published the wage-level-weighted selection NPRM.' },
      { date: '2025-12-29', text: 'DHS published the final rule with the proposed four wage-level weights unchanged.' },
      { date: '2026-02-27', text: 'The rule took effect and applied to the FY 2027 H-1B registration season.' },
    ],
    next: [
      { date: 'Future cap seasons', text: 'USCIS will continue weighting selection by the OEWS level for the occupation, work location, and offered wage unless the rule is later changed.' },
    ],
    impacts: [
      'DHS estimated simple weighted selection probabilities of about 15.29%, 30.58%, 45.87%, and 61.16% for Wage Levels I through IV, compared with an equal-probability baseline of about 29.59%.',
      'An F-1 or OPT graduate registered for an entry-level position at Wage Level I receives one selection entry, while positions at higher wage levels receive more entries.',
      'The wage level is determined for the occupation and work location, rather than by comparing absolute salaries across all registrants. The rule does not itself raise the prevailing-wage level required for a position.',
      'Beneficiary-centric selection remains in place. A unique beneficiary selected through registrations from multiple employers still counts only once toward the annual allocation.',
    ],
    sourceLabels: ['Federal Register final rule', 'USCardForum discussion'],
  },
  'cpt-guidance': {
    title: 'August 12 / August 24 CPT Guidance Tightens Eligibility',
    tldr: 'ICE/SEVP says schools should authorize CPT only when the training is necessary to complete the degree and is a graduation requirement for every student in the program. Registering for an optional internship course is generally not enough, and the employer must have a cooperative agreement with the school.',
    status: 'SEVP enforcement position already in use',
    current: 'ICE/SEVP first reminded schools and DSOs of their compliance responsibilities on August 12. On August 24, it defined “integral” more narrowly: the practical training must be necessary to complete the degree and required of every student in the program. An elective course is generally insufficient, and the sponsoring employer must have a cooperative agreement with the school.',
    route: ['CPT', 'Day-1 CPT', 'Internships'],
    milestones: [
      { date: '2026-08-12', text: 'SEVP Broadcast 2608-01 emphasized DSO and school responsibilities and previewed stronger oversight.' },
      { date: '2026-08-24', text: 'Broadcast 2608-02 set out a narrower “integral” standard and a cooperative-agreement requirement.' },
      { date: 'Since 2026-08-24', text: 'Several universities paused course-credit or optional CPT, or limited approval to programs with a mandatory degree requirement.' },
    ],
    next: [
      { date: 'Now', text: 'Each school is applying the guidance to its own curriculum and legal advice; there is no single reopening date.' },
      { date: 'Coming weeks', text: 'Schools may continue updating their policies, and SEVP may issue additional guidance or take enforcement action.', estimate: true },
    ],
    impacts: [
      'CPT based only on enrolling in an internship course faces the greatest compliance risk.',
      'Programs whose published degree requirements mandate an internship, co-op, clinical placement, or thesis research for every student are more likely to qualify.',
      'Each school decides how the guidance affects an existing CPT I-20; several schools have said current authorizations remain unchanged.',
    ],
    sourceLabels: ['SEVP August 12 Broadcast', 'SEVP August 24 Broadcast', 'USCardForum discussion'],
  },
  'prevailing-wage': {
    title: 'Higher H-1B / PERM Wage Levels',
    tldr: 'DOL proposes raising the four prevailing-wage thresholds used for H-1B, H-1B1, E-3, and PERM cases from roughly the 17th, 34th, 50th, and 67th percentiles to the 34th, 52nd, 70th, and 88th percentiles. The proposal is not in effect.',
    status: 'Comment period closed · Not in effect',
    current: 'DOL published the RIN 1205-AC30 NPRM on March 27, 2026, and the public comment period ended on May 26. The August 2026 Unified Agenda still lists it at the proposed-rule stage. DOL has not published a final rule, so the current wage-level calculation has not changed.',
    route: ['OPT → H-1B', 'H-1B', 'PERM'],
    milestones: [
      { date: '2025-09-19', text: 'A presidential proclamation directed DOL to begin rulemaking on H-1B prevailing-wage levels.' },
      { date: '2026-03-27', text: 'DOL published an NPRM proposing four levels at the 34th, 52nd, 70th, and 88th percentiles.' },
      { date: '2026-05-26', text: 'The 60-day public comment period closed and DOL began reviewing comments.' },
    ],
    next: [
      { date: 'Next step', text: 'DOL may revise the proposal and send a final rule to OIRA; no completion date is public.' },
      { date: 'Date unknown', text: 'The new wage levels would apply only after a final rule is published and reaches its effective date.', estimate: true },
    ],
    impacts: [
      'If finalized as proposed, employers using OEWS data would have to meet higher wage floors for new H-1B, H-1B1, and E-3 LCAs and PERM positions.',
      'Entry-level jobs and positions in lower-wage areas would be more likely to exceed employer budgets, reducing the set of jobs available for an OPT-to-H-1B transition.',
      'H-1B extensions and employer changes may also be affected when a new LCA is required; this rule does not change the H-1B cap or selection method.',
      'Approved cases and current wage standards have not changed. Any transition rules and applicability dates will come from a future final rule.',
    ],
    sourceLabels: ['Federal Register NPRM', 'DOL rule summary', 'USCardForum discussion'],
  },
  'h1b-reform': {
    title: 'H-1B Classification Reform',
    tldr: 'DHS plans to redefine eligibility for cap-exempt H-1B petitions and increase scrutiny of employers with compliance violations and third-party worksites. The precise eligibility lines and evidence requirements will not be known until the NPRM is public.',
    status: 'Under OMB review · Text not public',
    current: 'RIN 1615-AD00 was submitted to OIRA on August 24, 2026. The Unified Agenda summary identifies possible changes to cap-exemption eligibility, added scrutiny of employers with prior violations, and stronger oversight of third-party worksites.',
    route: ['H-1B', 'Third-party placement', 'Cap-exempt'],
    milestones: [
      { date: 'October 2025 agenda', text: 'DHS first described the reform direction in relatively specific terms.' },
      { date: '2026-08-24', text: 'The proposed rule entered OIRA prepublication review.' },
    ],
    next: [
      { date: 'Sep.–late 2026', text: 'DHS may publish an NPRM and open a public comment period.', estimate: true },
      { date: '2027+', text: 'If the rule advances, a final rule and related litigation are more likely in 2027 or later.', estimate: true },
    ],
    impacts: [
      'Employers using consulting arrangements or third-party client sites may face additional evidence requirements.',
      'The rule may redefine cap-exempt eligibility, but the current agenda summary is not detailed enough to identify the new boundary.',
      'The agenda summary is not a rule. Individual cases should be evaluated after DHS publishes the NPRM.',
    ],
    sourceLabels: ['OIRA review record', 'Unified Agenda summary', 'USCardForum discussion'],
  },
  'grace-period': {
    title: 'Proposal to Eliminate the 60-Day Grace Period After Job Loss',
    tldr: 'DHS plans to eliminate the discretionary grace period of up to 60 days after early termination of employment for E-1, E-2, E-3, H-1B, H-1B1, L-1, O-1, TN, and related classifications. The proposal does not concern the F-1 post-completion grace period.',
    status: 'OIRA review completed · Awaiting NPRM',
    current: 'OIRA completed its review of RIN 1615-AD22 on August 27, 2026, with the result “Consistent with Change.” DHS plans to eliminate the discretionary grace period of up to 60 days after early termination of employment for E-1, E-2, E-3, H-1B, H-1B1, L-1, O-1, TN, and related classifications. The proposal is not yet public.',
    route: ['H-1B job loss', 'Employer change', 'Change of status'],
    milestones: [
      { date: '2026-08-06', text: 'DHS submitted the proposal to OIRA.' },
      { date: '2026-08-27', text: 'OIRA completed review and cleared the proposal with changes.' },
    ],
    next: [
      { date: 'Days to weeks', text: 'DHS may publish an NPRM, which will reveal the scope and implementation details.', estimate: true },
      { date: 'Late 2026–2027+', text: 'A final rule could follow only after the comment period and agency review.', estimate: true },
    ],
    impacts: [
      'An H-1B worker whose employment ends could lose the discretionary period now available to find a new employer, file a change of status, or arrange departure.',
      'Employer-change timing, family arrangements, and the I-94 expiration date would become more important.',
      'The F-1 post-completion grace period is governed by a different rule and is not part of this proposal.',
    ],
    sourceLabels: ['OIRA completion record', 'Fragomen August 28 update', 'USCardForum discussion'],
  },
  'ead-discretion': {
    title: 'Proposed Expansion of Criminal-Record Review for Form I-765',
    tldr: 'DHS proposes enhanced criminal-record review for most discretionary employment-authorization applications, including OPT and H-4 EAD. USCIS would generally deny Form I-765 if the applicant has been arrested, criminally charged, indicted, or convicted, unless a significant countervailing public interest exists.',
    status: 'Comment period closed · Not in effect',
    current: 'DHS published the RIN 1615-AC98 NPRM on June 5, 2026, and the public comment period ended on August 4. The proposal extends the new discretionary standard to most categories under 8 CFR 274a.12(c) and requires biometrics for affected initial and renewal I-765 applications. DHS has not published a final rule.',
    route: ['OPT', 'H-4 EAD', 'Form I-765'],
    milestones: [
      { date: '2026-03-31', text: 'OIRA completed prepublication review of the NPRM.' },
      { date: '2026-06-05', text: 'DHS published the discretionary employment-authorization NPRM.' },
      { date: '2026-08-04', text: 'The 60-day public comment period closed.' },
    ],
    next: [
      { date: 'Next step', text: 'DHS will review comments and decide whether to revise or finalize the rule; no public date is available.' },
      { date: 'Date unknown', text: 'If finalized, the new standard would apply to affected initial or renewal filings only according to the final rule’s effective-date provisions.', estimate: true },
    ],
    impacts: [
      'The proposal covers most 8 CFR 274a.12(c) categories, including OPT under (c)(3) and H-4 EAD under (c)(26). An applicant with no relevant record would not lose eligibility solely because of this standard.',
      'An arrest, unresolved criminal charge, indictment, or conviction could become a negative factor that ordinarily results in denial, even without a conviction.',
      'The text addresses criminal acts; it does not state that every civil traffic ticket triggers denial. USCIS would assess the nature of the record and supporting evidence.',
      'The proposal would not automatically cancel an EAD already issued; an existing card would remain valid through its printed expiration date.',
    ],
    sourceLabels: ['Federal Register NPRM', 'Regulations.gov document', 'USCardForum discussion'],
  },
  'h4-ead': {
    title: 'Proposal to End EAD Eligibility for Certain H-4 Spouses',
    tldr: 'DHS plans to rescind the 2015 rule that allows certain H-4 spouses to apply for employment authorization. The policy would end work authorization for eligible H-4 spouses but would not directly terminate the principal applicant’s H-1B status.',
    status: 'Long-term agenda · Date unknown',
    current: 'RIN 1615-AD14 appears on the long-term agenda and would rescind the 2015 rule allowing certain H-4 spouses to apply for an EAD. The NPRM date is “To Be Determined,” and there is no public proposal or legal deadline.',
    route: ['H-4 families', 'Household income'],
    milestones: [
      { date: '2026 Unified Agenda', text: 'The initiative appeared on the government’s long-term rulemaking agenda.' },
      { date: 'As of 2026-09-05', text: 'No NPRM, comment period, or effective date has been announced.' },
    ],
    next: [
      { date: 'TBD', text: 'If DHS proceeds, it must still publish an NPRM, accept comments, issue a final rule, and may face litigation.' },
    ],
    impacts: [
      'The proposal would not directly change the principal worker’s H-1B status or cap eligibility.',
      'Families that rely on H-4 employment authorization could lose a second income, employment benefits, and career continuity.',
      'The agenda item is not an imminent ban and has no announced implementation date.',
    ],
    sourceLabels: ['Unified Agenda RIN 1615-AD14', 'USCardForum discussion'],
  },
};

export const englishVerifiedSchools: Record<string, { state: string; detail: string }> = {
  'UC Berkeley': {
    state: 'Course Credit CPT remains paused; thesis and dissertation CPT is limited to narrowly documented cases',
    detail: 'Degree Requirement CPT is limited to training required of every student in the program. Thesis/Dissertation Requirement CPT is available only to thesis-track master’s or doctoral students who have Advanced to Candidacy, when the training is necessary to complete the thesis or dissertation, cannot reasonably be replaced by another research or data-collection method, and is documented by the faculty adviser.',
  },
  'UC Davis': { state: 'Non-degree-required course-credit CPT is paused', detail: 'Degree-required CPT continues; previously issued CPT I-20s are currently unaffected.' },
  'Boston University': { state: 'Some CPT approvals are paused', detail: 'Cases that are expressly required for graduation continue to be processed.' },
  UIUC: { state: 'Elective-course CPT is no longer approved', detail: 'Only training required of every student and supported by an employer cooperative agreement is accepted.' },
  'Texas A&M': { state: 'Tighter review, not a full pause', detail: 'New applications after August 24 must satisfy both the program-wide graduation requirement and cooperative-agreement standards.' },
  'UT Dallas': { state: 'Process unchanged as of August 25', detail: 'This is a counterexample: not every university has “canceled CPT.”' },
  'University of Michigan': { state: 'Elective-course CPT is no longer approved', detail: 'Only training required for every student in the degree program may be approved; existing authorizations may continue.' },
  'Northwestern University': { state: 'CPT not required for every student is on hold', detail: 'During its review, the university is processing only work experiences required for every student in the academic program.' },
  'Columbia University': { state: 'CPT authorizations and requests are being reviewed', detail: 'Eligibility is limited to curricular, program-wide requirements documented by a cooperative agreement; ISSO is contacting affected students.' },
  'Harvard University': { state: 'Eligibility tightened; no university-wide pause announced', detail: 'Employment must be a formally documented degree requirement and supported by an appropriate cooperative agreement.' },
  'University of Washington': { state: 'New CPT that is not required for every student is paused', detail: 'New requests are paused when CPT is not required for every student in the degree program; previously authorized CPT may continue.' },
  'University of Maryland, College Park': { state: 'New CPT outside a program-wide requirement or required research is paused', detail: 'ISSS paused unapproved requests unless the training is required for every student, is part of a required course, or is necessary for thesis or dissertation research. UNIV099, ENCO099, BMGT099, and other non-required internships are not being accepted; previously authorized CPT may continue.' },
  'Trine University': { state: 'The university CPT page still lists an open application and review process', detail: 'The graduate CPT page lists application deadlines for 2026–27 start dates and says applications remain open and are reviewed in the order received. The page does not separately address the August 24 guidance, so students should confirm individual eligibility with their DSO.' },
  MIT: { state: 'New CPT outside a program-wide degree requirement is temporarily paused', detail: 'MIT paused new CPT requests received or pending as of August 24 when the training is not required for every student to complete the degree, and says it will contact students already issued Fall 2026 CPT to discuss options.' },
  UCSB: { state: 'The university notice says CPT issuance has been paused since August 17', detail: 'OISS is consulting legal counsel and will update students when it has further guidance. The notice does not distinguish CPT categories or explain how existing authorizations are treated.' },
  'New York University (Tandon Mathematics)': { state: 'The mathematics page says international-student CPT approvals have been paused since September 1', detail: 'The internship policy page covers mathematics undergraduates and graduates and directs students to OGS for further information. This entry records the public notice for Tandon Mathematics only and does not establish a university-wide NYU policy.' },
  'University of Southern California': { state: 'Only CPT required for graduation is approved from August 24', detail: 'OIS no longer accepts elective-course CPT that is not required for every student in the program. Documentation review may delay approvals; Fall 2026 CPT authorizations issued before August 24 will not be rescinded.' },
  'University of Alabama': { state: 'Stricter CPT eligibility review began August 31', detail: 'ISSS requires departments to document whether training is required for all students in the degree program or track, or is necessary for thesis-track master’s or doctoral students to complete their thesis or dissertation. Degree requirements must be supported by the academic catalog; an elective-course requirement alone does not qualify.' },
};

export const englishCommunitySchools: Record<string, string> = {
  'UC Irvine': 'A screenshot says course-credit CPT is paused while mandatory graduation requirements continue.',
  'UNC–Chapel Hill': 'An ISSS email screenshot says CPT is paused except where it is a strict graduation requirement.',
  Caltech: 'An ISP notice screenshot says all new CPT is paused; current participants are unaffected.',
  UCLA: 'A notice screenshot says course-credit or support-letter CPT is paused unless it is a program-wide degree requirement.',
  'Purdue ECE': 'A department email screenshot says it will not sign CPT this semester; this is an ECE position and should not be generalized to the entire university.',
  'Goldey-Beacom College': 'A school email screenshot says new CPT review and approval are paused; requests not already added in SEVIS will not be approved for now.',
  'Purdue University (ISS)': 'A university-level ISS email screenshot says CPT must arise from an established course or thesis/dissertation research requirement; this entry is separate from the ECE department notice.',
};

export const englishRouteStages: Record<string, { subtitle: string; policies: Record<string, { title: string; state: string }> }> = {
  'F-1': { subtitle: 'Study and enrollment', policies: { 'duration-status': { title: 'Fixed admission period', state: 'Final rule · Decision pending after hearing' } } },
  CPT: { subtitle: 'Curricular training', policies: { 'cpt-guidance': { title: 'Aug. 12 / Aug. 24 CPT guidance', state: 'Schools are applying the new standard' } } },
  OPT: { subtitle: 'Post-completion work', policies: {
    'opt-fee': { title: 'OPT $100k', state: 'Amount not officially confirmed' },
    'ead-discretion': { title: 'I-765 criminal-record review', state: 'Comment period closed' },
  } },
  'H-1B': { subtitle: 'Employment visa', policies: {
    'h1b-fee': { title: 'H-1B $103,265', state: 'Published proposal' },
    'h1b-weighted-selection': { title: 'H-1B wage-weighted selection', state: 'Final rule in effect' },
    'prevailing-wage': { title: 'H-1B / PERM wage levels', state: 'Comment period closed' },
    'h1b-reform': { title: 'H-1B classification reform', state: 'OMB review' },
    'grace-period': { title: 'End of 60-day grace period', state: 'Awaiting proposed rule text' },
    'h4-ead': { title: 'H-4 EAD', state: 'Long-term agenda' },
  } },
};
