# Trim — Function Leaves (How graph)

Behavioral map for each persona's Core outcome. Node names follow **Module · Modal · Block** convention: Module = top-level section (Portfolio, Notice, Consent…), Modal = specific modal or page it lives on, Block = distinct interactive block within that modal.

Every leaf that has a surface joins to `surfaceId` in `register/trace/surfaces.ts` (prefix: `trim-ct-*`). Flow anchors (`flowId`) map to behavioral flows in `src/app/register/flows/`.

---

## Owner — Core path

**Steps:** Open notice → Consent ticks → See proof/analysis → Authorize (sign once) → Upload docs (optional) → Watch status → See reduction + invoice OR decline

| id | Module · Modal · Block | flowId | surfaceId |
|----|------------------------|--------|-----------|
| `owner-leaf-portfolio` | Portfolio · Cases Module · Parcel list | `activate-notice` | `trim-ct-owner-portfolio` |
| `owner-leaf-notice` | Portfolio · Case Modal · Notice Block | `activate-notice` | `trim-ct-owner-notice` |
| `owner-leaf-trust` | Portfolio · Case Modal · Trust Strip Block | `activate-notice` | `trim-ct-owner-trust` |
| `owner-leaf-consent` | Portfolio · Case Modal · Consent Block | `consent-authorize` | `trim-ct-owner-consent` |
| `owner-leaf-sign` | Portfolio · Case Modal · Authorize Block | `consent-authorize` | `trim-ct-owner-authorize` |
| `owner-leaf-upload` | Portfolio · Case Modal · Upload Block | `consent-authorize` | `trim-ct-owner-upload` |
| `owner-leaf-status` | Portfolio · Case Modal · Status Block | `evidence-hearing` | `trim-ct-owner-status` |
| `owner-leaf-decline` | Portfolio · Case Modal · Decline Block | `consent-authorize` | `trim-ct-owner-decline` |
| `owner-leaf-reduction` | Portfolio · Case Modal · Reduction Block | `reduce-invoice` | `trim-ct-owner-reduction` |
| `owner-leaf-invoice` | Portfolio · Case Modal · Invoice Block | `reduce-invoice` | `trim-ct-owner-invoice` |

### Owner — Consent sub-path
| id | Module · Modal · Block | flowId | surfaceId |
|----|------------------------|--------|-----------|
| `owner-leaf-trust-bundle` | Portfolio · Case Modal · Trust Bundle Block | `activate-notice` | `trim-ct-owner-trust` |
| `owner-leaf-non-affiliation` | Portfolio · Case Modal · Non-Affiliation Block | `activate-notice` | `trim-ct-owner-trust` |
| `owner-leaf-county-verify` | Portfolio · Case Modal · County Verify Link | `activate-notice` | `trim-ct-owner-trust` |
| `owner-leaf-analysis-framing` | Portfolio · Case Modal · Analysis Framing Block | `activate-notice` | `trim-ct-owner-notice` |
| `owner-leaf-parcel-recap` | Portfolio · Case Modal · Parcel Recap Block | `consent-authorize` | `trim-ct-owner-consent` |

### Owner — Authorize sub-path
| id | Module · Modal · Block | flowId | surfaceId |
|----|------------------------|--------|-----------|
| `owner-leaf-signer-title` | Portfolio · Case Modal · Signer Title Block | `consent-authorize` | `trim-ct-owner-authorize` |
| `owner-leaf-fee-example` | Portfolio · Case Modal · Fee Example Block | `consent-authorize` | `trim-ct-owner-authorize` |
| `owner-leaf-non-collapsible-fee` | Portfolio · Case Modal · Non-Collapsible Fee Block | `consent-authorize` | `trim-ct-owner-authorize` |
| `owner-leaf-contingency-lock` | Portfolio · Case Modal · Contingency Lock Block | `consent-authorize` | `trim-ct-owner-authorize` |
| `owner-leaf-agent-appointment` | Portfolio · Case Modal · Agent Appointment Block | `consent-authorize` | `trim-ct-owner-authorize` |
| `owner-leaf-entity-identity` | Portfolio · Case Modal · Entity Identity Block | `consent-authorize` | `trim-ct-owner-authorize` |

### Owner — Upload sub-path
| id | Module · Modal · Block | flowId | surfaceId |
|----|------------------------|--------|-----------|
| `owner-leaf-upload-header` | Portfolio · Case Modal · Upload Header Block | `consent-authorize` | `trim-ct-owner-upload` |
| `owner-leaf-income-docs` | Portfolio · Case Modal · Income Docs Block | `consent-authorize` | `trim-ct-owner-upload` |
| `owner-leaf-condition-docs` | Portfolio · Case Modal · Condition Docs Block | `consent-authorize` | `trim-ct-owner-upload` |

### Owner — Status / post-hearing sub-path
| id | Module · Modal · Block | flowId | surfaceId |
|----|------------------------|--------|-----------|
| `owner-leaf-evidence-status` | Portfolio · Case Modal · Evidence Status Block | `evidence-hearing` | `trim-ct-owner-status` |
| `owner-leaf-hearing-status` | Portfolio · Case Modal · Hearing Status Block | `evidence-hearing` | `trim-ct-owner-status` |
| `owner-leaf-reduction-detail` | Portfolio · Case Modal · Reduction Detail Block | `reduce-invoice` | `trim-ct-owner-reduction` |
| `owner-leaf-denial-reason` | Portfolio · Case Modal · Denial Reason Block | `reduce-invoice` | `trim-ct-owner-reduction` |

---

## Operator — Core path

