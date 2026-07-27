# Trim — Fluent UI Rearchitecture Map

Maps every CT screen / nav / door to a Fluent UI React v9 composition slot.
Source: `apps/trim/src/app/ct/*` (gray DS-I).
Target: `apps/trim/src/app/plant-fluent/*` (Fluent v9).
Why: `docs/register/{WORLD,OUTCOMES,ENRICHMENT-CANTS,FURNISHING}.md`.

---

## Shell chrome

| CT pattern | Fluent slot | Notes |
|---|---|---|
| Sidebar nav (Trim + persona label + nav items) | `FluentProvider` + Toolbar-style AppBar with horizontal `TabList` (Owner / Operator / Worker) | Persona switch always reachable from top bar |
| Sidebar back-link `← Hub` | Plain `<a href="/prototype-fluent">` in AppBar | Full document nav, not SPA Link |
| Active nav item highlight | `Tab selectedValue` + CSS `colorCompoundBrandStroke` underline | Fluent TabList handles active state natively |
| Protest-state badge | `Badge color=… appearance="tint"` | Map per `PROTEST_STATE_BADGE` in types.ts |

---

## Hub (`/prototype-fluent`)

| CT element | Fluent slot | Register why |
|---|---|---|
| Persona cards (Owner / Operator / Worker) | `Card` (clickable) with `CardHeader` + `Badge` counts | `WORLD.md` — three value-chain seats |
| "Also in workspace" links | `Card` with `Text` + plain `<a href>` | Isolation rule — cross-document navigation only |
| DS-I link `← /ct` | Plain `<a href="/ct">` | Isolation |
| Register link | Plain `<a href="/register">` | Isolation |

---

## Owner desk (`/prototype-fluent/owner`)

### Portfolio surface
| CT element | Fluent slot | Register why |
|---|---|---|
| Flat protest case list | `DataGrid` with columns: Parcel, County, Address, Assessed, Status, Days-in-state | `owner-core` / `FURNISHING 045–049` |
| Row click → case detail | Navigate to `/owner/:caseId` (URL param) | State-linked deep door |
| Status badge per row | `Badge color appearance="tint"` | Protest spine visibility |

### Case detail (all states)

| CT element | Fluent slot | Register why |
|---|---|---|
| Case header (parcel ID + status badge) | `Text` + `Badge` + `Divider` | `owner-core` |
| Back to portfolio | `Button appearance="transparent"` + back arrow | Navigation chrome |

#### Notice — notified state
| CT element | Fluent slot | Register why |
|---|---|---|
| Analysis-not-promise framing | `MessageBar intent="info"` | `FURNISHING 003` / TX TDLR ethics |
| Parcel proof facts grid | CSS grid + `Text` label/value pairs | `owner-core` / `owner-trust` |
| Assessed/evidence/excess values (blurred pre-consent) | Conditional `opacity` + `filter: blur` via `makeStyles` | Reveal gating — consent first |
| Trust strip (no upfront fee, verify link, disclaimer) | `MessageBar intent="info"` with link inside | `FURNISHING 002–005` |
| County-site verify link | `Link` component (Fluent) pointing to countyVerifyUrl | `owner-trust` / `FURNISHING 004` |
| Non-affiliation disclaimer | `Text` block in `Card` with `colorNeutralBackground2` | `owner-trust` / `FURNISHING 005` |

#### Consent ticks
| CT element | Fluent slot | Register why |
|---|---|---|
| Three consent checkboxes | `Checkbox` × 3 | `owner-consent` |
| Continue to Authorize (enabled when all ticked) | `Button appearance="primary"` disabled until all checked | `owner-consent` |
| Parcel/county recap | `Text caption1` above first checkbox | `FURNISHING 006` |

#### Authorize door
| CT element | Fluent slot | Register why |
|---|---|---|
| Fee disclosure block | `Card` with `MessageBar intent="info"` inside | `owner-authorize` / `FURNISHING 011` |
| Fee example calc | `Text` caption block | `FURNISHING 012` |
| Contingency % locked | `Badge color="brand"` + `Text` | `FURNISHING 011` |
| TX Form 50-162 reference | `Text caption1` | `owner-authorize` |
| Signer name input | `Field` + `Input` | `owner-authorize` |
| Signer title input | `Field` + `Input` (deferred furnishing 014) | `FURNISHING 014` |
| Entity identity attestation | `Checkbox` | `FURNISHING 019` |
| Sign & appoint button | `Button appearance="primary"` (disabled until name entered) | `owner-authorize` |

