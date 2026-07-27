import { useMemo, useState } from "react";
import { BUSINESS_CASES } from "../data/cases";
import type { RecoveryCase } from "../data/types";

/**
 * Local click-through state for the Business desk — one company, many cases.
 * Gray loFi prototype only: nothing persists past a reload.
 */
export function useBusinessCases() {
  const [cases, setCases] = useState<Record<string, RecoveryCase>>(() =>
    Object.fromEntries(
      BUSINESS_CASES.map((c) => [
        c.id,
        { ...c, consentTicks: { ...c.consentTicks }, docs: c.docs.map((d) => ({ ...d })) },
      ]),
    ),
  );

  const order = useMemo(() => BUSINESS_CASES.map((c) => c.id), []);

  function updateCase(id: string, patch: Partial<RecoveryCase>) {
    setCases((prev) => ({ ...prev, [id]: { ...prev[id], ...patch } }));
  }

  function setTick(id: string, tick: keyof RecoveryCase["consentTicks"], value: boolean) {
    setCases((prev) => ({
      ...prev,
      [id]: { ...prev[id], consentTicks: { ...prev[id].consentTicks, [tick]: value } },
    }));
  }

  function setDocUploaded(id: string, docId: string, uploaded: boolean) {
    setCases((prev) => ({
      ...prev,
      [id]: { ...prev[id], docs: prev[id].docs.map((d) => (d.id === docId ? { ...d, uploaded } : d)) },
    }));
  }

  return { cases, order, updateCase, setTick, setDocUploaded };
}
