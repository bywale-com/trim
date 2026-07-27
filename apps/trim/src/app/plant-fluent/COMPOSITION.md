# Fluent UI React v9 — Composition Patterns for Trim

Evidence-based authoring from `@fluentui/react-components` v9 docs and source.
Confidence labels: **HIGH** (3+ citations / official docs), **MED** (1–2 citations), **LOW** (inferred, needs validation).

---

## Shell / chrome

### FluentProvider
**HIGH** — root wrapper that injects all token CSS custom properties onto its DOM subtree.
```tsx
<FluentProvider theme={webLightTheme}>
  {/* entire SPA */}
</FluentProvider>
```
- `webLightTheme` from `@fluentui/react-components` is the standard web-light palette.
- Nested `FluentProvider` re-scopes tokens for sub-trees (e.g. dark-mode panel inside light shell) — intentional mechanism.
- Required: all `tokens.*` refs resolve via the injected CSS vars; without it, components render with broken styles.

### Toolbar
**HIGH** — horizontal action/navigation bar.
```tsx
<Toolbar>
  <ToolbarButton icon={<PersonIcon />}>Owner</ToolbarButton>
  <ToolbarDivider />
  <ToolbarButton>Operator</ToolbarButton>
</Toolbar>
```
- Used for persona-switch chrome: Owner / Operator / Worker tabs.
- Gap: Toolbar is action-oriented, not a true TabList — for nav semantics, TabList is preferred.

### TabList + Tab
**HIGH** — correct horizontal navigation pattern with `aria-selected` semantics.
```tsx
<TabList selectedValue={selected} onTabSelect={(_e, d) => setSelected(d.value)}>
  <Tab value="owner">Owner</Tab>
  <Tab value="operator">Operator</Tab>
  <Tab value="worker">Worker</Tab>
</TabList>
```
- Horizontal TabList for primary persona-switch in AppBar chrome.
- Vertical TabList for sidebar nav (Owner portfolio nav, Worker queue nav).
- `size="small"` | `"medium"` (default) | `"large"` — use `"medium"` for primary nav.

---

## Data display

### DataGrid
**HIGH** — full-featured data table with sort, selection, virtualization.
```tsx
<DataGrid items={items} columns={columns} sortable>
  <DataGridHeader>
    <DataGridRow>{/* header cells */}</DataGridRow>
  </DataGridHeader>
  <DataGridBody>
    {({ item }) => <DataGridRow>{/* cells */}</DataGridRow>}
  </DataGridBody>
</DataGrid>
```
- Use for: Operator portfolio, Worker queue, Audit log, Collections.
- `DataGridCell`, `DataGridHeaderCell` are the slot primitives.
- Sort: pass `onSortChange` + maintain `sortState`; `DataGridHeaderCell` becomes a sortable button.
- Selection: `selectionMode="multiselect"` for bulk-action patterns (bulk exceptions, bulk collections).

### Table (HTML-like)
**MED** — simpler, non-virtualized table for smaller datasets.
```tsx
<Table>
  <TableHeader><TableRow><TableHeaderCell>…</TableHeaderCell></TableRow></TableHeader>
  <TableBody><TableRow><TableCell>…</TableCell></TableRow></TableBody>
</Table>
```
- Use for: Jurisdiction table (7 rows), smaller domain objects.
- `TableHeaderCell` renders `fontWeight: tokens.fontWeightRegular` by default (confirmed — see archaeology).

---

## Dialogs / drawers / sheets

### Dialog (confirmation + destructive)
**HIGH** — modal overlay for doors that require a discrete decision.
```tsx
<Dialog open={open} onOpenChange={(_e, d) => setOpen(d.open)}>
  <DialogSurface>
    <DialogTitle>Decline protest</DialogTitle>
    <DialogBody>…</DialogBody>
    <DialogActions>
      <DialogTrigger><Button appearance="secondary">Cancel</Button></DialogTrigger>
      <Button appearance="primary" onClick={onDecline}>Confirm decline</Button>
    </DialogActions>
  </DialogSurface>
</Dialog>
```
- `borderRadiusXLarge` + `shadow64` confirmed for DialogSurface (see archaeology).
- Use for: Decline door, Withdraw door, Invoice dispute door, Bulk-confirm actions.
- **GAP (MED)**: No Fluent Tearsheet equivalent for long-form drawer-style content — map CT "doors" that need vertical scroll to `Dialog` with overflow-y scroll inside `DialogBody`, or a side `Drawer`.

### Drawer
**MED** — side panel for deeper contextual content (case detail, audit glance).
```tsx
<DrawerBody>…</DrawerBody>
```
- `position="end"` for right-side panels (case detail in Owner).
- Inline or overlay mode — use overlay for case detail panels.
- **GAP (LOW)**: Drawer's `borderRadius` is not confirmed against a 3rd tier; apply `borderRadiusMedium` to panel-level content, not the Drawer chrome (which has its own radius).

---

## Navigation primitives

