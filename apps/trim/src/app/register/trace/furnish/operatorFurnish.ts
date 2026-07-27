import type { FurnishItem } from "../furnishTypes";

/**
 * Operator Furnish — supporting UI abilities for Clients / Work / Settings.
 * Writing pass; `status: "planted"` marks strips built in CT today.
 * Machine twin of docs/register/FURNISHING.md — Operator section.
 */
export const OPERATOR_FURNISH: FurnishItem[] = [
  {
    id: "op-furnish-001",
    label: "Portfolio glance",
    able: "Scan every Owner account in the book grouped by protest state on Clients.",
    status: "planted",
    surfaceIds: ["trim-ct-op-portfolio"],
    implementationProblem:
      "Operators needed one roster view of all Owner accounts and where each protest case sat in the admission spine.",
    implementation:
      "On Clients, you can now scan the portfolio table — owner entity, county, parcel count, admission state, contingency %, and days-in-state — across the whole book.",
  },
  {
    id: "op-furnish-002",
    label: "Filter portfolio by county",
    able: "Filter Clients rows by county.",
    status: "deferred",
    surfaceIds: ["trim-ct-op-portfolio"],
    implementationProblem:
      "Multi-county books had no county filter; Operators scanned all clients to find county-specific queues.",
    implementation: "On Clients, you can now filter rows by county.",
    implementationPlant: "not_done",
  },
  {
    id: "op-furnish-003",
    label: "Filter portfolio by protest state",
    able: "Filter Clients rows by protest admission state.",
    status: "deferred",
    surfaceIds: ["trim-ct-op-portfolio"],
    implementationProblem:
      "Operators opened each case to find the ones stuck or needing work.",
    implementation:
      "On Clients, you can now filter rows by protest admission state.",
    implementationPlant: "not_done",
  },
  {
    id: "op-furnish-004",
    label: "Filter portfolio by property type",
    able: "Filter Clients rows by property type (small commercial / multifamily).",
    status: "deferred",
    surfaceIds: ["trim-ct-op-portfolio"],
    implementationProblem:
      "Small commercial and multifamily cases needed separate queues; the portfolio was undifferentiated by property type.",
    implementation:
      "On Clients, you can now filter rows by property type (small commercial / multifamily).",
    implementationPlant: "not_done",
  },
  {
    id: "op-furnish-005",
    label: "Cases approaching deadline alert",
    able: "See a deadline alert badge on Clients rows where the county appeal window closes within 14 days.",
    status: "deferred",
    surfaceIds: ["trim-ct-op-portfolio"],
    implementationProblem:
      "Cases where the appeal filing window was closing in fewer than 14 days had no surface-level urgency signal.",
    implementation:
      "On Clients, you can now see a deadline alert badge on rows where the county appeal window closes within 14 days.",
    implementationPlant: "not_done",
  },
  {
    id: "op-furnish-006",
    label: "POA expiration alert",
    able: "See a POA expiration badge on Clients rows where the Appointment of Agent will expire before the next cycle.",
    status: "deferred",
    surfaceIds: ["trim-ct-op-portfolio"],
    implementationProblem:
      "Appointments of Agent without explicit re-authorization for the next tax year were not surfaced before the cycle opened.",
    implementation:
      "On Clients, you can now see a POA expiration badge on rows where the Appointment of Agent will expire before the next assessment cycle.",
    implementationPlant: "not_done",
  },
  {
    id: "op-furnish-007",
    label: "Search by parcel ID / address",
    able: "Search Clients by parcel ID or property address across the entire book.",
    status: "deferred",
    surfaceIds: ["trim-ct-op-portfolio"],
    implementationProblem:
      "Operators reconciling county mail had no portfolio-wide parcel ID or address search.",
    implementation:
      "On Clients, you can now search by parcel ID or property address across the entire book.",
    implementationPlant: "not_done",
  },
  {
    id: "op-furnish-008",
    label: "Sort portfolio columns",
    able: "Sort Clients rows by estimated savings, county, admission state, or days-in-state.",
    status: "deferred",
    surfaceIds: ["trim-ct-op-portfolio"],
    implementationProblem:
      "Row order was fixed; Operators could not prioritize by savings opportunity or days-in-state.",
    implementation:
      "On Clients, you can now sort rows by estimated savings, county, admission state, or days-in-state.",
    implementationPlant: "not_done",
  },
  {
    id: "op-furnish-009",
    label: "Export portfolio as CSV",
    able: "Export the visible Clients row set as CSV.",
    status: "deferred",
    surfaceIds: ["trim-ct-op-portfolio"],
    implementationProblem:
      "Collections reviews and partner reporting required extractable portfolio data.",
    implementation:
      "On Clients, you can now export the visible row set as CSV including owner entity, county, parcel ID, state, and contingency %.",
    implementationPlant: "not_done",
  },
  {
    id: "op-furnish-010",
    label: "OLG manual onboard",
    able: "Open OLG Onboard flow from Clients to manually enter an Owner entity + parcel for counties not yet in ALG detection.",
    status: "deferred",
    surfaceIds: ["trim-ct-op-portfolio"],
    implementationProblem:
      "Jurisdictions or parcels not yet in the ALG pipeline required Operator-Led Growth onboarding; no manual entry path existed.",
    implementation:
      "On Clients, you can now open OLG Onboard flow to manually enter an Owner entity + parcel + evidence into the book for counties not yet in ALG detection.",
    implementationPlant: "not_done",
  },
  {
    id: "op-furnish-011",
    label: "PTC capacity column",
    able: "Read PTC capacity column in Jurisdiction & licensure for each Texas county: registered PTC count, senior sponsor, and headroom before max-10 cap.",
    status: "planted",
    surfaceIds: ["trim-ct-op-jurisdiction"],
    implementationProblem:
      "Texas PTC capacity was not visible in the jurisdiction table; Operators couldn't confirm capacity before activating a county.",
    implementation:
      "On Jurisdiction & licensure, you can now read PTC capacity column beside each Texas county row: registered PTC count, senior sponsor, and headroom before the max-10 cap.",
  },
  {
    id: "op-furnish-012",
    label: "Fee cap column",
    able: "Read fee cap % in Jurisdiction & licensure beside each county row.",
    status: "planted",
    surfaceIds: ["trim-ct-op-jurisdiction"],
    implementationProblem:
      "Fee-cap limits lived outside the desk — Operators couldn't confirm contingency compliance while reviewing county rows.",
    implementation:
      "On Jurisdiction & licensure, you can now read fee cap % beside each county row showing the jurisdiction-specific maximum contingency allowed.",
  },
  {
    id: "op-furnish-013",
    label: "Appeal window calendar",
    able: "Read the appeal window open and close dates for each active county row in Jurisdiction & licensure.",
    status: "planted",
    surfaceIds: ["trim-ct-op-jurisdiction"],
    implementationProblem:
      "Appeal window dates lived in spreadsheets; Operators had no in-desk calendar showing when each county's protest window opened and closed.",
    implementation:
      "On Jurisdiction & licensure, you can now read the appeal window open and close dates for each active county row.",
  },
  {
    id: "op-furnish-014",
    label: "Days-to-window countdown",
    able: "Read a days-to-window countdown beside each county row in Jurisdiction & licensure.",
    status: "deferred",
    surfaceIds: ["trim-ct-op-jurisdiction"],
    implementationProblem:
      "Operators needed to see how many days remained before the next appeal window opened for capacity planning.",
    implementation:
      "On Jurisdiction & licensure, you can now read a days-to-window countdown beside each county row, color-coded when fewer than 30 days remain.",
    implementationPlant: "not_done",
  },
  {
    id: "op-furnish-015",
    label: "E-file capability badge",
    able: "Read an e-file capability badge (digital / mail-original / in-person-only) per county row in Jurisdiction & licensure.",
    status: "deferred",
    surfaceIds: ["trim-ct-op-jurisdiction"],
    implementationProblem:
      "County filing capability was not surfaced in the jurisdiction table, forcing Operators to look it up elsewhere.",
    implementation:
      "On Jurisdiction & licensure, you can now read an e-file capability badge per county row (digital / mail-original / in-person-only).",
    implementationPlant: "not_done",
  },
  {
    id: "op-furnish-016",
    label: "Copy gate block reason",
    able: "Read copy gate block reason per blocked case in Exception queue.",
    status: "deferred",
    surfaceIds: ["trim-ct-op-jurisdiction", "trim-ct-op-exceptions"],
    implementationProblem:
      "Operators could not see which notices were blocked by the pre-notice copy gate or why.",
    implementation:
      "On Exceptions, you can now read copy gate block reason per blocked case: jurisdiction-missing-licensure / unsupported-quantified-claim / solicitation-threshold-not-met / data-staleness.",
    implementationPlant: "not_done",
  },
  {
    id: "op-furnish-017",
    label: "Scheduled outreach batch",
    able: "Set a scheduled outreach date per county in Jurisdiction & licensure so ALG notices fire when the window opens.",
    status: "deferred",
    surfaceIds: ["trim-ct-op-jurisdiction"],
    implementationProblem:
      "Outreach fired immediately when detection cleared; Operators could not schedule a batch to align with a county's appeal window open date.",
    implementation:
      "On Jurisdiction & licensure, you can now set a scheduled outreach date per county so ALG notices fire when the window opens, not before.",
    implementationPlant: "not_done",
  },
  {
    id: "op-furnish-018",
    label: "PTC assignment on case row",
    able: "See the assigned PTC representative name on each protest-active case row in Clients.",
    status: "deferred",
    surfaceIds: ["trim-ct-op-portfolio"],
    implementationProblem:
      "Operators could not see which named PTC representative was assigned to a specific case from the portfolio table.",
    implementation:
      "On Clients, you can now see the assigned PTC representative name on each case row in the protest-active states.",
    implementationPlant: "not_done",
  },
  {
    id: "op-furnish-019",
    label: "Honest empties on exception queue",
    able: "See a clear empty state on Exception queue when no cases need action.",
    status: "planted",
    surfaceIds: ["trim-ct-op-exceptions"],
    implementationProblem:
      "An empty Exception queue looked like a broken table; Operators couldn't tell whether automation was idle or the view had failed to load.",
    implementation:
      "On Exception queue, you can now see 'No exceptions right now — all cases clear.' when every case in the book has cleared procedural review.",
  },
  {
    id: "op-furnish-020",
    label: "Exception reason taxonomy",
    able: "Read the specific exception reason code per exception row in Exception queue.",
    status: "planted",
    surfaceIds: ["trim-ct-op-exceptions"],
    implementationProblem:
      "Stuck cases collapsed to a generic blocked label; Operators could not tell jurisdiction-block from data-quality-block from filing-rejection.",
    implementation:
      "On Exception queue, you can now read the specific exception reason code (blocked-jurisdiction / filing-rejected / evidence-gap / data-stale / copy-gate-fail) per exception row.",
  },
  {
    id: "op-furnish-021",
    label: "Case audit glance inline",
    able: "Expand Case audit glance inline on Exception queue without opening Audit log.",
    status: "planted",
    surfaceIds: ["trim-ct-op-exceptions", "trim-ct-op-audit"],
    implementationProblem:
      "Operators had to leave Exception queue and hunt Audit log to see what happened before a case got stuck.",
    implementation:
      "On Exception queue, you can now expand Case audit glance inline — actor, timestamp, and action — without opening Audit log.",
  },
  {
    id: "op-furnish-022",
    label: "Operator annotation on exception",
    able: "Add an Operator annotation per exception case before resolving, stored in audit log.",
    status: "deferred",
    surfaceIds: ["trim-ct-op-exceptions"],
    implementationProblem:
      "Operators resolved exceptions without a structured internal note; root cause knowledge was lost with each resolution.",
    implementation:
      "On Exception queue, you can now add an Operator annotation per exception case before resolving, stored in audit log.",
    implementationPlant: "not_done",
  },
  {
    id: "op-furnish-023",
    label: "Bulk select exceptions",
    able: "Multi-select exception rows sharing a reason code and bulk-apply Requeue or Dismiss.",
    status: "deferred",
    surfaceIds: ["trim-ct-op-exceptions"],
    implementationProblem:
      "Batch exceptions from a single county data outage required one-by-one resolution; Operators had no bulk action.",
    implementation:
      "On Exception queue, you can now multi-select exception rows sharing a reason code and bulk-apply Requeue or Dismiss with one confirmation.",
    implementationPlant: "not_done",
  },
  {
    id: "op-furnish-024",
    label: "DLQ replay action",
    able: "Trigger Replay action for dead-lettered jobs from Exception queue.",
    status: "deferred",
    surfaceIds: ["trim-ct-op-exceptions"],
    implementationProblem:
      "Dead-lettered jobs required direct engineering intervention to replay.",
    implementation:
      "On Exception queue, for DLQ-backed exception rows you can now trigger Replay action that re-queues the job with current data and logs the replay event.",
    implementationPlant: "not_done",
  },
  {
    id: "op-furnish-025",
    label: "Audit log export as CSV",
    able: "Export the audit trail for a specified date range as CSV from Audit log.",
    status: "deferred",
    surfaceIds: ["trim-ct-op-audit"],
    implementationProblem:
      "Licensure audits and legal review required extractable audit data; the log was viewable in-product only.",
    implementation:
      "On Audit log, you can now export the audit trail for a specified date range as CSV including actor, event type, case reference, and timestamp.",
    implementationPlant: "not_done",
  },
  {
    id: "op-furnish-026",
    label: "Detection lineage on case",
    able: "Read detection lineage per case on Audit log: detection run ID, roll-import date, valuation methodology.",
    status: "deferred",
    surfaceIds: ["trim-ct-op-audit"],
    implementationProblem:
      "Operators could not trace which detection run produced a specific notice.",
    implementation:
      "On Audit log, for each case you can now read detection lineage: detection run ID, roll-import date, valuation methodology, and confidence threshold cleared.",
    implementationPlant: "not_done",
  },
  {
    id: "op-furnish-027",
    label: "Print case audit trail",
    able: "Print the full audit trail for a single protest case from Audit log.",
    status: "deferred",
    surfaceIds: ["trim-ct-op-audit"],
    implementationProblem:
      "Internal legal reviews required a printed case trail for authority under the Appointment of Agent.",
    implementation:
      "On Audit log, you can now print the full audit trail for a single protest case as a formatted sheet.",
    implementationPlant: "not_done",
  },
  {
    id: "op-furnish-028",
    label: "Worker dispatch queue",
    able: "See all hearing-queued cases by county on Worker dispatch with hearing date, board name, appearance mode, and packet status.",
    status: "planted",
    surfaceIds: ["trim-ct-op-worker-dispatch"],
    implementationProblem:
      "Hearing-queued cases awaiting Worker pickup were not visible in one place; Operators managed dispatch via external tools.",
    implementation:
      "On Worker dispatch, you can now see all hearing-queued cases by county with hearing date, board name, appearance mode, and packet status.",
  },
  {
    id: "op-furnish-029",
    label: "Worker availability indicator",
    able: "See each Worker's availability badge on Worker dispatch.",
    status: "deferred",
    surfaceIds: ["trim-ct-op-worker-dispatch"],
    implementationProblem:
      "Operators dispatching Workers had no signal for availability status — Workers might be overbooked or unavailable.",
    implementation:
      "On Worker dispatch, you can now see each Worker's availability badge (available / assigned / at capacity) beside their county coverage.",
    implementationPlant: "not_done",
  },
  {
    id: "op-furnish-030",
    label: "No-show / cancellation log",
    able: "Open Worker reliability log on Worker dispatch showing no-show and cancellation history.",
    status: "deferred",
    surfaceIds: ["trim-ct-op-worker-dispatch"],
    implementationProblem:
      "Workers with reliability patterns could not be identified before dispatch.",
    implementation:
      "On Worker dispatch, you can now open Worker reliability log showing no-show and cancellation history per Worker for the current season.",
    implementationPlant: "not_done",
  },
  {
    id: "op-furnish-031",
    label: "Hearing outcome telemetry",
    able: "Open Hearing outcome telemetry on Worker dispatch with reduction rates by county, property type, and hearing mode.",
    status: "deferred",
    surfaceIds: ["trim-ct-op-worker-dispatch"],
    implementationProblem:
      "Operators had no aggregate view of hearing outcome rates by county and property type to guide argument strategy.",
    implementation:
      "On Worker dispatch, you can now open Hearing outcome telemetry with reduction rates by county, property type, and hearing mode (informal / ARB / remote) for closed cases.",
    implementationPlant: "not_done",
  },
  {
    id: "op-furnish-032",
    label: "ARB hearing calendar",
    able: "Open ARB hearing calendar by county on Worker dispatch showing scheduled hearing blocks for the current appeal season.",
    status: "deferred",
    surfaceIds: ["trim-ct-op-worker-dispatch"],
    implementationProblem:
      "Operators could not see upcoming ARB hearing schedule windows by county for capacity planning.",
    implementation:
      "On Worker dispatch, you can now open ARB hearing calendar by county with scheduled hearing blocks for the current appeal season.",
    implementationPlant: "not_done",
  },
  {
    id: "op-furnish-033",
    label: "Collections queue",
    able: "See all invoiced-not-collected cases on Collections with owner entity, invoice amount, days-outstanding, and dunning cycle status.",
    status: "planted",
    surfaceIds: ["trim-ct-op-collections"],
    implementationProblem:
      "Invoiced-not-collected cases had no dedicated operator surface; collections actions were unmanaged.",
    implementation:
      "On Collections, you can now see all invoiced-not-collected cases with owner entity, invoice amount, days-outstanding, and dunning cycle status.",
  },
  {
    id: "op-furnish-034",
    label: "Dunning cycle status",
    able: "Read dunning cycle status per invoice row on Collections: first notice / second notice / delinquent / disputed.",
    status: "planted",
    surfaceIds: ["trim-ct-op-collections"],
    implementationProblem:
      "Operators could not tell which dunning cycle a case was in at a glance.",
    implementation:
      "On Collections, you can now read dunning cycle status per invoice row: first notice / second notice / delinquent / disputed.",
  },
  {
    id: "op-furnish-035",
    label: "ACH/card authorization status",
    able: "Read ACH/card authorization status per invoice row on Collections: authorized / expired / failed / none.",
    status: "deferred",
    surfaceIds: ["trim-ct-op-collections"],
    implementationProblem:
      "Collection success depended on whether ACH or card was still authorized; expired payment methods were not surfaced.",
    implementation:
      "On Collections, you can now read ACH/card authorization status per invoice row: authorized / expired / failed / none.",
    implementationPlant: "not_done",
  },
  {
    id: "op-furnish-036",
    label: "Invoice dispute flag",
    able: "See invoice dispute flag on Collections rows where the Owner has opened a dispute.",
    status: "deferred",
    surfaceIds: ["trim-ct-op-collections"],
    implementationProblem:
      "Owner invoice disputes arrived via email without a structured in-product record.",
    implementation:
      "On Collections, you can now see invoice dispute flag on rows where the Owner has opened a dispute, with reason code and case reference.",
    implementationPlant: "not_done",
  },
  {
    id: "op-furnish-037",
    label: "Bulk confirm to collections",
    able: "Multi-select reduced-confirmed rows on Collections and bulk-trigger invoice generation.",
    status: "deferred",
    surfaceIds: ["trim-ct-op-collections"],
    implementationProblem:
      "Batches of reduced cases had to be individually transitioned to invoiced.",
    implementation:
      "On Collections, you can now multi-select reduced-confirmed rows and bulk-trigger invoice generation with one confirmation.",
    implementationPlant: "not_done",
  },
  {
    id: "op-furnish-038",
    label: "Export fee summary as CSV",
    able: "Export fee calculation summary as CSV from Collections: contingency %, documented savings, Trim fee, invoice date, collection status.",
    status: "deferred",
    surfaceIds: ["trim-ct-op-collections", "trim-ct-op-audit"],
    implementationProblem:
      "Collections audit required a portable extract of contingency %, documented savings, and Trim fee per client.",
    implementation:
      "On Collections, you can now export fee calculation summary as CSV: owner entity, parcel, contingency %, documented savings, Trim fee, invoice date, collection status.",
    implementationPlant: "not_done",
  },
  {
    id: "op-furnish-039",
    label: "Post-ARB escalation queue",
    able: "Filter to post-ARB escalation rows on Exception queue showing eligibility, deadline, and current election status.",
    status: "deferred",
    surfaceIds: ["trim-ct-op-exceptions"],
    implementationProblem:
      "Cases denied at ARB with eligible escalation paths had no dedicated surface; Operators tracked escalation externally.",
    implementation:
      "On Exception queue, you can now filter to post-ARB escalation rows showing eligibility (RBA / SOAH / district court / attorney-handoff), deadline, deposit requirement, and current election status.",
    implementationPlant: "not_done",
  },
  {
    id: "op-furnish-040",
    label: "Roll freshness badge",
    able: "Read a roll freshness badge per county on County data health: days since last successful roll import and CAMA version tag.",
    status: "planted",
    surfaceIds: ["trim-ct-op-county-data"],
    implementationProblem:
      "Stale roll imports produced indefensible notices; Operators could not see data age at a glance.",
    implementation:
      "On County data health, you can now read a roll freshness badge per county: days since last successful roll import and CAMA version tag.",
  },
  {
    id: "op-furnish-041",
    label: "CAMA version log",
    able: "Open CAMA version log per county on County data health with import date, schema version, and parse-error count.",
    status: "deferred",
    surfaceIds: ["trim-ct-op-county-data"],
    implementationProblem:
      "CAMA schema changes could silently break parcel parsing; there was no in-product version history to diagnose detection anomalies.",
    implementation:
      "On County data health, you can now open CAMA version log per county with import date, schema version, and parse-error count.",
    implementationPlant: "not_done",
  },
  {
    id: "op-furnish-042",
    label: "Comp coverage indicator",
    able: "Read comp coverage indicator per county on County data health: qualifying comp count and median comp vintage.",
    status: "deferred",
    surfaceIds: ["trim-ct-op-county-data"],
    implementationProblem:
      "Evidence packages with thin comp coverage produced weak equity arguments; Operators had no comp coverage signal per county.",
    implementation:
      "On County data health, you can now read comp coverage indicator per county: number of qualifying comps within the evidence radius and median comp vintage.",
    implementationPlant: "not_done",
  },
  {
    id: "op-furnish-043",
    label: "Detection signal age",
    able: "Read detection signal age per county on County data health: days since the over-assessment signal was computed but not yet served.",
    status: "deferred",
    surfaceIds: ["trim-ct-op-county-data"],
    implementationProblem:
      "Unnotified cases accumulated where detection had fired but outreach was deferred; there was no signal age display.",
    implementation:
      "On County data health, you can now read detection signal age: days since the over-assessment signal was computed but not yet served as a notice.",
    implementationPlant: "not_done",
  },
  {
    id: "op-furnish-044",
    label: "PIA fallback status",
    able: "Read PIA fallback status per county on County data health: last request date, fulfillment status, and estimated cost.",
    status: "deferred",
    surfaceIds: ["trim-ct-op-county-data"],
    implementationProblem:
      "Counties that do not publish complete rolls require PIA/FOIA requests; Operators had no fallback status or cost visible.",
    implementation:
      "On County data health, you can now read PIA fallback status per county: last request date, fulfillment status, and estimated cost.",
    implementationPlant: "not_done",
  },
  {
    id: "op-furnish-045",
    label: "Evidence approach distribution",
    able: "View evidence approach distribution by county on County data health: proportion of cases using equity-only / income-approach / sales-comps.",
    status: "deferred",
    surfaceIds: ["trim-ct-op-county-data"],
    implementationProblem:
      "Operators could not see the split of equity-only vs income-approach vs sales-comps evidence across the county book.",
    implementation:
      "On County data health, you can now view evidence approach distribution by county: proportion of cases using equity-only / income-approach / sales-comps arguments.",
    implementationPlant: "not_done",
  },
  {
    id: "op-furnish-046",
    label: "Valuation confidence histogram",
    able: "Open valuation confidence histogram per county on County data health.",
    status: "deferred",
    surfaceIds: ["trim-ct-op-county-data"],
    implementationProblem:
      "Notice quality varied by county but confidence score distribution was not visible; Operators sent low-confidence notices that failed the copy gate.",
    implementation:
      "On County data health, you can now open valuation confidence histogram per county showing the spread of confidence scores across served and unserved parcels.",
    implementationPlant: "not_done",
  },
  {
    id: "op-furnish-047",
    label: "Sort county health table",
    able: "Sort County data health table by roll freshness, comp coverage, or detection signal age.",
    status: "deferred",
    surfaceIds: ["trim-ct-op-county-data"],
    implementationProblem:
      "County data health table was sorted by county name only; Operators could not surface counties with the most stale data or lowest comp coverage.",
    implementation:
      "On County data health, you can now sort the table by roll freshness, comp coverage, or detection signal age.",
    implementationPlant: "not_done",
  },
  {
    id: "op-furnish-048",
    label: "Licensed representative identity visible",
    able: "Expand each Texas county row in Jurisdiction & licensure to see named licensed PTC representatives, senior sponsor, and CE/renewal status.",
    status: "deferred",
    surfaceIds: ["trim-ct-op-jurisdiction"],
    implementationProblem:
      "Licensed PTC names on filings were not surfaced per case from the Operator desk; Operators tracked them in external spreadsheets.",
    implementation:
      "On Jurisdiction & licensure, for each Texas county row you can now expand to see the named licensed PTC representatives registered to that county, their senior sponsor, and current CE/renewal status.",
    implementationPlant: "not_done",
  },
  {
    id: "op-furnish-049",
    label: "Notice suppression visible",
    able: "Filter to suppressed notices on Exception queue with suppression reason.",
    status: "deferred",
    surfaceIds: ["trim-ct-op-exceptions"],
    implementationProblem:
      "Operators could not see which parcels had notices suppressed by the copy gate and why, making it impossible to debug detection-to-activation drop-off.",
    implementation:
      "On Exception queue, you can now filter to suppressed notices with suppression reason: jurisdiction-block / data-quality / solicitation-threshold / attorney-required.",
    implementationPlant: "not_done",
  },
  {
    id: "op-furnish-050",
    label: "Escrow / lender flag per client",
    able: "See an escrow/lender badge on Clients portfolio rows where benefit is expected to flow through a servicer.",
    status: "deferred",
    surfaceIds: ["trim-ct-op-portfolio"],
    implementationProblem:
      "Servicer-escrowed and lender-reserve cases needed different invoice-evidence treatment; they were not flagged in the portfolio.",
    implementation:
      "On Clients, you can now see an escrow/lender badge on portfolio rows where the reduction benefit is expected to flow through a servicer rather than direct client cash.",
    implementationPlant: "not_done",
  },
];
