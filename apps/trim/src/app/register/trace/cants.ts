/**
 * PM Can'ts — machine twin of `docs/register/ENRICHMENT-CANTS.md`. Additive
 * depth only, no Core flow changes (parametric-elimination law: these live
 * behind a door/More menu in CT, not as always-on chrome).
 *
 * Surface IDs join to `register/trace/surfaces.ts` (prefix: trim-ct-*).
 */
export type CantStatus = "done" | "open";

export type CantItem = {
  id: string;
  cant: string;
  status: CantStatus;
  surfaceIds: string[];
  notes?: string;
};

// ——————————————————————————————————————————
// Owner Can'ts (27)
// ——————————————————————————————————————————
export const OWNER_CANTS: CantItem[] = [
  {
    id: "owner-cant-01",
    cant: "See protest cases across more than one owning entity from a single login (holding companies with multiple LLCs each owning separate parcels).",
    status: "open",
    surfaceIds: ["trim-ct-owner-portfolio"],
  },
  {
    id: "owner-cant-02",
    cant: "Amend the signer name or title on the Appointment of Agent without walking the full re-sign flow.",
    status: "open",
    surfaceIds: ["trim-ct-owner-authorize"],
  },
  {
    id: "owner-cant-03",
    cant: "Share a read-only case link with outside counsel without granting them Owner authorization authority.",
    status: "open",
    surfaceIds: ["trim-ct-owner-status", "trim-ct-owner-reduction"],
  },
  {
    id: "owner-cant-04",
    cant: "Share a read-only case link with an accountant scoped to reduction and invoice facts only.",
    status: "open",
    surfaceIds: ["trim-ct-owner-reduction", "trim-ct-owner-invoice"],
  },
  {
    id: "owner-cant-05",
    cant: "Opt in to an email or push notification when the protest case changes admission state, so I check back manually.",
    status: "open",
    surfaceIds: ["trim-ct-owner-status"],
  },
  {
    id: "owner-cant-06",
    cant: "See the specific informal review offer amount from the appraisal district when one has been made but not yet accepted or rejected.",
    status: "open",
    surfaceIds: ["trim-ct-owner-status"],
  },
  {
    id: "owner-cant-07",
    cant: "Download the compiled evidence packet Trim prepared for the protest (comps, uniformity grid, income summary).",
    status: "open",
    surfaceIds: ["trim-ct-owner-status", "trim-ct-owner-upload"],
  },
  {
    id: "owner-cant-08",
    cant: "See the hearing date, board panel name, and venue for a hearing-queued case — the queued state shows but not the scheduled logistics.",
    status: "open",
    surfaceIds: ["trim-ct-owner-status"],
  },
  {
    id: "owner-cant-09",
    cant: "Compare the parcel's assessed value against the median of comparable parcels in the same county as an in-product data view.",
    status: "open",
    surfaceIds: ["trim-ct-owner-notice"],
  },
  {
    id: "owner-cant-10",
    cant: "See the valuation methodology that drove the notice (equity-only, income approach, or sales comps) before consenting.",
    status: "open",
    surfaceIds: ["trim-ct-owner-notice"],
  },
  {
    id: "owner-cant-11",
    cant: "Open a tax treatment door before consent explaining gross-vs-net framing and the two-tax-period timing without Trim advising directly.",
    status: "open",
    surfaceIds: ["trim-ct-owner-consent"],
    notes: "SME: tax-accounting-treatment tax-01–tax-03",
  },
  {
    id: "owner-cant-12",
    cant: "See who the named licensed PTC representative is for the case before signing the Appointment of Agent.",
    status: "open",
    surfaceIds: ["trim-ct-owner-authorize"],
    notes: "CROSS-CUTTING #3: Texas PTC capacity",
  },
  {
    id: "owner-cant-13",
    cant: "View assessed-value history across prior tax years for the parcel in a single panel.",
    status: "open",
    surfaceIds: ["trim-ct-owner-notice", "trim-ct-owner-status"],
  },
  {
    id: "owner-cant-14",
    cant: "Indicate that the property is being actively sold or under contract mid-protest — a material fact for appeal strategy.",
    status: "open",
    surfaceIds: ["trim-ct-owner-upload", "trim-ct-owner-status"],
  },
  {
    id: "owner-cant-15",
    cant: "Withdraw from an in-flight authorized protest without contacting Operator support directly.",
    status: "open",
    surfaceIds: ["trim-ct-owner-status"],
  },
  {
    id: "owner-cant-16",
    cant: "Opt into or out of annual re-detection after authorization — enrollment is automatic and the control is not exposed.",
    status: "open",
    surfaceIds: ["trim-ct-owner-status"],
  },
  {
    id: "owner-cant-17",
    cant: "Print the notice and trust strip together as a single document for internal board or treasury files.",
    status: "open",
    surfaceIds: ["trim-ct-owner-notice", "trim-ct-owner-trust"],
  },
  {
    id: "owner-cant-18",
    cant: "Export the case status timeline (state changes and timestamps) as CSV for audit records.",
    status: "open",
    surfaceIds: ["trim-ct-owner-status"],
  },
  {
    id: "owner-cant-19",
    cant: "Add a private owner-side note or memo to a protest case visible only to my entity login.",
    status: "open",
    surfaceIds: ["trim-ct-owner-status"],
  },
  {
    id: "owner-cant-20",
    cant: "See the informal review outcome (the result of any pre-hearing appraisal district contact) before the formal hearing is scheduled.",
    status: "open",
    surfaceIds: ["trim-ct-owner-status"],
  },
  {
    id: "owner-cant-21",
    cant: "See a breakdown of how the estimated excess tax was calculated — which comps, what cap rate, or which uniformity formula drove the number.",
    status: "open",
    surfaceIds: ["trim-ct-owner-notice"],
  },
  {
    id: "owner-cant-22",
    cant: "Open a post-ARB remedies door showing escalation options (binding arbitration, SOAH, district court, attorney handoff) after a denial.",
    status: "open",
    surfaceIds: ["trim-ct-owner-reduction"],
    notes: "CROSS-CUTTING #10: post-ARB escalation separate legal lane",
  },
  {
    id: "owner-cant-23",
    cant: "See a W-9 or 1099 guidance door on the Invoice fact explaining how to classify Trim's fee for AP reporting.",
    status: "open",
    surfaceIds: ["trim-ct-owner-invoice"],
    notes: "SME: tax-accounting-treatment",
  },
  {
    id: "owner-cant-24",
    cant: "Provide condition photos or a third-party repair estimate for unequal appraisal arguments without emailing them to the Operator separately.",
    status: "open",
    surfaceIds: ["trim-ct-owner-upload"],
  },
  {
    id: "owner-cant-25",
    cant: "Receive a decline confirmation receipt download after walking away before authorization.",
    status: "open",
    surfaceIds: ["trim-ct-owner-decline"],
  },
  {
    id: "owner-cant-26",
    cant: "See an escrow / lender reserve disclosure when the property is mortgage-encumbered and the reduction may flow through the servicer rather than as direct cash.",
    status: "open",
    surfaceIds: ["trim-ct-owner-reduction", "trim-ct-owner-invoice"],
    notes: "CROSS-CUTTING #9: escrow timing",
  },
  {
    id: "owner-cant-27",
    cant: "Download a signed copy of the Appointment of Agent PDF after completing the Authorize block for corporate records.",
    status: "open",
    surfaceIds: ["trim-ct-owner-authorize"],
  },
];