**Steps:** Portfolio glance → Jurisdiction / licensure check → Exception queue → Work stuck protest → Dispatch Worker to hearing → Audit glance → Collections dunning → County data health

| id | Module · Modal · Block | flowId | surfaceId |
|----|------------------------|--------|-----------|
| `op-leaf-portfolio` | Clients Module · Clients Table · Portfolio Block | — | `trim-ct-op-portfolio` |
| `op-leaf-jurisdiction` | Settings Module · Jurisdiction Modal · Licensure Table Block | `activate-notice` | `trim-ct-op-jurisdiction` |
| `op-leaf-ptc-capacity` | Settings Module · Jurisdiction Modal · PTC Capacity Block | `activate-notice` | `trim-ct-op-jurisdiction` |
| `op-leaf-exceptions` | Work Module · Exceptions Modal · Exception List Block | `recover-exception` | `trim-ct-op-exceptions` |
| `op-leaf-exception-action` | Work Module · Exceptions Modal · Exception Action Block | `recover-exception` | `trim-ct-op-exceptions` |
| `op-leaf-dispatch` | Work Module · Dispatch Modal · Hearing Queue Block | `evidence-hearing` | `trim-ct-op-worker-dispatch` |
| `op-leaf-dispatch-assign` | Work Module · Dispatch Modal · Worker Assign Block | `evidence-hearing` | `trim-ct-op-worker-dispatch` |
| `op-leaf-audit` | Work Module · Audit Modal · Audit Log Block | — | `trim-ct-op-audit` |
| `op-leaf-collections` | Work Module · Collections Modal · Invoice Queue Block | `reduce-invoice` | `trim-ct-op-collections` |
| `op-leaf-collections-dunning` | Work Module · Collections Modal · Dunning Block | `reduce-invoice` | `trim-ct-op-collections` |
| `op-leaf-county-data` | Work Module · County Data Modal · Roll Health Block | — | `trim-ct-op-county-data` |
| `op-leaf-county-freshness` | Work Module · County Data Modal · Freshness Badges Block | — | `trim-ct-op-county-data` |

---

## Worker — Core path

**Steps:** Browse queue → Preview packet → Accept assignment → Check hearing logistics → Appear / argue → Report outcome → See pay status

| id | Module · Modal · Block | flowId | surfaceId |
|----|------------------------|--------|-----------|
| `worker-leaf-queue` | Queue Module · Queue List · Available Hearings Block | `evidence-hearing` | `trim-ct-worker-queue` |
| `worker-leaf-queue-filter` | Queue Module · Queue List · County Filter Block | `evidence-hearing` | `trim-ct-worker-queue` |
| `worker-leaf-packet` | Queue Module · Packet Modal · Evidence Summary Block | `evidence-hearing` | `trim-ct-worker-packet` |
| `worker-leaf-packet-equity` | Queue Module · Packet Modal · Equity Grid Block | `evidence-hearing` | `trim-ct-worker-packet` |
| `worker-leaf-packet-income` | Queue Module · Packet Modal · Income Approach Block | `evidence-hearing` | `trim-ct-worker-packet` |
| `worker-leaf-packet-authority` | Queue Module · Packet Modal · Authority Proof Block | `evidence-hearing` | `trim-ct-worker-packet` |
| `worker-leaf-assignment` | Queue Module · Assignment Modal · Accept Block | `evidence-hearing` | `trim-ct-worker-assignment` |
| `worker-leaf-hearing` | Assignments Module · Hearing Modal · Logistics Block | `evidence-hearing` | `trim-ct-worker-hearing` |
| `worker-leaf-hearing-checklist` | Assignments Module · Hearing Modal · Checklist Block | `evidence-hearing` | `trim-ct-worker-hearing` |
| `worker-leaf-outcome` | Assignments Module · Outcome Modal · Report Block | `evidence-hearing` | `trim-ct-worker-outcome` |
| `worker-leaf-outcome-reducer` | Assignments Module · Outcome Modal · Reduction Detail Block | `reduce-invoice` | `trim-ct-worker-outcome` |
| `worker-leaf-pay` | Assignments Module · Pay Modal · Pay Status Block | — | `trim-ct-worker-pay` |

---

## Furnishing strips (additive only — no Core flow changes)

| strip | surface |
|-------|---------|
| Days-in-state on protest case | `trim-ct-owner-status` |
| Trust strip: no upfront fee + county-verify link + non-affiliation | `trim-ct-owner-trust` |
| Analysis-not-promise framing on notice (subject to appeal outcome) | `trim-ct-owner-notice` |
| Contingency % fact locked after authorize | `trim-ct-owner-authorize`, `trim-ct-owner-status` |
| "Trim invoices after reduction lands" education fact | `trim-ct-owner-reduction` |
| Exception / stuck reason codes on Operator exceptions | `trim-ct-op-exceptions` |
| Hearing Worker assignment status visible on Owner case | `trim-ct-owner-status` |
| Honest empties for Operator (no Cases where none exist) | `trim-ct-op-exceptions` |
| Recurring "annual re-detection enrolled" chip after authorize | `trim-ct-owner-status` |
| Worker evidence preview before accept | `trim-ct-worker-packet` |
| PTC capacity column in jurisdiction table | `trim-ct-op-jurisdiction` |
| Fee cap column in jurisdiction table | `trim-ct-op-jurisdiction` |
| Collection dunning cycle status at a glance | `trim-ct-op-collections` |
| Roll freshness badge per county | `trim-ct-op-county-data` |
| Hearing scheduled date / board / venue on Owner case | `trim-ct-owner-status` |
