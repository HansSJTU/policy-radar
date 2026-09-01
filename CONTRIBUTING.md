# Contributing

[English](CONTRIBUTING.md) · [简体中文](CONTRIBUTING.zh-CN.md)

Contributions to the U.S. Stay Path Policy Radar are welcome.

## Content updates

- Link every factual claim to a verifiable source. Prefer official documents, court records, and formal school notices.
- Forum links may supplement community discussion or identify leads, but they do not replace official evidence.
- Summaries must state the policy itself with a clear subject, verb, and object. Avoid subjective conclusions such as “this path is no longer viable.”
- Update both supported languages. English content must not contain untranslated Chinese text.
- Clearly distinguish final rules, proposed rules, regulatory agenda items, administrative guidance, litigation, and media reports.
- Do not commit personal data, visitor hashes, access logs, secrets, tokens, passwords, or `.env` contents.

## Development workflow

```bash
npm ci
npm test
npm run lint
npm run build
```

A Pull Request should explain:

1. which policy, school, or interface behavior changed;
2. the primary sources and relevant dates;
3. how the change was checked in both supported languages, on desktop, and on mobile;
4. which tests were run.

Do not modify production D1 data or add deployment credentials in a Pull Request. Database schema changes must update the runtime schema initialization and its tests.
