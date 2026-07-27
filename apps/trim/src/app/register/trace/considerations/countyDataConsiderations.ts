/**
 * County-Data Specialist — considerations (Trim, v2 stub).
 * Domain: roll formats; CAMA; comps; e-file; FOIA fallbacks; per-county cost.
 * TODO: fill with ~25–30 sourced items from docs/sme/pass1,pass2/county-data.md
 */
import type { SmeItem } from "../smeTypes";

export const COUNTY_DATA_ITEMS: SmeItem[] = [
  {
    id: "cnt-01",
    consideration:
      "TODO — What are the standard formats for TX county appraisal roll exports (CAMA data), and are they available via bulk download, API, or only FOIA request? What is the typical per-county acquisition cost and refresh frequency?",
    thesisGap:
      "Detection depends on public roll data; acquisition format, cost, and refresh cadence are not confirmed per county.",
    solution:
      "TODO — <mechanism> so that <purpose>.",
    references: [],
    implementsSurfaceIds: ["trim-ct-op-county-data"],
    status: "deferred",
    notes: "Seed pass — placeholder. Follow-up agent fills depth from docs/sme/pass1,pass2/county-data.md",
  },
];
