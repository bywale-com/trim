import { MarkerType, type Edge, type Node } from "@xyflow/react";
import type { DeskPalette } from "../../shared/loFiPalette";
import type { FlowMap } from "../flows/types";
import { REGISTER_FLOW_GRAPH_NODE_TYPE } from "./registerFlowNodeTypes";
import { REGISTER_FLOW_WIRE_EDGE_TYPE } from "./registerFlowEdgeTypes";
import type { RegisterFlowGraphNodeData } from "./nodes/RegisterFlowGraphNode";

export function buildFlowStepGraph(
  flow: FlowMap,
  t: DeskPalette,
): { nodes: Node<RegisterFlowGraphNodeData>[]; edges: Edge[] } {
  const nodes: Node<RegisterFlowGraphNodeData>[] = flow.nodes.map((node) => ({
    id: node.id,
    type: REGISTER_FLOW_GRAPH_NODE_TYPE,
    position: node.position,
    draggable: true,
    selectable: true,
    data: { label: node.label, kind: node.kind, note: node.note, t },
  }));

  const edges: Edge[] = flow.edges.map((edge) => ({
    id: edge.id,
    source: edge.source,
    target: edge.target,
    type: REGISTER_FLOW_WIRE_EDGE_TYPE,
    markerEnd: { type: MarkerType.ArrowClosed, width: 14, height: 14, color: t.ink },
    style: { stroke: t.stroke, strokeWidth: 1.5 },
    data: { label: edge.label, t },
  }));

  return { nodes, edges };
}
