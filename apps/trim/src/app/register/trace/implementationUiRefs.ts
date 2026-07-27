/**
 * Named UI surfaces invented in SME Implementation click-paths.
 * Planted in CT — surfaceId joins to surfaces.ts / SurfaceBoundary.
 */
import type { HowUiRef } from "../howAnalysis/types";

function block(id: string, label: string, does: string, surfaceId: string): HowUiRef {
  return { id, kind: "block", label, does, surfaceId };
}

function modal(id: string, label: string, does: string, surfaceId: string): HowUiRef {
  return { id, kind: "modal", label, does, surfaceId };
}

/** Deduped labels from the SME implementation writing pass — now CT-routable. */
export const IMPLEMENTATION_UI_REFS: HowUiRef[] = [
  block("impl-expected-days", "Expected days", "Per-county expected protest turnaround on Jurisdiction table.", "trim-ct-op-jurisdiction"),
  block("impl-fee-cap", "Fee cap %", "Jurisdiction-aware contingency cap.", "trim-ct-op-jurisdiction"),

  modal("impl-reconciling-queue", "Reconciling queue", "Cases awaiting reduction or invoice reconciliation.", "trim-ct-op-exceptions"),
  block("impl-original-unavailable", "Original unavailable path", "Alternate authority/evidence path when a county artifact is unavailable.", "trim-ct-owner-upload"),
  block("impl-indemnification-clause", "Indemnification clause", "Representation language on authorize / packet.", "trim-ct-owner-authorize"),
  block("impl-legal-research-flag", "Legal research flag", "Flags protest case for legal research hold.", "trim-ct-op-exceptions"),
  block("impl-state-affirmation-packet", "State affirmation packet", "County-required affirmation docs.", "trim-ct-owner-upload"),
  modal("impl-appeal-queue", "Appeal queue", "Post-ARB escalation queue.", "trim-ct-op-exceptions"),
  block("impl-re-affirm-door", "Re-affirm door", "Re-affirm after stale authorization.", "trim-ct-owner-authorize"),
  block("impl-inbound-matcher", "Inbound matcher", "Match inbound county mail to protest case.", "trim-ct-op-exceptions"),
  block("impl-withdraw-door", "Withdraw door", "Withdraw a filed protest.", "trim-ct-owner-status"),

  block("impl-dual-role-disclosure", "Dual-role disclosure", "Private representative disclosure.", "trim-ct-owner-notice"),
  block("impl-reciprocal-reporting", "Reciprocal reporting footnote", "Cross-jurisdiction note.", "trim-ct-owner-notice"),
  block("impl-securities-template", "Securities template", "Special evidence template.", "trim-ct-owner-upload"),
  block("impl-insurance-template", "Insurance template", "Special evidence template.", "trim-ct-owner-upload"),
  block("impl-commercial-conflict", "Commercial conflict check", "Commercial conflict gate.", "trim-ct-op-exceptions"),

  block("impl-successor-standing", "Successor standing gate", "Owner standing before Notice.", "trim-ct-op-exceptions"),
  block("impl-legal-staleness", "Legal staleness review", "Stale standing / docs review.", "trim-ct-op-exceptions"),
  block("impl-revoke-representation", "Revoke representation", "Revoke agency representation.", "trim-ct-owner-decline"),
  block("impl-ma-escheat", "M&A escheat allocation note", "Entity allocation note on Clients.", "trim-ct-op-portfolio"),
  block("impl-signer-title", "Signer title", "Signer title on Authorize.", "trim-ct-owner-authorize"),
  block("impl-knowledge-attestation", "Knowledge attestation", "Knowledge attestation tick.", "trim-ct-owner-consent"),
  block("impl-public-entity", "Public entity classifier", "Public entity classification.", "trim-ct-op-jurisdiction"),
  block("impl-claimant-entity", "Claimant entity", "Owner entity identity on Protest Case.", "trim-ct-owner-case"),
  block("impl-wage-legal", "Wage property legal review gate", "Legal review gate.", "trim-ct-op-exceptions"),
  block("impl-revival-cert", "Revival certificate", "Entity revival certificate upload.", "trim-ct-owner-upload"),
  block("impl-denied-standing", "Denied standing admission branch", "Denied-standing admission path.", "trim-ct-owner-status"),
  block("impl-standing-snapshot", "Standing basis snapshot", "Standing basis snapshot on Audit.", "trim-ct-op-audit"),

  block("impl-fee-example", "Fee Example Line", "Worked fee example on Authorize.", "trim-ct-owner-authorize"),
  block("impl-revised-amount", "Revised Amount Workflow", "Revised amount after county outcome.", "trim-ct-owner-reduction"),
  block("impl-non-collapsible-fee", "Non-collapsible Fee Disclosure Block", "Always-visible fee disclosure.", "trim-ct-owner-authorize"),
  block("impl-fee-obligor", "Fee Obligor Acknowledgment", "Who owes the contingency fee.", "trim-ct-owner-consent"),
  block("impl-default-vs-offered", "Default Vs Offered Fee", "Default vs offered fee display.", "trim-ct-owner-consent"),
  block("impl-estimated-fee", "Estimated Fee Line", "Estimated fee dollars.", "trim-ct-owner-authorize"),
  block("impl-post-authorize-steps", "Post-Authorize Steps List", "What happens after authorize.", "trim-ct-owner-authorize"),

  modal("impl-state-admin-workload", "State Admin Workload Dashboard", "Ops view of jurisdiction workload.", "trim-ct-op-jurisdiction"),

  block("impl-client-dedupe", "Client Deduplication Workflow", "Entity / parcel merge before Protest Case.", "trim-ct-op-portfolio"),
  block("impl-entity-identity", "Entity Identity Attestation", "Signer attests entity identity.", "trim-ct-owner-authorize"),

  block("impl-scam-category", "Scam-category block", "Scam-category trust copy.", "trim-ct-owner-trust"),
  block("impl-trust-bundle", "Trust bundle", "Grouped trust proof on Notice.", "trim-ct-owner-trust"),
  block("impl-condensed-trust", "Condensed trust bundle", "Compact trust proof.", "trim-ct-owner-trust"),
  block("impl-non-affiliation", "Non-affiliation footer", "Non-affiliation disclaimer.", "trim-ct-owner-trust"),
  block("impl-no-escrow", "No-escrow one-liner", "County reduction / no escrow.", "trim-ct-owner-reduction"),
  block("impl-before-after-fee", "Before/after fee dollar lines", "Gross vs net fee dollars.", "trim-ct-owner-invoice"),
  block("impl-fee-basis", "Fee basis note", "Fee basis explanation.", "trim-ct-owner-invoice"),
  block("impl-upload-header", "Upload packet header", "Purpose header on Upload.", "trim-ct-owner-upload"),
  block("impl-purpose-line", "Purpose line", "Why we ask for this doc.", "trim-ct-owner-upload"),
  block("impl-caseref-recap", "CaseRef recap", "Case reference recap strip.", "trim-ct-owner-case"),

  block("impl-licensed-roster", "Licensed individual roster", "Licensed individuals of record.", "trim-ct-op-jurisdiction"),
  block("impl-license-coverage", "License coverage summary", "License coverage by county.", "trim-ct-op-jurisdiction"),
  block("impl-or-license-slot", "OR license document slot", "License document slot.", "trim-ct-op-jurisdiction"),
  block("impl-submit-approval", "Submit-for-approval step", "Pre-approval submit step.", "trim-ct-op-jurisdiction"),
  block("impl-invoice-dispute", "Invoice dispute item", "Dispute an invoice line.", "trim-ct-owner-invoice"),
  block("impl-detected-blocked", "Detected blocked rows", "Detected but blocked inventory.", "trim-ct-op-exceptions"),
  block("impl-invoice-collection", "Invoice collection status", "Invoice collection status.", "trim-ct-op-collections"),
  block("impl-row-completeness", "Row completeness gate", "Jurisdiction row completeness.", "trim-ct-op-jurisdiction"),
  block("impl-bank-confirm", "Bank confirm upload door", "Upload reduction/payment confirmation.", "trim-ct-owner-reduction"),
];
