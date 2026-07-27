/**
 * Valuation / Mass-Appraisal Specialist - considerations (Trim, v2).
 * Domain: sales/income/cost approaches; ratios; uniformity; when "$X over" is defensible.
 */
import type { SmeItem } from "../smeTypes";

export const VALUATION_MASS_APPRAISAL_ITEMS: SmeItem[] = [
  {
    id: "val-01",
    consideration:
      "What minimum appraisal-to-sale ratio evidence should Trim require before stating that a Texas commercial or multifamily parcel is likely over-assessed by a quantified dollar amount?",
    thesisGap:
      "First-touch excess dollars need a statistical floor that combines market calibration with subject-property evidence.",
    solution:
      "Require a reliable county/category or model-area ratio cell with representative sales, acceptable dispersion, and corroborating parcel evidence before stating a quantified excess amount so that first-touch dollars rest on both market calibration and subject-property support.",
    references: [
      { title: "IAAO - Standard on Ratio Studies", url: "https://www.iaao.org/media/standards/Standard_on_Ratio_Studies.pdf" },
    ],
    implementsSurfaceIds: ["trim-ct-owner-notice", "trim-ct-owner-analysis-framing", "trim-ct-worker-packet"],
    status: "partial",
  },
  {
    id: "val-02",
    consideration:
      "How should COD thresholds differ for residential multifamily, commercial real, industrial real, and vacant land categories in Texas-metro launch counties?",
    thesisGap:
      "A single dispersion threshold could overstate confidence across property classes with different accepted COD ranges.",
    solution:
      "Apply COD launch ceilings of roughly 15 for multifamily-like residential strata, 20 for commercial and industrial real property, and 25 for vacant land so that Trim suppresses dollar confidence where dispersion is too high for parcel-level claims.",
    references: [
      { title: "IAAO - Standard on Ratio Studies", url: "https://www.iaao.org/media/standards/Standard_on_Ratio_Studies.pdf" },
    ],
    implementsSurfaceIds: ["trim-ct-owner-notice", "trim-ct-owner-analysis-framing", "trim-ct-op-county-data"],
    status: "partial",
  },
  {
    id: "val-03",
    consideration:
      "When does PRD or another vertical-equity measure indicate regressivity or progressivity strongly enough to support an over-assessment screen?",
    thesisGap:
      "Vertical-equity signals can mislead parcel selection if sample reliability and subject evidence are not checked.",
    solution:
      "Treat PRD below 0.98 or above 1.03, or a corroborated PRB outside the accepted bias band, as a screen only after sample reliability checks so that regressivity/progressivity supports rather than replaces parcel evidence.",
    references: [
      { title: "IAAO - Standard on Ratio Studies", url: "https://www.iaao.org/media/standards/Standard_on_Ratio_Studies.pdf" },
    ],
    implementsSurfaceIds: ["trim-ct-owner-notice", "trim-ct-op-county-data", "trim-ct-worker-packet"],
    status: "deferred",
  },
  {
    id: "val-04",
    consideration:
      "How should Trim treat Texas Comptroller Appraisal District Ratio Study results when category sample counts are small, missing, or marked statistically unreliable?",
    thesisGap:
      "Public ratio-study cells may be useful for launch calibration but unsafe as parcel-level proof when sparse or unreliable.",
    solution:
      "Use Texas Comptroller ratio-study cells as county/category calibration and mark small, missing, or statistically unreliable cells as blockers so that public aggregate studies do not become parcel-level proof.",
    references: [
      { title: "Texas Comptroller - Property Tax Ratio Study", url: "https://comptroller.texas.gov/taxes/property-tax/ratio-study/" },
    ],
    implementsSurfaceIds: ["trim-ct-op-county-data", "trim-ct-op-rollout-gate", "trim-ct-owner-notice"],
    status: "wiring",
  },
  {
    id: "val-05",
    consideration:
      "Which ratio-study measures from PTAD are useful for county-level market calibration, and which are unsuitable for proving an individual owner's over-assessment?",
    thesisGap:
      "Trim needs to separate launch-county diagnostics from property-specific protest evidence.",
    solution:
      "Use PTAD median ratio, weighted mean, COD, PRD, and category reliability flags for launch diagnostics so that county health is measured without treating PTAD aggregates as an owner's individual protest evidence.",
    references: [
      { title: "Texas Comptroller - Property Tax Reports", url: "https://comptroller.texas.gov/taxes/property-tax/reports/" },
    ],
    implementsSurfaceIds: ["trim-ct-op-county-data", "trim-ct-op-rollout-gate", "trim-ct-worker-packet"],
    status: "partial",
  },
  {
    id: "val-06",
    consideration:
      "When can recent sales comps alone support a commercial or multifamily over-assessment notice without owner income data?",
    thesisGap:
      "Trim needs a boundary between public-data detection and cases that require private owner financials before a dollar claim.",
    solution:
      "Allow recent sales comps to carry a public-data-only notice when they are arms-length, date-aligned, locally comparable, and adjusted so that sales comparison is used only where it can credibly stand without owner income data.",
    references: [
      { title: "IAAO - Standard on Mass Appraisal", url: "https://www.iaao.org/wp-content/uploads/StandardOnMassAppraisal.pdf" },
    ],
    implementsSurfaceIds: ["trim-ct-owner-notice", "trim-ct-owner-analysis-framing", "trim-ct-worker-packet"],
    status: "partial",
  },
  {
    id: "val-07",
    consideration:
      "For which Texas commercial property types should the income approach be treated as the primary value signal when reliable income and expense data are available?",
    thesisGap:
      "Public comps may be insufficient for income-producing assets that investors price from stabilized income.",
    solution:
      "Treat the income approach as primary for income-producing multifamily, office, retail, hotel, self-storage, and leased industrial assets when reliable financials exist so that value follows the way Texas-metro investors price the asset.",
    references: [
      { title: "IAAO - Standard on Mass Appraisal", url: "https://www.iaao.org/wp-content/uploads/StandardOnMassAppraisal.pdf" },
    ],
    implementsSurfaceIds: ["trim-ct-owner-income-docs", "trim-ct-worker-packet", "trim-ct-owner-upload"],
    status: "partial",
  },
  {
    id: "val-08",
    consideration:
      "What evidence is needed to decide whether DCAD-style direct capitalization is more persuasive than sales comparison for office, retail, apartment, hotel, and industrial parcels?",
    thesisGap:
      "Property subtype should drive the strongest valuation approach, but Trim has no approach-selection evidence rule.",
    solution:
      "Compare direct-capitalization inputs against sales-comparison quality by subtype, stability, and local evidence depth so that the stronger approach drives office, retail, apartment, hotel, and industrial case value.",
    references: [
      { title: "Dallas CAD - Commercial Property Valuation Process", url: "https://www.dallascad.org/ViewPDFs.aspx?id=%5C%5CDCAD.ORG%5CWEB%5CWEBDATA%5CWEBFORMS%5CFAQ%5CCOM_PROP_VAL_PROCESS.PDF&type=1" },
    ],
    implementsSurfaceIds: ["trim-ct-worker-packet", "trim-ct-owner-income-docs"],
    status: "partial",
  },
  {
    id: "val-09",
    consideration:
      "How should cap rates be derived, time-aligned, and adjusted for Texas-metro commercial properties before using NOI divided by cap rate as a value estimate?",
    thesisGap:
      "Cap-rate error can dominate a stated excess dollar amount if market risk and valuation date are mismatched.",
    solution:
      "Derive cap rates from verified local sales, CAD schedules, and market sources aligned to the January 1 valuation date so that NOI divided by cap rate does not embed stale or mismatched market risk.",
    references: [
      { title: "Texas Tax Code Chapter 23", url: "https://tcss.legis.texas.gov/resources/TX/htm/TX.23.htm" },
    ],
    implementsSurfaceIds: ["trim-ct-worker-packet", "trim-ct-owner-income-docs", "trim-ct-owner-analysis-framing"],
    status: "partial",
  },
  {
    id: "val-10",
    consideration:
      "How should property-tax-loaded versus unloaded cap rates be handled when comparing CAD models, owner NOI, and third-party market cap-rate sources?",
    thesisGap:
      "Income values can double-count or omit property tax expense if loaded and unloaded cap rates are mixed.",
    solution:
      "Match property-tax-loaded cap rates with NOI before property-tax expense and unloaded cap rates with tax-expense treatment made explicit so that income values do not double-count or omit the tax load.",
    references: [
      { title: "Harris CAD - 2026 Market Trends Report", url: "https://hcad.org/assets/uploads/pdf/2026-Market-Trends-Report-all-Divisions-Final.pdf" },
    ],
    implementsSurfaceIds: ["trim-ct-worker-packet", "trim-ct-owner-income-docs"],
    status: "partial",
  },
  {
    id: "val-11",
    consideration:
      "What NOI normalization rules should apply to actual rent, market rent, reimbursements, concessions, nonrecurring expenses, reserves, and owner-paid utilities?",
    thesisGap:
      "Owner financials can reflect temporary accounting noise instead of true market value if normalization is undefined.",
    solution:
      "Normalize NOI to market-supported rent, reimbursements, concessions, recurring expenses, reserves, and owner-paid utilities so that temporary accounting noise does not masquerade as market value.",
    references: [
      { title: "Texas Tax Code Chapter 23", url: "https://tcss.legis.texas.gov/resources/TX/htm/TX.23.htm" },
    ],
    implementsSurfaceIds: ["trim-ct-owner-income-docs", "trim-ct-worker-packet"],
    status: "partial",
  },
  {
    id: "val-12",
    consideration:
      "How should actual vacancy, collection loss, lease-up, rent-loss concessions, build-out allowances, and leasing commissions be reflected in a defensible income approach?",
    thesisGap:
      "Vacancy and lease-up treatment can materially change value and can be double-counted without a rule.",
    solution:
      "Stabilize vacancy, collection loss, lease-up costs, concessions, tenant improvements, and leasing commissions from documented actual and market evidence so that income value reflects durable economics without double counting.",
    references: [
      { title: "Harris CAD - 2025-2026 Reappraisal Plan", url: "https://hcad.org/assets/uploads/pdf/Reports/2025-2026_reappraisal_plan_final.pdf" },
    ],
    implementsSurfaceIds: ["trim-ct-owner-income-docs", "trim-ct-worker-packet"],
    status: "partial",
  },
  {
    id: "val-13",
    consideration:
      "What date-of-value rule should govern income, occupancy, rent roll, and sales evidence used for a Texas current-year protest?",
    thesisGap:
      "Evidence must align to the assessment date instead of later market movement.",
    solution:
      "Anchor income, occupancy, rent roll, and sales evidence to conditions known or reasonably knowable as of January 1 so that the protest case tracks the Texas assessment date rather than later market movement.",
    references: [
      { title: "Dallas CAD - Standards of Documentation", url: "https://ens.dallascad.org/pdftemplates/Standards_of_Documentation.PDF" },
    ],
    implementsSurfaceIds: ["trim-ct-owner-upload-header", "trim-ct-worker-packet", "trim-ct-owner-income-docs"],
    status: "partial",
  },
  {
    id: "val-14",
    consideration:
      "What minimum rent-roll, income-statement, and occupancy documentation should Trim request before upgrading a public-data signal into an income-approach case?",
    thesisGap:
      "Trim needs to distinguish evidence maximization from private-data requirements before detection.",
    solution:
      "Request current rent roll, trailing income statement, occupancy/vacancy support, lease terms, expense detail, concessions, utilities, and nonrecurring items before upgrading to an income-approach case so that private documents improve evidence without being required for detection.",
    references: [
      { title: "Dallas CAD - Standards of Documentation", url: "https://ens.dallascad.org/pdftemplates/Standards_of_Documentation.PDF" },
    ],
    implementsSurfaceIds: ["trim-ct-owner-upload", "trim-ct-owner-income-docs", "trim-ct-owner-evidence-status"],
    status: "partial",
  },
  {
    id: "val-15",
    consideration:
      "How should Trim protect and limit use of owner-provided rent rolls, income statements, sales prices, and expense data that are treated as confidential under Texas law?",
    thesisGap:
      "Private valuation inputs create confidentiality obligations beyond public-roll detection.",
    solution:
      "Classify owner-provided rent rolls, income statements, sales prices, and expense data as confidential case evidence with need-to-use handling so that Trim honors Texas confidentiality limits while still preparing protests.",
    references: [
      { title: "Texas Tax Code Section 22.27", url: "https://law.justia.com/codes/texas/tax-code/title-1/subtitle-d/chapter-22/subchapter-b/section-22-27/" },
    ],
    implementsSurfaceIds: ["trim-ct-owner-income-docs", "trim-ct-op-audit", "trim-ct-worker-packet"],
    status: "wiring",
  },
  {
    id: "val-16",
    consideration:
      "What is a reasonable number of comparable properties for a Texas equal-and-uniform analysis under Tax Code Section 42.26(a)(3) for commercial and multifamily parcels?",
    thesisGap:
      "The adjusted median defense fails if Trim treats comparable count as arbitrary instead of reasonable and documented.",
    solution:
      "Use no hard statutory comparable count and require a documented reasonable set, with a Texas-metro target of five or more accepted comparables where available, so that the adjusted median is defensible rather than numerically arbitrary.",
    references: [
      { title: "Texas Tax Code Section 42.26", url: "https://law.justia.com/codes/texas/tax-code/title-1/subtitle-f/chapter-42/subchapter-b/section-42-26/" },
    ],
    implementsSurfaceIds: ["trim-ct-worker-packet", "trim-ct-worker-evidence-preview"],
    status: "partial",
  },
  {
    id: "val-17",
    consideration:
      "Which adjustments for location, size, age, quality, condition, economic factors, and property class are required before using comparable appraised values in an equal-and-uniform claim?",
    thesisGap:
      "A public-roll median cannot support relief unless the comparable set is adjusted into like-property comparison.",
    solution:
      "Adjust comparable appraised values for location, size, age, quality, condition, class, economic factors, and unit basis so that the equal-and-uniform median compares like property to like property.",
    references: [
      { title: "TAPTP - Texas Property Tax Code Section 42.26", url: "https://taptp.org/texas-property-tax-code-section-42-26/" },
    ],
    implementsSurfaceIds: ["trim-ct-worker-packet", "trim-ct-worker-evidence-preview"],
    status: "partial",
  },
  {
    id: "val-18",
    consideration:
      "When should Trim prefer a Texas equal-and-uniform statistical defense over a market-value defense for first-pass screening?",
    thesisGap:
      "Texas launch economics can depend on unequal appraisal even when market-value evidence is weak or neutral.",
    solution:
      "Prefer equal-and-uniform screening when public-roll comparables show the subject above the adjusted median and market evidence is weak or neutral so that Texas first-pass detection can use the state's unequal-appraisal remedy.",
    references: [
      { title: "Texas Tax Code Section 42.26", url: "https://law.justia.com/codes/texas/tax-code/title-1/subtitle-f/chapter-42/subchapter-b/section-42-26/" },
    ],
    implementsSurfaceIds: ["trim-ct-owner-notice", "trim-ct-worker-packet"],
    status: "partial",
  },
  {
    id: "val-19",
    consideration:
      "How should Trim handle situations where market value appears correct but the parcel is appraised above the adjusted median of comparable appraised values?",
    thesisGap:
      "Over-assessed needs to include Texas unequal appraisal, not only above-market value.",
    solution:
      "Classify cases with correct market value but appraised value above the adjusted comparable median as unequal-appraisal opportunities so that over-assessment includes Texas equal-and-uniform relief, not only above-market value.",
    references: [
      { title: "Texas Tax Section - Grant", url: "https://www.texastaxsection.org/Content/Newsletters/Grant.pdf" },
    ],
    implementsSurfaceIds: ["trim-ct-owner-notice", "trim-ct-owner-analysis-framing", "trim-ct-worker-packet"],
    status: "partial",
  },
  {
    id: "val-20",
    consideration:
      "What mass-appraisal error patterns are most common in Texas metro CAD data for small commercial and multifamily parcels?",
    thesisGap:
      "Detection needs to focus on common real errors rather than noisy anomalies.",
    solution:
      "Prioritize screens for stale class or condition, wrong income assumptions, wrong model area, land/improvement allocation outliers, construction-cycle errors, and unequal comparable appraisal so that launch detection focuses on common small-commercial and multifamily mass-appraisal failures.",
    references: [],
    implementsSurfaceIds: ["trim-ct-op-county-data", "trim-ct-owner-notice", "trim-ct-worker-packet"],
    status: "deferred",
  },
  {
    id: "val-21",
    consideration:
      "How should model-area boundaries, neighborhood codes, land market areas, and improved market areas constrain comparable selection?",
    thesisGap:
      "Cross-market comparables can create false excess estimates if submarket boundaries are ignored.",
    solution:
      "Constrain comparable selection to the same model area, neighborhood code, land market area, or improved market area unless a documented cross-market adjustment exists so that false excess estimates do not cross local submarket boundaries.",
    references: [
      { title: "Dallas CAD - Valuation Process", url: "https://www.dallascad.org/Forms/ValuationProcess.pdf" },
    ],
    implementsSurfaceIds: ["trim-ct-op-county-data", "trim-ct-worker-packet"],
    status: "partial",
  },
  {
    id: "val-22",
    consideration:
      "How should land-versus-improvement splits be tested when the total appraised value is high but the land allocation or improvement allocation appears anomalous?",
    thesisGap:
      "Component anomalies can signal model error, but relief still needs to be tied to total appraised value.",
    solution:
      "Test land and improvement unit values against local component distributions while keeping relief tied to total appraised value so that allocation anomalies reveal model errors without mistaking components for the protest target.",
    references: [
      { title: "Texas Property Tax Field Appraisers Procedures Manual", url: "https://www.lincolninst.edu/app/uploads/legacy-files/gwipp/upload/sources/Texas/2020/tx_property_tax_field_appraisers_procedures_manual96-1710_2021.pdf" },
    ],
    implementsSurfaceIds: ["trim-ct-op-county-data", "trim-ct-worker-packet", "trim-ct-owner-notice"],
    status: "deferred",
  },
  {
    id: "val-23",
    consideration:
      "When is the cost approach credible for Texas commercial and multifamily protest screening, and when should it be secondary to income or sales comparison?",
    thesisGap:
      "Cost models can overstate older, income-producing, or obsolescent assets if used as the primary signal.",
    solution:
      "Use the cost approach primarily for new, special-purpose, or thin-market properties with reliable depreciation support so that older income-producing or obsolescent assets are not overvalued by replacement-cost math.",
    references: [
      { title: "IAAO - Standard on Mass Appraisal", url: "https://www.iaao.org/wp-content/uploads/StandardOnMassAppraisal.pdf" },
    ],
    implementsSurfaceIds: ["trim-ct-worker-packet", "trim-ct-owner-condition-docs"],
    status: "partial",
  },
  {
    id: "val-24",
    consideration:
      "What physical, functional, and economic obsolescence evidence should be required before reducing a cost-approach value indication?",
    thesisGap:
      "Obsolescence can justify reductions but is hard to prove from public data alone.",
    solution:
      "Require photos, inspection notes, repair estimates, rent loss, vacancy, lease evidence, or external-market support before applying obsolescence so that cost-approach reductions are tied to provable physical, functional, or economic loss.",
    references: [
      { title: "Texas Tax Code Chapter 23", url: "https://tcss.legis.texas.gov/resources/TX/htm/TX.23.htm" },
    ],
    implementsSurfaceIds: ["trim-ct-owner-condition-docs", "trim-ct-owner-income-docs", "trim-ct-worker-packet"],
    status: "partial",
  },
  {
    id: "val-25",
    consideration:
      "How should new construction, partial completion, permits, condition changes, and demolition be detected and validated in mass-appraisal records?",
    thesisGap:
      "Construction-cycle errors can generate large false positives or missed reductions if not validated against January 1 status.",
    solution:
      "Cross-check permits, certificates, demolition records, CAMA updates, imagery, field notes, and owner evidence against January 1 completion status so that new construction and condition-change errors are validated before filing.",
    references: [
      { title: "Harris CAD - 2025 Mass Appraisal Report", url: "https://hcad.org/assets/uploads/pdf/2025-Mass-Appraisal-Report.pdf" },
    ],
    implementsSurfaceIds: ["trim-ct-op-county-data", "trim-ct-owner-condition-docs", "trim-ct-worker-packet"],
    status: "partial",
  },
  {
    id: "val-26",
    consideration:
      "What confidence threshold should Trim use before showing an estimated excess dollar amount in first-touch notice copy rather than only a qualitative over-assessment signal?",
    thesisGap:
      "This is the core defensibility question for acquisition claims and cannot be solved by a point estimate alone.",
    solution:
      "Show an estimated excess dollar amount only when independent value signals agree, data-quality blockers are clear, and the conservative error band remains positive so that first-touch copy states analysis rather than an unsupported result claim.",
    references: [],
    implementsSurfaceIds: ["trim-ct-owner-notice", "trim-ct-owner-analysis-framing", "trim-ct-owner-trust"],
    status: "deferred",
  },
  {
    id: "val-27",
    consideration:
      "How should uncertainty ranges, confidence intervals, or error bands be expressed for a parcel-level value estimate built from mass-appraisal and comparable-sale data?",
    thesisGap:
      "A single point estimate may imply precision the evidence cannot support.",
    solution:
      "Express parcel estimates as conservative low/base/high ranges from comparable dispersion, ratio-study reliability, and model uncertainty so that owners see evidence strength without false point-estimate precision.",
    references: [
      { title: "IAAO - Standard on Mass Appraisal", url: "https://www.iaao.org/wp-content/uploads/StandardOnMassAppraisal.pdf" },
    ],
    implementsSurfaceIds: ["trim-ct-owner-notice", "trim-ct-owner-analysis-framing", "trim-ct-worker-packet"],
    status: "partial",
  },
  {
    id: "val-28",
    consideration:
      "Which Texas-metro CAD methodology documents should be treated as required local calibration inputs before Trim activates a county?",
    thesisGap:
      "County-depth matters because each CAD publishes different model areas, evidence norms, and procedures.",
    solution:
      "Require each launch county's reappraisal plan, mass-appraisal report, methodology manuals, market-area definitions, commercial valuation process, evidence standards, calendar, and ratio-study outputs so that activation is locally calibrated before outreach fires.",
    references: [
      { title: "Tarrant Appraisal District - 2025-2026 Reappraisal Plan", url: "https://www.tad.org/content/reports/2025/2025-2026TADReappraisalPlan.pdf" },
    ],
    implementsSurfaceIds: ["trim-ct-op-county-data", "trim-ct-op-rollout-gate", "trim-ct-op-jurisdiction"],
    status: "wiring",
  },
];
