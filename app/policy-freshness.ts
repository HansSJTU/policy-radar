import type { PolicyId } from './community-impact-model';
import type { Language } from './language';

// Last site update, not a certification that every source is fully verified.
export const SITE_UPDATED_ON = '2026-09-14';

// Update each entry only when its sources are actually reviewed.
export const policyCheckedOn: Record<PolicyId, string> = {
  'opt-fee': '2026-09-14',
  'h1b-fee': '2026-09-14',
  'duration-status': '2026-09-14',
  'h1b-weighted-selection': '2026-09-14',
  'cpt-guidance': '2026-09-14',
  'prevailing-wage': '2026-09-14',
  'h1b-reform': '2026-09-14',
  'grace-period': '2026-09-14',
  'ead-discretion': '2026-09-14',
  'h4-ead': '2026-09-14',
};

const verificationNotes: Partial<Record<PolicyId, Record<Language, string>>> = {
  'cpt-guidance': {
    zh: '核查缺口：WSU 公告已通过校方搜索索引正文核对，但直接访问及后续执行状态仍待复核；论坛最新回复未完整读取；社区截图仍不等于校方公开确认。',
    en: 'Verification gap: the WSU notice was reviewed through indexed official-page text, but direct access and later implementation remain unverified; the latest forum replies were not fully reviewed. Community screenshots are not public university confirmation.',
  },
  'h1b-fee': {
    zh: '核查缺口：旧 10 万美元总统公告收费的上诉案卷最新状态尚未完整核实。',
    en: 'Verification gap: the latest appellate dockets for the older $100,000 proclamation fee have not been fully verified.',
  },
  'duration-status': {
    zh: '核查范围：已读取 9·14 第 50、51 号法院意见与禁令、案卷第 52 项状态会议通知；后续命令与上诉仍需跟踪。',
    en: 'Review scope: September 14 opinion 50, order 51 and docket entry 52 scheduling a status conference were reviewed; later orders and appeals still need monitoring.',
  },
};

export function getVerificationNote(id: PolicyId, language: Language): string {
  return verificationNotes[id]?.[language] ?? '';
}
