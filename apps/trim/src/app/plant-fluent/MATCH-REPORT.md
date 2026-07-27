# Trim × Fluent UI — Match Report

Target: `fluent-ui` → `@fluentui/react-components` v9 (Griffel + tokens)  
Source: `apps/trim/src/app/ct/*` (DS-I gray plant)  
Skills: `fluent-ui-semantic-tokens` SKILL.md + archaeology.md  
Generated: 2026-07-27

---

## Disposition legend

| Code | Meaning |
|---|---|
| `matched` | Fluent inventory component covers the job and all states |
| `matched-partial` | Component covers core job; composed of 2–3 inventory pieces |
| `synthesize` | No inventory component; built from confirmed tokens only |
| `blocked-pending-human-decision` | Skill-flagged ambiguity — cannot silent-default |

---

## Hub

| Concept | Disposition | Resolved to | Tokens used | Notes |
|---|---|---|---|---|
| Persona cards with badge counts | `matched` | Absolute `<a href="/prototype-fluent/{owner,operator,worker}" aria-label="…">` wrapping `Card` | `colorNeutralBackground1`, `colorNeutralBackground1Hover`, `colorNeutralStroke1` | Persona labels are Owner / Operator / Worker and resolve to the isolated Fluent routes. Card hover ambiguity resolved as has-fill-at-rest. |
| Status badge counts | `matched` | `Badge appearance="tint"` | `colorBrandBackground2` (tint) | tint appearance confirmed for inline status |
| Cross-document links | `synthesize` | Plain `<a href>` | `colorBrandForeground1` | Isolation rule; SPA Navigate not used across document boundaries |

### Register CT panel context

`RegisterClickThroughPanel` now mounts Trim CT desks for reviewers: embedded `OwnerApp`, embedded `WorkerApp`, and an embedded Trim Operator composition from the CT operator modules. This is context only for the Fluent remake; `plant-fluent` still imports no `src/app/ct/` code.

---

## Owner desk

### Portfolio
| Concept | Disposition | Resolved to | Tokens used | Notes |
|---|---|---|---|---|
| Protest case list | `matched` | `Table` + `TableRow` | `colorNeutralForeground1/2/3`, `colorNeutralStroke2` | DataGrid considered; Table used for simpler no-sort use case; DataGrid appropriate for next iteration with sort/filter |
| Status badge per row | `matched` | `Badge appearance="tint"` | Per `PROTEST_STATE_BADGE` map | All 16 ProtestState values mapped |
| Row click to case detail | `synthesize` | URL-param navigation + React Router | — | No Fluent navigation primitive for this pattern |

### Notice
| Concept | Disposition | Resolved to | Tokens used | Notes |
|---|---|---|---|---|
| Analysis-not-promise banner | `matched` | `MessageBar intent="info"` | `colorNeutralBackground1`, `colorNeutralForeground1` | TX TDLR ethics framing planted |
| Proof facts grid | `synthesize` | CSS grid `makeStyles` + `Text` pairs | `colorNeutralForeground3` (labels), `colorNeutralForeground1` (values) | No Fluent DescriptionList — synthesized from confirmed tokens |
| Value reveal (blurred pre-consent) | `synthesize` | `filter: blur` + `opacity` via inline style | — | Accessibility concern: blur only, not `aria-hidden` (deferred) |
| Trust strip | `matched` | `MessageBar intent="info"` | — | No dedicated "info card" component needed |
| County verify link | `matched` | `Link` component | `colorBrandForegroundLink` | Fluent Link handles hover/active states natively |
| Non-affiliation disclaimer | `synthesize` | `Text` in `style={{ backgroundColor: tokens.colorNeutralBackground3 }}` | `colorNeutralBackground3`, `colorNeutralForeground2` | No Fluent "callout" for purely informational persistent content |

### Consent
| Concept | Disposition | Resolved to | Tokens used | Notes |
|---|---|---|---|---|
| Three consent ticks | `matched` | `Checkbox` × 3 | `colorCompoundBrandBackground` (checked fill, confirmed) | Full Fluent Checkbox with label |
| Parcel/county recap above ticks | `synthesize` | `Text caption1` | `colorNeutralForeground2` | No component — furnishing 006 planted |
| Continue button (gated on all ticked) | `matched` | `Button appearance="primary"` disabled | `colorBrandBackground`, `colorNeutralForegroundOnBrand` | Fluent disabled state uses `colorNeutralForegroundDisabled` / `colorNeutralBackgroundDisabled` |

