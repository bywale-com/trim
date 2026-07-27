/**
 * Inline UI-ref highlight — kind color + click-to-route into click-through.
 * Shared by Personas leaf answers and SME considerations.
 * Optional `additions` = just-added value tags (red, not CT-routable).
 */
import type { CSSProperties } from "react";
import { UI_KIND_STYLE, type HowUiRef, type UiKind } from "../howAnalysis/types";
import { useRegisterTrace } from "../trace/RegisterTraceContext";
import { PRODUCT_UI_REFS } from "../trace/productUiRefs";
import { ctPalette as t } from "../../shared/primitives";

const ADD_STYLE = {
  color: "#B91C1C",
  bg: "rgba(220,38,38,0.12)",
  label: "Just added",
} as const;

function Highlight({ label, kind, surfaceId }: { label: string; kind: UiKind; surfaceId?: string }) {
  const { focusAndOpenCt, setHovered } = useRegisterTrace();
  const s = UI_KIND_STYLE[kind];
  const clickable = Boolean(surfaceId);
  return (
    <span
      title={clickable ? `${s.label} — click to open in click-through` : s.label}
      role={clickable ? "button" : undefined}
      tabIndex={clickable ? 0 : undefined}
      onClick={
        clickable
          ? (e) => {
              e.stopPropagation();
              focusAndOpenCt(surfaceId!);
            }
          : undefined
      }
      onMouseEnter={clickable ? () => setHovered([surfaceId!]) : undefined}
      onMouseLeave={clickable ? () => setHovered([]) : undefined}
      onKeyDown={
        clickable
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                focusAndOpenCt(surfaceId!);
              }
            }
          : undefined
      }
      style={{
        color: s.color,
        fontWeight: 600,
        background: s.bg,
        padding: "0 3px",
        borderRadius: 2,
        cursor: clickable ? "pointer" : "default",
      }}
    >
      {label}
    </span>
  );
}

function AdditionTag({ label }: { label: string }) {
  return (
    <span
      title={ADD_STYLE.label}
      style={{
        color: ADD_STYLE.color,
        fontWeight: 600,
        background: ADD_STYLE.bg,
        padding: "0 3px",
        borderRadius: 2,
      }}
    >
      {label}
    </span>
  );
}

/**
 * Split `text` on HowUiRef labels (longest-first) and optional addition tags;
 * render kind-colored / red highlights.
 */
export function TextWithUiRefs({
  text,
  refs = PRODUCT_UI_REFS,
  additions = [],
  style,
}: {
  text: string;
  refs?: HowUiRef[];
  /** Just-added values/tags — red highlight, no CT route. */
  additions?: string[];
  style?: CSSProperties;
}) {
  const sortedRefs = [...refs].sort((a, b) => b.label.length - a.label.length);
  const sortedAdds = [...additions].sort((a, b) => b.length - a.length);
  type Part = { type: "text"; text: string } | { type: "ref"; ref: HowUiRef } | { type: "add"; label: string };
  const parts: Part[] = [];
  let rest = text;
  while (rest.length > 0) {
    let bestRef: { idx: number; ref: HowUiRef } | null = null;
    for (const ref of sortedRefs) {
      const idx = rest.indexOf(ref.label);
      if (idx === -1) continue;
      if (!bestRef || idx < bestRef.idx || (idx === bestRef.idx && ref.label.length > bestRef.ref.label.length)) {
        bestRef = { idx, ref };
      }
    }
    let bestAdd: { idx: number; label: string } | null = null;
    for (const label of sortedAdds) {
      const idx = rest.indexOf(label);
      if (idx === -1) continue;
      if (!bestAdd || idx < bestAdd.idx || (idx === bestAdd.idx && label.length > bestAdd.label.length)) {
        bestAdd = { idx, label };
      }
    }

    const useRef =
      bestRef && (!bestAdd || bestRef.idx < bestAdd.idx || (bestRef.idx === bestAdd.idx && bestRef.ref.label.length >= bestAdd.label.length));
    const useAdd = bestAdd && !useRef;

    if (!useRef && !useAdd) {
      parts.push({ type: "text", text: rest });
      break;
    }
    if (useRef && bestRef) {
      if (bestRef.idx > 0) parts.push({ type: "text", text: rest.slice(0, bestRef.idx) });
      parts.push({ type: "ref", ref: bestRef.ref });
      rest = rest.slice(bestRef.idx + bestRef.ref.label.length);
    } else if (useAdd && bestAdd) {
      if (bestAdd.idx > 0) parts.push({ type: "text", text: rest.slice(0, bestAdd.idx) });
      parts.push({ type: "add", label: bestAdd.label });
      rest = rest.slice(bestAdd.idx + bestAdd.label.length);
    }
  }

  return (
    <span style={{ color: t.label, lineHeight: 1.5, ...style }}>
      {parts.map((part, i) =>
        part.type === "text" ? (
          <span key={i}>{part.text}</span>
        ) : part.type === "add" ? (
          <AdditionTag key={i} label={part.label} />
        ) : (
          <Highlight key={i} label={part.ref.label} kind={part.ref.kind} surfaceId={part.ref.surfaceId} />
        ),
      )}
    </span>
  );
}
