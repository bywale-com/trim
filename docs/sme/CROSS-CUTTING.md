# Trim - Cross-Cutting Findings (flagged for reconciliation)

A finding is cross-cutting when it hits **both** product/experience (what a persona can do, see, or is blocked from doing) and **system/backend** (what must run, connect, or be provable) from the same underlying fact. These are inputs for PM and CTO to reconcile jointly before Function or Wiring goes deep.

Ranked by how much they change the existing Register (`docs/register/*`).

## 1. ALG notice copy is a compliance-gated output, not just marketing copy

**Product side:** The first touch cannot say "you are over-assessed," "we can lower your taxes," "no risk," or a guaranteed savings result. The Owner needs conditional, parcel-specific wording: assessed value, evidence-supported value, estimated excess tax, and "subject to appeal outcome" / "analysis estimate" language before any consent or authorization ask.

**System side:** CTO needs a pre-notice substantiation packet and copy gate for every parcel: roll facts, comparable/equity/income inputs where used, tax-rate math, confidence threshold, reviewer approval, approved claim text, channel constraints, and suppression rules. Unsupported point estimates or government-lookalike layouts must block `detected -> notified`.

**Sources:** `pass1/solicitation-advertising-compliance.md` sol-01-sol-05, sol-13-sol-20, sol-28; `pass2/solicitation-advertising-compliance.md` sol-01-sol-06, sol-13-sol-20, sol-28; `pass1/valuation-mass-appraisal.md` val-01, val-26-val-27; `pass2/valuation-mass-appraisal.md` val-01, val-26-val-27; `pass1/trust-anti-scam-perception.md` trs-21; `pass2/trust-anti-scam-perception.md` trs-21.

**Reconciliation needed:** PM's Owner notice and consent states must use the same approved-claim vocabulary CTO enforces. If PM designs a notice around a precise dollar promise while CTO only stores raw valuation output, Trim will either violate the solicitation gate or strip out the very proof that makes ALG activation work.

---

## 2. Licensure and jurisdiction standing gate the notice, not only filing or hearing

**Product side:** A detected Owner may never see a served instance if Trim lacks jurisdiction standing, if copy would claim authority before authorization, or if the state/forum requires attorney or registered-agent handling. The Owner experience needs honest blocked/unavailable states, not a late authorization failure.

**System side:** The jurisdiction registry must run before outreach and must be more than a state boolean. It needs representative type, PTC/attorney/licensure status, state solicitation regime, county portal capability, owner-authority requirements, and state/forum variance. Missing licensure, missing authorization where authority is claimed, or attorney-only entity forums must block the relevant transition.

**Sources:** `pass1/representation-licensure.md` lic-01-lic-04, lic-12-lic-18, lic-22-lic-28; `pass2/representation-licensure.md` lic-01-lic-04, lic-12-lic-18, lic-22-lic-28; `pass1/solicitation-advertising-compliance.md` sol-06-sol-07, sol-21-sol-28; `pass2/solicitation-advertising-compliance.md` sol-06-sol-07, sol-21-sol-28; `pass1/judicial-arbitration-attorney.md` jud-21, jud-25-jud-28; `pass2/judicial-arbitration-attorney.md` jud-21, jud-25-jud-28.

**Reconciliation needed:** PM should not model `blocked_jurisdiction` as an Operator-only back-office exception if the same fact decides whether the Owner can legally be notified. CTO should wire jurisdiction checks at notice, authorization, filing, hearing, arbitration, and litigation boundaries, with PM-owned copy for each blocked state.

---

## 3. Texas sponsorship capacity is the launch throttle

**Product side:** Texas metros are the wedge, but Owner demand cannot outpace named-human PTC capacity. The Operator needs capacity-visible county opening, case acceptance, and reassignment states; Owners should not be activated into counties where Trim cannot legally perform the work during the appeal window.

**System side:** CTO needs a named-human licensure registry, senior PTC sponsorship association, max-10 supervision formula, exception evidence, CE/renewal monitors, mid-season license-change reassignment, and case-level audit trails. Firm authorization and licensed human performer are related but distinct fields.

**Sources:** `pass1/representation-licensure.md` lic-03, lic-05-lic-11, lic-13; `pass2/representation-licensure.md` lic-03, lic-05-lic-11, lic-13; `pass1/licensed-ptc-practitioner.md` ptc-14, ptc-25-ptc-26, ptc-28; `pass2/licensed-ptc-practitioner.md` ptc-14, ptc-25-ptc-26, ptc-28.

**Reconciliation needed:** PM's launch and Operator outcomes must expose capacity as an operating state, not an internal HR note. CTO's scheduler must use the same capacity facts to stop outreach, filing, negotiation, and Worker dispatch from landing on invalid personnel.

---

## 4. The Worker hearing layer is real because board procedure creates bounded, human units of work

**Product side:** The Worker is not a generic support role; they exist where formal hearings require a person to appear, speak from authority, handle county-specific logistics, and report the outcome immediately. Worker screens need assignment preview, authority proof, packet checklist, appearance mode, hearing script, outcome report, and pay/status boundaries.

