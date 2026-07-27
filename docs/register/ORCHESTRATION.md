# Register orchestration — fail-closed (Trim)

Copy of methodology gates. Update checkboxes as gates clear.

## Gates

- [x] `seed-complete` → World
- [x] `world-complete` → SME
- [x] `sme-pass1-locked` → SME Pass2
- [x] `sme-handoff-ready` → Function ∥ Wiring Function (sync on CROSS-CUTTING)
- [x] `function-complete` → Enrichment
- [x] `enrichment-complete` → Furnish
- [x] `furnish-written` → CT plant of Furnish
- [x] `wiring-synced` → deep CT on cross-cutting surfaces
- [x] `ct-verify-green` → Translation

## Verify

```bash
cd apps/trim
npm run verify-ct-surfaces
npm run verify-sme-implementations
npx tsx scripts/audit-sme-plant-gap.ts
```

## Anti-pattern check (instant fail)

- [x] SME is not ~1 consideration per seat (Trim ceremony)
- [x] HowUiRef has surfaceId join
- [x] Wiring exists (not a comment)
- [x] Product owns docs/register + docs/sme (not only omcoda-hq.vercel.app)
- [ ] No Translation before CT verify

## Reference

- Method: omcoda-hq `register-manual/` + skill `omcoda-register`
- Exemplar: trove-b2b (configs/types/joins — not domain)
- Anti-exemplar: prior trim ceremony without depth
- Seed source: `docs/dossier/Trim_Build.pdf`
