import type { FlowMap } from "./types";

export const consentAuthorizeFlow: FlowMap = {
  id: "consent-authorize",
  label: "Consent + authorize",
  purpose: "Three ticks, then a one-time e-signed POA locking contingency %.",
  nodes: [
    { id: "ui-consent", label: "Consent ticks", kind: "ui", position: { x: 0, y: 0 } },
    { id: "api-consent", label: "Consent service", kind: "api", position: { x: 260, y: 0 } },
    { id: "db-consentauth", label: "Consent+Auth store", kind: "db", position: { x: 520, y: 0 } },
    { id: "ui-signdoor", label: "E-sign door", kind: "ui", position: { x: 780, y: 0 } },
    { id: "ext-esign", label: "E-sign provider", kind: "ext", position: { x: 1040, y: 0 } },
    { id: "ui-status", label: "Status facts", kind: "ui", position: { x: 780, y: 170 } },
  ],
  edges: [
    { id: "e1", source: "ui-consent", target: "api-consent", label: "see / understand / with it" },
    { id: "e2", source: "api-consent", target: "db-consentauth", label: "persist ticks + timestamp/IP" },
    { id: "e3", source: "db-consentauth", target: "ui-signdoor", label: "reveal $ + prompt sign" },
    { id: "e4", source: "ui-signdoor", target: "ext-esign", label: "POA / engagement doc" },
    { id: "e5", source: "ext-esign", target: "db-consentauth", label: "signed callback, % locked" },
    { id: "e6", source: "db-consentauth", target: "ui-status", label: "authorized fact" },
  ],
};
