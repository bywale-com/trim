/**
 * Blueprint seed data — isolated duplicate of src/app/ct/data/*. The
 * Blueprint document must never import from `ct/` (isolation rule), so the
 * same product facts are re-authored here rather than shared.
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

export type CaseDoc = { id: string; label: string; uploaded: boolean };

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
};

export const RECOVERY_CASES: RecoveryCase[] = [
  {
    id: "cascade-metal-works",
    companyName: "Cascade Metal Works LLC",
    jurisdiction: "OH",
    agency: "Ohio Department of Commerce, Division of Unclaimed Funds",
    caseRef: "OH-UP-88214",
    amount: 18420,
    status: "notified",
    consentTicks: { see: false, understand: false, withIt: false },
    docs: [
      { id: "articles", label: "Articles of incorporation", uploaded: false },
      { id: "w9", label: "W-9", uploaded: false },
    ],
    daysInState: 2,
  },
  {
    id: "bluepeak-logistics",
    companyName: "Bluepeak Logistics Inc.",
    jurisdiction: "TX",
    agency: "Texas Comptroller of Public Accounts",
    caseRef: "TX-UCP-55031",
    amount: 6150,
    status: "consented",
    consentTicks: { see: true, understand: true, withIt: true },
    docs: [
      { id: "articles", label: "Articles of incorporation", uploaded: false },
      { id: "w9", label: "W-9", uploaded: false },
    ],
    daysInState: 1,
  },
  {
    id: "northwind-structural",
    companyName: "Northwind Structural Co.",
    jurisdiction: "CA",
    agency: "California State Controller's Office",
    caseRef: "CA-SCO-90427",
    amount: 42900,
    status: "filing",
    contingencyPct: 15,
    consentTicks: { see: true, understand: true, withIt: true },
    docs: [
      { id: "articles", label: "Articles of incorporation", uploaded: true },
      { id: "w9", label: "W-9", uploaded: true },
    ],
    daysInState: 12,
  },
  {
    id: "harborline-freight",
    companyName: "Harborline Freight Partners",
    jurisdiction: "IL",
    agency: "Illinois State Treasurer",
    caseRef: "IL-UPD-33190",
    amount: 9730,
    status: "kicked_back",
    contingencyPct: 12,
    consentTicks: { see: true, understand: true, withIt: true },
    docs: [
      { id: "articles", label: "Articles of incorporation", uploaded: true },
      { id: "w9", label: "W-9", uploaded: false },
    ],
    kickbackReason: "missing_document",
    daysInState: 6,
  },
  {
    id: "vantage-retail",
    companyName: "Vantage Retail Group",
    jurisdiction: "FL",
    agency: "Florida Department of Financial Services",
    caseRef: "FL-DFS-71205",
    amount: 27300,
    status: "invoiced",
    contingencyPct: 15,
    consentTicks: { see: true, understand: true, withIt: true },
    docs: [
      { id: "articles", label: "Articles of incorporation", uploaded: true },
      { id: "w9", label: "W-9", uploaded: true },
    ],
    daysInState: 34,
    paidDate: "2026-06-18",
    invoiceAmount: 4095,
  },
];

export type JurisdictionStatus = "registered" | "blocked";

export type JurisdictionEntry = {
  code: string;
  name: string;
  status: JurisdictionStatus;
  model: string;
  filingMethod?: "digital" | "mail-original" | "notarized-original";
  renewalDue?: string;
  note?: string;
};

export const JURISDICTIONS: JurisdictionEntry[] = [
  { code: "OH", name: "Ohio", status: "registered", model: "Treasury finder registration", filingMethod: "digital" },
  { code: "TX", name: "Texas", status: "registered", model: "No separate finder license", filingMethod: "digital" },
  { code: "CA", name: "California", status: "registered", model: "Treasury finder registration", filingMethod: "digital" },
  {
    code: "IL",
    name: "Illinois",
    status: "registered",
    model: "Individual-licensed finder (Treasurer)",
    filingMethod: "digital",
    note: "Licensed individual of record required, not a blanket corporate license.",
  },
  { code: "FL", name: "Florida", status: "registered", model: "No separate finder license", filingMethod: "digital" },
  {
    code: "NY",
    name: "New York",
    status: "registered",
    model: "Treasury finder registration",
    filingMethod: "mail-original",
    note: "Wet-ink signature required — no digital claim path.",
  },
  { code: "NJ", name: "New Jersey", status: "registered", model: "Treasury finder registration", filingMethod: "digital" },
  { code: "NV", name: "Nevada", status: "registered", model: "No separate finder license", filingMethod: "digital" },
  { code: "NC", name: "North Carolina", status: "registered", model: "No separate finder license", filingMethod: "digital" },
  { code: "PA", name: "Pennsylvania", status: "registered", model: "Treasury finder certification", filingMethod: "digital" },
  {
    code: "OR",
    name: "Oregon",
    status: "registered",
    model: "Licensed finder + POA bundling",
    filingMethod: "digital",
    renewalDue: "2026-09-30",
    note: "License must be attached to every POA submission.",
  },
  {
    code: "TN",
    name: "Tennessee",
    status: "blocked",
    model: "PI license via Public Safety Commission",
    note: "Blocked pending PI licensure — separate regulator from Treasury states.",
  },
  {
    code: "ME",
    name: "Maine",
    status: "blocked",
    model: "Reciprocal reporting — holding vs. domicile state unresolved",
    note: "Blocked pending legal review of which state's rule governs.",
  },
];

export type AuditEntry = { id: string; caseId: string; timestamp: string; actor: string; action: string };

export const AUDIT_LOG: AuditEntry[] = [
  { id: "hf-1", caseId: "harborline-freight", timestamp: "2026-05-30", actor: "Detection job", action: "Matched record (confidence 0.94)" },
  { id: "hf-2", caseId: "harborline-freight", timestamp: "2026-06-02", actor: "Activation delivery", action: "Notice delivered via LinkedIn message" },
  { id: "hf-3", caseId: "harborline-freight", timestamp: "2026-06-03", actor: "Business Officer", action: "Consent ticks completed" },
  { id: "hf-4", caseId: "harborline-freight", timestamp: "2026-06-04", actor: "Business Officer", action: "Authorization signed; contingency 12% locked" },
  { id: "hf-5", caseId: "harborline-freight", timestamp: "2026-06-08", actor: "Filing worker", action: "Packet filed with Illinois State Treasurer" },
  { id: "hf-6", caseId: "harborline-freight", timestamp: "2026-06-14", actor: "Follow-up job", action: "Kicked back — missing document (W-9)" },
  { id: "vr-1", caseId: "vantage-retail", timestamp: "2026-05-15", actor: "Detection job", action: "Matched record (confidence 0.98)" },
  { id: "vr-2", caseId: "vantage-retail", timestamp: "2026-05-17", actor: "Business Officer", action: "Consent + authorization signed; contingency 15% locked" },
  { id: "vr-3", caseId: "vantage-retail", timestamp: "2026-05-20", actor: "Filing worker", action: "Packet filed with Florida DFS" },
  { id: "vr-4", caseId: "vantage-retail", timestamp: "2026-06-18", actor: "Remittance reconcile", action: "Confirmed claimant paid $27,300" },
  { id: "vr-5", caseId: "vantage-retail", timestamp: "2026-06-19", actor: "Invoice/billing service", action: "Invoice issued — $4,095 (15% cut)" },
];

export function getRecoveryCase(id: string): RecoveryCase | undefined {
  return RECOVERY_CASES.find((c) => c.id === id);
}

export function auditForCase(caseId: string): AuditEntry[] {
  return AUDIT_LOG.filter((entry) => entry.caseId === caseId);
}

export function formatUsd(amount: number): string {
  return amount.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

export function formatDate(iso: string): string {
  const d = new Date(`${iso}T00:00:00`);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}
