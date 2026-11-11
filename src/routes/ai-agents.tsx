import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { Container, SectionHead } from "@/components/site/blocks";
import { seo } from "@/lib/seo";

const agents = [["Contract Review Agent","Legal","Idle"],["Invoice Extraction Agent","Accounting","Awaiting approval"],["Prospect Research Agent","Sales","Configured"],["Support Triage Agent","Customer Support","Draft"]];

export const Route = createFileRoute("/ai-agents")({
  head: () => seo("AI Workforce", "Bespoke digital AI workers for administration, sales, legal, accounting, customer support and operational workflows, designed with human oversight."),
  component: () => (
    <ServicePage eyebrow="AI Workforce" title="Build your intelligent" highlight="digital workforce."
      sub="Intelligent digital workers designed around your business. Hire a specialised agent or commission a bespoke workforce connected to your existing systems, with scoped permissions and appropriate human oversight."
      capsTitle="Agent categories" cta="Explore Rent an Agent" ctaTo="/rent-an-agent"
      caps={["Legal Agents","Accounting Agents","Sales Agents","Customer Support Agents","Operations Agents","HR Agents","Research Agents","Document Intelligence Agents","Custom Enterprise Agents"]}>
      <section className="pb-24"><Container>
        <SectionHead eyebrow="Dashboard concept" title="Every agent," highlight="in one view." sub="Illustrative demonstration only — sample entries, not live deployments." />
        <div className="glass-glow overflow-hidden rounded-2xl">
          <div className="flex items-center justify-between border-b border-border px-6 py-4"><p className="font-semibold">Agent directory</p><span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">Demo</span></div>
          {agents.map(([n,c,s]) => (
            <div key={n} className="grid grid-cols-3 border-b border-border/50 px-6 py-4 text-sm last:border-0"><span>{n}</span><span className="text-muted-foreground">{c}</span><span className="text-cyan">{s}</span></div>
          ))}
          <div className="grid grid-cols-2 gap-px bg-border/50 md:grid-cols-4">{["Assigned workflows","Approval requests","Usage monitoring","Integration settings"].map((x)=><div key={x} className="bg-card/60 px-6 py-5 text-sm text-muted-foreground">{x}</div>)}</div>
        </div>
      </Container></section>
    </ServicePage>
  ),
});
