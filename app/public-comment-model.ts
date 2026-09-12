export const stanceIds = ['oppose', 'support', 'mixed', 'unclear'] as const;
export type CommentStance = (typeof stanceIds)[number];
export type ClassifiedComment = {
  id: string;
  stance: CommentStance;
  themes: string[];
};

/** One record per posted comment; themes may overlap, stances may not. */
export function summarizeComments(comments: readonly ClassifiedComment[]) {
  const ids = new Set<string>();
  const stances = new Map<CommentStance, number>(
    stanceIds.map((id) => [id, 0]),
  );
  const themes = new Map<string, number>();
  for (const comment of comments) {
    if (ids.has(comment.id))
      throw new Error(`Duplicate comment: ${comment.id}`);
    if (!stances.has(comment.stance))
      throw new Error(`Invalid stance: ${comment.stance}`);
    ids.add(comment.id);
    stances.set(comment.stance, stances.get(comment.stance)! + 1);
    for (const theme of new Set(comment.themes))
      themes.set(theme, (themes.get(theme) ?? 0) + 1);
  }
  const total = comments.length;
  const row = ([id, count]: [string, number]) => ({
    id,
    count,
    percent: total ? (count / total) * 100 : 0,
  });
  return {
    total,
    stances: [...stances].map(row),
    themes: [...themes]
      .map(row)
      .sort((a, b) => b.count - a.count || a.id.localeCompare(b.id)),
  };
}
