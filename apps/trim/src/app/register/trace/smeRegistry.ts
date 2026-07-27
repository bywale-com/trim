/**
 * Trim SME machine twin — 11 seats matching docs/sme/ROSTER.md plus filled SME additions.
 * consideration → <mechanism> so that <purpose> → refs → CT.
 * Consideration arrays are filled per SME seat as source passes land.
 */
import { LICENSED_PTC_PRACTITIONER_ITEMS } from "./considerations/licensedPtcPractitionerConsiderations";
import { VALUATION_MASS_APPRAISAL_ITEMS } from "./considerations/valuationMassAppraisalConsiderations";
import { REPRESENTATION_LICENSURE_ITEMS } from "./considerations/representationLicensureConsiderations";
import { SOLICITATION_ADVERTISING_ITEMS } from "./considerations/solicitationAdvertisingConsiderations";
import { APPRAISAL_DISTRICT_BOARD_ITEMS } from "./considerations/appraisalDistrictBoardConsiderations";
import { JUDICIAL_ARBITRATION_ITEMS } from "./considerations/judicialArbitrationConsiderations";
import { COUNTY_DATA_ITEMS } from "./considerations/countyDataConsiderations";
import { MORTGAGE_ESCROW_ITEMS } from "./considerations/mortgageEscrowConsiderations";
import { TAX_ACCOUNTING_ITEMS } from "./considerations/taxAccountingConsiderations";
import { TRUST_ANTI_SCAM_ITEMS } from "./considerations/trustAntiScamConsiderations";
import { COLLECTIONS_AR_ITEMS } from "./considerations/collectionsArConsiderations";
import type { SmeItem, SmePersona } from "./smeTypes";

export type { SmeItem, SmePersona, SmeStatus } from "./smeTypes";
export { smeConsideration, smeReferences, smeSolution } from "./smeTypes";

export const SME_PERSONAS: SmePersona[] = [
  {
    id: "licensed-ptc-practitioner",
    label: "Licensed PTC Practitioner",
    domain: "What wins at informal vs ARB; evidence norms; county temperament",
    whyExists:
      "Without practice truth, detection → hearing packet is fiction. This seat provides the ground-truth on what actually resolves protests and what evidence formats the appraisal district and ARB accept.",
    items: LICENSED_PTC_PRACTITIONER_ITEMS,
  },
  {
    id: "valuation-mass-appraisal",
    label: "Valuation / Mass-Appraisal Specialist",
    domain: "Sales/income/cost approaches; ratios; uniformity; when '$X over' is defensible",
    whyExists:
      "Without this seat, the ALG notice numbers are indefensible. The valuation specialist determines the statistical threshold that makes a comps package credible before first touch.",
    items: VALUATION_MASS_APPRAISAL_ITEMS,
  },
  {
    id: "representation-licensure",
    label: "Representation-Rules & Licensure Specialist",
    domain: "Who may represent by level; TX PTC + sponsorship caps; entity-signature; rollout gates",
    whyExists:
      "Illegal filings or blocked rollout. Without this seat, Trim might file representations it is not licensed to make, or serve markets it cannot yet legally enter.",
    items: REPRESENTATION_LICENSURE_ITEMS,
  },
  {
    id: "solicitation-advertising-compliance",
    label: "Solicitation & Advertising Compliance Specialist",
    domain: "TDLR ethics ('no specific result'); consumer-protection; channel rules",
    whyExists:
      "The ALG notice itself may be illegal as phrased. TX TDLR ethics rules constrain how any number or estimate may be stated in solicitation — the notice copy shape depends on this seat.",
    items: SOLICITATION_ADVERTISING_ITEMS,
  },
  {
    id: "appraisal-district-board",
    label: "Appraisal District / Board Perspective Specialist",
    domain: "Evidence formats boards accept; scheduling; remote/written share; what persuades lay boards",
    whyExists:
      "Worker layer sized wrong; packets rejected. Without this seat, the hearing preparation and Worker sizing are guesses.",
    items: APPRAISAL_DISTRICT_BOARD_ITEMS,
  },
  {
    id: "judicial-arbitration-attorney",
    label: "Judicial-Appeal / Arbitration Attorney",
    domain: "Binding arbitration (TX); tax court; escalation worth-it; attorney-only boundaries",
    whyExists:
      "Wrong escalation path / attorney-only state collisions. The denial path's escalation options (judicial / arbitration) depend on this seat for legality and worth-it thresholds.",
    items: JUDICIAL_ARBITRATION_ITEMS,
  },
  {
    id: "county-data",
    label: "County-Data Specialist",
    domain: "Roll formats; CAMA; comps; e-file; FOIA fallbacks; per-county cost",
    whyExists:
      "Moat-or-grave on automation margin. Per-county data plumbing is the real competitive moat — without this seat, the cost and feasibility of detection are unknown.",
    items: COUNTY_DATA_ITEMS,
  },
  {
    id: "mortgage-escrow",
    label: "Mortgage-Servicing / Escrow Specialist",
    domain: "Escrow adjustment timing; multifamily lender-held escrows",
    whyExists:
      "Fee timing / felt-win wrong when escrowed multifamily enters. Without this seat, the invoice timing and owner felt-win are modeled incorrectly for escrowed properties.",
    items: MORTGAGE_ESCROW_ITEMS,
  },
  {
    id: "tax-accounting-treatment",
    label: "Tax / Accounting Treatment Specialist",
    domain: "Expense reduction vs income; 1099 on Trim fee; multi-year savings booking",
    whyExists:
      "Consent/disclosure gaps; Trim's own tax ops. When the contingency fee lands: deductible expense treatment, 1099 implications, and multi-year savings booking — questions the CFO will ask at authorize.",
    items: TAX_ACCOUNTING_ITEMS,
  },
  {
    id: "trust-anti-scam-perception",
    label: "Trust / Anti-Scam Perception Specialist",
    domain: "Owlue-class scam perception; four-element trust kit; non-affiliation",
    whyExists:
      "Activation dies on 'is this a scam?'. Property tax solicitation letters are heavily impersonated (Owlue already generates coverage); this seat gives Notice — trust strip real content instead of empty structure.",
    items: TRUST_ANTI_SCAM_ITEMS,
  },
  {
    id: "collections-ar",
    label: "Collections / AR Specialist",
    domain:
      "Contingency fee collection after reduction; invoicing, dunning, payment rails, disputes, write-offs, and entity payor risk",
    whyExists:
      "Without sourced practice, invoicing/dunning invents from analogy. This seat ties post-reduction billing, payment authorization, disputes, dunning, and write-off evidence to published property-tax collection practice.",
    items: COLLECTIONS_AR_ITEMS,
  },
];

export function getSmePersona(id: string): SmePersona | undefined {
  return SME_PERSONAS.find((p) => p.id === id);
}

export function allSmeItems(): SmeItem[] {
  return SME_PERSONAS.flatMap((p) => p.items);
}
