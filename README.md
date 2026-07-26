# Trim

**Property-tax over-assessment recovery.** The T-line: Tower · Tally · Trove · **Trim**.

Trim detects property over-assessment from public record *before any relationship exists*, serves the
account with a verifiable analysis (analysis, not a promised result), takes one authorization, runs the
appeal up the ladder (informal review → formal board hearing → judicial/arbitration), and invoices a cut of
the **measured** savings — every cycle, inside a standing account. Money never moves through Trim; the
"recovery" is a smaller county bill.

This repo is a **Register workspace** built with the [Om Coda / Register methodology](https://omcoda-hq.vercel.app/overview)
(`bywale-com/omcoda-hq`). It runs the Register passes for Trim and ships a functional click-through (CT
Plant) of the core value chain in Register-gray lo-fi.

## Register passes in this app

| # | Pass | Where |
|---|------|-------|
| 1 | **World** — personas, admission matrix (V/—/T), primary objects | `src/register/world/` |
| 2 | **SME** — 10 domain lanes with sourced considerations | `src/register/sme/` |
| 3 | **Personas · Function** — molecular outcomes → How trees w/ HowUiRef | `src/register/personas/` |
| 4 | **Enrichment** — Can'ts per persona (focus holons) | `src/register/enrichment/` |
| 5 | **Furnish** — non-invasive supporting abilities | `src/register/enrichment/` |
| 6 | **CT Plant** — functional click-through of the core chain | `src/register/ct/`, `src/pages/CtPlantPage.tsx` |

The World has a machine twin — `src/register/world/trimWorld.ts` exposes `admits(persona, state)` — and the
CT Plant persona switch honours it (a seat only sees parcels the admission matrix admits). Register-gray
tokens are the authoritative `registerLoFiDefaults` from `omcoda-prototype-ds-i` (gray only, no brand color —
brand color is a Plant-stage concern).

## Develop

```bash
npm install
npm run dev        # Vite dev server → http://localhost:5173
npm run lint       # ESLint
npm test           # Vitest (CT-plant state machine + world admission)
npm run build      # tsc -b && vite build
```

Stack: Vite 6 · React 18 · TypeScript · React Router · Vitest.
