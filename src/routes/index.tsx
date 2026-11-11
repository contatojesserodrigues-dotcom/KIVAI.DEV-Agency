import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bot, ShieldCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container, CtaBand, FeatureCard, PageHero, SectionHead, Steps } from "@/components/site/blocks";
import workforce from "@/assets/business-automation.jpg";
import { industries, services } from "@/lib/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => seo("KIVAI.DEV | AI Business Automation & Systems Engineering", "KIVAI.DEV engineers, deploys and manages intelligent business automation systems, AI agents and secure integrations for organisations across multiple industries."),
  component: Index,
});

const pillars = [
 {title:"Managed Automation",body:"We build, deploy and manage your automation systems, providing ongoing technical support and optimisation.",cta:"Discuss Managed Automation",to:"/contact",icon:Bot},
 {title:"Rent an AI Agent",body:"Access specialised AI agents to support specific business functions through a subscription-based model.",cta:"Explore AI Agents",to:"/rent-an-agent",icon:Users},
 {title:"Bespoke AI Systems",body:"We engineer tailored automation infrastructure for complex workflows, integrations and operational requirements.",cta:"Request a Custom Solution",to:"/custom-development",icon:ShieldCheck},
] as const;

function Index() {
  return (
    <>
      <PageHero eyebrow="KIVAI.DEV | AI BUSINESS AUTOMATION" title="Your Business." highlight="Smarter Operations." after="Powered by AI."
        sub="We engineer, deploy and manage intelligent automation systems that reduce manual work, connect business processes and help organisations operate more efficiently."
        visual={<img src={workforce} alt="Connected business applications, intelligent automation and human oversight" width={1024} height={1024} className="mx-auto aspect-square w-full max-w-md rounded-2xl object-cover animate-floaty" />}>
        <Button asChild variant="pill" size="xl"><Link to="/contact">Book a Consultation <ArrowRight /></Link></Button>
        <Button asChild variant="pillOutline" size="xl"><Link to="/solutions">Explore Our Solutions <ArrowRight /></Link></Button>
      </PageHero>
      <Container>
        <p className="mb-6 font-display text-xl font-semibold">Choose How You Work With KIVAI.DEV</p>
        <p className="mb-6 text-muted-foreground">From fully managed automation to specialised AI agents and tailored systems, we deliver solutions around your business needs.</p>
        <div className="grid grid-cols-1 divide-y divide-border border-y border-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {pillars.map(p => <Link key={p.title} to={p.to} className="px-6 py-7 transition hover:bg-secondary/20"><p.icon className="mb-4 h-6 w-6 text-primary" /><h2 className="font-display text-2xl font-semibold">{p.title}</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p><span className="mt-4 inline-flex items-center gap-2 text-sm text-primary">{p.cta}<ArrowRight className="h-4 w-4 shrink-0" /></span></Link>)}
        </div>
      </Container>
      <section className="py-24">
        <Container>
          <SectionHead eyebrow="Core capabilities" title="One partner for" highlight="intelligent operations." />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => <FeatureCard key={s.slug} icon={s.icon} title={s.title} body={s.short} to={s.to} />)}
          </div>
        </Container>
      </section>
      <section className="pb-24">
        <Container>
          <SectionHead eyebrow="Industries" title="Built for the way" highlight="your sector works." />
          <div className="flex flex-wrap gap-3">
            {industries.map((i) => (
              <Link key={i.slug} to="/industries/$slug" params={{ slug: i.slug }} className="glass rounded-full px-5 py-2.5 text-sm transition hover:border-cyan/50">{i.name}</Link>
            ))}
          </div>
        </Container>
      </section>
      <section className="pb-24"><Container><SectionHead eyebrow="How KIV works" title="From operational needs" highlight="to intelligent work." sub="Discover, configure and deploy automation around your business needs." /><Steps steps={["Discover your operational requirements.","Select an existing AI agent or request a bespoke solution.","Configure integrations and permissions.","Deploy with appropriate human oversight.","Monitor performance, usage and security."]} /></Container></section>
      <CtaBand title="Let’s Automate What Slows Your Business Down." cta="Book a Consultation" />
    </>
  );
}
