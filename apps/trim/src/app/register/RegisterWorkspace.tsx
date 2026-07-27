/**
 * Register workspace — theory side panel + Click-through as its own panel.
 *
 * Process rail: World → Personas → SME → Furnish → Wiring.
 * How lives inside Personas. CT inhabit is the right panel.
 */
import type { ReactNode } from "react";
import { NavLink, Outlet } from "react-router";
import { ctPalette as t } from "../shared/primitives";
import { RegisterClickThroughPanel } from "./RegisterClickThroughPanel";
import { useRegisterShell } from "./RegisterShellContext";

const SECTIONS = [
  { id: "world", label: "World", to: "/register/world" },
  { id: "personas", label: "Personas", to: "/register/personas" },
  { id: "sme", label: "SME", to: "/register/sme" },
  { id: "furnish", label: "Furnish", to: "/register/furnish" },
  { id: "wiring", label: "Wiring", to: "/register/wiring" },
];

const RAIL_W = 200;
const THEORY_W = 420;

export function RegisterWorkspace() {
  const { ctVisible, setCtVisible } = useRegisterShell();

  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        background: t.canvas,
        fontFamily: "inherit",
        overflow: "hidden",
      }}
    >
      <aside
        style={{
          width: RAIL_W,
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
            padding: "0 16px",
            borderBottom: `1px solid ${t.stroke}`,
          }}
        >
          <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: t.ink, letterSpacing: "-0.01em" }}>
              Trim
            </span>
            <span style={{ fontSize: 10.5, color: t.muted }}>Register</span>
          </div>
        </div>
        <nav style={{ display: "flex", flexDirection: "column", gap: 2, padding: 10, flex: 1, overflowY: "auto" }}>
          {SECTIONS.map((section) => (
            <NavLink
              key={section.id}
              to={section.to}
              style={({ isActive }) => ({
                display: "flex",
                alignItems: "center",
                padding: "8px 10px",
                borderRadius: 4,
                fontSize: 13,
                fontWeight: isActive ? 600 : 500,
                color: isActive ? t.ink : t.label,
                background: isActive ? t.block : "transparent",
                textDecoration: "none",
                fontFamily: "inherit",
              })}
            >
              {section.label}
            </NavLink>
          ))}
        </nav>
        {!ctVisible ? (
          <div style={{ padding: 10, borderTop: `1px solid ${t.stroke}` }}>
            <button
              type="button"
              onClick={() => setCtVisible(true)}
              style={{
                width: "100%",
                padding: "8px 10px",
                border: `1px solid ${t.stroke}`,
                borderRadius: 4,
                background: t.frame,
                color: t.accent,
                fontSize: 12,
                fontWeight: 600,
                fontFamily: "inherit",
                cursor: "pointer",
              }}
            >
              Show click-through
            </button>
          </div>
        ) : null}
      </aside>

      <section
        style={{
          width: ctVisible ? THEORY_W : undefined,
          flex: ctVisible ? undefined : 1,
          flexShrink: 0,
          minWidth: ctVisible ? THEORY_W : 0,
          display: "flex",
          flexDirection: "column",
          borderRight: ctVisible ? `1px solid ${t.stroke}` : undefined,
          background: t.canvas,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: t.headerH,
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            padding: "0 16px",
            borderBottom: `1px solid ${t.stroke}`,
            background: t.sidebar,
          }}
        >
          <span style={{ fontSize: 13, fontWeight: 500, color: t.ink }}>Theory</span>
        </div>
        <div style={{ flex: 1, overflowY: "auto", minHeight: 0 }}>
          <Outlet />
        </div>
      </section>

      {ctVisible ? <RegisterClickThroughPanel /> : null}
    </div>
  );
}

export function RegisterCanvas({ children }: { children: ReactNode }) {
  return <div style={{ padding: "20px 20px 32px", maxWidth: 720 }}>{children}</div>;
}
