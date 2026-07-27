import type { FlowMap } from "./types";

/** Machine twin of the worked example in docs/register/FLOWS.md. */
export const fileClaimPacketFlow: FlowMap = {
  id: "file-claim-packet",
  label: "File claim packet",
  purpose: "Docs + claim submitted to the holding agency under authority.",
  nodes: [
    { id: "ui-upload", label: "Upload panel", kind: "ui", position: { x: 0, y: 0 } },
    { id: "api-packet", label: "Packet service", kind: "api", position: { x: 260, y: 0 } },
    { id: "db-objectstore", label: "Object store", kind: "db", position: { x: 520, y: 0 } },
    { id: "job-filing", label: "Filing worker", kind: "job", position: { x: 260, y: 170 } },
    { id: "ext-stateportal", label: "State UP portal", kind: "ext", position: { x: 520, y: 170 } },
    {
      id: "db-casestate",
      label: "Case state = filing | kicked_back | filed",
      kind: "db",
      position: { x: 260, y: 340 },
    },
    { id: "ui-status", label: "Status facts", kind: "ui", position: { x: 260, y: 500 } },
  ],
  edges: [
    { id: "e1", source: "ui-upload", target: "api-packet", label: "articles / W-9 / docs" },
    { id: "e2", source: "api-packet", target: "db-objectstore", label: "store files" },
    { id: "e3", source: "api-packet", target: "job-filing", label: "packet complete" },
    { id: "e4", source: "job-filing", target: "ext-stateportal", label: "submit under POA" },
    { id: "e5", source: "job-filing", target: "db-casestate", label: "write state" },
    { id: "e6", source: "db-casestate", target: "ui-status", label: "surface fact" },
  ],
};
