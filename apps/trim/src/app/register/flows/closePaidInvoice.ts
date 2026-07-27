import type { FlowMap } from "./types";

export const closePaidInvoiceFlow: FlowMap = {
  id: "close-paid-invoice",
  label: "Close paid + invoice",
  purpose: "Confirm claimant paid, then invoice Trove's cut — no escrow hold.",
  nodes: [
    { id: "job-reconcile", label: "Remittance reconcile", kind: "job", position: { x: 0, y: 0 } },
    { id: "ext-confirm", label: "State portal / claimant self-report", kind: "ext", position: { x: 260, y: 0 } },
    { id: "db-paid", label: "Case state = paid_claimant", kind: "db", position: { x: 520, y: 0 } },
    { id: "api-invoice", label: "Invoice/billing service", kind: "api", position: { x: 780, y: 0 } },
    { id: "db-invoiced", label: "Case state = invoiced", kind: "db", position: { x: 1040, y: 0 } },
    { id: "ui-paidfacts", label: "Paid/Invoice facts", kind: "ui", position: { x: 1040, y: 170 } },
  ],
  edges: [
    { id: "e1", source: "job-reconcile", target: "ext-confirm", label: "confirm claimant paid" },
    { id: "e2", source: "ext-confirm", target: "db-paid", label: "mark paid_claimant" },
    { id: "e3", source: "db-paid", target: "api-invoice", label: "trigger invoice for cut" },
    { id: "e4", source: "api-invoice", target: "db-invoiced", label: "mark invoiced" },
    { id: "e5", source: "db-invoiced", target: "ui-paidfacts", label: "facts surfaced" },
  ],
};
