/** Inbound matcher — state mail to Case. Surface: agency-ct-inbound-matcher. */

import { CtPanel, ctPalette as t } from "../../shared/primitives";

import { SurfaceBoundary } from "../../register/trace/SurfaceBoundary";

import { useFocusFromQuery } from "../../register/trace/useFocusFromQuery";



const INBOUND = [

  {

    id: "in-1",

    received: "2026-07-24",

    from: "NY Office of Unclaimed Funds",

    subject: "Claim status — wet-ink signature required",

    suggestedCase: "Beacon Industrial Supply (app-1)",

    confidence: "High",

  },

  {

    id: "in-2",

    received: "2026-07-25",

    from: "California State Controller",

    subject: "Additional documentation request",

    suggestedCase: "Harborview Medical Group",

    confidence: "Medium",

  },

];



export function AgencyInbound() {

  useFocusFromQuery();



  return (

    <div style={{ padding: "20px 40px 32px", maxWidth: 820 }}>

      <div style={{ marginBottom: 16 }}>

        <div style={{ fontSize: 12.5, color: t.label }}>

          Match inbound state correspondence to open Cases — unlinked mail stays in queue.

        </div>

      </div>



      <SurfaceBoundary id="agency-ct-inbound-matcher" style={{ borderRadius: 8 }}>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>

          {INBOUND.map((item) => (

            <CtPanel key={item.id} title={item.from} right={<span style={{ fontSize: 11, color: t.muted }}>{item.received}</span>}>

              <div style={{ fontSize: 12.5, color: t.label, marginBottom: 8 }}>{item.subject}</div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 16, fontSize: 12.5 }}>

                <div>

                  <div style={{ fontSize: 11, color: t.label }}>Suggested Case</div>

                  <div style={{ fontWeight: 500, color: t.ink }}>{item.suggestedCase}</div>

                </div>

                <div>

                  <div style={{ fontSize: 11, color: t.label }}>Match confidence</div>

                  <div style={{ fontWeight: 500, color: t.ink }}>{item.confidence}</div>

                </div>

              </div>

            </CtPanel>

          ))}

        </div>

      </SurfaceBoundary>

    </div>

  );

}

