import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2 } from "lucide-react";
import { Container, CtaBand, FeatureCard, PageHero } from "@/components/site/blocks";
import { industries } from "@/lib/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/industries/")({
  head: () => seo("Industries", "Industry-specific AI and automation for legal, accounting, logistics, healthcare administration, real estate, hospitality and more."),
  component: () => (
    <>
      <PageHero eyebrow="Industry solutions" title="Intelligence shaped around" highlight="your sector." sub="Every industry has its own workflows, regulations and systems. We design around them." />
      <section className="pb-24"><Container><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {industries.map((i) => <Link key={i.slug} to="/industries/$slug" params={{ slug: i.slug }} className="block h-full"><FeatureCard icon={Building2} title={i.name} body={i.intro} cta={i.cta} /></Link>)}
      </div></Container></section>
      <CtaBand title="Don’t see your industry? We build bespoke." cta="Discuss Your Requirements" />
    </>
  ),
});