// ——————————————————————————————————————————
// Operator Can'ts (27)
// ——————————————————————————————————————————
export const OPERATOR_CANTS: CantItem[] = [
  {
    id: "op-cant-01",
    cant: "Bulk-edit Texas PTC capacity (registered human count, senior PTC sponsor association) across multiple counties without editing each county row individually.",
    status: "open",
    surfaceIds: ["trim-ct-op-jurisdiction"],
    notes: "CROSS-CUTTING #3: TX sponsorship capacity",
  },
  {
    id: "op-cant-02",
    cant: "Replay a dead-lettered appeal prep or filing job from the exception queue without a backend workaround — stuck jobs require direct engineering intervention.",
    status: "open",
    surfaceIds: ["trim-ct-op-exceptions"],
  },
  {
    id: "op-cant-03",
    cant: "See the valuation confidence score and copy-gate decision that drove a specific notice — whether the substantiation packet cleared the threshold and which copy variant was approved.",
    status: "open",
    surfaceIds: ["trim-ct-op-exceptions"],
    notes: "CROSS-CUTTING #1: notice copy compliance gate",
  },
  {
    id: "op-cant-04",
    cant: "Edit the contingency cap percentage for a county inline from the jurisdiction table with a versioned audit trail.",
    status: "open",
    surfaceIds: ["trim-ct-op-jurisdiction", "trim-ct-op-audit"],
  },
  {
    id: "op-cant-05",
    cant: "Set a default evidence approach (equity-only, income approach, or comps) per county from the jurisdiction table.",
    status: "open",
    surfaceIds: ["trim-ct-op-jurisdiction"],
  },
  {
    id: "op-cant-06",
    cant: "See which named PTC representative is currently assigned to a specific protest case.",
    status: "open",
    surfaceIds: ["trim-ct-op-portfolio"],
    notes: "CROSS-CUTTING #3",
  },
  {
    id: "op-cant-07",
    cant: "Assign or reassign the PTC representative on a case mid-protest when capacity or licensure changes.",
    status: "open",
    surfaceIds: ["trim-ct-op-portfolio", "trim-ct-op-jurisdiction"],
  },
  {
    id: "op-cant-08",
    cant: "Monitor hearing outcome reports by county and property type — reduction rates across informal, ARB, and remote hearings for small commercial vs multifamily.",
    status: "open",
    surfaceIds: ["trim-ct-op-worker-dispatch"],
  },
  {
    id: "op-cant-09",
    cant: "View Worker no-show or cancellation telemetry per county — reliability patterns are invisible before dispatching.",
    status: "open",
    surfaceIds: ["trim-ct-op-worker-dispatch"],
  },
  {
    id: "op-cant-10",
    cant: "See the dunning cycle status (first notice, second notice, delinquent) for each invoiced-not-collected case at a glance.",
    status: "open",
    surfaceIds: ["trim-ct-op-collections"],
  },
  {
    id: "op-cant-11",
    cant: "Export the audit log for a specific date range as CSV for external legal review or licensure audit.",
    status: "open",
    surfaceIds: ["trim-ct-op-audit"],
  },
  {
    id: "op-cant-12",
    cant: "Set a county-level informal offer auto-accept threshold so automation accepts settlements at or above a configured reduction percentage without Operator intervention.",
    status: "open",
    surfaceIds: ["trim-ct-op-exceptions"],
  },
  {
    id: "op-cant-13",
    cant: "See which cases are approaching the appeal filing window deadline with a days-remaining countdown.",
    status: "open",
    surfaceIds: ["trim-ct-op-portfolio"],
  },
  {
    id: "op-cant-14",
    cant: "Monitor county data freshness (roll import, CAMA version, comp vintage) across all active counties in one dashboard — each county must be checked individually.",
    status: "open",
    surfaceIds: ["trim-ct-op-county-data"],
  },
  {
    id: "op-cant-15",
    cant: "View the ARB hearing calendar by county for upcoming scheduling windows to match Worker availability in advance.",
    status: "open",
    surfaceIds: ["trim-ct-op-worker-dispatch"],
  },
  {
    id: "op-cant-16",
    cant: "Bulk-confirm a batch of reduced cases as ready for invoice and collections trigger in one action.",
    status: "open",
    surfaceIds: ["trim-ct-op-collections"],
  },
  {
    id: "op-cant-17",
    cant: "Toggle a county's e-file capability status without a backend configuration change — it should be editable from jurisdiction settings.",
    status: "open",
    surfaceIds: ["trim-ct-op-jurisdiction"],
  },
  {
    id: "op-cant-18",
    cant: "See which notices were blocked by the pre-notice copy gate and why (jurisdiction block vs data-quality block vs solicitation threshold not met).",
    status: "open",
    surfaceIds: ["trim-ct-op-exceptions"],
    notes: "CROSS-CUTTING #1+#2",
  },
  {
    id: "op-cant-19",
    cant: "Trace which detection run (date, roll version, valuation model) produced a specific notice for a specific parcel.",
    status: "open",
    surfaceIds: ["trim-ct-op-audit"],
  },
  {
    id: "op-cant-20",
    cant: "See outstanding Appointment of Agent expirations or renewal alerts — clients with expiring authorizations are not surfaced before the next appeal cycle opens.",
    status: "open",
    surfaceIds: ["trim-ct-op-portfolio"],
  },
  {
    id: "op-cant-21",
    cant: "Onboard a client instance via OLG (Operator-Led Growth manual entry) alongside the ALG instant-served flow, for parcels or jurisdictions not yet in self-serve detection.",
    status: "open",
    surfaceIds: ["trim-ct-op-portfolio"],
  },
  {
    id: "op-cant-22",
    cant: "Add an internal Operator-side annotation to an exception case explaining the root cause without editing the case object directly.",
    status: "open",
    surfaceIds: ["trim-ct-op-exceptions"],
  },
  {
    id: "op-cant-23",
    cant: "Schedule an outreach batch to fire at a county's optimal appeal window open date rather than immediately.",
    status: "open",
    surfaceIds: ["trim-ct-op-jurisdiction"],
  },
  {
    id: "op-cant-24",
    cant: "View post-ARB escalation eligibility per case — whether a denied case is eligible for binding arbitration, SOAH, or district court based on property value and forum rules.",
    status: "open",
    surfaceIds: ["trim-ct-op-exceptions"],
    notes: "CROSS-CUTTING #10",
  },
  {
    id: "op-cant-25",
    cant: "See which cases have a lender / servicer escrow flag from the portfolio view — properties held by mortgage servicers where benefit timing differs.",
    status: "open",
    surfaceIds: ["trim-ct-op-portfolio"],
    notes: "CROSS-CUTTING #9",
  },
  {
    id: "op-cant-26",
    cant: "Export a per-client fee calculation summary (contingency %, documented savings, Trim cut) for collections audit.",
    status: "open",
    surfaceIds: ["trim-ct-op-collections", "trim-ct-op-audit"],
  },
  {
    id: "op-cant-27",
    cant: "See collection ACH / card authorization status (authorized, expired, failed) per invoice from the collections queue.",
    status: "open",
    surfaceIds: ["trim-ct-op-collections"],
  },
];

