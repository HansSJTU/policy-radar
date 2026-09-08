import { communitySchools, verifiedSchools } from './cpt-schools';

export const homeCopy = {
  zh: {
    brand: '留美路径雷达', navLabel: '页面导航', policies: '政策', cptSchools: 'CPT 学校', updates: '更新记录', stats: '访问统计',
    switchLabel: '切换网站语言', chinese: '中', english: 'EN', heroTitle: '留美路径政策雷达', heroCount: `10 项动态 · ${verifiedSchools.length + communitySchools.length} 条学校／院系记录`,
    routeTitle: '你的留美路径', routeHint: '选择阶段，查看相关政策', morePolicies: (count: number) => `另有 ${count} 项政策`, showAll: '显示全部 ×', routeAria: 'F-1 到 H-1B 路径与政策分布',
    briefingAria: '最近 30 天动态与未来 30 天关键时间点', recent: '最近 30 天动态', upcoming: '未来 30 天关键时间点',
    ranking: '最难绕开的关卡', rankingHint: '颜色对应路径分类 · 按路径冲击分数从高到低排序', filterAria: '按签证路径筛选', all: '全部', items: '项',
    viewProcess: (name: string) => `查看${name}说明`, policySpecific: '本项政策：', complete: '已完成', currentStage: '当前阶段', upcomingStage: '尚未到达',
    impact: '路径冲击', processProgress: '规则制定进度', swipe: '左右滑动查看完整流程 →', currentProcess: '当前流程：', litigation: '诉讼进展',
    past: '过去', now: '现在', expected: '预计',
    schoolTitle: 'CPT：哪些学校停了？', schoolIntro: '大多停的是选修课／学分型 CPT，不是所有 CPT。', search: '搜索学校或政策', evidenceAria: 'CPT 学校证据级别',
    verified: '校方网页已核实', community: '邮件截图', paused: '暂停部分 CPT', tightened: '收紧', unchanged: '暂未改变', officialPage: '校方页面',
    noSchool: '没有匹配的学校。', evidencePrefix: '以下条目依据已下载到本站的校方邮件截图，未全部找到公开校页。Purdue ECE 与 Purdue ISS 分开标注，不能相互外推。', verifyPending: '待公开来源复核',
    viewEvidence: '查看邮件截图', viewReport: '邮件截图待补', evidenceTitle: '邮件截图', closeEvidence: '关闭邮件截图', noScreenshot: '尚未找到对应的邮件截图。',
    footer: '更新于 2026-09-07（美东）。预计日期可能因规则修改或诉讼变化而移动；个人决定请复核原始文件与专业意见。', seedDisclosure: '社区影响均分目前包含每项政策 10–20 个用于上线初始化的模拟样本；这些样本已在数据库中单独标记，待真实评分积累后将删除。', top: '回到顶部 ↑',
  },
  en: {
    brand: 'Stay Path Radar', navLabel: 'Page navigation', policies: 'Policies', cptSchools: 'CPT Schools', updates: 'Updates', stats: 'Traffic',
    switchLabel: 'Switch site language', chinese: '中', english: 'EN', heroTitle: 'U.S. Stay Path Policy Radar', heroCount: `10 policy developments · ${verifiedSchools.length + communitySchools.length} school/department records`,
    routeTitle: 'Your path in the U.S.', routeHint: 'Select a stage to explore its policies', morePolicies: (count: number) => `${count} more policies`, showAll: 'Show all ×', routeAria: 'Policies along the F-1 to H-1B path',
    briefingAria: 'Recent 30-day developments and key dates in the next 30 days', recent: 'Developments in the last 30 days', upcoming: 'Key dates in the next 30 days',
    ranking: 'Highest-impact barriers', rankingHint: 'Colors identify path categories · Sorted by path impact, highest first', filterAria: 'Filter by immigration path', all: 'All', items: 'items',
    viewProcess: (name: string) => `Explain ${name}`, policySpecific: 'This policy: ', complete: 'Completed', currentStage: 'Current stage', upcomingStage: 'Not reached',
    impact: 'Path impact', processProgress: 'Rulemaking progress', swipe: 'Swipe to see the full process →', currentProcess: 'Current process: ', litigation: 'Court proceedings',
    past: 'Past', now: 'Now', expected: 'Expected',
    schoolTitle: 'CPT: Which schools have paused approvals?', schoolIntro: 'Most pauses concern elective or course-credit CPT, not every form of CPT.', search: 'Search schools or policies', evidenceAria: 'CPT school evidence level',
    verified: 'Verified on university website', community: 'Email screenshots', paused: 'Some CPT paused', tightened: 'Tighter review', unchanged: 'No current change', officialPage: 'University page',
    noSchool: 'No matching school.', evidencePrefix: 'The following entries rely on university email screenshots stored on this site; not every item has a public university webpage. Purdue ECE and Purdue ISS are listed separately and should not be generalized across scopes.', verifyPending: 'Awaiting a public source',
    viewEvidence: 'View email screenshot', viewReport: 'Email screenshot pending', evidenceTitle: 'Email screenshots', closeEvidence: 'Close email screenshots', noScreenshot: 'No corresponding email screenshot has been located.',
    footer: 'Updated September 7, 2026 (Eastern Time). Estimated dates may move as rules change or litigation develops. Verify primary sources and obtain professional advice before making individual decisions.', seedDisclosure: 'Community-impact averages currently include 10–20 synthetic launch samples per policy. They are marked separately in the database and will be removed after genuine ratings accumulate.', top: 'Back to top ↑',
  },
};
