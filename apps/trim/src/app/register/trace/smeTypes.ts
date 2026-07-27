/**
 * Shared SME types — consideration → <mechanism> so that <purpose> → refs.
 * Legacy pass1/pass2 fields still accepted until each seat is rewritten.
 */
export type SmeStatus = "implemented" | "partial" | "deferred" | "wiring";

export type SmeReference = {
  title: string;
  url: string;
};

export type SmeItem = {
  id: string;
  /** v2 — hole in the thesis. */
  consideration?: string;
  /** v2 — what Personas/leaves left open. */
  thesisGap?: string;
  /** v2 — "<mechanism> so that <purpose>". */
  solution?: string;
  /** v2 — external rationale links. */
  references?: SmeReference[];
  /**
   * Written product answer. Lives on the SME item — not Furnish.
   * Problem = context. Implementation = relative click-path only for what
   * this consideration adds (“On X, you can now…”). Collapse by default in UI.
   */
  implementationProblem?: string;
  implementation?: string;
  /** Values/tags introduced here — red inline highlight (not CT-routable). */
  implementationAdds?: string[];
  /**
   * CT assembly gap only — present when Implementation is written but not
   * fully planted. Ticket-board source. Not rendered in the SME pane.
   */
  implementationPlant?: "not_done";
  /** Legacy Pass 1 */
  pass1Question?: string;
  /** Legacy Pass 2 */
  pass2Solution?: string;
  /** Legacy source line */
  source?: string;
  implementsSurfaceIds: string[];
  status: SmeStatus;
  notes?: string;
  handoffOwner?: "pm" | "cto";
  handoffNumber?: number;
};

export type SmePersona = {
  id: string;
  label: string;
  whyExists: string;
  /** Domain lane — keeps seats from overlapping. */
  domain?: string;
  items: SmeItem[];
};

export function smeConsideration(item: SmeItem): string {
  return item.consideration ?? item.pass1Question ?? "";
}

export function smeSolution(item: SmeItem): string {
  return item.solution ?? item.pass2Solution ?? "";
}

export function smeReferences(item: SmeItem): SmeReference[] {
  if (item.references?.length) return item.references;
  if (!item.source) return [];
  const urls = item.source.match(/https?:\/\/[^\s)]+/g) ?? [];
  if (urls.length) return urls.map((url) => ({ title: item.source!, url }));
  return [{ title: item.source, url: "#" }];
}