// ——————————————————————————————————————————
// Worker Can'ts (22)
// ——————————————————————————————————————————
export const WORKER_CANTS: CantItem[] = [
  {
    id: "worker-cant-01",
    cant: "See the Owner's name, contact information, or entity identity from the hearing packet — the case is scoped to parcel facts only.",
    status: "open",
    surfaceIds: ["trim-ct-worker-packet"],
  },
  {
    id: "worker-cant-02",
    cant: "Request a hearing postponement or continuance through the product — direct county or Operator contact is required.",
    status: "open",
    surfaceIds: ["trim-ct-worker-hearing"],
  },
  {
    id: "worker-cant-03",
    cant: "Report a partial reduction with a specific dollar amount — the outcome report only supports reduced / denied / continued as top-level choices.",
    status: "open",
    surfaceIds: ["trim-ct-worker-outcome"],
  },
  {
    id: "worker-cant-04",
    cant: "Flag a no-show or hearing cancellation with a structured reason code (board rescheduled, property owner withdrew, hearing dismissed) — only a freeform note is available.",
    status: "open",
    surfaceIds: ["trim-ct-worker-outcome"],
  },
  {
    id: "worker-cant-05",
    cant: "View prior protest outcomes for the same parcel in previous tax years from within the case packet.",
    status: "open",
    surfaceIds: ["trim-ct-worker-packet"],
  },
  {
    id: "worker-cant-06",
    cant: "Add a pre-hearing note to the case packet before accepting the assignment.",
    status: "open",
    surfaceIds: ["trim-ct-worker-packet", "trim-ct-worker-assignment"],
  },
  {
    id: "worker-cant-07",
    cant: "View the ARB board member names or section composition for an upcoming hearing.",
    status: "open",
    surfaceIds: ["trim-ct-worker-hearing"],
  },
  {
    id: "worker-cant-08",
    cant: "Download the case packet as a printable PDF for offline use in the hearing room when mobile data is unreliable.",
    status: "open",
    surfaceIds: ["trim-ct-worker-packet"],
  },
  {
    id: "worker-cant-09",
    cant: "Request special logistics accommodation (remote appearance, interpreter, accessibility) through the product.",
    status: "open",
    surfaceIds: ["trim-ct-worker-hearing"],
  },
  {
    id: "worker-cant-10",
    cant: "Record that a hearing was continued by the board without submitting a provisional outcome — no 'continued' state with reschedule logistics exists.",
    status: "open",
    surfaceIds: ["trim-ct-worker-outcome"],
  },
  {
    id: "worker-cant-11",
    cant: "See the informal review history for a case before the formal hearing — I don't know what the appraisal district offered informally.",
    status: "open",
    surfaceIds: ["trim-ct-worker-packet"],
  },
  {
    id: "worker-cant-12",
    cant: "View upcoming hearings across all counties in a calendar view — the queue is a flat list sorted by date.",
    status: "open",
    surfaceIds: ["trim-ct-worker-queue"],
  },
  {
    id: "worker-cant-13",
    cant: "See my total pay earned for the current or past month before the payment is processed.",
    status: "open",
    surfaceIds: ["trim-ct-worker-pay"],
  },
  {
    id: "worker-cant-14",
    cant: "Flag a county hearing checklist item as inaccurate after the hearing so future Workers see the correction.",
    status: "open",
    surfaceIds: ["trim-ct-worker-hearing"],
  },
  {
    id: "worker-cant-15",
    cant: "See how many cases are available in nearby counties outside registered coverage when the primary queue is empty.",
    status: "open",
    surfaceIds: ["trim-ct-worker-queue"],
  },
  {
    id: "worker-cant-16",
    cant: "Opt into email or push alerts when a new hearing assignment becomes available in my coverage counties — I check the queue manually.",
    status: "open",
    surfaceIds: ["trim-ct-worker-queue"],
  },
  {
    id: "worker-cant-17",
    cant: "Submit additional evidence discovered on the day of the hearing through the product — it has to go through the Operator.",
    status: "open",
    surfaceIds: ["trim-ct-worker-packet", "trim-ct-worker-hearing"],
  },
  {
    id: "worker-cant-18",
    cant: "See a county-specific typical reduction range (equity or income approach outcomes at this board) to calibrate the opening position.",
    status: "open",
    surfaceIds: ["trim-ct-worker-packet"],
  },
  {
    id: "worker-cant-19",
    cant: "Request a substitute Worker assignment when a scheduling conflict arises after accepting — I must decline and re-queue.",
    status: "open",
    surfaceIds: ["trim-ct-worker-assignment"],
  },
  {
    id: "worker-cant-20",
    cant: "View a completion history of past hearings and outcomes reported to track my own advocacy record.",
    status: "open",
    surfaceIds: ["trim-ct-worker-pay"],
  },
  {
    id: "worker-cant-21",
    cant: "Filter the hearing queue by property type (small commercial vs multifamily) to prioritize assignments matching my experience.",
    status: "open",
    surfaceIds: ["trim-ct-worker-queue"],
  },
  {
    id: "worker-cant-22",
    cant: "See whether the case has an income approach built into the packet or is equity-only before accepting — this affects preparation time and ARB approach.",
    status: "open",
    surfaceIds: ["trim-ct-worker-packet", "trim-ct-worker-assignment"],
  },
];
