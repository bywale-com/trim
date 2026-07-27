/**
 * Appraisal District / Board Perspective Specialist - considerations (Trim, v2).
 * Domain: evidence formats boards accept; scheduling; remote/written share; what persuades lay boards.
 */
import type { SmeItem } from "../smeTypes";

export const APPRAISAL_DISTRICT_BOARD_ITEMS: SmeItem[] = [
  {
    id: "brd-01",
    consideration:
      "According to Texas Tax Code Chapter 41 and Comptroller protest guidance, which ARB procedure steps from notice of protest through order of determination are mandatory enough to become Trim case-state gates?",
    thesisGap:
      "Trim must not dispatch, argue, close, invoice, or recur a case before the ARB procedure can support that state.",
    solution:
      "Formal-hearing case-state gates for protest filed, evidence due, hearing noticed, appearance selected, hearing held, outcome reported, and order received so that Trim does not dispatch, argue, close, invoice, or recur a case before the ARB procedure can lawfully support that state.",
    references: [
      { title: "Texas Tax Code Chapter 41", url: "https://statutes.capitol.texas.gov/Docs/TX/htm/TX.41.htm" },
      { title: "Texas Comptroller - Property Tax Protests", url: "https://comptroller.texas.gov/taxes/property-tax/protests/" },
    ],
    implementsSurfaceIds: ["trim-ct-owner-status", "trim-ct-worker-hearing", "trim-ct-worker-outcome", "trim-ct-owner-invoice"],
    status: "wiring",
  },
  {
    id: "brd-02",
    consideration:
      "Under Texas Tax Code Chapter 41, 34 TAC Rule 9.805, and local ARB procedures, exactly when must the appraisal district, owner, agent, and ARB exchange or retain evidence?",
    thesisGap:
      "Packets need a hearing-date and request-date calendar that preserves timely sharing and board retention.",
    solution:
      "Evidence-exchange and retention calendar keyed to the hearing date, owner request date, county portal cutoff, and ARB record rules so that every packet is timely shared, reviewable by the opposing side, and preserved in a form the board can keep.",
    references: [
      { title: "Texas Tax Code Chapter 41", url: "https://statutes.capitol.texas.gov/Docs/TX/htm/TX.41.htm" },
      { title: "34 Texas Administrative Code Section 9.805", url: "https://www.law.cornell.edu/regulations/texas/34-Tex-Admin-Code-SS-9-805" },
    ],
    implementsSurfaceIds: ["trim-ct-op-appeal-window", "trim-ct-worker-packet", "trim-ct-worker-county-rules"],
    status: "wiring",
  },
  {
    id: "brd-03",
    consideration:
      "Using Comptroller protest guidance and Texas Tax Code Chapter 41, what hearing-notice, information-request, and scheduling deadlines should Trim treat as hard dispatch constraints?",
    thesisGap:
      "Worker assignments should only be created when notice, packet, and schedule constraints still allow a valid hearing.",
    solution:
      "Hard dispatch-deadline guard for protest filing, hearing notice lead time, information-request cutoff, evidence-submission cutoff, and appearance-mode election so that Worker assignments are created only when notice, packet, and schedule constraints still allow a valid hearing.",
    references: [
      { title: "Texas Comptroller - Property Tax Protests", url: "https://comptroller.texas.gov/taxes/property-tax/protests/" },
      { title: "Texas Tax Code Chapter 41", url: "https://statutes.capitol.texas.gov/Docs/TX/htm/TX.41.htm" },
    ],
    implementsSurfaceIds: ["trim-ct-op-worker-dispatch", "trim-ct-op-appeal-window", "trim-ct-worker-queue"],
    status: "wiring",
  },
  {
    id: "brd-04",
    consideration:
      "Under Texas Tax Code Section 41.45 and Comptroller ARB manuals, what are the practical differences among in-person, telephone, videoconference, and affidavit appearances from the board's perspective?",
    thesisGap:
      "Worker instructions need appearance-mode playbooks, not a single generic hearing event.",
    solution:
      "Appearance-mode playbooks for in-person, telephone, videoconference, and affidavit hearings so that the Worker knows whether to travel, call, join video, or submit sworn written evidence without losing the right to present.",
    references: [
      { title: "Texas Tax Code Chapter 41", url: "https://statutes.capitol.texas.gov/Docs/TX/htm/TX.41.htm" },
      { title: "Texas Comptroller - ARB publications", url: "https://comptroller.texas.gov/taxes/property-tax/docs/" },
    ],
    implementsSurfaceIds: ["trim-ct-worker-hearing", "trim-ct-worker-appear-checklist", "trim-ct-worker-county-rules"],
    status: "partial",
  },
  {
    id: "brd-05",
    consideration:
      "Which county-specific evidence submission rules in Harris, Dallas, and Travis would cause an otherwise good Trim packet to be excluded or ignored?",
    thesisGap:
      "Persuasive evidence can be lost if local submission channel, deadline, format, copy, or labeling rules are missed.",
    solution:
      "County-specific packet validator for Harris, Dallas, Travis, and each launched CAD so that evidence that is otherwise persuasive is not excluded, ignored, or left unviewable because it missed a local submission channel, deadline, format, copy, or labeling rule.",
    references: [
      { title: "Harris CAD - Remote Formal Hearing", url: "https://hcad.org/remote-formal-hearing-with-appraisal-review-board/" },
      { title: "Dallas CAD - Protest Procedures", url: "https://www.dallascad.org/Protest_Procedures.pdf" },
      { title: "Travis ARB - Formal Hearing Procedures", url: "https://traviscad.org/wp-content/uploads/Travis-Appraisal-Review-Board-Formal-Hearing-Procedures.pdf" },
    ],
    implementsSurfaceIds: ["trim-ct-worker-packet", "trim-ct-worker-county-rules", "trim-ct-op-county-data"],
    status: "partial",
  },
  {
    id: "brd-06",
    consideration:
      "From Harris CAD 2026 hearing rules and procedures, what evidence organization, oath, affirmation, or presenter-authority details matter most to an ARB panel before it listens to valuation arguments?",
    thesisGap:
      "ARB panels need to trust the presenter and packet organization before considering valuation merits.",
    solution:
      "Pre-argument readiness checklist for exhibit order, sworn testimony, presenter identity, authority to appear, and panel-facing packet organization so that an ARB panel can trust the Worker before it reaches the valuation merits.",
    references: [
      { title: "Harris CAD - 2026 Hearing Rules and Procedures", url: "https://hcad.org/assets/uploads/pdf/resources/2026/2026-Hearings-Rules-and-Procedures-Final.pdf" },
    ],
    implementsSurfaceIds: ["trim-ct-worker-appear-checklist", "trim-ct-worker-packet", "trim-ct-worker-hearing"],
    status: "partial",
  },
  {
    id: "brd-07",
    consideration:
      "From Dallas CAD protest process and Dallas CAD ARB procedures, what file formats, physical media, copy-count, email, and device constraints should a Worker packet satisfy before the hearing begins?",
    thesisGap:
      "Dallas evidence must be exportable into forms the ARB can open, retain, and consider.",
    solution:
      "Dallas packet export profile for accepted file formats, physical-media handling, copy counts, email rules, and device limitations so that a Dallas Worker arrives with evidence the ARB can actually open, retain, and consider.",
    references: [
      { title: "Dallas CAD - Protest Process", url: "https://www.dallascad.org/forms/protest_process.pdf" },
      { title: "Dallas CAD - ARB Procedures", url: "https://www.dallascad.org/ARB_Procedures.pdf" },
    ],
    implementsSurfaceIds: ["trim-ct-worker-packet", "trim-ct-worker-county-rules"],
    status: "partial",
  },
  {
    id: "brd-08",
    consideration:
      "From Travis CAD ARB hearings and Travis ARB formal hearing procedures, how do telephone, videoconference, affidavit, and in-person formats change Worker appearance logistics?",
    thesisGap:
      "Travis assignments need correct check-in instructions, submission method, standby expectation, and no-show risk by mode.",
    solution:
      "Travis appearance logistics router for telephone, videoconference, affidavit, and in-person hearings so that each assignment carries the correct check-in instructions, submission method, standby expectation, and no-show risk.",
    references: [
      { title: "Travis CAD - ARB Hearings", url: "https://traviscad.org/arbhearings/" },
      { title: "Travis ARB - Formal Hearing Procedures", url: "https://traviscad.org/wp-content/uploads/Travis-Appraisal-Review-Board-Formal-Hearing-Procedures.pdf" },
    ],
    implementsSurfaceIds: ["trim-ct-worker-hearing", "trim-ct-worker-appear-checklist", "trim-ct-op-worker-dispatch"],
    status: "partial",
  },
  {
    id: "brd-09",
    consideration:
      "Based on Harris CAD remote hearing guidance, what check-in, waiting-room, no-show, and evidence-processing behaviors should Trim model for Harris County hearing-day operations?",
    thesisGap:
      "Remote settings need hearing-day progress states, not one calendar event.",
    solution:
      "Harris remote-hearing state machine for check-in, waiting room, panel call, evidence processing, missed-call handling, and dismissal risk so that Trim can track hearing-day progress instead of treating a remote setting as a single calendar event.",
    references: [
      { title: "Harris CAD - Remote Formal Hearing", url: "https://hcad.org/remote-formal-hearing-with-appraisal-review-board/" },
    ],
    implementsSurfaceIds: ["trim-ct-worker-hearing", "trim-ct-worker-appear-checklist", "trim-ct-owner-hearing-status"],
    status: "wiring",
  },
  {
    id: "brd-10",
    consideration:
      "Based on Dallas CAD uFile guidance, how does an online protest or settlement workflow change the timing between filing, informal review, and a scheduled ARB telephone hearing?",
    thesisGap:
      "Dallas cases may remain negotiable online before they are truly committed to formal dispatch.",
    solution:
      "Dallas uFile workflow branch for online protest filing, informal review, settlement offer, owner response, and scheduled ARB telephone hearing so that Trim distinguishes cases still negotiable online from cases already committed to formal dispatch.",
    references: [
      { title: "Dallas CAD - uFile Online Protest Guide", url: "https://dallascad.org/webForms/UFILEONLINE/UFILE_ONLINE_PROTEST_2026.pdf" },
    ],
    implementsSurfaceIds: ["trim-ct-op-worker-dispatch", "trim-ct-owner-status", "trim-ct-worker-hearing"],
    status: "wiring",
  },
  {
    id: "brd-11",
    consideration:
      "Based on Travis CAD e-file and informal protest process guidance, what events distinguish a settlement offer, an informal meeting, and a formal ARB hearing in the operational record?",
    thesisGap:
      "The case record needs to identify which resolution path created the current value and next action.",
    solution:
      "Travis operational event taxonomy for settlement offer, informal meeting, owner acceptance or rejection, withdrawal, and formal ARB hearing so that the case record shows which resolution path created the current value and next action.",
    references: [
      { title: "Travis CAD - eFile", url: "https://traviscad.org/efile/" },
      { title: "Travis CAD - Informals", url: "https://traviscad.org/informals/" },
    ],
    implementsSurfaceIds: ["trim-ct-owner-status", "trim-ct-worker-hearing", "trim-ct-op-audit"],
    status: "wiring",
  },
  {
    id: "brd-12",
    consideration:
      "According to Texas Tax Code Chapter 41, Travis CAD ARB information, and Harris/Dallas procedures, how are ARB panels composed, and when can a single-member or multi-member panel materially change hearing strategy?",
    thesisGap:
      "Script depth, escalation risk, and Worker preparation may differ by decision-maker composition.",
    solution:
      "Panel-composition field for full-board, multi-member panel, and single-member hearing settings so that Trim can tune script depth, escalation risk, and Worker preparation to the number and role of decision makers present.",
    references: [
      { title: "Texas Tax Code Chapter 41", url: "https://statutes.capitol.texas.gov/Docs/TX/htm/TX.41.htm" },
      { title: "Travis CAD - ARB", url: "https://traviscad.org/arb/" },
    ],
    implementsSurfaceIds: ["trim-ct-worker-hearing", "trim-ct-worker-county-rules", "trim-ct-worker-appear-checklist"],
    status: "deferred",
  },
  {
    id: "brd-13",
    consideration:
      "From Comptroller ARB training/manual publications and county hearing procedures, what kinds of evidence do lay board members find easiest to credit in residential, small commercial, and multifamily valuation protests?",
    thesisGap:
      "Lay board members need clean valuation proof before technical detail.",
    solution:
      "Board-readable evidence templates for residential, small commercial, and multifamily protests so that lay members see clean comparable tables, income support, condition proof, and requested value before technical valuation detail.",
    references: [
      { title: "Texas Comptroller - ARB publications", url: "https://comptroller.texas.gov/taxes/property-tax/docs/" },
    ],
    implementsSurfaceIds: ["trim-ct-worker-packet", "trim-ct-worker-evidence-preview", "trim-ct-worker-hearing"],
    status: "partial",
  },
  {
    id: "brd-14",
    consideration:
      "From Texas Tax Code Chapter 41, Dallas CAD ARB procedures, and Travis CAD ARB hearings, when must the owner or agent state an opinion of value, and how specific does that opinion need to be for market-value and unequal-appraisal protests?",
    thesisGap:
      "Hearing scripts and packet summaries need a specific requested value before the panel deliberates.",
    solution:
      "Required owner-value position in the hearing script and packet summary so that market-value and equal-and-uniform protests state a specific requested value before the panel needs to deliberate.",
    references: [
      { title: "Texas Tax Code Chapter 41", url: "https://statutes.capitol.texas.gov/Docs/TX/htm/TX.41.htm" },
      { title: "Dallas CAD - ARB Procedures", url: "https://www.dallascad.org/ARB_Procedures.pdf" },
      { title: "Travis CAD - ARB Hearings", url: "https://traviscad.org/arbhearings/" },
    ],
    implementsSurfaceIds: ["trim-ct-worker-packet", "trim-ct-worker-hearing", "trim-ct-owner-analysis-framing"],
    status: "partial",
  },
  {
    id: "brd-15",
    consideration:
      "Using Comptroller protest guidance and the Travis CAD ARB page, what evidence or argument patterns tend to irritate lay ARB panels even when the underlying valuation point may be valid?",
    thesisGap:
      "Valid valuation points can be buried under behavior that lay boards discount.",
    solution:
      "Panel-irritant filter for unsupported outrage, irrelevant tax-bill complaints, excessive exhibits, attacks on CAD staff, and arguments without a requested value so that valid valuation points are not buried under behavior lay boards discount.",
    references: [
      { title: "Texas Comptroller - Property Tax Protests", url: "https://comptroller.texas.gov/taxes/property-tax/protests/" },
      { title: "Travis CAD - ARB", url: "https://traviscad.org/arb/" },
    ],
    implementsSurfaceIds: ["trim-ct-worker-appear-checklist", "trim-ct-worker-hearing"],
    status: "deferred",
  },
  {
    id: "brd-16",
    consideration:
      "Using 34 TAC Rule 9.805, Dallas CAD protest process, and Harris CAD hearing rules, which audio, video, smartphone, hyperlink, USB, email, or portal evidence formats are most likely to fail retention or presentation requirements?",
    thesisGap:
      "Media evidence can fail if the ARB cannot view it during the hearing and keep the required record afterward.",
    solution:
      "Retainable-evidence media policy that converts smartphone media, links, USB files, video, audio, emails, and portal uploads into board-accepted artifacts so that the ARB can view the evidence during the hearing and keep the required record afterward.",
    references: [
      { title: "34 Texas Administrative Code Section 9.805", url: "https://www.law.cornell.edu/regulations/texas/34-Tex-Admin-Code-SS-9-805" },
      { title: "Dallas CAD - Protest Process", url: "https://www.dallascad.org/forms/protest_process.pdf" },
      { title: "Harris CAD - 2026 Hearing Rules and Procedures", url: "https://hcad.org/assets/uploads/pdf/resources/2026/2026-Hearings-Rules-and-Procedures-Final.pdf" },
    ],
    implementsSurfaceIds: ["trim-ct-worker-packet", "trim-ct-worker-county-rules", "trim-ct-worker-evidence-preview"],
    status: "wiring",
  },
  {
    id: "brd-17",
    consideration:
      "From Harris CAD hearing rules, Dallas CAD procedures, and Travis CAD ARB hearings, how do ARB norms differ for commercial, multifamily, business personal property, and residential dockets?",
    thesisGap:
      "Worker packets should match property-type evidence norms, pacing, and board expectations.",
    solution:
      "Docket-type variants for commercial, multifamily, business personal property, and residential hearings so that Worker packets match the evidence norms, pacing, and board expectations of the property type being heard.",
    references: [
      { title: "Harris CAD - 2026 Hearing Rules and Procedures", url: "https://hcad.org/assets/uploads/pdf/resources/2026/2026-Hearings-Rules-and-Procedures-Final.pdf" },
      { title: "Dallas CAD - Protest Procedures", url: "https://www.dallascad.org/Protest_Procedures.pdf" },
      { title: "Travis CAD - ARB Hearings", url: "https://traviscad.org/arbhearings/" },
    ],
    implementsSurfaceIds: ["trim-ct-worker-packet", "trim-ct-worker-county-rules", "trim-ct-worker-hearing"],
    status: "partial",
  },
  {
    id: "brd-18",
    consideration:
      "According to Texas Tax Code Chapter 41, Comptroller protest guidance, and county procedures, when can a property owner or agent request postponement, rescheduling, evening, weekend, remote, or reopened hearings?",
    thesisGap:
      "Procedural rights can be lost if reschedule or remote-election paths are not surfaced before bad settings become dismissals.",
    solution:
      "Postponement and reschedule request engine for statutory first requests, good-cause requests, evening or weekend settings, remote appearance elections, and reopened-hearing paths so that Trim preserves procedural rights before a missed or bad setting becomes a dismissal.",
    references: [
      { title: "Texas Tax Code Chapter 41", url: "https://statutes.capitol.texas.gov/Docs/TX/htm/TX.41.htm" },
      { title: "Texas Comptroller - Property Tax Protests", url: "https://comptroller.texas.gov/taxes/property-tax/protests/" },
    ],
    implementsSurfaceIds: ["trim-ct-worker-hearing", "trim-ct-op-exceptions", "trim-ct-op-appeal-window"],
    status: "wiring",
  },
  {
    id: "brd-19",
    consideration:
      "From Harris remote guidance, Dallas protest process, and Travis ARB hearings, what Worker arrival, check-in, queue, call-in, and dismissal risks should be visible in Trim before dispatch?",
    thesisGap:
      "Operator dispatch needs hearing-day failure modes before assigning or releasing a Worker.",
    solution:
      "Worker dispatch risk checklist for arrival time, check-in channel, queue position, call-in number, device readiness, evidence receipt, and dismissal instruction so that the Operator sees hearing-day failure modes before assigning or releasing the Worker.",
    references: [
      { title: "Harris CAD - Remote Formal Hearing", url: "https://hcad.org/remote-formal-hearing-with-appraisal-review-board/" },
      { title: "Dallas CAD - Protest Process", url: "https://www.dallascad.org/forms/protest_process.pdf" },
      { title: "Travis CAD - ARB Hearings", url: "https://traviscad.org/arbhearings/" },
    ],
    implementsSurfaceIds: ["trim-ct-op-worker-dispatch", "trim-ct-worker-appear-checklist", "trim-ct-worker-hearing"],
    status: "wiring",
  },
  {
    id: "brd-20",
    consideration:
      "Using Comptroller Form 50-162 and local ARB procedures, what proof of authority does a board or panel actually inspect before allowing a Worker or consultant to speak?",
    thesisGap:
      "The board must be able to verify Worker speaking authority before testimony starts.",
    solution:
      "Authority-proof gate for Appointment of Agent, entity signer authority, consultant identity, and presenter permission so that the board can verify the Worker is allowed to speak before testimony starts.",
    references: [
      { title: "Texas Comptroller - Property Tax Protests", url: "https://comptroller.texas.gov/taxes/property-tax/protests/" },
    ],
    implementsSurfaceIds: ["trim-ct-owner-agent-appointment", "trim-ct-worker-appear-checklist", "trim-ct-op-standing-snapshot"],
    status: "wiring",
  },
  {
    id: "brd-21",
    consideration:
      "According to Texas Tax Code Chapter 41, 34 TAC Rule 9.805, and county procedures, how should Trim handle confidential owner documents such as rent rolls, income statements, repair invoices, leases, or photographs that become ARB evidence?",
    thesisGap:
      "Sensitive owner documents need minimized, scoped, required sharing and retention under the ARB evidence record.",
    solution:
      "Confidential evidence handling lane for rent rolls, income statements, leases, repair invoices, and photographs so that sensitive owner documents are minimized, scoped to the hearing packet, shared only as required, and retained under the ARB evidence record.",
    references: [
      { title: "Texas Tax Code Chapter 41", url: "https://statutes.capitol.texas.gov/Docs/TX/htm/TX.41.htm" },
      { title: "34 Texas Administrative Code Section 9.805", url: "https://www.law.cornell.edu/regulations/texas/34-Tex-Admin-Code-SS-9-805" },
    ],
    implementsSurfaceIds: ["trim-ct-owner-income-docs", "trim-ct-worker-packet", "trim-ct-op-audit"],
    status: "wiring",
  },
  {
    id: "brd-22",
    consideration:
      "From Travis CAD ARB information, Comptroller ARB publications, and Texas Tax Code Chapter 41, what ex parte, conflict-of-interest, public-hearing, or deliberation rules matter to a Worker who appears repeatedly before the same panels?",
    thesisGap:
      "Repeated Worker appearances could create disqualification, credibility, or record-integrity problems if ethics boundaries are not explicit.",
    solution:
      "ARB ethics boundary rules for ex parte contact, repeated panel appearances, conflicts, public-hearing conduct, and deliberation separation so that Workers do not create disqualification, credibility, or record-integrity problems across repeated hearings.",
    references: [
      { title: "Travis CAD - ARB", url: "https://traviscad.org/arb/" },
      { title: "Texas Comptroller - ARB publications", url: "https://comptroller.texas.gov/taxes/property-tax/docs/" },
      { title: "Texas Tax Code Chapter 41", url: "https://statutes.capitol.texas.gov/Docs/TX/htm/TX.41.htm" },
    ],
    implementsSurfaceIds: ["trim-ct-worker-appear-checklist", "trim-ct-worker-county-rules", "trim-ct-op-audit"],
    status: "deferred",
  },
  {
    id: "brd-23",
    consideration:
      "Based on Comptroller protest guidance and Texas Tax Code Chapter 41, how do boards weigh fee-simple market-value evidence versus equal-and-uniform evidence in the same protest?",
    thesisGap:
      "Panels need separate legal frames to grant relief on either theory without mixing sales proof and assessment-ratio proof.",
    solution:
      "Dual-theory presentation frame separating fee-simple market value from equal-and-uniform evidence so that the panel can grant relief on either legally available theory without confusing sales proof with assessment-ratio proof.",
    references: [
      { title: "Texas Comptroller - Property Tax Protests", url: "https://comptroller.texas.gov/taxes/property-tax/protests/" },
      { title: "Texas Tax Code Chapter 41", url: "https://statutes.capitol.texas.gov/Docs/TX/htm/TX.41.htm" },
    ],
    implementsSurfaceIds: ["trim-ct-worker-packet", "trim-ct-worker-hearing", "trim-ct-worker-evidence-preview"],
    status: "partial",
  },
  {
    id: "brd-24",
    consideration:
      "Using Harris CAD hearing rules, Dallas CAD protest procedures, and Travis CAD ARB hearings, what time limits or docket-pressure norms determine how short a persuasive Trim hearing script must be?",
    thesisGap:
      "A long narrative is unlikely to survive docket pressure even with good evidence.",
    solution:
      "Timed hearing script with one-page value ask, exhibit index, strongest three arguments, and fallback answers so that the Worker can persuade within docket-pressure limits instead of relying on a long narrative.",
    references: [
      { title: "Harris CAD - 2026 Hearing Rules and Procedures", url: "https://hcad.org/assets/uploads/pdf/resources/2026/2026-Hearings-Rules-and-Procedures-Final.pdf" },
      { title: "Dallas CAD - Protest Procedures", url: "https://www.dallascad.org/Protest_Procedures.pdf" },
      { title: "Travis CAD - ARB Hearings", url: "https://traviscad.org/arbhearings/" },
    ],
    implementsSurfaceIds: ["trim-ct-worker-hearing", "trim-ct-worker-packet", "trim-ct-worker-appear-checklist"],
    status: "partial",
  },
  {
    id: "brd-25",
    consideration:
      "From Harris, Dallas uFile, and Travis e-file guidance, what post-2020 share of protests are actually heard remotely, by affidavit, by telephone, by videoconference, or in person in each launch county?",
    thesisGap:
      "Worker coverage and automation paths must be sized from observed launch-county hearing mix, not assumed post-2020 percentages.",
    solution:
      "County appearance-mode telemetry for remote, affidavit, telephone, videoconference, and in-person outcomes so that Trim sizes Worker coverage and automation paths from observed launch-county hearing mix rather than assumed post-2020 percentages.",
    references: [
      { title: "Harris CAD - Remote Formal Hearing", url: "https://hcad.org/remote-formal-hearing-with-appraisal-review-board/" },
      { title: "Dallas CAD - uFile Online Protest Guide", url: "https://dallascad.org/webForms/UFILEONLINE/UFILE_ONLINE_PROTEST_2026.pdf" },
      { title: "Travis CAD - eFile", url: "https://traviscad.org/efile/" },
    ],
    implementsSurfaceIds: ["trim-ct-op-worker-dispatch", "trim-ct-worker-queue", "trim-ct-owner-hearing-status"],
    status: "deferred",
  },
  {
    id: "brd-26",
    consideration:
      "Using Travis informal process guidance, Dallas uFile guidance, and Harris hearing rules, what percentage of filed protests resolve through automated offer, informal meeting, withdrawal, or formal ARB order by county and property type?",
    thesisGap:
      "Worker demand and owner status forecasts need county/property-type resolution funnel data.",
    solution:
      "Resolution-funnel telemetry by county and property type for automated offer, informal meeting, withdrawal, formal ARB order, reduction, and denial so that Trim can forecast Worker demand and owner status from measured funnel behavior instead of generic protest averages.",
    references: [
      { title: "Travis CAD - Informals", url: "https://traviscad.org/informals/" },
      { title: "Dallas CAD - uFile Online Protest Guide", url: "https://dallascad.org/webForms/UFILEONLINE/UFILE_ONLINE_PROTEST_2026.pdf" },
      { title: "Harris CAD - 2026 Hearing Rules and Procedures", url: "https://hcad.org/assets/uploads/pdf/resources/2026/2026-Hearings-Rules-and-Procedures-Final.pdf" },
    ],
    implementsSurfaceIds: ["trim-ct-op-worker-dispatch", "trim-ct-owner-status", "trim-ct-worker-outcome"],
    status: "deferred",
  },
  {
    id: "brd-27",
    consideration:
      "According to Texas Tax Code Chapter 41, Comptroller protest guidance, and county ARB pages, what hearing outcome details must a Worker report immediately so Trim can distinguish reduced, denied, postponed, dismissed, withdrawn, and pending-order cases?",
    thesisGap:
      "Same-day outcome reporting is required to update Owner status, Operator queues, escalation decisions, and invoice eligibility.",
    solution:
      "Immediate outcome report schema for reduced value, denied protest, postponed hearing, dismissed case, withdrawn case, pending order, next deadline, and documentary proof so that Trim can update Owner status, Operator queues, escalation decisions, and invoicing eligibility the same day.",
    references: [
      { title: "Texas Tax Code Chapter 41", url: "https://statutes.capitol.texas.gov/Docs/TX/htm/TX.41.htm" },
      { title: "Texas Comptroller - Property Tax Protests", url: "https://comptroller.texas.gov/taxes/property-tax/protests/" },
    ],
    implementsSurfaceIds: ["trim-ct-worker-outcome", "trim-ct-owner-reduction-detail", "trim-ct-owner-denial-reason", "trim-ct-op-hearing-report-review"],
    status: "partial",
  },
  {
    id: "brd-28",
    consideration:
      "From Harris CAD, Dallas CAD, Travis CAD, and Comptroller ARB publications, what county-by-county differences are material enough to require separate Worker checklists rather than one Texas-wide formal-hearing flow?",
    thesisGap:
      "One Texas-wide hearing flow can hide material local differences in evidence intake, appearance, authority proof, and outcome reporting.",
    solution:
      "Launch-county checklist matrix for Harris, Dallas, Travis, and future CADs covering evidence intake, appearance modes, check-in, packet format, authority proof, time norms, and outcome reporting so that Trim uses separate Worker instructions when county differences would change hearing behavior.",
    references: [
      { title: "Harris CAD - Remote Formal Hearing", url: "https://hcad.org/remote-formal-hearing-with-appraisal-review-board/" },
      { title: "Dallas CAD - Protest Process", url: "https://www.dallascad.org/forms/protest_process.pdf" },
      { title: "Travis CAD - ARB Hearings", url: "https://traviscad.org/arbhearings/" },
      { title: "Texas Comptroller - ARB publications", url: "https://comptroller.texas.gov/taxes/property-tax/docs/" },
    ],
    implementsSurfaceIds: ["trim-ct-worker-county-rules", "trim-ct-worker-appear-checklist", "trim-ct-op-worker-dispatch"],
    status: "partial",
  },
];