#### Upload docs
| CT element | Fluent slot | Register why |
|---|---|---|
| Doc list with upload status | `List` / flex column with `Checkbox` or status `Badge` | `owner-docs` |
| Upload button per doc | `Button appearance="secondary"` | `owner-docs` |
| Progress chip | `ProgressBar` + count text | `FURNISHING 021` |
| "Done" button | `Button appearance="primary"` | `owner-docs` |

#### Status facts
| CT element | Fluent slot | Register why |
|---|---|---|
| Current state + days-in-state | `Badge` + `Text` | `owner-status` / `FURNISHING 001` |
| Evidence prep substatus | `Text` list with checkmarks | `FURNISHING 032` |
| Hearing facts (date, board, worker) | `Card` with `Table` 2-col | `FURNISHING 030–031` |
| Assessed value / contingency % | `DataGrid` 2-col fact table | `owner-status` |
| Annual re-detect chip | `Badge color="success" appearance="tint"` | `FURNISHING 028` |

#### Reduction fact
| CT element | Fluent slot | Register why |
|---|---|---|
| Before/after reduction grid | `Table` 2-col | `owner-core` |
| Tax savings + millage calc | `Text body1Strong` | `FURNISHING 036` |
| "Invoices after reduction" note | `MessageBar intent="info"` | `FURNISHING 027` |

#### Invoice fact
| CT element | Fluent slot | Register why |
|---|---|---|
| Fee amount + savings basis | `Table` | `owner-core` |
| Invoice detail note | `Text caption1` | `owner-core` |

#### Decline door
| CT element | Fluent slot | Register why |
|---|---|---|
| Decline trigger | `Button appearance="subtle"` | `owner-decline` |
| Confirm Dialog | `Dialog` with primary "Confirm decline" + secondary "Go back" | `owner-decline` |

---

## Operator desk (`/prototype-fluent/operator`)

### Top-level shell
| CT element | Fluent slot | Register why |
|---|---|---|
| Clients / Work / Settings nav | Horizontal `TabList` in Toolbar-style header | `operator-core` |

### Clients (`/operator/clients`)
| CT element | Fluent slot | Register why |
|---|---|---|
| Portfolio table | `DataGrid` sortable, columns: Entity, Parcel, County, Assessed, Status, Days | `operator-portfolio` / `FURNISHING 001–009` |
| Status badge in table | `Badge color appearance="tint"` | |
| Detected/blocked count chip | `Badge color="warning"` count above table | `WORLD.md` — Operator sees blocked_jurisdiction |
| Invoice count chip | `Badge color="informative"` | `operator-collections` |

### Work — Exceptions (`/operator/work/exceptions`)
| CT element | Fluent slot | Register why |
|---|---|---|
| Exception list | `DataGrid` or expandable `Accordion` per exception | `operator-exceptions` / `FURNISHING 019–024` |
| Exception reason badge | `Badge color="danger"` with reason taxonomy | `FURNISHING 020` |
| Audit glance (inline expand) | `Accordion` inner `AccordionItem` | `FURNISHING 021` |
| Resolve button | `Button appearance="primary"` | `operator-exceptions` |
| Empty state | Fluent `EmptyState` (or `Text` + icon) | `FURNISHING 019` |

### Work — Audit log (`/operator/work/audit`)
| CT element | Fluent slot | Register why |
|---|---|---|
| Audit trail table | `DataGrid` with timestamp/actor/action cols | `operator-audit` |
| Case filter | `Select` or `Combobox` | `operator-audit` |

### Work — Collections (`/operator/work/collections`)
| CT element | Fluent slot | Register why |
|---|---|---|
| Invoiced-not-collected table | `DataGrid` with entity/amount/days/dunning cols | `operator-collections` / `FURNISHING 033–038` |
| Dunning status | `Badge` per cycle | `FURNISHING 034` |

### Work — County data health (`/operator/work/county-data`)
| CT element | Fluent slot | Register why |
|---|---|---|
| County data table | `Table` sortable with freshness/comp/import cols | `operator-county-data` / `FURNISHING 040–047` |
| Freshness badge | `Badge color="success"/"warning"/"danger"` | `FURNISHING 040` |

