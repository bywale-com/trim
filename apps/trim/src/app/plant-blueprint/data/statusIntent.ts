import { Intent } from "@blueprintjs/core";
import type { CaseStatus } from "./seed";

export const STATUS_META: Record<CaseStatus, { label: string; intent: Intent }> = {
  detected: { label: "Detected", intent: Intent.NONE },
  notified: { label: "Notified", intent: Intent.PRIMARY },
  consented: { label: "Consented", intent: Intent.PRIMARY },
  authorized: { label: "Authorized", intent: Intent.PRIMARY },
  filing: { label: "Filing", intent: Intent.PRIMARY },
  kicked_back: { label: "Kicked back", intent: Intent.WARNING },
  filed: { label: "Filed", intent: Intent.PRIMARY },
  paid_claimant: { label: "Paid", intent: Intent.SUCCESS },
  invoiced: { label: "Invoiced", intent: Intent.SUCCESS },
  declined: { label: "Declined", intent: Intent.DANGER },
  blocked_jurisdiction: { label: "Blocked — jurisdiction", intent: Intent.DANGER },
};
