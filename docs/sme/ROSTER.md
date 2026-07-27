# Trim — SME Roster

**Room law:** PM asks what the user needs. CTO asks what the system needs. SME asks what the domain already requires. Every SME assertion traces to something external (statute, agency page, industry-org document, court rule) — or is marked `NEEDS VERIFICATION`.

**Pass format:**
1. Same context (SEED + WORLD).
2. **Pass 1** — sourced questions only (up to 50/seat). No solutions interleaved.
3. **Pass 2** — `<mechanism> so that <purpose>` answers to locked Pass 1 questions.
4. Cross-cutting findings → `CROSS-CUTTING.md` before deep Function/Wiring.
5. Handoff → PM Register + CTO Wiring.

**Style lock:** `docs/sme/_STYLE.md` — Id prefixes `trim-`; considerations ~20–50/seat (fail if ~1).

---

## Roster (10)

| # | Seat id | Domain lane | Why (failure mode if absent) | Target count |
|---|---------|-------------|------------------------------|-------------:|
| 1 | `licensed-ptc-practitioner` | What wins at informal vs ARB; evidence norms; county temperament | Without practice truth, detection→hearing packet is fiction | 25–30 |
| 2 | `valuation-mass-appraisal` | Sales/income/cost approaches; ratios; uniformity; when "$X over" is defensible | Without this, ALG notice numbers are indefensible | 25–30 |
| 3 | `representation-licensure` | Who may represent by level; TX PTC + sponsorship caps; entity-signature; rollout gates | Illegal filings / blocked rollout | 25–30 |
| 4 | `solicitation-advertising-compliance` | TDLR ethics ("no specific result"); consumer-protection; channel rules | ALG notice itself may be illegal as phrased | 25–30 |
| 5 | `appraisal-district-board` | Evidence formats boards accept; scheduling; remote/written share; what persuades lay boards | Worker layer sized wrong; packets rejected | 25–30 |
| 6 | `judicial-arbitration-attorney` | Binding arbitration (TX); tax court; escalation worth-it; attorney-only boundaries | Wrong escalation / attorney-only state collisions | 22–28 |
| 7 | `county-data` | Roll formats; CAMA; comps; e-file; FOIA fallbacks; per-county cost | Moat-or-grave on automation margin | 25–30 |
| 8 | `mortgage-escrow` | Escrow adjustment timing; multifamily lender-held escrows | Fee timing / felt-win wrong when residential or escrowed MF enters | 20–26 |
| 9 | `tax-accounting-treatment` | Expense reduction vs income; 1099 on Trim fee; multi-year savings booking | Consent/disclosure gaps; Trim's own tax ops | 20–26 |
| 10 | `trust-anti-scam-perception` | Owlue-class scam perception; four-element trust kit; non-affiliation | Activation dies on "is this a scam?" | 24–28 |
| | **Total floor** | | | **~240** |

Machine twin target: `apps/trim/src/app/register/trace/smeRegistry.ts` + `considerations/*.ts`.

## Watchlist (not seats yet)

- Collections/AR process (invoice-after-reduction collection risk — may become 11th seat if volume material).
- Bonding / insurance requirements for consultants.
- Remote-notary / e-sign acceptance for Appointment of Agent by county.

## Room rules

- Pass 1 before Pass 2 — never interleave
- Every question needs external reference or `NEEDS VERIFICATION`
- SME does not design product UI in Pass 1
- Pass 2 solution = `<mechanism> so that <purpose>` — PM/CTO translate
- Cross-cutting → CROSS-CUTTING.md before deep Function/Wiring
- Texas-metro launch lens first; note other-state variance explicitly
