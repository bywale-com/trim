import { Card, CardList, EntityTitle, Section, SectionCard, Tag } from "@blueprintjs/core";
import { useNavigate } from "react-router";
import { BlueprintShell } from "./shell/BlueprintShell";
import { RECOVERY_CASES, JURISDICTIONS } from "./data/seed";

const kickedBackCount = RECOVERY_CASES.filter((c) => c.status === "kicked_back").length;
const blockedCount = JURISDICTIONS.filter((j) => j.status === "blocked").length;

/**
 * Composition-first Blueprint hub. Isolated document served under
 * /prototype-blueprint — never imported by the main SPA (see
 * BlueprintAppRouter.tsx and vite.config.ts isolation notes).
 */
export function BlueprintPlantHub() {
  return (
    <BlueprintShell>
      <BlueprintHubBody />
    </BlueprintShell>
  );
}

function BlueprintHubBody() {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div>
        <h1 style={{ margin: 0, fontSize: 24 }}>Recovery, agent-presented</h1>
        <p className="bp-muted" style={{ marginTop: 8, fontSize: 13, maxWidth: 640 }}>
          A composition-first remake of the DS-I click-through, in Blueprint. Fully isolated document —
          Blueprint's global CSS never touches the main SPA at <code>/register</code> and <code>/ct/*</code>.
        </p>
      </div>

      <Section title="Personas" subtitle="Switch with the segmented control above, or from a card below">
        <SectionCard padded={false}>
          <CardList bordered={false}>
            <Card interactive onClick={() => navigate("/business")}>
              <EntityTitle
                icon="office"
                title="Business"
                subtitle="Notice, consent, authorize, upload, status, decline — the customer org's seat."
                tags={<Tag minimal>{RECOVERY_CASES.length} seeded cases</Tag>}
              />
            </Card>
            <Card interactive onClick={() => navigate("/ops")}>
              <EntityTitle
                icon="shield"
                title="Agency Owner"
                subtitle="Jurisdiction gate, exceptions, resubmit, audit glance — the agency seat over the book."
                tags={
                  <>
                    <Tag minimal intent="warning">
                      {kickedBackCount} exception
                    </Tag>
                    <Tag minimal intent="danger" style={{ marginLeft: 6 }}>
                      {blockedCount} states blocked
                    </Tag>
                  </>
                }
              />
            </Card>
          </CardList>
        </SectionCard>
      </Section>

      <Section title="Also in this workspace">
        <SectionCard padded={false}>
          <CardList bordered={false}>
            <Card style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
              <EntityTitle title="Register" subtitle="World → Outcomes → How → Can'ts → Furnish → SME → Wiring → Flows → CT." />
              <a href="/register" style={{ fontSize: 12.5, whiteSpace: "nowrap" }}>
                Open /register &rarr;
              </a>
            </Card>
            <Card style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
              <EntityTitle title="DS-I click-through" subtitle="Gray lo-fi Business + Agency Owner desks." />
              <a href="/ct" style={{ fontSize: 12.5, whiteSpace: "nowrap" }}>
                Open /ct &rarr;
              </a>
            </Card>
          </CardList>
        </SectionCard>
      </Section>
    </div>
  );
}
