import type { FlowMap } from "./types";
import { activateNoticeFlow } from "./activateNotice";
import { consentAuthorizeFlow } from "./consentAuthorize";
import { evidenceHearingFlow } from "./evidenceHearing";
import { reduceInvoiceFlow } from "./reduceInvoice";
import { recoverExceptionFlow } from "./recoverException";

export * from "./types";

/** Flow anchors, in Trim protest Register order. */
export const REGISTER_FLOWS: FlowMap[] = [
  activateNoticeFlow,
  consentAuthorizeFlow,
  evidenceHearingFlow,
  reduceInvoiceFlow,
  recoverExceptionFlow,
];

export function getRegisterFlow(id: string): FlowMap | undefined {
  return REGISTER_FLOWS.find((flow) => flow.id === id);
}
