/**
 * Register — World. Machine twin of docs/register/WORLD.md, rendered as
 * structured facts (persona-emergence law, seat sits, admission table) —
 * not a markdown dump.
 */
import { CtFact, CtFactGrid, CtPanel, CtRow, CtStatusTag, ctPalette as t } from "../../shared/primitives";
import { RegisterCanvas } from "../RegisterWorkspace";

const SEATS = [
  {
    id: "owner",
    label: "Owner",
    sit: "One account per owning entity; portfolio of protest cases (parcels × tax years) inside it.",
    servedHow:
      "Instant-served (ALG) or Operator-onboarded (OLG); notice + analysis-not-promise proof; consent; authorize (Appointment of Agent); optional docs; appeal status; reduction / invoice.",
    admitIff: "Account served / invited into the Operator book.",
    neverSee:
      "Other clients' parcels; Operator licensure / PTC capacity math; Worker pay rates; other entities' assessments.",
    notAPersona:
      "CFO / counsel / property manager / delegate — same account, optional admin/delegation feature, not a new seat.",
  },
  {
    id: "operator",
    label: "Operator",
    sit: "Agency cockpit over all Owner instances; detection, outreach, jurisdiction gates, exceptions, collections, audit.",
    servedHow:
      "Portfolio of Owner instances; jurisdiction/licensure registry (TX PTC capacity, fee caps); exception queue; Worker dispatch; audit under Appointment of Agent; collections/dunning.",
    admitIff: "Operator role.",
    neverSee:
      "Acting as the Owner authorized signer inside the client's private consent/authorize — Operator does not replace the entity's signer.",
    notAPersona: undefined,
  },
  {
    id: "worker",
    label: "Worker",
    sit: "Per-hearing advocate (genuine persona — without this seat, formal-level value creation stops in in-person jurisdictions).",
    servedHow:
      "Queue of prepared hearing packets in their county/board coverage; pick up → attend/argue → report outcome → paid per appearance. Tally Worker mechanics reuse (available → accepted → active → done).",
    admitIff: "Worker role + cleared for jurisdiction / board type.",
    neverSee:
      "Owner billing / invoice internals; Operator licensure / sponsorship math; unassigned Owner financials beyond packet scope; other Workers' payouts.",
    notAPersona:
      "Licensed agent-of-record on Trim filings — compliance fact tracked in Operator jurisdiction registry, not a product persona seat.",
  },
];

