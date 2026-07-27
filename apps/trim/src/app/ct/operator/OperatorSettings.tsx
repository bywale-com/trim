/**
 * Operator Settings shell — jurisdiction lives inside settings.
 * Route: /ct/operator/settings (outlet)
 */
import { NavLink, Outlet } from "react-router";
import { ctPalette as t } from "../../shared/primitives";

export function OperatorSettings() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div
        style={{
          display: "flex",
          gap: 0,
          borderBottom: `1px solid ${t.stroke}`,
          background: t.sidebar,
          padding: "0 32px",
        }}
      >
        <NavLink
          to="jurisdiction"
          style={({ isActive }) => ({
            padding: "14px 16px",
            fontSize: 13,
            fontWeight: isActive ? 600 : 400,
            color: isActive ? t.ink : t.label,
            textDecoration: "none",
            borderBottom: isActive ? `2px solid ${t.accent}` : "2px solid transparent",
            fontFamily: "inherit",
          })}
        >
          Jurisdiction &amp; licensure
        </NavLink>
      </div>
      <div style={{ flex: 1, overflowY: "auto" }}>
        <Outlet />
      </div>
    </div>
  );
}
