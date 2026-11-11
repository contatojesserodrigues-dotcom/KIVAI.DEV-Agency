import { createFileRoute } from "@tanstack/react-router";
import { Container, PageHero, FeatureCard } from "@/components/site/blocks";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { tiers, pricingNote } from "@/lib/agents";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/pricing")({
  head: () => seo("Pricing & Solution Configurator", "Every business operates differently. Tell us what you need and receive a tailored proposal."),
  component: () => (
    <>
      <PageHero eyebrow="Pricing" title="Find the right intelligence solution for" highlight="your business."
        sub="Every business operates differently. Tell us what you need and receive a tailored proposal — enquiry-based agent pricing and individually scoped managed automation and bespoke engineering." />
      <section className="pb-16"><Container><div className="grid gap-6 md:grid-cols-3">{tiers.map(t => <FeatureCard key={t.name} title={t.name} body={t.description} to="/rent-an-agent" cta="Explore Agents" />)}</div><p className="mt-8 text-muted-foreground">Final pricing depends on usage volume, number of users, required integrations, complexity, data processing, support level and security requirements. Usage allowances are agreed before activation.</p><p className="mt-3 text-sm text-muted-foreground">{pricingNote}</p></Container></section>
      <section className="pb-24"><Container className="max-w-3xl"><EnquiryForm defaultType="sales" /></Container></section>
    </>
  ),
});
