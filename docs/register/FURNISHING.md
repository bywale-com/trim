# Trim — Furnishing

Supporting UI abilities per persona with written Implementations. These are additive depth strips on existing surfaces; none alter Core flow. `status: planted` means built in CT today; `status: deferred` means written, not yet built.

Implementation writing convention: "On [Surface], you can now [ability]."

---

## Owner (58 items)

### Notice & Trust

**001 · Days-in-state** `trim-ct-owner-status` · planted  
*Problem:* Protest case duration was invisible; Owners had no elapsed-time fact beside status to gauge whether progress was normal.  
*Implementation:* On Status facts, you can now read days-in-state as a plain fact next to the current protest-spine state and locked contingency %.

**002 · Trust strip** `trim-ct-owner-trust` · planted  
*Problem:* Notice delivery matched documented impersonation patterns; Owners needed an upfront trust bundle before consent ticks, not fee-absence alone.  
*Implementation:* On Notice — trust strip, you can now read: no upfront fee; an invite to verify the parcel and assessment on the county's own site; and a non-affiliation disclaimer before consent ticks.

**003 · Analysis-not-promise framing** `trim-ct-owner-notice` · planted  
*Problem:* Notice copy that omitted "subject to appeal outcome" framing violated Texas TDLR ethics (shall not claim a specific result in solicitation) and reduced first-touch credibility.  
*Implementation:* On Notice — proof facts, you can now read analysis-not-promise framing: "our analysis indicates," "estimated excess," and "subject to appeal outcome" — never "you are over-assessed" or "we will lower your taxes."

**004 · County-site verification link** `trim-ct-owner-trust` · planted  
*Problem:* Owners could not independently confirm the assessed value from within the notice.  
*Implementation:* On Notice — trust strip, you can now open county-site verification link to the official appraisal district or county portal where the assessment is published.

**005 · Non-affiliation disclaimer** `trim-ct-owner-trust` · planted  
*Problem:* Notices from third-party firms are sometimes mistaken for government correspondence; explicit non-affiliation is required (Texas TDLR) and reduces scam skepticism.  
*Implementation:* On Notice — trust strip, you can now read the mandatory non-affiliation disclaimer: Trim is not the county, appraisal district, ARB, or tax office.

**006 · Parcel ID + county recap on consent** `trim-ct-owner-consent` · planted  
*Problem:* Consent screen did not repeat parcel reference; Owners had to scroll back to Notice to verify they were authorizing the right parcel.  
*Implementation:* On Consent ticks, you can now read parcel ID and county name recap matching Notice — proof facts before ticking.

**007 · Assessment-date label on Notice** `trim-ct-owner-notice` · deferred  
*Problem:* Assessment figure lacked the as-of date; Owners treated the record-year figure as current without knowing the data snapshot date.  
*Implementation:* On Notice — proof facts, you can now read the assessed value labeled as "assessed value as of [tax year] per [county CAD] — record dated [date]."

**008 · Valuation methodology badge on Notice** `trim-ct-owner-notice` · deferred  
*Problem:* Owners could not see whether the estimated excess was built on sales comps, equity/uniformity, or an income approach before consenting — relevant for commercial properties where methodology governs the appeal argument.  
*Implementation:* On Notice — proof facts, you can now read a Valuation methodology badge (Sales comps / Equity-uniformity / Income approach) beside the estimated excess figure.

**009 · Print Notice packet** `trim-ct-owner-notice`, `trim-ct-owner-trust` · deferred  
*Problem:* Board or treasury approval processes needed a printed copy of notice proof and trust copy together; screenshots were the only path.  
*Implementation:* On Case, you can now print Notice packet combining Notice — proof facts and Notice — trust strip as a single formatted sheet.

**010 · Export Notice as PDF** `trim-ct-owner-notice` · deferred  
*Problem:* Records teams saved screenshots because Notice had no export path.  
*Implementation:* On Notice — proof facts, you can now export a PDF of the proof block including parcel ID, county, assessed value, evidence-supported value, and estimated excess.

### Consent & Authorize

**011 · Contingency % locked fact** `trim-ct-owner-authorize`, `trim-ct-owner-status` · planted  
*Problem:* Fee percentage could read as negotiable at authorize time; Owners needed the signed percentage locked and repeated as a confirmed fact after filing.  
*Implementation:* On Authorize block, you can now read contingency % shown as pre-set and locked at signing. On Status facts, you can now read the same locked contingency % as a plain fact throughout the protest.

**012 · Before/after fee dollar example** `trim-ct-owner-authorize` · deferred  
*Problem:* Some jurisdictions require pre/post dollar fee estimates at authorization; Authorize block showed percentage only, leaving Owners without a dollar reference.  
*Implementation:* On Authorize block, you can now read a before/after fee dollar example computed from estimated excess and locked contingency %, labeled as illustrative only.

**013 · Fee basis footnote** `trim-ct-owner-authorize` · deferred  
*Problem:* Percentage disclosure could imply a net-recovery-only framing without the gross-reduction basis stated, creating ambiguity when the county applies partial reductions.  
*Implementation:* On Authorize block, you can now read fee basis footnote: contingency applies to the measured first-year reduction in assessed value multiplied by the applicable tax rate.

**014 · Signer title capture** `trim-ct-owner-authorize` · deferred  
*Problem:* Authorization records lacked officer title beside name; corporate compliance files needed a title to confirm the signer's standing for the owning entity.  
*Implementation:* On Authorize block, you can now enter signer title (e.g. Managing Member, President, Controller) stored alongside the Appointment of Agent record.

**015 · Download signed Appointment of Agent PDF** `trim-ct-owner-authorize` · deferred  
*Problem:* Corporate records required a retained copy of the executed Appointment of Agent after e-signing; no download was offered.  
*Implementation:* On Authorize block, after e-signing you can now download signed Appointment of Agent PDF for your corporate records.

