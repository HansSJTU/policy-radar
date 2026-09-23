import { POLICY_IDS, type PolicyId } from '../../app/policy-ids.ts';
import type { PolicyContent } from '../policy-types.ts';
import { cptGuidance } from './cpt-guidance.ts';
import { durationStatus } from './duration-status.ts';
import { eadDiscretion } from './ead-discretion.ts';
import { gracePeriod } from './grace-period.ts';
import { h1bFee } from './h1b-fee.ts';
import { h1bProgramIntegrity } from './h1b-program-integrity.ts';
import { h1bReform } from './h1b-reform.ts';
import { h1bWeightedSelection } from './h1b-weighted-selection.ts';
import { h4Ead } from './h4-ead.ts';
import { optFee } from './opt-fee.ts';
import { permModernization } from './perm-modernization.ts';
import { prevailingWage } from './prevailing-wage.ts';

const contentById: Record<PolicyId, PolicyContent> = {
  'opt-fee': optFee,
  'h1b-fee': h1bFee,
  'duration-status': durationStatus,
  'h1b-weighted-selection': h1bWeightedSelection,
  'cpt-guidance': cptGuidance,
  'prevailing-wage': prevailingWage,
  'h1b-reform': h1bReform,
  'grace-period': gracePeriod,
  'ead-discretion': eadDiscretion,
  'h4-ead': h4Ead,
  'perm-modernization': permModernization,
  'h1b-program-integrity': h1bProgramIntegrity,
};

// Ranked order: see app/policy-ids.ts.
export const policyContents: PolicyContent[] = POLICY_IDS.map(
  (id) => contentById[id],
);
