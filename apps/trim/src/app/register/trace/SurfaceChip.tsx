/**
 * Clickable chip naming a surface id. Hover sets `hoveredSurfaceIds` (ported
 * from Tally's row-hover law); click calls `focusAndOpenCt` — navigates to
 * the surface's CT route with `?focus=<id>` and rings it on arrival. This is
 * the primary "click Register row -> highlight matching CT surface" control.
 */
import { ctPalette as t } from "../../shared/primitives";
import { getSurface } from "./surfaces";
import { useRegisterTrace } from "./RegisterTraceContext";

export function SurfaceChip({ surfaceId }: { surfaceId: string }) {
  const surface = getSurface(surfaceId);
  const { setHovered, focusAndOpenCt } = useRegisterTrace();
  if (!surface) return null;

  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        focusAndOpenCt(surfaceId);
      }}
      onMouseEnter={() => setHovered([surfaceId])}
      onMouseLeave={() => setHovered([])}
      title={surface.description}
      style={{
        fontFamily: "inherit",
        fontSize: 10.5,
        fontWeight: 600,
        color: t.accent,
        background: t.accentBg,
        border: "none",
        borderRadius: 999,
        padding: "3px 9px",
        cursor: "pointer",
        whiteSpace: "nowrap",
      }}
    >
      {surface.label} &rarr;
    </button>
  );
}

export function SurfaceChipRow({ surfaceIds }: { surfaceIds: string[] }) {
  if (surfaceIds.length === 0) return null;
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 8 }}>
      {surfaceIds.map((id) => (
        <SurfaceChip key={id} surfaceId={id} />
      ))}
    </div>
  );
}
