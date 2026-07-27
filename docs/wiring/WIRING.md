# Trim — Wiring (CTO)

Three-pass: Function → Can'ts → Furnish. All 10 `docs/sme/CROSS-CUTTING.md` findings reconciled below. Flow anchors map to `src/app/register/flows/`. Surface IDs join to `src/app/register/trace/surfaces.ts`.

Machine twin: `src/app/register/trace/wiring.ts`.

---

## Pass 1 — Function wiring

Core outcomes drive these automation / state machine / integration requirements. Status: `wiring` = exists in design, not yet built; `partial` = partial implementation; `deferred` = designed, not scheduled; `implemented` = built in CT.

### WF-01 — Detection jobs
**Requirement:** Always-on scanning of public assessment rolls + CAMA data + comp datasets per county. Runs on assessment cycle trigger (annual for TX metros), produces over-assessment signals at parcel level with valuation confidence score and approved copy variant before outreach is allowed.  
**Flow:** `activate-notice`  
**Surfaces:** —  
**Status:** wiring  
**Notes:** Per-county data pipeline (roll ingest, CAMA adapter, comp normalization) is the real moat. Detection must produce a trust-kit-complete record (parcel ID, CAD URL, assessed $X, evidence $Y, estimated excess $Z with confidence) before the state machine allows `detected → notified`. Detection never fires without passing the pre-notice copy gate (see CC-01).

### WF-02 — Valuation substantiation and copy gate
**Requirement:** For every parcel flagged by detection, produce and persist: ratio / county calibration, comparable count and vintage, equity uniformity table inputs, income approach inputs (if available), conservative error band, reviewer-approval gate, approved claim text, channel constraints. Block `detected → notified` when confidence threshold not met or approved copy text not present.  
**Flow:** `activate-notice`  
**Surfaces:** `trim-ct-owner-notice`, `trim-ct-op-exceptions`  
**Status:** wiring  
**Notes:** This is the compliance gate that makes the ALG notice defensible under Texas TDLR solicitation ethics (no specific-result claim). Failing this gate should produce an Operator-visible exception, not a silent drop. See CC-01.

### WF-03 — Jurisdiction registry and pre-notice gate
**Requirement:** Per-county registry with: representative type (TX PTC / attorney-required / open), PTC registration status, senior-sponsor association, max-10 capacity check, solicitation regime, e-file capability, appeal calendar, and portal credentials. Gate must block `detected → notified` on missing licensure, missing authority, attorney-required entity forums, and any state/channel solicitation violation.  
**Flow:** `activate-notice`  
**Surfaces:** `trim-ct-op-jurisdiction`  
**Status:** partial  
**Notes:** Currently modeled as a status flag per county; needs full multi-field object as designed in CC-02. The gate check runs before outreach, not only at authorization or filing.

### WF-04 — Trust kit persistence
**Requirement:** Persist all trust-kit fields as first-class, queryable fields before generating the notice: official CAD URL (or manual-search path), county name, parcel/account ID (raw + formatted display), tax year, owner/entity name, situs address, assessed value, record-as-of date, data snapshot ID, link capability (deep-link vs search), and verification QA artifact (automated check that the CAD URL resolves to the matching record). Notice may not fire if any field is missing or fails QA.  
**Flow:** `activate-notice`  
**Surfaces:** `trim-ct-owner-trust`, `trim-ct-owner-notice`  
**Status:** partial  
**Notes:** See CC-06. Trust kit is a data requirement, not a layout requirement. If a trust-kit field is unavailable or stale, the notice must not be sent as if verification proof exists.

### WF-05 — ALG activation delivery
**Requirement:** Deliver the served Owner instance to the contact channel (email / direct link) once pre-notice copy gate and jurisdiction gate clear. Instance includes: parcel ID, county, assessed $X, evidence $Y, estimated excess ≈ $Z ("subject to appeal outcome"), county-site verification link, non-affiliation disclaimer, no-upfront-fee statement, and consent entry point.  
**Flow:** `activate-notice`  
**Surfaces:** `trim-ct-owner-notice`, `trim-ct-owner-trust`  
**Status:** implemented  
**Notes:** Activated instance must not be delivered before both WF-02 and WF-03 gates clear. Channel delivery must include opt-out mechanism per CAN-SPAM / TCPA rules (see CC-01 solicitation compliance).

