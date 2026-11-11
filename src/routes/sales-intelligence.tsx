import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { ServicePage } from "@/components/site/ServicePage";
import { CheckList, Container, SectionHead } from "@/components/site/blocks";
import { seo } from "@/lib/seo";

const flow = ["Discover", "Qualify", "Personalise", "Engage", "Schedule", "Track"];

export const Route = createFileRoute("/sales-intelligence")({
  head: () => seo("B2B Sales Intelligence", "From prospect discovery to qualified meetings: research, personalised outreach, follow-ups and CRM-connected workflows."),
  component: () => (
    <ServicePage eyebrow="B2B Sales Intelligence" title="From prospect discovery to" highlight="qualified meetings."
      sub="Streamline your business development operations with intelligent prospect research, personalised outreach, automated follow-ups and CRM-connected workflows."
      capsTitle="Capabilities" cta="Automate Your Sales Pipeline"
      caps={["B2B prospect discovery", "Company research and enrichment", "Lead segmentation", "Lead qualification", "AI-assisted personalised emails", "Outreach campaign management", "Follow-up scheduling", "CRM integration", "Meeting booking workflows", "Pipeline analytics", "Sales performance reporting"]}>
      <section className="pb-20"><Container>
        <SectionHead eyebrow="Workflow" title="A pipeline that" highlight="runs itself." sub="Integration examples include HubSpot, Salesforce, Gmail, Microsoft 365 and calendar platforms, subject to availability for your setup." />
        <div className="flex flex-wrap items-center gap-3">
          {flow.map((f, i) => (
            <div key={f} className="flex items-center gap-3">
              <span className="glass-glow rounded-full px-6 py-3 font-medium">{f}</span>
              {i < flow.length - 1 && <ArrowRight className="h-4 w-4 text-cyan" />}
            </div>
          ))}
        </div>
      </Container></section>
      <section className="pb-24"><Container>
        <SectionHead eyebrow="Responsible outreach" title="Compliant by" highlight="design." sub="Built to support UK GDPR, EU GDPR, PECR and electronic marketing requirements. We do not offer unrestricted mass email blasting." />
        <CheckList cols={3} items={["Suppression lists", "Opt-out handling", "Sender authentication", "Sending rate limits", "Campaign approval controls", "Consent and audit records"]} />
        <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground"><ShieldCheck className="h-4 w-4 text-cyan" /> Every campaign is reviewed and approved by your team before sending.</p>
      </Container></section>
    </ServicePage>
  ),
});
