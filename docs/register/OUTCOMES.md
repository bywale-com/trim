# Trim — Outcomes

Lattice: Owner core → so that Operator / automation / Worker can protest under authority and close the fee split; Operator core → so that Owner is served and recovers without illegal solicitation and without silent stuck protests; Worker core → so that formal hearings complete and Owner gets a board outcome.

**Persona-emergence law (restatement):** A seat exists only if omitting it leaves a value-chain gap (Tally Worker test). Owner, Operator, and Worker are value-chain seats. Agent is a presentation feature scoped per seat. Licensed agent-of-record is a compliance fact tracked by Operator, not a product persona.

---

## Owner

**So that** Operator / automation / Worker can protest under authority and close the fee split.

| id | label | core | statement |
|----|-------|------|-----------|
| `owner-core` | Core | ✓ | As the Owner, I can open a notice that already states my parcel's assessed value, the evidence that supports a lower value, and an estimated excess — consent to the agent-led protest model, sign one Appointment of Agent at a jurisdiction-aware contingency %, optionally upload income docs, and see appeal status, reduction, and invoice as facts — so that my over-assessment is corrected without upfront payment and without managing the process myself. |
| `owner-consent` | See / understand / with it | | As the Owner, I can tick three short acknowledgments before contingency detail — so that activation is stated consent, not identity proof. |
| `owner-authorize` | Agent authorization | | As the Owner, I can sign the one-time Appointment of Agent locking contingency % (jurisdiction-aware cap) — so that Trim can file and represent without repeated engagement. |
| `owner-docs` | Upload docs | | As the Owner, I can optionally upload rent roll / P&L / condition evidence after authorize — so that the appeal packet is as strong as possible while upload is never a gate. |
| `owner-status` | Status facts | | As the Owner, I can see evidence prep / informal / hearing queued / board outcome / reduction / invoice as plain facts — so that I am never managing a protest grind dashboard. |
| `owner-trust` | Trust proof | | As the Owner, I can see parcel ID + county + county-site verification link + no-upfront-fee statement + non-affiliation disclaimer — so that the notice survives scam skepticism and solicitation ethics. |
| `owner-decline` | Decline | | As the Owner, I can walk away before authorization with a single control — so that declining is never a form or a call. |

**Killed:**
- Sales discovery call as Core (eligibility fact exists publicly before contact)
- Escrow fund-hold (money never moves through Trim; county reduces the bill)
- Owner browsing other entities' assessments (one account per owning entity)
- Agent as its own Register persona desk
- CFO / counsel / property manager as separate personas (delegation features inside Owner seat)

---

## Operator

**So that** Owner can be served and recover without illegal solicitation and without silent stuck protests.

| id | label | core | statement |
|----|-------|------|-----------|
| `operator-core` | Core | ✓ | As the Operator, I can maintain per-jurisdiction licensure gates (TX PTC capacity, fee caps, appeal windows) across my book, work exceptions and stuck protests, dispatch Workers to hearing-queued cases, and audit all actions under the Appointment of Agent — so that Owner accounts are never served into illegal jurisdictions and no protest gets permanently stuck. |
| `operator-portfolio` | Portfolio | | As the Operator, I can see every Owner account and protest case in my book by admission state — so that I know who's stuck and who's clean without opening each case. |
| `operator-jurisdiction` | Jurisdiction gate | | As the Operator, I can see where Trim is licensed to operate (TX PTC capacity, per-state status, fee cap, appeal window) — so that outreach and filing are blocked where unlawful. |
| `operator-exceptions` | Exceptions | | As the Operator, I can resolve stuck and blocked protest cases — so that automation isn't permanently stalled. |
| `operator-audit` | Audit | | As the Operator, I can see the full action trail under the Appointment of Agent for any protest case — so that I can account for automation's actions without re-deriving them. |
| `operator-dispatch` | Worker dispatch | | As the Operator, I can see hearing-queued cases and the Worker roster by county/board — so that formal hearings never stall for lack of an available advocate. |
| `operator-collections` | Collections | | As the Operator, I can see invoiced-not-collected cases and manage dunning — so that the contingency cut is collected after the Owner receives the assessment reduction. |
| `operator-county-data` | County data health | | As the Operator, I can monitor roll import status, CAMA freshness, and comp coverage per county — so that detection quality is visible and stale data doesn't produce indefensible notices. |

**Killed:**
- Operator signing Owner consent / authorize in place of entity's authorized signer
- Acting as Owner (separate desk — Operator cockpit never replaces Owner desk)
- Licensed agent-of-record as product persona (tracked fact only)

---

## Worker

**So that** formal hearing appearances are covered and Owner gets a board outcome.

| id | label | core | statement |
|----|-------|------|-----------|
| `worker-core` | Core | ✓ | As the Worker, I can browse available hearing assignments in my county coverage, preview the prepared case packet, accept the assignment, attend the hearing (in person or remote) using the case packet and checklist, report the board outcome, and see my per-appearance pay status — so that formal-level protests complete and Operator can close the hearing unit of work. |
| `worker-pickup` | Pick up assignment | | As the Worker, I can browse the hearing queue and accept an assignment — so that I'm locked to the case before preparing. |
| `worker-argue` | Argue hearing | | As the Worker, I can use the prepared packet and hearing logistics to appear and argue — so that I never arrive under-prepared. |
| `worker-report` | Report outcome | | As the Worker, I can submit the board outcome immediately after the hearing — so that Operator can close the hearing state and Owner sees the result promptly. |
| `worker-pay` | Pay status | | As the Worker, I can see my per-appearance pay status — so that I know when each unit of work pays out. |

**Worker passes Tally Worker test:** Without this seat, value creation stops at the formal level in in-person jurisdictions. Formal hearings require human presence; the product cannot substitute a state machine or agent for the person who appears before the ARB/BOE and speaks from prepared evidence.

**Killed:**
- Worker seeing Owner billing / invoice internals (bounded packet scope only)
- Worker managing the full Owner relationship (assignment scope only)
- Worker as Operator — no portfolio or licensure access

---

## Forced shared objects (cross-persona facts)

These objects must be coherent across all three personas:

- Notice with parcel proof (ID, county, assessed $X, evidence $Y, ≈$Z excess)
- Analysis-not-promise framing: "subject to appeal outcome" / "estimated excess, not guaranteed savings"
- Non-affiliation disclaimer (Trim is not the county / appraisal district / ARB / tax office)
- County-site verification link (Owner can check the county's own site)
- Consent three ticks (see it / understand it / with it)
- Appointment of Agent + contingency % locked (jurisdiction-aware cap)
- Optional income docs (rent roll / P&L) — case-maximizer, never a gate
- Protest states including `hearing_queued` / `hearing_active` / `hearing_reported`
- Reduction fact: measured savings = reduction × millage rate (documented, not estimated)
- Invoice fact: Trim contingency cut billed against documented savings
- `blocked_jurisdiction` state: Operator sees it; Owner never receives a notice from a blocked jurisdiction
- Worker bounded packet scope — no Owner billing / invoice visibility
