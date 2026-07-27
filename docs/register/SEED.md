# Trim — Seed (full context dump)

> Source of truth: `docs/dossier/Trim_Build.pdf` (Trim: Build dossier).  
> The agent derives structure; it does not invent the business.  
> Fail closed if any section is empty without a Known unknown.

**Company line:** Om Coda T-line (Tower, Tally, Trove, **Trim**).  
**Shape:** Fully **ALG** on acquisition — eligibility fact (over-assessment) is public and specific before contact. Application is agent-led desk shape for Owner; formal hearings may require Worker presence.  
**Agent law:** Presentation only (request / respond / route). Fulfillment = automation + state machines (CTO / Wiring). Licensed agent-of-record is a **compliance fact on Trim's side**, not a product persona.

---

## Context (market)

Property is taxed on assessed value. Assessors mass-appraise millions of parcels; mass appraisal produces errors that skew high often enough that the National Taxpayers Union Foundation estimates **up to 60% of U.S. properties are over-assessed** while **fewer than 5% of owners ever appeal**. State and local governments collect about **$630B/year** in property taxes (Statista / Tax Policy Center, 2021).

Every jurisdiction provides a formal appeal process with a fixed filing window. A successful appeal reduces the assessment, which reduces the tax bill by `(reduction × local tax rate)` every year until the next reassessment.

**Incumbents prove every layer:**
- **Ryan LLC** — ~$1.2B revenue, ~800 property-tax professionals, Fortune-1000 / complex industrial. Relationship-sold; economically uninterested in sub-$50K-fee accounts.
- **Ownwell** — automated residential end: $50M Series B (Feb 2026), contingency ~25% of savings, 86% success rate, ~$774 avg annual savings/customer, 1M+ appeals, ~$400M saved. Acquisition motion: ads + mail + self-serve signup funnel.
- **O'Connor / Owlue** — letter-mail + protest-year-after-year retention; Owlue letters already generate "is this a scam?" coverage.

**The open segment (Trim wedge):** small/mid commercial and multifamily — owners of **1–20 parcels**. Too small for Ryan's cost structure, too complex for a homeowner funnel (income-approach valuation, entity ownership, higher stakes). ACV per parcel in the **$2–15K** range at standard contingency. Direct payers (not mortgage-escrow homeowners) — felt win and fee timing cleaner.

**Trim's motion vs Ownwell:** compute over-assessment → **serve the account** (link opens their instance: parcel, evidence preview, estimated overpayment, verifiable against the county's own site) → one authorization → appeal runs → instance + agent carry the relationship; detection re-fires every year inside the standing account. Wedge is **CAC and activation**, not better appeals.

---

## Use case (one paragraph)

Detect over-assessment from public assessment rolls and comps, serve the owning entity into a Trim instance with parcel-specific evidence and estimated excess tax (analysis-not-promise framing), capture one authorization (Appointment of Agent / equivalent), prepare and run the appeal (informal → formal hearing → optional judicial), take a contingency cut of measured first-year savings when the reduction lands on the bill, and re-fire detection on each assessment cycle under the standing authorization — with Operator agency cockpit over all Owner instances and Worker hearing advocates picking up prepared case packets for in-person/remote board appearances.

---

## ALG reasoning

- **Acquisition agent-led because:** the eligibility fact (assessment vs evidence, estimated excess) exists in public record before contact — same physics as Trove B2B. No discovery call required to know the parcel is over-assessed.
- **Application agent-led because:** Owner desk is notice → consent → authorize → optional docs → status → invoice; Operator cockpit oversees detection, outreach, jurisdiction/licensure gates, collections, audit. Formal hearings introduce a **Worker** seat (bounded pick-up → argue → report).
- **Agent = presentation only** (request / respond / route). Fulfillment = automation + state machines (CTO / Wiring). Hearings are Worker units of work, not agent fulfillment.

---

## Mechanics (honest steps)

