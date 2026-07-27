import { useState } from "react";
import { RECOVERY_CASES } from "../data/cases";
import type { RecoveryCase } from "../data/types";

/** Local click-through state for the Agency Owner desk — independent clone of the seed cases. */
export function useAgencyCases() {
  const [cases, setCases] = useState<Record<string, RecoveryCase>>(() =>
    Object.fromEntries(RECOVERY_CASES.map((c) => [c.id, { ...c, consentTicks: { ...c.consentTicks }, docs: c.docs.map((d) => ({ ...d })) }])),
  );

  function resolveException(id: string) {
    setCases((prev) => ({
      ...prev,
      [id]: { ...prev[id], status: "filing", kickbackReason: undefined, daysInState: 0 },
    }));
  }

  return { cases, resolveException };
}
