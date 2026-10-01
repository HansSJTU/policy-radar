// Personal radar must not treat launch seeds as real votes, even below ten votes.
export const selectGenuinePolicyImpactAggregates = `
  SELECT policy_id, ROUND(AVG(rating), 1) AS average, COUNT(*) AS rating_count
  FROM policy_impact_ratings
  GROUP BY policy_id
  ORDER BY policy_id ASC
`;
