import type { FlowMap } from "./types";

export const recoverExceptionFlow: FlowMap = {
  id: "recover-exception",
  label: "Recover exception",
  purpose: "Classify blocked protest work, route it to the Operator, and resubmit or reopen the right Trim lane.",
  nodes: [
    { id: "job-monitor", label: "County status monitor", kind: "job", position: { x: 0, y: 0 } },
    { id: "ext-cad-arb", label: "CAD / ARB portal status (spec)", kind: "ext", position: { x: 280, y: 0 } },
    { id: "api-classify", label: "Exception classifier", kind: "api", position: { x: 560, y: 0 } },
    { id: "db-exception", label: "Blocked case + reason code", kind: "db", position: { x: 840, y: 0 } },
    { id: "ui-operator", label: "Operator exception queue", kind: "ui", position: { x: 840, y: 180 } },
    { id: "job-resubmit", label: "Resubmit / reopen worker", kind: "job", position: { x: 1120, y: 180 } },
    { id: "db-state", label: "State returns to evidence / hearing / invoice lane", kind: "db", position: { x: 1400, y: 180 } },
  ],
  edges: [
    { id: "e1", source: "job-monitor", target: "ext-cad-arb", label: "poll designed status facts" },
    { id: "e2", source: "ext-cad-arb", target: "api-classify", label: "missing docs / cutoff / continued / data gap" },
    { id: "e3", source: "api-classify", target: "db-exception", label: "controlled reason code" },
    { id: "e4", source: "db-exception", target: "ui-operator", label: "surface action needed" },
    { id: "e5", source: "ui-operator", target: "job-resubmit", label: "resubmit or reroute" },
    { id: "e6", source: "job-resubmit", target: "db-state", label: "write next state" },
    { id: "e7", source: "job-resubmit", target: "ext-cad-arb", label: "designed portal action" },
  ],
};
