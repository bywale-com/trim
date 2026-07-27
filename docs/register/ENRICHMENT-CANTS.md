# Trim — Enrichment Can'ts

"Right now I can't…" depth per persona. Each item is an additive supporting ability — no Core flow changes. Surface IDs join to `register/trace/surfaces.ts`.

**Law:** Can'ts live behind a door or More menu in CT, not as always-on chrome. None of these unblock unless surfaceId exists and is planted.

---

## Owner (~25 can'ts)

1. **Right now I can't** see protest cases across more than one owning entity from a single login — a holding company with three LLCs each owning separate parcels requires three separate accounts. `surfaceIds: ["trim-ct-owner-portfolio"]`

2. **Right now I can't** amend the signer name or title on the Appointment of Agent without walking the full re-sign flow. `surfaceIds: ["trim-ct-owner-authorize"]`

3. **Right now I can't** share a read-only case link with outside counsel without granting them Owner authorization authority. `surfaceIds: ["trim-ct-owner-status", "trim-ct-owner-reduction"]`

4. **Right now I can't** share a read-only case link with my accountant scoped to reduction and invoice facts only. `surfaceIds: ["trim-ct-owner-reduction", "trim-ct-owner-invoice"]`

5. **Right now I can't** opt in to an email or push notification when my protest case changes admission state, so I check back manually to learn about hearings or reductions. `surfaceIds: ["trim-ct-owner-status"]`

6. **Right now I can't** see the specific informal review offer amount from the appraisal district when one has been made but not yet accepted or rejected. `surfaceIds: ["trim-ct-owner-status"]`

7. **Right now I can't** download the compiled evidence packet Trim prepared for my protest (comps, uniformity grid, income summary) without the Operator exporting it separately. `surfaceIds: ["trim-ct-owner-status", "trim-ct-owner-upload"]`

8. **Right now I can't** see the hearing date, board panel name, and venue for a hearing-queued case — I see the queued state but not the scheduled logistics. `surfaceIds: ["trim-ct-owner-status"]`

9. **Right now I can't** compare my parcel's assessed value against the median of comparable parcels in the same county as an in-product data view. `surfaceIds: ["trim-ct-owner-notice"]`

10. **Right now I can't** see the valuation methodology that drove the notice (equity-only, income approach, or sales comps) before consenting. `surfaceIds: ["trim-ct-owner-notice"]`

11. **Right now I can't** open a tax treatment door before consent that explains gross-vs-net framing and the two-tax-period timing without Trim advising directly. `surfaceIds: ["trim-ct-owner-consent"]` *(SME: tax-accounting-treatment tax-01–tax-03)*

12. **Right now I can't** see who the named licensed PTC representative is for my case before signing the Appointment of Agent. `surfaceIds: ["trim-ct-owner-authorize"]` *(CROSS-CUTTING #3: Texas PTC capacity)*

13. **Right now I can't** view assessed-value history across prior tax years for my parcel in a single panel. `surfaceIds: ["trim-ct-owner-notice", "trim-ct-owner-status"]`

14. **Right now I can't** indicate that the property is being actively sold or under contract mid-protest — a material fact for the appeal strategy. `surfaceIds: ["trim-ct-owner-upload", "trim-ct-owner-status"]`

15. **Right now I can't** withdraw from an in-flight authorized protest without contacting Operator support directly. `surfaceIds: ["trim-ct-owner-status"]`

16. **Right now I can't** opt into or out of annual re-detection after authorization — enrollment is automatic and the control is not exposed. `surfaceIds: ["trim-ct-owner-status"]`

17. **Right now I can't** print the notice + trust strip together as a single document for internal board or treasury files. `surfaceIds: ["trim-ct-owner-notice", "trim-ct-owner-trust"]`

18. **Right now I can't** export the case status timeline (state changes + timestamps) as CSV for audit records. `surfaceIds: ["trim-ct-owner-status"]`

19. **Right now I can't** add a private owner-side note or memo to a protest case visible only to my entity login. `surfaceIds: ["trim-ct-owner-status"]`

20. **Right now I can't** see the informal review outcome (the result of any pre-hearing appraisal district contact) before the formal hearing is scheduled. `surfaceIds: ["trim-ct-owner-status"]`

21. **Right now I can't** see a breakdown of how the estimated excess tax was calculated — which comps, what cap rate, or which uniformity formula drove the number. `surfaceIds: ["trim-ct-owner-notice"]`

22. **Right now I can't** open a post-ARB remedies door showing escalation options (binding arbitration, SOAH, district court, attorney handoff) after a denial. `surfaceIds: ["trim-ct-owner-reduction"]` *(CROSS-CUTTING #10: post-ARB escalation)*

23. **Right now I can't** see a W-9 or 1099 guidance door on the Invoice fact explaining how to classify Trim's fee for AP reporting. `surfaceIds: ["trim-ct-owner-invoice"]` *(SME: tax-accounting-treatment)*

24. **Right now I can't** provide condition photos or a third-party repair estimate for unequal appraisal arguments without emailing them to the Operator separately. `surfaceIds: ["trim-ct-owner-upload"]`