### WF-06 — Consent and Appointment of Agent capture
**Requirement:** Three-tick consent (see it / understand it / with it) gates display of contingency % detail and Authorize block. Appointment of Agent capture: jurisdiction-aware contingency % (computed from WF-03 fee-cap data), entity signer title, e-signature, timestamp. POA record persisted with: parcel ID, tax year, signer identity, contingency %, and CAD jurisdictions covered. Contingency % locked at signing — never re-computable post-signature.  
**Flow:** `consent-authorize`  
**Surfaces:** `trim-ct-owner-consent`, `trim-ct-owner-authorize`  
**Status:** implemented  
**Notes:** See CC-01 (contingency is jurisdiction-aware function) and CC-03 (Texas PTC capacity). Entity-signer authority must be validated: who may sign for the owning entity's organizational form. POA must name the licensed representative.

### WF-07 — Evidence preparation
**Requirement:** Automated evidence packet build after POA signing: (a) equity/uniformity packet — top N comps within evidence radius, uniformity grid, adjusted comparison table; (b) income approach packet — if Owner uploads rent roll/P&L, build cap-rate-to-value calculation, NOI, and indicated value vs assessed value; (c) condition evidence — if Owner uploads photos or repair estimates, incorporate. Packet must be ARB-retainable (metadata, confidentiality flags, scoped access). Evidence built at `evidence_prep` state; county-specific evidence rules apply (see CC-07).  
**Flow:** `evidence-hearing`  
**Surfaces:** `trim-ct-owner-upload`, `trim-ct-owner-status`  
**Status:** partial  
**Notes:** Income-approach packet requires owner-uploaded documents — do not block the protest on absence of income docs; they are maximizers. Private documents need scoped access, county evidence packaging rules, and ARB evidence cutoff enforcement.

### WF-08 — Informal review
**Requirement:** At `informal` state, submit evidence packet to appraisal district informal process (where supported). Capture informal offer (if any) and present to Operator for threshold-accept decision. If accepted: transition to `reduced`. If rejected or no offer: escalate to formal hearing scheduling. Informal offer fact must be persisted as a named field on the protest case.  
**Flow:** `evidence-hearing`  
**Surfaces:** `trim-ct-owner-status`, `trim-ct-op-exceptions`  
**Status:** wiring  
**Notes:** County-specific informal process varies — some are e-file forms, some require portal submission. Informal offer threshold and local ARB tolerance by county is a NEEDS VERIFICATION item (see HANDOFF.md).

### WF-09 — Worker dispatch state machine
**Requirement:** On `hearing_queued`: dispatch notice triggers, evidence cutoff check, appearance mode assignment (in-person / remote), county packet validator, authority proof (Form 50-162 or equivalent) attached, Worker queue availability. Worker accept → `hearing_active`. Worker outcome report → `hearing_reported`. No-show or cancellation → structured reason code → exception queue. County-specific Worker checklist enforced before acceptance.  
**Flow:** `evidence-hearing`  
**Surfaces:** `trim-ct-op-worker-dispatch`, `trim-ct-worker-queue`, `trim-ct-worker-packet`, `trim-ct-worker-assignment`, `trim-ct-worker-hearing`, `trim-ct-worker-outcome`  
**Status:** wiring  
**Notes:** See CC-04. Hearing dispatch is a real bounded unit of work. County procedure differences mean separate launch-county Worker checklists. No-show risk requires escalation path back to Operator.

### WF-10 — Outcome and reduction recording
**Requirement:** Worker outcome report at `hearing_reported` must capture: board outcome (reduced / denied / continued), assessed value after reduction (if reduced), and board order reference (where issued). Compute measured savings: (before-reduction assessed value − after-reduction assessed value) × county millage rate. Persist as first-class field on protest case. Trigger `reduced` or `denied` state transition. `continued` returns to `hearing_queued` with new scheduled date.  
**Flow:** `reduce-invoice`  
**Surfaces:** `trim-ct-worker-outcome`, `trim-ct-owner-reduction`, `trim-ct-op-collections`  
**Status:** wiring  
**Notes:** Measured savings is the source of truth for Trim's invoice. "Money never moves through Trim" — county reduces the bill; Trim invoices its cut. Millage rate must be current for the tax year; source the county-published rate from county data manifest.