export function RegisterWorld() {
  return (
    <RegisterCanvas>
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: t.ink }}>World</div>
        <div style={{ fontSize: 12.5, color: t.label, marginTop: 4 }}>
          Value-chain seats only — persona emerges from a gap that would break value creation (Tally-Worker
          test), not from an org chart.
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <CtPanel title="Persona-emergence law">
          <div style={{ fontSize: 12.5, color: t.label, lineHeight: 1.55 }}>
            A Register persona exists only if omitting it leaves a value-chain gap. Org-chart roles (CFO,
            counsel, property manager) are features / delegation inside a seat, not new seats. Value chain:{" "}
            <strong style={{ color: t.ink }}>
              always-on detection &rarr; serve &rarr; consent + authorize &rarr; protest &rarr; reduction &rarr;
              invoice
            </strong>
            .
          </div>
        </CtPanel>

        {SEATS.map((seat) => (
          <CtPanel key={seat.id} title={seat.label}>
            <div style={{ fontSize: 12.5, color: t.label, marginBottom: 12 }}>{seat.sit}</div>
            <CtFactGrid columns={2}>
              <CtFact label="Served how" value={seat.servedHow} />
              <CtFact label="Admit iff" value={seat.admitIff} />
            </CtFactGrid>
            <div style={{ marginTop: 12 }}>
              <CtFact label="Never see" value={seat.neverSee} />
            </div>
            {seat.notAPersona ? (
              <div style={{ marginTop: 12, paddingTop: 12, borderTop: `1px solid ${t.stroke}` }}>
                <CtFact label="Not a persona" value={seat.notAPersona} />
              </div>
            ) : null}
          </CtPanel>
        ))}

        <CtPanel title="Agent" right={<CtStatusTag label="Feature, not a seat" tone="neutral" />}>
          <div style={{ fontSize: 12.5, color: t.label, lineHeight: 1.55 }}>
            Instance agent &sube; Owner UI verbs. Operator agent &sube; Operator UI verbs. Worker may have a
            thin presentation agent over assignment verbs. A requestable overarching operator agent from Owner
            does not live inside the Owner account as owner. Agent = presentation feature (request / route /
            respond) over existing UI verbs — never its own Register persona desk.
          </div>
        </CtPanel>

        <CtPanel
          title="Protest Case admission"
          right={<span style={{ fontSize: 11, color: t.muted }}>Owner · Operator · Worker</span>}
        >
          <div>
            {ADMISSION.map((row, i) => (
              <CtRow key={row.state} last={i === ADMISSION.length - 1} style={{ alignItems: "flex-start" }}>
                <div style={{ width: 160, flexShrink: 0 }}>
                  <code style={{ fontSize: 12, fontWeight: 600, color: t.ink }}>{row.state}</code>
                </div>
                <div style={{ flex: 1, minWidth: 0, fontSize: 12, color: t.label }}>{row.meaning}</div>
                <div style={{ width: 80, flexShrink: 0, fontSize: 11.5, color: t.label }}>{row.owner}</div>
                <div style={{ width: 80, flexShrink: 0, fontSize: 11.5, color: t.label }}>{row.operator}</div>
                <div style={{ width: 70, flexShrink: 0, fontSize: 11.5, color: t.label }}>{row.worker}</div>
              </CtRow>
            ))}
          </div>
          <div style={{ marginTop: 12, fontSize: 11.5, color: t.muted }}>
            Spine: detected &rarr; (jurisdiction / solicitation gate) &rarr; notified &rarr; consented &rarr;
            authorized &rarr; evidence_prep &rarr; informal &harr; (hearing_queued &rarr; hearing_active &rarr;
            hearing_reported) &rarr; reduced | denied &rarr; invoiced &rarr; collected &rarr; recurring.
            Always-on detection — nobody "creates a detection campaign" as Core Function.
          </div>
          <div style={{ marginTop: 8, fontSize: 11.5, color: t.muted }}>
            <strong style={{ color: t.label }}>V</strong> = visible &nbsp;
            <strong style={{ color: t.label }}>T</strong> = actionable &nbsp;
            <strong style={{ color: t.muted }}>—</strong> = not admitted
          </div>
        </CtPanel>

        <CtPanel title="Pending fold-ins" right={<span style={{ fontSize: 11, color: t.muted }}>10 findings</span>}>
          <div style={{ fontSize: 12.5, color: t.label, lineHeight: 1.55 }}>
            See the <strong style={{ color: t.ink }}>Wiring</strong> pane for the full CROSS-CUTTING list — each
            finding hits both product and system and needs joint reconciliation before either side goes deep.
          </div>
        </CtPanel>
      </div>
    </RegisterCanvas>
  );
}

const ADMISSION: {
  state: string;
  meaning: string;
  owner: string;
  operator: string;
  worker: string;
}[] = [
  { state: "detected",          meaning: "Over-assessment signal found; contact not yet legal/allowed",      owner: "—",     operator: "V",     worker: "—" },
  { state: "blocked_jurisdiction", meaning: "No licensure / solicitation-blocked — notice must not fire",   owner: "—",     operator: "V · T", worker: "—" },
  { state: "notified",          meaning: "Served instance delivered; analysis in hand",                      owner: "V · T", operator: "V",     worker: "—" },
  { state: "consented",         meaning: "I see it / understand it / with it",                               owner: "V · T", operator: "V",     worker: "—" },
  { state: "authorized",        meaning: "Appointment of Agent signed; contingency % locked",                owner: "V · T", operator: "V",     worker: "—" },
  { state: "evidence_prep",     meaning: "Packet building (comps / uniformity / income docs)",               owner: "V",     operator: "V · T", worker: "—" },
  { state: "informal",          meaning: "Informal review with assessor in flight",                          owner: "V",     operator: "V",     worker: "—" },
  { state: "hearing_queued",    meaning: "Formal hearing scheduled; packet ready for Worker",                owner: "V",     operator: "V",     worker: "V · T" },
  { state: "hearing_active",    meaning: "Worker accepted; hearing in progress",                             owner: "V",     operator: "V",     worker: "V · T" },
  { state: "hearing_reported",  meaning: "Worker reported board outcome",                                    owner: "V",     operator: "V · T", worker: "V" },
  { state: "reduced",           meaning: "Assessment reduced; savings measurable",                           owner: "V · T", operator: "V",     worker: "—" },
  { state: "denied",            meaning: "Appeal denied at this level (may escalate)",                       owner: "V · T", operator: "V",     worker: "—" },
  { state: "invoiced",          meaning: "Trim cut billed against measured savings",                         owner: "V · T", operator: "V",     worker: "—" },
  { state: "collected",         meaning: "Fee paid",                                                         owner: "V",     operator: "V · T", worker: "—" },
  { state: "declined",          meaning: "Owner walked away",                                                owner: "V · T", operator: "V",     worker: "—" },
  { state: "recurring",         meaning: "Standing auth; awaiting next-cycle re-detection",                  owner: "V",     operator: "V · T", worker: "—" },
];
