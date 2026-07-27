/**
 * Register gray lo-fi palette — Om Coda Prototype DS-I, Register mode only.
 * Structure/admission/congruence, not final visual polish. Copied in spirit
 * from Tally's `apps/tally/src/app/register/wireframes/loFi/loFiPalette.ts`
 * (not imported — Trove B2B is its own app and must not depend on Tally or
 * on the sibling `trove` app).
 *
 * Trove B2B is Register-gray-only for this click-through: no Plant token
 * mode, no dual light/dark theme switch. Brand accent stays #8B5CF6 per DS-I.
 */
export type DeskPalette = {
  canvas: string;
  frame: string;
  chrome: string;
  block: string;
  stroke: string;
  ink: string;
  label: string;
  muted: string;
  white: string;
  sidebar: string;
  /** Modal / sheet dimmer. */
  scrim: string;
  note: string;
  noteBorder: string;
  accent: string;
  accentBg: string;
  success: string;
  red: string;
  hoverBg: string;
  activeRowBg: string;
  sidebarW: number;
  sidebarCollapsedW: number;
  headerH: number;
};

export const loFi: DeskPalette = {
  canvas: "#ececec",
  frame: "#fafafa",
  chrome: "#eeeeee",
  block: "#e0e0e0",
  stroke: "#bdbdbd",
  ink: "#212121",
  label: "#757575",
  muted: "#9e9e9e",
  white: "#ffffff",
  sidebar: "#f5f5f5",
  scrim: "rgba(0,0,0,0.32)",
  note: "#fff8c4",
  noteBorder: "#e6d98a",
  accent: "#8B5CF6",
  accentBg: "rgba(139,92,246,0.08)",
  success: "#16a34a",
  red: "#dc2626",
  hoverBg: "rgba(0,0,0,0.04)",
  activeRowBg: "rgba(139,92,246,0.07)",
  sidebarW: 240,
  sidebarCollapsedW: 48,
  headerH: 48,
};
