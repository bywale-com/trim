# Trim — Flows (behavioral maps)

Node kinds: `ui` (Owner / Operator / Worker UI verbs), `api` (internal API call), `job` (async automation job), `db` (state / record write), `ext` (external system — county portal, appraisal district, county bill).

Machine twin: `src/app/register/flows/`.

---

## Flow 1 — Activate notice (detection → notified)

**Anchor:** A parcel over-assessment signal fires for the first time and becomes a served Owner account.

```
[job] detection-run
  → [job] substantiation-packet-build
       ↓ confidence-threshold-cleared?
       NO → [db] detected (suppressed) → [ui:op] Exception queue (copy-gate-fail reason)
       YES →
  → [job] jurisdiction-gate-check
       ↓ jurisdiction-ready?
       NO → [db] blocked_jurisdiction → [ui:op] Exception queue (blocked-jurisdiction reason)
       YES →
  → [job] trust-kit-qa
       ↓ all trust-kit fields present + CAD link resolves?
       NO → [db] detected (suppressed) → [ui:op] Exception queue (data-quality reason)
       YES →
  → [api] create-owner-instance (parcel × tax year, trust-kit data)
  → [db] detected → notified
  → [job] activation-delivery (email / direct link)
  → [ui:owner] Portfolio · Case Modal · Notice Block
  → [ui:owner] Portfolio · Case Modal · Trust Strip Block
```

**Owner entry:** Opens a parcel instance showing assessed $X / evidence $Y / estimated excess ≈ $Z (analysis-not-promise framing). Trust strip: no upfront fee, county-site verification link, non-affiliation disclaimer.

**Operator visibility:** Portfolio table row appears at `notified` state. Exception queue shows suppressed cases with reason codes.

---

## Flow 2 — Consent / authorize (notified → authorized)

**Anchor:** Owner ticks three consent acknowledgments and signs the Appointment of Agent.

```
[ui:owner] Portfolio · Case Modal · Notice Block
  → [ui:owner] Portfolio · Case Modal · Consent Block
       ↓ three ticks complete?
       NO → stay at notified
       YES → [db] consented
  → [ui:owner] Portfolio · Case Modal · Authorize Block
       (contingency % displayed — jurisdiction-aware computed value from WF-03 registry)
       (entity identity confirmation, signer title capture)
       ↓ POA e-signed?
       NO → stay at consented (can decline)
       YES →
  → [api] create-appointment-of-agent
  → [db] authorized (contingency % locked at signing, immutable)
  → [ui:owner] Portfolio · Case Modal · Status Block (evidence_prep incoming)
  → [ui:owner] Portfolio · Case Modal · Upload Block (optional income docs prompt)

  [PARALLEL: Owner declines]
  → [ui:owner] Portfolio · Case Modal · Decline Block
  → [db] declined
  → [ui:op] Portfolio table shows declined state
```

**Trust gates:** Contingency % must be pulled from the jurisdiction registry (WF-03 / WF-17), not hardcoded. POA record written with: parcel ID, tax year, signer identity, signer title, contingency %, POA instrument type (TX Form 50-162 or equivalent), and named licensed representative.

---

## Flow 3 — Evidence / hearing (authorized → hearing_reported)

**Anchor:** Evidence packet built, informal review runs, formal hearing dispatched to Worker where required.

