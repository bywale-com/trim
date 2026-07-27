/**
 * Reads `?focus=<surfaceId>` on a CT route and pushes it into
 * `RegisterTraceContext` so any `SurfaceBoundary` on the page can ring +
 * scroll to it. Call once per CT page component.
 */
import { useEffect } from "react";
import { useSearchParams } from "react-router";
import { useRegisterTrace } from "./RegisterTraceContext";

export function useFocusFromQuery() {
  const [searchParams] = useSearchParams();
  const { setFocusedSurfaceId } = useRegisterTrace();
  const focus = searchParams.get("focus");

  useEffect(() => {
    if (focus) setFocusedSurfaceId(focus);
  }, [focus, setFocusedSurfaceId]);
}
