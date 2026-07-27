/**
 * Shared CT data shapes — Business + Ops click-through. Machine twin of the
 * Recovery Case admission table in docs/register/WORLD.md.
 */
export type CaseStatus =
  | "detected"
  | "notified"
  | "consented"
  | "authorized"
  | "filing"
  | "kicked_back"
  | "filed"
  | "paid_claimant"
  | "invoiced"
  | "declined"
  | "blocked_jurisdiction";

export type KickbackReason = "name_mismatch" | "missing_document" | "notarization_incomplete" | "stale_address" | "other";

export const KICKBACK_REASON_LABEL: Record<KickbackReason, string> = {
  name_mismatch: "Name mismatch",
  missing_document: "Missing document",
  notarization_incomplete: "Notarization incomplete",
  stale_address: "Stale address on file",
  other: "Other procedural denial",
};

export type CaseDoc = {
  id: string;
  label: string;
  uploaded: boolean;
};

export type RecoveryCase = {
  id: string;
  companyName: string;
  jurisdiction: string;
  agency: string;
  caseRef: string;
  amount: number;
  status: CaseStatus;
  contingencyPct?: number;
  consentTicks: { see: boolean; understand: boolean; withIt: boolean };
  docs: CaseDoc[];
  kickbackReason?: KickbackReason;
  daysInState: number;
  paidDate?: string;
  invoiceAmount?: number;
  filingMethod?: "digital" | "mail-original" | "notarized-original";
};

export type JurisdictionStatus = "registered" | "blocked";

export type JurisdictionEntry = {
  code: string;
  name: string;
  status: JurisdictionStatus;
  model: string;
  filingMethod?: "digital" | "mail-original" | "notarized-original";
  expectedDays?: number;
  feeCapPct?: number;
  officialSearchUrl?: string;
  renewalDue?: string;
  note?: string;
};

export type AuditEntry = {
  id: string;
  caseId: string;
  timestamp: string;
  actor: string;
  action: string;
};
