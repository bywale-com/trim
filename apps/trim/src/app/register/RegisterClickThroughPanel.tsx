/**
 * Click-through panel — embedded Owner / Operator / Worker desks inside Register.
 * Mounts Trim CT plants (not legacy Trove Business/Agency).
 */
import { useEffect, useState, type ReactNode } from "react";
import { OperatorAudit } from "../ct/operator/OperatorAudit";
import { OperatorClients } from "../ct/operator/OperatorClients";
import { OperatorCollections } from "../ct/operator/OperatorCollections";
import { OperatorCountyData } from "../ct/operator/OperatorCountyData";
import { OperatorDispatch } from "../ct/operator/OperatorDispatch";
import { OperatorExceptions } from "../ct/operator/OperatorExceptions";
import { OperatorJurisdiction } from "../ct/operator/OperatorJurisdiction";
import { OwnerApp } from "../ct/owner/OwnerApp";
import { WorkerApp } from "../ct/worker/WorkerApp";
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

type OperatorModuleId = "clients" | "work" | "settings";
type WorkModalId = "exceptions" | "audit" | "collections" | "county-data" | "dispatch";

const SETTINGS_SURFACES = new Set([
  "trim-ct-op-jurisdiction",
  "trim-ct-op-ptc-capacity",
  "trim-ct-op-rollout-gate",
  "trim-ct-op-entity-signer",
  "trim-ct-op-appeal-window",
  "trim-ct-op-fee-cap",
  "trim-ct-op-licensed-roster",
]);

const CLIENTS_SURFACES = new Set([
  "trim-ct-op-portfolio",
  "trim-ct-op-detected-blocked",
  "trim-ct-op-invoice-collection",
  "trim-ct-op-revoke-representation",
]);

const WORK_SURFACES: Record<string, WorkModalId> = {
  "trim-ct-op-exceptions": "exceptions",
  "trim-ct-op-hearing-report-review": "exceptions",
  "trim-ct-op-inbound-board": "exceptions",
  "trim-ct-op-audit": "audit",
  "trim-ct-op-standing-snapshot": "audit",
  "trim-ct-op-collections": "collections",
  "trim-ct-op-county-data": "county-data",
  "trim-ct-op-worker-dispatch": "dispatch",
};

function operatorModuleForSurface(surfaceId: string | null): OperatorModuleId | null {
  if (!surfaceId) return null;
  if (CLIENTS_SURFACES.has(surfaceId)) return "clients";
  if (SETTINGS_SURFACES.has(surfaceId)) return "settings";
  if (surfaceId in WORK_SURFACES || surfaceId.startsWith("trim-ct-op-")) return "work";
  return null;
}

function workModalForSurface(surfaceId: string | null): WorkModalId | null {
  if (!surfaceId) return null;
  return WORK_SURFACES[surfaceId] ?? null;
}

function EmbeddedOperatorDesk() {
  const { focusedSurfaceId, focusSeq } = useRegisterTrace();
  const fromFocus = operatorModuleForSurface(focusedSurfaceId);
  const workFromFocus = workModalForSurface(focusedSurfaceId);
  const [module, setModule] = useState<OperatorModuleId>("clients");
  const [workModal, setWorkModal] = useState<WorkModalId>("exceptions");

  useEffect(() => {
    if (fromFocus) setModule(fromFocus);
    if (workFromFocus) setWorkModal(workFromFocus);
  }, [fromFocus, workFromFocus, focusSeq]);

  const active = fromFocus ?? module;
  const activeWork = workFromFocus ?? workModal;

  let body: ReactNode = null;
  if (active === "clients") body = <OperatorClients />;
  else if (active === "settings") {
    body = (
      <SurfaceBoundary id="trim-ct-op-jurisdiction" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "20px 40px 0" }}>
          <div style={{ fontSize: 20, fontWeight: 700, color: t.ink }}>Settings</div>
          <div style={{ fontSize: 12.5, color: t.label, marginTop: 4, marginBottom: 12 }}>
            Operator standing — jurisdiction / PTC licensure gates outreach and filing.
          </div>
        </div>
        <div style={{ flex: 1, overflowY: "auto" }}>
          <OperatorJurisdiction />
        </div>
      </SurfaceBoundary>
    );
  } else {
    body =
      activeWork === "audit" ? (
        <OperatorAudit />
      ) : activeWork === "collections" ? (
        <OperatorCollections />
      ) : activeWork === "county-data" ? (
        <OperatorCountyData />
      ) : activeWork === "dispatch" ? (
        <OperatorDispatch />
      ) : (
        <OperatorExceptions />
      );
  }

  const workItems: { id: WorkModalId; label: string }[] = [
    { id: "exceptions", label: "Exceptions" },
    { id: "audit", label: "Audit" },
    { id: "collections", label: "Collections" },
    { id: "county-data", label: "County data" },
    { id: "dispatch", label: "Dispatch" },
  ];

  return (
    <div style={{ display: "flex", height: "100%", background: t.canvas }}>
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
              { id: "clients" as const, label: "Clients" },
              { id: "work" as const, label: "Work" },
              { id: "settings" as const, label: "Settings" },
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
                border: "none",
                fontSize: 12.5,
                fontWeight: active === item.id ? 600 : 500,
                color: active === item.id ? t.ink : t.label,
                background: active === item.id ? t.block : "transparent",
                fontFamily: "inherit",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              {item.label}
            </button>
          ))}
          {active === "work" ? (
            <div style={{ marginTop: 8, borderTop: `1px solid ${t.stroke}`, paddingTop: 8 }}>
              {workItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setWorkModal(item.id)}
                  style={{
                    display: "block",
                    width: "100%",
                    padding: "6px 10px",
                    border: "none",
                    borderRadius: 4,
                    fontSize: 11.5,
                    fontWeight: activeWork === item.id ? 600 : 500,
                    color: activeWork === item.id ? t.ink : t.muted,
                    background: activeWork === item.id ? t.frame : "transparent",
                    fontFamily: "inherit",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          ) : null}
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
        {ctDesk === "owner" ? (
          <OwnerApp embedded />
        ) : ctDesk === "operator" ? (
          <EmbeddedOperatorDesk />
        ) : (
          <WorkerApp embedded />
        )}
      </div>
    </div>
  );
}