```
[db] authorized
  → [job] evidence-packet-build
       [PARALLEL] equity-grid-build (comps, uniformity table)
       [PARALLEL] income-approach-build (if Owner uploaded income docs)
       [PARALLEL] condition-evidence-incorporate (if photos / repair estimates uploaded)
  → [db] evidence_prep
  → [ui:owner] Status Block (evidence substatus: comps ✓ / equity ✓ / income pending)
  → [ui:op] Portfolio row (evidence_prep state)

  → [job] informal-review-submission (to appraisal district)
  → [db] informal
       [BRANCH] informal offer received?
       YES → [api] informal-offer-write → [ui:op] Exception queue (informal-offer action)
            ↓ Operator accepts offer above threshold?
            YES → [db] reduced (informal) → GOTO Flow 4
            NO  → [job] formal-hearing-schedule
       NO  → [job] formal-hearing-schedule

  → [db] hearing_queued (hearing date / board / section / venue / appearance mode persisted)
  → [ui:owner] Status Block (hearing logistics visible)
  → [ui:op] Worker dispatch panel (case appears in queue)

  → [ui:worker] Queue Module · Queue List (case appears with property type, county, date)
  → [ui:worker] Queue Module · Packet Modal (equity summary, income summary, authority proof)
       ↓ Worker accepts?
       NO → case remains in hearing_queued for another Worker
       YES → [api] worker-assignment-write
  → [db] hearing_active
  → [ui:owner] Status Block (Worker identity visible: first name + county)

  → [ui:worker] Assignments Module · Hearing Modal (logistics, checklist, check-in instructions)
  → [HEARING TAKES PLACE]
  → [ui:worker] Assignments Module · Outcome Modal
  → [api] outcome-write (reduced / denied / continued, board's assessed value after reduction)
  → [db] hearing_reported
  → [ui:op] Exceptions queue / portfolio updated
```

**Evidence cutoff enforcement:** County packet validator in WF-09 checks evidence cutoff date before Worker accepts; late-submission risk flagged.

---

## Flow 4 — Reduce / invoice (hearing_reported or informal → invoiced → collected)

**Anchor:** Board outcome (or informal accept) triggers savings computation, invoice generation, and collection.

```
[db] hearing_reported OR informal-accept
  → [job] savings-computation
       measured_savings = (before_assessed − after_assessed) × county_millage_rate
  → [db] reduced (savings calculation stored as first-class fields)
  → [ui:owner] Reduction fact block
       (before/after values, millage rate, measured savings)
       (analysis-not-promise: "Trim invoices after documented reduction — no fee if denied")
       [IF escrowed] escrow timing note rendered

  → [job] invoice-generation
       trim_fee = measured_savings × contingency_pct_locked
       invoice record: parcel, tax year, before/after, millage, savings, contingency %, fee amount, due date, ACH/card auth reference
  → [db] invoiced
  → [ui:owner] Invoice fact block (trace lines, dispute door)
  → [ui:op] Collections queue (invoice row appears, ACH/card auth status, dunning cycle)

  → [job] ach-or-card-charge-attempt
       ↓ collected?
       YES → [db] collected
            → [ui:owner] Invoice fact: fee collected confirmation
            → [ui:op] Collections: row resolved
       NO  → [job] dunning-schedule (first notice → second notice → delinquent)
            → [ui:op] Collections: dunning cycle status updated

  [BRANCH: denied]
  → [db] denied
  → [ui:owner] Reduction fact: denial reason visible, no-fee reaffirmation
  → [ui:op] Post-ARB escalation queue (eligibility computed: RBA / SOAH / district court / attorney / no-escalation)
  → [ui:owner] Post-ARB remedies door (owner elects or closes)
```

**Collections law:** Money never moves through Trim. County reduces the bill. Trim invoices its cut. `invoiced` and `collected` are structurally separate timestamped records.

---

## Flow 5 — Recurring (collected → recurring → next cycle)

**Anchor:** After collection, parcel enrolls in standing appeal cycle. On next assessment cycle, detection re-fires.

```
[db] collected (or invoiced-outstanding — recurrence does not require collection first)
  → [db] recurring (annual re-detection enrolled chip visible to Owner)
  → [ui:owner] Status Block: "Annual re-detection enrolled" chip

  [NEXT ASSESSMENT CYCLE]
  → [job] detection-run (same parcel, new roll vintage)
       [BRANCH] over-assessment signal fires?
       YES →
            [BRANCH] POA still valid for new tax year?
            YES → create new protest case (parcel × new tax year) → GOTO Flow 1 at notified
            NO  → [ui:owner] POA renewal notice → GOTO Flow 2 (consent/authorize) for new POA
       NO  → [db] recurring (no action needed this cycle)
            → [ui:owner] Status Block: "Assessment cycle reviewed — no over-assessment detected this year"
```

**Recurrence is the retention moat:** Zero re-acquisition cost after first protest. Standing POA (where multi-year scope is valid) enables detection → protest without re-authorization.
