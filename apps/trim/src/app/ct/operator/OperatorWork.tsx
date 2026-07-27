/**
 * Operator Work module shell — outlet for exceptions/audit/collections/county-data/dispatch.
 * Route: /ct/operator/work (with nested routes)
 */
import { NavLink, Outlet } from "react-router";
import { ctPalette as t } from "../../shared/primitives";

const WORK_TABS = [
  { id: "exceptions", label: "Exceptions", to: "exceptions" },
  { id: "audit", label: "Audit log", to: "audit" },
  { id: "collections", label: "Collections", to: "collections" },
  { id: "county-data", label: "County data", to: "county-data" },
  { id: "dispatch", label: "Dispatch", to: "dispatch" },
];

export function OperatorWork() {
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
        {WORK_TABS.map((tab) => (
          <NavLink
            key={tab.id}
            to={tab.to}
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
            {tab.label}
          </NavLink>
        ))}
      </div>
      <div style={{ flex: 1, overflowY: "auto" }}>
        <Outlet />
      </div>
    </div>
  );
}