### Authorize
| Concept | Disposition | Resolved to | Tokens used | Notes |
|---|---|---|---|---|
| Fee disclosure | `matched` | `MessageBar intent="info"` | — | Non-collapsible per Register — never gated |
| Fee example | `synthesize` | `Text` block | `colorNeutralForeground2` | No Fluent calculation-display primitive |
| Contingency % locked | `matched-partial` | `Badge color="brand"` + `Text` | `colorBrandBackground2` | Two pieces: badge for emphasis, text for label |
| Signer name input | `matched` | `Field` + `Input` | `colorNeutralForeground4` (placeholder), `colorCompoundBrandStroke` (focus underline) | Fully matched |
| Signer title input | `matched` | `Field` + `Input` | — | Furnishing 014 planted |
| Entity identity attestation | `matched` | `Checkbox` | — | Furnishing 019 planted |
| Sign & appoint (gated) | `matched` | `Button appearance="primary"` `disabled` | `colorNeutralForegroundDisabled` | No opacity hack — correct disabled tokens |

### Upload docs
| Concept | Disposition | Resolved to | Tokens used | Notes |
|---|---|---|---|---|
| Doc list with status | `synthesize` | Flex column + `Badge` + `Button secondary` | `colorNeutralForeground1`, `colorNeutralStroke2` | No Fluent upload list component |
| Upload progress | `matched` | `ProgressBar` | — | Furnishing 021 planted |
| "Done" CTA | `matched` | `Button appearance="primary"` | — | |

### Status facts
| Concept | Disposition | Resolved to | Tokens used | Notes |
|---|---|---|---|---|
| State + days badge | `matched-partial` | `Badge` (state color) + `Badge appearance="tint" color="subtle"` (days) + `Badge color="success"` (re-detect) | — | Three badges composed; Fluent Badge is designed for this |
| Evidence substatus | `synthesize` | `Text` block | `colorNeutralForeground2` | |
| Hearing facts card | `matched-partial` | `Card` + `CardHeader` + CSS grid + `Text` pairs | `colorNeutralBackground1`, `shadow4` | |
| Reduction fact | `synthesize` | `Card` + CSS grid facts + `MessageBar intent="success"` | `colorPaletteGreenForeground1` (via success badge) | |
| Invoice fact | `synthesize` | `Card` + CSS grid facts | — | |
| Denial outcome | `matched` | `MessageBar intent="warning"` | `colorPaletteOrangeForeground1` (warning intent) | TDLR-required no-fee-on-denial reaffirmed |

### Decline door
| Concept | Disposition | Resolved to | Tokens used | Notes |
|---|---|---|---|---|
| Decline trigger | `matched` | `Button appearance="subtle"` | `colorSubtleBackground*` hover family | Color: inline `colorPaletteRedForeground3` for destructive accent — **see ambiguity below** |
| Confirm dialog | `matched` | `Dialog` + `DialogSurface` + `DialogActions` | `colorNeutralBackground1`, `shadow64`, `borderRadiusXLarge` | All three confirmed tokens for DialogSurface |

---

## Operator desk

### Portfolio (Clients)
| Concept | Disposition | Resolved to | Tokens used | Notes |
|---|---|---|---|---|
| Portfolio table | `matched` | `Table` sortable | All confirmed neutral tokens | All 8 protest cases seeded |
| Blocked/detected count badges | `matched-partial` | `Badge appearance="tint" color="warning/informative"` above table | — | Operator visible to all states per WORLD.md |

### Exceptions
| Concept | Disposition | Resolved to | Tokens used | Notes |
|---|---|---|---|---|
| Exception list with inline audit | `matched-partial` | `Accordion` + `AccordionItem` per exception | — | Inline expand is a compose of Accordion; furnishing 021 planted |
| Empty state | `synthesize` | `Card` + centered `Text` | `colorNeutralForeground3` | No Fluent EmptyState component confirmed — synthesized |
| Resolve / Annotate actions | `matched` | `Button appearance="primary"` + `appearance="secondary"` | — | |

### Audit log
| Concept | Disposition | Resolved to | Tokens used | Notes |
|---|---|---|---|---|
| Audit trail table | `matched` | `Table` | — | All cases + actions seeded |

### Collections
| Concept | Disposition | Resolved to | Tokens used | Notes |
|---|---|---|---|---|
| Invoice table | `matched` | `Table` + `Badge` dunning status | — | Furnishing 033–034 planted |

