import PolicyRadarClient from './policy-radar-client';
import { buildHomeView } from './home-view';
import { resolveRequestLanguage } from './language-server';
import { parsePathFilter } from './policy-paths';

export const dynamic = 'force-dynamic';

type PageProps = { searchParams?: Promise<{ lang?: string; path?: string }> };

export default async function Page({ searchParams }: PageProps) {
  const parameters = await searchParams;
  const language = await resolveRequestLanguage(parameters?.lang);
  return (
    <PolicyRadarClient
      view={buildHomeView(language)}
      language={language}
      initialPath={parsePathFilter(parameters?.path)}
    />
  );
}
