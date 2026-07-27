/**
 * Collections / AR Specialist - considerations (Trim, v2).
 * Domain: contingency fee collection after reduction; invoice proof, payment rails, dunning, and write-off evidence.
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

export const COLLECTIONS_AR_ITEMS: SmeItem[] = withImplementation([
  {
    id: "col-01",
    consideration:
      "What is Ownwell's actual post-reduction collection sequence from signup agreement to outcome notice, electronic invoice, available ACH or card payment, due date, and proof of savings?",
    solution:
      "Outcome-to-invoice sequence from signed service and authorization agreements, owner verification, appeal filing, portal/email status updates, successful county notice, savings calculation, electronic invoice, ACH/e-check or card payment link, receipt, and signed taxing-authority proof so that Trim collects only after documented savings while preserving the Owner's ability to verify the bill.",
    references: refs("https://www.ownwell.com/pricing", "https://www.ownwell.com/faqs", "https://sandbox.ownwell.com/help/article/14355533992347-how-do-i-pay-my-ownwell-invoice"),
    implementsSurfaceIds: ["trim-ct-owner-status", "trim-ct-owner-reduction", "trim-ct-owner-invoice", "trim-ct-op-collections"],
    status: "wiring",
  },
  {
    id: "col-02",
    consideration:
      "In O'Connor's public service agreements, when is the contingency fee earned, how is Estimated Tax Savings defined, when does interest start, and what invoice evidence is sent to the owner?",
    solution:
      "Earned-fee rule tied to protested-year reduction, Estimated Tax Savings contract definition, post-reduction invoice, 30-day due date, 1.5% monthly interest, and county/order evidence so that Texas Owners understand the fee is earned by the reduction event rather than by cash receipt.",
    references: refs("https://www.poconnor.com/wp-content/uploads/2023/06/Our-Terms.pdf", "https://www.poconnor.com/question/fees-billed-current-future-years/", "https://clients.lowpropertytax.com/residential-contract/"),
    implementsSurfaceIds: ["trim-ct-owner-authorize", "trim-ct-owner-reduction", "trim-ct-owner-invoice"],
    status: "partial",
  },
  {
    id: "col-03",
    consideration:
      "How does Paramount invoice commercial and multifamily owners after a successful Texas appeal, including result breakdown, fee cap treatment, due date, and refund versus tax-savings handling?",
    solution:
      "Paramount-style results breakdown showing pre/post value, refund or tax-savings amount, 25% fee subject to Texas cap, net savings, invoice amount, and 30-day due date so that commercial and multifamily Owners see the economics of the win before paying.",
    references: refs("https://www.paramountpropertytaxappeal.com/texas", "https://www.paramountpropertytaxappeal.com/property-tax-appeal-faqs"),
    implementsSurfaceIds: ["trim-ct-owner-reduction", "trim-ct-owner-invoice"],
    status: "partial",
  },
  {
    id: "col-04",
    consideration:
      "How do FTAPS and similar Florida VAB firms separate upfront folio or filing charges from the later contingency fee due upon a verified reduction?",
    solution:
      "Separate filing-fee line item captured at signup or absorbed by policy, with later contingency charged only upon verified reduction, so that Trim can truthfully distinguish no-upfront-contingency risk from jurisdictional petition costs.",
    references: refs("https://ftaps.com/", "https://ftaps.com/get-started/", "https://clients.lowpropertytax.com/residential-contract/"),
    implementsSurfaceIds: ["trim-ct-owner-authorize", "trim-ct-owner-invoice"],
    status: "deferred",
  },
  {
    id: "col-05",
    consideration:
      "What invoice timing, payment-method disclosure, and contingency percentage range does Tax Appeal Consultants publish for California property-tax appeal work?",
    solution:
      "California invoice policy that charges 25%-50% of first-year savings only after the appeal is resolved, with payment-method disclosure added by Trim at engagement and invoice, so that California Owners do not confuse free evaluation with free resolved work.",
    references: refs("https://taxappealconsultants.com/california-property-tax-appeal-services-fees/"),
    implementsSurfaceIds: ["trim-ct-owner-authorize", "trim-ct-owner-invoice"],
    status: "deferred",
  },
  {
    id: "col-06",
    consideration:
      "For Ryan-class enterprise property-tax engagements, what public contracts show about invoice cadence, EFT preference, card or check fallback, processing fees, interest, and collection-cost clauses?",
    solution:
      "Enterprise AR terms sheet with invoice cadence, EFT/ACH preference, card/check fallback, processing-fee disclosure, late interest, collection costs, and attorney-fee recovery so that Ryan-class commercial Owners receive vendor-payment terms in the format their AP teams expect.",
    references: refs("https://www.villageofstickney.com/government/resolutions/2024/resolution-05-2024-exhibit-a-ryan-llc-contract", "http://ryan.com/practice-areas/property-tax/commercial-property-tax/"),
    implementsSurfaceIds: ["trim-ct-owner-authorize", "trim-ct-owner-invoice", "trim-ct-op-collections"],
    status: "deferred",
  },
  {
    id: "col-07",
    consideration:
      "Across Ownwell, O'Connor, Paramount, FTAPS, Ryan-class firms, and Tax Appeal Consultants, which firms actually capture ACH or card authorization at signup versus waiting for post-outcome invoice payment?",
    solution:
      "Signup payment-method authorization option that stores ACH or card credentials with clear delayed-charge terms while leaving post-outcome invoice payment available where authorization is not captured so that Trim reduces AR risk without pretending incumbent public pages prove universal card-on-file practice.",
    references: refs("https://sandbox.ownwell.com/help/article/14355533992347-how-do-i-pay-my-ownwell-invoice", "https://www.nacha.org/news/importance-compliant-ach-authorizations"),
    implementsSurfaceIds: ["trim-ct-owner-authorize", "trim-ct-owner-invoice", "trim-ct-op-collections"],
    status: "wiring",
  },
  {
    id: "col-08",
    consideration:
      "What bad-debt, write-off, and late-payment rates are normal for contingency property-tax consulting invoices after successful reductions, segmented by residential, small commercial, multifamily, and enterprise accounts?",
    solution:
      "Segment-level receivables-loss study by residential, small commercial, multifamily, and enterprise account size so that Trim's model uses observed bad-debt and write-off rates instead of assumed collection performance.",
    references: refs(),
    implementsSurfaceIds: ["trim-ct-owner-invoice", "trim-ct-op-collections"],
    status: "deferred",
  },
  {
    id: "col-09",
    consideration:
      "What share of successful property-tax reductions become invoice disputes, and how do dispute rates vary by savings size, property type, tax year, and payment rail?",
    solution:
      "Dispute-rate telemetry by savings size, property type, tax year, and payment rail so that support staffing, dunning timing, and revenue recognition reserves use measured invoice-dispute frequency.",
    references: refs(),
    implementsSurfaceIds: ["trim-ct-owner-invoice", "trim-ct-op-collections"],
    status: "deferred",
  },
  {
    id: "col-10",
    consideration:
      "Which invoice disputes are most common: tax-rate year, exemptions, appraised versus assessed value, partial reduction, refund timing, escrowed felt win, fee percentage, minimum fee, or recurrence misunderstanding?",
    solution:
      "Dispute-reason vocabulary covering tax-rate year, exemption adjustment, appraised versus taxable value, partial reduction, refund timing, escrow or reserve felt-win gap, fee percentage, minimum fee, and recurrence misunderstanding so that every challenge routes to a proof path instead of generic support notes.",
    references: refs("https://www.ownwell.com/help/article/11781483223067-why-is-the-tax-rate-on-my-invoice-different-than-the-county", "https://www.ownwell.com/help/article/8807275849755-how-are-tax-exemptions-taken-into-account", "https://propertytaxdesk.com/blog/contingency-fee-savings-math/"),
    implementsSurfaceIds: ["trim-ct-owner-reduction", "trim-ct-owner-invoice", "trim-ct-op-collections"],
    status: "deferred",
  },
  {
    id: "col-11",
    consideration:
      "What proof package best resolves a savings-math dispute: original notice, final order, corrected appraisal roll, corrected tax bill, refund notice, tax-rate source, exemption adjustment, or all of these together?",
    solution:
      "Invoice proof package containing original notice, final order or settlement, corrected roll/value, corrected tax bill or refund notice, tax-rate source, exemption adjustment, and calculation worksheet so that savings math survives Owner review and later collection scrutiny.",
    references: refs("https://www.ownwell.com/pricing", "https://clients.lowpropertytax.com/residential-contract/", "https://comptroller.texas.gov/taxes/property-tax/bills/"),
    implementsSurfaceIds: ["trim-ct-owner-reduction", "trim-ct-owner-invoice", "trim-ct-op-collections"],
    status: "deferred",
  },
  {
    id: "col-12",
    consideration:
      "For Texas commercial parcels, which public record should be the source of truth for measured first-year savings: before and after appraised value, assessed value, taxable value, taxing-unit millage, corrected bill, or refund record?",
    solution:
      "Texas measured-savings hierarchy using final appraised/taxable value, corrected tax bill or refund record, applicable taxing-unit rates, and Tax Code value/equality evidence so that commercial invoices are reproducible from official records rather than internal estimates alone.",
    references: refs("https://comptroller.texas.gov/taxes/property-tax/bills/", "https://comptroller.texas.gov/taxes/property-tax/refunds.php", "https://texas.public.law/statutes/tex._tax_code_section_41.43"),
    implementsSurfaceIds: ["trim-ct-owner-reduction", "trim-ct-owner-invoice"],
    status: "deferred",
  },
  {
    id: "col-13",
    consideration:
      "How should an invoice explain use of prior-year tax rate, current-year rate, taxing-unit rate, or exemption-adjusted effective rate without sounding like the savings math is invented?",
    solution:
      "Rate-assumption explainer that labels prior-year, current-year, taxing-unit, and exemption-adjusted rates and shows why the chosen rate is used at invoice time so that Owners see a disclosed estimate method rather than invented savings math.",
    references: refs("https://www.ownwell.com/help/article/11781483223067-why-is-the-tax-rate-on-my-invoice-different-than-the-county", "https://www.ftc.gov/legal-library/browse/ftc-policy-statement-regarding-advertising-substantiation"),
    implementsSurfaceIds: ["trim-ct-owner-reduction", "trim-ct-owner-invoice"],
    status: "deferred",
  },
  {
    id: "col-14",
    consideration:
      "What dunning language collects an unpaid contingency invoice while avoiding government-lookalike pressure, scam signals, unsupported threats, or confusion with county tax collection?",
    solution:
      "Private-vendor dunning copy with invoice number, signed agreement, documented reduction, proof links, dispute path, payment options, and non-government disclaimer so that collection pressure remains truthful and does not resemble a county tax demand or scam notice.",
    references: refs("https://www.ftc.gov/business-guidance/blog/2024/02/new-impersonator-rule-gives-ftc-powerful-tool-protect-consumers-businesses", "https://files-prod.consumerfinance.gov/f/documents/cfpb_fair-debt-collection-practices-act-fdcpa-procedures_2022-12.pdf"),
    implementsSurfaceIds: ["trim-ct-owner-invoice", "trim-ct-op-collections"],
    status: "deferred",
  },
  {
    id: "col-15",
    consideration:
      "What dunning cadence and channels are acceptable for commercial property owners after a documented reduction: portal notice, email, mailed invoice, phone, SMS, certified demand, or collection agency handoff?",
    solution:
      "Graduated commercial dunning cadence from portal/email reminder to mailed invoice, AP contact, phone follow-up, written demand, and agency/attorney handoff with consent and opt-out controls so that Trim escalates unpaid invoices without adding channel-compliance or harassment risk.",
    references: refs("https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business", "https://www.fcc.gov/general/telemarketing-and-robocalls", "https://files-prod.consumerfinance.gov/f/documents/cfpb_fair-debt-collection-practices-act-fdcpa-procedures_2022-12.pdf"),
    implementsSurfaceIds: ["trim-ct-owner-consent", "trim-ct-owner-invoice", "trim-ct-op-collections"],
    status: "deferred",
  },
  {
    id: "col-16",
    consideration:
      "If Trim obtains ACH authorization at signing for a contingent amount not yet known, what amount, maximum amount, timing, notice, revocation, account-validation, WEB, PPD, or CCD requirements apply?",
    solution:
      "ACH-at-sign authorization with receiver identity, account validation, WEB/PPD/CCD classification, amount or maximum-amount formula, timing trigger, advance notice, revocation method, authorization copy, and proof retention so that the later contingent debit is enforceable when documented savings land.",
    references: refs("https://www.nacha.org/news/importance-compliant-ach-authorizations", "https://www.nacha.org/rules/supplementing-fraud-detection-standards-web-debits", "https://www.nacha.org/content/account-validation-resource-center"),
    implementsSurfaceIds: ["trim-ct-owner-authorize", "trim-ct-owner-consent", "trim-ct-owner-invoice"],
    status: "deferred",
  },
  {
    id: "col-17",
    consideration:
      "For the single mid-sale or parcel transfer edge case, what fee-agreement sentence makes the fee obligation survive transfer of the parcel or attach at filing when the reduction is certified after closing?",
    solution:
      "Fee-agreement clause stating that Trim's fee obligation is earned when Trim files or performs under the agreement and survives sale, transfer, closing, or change of parcel ownership for the protested tax year, with the signer/owner remaining liable for reductions certified after closing, so that the mid-sale edge case does not leak earned contingency fees or create a new persona.",
    references: refs("https://republicpropertytax.com/terms-and-conditions/", "https://www.ownwell.com/faqs"),
    implementsSurfaceIds: ["trim-ct-owner-authorize", "trim-ct-owner-invoice"],
    status: "deferred",
  },
  {
    id: "col-18",
    consideration:
      "If Trim keeps a card on file at signing and charges only after documented reduction, what card-network authorization, advance notice, recurring, installment, cancellation, descriptor, and receipt rules apply?",
    solution:
      "Card-on-file delayed-charge authorization with stored-credential consent, amount formula, post-reduction advance notice, cancellation/revocation path, descriptor, receipt, and dispute evidence bundle so that convenience charging does not become a no-authorization or cancelled-recurring chargeback.",
    references: refs("https://usa.visa.com/content/dam/VCOM/global/support-legal/documents/merchants-dispute-management-guidelines.pdf", "https://usa.visa.com/content/dam/VCOM/download/about-visa/visa-rules-public.pdf", "https://www.mastercard.us/content/dam/mccom/en-us/documents/rules/chargeback-guide.pdf"),
    implementsSurfaceIds: ["trim-ct-owner-authorize", "trim-ct-owner-invoice", "trim-ct-op-collections"],
    status: "deferred",
  },
  {
    id: "col-19",
    consideration:
      "Which chargeback reason codes are most likely for contingency property-tax services, and what evidence defeats \"services not received,\" \"not as described,\" \"no authorization,\" or \"cancelled recurring transaction\" claims?",
    solution:
      "Chargeback evidence packet with signed agreement, stored-payment authorization, service timeline, appeal filings, outcome proof, invoice math, notices, receipt, and dispute correspondence so that Trim can rebut services-not-received, not-as-described, no-authorization, and cancelled-transaction claims.",
    references: refs("https://usa.visa.com/content/dam/VCOM/global/support-legal/documents/merchants-dispute-management-guidelines.pdf", "https://www.mastercard.us/content/dam/mccom/en-us/documents/rules/chargeback-guide.pdf"),
    implementsSurfaceIds: ["trim-ct-owner-authorize", "trim-ct-owner-invoice", "trim-ct-op-collections"],
    status: "deferred",
  },
  {
    id: "col-20",
    consideration:
      "When an owner realizes the benefit through mortgage escrow, lender-held tax reserve, refund credit, or lower future payment rather than an immediate check, what event should trigger a fair contingency invoice?",
    solution:
      "Benefit-realization trigger based on documented lower tax liability, refund issuance, escrow/reserve credit, or lower future payment evidence so that invoices are fair even when the Owner experiences the win through a servicer or lender account rather than an immediate check.",
    references: refs("https://www.consumerfinance.gov/rules-policy/regulations/1024/17", "https://mfguide.fanniemae.com/fnmf-pdf/download/4126", "https://mf.freddiemac.com/docs/chapters/mf_guide_ch_39.pdf"),
    implementsSurfaceIds: ["trim-ct-owner-reduction", "trim-ct-owner-invoice"],
    status: "deferred",
  },
  {
    id: "col-21",
    consideration:
      "Do annual protest programs suspend, withdraw, or decline next year's representation when the prior invoice is unpaid, and what notice language makes that retention lever lawful and non-coercive?",
    solution:
      "Future-year service suspension term with plain notice, cure period, and no threat to the current documented result so that unpaid prior invoices can pause next-cycle representation without coercive or misleading collection pressure.",
    references: refs("https://www.poconnor.com/question/fees-billed-current-future-years/", "https://republicpropertytax.com/terms-and-conditions/"),
    implementsSurfaceIds: ["trim-ct-owner-status", "trim-ct-owner-invoice", "trim-ct-op-collections"],
    status: "deferred",
  },
  {
    id: "col-22",
    consideration:
      "What recurrence, cancellation, and invoice-survival wording is common in year-after-year property-tax protest programs that stay active until cancelled?",
    solution:
      "Standing-program renewal and cancellation clause with tax-year scope, written cancellation channel, deadline before next protest cycle, invoice survival for filed/performed years, and no-fee-on-no-reduction promise so that recurring representation does not create surprise future invoices.",
    references: refs("https://www.poconnor.com/property-tax-protection-programs/", "https://www.poconnor.com/question/fees-billed-current-future-years/", "https://republicpropertytax.com/terms-and-conditions/"),
    implementsSurfaceIds: ["trim-ct-owner-authorize", "trim-ct-owner-consent", "trim-ct-owner-invoice"],
    status: "deferred",
  },
  {
    id: "col-23",
    consideration:
      "For unpaid $2K to $15K commercial ACV invoices, when do firms move from internal dunning to collection agency, attorney demand, justice court, county court, or write-off?",
    solution:
      "Escalation matrix keyed to invoice amount, proof strength, dispute status, venue, attorney-fee clause, justice-court/county-court limits, and expected recovery cost so that $2K-$15K commercial ACV invoices move beyond internal dunning only when economics justify it.",
    references: refs("https://propertytax.storage.googleapis.com/1641921138538/1_-_Documents_for_PropertyTax.io___Gold_Service-bryanutley2000_yahoo.com.pdf", "https://www.collincountytx.gov/Courts/Justices-Peace/civil-suits", "https://law.justia.com/codes/texas/civil-practice-and-remedies-code/title-2/subtitle-c/chapter-38/section-38-001/"),
    implementsSurfaceIds: ["trim-ct-owner-invoice", "trim-ct-op-collections"],
    status: "deferred",
  },
  {
    id: "col-24",
    consideration:
      "What records must Trim keep before writing off an uncollectible contingency invoice: signed contract, authority proof, result proof, invoice, dunning log, dispute log, collection agency record, or judgment record?",
    solution:
      "Write-off evidence file with signed contract, authority proof, result proof, invoice, dunning log, dispute log, collection record, settlement, and judgment or abandonment rationale so that uncollectible fees remain auditable business bad-debt decisions.",
    references: refs("https://www.irs.gov/taxtopics/tc453"),
    implementsSurfaceIds: ["trim-ct-owner-authorize", "trim-ct-owner-reduction", "trim-ct-owner-invoice", "trim-ct-op-collections"],
    status: "deferred",
  },
  {
    id: "col-25",
    consideration:
      "For Texas commercial entity owners, who should be the contractual payor and invoice addressee: deeded entity, tax-bill mailing entity, authorized signer, property manager, asset manager, or accounts-payable delegate?",
    solution:
      "Contracting and invoice-routing rule naming the deeded owner entity as payor, validating signer authority, and adding AP/property-manager/asset-manager delegates only as notice recipients so that payment routing does not undermine authority or debt validity.",
    references: refs("https://hcad.org/assets/uploads/pdf/forms/2025/50-162.pdf", "https://texas.public.law/statutes/tex._tax_code_section_1.111"),
    implementsSurfaceIds: ["trim-ct-owner-authorize", "trim-ct-owner-invoice", "trim-ct-op-collections"],
    status: "partial",
  },
  {
    id: "col-26",
    consideration:
      "Do Texas property-tax consulting contracts commonly require a personal guaranty, security interest, or signer warranty when the property owner is an LLC, partnership, trust, or other entity?",
    solution:
      "Entity-owner risk clause with signer authority warranty, optional personal guaranty for small entities, and security-interest language only where counsel approves so that LLC, partnership, trust, or entity accounts have a collectible obligor without overusing consumer-style assumptions.",
    references: refs("https://republicpropertytax.com/terms-and-conditions/", "https://hcad.org/assets/uploads/pdf/forms/2025/50-162.pdf"),
    implementsSurfaceIds: ["trim-ct-owner-authorize", "trim-ct-owner-invoice", "trim-ct-op-collections"],
    status: "deferred",
  },
]);
