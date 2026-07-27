import type { AuditEntry } from "./types";

/** Immutable action trail under POA (docs/wiring/WIRING.md "Audit log"). */
export const AUDIT_LOG: AuditEntry[] = [
  {
    id: "hf-1",
    caseId: "harborline-freight",
    timestamp: "2026-05-30",
    actor: "Detection job",
    action: "Matched record (confidence 0.94)",
  },
  {
    id: "hf-2",
    caseId: "harborline-freight",
    timestamp: "2026-06-02",
    actor: "Activation delivery",
    action: "Notice delivered via LinkedIn message",
  },
  {
    id: "hf-3",
    caseId: "harborline-freight",
    timestamp: "2026-06-03",
    actor: "Business Officer",
    action: "Consent ticks completed (see / understand / with it)",
  },
  {
    id: "hf-4",
    caseId: "harborline-freight",
    timestamp: "2026-06-04",
    actor: "Business Officer",
    action: "Authorization signed (POA); contingency 12% locked",
  },
  {
    id: "hf-5",
    caseId: "harborline-freight",
    timestamp: "2026-06-08",
    actor: "Filing worker",
    action: "Packet filed with Illinois State Treasurer",
  },
  {
    id: "hf-6",
    caseId: "harborline-freight",
    timestamp: "2026-06-14",
    actor: "Follow-up job",
    action: "Kicked back — missing document (W-9)",
  },
  {
    id: "vr-1",
    caseId: "vantage-retail",
    timestamp: "2026-05-15",
    actor: "Detection job",
    action: "Matched record (confidence 0.98)",
  },
  {
    id: "vr-2",
    caseId: "vantage-retail",
    timestamp: "2026-05-16",
    actor: "Activation delivery",
    action: "Notice delivered via email",
  },
  {
    id: "vr-3",
    caseId: "vantage-retail",
    timestamp: "2026-05-17",
    actor: "Business Officer",
    action: "Consent ticks completed; authorization signed, contingency 15% locked",
  },
  {
    id: "vr-4",
    caseId: "vantage-retail",
    timestamp: "2026-05-20",
    actor: "Filing worker",
    action: "Packet filed with Florida Department of Financial Services",
  },
  {
    id: "vr-5",
    caseId: "vantage-retail",
    timestamp: "2026-06-10",
    actor: "Follow-up job",
    action: "State approved claim",
  },
  {
    id: "vr-6",
    caseId: "vantage-retail",
    timestamp: "2026-06-18",
    actor: "Remittance reconcile",
    action: "Confirmed claimant paid $27,300",
  },
  {
    id: "vr-7",
    caseId: "vantage-retail",
    timestamp: "2026-06-19",
    actor: "Invoice/billing service",
    action: "Invoice issued — $4,095 (15% cut)",
  },
];

export function auditForCase(caseId: string): AuditEntry[] {
  return AUDIT_LOG.filter((entry) => entry.caseId === caseId);
}
