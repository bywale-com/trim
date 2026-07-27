import type { EdgeTypes } from "@xyflow/react";
import { RegisterFlowWireEdge } from "./RegisterFlowWireEdge";

export const REGISTER_FLOW_WIRE_EDGE_TYPE = "registerFlowWire";

export const registerFlowEdgeTypes: EdgeTypes = {
  [REGISTER_FLOW_WIRE_EDGE_TYPE]: RegisterFlowWireEdge,
};
