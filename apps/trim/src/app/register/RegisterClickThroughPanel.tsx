/**
 * Click-through panel — embedded Owner / Operator / Worker desks inside Register.
 * CT plant is deferred — Owner and Operator still render legacy Trove screens
 * until the next pass builds Trim CT screens.
 */
import { useEffect, useState, type ReactNode } from "react";
import { AgencyAppeals } from "../ct/agency/AgencyAppeals";
import { AgencyAudit } from "../ct/agency/AgencyAudit";
import { AgencyClients } from "../ct/agency/AgencyClients";
import { AgencyExceptions } from "../ct/agency/AgencyExceptions";
import { AgencyInbound } from "../ct/agency/AgencyInbound";
import { AgencyJurisdiction } from "../ct/agency/AgencyJurisdiction";
import { AgencyReconciling } from "../ct/agency/AgencyReconciling";
import { AgencyStateAdmin } from "../ct/agency/AgencyStateAdmin";
import { BusinessApp } from "../ct/business/BusinessApp";
import { SurfaceBoundary } from "./trace/SurfaceBoundary";
import { ctPalette as t } from "../shared/primitives";
import { useRegisterShell, type CtDeskId } from "./RegisterShellContext";
import { useRegisterTrace } from "./trace/RegisterTraceContext";

function deskTabStyle(active: boolean) {
  return {
    padding: "4px 10px",
    border: `1px solid ${active ? t.accent : t.stroke}`,
    borderRadius: 4,
    background: active ? t.accentBg : t.frame,
    color: active ? t.accent : t.label,
    fontSize: 12,
    fontWeight: 500 as const,
    fontFamily: "inherit" as const,
    cursor: "pointer" as const,
  };
}

type AgencyModuleId = "clients" | "work" | "settings";
type WorkModalId = "exceptions" | "audit" | "reconciling" | "appeals" | "inbound" | "state-admin";

const SETTINGS_SURFACES = new Set([
  "agency-ct-settings",
  "agency-ct-jurisdiction",
  "agency-ct-filing-method",
  "agency-ct-expected-days",
  "agency-ct-fee-cap",
  "agency-ct-row-completeness",
  "agency-ct-or-license-slot",
  "agency-ct-license-coverage",
  "agency-ct-licensed-roster",
  "agency-ct-submit-approval",
]);

const CLIENTS_SURFACES = new Set([
  "agency-ct-portfolio",
  "agency-ct-client-dedupe",
  "agency-ct-detected-blocked",
  "agency-ct-ma-escheat",
  "agency-ct-successor-standing",
  "agency-ct-legal-staleness",
  "agency-ct-revoke-representation",
  "agency-ct-commercial-conflict",
  "agency-ct-public-entity",
  "agency-ct-invoice-collection",
]);

function agencyModuleForSurface(surfaceId: string | null): AgencyModuleId | null {
  if (!surfaceId) return null;
  if (CLIENTS_SURFACES.has(surfaceId)) return "clients";
  if (SETTINGS_SURFACES.has(surfaceId)) return "settings";
  if (
    surfaceId === "agency-ct-work" ||
    surfaceId === "agency-ct-exceptions" ||
    surfaceId === "agency-ct-resubmit" ||
    surfaceId === "agency-ct-audit" ||
    surfaceId === "agency-ct-reconciling" ||
    surfaceId === "agency-ct-appeal" ||
    surfaceId === "agency-ct-inbound-matcher" ||
    surfaceId === "agency-ct-state-admin-workload" ||
    surfaceId === "agency-ct-standing-snapshot"
  ) {
    return "work";
  }
  return null;
}

function workModalForSurface(surfaceId: string | null): WorkModalId | null {
  if (!surfaceId) return null;
  if (surfaceId === "agency-ct-audit" || surfaceId === "agency-ct-standing-snapshot") return "audit";
  if (surfaceId === "agency-ct-reconciling") return "reconciling";
  if (surfaceId === "agency-ct-appeal") return "appeals";
  if (surfaceId === "agency-ct-inbound-matcher") return "inbound";
  if (surfaceId === "agency-ct-state-admin-workload") return "state-admin";
  if (surfaceId === "agency-ct-exceptions" || surfaceId === "agency-ct-resubmit") return "exceptions";
  if (surfaceId === "agency-ct-work") return "exceptions";
  return null;
}