**System side:** CTO needs hearing case states and dispatch constraints: hearing notice, appearance mode, evidence cutoff, packet validator, Form 50-162 or alternate authority, county check-in path, remote/in-person telemetry, no-show risk, and outcome schema. County procedure differences mean separate launch-county Worker checklists, not one Texas-wide flow.

**Sources:** `pass1/appraisal-district-board.md` brd-01-brd-09, brd-19-brd-28; `pass2/appraisal-district-board.md` brd-01-brd-09, brd-19-brd-28; `pass1/licensed-ptc-practitioner.md` ptc-01, ptc-10-ptc-17, ptc-19, ptc-27; `pass2/licensed-ptc-practitioner.md` ptc-01, ptc-10-ptc-17, ptc-19, ptc-27; `pass1/representation-licensure.md` lic-17-lic-19; `pass2/representation-licensure.md` lic-17-lic-19.

**Reconciliation needed:** PM's Worker persona and admission table must match CTO's dispatch state machine. If the product treats hearing as a status label while CTO treats it as a calendar item, Trim will miss evidence, authority, check-in, or outcome gates that decide whether value creation continues.

---

## 5. Collections happen after the reduction because there is no escrow or automatic deduction

**Product side:** The Owner gets the benefit as a lower county bill, refund, reserve credit, or escrow adjustment before Trim collects its cut. The experience needs clear fee terms, measured-savings math, invoice timing, dispute paths, and dunning language that does not pretend Trim can deduct from a fund it never controls.

**System side:** CTO needs invoicing and collections after `reduced`: savings source of truth, corrected bill/order/refund proof, tax-rate math, card/ACH authorization status, invoice due state, dunning, dispute reason, and collection audit. Escrowed or lender-held cases need separate evidence of the benefit even when no cash check reaches the Owner immediately.

**Sources:** `pass1/licensed-ptc-practitioner.md` ptc-22-ptc-24; `pass2/licensed-ptc-practitioner.md` ptc-22-ptc-24; `pass1/mortgage-escrow.md` esc-16-esc-18, esc-22-esc-24; `pass2/mortgage-escrow.md` esc-16-esc-18, esc-22-esc-24; `pass1/tax-accounting-treatment.md` tax-11-tax-13, tax-23; `pass2/tax-accounting-treatment.md` tax-11-tax-13, tax-23.

**Reconciliation needed:** PM needs Owner-facing invoice and dispute states that are honest about realized benefit versus cash timing. CTO needs a collections pipeline without escrow assumptions. **Seat 11 (`collections-ar`) is greenlit** to source incumbent collection practice before Function invents invoicing/dunning from analogy. Mid-sale exposure is *not* a separate seat — one fee-agreement clause (obligation survives transfer / attaches at filing), folded as a single Pass 1 question.

---

## 6. The trust kit is a data requirement, not just a layout requirement

**Product side:** First touch and served instance need the same trust kit: Trim is private, not government; named county/CAD; parcel/account ID; owner/entity and situs match; official CAD verification path; assessed value; record-as-of date; fee terms; self-file disclosure; licensed representative identity where relevant.

**System side:** Detection must persist all trust-kit fields and the verification QA evidence before outreach. CTO needs official CAD URL/deep-link/manual-search capability, county-specific ID formatting, tax-year labels, data snapshot dates, link reliability, and anti-phishing labeling for QR/personalized links.

**Sources:** `pass1/trust-anti-scam-perception.md` trs-01-trs-15, trs-22-trs-26; `pass2/trust-anti-scam-perception.md` trs-01-trs-15, trs-22-trs-26; `pass1/county-data.md` dat-04, dat-22-dat-24, dat-27; `pass2/county-data.md` dat-04, dat-22-dat-24, dat-27; `pass1/solicitation-advertising-compliance.md` sol-05, sol-16-sol-19; `pass2/solicitation-advertising-compliance.md` sol-05, sol-16-sol-19.

**Reconciliation needed:** PM owns what the Owner sees before login; CTO owns whether those facts can be reproduced by a skeptical Owner on the official site. If a trust-kit field is unavailable or stale, the notice should not be sent as if the verification proof exists.

---

## 7. The county-data moat is operational depth, not secret data

**Product side:** Launch should be county-depth over county-breadth. Owner promises, deadlines, verification links, filing paths, Worker instructions, and recurrence all need county-specific behavior for Harris, Dallas, Travis, Tarrant, and future CADs.

**System side:** CTO needs county manifests, CAMA/vendor adapters, canonical schema plus exception flags, GIS metadata, appeal-calendar feeds, e-file capability matrix, portal credential/PIN handling, PIA fallback budgets, freshness guards, and parser QA. Public data is competitor-replicable; durable advantage is maintained county-specific ingestion and workflow telemetry.

**Sources:** `pass1/county-data.md` dat-01-dat-29; `pass2/county-data.md` dat-01-dat-29; `pass1/valuation-mass-appraisal.md` val-04-val-05, val-21, val-28; `pass2/valuation-mass-appraisal.md` val-04-val-05, val-21, val-28; `pass1/appraisal-district-board.md` brd-05, brd-25-brd-28; `pass2/appraisal-district-board.md` brd-05, brd-25-brd-28.

