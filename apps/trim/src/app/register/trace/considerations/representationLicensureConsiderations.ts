/**
 * Representation-Rules & Licensure Specialist - considerations (Trim, v2).
 * Domain: who may represent by level; TX PTC + sponsorship caps; entity-signature; rollout gates.
 */
import type { SmeItem } from "../smeTypes";

const withImplementation = (items: SmeItem[]): SmeItem[] =>
  items.map((item) => ({
    ...item,
    implementationProblem: item.consideration,
    implementation: `On linked CT surfaces, you can now ${item.solution}`,
    implementationPlant: "not_done" as const,
  }));

export const REPRESENTATION_LICENSURE_ITEMS: SmeItem[] = withImplementation([
  {
    id: "lic-01",
    consideration:
      "Which exact Trim actions count as property tax consulting services in Texas: over-assessment analysis, preparing protest evidence, filing protests, negotiating with CAD staff, ARB appearance, or acting under Form 50-162?",
    thesisGap:
      "Trim needs the first Texas licensure gate before detection, outreach, filing, negotiation, and hearing work can be assigned.",
    solution:
      "Licensed-service classifier on every case task so that detection, outreach, filing, negotiation, and hearing work cannot be assigned to an unregistered or non-exempt actor.",
    references: [
      { title: "Texas Occupations Code Chapter 1152", url: "https://statutes.capitol.texas.gov/Docs/OC/htm/OC.1152.htm" },
    ],
    implementsSurfaceIds: ["trim-ct-op-jurisdiction", "trim-ct-op-rollout-gate", "trim-ct-op-worker-dispatch"],
    status: "wiring",
  },
  {
    id: "lic-02",
    consideration:
      "Which Texas exemptions from PTC registration could apply to attorneys, property-owner employees, affiliated-company employees, CPAs, real estate brokers/salespersons, appraisers, or general power-of-attorney holders?",
    thesisGap:
      "Non-PTC capacity may be usable only in narrow statutory scopes that differ by actor, parcel, task, and holding-out language.",
    solution:
      "Exemption-type registry with scope limits so that non-PTC capacity is used only where the statutory exemption actually covers the parcel, task, and holding-out language.",
    references: [
      { title: "Texas Occupations Code Chapter 1152", url: "https://statutes.capitol.texas.gov/Docs/OC/htm/OC.1152.htm" },
    ],
    implementsSurfaceIds: ["trim-ct-op-jurisdiction", "trim-ct-op-licensed-roster", "trim-ct-op-rollout-gate"],
    status: "partial",
  },
  {
    id: "lic-03",
    consideration:
      "Is Texas PTC registration only an individual credential, or can a firm/entity be the registered consultant-of-record for filings, notices, and owner-facing authorization?",
    thesisGap:
      "The Operator registry must know whether to track named humans, firms, or both for each county and case.",
    solution:
      "Dual agent-of-record fields for authorized firm/display name and licensed human performer so that county records can match the appointment while Trim proves licensure capacity.",
    references: [
      { title: "TDLR - Property Tax Consultants", url: "https://www.tdlr.texas.gov/PTC/" },
    ],
    implementsSurfaceIds: ["trim-ct-op-licensed-roster", "trim-ct-owner-agent-appointment", "trim-ct-op-standing-snapshot"],
    status: "partial",
  },
  {
    id: "lic-04",
    consideration:
      "What work may unregistered intake, data, customer-success, or document-prep staff perform in Texas before crossing into compensated property tax consulting services?",
    thesisGap:
      "Automation and operations staff could accidentally perform licensed work before registrant review or signoff.",
    solution:
      "Task-permission matrix with licensed review gates so that clerical automation stays useful without becoming unauthorized compensated consulting.",
    references: [
      { title: "Texas Occupations Code Chapter 1152", url: "https://statutes.capitol.texas.gov/Docs/OC/htm/OC.1152.htm" },
    ],
    implementsSurfaceIds: ["trim-ct-op-jurisdiction", "trim-ct-op-audit", "trim-ct-op-worker-dispatch"],
    status: "wiring",
  },
  {
    id: "lic-05",
    consideration:
      "What are the current Texas original PTC prerequisites, including age, education, exam, sponsorship, Texas place-of-business or service-of-process agent, application, and fees?",
    thesisGap:
      "Texas launch staffing needs concrete onboarding lead time and pre-launch evidence requirements.",
    solution:
      "PTC onboarding checklist with dated evidence uploads so that launch staffing lead time is visible before a county is opened.",
    references: [
      { title: "TDLR - Property Tax Consultant FAQ", url: "https://www.tdlr.texas.gov/ptc/ptcfaq.htm" },
    ],
    implementsSurfaceIds: ["trim-ct-op-jurisdiction", "trim-ct-op-licensed-roster", "trim-ct-op-ptc-capacity"],
    status: "partial",
  },
  {
    id: "lic-06",
    consideration:
      "What exact 40 classroom-hour mix does Texas require before original PTC registration, and can any Trim-internal training or vendor course satisfy those categories?",
    thesisGap:
      "Consultant supply cannot scale predictably unless approved training categories are tracked.",
    solution:
      "Approved-course catalog and training completion ledger so that consultant supply can scale without relying on unrecognized internal training.",
    references: [
      { title: "TDLR - PTC at a Glance", url: "https://www.tdlr.texas.gov/media/pdf/PTC%20at%20a%20Glance.pdf" },
    ],
    implementsSurfaceIds: ["trim-ct-op-licensed-roster", "trim-ct-op-ptc-capacity"],
    status: "partial",
  },
  {
    id: "lic-07",
    consideration:
      "What are the requirements to become a Texas Senior Property Tax Consultant, and what alternate path exists for Texas attorneys taking the senior exam?",
    thesisGap:
      "Senior PTC capacity is the bottleneck for sponsoring ordinary PTCs and expanding hearing capacity.",
    solution:
      "Senior-capacity pipeline by candidate path so that sponsorship bottlenecks are forecast before case volume is accepted.",
    references: [
      { title: "Texas Occupations Code Chapter 1152", url: "https://statutes.capitol.texas.gov/Docs/OC/htm/OC.1152.htm" },
    ],
    implementsSurfaceIds: ["trim-ct-op-ptc-capacity", "trim-ct-op-licensed-roster", "trim-ct-op-rollout-gate"],
    status: "partial",
  },
  {
    id: "lic-08",
    consideration:
      "How exactly does the Texas max-10 senior sponsorship/supervision cap work, including any exceptions for consultants with prior full-time tax-consulting, owner-employee, or appraisal experience?",
    thesisGap:
      "The senior-consultant rule must become a rollout capacity formula by county, season, and case volume.",
    solution:
      "Senior-to-consultant capacity formula with exception evidence so that rollout volume respects the 10-person cap and documented exceptions.",
    references: [
      { title: "Texas HB 2591 enrolled text", url: "https://capitol.texas.gov/tlodocs/81R/billtext/html/HB02591F.HTM" },
    ],
    implementsSurfaceIds: ["trim-ct-op-ptc-capacity", "trim-ct-op-rollout-gate", "trim-ct-op-licensed-roster"],
    status: "partial",
  },
  {
    id: "lic-09",
    consideration:
      "What does direct supervision by a Texas senior PTC or qualified attorney require in practice: case review, employee relationship, documented association, signature, attendance, or escalation availability?",
    thesisGap:
      "Trim needs compliance evidence for every consultant and case assignment without inventing county-specific rituals.",
    solution:
      "Supervision audit trail on each consultant and case so that direct supervision is provable without inventing county-specific rituals.",
    references: [
      { title: "16 Texas Administrative Code Section 66.70", url: "https://www.law.cornell.edu/regulations/texas/16-Tex-Admin-Code-SS-66-70" },
    ],
    implementsSurfaceIds: ["trim-ct-op-standing-snapshot", "trim-ct-op-audit", "trim-ct-op-licensed-roster"],
    status: "wiring",
  },
  {
    id: "lic-10",
    consideration:
      "If a Texas PTC changes employer, sponsor, senior association, or license status during an appeal season, what happens to their pending protests, Form 50-162 authority, and upcoming hearings?",
    thesisGap:
      "Mid-season capacity loss could leave county records and lawful service capacity out of sync.",
    solution:
      "Mid-season license-change workflow with automatic case reassignment so that authority of record and lawful service capacity do not drift apart.",
    references: [
      { title: "16 Texas Administrative Code Section 66.70", url: "https://www.law.cornell.edu/regulations/texas/16-Tex-Admin-Code-SS-66-70" },
    ],
    implementsSurfaceIds: ["trim-ct-op-licensed-roster", "trim-ct-op-worker-dispatch", "trim-ct-op-exceptions"],
    status: "wiring",
  },
  {
    id: "lic-11",
    consideration:
      "What renewal, CE, lapse, and reinstatement rules must Trim monitor for Texas PTCs and senior PTCs, including the 24-hour CE mix and first-renewal exception?",
    thesisGap:
      "Registration cannot be treated as static when expirations, CE, and reinstatement windows affect active cases.",
    solution:
      "Renewal and CE monitor with first-renewal exception logic so that expired or under-educated registrants cannot carry active cases.",
    references: [
      { title: "TDLR - PTC Continuing Education", url: "https://www.tdlr.texas.gov/ptc/ptcce.htm" },
    ],
    implementsSurfaceIds: ["trim-ct-op-licensed-roster", "trim-ct-op-jurisdiction", "trim-ct-op-exceptions"],
    status: "wiring",
  },
  {
    id: "lic-12",
    consideration:
      "For Texas Form 50-162, who may sign for an LLC, corporation, partnership, trust, or property manager, and what proof of authority may the CAD request?",
    thesisGap:
      "Entity-signature validation is a hard authorization gate for the commercial and multifamily wedge.",
    solution:
      "Entity-signer validation step before Form 50-162 submission so that commercial and multifamily appointments survive CAD authority checks.",
    references: [
      { title: "Harris CAD - Form 50-162", url: "https://hcad.org/assets/uploads/pdf/forms/2025/50-162.pdf" },
    ],
    implementsSurfaceIds: ["trim-ct-owner-signer-title", "trim-ct-owner-entity-identity", "trim-ct-op-entity-signer"],
    status: "partial",
  },
  {
    id: "lic-13",
    consideration:
      "Can the Texas Form 50-162 agent be a firm/entity, a named individual, or both, and how should Trim map that answer to the licensed agent-of-record field?",
    thesisGap:
      "Owner authorization, county records, and legal performer identity can mismatch if a firm name alone is treated as licensure evidence.",
    solution:
      "Appointment-to-license mapper so that the county-facing agent record and Trim's legal performer record stay reconciled.",
    references: [
      { title: "Texas Tax Code Chapter 1", url: "https://statutes.capitol.texas.gov/Docs/TX/htm/TX.1.htm" },
    ],
    implementsSurfaceIds: ["trim-ct-owner-agent-appointment", "trim-ct-op-licensed-roster", "trim-ct-op-standing-snapshot"],
    status: "wiring",
  },
  {
    id: "lic-14",
    consideration:
      "How does Texas's one-agent-per-item rule affect properties already represented by another consultant, and what owner notices or revocations are required before Trim can act?",
    thesisGap:
      "Trim must avoid silent incumbent displacement or invalid duplicate authorization.",
    solution:
      "Incumbent-agent conflict check before authorization so that Trim does not silently displace another representative without owner intent and notice handling.",
    references: [
      { title: "Texas Tax Code Chapter 1", url: "https://statutes.capitol.texas.gov/Docs/TX/htm/TX.1.htm" },
    ],
    implementsSurfaceIds: ["trim-ct-op-revoke-representation", "trim-ct-owner-authorize", "trim-ct-owner-agent-appointment"],
    status: "wiring",
  },
  {
    id: "lic-15",
    consideration:
      "Which Texas appraisal districts must support electronic signing and filing of agent designations, and what county-by-county variance remains even in counties over 500,000 population?",
    thesisGap:
      "County rollout ordering depends on whether authorization can be captured fully online.",
    solution:
      "County e-sign/e-file capability registry so that authorization capture uses the correct online, paper, or hybrid path per CAD.",
    references: [
      { title: "Texas Tax Code Chapter 1", url: "https://statutes.capitol.texas.gov/Docs/TX/htm/TX.1.htm" },
    ],
    implementsSurfaceIds: ["trim-ct-op-jurisdiction", "trim-ct-op-rollout-gate", "trim-ct-owner-agent-appointment"],
    status: "partial",
  },
  {
    id: "lic-16",
    consideration:
      "What extra county-level agent onboarding, PIN, portal, evidence, or mass-protest rules exist in Harris, Dallas, Tarrant, Bexar, Travis, and other first-wave Texas CADs?",
    thesisGap:
      "County CAD rules can block automation even when statewide licensure and Form 50-162 are satisfied.",
    solution:
      "First-wave CAD operations checklist so that a county opens only after portal, PIN, evidence, and mass-filing requirements are verified.",
    references: [
      { title: "Tarrant Appraisal District - New Portal", url: "https://www.tad.org/new-portal" },
    ],
    implementsSurfaceIds: ["trim-ct-op-rollout-gate", "trim-ct-op-jurisdiction", "trim-ct-op-county-data"],
    status: "wiring",
  },
  {
    id: "lic-17",
    consideration:
      "At Texas ARB hearings, who may appear for the owner, when must Form 50-162 or alternate authority be filed, and what defects cause dismissal or failure-to-appear treatment?",
    thesisGap:
      "Formal hearing representation must not fail at check-in after Worker dispatch.",
    solution:
      "Hearing check-in packet validator so that Form 50-162 or alternate authority is ready before Worker handoff.",
    references: [
      { title: "Tarrant ARB - Hearing Procedures", url: "https://www.tad.org/content/tarb/2023%20TARRANT%20HEARING%20PROCEDURES%20FINAL.pdf" },
    ],
    implementsSurfaceIds: ["trim-ct-worker-appear-checklist", "trim-ct-worker-hearing", "trim-ct-owner-agent-appointment"],
    status: "wiring",
  },
  {
    id: "lic-18",
    consideration:
      "Are Texas informal CAD meetings, settlement discussions, and ARB formal hearings governed by the same representative-authorization rules, or do counties apply different checks by appeal level?",
    thesisGap:
      "The state machine needs one legal authorization base plus local stage-specific tasks.",
    solution:
      "Shared authorization gate with stage-specific county tasks so that informal settlement and formal hearing workflows use the same legal base but local procedures.",
    references: [
      { title: "Harris CAD - Notice of Protest Form", url: "https://hcad.org/assets/uploads/pdf/Protest_form_50-132_11_2021.pdf" },
    ],
    implementsSurfaceIds: ["trim-ct-owner-agent-appointment", "trim-ct-worker-hearing", "trim-ct-op-jurisdiction"],
    status: "wiring",
  },
  {
    id: "lic-19",
    consideration:
      "How do Texas CADs distinguish unpaid family/friend hearing authorization from paid professional representation requiring Form 50-162 and PTC compliance?",
    thesisGap:
      "Trim cannot rely on informal helper authority for compensated representation.",
    solution:
      "Paid-vs-unpaid representative classifier so that Trim never relies on informal helper authority for compensated representation.",
    references: [
      { title: "Harris CAD - Notice of Protest Form", url: "https://hcad.org/assets/uploads/pdf/Protest_form_50-132_11_2021.pdf" },
    ],
    implementsSurfaceIds: ["trim-ct-op-jurisdiction", "trim-ct-owner-agent-appointment", "trim-ct-op-audit"],
    status: "wiring",
  },
  {
    id: "lic-20",
    consideration:
      "In Texas regular binding arbitration, who may represent the owner, what licenses qualify, and when is Form 50-791 required instead of Form 50-162?",
    thesisGap:
      "Arbitration is a separate post-ARB path with its own representation instrument and individual-license gate.",
    solution:
      "Arbitration authorization gate with individual-license validation so that post-ARB cases do not reuse Form 50-162 incorrectly.",
    references: [
      { title: "Texas Tax Code Chapter 41A", url: "https://statutes.capitol.texas.gov/Docs/TX/htm/TX.41A.htm" },
    ],
    implementsSurfaceIds: ["trim-ct-owner-denial-reason", "trim-ct-op-jurisdiction", "trim-ct-owner-agent-appointment"],
    status: "deferred",
  },
  {
    id: "lic-21",
    consideration:
      "For Texas binding arbitration, who may sign the request, pay the deposit, receive refunds, use the online system, and certify owner authorization?",
    thesisGap:
      "Trim needs to know whether arbitration can be agent-led or must force owner-side payment and signature steps.",
    solution:
      "Arbitration payment-and-refund workflow so that Trim can operate agent-led arbitration without taking invalid owner signatures.",
    references: [
      { title: "Texas Comptroller - Property Tax Arbitration", url: "https://comptroller.texas.gov/taxes/property-tax/arbitration/" },
    ],
    implementsSurfaceIds: ["trim-ct-owner-denial-reason", "trim-ct-op-exceptions", "trim-ct-owner-agent-appointment"],
    status: "deferred",
  },
  {
    id: "lic-22",
    consideration:
      "For Texas Chapter 42 judicial review, what may a PTC do before the line becomes legal representation, and what client consent is required before engaging an attorney?",
    thesisGap:
      "The attorney handoff boundary after ARB denial or arbitration ineligibility needs client consent gating.",
    solution:
      "Attorney-handoff consent gate so that court escalation starts only after the owner authorizes counsel and third-party payment terms.",
    references: [
      { title: "Texas Occupations Code Chapter 1152", url: "https://statutes.capitol.texas.gov/Docs/OC/htm/OC.1152.htm" },
    ],
    implementsSurfaceIds: ["trim-ct-owner-denial-reason", "trim-ct-op-exceptions", "trim-ct-op-audit"],
    status: "deferred",
  },
  {
    id: "lic-23",
    consideration:
      "In Texas district-court property tax litigation, may a non-attorney consultant represent an individual owner, LLC, corporation, partnership, or trust, or must all court appearances and pleadings run through counsel?",
    thesisGap:
      "Entity-owned commercial parcels may need an attorney-only escalation lane even after administrative representation succeeds.",
    solution:
      "Attorney-only litigation lane so that entity-owned parcels do not enter court workflows through non-lawyer consultants.",
    references: [],
    implementsSurfaceIds: ["trim-ct-owner-denial-reason", "trim-ct-op-exceptions", "trim-ct-op-rollout-gate"],
    status: "deferred",
  },
  {
    id: "lic-24",
    consideration:
      "Which restrictions proposed in Texas SB 1870 did not survive into HB 2591, and which enacted HB 2591 restrictions now matter for Trim's sponsorship, solicitation, website, protest-authorization, and attorney-handoff gates?",
    thesisGap:
      "Regulatory sensitivities should inform compliance review, but failed proposals should not become product blockers.",
    solution:
      "Enacted-law-only compliance checklist so that Trim respects real restrictions without freezing launch on unenacted legislative proposals.",
    references: [
      { title: "Texas Legislature - SB 1870 history", url: "https://capitol.texas.gov/BillLookup/History.aspx?Bill=SB1870&LegSess=81R" },
    ],
    implementsSurfaceIds: ["trim-ct-op-jurisdiction", "trim-ct-op-rollout-gate", "trim-ct-owner-non-affiliation"],
    status: "deferred",
  },
  {
    id: "lic-25",
    consideration:
      "What Texas solicitation and website restrictions apply specifically to PTCs, including no assured specific outcome and no government-implying domain or site presentation?",
    thesisGap:
      "Representation/licensure gates must align with activation copy and served-instance trust presentation.",
    solution:
      "Solicitation and website copy guardrail so that ALG notices present analysis and non-affiliation without promising savings or implying government status.",
    references: [
      { title: "Texas HB 2591 enrolled text", url: "https://capitol.texas.gov/tlodocs/81R/billtext/html/HB02591F.HTM" },
    ],
    implementsSurfaceIds: ["trim-ct-owner-analysis-framing", "trim-ct-owner-non-affiliation", "trim-ct-owner-trust"],
    status: "partial",
  },
  {
    id: "lic-26",
    consideration:
      "In Florida VAB proceedings, who may represent a taxpayer, what compensated-agent or licensed-professional categories are allowed, and when is written authorization or power of attorney required?",
    thesisGap:
      "Florida may be administratively lighter than Texas, which affects rollout priority and document routing.",
    solution:
      "Florida VAB representative-type selector so that paid-agent, professional, employee, POA, and unpaid-authorized paths route to the right document.",
    references: [
      { title: "Florida Statutes Section 194.034", url: "https://flsenate.gov/laws/statutes/2025/194.034" },
    ],
    implementsSurfaceIds: ["trim-ct-op-rollout-gate", "trim-ct-op-jurisdiction", "trim-ct-owner-agent-appointment"],
    status: "deferred",
  },
  {
    id: "lic-27",
    consideration:
      "In Missouri State Tax Commission appeals, when must legal entities, trusts, estates, partnerships, or LLC-owned parcels be represented by an attorney?",
    thesisGap:
      "Missouri-style entity attorney requirements could make small commercial rollout uneconomic without counsel capacity.",
    solution:
      "Missouri ownership-type gate so that entity parcels are routed to counsel before STC appeal filing.",
    references: [
      { title: "Missouri State Tax Commission - File an Appeal", url: "https://stc.mo.gov/file-an-appeal/" },
    ],
    implementsSurfaceIds: ["trim-ct-op-rollout-gate", "trim-ct-op-jurisdiction", "trim-ct-owner-denial-reason"],
    status: "deferred",
  },
  {
    id: "lic-28",
    consideration:
      "For the first 10 non-Texas rollout states, what is the appeal-level matrix for owner self-representation, paid consultant/agent representation, required appraiser/broker/CPA credentials, and attorney-only judicial or entity representation?",
    thesisGap:
      "The multi-state rollout order needs a verified representative rule at each appeal level and ownership type.",
    solution:
      "State representation matrix with launch-blocking unknowns so that Trim expands only after each appeal level and ownership type has a verified representative rule.",
    references: [],
    implementsSurfaceIds: ["trim-ct-op-rollout-gate", "trim-ct-op-jurisdiction", "trim-ct-op-licensed-roster"],
    status: "deferred",
  },
]);
