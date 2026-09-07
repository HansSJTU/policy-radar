import PolicyRadarClient from './policy-radar-client';
import { resolveRequestLanguage } from './language-server';

export const dynamic = 'force-dynamic';

type PageProps = { searchParams?: Promise<{ lang?: string; path?: string }> };

export default async function Page({ searchParams }: PageProps) {
  const parameters = await searchParams;
  const initialLanguage = await resolveRequestLanguage(parameters?.lang);

  const initialPath = ['F-1', 'CPT', 'OPT', 'H-1B'].includes(parameters?.path ?? '') ? parameters!.path! : 'all';
  return <PolicyRadarClient initialLanguage={initialLanguage} initialPath={initialPath} />;
}
