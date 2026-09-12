import type { PolicyId } from './community-impact-model';
import type { Language } from './language';

// Last site update, not a certification that every source is fully verified.
export const SITE_UPDATED_ON = '2026-09-12';

// Update each entry only when its sources are actually reviewed.
export const policyCheckedOn: Record<PolicyId, string> = {
  'opt-fee': '2026-09-12',
  'h1b-fee': '2026-09-12',
  'duration-status': '2026-09-12',
  'h1b-weighted-selection': '2026-09-12',
  'cpt-guidance': '2026-09-12',
  'prevailing-wage': '2026-09-12',
  'h1b-reform': '2026-09-12',
  'grace-period': '2026-09-12',
  'ead-discretion': '2026-09-12',
  'h4-ead': '2026-09-12',
};

const verificationNotes: Partial<Record<PolicyId, Record<Language, string>>> = {
  'cpt-guidance': {
    zh: '核查缺口：WSU 新通知页面及论坛最新回复无法读取，相关新线索尚未核实；社区截图仍不等于校方公开确认。',
    en: 'Verification gap: the WSU notice page and latest forum replies could not be read, so those new leads remain unverified. Community screenshots are not public university confirmation.',
  },
  'h1b-fee': {
    zh: '核查缺口：旧 10 万美元总统公告收费的上诉案卷最新状态尚未完整核实。',
    en: 'Verification gap: the latest appellate dockets for the older $100,000 proclamation fee have not been fully verified.',
  },
  'duration-status': {
    zh: '核查范围：公开案卷镜像最新记录至 9 月 8 日，仍需留意法院后续命令。',
    en: 'Review scope: the latest entry in the public docket mirror is dated September 8; later court orders still need monitoring.',
  },
};

export function getVerificationNote(id: PolicyId, language: Language): string {
  return verificationNotes[id]?.[language] ?? '';
}
