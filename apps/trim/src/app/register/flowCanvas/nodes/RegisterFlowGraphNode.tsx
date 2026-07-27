import { Handle, Position, type Node, type NodeProps } from "@xyflow/react";
import type { DeskPalette } from "../../../shared/loFiPalette";
import type { FlowNodeKind } from "../../flows/types";
import {
  registerFlowBodyText,
  registerFlowHintText,
  registerFlowKindPill,
  registerFlowNodeShell,
} from "../registerFlowNodeStyles";

export type RegisterFlowGraphNodeData = {
  label: string;
  kind: FlowNodeKind;
  note?: string;
  t: DeskPalette;
};

/** Simple labeled box + kind pill — no prototype UI chrome inside flow nodes. */
export function RegisterFlowGraphNode({ data, selected }: NodeProps<Node<RegisterFlowGraphNodeData>>) {
  const { label, kind, note, t } = data;

  return (
    <div style={registerFlowNodeShell(t, selected ?? false)}>
      <Handle
        type="target"
        position={Position.Left}
        style={{ width: 7, height: 7, border: `2px solid ${t.ink}`, background: t.white }}
      />
      <div style={{ padding: "7px 10px 0" }}>
        <span style={registerFlowKindPill(kind)}>{kind}</span>
      </div>
      <div style={{ padding: "7px 10px 9px" }}>
        <div style={registerFlowBodyText(t)}>{label}</div>
        {note ? <div style={{ ...registerFlowHintText(t), marginTop: 5 }}>{note}</div> : null}
      </div>
      <Handle
        type="source"
        position={Position.Right}
        style={{ width: 7, height: 7, border: `2px solid ${t.ink}`, background: t.white }}
      />
    </div>
  );
}