25. **Right now I can't** receive a decline confirmation receipt download after walking away before authorization. `surfaceIds: ["trim-ct-owner-decline"]`

26. **Right now I can't** see an escrow / lender reserve disclosure when the property is mortgage-encumbered and the reduction may flow through the servicer rather than as direct cash. `surfaceIds: ["trim-ct-owner-reduction", "trim-ct-owner-invoice"]` *(CROSS-CUTTING #9: escrow timing)*

27. **Right now I can't** download a signed copy of the Appointment of Agent PDF after completing the Authorize block for my corporate records. `surfaceIds: ["trim-ct-owner-authorize"]`

---

## Operator (~27 can'ts)

1. **Right now I can't** bulk-edit Texas PTC capacity (registered human count, senior PTC sponsor association) across multiple counties without editing each county row individually. `surfaceIds: ["trim-ct-op-jurisdiction"]` *(CROSS-CUTTING #3: TX sponsorship capacity)*

2. **Right now I can't** replay a dead-lettered appeal prep or filing job from the exception queue without a backend workaround — stuck jobs require direct engineering intervention. `surfaceIds: ["trim-ct-op-exceptions"]`

3. **Right now I can't** see the valuation confidence score and copy-gate decision that drove a specific notice — whether the substantiation packet cleared the threshold and which copy variant was approved. `surfaceIds: ["trim-ct-op-exceptions"]` *(CROSS-CUTTING #1: notice copy compliance gate)*

4. **Right now I can't** edit the contingency cap percentage for a county inline from the jurisdiction table with a versioned audit trail. `surfaceIds: ["trim-ct-op-jurisdiction", "trim-ct-op-audit"]`

5. **Right now I can't** set a default evidence approach (equity-only, income approach, or comps) per county from the jurisdiction table. `surfaceIds: ["trim-ct-op-jurisdiction"]`

6. **Right now I can't** see which named PTC representative is currently assigned to a specific protest case. `surfaceIds: ["trim-ct-op-portfolio"]` *(CROSS-CUTTING #3)*

7. **Right now I can't** assign or reassign the PTC representative on a case mid-protest when capacity or licensure changes. `surfaceIds: ["trim-ct-op-portfolio", "trim-ct-op-jurisdiction"]`

8. **Right now I can't** monitor hearing outcome reports by county and property type (what reduction rates look like across informal / ARB / remote for small commercial vs multifamily). `surfaceIds: ["trim-ct-op-worker-dispatch"]`

9. **Right now I can't** view Worker no-show or cancellation telemetry per county — I don't know which Workers have reliability patterns before dispatching. `surfaceIds: ["trim-ct-op-worker-dispatch"]`

10. **Right now I can't** see the dunning cycle status (first notice, second notice, delinquent) for each invoiced-not-collected case at a glance. `surfaceIds: ["trim-ct-op-collections"]`

11. **Right now I can't** export the audit log for a specific date range as CSV for external legal review or licensure audit. `surfaceIds: ["trim-ct-op-audit"]`

12. **Right now I can't** set a county-level informal offer auto-accept threshold so that automation accepts settlements at or above a configured reduction percentage without operator intervention. `surfaceIds: ["trim-ct-op-exceptions"]`

13. **Right now I can't** see which cases are approaching the appeal filing window deadline with a days-remaining countdown. `surfaceIds: ["trim-ct-op-portfolio"]`

14. **Right now I can't** monitor county data freshness (roll import, CAMA version, comp vintage) across all active counties in one dashboard — I check each county individually. `surfaceIds: ["trim-ct-op-county-data"]`

15. **Right now I can't** view the ARB hearing calendar by county for upcoming scheduling windows so I can match Worker availability in advance. `surfaceIds: ["trim-ct-op-worker-dispatch"]`

16. **Right now I can't** bulk-confirm a batch of reduced cases as ready for invoice and collections trigger in one action. `surfaceIds: ["trim-ct-op-collections"]`

17. **Right now I can't** toggle a county's e-file capability status without a backend configuration change — it should be editable from jurisdiction settings. `surfaceIds: ["trim-ct-op-jurisdiction"]`

18. **Right now I can't** see which notices were blocked by the pre-notice copy gate and why (jurisdiction block vs data-quality block vs solicitation threshold not met). `surfaceIds: ["trim-ct-op-exceptions"]` *(CROSS-CUTTING #1 + #2)*

19. **Right now I can't** trace which detection run (date, roll version, valuation model) produced a specific notice for a specific parcel. `surfaceIds: ["trim-ct-op-audit"]`

20. **Right now I can't** see outstanding Appointment of Agent expirations or renewal alerts — clients with expiring authorizations are not surfaced before the next appeal cycle opens. `surfaceIds: ["trim-ct-op-portfolio"]`

21. **Right now I can't** onboard a client instance via OLG (Operator-Led Growth manual entry) alongside the ALG instant-served flow, for parcels or jurisdictions that aren't yet self-serve. `surfaceIds: ["trim-ct-op-portfolio"]`

22. **Right now I can't** add an internal Operator-side annotation to an exception case explaining the root cause without editing the case object directly. `surfaceIds: ["trim-ct-op-exceptions"]`

