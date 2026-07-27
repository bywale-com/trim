/**
 * Leaf strip preview — steps = screens. Components listed under the active step.
 * Lo-fi React (pre-SVG); discipline is the text + structure, not scrub chrome.
 */
import { ctPalette as t } from "../../shared/primitives";
import type { LeafStrip } from "./leafStrips";
import { getSurface } from "../trace/surfaces";

export function LeafStripPreview({
  strip,
  activeStepId,
  onSelectStep,
  hoveredSurfaceIds,
  onHoverSurface,
  onLeaveSurfaces,
  onClickSurface,
}: {
  strip: LeafStrip;
  activeStepId: string | null;
  onSelectStep: (stepId: string) => void;
  hoveredSurfaceIds: string[];
  onHoverSurface: (surfaceId: string) => void;
  onLeaveSurfaces: () => void;
  onClickSurface: (surfaceId: string) => void;
}) {
  const active = strip.steps.find((s) => s.id === activeStepId) ?? strip.steps[0];

  return (
    <div style={{ marginTop: 12 }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 8, marginBottom: 6 }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: t.muted, letterSpacing: "0.04em" }}>
          STRIP · {strip.label.toUpperCase()} · v{strip.version}
        </div>
        <span style={{ fontSize: 10.5, color: t.muted }}>
          {strip.steps.length === 1 ? "1 step (1 screen)" : `${strip.steps.length} steps (screens)`}
        </span>
      </div>

      <div
        style={{
          padding: "10px 12px",
          borderRadius: 6,
          border: `1px solid ${t.stroke}`,
          background: t.sidebar,
          marginBottom: 10,
        }}
      >
        <div style={{ fontSize: 11, fontWeight: 600, color: t.ink, marginBottom: 4 }}>Starting from where?</div>
        <div style={{ fontSize: 12, color: t.label, lineHeight: 1.45 }}>{strip.startingFrom}</div>
      </div>

      <div style={{ fontSize: 11, color: t.muted, lineHeight: 1.4, marginBottom: 8 }}>{strip.why}</div>

      <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 10 }}>
        {strip.steps.map((step, i) => {
          const on = active?.id === step.id;
          return (
            <button
              key={step.id}
              type="button"
              onClick={() => onSelectStep(step.id)}
              style={{
                textAlign: "left",
                padding: "8px 10px",
                borderRadius: 4,
                border: on ? `2px solid ${t.accent}` : `1px solid ${t.stroke}`,
                background: on ? t.accentBg : t.frame,
                cursor: "pointer",
                fontFamily: "inherit",
              }}
            >
              <div style={{ fontSize: 10.5, color: t.muted }}>
                Step {i + 1} · screen
              </div>
              <div style={{ fontSize: 12.5, fontWeight: 600, color: t.ink, marginTop: 2 }}>{step.label}</div>
              <div style={{ fontSize: 11, color: t.label, marginTop: 3 }}>Starts in: {step.startsIn}</div>
            </button>
          );
        })}
      </div>

      {active ? (
        <div
          style={{
            padding: 12,
            borderRadius: 6,
            border: `1px solid ${t.stroke}`,
            background: t.frame,
          }}
        >
          <div style={{ fontSize: 12, fontWeight: 600, color: t.ink }}>{active.label} screen</div>
          <div style={{ fontSize: 11.5, color: t.label, marginTop: 4, lineHeight: 1.4 }}>{active.beat}</div>
          <div style={{ fontSize: 11, fontWeight: 600, color: t.muted, marginTop: 10, marginBottom: 6 }}>
            Components on this screen
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {active.componentSurfaceIds.map((id) => {
              const s = getSurface(id);
              const lit = hoveredSurfaceIds.includes(id);
              return (
                <button
                  key={id}
                  type="button"
                  onMouseEnter={() => onHoverSurface(id)}
                  onMouseLeave={onLeaveSurfaces}
                  onClick={() => onClickSurface(id)}
                  style={{
                    textAlign: "left",
                    padding: "8px 10px",
                    borderRadius: 4,
                    border: lit ? `2px solid ${t.accent}` : `1px solid ${t.stroke}`,
                    background: lit ? t.accentBg : t.sidebar,
                    cursor: "pointer",
                    fontFamily: "inherit",
                  }}
                >
                  <div style={{ fontSize: 12, fontWeight: 600, color: t.accent }}>{s?.label ?? id}</div>
                  <div style={{ fontSize: 11, color: t.label, marginTop: 2, lineHeight: 1.35 }}>
                    {s?.description}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
