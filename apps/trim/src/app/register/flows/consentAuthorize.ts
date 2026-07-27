import type { FlowMap } from "./types";

export const consentAuthorizeFlow: FlowMap = {
  id: "consent-authorize",
  label: "Consent + authorize",
  purpose: "Consent ticks reveal the Appointment of Agent and lock jurisdiction-aware terms.",
  nodes: [
    { id: "ui-consent", label: "Consent ticks: see / understand / with it", kind: "ui", position: { x: 0, y: 0 } },
    { id: "api-consent", label: "Consent capture service", kind: "api", position: { x: 280, y: 0 } },
    { id: "db-jurisdiction", label: "Fee cap + signer authority rules", kind: "db", position: { x: 560, y: 0 } },
    { id: "ui-agent", label: "Appointment of Agent (Form 50-162)", kind: "ui", position: { x: 840, y: 0 } },
    { id: "api-authorize", label: "Authorization capture", kind: "api", position: { x: 1120, y: 0 } },
    { id: "db-poa", label: "POA record + contingency lock", kind: "db", position: { x: 1120, y: 170 } },
    { id: "ui-status", label: "Authorized status fact", kind: "ui", position: { x: 840, y: 170 } },
  ],
  edges: [
    { id: "e1", source: "ui-consent", target: "api-consent", label: "persist ticks + timestamp" },
    { id: "e2", source: "api-consent", target: "db-jurisdiction", label: "compute contingency %" },
    { id: "e3", source: "db-jurisdiction", target: "ui-agent", label: "reveal terms + signer fields" },
    { id: "e4", source: "ui-agent", target: "api-authorize", label: "signature + title + parcel scope" },
    { id: "e5", source: "api-authorize", target: "db-poa", label: "lock signed terms" },
    { id: "e6", source: "db-poa", target: "ui-status", label: "authorized fact" },
  ],
};
