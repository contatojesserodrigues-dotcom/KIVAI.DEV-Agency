import { createFileRoute } from '@tanstack/react-router';
import { ArrowDown } from 'lucide-react';
import { Container, PageHero, CtaBand } from '@/components/site/blocks';
import { Button } from '@/components/ui/button';
import { AgentCatalogue } from '@/components/site/AgentCatalogue';
import executive from '@/assets/agent-executive-portrait-cutout.png.asset.json';
import { seo } from '@/lib/seo';

export const Route = createFileRoute('/rent-an-agent')({
  head: () => seo('Rent an Agent — AI Workforce Marketplace', 'Explore specialised KIV AI workers for legal, sales, accounting, support and business operations. Explore capabilities and enquire about deployment and pricing.'),
  component: () => <>
    <PageHero eyebrow="KIVAI.DEV Rent an Agent" title="Meet Your New" highlight="Digital Workforce." sub="Explore specialised AI agents for your business. From sales prospecting to legal administration, accounting and customer support, find the digital worker that fits your operations." visual={<img src={executive.url} width={640} height={640} alt="AI executive assistant astronaut with a digital calendar" className="mx-auto aspect-square w-full max-w-md rounded-2xl object-cover" />}><Button asChild variant="pill" size="xl"><a href="#agent-catalogue">Explore Available Agents <ArrowDown /></a></Button></PageHero>
    <section id="agent-catalogue" className="scroll-mt-28 pb-24"><Container><AgentCatalogue /></Container></section>
    <CtaBand title="Hire an AI Agent. Scale Your Business." cta="Request a Bespoke Solution" to="/custom-development" />
  </>,
});