/** Reconciling queue — remitted but not yet matched. Surface: agency-ct-reconciling. */

import { CtPanel, ctPalette as t } from "../../shared/primitives";

import { formatUsd } from "../../shared/format";

import { SurfaceBoundary } from "../../register/trace/SurfaceBoundary";

import { useFocusFromQuery } from "../../register/trace/useFocusFromQuery";



const RECONCILING = [

  { id: "rec-1", company: "Northwind Logistics LLC", jurisdiction: "OH", amount: 18420, remitDate: "2026-07-18", daysOpen: 8 },

  { id: "rec-2", company: "Summit Paper Co.", jurisdiction: "PA", amount: 9320, remitDate: "2026-07-22", daysOpen: 4 },

];



export function AgencyReconciling() {

  useFocusFromQuery();



  return (

    <div style={{ padding: "20px 40px 32px", maxWidth: 820 }}>

      <div style={{ marginBottom: 16 }}>

        <div style={{ fontSize: 12.5, color: t.label }}>

          Cases remitted by the state but not yet showing in paid — Ops matches remittance to Case.

        </div>

      </div>



      <SurfaceBoundary id="agency-ct-reconciling" style={{ borderRadius: 8 }}>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>

          {RECONCILING.map((c) => (

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

                  <div style={{ fontSize: 11, color: t.label }}>Remit date</div>

                  <div style={{ fontWeight: 500, color: t.ink }}>{c.remitDate}</div>

                </div>

                <div>

                  <div style={{ fontSize: 11, color: t.label }}>Days open</div>

                  <div style={{ fontWeight: 500, color: t.ink }}>{c.daysOpen}</div>

                </div>

              </div>

            </CtPanel>

          ))}

        </div>

      </SurfaceBoundary>

    </div>

  );

}

