/**
 * Compact lo-fi planted SME block — dashed region + title for SurfaceBoundary focus.
 */
import type { CSSProperties, ReactNode } from "react";
import { SurfaceBoundary } from "../../register/trace/SurfaceBoundary";
import { ctPalette as t } from "../../shared/primitives";

export function CtPlantedBlock({
  id,
  title,
  children,
  style,
  inline,
}: {
  id: string;
  title: string;
  children?: ReactNode;
  style?: CSSProperties;
  inline?: boolean;
}) {
  return (
    <SurfaceBoundary
      id={id}
      inline={inline}
      style={{
        marginTop: 10,
        padding: "8px 10px",
        borderRadius: 4,
        border: `1px dashed ${t.stroke}`,
        background: t.frame,
        ...style,
      }}
    >
      <div style={{ fontSize: 11, fontWeight: 600, color: t.muted, letterSpacing: "0.03em", marginBottom: children ? 4 : 0 }}>
        {title}
      </div>
      {children ? <div style={{ fontSize: 12, color: t.label, lineHeight: 1.45 }}>{children}</div> : null}
    </SurfaceBoundary>
  );
}
