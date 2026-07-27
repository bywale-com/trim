/**
 * Wraps a CT region with a stable surface id. Highlights with a ring + wash
 * when the id is hovered from Register, and scrolls-into-view + flashes when
 * it is the `?focus=` target of a `focusAndOpenCt` navigation. Pattern ported
 * from Tally's `HolonBoundary` (ring on `useIsDocsTarget`) — see
 * `apps/tally/src/app/components/docs/HolonBoundary.tsx` — adapted for a
 * single fixed loFi palette instead of light/dark `Tokens`.
 */
import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { loFi as t } from "../../shared/loFiPalette";
import { useRegisterTrace } from "./RegisterTraceContext";

export function SurfaceBoundary({
  id,
  children,
  style,
  inline,
}: {
  id: string;
  children: ReactNode;
  style?: CSSProperties;
  /** Render as inline-block instead of block — for facts sitting inside a grid row. */
  inline?: boolean;
}) {
  const { hoveredSurfaceIds, focusedSurfaceId } = useRegisterTrace();
  const ref = useRef<HTMLDivElement>(null);
  const scrolledForRef = useRef<string | null>(null);

  const isHovered = hoveredSurfaceIds.includes(id);
  const isFocused = focusedSurfaceId === id;
  const highlighted = isHovered || isFocused;

  useEffect(() => {
    if (isFocused && ref.current && scrolledForRef.current !== id) {
      scrolledForRef.current = id;
      ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    if (!isFocused && scrolledForRef.current === id) {
      scrolledForRef.current = null;
    }
  }, [isFocused, id]);

  return (
    <div
      ref={ref}
      data-surface-id={id}
      style={{
        display: inline ? "inline-block" : "block",
        borderRadius: 8,
        outline: highlighted ? `2px solid ${t.accent}` : "2px solid transparent",
        outlineOffset: 3,
        backgroundColor: highlighted ? t.accentBg : "transparent",
        transition: "outline-color 0.15s ease, background-color 0.15s ease",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
