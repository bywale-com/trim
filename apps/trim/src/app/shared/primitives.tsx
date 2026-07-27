/**
 * Om Coda Prototype DS-I — Register gray primitives for Trove B2B.
 *
 * Copied in *pattern* from the sibling `trove` app's
 * `src/app/ct/primitives.tsx` (itself patterned from Tally's
 * `apps/tally/src/app/register/wireframes/loFi/LoFiPrimitives.tsx` and
 * `opDesk/DeskShell.tsx`) — not imported. Trove B2B is Register-gray-only:
 * no Plant token mode, so these primitives read a single fixed `loFi`
 * palette rather than threading light/dark `Tokens`.
 */
import { type CSSProperties, type ReactNode } from "react";
import { NavLink, Link } from "react-router";
import { loFi } from "./loFiPalette";

const t = loFi;

/* ---------------------------------- Button --------------------------------- */

export type CtButtonVariant = "primary" | "secondary" | "quiet";

export function CtButton({
  children,
  variant = "secondary",
  onClick,
  style,
}: {
  children: ReactNode;
  variant?: CtButtonVariant;
  onClick?: () => void;
  style?: CSSProperties;
}) {
  const primary = variant === "primary";
  const quiet = variant === "quiet";
  const base: CSSProperties = {
    fontFamily: "inherit",
    fontSize: 12.5,
    fontWeight: quiet ? 500 : 600,
    borderRadius: 4,
    cursor: "pointer",
    whiteSpace: "nowrap",
  };
  const visual: CSSProperties = primary
    ? { padding: "8px 14px", border: "none", background: t.ink, color: t.white }
    : quiet
      ? { padding: "5px 2px", border: "none", background: "transparent", color: t.label }
      : { padding: "8px 14px", border: `1px solid ${t.stroke}`, background: "transparent", color: t.ink };

  return (
    <button type="button" onClick={onClick} style={{ ...base, ...visual, ...style }}>
      {children}
    </button>
  );
}

/* --------------------------------- Checkbox --------------------------------- */

export function CtCheckbox({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (next: boolean) => void;
  label: ReactNode;
}) {
  return (
    <label
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 10,
        cursor: "pointer",
        padding: "8px 4px",
      }}
    >
      <span
        onClick={() => onChange(!checked)}
        style={{
          flexShrink: 0,
          width: 18,
          height: 18,
          marginTop: 1,
          borderRadius: 4,
          border: `1.5px solid ${checked ? t.accent : t.stroke}`,
          background: checked ? t.accent : t.white,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {checked ? (
          <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
            <path d="M1 4.5L4 7.5L10 1.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : null}
      </span>
      <span style={{ fontSize: 13, color: t.ink, lineHeight: 1.45 }}>{label}</span>
    </label>
  );
}

/* ----------------------------------- Fact ----------------------------------- */

export function CtFact({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <span style={{ fontSize: 11, color: t.label }}>{label}</span>
      <span style={{ fontSize: 14, fontWeight: 500, color: t.ink }}>{value}</span>
    </div>
  );
}

export function CtFactGrid({ children, columns = 3 }: { children: ReactNode; columns?: number }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        gap: 16,
      }}
    >
      {children}
    </div>
  );
}

/* ---------------------------------- Panel ---------------------------------- */

export function CtPanel({
  title,
  right,
  children,
  style,
}: {
  title?: string;
  right?: ReactNode;
  children: ReactNode;
  style?: CSSProperties;
}) {
  return (
    <div
      style={{
        borderRadius: 8,
        border: `1px solid ${t.stroke}`,
        background: t.white,
        overflow: "hidden",
        ...style,
      }}
    >
      {title ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "12px 16px",
            borderBottom: `1px solid ${t.stroke}`,
            background: t.frame,
          }}
        >
          <span style={{ fontSize: 12.5, fontWeight: 600, color: t.ink }}>{title}</span>
          {right ?? null}
        </div>
      ) : null}
      <div style={{ padding: 16 }}>{children}</div>
    </div>
  );
}

