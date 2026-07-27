# Trim V1 — World model

**Shape:** Fully ALG on acquisition (eligibility fact public before contact). Application agent-led for Owner desk; formal hearings may require Worker. Agent = presentation feature (request / route / respond), not the product and not fulfillment.

**Persona emergence law:** A Register persona exists only if omitting them leaves a **value-chain gap** (Tally Worker test). Org-chart roles (CFO, counsel, controller, property manager) are **features / delegation inside a seat**, not new seats. Licensed agent-of-record is a **compliance fact** on Trim's side — tracked, not a full product persona.

**World sentence:** Trim is always-on detection over public assessment rolls for small/mid commercial and multifamily owners (1–20 parcels), instant serve into an Owner account under an Operator's book with parcel-specific analysis (assessed $X / evidence $Y / estimated excess ≈ $Z, subject to appeal outcome), one-time authorization at a jurisdiction-aware contingency cut, automation-prepared appeal with Worker hearing advocacy where boards require human presence, reduction landing as a smaller county bill, Trim invoicing its cut of measured savings — detection re-firing each cycle inside the standing account — with an instance agent on the Owner seat and an overarching agent on the Operator seat, both mouths over existing UI verbs.

---

## Value-chain seats

### Owner (one account per owning entity)

| | |
|--|--|
| **Why exist** | Without them, nobody with standing authorizes representation or pays the contingency invoice. The tax bill is theirs. |
| **Served how** | Instant-served account (ALG) or Operator-onboarded (OLG); notice+proof; consent; authorize; optional docs; status; reduction/invoice. |
| **Purpose they serve** | Operator / automation / Worker can protest under authority and close the fee split. |
| **Primary object** | Their Protest Cases (parcels / tax years) — not other entities. |
| **Admit iff** | Account served / invited into the operator book. |
| **Never see** | Other clients' parcels; operator licensure/sponsorship internals; Worker marketplace payouts; fictitious-protest tooling. |
| **Natural needs** | Notice, trust proof, consent ticks, authorize, upload (rent roll/P&L optional), status, decline, reduction/invoice, portfolio of parcels. |
| **Not a persona** | CFO / counsel / property manager / delegate — same account, optional admin/delegation features. |

### Operator (agency cockpit)

| | |
|--|--|
| **Why exist** | Without them, there is no agency book, no legal right to operate per jurisdiction (licensure capacity), no place for exceptions when automation sticks, no collections/dunning when owner realizes benefit before paying. |
| **Served how** | Portfolio of Owner instances; jurisdiction/licensure registry; appeal-window calendar; exception queue; Worker dispatch oversight; audit under POA; collections. |
| **Purpose they serve** | Owners can be served and recover without illegal solicitation and without silent stuck protests. |
| **Primary object** | Client instances + cases needing operator action. |
| **Admit iff** | Operator role. |
| **Never see** | Acting as the Owner signer inside the client's private consent/sign (they don't replace the authorized signer). |
| **Natural needs** | Portfolio, jurisdiction on/off + capacity (TX 10-per-senior), exceptions, audit, OLG onboard, Worker roster/dispatch, collections, county data health. |

### Worker (hearing advocate — genuine persona)

| | |
|--|--|
| **Why exist** | Formal appeals are argued before lay boards; in many jurisdictions human presence (in person or remote) is required. **Without this seat, value creation stops at the formal level in in-person jurisdictions** — passes the Tally Worker test. First genuine Worker seat since Tally; Tally Worker mechanics (available → pick up → active → done, pay-per-unit) reuse, not reinvent. |
| **Served how** | Marketplace/queue of prepared case packets for hearings in their locality/availability; pick up → attend/argue → report result → paid per appearance. |
| **Purpose they serve** | Formal-level protest completes; Owner gets board outcome; Operator closes the hearing unit of work. |
| **Primary object** | Hearing assignments (bounded packets), not the full Owner relationship. |
| **Admit iff** | Worker role + cleared for jurisdiction/board type. |
| **Never see** | Owner billing/invoice internals; other Workers' payouts; Operator licensure sponsorship math; unassigned Owner financials beyond packet scope. |
| **Natural needs** | Available queue, packet preview, accept/decline assignment, hearing logistics, argue checklist, outcome report, pay status. |
| **Not a persona** | Licensed agent-of-record on Trim's filings — that is a compliance fact (may be the same human in some ops models, but the Register seat is Worker-for-hearing, not license-holder-as-persona). |

