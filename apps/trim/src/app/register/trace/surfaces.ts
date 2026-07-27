/**
 * Surface catalog — stable ids for every CT region that Register content can
 * point at. Join key between How/SME/Can'ts/Furnish/Wiring and click-through.
 * All Trim surfaces use the `trim-ct-*` id prefix.
 */
import type { ProtestState } from "../world/trimWorld";
import { SME_PLANT_SURFACES } from "./smePlantSurfaces";

export type SurfaceDesk = "owner" | "operator" | "worker";

export type Surface = {
  id: string;
  label: string;
  desk: SurfaceDesk;
  /** Base CT route this surface lives on. */
  ctPath: string;
  description: string;
};

export const SURFACES: Surface[] = [
  // ——————————————————————————————————————————
  // Owner desk
  // ——————————————————————————————————————————
  {
    id: "trim-ct-owner-portfolio",
    label: "Portfolio",
    desk: "owner",
    ctPath: "/ct/owner",
    description: "Module listing the owning entity's protest cases by parcel and tax year.",
  },
  {
    id: "trim-ct-owner-case",
    label: "Protest Case",
    desk: "owner",
    ctPath: "/ct/owner",
    description: "Modal for one protest case (parcel × tax year) inside Portfolio.",
  },
  {
    id: "trim-ct-owner-notice",
    label: "Notice — proof facts",
    desk: "owner",
    ctPath: "/ct/owner",
    description: "Parcel ID, county, assessed $X, evidence supports $Y, estimated excess ≈ $Z — analysis framing before consent.",
  },
  {
    id: "trim-ct-owner-trust",
    label: "Notice — trust strip",
    desk: "owner",
    ctPath: "/ct/owner",
    description: "No-upfront-fee statement, county-site verification link, non-affiliation disclaimer.",
  },
  {
    id: "trim-ct-owner-consent",
    label: "Consent ticks",
    desk: "owner",
    ctPath: "/ct/owner",
    description: "I see it / I understand it / I'm with it — gates contingency detail and the Authorize door.",
  },
  {
    id: "trim-ct-owner-authorize",
    label: "Authorize door",
    desk: "owner",
    ctPath: "/ct/owner",
    description: "One-time Appointment of Agent; contingency % locked at signing (jurisdiction-aware cap).",
  },
  {
    id: "trim-ct-owner-upload",
    label: "Upload docs",
    desk: "owner",
    ctPath: "/ct/owner",
    description: "Optional income docs (rent roll / P&L) and evidence materials after authorize.",
  },
  {
    id: "trim-ct-owner-status",
    label: "Status facts",
    desk: "owner",
    ctPath: "/ct/owner",
    description: "Evidence prep / informal / hearing queued / active / reported state and days-in-state.",
  },
  {
    id: "trim-ct-owner-decline",
    label: "Decline door",
    desk: "owner",
    ctPath: "/ct/owner",
    description: "Walk away before or after consent but before authorize.",
  },
  {
    id: "trim-ct-owner-reduction",
    label: "Reduction fact",
    desk: "owner",
    ctPath: "/ct/owner",
    description: "Assessment reduced (full/partial); measured savings (before/after × millage rate).",
  },
  {
    id: "trim-ct-owner-invoice",
    label: "Invoice fact",
    desk: "owner",
    ctPath: "/ct/owner",
    description: "Trim contingency cut billed against documented savings — dated independently of collection.",
  },

  // ——————————————————————————————————————————
  // Operator desk
  // ——————————————————————————————————————————
  {
    id: "trim-ct-op-portfolio",
    label: "Clients",
    desk: "operator",
    ctPath: "/ct/operator/clients",
    description: "Every Owner account in the Operator's book by protest-case admission state.",
  },
  {
    id: "trim-ct-op-jurisdiction",
    label: "Jurisdiction & licensure",
    desk: "operator",
    ctPath: "/ct/operator/settings/jurisdiction",
    description: "Per-state PTC registration status, fee cap, appeal-window calendar, rollout gate.",
  },
  {
    id: "trim-ct-op-exceptions",
    label: "Exception queue",
    desk: "operator",
    ctPath: "/ct/operator/work/exceptions",
    description: "Stuck and blocked protest cases needing operator action — per-case resubmit or escalate.",
  },
  {
    id: "trim-ct-op-audit",
    label: "Audit log",
    desk: "operator",
    ctPath: "/ct/operator/work/audit",
    description: "Immutable action trail under Appointment of Agent across all protest cases.",
  },
  {
    id: "trim-ct-op-collections",
    label: "Collections",
    desk: "operator",
    ctPath: "/ct/operator/work/collections",
    description: "Invoiced-not-collected protest cases; dunning queue; ACH/card collection status.",
  },
  {
    id: "trim-ct-op-county-data",
    label: "County data health",
    desk: "operator",
    ctPath: "/ct/operator/work/county-data",
    description: "Roll import status, CAMA freshness, comp coverage, e-file availability per county.",
  },
  {
    id: "trim-ct-op-worker-dispatch",
    label: "Worker dispatch",
    desk: "operator",
    ctPath: "/ct/operator/work/dispatch",
    description: "Hearing-queued cases awaiting Worker pickup; Worker roster by county/board availability.",
  },

  // ——————————————————————————————————————————
  // Worker desk
  // ——————————————————————————————————————————
  {
    id: "trim-ct-worker-queue",
    label: "Hearing queue",
    desk: "worker",
    ctPath: "/ct/worker",
    description: "Available hearing assignments in the Worker's county/board coverage.",
  },
  {
    id: "trim-ct-worker-packet",
    label: "Case packet",
    desk: "worker",
    ctPath: "/ct/worker",
    description: "Prepared evidence package: parcel facts, comps, uniformity table, argument outline.",
  },
  {
    id: "trim-ct-worker-assignment",
    label: "Assignment",
    desk: "worker",
    ctPath: "/ct/worker",
    description: "Accept or decline a hearing assignment; locks the Worker to the case.",
  },
  {
    id: "trim-ct-worker-hearing",
    label: "Hearing logistics",
    desk: "worker",
    ctPath: "/ct/worker",
    description: "Date, time, board/venue, in-person vs remote, checklist before appearance.",
  },
  {
    id: "trim-ct-worker-outcome",
    label: "Outcome report",
    desk: "worker",
    ctPath: "/ct/worker",
    description: "Board result (reduced / denied / continued); reduction amount; Worker report submission.",
  },
  {
    id: "trim-ct-worker-pay",
    label: "Pay status",
    desk: "worker",
    ctPath: "/ct/worker",
    description: "Per-appearance fee status; payment issued or pending.",
  },

  ...SME_PLANT_SURFACES,
];