**016 · Print Authorize summary** `trim-ct-owner-authorize` · deferred  
*Problem:* Dual-signer organizations needed a paper summary before an officer e-signed so a second approver could sign off.  
*Implementation:* On Authorize block, you can now print Authorize summary before completing e-sign, showing parcel ID, county, contingency %, and fee basis footnote.

**017 · Tax treatment door on consent** `trim-ct-owner-consent` · deferred  
*Problem:* Consent ticks carried no tax-timing context; Owners signed without a neutral disclosure of the two-period tax event (reduction in one year, Trim invoice possibly in another). *(SME: tax-accounting-treatment tax-01–tax-03)*  
*Implementation:* On Consent ticks, you can now open Tax treatment door with gross-vs-net framing, the two-tax-period timing note, and an explicit "ask your accountant" disclaimer — Trim does not advise.

**018 · Tax timing disclosure line on consent** `trim-ct-owner-consent` · deferred  
*Problem:* The two-tax-period event (reduction year and invoice year may differ) was unstated at consent time.  
*Implementation:* On Consent ticks, you can now read a tax timing disclosure line: "Reduction and Trim's fee may fall in different tax years — confirm treatment with your accountant."

**019 · Entity identity confirmation on consent** `trim-ct-owner-consent` · deferred  
*Problem:* Wrong-entity consent was possible without an explicit identity match step before the dollar detail unlocks.  
*Implementation:* On Consent ticks, you can now confirm entity identity (entity name + parcel situs match) before dollar detail and authorize unlock.

**020 · Consent snapshot for audit** `trim-ct-owner-consent` · deferred  
*Problem:* Post-authorization disputes lacked an immutable copy of the tick text the Owner accepted.  
*Implementation:* On Consent ticks, after authorization you can now download a Consent snapshot PDF timestamped at authorize with the full tick text as displayed.

### Upload

**021 · Upload checklist with progress** `trim-ct-owner-upload` · planted  
*Problem:* Optional income docs were listed without an aggregate completion signal; Owners couldn't tell at a glance whether the evidence package was complete.  
*Implementation:* On Upload docs block, you can now see upload checklist progress with item count and completion percentage.

**022 · Upload document preview inline** `trim-ct-owner-upload` · deferred  
*Problem:* Owners re-downloaded each upload to confirm the correct file was attached.  
*Implementation:* On Upload docs block, you can now preview each uploaded document inline without downloading.

**023 · Upload missing-document highlight** `trim-ct-owner-upload` · deferred  
*Problem:* Incomplete evidence packages were submitted because missing items were not visually distinct from optional ones.  
*Implementation:* On Upload docs block, you can now see missing items highlighted until satisfied.

**024 · Redaction guidance door** `trim-ct-owner-upload` · deferred  
*Problem:* Owners uploading rent rolls and P&L statements had no guidance on acceptable redaction depth for ARB evidence packages. *(SME: valuation-mass-appraisal val-14–val-15; appraisal-district-board brd-21)*  
*Implementation:* On Upload docs block, you can now open a Redaction guidance door explaining which fields must be unredacted for ARB submission and which can be masked.

**025 · Income approach value door** `trim-ct-owner-upload` · deferred  
*Problem:* Owners didn't understand why the optional rent roll and P&L uploads mattered — the link between income docs and a stronger appeal argument was not stated.  
*Implementation:* On Upload docs block, you can now open an Income approach value door explaining: with rent roll + trailing P&L, Trim can build an income-approach argument alongside equity comps, which often produces a larger reduction for commercial and multifamily parcels.

**026 · Print upload manifest** `trim-ct-owner-upload` · deferred  
*Problem:* Owners sending supplemental physical evidence packets had no manifest to include.  
*Implementation:* On Upload docs block, you can now print an Upload manifest listing uploaded files, parcel ID, and case reference for physical records.

### Status & Hearing

**027 · "Trim invoices after reduction" education fact** `trim-ct-owner-reduction` · planted  
*Problem:* Owners were uncertain when Trim would invoice, creating anxiety at reduction about whether Trim had already charged.  
*Implementation:* On Reduction fact, you can now read: "Trim invoices after the documented reduction is recorded by the county — no charge if no reduction."

**028 · Annual re-detect enrolled chip** `trim-ct-owner-status` · planted  
*Problem:* Annual monitoring enrollment was invisible after authorize; Owners had no quiet confirmation the recurrence loop was set.  
*Implementation:* On Status facts, you can now see a quiet Annual re-detection enrolled chip after authorization confirming the parcel is in the standing appeal cycle.

**029 · Informal offer visible on status** `trim-ct-owner-status` · deferred  
*Problem:* When the appraisal district offered an informal reduction, Owners could not see the offer amount from the case status — it was internal to Operator only.  
*Implementation:* On Status facts, when an informal review offer has been extended you can now read the appraisal district's offer (assessed value reduction to $X) as a fact.

**030 · Hearing logistics on status** `trim-ct-owner-status` · deferred  
*Problem:* hearing-queued state showed no date, board name, venue, or appearance mode; Owners had no way to plan around the hearing.  
*Implementation:* On Status facts, when a formal hearing is scheduled you can now read date, time, ARB panel / board name, venue, and appearance mode (in-person / remote).

**031 · Worker identity on hearing-active** `trim-ct-owner-status` · deferred  
*Problem:* During hearing-active state, the Owner could not see who was appearing on their behalf.  
*Implementation:* On Status facts, during hearing-active state you can now read the assigned Worker's first name and county coverage as a trust signal.

**032 · Evidence prep substatus** `trim-ct-owner-status` · deferred  
*Problem:* evidence_prep state was opaque — Owners couldn't tell whether Trim was still building the packet or whether it was ready for informal.  
*Implementation:* On Status facts, during evidence_prep you can now read which evidence components are built: comps ✓ / uniformity grid ✓ / income approach (pending docs).

