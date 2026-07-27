import type { FlowMap } from "./types";

export const activateNoticeFlow: FlowMap = {
  id: "activate-notice",
  label: "Activate notice",
  purpose: "Detection clears copy and jurisdiction gates before serving an Owner notice.",
  nodes: [
    { id: "ext-cad-roll", label: "CAD roll / CAMA data (spec)", kind: "ext", position: { x: 0, y: 0 } },
    { id: "job-detection", label: "Detection job", kind: "job", position: { x: 250, y: 0 } },
    { id: "db-trust-kit", label: "Trust kit + valuation signal", kind: "db", position: { x: 500, y: 0 } },
    { id: "api-copy-gate", label: "Copy / substantiation gate", kind: "api", position: { x: 750, y: 0 } },
    { id: "db-jurisdiction", label: "Jurisdiction + PTC standing", kind: "db", position: { x: 750, y: 170 } },
    { id: "api-serve-notice", label: "Serve Owner notice", kind: "api", position: { x: 1000, y: 85 } },
    { id: "ui-notice", label: "Owner notice + trust strip", kind: "ui", position: { x: 1250, y: 85 } },
  ],
  edges: [
    { id: "e1", source: "ext-cad-roll", target: "job-detection", label: "assessment cycle trigger" },
    { id: "e2", source: "job-detection", target: "db-trust-kit", label: "parcel signal + confidence" },
    { id: "e3", source: "db-trust-kit", target: "api-copy-gate", label: "approved claim text required" },
    { id: "e4", source: "db-jurisdiction", target: "api-copy-gate", label: "county standing check" },
    { id: "e5", source: "api-copy-gate", target: "api-serve-notice", label: "detected -> notified allowed" },
    { id: "e6", source: "api-serve-notice", target: "ui-notice", label: "parcel proof + consent entry" },
  ],
};
