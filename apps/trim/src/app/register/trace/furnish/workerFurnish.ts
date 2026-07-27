import type { FurnishItem } from "../furnishTypes";

/**
 * Worker Furnish — supporting UI abilities for hearing pickup, packet use, outcome, and pay.
 * Writing pass; `status: "planted"` marks strips built in CT today.
 * Machine twin of docs/register/FURNISHING.md — Worker section.
 */
export const WORKER_FURNISH: FurnishItem[] = [
  {
    id: "worker-furnish-001",
    label: "Available hearing queue",
    able: "Scan available hearing assignments in Hearing queue by county, board, date, and appearance mode.",
    status: "planted",
    surfaceIds: ["trim-ct-worker-queue"],
    implementationProblem:
      "Workers needed a bounded pickup list rather than hearing work arriving as an opaque operator handoff.",
    implementation:
      "On Hearing queue, you can now scan available assignments by county, board, hearing date, and in-person or remote appearance mode.",
  },
  {
    id: "worker-furnish-002",
    label: "Evidence cutoff badge",
    able: "Read the evidence cutoff badge on Hearing queue before accepting a case.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-queue"],
    implementationProblem:
      "Workers could accept hearings without seeing whether the county evidence deadline had already passed or was close.",
    implementation:
      "On Hearing queue, you can now read an evidence cutoff badge before accepting a case.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-003",
    label: "County coverage fit",
    able: "See whether an assignment matches your county and board coverage on Hearing queue.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-queue"],
    implementationProblem:
      "Workers had no surface-level signal that an assignment matched their licensed or approved coverage.",
    implementation:
      "On Hearing queue, you can now see whether the assignment matches your county and board coverage before opening it.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-004",
    label: "Packet summary",
    able: "Open Case packet and read parcel facts, assessed value, target value, and argument outline.",
    status: "planted",
    surfaceIds: ["trim-ct-worker-packet"],
    implementationProblem:
      "Workers could not orient quickly to the valuation argument before a hearing.",
    implementation:
      "On Case packet, you can now read parcel facts, assessed value, target value, and the argument outline in one summary.",
  },
  {
    id: "worker-furnish-005",
    label: "Comparable table",
    able: "Review comparable properties and adjustments inside Case packet.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-packet"],
    implementationProblem:
      "The valuation case was not decomposed into the comps and adjustments a Worker must defend in front of the board.",
    implementation:
      "On Case packet, you can now review comparable properties, adjustments, and the resulting value support.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-006",
    label: "Uniformity grid",
    able: "Review the equity-uniformity grid inside Case packet.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-packet"],
    implementationProblem:
      "Uniformity arguments require a distinct grid; burying them in prose made the hearing script fragile.",
    implementation:
      "On Case packet, you can now review the equity-uniformity grid separately from the sales-comparison facts.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-007",
    label: "Authority proof",
    able: "Verify Appointment of Agent authority proof from Case packet before appearing.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-packet"],
    implementationProblem:
      "Workers needed confirmation that appearance authority was attached before attending a formal hearing.",
    implementation:
      "On Case packet, you can now verify the Appointment of Agent authority proof before appearing.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-008",
    label: "Confidential docs marker",
    able: "Distinguish Owner-uploaded confidential documents from public roll and comp facts in Case packet.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-packet"],
    implementationProblem:
      "Income docs and condition evidence can be sensitive; Workers needed scoped handling cues at packet time.",
    implementation:
      "On Case packet, you can now distinguish confidential Owner-uploaded documents from public roll and comp facts.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-009",
    label: "Accept assignment",
    able: "Accept an assignment and lock yourself to the case from Assignment.",
    status: "planted",
    surfaceIds: ["trim-ct-worker-assignment"],
    implementationProblem:
      "Hearing work needed an explicit Worker acceptance event before the state machine could move to hearing-active.",
    implementation:
      "On Assignment, you can now accept the case and lock yourself to the hearing assignment.",
  },
  {
    id: "worker-furnish-010",
    label: "Decline with reason",
    able: "Decline an assignment with a structured reason from Assignment.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-assignment"],
    implementationProblem:
      "Declines without reason codes left Operator dispatch unable to separate availability, conflict, and county-fit problems.",
    implementation:
      "On Assignment, you can now decline with a structured reason so Operator dispatch can requeue the case correctly.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-011",
    label: "Conflict attestation",
    able: "Confirm no conflict before accepting an assignment.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-assignment"],
    implementationProblem:
      "Workers needed an explicit conflict check before representing an Owner at a board hearing.",
    implementation:
      "On Assignment, you can now confirm no conflict before accepting the assignment.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-012",
    label: "Hearing logistics",
    able: "Read hearing date, time, board, venue, and remote link on Hearing logistics.",
    status: "planted",
    surfaceIds: ["trim-ct-worker-hearing"],
    implementationProblem:
      "Workers could not reliably distinguish board, venue, and appearance mode from the case packet alone.",
    implementation:
      "On Hearing logistics, you can now read hearing date, time, board, venue, and remote link when applicable.",
  },
  {
    id: "worker-furnish-013",
    label: "Arrival checklist",
    able: "Use a county-specific arrival checklist on Hearing logistics.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-hearing"],
    implementationProblem:
      "County hearing norms differ; generic prep checklists missed sign-in, exhibit, and board-procedure details.",
    implementation:
      "On Hearing logistics, you can now use a county-specific arrival checklist before appearance.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-014",
    label: "Hearing script",
    able: "Read the short argument script tied to Case packet facts on Hearing logistics.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-hearing", "trim-ct-worker-packet"],
    implementationProblem:
      "Workers needed a concise spoken path from the packet to board-ready argument, not only raw evidence.",
    implementation:
      "On Hearing logistics, you can now read the short argument script tied to Case packet facts.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-015",
    label: "Evidence submitted check",
    able: "Confirm evidence-submitted status before the hearing starts.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-hearing"],
    implementationProblem:
      "A Worker could appear without knowing whether the packet had been submitted under local cutoff rules.",
    implementation:
      "On Hearing logistics, you can now confirm evidence-submitted status before the hearing starts.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-016",
    label: "Outcome report",
    able: "Submit reduced, denied, or continued from Outcome report after the hearing.",
    status: "planted",
    surfaceIds: ["trim-ct-worker-outcome"],
    implementationProblem:
      "The state machine needed a Worker-entered board result to move from hearing-reported to reduced, denied, or requeued.",
    implementation:
      "On Outcome report, you can now submit reduced, denied, or continued after the hearing.",
  },
  {
    id: "worker-furnish-017",
    label: "Reduction amount",
    able: "Enter before and after assessed values on Outcome report when the board reduces value.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-outcome"],
    implementationProblem:
      "A reduced outcome without before/after values could not support measured savings or invoice generation.",
    implementation:
      "On Outcome report, you can now enter before and after assessed values when the board reduces value.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-018",
    label: "Board order reference",
    able: "Capture board order reference or upload proof from Outcome report.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-outcome"],
    implementationProblem:
      "Outcome records needed an auditable board-order reference before Owner reduction and invoice facts could be trusted.",
    implementation:
      "On Outcome report, you can now capture the board order reference or upload proof after the hearing.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-019",
    label: "Continued date",
    able: "Record the continued hearing date on Outcome report.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-outcome", "trim-ct-worker-hearing"],
    implementationProblem:
      "Continued outcomes need to re-enter scheduling with a new date instead of looking like denial or completion.",
    implementation:
      "On Outcome report, you can now record the continued hearing date so the case returns to Hearing logistics with the new schedule.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-020",
    label: "No-show reason",
    able: "Submit a no-show or cancellation reason from Outcome report.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-outcome"],
    implementationProblem:
      "No-show and cancellation events needed structured reasons for Operator exception handling.",
    implementation:
      "On Outcome report, you can now submit a no-show or cancellation reason after a missed or cancelled hearing.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-021",
    label: "Pay status",
    able: "Read assignment pay status after outcome submission on Pay status.",
    status: "planted",
    surfaceIds: ["trim-ct-worker-pay"],
    implementationProblem:
      "Workers needed confirmation that outcome submission created the pay record for the appearance.",
    implementation:
      "On Pay status, you can now read the assignment pay state after submitting the hearing outcome.",
  },
  {
    id: "worker-furnish-022",
    label: "Expected pay date",
    able: "Read expected pay date and payment method on Pay status.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-pay"],
    implementationProblem:
      "A paid/pending label alone did not tell Workers when or how appearance payment would arrive.",
    implementation:
      "On Pay status, you can now read expected pay date and payment method.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-023",
    label: "Pay exception",
    able: "See pay exception reason and next step on Pay status.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-pay"],
    implementationProblem:
      "Pay holds were opaque; Workers could not distinguish missing outcome proof from payment processing delay.",
    implementation:
      "On Pay status, you can now see pay exception reason and the next step needed to clear it.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-024",
    label: "Appearance history",
    able: "Review completed assignments and pay states on Pay status.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-pay"],
    implementationProblem:
      "Workers needed a simple ledger of completed appearances and payment states for reconciliation.",
    implementation:
      "On Pay status, you can now review completed assignments and pay states.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-025",
    label: "Submission receipt",
    able: "Read submission confirmation with case reference, outcome, and timestamp on Outcome report.",
    status: "planted",
    surfaceIds: ["trim-ct-worker-outcome"],
    implementationProblem:
      "Workers had no in-app confirmation that the outcome report was received and the case state was updated.",
    implementation:
      "On Outcome report, after submitting you can now read a submission confirmation with case reference, outcome submitted, and timestamp.",
  },
  {
    id: "worker-furnish-026",
    label: "Monthly earnings summary",
    able: "Read monthly appearance totals and pending payment totals on Pay status.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-pay"],
    implementationProblem:
      "Workers planning income could not see a monthly earnings total before payment was processed.",
    implementation:
      "On Pay status, you can now read a monthly earnings summary: total appearances completed this month, total fees earned, total paid, and total pending.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-027",
    label: "County checklist feedback",
    able: "Flag an out-of-date county checklist from Hearing logistics after a hearing.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-hearing"],
    implementationProblem:
      "Workers sometimes found changed rooms or dial-in details after arrival, but had no structured feedback path to update county checklists.",
    implementation:
      "On Hearing logistics, after the hearing you can now flag county checklist for update with a structured note, which queues an Operator review.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-028",
    label: "Property type badge",
    able: "Read property type badge on Hearing queue before opening a packet.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-queue"],
    implementationProblem:
      "Workers with commercial-only expertise had to open each packet to confirm property type before accepting.",
    implementation:
      "On Hearing queue, you can now read a property type badge (small commercial / multifamily) per assignment row before opening the packet.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-029",
    label: "Queue county filter",
    able: "Filter Hearing queue by county before opening assignments.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-queue"],
    implementationProblem:
      "Right now I can't narrow a multi-county hearing queue to the county I am actually covering today.",
    implementation:
      "On Hearing queue, you can now filter available assignments by county before opening assignment detail.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-030",
    label: "Queue appearance-mode filter",
    able: "Filter Hearing queue by in-person, remote, phone, or written appearance mode.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-queue"],
    implementationProblem:
      "Right now I can't separate remote hearings from in-person hearings when deciding what I can accept.",
    implementation:
      "On Hearing queue, you can now filter available assignments by appearance mode: in-person, remote, phone, or written.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-031",
    label: "Queue board section chip",
    able: "Read board section, docket, or room chip on Hearing queue rows.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-queue"],
    implementationProblem:
      "Right now I can't tell whether two hearings are in the same board section or conflicting rooms until I open each packet.",
    implementation:
      "On Hearing queue, you can now read board section, docket, or room chip on each assignment row.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-032",
    label: "Queue preparation-time estimate",
    able: "Read estimated prep time on Hearing queue based on packet type and evidence depth.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-queue", "trim-ct-worker-packet"],
    implementationProblem:
      "Right now I can't tell whether a case needs five minutes of review or a full income-approach prep block before accepting.",
    implementation:
      "On Hearing queue, you can now read estimated prep time based on packet type, evidence depth, and argument method.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-033",
    label: "Queue distance and travel time",
    able: "Read venue distance and estimated travel time for in-person hearings.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-queue", "trim-ct-worker-hearing"],
    implementationProblem:
      "Right now I can't judge whether an in-person hearing is reachable from my current county route before accepting it.",
    implementation:
      "On Hearing queue, you can now read venue distance and estimated travel time for in-person hearing assignments.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-034",
    label: "Queue conflict warning",
    able: "See conflicts with already accepted hearings before accepting another assignment.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-queue", "trim-ct-worker-assignment"],
    implementationProblem:
      "Right now I can't see schedule conflicts until after I accept and compare calendars myself.",
    implementation:
      "On Hearing queue, you can now see conflict warnings against already accepted hearings before opening Assignment.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-035",
    label: "Packet preview before accept",
    able: "Preview packet summary, argument type, evidence status, and authority status before accepting.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-packet", "trim-ct-worker-assignment"],
    implementationProblem:
      "Right now I can't preview enough of the packet to know whether I can competently take the hearing before accepting.",
    implementation:
      "On Assignment, you can now open packet preview before accept, showing summary, argument type, evidence status, and authority status.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-036",
    label: "Packet evidence completeness checklist",
    able: "Read whether comps, equity grid, income docs, condition proof, and authority proof are complete.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-packet"],
    implementationProblem:
      "Right now I can't tell which packet components are complete and which are missing without reading every section.",
    implementation:
      "On Case packet, you can now read an evidence completeness checklist for comps, equity grid, income docs, condition proof, and authority proof.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-037",
    label: "Packet weak-evidence warning",
    able: "See warning when comp count, income support, or condition proof is below county floor.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-packet"],
    implementationProblem:
      "Right now I can't spot a weak packet until I am already preparing the argument.",
    implementation:
      "On Case packet, you can now see weak-evidence warnings when comp count, income support, or condition proof falls below the county evidence floor.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-038",
    label: "Packet district evidence status",
    able: "Read whether the appraisal district evidence packet was requested, received, late, or missing.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-packet", "trim-ct-worker-hearing"],
    implementationProblem:
      "Right now I can't tell whether the district's evidence has arrived or whether late/missing evidence changes strategy.",
    implementation:
      "On Case packet, you can now read appraisal district evidence status: requested, received, late, missing, or reviewed.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-039",
    label: "Packet district-comp rebuttal",
    able: "Read rebuttal notes comparing Trim comps against district comps when available.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-packet"],
    implementationProblem:
      "Right now I can't defend Trim's comparable set against the district's comparable set without building my own notes.",
    implementation:
      "On Case packet, you can now read district-comp rebuttal notes comparing subject similarity, adjustments, age, size, use, and location.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-040",
    label: "Packet income-source confidence",
    able: "Read income-source confidence for rent roll, P&L, leases, expense ratio, and cap-rate support.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-packet"],
    implementationProblem:
      "Right now I can't tell whether an income approach rests on owner documents, public assumptions, or thin estimates.",
    implementation:
      "On Case packet, you can now read income-source confidence for rent roll, P&L, leases, expense ratio, and cap-rate support.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-041",
    label: "Packet condition-photo strip",
    able: "Review dated condition photos with repair bids or inspection references inside Case packet.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-packet"],
    implementationProblem:
      "Right now I can't present condition evidence cleanly because photos, bids, and inspection notes are not tied together.",
    implementation:
      "On Case packet, you can now review a condition-photo strip with date, location, repair bid, and inspection reference for each issue.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-042",
    label: "Packet opening position",
    able: "Read requested value, fallback value, and settlement guardrail before hearing.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-packet", "trim-ct-worker-hearing"],
    implementationProblem:
      "Right now I can't tell the opening ask, acceptable fallback, or settlement guardrail from the evidence summary alone.",
    implementation:
      "On Case packet, you can now read requested value, fallback value, and settlement guardrail before moving to Hearing logistics.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-043",
    label: "Packet prior-year outcome comparison",
    able: "Compare current requested value against prior-year protest outcome and carried value.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-packet"],
    implementationProblem:
      "Right now I can't see how the current argument relates to last year's reduction or denial.",
    implementation:
      "On Case packet, you can now compare current requested value against prior-year protest method, outcome, reduction percent, and carried value.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-044",
    label: "Packet offline freshness stamp",
    able: "Read when the downloadable packet PDF was generated and whether evidence changed since download.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-packet"],
    implementationProblem:
      "Right now I can't tell whether my offline packet is stale after a late evidence update.",
    implementation:
      "On Case packet, you can now read offline packet freshness stamp and a changed-since-download warning before using the PDF.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-045",
    label: "Assignment accept preconditions",
    able: "See required accept preconditions: conflict check, availability, authority proof, and checklist acknowledgement.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-assignment"],
    implementationProblem:
      "Right now I can't see all conditions I must satisfy before accepting a hearing assignment.",
    implementation:
      "On Assignment, you can now see accept preconditions for conflict check, availability, authority proof, and checklist acknowledgement.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-046",
    label: "Assignment decline reason detail",
    able: "Pick decline reason and optional detail for schedule conflict, county fit, packet issue, or emergency.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-assignment"],
    implementationProblem:
      "Right now I can't give enough structured decline detail for dispatch to requeue intelligently.",
    implementation:
      "On Assignment, you can now pick decline reason and optional detail for schedule conflict, county fit, packet issue, emergency, or unavailable travel.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-047",
    label: "Assignment accept receipt",
    able: "Read acceptance receipt with case reference, hearing time, and lock timestamp.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-assignment"],
    implementationProblem:
      "Right now I can't prove the assignment lock happened or see the timestamp after accepting.",
    implementation:
      "On Assignment, after accept you can now read acceptance receipt with case reference, hearing time, Worker name, and lock timestamp.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-048",
    label: "Assignment release request",
    able: "Request release from an accepted assignment with emergency reason and replacement deadline.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-assignment"],
    implementationProblem:
      "Right now I can't request release from an accepted hearing without messaging the Operator outside the system.",
    implementation:
      "On Assignment, you can now request release from an accepted assignment with emergency reason, availability note, and replacement deadline.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-049",
    label: "Assignment county-fit explanation",
    able: "Read why the assignment is eligible or ineligible for my county and board coverage.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-assignment", "trim-ct-worker-queue"],
    implementationProblem:
      "Right now I can't see the rule that made an assignment available to me when county or board coverage is nuanced.",
    implementation:
      "On Assignment, you can now read county-fit explanation showing county, board, license/approval basis, and any restriction.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-050",
    label: "Hearing logistics remote tech checklist",
    able: "Use remote tech checklist for meeting link, dial-in, camera, screen share, and backup phone.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-hearing"],
    implementationProblem:
      "Right now I can't confirm remote-hearing technical readiness before the hearing starts.",
    implementation:
      "On Hearing logistics, you can now use remote tech checklist for meeting link, dial-in, camera, screen share, backup phone, and exhibit access.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-051",
    label: "Hearing logistics in-person arrival plan",
    able: "Read parking, security, room, sign-in, and exhibit-copy instructions for in-person hearings.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-hearing"],
    implementationProblem:
      "Right now I can't plan arrival logistics for counties with parking, security, sign-in, and room quirks.",
    implementation:
      "On Hearing logistics, you can now read in-person arrival plan with parking, security, room, sign-in, and exhibit-copy instructions.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-052",
    label: "Hearing logistics evidence-copy count",
    able: "Read required exhibit copy count and upload rule for the county hearing format.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-hearing", "trim-ct-worker-packet"],
    implementationProblem:
      "Right now I can't tell whether this county needs portal upload, printed copies, or both for exhibits.",
    implementation:
      "On Hearing logistics, you can now read required exhibit copy count and upload rule for the assigned county and appearance mode.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-053",
    label: "Hearing logistics check-in timer",
    able: "See recommended arrival or dial-in time before scheduled hearing start.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-hearing"],
    implementationProblem:
      "Right now I can't tell how early the county expects me to check in or dial in.",
    implementation:
      "On Hearing logistics, you can now see recommended arrival or dial-in time before the scheduled hearing start.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-054",
    label: "Hearing logistics authority-at-check-in",
    able: "Open authority proof from Hearing logistics without returning to Case packet.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-hearing", "trim-ct-worker-packet"],
    implementationProblem:
      "Right now I can't pull authority proof quickly at check-in without backing out of the logistics flow.",
    implementation:
      "On Hearing logistics, you can now open authority proof directly from the check-in checklist.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-055",
    label: "Hearing logistics board etiquette notes",
    able: "Read board-specific etiquette and credibility guardrails before appearance.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-hearing"],
    implementationProblem:
      "Right now I can't see local board norms that affect credibility, such as short openings, evidence-only argument, or no tax-burden complaints.",
    implementation:
      "On Hearing logistics, you can now read board-specific etiquette and credibility guardrails before appearance.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-056",
    label: "Hearing logistics settlement authority",
    able: "Read settlement authority band and when Owner or Operator approval is required.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-hearing", "trim-ct-worker-packet"],
    implementationProblem:
      "Right now I can't tell whether I can accept an informal offer or must pause for Owner or Operator approval.",
    implementation:
      "On Hearing logistics, you can now read settlement authority band and approval requirement before discussing offers.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-057",
    label: "Hearing logistics county checklist version",
    able: "Read county checklist version, last reviewed date, and Operator owner.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-hearing"],
    implementationProblem:
      "Right now I can't tell whether a county checklist is fresh or who owns fixing it if it is stale.",
    implementation:
      "On Hearing logistics, you can now read county checklist version, last reviewed date, and Operator owner.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-058",
    label: "Hearing logistics same-day update banner",
    able: "See same-day changes to room, remote link, time, board, or evidence rules.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-hearing"],
    implementationProblem:
      "Right now I can't see late county changes unless an Operator messages me outside the page.",
    implementation:
      "On Hearing logistics, you can now see a same-day update banner for changed room, remote link, time, board, or evidence rules.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-059",
    label: "Appear checklist start confirmation",
    able: "Mark I am present, dialed in, or checked in before the hearing begins.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-hearing"],
    implementationProblem:
      "Right now I can't confirm I have appeared before the hearing starts, leaving dispatch blind to no-show risk.",
    implementation:
      "On Hearing logistics, you can now mark I am present, dialed in, or checked in before the hearing begins.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-060",
    label: "Appear checklist evidence reviewed",
    able: "Check off evidence reviewed, authority proof ready, and argument script opened before appearance.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-hearing", "trim-ct-worker-packet"],
    implementationProblem:
      "Right now I can't prove I reviewed packet, authority, and script before appearing.",
    implementation:
      "On Hearing logistics, you can now check off evidence reviewed, authority proof ready, and argument script opened before appearance.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-061",
    label: "Appear checklist backup contact",
    able: "Read Operator backup contact and escalation path for access or evidence problems.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-hearing"],
    implementationProblem:
      "Right now I can't quickly reach the right Operator when the board changes access, asks for proof, or rejects evidence.",
    implementation:
      "On Hearing logistics, you can now read Operator backup contact and escalation path for access, authority, or evidence problems.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-062",
    label: "Outcome offer capture",
    able: "Capture appraisal district informal offer or board offer before final outcome.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-outcome"],
    implementationProblem:
      "Right now I can't record an offer separately from the final reduced, denied, or continued result.",
    implementation:
      "On Outcome report, you can now capture appraisal district informal offer or board offer before submitting final outcome.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-063",
    label: "Outcome grounds reached",
    able: "Record whether market value, equal-and-uniform, income, or condition argument drove the result.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-outcome", "trim-ct-worker-packet"],
    implementationProblem:
      "Right now I can't tell Trim which argument actually moved the appraiser or board.",
    implementation:
      "On Outcome report, you can now record whether market value, equal-and-uniform, income, or condition argument drove the result.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-064",
    label: "Outcome board-order upload",
    able: "Upload board order, settlement sheet, or screenshot before submitting a reduced outcome.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-outcome"],
    implementationProblem:
      "Right now I can't attach proof at the moment I report a reduced outcome.",
    implementation:
      "On Outcome report, you can now upload board order, settlement sheet, or screenshot before submitting a reduced outcome.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-065",
    label: "Outcome denial reason",
    able: "Select denial reason such as insufficient evidence, board rejected comps, authority issue, or late evidence.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-outcome"],
    implementationProblem:
      "Right now I can't tell Operator why the board denied the protest without writing a long freeform note.",
    implementation:
      "On Outcome report, you can now select denial reason such as insufficient evidence, board rejected comps, authority issue, late evidence, or owner withdrawal.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-066",
    label: "Outcome continued logistics",
    able: "Record continued date, requested missing materials, and whether the same Worker can appear again.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-outcome", "trim-ct-worker-hearing"],
    implementationProblem:
      "Right now I can't capture enough continued-hearing detail to requeue the case correctly.",
    implementation:
      "On Outcome report, you can now record continued date, requested missing materials, and whether the same Worker can appear again.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-067",
    label: "Outcome no-show taxonomy",
    able: "Report no-show, cancellation, inaccessible remote room, or board reschedule with structured reason.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-outcome"],
    implementationProblem:
      "Right now I can't distinguish board no-show, Owner withdrawal, remote access failure, and my own emergency in outcome data.",
    implementation:
      "On Outcome report, you can now report no-show, cancellation, inaccessible remote room, board reschedule, or Worker emergency with structured reason.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-068",
    label: "Outcome remote failure proof",
    able: "Attach screenshot or note when remote link, dial-in, or meeting admission fails.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-outcome", "trim-ct-worker-hearing"],
    implementationProblem:
      "Right now I can't prove a remote access failure caused a missed or delayed appearance.",
    implementation:
      "On Outcome report, you can now attach screenshot or note when remote link, dial-in, or meeting admission fails.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-069",
    label: "Outcome time spent",
    able: "Record actual prep, wait, hearing, and travel time after an assignment.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-outcome", "trim-ct-worker-pay"],
    implementationProblem:
      "Right now I can't report actual prep, wait, hearing, and travel time for capacity and pay review.",
    implementation:
      "On Outcome report, you can now record actual prep, wait, hearing, and travel time before pay status updates.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-070",
    label: "Outcome county checklist feedback prompt",
    able: "Flag checklist issues while submitting outcome, tied to room, remote link, copy count, or sign-in step.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-outcome", "trim-ct-worker-hearing"],
    implementationProblem:
      "Right now I can't report that a county checklist was wrong at the same moment I finish the hearing report.",
    implementation:
      "On Outcome report, you can now flag county checklist issues tied to room, remote link, copy count, sign-in, or board-procedure step.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-071",
    label: "Outcome submission validation",
    able: "See required fields before submit based on reduced, denied, continued, or no-show outcome type.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-outcome"],
    implementationProblem:
      "Right now I can't tell which outcome fields are required until the Operator rejects or questions my report later.",
    implementation:
      "On Outcome report, you can now see required fields before submit based on reduced, denied, continued, or no-show outcome type.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-072",
    label: "Pay status fee amount",
    able: "Read assignment fee amount before and after outcome submission.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-pay", "trim-ct-worker-assignment"],
    implementationProblem:
      "Right now I can't see the fee amount tied to an assignment before I commit or after I submit outcome.",
    implementation:
      "On Pay status, you can now read assignment fee amount tied to the case before and after outcome submission.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-073",
    label: "Pay status hold reason",
    able: "Read pay hold reason with missing proof, review pending, invalid outcome, or payment setup issue.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-pay", "trim-ct-worker-outcome"],
    implementationProblem:
      "Right now I can't tell why payment is held or what evidence clears the hold.",
    implementation:
      "On Pay status, you can now read pay hold reason with missing proof, Operator review pending, invalid outcome, or payment setup issue.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-074",
    label: "Pay status payout method",
    able: "Read payout method, last four, expected date, and processing state.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-pay"],
    implementationProblem:
      "Right now I can't confirm which payout method will receive the appearance fee or when it should arrive.",
    implementation:
      "On Pay status, you can now read payout method, last four, expected date, and processing state for each appearance.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-075",
    label: "Pay status tax document prompt",
    able: "See W-9 or tax-document setup requirement before pay can be released.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-pay"],
    implementationProblem:
      "Right now I can't tell whether missing tax setup is blocking payment.",
    implementation:
      "On Pay status, you can now see W-9 or tax-document setup requirement before pay can be released.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-076",
    label: "Pay status dispute path",
    able: "Open a pay dispute path for fee amount, missing assignment, hold reason, or payment method issue.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-pay"],
    implementationProblem:
      "Right now I can't dispute a pay amount or missing assignment from the pay ledger.",
    implementation:
      "On Pay status, you can now open a pay dispute path for fee amount, missing assignment, hold reason, or payment method issue.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-077",
    label: "Pay status no-show impact",
    able: "Read how a no-show, cancellation, or remote failure affects pay eligibility.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-pay", "trim-ct-worker-outcome"],
    implementationProblem:
      "Right now I can't tell whether a cancellation, board no-show, or remote access failure is payable.",
    implementation:
      "On Pay status, you can now read how a no-show, cancellation, board reschedule, or remote failure affects pay eligibility.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-078",
    label: "Pay status travel stipend",
    able: "Read travel stipend eligibility for in-person hearings when county policy allows it.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-pay", "trim-ct-worker-hearing"],
    implementationProblem:
      "Right now I can't tell whether an in-person hearing includes travel stipend or only appearance fee.",
    implementation:
      "On Pay status, you can now read travel stipend eligibility for in-person hearings when county or assignment policy allows it.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-079",
    label: "Pay status monthly export",
    able: "Export completed assignments and pay states for the month.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-pay"],
    implementationProblem:
      "Right now I can't export my monthly assignment and pay ledger for reconciliation.",
    implementation:
      "On Pay status, you can now export completed assignments and pay states for the month as CSV.",
    implementationPlant: "not_done",
  },
  {
    id: "worker-furnish-080",
    label: "Worker reliability self-view",
    able: "Read my current-season accept rate, timely report rate, no-show count, and cancellation count.",
    status: "deferred",
    surfaceIds: ["trim-ct-worker-pay", "trim-ct-worker-assignment", "trim-ct-worker-outcome"],
    implementationProblem:
      "Right now I can't see the reliability metrics dispatch uses when deciding whether to offer more hearings.",
    implementation:
      "On Pay status, you can now read current-season reliability metrics: accept rate, timely report rate, no-show count, and cancellation count.",
    implementationPlant: "not_done",
  },
];