### County data
| Concept | Disposition | Resolved to | Tokens used | Notes |
|---|---|---|---|---|
| County health table | `matched` | `Table` + `Badge` freshness/coverage | All color families confirmed | Furnishing 040 planted |

### Dispatch
| Concept | Disposition | Resolved to | Tokens used | Notes |
|---|---|---|---|---|
| Hearing queue table | `matched` | `Table` + `Badge` status | — | Furnishing 028 planted; Worker availability badge deferred (no Persona component imported yet) |

### Jurisdiction
| Concept | Disposition | Resolved to | Tokens used | Notes |
|---|---|---|---|---|
| Jurisdiction table | `matched` | `Table` | — | PTC capacity / fee cap / appeal window / e-file — furnishings 011–015 planted |
| Blocked county | `matched` | `Badge color="danger"` | `colorPaletteRedForeground3` | |

---

## Worker desk

### Queue
| Concept | Disposition | Resolved to | Tokens used | Notes |
|---|---|---|---|---|
| Available/Mine/Completed tabs | `matched` | `TabList` + `Tab` horizontal | `colorCompoundBrandStroke` (active tab underline) | |
| Assignment rows | `matched` | `Table` | — | Sorted by hearing date ascending (furnishing 006 planted) |
| Packet-ready badge | `matched` | `Badge color="success/warning"` | — | |
| Property type badge | `matched` | `Badge appearance="tint"` | — | Furnishing 002 deferred (not in seed data yet) |

### Packet
| Concept | Disposition | Resolved to | Tokens used | Notes |
|---|---|---|---|---|
| Case facts | `matched` | `Table` 2-col via `Card` + CSS grid | — | |
| Evidence preview | `synthesize` | `Text` list | `colorNeutralForeground2` | No Fluent evidence-list component |
| Authority proof block | `matched-partial` | `MessageBar intent="info"` | — | Furnishing 012 planted |
| Accept / Decline | `matched` | `Button appearance="primary"` + `appearance="secondary"` | — | |

### Hearing logistics
| Concept | Disposition | Resolved to | Tokens used | Notes |
|---|---|---|---|---|
| Hearing facts | `synthesize` | CSS grid + `FactItem` | — | |
| County rules | `matched` | `MessageBar intent="info"` | — | Furnishing 016–017 planted |
| Appearance checklist | `matched` | `Checkbox` list | `colorCompoundBrandBackground` (checked) | Furnishing 016 planted |

### Outcome report
| Concept | Disposition | Resolved to | Tokens used | Notes |
|---|---|---|---|---|
| Outcome selector | `matched` | `RadioGroup` + `Radio` | — | Replaces CT toggle-button row with proper RadioGroup semantics |
| Reduced value input | `matched` | `Field` + `Input` type="number" | `colorNeutralForeground4` (placeholder) | |
| Submission confirmation | `matched` | `MessageBar intent="success"` | `colorPaletteGreenForeground1` (success intent) | Furnishing 024 planted |

### Pay status
| Concept | Disposition | Resolved to | Tokens used | Notes |
|---|---|---|---|---|
| Pay facts | `synthesize` | CSS grid + `Text` pairs | — | |
| Payment note | `matched` | `MessageBar intent="info"` | — | Furnishing 025 planted |

---

## Token decision log

| Job | Token chosen | Decision source | Confidence |
|---|---|---|---|
| Default control/surface fill | `colorNeutralBackground1` | Confirmed (archaeology) | HIGH |
| Primary text | `colorNeutralForeground1` | Confirmed | HIGH |
| Secondary/label text | `colorNeutralForeground2` | Confirmed | HIGH |
| Tertiary/caption/icon text | `colorNeutralForeground3` | Medium confidence (2 components) | MED |
| Placeholder text | `colorNeutralForeground4` | Confirmed (Input) | HIGH |
| Filled primary action | `colorBrandBackground` + `colorNeutralForegroundOnBrand` | Confirmed (Button primary) | HIGH |
| Hover wash (no fill at rest) | `colorSubtleBackgroundHover` | Confirmed (Table row, subtle button) | HIGH |
| Focus ring | `colorStrokeFocus2` | Confirmed (all 5 sampled components) | HIGH |
| Control border | `colorNeutralStroke1` | Confirmed | HIGH |
| Row separator | `colorNeutralStroke2` | Confirmed (TableRow) | HIGH |
| Invisible border | `colorTransparentStroke` | Confirmed (Button, Input) | HIGH |
| Compound brand accent (focus underline) | `colorCompoundBrandStroke` | Confirmed (Input) | HIGH |
| Active tab underline | `colorCompoundBrandStroke` | Inferred from TabList source | MED |
| Control corner radius | `borderRadiusMedium` | Confirmed (Button, Input, TableRow) | HIGH |
| Dialog shadow | `shadow64` | Confirmed (DialogSurface) | HIGH |
| Dialog border radius | `borderRadiusXLarge` | Confirmed (DialogSurface) | HIGH |
| Success state | `colorPaletteGreenForeground1` (via `Badge color="success"`) | Badge API maps to status set | MED |
| Danger state | `colorPaletteRedForeground3` (via `Badge color="danger"` + inline) | Matched Input invalid-state precedent | MED |
| Warning state | `colorPaletteOrangeForeground1` (via `Badge color="warning"`) | Badge API | MED |
| Typography | `tokens.fontFamilyBase`, `fontSizeBase*`, `fontWeightSemibold/Regular` | Confirmed | HIGH |

