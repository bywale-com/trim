/** Appeal queue — denials after kickback. Surface: agency-ct-appeal. */

import { CtPanel, ctPalette as t } from "../../shared/primitives";

import { formatUsd } from "../../shared/format";

import { SurfaceBoundary } from "../../register/trace/SurfaceBoundary";

import { useFocusFromQuery } from "../../register/trace/useFocusFromQuery";



const APPEALS = [

  {

    id: "app-1",

    company: "Beacon Industrial Supply",

    jurisdiction: "NY",

    amount: 22100,

    denialReason: "Name mismatch on wet-ink claim form",

    filedDate: "2026-06-12",

  },

  {

    id: "app-2",

    company: "Harborview Medical Group",

    jurisdiction: "CA",

    amount: 48750,

    denialReason: "Supporting document rejected — stale articles",

    filedDate: "2026-07-01",

  },

];



export function AgencyAppeals() {

  useFocusFromQuery();



  return (

    <div style={{ padding: "20px 40px 32px", maxWidth: 820 }}>

      <div style={{ marginBottom: 16 }}>

        <div style={{ fontSize: 12.5, color: t.label }}>

          Appeals after procedural denial — not the same as resubmit on kicked_back exceptions.

        </div>

      </div>



      <SurfaceBoundary id="agency-ct-appeal" style={{ borderRadius: 8 }}>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>

          {APPEALS.map((c) => (

            <CtPanel key={c.id} title={c.company} right={<span style={{ fontSize: 11, color: t.muted }}>{c.id}</span>}>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 16, fontSize: 12.5 }}>

                <div>

                  <div style={{ fontSize: 11, color: t.label }}>Amount</div>

                  <div style={{ fontWeight: 500, color: t.ink }}>{formatUsd(c.amount)}</div>

                </div>

                <div>

                  <div style={{ fontSize: 11, color: t.label }}>Jurisdiction</div>

                  <div style={{ fontWeight: 500, color: t.ink }}>{c.jurisdiction}</div>

                </div>

                <div>

                  <div style={{ fontSize: 11, color: t.label }}>Denial</div>

                  <div style={{ fontWeight: 500, color: "#B45309" }}>{c.denialReason}</div>

                </div>

                <div>

                  <div style={{ fontSize: 11, color: t.label }}>Filed</div>

                  <div style={{ fontWeight: 500, color: t.ink }}>{c.filedDate}</div>

                </div>

              </div>

            </CtPanel>

          ))}

        </div>

      </SurfaceBoundary>

    </div>

  );

}

