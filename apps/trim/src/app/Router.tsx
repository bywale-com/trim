/**
 * App router — Register shell (theory + CT panel). Standalone /ct/* still works.
 * BrowserRouter is applied by the host (standalone main or embedded HQ entry).
 */
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { Hub } from "./ct/Hub";
import { OwnerApp } from "./ct/owner/OwnerApp";
import { OperatorApp } from "./ct/operator/OperatorApp";
import { OperatorClients } from "./ct/operator/OperatorClients";
import { OperatorWork } from "./ct/operator/OperatorWork";
import { OperatorExceptions } from "./ct/operator/OperatorExceptions";
import { OperatorAudit } from "./ct/operator/OperatorAudit";
import { OperatorCollections } from "./ct/operator/OperatorCollections";
import { OperatorCountyData } from "./ct/operator/OperatorCountyData";
import { OperatorDispatch } from "./ct/operator/OperatorDispatch";
import { OperatorSettings } from "./ct/operator/OperatorSettings";
import { OperatorJurisdiction } from "./ct/operator/OperatorJurisdiction";
import { WorkerApp } from "./ct/worker/WorkerApp";
import { RegisterShellProvider } from "./register/RegisterShellContext";
import { RegisterWorkspace } from "./register/RegisterWorkspace";
import { RegisterFurnish } from "./register/panes/RegisterFurnish";
import { RegisterPersonas } from "./register/panes/RegisterPersonas";
import { RegisterSme } from "./register/panes/RegisterSme";
import { RegisterWiring } from "./register/panes/RegisterWiring";
import { RegisterWorld } from "./register/panes/RegisterWorld";
import { RegisterTraceProvider } from "./register/trace/RegisterTraceContext";

/** Providers + routes — host supplies BrowserRouter (and optional basename). */
export function RegisterApp() {
  return (
    <RegisterShellProvider>
      <RegisterTraceProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/register" replace />} />

          <Route path="/register" element={<RegisterWorkspace />}>
            <Route index element={<Navigate to="world" replace />} />
            <Route path="world" element={<RegisterWorld />} />
            <Route path="personas" element={<RegisterPersonas />} />
            <Route path="sme" element={<RegisterSme />} />
            <Route path="furnish" element={<RegisterFurnish />} />
            <Route path="wiring" element={<RegisterWiring />} />
            <Route path="outcomes" element={<Navigate to="/register/personas" replace />} />
            <Route path="how" element={<Navigate to="/register/personas" replace />} />
            <Route path="cants" element={<Navigate to="/register/furnish" replace />} />
            <Route path="flows" element={<Navigate to="/register/wiring" replace />} />
            <Route path="ct" element={<Navigate to="/register/world" replace />} />
          </Route>

          {/* ── CT Hub ──────────────────────────────────────────────────── */}
          <Route path="/ct" element={<Hub />} />

          {/* ── Owner desk (/ct/owner) ──────────────────────────────────── */}
          <Route path="/ct/owner/*" element={<OwnerApp />} />

          {/* ── Operator desk (/ct/operator) ───────────────────────────── */}
          <Route path="/ct/operator" element={<OperatorApp />}>
            <Route index element={<Navigate to="clients" replace />} />
            <Route path="clients" element={<OperatorClients />} />
            <Route path="work" element={<OperatorWork />}>
              <Route index element={<Navigate to="exceptions" replace />} />
              <Route path="exceptions" element={<OperatorExceptions />} />
              <Route path="audit" element={<OperatorAudit />} />
              <Route path="collections" element={<OperatorCollections />} />
              <Route path="county-data" element={<OperatorCountyData />} />
              <Route path="dispatch" element={<OperatorDispatch />} />
            </Route>
            <Route path="settings" element={<OperatorSettings />}>
              <Route index element={<Navigate to="jurisdiction" replace />} />
              <Route path="jurisdiction" element={<OperatorJurisdiction />} />
            </Route>
          </Route>

          {/* ── Worker desk (/ct/worker) ────────────────────────────────── */}
          <Route path="/ct/worker/*" element={<WorkerApp />} />

          {/* Legacy Trove paths → Trim desks */}
          <Route path="/ct/business/*" element={<Navigate to="/ct/owner" replace />} />
          <Route path="/ct/agency/*" element={<Navigate to="/ct/operator" replace />} />
          <Route path="/ct/ops" element={<Navigate to="/ct/operator" replace />} />
          <Route path="/ct/ops/*" element={<Navigate to="/ct/operator" replace />} />

          <Route path="*" element={<Navigate to="/register" replace />} />
        </Routes>
      </RegisterTraceProvider>
    </RegisterShellProvider>
  );
}

export function AppRouter({ basename }: { basename?: string } = {}) {
  return (
    <BrowserRouter basename={basename}>
      <RegisterApp />
    </BrowserRouter>
  );
}
