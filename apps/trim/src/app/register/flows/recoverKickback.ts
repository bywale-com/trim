import type { FlowMap } from "./types";

export const recoverKickbackFlow: FlowMap = {
  id: "recover-kickback",
  label: "Recover from kickback",
  purpose: "Procedural denial classified, then resubmitted by the Agency Owner under the same authority.",
  nodes: [
    { id: "job-followup", label: "Follow-up job", kind: "job", position: { x: 0, y: 0 } },
    { id: "ext-stateportal", label: "State UP portal", kind: "ext", position: { x: 260, y: 0 } },
    { id: "db-casestate", label: "Case state = kicked_back", kind: "db", position: { x: 520, y: 0 } },
    { id: "ui-exceptionqueue", label: "Exception queue (Agency Owner)", kind: "ui", position: { x: 520, y: 170 } },
    { id: "api-agencydesk", label: "Agency desk API", kind: "api", position: { x: 780, y: 170 } },
    { id: "job-resubmit", label: "Resubmit worker", kind: "job", position: { x: 1040, y: 170 } },
  ],
  edges: [
    { id: "e1", source: "job-followup", target: "ext-stateportal", label: "poll status" },
    { id: "e2", source: "ext-stateportal", target: "db-casestate", label: "classify: procedural denial" },
    { id: "e3", source: "db-casestate", target: "ui-exceptionqueue", label: "surface exception" },
    { id: "e4", source: "ui-exceptionqueue", target: "api-agencydesk", label: "resubmit action" },
    { id: "e5", source: "api-agencydesk", target: "job-resubmit", label: "enqueue" },
    { id: "e6", source: "job-resubmit", target: "ext-stateportal", label: "refile" },
    { id: "e7", source: "job-resubmit", target: "db-casestate", label: "state = filing" },
  ],
};