---

## Ambiguity queue (blocked-pending-human-decision)

### A-1: Decline button destructive red color
**Status:** Unresolved — still needs human/brand decision.

**Question:** Should the "Decline this protest" button use `colorPaletteRedForeground3` (inline) or just a default `appearance="subtle"` without any red accent?

**Current choice:** `colorPaletteRedForeground3` inline — matched Input invalid-state precedent for red.

**Skill reference:** archaeology.md — "Danger/red has two independent vocabularies: `colorPaletteRed*` vs `colorStatusDanger*`"

**Options:**
1. Keep `colorPaletteRedForeground3` (matches Input's red precedent)
2. Use `colorStatusDangerForeground1` (purpose-named, semantically cleaner)
3. Use default `appearance="subtle"` (no red — less destructive emphasis)

**Recommended:** Option 1 for now (consistent with Input precedent). Escalate if brand review requires Option 2.

### A-2: Hover wash family for Card (persona picker)
**Status:** Resolved in this pass — use `colorNeutralBackground1Hover`.

**Question:** Cards have `colorNeutralBackground1` at rest — should hover wash be `colorNeutralBackground1Hover` (has-fill-at-rest family) or `colorSubtleBackgroundHover` (no-fill-at-rest)?

**Current choice:** `colorNeutralBackground1Hover` — Card has a neutral background at rest, so it uses the filled-surface hover family.

**Skill reference:** archaeology.md ambiguities — "hover wash has two families depending on resting-state fill"

**Note:** Resolved to Option 2 because Card has a background at rest.

**Options:**
1. `colorSubtleBackgroundHover` (previous choice — treated Card as a plain container)
2. `colorNeutralBackground1Hover` (current choice — Card's background color is `colorNeutralBackground1`, so it has fill at rest)

### A-3: Brand vs system blue for active persona in AppBar
**Status:** Resolved — no human decision needed.

**Question:** The active Tab in the persona switch TabList uses a brand underline via `colorCompoundBrandStroke`. Should this be the main brand blue or a more neutral selection indicator?

**Current choice:** Fluent TabList manages this internally via its own tokens — not explicitly overridden. Tab component's active state uses Fluent's default which is `colorCompoundBrandStroke`.

**Skill reference:** archaeology.md — "colorCompoundBrand* = actively-interactive brand accent"

**Status:** No human decision needed; Fluent's own TabList handles this correctly per confirmed tokens.

---

## Synthesis notes (net-new chrome built from tokens)

1. **Fact grid (2-column key/value)** — synthesized from CSS grid + `Text` size/weight combinations. No Fluent DescriptionList component exists. Tokens: `colorNeutralForeground3` (label) + `colorNeutralForeground1` (value). Confidence: HIGH (confirmed role mapping).

2. **Empty state (Exceptions)** — synthesized from centered `Text` inside `Card`. No Fluent EmptyState component confirmed. Tokens: `colorNeutralForeground3`. Confidence: HIGH.

3. **Trust strip persistent note** — synthesized from `div` with `backgroundColor: tokens.colorNeutralBackground3` via inline style. `MessageBar` preferred for intent-bearing notices; plain container used for non-alert, persistent legal copy. Tokens: `colorNeutralBackground3`, `colorNeutralForeground2`. Confidence: HIGH.

---

## Build isolation confirmation

```
Main bundle: dist/assets/main-*.js — zero Fluent CSS imports ✓
Fluent bundle: dist/assets/fluent-*.js — separate chunk ✓
Fluent HTML: dist/prototype-fluent.html — loads only fluent-*.js ✓
Main HTML: dist/index.html — no fluent-*.js reference ✓
```
