/**
 * Solicitation & Advertising Compliance Specialist - considerations (Trim, v2).
 * Domain: TDLR ethics ("no specific result"); consumer-protection; channel rules.
 */
import type { SmeItem } from "../smeTypes";

const withImplementation = (items: SmeItem[]): SmeItem[] =>
  items.map((item) => ({
    ...item,
    implementationProblem: item.consideration,
    implementation: `On linked CT surfaces, you can now ${item.solution}`,
    implementationPlant: "not_done" as const,
  }));

export const SOLICITATION_ADVERTISING_ITEMS: SmeItem[] = withImplementation([
  {
    id: "sol-01",
    consideration:
      "What exact copy boundary follows from Texas Occupations Code Section 1152.232 and 16 TAC Section 66.100(m) for an ALG first touch that says a property is over-assessed, estimates excess tax, or says Trim can reduce the bill?",
    thesisGap:
      "Notice copy must state analyzed opportunity without assuring a specific result or claiming a guaranteed reduction.",
    solution:
      "Constrain Texas first-touch copy to parcel facts, a reviewed valuation signal, and analysis-not-promise language so that Trim does not assure a specific outcome or claim a specific result in solicitation.",
    references: [
      { title: "Texas Occupations Code Chapter 1152", url: "https://statutes.capitol.texas.gov/?tab=1&code=OC&chapter=OC.1152&artSec=" },
      { title: "TDLR - PTC sanctions", url: "https://www.tdlr.texas.gov/enforcement/ptcsanctions.htm" },
      { title: "TDLR - PTC registration application", url: "https://license.state.tx.us/ptc/forms/PTC001%20Property%20Tax%20Consultant%20Registration%20Application.pdf" },
    ],
    implementsSurfaceIds: ["trim-ct-owner-notice", "trim-ct-owner-analysis-framing", "trim-ct-owner-trust"],
    status: "partial",
  },
  {
    id: "sol-02",
    consideration:
      "If Trim completes parcel-specific analysis before contact, what records, valuation inputs, and review steps are enough to satisfy prior analysis of the facts and circumstances before stating any conclusion in advertising or solicitation?",
    thesisGap:
      "Objective solicitation claims need a substantiation file that proves the analysis happened before the claim was shown.",
    solution:
      "Require a dated substantiation packet with assessment roll data, comparable/equity/income inputs, tax-rate math, confidence thresholds, and reviewer approval before any conclusion appears so that every objective solicitation claim rests on prior analysis of that parcel's facts and circumstances.",
    references: [
      { title: "TDLR - PTC registration application", url: "https://license.state.tx.us/ptc/forms/PTC001%20Property%20Tax%20Consultant%20Registration%20Application.pdf" },
      { title: "FTC - Advertising Substantiation Policy Statement", url: "https://www.ftc.gov/legal-library/browse/ftc-policy-statement-regarding-advertising-substantiation" },
    ],
    implementsSurfaceIds: ["trim-ct-owner-notice", "trim-ct-owner-analysis-framing", "trim-ct-op-audit"],
    status: "wiring",
  },
  {
    id: "sol-03",
    consideration:
      "Which first-touch phrases are prohibited, risky, or acceptable under Texas PTC ethics: you are over-assessed, you may be over-assessed, estimated annual savings, we can lower your taxes, only pay if we save you money, and no risk?",
    thesisGap:
      "Trim needs a copy taxonomy that distinguishes blocked guarantees from qualified analytical statements.",
    solution:
      "Classify you are over-assessed, we can lower your taxes, and no risk as blocked, route estimated annual savings and only pay if we save you money through qualification, and allow our analysis indicates you may be over-assessed so that copy stays analytical, conditional, and fee-accurate.",
    references: [
      { title: "TDLR - PTC sanctions", url: "https://www.tdlr.texas.gov/enforcement/ptcsanctions.htm" },
      { title: "FTC - Advertising FAQ's Guide for Small Business", url: "https://www.ftc.gov/business-guidance/resources/advertising-faqs-guide-small-business" },
    ],
    implementsSurfaceIds: ["trim-ct-owner-notice", "trim-ct-owner-analysis-framing", "trim-ct-owner-fee-example"],
    status: "partial",
  },
  {
    id: "sol-04",
    consideration:
      "Can a Texas notice include assessed at $X; evidence supports $Y; estimated excess tax about $Z, subject to appeal outcome, or does the quantified estimate itself become a prohibited specific result or conclusion?",
    thesisGap:
      "The core ALG notice number may need stronger conditions or suppression when review is insufficient.",
    solution:
      "Permit assessed at $X; evidence supports $Y; estimated excess tax about $Z; subject to appeal outcome only after parcel-specific review and with no-guarantee prominence so that the number reads as an analyzed estimate rather than a promised reduction.",
    references: [
      { title: "TDLR - PTC registration application", url: "https://license.state.tx.us/ptc/forms/PTC001%20Property%20Tax%20Consultant%20Registration%20Application.pdf" },
      { title: "Texas Occupations Code Chapter 1152", url: "https://statutes.capitol.texas.gov/?tab=1&code=OC&chapter=OC.1152&artSec=" },
    ],
    implementsSurfaceIds: ["trim-ct-owner-notice", "trim-ct-owner-analysis-framing", "trim-ct-owner-trust-bundle"],
    status: "partial",
  },
  {
    id: "sol-05",
    consideration:
      "What must a Texas solicitation say, and where must it say it, to avoid implying Trim represents the county, appraisal district, ARB, assessor, or property owner before authorization?",
    thesisGap:
      "Private-company identity and non-affiliation must be visible before the owner mistakes Trim for government or an existing agent.",
    solution:
      "Put Trim's private-company identity and not the county, appraisal district, ARB, assessor, or owner's agent unless authorized disclosure in the sender block, first screen or page, CTA area, and footer so that the notice cannot imply government affiliation or existing representation.",
    references: [
      { title: "TDLR - PTC registration application", url: "https://license.state.tx.us/ptc/forms/PTC001%20Property%20Tax%20Consultant%20Registration%20Application.pdf" },
      { title: "Texas Occupations Code Chapter 1152", url: "https://statutes.capitol.texas.gov/?tab=1&code=OC&chapter=OC.1152&artSec=" },
      { title: "FTC - Impersonation Rule", url: "https://www.ftc.gov/business-guidance/blog/2024/02/new-impersonator-rule-gives-ftc-powerful-tool-protecting-consumers-businesses" },
    ],
    implementsSurfaceIds: ["trim-ct-owner-non-affiliation", "trim-ct-owner-trust-bundle", "trim-ct-owner-county-verify"],
    status: "partial",
  },
  {
    id: "sol-06",
    consideration:
      "Before a signed Texas Form 50-162 is filed, what solicitation language or workflow would improperly imply that Trim already has authority to act for the owner?",
    thesisGap:
      "Pre-authorization copy could imply Trim has filed, represented, negotiated, or appeared before authority exists.",
    solution:
      "Gate all pre-Form-50-162 copy and workflow behind review and sign authorization before Trim can act for you language so that the Owner is not told or shown that Trim has filed, represented, negotiated, or appeared before authority exists.",
    references: [
      { title: "Texas Comptroller - Property Tax Protests", url: "https://comptroller.texas.gov/taxes/property-tax/protests/" },
      { title: "34 Texas Administrative Code Section 9.3044", url: "https://www.law.cornell.edu/regulations/texas/34-Tex-Admin-Code-SS-9-3044" },
    ],
    implementsSurfaceIds: ["trim-ct-owner-authorize", "trim-ct-owner-agent-appointment", "trim-ct-owner-consent"],
    status: "wiring",
  },
  {
    id: "sol-07",
    consideration:
      "What automated-preparation or prefilled-protest conduct would create fictitious, unauthorized, or false-agent filing risk under Texas Tax Code Section 1.111 and Comptroller Rule 9.3044?",
    thesisGap:
      "Prefilled materials must stay drafts until authorization, signer standing, and agent checks are complete.",
    solution:
      "Lock protest preparation, signature, and filing behind valid owner authorization, signer standing, and agent-of-record checks while labeling any prefilled materials as drafts so that Trim avoids fictitious protests, unauthorized filings, and false-agent representations.",
    references: [
      { title: "Texas Tax Code Section 1.111", url: "https://tx.elaws.us/law/tx_title1_chapter1_sec.1.111" },
      { title: "34 Texas Administrative Code Section 9.3044", url: "https://www.law.cornell.edu/regulations/texas/34-Tex-Admin-Code-SS-9-3044" },
    ],
    implementsSurfaceIds: ["trim-ct-owner-agent-appointment", "trim-ct-op-audit", "trim-ct-owner-authorize"],
    status: "wiring",
  },
  {
    id: "sol-08",
    consideration:
      "Does unsolicited email to a commercial or multifamily owner about property-tax appeal services count as a CAN-SPAM commercial message with no B2B exception, and what sender, subject, ad-identification, physical-address, and opt-out elements are required?",
    thesisGap:
      "Email outreach cannot rely on a nonexistent commercial-message exception for B2B owners.",
    solution:
      "Treat unsolicited parcel-analysis email as a CAN-SPAM commercial message with accurate headers, truthful subject lines, ad identification when needed, Trim's physical postal address, a working unsubscribe, and suppression within the required window so that B2B outreach does not rely on a nonexistent commercial-message exception.",
    references: [
      { title: "FTC - CAN-SPAM Act Compliance Guide", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" },
    ],
    implementsSurfaceIds: ["trim-ct-op-detected-blocked", "trim-ct-owner-trust", "trim-ct-op-audit"],
    status: "wiring",
  },
  {
    id: "sol-09",
    consideration:
      "Can any pre-engagement parcel-analysis email be treated as transactional or informational rather than commercial, or is the primary purpose always advertisement or promotion until the owner has authorized services?",
    thesisGap:
      "Transactional-message treatment before engagement would evade required commercial outreach duties.",
    solution:
      "Classify pre-engagement parcel-analysis email as commercial until the Owner has authorized services and the message primarily concerns an existing case so that transactional-message treatment is not used to evade CAN-SPAM duties.",
    references: [
      { title: "FTC - CAN-SPAM Rule", url: "https://www.ftc.gov/legal-library/browse/rules/can-spam-rule" },
      { title: "FTC - Candid Answers to CAN-SPAM Questions", url: "https://www.ftc.gov/business-guidance/blog/2015/08/candid-answers-can-spam-questions" },
    ],
    implementsSurfaceIds: ["trim-ct-op-detected-blocked", "trim-ct-owner-trust", "trim-ct-op-audit"],
    status: "wiring",
  },
  {
    id: "sol-10",
    consideration:
      "For SMS outreach that includes tax-savings or appeal-service solicitation, when does TCPA/FCC prior express written consent apply, and can publicly listed owner phone numbers ever support first-touch texts?",
    thesisGap:
      "Public owner phone numbers should not become SMS consent for tax-savings marketing.",
    solution:
      "Block first-touch tax-savings or appeal-service SMS unless Trim has prior express written consent that specifically authorizes Trim's marketing texts so that public owner phone numbers are not treated as TCPA consent.",
    references: [
      { title: "FCC - TCPA Declaratory Ruling and Order", url: "https://docs.fcc.gov/public/attachments/FCC-15-72A1_Rcd.pdf" },
      { title: "FCC - Targeting and Eliminating Unlawful Text Messages", url: "https://docs.fcc.gov/public/attachments/FCC-23-107A1.pdf" },
    ],
    implementsSurfaceIds: ["trim-ct-op-detected-blocked", "trim-ct-owner-consent", "trim-ct-op-audit"],
    status: "wiring",
  },
  {
    id: "sol-11",
    consideration:
      "What TCPA, National DNC, autodialer, artificial/prerecorded voice, and telemarketing constraints apply to phone outreach to commercial and multifamily owners for property-tax consulting services?",
    thesisGap:
      "Commercial-owner calls still need telemarketing, DNC, wireless-number, and robocall gates.",
    solution:
      "Run phone outreach through telemarketing identification, calling-time, internal and National DNC, wireless-number, autodialer, and artificial/prerecorded-voice gates so that commercial-owner calls do not bypass TCPA and robocall constraints.",
    references: [
      { title: "FCC - Targeting and Eliminating Unlawful Text Messages", url: "https://docs.fcc.gov/public/attachments/FCC-23-107A1.pdf" },
      { title: "FCC - Telemarketing and Robocalls", url: "https://www.fcc.gov/general/telemarketing-and-robocalls" },
    ],
    implementsSurfaceIds: ["trim-ct-op-detected-blocked", "trim-ct-op-audit"],
    status: "wiring",
  },
  {
    id: "sol-12",
    consideration:
      "What opt-out, revocation, STOP-word, and suppression-list duties must Trim implement after an owner declines email, SMS, or phone outreach?",
    thesisGap:
      "A decline in one channel needs to suppress further unlawful outreach across all channels.",
    solution:
      "Maintain one suppression ledger across email, SMS, and phone with unsubscribe links, STOP handling, reasonable-means revocation intake, one-time confirmation where allowed, and timely opt-out honoring so that a decline in any channel prevents further unlawful outreach.",
    references: [
      { title: "FTC - CAN-SPAM Act Compliance Guide", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" },
      { title: "FCC - Targeting and Eliminating Unlawful Text Messages", url: "https://docs.fcc.gov/public/attachments/FCC-23-107A1.pdf" },
    ],
    implementsSurfaceIds: ["trim-ct-owner-decline", "trim-ct-op-detected-blocked", "trim-ct-op-audit"],
    status: "wiring",
  },
  {
    id: "sol-13",
    consideration:
      "How do Texas DTPA and Texas AG consumer-protection standards constrain urgency, appeal-deadline copy, free, no risk, contingency-only, and savings-estimate statements in unsolicited tax-services outreach?",
    thesisGap:
      "Deadline urgency and fee claims can create half-truth risk even when the technical statement is partly accurate.",
    solution:
      "Require claim review for deadline urgency, free, no risk, contingency-only, and savings-estimate language so that deadlines are factual, fee terms are complete, and Texas consumer-protection risk is not created by half-truths.",
    references: [
      { title: "Texas Attorney General - Consumer Rights", url: "https://www.oag.state.tx.us/consumer-protection/file-consumer-complaint/consumer-rights" },
      { title: "Texas Attorney General - File a Consumer Complaint", url: "https://texasattorneygeneral.gov/consumer-protection/file-consumer-complaint" },
    ],
    implementsSurfaceIds: ["trim-ct-owner-notice", "trim-ct-owner-fee-example", "trim-ct-owner-non-collapsible-fee"],
    status: "partial",
  },
  {
    id: "sol-14",
    consideration:
      "What substantiation file must exist before Trim publishes objective claims about over-assessment rates, estimated savings, average savings, success rate, or comparable-market value?",
    thesisGap:
      "Aggregate marketing claims need datasets, methods, sample limits, and approved wording before publication.",
    solution:
      "Keep a substantiation file for over-assessment rates, estimated savings, average savings, success rates, and comparable-market-value claims with datasets, methodology, sample limits, date range, reviewer, and exact approved wording so that objective advertising claims have a reasonable basis before publication.",
    references: [
      { title: "FTC - Advertising Substantiation Policy Statement", url: "https://www.ftc.gov/legal-library/browse/ftc-policy-statement-regarding-advertising-substantiation" },
      { title: "FTC - Advertising FAQ's Guide for Small Business", url: "https://www.ftc.gov/business-guidance/resources/advertising-faqs-guide-small-business" },
    ],
    implementsSurfaceIds: ["trim-ct-op-audit", "trim-ct-owner-analysis-framing", "trim-ct-owner-trust"],
    status: "wiring",
  },
  {
    id: "sol-15",
    consideration:
      "Do federal government-lookalike mail rules under 39 U.S.C. Section 3001 apply only to federal-government implications, and what Texas or local analogues govern mail that resembles county appraisal-district or ARB notices?",
    thesisGap:
      "Mail can be lawful in federal form yet misleading by overall county-government impression.",
    solution:
      "Treat federal lookalike-mail rules as the floor and apply FTC, Texas DTPA, state consumer-protection, and government-impersonation review to county or ARB resemblance so that mail is not lawful in form but misleading in overall local-government impression.",
    references: [
      { title: "39 U.S.C. Section 3001", url: "https://www.govinfo.gov/content/pkg/USCODE-2023-title39/html/USCODE-2023-title39-partIV-chap30-sec3001.htm" },
      { title: "USPS Publication 300-A", url: "https://about.usps.com/publications/pub300a/pub300a_v04_revision_072019_tech_004.htm" },
    ],
    implementsSurfaceIds: ["trim-ct-owner-non-affiliation", "trim-ct-owner-trust-bundle", "trim-ct-owner-county-verify"],
    status: "deferred",
  },
  {
    id: "sol-16",
    consideration:
      "For mailed notices, what minimum font size, placement, contrast, envelope placement, and repeated-disclosure pattern should be used for NOT A GOVERNMENT NOTICE and non-affiliation disclaimers?",
    thesisGap:
      "Disclaimers must be visible before the owner acts, not buried in fine print.",
    solution:
      "Use a conspicuous NOT A GOVERNMENT NOTICE and non-affiliation disclosure on the envelope, above the fold on the first page, near each CTA or QR code, and in at least the stricter applicable font, contrast, and disclosure-box standard so that disclaimers are visible before the owner acts.",
    references: [
      { title: "USPS Domestic Mail Manual archive", url: "https://pe.usps.com/archive/html/dmmarchive20041209/C031.htm" },
      { title: "USPS Publication 300-A", url: "https://about.usps.com/publications/pub300a/pub300a_v04_revision_072019_tech_004.htm" },
      { title: "California Business and Professions Code Section 17537.9", url: "https://california.public.law/codes/business_and_professions_code_section_17537.9" },
    ],
    implementsSurfaceIds: ["trim-ct-owner-non-affiliation", "trim-ct-owner-trust-bundle"],
    status: "partial",
  },
  {
    id: "sol-17",
    consideration:
      "Can Trim use county names, parcel IDs, appeal deadlines, official-looking envelopes, seals, courthouse imagery, map outlines, or government-style typography without creating impersonation or misleading-mail risk?",
    thesisGap:
      "Public-record specificity can become impersonation when combined with official visual language.",
    solution:
      "Allow county names, parcel IDs, and appeal deadlines only as factual references with source context while blocking seals, badges, official envelopes, courthouse imagery, government typography, and misleading map or notice layouts so that public-record specificity does not become impersonation.",
    references: [
      { title: "FTC - Impersonation Rule", url: "https://www.ftc.gov/business-guidance/blog/2024/02/new-impersonator-rule-gives-ftc-powerful-tool-protecting-consumers-businesses" },
      { title: "USPIS - Government Look-Alike Mail", url: "https://www.uspis.gov/news/scam-article/government-look-alike-mail" },
    ],
    implementsSurfaceIds: ["trim-ct-owner-parcel-recap", "trim-ct-owner-county-verify", "trim-ct-owner-non-affiliation"],
    status: "partial",
  },
  {
    id: "sol-18",
    consideration:
      "What extra disclosure or anti-phishing requirements apply when a mailed, emailed, or texted notice includes a QR code or personalized link to a parcel-specific served instance?",
    thesisGap:
      "Personalized links can look like phishing or fake-government credential capture unless the destination is clearly private.",
    solution:
      "Label every QR code and personalized link as leading to Trim's private site, show the destination domain, repeat non-affiliation, and avoid credential or payment requests that look governmental so that personalized access does not create phishing or fake-government risk.",
    references: [
      { title: "FTC - Impersonation Rule", url: "https://www.ftc.gov/business-guidance/blog/2024/02/new-impersonator-rule-gives-ftc-powerful-tool-protecting-consumers-businesses" },
      { title: "California DOJ - Property Tax Scam", url: "https://oag.ca.gov/consumers/general/prop_tax_scam" },
    ],
    implementsSurfaceIds: ["trim-ct-owner-trust-bundle", "trim-ct-owner-non-affiliation", "trim-ct-owner-county-verify"],
    status: "deferred",
  },
  {
    id: "sol-19",
    consideration:
      "What compliance lessons should Trim draw from public Owlue-class mailer warnings about county references, urgent deadlines, estimated savings, fine-print disclaimers, QR codes, and the overall impression of an unsolicited property-tax letter?",
    thesisGap:
      "Activation can fail if owners perceive the notice as official-looking or scammy even when individual disclaimers exist.",
    solution:
      "Apply an overall-impression review to county references, urgent deadlines, estimated savings, fine-print disclaimers, QR codes, and envelope design so that Trim avoids Owlue-class is this official or a scam perception before launch.",
    references: [
      { title: "Ink Free News - Assessor warns about mailers", url: "https://www.inkfreenews.com/2026/05/15/assessors-office-warns-about-misleading-property-tax-solicitation-mailers/" },
      { title: "News Now Warsaw - Misleading solicitation mailers", url: "https://www.newsnowwarsaw.com/kosciusko-county-assessors-office-warns-of-misleading-property-tax-solicitation-mailers/" },
    ],
    implementsSurfaceIds: ["trim-ct-owner-trust", "trim-ct-owner-non-affiliation", "trim-ct-owner-analysis-framing"],
    status: "partial",
  },
  {
    id: "sol-20",
    consideration:
      "Which public Owlue-style web or letter claims, such as reduce your property taxes, only pay if we save you money, maximize your savings, and testimonial savings, would be prohibited or require qualification under Texas PTC ethics and FTC substantiation rules?",
    thesisGap:
      "Public claims need qualification and substantiation before Trim mirrors competitor language.",
    solution:
      "Replace reduce your property taxes with seek a reduction, qualify only pay if we save you money with exact contingency conditions, avoid maximize your savings, and pair testimonials or savings examples with substantiation and typicality context so that public claims do not become guarantees or unsupported results.",
    references: [
      { title: "Owlue", url: "https://www.owlue.com/" },
      { title: "TDLR - PTC sanctions", url: "https://www.tdlr.texas.gov/enforcement/ptcsanctions.htm" },
      { title: "FTC - Advertising FAQ's Guide for Small Business", url: "https://www.ftc.gov/business-guidance/resources/advertising-faqs-guide-small-business" },
    ],
    implementsSurfaceIds: ["trim-ct-owner-analysis-framing", "trim-ct-owner-fee-example", "trim-ct-owner-non-collapsible-fee"],
    status: "partial",
  },
  {
    id: "sol-21",
    consideration:
      "For California assessment-reduction filing services, what disclosure-box, non-affiliation, no-guarantee, free-self-file, oral-solicitation, and no-prepayment requirements under Business and Professions Code Section 17537.9 would change Trim's first-touch notice?",
    thesisGap:
      "California first touch cannot simply reuse the Texas ALG notice shape.",
    solution:
      "Add California's assessment-reduction filing-service disclosure box, non-affiliation statement, no-guarantee statement, free-self-file disclosure, oral-solicitation script, and no-prepayment gate so that a California first touch changes before Trim uses the Texas ALG notice shape there.",
    references: [
      { title: "California Business and Professions Code Section 17537.9", url: "https://california.public.law/codes/business_and_professions_code_section_17537.9" },
      { title: "California DOJ - Property Tax Scam", url: "https://oag.ca.gov/consumers/general/prop_tax_scam" },
    ],
    implementsSurfaceIds: ["trim-ct-op-rollout-gate", "trim-ct-owner-non-affiliation", "trim-ct-owner-trust-bundle"],
    status: "deferred",
  },
  {
    id: "sol-22",
    consideration:
      "In California and Los Angeles County, what written-agent-authorization and tax-agent-registration rules prevent Trim from filing, signing, or claiming representation before owner authorization?",
    thesisGap:
      "Trim must not act or claim representation before both owner and jurisdiction authorization are satisfied.",
    solution:
      "Require California written agent authorization and Los Angeles tax-agent registration status before signing, filing, appearing, or claiming representation so that Trim does not act as an assessment-appeal agent before the Owner and jurisdiction have authorized it.",
    references: [
      { title: "California BOE - Agent Authorization", url: "https://www.boe.ca.gov/proptaxes/pdf/boe305ag.pdf" },
      { title: "California BOE - Property Tax Annotation 190.0017", url: "https://www.boe.ca.gov/proptaxes/pdf/190_0017.pdf" },
      { title: "Los Angeles County - Tax Agent Registration Rules", url: "https://assets-us-01.kc-usercontent.com/0234f496-d2b7-00b6-17a4-b43e949b70a2/88fb5ff7-071c-4238-a1b0-edd67f75c37d/Tax%20Agent%20Registration%20Rules.%20accessible.pdf" },
    ],
    implementsSurfaceIds: ["trim-ct-op-jurisdiction", "trim-ct-owner-agent-appointment", "trim-ct-op-rollout-gate"],
    status: "wiring",
  },
  {
    id: "sol-23",
    consideration:
      "In Georgia, how do the AG consumer guidance on private property-tax dispute letters and false-advertising law constrain guaranteed-reduction, legitimacy, self-file, upfront-fee, and verification copy?",
    thesisGap:
      "Georgia outreach must avoid private-letter scam patterns around legitimacy, self-file rights, and fees.",
    solution:
      "Use Georgia copy that discloses Trim as a private service, avoids guaranteed reductions, states the owner can verify and self-file with the county, and describes any upfront or contingency fee plainly so that outreach does not match the private-letter scam patterns warned about by state consumer guidance.",
    references: [
      { title: "Georgia Consumer Ed - Disputing Property Taxes", url: "https://consumered.georgia.gov/ask-ed/2011-07-01/disputing-property-taxes" },
      { title: "Georgia Code Section 10-1-421", url: "https://law.justia.com/codes/georgia/title-10/chapter-1/article-15/part-4/section-10-1-421/" },
    ],
    implementsSurfaceIds: ["trim-ct-op-rollout-gate", "trim-ct-owner-trust-bundle", "trim-ct-owner-county-verify"],
    status: "deferred",
  },
  {
    id: "sol-24",
    consideration:
      "In Illinois, where property-tax appeal representation can implicate attorney-only and unauthorized-practice rules, what may acquisition copy say about filing, negotiation, hearings, and who will represent an entity owner?",
    thesisGap:
      "Acquisition copy cannot advertise representation that would become unauthorized practice or attorney-only work.",
    solution:
      "Limit Illinois acquisition copy to permissible administrative help unless a qualified attorney or authorized representative is identified for entity representation, hearings, negotiation, or legal argument so that Trim does not advertise unauthorized practice of law.",
    references: [
      { title: "Illinois PTAB - Practice and Procedure", url: "https://www.ptab.illinois.gov/PractProc.html" },
      { title: "Illinois Administrative Code Title 86 Section 1910.30", url: "https://www.ilga.gov/ftp/JCAR/AdminCode/086/086019100000300R.html" },
      { title: "Illinois State Bar Association - Unlicensed Practice of Law", url: "https://www.isba.org/sections/statelocaltax/newsletter/2015/01/unlicensedpracticelawissuesillinois" },
    ],
    implementsSurfaceIds: ["trim-ct-op-rollout-gate", "trim-ct-op-jurisdiction", "trim-ct-owner-denial-reason"],
    status: "deferred",
  },
  {
    id: "sol-25",
    consideration:
      "In Florida, if Trim's appeal work is performed by or routed through attorneys, how do lawyer-advertising rules on predictions, guarantees, specific results, testimonials, and direct electronic solicitations constrain property-tax appeal copy?",
    thesisGap:
      "Attorney-backed property-tax copy may need lawyer-advertising review before outreach is sent.",
    solution:
      "Route Florida attorney-performed appeal advertising through lawyer-advertising review for predictions, guarantees, specific results, testimonials, and direct electronic solicitation rules so that attorney-backed property-tax copy complies before it is sent.",
    references: [
      { title: "Florida Bar News - Advertising Update", url: "https://www.floridabar.org/the-florida-bar-news/advertising-update/" },
      { title: "Florida Bar - Ethics Advertising FAQ", url: "https://www.floridabar.org/ethics/etad/faqexpand/" },
    ],
    implementsSurfaceIds: ["trim-ct-op-rollout-gate", "trim-ct-owner-analysis-framing", "trim-ct-op-audit"],
    status: "deferred",
  },
  {
    id: "sol-26",
    consideration:
      "In New York, how do attorney advertising, solicitation filing, recipient-list retention, and proposed assessment-grievance disclosure requirements affect mailed or emailed outreach for property-tax reduction services?",
    thesisGap:
      "New York legal-service solicitation may require labels, retention, filings, and evolving assessment-grievance disclosures.",
    solution:
      "Label and retain New York attorney advertising or solicitation materials, recipient lists, and required disclaimers where legal-service rules apply while tracking proposed assessment-grievance disclosures so that mail and email can be audited under New York solicitation standards.",
    references: [
      { title: "NYSBA - Attorney Advertising Q&A", url: "https://nysba.org/wp-content/uploads/2020/01/QA-Attorney_Advertising.pdf" },
      { title: "New York Senate Bill S5474", url: "https://www.nysenate.gov/legislation/bills/2025/S5474" },
    ],
    implementsSurfaceIds: ["trim-ct-op-rollout-gate", "trim-ct-op-audit", "trim-ct-owner-trust"],
    status: "deferred",
  },
  {
    id: "sol-27",
    consideration:
      "Which launch states have explicit property-tax-consultant or assessment-reduction solicitation rules comparable to Texas and California, and which rely mainly on general consumer-protection, attorney-advertising, or unauthorized-practice law?",
    thesisGap:
      "Channel and copy gates need to reflect each state's governing rule source before launch.",
    solution:
      "Maintain a state-by-state launch matrix separating explicit property-tax solicitation regimes in Texas and California from Georgia consumer-protection, Illinois representation and UPL, and Florida/New York attorney-advertising regimes so that channel and copy gates reflect the governing rule source.",
    references: [
      { title: "TDLR - PTC Laws and Rules", url: "https://www.tdlr.texas.gov/ptc/laws-rules.htm" },
      { title: "California Business and Professions Code Section 17537.9", url: "https://california.public.law/codes/business_and_professions_code_section_17537.9" },
      { title: "Georgia Consumer Ed - Disputing Property Taxes", url: "https://consumered.georgia.gov/ask-ed/2011-07-01/disputing-property-taxes" },
      { title: "Illinois PTAB - Practice and Procedure", url: "https://www.ptab.illinois.gov/PractProc.html" },
    ],
    implementsSurfaceIds: ["trim-ct-op-rollout-gate", "trim-ct-op-jurisdiction", "trim-ct-owner-trust"],
    status: "deferred",
  },
  {
    id: "sol-28",
    consideration:
      "For each state and outreach channel, what facts should block ALG notice delivery entirely versus route the case to compliance review: quantified savings, missing consultant registration, missing agent authorization, government-like layout, unavailable opt-out, or unsupported valuation claim?",
    thesisGap:
      "Trim needs state/channel delivery blockers, not just post-hoc review of risky outreach.",
    solution:
      "Hard-block delivery for missing licensure, missing authorization where authority is claimed, unauthorized filing automation, SMS without consent, unavailable opt-out, government-lookalike layout, or unsupported guaranteed savings, and route qualified estimates or novel state/channel variants to compliance review so that only legally supportable ALG notices are sent.",
    references: [
      { title: "TDLR - PTC sanctions", url: "https://www.tdlr.texas.gov/enforcement/ptcsanctions.htm" },
      { title: "FTC - CAN-SPAM Act Compliance Guide", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" },
      { title: "FCC - Targeting and Eliminating Unlawful Text Messages", url: "https://docs.fcc.gov/public/attachments/FCC-23-107A1.pdf" },
      { title: "FTC - Advertising Substantiation Policy Statement", url: "https://www.ftc.gov/legal-library/browse/ftc-policy-statement-regarding-advertising-substantiation" },
    ],
    implementsSurfaceIds: ["trim-ct-op-detected-blocked", "trim-ct-op-rollout-gate", "trim-ct-op-audit", "trim-ct-owner-notice"],
    status: "wiring",
  },
]);
