import { execFileSync } from 'node:child_process';
import { selectRetentionCohorts, selectReturningVisitors } from '../db/retention.ts';

const args = process.argv.slice(2);
if (args.some(arg => !['--remote', '--local'].includes(arg)) || args.length !== 1) {
  throw new Error('Usage: node --experimental-strip-types scripts/retention-report.mjs --local|--remote');
}
const parts = new Intl.DateTimeFormat('en-US', {
  timeZone: 'America/New_York', year: 'numeric', month: '2-digit', day: '2-digit',
}).formatToParts(new Date());
const date = Object.fromEntries(parts.map(p => [p.type, p.value]));
const today = `${date.year}-${date.month}-${date.day}`;
const command = [selectRetentionCohorts, selectReturningVisitors]
  .map(sql => sql.replaceAll('?1', `'${today}'`)).join(';\n');
execFileSync('npx', ['wrangler', 'd1', 'execute', 'policy-radar-db', args[0], '--command', command, '--json'], { stdio: 'inherit' });