function EmbeddedAgencyDesk() {
  const { focusedSurfaceId, focusSeq } = useRegisterTrace();
  const fromFocus = agencyModuleForSurface(focusedSurfaceId);
  const workFromFocus = workModalForSurface(focusedSurfaceId);
  const [module, setModule] = useState<AgencyModuleId>("clients");
  const [workModal, setWorkModal] = useState<WorkModalId>("exceptions");

  useEffect(() => {
    if (fromFocus) setModule(fromFocus);
    if (workFromFocus) setWorkModal(workFromFocus);
  }, [fromFocus, workFromFocus, focusSeq]);

  const active = fromFocus ?? module;
  const activeWork = workFromFocus ?? workModal;

  let body: ReactNode = null;
  if (active === "clients") body = <AgencyClients />;
  else if (active === "settings") {
    body = (
      <SurfaceBoundary id="agency-ct-settings" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "20px 40px 0" }}>
          <div style={{ fontSize: 20, fontWeight: 700, color: t.ink }}>Settings</div>
          <div style={{ fontSize: 12.5, color: t.label, marginTop: 4, marginBottom: 12 }}>
            Agency standing — jurisdiction / PTC licensure gates outreach and filing.
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
        <AgencyJurisdiction />
      </SurfaceBoundary>
    );
  } else {
    body = (
      <SurfaceBoundary id="agency-ct-work" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            gap: 4,
            padding: "12px 24px 0",
            borderBottom: `1px solid ${t.stroke}`,
            flexWrap: "wrap",
          }}
        >
          {(
            [
              { id: "exceptions", label: "Exception queue" },
              { id: "audit", label: "Audit log" },
              { id: "reconciling", label: "Reconciling queue" },
              { id: "appeals", label: "Appeal queue" },
              { id: "inbound", label: "Inbound matcher" },
              { id: "state-admin", label: "State Admin Workload" },
            ] as const
          ).map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setWorkModal(tab.id)}
              style={{
                padding: "8px 12px",
                fontSize: 12.5,
                fontWeight: activeWork === tab.id ? 600 : 500,
                color: activeWork === tab.id ? t.ink : t.label,
                border: "none",
                borderBottom: activeWork === tab.id ? `2px solid ${t.accent}` : "2px solid transparent",
                background: "transparent",
                cursor: "pointer",
                fontFamily: "inherit",
                marginBottom: -1,
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div style={{ flex: 1, overflowY: "auto" }}>
          {activeWork === "exceptions" ? (
            <AgencyExceptions />
          ) : activeWork === "audit" ? (
            <AgencyAudit />
          ) : activeWork === "reconciling" ? (
            <AgencyReconciling />
          ) : activeWork === "appeals" ? (
            <AgencyAppeals />
          ) : activeWork === "inbound" ? (
            <AgencyInbound />
          ) : (
            <AgencyStateAdmin />
          )}
        </div>
      </SurfaceBoundary>
    );
  }

  return (
    <div style={{ display: "flex", height: "100%", background: t.canvas, fontFamily: "inherit" }}>
      <aside
        style={{
          width: 160,
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
            alignItems: "center",
            padding: "0 12px",
            borderBottom: `1px solid ${t.stroke}`,
          }}
        >
          <span style={{ fontSize: 12, fontWeight: 600, color: t.ink }}>Operator</span>
        </div>
        <nav style={{ display: "flex", flexDirection: "column", gap: 2, padding: 8, flex: 1 }}>
          {(
            [
              { id: "clients", label: "Clients" },
              { id: "work", label: "Work" },
              { id: "settings", label: "Settings" },
            ] as const
          ).map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setModule(item.id)}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "8px 10px",
                borderRadius: 4,
                fontSize: 12.5,
                fontWeight: active === item.id ? 600 : 500,
                color: active === item.id ? t.ink : t.label,
                background: active === item.id ? t.block : "transparent",
                border: "none",
                cursor: "pointer",
                fontFamily: "inherit",
                textAlign: "left",
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </aside>
      <main style={{ flex: 1, overflowY: "auto", minWidth: 0 }}>{body}</main>
    </div>
  );
}

export function RegisterClickThroughPanel() {
  const { ctDesk, setCtDesk, setCtVisible } = useRegisterShell();

  return (
    <div
      style={{
        flex: 1,
        minWidth: 0,
        minHeight: 0,
        display: "flex",
        flexDirection: "column",
        background: t.canvas,
        borderLeft: `1px solid ${t.stroke}`,
      }}
    >
      <header
        style={{
          height: t.headerH,
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 12px",
          borderBottom: `1px solid ${t.stroke}`,
          background: t.sidebar,
          gap: 8,
        }}
      >
        <span style={{ fontSize: 13, fontWeight: 600, color: t.ink }}>Click-through</span>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {(["owner", "operator", "worker"] as CtDeskId[]).map((desk) => (
            <button key={desk} type="button" onClick={() => setCtDesk(desk)} style={deskTabStyle(ctDesk === desk)}>
              {desk === "owner" ? "Owner" : desk === "operator" ? "Operator" : "Worker"}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setCtVisible(false)}
            style={{
              padding: "4px 10px",
              border: `1px solid ${t.stroke}`,
              borderRadius: 4,
              background: t.frame,
              color: t.muted,
              fontSize: 12,
              fontWeight: 500,
              fontFamily: "inherit",
              cursor: "pointer",
            }}
          >
            Hide
          </button>
        </div>
      </header>
      <div style={{ flex: 1, minHeight: 0, minWidth: 0, overflow: "hidden" }}>
        {ctDesk === "owner" ? <BusinessApp embedded /> : ctDesk === "operator" ? <EmbeddedAgencyDesk /> : (
          <div style={{ padding: "40px 24px", color: t.muted, fontSize: 13 }}>Worker CT — next pass.</div>
        )}
      </div>
    </div>
  );
}