export function getSurface(id: string): Surface | undefined {
  return SURFACES.find((s) => s.id === id);
}

/**
 * Which protest state an Owner surface needs to be visible/actionable.
 * OwnerApp auto-opens a Protest Case that mounts the focused surface.
 */
export const OWNER_SURFACE_STATUS: Partial<Record<string, ProtestState[]>> = {
  "trim-ct-owner-case": [
    "notified", "consented", "authorized", "evidence_prep", "informal",
    "hearing_queued", "hearing_active", "hearing_reported",
    "reduced", "denied", "invoiced", "collected", "declined", "recurring",
  ],
  "trim-ct-owner-notice":   ["notified", "consented"],
  "trim-ct-owner-trust":    ["notified", "consented"],
  "trim-ct-owner-consent":  ["notified"],
  "trim-ct-owner-authorize":["consented"],
  "trim-ct-owner-upload":   ["authorized"],
  "trim-ct-owner-status":   ["evidence_prep", "informal", "hearing_queued", "hearing_active", "hearing_reported"],
  "trim-ct-owner-decline":  ["notified", "consented"],
  "trim-ct-owner-reduction":["reduced", "invoiced", "collected"],
  "trim-ct-owner-invoice":  ["invoiced", "collected"],
  // —— SME authorize ——
  "trim-ct-owner-signer-title":        ["consented"],
  "trim-ct-owner-fee-example":         ["consented"],
  "trim-ct-owner-non-collapsible-fee": ["consented"],
  "trim-ct-owner-contingency-lock":    ["consented"],
  "trim-ct-owner-agent-appointment":   ["consented"],
  "trim-ct-owner-entity-identity":     ["consented"],
  // —— SME notice / trust ——
  "trim-ct-owner-trust-bundle":        ["notified", "consented"],
  "trim-ct-owner-non-affiliation":     ["notified", "consented"],
  "trim-ct-owner-county-verify":       ["notified", "consented"],
  "trim-ct-owner-analysis-framing":    ["notified", "consented"],
  "trim-ct-owner-parcel-recap":        ["notified", "consented"],
  // —— SME upload ——
  "trim-ct-owner-upload-header":       ["authorized"],
  "trim-ct-owner-income-docs":         ["authorized"],
  "trim-ct-owner-condition-docs":      ["authorized"],
  // —— SME status / post-hearing ——
  "trim-ct-owner-evidence-status":     ["evidence_prep", "informal", "hearing_queued", "hearing_active", "hearing_reported"],
  "trim-ct-owner-hearing-status":      ["hearing_queued", "hearing_active", "hearing_reported"],
  "trim-ct-owner-reduction-detail":    ["reduced", "invoiced", "collected"],
  "trim-ct-owner-denial-reason":       ["denied"],
};