**Reconciliation needed:** PM should not phrase Texas launch as "state on" when the actual product guarantee varies by county. CTO should represent county readiness as a multi-field readiness state, so PM can show/withhold Owner actions based on the same facts.

---

## 8. Income documents are optional for detection but decisive for maximizing commercial appeals

**Product side:** The Owner can be served from public data, but the doc-upload step must be framed as "improves the case" rather than "required to know you may be over-assessed." Commercial and multifamily Owners need clear optional requests for rent roll, trailing P&L, leases, occupancy, concessions, condition evidence, and redaction/confidentiality guidance.

**System side:** CTO needs evidence-upgrade states that distinguish public-data signal, income-approach readiness, confidential owner evidence, ARB-retainable packet, and litigation hold. Private documents need scoped access, county evidence packaging, and tax/accounting downstream metadata.

**Sources:** `pass1/valuation-mass-appraisal.md` val-06-val-15; `pass2/valuation-mass-appraisal.md` val-06-val-15; `pass1/licensed-ptc-practitioner.md` ptc-02-ptc-09, ptc-19; `pass2/licensed-ptc-practitioner.md` ptc-02-ptc-09, ptc-19; `pass1/appraisal-district-board.md` brd-21; `pass2/appraisal-district-board.md` brd-21; `pass1/judicial-arbitration-attorney.md` jud-22-jud-23; `pass2/judicial-arbitration-attorney.md` jud-22-jud-23.

**Reconciliation needed:** PM's upload UX must not undermine the ALG wedge by implying Trim needed private data to detect the opportunity. CTO's case model must still make the private-document branch strong enough to win, preserve confidentiality, and survive ARB or litigation use.

---

## 9. Escrow and lender reserves change felt win timing even when Trim's first wedge is direct-pay commercial

**Product side:** Residential and some multifamily Owners may not feel the reduction as immediate cash. It may reduce an escrow shortage, lower a future monthly deposit, sit in a lender reserve, or wait for annual analysis. The Owner status and invoice copy need to separate documented tax savings from visible cash timing.

**System side:** CTO needs escrow/lender reserve classifiers, corrected bill/refund proof, servicer notice packet, loan-document control map, reserve-release triggers, and timing overlays. These cases need invoice evidence that can prove first-year benefit even when the Owner's bank account does not show a refund.

**Sources:** `pass1/mortgage-escrow.md` esc-01-esc-07, esc-15-esc-27; `pass2/mortgage-escrow.md` esc-01-esc-07, esc-15-esc-27; `pass1/tax-accounting-treatment.md` tax-01-tax-03, tax-18; `pass2/tax-accounting-treatment.md` tax-01-tax-03, tax-18.

**Reconciliation needed:** PM should preserve the direct-payer wedge while adding states for escrowed exceptions and lender-held reserve paths. CTO should not let `reduced` automatically imply `cash_received`; billing and status must use documented savings and felt-win timing as separate facts.

---

## 10. Post-ARB escalation is a separate legal product lane, not a generic "appeal more" button

**Product side:** After denial or partial reduction, Owners need forum-specific choices: no escalation, settlement-only, regular binding arbitration, SOAH, district court, or attorney handoff. Entity-owned commercial parcels often require counsel, separate authorizations, deposits, tax-payment preservation, and realistic economics.

**System side:** CTO needs post-ARB remedy gates for order type, receipt date, deadline, tax payment, value ceiling, forum eligibility, remedy-election lock, arbitration deposits, separate arbitration appointment, attorney consent, litigation hold, and discovery workspace. County order delivery triggers start the clocks.

**Sources:** `pass1/judicial-arbitration-attorney.md` jud-01-jud-24; `pass2/judicial-arbitration-attorney.md` jud-01-jud-24; `pass1/representation-licensure.md` lic-20-lic-23; `pass2/representation-licensure.md` lic-20-lic-23; `pass1/licensed-ptc-practitioner.md` ptc-27; `pass2/licensed-ptc-practitioner.md` ptc-27.

**Reconciliation needed:** PM and CTO should keep ordinary protest states distinct from post-ARB legal remedies. A single "escalate" action would hide forum choice, authority, deadline, deposit, attorney-only, and tax-payment preservation rules that can invalidate the next step.

---

## Seat 11 greenlight (was open item)

**`collections-ar` — collections/AR specialist.** Greenlit because the room confirmed invoice-after-reduction risk with **zero sourced practice** on how contingency firms actually collect. Pass 1 + Pass 2 landed in `docs/sme/pass1/collections-ar.md` and `docs/sme/pass2/collections-ar.md`: dispute rates, dunning language that works, ACH/card authorization norms, industry bad-debt %, invoice-after-benefit workflows. Mid-sale parcel transfer is **one fee-clause question among ~25**, not a seat — write "fee obligation survives transfer / attaches at filing"; skip the ceremony.

See `pass1/collections-ar.md` / `pass2/collections-ar.md`.
