# Blueprint — Rearchitecture notes

Composition-first remake of the DS-I gray lo-fi click-through (`src/app/ct/*`)
using `@blueprintjs/core` primitives, isolated under `/prototype-blueprint`.
Not a reskin — each CT leaf was re-derived from the Blueprint component
library rather than hand-styled to look like Blueprint.

## Isolation

- Fully separate document: `prototype-blueprint.html` →
  `src/main-blueprint.tsx` → `BlueprintAppRouter`.
- `@blueprintjs/core` + `@blueprintjs/icons` CSS is imported once, at the
  router root (`BlueprintAppRouter.tsx`), never from the main SPA.
- Product data is **duplicated**, not imported, into
  `src/app/plant-blueprint/data/seed.ts` — same facts as
  `src/app/ct/data/*`, re-authored so this document has zero import edges
  into `src/app/ct/`.
- Local interactive state (consent ticks, authorize, upload, resubmit) is
  re-implemented per page here, independently of the CT hooks
  (`useBusinessCases`, `useOpsCases`) — same reasoning as the data
  duplication.

## Leaf → Blueprint component mapping

| CT leaf (gray lo-fi) | Blueprint composition |
|---|---|
| `CtDeskShell` sidebar + canvas | `Navbar` + `SegmentedControl` persona switch (`BlueprintShell`), content below in a plain flow — no sidebar chrome duplicated, since Blueprint's `SegmentedControl` already reads as primary nav |
| Case list (`CtRow` rows) | `CardList` of interactive `Card` + `EntityTitle` (icon/title/subtitle/tags slot) |
| `CtFactGrid` / `CtFact` | Inline flex row of small label/value pairs (no bespoke Blueprint "fact" primitive exists; kept minimal rather than inventing one) |
| Notice trust strip | `Callout` (`intent="primary"`, `icon="shield"`) |
| `CtCheckbox` (consent ticks) | `CheckboxCard` (`control-card` family) — gets card selection styling for free when checked |
| `CtStatusTag` | `Tag` with `intent` mapped from case status (`data/statusIntent.ts`) |
| Upload panel rows | `CardList` of `Card`, `Tag` for "Uploaded", `Button` for the pending action |
| Kicked_back banner | `Callout` (`intent="warning"`, `icon="warning-sign"`) |
| Jurisdiction table | `HTMLTable` (`striped`) instead of a hand-rolled `<table>` |
| Ops empty exception queue | `NonIdealState` (`icon="tick-circle"`) instead of a bespoke empty component |
| Ops jurisdiction/exceptions switch | `Tabs`/`Tab` instead of nested routes — both sections stay in one Ops document, matching how Blueprint expects local view-switching to be expressed |
| Decline invite-before-form | `Button` (minimal, quiet) that reveals a confirm/cancel `Button` pair inline — same invite-before-form discipline as CT, expressed with Blueprint's own minimal button styling instead of custom quiet-button CSS |

## Structural decisions worth naming

- **Persona switch lives in the Navbar**, not as a separate hub-only
  control, so Business ↔ Ops ↔ Hub is always one click away from any
  screen (task requirement: "Persona ←→").
- **Ops uses `Tabs` instead of nested routes.** CT models Jurisdiction and
  Exceptions as sibling routes (`/ct/ops/jurisdiction`, `/ct/ops/exceptions`)
  because the gray lo-fi shell is route-driven. Blueprint's `Tabs` primitive
  is the idiomatic way to express the same two-section switch without
  inventing new routes purely to satisfy the framework — the underlying
  world model (Jurisdiction gate, Exceptions) is unchanged.
- **Case selection stays in the URL** (`?case=<id>`) on the Business page
  in both CT and Blueprint, so either document can be deep-linked to a
  specific seeded case for screenshotting or review.
