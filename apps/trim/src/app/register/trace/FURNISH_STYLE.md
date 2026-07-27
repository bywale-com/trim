# Furnish — able-to + Implementation style

Furnish = supporting UI functionality (like Can'ts but affirmative): what should this persona **be able to do** that supports Core / SME — cool, practical, what a peer app might give them. **No agent/AI features.**

## Per persona
- Business Officer → 100 unique items
- Agency Owner → 100 unique items
- Unique within persona. Don't duplicate Can'ts verbatim; Furnish can overlap themes but must be distinct abilities.

## Fields (each item)
```ts
{
  id: "biz-furnish-001",
  label: "Short title",
  able: "Filter Cases by admission state without opening each Case.",
  surfaceIds: ["biz-ct-cases"], // parent hint(s) when known
  implementationProblem: "…",
  implementation: "On Cases, you can now …",
  implementationAdds?: ["…"],
  status: "deferred", // all new writing is deferred until CT plant
}
```

## Able line
- One sentence. UI functionality only.
- Start with a verb when possible (Filter / Export / Opt in / Compare / …).
- Supporting / additive — not rewriting Core admission spine.

## Implementation (same lock as SME)
- Problem = context only.
- Implementation = relative `On X, you can now…` — salient only.
- Exact canonical labels: Cases, Case, Notice — proof facts, Notice — trust strip, Consent ticks, Authorize door, Claim form packet, Upload packet, Status facts, Paid fact, Invoice fact, Decline door · Clients, Client, Work, Exception queue, Resubmit, Settings, Jurisdiction table, Filing method, Audit log.
- Invent Title Case names when needed.
- No persona headers. No CT planting in this pass.

## Output
Write a complete TypeScript file exporting `BUSINESS_FURNISH` or `AGENCY_FURNISH` as `FurnishItem[]` matching `src/app/register/trace/furnishTypes.ts`.
