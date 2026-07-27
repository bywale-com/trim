import type { CtTagTone } from "../../shared/primitives";
import type { CaseStatus } from "./types";

export const STATUS_META: Record<CaseStatus, { label: string; tone: CtTagTone }> = {
  detected: { label: "Detected", tone: "neutral" },
  notified: { label: "Notified", tone: "accent" },
  consented: { label: "Consented", tone: "accent" },
  authorized: { label: "Authorized", tone: "accent" },
  filing: { label: "Filing", tone: "accent" },
  kicked_back: { label: "Kicked back", tone: "warning" },
  filed: { label: "Filed", tone: "accent" },
  paid_claimant: { label: "Paid", tone: "success" },
  invoiced: { label: "Invoiced", tone: "success" },
  declined: { label: "Declined", tone: "danger" },
  blocked_jurisdiction: { label: "Blocked — jurisdiction", tone: "danger" },
};
