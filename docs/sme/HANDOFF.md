# Trim - SME Handoff to PM and CTO

Every bullet below traces to Pass 1 / Pass 2 SME files. This is input for PM Register work and CTO Wiring work, not a redesign. See `CROSS-CUTTING.md` for the 10 findings that hit both product and system and need joint reconciliation.

## For PM (outcomes / states / never-sees - `docs/register/*`)

- **Make `blocked_jurisdiction` visible before notice** where solicitation, licensure, attorney-only, or missing representative authority prevents lawful outreach; the Owner should not reach authorization before Trim knows it cannot act. *(representation-licensure lic-01-lic-04, lic-22-lic-28; solicitation-advertising-compliance sol-28)*
- **Treat the ALG notice as an analyzed estimate, not a promised result:** use "our analysis indicates," "estimated excess," and "subject to appeal outcome"; never show "you are over-assessed," "we can lower your taxes," or "no risk" as unqualified first-touch copy. *(solicitation-advertising-compliance sol-01-sol-04; valuation-mass-appraisal val-26-val-27; trust-anti-scam-perception trs-21)*
- **Require the trust kit before consent:** private-company / not-government disclaimer, named county or CAD, parcel/account ID, owner/entity and situs match, official CAD verification path, assessed value, record-as-of date, fee terms, and self-file disclosure. *(trust-anti-scam-perception trs-01-trs-15, trs-22-trs-26; county-data dat-22-dat-24, dat-27)*
- **Keep income docs optional but valuable:** public data can serve the opportunity; rent roll, P&L, leases, occupancy, concessions, and condition evidence upgrade the case and should be requested as evidence maximizers with confidentiality language. *(valuation-mass-appraisal val-06-val-15; licensed-ptc-practitioner ptc-02-ptc-09; appraisal-district-board brd-21)*
- **Add Worker hearing states as real Owner/Operator/Worker surface:** `hearing_queued`, `hearing_active`, `hearing_reported`, plus postponed/dismissed/withdrawn/pending-order outcomes, because hearing logistics and same-day reports decide whether value creation continues. *(appraisal-district-board brd-01-brd-09, brd-19-brd-28)*
- **The Owner never sees Worker pay, other Owners, Operator sponsorship math, or internal PTC capacity rosters;** they may see the licensed representative identity needed for trust and compliance. *(WORLD.md never-sees; representation-licensure lic-03, lic-09; trust-anti-scam-perception trs-23)*
- **Add explicit invoice-outstanding / dispute states after `reduced`:** Trim invoices measured first-year savings after documented reduction; there is no escrow or deduction-at-source. *(licensed-ptc-practitioner ptc-22-ptc-24; mortgage-escrow esc-16-esc-18)*
- **Separate documented savings from felt win timing:** escrowed residential and some multifamily/lender-reserve cases may show benefit through a surplus refund, reserve credit, lower future payment, or shortage reduction. *(mortgage-escrow esc-01-esc-07, esc-15-esc-27)*
- **Give Owners tax/accounting disclosure before authorization or invoice:** reductions may lower expense, create refund income under the tax-benefit rule, affect partner/tenant reconciliations, and make Trim's fee a vendor/reporting event. *(tax-accounting-treatment tax-01-tax-03, tax-11-tax-13, tax-18, tax-23)*
- **Do not show one generic "appeal more" path:** post-ARB choices must distinguish settlement-only, regular binding arbitration, SOAH, district court, attorney handoff, no escalation, and owner tax-payment/deposit obligations. *(judicial-arbitration-attorney jud-01-jud-24; representation-licensure lic-20-lic-23)*
- **Never let the product imply Trim is the county, appraisal district, ARB, tax office, or already the Owner's agent before authorization.** *(solicitation-advertising-compliance sol-05-sol-07, sol-16-sol-19; trust-anti-scam-perception trs-03-trs-05)*

## For CTO (integrations / jobs / audit / jurisdiction gates - Wiring)

