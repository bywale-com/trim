import type { CSSProperties } from "react";
import type { DeskPalette } from "../../shared/loFiPalette";
import type { FlowNodeKind } from "../flows/types";

export function registerFlowNodeShell(t: DeskPalette, selected: boolean, width = 220): CSSProperties {
  return {
    width,
    borderRadius: 6,
    border: `1.5px solid ${selected ? t.accent : t.stroke}`,
    background: t.white,
    boxShadow: selected ? `0 0 0 2px ${t.accentBg}` : "0 1px 2px rgba(0,0,0,0.04)",
    overflow: "hidden",
  };
}

const KIND_TONE: Record<FlowNodeKind, { text: string; bg: string; color: string }> = {
  ui: { text: "ui", bg: "rgba(139,92,246,0.12)", color: "#6D28D9" },
  api: { text: "api", bg: "rgba(37,99,235,0.10)", color: "#1D4ED8" },
  job: { text: "job", bg: "rgba(217,119,6,0.12)", color: "#B45309" },
  db: { text: "db", bg: "rgba(5,150,105,0.12)", color: "#047857" },
  ext: { text: "ext", bg: "rgba(107,114,128,0.14)", color: "#374151" },
};

export function registerFlowKindPill(kind: FlowNodeKind): CSSProperties {
  const tone = KIND_TONE[kind];
  return {
    display: "inline-flex",
    alignItems: "center",
    padding: "2px 7px",
    borderRadius: 999,
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    background: tone.bg,
    color: tone.color,
  };
}

export const registerFlowBodyText = (t: DeskPalette): CSSProperties => ({
  fontSize: 12.5,
  fontWeight: 600,
  lineHeight: 1.35,
  letterSpacing: "-0.01em",
  color: t.ink,
});

export const registerFlowHintText = (t: DeskPalette): CSSProperties => ({
  fontSize: 10.5,
  fontWeight: 500,
  lineHeight: 1.35,
  color: t.muted,
});
