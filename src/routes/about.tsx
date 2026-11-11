import { createFileRoute } from "@tanstack/react-router";
import { Target, Compass, Cpu, Scale, Lock, GitBranch } from "lucide-react";
import { Container, CtaBand, FeatureCard, PageHero } from "@/components/site/blocks";
import { seo } from "@/lib/seo";

const items = [[Target,"Our Mission","Help organisations modernise their operations with practical, intelligent technology."],[Compass,"Our Approach","Practical implementation, measurable operational value and long-term scalability."],[Cpu,"Technology & Innovation","Software engineering, AI and process design combined around real workflows."],[Scale,"Responsible AI","Human oversight, transparency and review built into every automated decision."],[Lock,"Security & Privacy","Designed with UK GDPR and EU GDPR considerations and secure-by-default architecture."],[GitBranch,"Our Development Process","Discovery, architecture, delivery, validation and continuous optimisation."]] as const;

export const Route = createFileRoute("/about")({
  head: () => seo("About", "KIVAI.DEV engineers, integrates, deploys and manages intelligent business automation systems."),
  component: () => (
    <>
      <PageHero eyebrow="About KIVAI.DEV" title="Engineering intelligent" highlight="business operations."
        sub="KIVAI.DEV is a B2B company specialising in AI Business Automation & Intelligent Systems Engineering. We design, engineer, integrate, deploy and manage intelligent automation systems that connect existing software, reduce repetitive work and improve business operations. Work with us through managed business automation, specialised AI agent subscriptions or bespoke AI systems engineering." />
      <section className="pb-24"><Container><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{items.map(([I,t,b])=><FeatureCard key={t} icon={I} title={t} body={b} />)}</div></Container></section>
      <CtaBand title="Let’s build your AI advantage." cta="Book a Consultation" />
    </>
  ),
});