### Licensed agent-of-record (compliance fact, not a seat)

Per-state human whose license the filings run under (e.g. Texas TDLR-registered Property Tax Consultant). Tracked in Operator jurisdiction registry (capacity, sponsorship, renewal). Name on filings. Gates rollout. **Not** a switcher persona — omitting a dedicated UI seat does not leave a value-chain gap if Operator tracks the fact and filings carry the name.

### Agent (feature, not a seat)

Instance agent ⊆ Owner UI verbs. Operator agent ⊆ Operator UI verbs. Worker may have a thin presentation agent over assignment verbs. Requestable overarching operator agent from Owner does not live inside the Owner account as owner.

---

## Protest Case admission

Primary object: **Protest Case** = owning entity × parcel × tax year (assessment cycle).

Columns: **Owner** | **Operator** | **Worker**

| State | Meaning | Owner | Operator | Worker |
|-------|---------|-------|----------|--------|
| `detected` | Over-assessment signal found; outreach not yet legal/allowed | — | V | — |
| `blocked_jurisdiction` | No licensure standing / solicitation-blocked — notice must not fire | — | V · T | — |
| `notified` | Activation delivered (served instance / channel) | V · T open | V | — |
| `consented` | See / understand / with-it | V · T | V | — |
| `authorized` | Appointment of Agent signed; contingency % locked (jurisdiction-aware) | V · T | V | — |
| `evidence_prep` | Packet building (comps / uniformity / optional income docs) | V | V · T | — |
| `informal` | Informal review with assessor in flight | V | V | — |
| `hearing_queued` | Formal hearing scheduled; packet ready for Worker | V | V | V · T pick up |
| `hearing_active` | Worker accepted; hearing in progress | V | V | V · T |
| `hearing_reported` | Worker reported board outcome | V | V · T | V |
| `reduced` | Assessment reduced (full/partial); savings measurable | V · T | V | — |
| `denied` | Appeal denied at this level (may escalate) | V · T | V | — |
| `invoiced` | Trim cut billed against measured savings | V · T | V | — |
| `collected` | Fee paid | V | V | — |
| `declined` | Owner walked away | V · T | V | — |
| `recurring` | Standing auth; awaiting next cycle re-detect | V | V | — |

**Spine:** detected → (jurisdiction / solicitation gate) → notified → consented → authorized → evidence_prep → informal → (hearing_queued → hearing_active → hearing_reported) → reduced | denied → invoiced → collected → recurring.

**Always-on detection:** nobody "creates a detection campaign" as Core Function — rolls are watched; windows open; signals fire.

**V** = visible · **T** = actionable (can transition / primary work) · **—** = not admitted

**Machine twin:** `apps/trim/src/app/register/world/trimWorld.ts` must export `admits(persona, state)`.

---

## Never-sees (reinforced)

- Owner never sees Operator licensure capacity math, Worker pay rates, or other clients.
- Worker never sees Owner invoice/collections or unscoped portfolio.
- Notice never claims a promised savings result in jurisdictions with specific-result solicitation bans (TX TDLR ethics).
- Notice never implies Trim is the county / appraisal district / ARB.
- Operator never signs Owner consent/authorize in place of the entity's authorized signer.

---

## Launch wedge (world constraint)

Texas metros first: annual cycle, equal-and-uniform doctrine, PTC licensure regime, property-tax-as-the-fight. County-depth over county-breadth.
