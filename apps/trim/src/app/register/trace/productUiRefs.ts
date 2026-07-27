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
