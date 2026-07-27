/**
 * Audit trail entries for Trim protest cases —
 * Appointment of Agent actions across the book.
 */
import type { TrimAuditEntry } from "./trimTypes";

export const TRIM_AUDIT: TrimAuditEntry[] = [
  // Harris 2025 — notified case
  {
    id: "aud-001",
    caseId: "rc-harris-2025-notified",
    timestamp: "2025-04-08 09:12",
    actor: "System",
    action: "Over-assessment detected — HCAD assessed $4,850,000 vs evidence value $3,900,000",
  },
  {
    id: "aud-002",
    caseId: "rc-harris-2025-notified",
    timestamp: "2025-04-09 11:04",
    actor: "System",
    action: "Owner notice sent — parcel 0651780000001, HCAD 2025 tax year",
  },
  // Bexar 2025 — consented
  {
    id: "aud-003",
    caseId: "rc-bexar-2025-consented",
    timestamp: "2025-04-07 14:33",
    actor: "System",
    action: "Over-assessment detected — BCAD assessed $7,200,000 vs evidence value $5,800,000",
  },
  {
    id: "aud-004",
    caseId: "rc-bexar-2025-consented",
    timestamp: "2025-04-08 09:50",
    actor: "System",
    action: "Owner notice sent — parcel 0523819200001, BCAD 2025 tax year",
  },
  {
    id: "aud-005",
    caseId: "rc-bexar-2025-consented",
    timestamp: "2025-04-09 16:21",
    actor: "Owner",
    action: "Consent ticks completed (see=true, understand=true, withIt=true)",
  },
  // Travis 2025 — authorized
  {
    id: "aud-006",
    caseId: "rc-travis-2025-authorized",
    timestamp: "2025-04-05 10:00",
    actor: "System",
    action: "Over-assessment detected — TCAD assessed $9,100,000 vs evidence value $7,400,000",
  },
  {
    id: "aud-007",
    caseId: "rc-travis-2025-authorized",
    timestamp: "2025-04-06 13:17",
    actor: "System",
    action: "Owner notice sent — parcel 0403820010001, TCAD 2025 tax year",
  },
  {
    id: "aud-008",
    caseId: "rc-travis-2025-authorized",
    timestamp: "2025-04-07 09:44",
    actor: "Owner",
    action: "Consent ticks completed",
  },
  {
    id: "aud-009",
    caseId: "rc-travis-2025-authorized",
    timestamp: "2025-04-07 10:02",
    actor: "Owner",
    action: "Appointment of Agent signed — contingency 20% locked",
  },
  // Harris 2025 — hearing queued
  {
    id: "aud-010",
    caseId: "rc-harris-2025-queued",
    timestamp: "2025-04-01 09:00",
    actor: "System",
    action: "Protest case authorized — evidence packet build queued",
  },
  {
    id: "aud-011",
    caseId: "rc-harris-2025-queued",
    timestamp: "2025-04-10 14:30",
    actor: "Operator",
    action: "Evidence packet built — 8 comps, uniformity table, ARB summary attached",
  },
  {
    id: "aud-012",
    caseId: "rc-harris-2025-queued",
    timestamp: "2025-04-15 10:00",
    actor: "System",
    action: "ARB hearing scheduled — HCAD ARB Panel 4, 2025-08-14 9:00 AM",
  },
  // Dallas 2024 — reduced
  {
    id: "aud-013",
    caseId: "rc-dallas-2024-reduced",
    timestamp: "2024-08-22 11:00",
    actor: "Worker",
    action: "ARB hearing attended — DCAD ARB Panel 3",
  },
  {
    id: "aud-014",
    caseId: "rc-dallas-2024-reduced",
    timestamp: "2024-08-22 14:15",
    actor: "Worker",
    action: "Outcome reported — reduced to $5,200,000 from $6,300,000",
  },
  {
    id: "aud-015",
    caseId: "rc-dallas-2024-reduced",
    timestamp: "2024-08-23 09:30",
    actor: "Operator",
    action: "Reduction confirmed — tax savings $28,600 at 2.59% millage",
  },
  // Tarrant 2024 — invoiced
  {
    id: "aud-016",
    caseId: "rc-tarrant-2024-invoiced",
    timestamp: "2024-09-10 10:00",
    actor: "Operator",
    action: "Trim contingency invoice issued — $4,053 (20% × $20,265 savings)",
  },
];

export function auditForCase(caseId: string): TrimAuditEntry[] {
  return TRIM_AUDIT.filter((e) => e.caseId === caseId);
}
