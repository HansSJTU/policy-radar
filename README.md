# U.S. Stay Path Policy Radar

[English](README.md) · [简体中文](README.zh-CN.md)

[![CI](https://github.com/HansSJTU/policy-radar/actions/workflows/ci.yml/badge.svg)](https://github.com/HansSJTU/policy-radar/actions/workflows/ci.yml)
[![Deploy](https://github.com/HansSJTU/policy-radar/actions/workflows/deploy.yml/badge.svg)](https://github.com/HansSJTU/policy-radar/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-1683B6.svg)](LICENSE)
[![Cloudflare Workers](https://img.shields.io/badge/Cloudflare-Workers-F38020?logo=cloudflare&logoColor=white)](https://workers.cloudflare.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Bilingual](https://img.shields.io/badge/languages-English%20%7C%20中文-0F8A77)](README.zh-CN.md)
[![Live site](https://img.shields.io/badge/site-live-2EA44F)](https://policy-radar.uspolicy.workers.dev/)

A bilingual tracker for U.S. policies affecting the `F-1 → CPT → OPT → H-1B` path. The home page ranks policies by their potential impact on the path and shows each policy's procedural stage, past and expected milestones, practical effects, and primary sources.

Live site: [policy-radar.uspolicy.workers.dev](https://policy-radar.uspolicy.workers.dev/). Public traffic analytics are available at [/stats](https://policy-radar.uspolicy.workers.dev/stats).

## Features

- Complete English and Chinese interfaces on desktop and mobile;
- Stage filters limited to the F-1, CPT, OPT, and H-1B policy assignments shown on the path map;
- An objective summary, process stage, dated timeline, practical effects, and sources for every policy;
- Keyboard-, pointer-, and touch-accessible explanations for abbreviations and specialized terms;
- Public `/stats` analytics backed by Cloudflare D1, including anonymous daily page views, deduplicated daily visitors, and country-level aggregates;
- Automatic deployment from the GitHub `main` branch to Cloudflare Workers through GitHub Actions.

## Data and sources

Policy status is based on primary materials from the Federal Register, DHS, USCIS, ICE/SEVP, OMB/OIRA, Reginfo, court records, and public school notices. Forum links supplement community discussion and help surface leads, but they do not replace official documents. This repository does not reproduce copyrighted external materials in full.

The impact ranking describes the structural effect a policy would have on the traditional stay path if implemented in its current direction. It does not indicate that the policy is already in effect or predict the likelihood of implementation.

## Local development

Node.js 22.13 or later is required.

```bash
npm ci
npm run dev
```

Run the verification suite:

```bash
npm test
npm run lint
npm run build
```

## Cloudflare Workers + D1

1. Create a D1 database named `policy-radar-db`.
2. Set its ID in `wrangler.jsonc` at `d1_databases[0].database_id`.
3. Authenticate with Wrangler, or provide `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`.
4. Apply the migrations and deploy:

```bash
npm run db:migrate
npm run deploy
```

GitHub Actions uses repository secrets with the same names. Pull requests run tests and build the project without deploying. A push to `main` applies the production D1 migrations and deploys the Worker.

## Traffic analytics and privacy

Each home-page load counts as one page view. A browser counts as one unique visitor per Eastern Time calendar day. The database stores date-scoped anonymous hashes and two-letter country codes supplied by Cloudflare. It does not store IP addresses, names, or email addresses, and the hashes cannot be used to link a visitor across days. Historical migrations contain only public daily aggregates and no historical visitor hashes or country data.

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) before contributing. Content changes must update both languages, cite verifiable sources, and keep summaries objective, explicit, and grammatically complete.

## Disclaimer

This project organizes public information and does not provide legal advice. Policies, litigation, and school practices can change at any time. Verify the latest primary documents before making personal decisions and consult a qualified professional when appropriate.

## License

[MIT](LICENSE)
