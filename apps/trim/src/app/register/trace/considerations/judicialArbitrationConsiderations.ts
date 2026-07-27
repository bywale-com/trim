/**
 * Judicial-Appeal / Arbitration Attorney — considerations (Trim, v2).
 * Domain: binding arbitration (TX); tax court; escalation worth-it; attorney-only boundaries.
 */
import type { SmeItem } from "../smeTypes";

const refs = (...urls: string[]) => urls.map((url) => ({ title: url, url }));

const withImplementation = (items: SmeItem[]): SmeItem[] =>
  items.map((item) => ({
    ...item,
    implementationProblem: item.consideration,
    implementation: `On linked CT surfaces, add ${item.solution}`,
    implementationPlant: "not_done" as const,
  }));

export const JUDICIAL_ARBITRATION_ITEMS: SmeItem[] = withImplementation([
  {
    id: "jud-01",
    consideration:
      "Under Texas Tax Code Chapter 42, which ARB orders can a property owner appeal to district court, and which order types are outside Trim's judicial-escalation lane?",
    solution:
      "ARB-order appealability classifier for Chapter 41 protest orders, Section 25.25 motion orders, forfeiture or jurisdiction-denial orders, refund-eligibility orders, and comptroller railroad-rolling-stock orders so that Trim sends only owner-appealable final orders into the judicial lane and excludes taxing-unit challenges, procedural gripes without an appealable order, ordinary settlement follow-up, and remedies outside Trim's commercial/multifamily value-reduction path.",
    references: refs("https://statutes.capitol.texas.gov/Docs/TX/htm/TX.42.htm"),
    implementsSurfaceIds: ["trim-ct-owner-denial-reason", "trim-ct-op-exceptions"],
    status: "deferred",
  },
  {
    id: "jud-02",
    consideration:
      "Under Texas Tax Code Chapter 42 and Texas Comptroller protest guidance, what exact deadline, filing, service, venue, and party-naming steps must occur after the ARB order for a district-court appeal?",
    solution:
      "District-court filing checklist keyed to ARB-order receipt date, 60-day petition deadline, petition-for-review filing, appraisal-district defendant naming, no ARB-as-defendant naming, chief-appraiser or appraisal-office service, citation handling, and property or ARB-county venue so that a denied owner case does not lose court review through a missed deadline, wrong party, bad service, or wrong courthouse.",
    references: refs("https://statutes.capitol.texas.gov/Docs/TX/htm/TX.42.htm", "https://comptroller.texas.gov/taxes/property-tax/protests/"),
    implementsSurfaceIds: ["trim-ct-owner-denial-reason", "trim-ct-op-exceptions", "trim-ct-op-appeal-window"],
    status: "deferred",
  },
  {
    id: "jud-03",
    consideration:
      "Under Texas Tax Code Section 42.08, what tax-payment amount and timing must a commercial owner satisfy to preserve a pending district-court appeal?",
    solution:
      "Tax-payment preservation gate for the lesser of undisputed taxes, taxes due under the ARB order, or prior-year taxes before the delinquency date, with undisputed-value statement and inability-to-pay oath paths so that a commercial owner keeps the district-court appeal alive while disputed taxes are litigated.",
    references: refs("https://statutes.capitol.texas.gov/Docs/TX/htm/TX.42.htm"),
    implementsSurfaceIds: ["trim-ct-owner-denial-reason", "trim-ct-owner-invoice", "trim-ct-op-exceptions"],
    status: "deferred",
  },
  {
    id: "jud-04",
    consideration:
      "Under Texas Tax Code Sections 42.21 and 42.22, what petition contents, venue rules, and filing defects create dismissal risk for entity-owned commercial or multifamily parcels?",
    solution:
      "Petition-quality validator for plaintiff capacity, entity ownership, sufficient property identification, appealed ARB order, Chapter 42 grounds, similar-property or same-economic-unit grouping, proper venue, and amendable naming defects so that entity-owned commercial and multifamily parcels avoid dismissal risk from pleadings Trim could have prepared correctly.",
    references: refs("https://statutes.capitol.texas.gov/Docs/TX/htm/TX.42.htm"),
    implementsSurfaceIds: ["trim-ct-owner-entity-identity", "trim-ct-owner-denial-reason", "trim-ct-op-exceptions"],
    status: "deferred",
  },
  {
    id: "jud-05",
    consideration:
      "Under Texas Tax Code Section 42.23, what does trial de novo change about evidence, pleadings, burden, and the operational value of the prior ARB record?",
    solution:
      "Trial-de-novo handoff brief that treats the ARB outcome as jurisdictional history and operational intelligence rather than the court evidence package so that counsel can plead, discover, designate experts, request jury trial, and prove value or equality from admissible civil-case evidence.",
    references: refs("https://statutes.capitol.texas.gov/Docs/TX/htm/TX.42.htm"),
    implementsSurfaceIds: ["trim-ct-owner-denial-reason", "trim-ct-worker-packet", "trim-ct-op-audit"],
    status: "deferred",
  },
  {
    id: "jud-06",
    consideration:
      "Under Texas Tax Code Section 42.23, when can ARB-hearing evidence, testimony, argument, or the ARB order itself be used in district court?",
    solution:
      "ARB-record admissibility filter for jurisdiction proof, summary-judgment sufficiency, impeachment of designated witnesses, and plaintiff ARB value testimony so that prior hearing evidence, argument, testimony, and the order itself are used only in the narrow ways Chapter 42 permits.",
    references: refs("https://statutes.capitol.texas.gov/Docs/TX/htm/TX.42.htm"),
    implementsSurfaceIds: ["trim-ct-worker-packet", "trim-ct-worker-hearing", "trim-ct-op-audit"],
    status: "deferred",
  },
  {
    id: "jud-07",
    consideration:
      "Under Texas Tax Code Sections 42.25 and 42.26, how should Trim distinguish excessive-appraisal claims from unequal-appraisal claims before recommending judicial review?",
    solution:
      "Claim-theory selector separating excessive-appraisal relief from unequal-appraisal relief, including market-value proof, appraisal-ratio proof, median-level proof, and adjusted-comparable proof so that Trim recommends judicial review only when the strongest court theory and required evidence match the denied ARB record.",
    references: refs("https://statutes.capitol.texas.gov/Docs/TX/htm/TX.42.htm"),
    implementsSurfaceIds: ["trim-ct-owner-denial-reason", "trim-ct-worker-packet", "trim-ct-worker-evidence-preview"],
    status: "deferred",
  },
  {
    id: "jud-08",
    consideration:
      "Under Texas Tax Code Section 42.29, which district-court property-tax appeals can trigger attorney-fee shifting, and how should that possibility affect escalation economics?",
    solution:
      "Attorney-fee economics scorer for prevailing Section 42.25 excessive-appraisal, Section 42.26 unequal-appraisal, Section 25.25 motion, and listed exemption-denial appeals with statutory fee caps so that possible fee shifting improves but does not overstate the owner's net escalation economics.",
    references: refs("https://statutes.capitol.texas.gov/Docs/TX/htm/TX.42.htm"),
    implementsSurfaceIds: ["trim-ct-owner-denial-reason", "trim-ct-owner-invoice", "trim-ct-op-collections"],
    status: "deferred",
  },
  {
    id: "jud-09",
    consideration:
      "Under Texas Tax Code Section 42.225, when can a district-court appeal be routed into court-connected nonbinding or binding arbitration, and who must request or consent?",
    solution:
      "Court-connected arbitration router for owner-requested nonbinding arbitration and owner-plus-appraisal-district binding arbitration consent so that a filed Chapter 42 case can use ADR without confusing court arbitration with regular binding arbitration under Chapter 41A.",
    references: refs("https://statutes.capitol.texas.gov/Docs/TX/htm/TX.42.htm"),
    implementsSurfaceIds: ["trim-ct-owner-denial-reason", "trim-ct-owner-consent", "trim-ct-op-exceptions"],
    status: "deferred",
  },
  {
    id: "jud-10",
    consideration:
      "Under Texas Tax Code Chapter 42 and Texas Comptroller protest guidance, when should Trim route a denied case to district court rather than regular binding arbitration, SOAH, settlement-only follow-up, or no escalation?",
    solution:
      "Post-ARB forum decision tree comparing district court, regular binding arbitration, SOAH, settlement-only follow-up, and no escalation by order type, value ceiling, property type, tax-payment status, evidence strength, legal issue, and economics so that denied cases move to the narrow remedy that can actually hear them.",
    references: refs("https://statutes.capitol.texas.gov/Docs/TX/htm/TX.42.htm", "https://comptroller.texas.gov/taxes/property-tax/protests/"),
    implementsSurfaceIds: ["trim-ct-owner-denial-reason", "trim-ct-op-exceptions", "trim-ct-op-jurisdiction"],
    status: "deferred",
  },
  {
    id: "jud-11",
    consideration:
      "Under Texas Tax Code Sections 42.02 and 42.06, when can a chief appraiser appeal an ARB order against the property owner, and what owner-facing warning should Trim surface after a favorable ARB result?",
    solution:
      "Chief-appraiser appeal monitor for board approval, $1 million value thresholds, fraud or material-misrepresentation exceptions, 15-day notice filing, and 10-day owner copy delivery so that owners who won at the ARB still see a warning that the appraisal district may challenge the favorable order.",
    references: refs("https://statutes.capitol.texas.gov/Docs/TX/htm/TX.42.htm"),
    implementsSurfaceIds: ["trim-ct-owner-reduction", "trim-ct-owner-reduction-detail", "trim-ct-owner-status"],
    status: "deferred",
  },
  {
    id: "jud-12",
    consideration:
      "Under Texas Tax Code Chapter 41A and Texas Comptroller RBA guidance, which property types, ARB determination types, value ceilings, tax-payment conditions, and prior-lawsuit conditions control regular binding arbitration eligibility?",
    solution:
      "Regular-binding-arbitration eligibility gate for real or personal property, ARB appraised-value, market-value, or unequal-appraisal determinations, $5 million non-homestead ceiling, timely tax payment, no prior district-court lawsuit, and no written resolution agreement so that Trim offers Chapter 41A only to cases the Comptroller can accept.",
    references: refs("https://statutes.capitol.texas.gov/Docs/TX/htm/TX.41A.htm", "https://comptroller.texas.gov/taxes/property-tax/arbitration/"),
    implementsSurfaceIds: ["trim-ct-owner-denial-reason", "trim-ct-op-exceptions", "trim-ct-op-jurisdiction"],
    status: "deferred",
  },
  {
    id: "jud-13",
    consideration:
      "Under Texas Tax Code Chapter 41A, when does filing a district-court appeal, SOAH appeal, or arbitration request waive or block another post-ARB remedy?",
    solution:
      "Post-ARB remedy election lock for district-court petitions, SOAH notices, RBA requests, and written settlement agreements so that Trim does not double-file mutually exclusive remedies or trigger an arbitration dismissal by filing litigation first on the same matter.",
    references: refs("https://statutes.capitol.texas.gov/Docs/TX/htm/TX.41A.htm"),
    implementsSurfaceIds: ["trim-ct-owner-denial-reason", "trim-ct-op-exceptions", "trim-ct-op-audit"],
    status: "deferred",
  },
  {
    id: "jud-14",
    consideration:
      "Under Texas Tax Code Section 41A.03 and Texas Comptroller RBA guidance, what RBA request deadline, deposit tier, payment method, ARB-order attachment, and contiguous-tract rule must Trim model?",
    solution:
      "RBA filing and deposit calculator for the 60-day receipt deadline, required ARB-order attachment, agent online filing and ACH or card payment, non-homestead deposit tiers of $500, $800, $1,050, and $1,550, and contiguous-tract single-deposit treatment so that arbitration requests are timely, funded, and priced from the ARB order value.",
    references: refs("https://statutes.capitol.texas.gov/Docs/TX/htm/TX.41A.htm", "https://comptroller.texas.gov/taxes/property-tax/arbitration/"),
    implementsSurfaceIds: ["trim-ct-owner-denial-reason", "trim-ct-owner-invoice", "trim-ct-op-appeal-window"],
    status: "deferred",
  },
  {
    id: "jud-15",
    consideration:
      "Under Texas Comptroller AP-219 / RBA filing guidance and Texas Tax Code Chapter 41A, when must Trim use arbitration-specific owner authorization rather than ordinary Form 50-162 authority?",
    solution:
      "Arbitration-specific authorization gate for the Comptroller binding-arbitration appointment, individual agent eligibility, owner or authorized-representative signature, and no-company-agent rule so that Trim does not reuse ordinary Form 50-162 authority for a remedy that requires a separate arbitration appointment.",
    references: refs("https://comptroller.texas.gov/taxes/property-tax/arbitration/", "https://statutes.capitol.texas.gov/Docs/TX/htm/TX.41A.htm"),
    implementsSurfaceIds: ["trim-ct-owner-agent-appointment", "trim-ct-owner-authorize", "trim-ct-op-licensed-roster"],
    status: "deferred",
  },
  {
    id: "jud-16",
    consideration:
      "Under Texas Comptroller RBA and arbitrator registry guidance, what settlement-period, arbitrator-assignment, withdrawal, and communication deadlines belong in the post-ARB state machine?",
    solution:
      "RBA post-filing state machine for Comptroller processing, 45-day settlement period, written or online withdrawal, deposit refund less administrative fee, arbitrator assignment after the settlement window, hearing scheduling, and no ex parte communications so that Operators can track settlement, withdrawal, assignment, and hearing obligations without losing refund or communication rights.",
    references: refs("https://comptroller.texas.gov/taxes/property-tax/arbitration/", "https://comptroller.texas.gov/taxes/property-tax/arbitration/arb-registry.php"),
    implementsSurfaceIds: ["trim-ct-owner-status", "trim-ct-owner-hearing-status", "trim-ct-op-exceptions"],
    status: "deferred",
  },
  {
    id: "jud-17",
    consideration:
      "Under Texas Tax Code Chapter 41A and Texas Comptroller arbitrator resources, what evidence packet, witness, inspection, hearing-format, and valuation-opinion requirements do arbitrators expect?",
    solution:
      "Arbitration hearing packet builder for ARB order, owner value opinion, appraisal-district value, market comps, equal-and-uniform tables, income documents, rent rolls, condition proof, inspection facts, witnesses, and hearing format so that the arbitrator can determine value from evidence rather than from unsupported disagreement with the ARB.",
    references: refs("https://statutes.capitol.texas.gov/Docs/TX/htm/TX.41A.htm", "https://comptroller.texas.gov/taxes/property-tax/arbitration/"),
    implementsSurfaceIds: ["trim-ct-worker-packet", "trim-ct-worker-evidence-preview", "trim-ct-owner-upload"],
    status: "deferred",
  },
  {
    id: "jud-18",
    consideration:
      "Under Texas Tax Code Chapter 41A, when is an RBA award final, when can it be corrected or vacated, and what owner-facing expectation should Trim set before collecting an arbitration deposit?",
    solution:
      "RBA finality and deposit-risk disclosure for binding award effect, appraisal-roll correction, refund only when the award is nearer to the owner's value, post-assignment arbitrator-fee exposure, and limited correction or vacatur paths so that owners understand arbitration is not a low-cost rehearsal for another appeal.",
    references: refs("https://statutes.capitol.texas.gov/Docs/TX/htm/TX.41A.htm"),
    implementsSurfaceIds: ["trim-ct-owner-denial-reason", "trim-ct-owner-invoice", "trim-ct-owner-consent"],
    status: "deferred",
  },
  {
    id: "jud-19",
    consideration:
      "Under Texas Comptroller protest guidance and Texas Tax Code Chapter 2003 SOAH provisions, when is SOAH a viable post-ARB path for high-value commercial property, and how does it differ from district court and RBA?",
    solution:
      "SOAH eligibility router for non-industrial real or personal property over $1 million involving appraised value, market value, or unequal appraisal, with 30-day notice and $1,500 deposit within 90 days so that high-value cases use SOAH only when it is faster or cheaper than court and legally available.",
    references: refs("https://comptroller.texas.gov/taxes/property-tax/protests/", "https://statutes.capitol.texas.gov/Docs/GV/htm/GV.2003.htm"),
    implementsSurfaceIds: ["trim-ct-owner-denial-reason", "trim-ct-op-jurisdiction", "trim-ct-op-appeal-window"],
    status: "deferred",
  },
  {
    id: "jud-20",
    consideration:
      "For Texas commercial and multifamily cases, what dollar reduction, tax-rate impact, expert-cost, attorney-fee, filing-fee, and timing thresholds should make judicial escalation economically rational for Trim and the owner?",
    solution:
      "Judicial break-even model using expected value reduction, tax-rate impact, contingency split, court costs, attorney fees, appraisal-expert cost, discovery burden, fee-shifting probability, refund timing, and collection risk so that Trim escalates commercial and multifamily cases only when verified net savings justify litigation.",
    references: refs("https://statutes.capitol.texas.gov/Docs/TX/htm/TX.42.htm", "https://comptroller.texas.gov/taxes/property-tax/protests/"),
    implementsSurfaceIds: ["trim-ct-owner-denial-reason", "trim-ct-owner-invoice", "trim-ct-op-collections"],
    status: "deferred",
  },
  {
    id: "jud-21",
    consideration:
      "In Texas district-court property-tax appeals, must an LLC, corporation, partnership, trust, or other entity owner appear only through a licensed attorney, and what work may a PTC or non-attorney consultant still perform before and after the handoff?",
    solution:
      "Attorney-only litigation handoff for LLC, corporation, partnership, trust, and other entity-owned parcels, paired with a consultant-support task list for valuation work, document collection, witness prep support, settlement inputs, and owner communications under counsel so that non-attorney PTC work helps the case without becoming court representation.",
    references: refs("https://statutes.capitol.texas.gov/Docs/TX/htm/TX.42.htm", "https://www.txcourts.gov/rules-forms/rules-standards/"),
    implementsSurfaceIds: ["trim-ct-owner-denial-reason", "trim-ct-op-licensed-roster", "trim-ct-op-jurisdiction"],
    status: "deferred",
  },
  {
    id: "jud-22",
    consideration:
      "Under Texas Tax Code Section 42.23 and the Texas Rules of Civil Procedure, how should Trim preserve discovery-ready documents, expert materials, income statements, rent rolls, and ARB packet history for litigation?",
    solution:
      "Litigation hold and discovery workspace for notices, ARB orders, portal logs, protest filings, evidence packets, CAD exchanges, income statements, rent rolls, leases, photos, repair records, expert materials, and metadata so that counsel can answer civil discovery and expert requests without rebuilding the case from scattered operations files.",
    references: refs("https://statutes.capitol.texas.gov/Docs/TX/htm/TX.42.htm", "https://www.txcourts.gov/rules-forms/rules-standards/"),
    implementsSurfaceIds: ["trim-ct-owner-upload", "trim-ct-worker-packet", "trim-ct-op-audit"],
    status: "deferred",
  },
  {
    id: "jud-23",
    consideration:
      "Under Texas Tax Code Section 42.23, the Texas Rules of Evidence, and local court practice, when does Trim need an appraisal expert, fact witness, consultant witness, or owner representative for trial?",
    solution:
      "Litigation witness planner for appraisal experts, owner fact witnesses, business-record custodians, consultant fact witnesses, and authorized entity representatives so that trial proof covers valuation opinions, property condition, income data, ARB history, and corporate authority through admissible testimony.",
    references: refs("https://statutes.capitol.texas.gov/Docs/TX/htm/TX.42.htm", "https://www.txcourts.gov/rules-forms/rules-standards/"),
    implementsSurfaceIds: ["trim-ct-worker-packet", "trim-ct-worker-hearing", "trim-ct-owner-entity-identity"],
    status: "deferred",
  },
  {
    id: "jud-24",
    consideration:
      "Using Harris CAD iFile guidance, Dallas CAD protest guidance, and Travis CAD ARB guidance, what county notices, order-delivery methods, portal events, and post-ARB documents trigger Trim's escalation clock?",
    solution:
      "County escalation-clock trigger map for Harris, Dallas, Travis, and future CAD portals covering emailed orders, certified-mail orders, iFile or uFile status changes, settlement-offer rejection, formal ARB outcome, order upload, and post-ARB document delivery so that Trim starts court, RBA, or SOAH timers from the event that legally gives notice.",
    references: refs("https://hcad.org/ifile-protest", "https://www.dallascad.org/forms/protest_process.pdf", "https://traviscad.org/arb/"),
    implementsSurfaceIds: ["trim-ct-op-appeal-window", "trim-ct-op-inbound-board", "trim-ct-owner-status"],
    status: "deferred",
  },
  {
    id: "jud-25",
    consideration:
      "Under Illinois PTAB Rule 1910.70 and the Illinois PTAB FAQ, which property-tax appeal steps are attorney-only for corporations, LLCs, partnerships, and similar entities?",
    solution:
      "Illinois PTAB attorney-representation gate for corporations, LLCs, partnerships, taxing districts, and similar entities at all stages, with non-lawyer consultants limited to testimony and case-preparation help so that Trim does not let commercial owners enter Illinois administrative appeals through unauthorized representatives.",
    references: refs("https://www.law.cornell.edu/regulations/illinois/Ill-Admin-Code-tit-86-SS-1910.70", "https://www.ptab.illinois.gov/faq.html"),
    implementsSurfaceIds: ["trim-ct-op-jurisdiction", "trim-ct-op-rollout-gate", "trim-ct-op-licensed-roster"],
    status: "deferred",
  },
  {
    id: "jud-26",
    consideration:
      "Under the Missouri State Tax Commission appeal page and Missouri STC Chapter 7 rules, when must entity-owned or trust-owned property use an attorney, and how should Trim identify attorney-only states before serving commercial owners?",
    solution:
      "Missouri STC ownership-type gate for legal entities, trusts, associations, estates, and natural persons, with required attorney signature and appearance for non-natural owners so that Trim identifies attorney-only states before serving commercial owners into an appeal workflow.",
    references: refs("https://stc.mo.gov/file-an-appeal/", "https://stc.mo.gov/wp-content/uploads/sites/5/2024/01/2023-Chapter-7-Rules.pdf"),
    implementsSurfaceIds: ["trim-ct-op-jurisdiction", "trim-ct-op-rollout-gate", "trim-ct-op-entity-signer"],
    status: "deferred",
  },
  {
    id: "jud-27",
    consideration:
      "Under Florida Statute Section 194.034, what VAB representative categories, power-of-attorney limits, and compensated-agent rules should Trim compare against Texas post-ARB escalation rules?",
    solution:
      "Florida VAB representative selector for taxpayer or affiliate employees, Florida Bar attorneys, licensed appraisers, licensed brokers, licensed CPAs, compensated power-of-attorney agents, and uncompensated written-authority agents so that Trim compares broader Florida administrative representation options against Texas post-ARB court and arbitration limits.",
    references: refs("https://flsenate.gov/laws/statutes/2025/194.034"),
    implementsSurfaceIds: ["trim-ct-op-jurisdiction", "trim-ct-op-licensed-roster", "trim-ct-owner-agent-appointment"],
    status: "deferred",
  },
  {
    id: "jud-28",
    consideration:
      "Under New Jersey Tax Court guidance, California BOE Rule 305, and other tax-court analogs, which states require attorney-only representation for business entities at administrative, tax-court, or judicial property-tax appeal levels?",
    solution:
      "State analog representation matrix separating attorney-only entity forums such as New Jersey Tax Court, Illinois PTAB, and Missouri STC from administrative-agent forums such as California assessment appeals with signed business-entity authorization so that Trim blocks judicial or tax-court launches until each state's entity-representation rule is verified.",
    references: refs("https://www.njcourts.gov/courts/tax", "https://www.boe.ca.gov/proptaxes/pdf/rules/Rule305.pdf"),
    implementsSurfaceIds: ["trim-ct-op-jurisdiction", "trim-ct-op-rollout-gate", "trim-ct-op-entity-signer"],
    status: "deferred",
  },
]);
