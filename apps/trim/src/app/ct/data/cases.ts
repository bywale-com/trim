import type { RecoveryCase } from "./types";

/**
 * Business seat = one company account, many recovery cases.
 * Agency seat = book of many client companies (see AGENCY_BOOK_CASES).
 */

export const BUSINESS_ACCOUNT = {
  id: "cascade-metal-works",
  companyName: "Cascade Metal Works LLC",
} as const;

/** Cases belonging to the single Business account — variety across the admission spine. */
export const BUSINESS_CASES: RecoveryCase[] = [
  {
    id: "cmw-oh-notified",
    companyName: BUSINESS_ACCOUNT.companyName,
    jurisdiction: "OH",
    agency: "Ohio Department of Commerce, Division of Unclaimed Funds",
    caseRef: "OH-UP-88214",
    amount: 18420,
    status: "notified",
    consentTicks: { see: false, understand: false, withIt: false },
    docs: [
      { id: "articles", label: "Articles of incorporation", uploaded: false },
      { id: "w9", label: "W-9", uploaded: false },
    ],
    daysInState: 2,
    filingMethod: "digital",
  },
  {
    id: "cmw-tx-consented",
    companyName: BUSINESS_ACCOUNT.companyName,
    jurisdiction: "NY",
    agency: "New York State Office of the State Comptroller",
    caseRef: "NY-OSC-55031",
    amount: 6150,
    status: "consented",
    consentTicks: { see: true, understand: true, withIt: true },
    docs: [
      { id: "articles", label: "Articles of incorporation", uploaded: false },
      { id: "w9", label: "W-9", uploaded: false },
    ],
    daysInState: 1,
    filingMethod: "mail-original",
  },
  {
    id: "cmw-wa-authorized",
    companyName: BUSINESS_ACCOUNT.companyName,
    jurisdiction: "WA",
    agency: "Washington Dept. of Revenue, Unclaimed Property Program",
    caseRef: "WA-UCP-40217",
    amount: 11800,
    status: "authorized",
    contingencyPct: 5,
    consentTicks: { see: true, understand: true, withIt: true },
    docs: [
      { id: "articles", label: "Articles of incorporation", uploaded: false },
      { id: "w9", label: "W-9", uploaded: false },
    ],
    daysInState: 1,
    filingMethod: "digital",
  },
  {
    id: "cmw-ca-filing",
    companyName: BUSINESS_ACCOUNT.companyName,
    jurisdiction: "CA",
    agency: "California State Controller's Office",
    caseRef: "CA-SCO-90427",
    amount: 42900,
    status: "filing",
    contingencyPct: 15,
    consentTicks: { see: true, understand: true, withIt: true },
    docs: [
      { id: "articles", label: "Articles of incorporation", uploaded: true },
      { id: "w9", label: "W-9", uploaded: true },
    ],
    daysInState: 12,
    filingMethod: "digital",
  },
  {
    id: "cmw-il-kicked",
    companyName: BUSINESS_ACCOUNT.companyName,
    jurisdiction: "IL",
    agency: "Illinois State Treasurer",
    caseRef: "IL-UPD-33190",
    amount: 9730,
    status: "kicked_back",
    contingencyPct: 12,
    consentTicks: { see: true, understand: true, withIt: true },
    docs: [
      { id: "articles", label: "Articles of incorporation", uploaded: true },
      { id: "w9", label: "W-9", uploaded: false },
    ],
    kickbackReason: "missing_document",
    daysInState: 6,
    filingMethod: "digital",
  },
  {
    id: "cmw-fl-invoiced",
    companyName: BUSINESS_ACCOUNT.companyName,
    jurisdiction: "FL",
    agency: "Florida Department of Financial Services",
    caseRef: "FL-DFS-71205",
    amount: 27300,
    status: "invoiced",
    contingencyPct: 15,
    consentTicks: { see: true, understand: true, withIt: true },
    docs: [
      { id: "articles", label: "Articles of incorporation", uploaded: true },
      { id: "w9", label: "W-9", uploaded: true },
    ],
    daysInState: 34,
    paidDate: "2026-06-18",
    invoiceAmount: 4095,
    filingMethod: "digital",
  },
];

