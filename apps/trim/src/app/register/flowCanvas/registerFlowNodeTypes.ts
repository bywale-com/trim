import type { NodeTypes } from "@xyflow/react";
import { RegisterFlowGraphNode } from "./nodes/RegisterFlowGraphNode";

export const REGISTER_FLOW_GRAPH_NODE_TYPE = "registerFlowGraph";

export const registerFlowNodeTypes: NodeTypes = {
  [REGISTER_FLOW_GRAPH_NODE_TYPE]: RegisterFlowGraphNode,
};
