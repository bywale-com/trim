# Trim

Property tax over-assessment recovery for small/mid commercial and multifamily (Om Coda Register build).

## Methodology

Follows Om Coda Register pass order (canonical configs from Trove B2B — domain swapped):

```
Seed → World → SME → Function → Enrichment → Furnish → Wiring → CT Plant → Translation
```

- Seed/World: `docs/register/`
- SME: `docs/sme/`
- Register app: `apps/trim/`
- Dossier source: `docs/dossier/Trim_Build.pdf`

## Run Register

```bash
cd apps/trim
npm install
npm run dev
```

## Verify

```bash
cd apps/trim
npm run verify-ct-surfaces   # after CT plant
```