### Work — Dispatch (`/operator/work/dispatch`)
| CT element | Fluent slot | Register why |
|---|---|---|
| Hearing queue for Worker dispatch | `DataGrid` | `operator-dispatch` / `FURNISHING 028–032` |
| Worker availability badge | `Persona` + `Badge` | `FURNISHING 029` |

### Settings — Jurisdiction (`/operator/settings/jurisdiction`)
| CT element | Fluent slot | Register why |
|---|---|---|
| Jurisdiction table (7 TX counties) | `Table` with PTC capacity/fee cap/appeal window cols | `operator-jurisdiction` / `FURNISHING 011–018` |
| Active/blocked status | `Badge color="success"/"danger"` | `operator-jurisdiction` |
| E-file badge | `Badge appearance="tint"` | `FURNISHING 015` |

---

## Worker desk (`/prototype-fluent/worker`)

### Queue (`/worker/queue`)
| CT element | Fluent slot | Register why |
|---|---|---|
| Available / Assigned / Completed tabs | `TabList` horizontal | `worker-core` |
| Assignment rows | `DataGrid` or Card list | `FURNISHING 001–008` |
| Packet-ready badge | `Badge color="success"/"warning"` | `FURNISHING 001` |
| Property type badge | `Badge` | `FURNISHING 002` |
| Click → Packet | Navigate to `/worker/packet/:id` | `worker-pickup` |

### Packet (`/worker/packet/:id`)
| CT element | Fluent slot | Register why |
|---|---|---|
| Case facts grid | `Table` 2-col | `worker-core` |
| Evidence preview list | `List` with checkmarks | `FURNISHING 009–015` |
| Accept / Decline buttons | `Button appearance="primary"` + `appearance="secondary"` | `worker-pickup` |
| Authority proof block | `Card` with `Text` | `FURNISHING 012` |

### Hearing logistics (`/worker/hearing/:id`)
| CT element | Fluent slot | Register why |
|---|---|---|
| Hearing facts | `Table` 2-col | `worker-argue` |
| County rules block | `MessageBar intent="info"` | `FURNISHING 016–018` |
| Appearance checklist | `Checkbox` list | `FURNISHING 016` |
| Report outcome button | `Button appearance="primary"` | `worker-argue` |

### Outcome report (`/worker/outcome/:id`)
| CT element | Fluent slot | Register why |
|---|---|---|
| Outcome selector (Reduced/Denied/Continued) | `RadioGroup` + `Radio` | `worker-report` |
| Reduced value input | `Field` + `Input` | `worker-report` |
| Submit button | `Button appearance="primary"` | `worker-report` |
| Submission confirmation | `MessageBar intent="success"` | `FURNISHING 024` |

### Pay status (`/worker/pay/:id`)
| CT element | Fluent slot | Register why |
|---|---|---|
| Pay facts table | `Table` 2-col | `worker-pay` / `FURNISHING 025` |
| Payment policy note | `Text caption1` in `Card` | `worker-pay` |

---

## Consolidations vs CT source

| Decision | Reason |
|---|---|
| Sidebar nav → top TabList for persona switch | Fluent shell convention — horizontal chrome for primary nav |
| CT `CtPanel` → Fluent `Card` / `CardHeader` | Fluent Card is the natural section-level container |
| CT `CtStatusTag` → Fluent `Badge` | Native Fluent status representation |
| CT `CtFactGrid` → Fluent `Table` 2-col or CSS grid | No Fluent DescriptionList equivalent — Table works for key/value pairs |
| CT inline styling → `makeStyles` consuming `tokens.*` | Fluent extension rule — no hardcoded hex/px |
| CT `CtButton` variants → Fluent `Button appearance` prop | Matched per decision table |
| CT `CtCheckbox` → Fluent `Checkbox` | Direct match |
| CT `CtPanel title` header → Fluent `CardHeader` or `Subtitle2` `Text` | Composition slot match |
| CT plain `<input>` → Fluent `Field` + `Input` | Label + validation wrapper included |
| CT tabs (Work sub-nav) → Fluent `TabList` horizontal | Direct match |
| CT status "doors" (decline, withdraw) → Fluent `Dialog` | Modal overlay is the correct Fluent pattern for discrete decisions |
| CT inline case detail view → Drawer / URL-param navigation | Better Fluent pattern for case depth |
