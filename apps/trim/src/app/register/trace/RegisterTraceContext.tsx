/**
 * Cross-panel inhabit wiring for Register theory ↔ Click-through panel.
 *
 * - `setHovered` — theory chips/rows on mouseenter/leave.
 * - `focusAndOpenCt` — reveal CT panel, switch desk, focus surface (no leave Register).
 * - `focusSeq` bumps on every focus so re-clicking the same surface re-routes.
 */
import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { useRegisterShell } from "../RegisterShellContext";
import { getSurface } from "./surfaces";

export type RegisterTraceContextValue = {
  hoveredSurfaceIds: string[];
  setHovered: (ids: string[]) => void;
  focusedSurfaceId: string | null;
  /** Increments on every focusAndOpenCt — desks re-apply route even if id unchanged. */
  focusSeq: number;
  setFocusedSurfaceId: (id: string | null) => void;
  focusAndOpenCt: (surfaceId: string) => void;
};

const RegisterTraceContext = createContext<RegisterTraceContextValue | null>(null);

export function RegisterTraceProvider({ children }: { children: ReactNode }) {
  const [hoveredSurfaceIds, setHoveredSurfaceIds] = useState<string[]>([]);
  const [focusedSurfaceId, setFocusedSurfaceId] = useState<string | null>(null);
  const [focusSeq, setFocusSeq] = useState(0);
  const { revealCt } = useRegisterShell();

  const setHovered = useCallback((ids: string[]) => setHoveredSurfaceIds(ids), []);

  const focusAndOpenCt = useCallback(
    (surfaceId: string) => {
      const surface = getSurface(surfaceId);
      if (!surface) {
        console.warn(`[trace] unknown surfaceId: ${surfaceId}`);
        return;
      }
      setFocusedSurfaceId(surfaceId);
      setFocusSeq((n) => n + 1);
      revealCt(surface.desk);
    },
    [revealCt],
  );

  const value = useMemo<RegisterTraceContextValue>(
    () => ({
      hoveredSurfaceIds,
      setHovered,
      focusedSurfaceId,
      focusSeq,
      setFocusedSurfaceId,
      focusAndOpenCt,
    }),
    [hoveredSurfaceIds, setHovered, focusedSurfaceId, focusSeq, focusAndOpenCt],
  );

  return <RegisterTraceContext.Provider value={value}>{children}</RegisterTraceContext.Provider>;
}

export function useRegisterTrace(): RegisterTraceContextValue {
  const ctx = useContext(RegisterTraceContext);
  if (!ctx) throw new Error("useRegisterTrace must be used within a RegisterTraceProvider");
  return ctx;
}
