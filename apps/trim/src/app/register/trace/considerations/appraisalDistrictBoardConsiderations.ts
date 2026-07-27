/**
 * Appraisal District / Board Perspective Specialist — considerations (Trim, v2 stub).
 * Domain: evidence formats boards accept; scheduling; remote/written share; what persuades lay boards.
 * TODO: fill with ~25–30 sourced items from docs/sme/pass1,pass2/appraisal-district-board.md
 */
import type { SmeItem } from "../smeTypes";

export const APPRAISAL_DISTRICT_BOARD_ITEMS: SmeItem[] = [
  {
    id: "adb-01",
    consideration:
      "TODO — What share of TX ARB hearings are conducted remotely vs in-person, and does the board accept a written presentation without a live advocate? This directly sizes the Worker layer.",
    thesisGap:
      "Worker layer size depends on the in-person requirement share; remote/written availability is not confirmed per county.",
    solution:
      "TODO — <mechanism> so that <purpose>.",
    references: [],
    implementsSurfaceIds: ["trim-ct-worker-queue", "trim-ct-op-worker-dispatch", "trim-ct-worker-hearing"],
    status: "deferred",
    notes: "Seed pass — placeholder. Follow-up agent fills depth from docs/sme/pass1,pass2/appraisal-district-board.md",
  },
];
