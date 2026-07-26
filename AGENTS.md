# AGENTS.md

Trim — property-tax over-assessment recovery, built as an Om Coda **Register** workspace.

## Project shape

- Vite + React + TypeScript single-page app. No backend yet (Register/CT-Plant stage — "what should exist",
  not "what executes at runtime").
- Register artifacts are typed data under `src/register/**` (World, SME, Personas/Function, Enrichment,
  Furnish, CT Plant); pages under `src/pages/**` render each pass.
- The CT Plant (`src/pages/CtPlantPage.tsx`) is a functional click-through driven by a pure reducer in
  `src/register/ct/model.ts`. Keep chain logic in the reducer (it is unit-tested); pages stay thin.
- `src/register/world/trimWorld.ts` is the machine twin of the admission matrix — persona views MUST call
  `admits(persona, state)` rather than hand-rolling visibility, or you reintroduce world bugs.

## Methodology reference (do not re-derive from scratch)

- The build methodology lives in `bywale-com/omcoda-hq` (public) and at https://omcoda-hq.vercel.app/overview.
  The Register-gray token values in `src/styles/register-gray.css` are copied from that repo's
  `design-systems/omcoda-prototype-ds-i/tokens.json` (`registerLoFiDefaults`). Register/CT stage is **gray
  only** — do not introduce the `#8B5CF6` brand accent until the Translation (Plant) stage.

## Commands

Standard scripts in `package.json`: `npm run dev`, `npm run lint`, `npm test`, `npm run build`. Node 20+ (CI/dev
used Node 22).

## Cursor Cloud specific instructions

- Dev server: `npm run dev` serves on `http://localhost:5173` (Vite `server.host` is enabled so it binds
  0.0.0.0 for in-VM browser testing). Routing uses `HashRouter`, so deep links look like `/#/ct`, `/#/world`.
- The app has no environment variables, database, or external services — `npm install` then `npm run dev` is
  the entire setup. There is nothing to seed or migrate.
- "Hello world" / smoke check that exercises core functionality: open `/#/ct`, and on the Operator seat walk a
  parcel Serve → (Owner seat) Authorize → (Operator) File appeal → Escalate to hearing → (Worker seat) Pick
  up → Argue → Report granted → (Operator) Invoice → Collect. The audit trail and money facts update live.
