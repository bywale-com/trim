import { BaseEdge, EdgeLabelRenderer, getSmoothStepPath, type EdgeProps } from "@xyflow/react";
import type { DeskPalette } from "../../shared/loFiPalette";
import { registerFlowHintText } from "./registerFlowNodeStyles";

export type RegisterFlowWireEdgeData = {
  label?: string;
  t: DeskPalette;
};

export function RegisterFlowWireEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style,
  markerEnd,
  data,
}: EdgeProps) {
  const edgeData = data as RegisterFlowWireEdgeData | undefined;
  const t = edgeData?.t;
  const label = edgeData?.label ?? "";

  const [edgePath, labelX, labelY] = getSmoothStepPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
    borderRadius: 6,
  });

  if (!t) {
    return <BaseEdge id={id} path={edgePath} markerEnd={markerEnd} style={style} />;
  }

  return (
    <>
      <BaseEdge id={id} path={edgePath} markerEnd={markerEnd} style={style} />
      {label ? (
        <EdgeLabelRenderer>
          <div
            style={{
              position: "absolute",
              transform: `translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`,
              pointerEvents: "none",
            }}
          >
            <span
              style={{
                ...registerFlowHintText(t),
                background: t.frame,
                border: `1px solid ${t.stroke}`,
                padding: "2px 6px",
                borderRadius: 4,
                whiteSpace: "nowrap",
              }}
            >
              {label}
            </span>
          </div>
        </EdgeLabelRenderer>
      ) : null}
    </>
  );
}
