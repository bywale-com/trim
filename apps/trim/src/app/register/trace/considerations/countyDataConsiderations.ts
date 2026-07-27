/**
 * County-Data Specialist — considerations (Trim, v2).
 * Domain: roll formats; CAMA; comps; e-file; PIA fallbacks; per-county cost.
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

export const COUNTY_DATA_ITEMS: SmeItem[] = withImplementation([
  {
    id: "dat-01",
    consideration:
      "From HCAD PDATA and import instructions, which property, owner, building, land, jurisdiction, exemption, ownership-history, personal-property, hearing, and code-description files are required to reconstruct a complete Harris commercial/multifamily detection roll?",
    solution:
      "Build a Harris PDATA manifest requiring Real_acct_owner, Real_building_land, Real_jur_exempt, current-year Real_acct_ownership_history, PP_files, Hearings_files, Code_description_real, and Code_description_pp imports so that Trim can reconstruct owner, parcel, valuation, jurisdiction, exemption, hearing, personal-property, and code context for each Harris detection case.",
    references: refs("https://hcad.org/hcad-online-services/pdata/", "https://hcad.org/assets/uploads/pdf/Import_Instructions.pdf"),
    implementsSurfaceIds: ["trim-ct-op-county-data"],
    status: "deferred",
  },
  {
    id: "dat-02",
    consideration:
      "From HCAD PDATA, what Harris refresh cadence should Trim model for January pending values, April preliminary real values, May-August weekly ARB-period updates, and mid-August certified values?",
    solution:
      "Schedule Harris snapshots for January pending values, April preliminary real values, tentative May ARB-hearing values, tentative June personal-property values, weekly May-August preliminary updates, and mid-August certified values so that outreach, protest status, and recurrence use the right value maturity.",
    references: refs("https://hcad.org/hcad-online-services/pdata/"),
    implementsSurfaceIds: ["trim-ct-op-county-data", "trim-ct-op-appeal-window"],
    status: "deferred",
  },
  {
    id: "dat-03",
    consideration:
      "From HCAD data definitions, which normalized table joins, account keys, bogus/null dates, shared-CAD indicators, ownership percentages, situs fields, and value columns are brittle enough to require Harris-specific ingestion tests?",
    solution:
      "Add Harris ingestion tests for normalized joins, one-to-many land/building rows, static-but-split-prone 13-digit accounts, 12-30-1899 null dates, shared_cad, owner percentages, situs fields, replicated multifamily units, and real-account value columns so that false positives do not come from HCAD-specific data traps.",
    references: refs("https://hcad.org/assets/uploads/pdf/Definition_help.pdf"),
    implementsSurfaceIds: ["trim-ct-op-county-data", "trim-ct-op-exceptions"],
    status: "deferred",
  },
  {
    id: "dat-04",
    consideration:
      "From HCAD GIS downloads, GIS readme, and the HCAD Parcels ArcGIS layer, which Harris parcel geometry fields, projections, account identifiers, and query limits can be relied on for parcel-level verification links?",
    solution:
      "Use HCAD parcel geometry keyed by HCAD_NUM, LOWPARCELID, acct_num, Stacked, tax year, and NAD83 Texas State Plane South Central EPSG 2278/WKID 102740 metadata, paged through the 1,000-record ArcGIS limit, so that Harris verification links point to the correct parcel without treating approximate GIS boundaries as surveys.",
    references: refs("https://hcad.org/pdata/pdata-gis-downloads.html", "https://hcad.org/assets/uploads/pdf/resources/2025/GIS-ReadMeV2.pdf", "https://www.gis.hctx.net/arcgis/rest/services/HCAD/Parcels/MapServer/0"),
    implementsSurfaceIds: ["trim-ct-op-county-data", "trim-ct-owner-county-verify"],
    status: "deferred",
  },
  {
    id: "dat-05",
    consideration:
      "From HCAD iFile/iSettle, Owners Portal instructions, and iFile Protest guidance, what portal credentials, iFile numbers, owner-account linking steps, evidence upload behaviors, settlement states, and agent-removal risks affect automated Harris protest filing?",
    solution:
      "Gate Harris online filing behind owner-portal credentials, account number, annual iFile number, account linking, opinion-of-value entry, iSettle opt-in, evidence upload review, email confirmation, accept/reject state, and incumbent-agent conflict checks so that automated filing does not displace authority or miss settlement workflow requirements.",
    references: refs("https://hcad.org/hcad-help/protests-and-corrections/ifile-and-isettle", "https://owners.hcad.org/publicArea/InstructionVideo.aspx", "https://hcad.org/ifile-protest"),
    implementsSurfaceIds: ["trim-ct-op-county-data", "trim-ct-owner-status", "trim-ct-owner-upload"],
    status: "deferred",
  },
  {
    id: "dat-06",
    consideration:
      "From DCAD Data Products and parcel/appraisal-roll join guidance, which Dallas ZIP products, CSV/fixed-format files, reference documents, VID exclusions, and account-to-parcel joins are necessary for a complete detection roll?",
    solution:
      "Build a Dallas roll manifest for current/prior appraisal files, certified CSV and fixed-format rolls, BPP detail, ARB active/archive files, annual notice files, per-zip reference documents, VID-safe no-value ownership files, and ACCOUNT_NUM to GIS_PARCEL_ID joins so that the Dallas detection roll includes disputed, BPP, and geometry-linked accounts.",
    references: refs("https://www.dallascad.org/DataProducts.aspx", "https://www.dallascad.org/PARCEL_GEOM.pdf"),
    implementsSurfaceIds: ["trim-ct-op-county-data"],
    status: "deferred",
  },
  {
    id: "dat-07",
    consideration:
      "From DCAD GIS Data Products and PARCEL_GEOM documentation, how should Trim handle current versus historic Dallas parcel shapefiles, file-name changes such as PARCEL_GEOM.zip, and scripts that depend on prior names?",
    solution:
      "Maintain a Dallas GIS product registry separating current parcels from historic certified parcel years and aliasing renamed downloads such as PARCEL.zip to PARCEL_GEOM.zip so that automated scripts survive DCAD file-name changes without joining the wrong tax year.",
    references: refs("https://www.dallascad.org/GISDataProducts.aspx", "https://www.dallascad.org/PARCEL_GEOM.pdf"),
    implementsSurfaceIds: ["trim-ct-op-county-data", "trim-ct-owner-county-verify"],
    status: "deferred",
  },
  {
    id: "dat-08",
    consideration:
      "From DCAD uFile guidance and protest procedures, what Dallas online-protest PIN, file-type, file-size, total-upload, duplicate-filing, email/fax rejection, opinion-of-value, and settlement-offer constraints must be encoded per county?",
    solution:
      "Encode Dallas uFile rules for annual PIN plus security code, one online protest per account, no fax/email protest filing, no duplicate manual protest, PDF/JPG/XLS/XLSX evidence, 8 MB per file, 15 MB total, 20-file maximum, opinion-of-value plus evidence for settlement review, and no second uFile offer after rejection so that county filing automation stays valid and settlement-eligible.",
    references: refs("https://dallascad.org/webForms/UFILEONLINE/UFILE_ONLINE_PROTEST_2026.pdf", "https://www.dallascad.org/Forms/Protest_Process.pdf"),
    implementsSurfaceIds: ["trim-ct-op-county-data", "trim-ct-owner-upload", "trim-ct-op-exceptions"],
    status: "deferred",
  },
  {
    id: "dat-09",
    consideration:
      "From TCAD public information and appraisal-roll FAQ, which Travis appraisal-roll exports, special JSON exports, EARS submissions, layout files, supplemental rolls, and biweekly updates should Trim ingest for detection and audit?",
    solution:
      "Ingest Travis certified appraisal exports, certified special JSON exports, supplemental appraisal and special JSON exports, export layouts, EARS submissions, property reports, and biweekly appraisal-roll/special-export refresh snapshots so that detection and audit can distinguish certified, supplemental, and in-season Travis values.",
    references: refs("https://traviscad.org/publicinformation/", "https://traviscad.org/faq-items/can-i-get-a-copy-of-the-appraisal-roll/", "https://traviscad.org/wp-content/uploads/Agent-Meeting_2025.pdf"),
    implementsSurfaceIds: ["trim-ct-op-county-data", "trim-ct-op-audit"],
    status: "deferred",
  },
  {
    id: "dat-10",
    consideration:
      "From TCAD shape-file FAQ and the TCAD Parcels ArcGIS layer, when is Travis GIS access free through county ArcGIS services versus purchased through TCAD records, and which field differences matter for verification links?",
    solution:
      "Prefer the free Travis County ArcGIS TCAD parcel layer for live verification fields such as PROP_ID, geo_id, situs, owner, values, deed, hyperlink, and EPSG 2277 geometry, and reserve the $4 TCAD shapefile purchase for offline/archive needs so that verification links stay current without ignoring purchasable record-copy gaps.",
    references: refs("https://traviscad.org/faq-items/can-i-get-electronic-shape-files/", "https://gis.traviscountytx.gov/server1/rest/services/Boundaries_and_Jurisdictions/TCAD/MapServer/0"),
    implementsSurfaceIds: ["trim-ct-op-county-data", "trim-ct-owner-county-verify"],
    status: "deferred",
  },
  {
    id: "dat-11",
    consideration:
      "From TCAD Agent Meeting 2025, eFile, and informals guidance, what agent-portal, property-ID import, same-day hearing, electronic-delivery, CAD-evidence, and phased-evidence behaviors should be modeled for Travis?",
    solution:
      "Model Travis eFile and agent operations around online account setup, property-ID imports, electronic delivery, immediate protest confirmation, CAD evidence review, phased evidence changes before the 14-day exchange window, same-day or scheduled informal meetings, and settlement-offer responses so that Owner, Operator, and Worker states match TCAD's portal rhythm.",
    references: refs("https://traviscad.org/wp-content/uploads/Agent-Meeting_2025.pdf", "https://traviscad.org/efile/", "https://traviscad.org/informals/"),
    implementsSurfaceIds: ["trim-ct-op-county-data", "trim-ct-owner-status", "trim-ct-worker-hearing"],
    status: "deferred",
  },
  {
    id: "dat-12",
    consideration:
      "From TAD Data Downloads, True Prodigy, and New Portal materials, which Tarrant property-data exports are being phased out, which True Prodigy extracts replace them, and what migration-period inconsistencies could break historical comparison?",
    solution:
      "Version Tarrant ingestion across legacy PropertyData, PropertyLocation, exemptions, supplemental, and agent-summary exports plus daily True Prodigy full-set extracts so that field-name, delimiter, documentation, daily/TBD refresh, and view-only legacy differences do not break historical comparison during CAMA migration.",
    references: refs("https://www.tad.org/resources/data-downloads", "https://www.tad.org/true-prodigy", "https://www.tad.org/new-portal"),
    implementsSurfaceIds: ["trim-ct-op-county-data"],
    status: "deferred",
  },
  {
    id: "dat-13",
    consideration:
      "From TAD Data Downloads, homepage tools, and New Portal guidance, what Tarrant GIS downloads, parcel databases, interactive maps, portal exports, mass-protest features, and authorized-account exports are available to owners versus agents?",
    solution:
      "Split Tarrant capabilities into public GIS/downloads, owner portal features, and agent portal features, including parcel/geodatabase/map files, owner protest/forms/search, commercial evidence review on legacy portal, agent mass protests, authorized account export, and agent E-FILE PIN verification so that Owner and Operator workflows do not assume the same access.",
    references: refs("https://www.tad.org/resources/data-downloads", "https://www.tad.org/", "https://www.tad.org/new-portal"),
    implementsSurfaceIds: ["trim-ct-op-county-data", "trim-ct-owner-county-verify", "trim-ct-op-licensed-roster"],
    status: "deferred",
  },
  {
    id: "dat-14",
    consideration:
      "From TAD Protest Hearing Search and Tarrant ARB resources, what future-hearing schedule, completed-case, ARB calendar, daily-hearing, and quorum data can be captured as a reliable appeal-calendar feed?",
    solution:
      "Scrape and reconcile Tarrant protest-hearing search, TARB annual calendar, daily hearing schedule, meeting/quorum postings, and completed-case/order references so that appeal-calendar feeds distinguish future settings, live daily dockets, board availability, and closed outcomes.",
    references: refs("https://www.tad.org/", "https://www.tad.org/about/tarb"),
    implementsSurfaceIds: ["trim-ct-op-county-data", "trim-ct-op-appeal-window", "trim-ct-worker-hearing"],
    status: "deferred",
  },
  {
    id: "dat-15",
    consideration:
      "From Texas Comptroller data-submission requirements, what EARS standard fields can Trim use as a cross-county normalization target even when county public downloads expose different table layouts?",
    solution:
      "Normalize county rolls toward EARS AJR, AUD, and TU2 concepts for CAD ID, county ID, account, short account, parent account, taxing unit, category, market value, taxable value, exemptions, agricultural/productivity detail, and top-taxpayer records so that different county layouts map to a Texas-wide certified-roll target.",
    references: refs("https://comptroller.texas.gov/taxes/property-tax/data-submissions.php"),
    implementsSurfaceIds: ["trim-ct-op-county-data"],
    status: "deferred",
  },
  {
    id: "dat-16",
    consideration:
      "From Texas Comptroller ratio-study results, Property Tax Data Reports, and School District PVS, which PVS/ADRS measures are useful for launch-county calibration versus unsuitable for parcel-level over-assessment notices?",
    solution:
      "Use Comptroller ADRS/PVS medians, COD, category measures, taxable-value findings, and school-district study outputs as launch-county calibration signals so that aggregate public studies inform model health without becoming parcel-level over-assessment notices.",
    references: refs("https://comptroller.texas.gov/taxes/property-tax/ratio-study/", "https://comptroller.texas.gov/taxes/property-tax/reports/", "https://comptroller.texas.gov/taxes/property-tax/pvs/"),
    implementsSurfaceIds: ["trim-ct-op-county-data", "trim-ct-owner-analysis-framing"],
    status: "deferred",
  },
  {
    id: "dat-17",
    consideration:
      "From Texas Comptroller data submissions, Texas Tax Code Section 22.27, and Government Code Section 552.149, what sales-price, rendition, income, expense, and private-entity sales data is collected by CADs or PTAD but unavailable to Trim through public records?",
    solution:
      "Exclude confidential CAD/PTAD inputs such as renditions, real and personal property reports, attachments, income and expense data, confidential voluntary sales prices, and private-entity sales-price/characteristic feeds from public-data detection so that Trim does not rely on records it cannot request, disclose, or reuse.",
    references: refs("https://comptroller.texas.gov/taxes/property-tax/data-submissions.php", "https://texas.public.law/statutes/tex._tax_code_section_22.27", "https://statutes.capitol.texas.gov/Docs/GV/htm/GV.552.htm"),
    implementsSurfaceIds: ["trim-ct-op-county-data", "trim-ct-worker-packet"],
    status: "deferred",
  },
  {
    id: "dat-18",
    consideration:
      "From Texas Tax Code Section 22.27 and Government Code Section 552.149, what public-comps substitute should Trim assume in Texas when confidential sales-price data cannot be requested, disclosed, or reused?",
    solution:
      "Substitute public-roll equal-and-uniform comparables, recorded deed facts, county-published sales/evidence files, permitted owner-provided documents, and same-case CAD evidence requests for confidential sales-price feeds so that Texas notices can be generated from reusable public or owner-authorized evidence.",
    references: refs("https://texas.public.law/statutes/tex._tax_code_section_22.27", "https://statutes.capitol.texas.gov/Docs/GV/htm/GV.552.htm"),
    implementsSurfaceIds: ["trim-ct-op-county-data", "trim-ct-owner-notice", "trim-ct-worker-packet"],
    status: "deferred",
  },
  {
    id: "dat-19",
    consideration:
      "From the Texas OAG PIA handbook, Texas Comptroller PIA page, and Texas OAG PIA overview, what open-records timeline should Trim budget when a CAD dataset is missing, delayed, withheld, or requires an Attorney General ruling?",
    solution:
      "Budget missing-dataset PIA fallback as prompt production where available, 10 working days for no-prompt notice or AG-ruling request, 10 days for Trim to accept cost estimates, and 45 working days plus possible 10-day extension for AG decisions so that county onboarding plans include realistic delay states.",
    references: refs("https://www.oag.state.tx.us/sites/default/files/files/divisions/open-government/PIA-Handbook-2026.pdf", "https://comptroller.texas.gov/about/policies/open-records/public-information-act.php/1000", "https://www.texasattorneygeneral.gov/open-government/members-public/overview-public-information-act"),
    implementsSurfaceIds: ["trim-ct-op-county-data", "trim-ct-op-exceptions"],
    status: "deferred",
  },
  {
    id: "dat-20",
    consideration:
      "From Texas OAG cost rules, Travis appraisal-roll and shape-file FAQs, and TAD Data Downloads, what first-load, recurring-refresh, programming, manipulation, deposit, and per-file costs should be tracked by county?",
    solution:
      "Track acquisition cost by county for free downloads, TCAD free electronic rolls, TCAD $5 PDF rolls, TCAD $4 shapefiles, programming/manipulation fees, OAG cost estimates above $40, deposits above $100 or $50 for small bodies, recurring refresh work, and PIA special pulls so that launch economics include both files and labor.",
    references: refs("https://www.texasattorneygeneral.gov/sites/default/files/files/divisions/open-government/conference/12-3CostBasics.pdf", "https://traviscad.org/faq-items/can-i-get-a-copy-of-the-appraisal-roll/", "https://traviscad.org/faq-items/can-i-get-electronic-shape-files/", "https://www.tad.org/resources/data-downloads"),
    implementsSurfaceIds: ["trim-ct-op-county-data", "trim-ct-op-rollout-gate"],
    status: "deferred",
  },
  {
    id: "dat-21",
    consideration:
      "From TAD True Prodigy, TAD New Portal, and True Prodigy public materials, how does CAMA and portal-vendor variance change field names, export layouts, evidence availability, protest workflows, and county onboarding cost?",
    solution:
      "Create a county-vendor adapter layer for CAMA and portal vendor variance, including True Prodigy migration fields, export-layout revisions, legacy evidence access, mass-protest features, and county-specific appraisal-grid processing so that onboarding cost is visible before field names or workflows drift underneath Trim.",
    references: refs("https://www.tad.org/true-prodigy", "https://www.tad.org/new-portal", "https://trueprodigy.com/true-prodigys-tax-transparency-solution-selected-for-use-by-metro-districts-in-texas/", "https://trueprodigy.com/true-prodigy-processes-travis-cad-appraisal-grids-in-record-time/"),
    implementsSurfaceIds: ["trim-ct-op-county-data", "trim-ct-op-rollout-gate"],
    status: "deferred",
  },
  {
    id: "dat-22",
    consideration:
      "From Harris, Dallas, Travis, and Tarrant public data sources, what common canonical schema can cover those counties without hiding county-specific exceptions that affect detection confidence?",
    solution:
      "Define a canonical detection schema for property account, tax year, owner, mailing address, situs, state/class/category, land, improvement, market/appraised/assessed/taxable values, exemptions, jurisdictions, BPP flags, geometry keys, protest/hearing states, source snapshot, and county exception flags so that Harris, Dallas, Travis, and Tarrant normalize without hiding confidence-changing differences.",
    references: refs("https://hcad.org/hcad-online-services/pdata/", "https://www.dallascad.org/DataProducts.aspx", "https://traviscad.org/publicinformation/", "https://www.tad.org/resources/data-downloads"),
    implementsSurfaceIds: ["trim-ct-op-county-data", "trim-ct-owner-notice"],
    status: "deferred",
  },
  {
    id: "dat-23",
    consideration:
      "From county GIS sources, which GIS layer refresh dates, coordinate systems, parcel-ID keys, dissolved/multi-account polygons, and disclaimer language must Trim surface or account for?",
    solution:
      "Store GIS metadata for refresh date, source download/API, projection, parcel/account key, multi-account or dissolved-polygon indicator, tax year, shape disclaimer, and boundary-accuracy warning so that verification links can be trusted for identification without implying legal survey precision.",
    references: refs("https://hcad.org/pdata/pdata-gis-downloads.html", "https://www.dallascad.org/GISDataProducts.aspx", "https://gis.traviscountytx.gov/server1/rest/services/Boundaries_and_Jurisdictions/TCAD/MapServer/0", "https://www.tad.org/resources/data-downloads"),
    implementsSurfaceIds: ["trim-ct-op-county-data", "trim-ct-owner-county-verify"],
    status: "deferred",
  },
  {
    id: "dat-24",
    consideration:
      "From ArcGIS REST query documentation and county parcel layers, which API pagination, max-record-count, query-format, statistics, geometry, and field-selection limits affect automated county verification links?",
    solution:
      "Query county ArcGIS layers with explicit where, outFields, returnGeometry, outSR, f=json or supported GeoJSON/PBF, returnIdsOnly/returnCountOnly, outStatistics, and resultOffset plus resultRecordCount under each layer's maxRecordCount so that automated verification links page complete parcel results without over-fetching fields or geometry.",
    references: refs("https://developers.arcgis.com/rest/services-reference/enterprise/query-map-service-dynamic-layer/", "https://www.gis.hctx.net/arcgis/rest/services/HCAD/Parcels/MapServer/0", "https://gis.traviscountytx.gov/server1/rest/services/Boundaries_and_Jurisdictions/TCAD/MapServer/0"),
    implementsSurfaceIds: ["trim-ct-op-county-data", "trim-ct-owner-county-verify"],
    status: "deferred",
  },
  {
    id: "dat-25",
    consideration:
      "From Texas Comptroller and county protest guidance, what appeal-calendar fields should Trim maintain for notice mailing, protest deadline, informal windows, hearing scheduling, ARB completion, roll certification, and recurrence?",
    solution:
      "Maintain appeal-calendar fields for notice mailing, county value-release date, protest deadline, informal window, evidence exchange, hearing notice, hearing date, ARB completion, certification, supplemental updates, and next-cycle recurrence so that Operator queues and Owner notices are driven by county time, not a generic Texas calendar.",
    references: refs("https://comptroller.texas.gov/taxes/property-tax/protests/", "https://hcad.org/hcad-online-services/pdata/", "https://www.dallascad.org/Forms/Protest_Process.pdf", "https://traviscad.org/wp-content/uploads/Agent-Meeting_2025.pdf", "https://www.tad.org/about/tarb"),
    implementsSurfaceIds: ["trim-ct-op-county-data", "trim-ct-op-appeal-window", "trim-ct-owner-status"],
    status: "deferred",
  },
  {
    id: "dat-26",
    consideration:
      "From HCAD iFile, DCAD uFile, TCAD eFile, and TAD New Portal, what county-by-county e-file portal features are owner-only, agent-enabled, mass-protest-enabled, evidence-enabled, settlement-enabled, or still legacy-only?",
    solution:
      "Maintain a county e-file capability matrix for HCAD iFile/iSettle owner filing, DCAD uFile owner/PIN filing with settlement limits, TCAD eFile settlement/informal scheduling, and TAD owner protest plus agent mass-protest/export features so that automation selects owner-only, agent-enabled, mass, evidence, settlement, or legacy paths per county.",
    references: refs("https://hcad.org/hcad-help/protests-and-corrections/ifile-and-isettle", "https://dallascad.org/webForms/UFILEONLINE/UFILE_ONLINE_PROTEST_2026.pdf", "https://traviscad.org/efile/", "https://www.tad.org/new-portal"),
    implementsSurfaceIds: ["trim-ct-op-county-data", "trim-ct-op-worker-dispatch", "trim-ct-owner-upload"],
    status: "deferred",
  },
  {
    id: "dat-27",
    consideration:
      "From Harris, Dallas, Travis, and Tarrant public data, which missing or lagging values during ARB periods could create false positives, duplicate protests, stale owner contacts, or bad first-touch county-verification links?",
    solution:
      "Add ARB-period freshness guards for Harris preliminary weekly values, Dallas VID exclusions and no-value ownership files, Travis biweekly/supplemental exports, and Tarrant phased-out/TBD legacy files so that Trim does not create false positives, duplicate protests, stale owner contacts, or broken county-verification links from lagging data.",
    references: refs("https://hcad.org/hcad-online-services/pdata/", "https://www.dallascad.org/PARCEL_GEOM.pdf", "https://traviscad.org/publicinformation/", "https://www.tad.org/resources/data-downloads"),
    implementsSurfaceIds: ["trim-ct-op-county-data", "trim-ct-op-detected-blocked", "trim-ct-owner-county-verify"],
    status: "deferred",
  },
  {
    id: "dat-28",
    consideration:
      "From Harris, Dallas, Travis, and Tarrant public data and Texas PIA cost rules, what is the per-county acquisition-cost model for public downloads, portal access, GIS files, API pulls, manual QA, PIA fallback, and refresh monitoring?",
    solution:
      "Price county acquisition as public download/API cost, portal credential setup, GIS download or API pull, parser maintenance, manual QA, refresh monitoring, PIA request/estimate/deposit, programming/manipulation, and exception remediation so that launch decisions compare total operating cost rather than assuming public data is free.",
    references: refs("https://hcad.org/hcad-online-services/pdata/", "https://www.dallascad.org/DataProducts.aspx", "https://traviscad.org/publicinformation/", "https://www.tad.org/resources/data-downloads", "https://www.texasattorneygeneral.gov/sites/default/files/files/divisions/open-government/conference/12-3CostBasics.pdf"),
    implementsSurfaceIds: ["trim-ct-op-county-data", "trim-ct-op-rollout-gate"],
    status: "deferred",
  },
  {
    id: "dat-29",
    consideration:
      "From Harris, Dallas, Travis, Tarrant, and Texas Comptroller public data sources, which parts of Trim's detection data stack are replicable by an Ownwell-class competitor from public downloads alone, and which county-specific gaps create a defensible data moat?",
    solution:
      "Treat public rolls, GIS downloads, EARS targets, and published county evidence as competitor-replicable while investing in county-specific parsers, freshness monitors, portal capability maps, PIA fallback playbooks, confidential-data exclusions, GIS link QA, and appeal-calendar telemetry so that Trim's moat comes from operational data depth rather than secret public facts.",
    references: refs("https://hcad.org/hcad-online-services/pdata/", "https://www.dallascad.org/DataProducts.aspx", "https://traviscad.org/publicinformation/", "https://www.tad.org/resources/data-downloads", "https://comptroller.texas.gov/taxes/property-tax/data-submissions.php"),
    implementsSurfaceIds: ["trim-ct-op-county-data", "trim-ct-op-rollout-gate", "trim-ct-op-audit"],
    status: "deferred",
  },
]);
