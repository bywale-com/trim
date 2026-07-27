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
  block("impl-expected-days", "Expected days", "Per-state expected claim turnaround on Jurisdiction table.", "agency-ct-expected-days"),
  block("impl-fee-cap", "Fee cap %", "Statutory finder fee cap per state.", "agency-ct-fee-cap"),

  modal("impl-reconciling-queue", "Reconciling queue", "Cases awaiting reconciling before close.", "agency-ct-reconciling"),
  block("impl-original-unavailable", "Original unavailable path", "Affidavit / alternate when original instrument missing.", "biz-ct-original-unavailable"),
  block("impl-indemnification-clause", "Indemnification clause", "Indemnity language on authorize / packet.", "biz-ct-indemnification"),
  block("impl-legal-research-flag", "Legal research flag", "Flags Case for legal research hold.", "biz-ct-legal-research-flag"),
  block("impl-state-affirmation-packet", "State affirmation packet", "State-required affirmation docs.", "biz-ct-state-affirmation"),
  modal("impl-appeal-queue", "Appeal queue", "Appeals after denial / kickback.", "agency-ct-appeal"),
  block("impl-re-affirm-door", "Re-affirm door", "Re-affirm after stale authorization.", "biz-ct-re-affirm"),
  block("impl-inbound-matcher", "Inbound matcher", "Match inbound state mail to Case.", "agency-ct-inbound-matcher"),
  block("impl-withdraw-door", "Withdraw door", "Withdraw a filed claim.", "biz-ct-withdraw"),

  block("impl-dual-role-disclosure", "Dual-role disclosure", "Claimant vs holder dual-role notice.", "biz-ct-dual-role"),
  block("impl-reciprocal-reporting", "Reciprocal reporting footnote", "Holder reporting reciprocal note.", "biz-ct-reciprocal-reporting"),
  block("impl-securities-template", "Securities template", "Securities property claim template.", "biz-ct-securities-template"),
  block("impl-insurance-template", "Insurance template", "Insurance property claim template.", "biz-ct-insurance-template"),
  block("impl-commercial-conflict", "Commercial conflict check", "Commercial conflict gate.", "agency-ct-commercial-conflict"),

  block("impl-successor-standing", "Successor standing gate", "Successor standing before Notice.", "agency-ct-successor-standing"),
  block("impl-legal-staleness", "Legal staleness review", "Stale standing / docs review.", "agency-ct-legal-staleness"),
  block("impl-revoke-representation", "Revoke representation", "Revoke agency representation.", "agency-ct-revoke-representation"),
  block("impl-ma-escheat", "M&A escheat allocation note", "M&A escheat allocation on Client.", "agency-ct-ma-escheat"),
  block("impl-signer-title", "Signer title", "Officer title on Authorize.", "biz-ct-signer-title"),
  block("impl-knowledge-attestation", "Knowledge attestation", "Knowledge attestation tick.", "biz-ct-knowledge-attestation"),
  block("impl-public-entity", "Public entity classifier", "Public entity classification.", "agency-ct-public-entity"),
  block("impl-claimant-entity", "Claimant entity", "Claimant entity identity on Case.", "biz-ct-claimant-entity"),
  block("impl-wage-legal", "Wage property legal review gate", "Wage property legal review.", "biz-ct-wage-legal"),
  block("impl-revival-cert", "Revival certificate", "Entity revival certificate upload.", "biz-ct-revival-cert"),
  block("impl-denied-standing", "Denied standing admission branch", "Denied-standing admission path.", "biz-ct-denied-standing"),
  block("impl-standing-snapshot", "Standing basis snapshot", "Standing basis snapshot on Audit.", "agency-ct-standing-snapshot"),

  block("impl-fee-example", "Fee Example Line", "Worked fee example on Authorize.", "biz-ct-fee-example"),
  block("impl-revised-amount", "Revised Amount Workflow", "Revised amount after state change.", "biz-ct-revised-amount"),
  block("impl-non-collapsible-fee", "Non-collapsible Fee Disclosure Block", "Always-visible fee disclosure.", "biz-ct-non-collapsible-fee"),
  block("impl-fee-obligor", "Fee Obligor Acknowledgment", "Who owes the contingency fee.", "biz-ct-fee-obligor"),
  block("impl-default-vs-offered", "Default Vs Offered Fee", "Default vs offered fee display.", "biz-ct-default-vs-offered"),
  block("impl-estimated-fee", "Estimated Fee Line", "Estimated fee dollars.", "biz-ct-estimated-fee"),
  block("impl-post-authorize-steps", "Post-Authorize Steps List", "What happens after authorize.", "biz-ct-post-authorize-steps"),

  modal("impl-state-admin-workload", "State Admin Workload Dashboard", "Ops view of state admin workload.", "agency-ct-state-admin-workload"),

  block("impl-client-dedupe", "Client Deduplication Workflow", "EIN / SOS merge before Case.", "agency-ct-client-dedupe"),
  block("impl-entity-identity", "Entity Identity Attestation", "Officer attests entity identity.", "biz-ct-entity-identity"),

  block("impl-scam-category", "Scam-category block", "Scam-category trust copy.", "biz-ct-scam-category"),
  block("impl-trust-bundle", "Trust bundle", "Grouped trust proof on Notice.", "biz-ct-trust-bundle"),
  block("impl-condensed-trust", "Condensed trust bundle", "Compact trust proof.", "biz-ct-condensed-trust"),
  block("impl-non-affiliation", "Non-affiliation footer", "Non-affiliation disclaimer.", "biz-ct-non-affiliation"),
  block("impl-no-escrow", "No-escrow one-liner", "State pays you / no escrow.", "biz-ct-no-escrow"),
  block("impl-before-after-fee", "Before/after fee dollar lines", "Gross vs net fee dollars.", "biz-ct-before-after-fee"),
  block("impl-fee-basis", "Fee basis note", "Fee basis explanation.", "biz-ct-fee-basis"),
  block("impl-upload-header", "Upload packet header", "Purpose header on Upload.", "biz-ct-upload-header"),
  block("impl-purpose-line", "Purpose line", "Why we ask for this doc.", "biz-ct-purpose-line"),
  block("impl-caseref-recap", "CaseRef recap", "Case reference recap strip.", "biz-ct-caseref-recap"),

  block("impl-licensed-roster", "Licensed individual roster", "Licensed individuals of record.", "agency-ct-licensed-roster"),
  block("impl-license-coverage", "License coverage summary", "License coverage by state.", "agency-ct-license-coverage"),
  block("impl-or-license-slot", "OR license document slot", "Oregon license document slot.", "agency-ct-or-license-slot"),
  block("impl-submit-approval", "Submit-for-approval step", "Pre-approval submit step.", "agency-ct-submit-approval"),
  block("impl-invoice-dispute", "Invoice dispute item", "Dispute an invoice line.", "biz-ct-invoice-dispute"),
  block("impl-detected-blocked", "Detected blocked rows", "Detected but blocked inventory.", "agency-ct-detected-blocked"),
  block("impl-invoice-collection", "Invoice collection status", "Invoice collection status.", "agency-ct-invoice-collection"),
  block("impl-row-completeness", "Row completeness gate", "Jurisdiction row completeness.", "agency-ct-row-completeness"),
  block("impl-bank-confirm", "Bank confirm upload door", "Upload bank confirmation of payment.", "biz-ct-bank-confirm"),
];
