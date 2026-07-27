/**
 * Shared inhabit chips — hover rings CT surfaces; click navigates + focuses.
 */
import { CtStatusTag, ctPalette as t } from "../../shared/primitives";
import { getSurface } from "../trace/surfaces";
import { useRegisterTrace } from "../trace/RegisterTraceContext";

export function SurfaceChips({ ids }: { ids: string[] }) {
  const { setHovered, focusAndOpenCt } = useRegisterTrace();
  if (ids.length === 0) {
    return <span style={{ fontSize: 11, color: t.muted }}>No CT surface — deferred / wiring</span>;
  }
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
      {ids.map((id) => {
        const s = getSurface(id);
        return (
          <button
            key={id}
            type="button"
            onMouseEnter={() => setHovered([id])}
            onMouseLeave={() => setHovered([])}
            onClick={() => focusAndOpenCt(id)}
            style={{
              border: `1px solid ${t.stroke}`,
              background: t.frame,
              borderRadius: 4,
              padding: "4px 8px",
              fontSize: 11,
              fontWeight: 600,
              color: t.accent,
              cursor: "pointer",
              fontFamily: "inherit",
            }}
            title={s?.description ?? id}
          >
            {s?.label ?? id}
          </button>
        );
      })}
    </div>
  );
}

export function StatusChip({
  status,
}: {
  status: "implemented" | "partial" | "deferred" | "wiring" | "planted" | "done" | "open";
}) {
  const tone =
    status === "implemented" || status === "planted" || status === "done"
      ? "success"
      : status === "partial"
        ? "warning"
        : status === "deferred" || status === "open"
          ? "neutral"
          : "accent";
  return <CtStatusTag label={status} tone={tone} />;
}
