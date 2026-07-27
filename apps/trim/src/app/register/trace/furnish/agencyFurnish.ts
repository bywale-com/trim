import type { FurnishItem } from "../furnishTypes";

/**
 * Agency Owner Furnish — supporting UI abilities for Clients / Work / Settings.
 * Writing pass; `status: "planted"` matches CT today.
 */
export const AGENCY_FURNISH: FurnishItem[] = [
  {
    id: "agency-furnish-001",
    label: "Honest empties",
    able: "See a clear empty state on Exception queue when no Cases need action.",
    status: "planted",
    surfaceIds: ["agency-ct-exceptions"],
    implementationProblem:
      "An empty Exception queue looked like a broken table — Agency Owners couldn't tell whether automation was idle or the view failed to load.",
    implementation:
      "On Exception queue, you can now see \"No exceptions right now — all clear.\" when every Case has cleared procedural denial.",
  },
  {
    id: "agency-furnish-002",
    label: "Case audit glance",
    able: "Read the recent Audit log trail for a kicked-back Case inline on Exception queue.",
    status: "planted",
    surfaceIds: ["agency-ct-exceptions", "agency-ct-audit"],
    implementationProblem:
      "Agency Owners had to leave Exception queue and hunt Audit log to see what happened before a kickback.",
    implementation:
      "On Exception queue, you can now expand Case audit glance under each exception row — actor, timestamp, and action — without opening Audit log.",
    implementationAdds: ["Portfolio-wide trail remains on Audit log."],
  },
  {
    id: "agency-furnish-003",
    label: "Portfolio glance",
    able: "Scan every Client in the book grouped by admission state on Clients.",
    status: "planted",
    surfaceIds: ["agency-ct-portfolio"],
    implementationProblem:
      "Agency Owners needed one roster view of all Business accounts and where each Case sits in the admission spine.",
    implementation:
      "On Clients, you can now scan the portfolio table — company, jurisdiction, amount, Status facts, and days in state — for the whole book at once.",
  },
  {
    id: "agency-furnish-004",
    label: "Fee cap % column",
    able: "Compare statutory finder fee caps per state on Jurisdiction table.",
    status: "planted",
    surfaceIds: ["agency-ct-jurisdiction", "agency-ct-fee-cap"],
    implementationProblem:
      "Fee-cap limits lived outside the desk — Agency Owners couldn't confirm contingency compliance while reviewing jurisdiction rows.",
    implementation:
      "On Jurisdiction table, you can now read Fee cap % beside Filing method and Expected days for every registered or blocked state.",
  },
  {
    id: "agency-furnish-005",
    label: "Bulk jurisdiction status edit",
    able: "Update registration status across many Jurisdiction table rows in one action.",
    status: "deferred",
    surfaceIds: ["agency-ct-jurisdiction"],
    implementationProblem:
      "Renewals and lapses arrive in batches — editing one state row at a time doesn't match how compliance teams work.",
    implementation:
      "On Jurisdiction table, you can now multi-select states and apply Registered or Blocked in one bulk edit with a single confirmation.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-006",
    label: "Bulk Filing method update",
    able: "Set Filing method for several jurisdictions at once after a process change.",
    status: "deferred",
    surfaceIds: ["agency-ct-jurisdiction", "agency-ct-filing-method"],
    implementationProblem:
      "When a state switches from mail-original to digital, Agency Owners retype the same Filing method on every affected row.",
    implementation:
      "On Jurisdiction table, you can now bulk-update Filing method for selected states and preview how many open Cases inherit the change.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-007",
    label: "Expected days import",
    able: "Import Expected days values for many states from a spreadsheet.",
    status: "deferred",
    surfaceIds: ["agency-ct-jurisdiction", "agency-ct-expected-days"],
    implementationProblem:
      "Turnaround windows are maintained in ops spreadsheets — hand-keying Expected days per row is slow and error-prone.",
    implementation:
      "On Jurisdiction table, you can now import Expected days from CSV and review a diff before committing row updates.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-008",
    label: "Fee cap bulk import",
    able: "Import Fee cap % values for multiple states in one upload.",
    status: "deferred",
    surfaceIds: ["agency-ct-jurisdiction", "agency-ct-fee-cap"],
    implementationProblem:
      "Statutory cap changes often land as a compliance memo covering dozens of states — inline column edits don't scale.",
    implementation:
      "On Jurisdiction table, you can now upload Fee cap % changes in bulk and see which Authorize door contingencies would exceed the new cap.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-009",
    label: "Jurisdiction status filter",
    able: "Filter Jurisdiction table to Registered or Blocked states only.",
    status: "deferred",
    surfaceIds: ["agency-ct-jurisdiction"],
    implementationProblem:
      "Long jurisdiction lists hide the small set of blocked states that gate outreach today.",
    implementation:
      "On Jurisdiction table, you can now filter rows by Registered or Blocked without leaving Settings.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-010",
    label: "Jurisdiction search",
    able: "Search Jurisdiction table by state name or code.",
    status: "deferred",
    surfaceIds: ["agency-ct-jurisdiction"],
    implementationProblem:
      "Agency Owners scroll a full state list to find one renewal row during a compliance call.",
    implementation:
      "On Jurisdiction table, you can now search by state name or two-letter code and jump the selection to the matching row.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-011",
    label: "Jurisdiction column sort",
    able: "Sort Jurisdiction table by status, Expected days, or Fee cap %.",
    status: "deferred",
    surfaceIds: ["agency-ct-jurisdiction"],
    implementationProblem:
      "Priority review starts with extremes — longest turnaround or highest fee cap — but row order is fixed.",
    implementation:
      "On Jurisdiction table, you can now sort by Status facts, Expected days, or Fee cap % to surface outliers first.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-012",
    label: "Jurisdiction export",
    able: "Export Jurisdiction table to CSV for compliance review.",
    status: "deferred",
    surfaceIds: ["agency-ct-jurisdiction"],
    implementationProblem:
      "External audit requests need the full registration matrix — copy-paste from the desk is unreliable.",
    implementation:
      "On Jurisdiction table, you can now export all visible columns — status, Filing method, Expected days, Fee cap %, and notes — to CSV.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-013",
    label: "Renewal due alerts",
    able: "See renewal due dates highlighted on Jurisdiction table rows.",
    status: "deferred",
    surfaceIds: ["agency-ct-jurisdiction"],
    implementationProblem:
      "Finder registration lapses are buried in row notes — Agency Owners miss windows until outreach hard-blocks.",
    implementation:
      "On Jurisdiction table, you can now see renewal due dates as a dedicated column with overdue rows highlighted.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-014",
    label: "Row completeness gate",
    able: "Check whether a jurisdiction row is ready before outreach on Settings.",
    status: "deferred",
    surfaceIds: ["agency-ct-jurisdiction", "agency-ct-row-completeness"],
    implementationProblem:
      "Incomplete filing method or license fields slip through — Cases reach notified then fail at filing.",
    implementation:
      "On Settings, you can now open Row completeness gate for the selected state and see which Filing method, Fee cap %, and license fields remain incomplete.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-015",
    label: "License coverage summary",
    able: "Glance registered vs blocked license coverage across the book.",
    status: "deferred",
    surfaceIds: ["agency-ct-jurisdiction", "agency-ct-license-coverage"],
    implementationProblem:
      "Licensed-individual requirements vary by state — Agency Owners lack a single coverage tally.",
    implementation:
      "On Settings, you can now read License coverage summary — registered count, blocked count, and states requiring licensed individual of record.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-016",
    label: "Licensed individual roster",
    able: "View licensed individuals of record with expiry dates on Settings.",
    status: "deferred",
    surfaceIds: ["agency-ct-jurisdiction", "agency-ct-licensed-roster"],
    implementationProblem:
      "Individual license expirations live in email — the desk doesn't show who covers IL or OR today.",
    implementation:
      "On Settings, you can now scan Licensed individual roster with name, state, and expiry or renewal due per person.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-017",
    label: "OR license document slot",
    able: "See Oregon license PDF requirements when OR is selected on Jurisdiction table.",
    status: "deferred",
    surfaceIds: ["agency-ct-jurisdiction", "agency-ct-or-license-slot"],
    implementationProblem:
      "Oregon POA bundles fail without the current finder license attachment — the requirement isn't visible at row select.",
    implementation:
      "On Jurisdiction table, you can now see OR license document slot when Oregon is selected — renewal due and required PDF slot called out.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-018",
    label: "Submit-for-approval preview",
    able: "Preview whether a state filing routes through licensed-individual approval.",
    status: "deferred",
    surfaceIds: ["agency-ct-jurisdiction", "agency-ct-submit-approval"],
    implementationProblem:
      "IL and OR filings need pre-approval — Agency Owners discover the gate only after packet assembly.",
    implementation:
      "On Settings, you can now read Submit-for-approval step for the selected state before a Case reaches Upload packet.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-019",
    label: "Jurisdiction row compare",
    able: "Compare Filing method and Fee cap % across two selected states side by side.",
    status: "deferred",
    surfaceIds: ["agency-ct-jurisdiction"],
    implementationProblem:
      "Neighboring states often differ on caps and filing channels — toggling rows loses the comparison context.",
    implementation:
      "On Jurisdiction table, you can now pin two states and compare Filing method, Expected days, and Fee cap % in a split panel.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-020",
    label: "Pinned jurisdictions",
    able: "Pin frequently used states to the top of Jurisdiction table.",
    status: "deferred",
    surfaceIds: ["agency-ct-jurisdiction"],
    implementationProblem:
      "High-volume states sit alphabetically mid-list — daily ops repeats the same search.",
    implementation:
      "On Jurisdiction table, you can now pin states to a quick-access strip above the full table.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-021",
    label: "Jurisdiction change history",
    able: "Review who changed a jurisdiction row and when on Settings.",
    status: "deferred",
    surfaceIds: ["agency-ct-jurisdiction", "agency-ct-audit"],
    implementationProblem:
      "Registration edits lack attribution — compliance can't trace who moved a state to Blocked.",
    implementation:
      "On Settings, you can now open jurisdiction change history for a state — prior Filing method, Fee cap %, and status with actor and timestamp.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-022",
    label: "Blocked outreach preview",
    able: "See how many Clients would be blocked if a state moves to Blocked.",
    status: "deferred",
    surfaceIds: ["agency-ct-jurisdiction", "agency-ct-portfolio"],
    implementationProblem:
      "Blocking a state has portfolio impact — Agency Owners change status without seeing affected Client count.",
    implementation:
      "On Jurisdiction table, you can now preview blocked outreach impact — Client and Case count that would hard-stop at notified.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-023",
    label: "Multi-select jurisdiction rows",
    able: "Select many Jurisdiction table rows for batch actions.",
    status: "deferred",
    surfaceIds: ["agency-ct-jurisdiction"],
    implementationProblem:
      "Bulk compliance work needs row selection — today every edit is one click, one row.",
    implementation:
      "On Jurisdiction table, you can now shift-select or checkbox-select multiple states before running a bulk action.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-024",
    label: "Jurisdiction column toggles",
    able: "Show or hide Jurisdiction table columns to fit the review task.",
    status: "deferred",
    surfaceIds: ["agency-ct-jurisdiction"],
    implementationProblem:
      "Wide tables truncate on smaller screens — Agency Owners can't focus on Fee cap % without horizontal scroll.",
    implementation:
      "On Jurisdiction table, you can now toggle column visibility for registration model, Expected days, Fee cap %, and notes.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-025",
    label: "Registration model filter",
    able: "Filter Jurisdiction table by registration model type.",
    status: "deferred",
    surfaceIds: ["agency-ct-jurisdiction"],
    implementationProblem:
      "States sharing the same registration model need batch review — the column isn't filterable.",
    implementation:
      "On Jurisdiction table, you can now filter rows by registration model to group like-process states.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-026",
    label: "Exception reason filter",
    able: "Filter Exception queue by kickback reason code.",
    status: "deferred",
    surfaceIds: ["agency-ct-exceptions"],
    implementationProblem:
      "A spike in one denial type — missing signature, wrong entity — is buried in a mixed exception list.",
    implementation:
      "On Exception queue, you can now filter by kickback reason so the same fix applies across matching Cases.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-027",
    label: "Exception jurisdiction filter",
    able: "Filter Exception queue by jurisdiction.",
    status: "deferred",
    surfaceIds: ["agency-ct-exceptions"],
    implementationProblem:
      "State admin callbacks focus on one jurisdiction — Agency Owners scan unrelated exceptions.",
    implementation:
      "On Exception queue, you can now narrow the list to one jurisdiction during a state coordination block.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-028",
    label: "Exception Client filter",
    able: "Filter Exception queue by Client company name.",
    status: "deferred",
    surfaceIds: ["agency-ct-exceptions", "agency-ct-portfolio"],
    implementationProblem:
      "Client escalations start with \"what's stuck for us?\" — exceptions aren't searchable by company.",
    implementation:
      "On Exception queue, you can now filter by Client to see every kicked-back Case for one Business account.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-029",
    label: "Exception amount sort",
    able: "Sort Exception queue by recovered amount.",
    status: "deferred",
    surfaceIds: ["agency-ct-exceptions"],
    implementationProblem:
      "High-dollar procedural denials deserve first response — row order doesn't reflect amount.",
    implementation:
      "On Exception queue, you can now sort by amount descending to prioritize the largest stuck recoveries.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-030",
    label: "Exception days sort",
    able: "Sort Exception queue by days in kicked-back state.",
    status: "deferred",
    surfaceIds: ["agency-ct-exceptions"],
    implementationProblem:
      "Oldest exceptions risk SLA breach — age isn't visible at a glance in the queue.",
    implementation:
      "On Exception queue, you can now sort by days in state to surface the longest-running denials first.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-031",
    label: "Exception SLA highlight",
    able: "Highlight Exception queue rows past the jurisdiction Expected days window.",
    status: "deferred",
    surfaceIds: ["agency-ct-exceptions", "agency-ct-expected-days"],
    implementationProblem:
      "Agency Owners manually compare kickback date to Jurisdiction table turnaround — overdue Cases don't stand out.",
    implementation:
      "On Exception queue, you can now see SLA overdue highlight when days in kicked-back state exceed Expected days for that jurisdiction.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-032",
    label: "Exception count badge",
    able: "See open exception count on Work nav without opening Exception queue.",
    status: "deferred",
    surfaceIds: ["agency-ct-work", "agency-ct-exceptions"],
    implementationProblem:
      "Agency Owners open Work blind — they don't know whether exceptions need attention until they click through.",
    implementation:
      "On Work, you can now see an exception count badge beside Exception queue in the module nav.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-033",
    label: "Exception queue export",
    able: "Export Exception queue rows to CSV for ops handoff.",
    status: "deferred",
    surfaceIds: ["agency-ct-exceptions"],
    implementationProblem:
      "Vendor or paralegal teams work from spreadsheets — exception details aren't exportable from the desk.",
    implementation:
      "On Exception queue, you can now export visible rows — Client, Case ref, jurisdiction, amount, reason, and days — to CSV.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-034",
    label: "Exception saved views",
    able: "Save named filter combinations on Exception queue.",
    status: "deferred",
    surfaceIds: ["agency-ct-exceptions"],
    implementationProblem:
      "Daily triage repeats the same reason + jurisdiction filters — nothing persists between sessions.",
    implementation:
      "On Exception queue, you can now save named views — e.g. \"IL signature missing\" — and recall them from a views menu.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-035",
    label: "Exception age column",
    able: "Read days since kickback on each Exception queue row.",
    status: "deferred",
    surfaceIds: ["agency-ct-exceptions"],
    implementationProblem:
      "Agency Owners infer age from Audit log — the queue itself doesn't show elapsed days.",
    implementation:
      "On Exception queue, you can now read an age column — days since procedural denial — on every row.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-036",
    label: "Exception to Client link",
    able: "Jump from an exception row to the matching Client on Clients.",
    status: "deferred",
    surfaceIds: ["agency-ct-exceptions", "agency-ct-portfolio"],
    implementationProblem:
      "Clearing an exception often needs Client context — switching modules means manual search.",
    implementation:
      "On Exception queue, you can now open the matching Client row on Clients in one click from the exception panel.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-037",
    label: "Exception to jurisdiction link",
    able: "Jump from an exception row to the jurisdiction on Jurisdiction table.",
    status: "deferred",
    surfaceIds: ["agency-ct-exceptions", "agency-ct-jurisdiction"],
    implementationProblem:
      "Fixing a denial usually means checking Filing method or Fee cap % — Agency Owners re-find the state manually.",
    implementation:
      "On Exception queue, you can now open the Case jurisdiction on Jurisdiction table from the exception row.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-038",
    label: "Clear exception with note",
    able: "Record an audit note when clearing an exception after Resubmit.",
    status: "deferred",
    surfaceIds: ["agency-ct-exceptions", "agency-ct-resubmit", "agency-ct-audit"],
    implementationProblem:
      "Resubmit actions lack context in Audit log — downstream reviewers can't see what changed.",
    implementation:
      "On Exception queue, you can now add a clear note when you Resubmit so the action appears in Audit log with your summary.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-039",
    label: "Exception digest opt-in",
    able: "Opt in to a daily email digest of open Exception queue items.",
    status: "deferred",
    surfaceIds: ["agency-ct-exceptions", "agency-ct-settings"],
    implementationProblem:
      "Agency Owners who don't live in Work miss new kickbacks until a Client complains.",
    implementation:
      "On Settings, you can now opt in to an exception digest — open count, oldest age, and top reason codes — delivered each morning.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-040",
    label: "Kickback reason glossary",
    able: "Open a glossary of kickback reason codes from Exception queue.",
    status: "deferred",
    surfaceIds: ["agency-ct-exceptions"],
    implementationProblem:
      "New ops staff don't memorize reason codes — they guess fixes from abbreviated labels.",
    implementation:
      "On Exception queue, you can now open a kickback reason glossary door explaining each code and the typical Resubmit fix.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-041",
    label: "Exception bulk select",
    able: "Select multiple exceptions for batch export or assign.",
    status: "deferred",
    surfaceIds: ["agency-ct-exceptions"],
    implementationProblem:
      "Shared reason spikes need batch handling — exceptions are one-at-a-time only.",
    implementation:
      "On Exception queue, you can now checkbox-select multiple rows before export or team assign.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-042",
    label: "Exception snooze",
    able: "Snooze an exception reminder until a follow-up date.",
    status: "deferred",
    surfaceIds: ["agency-ct-exceptions"],
    implementationProblem:
      "Waiting on Client docs shouldn't clutter active triage — exceptions stay loud until manually ignored.",
    implementation:
      "On Exception queue, you can now snooze an exception until a date — it drops from the default view and returns on reminder.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-043",
    label: "Exception assignee",
    able: "Assign an exception row to a team member on Work.",
    status: "deferred",
    surfaceIds: ["agency-ct-exceptions", "agency-ct-work"],
    implementationProblem:
      "Shared queues duplicate effort — nobody owns which Case gets cleared first.",
    implementation:
      "On Exception queue, you can now assign an exception to a team member and filter the queue by assignee.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-044",
    label: "Exception side-by-side",
    able: "Compare two exception rows side by side on Work.",
    status: "deferred",
    surfaceIds: ["agency-ct-exceptions"],
    implementationProblem:
      "Repeat denials across Clients often share a root cause — comparing rows means opening two browser tabs.",
    implementation:
      "On Exception queue, you can now open side-by-side compare for two selected exceptions — reason, audit glance, and jurisdiction.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-045",
    label: "Resubmit confirmation",
    able: "Confirm Resubmit with a summary of what will re-enter filing.",
    status: "deferred",
    surfaceIds: ["agency-ct-exceptions", "agency-ct-resubmit"],
    implementationProblem:
      "Accidental Resubmit clicks re-file incomplete packets — there's no confirmation beat.",
    implementation:
      "On Exception queue, you can now confirm Resubmit in a door that recaps Client, jurisdiction, and last kickback reason before filing resumes.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-046",
    label: "Audit actor search",
    able: "Search Audit log by actor name.",
    status: "deferred",
    surfaceIds: ["agency-ct-audit"],
    implementationProblem:
      "Compliance reviews ask \"what did Jane do last week?\" — the full trail isn't searchable by person.",
    implementation:
      "On Audit log, you can now search by actor to isolate one team member's actions across the book.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-047",
    label: "Audit action search",
    able: "Search Audit log by action text.",
    status: "deferred",
    surfaceIds: ["agency-ct-audit"],
    implementationProblem:
      "Finding every Resubmit or jurisdiction edit means scrolling hundreds of chronological entries.",
    implementation:
      "On Audit log, you can now full-text search action descriptions — e.g. \"Resubmit\" or \"Blocked\" — across the portfolio trail.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-048",
    label: "Audit Client filter",
    able: "Filter Audit log to one Client's Cases.",
    status: "deferred",
    surfaceIds: ["agency-ct-audit", "agency-ct-portfolio"],
    implementationProblem:
      "Client audit requests need only their company's events — the log mixes the whole book.",
    implementation:
      "On Audit log, you can now filter entries to a selected Client so the trail matches one Business account.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-049",
    label: "Audit date range filter",
    able: "Filter Audit log by date range.",
    status: "deferred",
    surfaceIds: ["agency-ct-audit"],
    implementationProblem:
      "Quarterly compliance pulls need bounded windows — the log always shows full history.",
    implementation:
      "On Audit log, you can now set a from–to date range and export only entries inside the window.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-050",
    label: "Audit CSV export",
    able: "Export Audit log entries to CSV.",
    status: "deferred",
    surfaceIds: ["agency-ct-audit"],
    implementationProblem:
      "External counsel wants machine-readable trails — manual copy from the desk doesn't scale.",
    implementation:
      "On Audit log, you can now export filtered entries — timestamp, actor, action, Client — to CSV.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-051",
    label: "Audit PDF export",
    able: "Export Audit log as a formatted PDF report.",
    status: "deferred",
    surfaceIds: ["agency-ct-audit"],
    implementationProblem:
      "Regulator inquiries expect a signed PDF packet — CSV isn't acceptable for some submissions.",
    implementation:
      "On Audit log, you can now generate a PDF report with agency letterhead, date range, and entry table for the selected Client or book.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-052",
    label: "Audit pagination",
    able: "Page through long Audit log results without browser lag.",
    status: "deferred",
    surfaceIds: ["agency-ct-audit"],
    implementationProblem:
      "Large books render the entire Audit log at once — scroll performance degrades.",
    implementation:
      "On Audit log, you can now page through results — fifty entries per page — with total count in the header.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-053",
    label: "Audit to Case link",
    able: "Jump from an Audit log entry to the related Case context.",
    status: "deferred",
    surfaceIds: ["agency-ct-audit"],
    implementationProblem:
      "Audit entries name a Case id — Agency Owners manually match it on Clients.",
    implementation:
      "On Audit log, you can now click an entry to open the matching Client row and Status facts for that Case.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-054",
    label: "Audit saved searches",
    able: "Save frequently used Audit log search and filter combinations.",
    status: "deferred",
    surfaceIds: ["agency-ct-audit"],
    implementationProblem:
      "Monthly compliance reruns the same actor + date filters — nothing is reusable.",
    implementation:
      "On Audit log, you can now save named searches — e.g. \"Q2 jurisdiction edits\" — and recall them from a menu.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-055",
    label: "Audit event type filter",
    able: "Filter Audit log by event category — filing, jurisdiction, exception.",
    status: "deferred",
    surfaceIds: ["agency-ct-audit"],
    implementationProblem:
      "Mixed event types bury the slice a review cares about — filing vs settings changes look the same.",
    implementation:
      "On Audit log, you can now filter by event type to isolate filing actions, jurisdiction edits, or exception clears.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-056",
    label: "Audit weekly digest",
    able: "Opt in to a weekly Audit log summary email on Settings.",
    status: "deferred",
    surfaceIds: ["agency-ct-audit", "agency-ct-settings"],
    implementationProblem:
      "Principals want oversight without logging in daily — no digest summarizes book activity.",
    implementation:
      "On Settings, you can now opt in to a weekly audit digest — top actors, exception clears, and jurisdiction changes.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-057",
    label: "Audit bookmark",
    able: "Bookmark an Audit log entry for later reference.",
    status: "deferred",
    surfaceIds: ["agency-ct-audit"],
    implementationProblem:
      "Investigations pause mid-trail — Agency Owners lose place in a long chronological list.",
    implementation:
      "On Audit log, you can now bookmark an entry and return to a Bookmarks list on Work.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-058",
    label: "Standing snapshot refresh",
    able: "Refresh Standing basis snapshot counts on Audit log.",
    status: "deferred",
    surfaceIds: ["agency-ct-audit", "agency-ct-standing-snapshot"],
    implementationProblem:
      "POA coverage counts go stale — Agency Owners don't know how many Clients need re-affirmation.",
    implementation:
      "On Audit log, you can now refresh Standing basis snapshot — active POA count, pending re-affirmation, and last snapshot date.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-059",
    label: "Audit full-text search",
    able: "Search Audit log across actor, action, and Client fields at once.",
    status: "deferred",
    surfaceIds: ["agency-ct-audit"],
    implementationProblem:
      "Investigations start with a vague term — separate actor and action searches miss matches.",
    implementation:
      "On Audit log, you can now run one full-text search across actor, action text, and Client name.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-060",
    label: "Audit Client compare",
    able: "Compare Audit log activity volume across two Clients.",
    status: "deferred",
    surfaceIds: ["agency-ct-audit", "agency-ct-portfolio"],
    implementationProblem:
      "Anomaly detection asks why one Client has ten times the filing events — comparison is manual.",
    implementation:
      "On Audit log, you can now compare activity counts between two Clients over a shared date range.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-061",
    label: "Clients status filter",
    able: "Filter Clients by admission state.",
    status: "deferred",
    surfaceIds: ["agency-ct-portfolio"],
    implementationProblem:
      "Ops standups focus on one state — e.g. all invoiced — but the portfolio table shows everyone.",
    implementation:
      "On Clients, you can now filter rows by Status facts — detected, authorized, invoiced, kicked_back, and more.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-062",
    label: "Clients jurisdiction filter",
    able: "Filter Clients by jurisdiction.",
    status: "deferred",
    surfaceIds: ["agency-ct-portfolio"],
    implementationProblem:
      "State-specific outreach needs the Client list for that jurisdiction only.",
    implementation:
      "On Clients, you can now filter to one jurisdiction and see every Case in the book for that state.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-063",
    label: "Clients amount sort",
    able: "Sort Clients by recovered amount.",
    status: "deferred",
    surfaceIds: ["agency-ct-portfolio"],
    implementationProblem:
      "Revenue reviews start with largest exposures — alphabetical company sort hides priority.",
    implementation:
      "On Clients, you can now sort by amount descending to rank the book by recovery size.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-064",
    label: "Clients days sort",
    able: "Sort Clients by days in current admission state.",
    status: "deferred",
    surfaceIds: ["agency-ct-portfolio"],
    implementationProblem:
      "Stuck Cases accumulate silently — days in state isn't a sort key on the portfolio table.",
    implementation:
      "On Clients, you can now sort by days in state to find Clients waiting longest in the same admission step.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-065",
    label: "Portfolio health summary",
    able: "Read portfolio health chips — blocked, detected, invoiced — above Clients.",
    status: "deferred",
    surfaceIds: ["agency-ct-portfolio"],
    implementationProblem:
      "Agency Owners mentally tally status buckets — no summary strip answers \"how's the book?\" at a glance.",
    implementation:
      "On Clients, you can now read portfolio health summary chips — blocked jurisdiction, detected inventory, and invoiced counts — above the table.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-066",
    label: "Blocked jurisdiction count",
    able: "See how many Clients are blocked by jurisdiction gate on Clients.",
    status: "deferred",
    surfaceIds: ["agency-ct-portfolio"],
    implementationProblem:
      "Hard-blocked Cases look like slow progress — the blocked count isn't called out separately.",
    implementation:
      "On Clients, you can now see a blocked jurisdiction count chip linking to filtered rows stuck at the registration gate.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-067",
    label: "Detected inventory count",
    able: "See detected-but-not-yet-notified Client count on Clients.",
    status: "deferred",
    surfaceIds: ["agency-ct-portfolio", "agency-ct-detected-blocked"],
    implementationProblem:
      "Pipeline reviews need detected inventory visibility — the count lives only in manual exports.",
    implementation:
      "On Clients, you can now read a detected inventory count and open Detected blocked rows for Cases awaiting outreach.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-068",
    label: "Invoiced Client count",
    able: "See how many Clients reached invoiced status on Clients.",
    status: "deferred",
    surfaceIds: ["agency-ct-portfolio", "agency-ct-invoice-collection"],
    implementationProblem:
      "Collections standups need invoiced volume — Agency Owners filter manually or count rows.",
    implementation:
      "On Clients, you can now see an invoiced count chip and jump to Invoice collection status for unpaid lines.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-069",
    label: "Clients CSV export",
    able: "Export the Clients portfolio table to CSV.",
    status: "deferred",
    surfaceIds: ["agency-ct-portfolio"],
    implementationProblem:
      "Finance and ops share Client rosters outside Trove — the desk doesn't export the portfolio view.",
    implementation:
      "On Clients, you can now export visible rows — company, jurisdiction, amount, Status facts, days in state — to CSV.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-070",
    label: "Clients search",
    able: "Search Clients by company name or Case ref.",
    status: "deferred",
    surfaceIds: ["agency-ct-portfolio"],
    implementationProblem:
      "Phone calls start with a company name — scrolling the full book wastes time.",
    implementation:
      "On Clients, you can now search by company name or Case ref and highlight the matching row.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-071",
    label: "Clients saved views",
    able: "Save named filter and sort combinations on Clients.",
    status: "deferred",
    surfaceIds: ["agency-ct-portfolio"],
    implementationProblem:
      "Weekly reviews reuse the same \"invoiced + over 30 days\" lens — filters reset every visit.",
    implementation:
      "On Clients, you can now save named views and recall them from a views menu on the portfolio table.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-072",
    label: "Clients column toggles",
    able: "Show or hide columns on the Clients portfolio table.",
    status: "deferred",
    surfaceIds: ["agency-ct-portfolio"],
    implementationProblem:
      "Dense tables hide on laptop screens — Agency Owners can't drop days in state when reviewing amounts.",
    implementation:
      "On Clients, you can now toggle column visibility for jurisdiction, amount, Status facts, and days in state.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-073",
    label: "Clients group by jurisdiction",
    able: "Group Clients portfolio rows by jurisdiction.",
    status: "deferred",
    surfaceIds: ["agency-ct-portfolio"],
    implementationProblem:
      "State coordinators want jurisdiction sections — flat alphabetical sort scatters related Cases.",
    implementation:
      "On Clients, you can now group the portfolio table by jurisdiction with collapsible state sections.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-074",
    label: "Clients group by status",
    able: "Group Clients portfolio rows by admission state.",
    status: "deferred",
    surfaceIds: ["agency-ct-portfolio"],
    implementationProblem:
      "Pipeline standups walk status buckets — the table doesn't collapse by Status facts.",
    implementation:
      "On Clients, you can now group rows by Status facts — authorized, filed, paid, and more — with per-group counts.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-075",
    label: "Stale authorization list",
    able: "List Clients whose Authorize door authorization exceeded a staleness threshold.",
    status: "deferred",
    surfaceIds: ["agency-ct-portfolio"],
    implementationProblem:
      "Re-affirmation gaps stall filing — nobody sees which Clients signed too long ago.",
    implementation:
      "On Clients, you can now open a stale authorization list filtered to Cases needing Re-affirm door before Upload packet proceeds.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-076",
    label: "Days-in-state threshold filter",
    able: "Filter Clients where days in state exceeds a chosen threshold.",
    status: "deferred",
    surfaceIds: ["agency-ct-portfolio"],
    implementationProblem:
      "SLA reviews ask for \"stuck over 45 days\" — Agency Owners export and pivot externally.",
    implementation:
      "On Clients, you can now set a days-in-state threshold filter and save it as a portfolio view.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-077",
    label: "Clients bulk tag",
    able: "Apply tags to multiple Client rows for internal tracking.",
    status: "deferred",
    surfaceIds: ["agency-ct-portfolio"],
    implementationProblem:
      "Campaign and priority labels live in spreadsheets — the desk has no lightweight tagging.",
    implementation:
      "On Clients, you can now bulk-apply tags — e.g. \"Q3 priority\" or \"hold legal\" — to selected portfolio rows.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-078",
    label: "Client row notes",
    able: "Attach internal notes to a Client row on Clients.",
    status: "deferred",
    surfaceIds: ["agency-ct-portfolio"],
    implementationProblem:
      "Account context sits in email — the portfolio table carries no ops notes.",
    implementation:
      "On Clients, you can now add internal notes on a Client row visible to Agency Owner seat holders only.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-079",
    label: "Duplicate Client flag",
    able: "Flag suspected duplicate Client rows before Case creation.",
    status: "deferred",
    surfaceIds: ["agency-ct-portfolio", "agency-ct-client-dedupe"],
    implementationProblem:
      "EIN and SOS collisions create double books — dedupe happens too late.",
    implementation:
      "On Clients, you can now see duplicate Client flags and open Client Deduplication Workflow to merge before new Cases start.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-080",
    label: "Revenue pipeline glance",
    able: "See estimated fee pipeline by admission state on Clients.",
    status: "deferred",
    surfaceIds: ["agency-ct-portfolio"],
    implementationProblem:
      "Leadership asks for in-flight recovery value — Agency Owners sum amounts manually by status.",
    implementation:
      "On Clients, you can now read a revenue pipeline glance — total amount grouped by Status facts with estimated fee using Fee cap % where authorized.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-081",
    label: "Fee cap inline editor",
    able: "Edit Fee cap % inline on Jurisdiction table with versioned audit trail.",
    status: "deferred",
    surfaceIds: ["agency-ct-jurisdiction", "agency-ct-fee-cap", "agency-ct-audit"],
    implementationProblem:
      "Statutory cap updates require ops tickets — Agency Owners can't correct Fee cap % at the row.",
    implementation:
      "On Jurisdiction table, you can now edit Fee cap % inline; each change writes to Audit log with prior and new value.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-082",
    label: "Fee cap version history",
    able: "Review prior Fee cap % values for a state on Settings.",
    status: "deferred",
    surfaceIds: ["agency-ct-jurisdiction", "agency-ct-fee-cap", "agency-ct-audit"],
    implementationProblem:
      "Regulators ask what cap applied when a Case authorized — history isn't tied to the jurisdiction row.",
    implementation:
      "On Settings, you can now open Fee cap version history for a selected state — date, editor, and percentage timeline.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-083",
    label: "Fee cap compliance check",
    able: "See which authorized Cases exceed Fee cap % for their jurisdiction.",
    status: "deferred",
    surfaceIds: ["agency-ct-jurisdiction", "agency-ct-fee-cap", "agency-ct-portfolio"],
    implementationProblem:
      "Authorize door contingency can exceed a new statutory cap — nothing cross-checks open Cases.",
    implementation:
      "On Jurisdiction table, you can now run a Fee cap compliance check listing Clients whose Authorize door percentage exceeds the row cap.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-084",
    label: "Fee cap change alerts",
    able: "Subscribe to alerts when Fee cap % changes on a watched state.",
    status: "deferred",
    surfaceIds: ["agency-ct-jurisdiction", "agency-ct-fee-cap", "agency-ct-settings"],
    implementationProblem:
      "Compliance newsletters announce cap changes — the desk doesn't notify watchers.",
    implementation:
      "On Settings, you can now subscribe to Fee cap change alerts for selected states and receive email when the row updates.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-085",
    label: "Fee cap bulk edit",
    able: "Apply one Fee cap % adjustment formula across selected states.",
    status: "deferred",
    surfaceIds: ["agency-ct-jurisdiction", "agency-ct-fee-cap"],
    implementationProblem:
      "Regional cap harmonization touches many rows — bulk import is heavier than a simple multiplier edit.",
    implementation:
      "On Jurisdiction table, you can now bulk-edit Fee cap % on selected rows with preview before commit.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-086",
    label: "License expiry dashboard",
    able: "See upcoming licensed individual expirations on Settings.",
    status: "deferred",
    surfaceIds: ["agency-ct-licensed-roster", "agency-ct-settings"],
    implementationProblem:
      "License lapses block IL and OR filing — expiry dates aren't aggregated into one alert view.",
    implementation:
      "On Settings, you can now open a license expiry dashboard sorted by nearest renewal across Licensed individual roster.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-087",
    label: "Add licensed individual",
    able: "Add a licensed individual of record to the roster on Settings.",
    status: "deferred",
    surfaceIds: ["agency-ct-licensed-roster", "agency-ct-settings"],
    implementationProblem:
      "New hire onboarding requires ops to update roster offline — the desk is read-only today.",
    implementation:
      "On Settings, you can now add a licensed individual — name, state, license number, expiry — to Licensed individual roster.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-088",
    label: "License roster state filter",
    able: "Filter Licensed individual roster by state.",
    status: "deferred",
    surfaceIds: ["agency-ct-licensed-roster"],
    implementationProblem:
      "State compliance calls need only that state's licensees — the roster lists everyone.",
    implementation:
      "On Settings, you can now filter Licensed individual roster to one state during renewal prep.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-089",
    label: "License coverage gap report",
    able: "Export states lacking a licensed individual of record on Settings.",
    status: "deferred",
    surfaceIds: ["agency-ct-license-coverage", "agency-ct-jurisdiction"],
    implementationProblem:
      "Expansion into a licensed state fails at filing — gap analysis is manual spreadsheet work.",
    implementation:
      "On Settings, you can now generate a license coverage gap report listing registered states with no assigned licensed individual.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-090",
    label: "Licensed individual assignment",
    able: "Assign a licensed individual to Cases in a jurisdiction on Settings.",
    status: "deferred",
    surfaceIds: ["agency-ct-licensed-roster", "agency-ct-submit-approval"],
    implementationProblem:
      "Submit-for-approval routing needs a named individual — assignment isn't wired from roster to Case.",
    implementation:
      "On Settings, you can now assign a licensed individual to all open Cases in a state before Submit-for-approval step runs.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-091",
    label: "Reconciling queue filters",
    able: "Filter and sort Reconciling queue by Client, jurisdiction, and age.",
    status: "deferred",
    surfaceIds: ["agency-ct-reconciling", "agency-ct-work"],
    implementationProblem:
      "Remittance matching backlog grows — the reconciling list has no triage filters.",
    implementation:
      "On Work, you can now filter Reconciling queue by Client and jurisdiction and sort by days awaiting match.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-092",
    label: "Appeal queue filters",
    able: "Filter and sort Appeal queue by denial reason and jurisdiction.",
    status: "deferred",
    surfaceIds: ["agency-ct-appeal", "agency-ct-work"],
    implementationProblem:
      "Appeals after kickback need reason-based triage — the queue is a flat list.",
    implementation:
      "On Work, you can now filter Appeal queue by denial reason and jurisdiction before assigning follow-up.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-093",
    label: "Inbound matcher search",
    able: "Search Inbound matcher for state mail matched to a Case ref.",
    status: "deferred",
    surfaceIds: ["agency-ct-inbound-matcher", "agency-ct-work"],
    implementationProblem:
      "Agency mailrooms forward scanned letters — finding which Case a envelope belongs to is manual.",
    implementation:
      "On Work, you can now search Inbound matcher by Case ref or company name to attach state mail to the right Client.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-094",
    label: "State Admin Workload filters",
    able: "Filter State Admin Workload dashboard by jurisdiction and pending action type.",
    status: "deferred",
    surfaceIds: ["agency-ct-state-admin-workload", "agency-ct-work"],
    implementationProblem:
      "Ops leads can't slice pending state actions — the workload view shows one undifferentiated pile.",
    implementation:
      "On Work, you can now filter State Admin Workload dashboard by jurisdiction and action type — filing, appeal, reconciling.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-095",
    label: "SLA board by jurisdiction",
    able: "View an SLA board on Work grouped by jurisdiction and Expected days.",
    status: "deferred",
    surfaceIds: ["agency-ct-work", "agency-ct-expected-days", "agency-ct-exceptions"],
    implementationProblem:
      "Ops reviews compare state turnaround to open Case age — no board ties Expected days to live workload.",
    implementation:
      "On Work, you can now open an SLA board — Cases grouped by jurisdiction with Expected days target and overdue highlight.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-096",
    label: "Work throughput metrics",
    able: "Read weekly throughput metrics — exceptions cleared, resubmits, appeals — on Work.",
    status: "deferred",
    surfaceIds: ["agency-ct-work"],
    implementationProblem:
      "Team capacity planning needs volume trends — Work shows queues but no aggregate metrics.",
    implementation:
      "On Work, you can now read a throughput metrics strip — exceptions cleared, Resubmit count, and appeal opens for the past seven days.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-097",
    label: "Invoice collection filter",
    able: "Filter Clients by Invoice collection status — open, paid, disputed.",
    status: "deferred",
    surfaceIds: ["agency-ct-portfolio", "agency-ct-invoice-collection"],
    implementationProblem:
      "Collections workflow starts with unpaid invoices — status isn't filterable on Clients.",
    implementation:
      "On Clients, you can now filter by Invoice collection status and see Paid fact and Invoice fact context per row.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-098",
    label: "Client dedupe workflow",
    able: "Run Client Deduplication Workflow when EIN or SOS collision is detected.",
    status: "deferred",
    surfaceIds: ["agency-ct-portfolio", "agency-ct-client-dedupe"],
    implementationProblem:
      "Duplicate Business accounts fragment Cases — merge workflow isn't reachable from the portfolio row.",
    implementation:
      "On Clients, you can now open Client Deduplication Workflow from a flagged row to merge EIN or SOS matches before filing.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-099",
    label: "Detected blocked inventory",
    able: "Review Detected blocked rows — inventory found but jurisdiction-blocked — on Clients.",
    status: "deferred",
    surfaceIds: ["agency-ct-portfolio", "agency-ct-detected-blocked"],
    implementationProblem:
      "Detected Cases in blocked states look like pipeline — Agency Owners can't separate reachable from hard-blocked inventory.",
    implementation:
      "On Clients, you can now open Detected blocked rows showing Cases detected but blocked by Jurisdiction table registration gate.",
    implementationPlant: "not_done",
  },
  {
    id: "agency-furnish-100",
    label: "Settings digest schedule",
    able: "Configure digest and notification schedule for exceptions, audit, and renewals on Settings.",
    status: "deferred",
    surfaceIds: ["agency-ct-settings"],
    implementationProblem:
      "Exception, audit, and renewal alerts are scattered — Agency Owners can't set one notification schedule.",
    implementation:
      "On Settings, you can now configure digest schedule — daily exception summary, weekly Audit log digest, and jurisdiction renewal reminders — in one panel.",
    implementationPlant: "not_done",
  },
];
