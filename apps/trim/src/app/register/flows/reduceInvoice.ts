import type { FlowMap } from "./types";

export const reduceInvoiceFlow: FlowMap = {
  id: "reduce-invoice",
  label: "Reduce + invoice",
  purpose: "Record the ARB outcome, calculate measured savings, and invoice Trim's contingency fee.",
  nodes: [
    { id: "ui-outcome", label: "Worker outcome report", kind: "ui", position: { x: 0, y: 0 } },
    { id: "db-order", label: "Board order / corrected value", kind: "db", position: { x: 280, y: 0 } },
    { id: "api-savings", label: "Measured-savings calculator", kind: "api", position: { x: 560, y: 0 } },
    { id: "db-reduction", label: "Case state = reduced | denied | continued", kind: "db", position: { x: 840, y: 0 } },
    { id: "ui-reduction", label: "Owner reduction fact", kind: "ui", position: { x: 1120, y: 0 } },
    { id: "api-invoice", label: "Invoice + dunning service", kind: "api", position: { x: 840, y: 180 } },
    { id: "ui-invoice", label: "Owner invoice fact", kind: "ui", position: { x: 1120, y: 180 } },
    { id: "ui-collections", label: "Collections / AR queue", kind: "ui", position: { x: 1400, y: 180 } },
  ],
  edges: [
    { id: "e1", source: "ui-outcome", target: "db-order", label: "after value + order reference" },
    { id: "e2", source: "db-order", target: "api-savings", label: "before/after x millage" },
    { id: "e3", source: "api-savings", target: "db-reduction", label: "persist measured savings" },
    { id: "e4", source: "db-reduction", target: "ui-reduction", label: "surface reduction or denial" },
    { id: "e5", source: "db-reduction", target: "api-invoice", label: "reduced triggers fee invoice" },
    { id: "e6", source: "api-invoice", target: "ui-invoice", label: "savings x contingency %" },
    { id: "e7", source: "api-invoice", target: "ui-collections", label: "charge attempt / dunning / dispute" },
  ],
};
