/**
 * Mortgage-Servicing / Escrow Specialist — considerations (Trim, v2).
 * Domain: escrow adjustment timing; multifamily lender-held escrows.
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

export const MORTGAGE_ESCROW_ITEMS: SmeItem[] = withImplementation([
  {
    id: "esc-01",
    consideration:
      "Under RESPA escrow account analysis rules, what exact event should Trim expect to drive a servicer's lower tax projection after an assessment reduction: corrected assessment roll, corrected tax bill, servicer tax-service update, borrower notice, or the next annual escrow analysis?",
    solution:
      "Escrow projection trigger registry for corrected tax bills, tax-collector updates, tax-service feeds, borrower evidence, and annual-analysis events so that Trim treats an assessment reduction as escrow-actionable only when the servicer has a recognized source for changing the tax disbursement estimate.",
    references: refs("https://www.consumerfinance.gov/rules-policy/regulations/1024/17", "https://www.consumerfinance.gov/compliance/compliance-resources/mortgage-resources/mortserv/mortgage-servicing-faqs/"),
    implementsSurfaceIds: ["trim-ct-owner-invoice", "trim-ct-op-collections"],
    status: "deferred",
  },
  {
    id: "esc-02",
    consideration:
      "How long can the delay be between a successful property-tax appeal and the borrower's felt win when the servicer's escrow computation year does not line up with the county assessment, tax-bill, or refund cycle?",
    solution:
      "County-cycle and servicer-escrow-year timeline overlay so that the Owner sees the gap between winning an appeal and feeling the win through a refund, surplus check, or lower monthly deposit.",
    references: refs("https://www.consumerfinance.gov/rules-policy/regulations/1024/17", "https://www.consumerfinance.gov/compliance/compliance-resources/mortgage-resources/mortserv/mortgage-servicing-faqs/"),
    implementsSurfaceIds: ["trim-ct-owner-status", "trim-ct-owner-reduction-detail", "trim-ct-op-collections"],
    status: "deferred",
  },
  {
    id: "esc-03",
    consideration:
      "When a borrower provides documentation of a lower property-tax obligation before the scheduled annual analysis, when are servicers required, permitted, or operationally willing to run an off-cycle escrow analysis?",
    solution:
      "Off-cycle escrow-analysis request path with documentation requirements, servicer discretion flags, and annual-analysis fallback dates so that borrowers can ask early without being promised a reanalysis the servicer is not required to perform.",
    references: refs("https://www.consumerfinance.gov/rules-policy/regulations/1024/17", "https://www.consumerfinance.gov/ask-cfpb/what-should-i-do-if-im-having-problems-with-my-escrow-or-impound-account-en-2082/"),
    implementsSurfaceIds: ["trim-ct-owner-status", "trim-ct-owner-upload", "trim-ct-op-collections"],
    status: "deferred",
  },
  {
    id: "esc-04",
    consideration:
      "What documentation package best causes a mortgage servicer to update an escrowed tax estimate after an appeal: final order, corrected appraisal roll, corrected tax bill, tax collector refund notice, paid receipt, or borrower notice of error/information request?",
    solution:
      "Servicer-ready evidence packet containing final appeal order, corrected roll or value notice, corrected tax bill, refund notice, paid receipt, loan number, parcel ID, and written request so that the escrow team has enough proof to update tax estimates or explain why it cannot.",
    references: refs("https://www.consumerfinance.gov/ask-cfpb/how-do-i-dispute-an-error-request-information-about-my-mortgage-en-1855/", "https://www.law.cornell.edu/cfr/text/12/1024.35"),
    implementsSurfaceIds: ["trim-ct-owner-upload", "trim-ct-owner-reduction-detail", "trim-ct-op-collections"],
    status: "deferred",
  },
  {
    id: "esc-05",
    consideration:
      "If an assessment reduction creates an escrow surplus, what precise analysis date, statement date, and refund deadline matter for borrower-visible cash timing under RESPA?",
    solution:
      "Escrow surplus timing ledger for analysis date, statement delivery date, account-current status, and refund-deadline rules so that borrower-visible cash timing is tied to the RESPA event that actually creates a payable surplus.",
    references: refs("https://www.consumerfinance.gov/rules-policy/regulations/1024/17", "https://www.consumerfinance.gov/compliance/compliance-resources/mortgage-resources/mortserv/mortgage-servicing-faqs/"),
    implementsSurfaceIds: ["trim-ct-owner-invoice", "trim-ct-owner-reduction-detail", "trim-ct-op-collections"],
    status: "deferred",
  },
  {
    id: "esc-06",
    consideration:
      "How do servicers net a lower tax bill against higher insurance premiums, other escrow items, allowed cushion, existing shortage, or deficiency when determining whether an appeal produced a refund, future-payment reduction, or no visible escrow benefit?",
    solution:
      "Escrow aggregate-analysis model for lower taxes, insurance changes, cushion, shortages, deficiencies, and other escrow items so that Trim distinguishes gross tax savings from the net refund or payment change the borrower will actually see.",
    references: refs("https://www.consumerfinance.gov/rules-policy/regulations/1024/17", "https://www.consumerfinance.gov/compliance/compliance-resources/mortgage-resources/mortserv/mortgage-servicing-faqs/"),
    implementsSurfaceIds: ["trim-ct-owner-reduction-detail", "trim-ct-owner-invoice", "trim-ct-op-collections"],
    status: "deferred",
  },
  {
    id: "esc-07",
    consideration:
      "When an escrow shortage or deficiency exists before the assessment reduction lands, how should Trim explain the difference between documented tax savings and the borrower's actual monthly payment change?",
    solution:
      "Shortage-and-deficiency explainer on every escrowed win so that documented tax savings can be shown even when the benefit first reduces an existing escrow hole instead of lowering the monthly payment.",
    references: refs("https://www.consumerfinance.gov/rules-policy/regulations/1024/17", "https://guide.freddiemac.com/ci/okcsFattach/get/1008395_7"),
    implementsSurfaceIds: ["trim-ct-owner-reduction-detail", "trim-ct-owner-invoice", "trim-ct-owner-status"],
    status: "deferred",
  },
  {
    id: "esc-08",
    consideration:
      "If taxes were already paid from escrow before a Texas correction or late exemption reduces liability, who receives the county refund, and how often does that refund bypass the servicer's escrow account?",
    solution:
      "Texas refund-recipient tracker keyed to tax-collector payment source, mortgagee escrow status, and refund-payee record so that Trim knows whether an overpayment refund is likely to reach the servicer, the owner, or a bypass path needing manual escrow credit.",
    references: refs("https://comptroller.texas.gov/taxes/property-tax/refunds.php", "https://texas.public.law/statutes/tex._tax_code_section_11.431"),
    implementsSurfaceIds: ["trim-ct-owner-reduction", "trim-ct-owner-invoice", "trim-ct-op-collections"],
    status: "deferred",
  },
  {
    id: "esc-09",
    consideration:
      "What borrower-facing proof is available when a Texas tax collector refunds an overpayment after a corrected roll, and is that proof enough for a servicer to credit the escrow account or reduce future deposits?",
    solution:
      "Texas tax-collector proof capture for corrected bill, overpayment refund, payment history, receipt, and refund notice so that the borrower can give the servicer official evidence supporting escrow credit or future deposit reduction.",
    references: refs("https://comptroller.texas.gov/taxes/property-tax/refunds.php", "https://www.consumerfinance.gov/rules-policy/regulations/1024/17"),
    implementsSurfaceIds: ["trim-ct-owner-upload", "trim-ct-owner-reduction-detail", "trim-ct-op-collections"],
    status: "deferred",
  },
  {
    id: "esc-10",
    consideration:
      "In Texas, when property taxes are escrowed by a mortgagee, who receives the original tax bill, who receives a copy, and what must the owner do if Trim needs the bill or corrected bill for savings documentation?",
    solution:
      "Texas mortgagee-bill retrieval workflow for owner copy requests, tax-office portals, corrected-bill downloads, and servicer forwarding so that Trim can document savings even when the original tax bill went to the mortgagee.",
    references: refs("https://comptroller.texas.gov/taxes/property-tax/bills/", "https://texas.public.law/statutes/tex._tax_code_section_31.01"),
    implementsSurfaceIds: ["trim-ct-owner-upload", "trim-ct-owner-invoice", "trim-ct-owner-county-verify"],
    status: "deferred",
  },
  {
    id: "esc-11",
    consideration:
      "What is the safest notice path to a servicer when the owner believes escrow tax amounts are wrong after an appeal: ordinary customer-service upload, tax-bill forwarding, information request, notice of error, or all of the above in sequence?",
    solution:
      "Escalating servicer-notice sequence from upload and tax-bill forwarding to written information request and notice of error so that ordinary servicing channels are used first while RESPA-protected paths are preserved when the escrow amount remains wrong.",
    references: refs("https://www.consumerfinance.gov/ask-cfpb/what-should-i-do-if-im-having-problems-with-my-escrow-or-impound-account-en-2082/", "https://www.law.cornell.edu/cfr/text/12/1024.35"),
    implementsSurfaceIds: ["trim-ct-owner-upload", "trim-ct-owner-status", "trim-ct-op-collections"],
    status: "deferred",
  },
  {
    id: "esc-12",
    consideration:
      "If a servicer misses, underpays, or pays the wrong property-tax amount after a reduction or corrected bill, what error-resolution and tax-authority contact steps should the borrower take before penalties or liens accrue?",
    solution:
      "Missed-or-wrong-tax-payment response playbook for servicer error notice, tax-authority contact, penalty monitoring, and lien-risk escalation so that the borrower protects the property before a servicer escrow mistake compounds.",
    references: refs("https://www.consumerfinance.gov/ask-cfpb/what-should-i-do-if-get-tax-bill-from-city-county-saying-mortgage-servicer-did-not-pay-my-taxes-en-218/", "https://www.consumerfinance.gov/rules-policy/regulations/1024/34"),
    implementsSurfaceIds: ["trim-ct-owner-status", "trim-ct-op-exceptions", "trim-ct-op-collections"],
    status: "deferred",
  },
  {
    id: "esc-13",
    consideration:
      "How do Fannie Mae single-family servicing duties to protect the mortgage lien and pay escrow expenses on time affect whether a servicer will wait for a pending appeal versus pay the current tax bill and true up later?",
    solution:
      "Investor-duty payment rule on pending appeals so that Trim expects the servicer to protect the lien by paying the current tax bill on time and trueing up after corrected liability rather than waiting on an uncertain protest result.",
    references: refs("https://servicing-guide.fanniemae.com/svc/b-1-01/administering-escrow-account-and-paying-expenses", "https://www.consumerfinance.gov/rules-policy/regulations/1024/17"),
    implementsSurfaceIds: ["trim-ct-owner-status", "trim-ct-owner-invoice", "trim-ct-op-collections"],
    status: "deferred",
  },
  {
    id: "esc-14",
    consideration:
      "When a taxing jurisdiction offers installment payments or early-payment discounts, how do RESPA and investor servicing rules affect the timing of tax disbursement from escrow and the timing of any later appeal refund?",
    solution:
      "Tax-disbursement schedule branch for installment options, early-payment discounts, investor rules, and later appeal refunds so that escrow cash movement follows the required payment path before any corrected-bill benefit is applied.",
    references: refs("https://www.consumerfinance.gov/rules-policy/regulations/1024/17", "https://servicing-guide.fanniemae.com/svc/b-1-01/administering-escrow-account-and-paying-expenses"),
    implementsSurfaceIds: ["trim-ct-owner-status", "trim-ct-op-collections"],
    status: "deferred",
  },
  {
    id: "esc-15",
    consideration:
      "What user-facing timeline should Trim model for an escrowed residential win from appeal decision through corrected tax obligation, servicer analysis, surplus refund, and lower monthly escrow payment?",
    solution:
      "Residential escrow win timeline from appeal decision to corrected obligation, servicer receipt, escrow analysis, surplus handling, and payment reset so that customer status reflects the slowest necessary handoff instead of the date the value reduction was granted.",
    references: refs("https://www.consumerfinance.gov/rules-policy/regulations/1024/17", "https://www.consumerfinance.gov/compliance/compliance-resources/mortgage-resources/mortserv/mortgage-servicing-faqs/"),
    implementsSurfaceIds: ["trim-ct-owner-status", "trim-ct-owner-reduction-detail", "trim-ct-owner-invoice"],
    status: "deferred",
  },
  {
    id: "esc-16",
    consideration:
      "For escrowed residential accounts, when is it fair to collect Trim's contingency fee if the measured tax reduction is documented before the borrower receives any escrow refund or lower monthly payment?",
    solution:
      "Contingency-fee fairness gate based on documented first-year tax reduction and borrower-visible escrow status so that Trim can bill on measured savings only with clear notice when cash has not yet reached the borrower.",
    references: refs("https://www.consumerfinance.gov/rules-policy/regulations/1024/17", "https://www.consumerfinance.gov/ask-cfpb/what-should-i-do-if-im-having-problems-with-my-escrow-or-impound-account-en-2082/"),
    implementsSurfaceIds: ["trim-ct-owner-authorize", "trim-ct-owner-fee-example", "trim-ct-owner-invoice"],
    status: "deferred",
  },
  {
    id: "esc-17",
    consideration:
      "If Trim invoices on first-year tax savings but the escrow account applies the benefit partly as a future-payment credit instead of a refund check, what source of truth should define the collectible savings amount?",
    solution:
      "Collectible-savings source-of-truth hierarchy using corrected tax liability, escrow analysis, refund credit, and future-payment adjustment evidence so that invoices measure the real first-year benefit even when it appears as a credit rather than a check.",
    references: refs("https://www.consumerfinance.gov/rules-policy/regulations/1024/17", "https://www.consumerfinance.gov/compliance/compliance-resources/mortgage-resources/mortserv/mortgage-servicing-faqs/"),
    implementsSurfaceIds: ["trim-ct-owner-invoice", "trim-ct-owner-reduction-detail", "trim-ct-op-collections"],
    status: "deferred",
  },
  {
    id: "esc-18",
    consideration:
      "What standard notice packet should an escrowed borrower send the servicer after a successful appeal so the servicer has the parcel, loan, tax-bill, corrected-value, and refund facts needed to reanalyze escrow?",
    solution:
      "Standard escrow-servicer notice packet template with borrower identity, loan number, parcel ID, tax year, corrected value, corrected tax amount, appeal proof, refund proof, and requested action so that the servicer can reanalyze without chasing missing facts.",
    references: refs("https://www.consumerfinance.gov/ask-cfpb/how-do-i-dispute-an-error-request-information-about-my-mortgage-en-1855/", "https://www.consumerfinance.gov/ask-cfpb/what-should-i-do-if-im-having-problems-with-my-escrow-or-impound-account-en-2082/"),
    implementsSurfaceIds: ["trim-ct-owner-upload", "trim-ct-owner-parcel-recap", "trim-ct-owner-reduction-detail"],
    status: "deferred",
  },
  {
    id: "esc-19",
    consideration:
      "For multifamily loans with lender-held tax escrows, which loan attributes determine whether monthly real-estate-tax deposits are mandatory, waivable, or monitored only through proof of payment?",
    solution:
      "Multifamily loan-attribute classifier for agency program, loan documents, tax-escrow covenant, waiver status, payment history, and monitoring requirement so that Trim knows whether tax savings will pass through lender-held reserves or direct owner tax payment.",
    references: refs("https://mfguide.fanniemae.com/fnmf-pdf/download/4126", "https://mf.freddiemac.com/docs/chapters/mf_guide_ch_39.pdf"),
    implementsSurfaceIds: ["trim-ct-owner-authorize", "trim-ct-owner-invoice", "trim-ct-op-collections"],
    status: "deferred",
  },
  {
    id: "esc-20",
    consideration:
      "Under Fannie Mae multifamily tax-and-insurance escrow requirements, which borrower tiers or loan types create a lender-held tax escrow that could delay the owner's felt win after Trim reduces taxes?",
    solution:
      "Fannie Mae multifamily escrow-obligation matrix for borrower tier, loan type, waiver eligibility, and required tax-and-insurance deposits so that delayed felt wins are forecast only for loans that actually require lender-held tax escrows.",
    references: refs("https://mfguide.fanniemae.com/fnmf-pdf/download/4126", "https://mfguide.fanniemae.com/fnmf-pdf/download/16746"),
    implementsSurfaceIds: ["trim-ct-owner-status", "trim-ct-owner-invoice", "trim-ct-op-collections"],
    status: "deferred",
  },
  {
    id: "esc-21",
    consideration:
      "Under Freddie Mac multifamily reserve rules, how do monthly reserve collection, deferred reserve rights, annual proof-of-payment checks, and tax-service monitoring change the way a property-tax reduction flows back to the borrower?",
    solution:
      "Freddie Mac multifamily reserve-flow model for monthly reserve collection, deferred reserve rights, proof-of-payment review, and tax-service monitoring so that reduced taxes translate to the right reserve deposit, credit, release, or monitoring-only action.",
    references: refs("https://mf.freddiemac.com/docs/chapters/mf_guide_ch_39.pdf", "https://mf.freddiemac.com/docs/mf_guide_glossary.pdf"),
    implementsSurfaceIds: ["trim-ct-owner-status", "trim-ct-owner-invoice", "trim-ct-op-collections"],
    status: "deferred",
  },
  {
    id: "esc-22",
    consideration:
      "In commercial or multifamily loan documents with tax-and-insurance escrow covenants, who controls tax-bill receipt, tax payment, protest correspondence, refund application, and reserve release after a reduced assessment?",
    solution:
      "Commercial loan-document control map for bill receipt, payment authority, protest correspondence, refund handling, and reserve-release approval so that Trim routes post-reduction actions to the party the loan documents empower.",
    references: refs("https://www.sec.gov/Archives/edgar/data/1595627/000089262617000136/exh1039.htm", "https://www.lawinsider.com/clause/tax-and-insurance-escrow"),
    implementsSurfaceIds: ["trim-ct-owner-authorize", "trim-ct-owner-upload", "trim-ct-op-collections"],
    status: "deferred",
  },
  {
    id: "esc-23",
    consideration:
      "When a lender or servicer holds a T&I custodial account for a multifamily borrower, what triggers a lower monthly tax deposit, a borrower refund, a reserve credit, or no immediate cash movement after taxes are reduced?",
    solution:
      "T&I custodial-account adjustment trigger for corrected tax bill, reserve analysis, lender approval, surplus balance, and payment covenant status so that a reduction becomes a lower deposit, borrower refund, reserve credit, or no immediate cash movement according to the reserve mechanics.",
    references: refs("https://mfguide.fanniemae.com/fnmf-pdf/download/16746", "https://mf.freddiemac.com/docs/chapters/mf_guide_ch_39.pdf"),
    implementsSurfaceIds: ["trim-ct-owner-reduction-detail", "trim-ct-owner-invoice", "trim-ct-op-collections"],
    status: "deferred",
  },
  {
    id: "esc-24",
    consideration:
      "If a commercial lender-held tax escrow is governed by loan documents rather than consumer RESPA escrow rules, what clauses usually decide whether a county refund belongs to the borrower immediately or remains in the reserve account?",
    solution:
      "Refund-entitlement clause extractor for commercial escrow covenants, application-of-funds provisions, default rights, reserve minimums, and lender discretion so that county refunds are not promised to the borrower before the loan documents release them.",
    references: refs("https://www.sec.gov/Archives/edgar/data/1595627/000089262617000136/exh1039.htm", "https://www.lawinsider.com/clause/funds-for-escrow-items"),
    implementsSurfaceIds: ["trim-ct-owner-invoice", "trim-ct-owner-reduction-detail", "trim-ct-op-collections"],
    status: "deferred",
  },
  {
    id: "esc-25",
    consideration:
      "What lender notice, consent, or cooperation is commonly required before a commercial or multifamily borrower hires a tax consultant, protests assessed value, redirects tax correspondence, or asks for a tax-reserve adjustment?",
    solution:
      "Lender-cooperation checklist for tax-consultant engagement, protest authority, correspondence direction, refund assignment, and reserve-adjustment request so that commercial and multifamily cases do not violate consent or notice duties in the debt stack.",
    references: refs("https://www.sec.gov/Archives/edgar/data/1595627/000089262617000136/exh1039.htm", "https://mf.freddiemac.com/docs/chapters/mf_guide_ch_39.pdf"),
    implementsSurfaceIds: ["trim-ct-owner-authorize", "trim-ct-owner-upload", "trim-ct-owner-consent"],
    status: "deferred",
  },
  {
    id: "esc-26",
    consideration:
      "For Texas residential properties, how do homestead exemptions and residence-homestead appraisal limitations change escrow math, owner expectations, and savings communication compared with commercial or multifamily parcels?",
    solution:
      "Texas homestead escrow-math branch for exemption amount, appraisal limitation, residential tax-cap expectations, and noncommercial parcel type so that residential savings communication does not borrow commercial or multifamily assumptions.",
    references: refs("https://comptroller.texas.gov/taxes/property-tax/exemptions/", "https://comptroller.texas.gov/taxes/property-tax/valuing-property.php"),
    implementsSurfaceIds: ["trim-ct-owner-notice", "trim-ct-owner-analysis-framing", "trim-ct-owner-reduction-detail"],
    status: "deferred",
  },
  {
    id: "esc-27",
    consideration:
      "When a Texas homestead exemption or appraisal correction is approved late and generates a statutory tax refund, how should Trim distinguish the county refund timeline from the mortgage servicer's escrow-analysis and surplus-refund timeline?",
    solution:
      "Late Texas exemption and correction dual-timeline view for statutory county refund processing and RESPA escrow-analysis surplus handling so that Trim separates the tax-office refund event from the mortgage-servicer cash or payment-change event.",
    references: refs("https://comptroller.texas.gov/taxes/property-tax/refunds.php", "https://texas.public.law/statutes/tex._tax_code_section_11.431", "https://www.consumerfinance.gov/rules-policy/regulations/1024/17"),
    implementsSurfaceIds: ["trim-ct-owner-status", "trim-ct-owner-reduction-detail", "trim-ct-op-collections"],
    status: "deferred",
  },
]);
