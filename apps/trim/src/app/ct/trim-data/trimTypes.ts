/**
 * Trim CT data shapes — Owner / Operator / Worker click-through.
 * Domain: Texas-metro commercial and multifamily property tax protest.
 * Uses ProtestState from trimWorld (not the unclaimed-property CaseStatus).
 */
import type { ProtestState } from "../../register/world/trimWorld";
import type { CtTagTone } from "../../shared/primitives";

export type PropertyType = "commercial" | "multifamily" | "industrial" | "retail";

export type HearingType = "arb-in-person" | "arb-remote" | "arb-virtual" | "informal";

export type TrimDoc = {
  id: string;
  label: string;
  uploaded: boolean;
};

/** A protest case (parcel × tax year) in the Trim world. */
export type ProtestCase = {
  id: string;
  parcelId: string;
  county: string;
  countyAppraisalDistrict: string;
  taxYear: number;
  ownerEntityName: string;
  propertyAddress: string;
  propertyType: PropertyType;
  /** Appraisal district's assessed value. */
  assessedValue: number;
  /** Trim's evidence-based market value estimate. */
  evidenceValue: number;
  /** Estimated excess = assessedValue - evidenceValue. */
  excessEstimate: number;
  /** County millage rate (total rate per $100 AV). */
  millageRate: number;
  status: ProtestState;
  contingencyPct?: number;
  /** Jurisdiction fee cap for this county. */
  feeCapPct: number;
  consentTicks: { see: boolean; understand: boolean; withIt: boolean };
  docs: TrimDoc[];
  daysInState: number;
  /** CAMA/county verification URL. */
  countyVerifyUrl: string;
  /** Protest filing deadline. */
  appealDeadline: string;
  /** Worker assigned for formal hearing. */
  workerId?: string;
  workerName?: string;
  hearingDate?: string;
  hearingBoard?: string;
  hearingType?: HearingType;
  /** ARB/board reduction ruling (assessedValue → reducedValue). */
  reducedValue?: number;
  /** Tax savings = (assessedValue - reducedValue) × millageRate / 100. */
  taxSavings?: number;
  /** Trim invoice = taxSavings × contingencyPct / 100. */
  invoiceAmount?: number;
  denialReason?: string;
};

export const PROTEST_STATE_META: Record<ProtestState, { label: string; tone: CtTagTone }> = {
  detected: { label: "Detected", tone: "neutral" },
  blocked_jurisdiction: { label: "Blocked", tone: "danger" },
  notified: { label: "Notified", tone: "accent" },
  consented: { label: "Consented", tone: "accent" },
  authorized: { label: "Authorized", tone: "accent" },
  evidence_prep: { label: "Evidence prep", tone: "accent" },
  informal: { label: "Informal hearing", tone: "accent" },
  hearing_queued: { label: "Hearing queued", tone: "warning" },
  hearing_active: { label: "Hearing active", tone: "warning" },
  hearing_reported: { label: "Outcome reported", tone: "accent" },
  reduced: { label: "Reduced", tone: "success" },
  denied: { label: "Denied", tone: "danger" },
  invoiced: { label: "Invoiced", tone: "success" },
  collected: { label: "Collected", tone: "success" },
  declined: { label: "Declined", tone: "neutral" },
  recurring: { label: "Recurring", tone: "neutral" },
};

/** Worker hearing assignment. */
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
