import { useEffect, useMemo } from "react";
import { Background, BackgroundVariant, Controls, ReactFlow, useEdgesState, useNodesState } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { loFi as t } from "../../shared/loFiPalette";
import type { FlowMap } from "../flows/types";
import { buildFlowStepGraph } from "./buildFlowStepGraph";
import { registerFlowEdgeTypes } from "./registerFlowEdgeTypes";
import { registerFlowNodeTypes } from "./registerFlowNodeTypes";

export function RegisterFlowStepCanvas({ flow }: { flow: FlowMap }) {
  const graph = useMemo(() => buildFlowStepGraph(flow, t), [flow]);
  const [nodes, setNodes, onNodesChange] = useNodesState(graph.nodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(graph.edges);

  useEffect(() => {
    setNodes(graph.nodes);
    setEdges(graph.edges);
  }, [graph, setNodes, setEdges]);

  return (
    <div style={{ height: 460, border: `1px solid ${t.stroke}`, borderRadius: 8, overflow: "hidden" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={registerFlowNodeTypes}
        edgeTypes={registerFlowEdgeTypes}
        nodesDraggable
        nodesConnectable={false}
        elementsSelectable
        panOnScroll
        zoomOnScroll
        fitView
        fitViewOptions={{ padding: 0.25, maxZoom: 1 }}
        proOptions={{ hideAttribution: true }}
        style={{ width: "100%", height: "100%", background: t.frame }}
      >
        <Background variant={BackgroundVariant.Dots} gap={18} size={1} color="rgba(0,0,0,0.08)" />
        <Controls showInteractive={false} style={{ border: `1px solid ${t.stroke}`, boxShadow: "none" }} />
      </ReactFlow>
    </div>
  );
}
