/**
 * Licensed PTC Practitioner - considerations (Trim, v2).
 * Domain: what wins at informal vs ARB; evidence norms; county temperament.
 */
import type { SmeItem } from "../smeTypes";

export const LICENSED_PTC_PRACTITIONER_ITEMS: SmeItem[] = [
  {
    id: "ptc-01",
    consideration:
      "In Harris, Dallas, Tarrant, Travis, and Bexar counties, what share of small commercial and multifamily protests realistically resolve at informal review versus proceeding to ARB?",
    thesisGap:
      "Worker demand and packet emphasis depend on metro-specific informal-to-ARB conversion, but Trim has only a statewide protest spine.",
    solution:
      "County-calibrated informal-first triage with outcome logging by Harris, Dallas, Tarrant, Travis, and Bexar so that Worker capacity is sized from observed metro conversion instead of a statewide assumption.",
    references: [
      { title: "Texas Comptroller - Property Tax Protests and Appeals", url: "https://comptroller.texas.gov/taxes/property-tax/protests/" },
    ],
    implementsSurfaceIds: ["trim-ct-op-worker-dispatch", "trim-ct-owner-status", "trim-ct-worker-queue"],
    status: "deferred",
  },
  {
    id: "ptc-02",
    consideration:
      "Which evidence items most often move a Texas metro informal appraiser on commercial or multifamily value: rent roll, trailing P&L, current leases, sale comps, equity grid, condition photos, repair bids, or independent appraisal?",
    thesisGap:
      "Trim cannot define the minimum viable informal packet without knowing which evidence actually supports an appraiser reduction.",
    solution:
      "Subject-income evidence first, supported by current leases, rent roll, trailing P&L, dated condition evidence, and sale or equity comps so that the informal appraiser can justify a reduction before the file becomes a board presentation.",
    references: [
      { title: "Johnson CAD - Model Hearing Procedures", url: "https://johnsoncad.com/wp-content/uploads/2025/02/MODEL-HEARING-PROCEDURES.pdf" },
      { title: "IAAO - Standard on Mass Appraisal", url: "https://www.iaao.org/wp-content/uploads/Standard%5Fon%5FMass%5FAppraisal.pdf" },
    ],
    implementsSurfaceIds: ["trim-ct-owner-upload", "trim-ct-owner-income-docs", "trim-ct-owner-condition-docs", "trim-ct-worker-packet"],
    status: "partial",
  },
  {
    id: "ptc-03",
    consideration:
      "What evidence threshold usually makes a county appraiser offer a meaningful informal reduction rather than a token settlement?",
    thesisGap:
      "Weak files could consume hearing capacity if Trim cannot distinguish meaningful informal leverage from token-settlement risk.",
    solution:
      "A pre-informal confidence gate requiring owner-specific income or condition proof plus an independently supportable requested value so that weak files do not consume hearing capacity for token settlements.",
    references: [],
    implementsSurfaceIds: ["trim-ct-worker-packet", "trim-ct-op-exceptions"],
    status: "deferred",
  },
  {
    id: "ptc-04",
    consideration:
      "At ARB, how should a practitioner decide whether to lead with market value, equal-and-uniform, or both grounds on the same Texas commercial parcel?",
    thesisGap:
      "Packet and hearing scripts need a grounds-selection rule instead of presenting every theory with equal weight.",
    solution:
      "Grounds selection that leads with market value when subject income, sales, or condition proof is strongest and adds equal-and-uniform when adjusted comparable assessments support a lower median so that the ARB hears the cleanest statutory path without losing the fallback.",
    references: [
      { title: "Texas Tax Code Section 41.43", url: "https://texas.public.law/statutes/tex._tax_code_section_41.43" },
    ],
    implementsSurfaceIds: ["trim-ct-worker-packet", "trim-ct-worker-hearing"],
    status: "partial",
  },
  {
    id: "ptc-05",
    consideration:
      "For equal-and-uniform protests, what does each major Texas metro ARB treat as a persuasive reasonable number of comparable properties appropriately adjusted?",
    thesisGap:
      "Public data may suggest an equity case, but Trim lacks local proof that the board will accept the comp set.",
    solution:
      "A metro-specific equity-comp standard requiring a reasonable adjusted comparable set with similarity, location, age, size, use, and condition documented so that equal-and-uniform cases survive local ARB skepticism.",
    references: [
      { title: "Texas Tax Code Section 41.43", url: "https://texas.public.law/statutes/tex._tax_code_section_41.43" },
    ],
    implementsSurfaceIds: ["trim-ct-worker-packet", "trim-ct-worker-county-rules"],
    status: "deferred",
  },
  {
    id: "ptc-06",
    consideration:
      "How do Harris, Dallas, Tarrant, Travis, and Bexar ARBs differ in tolerance for consultant-prepared equity grids versus appraisal-district-generated comparable sets?",
    thesisGap:
      "County temperament can turn a plausible equal-and-uniform packet into an unpersuasive hearing presentation.",
    solution:
      "Side-by-side reconciliation of consultant-selected equity comps against appraisal-district characteristics and district comps so that the advocate can defend the grid even before boards that prefer district-generated sets.",
    references: [],
    implementsSurfaceIds: ["trim-ct-worker-packet", "trim-ct-worker-county-rules"],
    status: "deferred",
  },
  {
    id: "ptc-07",
    consideration:
      "For income-producing small commercial and multifamily properties, when will ARBs accept owner-provided NOI materials without an MAI or certified appraisal report?",
    thesisGap:
      "Owner uploads may be enough for some income cases, but Trim has not set the line where expert appraisal cost is required.",
    solution:
      "Owner NOI packets with rent roll, leases, trailing income and expenses, expense normalization, and cap-rate support so that small income-property cases can proceed without a certified appraisal unless value, complexity, or dispute risk justifies expert cost.",
    references: [
      { title: "IAAO - Standard on Mass Appraisal", url: "https://www.iaao.org/wp-content/uploads/Standard%5Fon%5FMass%5FAppraisal.pdf" },
      { title: "Texas Tax Code Section 23.012", url: "https://texas.public.law/statutes/tex._tax_code_section_23.012" },
    ],
    implementsSurfaceIds: ["trim-ct-owner-income-docs", "trim-ct-worker-packet"],
    status: "partial",
  },
  {
    id: "ptc-08",
    consideration:
      "What redactions or summary formats do Texas metro ARBs accept for rent rolls, leases, and income statements when owners fear disclosing proprietary tenant data?",
    thesisGap:
      "Commercial owners may refuse uploads unless Trim can request valuation facts without unnecessary tenant disclosure.",
    solution:
      "Redacted rent-roll and income summaries that preserve unit, lease, date, amount, vacancy, and expense fields while masking tenant identifiers so that owners can disclose valuation facts without unnecessary proprietary exposure.",
    references: [
      { title: "Fort Bend CAD - 2026 ARB Information Packet", url: "https://www.fbcad.org/wp-content/uploads/2026/04/2026-ARB-Information-Packet.pdf" },
    ],
    implementsSurfaceIds: ["trim-ct-owner-income-docs", "trim-ct-worker-packet"],
    status: "partial",
  },
  {
    id: "ptc-09",
    consideration:
      "What physical-condition evidence is most credible at informal review and ARB: dated photos, contractor bids, inspection reports, insurance claims, engineering reports, or owner testimony?",
    thesisGap:
      "Condition claims need an evidence hierarchy so Worker packets do not rely on unsupported owner assertions.",
    solution:
      "Dated photo logs tied to parcel areas, contractor bids, inspection or engineering reports, insurance documentation, and concise owner testimony so that condition claims are corroborated rather than asserted.",
    references: [
      { title: "Johnson CAD - Model Hearing Procedures", url: "https://johnsoncad.com/wp-content/uploads/2025/02/MODEL-HEARING-PROCEDURES.pdf" },
    ],
    implementsSurfaceIds: ["trim-ct-owner-condition-docs", "trim-ct-worker-packet"],
    status: "partial",
  },
  {
    id: "ptc-10",
    consideration:
      "In Dallas County, how does the uFile evidence-and-opinion workflow change the timing and content of a practitioner's first submitted value position?",
    thesisGap:
      "Dallas may require an earlier documented value position than the generic protest flow assumes.",
    solution:
      "Dallas uFile value-position discipline that submits the requested value and supporting evidence early in the online workflow so that DCAD review starts from a documented, defensible position rather than a placeholder protest.",
    references: [
      { title: "Dallas CAD - uFile Online Protest Guide", url: "https://dallascad.org/webForms/UFILEONLINE/UFILE_ONLINE_PROTEST_2026.pdf" },
    ],
    implementsSurfaceIds: ["trim-ct-worker-packet", "trim-ct-op-appeal-window", "trim-ct-worker-hearing"],
    status: "partial",
  },
  {
    id: "ptc-11",
    consideration:
      "In Travis County, how do telephone-default hearings, online evidence packets, and five-copy in-person evidence rules change practitioner prep compared with other Texas metros?",
    thesisGap:
      "Hearing format and evidence-copy rules can break Worker logistics even when valuation proof is ready.",
    solution:
      "Travis hearing-mode preparation that treats telephone as the default unless changed, uploads online evidence, and produces five in-person copies when needed so that format rules do not weaken an otherwise ready case.",
    references: [
      { title: "Travis CAD - ARB Hearings", url: "https://traviscad.org/arbhearings/" },
    ],
    implementsSurfaceIds: ["trim-ct-worker-hearing", "trim-ct-worker-appear-checklist", "trim-ct-worker-packet"],
    status: "partial",
  },
  {
    id: "ptc-12",
    consideration:
      "In Bexar County, what informal phone or Zoom practices materially change how a consultant should present commercial evidence before formal ARB scheduling?",
    thesisGap:
      "Bexar informal workflow may reward pre-upload and concise phone presentation rather than a generic in-person approach.",
    solution:
      "Bexar informal phone or Zoom sequencing with packet pre-upload, a short income or comp narrative, and preapproved settlement authority so that the consultant can resolve suitable cases before formal ARB scheduling.",
    references: [
      { title: "Bexar CAD - Informal and Formal Protest Hearing Process", url: "https://help.bcad.org/hc/en-us/articles/47767849496211-Informal-and-Formal-Protest-Hearing-Process-Explained" },
    ],
    implementsSurfaceIds: ["trim-ct-worker-packet", "trim-ct-worker-hearing", "trim-ct-op-worker-dispatch"],
    status: "partial",
  },
  {
    id: "ptc-13",
    consideration:
      "In Tarrant County, which cases are suitable for online or automated value negotiation versus requiring direct informal contact or formal ARB advocacy?",
    thesisGap:
      "Automation could settle suitable cases, but only if Trim can route complex income, condition, equity, or high-dollar disputes away from automated negotiation.",
    solution:
      "Tarrant routing that sends simple value-supported cases through online negotiation and reserves direct informal contact or ARB advocacy for income, condition, equity, or high-dollar disputes so that automation closes only the files it can credibly settle.",
    references: [
      { title: "Tarrant Appraisal District - TAD.org", url: "https://www.tad.org/tadqr01" },
    ],
    implementsSurfaceIds: ["trim-ct-op-worker-dispatch", "trim-ct-worker-queue", "trim-ct-worker-packet"],
    status: "wiring",
  },
  {
    id: "ptc-14",
    consideration:
      "In Harris County, what practices around optional informal appraiser meetings and multi-docket agent check-in create avoidable defaults or weak presentations?",
    thesisGap:
      "Harris volume and scheduling norms can cause defaults or rushed presentations if Trim only tracks hearing dates.",
    solution:
      "Harris operations calendaring for optional informal appraiser meetings, evidence readiness, agent check-in, and multi-docket coverage so that volume logistics do not create defaults or rushed presentations.",
    references: [
      { title: "Harris CAD - Protest Process", url: "https://hcad.org/assets/uploads/pdf/resources/2020/Protest-Process-GTA_IAD_001_April_2020.pdf" },
    ],
    implementsSurfaceIds: ["trim-ct-op-worker-dispatch", "trim-ct-worker-hearing", "trim-ct-worker-appear-checklist"],
    status: "wiring",
  },
  {
    id: "ptc-15",
    consideration:
      "What is the practitioner rule of thumb for requesting the appraisal district's evidence under Tax Code Section 41.461, and how often does late or weak district evidence change ARB strategy?",
    thesisGap:
      "Trim needs evidence-request discipline to avoid surprise and exploit weak district packets when lawful.",
    solution:
      "Automatic Tax Code 41.461 evidence requests at protest filing plus a district-packet review checklist so that the advocate avoids surprise and adjusts strategy when district evidence is late, thin, or inconsistent.",
    references: [
      { title: "Texas Tax Code Section 41.461", url: "https://texas.public.law/statutes/tex._tax_code_section_41.461" },
    ],
    implementsSurfaceIds: ["trim-ct-worker-packet", "trim-ct-op-exceptions", "trim-ct-worker-county-rules"],
    status: "wiring",
  },
  {
    id: "ptc-16",
    consideration:
      "How far before hearing should a practitioner submit evidence in each launch county to maximize actual review by staff or ARB members, beyond the bare legal deadline?",
    thesisGap:
      "Legal admissibility may not ensure staff or ARB members actually review the packet in time.",
    solution:
      "County-specific internal evidence deadlines set earlier than the legal minimum, with practical targets based on portal rules and hearing format so that staff and ARB members have a real chance to review the packet.",
    references: [
      { title: "Texas Comptroller - Property Tax Protests and Appeals", url: "https://comptroller.texas.gov/taxes/property-tax/protests/" },
    ],
    implementsSurfaceIds: ["trim-ct-op-appeal-window", "trim-ct-worker-packet", "trim-ct-worker-hearing"],
    status: "wiring",
  },
  {
    id: "ptc-17",
    consideration:
      "Which hearing advocacy behaviors reliably hurt credibility before Texas ARB panels, such as tax-burden arguments, unsupported percentage asks, overlong narratives, or adversarial cross-examination?",
    thesisGap:
      "Worker scripts need credibility guardrails that are not captured by valuation data alone.",
    solution:
      "Evidence-only advocacy scripts that ban tax-burden complaints, unsupported percentage asks, overlong narratives, and hostile cross-examination so that credibility stays with valuation proof instead of frustration.",
    references: [],
    implementsSurfaceIds: ["trim-ct-worker-hearing", "trim-ct-worker-appear-checklist"],
    status: "deferred",
  },
  {
    id: "ptc-18",
    consideration:
      "How should a practitioner translate a county-generated mass-appraisal weakness into a concise ARB argument without asking lay board members to reject mass appraisal wholesale?",
    thesisGap:
      "Model criticism must become parcel-specific proof, not an abstract attack that boards are unlikely to credit.",
    solution:
      "Model-weakness translation into parcel-specific proof, such as wrong characteristics, bad income assumptions, or mismatched comps, so that lay ARB members can grant relief without rejecting mass appraisal as a whole.",
    references: [
      { title: "IAAO - Assessment Appeal", url: "https://www.iaao.org/wp-content/uploads/Assessment_Appeal_2016.pdf" },
    ],
    implementsSurfaceIds: ["trim-ct-worker-packet", "trim-ct-worker-hearing"],
    status: "partial",
  },
  {
    id: "ptc-19",
    consideration:
      "What should the standard small commercial packet contain when the protest is market-value only, and what additional materials are needed when equal-and-uniform is also pleaded?",
    thesisGap:
      "Packet contents must vary by protest grounds instead of using one generic evidence bundle.",
    solution:
      "A market-only packet of notice, authorization, subject facts, requested value, income or sales support, and condition proof, with an added adjusted equal-and-uniform comp grid when pleaded so that packet contents match the protest grounds.",
    references: [
      { title: "Texas Real Estate Research Center - Property Tax Protests Dos and Don'ts", url: "https://trerc.tamu.edu/blog/property-tax-protests-some-dos-and-donts/" },
      { title: "Texas Tax Code Section 41.43", url: "https://texas.public.law/statutes/tex._tax_code_section_41.43" },
    ],
    implementsSurfaceIds: ["trim-ct-worker-packet", "trim-ct-owner-upload", "trim-ct-owner-evidence-status"],
    status: "partial",
  },
  {
    id: "ptc-20",
    consideration:
      "When a prior-year reduction exists, how do practitioners decide whether to protest again annually, accept the carried value, or escalate only if the new notice creates fresh evidence?",
    thesisGap:
      "Recurring protest economics need an annual rescreen rule, not automatic repetition.",
    solution:
      "Annual re-screening against the current notice, prior reduction, new market evidence, equity spread, and expected tax savings so that repeat protests run only when the new cycle creates enough value to justify effort.",
    references: [
      { title: "O'Connor - Commercial Property Tax Protection Program", url: "https://www.poconnor.com/commercial-property-tax-protection-program/" },
    ],
    implementsSurfaceIds: ["trim-ct-owner-portfolio", "trim-ct-owner-reduction", "trim-ct-op-portfolio"],
    status: "deferred",
  },
  {
    id: "ptc-21",
    consideration:
      "What contract language and client expectations are common for year-after-year contingency protest programs on commercial property?",
    thesisGap:
      "Recurring engagement terms affect retention, billing expectations, and cancellation disputes but are not modeled at Authorize.",
    solution:
      "Evergreen contingency engagement terms covering annual protest authority, no-reduction-no-fee economics, cancellation, information duties, and settlement authority so that recurring programs avoid surprise renewals and billing disputes.",
    references: [
      { title: "O'Connor - Property Tax Protection Programs", url: "https://www.poconnor.com/property-tax-protection-programs/" },
    ],
    implementsSurfaceIds: ["trim-ct-owner-authorize", "trim-ct-owner-contingency-lock", "trim-ct-op-revoke-representation"],
    status: "deferred",
  },
  {
    id: "ptc-22",
    consideration:
      "How do Texas practitioners define tax savings in contingency invoices when market value, appraised value, exemptions, caps, tax rates, or prior-year rates interact?",
    thesisGap:
      "Fee disputes can arise if invoice savings math does not match the owner's tax bill expectations.",
    solution:
      "Contractual savings math defined as the documented taxable-value reduction multiplied by the applicable tax rate, with exemptions, caps, and appraised-versus-market value effects stated explicitly so that contingency invoices reconcile to the owner's bill.",
    references: [
      { title: "Dallas Morning News - Hiring a property tax consultant", url: "https://www.dallasnews.com/news/watchdog/2024/04/24/what-you-should-know-about-hiring-a-property-tax-consultant-to-handle-your-protest/" },
    ],
    implementsSurfaceIds: ["trim-ct-owner-invoice", "trim-ct-op-collections", "trim-ct-op-invoice-collection"],
    status: "partial",
  },
  {
    id: "ptc-23",
    consideration:
      "What contingency percentages, minimum fees, flat-fee exceptions, and no-reduction/no-fee terms are normal for small commercial and multifamily parcels in Texas metros?",
    thesisGap:
      "Owner trust and unit economics depend on fee norms that Trim has not benchmarked by parcel type.",
    solution:
      "Published fee terms using a disclosed contingency percentage, any minimum or flat-fee exception, and no-reduction-no-fee rule so that small commercial owners understand price before authorization.",
    references: [
      { title: "Kin - Property Tax Consulting Service Terms", url: "https://www.kin.com/property-tax-consulting-service-terms/" },
    ],
    implementsSurfaceIds: ["trim-ct-owner-fee-example", "trim-ct-owner-non-collapsible-fee", "trim-ct-owner-authorize"],
    status: "deferred",
  },
  {
    id: "ptc-24",
    consideration:
      "What consent authority should a contingency contract give the consultant for accepting informal settlements, withdrawing protests, or proceeding to ARB without live owner approval?",
    thesisGap:
      "Operations cannot move quickly unless settlement and escalation authority are written before the case reaches informal review.",
    solution:
      "Written consent bands granting authority to accept informal settlements within the approved target range while requiring owner approval for withdrawal, adverse settlement, or costly escalation so that operations can move quickly without exceeding agency authority.",
    references: [
      { title: "Texas Tax Code Section 1.111", url: "https://texas.public.law/statutes/tex._tax_code_section_1.111" },
    ],
    implementsSurfaceIds: ["trim-ct-owner-authorize", "trim-ct-owner-agent-appointment", "trim-ct-op-audit"],
    status: "partial",
  },
  {
    id: "ptc-25",
    consideration:
      "What exact Form 50-162 filing mechanics differ by county: e-sign acceptance, portal upload, bulk filing, timing before hearing, agent replacement, and communication routing?",
    thesisGap:
      "Authorization failures can invalidate otherwise timely protests if county mechanics are not encoded.",
    solution:
      "A county authorization matrix for Form 50-162 execution, e-sign acceptance, portal upload, bulk filing, hearing timing, agent replacement, and routing of notices so that filing authority does not fail on local mechanics.",
    references: [
      { title: "34 Texas Administrative Code Section 9.3044", url: "https://www.law.cornell.edu/regulations/texas/34-Tex-Admin-Code-SS-9-3044" },
    ],
    implementsSurfaceIds: ["trim-ct-owner-agent-appointment", "trim-ct-op-entity-signer", "trim-ct-op-jurisdiction"],
    status: "wiring",
  },
  {
    id: "ptc-26",
    consideration:
      "How do practitioners prevent fictitious, duplicate, stale, or unauthorized protests when an owner has an existing agent or a prior Form 50-162 on file?",
    thesisGap:
      "Bad authorization hygiene can create compliance risk and owner confusion before any valuation issue is heard.",
    solution:
      "Authorization hygiene that verifies signer standing, checks existing agents, deduplicates by owner-entity parcel and tax year, and replaces stale appointments before filing so that protests are not fictitious, duplicate, or unauthorized.",
    references: [
      { title: "Texas Tax Code Section 1.111", url: "https://texas.public.law/statutes/tex._tax_code_section_1.111" },
    ],
    implementsSurfaceIds: ["trim-ct-owner-agent-appointment", "trim-ct-op-revoke-representation", "trim-ct-op-audit"],
    status: "wiring",
  },
  {
    id: "ptc-27",
    consideration:
      "What county-by-county signals indicate that a commercial protest should be escalated from informal to ARB, from ARB to binding arbitration, or from ARB to district court?",
    thesisGap:
      "Escalation thresholds need economics, evidence strength, and county signals instead of performative appeals.",
    solution:
      "Escalation scoring based on expected additional reduction, evidence strength, ARB result, statutory deadline, filing cost, and forum-specific risk so that cases move from informal to ARB, arbitration, or district court only when economics and proof justify it.",
    references: [
      { title: "Texas Comptroller - Property Tax Protests and Appeals", url: "https://comptroller.texas.gov/taxes/property-tax/protests/" },
    ],
    implementsSurfaceIds: ["trim-ct-owner-denial-reason", "trim-ct-worker-outcome", "trim-ct-op-exceptions"],
    status: "deferred",
  },
  {
    id: "ptc-28",
    consideration:
      "Outside Texas, which practitioner assumptions break first: consultant licensure, equal-and-uniform doctrine, informal-review availability, evidence deadlines, remote hearings, or contingency-fee norms?",
    thesisGap:
      "Texas metro practice cannot be copied to new states without a variance checklist.",
    solution:
      "A state-variance launch checklist for consultant licensure, uniformity doctrine, informal availability, evidence deadlines, remote hearings, judicial representation, and contingency-fee limits so that Texas metro practice is not copied into states where the rules break.",
    references: [
      { title: "IAAO - Technical Standards", url: "https://www.iaao.org/industry-data/iaao-technical-standards/" },
    ],
    implementsSurfaceIds: ["trim-ct-op-rollout-gate", "trim-ct-op-jurisdiction", "trim-ct-worker-county-rules"],
    status: "deferred",
  },
];
