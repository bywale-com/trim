# SME Implementation click-path — style lock (rc-01)

Write `implementationProblem`, `implementation`, and optional `implementationAdds` on every SmeItem.
Do **not** plant click-through / CT UI. Writing only.

## Fields

- **implementationProblem** — context only: what’s wrong / why / who absorbs what. No click path here.
- **implementation** — only what this consideration **adds**. Salient. Relative. Use **you can now**.
- **implementationAdds** — new enum/value tags (e.g. `digital`, `mail-original`) for red highlight. Not module/modal/block names.

## Click-path rules

1. Start from the **most relative** existing container that **contains** the new thing.
   - New control on Jurisdiction table → `On Jurisdiction table, you can now…`
   - New block inside Authorize door → `On Authorize door, you can now open X…`
   - Do **not** write `Starting from Settings, you open Jurisdiction table…` when the add is on that modal.
2. If the new thing is **not** inside any already-named surface, start from the nearest real parent (module/modal) and introduce the new name with **you can now**.
3. No persona headers (“Agency Owner — …”). No restating unchanged digital paths. No explanatory “that value is what every Case…” — that belongs in Problem.
4. Reference existing UI with **exact** labels (so highlights match). Invent new Module / Modal / Block / Submodal names when nothing fits; use Title Case labels consistently.
5. Work **every** item — ignore `status` partial/deferred/wiring. Do not skip.

## Canonical existing labels

**Business:** Cases, Case, Notice — proof facts, Notice — trust strip, Consent ticks, Authorize door, Claim form packet, Upload packet, Status facts, Paid fact, Invoice fact, Decline door

**Agency:** Clients, Client, Work, Exception queue, Resubmit, Settings, Jurisdiction table, Filing method, Audit log

## Example (rc-01)

```
implementationProblem:
  Authorize door + Upload packet currently read as fully digital. Some states need wet ink / mail / notary. Fix by making Filing method on Jurisdiction table drive what Authorize door does — officer still finishes one Case door; Ops owns physical mail.

implementation:
  On Jurisdiction table, you can now set Filing method to digital, mail-original, or notarized-original.
  On Authorize door, when Filing method is not digital, you can now open Claim form packet. On Claim form packet you download the form (and notary instructions when notarized-original). On Case, Upload packet accepts the signed scan.

implementationAdds: ["digital", "mail-original", "notarized-original"]
```

## File edit rules

- Edit the seat’s `*Considerations.ts` in place.
- Keep existing `id`, `consideration`, `thesisGap`, `solution`, `references`, `implementsSurfaceIds`, `status`.
- Add the three implementation fields after `references` (or after solution if no refs).
- Skip items that already have `implementation` (e.g. rc-01).
- TypeScript string arrays `.join("\\n")` for multi-line implementations is fine.
