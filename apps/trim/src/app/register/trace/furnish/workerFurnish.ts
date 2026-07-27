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
];
