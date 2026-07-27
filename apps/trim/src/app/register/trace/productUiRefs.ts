/**
 * Canonical product UI refs + short aliases for inline highlight matching.
 * Trim domain: Owner · Operator · Worker desks.
 */
import type { HowUiRef } from "../howAnalysis/types";
import {
  AuthorizeDoor,
  ConsentTicks,
  DeclineDoor,
  InvoiceFact,
  NoticeProof,
  NoticeTrust,
  OwnerPortfolio,
  ProtestCase,
  ReductionFact,
  StatusFacts,
  UploadDocs,
} from "../howAnalysis/businessCore";
import {
  AuditLog,
  Clients,
  CollectionsQueue,
  ExceptionQueue,
  JurisdictionTable,
  Settings,
  Work,
  WorkerDispatch,
} from "../howAnalysis/agencyCore";

const WorkerQueue: HowUiRef = {
  id: "mod-worker-queue",
  kind: "module",
  label: "Hearing queue",
  does: "Available hearing assignments in the Worker's county/board coverage.",
  surfaceId: "trim-ct-worker-queue",
};

const WorkerPacket: HowUiRef = {
  id: "modal-worker-packet",
  kind: "modal",
  label: "Case packet",
  does: "Prepared evidence package: parcel facts, comps, uniformity table, argument outline.",
  surfaceId: "trim-ct-worker-packet",
};

const WorkerAssignment: HowUiRef = {
  id: "block-worker-assignment",
  kind: "block",
  label: "Assignment",
  does: "Accept or decline a hearing assignment; locks the Worker to the case.",
  surfaceId: "trim-ct-worker-assignment",
};

const WorkerHearing: HowUiRef = {
  id: "block-worker-hearing",
  kind: "block",
  label: "Hearing logistics",
  does: "Date, time, board/venue, in-person vs remote, checklist before appearance.",
  surfaceId: "trim-ct-worker-hearing",
};

const WorkerOutcome: HowUiRef = {
  id: "block-worker-outcome",
  kind: "block",
  label: "Outcome report",
  does: "Board result, reduction amount, and Worker report submission.",
  surfaceId: "trim-ct-worker-outcome",
};

const WorkerPay: HowUiRef = {
  id: "block-worker-pay",
  kind: "block",
  label: "Pay status",
  does: "Per-appearance fee status; payment issued or pending.",
  surfaceId: "trim-ct-worker-pay",
};

export const PRODUCT_UI_REFS: HowUiRef[] = [
  OwnerPortfolio,
  ProtestCase,
  NoticeProof,
  NoticeTrust,
  ConsentTicks,
  AuthorizeDoor,
  UploadDocs,
  StatusFacts,
  ReductionFact,
  InvoiceFact,
  DeclineDoor,
  Clients,
  Work,
  Settings,
  ExceptionQueue,
  JurisdictionTable,
  WorkerDispatch,
  CollectionsQueue,
  AuditLog,
  WorkerQueue,
  WorkerPacket,
  WorkerAssignment,
  WorkerHearing,
  WorkerOutcome,
  WorkerPay,
  // Short aliases for inline highlight matching
  { ...NoticeProof, id: "alias-notice-proof", label: "Notice proof" },
  { ...NoticeTrust, id: "alias-trust-strip", label: "Trust strip" },
  { ...AuthorizeDoor, id: "alias-authorize", label: "Authorize" },
  { ...DeclineDoor, id: "alias-decline", label: "Decline" },
  { ...AuditLog, id: "alias-audit", label: "Audit" },
  { ...ExceptionQueue, id: "alias-exceptions", label: "Exceptions" },
  { ...JurisdictionTable, id: "alias-jurisdiction-table-short", label: "jurisdiction registry" },
  { ...JurisdictionTable, id: "alias-jurisdiction", label: "Jurisdiction" },
  { ...StatusFacts, id: "alias-status-fact", label: "Status fact" },
  { ...UploadDocs, id: "alias-upload-docs", label: "Upload" },
];