### WF-11 — Invoice generation and collections
**Requirement:** After `reduced`, generate invoice: measured savings × contingency % = Trim fee. Invoice includes: owner entity, parcel ID, tax year, before/after assessed values, millage rate, measured savings, contingency %, Trim fee amount, due date, ACH/card authorization reference. Collections pipeline: ACH/card charge attempt after documented reduction; dunning schedule (first / second / delinquent notice); dispute intake. No Trim-held escrow — invoice references the county bill change, not a fund.  
**Flow:** `reduce-invoice`  
**Surfaces:** `trim-ct-owner-invoice`, `trim-ct-op-collections`  
**Status:** wiring  
**Notes:** See CC-05. Collections happen after reduction because there is no escrow or automatic deduction. Invoice must be dated independently of collection (two separate timestamps). Dunning language must not pretend Trim can deduct from a fund it never controls.

### WF-12 — Recurrence state machine
**Requirement:** After `collected` (or `invoiced` if collection is outstanding), transition parcel to `recurring`. At next assessment cycle: re-run detection on same parcel against new roll, compute new confidence score, check jurisdiction gate, generate new protest case if over-assessment signal fires. Re-use standing POA if still valid (check annual / multi-year scope per state). If POA expired, serve Owner renewal notice.  
**Flow:** `recurring`  
**Surfaces:** `trim-ct-owner-status`  
**Status:** wiring  
**Notes:** Recurrence is the core retention moat. Zero re-acquisition cost after first protest. Detection re-fires annually inside the standing account.

### WF-13 — Escrow / lender reserve branch
**Requirement:** For mortgage-encumbered parcels, identify servicer-escrowed or lender-reserve accounts. On reduction, generate servicer evidence packet (corrected bill / board order / refund proof). Track reserve-release triggers, annual escrow analysis dates, and loan-document control map. Invoice evidence must prove first-year benefit even when no direct cash refund reaches the Owner.  
**Flow:** `reduce-invoice`  
**Surfaces:** `trim-ct-owner-reduction`, `trim-ct-op-collections`  
**Status:** deferred  
**Notes:** See CC-09. Residential and some multifamily commercial parcels may have escrowed taxes; direct-payer commercial is the primary wedge. Do not let `reduced` automatically imply `cash_received`.

### WF-14 — Post-ARB escalation lanes
**Requirement:** After `denied` (or partial reduction at `reduced`), present post-ARB remedy options by forum eligibility: no escalation, settlement-only, regular binding arbitration (RBA) — value ceiling + deposit + separate appointment, SOAH, district court — deadline + tax payment preservation + counsel handoff. Each remedy is a distinct lane with separate authority, deadline, and deposit requirements. `denied` state does not auto-transition; Owner and Operator must elect a remedy or close.  
**Flow:** `reduce-invoice`  
**Surfaces:** `trim-ct-owner-reduction`, `trim-ct-op-exceptions`  
**Status:** deferred  
**Notes:** See CC-10. Post-ARB escalation is a separate legal product lane, not a generic "appeal more" button. Entity-owned commercial parcels often require counsel. Remedy election must lock and be auditable.

### WF-15 — Audit trail
**Requirement:** Immutable, append-only audit log under every Appointment of Agent. Events: detection computed, notice gate cleared / blocked, notice delivered, consent ticked, POA signed, evidence packet built, informal submitted, hearing dispatched, Worker assigned, outcome reported, invoice generated, dunning sent, collection confirmed, recurrence triggered. Actor, timestamp, case reference, and event type per record.  
**Flow:** —  
**Surfaces:** `trim-ct-op-audit`  
**Status:** implemented  
**Notes:** Audit is a compliance requirement under the POA instrument, not an optional feature.

### WF-16 — County data ingest pipeline
**Requirement:** Per-county manifest object (not a state flag): roll import adapter (vendor / direct / PIA fallback), CAMA schema version, GIS / parcel link QA, portal credentials / PIN handling, e-file capability matrix, appeal calendar, evidence rules (cutoff, redaction, acceptable formats), Worker checklist, freshness monitor (days-since-import alert threshold), PIA fallback budget and status, and cost model per county.  
**Flow:** —  
**Surfaces:** `trim-ct-op-county-data`  
**Status:** partial  
**Notes:** See CC-07. County-data moat is operational depth — maintained county-specific ingestion is the durable advantage. Public data alone is competitor-replicable.

### WF-17 — Texas PTC capacity registry
**Requirement:** Named-human licensure registry: registered PTC, senior PTC sponsor association, max-10 supervision cap, exception evidence (for >10), CE credit tracking, renewal date, license status changes, mid-season reassignment triggers, direct-supervision audit trail, appointment-to-license reconciliation, and case-level PTC assignment. Firm authorization and licensed human performer are related but distinct fields on the protest case record.  
**Flow:** —  
**Surfaces:** `trim-ct-op-jurisdiction`  
**Status:** partial  
**Notes:** See CC-03. Texas sponsorship capacity is the launch throttle. Owner demand cannot outpace named-human PTC capacity. Scheduler must stop outreach, filing, and Worker dispatch from landing on invalid or over-capacity personnel.