23. **Right now I can't** schedule an outreach batch to fire at a county's optimal appeal window open date rather than immediately. `surfaceIds: ["trim-ct-op-jurisdiction"]`

24. **Right now I can't** view post-ARB escalation eligibility per case — whether a denied case is eligible for binding arbitration, SOAH, or district court based on property value and forum rules. `surfaceIds: ["trim-ct-op-exceptions"]` *(CROSS-CUTTING #10)*

25. **Right now I can't** see which cases have a lender / servicer escrow flag — properties held by mortgage servicers where the benefit timing differs — from the portfolio view. `surfaceIds: ["trim-ct-op-portfolio"]` *(CROSS-CUTTING #9)*

26. **Right now I can't** export a per-client fee calculation summary (contingency %, documented savings, Trim cut) for collections audit. `surfaceIds: ["trim-ct-op-collections", "trim-ct-op-audit"]`

27. **Right now I can't** see collection ACH / card authorization status (authorized, expired, failed) per invoice from the collections queue. `surfaceIds: ["trim-ct-op-collections"]`

---

## Worker (~22 can'ts)

1. **Right now I can't** see the Owner's name, contact information, or entity identity from the hearing packet — the case is scoped to parcel facts only, so pre-hearing questions go through Operator. `surfaceIds: ["trim-ct-worker-packet"]`

2. **Right now I can't** request a hearing postponement or continuance through the product — I have to contact the county or Operator directly. `surfaceIds: ["trim-ct-worker-hearing"]`

3. **Right now I can't** report a partial reduction with a specific dollar amount directly — the outcome report only supports reduced / denied / continued as top-level choices. `surfaceIds: ["trim-ct-worker-outcome"]`

4. **Right now I can't** flag a no-show or hearing cancellation with a structured reason code (board rescheduled, property owner withdrew, hearing dismissed) — I can only write a freeform note. `surfaceIds: ["trim-ct-worker-outcome"]`

5. **Right now I can't** view prior protest outcomes for the same parcel in previous tax years from within the case packet. `surfaceIds: ["trim-ct-worker-packet"]`

6. **Right now I can't** add a pre-hearing note to the case packet before I accept the assignment — I can only annotate after accepting. `surfaceIds: ["trim-ct-worker-packet", "trim-ct-worker-assignment"]`

7. **Right now I can't** view the ARB board member names or section composition for an upcoming hearing. `surfaceIds: ["trim-ct-worker-hearing"]`

8. **Right now I can't** download the case packet as a printable PDF for offline use in the hearing room when mobile data is unreliable. `surfaceIds: ["trim-ct-worker-packet"]`

9. **Right now I can't** request special logistics accommodation (remote appearance, interpreter, accessibility) through the product. `surfaceIds: ["trim-ct-worker-hearing"]`

10. **Right now I can't** record that a hearing was continued by the board without submitting a partial outcome — there is no "continued" state with reschedule logistics. `surfaceIds: ["trim-ct-worker-outcome"]`

11. **Right now I can't** see the informal review history for a case before the formal hearing — I don't know what the appraisal district offered informally. `surfaceIds: ["trim-ct-worker-packet"]`

12. **Right now I can't** view my upcoming hearings across all counties in a calendar view — I see a flat queue list sorted by date. `surfaceIds: ["trim-ct-worker-queue"]`

13. **Right now I can't** see my total pay earned for the current or past month before the payment is processed. `surfaceIds: ["trim-ct-worker-pay"]`

14. **Right now I can't** flag a county hearing checklist item as inaccurate after the hearing so future Workers see the correction. `surfaceIds: ["trim-ct-worker-hearing"]`

15. **Right now I can't** see how many cases are available in nearby counties outside my registered coverage area when my primary queue is empty. `surfaceIds: ["trim-ct-worker-queue"]`

16. **Right now I can't** opt into email or push alerts when a new hearing assignment becomes available in my coverage counties — I check the queue manually. `surfaceIds: ["trim-ct-worker-queue"]`

17. **Right now I can't** submit additional evidence (a document discovered on the day of the hearing) through the product — it has to go through Operator. `surfaceIds: ["trim-ct-worker-packet", "trim-ct-worker-hearing"]`

18. **Right now I can't** see a county-specific typical reduction range (equity or income approach outcomes at this board) to calibrate my opening position. `surfaceIds: ["trim-ct-worker-packet"]`

19. **Right now I can't** request a substitute Worker assignment when a scheduling conflict arises after I've accepted — I must decline and re-queue. `surfaceIds: ["trim-ct-worker-assignment"]`

20. **Right now I can't** view a completion history of past hearings and outcomes I've reported to track my own advocacy record. `surfaceIds: ["trim-ct-worker-pay"]`

21. **Right now I can't** filter the hearing queue by property type (small commercial vs multifamily) to prioritize assignments matching my experience. `surfaceIds: ["trim-ct-worker-queue"]`

22. **Right now I can't** see whether the case has an income approach built into the packet or is equity-only before accepting — this affects preparation time and ARB approach. `surfaceIds: ["trim-ct-worker-packet", "trim-ct-worker-assignment"]`