**033 · Status-change email alert** `trim-ct-owner-status` · deferred  
*Problem:* Owners checked manually for hearing scheduling and reductions instead of receiving state-change signal.  
*Implementation:* On Status facts, you can now opt in to email notification when the protest case changes admission state.

**034 · Weekly portfolio digest** `trim-ct-owner-portfolio` · deferred  
*Problem:* Owners with multiple parcels missed stale or action-needed cases without a periodic portfolio digest.  
*Implementation:* On Portfolio, you can now opt in to a weekly digest email summarizing open cases, action-needed items, and hearings within the next 14 days.

**035 · Withdraw door** `trim-ct-owner-status` · deferred  
*Problem:* Owners could not initiate withdrawal from an authorized in-flight protest without contacting Operator support.  
*Implementation:* On Status facts, you can now open Withdraw door to request cancellation of an in-flight protest case with a structured reason picker.

### Reduction & Invoice

**036 · Reduction calculation fact** `trim-ct-owner-reduction` · planted  
*Problem:* Owners saw a raw savings figure without the formula tying it to the county's documented assessment reduction and millage rate.  
*Implementation:* On Reduction fact, you can now read the savings calculation: (before-reduction assessed value − after-reduction assessed value) × county millage rate = estimated first-year property tax reduction.

**037 · Export reduction as CSV** `trim-ct-owner-reduction` · deferred  
*Problem:* Tax and finance reviews required savings figures in spreadsheet form for reconciliation.  
*Implementation:* On Reduction fact, you can now export the documented savings row as CSV including before/after values, millage rate, tax year, and case reference.

**038 · Print reduction + invoice together** `trim-ct-owner-reduction`, `trim-ct-owner-invoice` · deferred  
*Problem:* AP processing required a combined sheet showing the documented savings and Trim's fee; the two facts lived in separate blocks with no combined print path.  
*Implementation:* On Case, you can now print Reduction + Invoice summary combining documented savings and Trim's contingency fee on one sheet.

**039 · Invoice dispute door** `trim-ct-owner-invoice` · deferred  
*Problem:* Fee disputes had no structured in-product path; Owners emailed the Operator to contest an invoice amount.  
*Implementation:* On Invoice fact, you can now open Invoice dispute door with reason picker (calculation dispute / savings not yet received / other) and case reference recap.

**040 · Print invoice for AP** `trim-ct-owner-invoice` · deferred  
*Problem:* Accounts payable records needed a formatted invoice sheet; the Invoice fact block had no print layout.  
*Implementation:* On Invoice fact, you can now print invoice sheet showing fee amount, due date, measured savings basis, and Trim's contact details for AP records.

**041 · W-9 / 1099 guidance door** `trim-ct-owner-invoice` · deferred  
*Problem:* AP teams lacked in-product guidance on how to classify Trim's contingency fee for 1099 or W-9 reporting. *(SME: tax-accounting-treatment tax-11–tax-13)*  
*Implementation:* On Invoice fact, you can now open W-9 / 1099 guidance door with vendor-classification copy and a prompt to obtain Trim's W-9.

**042 · Invoice-to-case trace lines** `trim-ct-owner-invoice` · deferred  
*Problem:* The contingency fee could not be traced to the specific authorization date, documented savings, and tax year in one view.  
*Implementation:* On Invoice fact, you can now read trace lines tying the invoice to: parcel ID, tax year, authorize date, measured savings calculation, and county reference.

