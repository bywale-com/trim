/**
 * Register — Flows (behavioral, not executable). Machine twin of
 * docs/register/FLOWS.md. Simple boxes for components/external systems only
 * — no prototype UI chrome inside flow nodes (see FLOWS.md + the Tower
 * flowCanvas precedent this pattern is adapted from).
 */
export type FlowNodeKind = "ui" | "api" | "job" | "db" | "ext";

export type FlowNode = {
  id: string;
  label: string;
  kind: FlowNodeKind;
  position: { x: number; y: number };
  note?: string;
};

export type FlowEdge = {
  id: string;
  source: string;
  target: string;
  label?: string;
};

export type FlowMap = {
  id: string;
  label: string;
  purpose: string;
  nodes: FlowNode[];
  edges: FlowEdge[];
};