/**
 * Agency Owner book — many Business client instances (separate companies).
 * Kept as RECOVERY_CASES for existing agency hooks / audit seed keys.
 */
export const RECOVERY_CASES: RecoveryCase[] = [
  {
    id: "cascade-metal-works",
    companyName: "Cascade Metal Works LLC",
    jurisdiction: "OH",
    agency: "Ohio Department of Commerce, Division of Unclaimed Funds",
    caseRef: "OH-UP-88214",
    amount: 18420,
    status: "notified",
    consentTicks: { see: false, understand: false, withIt: false },
    docs: [
      { id: "articles", label: "Articles of incorporation", uploaded: false },
      { id: "w9", label: "W-9", uploaded: false },
    ],
    daysInState: 2,
    filingMethod: "digital",
  },
  {
    id: "bluepeak-logistics",
    companyName: "Bluepeak Logistics Inc.",
    jurisdiction: "TX",
    agency: "Texas Comptroller of Public Accounts",
    caseRef: "TX-UCP-55031",
    amount: 6150,
    status: "consented",
    consentTicks: { see: true, understand: true, withIt: true },
    docs: [
      { id: "articles", label: "Articles of incorporation", uploaded: false },
      { id: "w9", label: "W-9", uploaded: false },
    ],
    daysInState: 1,
    filingMethod: "digital",
  },
  {
    id: "northwind-structural",
    companyName: "Northwind Structural Co.",
    jurisdiction: "CA",
    agency: "California State Controller's Office",
    caseRef: "CA-SCO-90427",
    amount: 42900,
    status: "filing",
    contingencyPct: 15,
    consentTicks: { see: true, understand: true, withIt: true },
    docs: [
      { id: "articles", label: "Articles of incorporation", uploaded: true },
      { id: "w9", label: "W-9", uploaded: true },
    ],
    daysInState: 12,
    filingMethod: "digital",
  },
  {
    id: "harborline-freight",
    companyName: "Harborline Freight Partners",
    jurisdiction: "IL",
    agency: "Illinois State Treasurer",
    caseRef: "IL-UPD-33190",
    amount: 9730,
    status: "kicked_back",
    contingencyPct: 12,
    consentTicks: { see: true, understand: true, withIt: true },
    docs: [
      { id: "articles", label: "Articles of incorporation", uploaded: true },
      { id: "w9", label: "W-9", uploaded: false },
    ],
    kickbackReason: "missing_document",
    daysInState: 6,
    filingMethod: "digital",
  },
  {
    id: "vantage-retail",
    companyName: "Vantage Retail Group",
    jurisdiction: "FL",
    agency: "Florida Department of Financial Services",
    caseRef: "FL-DFS-71205",
    amount: 27300,
    status: "invoiced",
    contingencyPct: 15,
    consentTicks: { see: true, understand: true, withIt: true },
    docs: [
      { id: "articles", label: "Articles of incorporation", uploaded: true },
      { id: "w9", label: "W-9", uploaded: true },
    ],
    daysInState: 34,
    paidDate: "2026-06-18",
    invoiceAmount: 4095,
    filingMethod: "digital",
  },
  {
    id: "redwood-data-systems",
    companyName: "Redwood Data Systems LLC",
    jurisdiction: "WA",
    agency: "Washington Dept. of Revenue, Unclaimed Property Program",
    caseRef: "WA-UCP-40217",
    amount: 11800,
    status: "authorized",
    contingencyPct: 5,
    consentTicks: { see: true, understand: true, withIt: true },
    docs: [
      { id: "articles", label: "Articles of incorporation", uploaded: false },
      { id: "w9", label: "W-9", uploaded: false },
    ],
    daysInState: 1,
    filingMethod: "digital",
  },
];

export function getRecoveryCase(id: string): RecoveryCase | undefined {
  return BUSINESS_CASES.find((c) => c.id === id) ?? RECOVERY_CASES.find((c) => c.id === id);
}
