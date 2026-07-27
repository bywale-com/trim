import type { FlowMap } from "./types";

export const evidenceHearingFlow: FlowMap = {
  id: "evidence-hearing",
  label: "Evidence + hearing",
  purpose: "Build protest evidence, attempt informal review, then dispatch a Worker for ARB hearing work.",
  nodes: [
    { id: "ui-upload", label: "Optional income / condition uploads", kind: "ui", position: { x: 0, y: 0 } },
    { id: "job-evidence", label: "Evidence packet builder", kind: "job", position: { x: 280, y: 0 } },
    { id: "db-packet", label: "ARB-retainable evidence packet", kind: "db", position: { x: 560, y: 0 } },
    { id: "ext-informal", label: "CAD / ARB informal portal (spec)", kind: "ext", position: { x: 840, y: 0 } },
    { id: "db-offer", label: "Informal offer fact", kind: "db", position: { x: 1120, y: 0 } },
    { id: "api-dispatch", label: "Worker dispatch rules", kind: "api", position: { x: 840, y: 180 } },
    { id: "ui-worker-queue", label: "Worker queue", kind: "ui", position: { x: 1120, y: 180 } },
    { id: "ui-worker-packet", label: "Form 50-162 + packet checklist", kind: "ui", position: { x: 1400, y: 180 } },
    { id: "ui-hearing", label: "ARB hearing report", kind: "ui", position: { x: 1400, y: 0 } },
  ],
  edges: [
    { id: "e1", source: "ui-upload", target: "job-evidence", label: "private docs improve case" },
    { id: "e2", source: "job-evidence", target: "db-packet", label: "comps / equity / income branches" },
    { id: "e3", source: "db-packet", target: "ext-informal", label: "submit informal packet" },
    { id: "e4", source: "ext-informal", target: "db-offer", label: "capture offer or no-offer" },
    { id: "e5", source: "db-offer", target: "api-dispatch", label: "reject / no offer / formal needed" },
    { id: "e6", source: "api-dispatch", target: "ui-worker-queue", label: "hearing_queued assignment" },
    { id: "e7", source: "ui-worker-queue", target: "ui-worker-packet", label: "Worker accepts" },
    { id: "e8", source: "ui-worker-packet", target: "ui-hearing", label: "hearing_active -> reported" },
    { id: "e9", source: "db-packet", target: "api-dispatch", label: "evidence cutoff validation" },
  ],
};
