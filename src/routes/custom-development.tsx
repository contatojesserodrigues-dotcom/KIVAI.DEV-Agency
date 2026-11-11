import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { Container, SectionHead, Steps } from "@/components/site/blocks";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/custom-development")({
  head: () => seo("Bespoke AI Systems Engineering", "Custom AI agents, enterprise integrations, multi-agent workflows and human approval systems designed around your operations."),
  component: () => (
    <ServicePage eyebrow="Bespoke AI Systems" title="Your Business Is Unique." highlight="Your AI Systems Should Be Too."
      sub="We engineer tailored AI automation systems around your company’s specific workflows, infrastructure and operational requirements."
      capsTitle="What we build" cta="Request a Bespoke AI Solution"
      caps={["AI workflow discovery", "Business process mapping", "Custom AI agent development", "API and enterprise software integration", "Multi-agent orchestration", "Human approval workflows", "AI security and governance", "Deployment and onboarding", "Ongoing monitoring and maintenance", "CRM and ERP integrations", "AI-enabled applications", "API development", "Workflow orchestration", "Database architecture", "Cloud application development", "Software maintenance and support", "Legacy system modernisation"]}>
      <section className="pb-24"><Container>
        <SectionHead eyebrow="Delivery process" title="A clear path from" highlight="idea to production." />
        <Steps steps={["Discovery & Requirements", "Solution Architecture", "Proposal & Scope", "Development", "Testing & Validation", "Deployment", "Maintenance & Optimisation"]} />
      </Container></section>
      <section className="pb-24"><Container className="max-w-3xl"><SectionHead eyebrow="Project enquiry" title="Request a bespoke AI solution." /><EnquiryForm defaultType="custom_development" /></Container></section>
    </ServicePage>
  ),
});
