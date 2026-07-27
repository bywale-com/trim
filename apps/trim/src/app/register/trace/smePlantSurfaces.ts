/**
 * SME Implementation → CT surface catalog extension.
 * Join keys for every named surface invented in Trim SME implementations.
 * Merged into SURFACES in surfaces.ts.
 */
import type { Surface } from "./surfaces";

/** All SME-planted surfaces beyond the original core ones. */
export const SME_PLANT_SURFACES: Surface[] = [
  // ——————————————————————————————————————————
  // Operator — Jurisdiction / Licensure (Settings)
  // ——————————————————————————————————————————
  {
    id: "trim-ct-op-ptc-capacity",
    label: "PTC capacity",
    desk: "operator",
    ctPath: "/ct/operator/settings/jurisdiction",
    description: "TX PTC sponsor capacity (10-per-senior cap); slots used vs available.",
  },
  {
    id: "trim-ct-op-rollout-gate",
    label: "Rollout gate",
    desk: "operator",
    ctPath: "/ct/operator/settings/jurisdiction",
    description: "Which jurisdictions are open for filing vs blocked pending licensure.",
  },
  {
    id: "trim-ct-op-entity-signer",
    label: "Entity signer gate",
    desk: "operator",
    ctPath: "/ct/operator/settings/jurisdiction",
    description: "Per-state rules on who may sign the Appointment of Agent for an owning entity.",
  },
  {
    id: "trim-ct-op-appeal-window",
    label: "Appeal window calendar",
    desk: "operator",
    ctPath: "/ct/operator/settings/jurisdiction",
    description: "Per-county/state protest filing deadline (TX May 15 / 30-day from notice, etc.).",
  },
  {
    id: "trim-ct-op-fee-cap",
    label: "Contingency fee cap",
    desk: "operator",
    ctPath: "/ct/operator/settings/jurisdiction",
    description: "Statutory contingency-fee cap per jurisdiction; hard block above cap at Authorize.",
  },
  {
    id: "trim-ct-op-licensed-roster",
    label: "Licensed agent roster",
    desk: "operator",
    ctPath: "/ct/operator/settings/jurisdiction",
    description: "Per-state licensed agents-of-record (TDLR / equivalent) on Trim's filings.",
  },

  // ——————————————————————————————————————————
  // Operator — Work modals
  // ——————————————————————————————————————————
  {
    id: "trim-ct-op-hearing-report-review",
    label: "Hearing report review",
    desk: "operator",
    ctPath: "/ct/operator/work/exceptions",
    description: "Review Worker-submitted board outcome reports before closing the hearing state.",
  },
  {
    id: "trim-ct-op-inbound-board",
    label: "Inbound board mail",
    desk: "operator",
    ctPath: "/ct/operator/work/exceptions",
    description: "Match inbound board decision letters / e-notices to the correct protest case.",
  },
  {
    id: "trim-ct-op-standing-snapshot",
    label: "Standing snapshot",
    desk: "operator",
    ctPath: "/ct/operator/work/audit",
    description: "Appointment of Agent basis snapshot on the audit trail.",
  },

  // ——————————————————————————————————————————
  // Operator — Clients
  // ——————————————————————————————————————————
  {
    id: "trim-ct-op-detected-blocked",
    label: "Detected — blocked parcels",
    desk: "operator",
    ctPath: "/ct/operator/clients",
    description: "Detected over-assessment parcels blocked by jurisdiction or solicitation gate.",
  },
  {
    id: "trim-ct-op-invoice-collection",
    label: "Invoice collection status",
    desk: "operator",
    ctPath: "/ct/operator/clients",
    description: "Per-account invoice collection progress; dunning tier and amount outstanding.",
  },
  {
    id: "trim-ct-op-revoke-representation",
    label: "Revoke representation",
    desk: "operator",
    ctPath: "/ct/operator/clients",
    description: "Revoke the Appointment of Agent for a protest case.",
  },

  // ——————————————————————————————————————————
  // Owner — Authorize (SME additions)
  // ——————————————————————————————————————————
  {
    id: "trim-ct-owner-signer-title",
    label: "Signer title",
    desk: "owner",
    ctPath: "/ct/owner",
    description: "Officer/authorized-signer title attestation on the Appointment of Agent.",
  },
  {
    id: "trim-ct-owner-fee-example",
    label: "Fee example",
    desk: "owner",
    ctPath: "/ct/owner",
    description: "Worked dollar example: contingency % × estimated first-year savings.",
  },
  {
    id: "trim-ct-owner-non-collapsible-fee",
    label: "Non-collapsible fee disclosure",
    desk: "owner",
    ctPath: "/ct/owner",
    description: "Always-visible contingency fee disclosure block at Authorize.",
  },
  {
    id: "trim-ct-owner-contingency-lock",
    label: "Contingency % lock",
    desk: "owner",
    ctPath: "/ct/owner",
    description: "Contingency % locked fact after authorize; jurisdiction-cap verified.",
  },
  {
    id: "trim-ct-owner-agent-appointment",
    label: "Appointment of Agent reference",
    desk: "owner",
    ctPath: "/ct/owner",
    description: "Form reference for the state instrument (TX 50-162 or equivalent).",
  },
  {
    id: "trim-ct-owner-entity-identity",
    label: "Entity identity attestation",
    desk: "owner",
    ctPath: "/ct/owner",
    description: "Authorized signer attests they have authority to bind the owning entity.",
  },

  // ——————————————————————————————————————————
  // Owner — Notice / Trust (SME additions)
  // ——————————————————————————————————————————
  {
    id: "trim-ct-owner-trust-bundle",
    label: "Trust bundle",
    desk: "owner",
    ctPath: "/ct/owner",
    description: "Grouped trust proof on Notice: no-fee, county-verify, non-affiliation.",
  },
  {
    id: "trim-ct-owner-non-affiliation",
    label: "Non-affiliation disclaimer",
    desk: "owner",
    ctPath: "/ct/owner",
    description: "Trim is not the county, appraisal district, or ARB (TX TDLR ethics compliance).",
  },
  {
    id: "trim-ct-owner-county-verify",
    label: "County-site verify link",
    desk: "owner",
    ctPath: "/ct/owner",
    description: "Direct link to the county's own assessment search so the owner can verify the record independently.",
  },
  {
    id: "trim-ct-owner-analysis-framing",
    label: "Analysis-not-promise framing",
    desk: "owner",
    ctPath: "/ct/owner",
    description: "\"Estimated excess ≈ $Z, subject to appeal outcome\" — not a guaranteed result.",
  },
  {
    id: "trim-ct-owner-parcel-recap",
    label: "Parcel recap",
    desk: "owner",
    ctPath: "/ct/owner",
    description: "Parcel ID + county name recap strip so the owner can confirm which property this covers.",
  },

  // ——————————————————————————————————————————
  // Owner — Upload (SME additions)
  // ——————————————————————————————————————————
  {
    id: "trim-ct-owner-upload-header",
    label: "Upload purpose header",
    desk: "owner",
    ctPath: "/ct/owner",
    description: "Why we ask for each doc — maximizing win, not a filing requirement.",
  },
  {
    id: "trim-ct-owner-income-docs",
    label: "Income docs",
    desk: "owner",
    ctPath: "/ct/owner",
    description: "Optional rent roll and P&L upload for income-approach valuation maximization.",
  },
  {
    id: "trim-ct-owner-condition-docs",
    label: "Condition evidence",
    desk: "owner",
    ctPath: "/ct/owner",
    description: "Optional photos / condition evidence for cost-approach or equity arguments.",
  },

  // ——————————————————————————————————————————
  // Owner — Status / post-hearing (SME additions)
  // ——————————————————————————————————————————
  {
    id: "trim-ct-owner-evidence-status",
    label: "Evidence prep status",
    desk: "owner",
    ctPath: "/ct/owner",
    description: "Packet build progress (comps found, uniformity table, optional income docs).",
  },
  {
    id: "trim-ct-owner-hearing-status",
    label: "Hearing state facts",
    desk: "owner",
    ctPath: "/ct/owner",
    description: "Hearing date, Worker assigned, board type (ARB / BOE / VAB), in-person vs remote.",
  },
  {
    id: "trim-ct-owner-reduction-detail",
    label: "Reduction detail",
    desk: "owner",
    ctPath: "/ct/owner",
    description: "Before/after assessment values; measured savings = reduction × millage rate.",
  },
  {
    id: "trim-ct-owner-denial-reason",
    label: "Denial reason",
    desk: "owner",
    ctPath: "/ct/owner",
    description: "Board denial reason and escalation options (judicial / binding arbitration).",
  },

  // ——————————————————————————————————————————
  // Worker — SME additions
  // ——————————————————————————————————————————
  {
    id: "trim-ct-worker-evidence-preview",
    label: "Evidence preview",
    desk: "worker",
    ctPath: "/ct/worker",
    description: "Read-only evidence package preview before the Worker accepts the assignment.",
  },
  {
    id: "trim-ct-worker-county-rules",
    label: "County board rules",
    desk: "worker",
    ctPath: "/ct/worker",
    description: "County-specific board norms: evidence submission format, time limits, procedures.",
  },
  {
    id: "trim-ct-worker-appear-checklist",
    label: "Appearance checklist",
    desk: "worker",
    ctPath: "/ct/worker",
    description: "Pre-hearing checklist — in-person venue vs remote login, documents to bring.",
  },
];
