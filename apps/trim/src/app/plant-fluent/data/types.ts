/**
 * Fluent plant data — Trim protest case types.
 * Duplicated from ct/trim-data/trimTypes — zero import edge into ct/.
 */

export type ProtestState =
  | "detected"
  | "blocked_jurisdiction"
  | "notified"
  | "consented"
  | "authorized"
  | "evidence_prep"
  | "informal"
  | "hearing_queued"
  | "hearing_active"
  | "hearing_reported"
  | "reduced"
  | "denied"
  | "invoiced"
  | "collected"
  | "declined"
  | "recurring";

export type PropertyType = "commercial" | "multifamily" | "industrial" | "retail";
export type HearingType = "arb-in-person" | "arb-remote" | "arb-virtual" | "informal";

export type TrimDoc = {
  id: string;
  label: string;
  uploaded: boolean;
};

export type ProtestCase = {
  id: string;
  parcelId: string;
  county: string;
  countyAppraisalDistrict: string;
  taxYear: number;
  ownerEntityName: string;
  propertyAddress: string;
  propertyType: PropertyType;
  assessedValue: number;
  evidenceValue: number;
  excessEstimate: number;
  millageRate: number;
  status: ProtestState;
  contingencyPct?: number;
  feeCapPct: number;
  consentTicks: { see: boolean; understand: boolean; withIt: boolean };
  docs: TrimDoc[];
  daysInState: number;
  countyVerifyUrl: string;
  appealDeadline: string;
  workerId?: string;
  workerName?: string;
  hearingDate?: string;
  hearingBoard?: string;
  hearingType?: HearingType;
  reducedValue?: number;
  taxSavings?: number;
  invoiceAmount?: number;
  denialReason?: string;
};

export type WorkerAssignment = {
  id: string;
  caseId: string;
  parcelId: string;
  ownerEntityName: string;
  propertyAddress: string;
  county: string;
  countyAppraisalDistrict: string;
  hearingDate: string;
  hearingTime: string;
  hearingBoard: string;
  hearingType: HearingType;
  assessedValue: number;
  evidenceValue: number;
  status: "available" | "assigned" | "completed" | "declined";
  workerId?: string;
  workerName?: string;
  outcome?: "reduced" | "denied" | "continued";
  reducedValue?: number;
  packetReady: boolean;
};

export type TrimAuditEntry = {
  id: string;
  caseId: string;
  timestamp: string;
  actor: string;
  action: string;
};

export type TrimJurisdiction = {
  countyCode: string;
  countyName: string;
  cad: string;
  state: string;
  status: "active" | "blocked" | "pending";
  ptcCapacity: number;
  ptcUsed: number;
  feeCapPct: number;
  appealWindowNote: string;
  appealDeadline: string;
  eFileAvailable: boolean;
  camaFreshness: "current" | "stale" | "unknown";
  rollImportStatus: "ok" | "pending" | "failed";
  compCoverage: "high" | "medium" | "low";
  entitySignerRule: string;
  licensedAgent?: string;
  rolloutGate: "open" | "blocked" | "limited";
  note?: string;
};

export const PROTEST_STATE_LABELS: Record<ProtestState, string> = {
  detected: "Detected",
  blocked_jurisdiction: "Blocked",
  notified: "Notified",
  consented: "Consented",
  authorized: "Authorized",
  evidence_prep: "Evidence prep",
  informal: "Informal hearing",
  hearing_queued: "Hearing queued",
  hearing_active: "Hearing active",
  hearing_reported: "Outcome reported",
  reduced: "Reduced",
  denied: "Denied",
  invoiced: "Invoiced",
  collected: "Collected",
  declined: "Declined",
  recurring: "Recurring",
};

/** Map state → Fluent Badge color */
export type BadgeColor =
  | "brand"
  | "danger"
  | "important"
  | "informative"
  | "severe"
  | "subtle"
  | "success"
  | "warning";

export const PROTEST_STATE_BADGE: Record<ProtestState, BadgeColor> = {
  detected: "subtle",
  blocked_jurisdiction: "danger",
  notified: "brand",
  consented: "brand",
  authorized: "brand",
  evidence_prep: "informative",
  informal: "informative",
  hearing_queued: "warning",
  hearing_active: "warning",
  hearing_reported: "informative",
  reduced: "success",
  denied: "danger",
  invoiced: "success",
  collected: "success",
  declined: "subtle",
  recurring: "subtle",
};

/** Whether a persona may view/act on a protest state. */
export function admits(persona: "owner" | "operator" | "worker", state: ProtestState): boolean {
  const map: Record<ProtestState, Array<"owner" | "operator" | "worker">> = {
    detected: ["operator"],
    blocked_jurisdiction: ["operator"],
    notified: ["owner", "operator"],
    consented: ["owner", "operator"],
    authorized: ["owner", "operator"],
    evidence_prep: ["owner", "operator"],
    informal: ["owner", "operator"],
    hearing_queued: ["owner", "operator", "worker"],
    hearing_active: ["owner", "operator", "worker"],
    hearing_reported: ["owner", "operator", "worker"],
    reduced: ["owner", "operator"],
    denied: ["owner", "operator"],
    invoiced: ["owner", "operator"],
    collected: ["owner", "operator"],
    declined: ["owner", "operator"],
    recurring: ["owner", "operator"],
  };
  return map[state]?.includes(persona) ?? false;
}
