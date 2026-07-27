# Trim Register + CT

Register workspace and click-through for **Trim** (property tax over-assessment recovery).

Canonical Register configs (types, joins, interaction classes) copied from Trove B2B; domain swapped per Om Coda methodology.

## Docs (repo root)

Product docs live at `/docs` (not inside this app folder):

- `docs/register/SEED.md`, `WORLD.md`, …
- `docs/sme/` — roster, pass1, pass2, handoff, cross-cutting
- `docs/wiring/WIRING.md`

## Dev

```bash
npm install
npm run dev
```

## Verify

```bash
npx tsx scripts/verify-ct-surfaces.ts
npx tsx scripts/verify-sme-implementations.ts
npx tsx scripts/audit-sme-plant-gap.ts
```
