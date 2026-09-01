import PolicyRadarClient from './policy-radar-client';
import { resolveRequestLanguage } from './language-server';

export const dynamic = 'force-dynamic';

type PageProps = { searchParams?: Promise<{ lang?: string }> };

export default async function Page({ searchParams }: PageProps) {
  const parameters = await searchParams;
  const initialLanguage = await resolveRequestLanguage(parameters?.lang);

  return <PolicyRadarClient initialLanguage={initialLanguage} />;
}
