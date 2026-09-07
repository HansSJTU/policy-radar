# Policy Detail Pages Implementation Plan

**Goal:** Implement the approved ten-policy design and homepage entry points, with a local preview.

**Architecture:** Shared bilingual policy records feed both the homepage and server-rendered detail routes. Small client components handle scenario selection, sharing and navigation; facts, sources and initial analysis remain in the first HTML response.

**Tech Stack:** Existing React 19, vinext, TypeScript, Lucide and Cloudflare configuration. No new dependencies.

**Spec:** Approved ten-policy prototype and homepage-integration-design.md in this thread's visualization directory.

## Constraints

- Preserve all ten existing policy IDs, schools, bilingual navigation and community ratings.
- Retain the approved analysis-first presentation, conditional scenarios and dated sources.
- Work in the authorized current project; do not commit, push or deploy for this local preview.
- Keep existing snapshot facts unchanged; this is a product implementation, not a new policy audit.

## Tasks

- [x] Shared data and bilingual analysis. Extract the existing policy array to `app/policy-data.ts`; put approved Chinese and translated English editorial records in separate modules. Add behavior tests for selecting a policy/language, unknown IDs, related IDs and canonical/share URL construction.
- [x] Detail route. Add `app/policies/[policyId]/page.tsx`, scoped stylesheet, scenario/progress controls, per-policy metadata and a share image endpoint. Verify a direct request includes the policy body, metadata and sources; unknown IDs must return 404.
- [x] Homepage integration. Use real detail links in route-map entries, cards and briefings. Shorten policy cards while retaining community feedback, rankings and school UI. Preserve language and path filtering, and support legacy policy fragments.
- [x] Verification and local preview. Run affected tests, complete suite, TypeScript, lint and production build. Inspect desktop and mobile routes, scenarios, language changes, back navigation, sharing and metadata. Start a local server and open it in the app.

## Progress

Implemented all ten bilingual server-rendered detail routes, analysis and interactive scenarios, policy-specific metadata and generated share images, compact homepage entry cards, legacy fragment redirects, and return navigation preserving language and filtering.

Verified 20 localized detail responses with rendered content and metadata, unknown-policy 404, Chinese share PNG, desktop/mobile layouts, scenarios, sharing, language switches and homepage return positioning. Full suite: 138 tests passed. TypeScript, lint and production build passed. Local preview uses the existing server at http://localhost:3000. No deployment or commit performed.