1. **Assessment cycle** — Most states reassess annually; others every 2–5 years. Notice-of-value opens a fixed appeal window (e.g. Texas generally May 15 / 30 days from notice; Missouri BOE: second Monday in July).
2. **Detection** — Compare assessed value against market evidence: sales comps, income approach (cap rate on NOI — best cases need owner data), equity/uniformity (Texas "equal and uniform": parcel vs comparable assessments — arguable entirely from public data).
3. **Serve (ALG)** — Instant-served Owner account: parcel ID, county name, assessed $X, evidence supports $Y, estimated excess ≈ $Z (subject to appeal outcome), county-site verification link, non-affiliation disclaimer. Compliant copy: **analysis, not promised result** (Texas TDLR ethics: shall not solicit by claiming a specific result).
4. **Consent** — Short "I see it / understand it / with it" before full engagement.
5. **Authorization** — One-time agent appointment (Texas Form 50-162 Appointment of Agent; other states' instruments). Entity-signature gate (who may sign for the owning entity).
6. **Appeal ladder** — Informal review with assessor → formal hearing before lay board (ARB / BOE / VAB) → judicial appeal or binding arbitration. Most volume resolves at informal/formal.
7. **Evidence** — Comps package, income statements (commercial), photos/condition, uniformity tables. Optional Documents upload to maximize win (rent roll / P&L) — zero info needed to know overpaying; optional docs to maximize.
8. **Hearing (Worker)** — Where formal hearings need human presence: Worker picks up prepared case packet, attends (in person or remote), argues, reports result. Pay-per-appearance. Passes Tally Worker test.
9. **Resolution** — Reduction granted (full/partial) or denied. Savings = reduction × millage. **Money never moves through Trim** — win is a smaller bill from the county.
10. **Invoice** — Contingency fee invoice against measured, documented savings (before/after assessment × rate — verifiable from public record). Card/ACH auth at signing; charge on documented reduction. Collections/dunning required (client realizes benefit before paying).
11. **Recurrence** — Authorization persists; detection re-fires annually; protest re-runs inside the instance with zero re-acquisition cost.

**Hard human gates:**
- Officer/authorized signer authorization (Appointment of Agent).
- Formal hearing advocacy in in-person jurisdictions (Worker).
- Licensed person-of-record per state on Trim's side (Texas PTC registration + sponsorship caps).

---

## Money

- **Detection cost to prospect:** free (public data).
- **Owner risk:** zero by industry convention — contingency-only; no upfront fee; no fee on loss.
- **Contingency / fee:** market 25–50% of first-year savings (Ownwell at 25%). Commercial ACV $2–15K/parcel.
- **Who holds funds:** never Trim. County reduces the bill. Trim invoices the cut.
- **When cut is taken:** after documented reduction; ACH/card on file preferred. Collection risk exists (mirror of Trove B2B) — NEEDS DESIGN.
- **Filing fees:** some jurisdictions charge (e.g. FL VAB ~$15–$20/folio). Decide absorb vs pass-through — absorb preserves pure zero-risk claim at trivial cost.
- **Residential wrinkle:** escrowed taxes dilute felt win — another reason commercial/multifamily wedge is first.

---

## Gates

1. **Detection needs:** public assessment rolls + comps / uniformity data. Nothing from owner for detection fire. Income-approach maximization may need rent roll / P&L later.
2. **Activation needs:** owning-entity identity + one contact channel; parcel-specific served instance.
3. **Authorization needs:** valid Appointment of Agent (or state equivalent) signed by person with standing for the entity; jurisdiction licensure standing for Trim's agent-of-record.
4. **Jurisdiction / licensure gate:** Texas — individual PTC registration (exam + 40 classroom hours), senior-consultant sponsorship, max 10 consultants per senior. Rollout sequence gates on licensed capacity. Other states: open → attorney-preferred/required at judicial levels.
5. **Solicitation compliance gate:** Texas TDLR ethics — no claiming specific result in solicitation/advertising. Constrains ALG notice copy. Equivalent rules may exist elsewhere — NEEDS VERIFICATION per state.
6. **Hearing capacity gate:** Worker availability for formal in-person jurisdictions during appeal windows.

---

## Trust / zero-risk

First touch must prove (four-element trust kit, same class as Trove B2B):
1. Named county + parcel ID
2. County-site verification link (owner can check the county's own site)
3. Explicit non-affiliation disclaimer (TX-style: shall not state or imply registrant represents a person/firm they do not)
4. No-upfront-fee / contingency-only statement

Consent shape: **"I see it / understand it / with it"** before deep engagement.  
Notice framing: assessed at $X; evidence supports $Y; estimated excess ≈ $Z, **subject to appeal outcome** — analysis, not promise.

---

## Launch discipline

- **Deepest-value counties first** — Texas metros are the canonical wedge: annual cycle, equal-and-uniform doctrine, consultant licensure regime, no state income tax so property tax is the fight that matters. Not breadth across 3,000+ counties first.
- Per-county data plumbing (rolls, CAMA, comps, e-file, calendars) is the real moat-or-grave.

---

## Known unknowns (become SME questions — test in this order)

1. Detection confidence high enough to state a number in first touch — and survive owner check + solicitation law. Compliant copy shape per state. **#1 SME question.**
2. One-time authorization enables filing and representation (standardized in big markets; entity-signer rules).
3. Representation licensed per state at person level — rollout order gates on this.
4. Hearings need human presence share by jurisdiction (sets Worker layer size vs informal resolution share).
5. Income-approach commercial appeals need owner data — softens "zero information" for max win.
6. Per-county data acquisition cost and formats.
7. Fee caps vs consultant-conduct law as regulatory center of gravity (TX SB 1870 / HB 2591 class).
8. Collections design when client realizes benefit before paying fee.
9. Absorb vs pass-through filing fees.
10. Remote/written hearing availability by jurisdiction.

---

## SME roster (from dossier — starting roster, not closed)

1. Licensed property tax consultant (practitioner)
2. Valuation / mass-appraisal specialist (IAAO-literate)
3. Representation-rules & licensure specialist
4. Solicitation & advertising compliance specialist
5. Appraisal-district / board-perspective specialist
6. Judicial-appeal / arbitration attorney
7. County-data specialist
8. Mortgage-servicing / escrow specialist
9. Tax / accounting treatment specialist
10. Trust / anti-scam perception specialist

---

## Value-chain seats (preview — World owns the table)

- **Owner** — one account per owning entity; portfolio of parcels inside it. Delegates/CFO/counsel = features, not personas.
- **Operator** — agency cockpit over all Owner instances; detection, outreach, jurisdiction gates, collections, audit.
- **Worker** — per-hearing local advocates (genuine persona: without hearing seat, value creation stops at formal level in in-person jurisdictions). Available → pick up → active → done, pay-per-unit (Tally Worker mechanics reuse).
- **Licensed agent-of-record** — compliance fact tracked on Trim's side; not a full product persona.
- **Agent** — presentation feature scoped per instance; not a seat.

---

## Instruction

Take this through the Register process start to finish:

```
Seed → World → SME → Function → Enrichment → Furnish → Wiring → CT Plant → Translation
```

Do not invent business facts outside this seed and SME-sourced research. Copy Register configurations (types, joins, interaction classes, pass order) from canonical Trove B2B — swap seed/domain, not the wiring. Hit quantity floors (Quantities chapter). Fail closed on Trim-shaped ceremony.
