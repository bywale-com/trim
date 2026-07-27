/**
 * Tax / Accounting Treatment Specialist — considerations (Trim, v2).
 * Domain: expense reduction vs income; 1099 on Trim fee; multi-year savings booking.
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

export const TAX_ACCOUNTING_ITEMS: SmeItem[] = withImplementation([
  {
    id: "tax-01",
    consideration:
      "When a business owner receives a current-year property tax reduction before the bill is paid, should the owner treat the result as a lower property tax expense rather than income, and what bill or county documentation is enough support for that treatment?",
    solution:
      "Current-year bill-correction treatment that records a prepayment reduction as lower property-tax expense with the corrected bill, assessment order, county notice, or tax statement attached so that owners do not book income for a tax cost that was never paid or deducted.",
    references: refs("https://www.irs.gov/pub/irs-prior/p535--2022.pdf", "https://www.irs.gov/publications/p538"),
    implementsSurfaceIds: ["trim-ct-owner-authorize", "trim-ct-owner-invoice"],
    status: "deferred",
  },
  {
    id: "tax-02",
    consideration:
      "When a business pays the original property tax bill and receives a refund in the same tax year, should the owner reduce current-year property tax expense, record other income, or use a different presentation for book and tax records?",
    solution:
      "Same-year refund presentation that reverses or reduces current-year property-tax expense when the original bill and refund land in the same tax year so that book and tax records show the net tax cost instead of artificial income.",
    references: refs("https://www.irs.gov/pub/irs-prior/p535--2022.pdf", "https://www.irs.gov/publications/p525"),
    implementsSurfaceIds: ["trim-ct-owner-reduction-detail", "trim-ct-owner-invoice"],
    status: "deferred",
  },
  {
    id: "tax-03",
    consideration:
      "When a business receives a refund in a later year for property taxes deducted in a prior year, how should the owner apply the federal tax benefit rule to determine whether the refund is taxable income?",
    solution:
      "Prior-year recovery worksheet that compares the refunded amount to the prior deduction and the tax saved by that deduction so that only the portion that produced a federal tax benefit is included in income.",
    references: refs("https://www.irs.gov/pub/irs-prior/p535--2022.pdf", "https://www.irs.gov/publications/p525", "https://www.law.cornell.edu/uscode/text/26/111"),
    implementsSurfaceIds: ["trim-ct-owner-reduction-detail", "trim-ct-owner-invoice", "trim-ct-op-collections"],
    status: "deferred",
  },
  {
    id: "tax-04",
    consideration:
      "For a cash-method business that pays contested property taxes before an appeal is resolved, when is the tax deduction taken and when is any later refund included or excluded under the tax benefit rule?",
    solution:
      "Cash-method contested-tax tracker that deducts paid property taxes when paid and applies the tax-benefit rule to any later refund so that appeal timing does not move a cash taxpayer off actual payment and recovery events.",
    references: refs("https://www.irs.gov/publications/p538", "https://www.law.cornell.edu/cfr/text/26/1.461-2"),
    implementsSurfaceIds: ["trim-ct-owner-status", "trim-ct-owner-invoice"],
    status: "deferred",
  },
  {
    id: "tax-05",
    consideration:
      "For an accrual-method business, when do real property taxes accrue, when can the taxpayer elect ratable accrual, and how does that timing interact with Trim-filed appeals that contest the assessment?",
    solution:
      "Accrual-method real-property-tax calendar with all-events, recurring-item, ratable-accrual-election, and contest-status fields so that ordinary accrual timing is separated from assessment amounts still being contested through Trim.",
    references: refs("https://www.law.cornell.edu/uscode/text/26/461", "https://www.irs.gov/publications/p538"),
    implementsSurfaceIds: ["trim-ct-owner-status", "trim-ct-owner-invoice", "trim-ct-op-audit"],
    status: "deferred",
  },
  {
    id: "tax-06",
    consideration:
      "If an accrual-method owner pays or transfers funds for a contested property tax liability while the appeal remains open, when does section 461(f) allow deduction and how should a later refund be handled?",
    solution:
      "Section 461(f) contested-liability workflow requiring payment or transfer beyond the owner's control, existence of an asserted liability, and continued contest tracking so that accrual owners deduct qualifying contested taxes before final resolution and tax-benefit any later refund.",
    references: refs("https://www.law.cornell.edu/uscode/text/26/461", "https://www.law.cornell.edu/cfr/text/26/1.461-2"),
    implementsSurfaceIds: ["trim-ct-owner-status", "trim-ct-owner-invoice", "trim-ct-op-audit"],
    status: "deferred",
  },
  {
    id: "tax-07",
    consideration:
      "If property taxes were capitalized into property basis, development costs, inventory, or uniform-capitalization accounts instead of deducted as a period expense, should a later reduction or refund adjust basis, reduce capitalized cost, or create income?",
    solution:
      "Capitalized-tax classifier that routes reductions or refunds against property basis, development cost, inventory, or uniform-capitalization pools when the original tax was capitalized so that Trim outcomes reverse the original cost treatment instead of defaulting to period income.",
    references: refs("https://www.irs.gov/publications/p551", "https://www.irs.gov/publications/p538"),
    implementsSurfaceIds: ["trim-ct-owner-invoice", "trim-ct-owner-reduction-detail"],
    status: "deferred",
  },
  {
    id: "tax-08",
    consideration:
      "Under GAAP, before an assessment appeal is resolved, should an expected property tax refund or reduction be treated as a gain contingency, a receivable, an expense reduction, or only a disclosure item?",
    solution:
      "GAAP gain-contingency gate that blocks recognition of expected appeal recoveries before realization or realizability and permits disclosure only when appropriate so that unresolved assessment appeals are not booked as premature receivables or gains.",
    references: refs("https://viewpoint.pwc.com/dt/us/en/pwc/accounting_guides/financial_statement_/financial_statement___18_US/chapter_23_commitmen_US/235_gain_contingenci_US.html", "https://dart.deloitte.com/USDART/home/codification/liabilities/asc450-10/deloitte-s-roadmap-contingencies-loss-recoveries/chapter-3-gain-contingencies/3-1-overview"),
    implementsSurfaceIds: ["trim-ct-owner-status", "trim-ct-owner-analysis-framing"],
    status: "deferred",
  },
  {
    id: "tax-09",
    consideration:
      "Under GAAP, at what point does a county settlement, ARB order, corrected tax bill, refund notice, or cash receipt make a property tax appeal gain realized or realizable for recognition?",
    solution:
      "Recognition-evidence checklist for settlement agreements, ARB orders, corrected bills, refund notices, and cash receipts so that GAAP recognition starts when the county action makes the reduction realized or realizable.",
    references: refs("https://dart.deloitte.com/USDART/home/codification/liabilities/asc450-10/deloitte-s-roadmap-contingencies-loss-recoveries/chapter-3-gain-contingencies/3-3-application-gain-contingency-model", "https://viewpoint.pwc.com/dt/us/en/pwc/accounting_guides/financial_statement_/financial_statement___18_US/chapter_23_commitmen_US/235_gain_contingenci_US.html"),
    implementsSurfaceIds: ["trim-ct-owner-reduction-detail", "trim-ct-owner-invoice", "trim-ct-op-audit"],
    status: "deferred",
  },
  {
    id: "tax-10",
    consideration:
      "For a prospective assessment reduction that lowers future tax bills but does not create a refund receivable, should owners recognize only lower property tax expense in future periods, or can any multi-year expected savings be recognized earlier for GAAP or tax purposes?",
    solution:
      "Prospective-savings policy that records lower property-tax expense only in the future periods covered by reduced bills so that multi-year expected savings are not accelerated before a refund receivable or current obligation reduction exists.",
    references: refs("https://www.irs.gov/publications/p538", "https://dart.deloitte.com/USDART/home/codification/liabilities/asc450-10/deloitte-s-roadmap-contingencies-loss-recoveries/chapter-3-gain-contingencies/3-1-overview"),
    implementsSurfaceIds: ["trim-ct-owner-reduction-detail", "trim-ct-owner-status", "trim-ct-owner-invoice"],
    status: "deferred",
  },
  {
    id: "tax-11",
    consideration:
      "Should Trim's contingency fee be booked by the owner as a deductible professional service, tax consulting expense, legal expense, reduction of refund proceeds, capitalized cost, or another category depending on who performs the appeal work?",
    solution:
      "Trim-fee category selector for tax consulting, professional service, legal service, refund-offset display, or capitalized cost treatment based on the work performed and the owner's original tax treatment so that the fee follows ordinary-and-necessary or capitalization rules instead of a single hard-coded account.",
    references: refs("https://www.irs.gov/pub/irs-prior/p535--2022.pdf", "https://www.irs.gov/publications/p551"),
    implementsSurfaceIds: ["trim-ct-owner-authorize", "trim-ct-owner-fee-example", "trim-ct-owner-invoice"],
    status: "deferred",
  },
  {
    id: "tax-12",
    consideration:
      "If Trim's fee is calculated as a percentage of first-year savings but charged after the reduction lands, when should a cash-method or accrual-method owner deduct the fee for federal tax purposes?",
    solution:
      "Contingency-fee timing rule that deducts the fee when paid for cash-method owners and when fixed, invoiced or due, and economically performed for accrual-method owners so that no deduction is taken before the reduction lands and Trim has earned the fee.",
    references: refs("https://www.irs.gov/publications/p538", "https://www.irs.gov/pub/irs-prior/p535--2022.pdf"),
    implementsSurfaceIds: ["trim-ct-owner-invoice", "trim-ct-owner-contingency-lock", "trim-ct-op-collections"],
    status: "deferred",
  },
  {
    id: "tax-13",
    consideration:
      "Should a business owner that pays Trim by ACH or check issue Form 1099-NEC for Trim's contingency fee, and how do the service-payment threshold, payee entity type, and corporate exemption affect that answer?",
    solution:
      "Owner 1099 decision tree using payment method, $600 service threshold, W-9 entity classification, corporate exemption, and attorney exceptions so that ACH or check payments to Trim are reported only when Form 1099 rules require it.",
    references: refs("https://www.irs.gov/instructions/i1099mec", "https://www.irs.gov/forms-pubs/about-form-w-9"),
    implementsSurfaceIds: ["trim-ct-owner-invoice", "trim-ct-op-collections", "trim-ct-op-invoice-collection"],
    status: "deferred",
  },
  {
    id: "tax-14",
    consideration:
      "If Trim is organized as a corporation, LLC taxed as a corporation, partnership, disregarded entity, or attorney-affiliated firm, which W-9 fields should the owner rely on to decide whether a 1099 is required?",
    solution:
      "W-9 reliance map that reads Trim's name, business name, federal tax classification, exempt-payee code, TIN, address, and signature date so that the owner can decide corporation, partnership, disregarded-entity, or attorney-affiliated reporting without guessing from branding.",
    references: refs("https://www.irs.gov/forms-pubs/about-form-w-9", "https://www.irs.gov/instructions/i1099mec"),
    implementsSurfaceIds: ["trim-ct-owner-invoice", "trim-ct-owner-upload", "trim-ct-op-collections"],
    status: "deferred",
  },
  {
    id: "tax-15",
    consideration:
      "If Trim routes an appeal through a law firm, attorney employee, or attorney vendor, when are payments reportable as attorney fees on Form 1099-NEC versus gross proceeds to attorneys on Form 1099-MISC?",
    solution:
      "Attorney-payment classifier that separates direct legal-service fees reportable on Form 1099-NEC from gross proceeds paid to attorneys reportable on Form 1099-MISC so that law-firm routing does not get hidden inside ordinary vendor reporting.",
    references: refs("https://www.irs.gov/instructions/i1099mec"),
    implementsSurfaceIds: ["trim-ct-owner-invoice", "trim-ct-op-licensed-roster", "trim-ct-op-collections"],
    status: "deferred",
  },
  {
    id: "tax-16",
    consideration:
      "If the owner pays Trim by credit card, debit card, or a third-party payment network, should the owner exclude that payment from Form 1099-NEC or 1099-MISC reporting because Form 1099-K rules apply instead?",
    solution:
      "Payment-card exclusion rule that suppresses owner-issued 1099-NEC or 1099-MISC reporting for credit-card, debit-card, and third-party-network payments so that the payment settlement entity's Form 1099-K regime is not duplicated.",
    references: refs("https://www.irs.gov/instructions/i1099mec", "https://www.irs.gov/instructions/i1099k"),
    implementsSurfaceIds: ["trim-ct-owner-invoice", "trim-ct-op-collections"],
    status: "deferred",
  },
  {
    id: "tax-17",
    consideration:
      "What W-9 collection, TIN validation, backup withholding, and vendor master data should Trim provide or support so business owners can treat Trim as a compliant vendor?",
    solution:
      "Vendor-compliance packet with signed W-9, TIN match status, exemption codes, remittance address, backup-withholding status, and payment-method metadata so that business owners can treat Trim as a clean vendor in their master data.",
    references: refs("https://www.irs.gov/forms-pubs/about-form-w-9", "https://www.irs.gov/instructions/i1099mec"),
    implementsSurfaceIds: ["trim-ct-owner-invoice", "trim-ct-owner-trust", "trim-ct-op-collections"],
    status: "deferred",
  },
  {
    id: "tax-18",
    consideration:
      "For a multi-year appeal that changes assessed value for more than one tax year, how should owners split the result among prior-year refunds, current-year expense reductions, and prospective future bill reductions?",
    solution:
      "Multi-year appeal allocation schedule that splits each outcome by tax year into prior-year refund, current-year expense reduction, and prospective bill reduction so that tax-benefit, expense, and future-period treatment follow the year affected.",
    references: refs("https://www.irs.gov/pub/irs-prior/p535--2022.pdf", "https://www.irs.gov/publications/p538", "https://www.irs.gov/publications/p525"),
    implementsSurfaceIds: ["trim-ct-owner-reduction-detail", "trim-ct-owner-invoice", "trim-ct-owner-status"],
    status: "deferred",
  },
  {
    id: "tax-19",
    consideration:
      "For an LLC or partnership owner, is a recovered prior property tax deduction a separately stated tax-benefit-rule item, ordinary income, or a reduction of current tax expense on Form 1065 and Schedule K-1?",
    solution:
      "Partnership recovery-reporting classifier that identifies whether a recovered prior property-tax deduction is ordinary income, a current expense reduction, or a separately stated item on Form 1065 and Schedule K-1 so that partner-level tax-benefit consequences are not lost in a generic operating line.",
    references: refs("https://www.irs.gov/pub/irs-wd/0909032.pdf", "https://www.irs.gov/publications/p541", "https://www.irs.gov/instructions/i1065"),
    implementsSurfaceIds: ["trim-ct-owner-entity-identity", "trim-ct-owner-invoice"],
    status: "deferred",
  },
  {
    id: "tax-20",
    consideration:
      "If partners or LLC members changed between the year the property tax deduction was claimed and the year a refund or reduction is received, should the recovery be allocated to current owners, prior owners, or according to a special allocation in the operating agreement?",
    solution:
      "Ownership-change allocation review that checks the partnership or LLC agreement, Section 704 economics, prior deduction allocations, and current ownership before posting a recovery so that refunds are allocated to the legally and economically proper owners instead of automatically to whoever is present on receipt date.",
    references: refs("https://www.irs.gov/pub/irs-wd/0909032.pdf", "https://www.irs.gov/publications/p541", "https://www.law.cornell.edu/uscode/text/26/704"),
    implementsSurfaceIds: ["trim-ct-owner-entity-identity", "trim-ct-owner-reduction-detail", "trim-ct-owner-invoice"],
    status: "deferred",
  },
  {
    id: "tax-21",
    consideration:
      "For tiered partnerships, disregarded entities, REIT subsidiaries, or syndication structures that own commercial or multifamily parcels, what entity-level and investor-level reporting questions arise from a property tax refund or Trim fee deduction?",
    solution:
      "Entity-stack reporting checklist for tiered partnerships, disregarded entities, REIT subsidiaries, and syndication structures so that property-tax recoveries and Trim-fee deductions are traced through entity-level books, investor K-1s, REIT compliance, and sponsor reporting.",
    references: refs("https://www.irs.gov/instructions/i1065", "https://www.irs.gov/publications/p541"),
    implementsSurfaceIds: ["trim-ct-owner-entity-identity", "trim-ct-owner-invoice", "trim-ct-op-collections"],
    status: "deferred",
  },
  {
    id: "tax-22",
    consideration:
      "For landlords that passed property taxes through to commercial tenants through CAM, NNN, or operating-expense reimbursements, does a refund or assessment reduction create tenant reimbursement obligations, revenue offsets, or deferred credits that affect owner accounting?",
    solution:
      "Tenant-pass-through reconciliation that matches refunds and assessment reductions to CAM, NNN, and operating-expense clauses and tenant true-up periods so that owners record reimbursement obligations, revenue offsets, or deferred credits when lease economics require tenant sharing.",
    references: refs("https://dart.deloitte.com/USDART/home/codification/leases/asc842-10/deloitte-s-roadmap-leases/chapter-4-identifying-lease-components/4-3-nonlease-components"),
    implementsSurfaceIds: ["trim-ct-owner-reduction-detail", "trim-ct-owner-invoice", "trim-ct-op-collections"],
    status: "deferred",
  },
  {
    id: "tax-23",
    consideration:
      "What consent or engagement disclosure should Trim show business owners so they understand that a refund, reduced bill, or Trim fee may affect taxable income, deductible expense, partner allocations, tenant reconciliations, and 1099 reporting?",
    solution:
      "Owner tax-impact disclosure and consent acknowledgment covering refunds, reduced bills, Trim fees, partner allocations, tenant reconciliations, and 1099 reporting so that business owners know Trim is producing accounting consequences that their tax advisor must classify.",
    references: refs("https://www.irs.gov/pub/irs-prior/p535--2022.pdf", "https://www.irs.gov/publications/p525", "https://www.irs.gov/instructions/i1099mec"),
    implementsSurfaceIds: ["trim-ct-owner-consent", "trim-ct-owner-authorize", "trim-ct-owner-invoice"],
    status: "deferred",
  },
  {
    id: "tax-24",
    consideration:
      "For Trim's own vendor tax operations, which launch states treat property tax consulting, data services, SaaS access, document-preparation services, or bundled appeal services as taxable sales or exempt professional services?",
    solution:
      "Launch-state sales-taxability matrix for property-tax consulting, data services, SaaS access, document preparation, and bundled appeal services, with billing held closed where treatment is unverified so that Trim collects sales tax only when the state taxes the item sold.",
    references: refs("https://comptroller.texas.gov/taxes/publications/96-259.php", "https://star.comptroller.texas.gov/view/9404L1302A11"),
    implementsSurfaceIds: ["trim-ct-op-jurisdiction", "trim-ct-owner-invoice", "trim-ct-op-collections"],
    status: "deferred",
  },
]);
