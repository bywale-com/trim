/**
 * Patch smeRegistry.ts for v2 recovery-claims + shared types.
 */
import fs from "node:fs";

const p = "src/app/register/trace/smeRegistry.ts";
let s = fs.readFileSync(p, "utf8").replace(/\r\n/g, "\n");

const header = `/**
 * SME machine twin — consideration → solution → refs → CT surfaces.
 * Recovery/Claims is on the v2 format (\`recoveryClaimsConsiderations.ts\`).
 * Other seats still use legacy pass1/pass2 fields (normalized in UI via smeTypes helpers).
 */
import { RECOVERY_CLAIMS_ITEMS } from "./recoveryClaimsConsiderations";
import type { SmeItem, SmePersona, SmeStatus } from "./smeTypes";

export type { SmeItem, SmePersona, SmeStatus } from "./smeTypes";
export { smeConsideration, smeReferences, smeSolution } from "./smeTypes";

`;

const arrayMarker = "export const SME_PERSONAS: SmePersona[] = [";
const arrayIdx = s.indexOf(arrayMarker);
if (arrayIdx < 0) {
  console.error("array marker missing");
  process.exit(1);
}
s = header + s.slice(arrayIdx);

const recStart = s.indexOf('id: "recovery-claims-specialist"');
const next = s.indexOf('id: "holder-compliance-specialist"');
if (recStart < 0 || next < 0) {
  console.error("persona markers missing", recStart, next);
  process.exit(1);
}

// back up to opening brace of recovery persona
const recBrace = s.lastIndexOf("{", recStart);
const nextBrace = s.lastIndexOf("{", next);

const recovery = `{
    id: "recovery-claims-specialist",
    label: "Recovery/Claims Specialist",
    domain: "Filing mechanics, packets, kickbacks, SLAs, property types, search coverage",
    whyExists:
      "The actual profession Trove is entering — search, match, file, resubmit. Without this seat, claim states get modeled as a clean approve/deny binary instead of the messier real workflow.",
    items: RECOVERY_CLAIMS_ITEMS,
  },
  `;

s = s.slice(0, recBrace) + recovery + s.slice(nextBrace);

const domains = {
  "holder-compliance-specialist": "Holder reporting obligations / claimant-side conflict",
  "escheatment-derivative-rights-legal-specialist": "Standing, derivative rights, restructuring",
  "contingency-fee-regulatory-specialist": "Fee caps and contingency legality",
  "state-administrator-perspective-specialist": "State office expectations and timelines",
  "business-entity-resolution-specialist": "Match accuracy / entity continuity",
  "trust-anti-scam-perception-specialist": "Notice legitimacy and anti-scam proof",
  "tax-accounting-treatment-specialist": "Tax/books treatment of recovery and fees",
  "finder-registration-licensure-specialist": "Finder license/certificate preconditions",
  "payments-remittance-specialist": "Money flow, remittance, money-transmitter risk",
};

for (const [id, dom] of Object.entries(domains)) {
  const re = new RegExp(`(id: "${id}",\\n\\s*label: "[^"]+",)`);
  if (!re.test(s)) {
    console.warn("missing", id);
    continue;
  }
  s = s.replace(re, `$1\n    domain: "${dom}",`);
}

fs.writeFileSync(p, s);
console.log("patched ok, personas:", (s.match(/id: "[a-z-]+-specialist"/g) || []).length);
