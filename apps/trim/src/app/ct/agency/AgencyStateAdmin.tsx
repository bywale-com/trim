/** State Admin Workload — ops view of pending state actions. Surface: agency-ct-state-admin-workload. */

import { CtPanel, ctPalette as t } from "../../shared/primitives";

import { SurfaceBoundary } from "../../register/trace/SurfaceBoundary";

import { useFocusFromQuery } from "../../register/trace/useFocusFromQuery";



const WORKLOAD = [

  { jurisdiction: "CA", filing: 4, appeal: 1, inbound: 2, avgDays: 180 },

  { jurisdiction: "NY", filing: 2, appeal: 1, inbound: 1, avgDays: 150 },

  { jurisdiction: "IL", filing: 3, appeal: 0, inbound: 0, avgDays: 120 },

  { jurisdiction: "OR", filing: 1, appeal: 0, inbound: 0, avgDays: 100 },

];



export function AgencyStateAdmin() {

  useFocusFromQuery();



  return (

    <div style={{ padding: "20px 40px 32px", maxWidth: 860 }}>

      <div style={{ marginBottom: 16 }}>

        <div style={{ fontSize: 12.5, color: t.label }}>

          Ops view of state admin workload — filing, appeal, and inbound counts by jurisdiction.

        </div>

      </div>



      <SurfaceBoundary id="agency-ct-state-admin-workload" style={{ borderRadius: 8 }}>

        <CtPanel>

          <table style={{ width: "100%", borderCollapse: "collapse" }}>

            <thead>

              <tr style={{ textAlign: "left" }}>

                {["Jurisdiction", "Filing", "Appeal", "Inbound", "Avg days"].map((h) => (

                  <th

                    key={h}

                    style={{

                      fontSize: 11,

                      fontWeight: 600,

                      color: t.muted,

                      textTransform: "uppercase",

                      letterSpacing: "0.03em",

                      padding: "0 10px 10px 4px",

                      borderBottom: `1px solid ${t.stroke}`,

                    }}

                  >

                    {h}

                  </th>

                ))}

              </tr>

            </thead>

            <tbody>

              {WORKLOAD.map((row) => (

                <tr key={row.jurisdiction} style={{ borderBottom: `1px solid ${t.stroke}` }}>

                  <td style={{ padding: "10px 10px 10px 4px", fontSize: 13, fontWeight: 600, color: t.ink }}>

                    {row.jurisdiction}

                  </td>

                  <td style={{ padding: "10px", fontSize: 12.5, color: t.label }}>{row.filing}</td>

                  <td style={{ padding: "10px", fontSize: 12.5, color: t.label }}>{row.appeal}</td>

                  <td style={{ padding: "10px", fontSize: 12.5, color: t.label }}>{row.inbound}</td>

                  <td style={{ padding: "10px", fontSize: 12.5, color: t.label }}>{row.avgDays}</td>

                </tr>

              ))}

            </tbody>

          </table>

        </CtPanel>

      </SurfaceBoundary>

    </div>

  );

}

