/**
 * Settings module — Jurisdiction table lives here (not a peer top module).
 * Surface: agency-ct-settings.
 */
import { Outlet } from "react-router";
import { SurfaceBoundary } from "../../register/trace/SurfaceBoundary";
import { ctPalette as t } from "../../shared/primitives";

export function AgencySettings() {
  return (
    <SurfaceBoundary id="agency-ct-settings" style={{ height: "100%", display: "flex", flexDirection: "column", minHeight: 0 }}>
      <div style={{ padding: "20px 40px 0", background: t.canvas }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: t.ink }}>Settings</div>
        <div style={{ fontSize: 12.5, color: t.label, marginTop: 4, marginBottom: 12 }}>
          Agency standing — jurisdiction / finder registration gates outreach and filing.
        </div>
        <div
          style={{
            fontSize: 12.5,
            fontWeight: 600,
            color: t.ink,
            paddingBottom: 10,
            borderBottom: `2px solid ${t.accent}`,
            display: "inline-block",
          }}
        >
          Jurisdiction table
        </div>
      </div>
      <div style={{ flex: 1, overflowY: "auto", minHeight: 0 }}>
        <Outlet />
      </div>
    </SurfaceBoundary>
  );
}
