import type { PolicyId } from './community-impact-model';
import type { Language } from './language';

// Explain the situation, relevant policy change, and consequence in connected prose.
// Each impact can have zero, one, or several distinct examples.
const examples: Record<PolicyId, [string[], string[]][]> = {
  'opt-fee': [
    [
      [
        '小林马上硕士毕业了，也拿到了全职 offer，打算申请 OPT 然后入职。但如果最终规定要求学生自己掏 10 万美元来办 OPT，那他在还没赚到第一笔工资之前，就得先凑出这笔钱。要是自己拿不出、家里也帮不上，就算工作已经定了，他也可能没法通过 OPT 去上班。目前这只是假设费用由学生付，具体谁出钱还没公布。',
        '小周在犹豫要不要去美国读硕士，家里只准备了学费和生活费，指着毕业后能在美国工作把钱赚回来。但如果以后申请 OPT 还要额外再交 10 万美元，那毕业工作的计划就多了一笔没算进去的开销。这个影响可能现在就会让他重新考虑要不要接受 offer，而不只是等到毕业再说。',
      ],
      [
        'Lin is finishing a master’s and has a full-time offer, with plans to start after obtaining OPT. If the final rule requires the student to pay $100,000 when applying, Lin would need that money before receiving a first paycheck. If neither Lin nor the family can afford it, the offer alone would not make starting work through OPT possible. This assumes the student pays; the payer has not been announced.',
        'Zhou is deciding whether to accept a US master’s offer. The family has budgeted for tuition and living costs and hopes Zhou will work in the US afterward. If OPT later requires another $100,000 from the student, that work plan would carry a cost outside the original budget. The possible fee could affect the admission decision now, not only decisions after graduation.',
      ],
    ],
    [
      [
        '一家小公司准备招刚毕业的小陈，连工资预算都批好了。但如果规定改成雇主来付这 10 万美元 OPT 费用，或者公司决定帮他出，那公司就得在工资以外再掏一笔钱。要是预算加不了，公司就可能撤回或推迟 offer——这不是小陈不行，而是招他变贵了。',
      ],
      [
        'A small company has budgeted a salary for new graduate Chen. If the final rule makes the employer responsible for the OPT fee, or the company chooses to cover it, the company would need another $100,000 beyond salary. Without a larger hiring budget, it might withdraw or delay the offer because of the added cost, not because Chen is unsuitable for the role.',
      ],
    ],
    [[], []],
  ],
  'h1b-fee': [
    [
      [
        '小陈用 OPT 入职的时候，HR 说过以后会帮他申 H-1B。但如果收费提案真的通过了，而且他的申请属于要参加抽签的那种，公司就得在正常费用之外再多交 103,265 美元。HR 当初可能没把这笔钱算进去，所以公司得重新批预算，才能兑现之前的承诺。',
        '小林用 OPT 干了一年了，主管挺满意，想把她留下来。但如果她申 H-1B 时要多交 103,265 美元，主管就得向上面申请这笔钱。要是财务不批，公司还是可能不给她申——她干得好不好，跟这笔费用免不免没有关系。',
      ],
      [
        'When Chen started on OPT, HR promised future H-1B sponsorship. If the proposal takes effect and the petition is cap-subject, filing it would require another $103,265 on top of existing fees. HR’s earlier promise may not have included that new charge, so the company would need fresh budget approval before it could follow through.',
        'Lin’s manager wants to retain her after a successful year on OPT. If the upcoming H-1B petition requires the $103,265 surcharge, the manager would need company approval for that expense. Finance could refuse the extra budget and the company might not file, even though the manager values Lin’s work.',
      ],
    ],
    [
      [
        '一家小公司本来打算给三个员工申 H-1B（都是要抽签的那种）。如果提案按现在的金额生效，光这笔附加费三份加起来就是 309,795 美元，这还不算原来的申请费。如果公司只够付一个人的，那就只能减少担保人数，没法按原计划来。',
      ],
      [
        'A small company plans three cap-subject H-1B petitions. At the proposed rate, the additional fees alone would total $309,795, before existing costs. If the company can fund only one petition, it may reduce the number of employees it sponsors rather than proceed with all three.',
      ],
    ],
    [
      [
        '小李手上有两个 offer，一个是普通公司，一个是大学实验室。普通公司的 H-1B 要抽签，大学的不用。按现在的提案，普通公司得交这笔附加费，大学不用。所以就算两个岗位工资差不多，雇主实际花的钱不一样，这可能会影响他们愿不愿意帮小李办 H-1B。',
      ],
      [
        'Li receives offers from a company and a university lab. Suppose the company’s petition is cap-subject and the university’s qualifies as cap-exempt. The current proposal would charge the additional fee on the former but exclude the latter. Similar salaries could therefore come with different sponsorship costs and affect the employers’ willingness to file.',
      ],
    ],
  ],
  'duration-status': [
    [
      [
        '小王博士还需要一年才能写完论文，学校也同意他延毕。但新规实施以后，合法停留时间有了固定到期日。如果新的毕业时间晚于那个日期，他还得专门向移民局申请延长停留。所以光有学校同意是不够的，合法身份不会自动跟着延。',
      ],
      [
        'Wang’s school approves another year for PhD research. Under the new fixed-period rule, permission to stay has an end date. If graduation would fall after it, Wang must also apply to extend the stay; the school’s program extension does not itself extend immigration permission.',
      ],
    ],
    [
      [
        '小林五月份毕业，打算用 OPT 七月份入职。但新规下，申请 OPT 和申请延长停留通常是绑在一起的——前者管你能不能工作，后者管你能在美国待多久。所以她安排入职的时候得把这两件事都处理好。不过新规生效后前六个月有过渡安排，不是所有人都要马上同时办这两项。',
      ],
      [
        'Lin plans to graduate in May and start work through OPT in July. The new system generally pairs the OPT application with a stay-extension application: work permission and the permitted length of stay are separate matters. Both affect planning, although a temporary first-six-month provision means simultaneous filings are not immediately required of every applicant.',
      ],
    ],
    [
      [
        '小陈原本在读博士，想中途退出来，拿个硕士文凭然后用 OPT 去工作。但新规禁止研究生在读期间改学位层级。根据 Rice 的说法，学校虽然可以发硕士学位，却不能在 SEVIS 系统里把他的身份从博士改成硕士——而这一步改不了，他就没法用这个硕士学位申 OPT。也就是说，就算他手里拿着毕业证，身份这道坎还是过不去，OPT 照样办不下来。',
        '假设小李在新规生效后才拿到美国硕士学位，然后 OPT 期间没抽中 H-1B，就想再读一个硕士，用 Day 1 CPT 边读书边工作。但新规不允许用同级或更低的学位来拿或维持 F-1 身份，所以他首先就卡在第二个硕士的学生身份上——连入学都没法合法办，更别提用 CPT 接着工作了。不过要注意，这条限制只针对新规生效后拿到的学位。如果学位是生效前拿的，就不受影响，所以不能一概而论说所有用 OPT 的人都会遇到这个问题。',
      ],
      [
        'Chen wants to leave a PhD, receive a master’s, and apply for OPT based on it. The new rule prohibits graduate-level changes during study. Rice explains that it can award the master’s but cannot change the SEVIS record from doctoral to master’s level, preventing OPT based on that master’s. The obstacle is the record change, not whether the diploma is awarded.',
        'Suppose Li completes a US master’s after the rule takes effect, then misses H-1B selection while on OPT and plans another master’s with Day 1 CPT. The rule bars obtaining or maintaining F-1 through a same- or lower-level program, blocking the student-status basis for the second master’s before CPT could support continued work. Degrees completed before the effective date do not count toward that restriction.',
      ],
    ],
  ],
  'h1b-weighted-selection': [
    [
      [
        '小林和小陈都交了 H-1B 抽签申请，但小林的工资属于 Level I，小陈属于 Level IV。新规按工资等级给抽签权重，所以小林拿 1 份权重，小陈拿 4 份。权重高不代表一定能中，也不能直接算出每个人具体的中签概率。',
      ],
      [
        'Lin and Chen enter H-1B selection with jobs at wage Levels I and IV respectively. The new system assigns one selection weight to Lin and four to Chen instead of equal weights. Chen’s higher level gives more weight but does not guarantee selection or directly establish either person’s individual probability.',
      ],
    ],
    [
      [
        '小李接到两份年薪都是 10 万的工作，但岗位不一样，城市也不一样。工资等级要看具体职业和地区的工资数据，所以这两份 offer 可能分属不同等级。新规是按等级来分配权重的，也就是说，同样年薪不一定能拿到同样的抽签机会。',
        '小陈想通过加薪来提高 H-1B 中签率。因为新规按工资等级分配权重，所以他得搞清楚一件事：加薪后能不能升到更高的等级？如果涨完还在原来的等级，那这次加薪对抽签权重没有任何影响。',
      ],
      [
        'Li receives two $100,000 offers for different jobs or locations. Wage levels depend on the relevant occupation and geographic wage data, so the offers may fall into different levels. Because selection weights follow those levels rather than salary figures alone, equal salaries do not necessarily mean equal weights.',
        'Chen hopes a raise will improve the H-1B selection chance. Under the new system, the question is whether the increased salary qualifies for a higher wage level. If it remains in the same level, the raise does not increase the selection weight.',
      ],
    ],
    [[], []],
  ],
  'cpt-guidance': [
    [
      [
        '小林找了个实习，想通过注册一门选修实习课来申请 CPT。但新规要求实习必须是这个专业所有学生都必修的毕业要求，光拿学分不够。如果小林的专业允许学生不实习也能毕业，那这门选修课就不符合条件，学校很可能没法给他批 CPT。',
      ],
      [
        'Lin plans to obtain CPT by enrolling in an elective internship course. The new interpretation requires training needed by every student to complete the degree, not merely an opportunity to earn credit. If students can graduate without it, the elective does not meet that requirement and the school may not authorize CPT on that basis.',
      ],
    ],
    [
      [
        '你和室友在同一所大学，但你的专业规定实习是全体学生必须完成的，室友的专业只把实习当作选修课。按新规，学校得分别看两个专业的要求——你的情况可能过关，室友的不行。所以关键看专业怎么规定，跟是不是同一所学校没关系。',
        '小陈去年靠一门选修实习课成功批了 CPT，今年同一家公司又请他回去。但今年的新申请得按新规来审——实习必须是全体学生的必修要求。如果那门课还是选修课，去年的批准记录不能替代今年的课程要求。所以就算公司和岗位都没变，今年也可能批不下来。',
      ],
      [
        'You and a roommate attend the same university, but your degree requires an internship for everyone while the roommate’s offers it only as an elective. The new interpretation requires separate checks of those curricula. Your internship may meet that condition while the roommate’s does not; the distinction is the degree requirement, not the university name.',
        'Chen obtained CPT through an elective last year and receives a return offer from the same employer. A new request reviewed under the all-student degree requirement cannot rely on last year’s approval if the course remains optional. The employer and job may be unchanged, but a new CPT authorization could still be unavailable.',
      ],
    ],
    [
      [
        '小林找的实习已经满足专业必修要求了，但学校还没跟实习公司签合作协议。新规同时要求学校和雇主之间有这份协议，所以光满足课程要求还不够。要是协议签不下来，就算公司已经让他去上班，学校还是可能不批 CPT。',
      ],
      [
        'Lin’s internship meets the degree requirement, but the school has not signed a cooperation agreement with the employer. The guidance also requires that agreement, so the academic requirement alone is insufficient. An employer’s invitation cannot replace CPT authorization when the agreement requirement remains unmet.',
      ],
    ],
  ],
  'prevailing-wage': [
    [
      [
        '假设某个岗位现在的法定工资门槛是每年 8 万美元，雇主也按这个数给了 offer。但如果新标准把这个岗位的门槛提到 9 万，而且适用于这份申请，雇主就得把 offer 提到至少 9 万才能过关。要是公司不愿加钱，那就没法按原工资办下来。这里的金额只是举例说明，不是真实标准。',
        '小林和小陈都因为新标准得涨工资。小林的公司愿意把 offer 提到新门槛；小陈的公司不愿加预算，只肯给原来的工资。所以两个人面对的是同一个要求，但只有愿意涨薪的雇主才能继续办下去。',
      ],
      [
        'Suppose a role currently has an $80,000 annual wage threshold and an offer at that amount. If a new applicable threshold becomes $90,000, the employer must raise the offer to at least $90,000 to meet that requirement. Without the added budget, it cannot file on the original salary. These figures illustrate the calculation rather than actual wage standards.',
        'Both Lin’s and Chen’s roles require higher pay under a new applicable standard. Lin’s employer raises the offer to meet the threshold, while Chen’s insists on the old salary. The requirement is similar, but the employers’ willingness to meet it determines whether the respective filings can satisfy that wage condition.',
      ],
    ],
    [
      [
        '小陈上次办 H-1B 的时候，工资是符合当时门槛的。现在他想跳槽，新公司愿意给同样的工资。但如果新标准生效了，而且这个岗位的门槛已经涨了，那公司就得把 offer 再往上提，才能让新申请达标。以前批过不代表现在也能过。',
        '小王的H-1B签证和原来的LCA（也就是劳工条件申请）都快到期了，公司准备帮他续三年，所以得重新办一份LCA。虽然公司、岗位、工作地点都没变，但如果新的工资标准适用于这次申请，公司就得按新标准重新核一遍他的工资。要是小王现在的工资低于新的法定门槛，公司就必须给他涨薪，才能满足延期申请的要求。如果公司不愿意增加这笔预算，那就没法按现在的工资水平帮他办延期。至于哪些延期申请会受到新标准的影响，还得等最终的规则和过渡安排公布后才能确定。',
      ],
      [
        'Chen’s salary met the legal threshold for the previous H-1B filing. A new employer now offers the same pay. If the new wage standard applies to this petition and raises the threshold for the role, the new employer must increase the offer accordingly. Meeting the previous filing’s standard does not satisfy a higher standard applicable to this one.',
        'Wang’s H-1B and existing Labor Condition Application (LCA) are both nearing expiration. The company plans to extend his employment for another three years, so it needs a new LCA. Even with the same employer, role, and work location, if the new wage standard applies to this filing, the company must check his pay against the new standard. If his current salary falls below the new required wage, the company must raise it to meet the extension’s wage requirement. Without the extra budget, it may be unable to proceed at his current pay. Which extensions would be covered depends on the final rule and transition provisions.',
      ],
    ],
    [
      [
        '小李的公司准备给他办 PERM 绿卡，长期用工预算也是按现在的工资水平安排的。如果新标准把这个岗位的法定工资门槛提高了，公司就得重新算今后的人工成本。这不是一次性费用，而是持续性的工资支出，所以公司可能会重新考虑还值不值得继续办绿卡。',
      ],
      [
        'Li’s employer budgets for PERM sponsorship using the existing wage level. If a new applicable standard raises the wage requirement for that case, the employer must revisit the salary budget. That is a change to wage costs rather than a one-time legal or filing fee, and it could affect willingness to proceed.',
      ],
    ],
  ],
  'h1b-reform': [
    [
      [
        '小林看中了一家机构，目前这家机构符合 H-1B 免抽签条件，所以 HR 跟他说这份工作不用参加抽签。但这次改革要重新定义免抽签资格。如果最终标准把这机构排除在外，那它就没法再按原来的条件免抽签了，小林“不用抽签”的想法也得跟着变。具体哪些机构会受影响，得等正式规则出来才知道。',
      ],
      [
        'An organization currently qualifies for an H-1B cap exemption, so HR tells Lin the job does not require annual cap selection. The reform plans to revise that eligibility. If the final definition excludes the organization, it cannot continue relying on the old qualification. That could change Lin’s expectations, although the unpublished text does not yet identify the affected organizations.',
      ],
    ],
    [
      [
        '小陈是外包公司的员工，工资由外包公司发，但实际在客户那边上班。这次改革重点就是要管这种第三方派驻。如果最终规则要求更详细地说明实际工作地点、项目内容和工作安排，外包公司就得补材料，光拿本公司的雇佣合同可能不够用。不过具体要补什么，现在还没公布。',
        '小陈还是那个外包公司的员工，但上一个项目结束了，被派到另一家客户那里。发工资的雇主没变，但实际干活的地方和项目换了。如果新规要求第三方派驻要详细说明，那公司可能也得为新项目补材料。具体要怎么做还没公布，所以现在不能说这次换客户就一定得办什么新手续。',
      ],
      [
        'Chen is employed and paid by a staffing company but works at a client. The reform targets third-party placements, potentially bringing closer review of the location, project, and actual arrangement. If the final rule adds evidence requirements, the employer would need to supply them rather than rely only on its employment contract. The specific new documents have not been announced.',
        'Chen remains with the same staffing employer but moves to a new client after a project ends. Because the reform targets the placement arrangement rather than only the payroll employer, a final requirement for fuller project evidence could also matter for that assignment. This illustrates possible preparation needs, not a confirmed requirement for a new type of filing.',
      ],
    ],
    [
      [
        '小周拿到一家公司的 offer，但这公司以前违反过 H-1B 规定。这次改革要加强对这类雇主的审查，所以公司帮小周提交申请时，过去的违规记录可能会被重点盯着。就算小周本人工资和学历都够，也抵消不了雇主的黑历史。具体审查会严到什么程度，还得等规则正文。',
      ],
      [
        'Zhou’s prospective employer has previously violated H-1B program requirements. The reform explicitly proposes closer scrutiny of employers with that history, which could affect the petition filed for Zhou. The concern comes from employer compliance, even if Zhou’s salary and qualifications are suitable. The detailed review standards remain unpublished.',
      ],
    ],
  ],
  'grace-period': [
    [
      [
        '小陈持 H-1B 被裁了，本来打算用最长 60 天的宽限期来找新工作。但如果提案把这个宽限期取消了，他就没法再靠这条规定留在美国慢慢找。所以这里变的是失业后能合法待多久，跟公司愿不愿意面试他没关系。',
      ],
      [
        'After an H-1B layoff, Chen plans to look for another employer during an applicable discretionary grace period of up to 60 days. Removing that provision would mean Chen could no longer rely on it for the planned stay while job hunting. The change concerns the status buffer after losing employment, not access to interviews.',
      ],
    ],
    [
      [
        '小李被裁后找到了愿意接收的新公司，但公司准备 H-1B 申请需要时间。本来宽限期可以给他争取一些缓冲时间。但如果宽限期被取消，就算拿到了 offer，等申请材料准备好之前他也待不下去。所以新公司动作快不快，直接决定他能不能顺利转过去。',
        '小李被裁后想申请学校，从工作身份转成学生身份。但等学校录取通知、准备身份转换材料都需要时间。如果宽限期没了，他就不能靠着这条规定留在美国等手续办完。所以除了能不能被录取，他还得操心等待期间身份怎么解决。',
      ],
      [
        'Li finds a new employer after a layoff, but the company still needs time to prepare the H-1B petition. An applicable grace period could provide a buffer during that wait. If removed, an offer would not replace the lost basis for relying on that period, making filing readiness more consequential for the move.',
        'After a layoff, Li plans to apply to school and change from work to student status. Admission and immigration paperwork take time. Removing the employment-related grace period means Li cannot rely on it as the buffer for those preparations. Admission and permission to stay during the wait are separate issues.',
      ],
    ],
    [
      [
        '小王自己是工作身份，配偶和孩子是家属身份，一家人在美国生活。如果失业后的宽限期被取消，依赖这段缓冲时间的家庭就得更早做打算——要么转身份，要么准备离境。这会影响到孩子要不要继续在原学校上学、房子要不要续租，不光是小王一个人找工作时间表的问题。',
      ],
      [
        'Wang lives in the US with a spouse and children in dependent status. Removing the grace-period buffer after job loss could require the family to address status or departure plans sooner. That could affect schooling and lease renewal as well as Wang’s job search.',
      ],
    ],
  ],
  'ead-discretion': [
    [
      [
        '小张以前因刑事案件被逮捕过，但后来没被定罪。可是提案把“被捕”这类记录列为通常拒绝工作许可的理由，除非申请人能证明有非常重要的公共利益需要照顾。所以如果这条标准用在他的 OPT 申请上，没定罪不代表这段记录不会影响结果。真正的风险是工作许可可能被拒，而不只是审批变慢。',
      ],
      [
        'Zhang was arrested in a criminal case but not convicted. The proposal treats specified criminal history, including arrest, as a ground for generally denying these work permits absent significant countervailing public interests. If applied to OPT, the lack of a conviction would not by itself remove the approval risk; the issue is possible denial, not merely delay.',
      ],
    ],
    [[], []],
    [
      [
        '小陈之前已经拿到过工作许可，但他本人有提案里提到的刑事记录。如果新标准适用他下次续期，移民局会按续期时的规定重新决定批不批，不会因为上次批了这次就自动给。如果续期被拒，旧卡到期后他就没法再靠这类许可继续工作了。',
      ],
      [
        'Chen previously received a work permit but has criminal history covered by the proposal. If the new standard governs renewal, the agency would assess that application under the new standard rather than issue a card automatically because an earlier one was approved. A denial could prevent continued work through that category after the existing permission ends.',
      ],
    ],
  ],
  'h4-ead': [
    [
      [
        '小林现在靠 H-4 配偶身份申请了 EAD，并在这张卡下面工作。但这项改革计划要取消的就是 H-4 配偶申请工作许可的资格。如果最终真的取消了，她就没法再靠这条规定拿工作许可了，哪怕雇主还想用她。不过现有的 EAD 怎么处理、什么时候受影响，还得看后续规则，现在不能要求她马上停工。',
      ],
      [
        'Lin currently obtains an EAD through qualifying H-4 spouse eligibility. The plan targets removal of that eligibility category. If the final rule removes the basis Lin uses, employer support would not allow a new permit under that provision. Treatment and timing for existing EADs depend on the future rule; this does not call for stopping work now.',
      ],
    ],
    [
      [
        '小林和她丈夫按两个人的收入来安排房租、托儿费和日常开销。如果她因为 H-4 EAD 被取消而没法继续工作，家里就少了一份工资，但每月固定支出不会自动减少。所以家庭预算受影响，是因为配偶失去了工作许可资格，而不是这项政策直接动了她丈夫的 H-1B。',
      ],
      [
        'Lin and her husband budget for rent, childcare, and groceries using two incomes. If removal of H-4 EAD eligibility prevents Lin from continuing work, her income may disappear while fixed expenses remain. The budget effect comes from the spouse’s work-permit eligibility, not direct cancellation of the husband’s H-1B.',
      ],
    ],
    [[], []],
  ],
};

export function getPolicyExamples(id: PolicyId, language: Language) {
  return examples[id].map((pair) => pair[language === 'en' ? 1 : 0]);
}