**043 · Escrow / lender note on reduction** `trim-ct-owner-reduction` · deferred  
*Problem:* For mortgage-encumbered parcels, the reduction may flow through the servicer as an escrow adjustment rather than direct cash; Owners were not told to expect this timing. *(CROSS-CUTTING #9)*  
*Implementation:* On Reduction fact, when a lender-reserve or escrow flag is present you can now read an escrow timing note: "Your reduction may appear as a lower future escrow payment rather than an immediate refund — confirm with your servicer."

**044 · No-fee-on-denial reaffirmation** `trim-ct-owner-reduction` · deferred  
*Problem:* After a denial, some Owners assumed Trim would still invoice; the no-fee-on-loss guarantee needed restatement at the denial outcome.  
*Implementation:* On Reduction fact, when the protest state is denied you can now read: "No reduction, no fee. Trim's contingency applies only to documented savings."

### Portfolio & Case management

**045 · Filter cases by protest state** `trim-ct-owner-portfolio` · deferred  
*Problem:* Portfolio listed all parcels in one flat index; Owners opened each case to see whether action was needed.  
*Implementation:* On Portfolio, you can now filter cases by protest state (notified / authorized / evidence_prep / hearing_queued / reduced / invoiced).

**046 · Filter cases by county** `trim-ct-owner-portfolio` · deferred  
*Problem:* Multi-county portfolios had no jurisdiction filter; Owners scanned all parcels to find a specific county's cases.  
*Implementation:* On Portfolio, you can now filter cases by county.

**047 · Search cases by parcel ID or address** `trim-ct-owner-portfolio` · deferred  
*Problem:* Owners reconciling county mail had no in-app search keyed to parcel ID or property address.  
*Implementation:* On Portfolio, you can now search cases by parcel ID or property address.

**048 · Sort portfolio columns** `trim-ct-owner-portfolio` · deferred  
*Problem:* Portfolio row order was fixed; Owners could not reorder by estimated savings, days-in-state, or county.  
*Implementation:* On Portfolio, you can now sort rows by estimated savings, last state change, days-in-state, or county.

**049 · Export portfolio to CSV** `trim-ct-owner-portfolio` · deferred  
*Problem:* Finance and treasury reviews needed a portable portfolio extract without retyping facts.  
*Implementation:* On Portfolio, you can now export the visible row set as CSV including parcel ID, county, protest state, contingency %, and estimated savings.

**050 · Case activity timeline** `trim-ct-owner-status` · deferred  
*Problem:* Owners reconstructed protest history from scattered status facts without a unified timeline.  
*Implementation:* On Case, you can now view Case activity timeline listing admission state changes and key events (authorize date, evidence built, hearing scheduled, outcome reported) in chronological order.

**051 · Audit log glance on Case** `trim-ct-owner-status` · deferred  
*Problem:* Legitimacy disputes lacked an Owner-visible record of Trim's actions under the Appointment of Agent.  
*Implementation:* On Case, you can now open Audit log glance listing Trim's actions under the Appointment of Agent for that specific protest case (filings submitted, hearings dispatched, informal contact logged).

**052 · Share read-only case link with counsel** `trim-ct-owner-status`, `trim-ct-owner-reduction` · deferred  
*Problem:* Legal review required sharing screenshots because counsel could not view protest case facts read-only.  
*Implementation:* On Case, you can now share a read-only link scoped to Notice — proof facts, Status facts, and evidence status — viewable without Owner login authority.

**053 · Share read-only case link with accountant** `trim-ct-owner-reduction`, `trim-ct-owner-invoice` · deferred  
*Problem:* Accountants re-requested Reduction fact and Invoice fact details for tax preparation because no read-only share existed.  
*Implementation:* On Case, you can now share a read-only link scoped to Reduction fact, Invoice fact, and tax year — viewable by accountants without Owner login authority.

**054 · Copy parcel ID to clipboard** `trim-ct-owner-notice` · deferred  
*Problem:* Owners called the appraisal district and had to manually transcribe the parcel ID from the notice.  
*Implementation:* On Notice — proof facts, you can now copy parcel ID to clipboard for use with the county portal or phone support.

**055 · Owner memo on case** `trim-ct-owner-status` · deferred  
*Problem:* Internal context (sale negotiations, lender requests, CPA instructions) lived in email threads outside the protest record.  
*Implementation:* On Case, you can now add an Owner memo note visible only to your entity login — not shared with Trim or the Operator.

**056 · Decline reason picker** `trim-ct-owner-decline` · deferred  
*Problem:* Decline action had no structured reason capture for Owner's internal records.  
*Implementation:* On Decline block, you can now pick a decline reason code (want to self-file / cost concern / already resolved / other) before confirming.

**057 · Decline confirmation receipt** `trim-ct-owner-decline` · deferred  
*Problem:* Owners had no retained proof a case was declined before authorization.  
*Implementation:* On Decline block, after confirm you can now download a decline confirmation receipt with timestamp and parcel ID.

**058 · Post-authorize steps checklist** `trim-ct-owner-status`, `trim-ct-owner-upload` · deferred  
*Problem:* Owners did not know what happened after signing — whether to upload docs, wait, or do anything else.  
*Implementation:* On Case, after Authorize block completes you can now read a post-authorize steps checklist: upload income docs (optional, improves case) → Trim builds evidence packet → informal review → formal hearing if needed.

---

## Operator (50 items)

### Portfolio & Client management

**001 · Portfolio glance** `trim-ct-op-portfolio` · planted  
*Problem:* Operators needed one roster view of all Owner accounts and where each protest case sat in the admission spine.  
*Implementation:* On Clients, you can now scan the portfolio table — owner entity, county, parcel count, admission state, contingency %, and days-in-state — across the whole book.

**002 · Filter portfolio by county** `trim-ct-op-portfolio` · deferred  
*Problem:* Multi-county books had no county filter; Operators scanned all clients to find county-specific queues.  
*Implementation:* On Clients, you can now filter rows by county.

**003 · Filter portfolio by protest state** `trim-ct-op-portfolio` · deferred  
*Problem:* Operators opened each case to find the ones stuck or needing work.  
*Implementation:* On Clients, you can now filter rows by protest admission state.

**004 · Filter portfolio by property type** `trim-ct-op-portfolio` · deferred  
*Problem:* Small commercial and multifamily cases needed separate queues; the portfolio was undifferentiated by property type.  
*Implementation:* On Clients, you can now filter rows by property type (small commercial / multifamily).

**005 · Cases approaching deadline alert** `trim-ct-op-portfolio` · deferred  
*Problem:* Cases where the appeal filing window was closing in fewer than 14 days had no surface-level urgency signal.  
*Implementation:* On Clients, you can now see a deadline alert badge on rows where the county appeal window closes within 14 days.

**006 · POA expiration alert** `trim-ct-op-portfolio` · deferred  
*Problem:* Appointments of Agent without explicit re-authorization for the next tax year were not surfaced before the cycle opened.  
*Implementation:* On Clients, you can now see a POA expiration badge on rows where the Appointment of Agent will expire before the next assessment cycle.

**007 · Search by parcel ID / address** `trim-ct-op-portfolio` · deferred  
*Problem:* Operators reconciling county mail had no portfolio-wide parcel ID or address search.  
*Implementation:* On Clients, you can now search by parcel ID or property address across the entire book.

**008 · Sort portfolio columns** `trim-ct-op-portfolio` · deferred  
*Problem:* Row order was fixed; Operators could not prioritize by savings opportunity or days-in-state.  
*Implementation:* On Clients, you can now sort rows by estimated savings, county, admission state, or days-in-state.

**009 · Export portfolio as CSV** `trim-ct-op-portfolio` · deferred  
*Problem:* Collections reviews and partner reporting required extractable portfolio data.  
*Implementation:* On Clients, you can now export the visible row set as CSV including owner entity, county, parcel ID, state, and contingency %.

**010 · OLG manual onboard** `trim-ct-op-portfolio` · deferred  
*Problem:* Jurisdictions or parcels not yet in the ALG pipeline required Operator-Led Growth onboarding; no manual entry path existed.  
*Implementation:* On Clients, you can now open OLG Onboard flow to manually enter an Owner entity + parcel + evidence into the book for counties not yet in ALG detection.

### Jurisdiction & Licensure

**011 · PTC capacity column** `trim-ct-op-jurisdiction` · planted  
*Problem:* Texas PTC capacity (named human count, senior PTC sponsor, max-10 cap) was not visible in the jurisdiction table; Operators couldn't confirm capacity before activating a county.  
*Implementation:* On Jurisdiction & licensure, you can now read PTC capacity column beside each Texas county row: registered PTC count, senior sponsor, and headroom before the max-10 cap.

**012 · Fee cap column** `trim-ct-op-jurisdiction` · planted  
*Problem:* Fee-cap limits lived outside the desk — Operators couldn't confirm contingency compliance while reviewing county rows.  
*Implementation:* On Jurisdiction & licensure, you can now read fee cap % beside each county row showing the jurisdiction-specific maximum contingency allowed.

**013 · Appeal window calendar** `trim-ct-op-jurisdiction` · planted  
*Problem:* Appeal window dates lived in spreadsheets; Operators had no in-desk calendar showing when each county's protest window opened and closed.  
*Implementation:* On Jurisdiction & licensure, you can now read the appeal window open and close dates for each active county row.

**014 · Days-to-window countdown** `trim-ct-op-jurisdiction` · deferred  
*Problem:* Operators needed to see how many days remained before the next appeal window opened for capacity planning.  
*Implementation:* On Jurisdiction & licensure, you can now read a days-to-window countdown beside each county row, color-coded when fewer than 30 days remain.

**015 · E-file capability badge** `trim-ct-op-jurisdiction` · deferred  
*Problem:* County filing capability (e-file / mail-original / in-person) was not surfaced in the jurisdiction table, forcing Operators to look it up elsewhere.  
*Implementation:* On Jurisdiction & licensure, you can now read an e-file capability badge per county row (digital / mail-original / in-person-only).

**016 · Copy gate block reason** `trim-ct-op-jurisdiction`, `trim-ct-op-exceptions` · deferred  
*Problem:* Operators could not see which notices were blocked by the pre-notice copy gate or why — jurisdiction block vs data-quality block vs solicitation threshold not met. *(CROSS-CUTTING #1+#2)*  
*Implementation:* On Exceptions, you can now read copy gate block reason per blocked case: jurisdiction-missing-licensure / unsupported-quantified-claim / solicitation-threshold-not-met / data-staleness.

**017 · Scheduled outreach batch** `trim-ct-op-jurisdiction` · deferred  
*Problem:* Outreach fired immediately when detection cleared; Operators could not schedule a batch to align with a county's appeal window open date.  
*Implementation:* On Jurisdiction & licensure, you can now set a scheduled outreach date per county so ALG notices fire when the window opens, not before.

**018 · PTC assignment on case row** `trim-ct-op-portfolio` · deferred  
*Problem:* Operators could not see which named PTC representative was assigned to a specific case from the portfolio table.  
*Implementation:* On Clients, you can now see the assigned PTC representative name on each case row in the protest-active states.

### Exception queue

**019 · Honest empties** `trim-ct-op-exceptions` · planted  
*Problem:* An empty Exception queue looked like a broken table; Operators couldn't tell whether automation was idle or the view had failed to load.  
*Implementation:* On Exception queue, you can now see "No exceptions right now — all cases clear." when every case in the book has cleared procedural review.

**020 · Exception reason taxonomy** `trim-ct-op-exceptions` · planted  
*Problem:* Stuck cases collapsed to a generic blocked label; Operators could not tell jurisdiction-block from data-quality-block from filing-rejection.  
*Implementation:* On Exception queue, you can now read the specific exception reason code (blocked-jurisdiction / filing-rejected / evidence-gap / data-stale / copy-gate-fail) per exception row.

**021 · Case audit glance inline** `trim-ct-op-exceptions`, `trim-ct-op-audit` · planted  
*Problem:* Operators had to leave Exception queue and hunt Audit log to see what happened before a case got stuck.  
*Implementation:* On Exception queue, you can now expand Case audit glance inline — actor, timestamp, and action — without opening Audit log.

**022 · Operator annotation on exception** `trim-ct-op-exceptions` · deferred  
*Problem:* Operators resolved exceptions without a structured internal note; root cause knowledge was lost with each resolution.  
*Implementation:* On Exception queue, you can now add an Operator annotation per exception case before resolving, stored in audit log.

**023 · Bulk select exceptions** `trim-ct-op-exceptions` · deferred  
*Problem:* Batch exceptions from a single county data outage required one-by-one resolution; Operators had no bulk action.  
*Implementation:* On Exception queue, you can now multi-select exception rows sharing a reason code and bulk-apply Requeue or Dismiss with one confirmation.

**024 · DLQ replay action** `trim-ct-op-exceptions` · deferred  
*Problem:* Dead-lettered jobs (failed evidence prep, failed filing submission) required direct engineering intervention to replay.  
*Implementation:* On Exception queue, for DLQ-backed exception rows you can now trigger Replay action that re-queues the job with current data and logs the replay event.

### Audit

**025 · Audit log export as CSV** `trim-ct-op-audit` · deferred  
*Problem:* Licensure audits and legal review required extractable audit data; the log was viewable in-product only.  
*Implementation:* On Audit log, you can now export the audit trail for a specified date range as CSV including actor, event type, case reference, and timestamp.

**026 · Detection lineage on case** `trim-ct-op-audit` · deferred  
*Problem:* Operators could not trace which detection run (date, roll version, valuation model variant) produced a specific notice.  
*Implementation:* On Audit log, for each case you can now read detection lineage: detection run ID, roll-import date, valuation methodology, and confidence threshold cleared.

**027 · Print case audit trail** `trim-ct-op-audit` · deferred  
*Problem:* Internal legal reviews required a printed case trail for authority under the Appointment of Agent.  
*Implementation:* On Audit log, you can now print the full audit trail for a single protest case as a formatted sheet.

### Worker dispatch

**028 · Worker dispatch queue** `trim-ct-op-worker-dispatch` · planted  
*Problem:* Hearing-queued cases awaiting Worker pickup were not visible in one place; Operators managed dispatch via external tools.  
*Implementation:* On Worker dispatch, you can now see all hearing-queued cases by county with hearing date, board name, appearance mode, and packet status.

**029 · Worker availability indicator** `trim-ct-op-worker-dispatch` · deferred  
*Problem:* Operators dispatching Workers had no signal for availability status — Workers might be overbooked or unavailable without that being visible.  
*Implementation:* On Worker dispatch, you can now see each Worker's availability badge (available / assigned / at capacity) beside their county coverage.

**030 · No-show / cancellation log** `trim-ct-op-worker-dispatch` · deferred  
*Problem:* Workers with reliability patterns could not be identified before dispatch; no-shows and cancellations were not tracked per Worker.  
*Implementation:* On Worker dispatch, you can now open Worker reliability log showing no-show and cancellation history per Worker for the current season.

**031 · Hearing outcome telemetry** `trim-ct-op-worker-dispatch` · deferred  
*Problem:* Operators had no aggregate view of hearing outcome rates by county and property type to guide argument strategy.  
*Implementation:* On Worker dispatch, you can now open Hearing outcome telemetry with reduction rates by county, property type, and hearing mode (informal / ARB / remote) for closed cases.

**032 · ARB hearing calendar** `trim-ct-op-worker-dispatch` · deferred  
*Problem:* Operators could not see upcoming ARB hearing schedule windows by county for capacity planning.  
*Implementation:* On Worker dispatch, you can now open ARB hearing calendar by county with scheduled hearing blocks for the current appeal season.

### Collections

**033 · Collections queue** `trim-ct-op-collections` · planted  
*Problem:* Invoiced-not-collected cases had no dedicated operator surface; collections actions were unmanaged.  
*Implementation:* On Collections, you can now see all invoiced-not-collected cases with owner entity, invoice amount, days-outstanding, and dunning cycle status.

**034 · Dunning cycle status** `trim-ct-op-collections` · planted  
*Problem:* Operators could not tell which dunning cycle a case was in (first notice / second notice / delinquent) at a glance.  
*Implementation:* On Collections, you can now read dunning cycle status per invoice row: first notice / second notice / delinquent / disputed.

**035 · ACH/card authorization status** `trim-ct-op-collections` · deferred  
*Problem:* Collection success depended on whether ACH or card was still authorized; expired payment methods were not surfaced in collections.  
*Implementation:* On Collections, you can now read ACH/card authorization status per invoice row: authorized / expired / failed / none.

**036 · Invoice dispute flag** `trim-ct-op-collections` · deferred  
*Problem:* Owner invoice disputes arrived via email without a structured in-product record tying the dispute to the invoice and reduction fact.  
*Implementation:* On Collections, you can now see invoice dispute flag on rows where the Owner has opened a dispute, with reason code and case reference.

**037 · Bulk confirm to collections** `trim-ct-op-collections` · deferred  
*Problem:* Batches of reduced cases had to be individually transitioned to invoiced; Operators had no bulk action.  
*Implementation:* On Collections, you can now multi-select reduced-confirmed rows and bulk-trigger invoice generation with one confirmation.

**038 · Export fee summary as CSV** `trim-ct-op-collections`, `trim-ct-op-audit` · deferred  
*Problem:* Collections audit required a portable extract of contingency %, documented savings, and Trim fee per client.  
*Implementation:* On Collections, you can now export fee calculation summary as CSV: owner entity, parcel, contingency %, documented savings, Trim fee, invoice date, collection status.

**039 · Post-ARB escalation queue** `trim-ct-op-exceptions` · deferred  
*Problem:* Cases denied at ARB with eligible escalation paths (binding arbitration, SOAH, district court) had no dedicated surface; Operators tracked escalation externally. *(CROSS-CUTTING #10)*  
*Implementation:* On Exception queue, you can now filter to post-ARB escalation rows showing eligibility (RBA / SOAH / district court / attorney-handoff), deadline, deposit requirement, and current election status.

### County data health

**040 · Roll freshness badge** `trim-ct-op-county-data` · planted  
*Problem:* Stale roll imports produced indefensible notices; Operators could not see data age at a glance.  
*Implementation:* On County data health, you can now read a roll freshness badge per county: days since last successful roll import and CAMA version tag.

**041 · CAMA version log** `trim-ct-op-county-data` · deferred  
*Problem:* CAMA schema changes could silently break parcel parsing; there was no in-product version history to diagnose detection anomalies.  
*Implementation:* On County data health, you can now open CAMA version log per county with import date, schema version, and parse-error count.

**042 · Comp coverage indicator** `trim-ct-op-county-data` · deferred  
*Problem:* Evidence packages with thin comp coverage produced weak equity arguments; Operators had no comp coverage signal per county.  
*Implementation:* On County data health, you can now read comp coverage indicator per county: number of qualifying comps within the evidence radius and median comp vintage.

**043 · Detection signal age** `trim-ct-op-county-data` · deferred  
*Problem:* Unnotified cases accumulated where detection had fired but outreach was deferred; there was no signal age display.  
*Implementation:* On County data health, you can now read detection signal age: days since the over-assessment signal was computed but not yet served as a notice.

**044 · PIA fallback status** `trim-ct-op-county-data` · deferred  
*Problem:* Counties that do not publish complete rolls require PIA/FOIA requests; Operators had no fallback status or cost visible per county.  
*Implementation:* On County data health, you can now read PIA fallback status per county: last request date, fulfillment status, and estimated cost.

**045 · Evidence approach distribution** `trim-ct-op-county-data` · deferred  
*Problem:* Operators could not see the split of equity-only vs income-approach vs sales-comps evidence across the county book, which matters for scaling income-doc requests.  
*Implementation:* On County data health, you can now view evidence approach distribution by county: proportion of cases using equity-only / income-approach / sales-comps arguments.

**046 · Valuation confidence histogram** `trim-ct-op-county-data` · deferred  
*Problem:* Notice quality varied by county but confidence score distribution was not visible; Operators sent low-confidence notices that failed the copy gate without knowing the distribution.  
*Implementation:* On County data health, you can now open valuation confidence histogram per county showing the spread of confidence scores across served and unserved parcels.

**047 · Sort county health table** `trim-ct-op-county-data` · deferred  
*Problem:* County data health table was sorted by county name only; Operators could not surface counties with the most stale data or lowest comp coverage.  
*Implementation:* On County data health, you can now sort the table by roll freshness, comp coverage, or detection signal age.

### Settings & misc

**048 · Licensed representative identity visible** `trim-ct-op-jurisdiction` · deferred  
*Problem:* Licensed PTC names on filings were not surfaced per case from the Operator desk; Operators tracked them in external spreadsheets. *(CROSS-CUTTING #3)*  
*Implementation:* On Jurisdiction & licensure, for each Texas county row you can now expand to see the named licensed PTC representatives registered to that county, their senior sponsor, and current CE/renewal status.

**049 · Notice suppression visible** `trim-ct-op-exceptions` · deferred  
*Problem:* Operators could not see which parcels had notices suppressed by the copy gate and why, making it impossible to debug detection-to-activation drop-off.  
*Implementation:* On Exception queue, you can now filter to suppressed notices with suppression reason: jurisdiction-block / data-quality / solicitation-threshold / attorney-required.

**050 · Escrow / lender flag per client** `trim-ct-op-portfolio` · deferred  
*Problem:* Servicer-escrowed and lender-reserve cases needed different invoice-evidence treatment; they were not flagged in the portfolio. *(CROSS-CUTTING #9)*  
*Implementation:* On Clients, you can now see an escrow/lender badge on portfolio rows where the reduction benefit is expected to flow through a servicer rather than direct client cash.

---

## Worker (28 items)

### Queue & assignment

**001 · Evidence strength indicator** `trim-ct-worker-packet` · deferred  
*Problem:* Workers could not tell before accepting whether the case had a strong or weak evidence package — thin comp coverage meant a harder hearing with no additional preparation time.  
*Implementation:* On Case packet preview, you can now read an evidence strength indicator: comps count / equity grid strength / income approach present (yes / no) / comparable-sale count.

**002 · Property type badge on queue** `trim-ct-worker-queue` · deferred  
*Problem:* Workers with commercial-only expertise had to open each packet to confirm property type before accepting.  
*Implementation:* On Hearing queue, you can now read a property type badge (small commercial / multifamily) per assignment row before opening the packet.

**003 · Income approach flag before accept** `trim-ct-worker-packet`, `trim-ct-worker-assignment` · deferred  
*Problem:* Income-approach packets require different preparation; Workers needed to know the argument type before accepting to plan their preparation time.  
*Implementation:* On Case packet preview, you can now see whether an income-approach argument is built into the packet alongside equity comps, before accepting the assignment.

**004 · Filter queue by county** `trim-ct-worker-queue` · deferred  
*Problem:* Workers covering multiple counties had a flat queue with no county filter.  
*Implementation:* On Hearing queue, you can now filter rows by county.

**005 · Filter queue by property type** `trim-ct-worker-queue` · deferred  
*Problem:* Workers with specific property type experience could not filter by type before selecting assignments.  
*Implementation:* On Hearing queue, you can now filter rows by property type (small commercial / multifamily).

**006 · Queue sorted by hearing date** `trim-ct-worker-queue` · planted  
*Problem:* Queue rows were not ordered by urgency (nearest hearing date first); Workers could accidentally pick up a hearing after missing a closer one.  
*Implementation:* On Hearing queue, assignments are sorted by hearing date ascending so the nearest hearing always appears first.

**007 · New-assignment alert opt-in** `trim-ct-worker-queue` · deferred  
*Problem:* Workers checked the queue manually instead of receiving signal when new assignments appeared in their coverage counties.  
*Implementation:* On Hearing queue, you can now opt in to email or push notification when a new hearing assignment becomes available in your registered counties.

**008 · Calendar view of assignments** `trim-ct-worker-queue` · deferred  
*Problem:* Workers planning schedules could not see upcoming assigned hearings in calendar form — the queue was a flat list.  
*Implementation:* On Hearing queue, you can now switch to calendar view showing accepted assignments by hearing date across all counties.

### Packet & preparation

**009 · Equity argument summary** `trim-ct-worker-packet` · planted  
*Problem:* Workers arrived at hearings without a quick-scan equity summary; they had to read through the full comp table to identify the opening position.  
*Implementation:* On Case packet, you can now read Equity argument summary: subject assessed value, median comparable assessed value, estimated equity gap, and the top three comps sorted by proximity.

**010 · Income approach summary** `trim-ct-worker-packet` · deferred  
*Problem:* When an income approach was built, Workers had no condensed summary and had to reconstruct the cap rate argument from raw NOI and rate inputs.  
*Implementation:* On Case packet, when an income approach is present you can now read Income approach summary: market rent (per unit or per SF), operating expense ratio, cap rate, indicated value, and excess over indicated value.

**011 · Board-specific hearing script** `trim-ct-worker-packet` · deferred  
*Problem:* County ARBs have different procedural expectations; Workers used a generic opening without board-specific coaching.  
*Implementation:* On Case packet, you can now open Board-specific hearing script for the assigned county / ARB section including opening statement template, procedural notes, and common objection responses.

**012 · Authority proof block** `trim-ct-worker-packet` · planted  
*Problem:* Workers arrived without easy access to Form 50-162 (or equivalent) and could not quickly confirm authority status at check-in.  
*Implementation:* On Case packet, you can now open Authority proof block showing Appointment of Agent reference number, licensed PTC name, and county registration confirmation.

**013 · Prior protest history stub** `trim-ct-worker-packet` · deferred  
*Problem:* Workers did not know whether the parcel had protested in prior years and what the outcome was; relevant for understanding the board's baseline expectation.  
*Implementation:* On Case packet, you can now read prior protest history stub: tax year, method (equity / income), outcome (reduced / denied), and reduction % if available.

**014 · County typical reduction range** `trim-ct-worker-packet` · deferred  
*Problem:* Workers had no calibration for what the county's ARB typically awards on similar property types; this influenced opening position and settlement threshold.  
*Implementation:* On Case packet, you can now read County typical reduction range: median ARB reduction % for comparable cases at this county and property type in the prior season.

**015 · Download packet PDF offline** `trim-ct-worker-packet` · deferred  
*Problem:* Hearing rooms in some counties have unreliable mobile data; Workers could not access the packet offline.  
*Implementation:* On Case packet, you can now download packet PDF for offline use including equity grid, income summary (if present), authority proof, and county checklist.

### Hearing logistics

**016 · Pre-hearing checklist** `trim-ct-worker-hearing` · planted  
*Problem:* Workers arrived at hearings having skipped preparation steps; there was no structured checklist gating acceptance.  
*Implementation:* On Hearing logistics, you can now complete a pre-hearing checklist: authority proof reviewed ✓ / evidence reviewed ✓ / check-in path confirmed ✓ / appearance mode confirmed (in-person / remote) ✓.

**017 · County check-in instructions** `trim-ct-worker-hearing` · planted  
*Problem:* County-specific check-in procedures (security desk location, sign-in sheet, remote dial-in code) were not bundled with hearing logistics.  
*Implementation:* On Hearing logistics, you can now read county check-in instructions including location, sign-in process, and remote appearance dial-in path when applicable.

**018 · Appearance mode badge** `trim-ct-worker-hearing` · planted  
*Problem:* Workers needed to confirm appearance mode (in-person / remote / written) without re-reading the assignment details.  
*Implementation:* On Hearing logistics, you can now read appearance mode badge at the top of the page: in-person, remote (with dial-in), or written submission.

**019 · Evidence cutoff date badge** `trim-ct-worker-hearing` · deferred  
*Problem:* Workers were unaware of the ARB's evidence submission cutoff date; late-submitted evidence was rejected in some counties.  
*Implementation:* On Hearing logistics, you can now read evidence cutoff date badge: the last date additional evidence may be submitted to the county ARB for this case.

**020 · ARB section and time** `trim-ct-worker-hearing` · deferred  
*Problem:* Large counties (Harris, Dallas) have multiple ARB sections hearing simultaneously; Workers used the generic county address and arrived at the wrong room.  
*Implementation:* On Hearing logistics, you can now read ARB section name, room number or remote meeting ID, and scheduled hearing start time.

### Outcome reporting

**021 · Outcome report with reduction detail** `trim-ct-worker-outcome` · planted  
*Problem:* Workers submitted board outcomes without a structured field for the specific reduction amount, leaving Operator to infer savings from a binary result.  
*Implementation:* On Outcome report, you can now submit: outcome (reduced / denied / continued), and when reduced — the board's assessed value after reduction so Operator can calculate measured savings.

**022 · Continued hearing flag** `trim-ct-worker-outcome` · deferred  
*Problem:* When the board continued a hearing to a future date, there was no "continued" outcome type; Workers submitted provisional outcomes that created incorrect state transitions.  
*Implementation:* On Outcome report, you can now select Continued as an outcome with a reschedule note, which returns the case to hearing_queued with a new hearing date field rather than triggering the reduction flow.

**023 · No-show / cancellation structured report** `trim-ct-worker-outcome` · deferred  
*Problem:* Workers who found a cancelled or no-show hearing could only write a freeform note; reason taxonomy was not captured for telemetry.  
*Implementation:* On Outcome report, you can now select No-show / cancelled with a structured reason code: board-rescheduled / property-owner-withdrew / hearing-dismissed / Worker-unavailable.

**024 · Submission confirmation receipt** `trim-ct-worker-outcome` · planted  
*Problem:* Workers had no in-app confirmation that the outcome report was received and the case state was updated.  
*Implementation:* On Outcome report, after submitting you can now read a submission confirmation with case reference, outcome submitted, and timestamp.

### Pay

**025 · Pay status detail** `trim-ct-worker-pay` · planted  
*Problem:* Workers saw a pay pending badge without knowing the fee amount or expected payment date.  
*Implementation:* On Pay status, you can now read per-appearance fee amount, assignment date, hearing county, outcome reported, and expected payment processing date.

**026 · Monthly earnings summary** `trim-ct-worker-pay` · deferred  
*Problem:* Workers planning income could not see a monthly earnings total before payment was processed.  
*Implementation:* On Pay status, you can now read a monthly earnings summary: total appearances completed this month, total fees earned, total paid, and total pending.

**027 · Completion history** `trim-ct-worker-pay` · deferred  
*Problem:* Workers lacked a personal record of completed assignments to track their advocacy history.  
*Implementation:* On Pay status, you can now open Completion history: a paginated list of past assignments with county, hearing date, outcome reported, and fee status.

**028 · Flag county checklist** `trim-ct-worker-hearing` · deferred  
*Problem:* After a hearing, Workers sometimes discovered that the county checklist was out of date (wrong room, changed dial-in); there was no feedback path to update it.  
*Implementation:* On Hearing logistics, after the hearing you can now flag county checklist for update with a structured note, which queues an Operator review of the checklist item.
