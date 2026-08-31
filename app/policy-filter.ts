type PolicyWithId = { id: string };
type RouteStage = { key: string; policies: Array<{ id: string }> };

export function filterPoliciesByRouteStage<T extends PolicyWithId>(
  policies: T[],
  routeStages: RouteStage[],
  selectedStage: string,
): T[] {
  if (selectedStage === 'all') return policies;

  const stage = routeStages.find((item) => item.key === selectedStage);
  if (!stage) return [];

  const policyIdsShownInStage = new Set(stage.policies.map((policy) => policy.id));
  return policies.filter((policy) => policyIdsShownInStage.has(policy.id));
}
