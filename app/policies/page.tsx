import { redirect } from 'next/navigation';
import { resolveRequestLanguage } from '../language-server';

export default async function PoliciesPage({
  searchParams,
}: {
  searchParams?: Promise<{ lang?: string }>;
}) {
  const search = await searchParams;
  const language = await resolveRequestLanguage(search?.lang);
  redirect(`/?lang=${language}#ranking`);
}
