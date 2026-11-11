import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container, CtaBand, FeatureCard, PageHero } from "@/components/site/blocks";
import { services } from "@/lib/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/solutions")({
  head: () => seo("Solutions", "Managed business automation, AI workforce, bespoke AI systems, B2B sales intelligence, AI security and systems integration from KIVAI.DEV."),
  component: () => (
    <>
      <PageHero eyebrow="Solutions" title="Technology that" highlight="works" after="the way you do."
        sub="Six technical capabilities, delivered through managed automation, agent subscriptions or bespoke AI systems engineering.">
        <Button asChild variant="pill" size="xl"><Link to="/contact">Book a Consultation <ArrowRight /></Link></Button>
      </PageHero>
      <section className="pb-24"><Container><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => <FeatureCard key={s.slug} icon={s.icon} title={s.title} body={s.short} to={s.to} />)}
      </div></Container></section>
      <CtaBand title="Not sure where to start? Let’s talk." cta="Book a Consultation" />
    </>
  ),
});