### WF-18 — Owner tax / accounting artifacts
**Requirement:** Persist tax-support artifacts per protest case: corrected county bill, board order / refund notice, tax year affected, Trim fee invoice date, W-9 packet status, payment method, 1099 decision-support flag (has Trim issued a 1099-qualifying payment?), partnership / tenant reconciliation flag, and sales-taxability hold-closed state where unverified. Two timestamps: reduction date and invoice date are structurally separate and independently queryable.  
**Flow:** `reduce-invoice`  
**Surfaces:** `trim-ct-owner-invoice`, `trim-ct-owner-reduction`  
**Status:** deferred  
**Notes:** See CC-07 (CROSS-CUTTING #7 from HANDOFF.md). Recovery period and Trim fee invoice may fall in different tax years. PM owns disclosure; CTO must ensure the two dates are structurally separate.

### WF-19 — APIs
**Requirement:** Internal API layer for: protest case CRUD, state machine transitions, notice gate check, evidence packet build trigger, Worker dispatch, outcome write, invoice generation, collections dunning trigger, audit log write.  
**Flow:** —  
**Surfaces:** —  
**Status:** wiring

### WF-20 — Observability
**Requirement:** Metrics: detection-to-notified funnel (parcels detected / gate-blocked / notified / consented / authorized); consent-to-collection funnel; hearing outcome rates by county and property type; Worker dispatch latency; evidence prep latency; collection rate and dunning cycle distribution; county data freshness SLA.  
**Flow:** —  
**Surfaces:** —  
**Status:** wiring

---

## Pass 2 — Can'ts wiring

Additive wiring items that enable enrichment can'ts but do not change the Core state machine.

| id | label | status | notes |
|----|-------|--------|-------|
| `wc-multi-entity-owner` | Multi-entity Owner login aggregation | deferred | Requires entity-to-login join and cross-entity read scoping |
| `wc-read-only-share` | Read-only case share links (counsel / accountant scoped) | deferred | Scoped token with surface-level read ACL |
| `wc-notification-prefs` | State-change email and digest subscription system | deferred | Requires notification preference store per Owner login |
| `wc-informal-offer-field` | Informal offer amount as first-class field on protest case | wiring | Named field needed in WF-08; not yet in schema |
| `wc-hearing-logistics-visible` | Hearing date / board / venue on Owner status | wiring | Requires WF-09 to persist hearing logistics |
| `wc-poa-download` | Signed Appointment of Agent PDF download | deferred | E-signature provider must support post-signing PDF export |
| `wc-evidence-packet-download` | Evidence packet download for Owner after packet built | deferred | Scoped read on evidence packet store with Owner-facing format |
| `wc-bulk-ptc-edit` | Bulk-edit PTC capacity across counties | deferred | UI multi-select on jurisdiction registry rows |
| `wc-dlq-replay` | Dead-letter-queue replay from Exception queue | deferred | Job queue replay trigger with audit event |
| `wc-copy-gate-reason` | Copy gate block reason visible to Operator | wiring | Requires WF-02 to write suppression reason to case record |
| `wc-outreach-scheduling` | Scheduled outreach batch by appeal window date | deferred | Job trigger with county-appeal-window date as input |
| `wc-post-arb-lanes` | Post-ARB escalation eligibility and remedy election | deferred | Requires WF-14 lanes and forum-eligibility computation |
| `wc-escrow-flag` | Escrow / lender reserve classifier per parcel | deferred | Servicer identification from loan data or Owner-flagged |
| `wc-worker-timeline-alert` | Evidence cutoff date badge and deadline enforcement on Worker packet | wiring | Requires WF-09 county packet validator |
| `wc-worker-continued-outcome` | "Continued" hearing outcome type with reschedule state | wiring | State machine extension in WF-09 |
| `wc-worker-telemetry` | Worker no-show / cancellation structured reason codes | wiring | Schema extension on Worker outcome report |

---

## Pass 3 — Furnish wiring

Backend requirements to enable furnishing strips. All are additive; none require Core state machine changes.

| id | label | status | notes |
|----|-------|--------|-------|
| `wfu-days-in-state` | Days-in-state computed field on protest case | implemented | Elapsed-time from state entry timestamp |
| `wfu-contingency-lock-persist` | Contingency % locked at POA signing, immutable | implemented | Stored in POA record; read-only after signing |
| `wfu-county-freshness` | County data freshness field per county manifest | partial | Days-since-import tracked; alert threshold not yet configurable |
| `wfu-valuation-methodology-tag` | Valuation methodology badge (equity / income / comps) per case | wiring | Outcome of WF-01 detection run; must be persisted on case |
| `wfu-informal-offer-persist` | Informal offer amount persisted and Operator-visible | wiring | Named field in WF-08 |
| `wfu-hearing-logistics-fields` | Hearing date / board / section / venue / appearance-mode as case fields | wiring | Outcome of county scheduling in WF-09 |
| `wfu-worker-identity-visible` | Licensed Worker first name visible to Owner during hearing-active | deferred | Requires Owner-scoped read of Worker assignment (name only, not contact) |
| `wfu-evidence-status-substatus` | Evidence prep substatus (comps ✓ / equity ✓ / income pending) | wiring | Sub-state on `evidence_prep` case state |
| `wfu-invoice-trace` | Invoice trace lines (parcel, tax year, authorize date, savings calculation) | wiring | Invoice record must foreign-key to POA, savings calculation, and county bill |
| `wfu-reduction-calculation` | Measured savings calculation (before/after × millage) as first-class fact | wiring | Computed in WF-10 and stored on case |
| `wfu-annual-reenroll` | Recurrence enrollment flag on protest case after POA signing | wiring | Set in WF-12; visible to Owner as chip |
| `wfu-worker-pay-detail` | Per-appearance fee amount and expected payment date | deferred | Worker pay record model with assignment → outcome → pay pipeline |
| `wfu-audit-export` | Audit log export as CSV (date-range query) | deferred | Query endpoint on immutable audit log |
| `wfu-detection-lineage` | Detection run ID, roll-import date, model variant on each case | wiring | Requires WF-01 to write detection lineage to case record |
| `wfu-poa-expiry` | POA expiration date field and alert trigger | deferred | POA record must include scope (tax year or standing) and expiry |

---

## CROSS-CUTTING reconciliations

All 10 findings from `docs/sme/CROSS-CUTTING.md` addressed here.

### CC-01 — ALG notice copy is compliance-gated
**PM reconciliation:** Notice and consent states must use approved-claim vocabulary only: "our analysis indicates," "estimated excess," "subject to appeal outcome." No specific-result promise in solicitation. Framing locked in WF-02.  
**CTO reconciliation:** WF-02 pre-notice substantiation packet and copy gate is the enforcement point. Approved claim text is a field on the substantiation record — PM's notice template must bind to it. If CTO's confidence threshold not cleared, the notice is suppressed (not silently dropped — exception raised to Operator).  
**Joint action:** PM and CTO must agree on the approved-claim vocabulary once; CTO versioned it in the substantiation schema; PM notice template pulls from it. Neither side may independently change the claim text in production.

### CC-02 — Jurisdiction gate blocks notice, not only filing
**PM reconciliation:** `blocked_jurisdiction` is an Operator-facing state before any Owner notice fires. Owner never sees a served instance from a jurisdiction where Trim lacks standing.  
**CTO reconciliation:** WF-03 jurisdiction gate runs at `detected → notified` transition, not at authorization or filing. Multi-field registry (representative type, licensure status, solicitation regime, attorney-required forum) required. Simple state flag insufficient.  
**Joint action:** PM's admission model must confirm `notified` cannot be reached before WF-03 gate clears. CTO must wire jurisdiction check at notice, POA signing, filing, hearing dispatch, arbitration, and litigation boundaries.

### CC-03 — Texas PTC capacity is the launch throttle
**PM reconciliation:** Operator outcomes must expose PTC capacity as an operating state (open / at-capacity / blocked). Owners should not be activated into counties where Trim cannot legally perform the work during the current appeal window.  
**CTO reconciliation:** WF-17 named-human licensure registry is the authoritative source. Scheduler (detection → outreach → filing → dispatch) uses WF-17 capacity check before each transition.  
**Joint action:** PM's launch plan and county opening decisions must use WF-17 capacity as the gate condition, not an internal HR note.

### CC-04 — Worker hearing layer is real
**PM reconciliation:** Worker persona and all admission states (hearing_queued / hearing_active / hearing_reported) are full product surfaces, not status labels. Worker screens need assignment preview, authority proof, packet checklist, appearance mode, hearing script, outcome report, and pay boundaries.  
**CTO reconciliation:** WF-09 Worker dispatch state machine is a first-class system requirement. County procedure differences mean separate launch-county Worker checklists. No-show risk requires exception path.  
**Joint action:** PM's Worker admission table must match CTO's dispatch state machine transitions exactly. If PM treats hearing as a status label while CTO treats it as a calendar item with evidence cutoff and authority proof, hearings will fail.

### CC-05 — Collections after reduction (no escrow)
**PM reconciliation:** Owner invoice and collections states must be honest about realized benefit versus cash timing. Invoice state is not equivalent to collected state. Dunning language must not pretend deduction-at-source.  
**CTO reconciliation:** WF-11 invoice / collections pipeline has no escrow assumption. Invoice generation, ACH/card charge attempt, dunning schedule, and dispute intake are all separate events.  
**Joint action:** PM needs `invoiced` and `collected` as distinct, dated states. CTO needs the two states as structurally separate records with independent timestamps.

### CC-06 — Trust kit is a data requirement
**PM reconciliation:** Every first-touch notice must render: Trim is private / not government, named county/CAD, parcel/account ID, owner/entity and situs match, official CAD verification path, assessed value, record-as-of date, fee terms, self-file disclosure, licensed representative identity (where relevant).  
**CTO reconciliation:** WF-04 trust-kit persistence ensures all fields are first-class before outreach. Detection must persist the CAD URL and verification QA artifact, not just the value facts.  
**Joint action:** PM owns what Owner sees before login; CTO owns whether those facts are reproduced by a skeptical Owner on the official site. If a trust-kit field is unavailable or stale, the notice must not be sent.

### CC-07 — County-data moat is operational depth
**PM reconciliation:** Texas launch is county-depth over county-breadth. Owner promises, deadlines, and verification links vary by county (Harris, Dallas, Travis, Tarrant). PM must not phrase launch as "Texas on" when the product guarantee varies by county.  
**CTO reconciliation:** WF-16 county manifest object (not a state flag) is the representation. PM can show/withhold Owner actions based on county readiness fields, not a binary on/off.  
**Joint action:** County readiness gates must be shared between PM's per-county activation decisions and CTO's county manifest readiness object.

### CC-08 — Income docs are optional but decisive for commercial appeals
**PM reconciliation:** Upload UX must frame docs as "improves the case" not "required to proceed." The ALG wedge is served from public data; income docs are maximizers. Confidentiality and redaction guidance must accompany optional requests.  
**CTO reconciliation:** WF-07 evidence preparation separates public-data packet from income-approach packet. Private documents need scoped access, county evidence packaging rules, ARB-retainable packet format, and litigation hold metadata.  
**Joint action:** PM's upload framing and CTO's evidence store separation must be designed together so the private-document branch is strong while the ALG activation works without it.

### CC-09 — Escrow and lender reserves change felt-win timing
**PM reconciliation:** Owner status and invoice copy must separate documented tax savings from visible cash timing. `reduced` does not imply `cash_received`. Owners with escrowed mortgages may see benefit as a future lower escrow payment, not an immediate refund.  
**CTO reconciliation:** WF-13 escrow branch classifies servicer-escrowed parcels, generates servicer evidence packet, and tracks reserve-release triggers. Invoice evidence must prove first-year benefit even when Owner's bank account shows no refund.  
**Joint action:** PM preserves the direct-payer commercial wedge while WF-13 adds escrowed exceptions. `reduced`, `invoiced`, and `collected` must each be structurally distinct; CTO must not auto-imply `cash_received` at `reduced`.

### CC-10 — Post-ARB escalation is a separate legal product lane
**PM reconciliation:** After denial or partial reduction, Owner must see forum-specific choices: no escalation / settlement-only / regular binding arbitration / SOAH / district court / attorney handoff. Each choice has separate authority, deadline, deposit, and economics. A single "appeal more" button hides these rules.  
**CTO reconciliation:** WF-14 post-ARB lanes model each forum as a separate state with: order receipt date, deadline countdown, tax-payment preservation requirement, forum eligibility, remedy-election lock, arbitration deposit, attorney consent flag, and litigation hold.  
**Joint action:** PM and CTO keep ordinary protest states distinct from post-ARB legal remedies. County order delivery triggers the clocks; CTO must capture order receipt date as a first-class event.
