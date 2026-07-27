/**
 * Fluent plant data — audit trail seed.
 * Duplicated from ct/trim-data/trimAudit — zero import edge into ct/.
 */
import type { TrimAuditEntry } from "./types";

export const TRIM_AUDIT: TrimAuditEntry[] = [
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
    timestamp: "2025-04-07 09:45",
    actor: "Owner",
    action: "Consent ticks completed",
  },
  {
    id: "aud-009",
    caseId: "rc-travis-2025-authorized",
    timestamp: "2025-04-07 10:12",
    actor: "Owner",
    action: "Appointment of Agent signed — 20% contingency, Travis County 2025",
  },
  {
    id: "aud-010",
    caseId: "rc-harris-2025-queued",
    timestamp: "2025-04-10 08:00",
    actor: "System",
    action: "Over-assessment detected — HCAD assessed $12,400,000 vs evidence $9,800,000",
  },
  {
    id: "aud-011",
    caseId: "rc-harris-2025-queued",
    timestamp: "2025-04-11 10:30",
    actor: "System",
    action: "Evidence packet built — 6 comps, uniformity grid, income approach (rent roll attached)",
  },
  {
    id: "aud-012",
    caseId: "rc-harris-2025-queued",
    timestamp: "2025-04-21 14:05",
    actor: "System",
    action: "Hearing scheduled — HCAD ARB Panel 4, 2025-08-14 9:00 AM, in-person",
  },
  {
    id: "aud-013",
    caseId: "rc-dallas-2024-reduced",
    timestamp: "2024-04-12 11:00",
    actor: "System",
    action: "Over-assessment detected — DCAD assessed $6,300,000 vs evidence $5,100,000",
  },
  {
    id: "aud-014",
    caseId: "rc-dallas-2024-reduced",
    timestamp: "2024-07-20 15:22",
    actor: "Worker",
    action: "ARB hearing completed — board reduced assessed value to $5,200,000",
  },
  {
    id: "aud-015",
    caseId: "rc-tarrant-2024-invoiced",
    timestamp: "2024-04-09 09:00",
    actor: "System",
    action: "Over-assessment detected — TAD assessed $3,800,000 vs evidence $3,000,000",
  },
  {
    id: "aud-016",
    caseId: "rc-tarrant-2024-invoiced",
    timestamp: "2024-08-05 16:40",
    actor: "Operator",
    action: "Reduction confirmed — ARB reduced to $3,050,000; tax savings $20,265",
  },
  {
    id: "aud-017",
    caseId: "rc-tarrant-2024-invoiced",
    timestamp: "2024-08-06 09:00",
    actor: "System",
    action: "Invoice generated — $4,053 (20% of $20,265 documented savings)",
  },
];

export function auditForCase(caseId: string): TrimAuditEntry[] {
  return TRIM_AUDIT.filter((e) => e.caseId === caseId);
}
