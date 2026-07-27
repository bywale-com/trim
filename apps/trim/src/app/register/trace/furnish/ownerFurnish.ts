import type { FurnishItem } from "../furnishTypes";

/**
 * Owner Furnish — supporting UI abilities for Portfolio / Case doors.
 * Writing pass; `status: "planted"` marks strips built in CT today.
 * Machine twin of docs/register/FURNISHING.md — Owner section.
 */
export const OWNER_FURNISH: FurnishItem[] = [
  {
    id: "owner-furnish-001",
    label: "Days-in-state",
    able: "Read days-in-state as a plain fact next to the current protest-spine state and locked contingency % on Status facts.",
    status: "planted",
    surfaceIds: ["trim-ct-owner-status"],
    implementationProblem:
      "Protest case duration was invisible; Owners had no elapsed-time fact beside status to gauge whether progress was normal.",
    implementation:
      "On Status facts, you can now read days-in-state as a plain fact next to the current protest-spine state and locked contingency %.",
  },
  {
    id: "owner-furnish-002",
    label: "Trust strip",
    able: "See no-upfront-fee statement, county-site verification link, and non-affiliation disclaimer on Notice — trust strip before Consent ticks.",
    status: "planted",
    surfaceIds: ["trim-ct-owner-trust"],
    implementationProblem:
      "Notice delivery matched documented impersonation patterns; Owners needed an upfront trust bundle before consent ticks, not fee-absence alone.",
    implementation:
      "On Notice — trust strip, you can now read: no upfront fee; an invite to verify the parcel and assessment on the county's own site; and a non-affiliation disclaimer before consent ticks.",
  },
  {
    id: "owner-furnish-003",
    label: "Analysis-not-promise framing",
    able: "Read analysis-not-promise framing on Notice — proof facts (subject to appeal outcome).",
    status: "planted",
    surfaceIds: ["trim-ct-owner-notice"],
    implementationProblem:
      "Notice copy that omitted 'subject to appeal outcome' framing violated Texas TDLR ethics and reduced first-touch credibility.",
    implementation:
      "On Notice — proof facts, you can now read analysis-not-promise framing: 'our analysis indicates,' 'estimated excess,' and 'subject to appeal outcome' — never a guaranteed savings result.",
  },
  {
    id: "owner-furnish-004",
    label: "County-site verification link",
    able: "Open county-site verification link from Notice — trust strip to the official appraisal district or county portal.",
    status: "planted",
    surfaceIds: ["trim-ct-owner-trust"],
    implementationProblem:
      "Owners could not independently confirm the assessed value from within the notice.",
    implementation:
      "On Notice — trust strip, you can now open county-site verification link to the official appraisal district or county portal where the assessment is published.",
  },
  {
    id: "owner-furnish-005",
    label: "Non-affiliation disclaimer",
    able: "Read the mandatory non-affiliation disclaimer on Notice — trust strip.",
    status: "planted",
    surfaceIds: ["trim-ct-owner-trust"],
    implementationProblem:
      "Notices from third-party firms are sometimes mistaken for government correspondence; explicit non-affiliation is required by Texas TDLR and reduces scam skepticism.",
    implementation:
      "On Notice — trust strip, you can now read the mandatory non-affiliation disclaimer: Trim is not the county, appraisal district, ARB, or tax office.",
  },
  {
    id: "owner-furnish-006",
    label: "Parcel ID + county recap on consent",
    able: "Read parcel ID and county name recap on Consent ticks matching Notice — proof facts.",
    status: "planted",
    surfaceIds: ["trim-ct-owner-consent"],
    implementationProblem:
      "Consent screen did not repeat the parcel reference; Owners had to scroll back to Notice to verify they were authorizing the right parcel.",
    implementation:
      "On Consent ticks, you can now read parcel ID and county name recap matching Notice — proof facts before ticking.",
  },
  {
    id: "owner-furnish-007",
    label: "Assessment-date label on Notice",
    able: "Read assessed value labeled with tax year and record date on Notice — proof facts.",
    status: "deferred",
    surfaceIds: ["trim-ct-owner-notice"],
    implementationProblem:
      "Assessment figure lacked the as-of date; Owners treated the record-year figure as current without knowing the data snapshot date.",
    implementation:
      "On Notice — proof facts, you can now read the assessed value labeled as 'assessed value as of [tax year] per [county CAD] — record dated [date].'",
    implementationPlant: "not_done",
  },
  {
    id: "owner-furnish-008",
    label: "Valuation methodology badge",
    able: "Read a Valuation methodology badge (Sales comps / Equity-uniformity / Income approach) on Notice — proof facts.",
    status: "deferred",
    surfaceIds: ["trim-ct-owner-notice"],
    implementationProblem:
      "Owners could not see whether the estimated excess was built on sales comps, equity/uniformity, or an income approach before consenting.",
    implementation:
      "On Notice — proof facts, you can now read a Valuation methodology badge beside the estimated excess figure.",
    implementationPlant: "not_done",
  },
  {
    id: "owner-furnish-009",
    label: "Print Notice packet",
    able: "Print Notice — proof facts and Notice — trust strip together as a single formatted sheet.",
    status: "deferred",
    surfaceIds: ["trim-ct-owner-notice", "trim-ct-owner-trust"],
    implementationProblem:
      "Board or treasury approval processes needed a printed copy of notice proof and trust copy together; screenshots were the only path.",
    implementation:
      "On Case, you can now print Notice packet combining Notice — proof facts and Notice — trust strip as a single formatted sheet.",
    implementationPlant: "not_done",
  },
  {
    id: "owner-furnish-010",
    label: "Export Notice as PDF",
    able: "Export Notice — proof facts as PDF for internal records.",
    status: "deferred",
    surfaceIds: ["trim-ct-owner-notice"],
    implementationProblem:
      "Records teams saved screenshots because Notice had no export path.",
    implementation:
      "On Notice — proof facts, you can now export a PDF of the proof block including parcel ID, county, assessed value, evidence-supported value, and estimated excess.",
    implementationPlant: "not_done",
  },
  {
    id: "owner-furnish-011",
    label: "Contingency % locked fact",
    able: "See contingency % shown as pre-set and locked at signing on Authorize block and Status facts.",
    status: "planted",
    surfaceIds: ["trim-ct-owner-authorize", "trim-ct-owner-status"],
    implementationProblem:
      "Fee percentage could read as negotiable at authorize time; Owners needed the signed percentage locked and repeated as a confirmed fact after filing.",
    implementation:
      "On Authorize block, you can now read contingency % shown as pre-set and locked at signing.\nOn Status facts, you can now read the same locked contingency % as a plain fact throughout the protest.",
  },
  {
    id: "owner-furnish-012",
    label: "Before/after fee dollar example",
    able: "Read a before/after fee dollar example on Authorize block beside locked contingency %.",
    status: "deferred",
    surfaceIds: ["trim-ct-owner-authorize"],
    implementationProblem:
      "Some jurisdictions require pre/post dollar fee estimates at authorization; Authorize block showed percentage only.",
    implementation:
      "On Authorize block, you can now read a before/after fee dollar example computed from estimated excess and locked contingency %, labeled as illustrative only.",
    implementationPlant: "not_done",
  },
  {
    id: "owner-furnish-013",
    label: "Fee basis footnote",
    able: "Read fee basis footnote on Authorize block stating contingency applies to the measured first-year reduction.",
    status: "deferred",
    surfaceIds: ["trim-ct-owner-authorize"],
    implementationProblem:
      "Percentage disclosure could imply a net-recovery-only framing without the gross-reduction basis stated.",
    implementation:
      "On Authorize block, you can now read fee basis footnote: contingency applies to the measured first-year reduction in assessed value multiplied by the applicable tax rate.",
    implementationPlant: "not_done",
  },
  {
    id: "owner-furnish-014",
    label: "Signer title capture",
    able: "Enter signer title on Authorize block for corporate authority records.",
    status: "deferred",
    surfaceIds: ["trim-ct-owner-authorize"],
    implementationProblem:
      "Authorization records lacked officer title beside name; corporate compliance files needed title to confirm signer's standing for the owning entity.",
    implementation:
      "On Authorize block, you can now enter signer title (e.g. Managing Member, President, Controller) stored alongside the Appointment of Agent record.",
    implementationPlant: "not_done",
  },
  {
    id: "owner-furnish-015",
    label: "Download signed Appointment of Agent PDF",
    able: "Download signed Appointment of Agent PDF after Authorize block completes.",
    status: "deferred",
    surfaceIds: ["trim-ct-owner-authorize"],
    implementationProblem:
      "Corporate records required a retained copy of the executed Appointment of Agent after e-signing; no download was offered.",
    implementation:
      "On Authorize block, after e-signing you can now download signed Appointment of Agent PDF for your corporate records.",
    implementationPlant: "not_done",
  },
  {
    id: "owner-furnish-016",
    label: "Print Authorize summary",
    able: "Print Authorize summary before e-sign for internal sign-off.",
    status: "deferred",
    surfaceIds: ["trim-ct-owner-authorize"],
    implementationProblem:
      "Dual-signer organizations needed a paper summary before an officer e-signed.",
    implementation:
      "On Authorize block, you can now print Authorize summary before completing e-sign, showing parcel ID, county, contingency %, and fee basis footnote.",
    implementationPlant: "not_done",
  },
  {
    id: "owner-furnish-017",
    label: "Tax treatment door on consent",
    able: "Open a Tax treatment door from Consent ticks with gross-vs-net framing and two-period timing note.",
    status: "deferred",
    surfaceIds: ["trim-ct-owner-consent"],
    implementationProblem:
      "Consent ticks carried no tax-timing context; Owners signed without a neutral disclosure of the two-period tax event.",
    implementation:
      "On Consent ticks, you can now open Tax treatment door with gross-vs-net framing, the two-tax-period timing note, and an explicit 'ask your accountant' disclaimer — Trim does not advise.",
    implementationPlant: "not_done",
  },
  {
    id: "owner-furnish-018",
    label: "Tax timing disclosure line",
    able: "Read a tax timing disclosure line on Consent ticks before authorization.",
    status: "deferred",
    surfaceIds: ["trim-ct-owner-consent"],
    implementationProblem:
      "The two-tax-period event was unstated at consent time.",
    implementation:
      "On Consent ticks, you can now read a tax timing disclosure line: 'Reduction and Trim's fee may fall in different tax years — confirm treatment with your accountant.'",
    implementationPlant: "not_done",
  },
  {
    id: "owner-furnish-019",
    label: "Entity identity confirmation on consent",
    able: "Confirm entity identity on Consent ticks before dollar detail unlocks.",
    status: "deferred",
    surfaceIds: ["trim-ct-owner-consent"],
    implementationProblem:
      "Wrong-entity consent was possible without an explicit identity match step before the dollar detail unlocks.",
    implementation:
      "On Consent ticks, you can now confirm entity identity (entity name + parcel situs match) before dollar detail and authorize unlock.",
    implementationPlant: "not_done",
  },
  {
    id: "owner-furnish-020",
    label: "Consent snapshot for audit",
    able: "Download a Consent ticks snapshot PDF timestamped at authorization.",
    status: "deferred",
    surfaceIds: ["trim-ct-owner-consent"],
    implementationProblem:
      "Post-authorization disputes lacked an immutable copy of the tick text the Owner accepted.",
    implementation:
      "On Consent ticks, after authorization you can now download a Consent snapshot PDF timestamped at authorize with the full tick text as displayed.",
    implementationPlant: "not_done",
  },
  {
    id: "owner-furnish-021",
    label: "Upload checklist with progress",
    able: "See upload checklist progress with item count and completion percentage on Upload docs block.",
    status: "planted",
    surfaceIds: ["trim-ct-owner-upload"],
    implementationProblem:
      "Optional income docs were listed without an aggregate completion signal; Owners couldn't tell at a glance whether the evidence package was complete.",
    implementation:
      "On Upload docs block, you can now see upload checklist progress with item count and completion percentage.",
  },
  {
    id: "owner-furnish-022",
    label: "Upload document preview inline",
    able: "Preview uploaded documents inline on Upload docs block without downloading.",
    status: "deferred",
    surfaceIds: ["trim-ct-owner-upload"],
    implementationProblem:
      "Owners re-downloaded each upload to confirm the correct file was attached.",
    implementation:
      "On Upload docs block, you can now preview each uploaded document inline without downloading.",
    implementationPlant: "not_done",
  },
  {
    id: "owner-furnish-023",
    label: "Upload missing-document highlight",
    able: "See missing items highlighted on Upload docs block until satisfied.",
    status: "deferred",
    surfaceIds: ["trim-ct-owner-upload"],
    implementationProblem:
      "Incomplete evidence packages were submitted because missing items were not visually distinct from optional ones.",
    implementation:
      "On Upload docs block, you can now see missing items highlighted until satisfied.",
    implementationPlant: "not_done",
  },
  {
    id: "owner-furnish-024",
    label: "Redaction guidance door",
    able: "Open a Redaction guidance door from Upload docs block explaining acceptable redaction depth for ARB evidence.",
    status: "deferred",
    surfaceIds: ["trim-ct-owner-upload"],
    implementationProblem:
      "Owners uploading rent rolls and P&L statements had no guidance on acceptable redaction depth for ARB evidence packages.",
    implementation:
      "On Upload docs block, you can now open a Redaction guidance door explaining which fields must be unredacted for ARB submission and which can be masked.",
    implementationPlant: "not_done",
  },
  {
    id: "owner-furnish-025",
    label: "Income approach value door",
    able: "Open an Income approach value door from Upload docs block explaining how rent roll + P&L strengthens the appeal.",
    status: "deferred",
    surfaceIds: ["trim-ct-owner-upload"],
    implementationProblem:
      "Owners didn't understand why the optional rent roll and P&L uploads mattered — the link to a stronger appeal argument was not stated.",
    implementation:
      "On Upload docs block, you can now open an Income approach value door explaining: with rent roll + trailing P&L, Trim can build an income-approach argument alongside equity comps, which often produces a larger reduction for commercial and multifamily parcels.",
    implementationPlant: "not_done",
  },
  {
    id: "owner-furnish-026",
    label: "Print upload manifest",
    able: "Print Upload manifest from Upload docs block listing uploaded files for physical records.",
    status: "deferred",
    surfaceIds: ["trim-ct-owner-upload"],
    implementationProblem:
      "Owners sending supplemental physical evidence packets had no manifest to include.",
    implementation:
      "On Upload docs block, you can now print an Upload manifest listing uploaded files, parcel ID, and case reference for physical records.",
    implementationPlant: "not_done",
  },
  {
    id: "owner-furnish-027",
    label: '"Trim invoices after reduction" education fact',
    able: "Read 'Trim invoices after the documented reduction is recorded by the county' on Reduction fact.",
    status: "planted",
    surfaceIds: ["trim-ct-owner-reduction"],
    implementationProblem:
      "Owners were uncertain when Trim would invoice, creating anxiety at reduction about whether Trim had already charged.",
    implementation:
      "On Reduction fact, you can now read: 'Trim invoices after the documented reduction is recorded by the county — no charge if no reduction.'",
  },
  {
    id: "owner-furnish-028",
    label: "Annual re-detect enrolled chip",
    able: "See a quiet Annual re-detection enrolled chip on Status facts after authorization.",
    status: "planted",
    surfaceIds: ["trim-ct-owner-status"],
    implementationProblem:
      "Annual monitoring enrollment was invisible after authorize; Owners had no quiet confirmation the recurrence loop was set.",
    implementation:
      "On Status facts, you can now see a quiet Annual re-detection enrolled chip after authorization confirming the parcel is in the standing appeal cycle.",
  },
  {
    id: "owner-furnish-029",
    label: "Informal offer visible on status",
    able: "Read the appraisal district's informal review offer amount on Status facts when one has been extended.",
    status: "deferred",
    surfaceIds: ["trim-ct-owner-status"],
    implementationProblem:
      "When the appraisal district offered an informal reduction, Owners could not see the offer amount from the case status.",
    implementation:
      "On Status facts, when an informal review offer has been extended you can now read the appraisal district's offer (assessed value reduction to $X) as a fact.",
    implementationPlant: "not_done",
  },
  {
    id: "owner-furnish-030",
    label: "Hearing logistics on status",
    able: "Read hearing date, time, ARB panel name, venue, and appearance mode on Status facts when a formal hearing is scheduled.",
    status: "deferred",
    surfaceIds: ["trim-ct-owner-status"],
    implementationProblem:
      "hearing_queued state showed no date, board name, venue, or appearance mode; Owners had no way to plan around the hearing.",
    implementation:
      "On Status facts, when a formal hearing is scheduled you can now read date, time, ARB panel / board name, venue, and appearance mode (in-person / remote).",
    implementationPlant: "not_done",
  },
  {
    id: "owner-furnish-031",
    label: "Worker identity on hearing-active",
    able: "Read the assigned Worker's first name and county coverage on Status facts during hearing-active state.",
    status: "deferred",
    surfaceIds: ["trim-ct-owner-status"],
    implementationProblem:
      "During hearing-active state, the Owner could not see who was appearing on their behalf.",
    implementation:
      "On Status facts, during hearing-active state you can now read the assigned Worker's first name and county coverage as a trust signal.",
    implementationPlant: "not_done",
  },
  {
    id: "owner-furnish-032",
    label: "Evidence prep substatus",
    able: "Read evidence prep substatus on Status facts during evidence_prep: comps ✓ / equity ✓ / income pending.",
    status: "deferred",
    surfaceIds: ["trim-ct-owner-status"],
    implementationProblem:
      "evidence_prep state was opaque — Owners couldn't tell whether Trim was still building the packet or whether it was ready for informal.",
    implementation:
      "On Status facts, during evidence_prep you can now read which evidence components are built: comps ✓ / uniformity grid ✓ / income approach (pending docs).",
    implementationPlant: "not_done",
  },
  {
    id: "owner-furnish-033",
    label: "Status-change email alert",
    able: "Opt in to email notification when the protest case changes admission state.",
    status: "deferred",
    surfaceIds: ["trim-ct-owner-status"],
    implementationProblem:
      "Owners checked manually for hearing scheduling and reductions instead of receiving state-change signal.",
    implementation:
      "On Status facts, you can now opt in to email notification when the protest case changes admission state.",
    implementationPlant: "not_done",
  },
  {
    id: "owner-furnish-034",
    label: "Weekly portfolio digest",
    able: "Opt in to a weekly digest email from Portfolio summarizing open cases, action-needed items, and upcoming hearings.",
    status: "deferred",
    surfaceIds: ["trim-ct-owner-portfolio"],
    implementationProblem:
      "Owners with multiple parcels missed stale or action-needed cases without a periodic portfolio digest.",
    implementation:
      "On Portfolio, you can now opt in to a weekly digest email summarizing open cases, action-needed items, and hearings within the next 14 days.",
    implementationPlant: "not_done",
  },
  {
    id: "owner-furnish-035",
    label: "Withdraw door",
    able: "Open Withdraw door from Status facts to request cancellation of an in-flight protest.",
    status: "deferred",
    surfaceIds: ["trim-ct-owner-status"],
    implementationProblem:
      "Owners could not initiate withdrawal from an authorized in-flight protest without contacting Operator support.",
    implementation:
      "On Status facts, you can now open Withdraw door to request cancellation of an in-flight protest case with a structured reason picker.",
    implementationPlant: "not_done",
  },
  {
    id: "owner-furnish-036",
    label: "Reduction calculation fact",
    able: "Read the savings calculation formula on Reduction fact: (before − after) × millage rate.",
    status: "planted",
    surfaceIds: ["trim-ct-owner-reduction"],
    implementationProblem:
      "Owners saw a raw savings figure without the formula tying it to the county's documented assessment reduction and millage rate.",
    implementation:
      "On Reduction fact, you can now read the savings calculation: (before-reduction assessed value − after-reduction assessed value) × county millage rate = estimated first-year property tax reduction.",
  },
  {
    id: "owner-furnish-037",
    label: "Export reduction as CSV",
    able: "Export the documented savings row as CSV from Reduction fact.",
    status: "deferred",
    surfaceIds: ["trim-ct-owner-reduction"],
    implementationProblem:
      "Tax and finance reviews required savings figures in spreadsheet form for reconciliation.",
    implementation:
      "On Reduction fact, you can now export the documented savings row as CSV including before/after values, millage rate, tax year, and case reference.",
    implementationPlant: "not_done",
  },
  {
    id: "owner-furnish-038",
    label: "Print reduction + invoice together",
    able: "Print Reduction + Invoice summary as a combined sheet.",
    status: "deferred",
    surfaceIds: ["trim-ct-owner-reduction", "trim-ct-owner-invoice"],
    implementationProblem:
      "AP processing required a combined sheet showing the documented savings and Trim's fee; the two facts lived in separate blocks with no combined print path.",
    implementation:
      "On Case, you can now print Reduction + Invoice summary combining documented savings and Trim's contingency fee on one sheet.",
    implementationPlant: "not_done",
  },
  {
    id: "owner-furnish-039",
    label: "Invoice dispute door",
    able: "Open Invoice dispute door from Invoice fact with reason picker.",
    status: "deferred",
    surfaceIds: ["trim-ct-owner-invoice"],
    implementationProblem:
      "Fee disputes had no structured in-product path; Owners emailed the Operator to contest an invoice amount.",
    implementation:
      "On Invoice fact, you can now open Invoice dispute door with reason picker (calculation dispute / savings not yet received / other) and case reference recap.",
    implementationPlant: "not_done",
  },
  {
    id: "owner-furnish-040",
    label: "Print invoice for AP",
    able: "Print invoice sheet from Invoice fact for accounts payable records.",
    status: "deferred",
    surfaceIds: ["trim-ct-owner-invoice"],
    implementationProblem:
      "Accounts payable records needed a formatted invoice sheet; the Invoice fact block had no print layout.",
    implementation:
      "On Invoice fact, you can now print invoice sheet showing fee amount, due date, measured savings basis, and Trim's contact details for AP records.",
    implementationPlant: "not_done",
  },
  {
    id: "owner-furnish-041",
    label: "W-9 / 1099 guidance door",
    able: "Open W-9 / 1099 guidance door from Invoice fact with vendor-classification copy.",
    status: "deferred",
    surfaceIds: ["trim-ct-owner-invoice"],
    implementationProblem:
      "AP teams lacked in-product guidance on how to classify Trim's contingency fee for 1099 or W-9 reporting.",
    implementation:
      "On Invoice fact, you can now open W-9 / 1099 guidance door with vendor-classification copy and a prompt to obtain Trim's W-9.",
    implementationPlant: "not_done",
  },
  {
    id: "owner-furnish-042",
    label: "Invoice-to-case trace lines",
    able: "Read Invoice fact lines tying fee to parcel ID, tax year, authorize date, and measured savings calculation.",
    status: "deferred",
    surfaceIds: ["trim-ct-owner-invoice"],
    implementationProblem:
      "The contingency fee could not be traced to the specific authorization date, documented savings, and tax year in one view.",
    implementation:
      "On Invoice fact, you can now read trace lines tying the invoice to: parcel ID, tax year, authorize date, measured savings calculation, and county reference.",
    implementationPlant: "not_done",
  },
  {
    id: "owner-furnish-043",
    label: "Escrow / lender note on reduction",
    able: "Read an escrow timing note on Reduction fact when a lender-reserve or escrow flag is present.",
    status: "deferred",
    surfaceIds: ["trim-ct-owner-reduction"],
    implementationProblem:
      "For mortgage-encumbered parcels, the reduction may flow through the servicer as an escrow adjustment; Owners were not told to expect this timing.",
    implementation:
      "On Reduction fact, when a lender-reserve or escrow flag is present you can now read an escrow timing note: 'Your reduction may appear as a lower future escrow payment rather than an immediate refund — confirm with your servicer.'",
    implementationPlant: "not_done",
  },
  {
    id: "owner-furnish-044",
    label: "No-fee-on-denial reaffirmation",
    able: "Read 'No reduction, no fee' reaffirmation on Reduction fact when the protest state is denied.",
    status: "deferred",
    surfaceIds: ["trim-ct-owner-reduction"],
    implementationProblem:
      "After a denial, some Owners assumed Trim would still invoice; the no-fee-on-loss guarantee needed restatement at the denial outcome.",
    implementation:
      "On Reduction fact, when the protest state is denied you can now read: 'No reduction, no fee. Trim's contingency applies only to documented savings.'",
    implementationPlant: "not_done",
  },
  {
    id: "owner-furnish-045",
    label: "Filter cases by protest state",
    able: "Filter Portfolio cases by protest admission state.",
    status: "deferred",
    surfaceIds: ["trim-ct-owner-portfolio"],
    implementationProblem:
      "Portfolio listed all parcels in one flat index; Owners opened each case to see whether action was needed.",
    implementation:
      "On Portfolio, you can now filter cases by protest state (notified / authorized / evidence_prep / hearing_queued / reduced / invoiced).",
    implementationPlant: "not_done",
  },
  {
    id: "owner-furnish-046",
    label: "Filter cases by county",
    able: "Filter Portfolio cases by county.",
    status: "deferred",
    surfaceIds: ["trim-ct-owner-portfolio"],
    implementationProblem:
      "Multi-county portfolios had no county filter; Owners scanned all parcels to find a specific county's cases.",
    implementation: "On Portfolio, you can now filter cases by county.",
    implementationPlant: "not_done",
  },
  {
    id: "owner-furnish-047",
    label: "Search cases by parcel ID or address",
    able: "Search Portfolio cases by parcel ID or property address.",
    status: "deferred",
    surfaceIds: ["trim-ct-owner-portfolio"],
    implementationProblem:
      "Owners reconciling county mail had no in-app search keyed to parcel ID or property address.",
    implementation:
      "On Portfolio, you can now search cases by parcel ID or property address.",
    implementationPlant: "not_done",
  },
  {
    id: "owner-furnish-048",
    label: "Sort portfolio columns",
    able: "Sort Portfolio rows by estimated savings, last state change, days-in-state, or county.",
    status: "deferred",
    surfaceIds: ["trim-ct-owner-portfolio"],
    implementationProblem:
      "Portfolio row order was fixed; Owners could not reorder by estimated savings, days-in-state, or county.",
    implementation:
      "On Portfolio, you can now sort rows by estimated savings, last state change, days-in-state, or county.",
    implementationPlant: "not_done",
  },
  {
    id: "owner-furnish-049",
    label: "Export portfolio to CSV",
    able: "Export the visible Portfolio row set as CSV.",
    status: "deferred",
    surfaceIds: ["trim-ct-owner-portfolio"],
    implementationProblem:
      "Finance and treasury reviews needed a portable portfolio extract without retyping facts.",
    implementation:
      "On Portfolio, you can now export the visible row set as CSV including parcel ID, county, protest state, contingency %, and estimated savings.",
    implementationPlant: "not_done",
  },
  {
    id: "owner-furnish-050",
    label: "Case activity timeline",
    able: "View Case activity timeline listing admission state changes and key events in chronological order.",
    status: "deferred",
    surfaceIds: ["trim-ct-owner-status"],
    implementationProblem:
      "Owners reconstructed protest history from scattered status facts without a unified timeline.",
    implementation:
      "On Case, you can now view Case activity timeline listing admission state changes and key events (authorize date, evidence built, hearing scheduled, outcome reported) in chronological order.",
    implementationPlant: "not_done",
  },
  {
    id: "owner-furnish-051",
    label: "Audit log glance on Case",
    able: "Open Audit log glance on Case listing Trim's actions under the Appointment of Agent.",
    status: "deferred",
    surfaceIds: ["trim-ct-owner-status"],
    implementationProblem:
      "Legitimacy disputes lacked an Owner-visible record of Trim's actions under the Appointment of Agent.",
    implementation:
      "On Case, you can now open Audit log glance listing Trim's actions under the Appointment of Agent for that specific protest case.",
    implementationPlant: "not_done",
  },
  {
    id: "owner-furnish-052",
    label: "Share read-only case link with counsel",
    able: "Share a read-only case link scoped to Notice, Status facts, and evidence status — viewable without Owner login authority.",
    status: "deferred",
    surfaceIds: ["trim-ct-owner-status", "trim-ct-owner-reduction"],
    implementationProblem:
      "Legal review required sharing screenshots because counsel could not view protest case facts read-only.",
    implementation:
      "On Case, you can now share a read-only link scoped to Notice — proof facts, Status facts, and evidence status — viewable without Owner login authority.",
    implementationPlant: "not_done",
  },
  {
    id: "owner-furnish-053",
    label: "Share read-only case link with accountant",
    able: "Share a read-only case link scoped to Reduction fact, Invoice fact, and tax year — viewable by accountants.",
    status: "deferred",
    surfaceIds: ["trim-ct-owner-reduction", "trim-ct-owner-invoice"],
    implementationProblem:
      "Accountants re-requested Reduction fact and Invoice fact details for tax preparation because no read-only share existed.",
    implementation:
      "On Case, you can now share a read-only link scoped to Reduction fact, Invoice fact, and tax year — viewable by accountants without Owner login authority.",
    implementationPlant: "not_done",
  },
  {
    id: "owner-furnish-054",
    label: "Copy parcel ID to clipboard",
    able: "Copy parcel ID to clipboard from Notice — proof facts.",
    status: "deferred",
    surfaceIds: ["trim-ct-owner-notice"],
    implementationProblem:
      "Owners called the appraisal district and had to manually transcribe the parcel ID from the notice.",
    implementation:
      "On Notice — proof facts, you can now copy parcel ID to clipboard for use with the county portal or phone support.",
    implementationPlant: "not_done",
  },
  {
    id: "owner-furnish-055",
    label: "Owner memo on case",
    able: "Add a private Owner memo note on Case visible only to the entity login.",
    status: "deferred",
    surfaceIds: ["trim-ct-owner-status"],
    implementationProblem:
      "Internal context lived in email threads outside the protest record.",
    implementation:
      "On Case, you can now add an Owner memo note visible only to your entity login — not shared with Trim or the Operator.",
    implementationPlant: "not_done",
  },
  {
    id: "owner-furnish-056",
    label: "Decline reason picker",
    able: "Pick a decline reason code on Decline block before confirming.",
    status: "deferred",
    surfaceIds: ["trim-ct-owner-decline"],
    implementationProblem:
      "Decline action had no structured reason capture for Owner's internal records.",
    implementation:
      "On Decline block, you can now pick a decline reason code (want to self-file / cost concern / already resolved / other) before confirming.",
    implementationPlant: "not_done",
  },
  {
    id: "owner-furnish-057",
    label: "Decline confirmation receipt",
    able: "Download a decline confirmation receipt after Decline block completes.",
    status: "deferred",
    surfaceIds: ["trim-ct-owner-decline"],
    implementationProblem:
      "Owners had no retained proof a case was declined before authorization.",
    implementation:
      "On Decline block, after confirm you can now download a decline confirmation receipt with timestamp and parcel ID.",
    implementationPlant: "not_done",
  },
  {
    id: "owner-furnish-058",
    label: "Post-authorize steps checklist",
    able: "Read a post-authorize steps checklist on Case after Authorize block completes.",
    status: "deferred",
    surfaceIds: ["trim-ct-owner-status", "trim-ct-owner-upload"],
    implementationProblem:
      "Owners did not know what happened after signing — whether to upload docs, wait, or do anything else.",
    implementation:
      "On Case, after Authorize block completes you can now read a post-authorize steps checklist: upload income docs (optional, improves case) → Trim builds evidence packet → informal review → formal hearing if needed.",
    implementationPlant: "not_done",
  },
];
