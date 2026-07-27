import type { FlowMap } from "./types";

export const activateNoticeFlow: FlowMap = {
  id: "activate-notice",
  label: "Activate notice",
  purpose: "Deliver detection to the Business Officer as an opened notice.",
  nodes: [
    { id: "ext-updb", label: "State/Fed UP portal", kind: "ext", position: { x: 0, y: 0 } },
    { id: "job-detect", label: "Detection job", kind: "job", position: { x: 260, y: 0 } },
    { id: "db-match", label: "Entity match store", kind: "db", position: { x: 520, y: 0 } },
    { id: "api-activation", label: "Activation delivery", kind: "api", position: { x: 780, y: 0 } },
    { id: "ext-channel", label: "Email/SMS/LinkedIn channel", kind: "ext", position: { x: 780, y: 170 } },
    { id: "ui-notice", label: "Notice land", kind: "ui", position: { x: 1060, y: 85 } },
  ],
  edges: [
    { id: "e1", source: "ext-updb", target: "job-detect", label: "scheduled + on-demand search" },
    { id: "e2", source: "job-detect", target: "db-match", label: "match + confidence" },
    { id: "e3", source: "db-match", target: "api-activation", label: "eligible match" },
    { id: "e4", source: "api-activation", target: "ext-channel", label: "send message" },
    { id: "e5", source: "api-activation", target: "ui-notice", label: "deep link" },
    { id: "e6", source: "ext-channel", target: "ui-notice", label: "opens link" },
  ],
};