/* ----------------------------------- Row ------------------------------------ */

export function CtRow({
  children,
  onClick,
  style,
  last,
}: {
  children: ReactNode;
  onClick?: () => void;
  style?: CSSProperties;
  last?: boolean;
}) {
  return (
    <div
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "12px 4px",
        borderBottom: last ? "none" : `1px solid ${t.stroke}`,
        cursor: onClick ? "pointer" : "default",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* ---------------------------------- Empty ----------------------------------- */

export function CtEmpty({ label }: { label: string }) {
  return <div style={{ padding: "28px 4px", color: t.muted, fontSize: 13 }}>{label}</div>;
}

/* -------------------------------- Status tag -------------------------------- */

export type CtTagTone = "neutral" | "accent" | "success" | "warning" | "danger";

export function CtStatusTag({ label, tone = "neutral" }: { label: string; tone?: CtTagTone }) {
  const map: Record<CtTagTone, { bg: string; fg: string }> = {
    neutral: { bg: t.block, fg: t.label },
    accent: { bg: t.accentBg, fg: t.accent },
    success: { bg: "rgba(22,163,74,0.10)", fg: t.success },
    warning: { bg: "rgba(217,119,6,0.12)", fg: "#B45309" },
    danger: { bg: "rgba(220,38,38,0.10)", fg: t.red },
  };
  const { bg, fg } = map[tone];
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "2px 8px",
        borderRadius: 999,
        fontSize: 11,
        fontWeight: 600,
        background: bg,
        color: fg,
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </span>
  );
}

/* --------------------------------- Desk shell --------------------------------- */

export type CtNavItem = {
  id: string;
  label: string;
  to: string;
  end?: boolean;
};

/** Sidebar + canvas desk shell — standalone `/ct/*` or embedded in Register CT panel. */
export function CtDeskShell({
  personaLabel,
  navItems,
  children,
  embedded,
}: {
  personaLabel: string;
  navItems: CtNavItem[];
  children: ReactNode;
  /** When true (Register CT panel), hide Hub — Register owns chrome. */
  embedded?: boolean;
}) {
  return (
    <div style={{ display: "flex", height: "100%", background: t.canvas, fontFamily: "inherit" }}>
      <aside
        style={{
          width: embedded ? 160 : t.sidebarW,
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
          background: t.sidebar,
          borderRight: `1px solid ${t.stroke}`,
        }}
      >
        <div
          style={{
            height: t.headerH,
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: embedded ? "0 12px" : "0 16px",
            borderBottom: `1px solid ${t.stroke}`,
          }}
        >
          <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
            {!embedded ? (
              <span style={{ fontSize: 13, fontWeight: 700, color: t.ink, letterSpacing: "-0.01em" }}>
                Trove B2B
              </span>
            ) : null}
            <span
              style={{
                fontSize: embedded ? 12 : 10.5,
                fontWeight: embedded ? 600 : 400,
                color: embedded ? t.ink : t.muted,
              }}
            >
              {personaLabel}
            </span>
          </div>
        </div>
        <nav style={{ display: "flex", flexDirection: "column", gap: 2, padding: embedded ? 8 : 10, flex: 1 }}>
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.to}
              end={item.end}
              style={({ isActive }) => ({
                display: "flex",
                alignItems: "center",
                padding: "8px 10px",
                borderRadius: 4,
                fontSize: embedded ? 12.5 : 13,
                fontWeight: isActive ? 600 : 500,
                color: isActive ? t.ink : t.label,
                background: isActive ? t.block : "transparent",
                textDecoration: "none",
                fontFamily: "inherit",
              })}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        {!embedded ? (
          <div style={{ padding: 10, borderTop: `1px solid ${t.stroke}` }}>
            <Link to="/ct" style={{ fontSize: 11.5, color: t.muted, textDecoration: "none" }}>
              ← Hub
            </Link>
          </div>
        ) : null}
      </aside>
      <main style={{ flex: 1, overflowY: "auto", minWidth: 0 }}>{children}</main>
    </div>
  );
}

export { t as ctPalette };