### BreadcrumbItem / Breadcrumb
**MED** — back-navigation cue (e.g., "← Portfolio").
- Use `Button appearance="transparent"` with an icon for back-nav instead of breadcrumbs when there's only one level.

---

## Action controls

### Button
**HIGH** — primary/secondary/outline/subtle/transparent appearances.
```tsx
<Button appearance="primary">Sign & appoint →</Button>
<Button appearance="secondary">Go back</Button>
<Button appearance="subtle">Decline this protest</Button>
<Button appearance="transparent">← Portfolio</Button>
```
- `appearance="primary"` → `colorBrandBackground` fill confirmed.
- `appearance="subtle"` → no fill at rest → `colorSubtleBackground*` hover wash (fill-at-rest rule).
- `appearance="transparent"` → identical hover family to subtle; use for inline/ghost links.
- Disabled: pass `disabled` prop — uses `colorNeutralForegroundDisabled` / `colorNeutralBackgroundDisabled` / `colorNeutralStrokeDisabled` (no opacity hacks).

### ToggleButton
**MED** — for outcome selector (Reduced / Denied / Continued) where one button is selected.
- `checked` + `onChange` props.

---

## Form controls

### Input
**HIGH** — text input.
```tsx
<Field label="Authorized officer name" required>
  <Input placeholder="Type full name to sign" value={v} onChange={(_e, d) => setV(d.value)} />
</Field>
```
- `Field` provides label + error message + required indicator.
- Typed text: `colorNeutralForeground1`; placeholder: `colorNeutralForeground4`; focus underline: `colorCompoundBrandStroke`.
- **Note**: `appearance="underline"` (no box) vs `appearance="outline"` (default bordered) — use `"outline"` for form inputs.

### Checkbox
**HIGH** — three consent ticks.
```tsx
<Checkbox checked={v} onChange={(_e, d) => setV(d.checked as boolean)} label="…" />
```
- Checked fill: `colorCompoundBrandBackground`.

### RadioGroup + Radio
**MED** — single-choice selection (outcome report: Reduced / Denied / Continued).

### Select
**MED** — dropdown select for filter controls.

---

## Status / metadata display

### Badge
**HIGH** — status chips for protest states.
```tsx
<Badge color="success" appearance="filled">Reduced</Badge>
<Badge color="danger" appearance="filled">Blocked</Badge>
<Badge color="warning" appearance="filled">Hearing queued</Badge>
```
- `color` options: `"brand"`, `"danger"`, `"important"`, `"informative"`, `"severe"`, `"subtle"`, `"success"`, `"warning"`.
- `appearance="filled"` | `"ghost"` | `"outline"` | `"tint"`.
- Use `appearance="tint"` for lower-emphasis status inline in tables.

### Persona / Avatar
**MED** — user identity in Operator dispatch (Worker name/avatar).
```tsx
<Persona name="Thomas Reyes" secondaryText="Harris County" avatar={{ color: "colorful" }} />
```

### MessageBar
**MED** — trust strip, disclaimers, non-affiliation notices.
```tsx
<MessageBar intent="info">
  <MessageBarBody>No upfront fee, ever.</MessageBarBody>
</MessageBar>
```
- `intent`: `"info"` | `"warning"` | `"error"` | `"success"`.
- Use for: Owner notice trust strip, denial messaging, invoice-after-reduction note.
- **GAP**: MessageBar is transient by Fluent's intent; for persistent disclaimers, use a styled `Card` with `tokens.colorNeutralBackground2` fill instead.

### Spinner
**MED** — loading state for async evidence build.
```tsx
<Spinner label="Building evidence packet…" size="medium" />
```

### ProgressBar
**MED** — upload checklist progress (upload 2 of 3 docs).
```tsx
<ProgressBar value={uploadedCount / totalDocs} />
```

### Tooltip
**LOW** — hover details on truncated table cells (long entity names).

---

## Layout primitives (no Fluent component, use tokens)

- **Card** (`makeStyles` with `colorNeutralBackground1`, `shadow4`, `borderRadiusMedium`): section panels.
- **Divider**: `<Divider />` component — uses `colorNeutralStroke2` (confirmed for list/row separators).
- **Layout**: CSS flex/grid via `makeStyles` — Fluent has no layout component.

---

## Evidence-based gaps

| Gap | Impact | Decision |
|-----|--------|----------|
| No Fluent Tearsheet/full-page drawer | Medium — Trim doors need deep content | Map to Dialog with scrollable body, or Drawer position=end |
| `colorPaletteRed*` vs `colorStatusDanger*` for error states | Low — visual only | Use `colorPaletteRedBorder2` for form validation (matches Input's own invalid state); use `Badge color="danger"` for status |
| No confirmed 3rd radius tier for Drawer/Panel | Low | Use `borderRadiusMedium` for panel-level; `borderRadiusXLarge` for Dialog only |
| `colorStrokeFocus1` usage context unknown | Low | Do not use; rely on `colorStrokeFocus2` via focus helpers |
| Divider token diverges across components | Low | Use `Divider` component (lets Fluent pick internally) |
