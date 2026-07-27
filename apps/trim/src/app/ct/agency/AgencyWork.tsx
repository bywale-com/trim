/**
 * Work module — Exception queue + Audit log + SME work modals.
 * Surface: agency-ct-work.
 */
import { NavLink, Outlet } from "react-router";
import { SurfaceBoundary } from "../../register/trace/SurfaceBoundary";
import { ctPalette as t } from "../../shared/primitives";

const TABS = [
  { to: "exceptions", label: "Exception queue", end: true },
  { to: "audit", label: "Audit log", end: true },
  { to: "reconciling", label: "Reconciling queue", end: true },
  { to: "appeals", label: "Appeal queue", end: true },
  { to: "inbound", label: "Inbound matcher", end: true },
  { to: "state-admin", label: "State Admin Workload", end: true },
] as const;

export function AgencyWork() {
  return (
    <SurfaceBoundary id="agency-ct-work" style={{ height: "100%", display: "flex", flexDirection: "column", minHeight: 0 }}>
      <div
        style={{
          display: "flex",
          gap: 4,
          padding: "12px 40px 0",
          borderBottom: `1px solid ${t.stroke}`,
          background: t.canvas,
          flexWrap: "wrap",
        }}
      >
        {TABS.map((tab) => (
          <NavLink
            key={tab.to}
            to={tab.to}
            end={tab.end}
            style={({ isActive }) => ({
              padding: "8px 12px",
              fontSize: 12.5,
              fontWeight: isActive ? 600 : 500,
              color: isActive ? t.ink : t.label,
              borderBottom: isActive ? `2px solid ${t.accent}` : "2px solid transparent",
              textDecoration: "none",
              marginBottom: -1,
            })}
          >
            {tab.label}
          </NavLink>
        ))}
      </div>
      <div style={{ flex: 1, overflowY: "auto", minHeight: 0 }}>
        <Outlet />
      </div>
    </SurfaceBoundary>
  );
}
