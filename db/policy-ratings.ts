import {
  createPolicyImpactRatingsTable,
  createPolicyImpactSeedRatingsTable,
  selectPolicyImpactAggregates,
  upsertPolicyImpactRating,
} from './schema';

export type PolicyImpactAggregate = {
  average: number;
  count: number;
};

export type PolicyImpactAggregateMap = Record<string, PolicyImpactAggregate>;

type PolicyImpactAggregateRow = {
  policy_id: string;
  average: number;
  rating_count: number;
};

const schemaPromises = new WeakMap<object, Promise<void>>();

async function ensurePolicyImpactRatingsSchema(db: D1Database) {
  let schemaPromise = schemaPromises.get(db);
  if (!schemaPromise) {
    schemaPromise = db
      .batch([
        db.prepare(createPolicyImpactRatingsTable),
        db.prepare(createPolicyImpactSeedRatingsTable),
      ])
      .then(() => undefined)
      .catch((error) => {
        schemaPromises.delete(db);
        throw error;
      });
    schemaPromises.set(db, schemaPromise);
  }

  await schemaPromise;
}

export async function getPolicyImpactAggregates(
  db: D1Database,
): Promise<PolicyImpactAggregateMap> {
  await ensurePolicyImpactRatingsSchema(db);
  const result = await db
    .prepare(selectPolicyImpactAggregates)
    .all<PolicyImpactAggregateRow>();

  return Object.fromEntries(
    result.results.map((row) => [
      row.policy_id,
      {
        average: Number(row.average),
        count: Number(row.rating_count),
      },
    ]),
  );
}

export async function savePolicyImpactRating(
  db: D1Database,
  policyId: string,
  visitorId: string,
  rating: number,
) {
  await ensurePolicyImpactRatingsSchema(db);
  await db
    .prepare(upsertPolicyImpactRating)
    .bind(policyId, visitorId, rating)
    .run();

  const aggregate = (await getPolicyImpactAggregates(db))[policyId];
  if (!aggregate) throw new Error('Rating aggregate was not created');
  return aggregate;
}