- **Build a pre-notice jurisdiction and copy gate** that blocks delivery on missing licensure, missing authority where authority is claimed, unsupported guaranteed savings, SMS without consent, government-lookalike layout, missing opt-out, or unverified state/channel variants. *(solicitation-advertising-compliance sol-08-sol-12, sol-16-sol-19, sol-28; representation-licensure lic-01-lic-04)*
- **Represent Texas PTC capacity as named-human capacity:** registered human, senior sponsor, max-10 supervision cap, exception evidence, CE/renewal, status changes, direct-supervision audit, and appointment-to-license reconciliation. *(representation-licensure lic-03, lic-05-lic-11, lic-13)*
- **Create county readiness as a multi-field object, not a state flag:** data manifest, parser, GIS/link QA, portal credentials/PINs, e-file capabilities, appeal calendar, evidence rules, Worker checklist, freshness monitor, PIA fallback, and cost model. *(county-data dat-01-dat-29; appraisal-district-board brd-05, brd-28)*
- **Persist trust-kit data as first-class fields:** official CAD URL or manual-search instructions, parcel/account raw and display IDs, tax year, owner/entity, situs, assessed value, record-as-of date, source snapshot, link capability, and verification QA artifact. *(trust-anti-scam-perception trs-09-trs-14, trs-25-trs-26; county-data dat-04, dat-22-dat-24, dat-27)*
- **Add valuation confidence and substantiation records** for every quantified notice: ratio/county calibration, comparable/equity/income inputs, conservative error band, reviewer approval, blocked data-quality flags, and approved copy variant. *(valuation-mass-appraisal val-01-val-05, val-26-val-28; solicitation-advertising-compliance sol-02, sol-14)*
- **Split public detection from private evidence upgrade:** owner-provided income statements, rent rolls, leases, sales prices, and repair documents need confidentiality, scoped access, ARB-retainable packet handling, and litigation hold metadata. *(valuation-mass-appraisal val-14-val-15; appraisal-district-board brd-21; judicial-arbitration-attorney jud-22-jud-23)*
- **Wire the Worker dispatch state machine:** hearing notice trigger, evidence cutoff, appearance mode, authority proof, county packet validator, check-in path, no-show risk, outcome schema, and resolution-funnel telemetry by county/property type. *(appraisal-district-board brd-01-brd-09, brd-19-brd-28)*
- **Build invoice/collections after `reduced`:** corrected value/bill/order/refund proof, tax-rate math, measured-savings source of truth, card/ACH authorization status, invoice due, dunning, dispute reason, and collection audit. *(licensed-ptc-practitioner ptc-22-ptc-24; mortgage-escrow esc-16-esc-18)*
- **Add escrow/lender-reserve branches** for servicer evidence packets, corrected-bill/refund proof, annual/off-cycle escrow analysis, reserve-release triggers, borrower-visible cash timing, and invoice evidence when benefit is not a check. *(mortgage-escrow esc-01-esc-27)*
- **Model post-ARB remedies as separate lanes:** RBA eligibility/deposit/appointment, SOAH eligibility/deposit, district-court deadline/tax-payment/counsel handoff, remedy-election lock, order-receipt clock, and litigation workspace. *(judicial-arbitration-attorney jud-01-jud-24; representation-licensure lic-20-lic-23)*
- **Track Owner tax/accounting support artifacts:** corrected bill, refund notice, tax year affected, Trim fee timing, W-9 packet, payment method, 1099 decision support, partnership/tenant flags, and sales-taxability hold-closed state where unverified. *(tax-accounting-treatment tax-01-tax-24)*

## NEEDS VERIFICATION items still open

- County-by-county informal-versus-ARB share for small commercial and multifamily cases, used to size Worker demand. *(licensed-ptc-practitioner ptc-01; appraisal-district-board brd-25-brd-26)*
- Practical informal-offer threshold and local ARB tolerance for consultant equity grids by Harris, Dallas, Tarrant, Travis, Bexar, and future counties. *(licensed-ptc-practitioner ptc-03, ptc-05-ptc-06)*
- Accepted redaction depth for rent rolls, leases, and income statements by metro ARB. *(licensed-ptc-practitioner ptc-08; appraisal-district-board brd-21)*
- First-wave non-Texas representation matrix beyond verified Florida and Missouri examples. *(representation-licensure lic-28; judicial-arbitration-attorney jud-25-jud-28)*
- Texas court representation edge cases for entity owners remain conservative-attorney-lane until verified. *(representation-licensure lic-23; judicial-arbitration-attorney jud-21)*
- State/channel solicitation analogs beyond Texas, California, Georgia, Illinois, Florida, and New York launch notes. *(solicitation-advertising-compliance sol-15, sol-18, sol-27)*
- Parcel-level valuation confidence thresholds for first-touch quantified excess amounts. *(valuation-mass-appraisal val-20, val-26)*
- Launch-state sales taxability for Trim's bundled consulting/data/SaaS/document-prep services. *(tax-accounting-treatment tax-24)*
- Collections/AR incumbent practice: dispute rates, dunning patterns, ACH/card norms, and effective invoice-after-benefit workflows. This is the open 11th-seat candidate, not a sourced fact. *(ROSTER.md watchlist; CROSS-CUTTING.md open item)*

## Files in this room

- `docs/register/SEED.md` - seed context and known unknowns.
- `docs/register/WORLD.md` - Trim world model, seats, states, never-sees.
- `docs/sme/ROSTER.md` - 10 SME seats, targets, rules, and watchlist.
- `docs/sme/pass1/*.md` (10 files) - sourced questions only.
- `docs/sme/pass2/*.md` (10 files) - mechanisms answering Pass 1.
- `docs/sme/CROSS-CUTTING.md` - 10 joint PM/CTO findings plus open 11th-seat candidate.
- `docs/sme/HANDOFF.md` - this file.
