/**
 * Trust / Anti-Scam Perception Specialist — considerations (Trim, v2).
 * Domain: Owlue-class scam perception; trust kit; non-affiliation.
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

export const TRUST_ANTI_SCAM_ITEMS: SmeItem[] = withImplementation([
  {
    id: "trs-01",
    consideration:
      "What exact is-this-a-scam explanation should Trim give when an owner receives an unsolicited parcel-specific over-assessment notice, given Owlue-style coverage that frames the service as real but the mailer as a private solicitation rather than a government notice?",
    solution:
      "First-touch copy that says Trim is a private property-tax consulting service, this is not a government notice or tax bill, and these parcel facts come from public county assessment records so that an owner can understand the notice as a real commercial solicitation rather than a fake government demand or scam.",
    references: refs("https://www.claimsmaximizer.com/blog/owlue-property-tax-letter-washington", "https://www.inkfreenews.com/2026/05/15/assessors-office-warns-about-misleading-property-tax-solicitation-mailers/"),
    implementsSurfaceIds: ["trim-ct-owner-notice", "trim-ct-owner-trust", "trim-ct-owner-trust-bundle"],
    status: "deferred",
  },
  {
    id: "trs-02",
    consideration:
      "Which first-touch elements in Owlue-class mailers most often trigger scam perception: county name prominence, appeal-deadline urgency, property-specific savings estimates, government-like formatting, QR codes, or fine-print disclaimers?",
    solution:
      "Overall-impression review scoring county-name prominence, deadline urgency, property-specific savings, government-like formatting, QR/link presentation, and disclaimer visibility so that the strongest scam-perception cues are caught before outreach is mailed, emailed, or texted.",
    references: refs("https://www.inkfreenews.com/2026/05/15/assessors-office-warns-about-misleading-property-tax-solicitation-mailers/", "https://timesuniononline.com/stories/kosciusko-county-assessors-office-warns-homeowners-about-misleading-property-tax-solicitation,284359"),
    implementsSurfaceIds: ["trim-ct-owner-notice", "trim-ct-owner-trust", "trim-ct-owner-analysis-framing"],
    status: "deferred",
  },
  {
    id: "trs-03",
    consideration:
      "How prominent must Trim's non-affiliation language be to satisfy both Texas PTC ethics and the consumer-perception standard that fine print may not cure an overall government-like impression?",
    solution:
      "Non-affiliation language placed on the envelope, above the fold, beside the first CTA, beside any QR or link, and in the footer with visual weight comparable to county references so that Trim does not rely on fine print to cure a government-like impression.",
    references: refs("https://www.tdlr.texas.gov/enforcement/ptcsanctions.htm", "https://license.state.tx.us/ptc/forms/PTC001%20Property%20Tax%20Consultant%20Registration%20Application.pdf", "https://www.inkfreenews.com/2026/05/15/assessors-office-warns-about-misleading-property-tax-solicitation-mailers/"),
    implementsSurfaceIds: ["trim-ct-owner-non-affiliation", "trim-ct-owner-trust", "trim-ct-owner-notice"],
    status: "deferred",
  },
  {
    id: "trs-04",
    consideration:
      "What wording should Trim test for the required disclaimer so owners understand not affiliated with the county, appraisal district, ARB, tax office, or any government agency without interpreting the disclaimer itself as proof that the notice is suspicious?",
    solution:
      "Plain disclaimer wording such as Trim is a private company. We are not your county, appraisal district, ARB, tax office, or any government agency. You can verify this property record on the official county site before deciding so that owners understand the boundary without reading the disclaimer itself as proof of fraud.",
    references: refs("https://license.state.tx.us/ptc/forms/PTC001%20Property%20Tax%20Consultant%20Registration%20Application.pdf", "https://oag.ca.gov/consumers/general/prop_tax_scam"),
    implementsSurfaceIds: ["trim-ct-owner-non-affiliation", "trim-ct-owner-trust"],
    status: "deferred",
  },
  {
    id: "trs-05",
    consideration:
      "Under Texas TDLR ethics, what trust risk is created if Trim names a county or appraisal district before authorization, and what language prevents implying that Trim represents the county, the appraisal district, or the owner?",
    solution:
      "County-reference copy that labels each county or CAD name as the public-record source and says Trim cannot represent the county or act for the owner until authorization is signed so that factual specificity does not imply Trim speaks for the government or already represents the owner.",
    references: refs("https://www.tdlr.texas.gov/enforcement/ptcsanctions.htm", "https://license.state.tx.us/ptc/forms/PTC001%20Property%20Tax%20Consultant%20Registration%20Application.pdf"),
    implementsSurfaceIds: ["trim-ct-owner-notice", "trim-ct-owner-non-affiliation", "trim-ct-owner-authorize"],
    status: "deferred",
  },
  {
    id: "trs-06",
    consideration:
      "How should Trim present no upfront fee, contingency-only, and you pay only if savings are documented so the claim functions as a trust signal rather than as a high-pressure sales hook or hidden-fee concern?",
    solution:
      "Fee proof block stating No upfront fee. No fee if there is no documented reduction. If the county record shows a reduction, Trim invoices the agreed percentage of first-year measured savings so that contingency pricing reads as risk transfer instead of a pressure hook or hidden-fee setup.",
    references: refs("https://www.claimsmaximizer.com/blog/owlue-property-tax-letter-washington", "https://www.owlue.com/pricing", "https://oag.ca.gov/consumers/general/prop_tax_scam"),
    implementsSurfaceIds: ["trim-ct-owner-trust", "trim-ct-owner-fee-example", "trim-ct-owner-invoice"],
    status: "deferred",
  },
  {
    id: "trs-07",
    consideration:
      "When do contingency percentages in property-tax appeal mailers create distrust because owners compare them to free county self-appeal paths, and how should Trim disclose the owner's self-file option without undermining commercial-value positioning?",
    solution:
      "Self-file disclosure adjacent to the fee schedule stating that the owner may verify and file directly with the county without hiring Trim so that owners can compare the free public path while still seeing Trim's value as analysis, preparation, representation, and deadline management.",
    references: refs("https://www.claimsmaximizer.com/blog/owlue-property-tax-letter-washington", "https://www.ajc.com/news/2025/07/some-companies-offer-paid-help-with-taxes-county-officials-say-its-free/", "https://oag.ca.gov/consumers/general/prop_tax_scam"),
    implementsSurfaceIds: ["trim-ct-owner-trust", "trim-ct-owner-consent", "trim-ct-owner-authorize"],
    status: "deferred",
  },
  {
    id: "trs-08",
    consideration:
      "For commercial and multifamily owners, which trust proof matters more than homeowner-oriented you-can-file-for-free messaging: entity name accuracy, parcel/account ID accuracy, ownership portfolio context, licensed representative identity, or documented savings calculation?",
    solution:
      "Commercial-owner trust hierarchy that prioritizes exact entity name, parcel/account ID, situs address, portfolio context, licensed representative identity, and documented savings math before homeowner-style free-file warnings so that small commercial and multifamily owners see Trim matching their actual ownership facts.",
    references: refs("https://www.ajc.com/news/2025/07/some-companies-offer-paid-help-with-taxes-county-officials-say-its-free/", "https://hcad.org/property-search/search-help", "https://www.dallascad.org/SearchOwner.aspx?type=Homestead"),
    implementsSurfaceIds: ["trim-ct-owner-parcel-recap", "trim-ct-owner-entity-identity", "trim-ct-owner-notice"],
    status: "deferred",
  },
  {
    id: "trs-09",
    consideration:
      "How should Trim separate brand trust from verifiability so the notice relies on county-record match, parcel ID, and public valuation evidence rather than asking the owner to trust an unfamiliar brand first?",
    solution:
      "Verification-first landing page that shows the county record match, parcel/account ID, public assessed value, evidence summary, and official CAD lookup path before brand claims or signup so that trust rests on reproducible public facts instead of unfamiliar-brand credibility.",
    references: refs("https://www.claimsmaximizer.com/blog/owlue-property-tax-letter-washington", "https://hcad.org/quicksearch/", "https://traviscad.org/propertysearch/"),
    implementsSurfaceIds: ["trim-ct-owner-notice", "trim-ct-owner-county-verify", "trim-ct-owner-parcel-recap"],
    status: "deferred",
  },
  {
    id: "trs-10",
    consideration:
      "What county-site verification flow feels least like phishing: typing the CAD domain manually, using a visible county URL, scanning a QR code, clicking a personalized link, or matching a parcel/account number from a mailed notice?",
    solution:
      "County-site verification flow that asks the owner to type or open the visible official CAD domain and copy the displayed account or parcel ID, with QR codes and personalized links clearly labeled as Trim shortcuts only so that the safest path does not feel like phishing.",
    references: refs("https://www.inkfreenews.com/2026/05/15/assessors-office-warns-about-misleading-property-tax-solicitation-mailers/", "https://hcad.org/quicksearch/", "https://www.dallascad.org/SearchAcct.aspx"),
    implementsSurfaceIds: ["trim-ct-owner-county-verify", "trim-ct-owner-trust", "trim-ct-owner-notice"],
    status: "deferred",
  },
  {
    id: "trs-11",
    consideration:
      "What should a county-verification link display before any Trim login or consent step so an owner can independently confirm county name, account number, owner/entity name, situs address, and assessed value?",
    solution:
      "Pre-login verification panel displaying county name, official CAD URL, account or parcel number, owner/entity name, situs address, tax year, assessed value, and record-as-of date so that the owner can confirm the notice against public records before any Trim credential, consent, or payment step.",
    references: refs("https://hcad.org/quicksearch/", "https://www.dallascad.org/SearchAcct.aspx", "https://traviscad.org/propertysearch/"),
    implementsSurfaceIds: ["trim-ct-owner-county-verify", "trim-ct-owner-parcel-recap", "trim-ct-owner-notice"],
    status: "deferred",
  },
  {
    id: "trs-12",
    consideration:
      "Which counties support stable deep links to a specific property record, and where must Trim fall back to instructions for manual search because links are session-bound, search-form-only, browser-sensitive, or likely to break?",
    solution:
      "County-link capability registry marking stable property deep links, search-form-only portals, session-bound URLs, browser-sensitive flows, and manual-search fallbacks so that Trim sends direct links only where they reliably reproduce the official property record.",
    references: refs("https://hcad.org/property-search/property-search", "https://www.dallascad.org/SearchAcct.aspx", "https://travis.prodigycad.com/property-search"),
    implementsSurfaceIds: ["trim-ct-op-county-data", "trim-ct-owner-county-verify"],
    status: "deferred",
  },
  {
    id: "trs-13",
    consideration:
      "How should Trim format parcel IDs, account numbers, geographic IDs, and CAD account identifiers by county so owners can copy them successfully into official portals without hyphens, spaces, suffixes, or wrong tax-year context?",
    solution:
      "County-specific identifier formatter with display value, raw copy value, tax-year label, search-field label, and paste instructions so that owners can enter parcel IDs, account numbers, geographic IDs, and CAD account identifiers into official portals without formatting failures.",
    references: refs("https://hcad.org/property-search/search-help", "https://www.dallascad.org/SearchAcct.aspx", "https://maps.dcad.org/prd/dpm/help.htm", "https://traviscad.org/propertysearch/"),
    implementsSurfaceIds: ["trim-ct-owner-county-verify", "trim-ct-owner-parcel-recap", "trim-ct-op-county-data"],
    status: "deferred",
  },
  {
    id: "trs-14",
    consideration:
      "What errors in parcel ID or address formatting are most likely to make a legitimate notice feel fake because the owner cannot reproduce Trim's county-record lookup on the CAD site?",
    solution:
      "Verification QA blocker for leading zeros, removed or added hyphens, account-versus-geographic-ID swaps, suffix loss, situs-address abbreviations, owner-entity punctuation, and wrong tax-year context so that a legitimate notice does not feel fake because the CAD search cannot be reproduced.",
    references: refs("https://hcad.org/property-search/search-help", "https://www.dallascad.org/SearchAddr.aspx", "https://traviscad.org/propertysearch/"),
    implementsSurfaceIds: ["trim-ct-owner-county-verify", "trim-ct-owner-parcel-recap", "trim-ct-op-county-data"],
    status: "deferred",
  },
  {
    id: "trs-15",
    consideration:
      "How should Trim explain that parcel-specific numbers come from public assessment records so the owner understands why Trim knows the property, without creating surveillance, data-broker, or privacy alarm?",
    solution:
      "Public-record provenance note explaining that Trim found the property through county assessment rolls and uses the data only to analyze possible over-assessment so that parcel specificity feels verifiable rather than surveillance-like or data-broker invasive.",
    references: refs("https://www.claimsmaximizer.com/blog/owlue-property-tax-letter-washington", "https://hcad.org/quicksearch/", "https://www.dallascad.org/SearchAcct.aspx"),
    implementsSurfaceIds: ["trim-ct-owner-trust", "trim-ct-owner-notice", "trim-ct-owner-parcel-recap"],
    status: "deferred",
  },
  {
    id: "trs-16",
    consideration:
      "What channel ordering creates the highest trust for first touch among commercial owners: physical mail to the tax mailing address, email to a business domain, phone call, SMS, or a mail-first sequence followed by digital confirmation?",
    solution:
      "Mail-first channel sequence to the tax mailing address followed by optional business-domain email confirmation and owner-initiated digital access so that first contact begins in the channel most anchored to the public property record.",
    references: refs("https://www.ajc.com/news/2025/07/some-companies-offer-paid-help-with-taxes-county-officials-say-its-free/", "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business", "https://www.fcc.gov/general/telemarketing-and-robocalls"),
    implementsSurfaceIds: ["trim-ct-owner-notice", "trim-ct-owner-trust", "trim-ct-op-county-data"],
    status: "deferred",
  },
  {
    id: "trs-17",
    consideration:
      "For SMS outreach, what trust harms arise from sending a parcel-specific savings link or QR-style short link before prior relationship, even if the message is technically compliant?",
    solution:
      "No-first-touch-SMS rule for parcel-specific savings links, short links, and QR-style URLs unless the owner has already consented to texts so that a technically compliant text does not trigger phishing or smishing perception.",
    references: refs("https://www.fcc.gov/general/telemarketing-and-robocalls", "https://docs.fcc.gov/public/attachments/FCC-23-107A1.pdf", "https://www.inkfreenews.com/2026/05/15/assessors-office-warns-about-misleading-property-tax-solicitation-mailers/"),
    implementsSurfaceIds: ["trim-ct-owner-notice", "trim-ct-owner-trust"],
    status: "deferred",
  },
  {
    id: "trs-18",
    consideration:
      "For email outreach, what sender-domain, subject-line, physical-address, unsubscribe, and no-attachment practices help the message read as a legitimate commercial solicitation rather than phishing?",
    solution:
      "Email authenticity checklist requiring a Trim-owned sender domain, truthful subject line, visible physical address, unsubscribe, no attachments, no credential request, and plain-text official CAD URL references so that outreach reads as a legitimate commercial message rather than phishing.",
    references: refs("https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business", "https://www.ftc.gov/business-guidance/blog/2024/02/new-impersonator-rule-gives-ftc-powerful-tool-protecting-consumers-businesses"),
    implementsSurfaceIds: ["trim-ct-owner-notice", "trim-ct-owner-trust", "trim-ct-owner-county-verify"],
    status: "deferred",
  },
  {
    id: "trs-19",
    consideration:
      "For mailed outreach, which envelope and letter design choices should Trim avoid because consumer-protection sources associate them with government-lookalike property-tax scams: official seals, processing-center names, payment coupons, threatening deadlines, or tax-bill typography?",
    solution:
      "Mail design ban on official seals, courthouse or ARB badges, processing center sender names, payment coupons, tax-bill typography, threatening deadlines, and government-window-envelope cues so that the piece cannot be mistaken for a county bill, penalty notice, or official summons.",
    references: refs("https://oag.ca.gov/consumers/general/prop_tax_scam", "https://www.uspis.gov/news/scam-article/government-look-alike-mail", "https://www.inkfreenews.com/2026/05/15/assessors-office-warns-about-misleading-property-tax-solicitation-mailers/"),
    implementsSurfaceIds: ["trim-ct-owner-notice", "trim-ct-owner-trust", "trim-ct-owner-non-affiliation"],
    status: "deferred",
  },
  {
    id: "trs-20",
    consideration:
      "How should Trim express appeal deadlines so they help owners act before windows close without recreating the Owlue criticism that a generic deadline can be incomplete or pressure-inducing?",
    solution:
      "Deadline copy template that names the county, tax year, source, and date while saying verify the deadline on the official CAD site and avoiding countdown pressure so that urgency helps owners preserve rights without recreating Owlue-style pressure concerns.",
    references: refs("https://www.claimsmaximizer.com/blog/owlue-property-tax-letter-washington", "https://app.leg.wa.gov/rcw/default.aspx?cite=84.40.038", "https://www.inkfreenews.com/2026/05/15/assessors-office-warns-about-misleading-property-tax-solicitation-mailers/"),
    implementsSurfaceIds: ["trim-ct-owner-notice", "trim-ct-owner-analysis-framing", "trim-ct-op-appeal-window"],
    status: "deferred",
  },
  {
    id: "trs-21",
    consideration:
      "What wording should distinguish estimated excess tax from a promised savings result so the number remains useful trust proof but does not read as unverifiable, guaranteed, or misleading?",
    solution:
      "Estimated-excess label and formula showing assessed value, evidence-supported value, tax-rate assumption, analysis estimate, and not guaranteed; actual savings depend on appeal outcome so that the number supports verification without reading as a promised result.",
    references: refs("https://license.state.tx.us/ptc/forms/PTC001%20Property%20Tax%20Consultant%20Registration%20Application.pdf", "https://www.inkfreenews.com/2026/05/15/assessors-office-warns-about-misleading-property-tax-solicitation-mailers/", "https://www.ftc.gov/legal-library/browse/ftc-policy-statement-regarding-advertising-substantiation"),
    implementsSurfaceIds: ["trim-ct-owner-analysis-framing", "trim-ct-owner-notice", "trim-ct-owner-fee-example"],
    status: "deferred",
  },
  {
    id: "trs-22",
    consideration:
      "Which proof points should Trim show before requesting signature or card/ACH authorization: county record match, valuation evidence preview, consultant registration/licensure, fee schedule, sample savings calculation, or self-file disclosure?",
    solution:
      "Pre-sign trust sequence requiring county-record match, valuation-evidence preview, consultant registration or licensure identity, fee schedule, sample savings calculation, and self-file disclosure before signature or card/ACH authorization so that owners see the proof before Trim asks for authority or payment credentials.",
    references: refs("https://www.tdlr.texas.gov/enforcement/ptcsanctions.htm", "https://hcad.org/quicksearch/", "https://www.claimsmaximizer.com/blog/owlue-property-tax-letter-washington"),
    implementsSurfaceIds: ["trim-ct-owner-authorize", "trim-ct-owner-county-verify", "trim-ct-owner-trust"],
    status: "deferred",
  },
  {
    id: "trs-23",
    consideration:
      "How should Trim present licensed agent-of-record information so it increases trust and compliance confidence without making the licensed person look like a government employee or county-designated representative?",
    solution:
      "Licensed agent-of-record card listing the registered consultant's name, registration or license status, Trim role, and not a county, CAD, ARB, or government employee statement so that licensure increases confidence without creating a false government-representative signal.",
    references: refs("https://www.tdlr.texas.gov/enforcement/ptcsanctions.htm", "https://statutes.capitol.texas.gov/Docs/OC/htm/OC.1152.htm"),
    implementsSurfaceIds: ["trim-ct-op-licensed-roster", "trim-ct-owner-trust", "trim-ct-owner-non-affiliation"],
    status: "deferred",
  },
  {
    id: "trs-24",
    consideration:
      "What extra trust language is needed when the owner is an LLC, partnership, trust, REIT, or property manager rather than an individual homeowner, especially around who may authorize representation and who will receive the invoice?",
    solution:
      "Entity-authorization panel capturing owning entity, signer name, signer title or authority basis, property-manager relationship if any, invoice recipient, and billing contact so that LLCs, partnerships, trusts, REITs, and managers know who may bind the account and who will receive the fee invoice.",
    references: refs("https://hcad.org/quicksearch/", "https://www.dallascad.org/SearchOwner.aspx?type=Homestead", "https://traviscad.org/propertysearch/"),
    implementsSurfaceIds: ["trim-ct-owner-entity-identity", "trim-ct-owner-signer-title", "trim-ct-owner-invoice"],
    status: "deferred",
  },
  {
    id: "trs-25",
    consideration:
      "What trust kit should appear consistently across mail, email, SMS landing pages, and the served instance so channel changes do not make Trim look like a different company or a spoofed county workflow?",
    solution:
      "Cross-channel trust kit with the same Trim legal name, domain, postal address, non-affiliation disclaimer, parcel/account ID, official CAD verification path, fee terms, and opt-out controls across mail, email, SMS landing pages, and served instances so that channel changes do not look like spoofed county or third-party workflows.",
    references: refs("https://www.ftc.gov/business-guidance/blog/2024/02/new-impersonator-rule-gives-ftc-powerful-tool-protecting-consumers-businesses", "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business", "https://www.fcc.gov/general/telemarketing-and-robocalls"),
    implementsSurfaceIds: ["trim-ct-owner-trust-bundle", "trim-ct-owner-non-affiliation", "trim-ct-owner-county-verify"],
    status: "deferred",
  },
  {
    id: "trs-26",
    consideration:
      "What county-by-county verification QA should Trim run before launch to confirm that the named county, portal URL, parcel/account ID, owner name, address, assessed value, and tax year in the notice are all independently reproducible by a skeptical owner?",
    solution:
      "County-by-county launch QA requiring a skeptical-owner replay of the notice lookup for county name, portal URL, account or parcel ID, owner/entity name, address, assessed value, and tax year, with dated evidence retained so that every parcel-specific claim is independently reproducible before outreach goes live.",
    references: refs("https://hcad.org/quicksearch/", "https://www.dallascad.org/SearchAcct.aspx", "https://traviscad.org/propertysearch/"),
    implementsSurfaceIds: ["trim-ct-op-county-data", "trim-ct-owner-county-verify", "trim-ct-owner-notice"],
    status: "deferred",
  },
]);
