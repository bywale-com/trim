/**

 * Clients module — every Business account in the agency book by admission state.

 * Surface: agency-ct-portfolio (stable join id).

 */

import { CtPanel, CtStatusTag, ctPalette as t } from "../../shared/primitives";

import { formatUsd } from "../../shared/format";

import { SurfaceBoundary } from "../../register/trace/SurfaceBoundary";

import { useFocusFromQuery } from "../../register/trace/useFocusFromQuery";

import { CtPlantedBlock } from "../shared/CtPlantedBlock";

import { STATUS_META } from "../data/statusMeta";

import { useAgencyCases } from "./useAgencyCases";



export function AgencyClients() {

  useFocusFromQuery();

  const { cases } = useAgencyCases();

  const rows = Object.values(cases).sort((a, b) => a.companyName.localeCompare(b.companyName));

  const blockedCount = rows.filter((c) => c.status === "blocked_jurisdiction").length;

  const detectedCount = rows.filter((c) => c.status === "detected").length;

  const invoicedCount = rows.filter((c) => c.status === "invoiced").length;



  return (

    <div style={{ padding: "32px 40px", maxWidth: 920 }}>

      <div style={{ marginBottom: 20 }}>

        <div style={{ fontSize: 20, fontWeight: 700, color: t.ink }}>Clients</div>

        <div style={{ fontSize: 12.5, color: t.label, marginTop: 4 }}>

          {rows.length} Business accounts in this book — admission state at a glance.

        </div>

      </div>



      <SurfaceBoundary id="agency-ct-portfolio" style={{ borderRadius: 8 }}>

        <CtPanel>

          <table style={{ width: "100%", borderCollapse: "collapse" }}>

            <thead>

              <tr style={{ textAlign: "left" }}>

                {["Company", "Jurisdiction", "Amount", "Status", "Days in state"].map((h) => (

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

              {rows.map((c) => {

                const meta = STATUS_META[c.status];

                return (

                  <tr key={c.id} style={{ borderBottom: `1px solid ${t.stroke}` }}>

                    <td style={{ padding: "10px 10px 10px 4px", fontSize: 13, fontWeight: 600, color: t.ink }}>

                      {c.companyName}

                    </td>

                    <td style={{ padding: "10px", fontSize: 12.5, color: t.label }}>{c.jurisdiction}</td>

                    <td style={{ padding: "10px", fontSize: 12.5, color: t.label }}>{formatUsd(c.amount)}</td>

                    <td style={{ padding: "10px" }}>

                      <CtStatusTag label={meta.label} tone={meta.tone} />

                    </td>

                    <td style={{ padding: "10px", fontSize: 12.5, color: t.label }}>{c.daysInState}</td>

                  </tr>

                );

              })}

            </tbody>

          </table>

        </CtPanel>

      </SurfaceBoundary>



      <CtPlantedBlock id="agency-ct-client-dedupe" title="Client Deduplication Workflow">

        0 pending EIN / SOS merges — last resolved: Acme Holdings → Acme Corp (OH).

      </CtPlantedBlock>



      <CtPlantedBlock id="agency-ct-detected-blocked" title="Detected blocked rows">

        {detectedCount} detected · {blockedCount} blocked by jurisdiction gate — outreach held until registration clears.

      </CtPlantedBlock>



      <CtPlantedBlock id="agency-ct-ma-escheat" title="M&A escheat allocation note">

        No open M&A allocation reviews — successor entity mapping current.

      </CtPlantedBlock>



      <CtPlantedBlock id="agency-ct-successor-standing" title="Successor standing gate">

        1 client pending successor standing review before Notice can send.

      </CtPlantedBlock>



      <CtPlantedBlock id="agency-ct-legal-staleness" title="Legal staleness review">

        2 clients flagged — articles of incorporation older than 24 months.

      </CtPlantedBlock>



      <CtPlantedBlock id="agency-ct-revoke-representation" title="Revoke representation">

        No active revocation requests.

      </CtPlantedBlock>



      <CtPlantedBlock id="agency-ct-commercial-conflict" title="Commercial conflict check">

        All clients cleared — no holder-side conflict of interest on file.

      </CtPlantedBlock>



      <CtPlantedBlock id="agency-ct-public-entity" title="Public entity classifier">

        0 public entities in book — municipal / government accounts excluded at detection.

      </CtPlantedBlock>



      <CtPlantedBlock id="agency-ct-invoice-collection" title="Invoice collection status">

        {invoicedCount} open invoice{invoicedCount === 1 ? "" : "s"} — oldest 14 days past due.

      </CtPlantedBlock>

    </div>

  );

}

