import type { FlowMap } from "./types";
import { activateNoticeFlow } from "./activateNotice";
import { consentAuthorizeFlow } from "./consentAuthorize";
import { fileClaimPacketFlow } from "./fileClaimPacket";
import { recoverKickbackFlow } from "./recoverKickback";
import { closePaidInvoiceFlow } from "./closePaidInvoice";

export * from "./types";

/** Flow anchors, in Register order (see docs/register/FLOWS.md). */
export const REGISTER_FLOWS: FlowMap[] = [
  activateNoticeFlow,
  consentAuthorizeFlow,
  fileClaimPacketFlow,
  recoverKickbackFlow,
  closePaidInvoiceFlow,
];

export function getRegisterFlow(id: string): FlowMap | undefined {
  return REGISTER_FLOWS.find((flow) => flow.id === id);
}
