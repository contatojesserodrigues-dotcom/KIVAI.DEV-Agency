import { useState } from 'react';
import { Search, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { agents, categories, filterAgents, publicAgentPrice, pricingNote, tiers, type Agent } from '@/lib/agents';
import { EnquiryForm } from './EnquiryForm';
import { inputCls } from './fields';

export function AgentCatalogue() {
  const [category, setCategory] = useState('All Agents');
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<Agent | null>(null);
  const [renting, setRenting] = useState(false);
  const filtered = filterAgents(category, search);
  function open(agent: Agent, rental = false) { setSelected(agent); setRenting(rental); }
  return <>
    <div className="flex flex-col justify-between gap-5 border-b border-border pb-6 sm:flex-row sm:items-center">
      <div><p className="eyebrow">Agent catalogue</p><h2 className="mt-2 text-3xl font-semibold">Find your digital worker.</h2></div>
      <label className="relative block sm:w-72"><Search className="absolute left-4 top-3.5 h-4 w-4 text-muted-foreground" /><input aria-label="Search agents" className={`${inputCls} pl-11`} value={search} onChange={e => setSearch(e.target.value)} placeholder="Search agents" /></label>
    </div>
    <div className="my-6 flex flex-wrap gap-2" aria-label="Filter agents by sector">{categories.map(c => <Button key={c} variant={c === category ? 'default' : 'outline'} aria-pressed={c === category} onClick={() => setCategory(c)}>{c}</Button>)}</div>
    <p className="mb-5 text-sm text-muted-foreground" role="status">{filtered.length} {filtered.length === 1 ? 'agent' : 'agents'}</p>
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {filtered.map(a => <article key={a.id} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan/50 hover:shadow-[var(--shadow-glow)]">
        <Button variant="ghost" className="block h-auto w-full shrink-0 overflow-hidden rounded-none p-0" aria-label={`View ${a.name}`} onClick={() => open(a)}><img src={a.image} alt={`${a.name} astronaut`} width={640} height={640} loading="lazy" className="h-52 w-full object-contain transition duration-500 group-hover:scale-[1.025]" /></Button>
        <div className="flex flex-1 flex-col gap-3 p-4"><p className="eyebrow min-h-8">{a.category}</p><h3 className="min-h-20 text-xl font-semibold">{a.name}</h3><p className="min-h-20 text-sm leading-relaxed text-muted-foreground">{a.description}</p>{publicAgentPrice(a) !== undefined && <p className="font-semibold text-primary">Starting at ${publicAgentPrice(a)}/month</p>}<ul className="min-h-24 space-y-2 text-sm text-muted-foreground">{a.tasks.slice(0,3).map(t => t.length > 64 ? `${t.slice(0,61)}…` : t).map(t => <li className="flex gap-2" key={t}><Check className="h-4 w-4 shrink-0 text-primary" />{t}</li>)}</ul><div className="mt-auto flex flex-wrap gap-2 pt-2"><Button variant="outline" onClick={() => open(a)}>View Details</Button><Button onClick={() => open(a,true)}>Enquire <ArrowRight /></Button></div></div>
      </article>)}
    </div>
    {filtered.length === 0 && <div className="py-16 text-center"><p className="text-xl font-semibold">No agents match your search.</p><Button className="mt-4" variant="outline" onClick={() => { setSearch(''); setCategory('All Agents'); }}>Clear filters</Button></div>}
    <p className="mt-8 text-sm text-muted-foreground">Pricing is confirmed after reviewing your requirements. {pricingNote}</p>
    <Dialog open={selected !== null} onOpenChange={value => { if (!value) setSelected(null); }}>
      <DialogContent className="max-h-[90dvh] w-[calc(100%-2rem)] max-w-4xl overflow-y-auto p-5 sm:p-8">
        {selected && <>
          <DialogTitle className="pr-8 text-2xl">{renting ? `Enquire about ${selected.name}` : selected.name}</DialogTitle>
          <DialogDescription>{renting ? 'Tell us about your operations. No payment or subscription is activated by this enquiry.' : selected.description}</DialogDescription>
          {renting ? <EnquiryForm key={selected.id} defaultType="sales" agentId={selected.id} /> : <>
            <div className="grid items-start gap-6 md:grid-cols-2"><img src={selected.image} width={640} height={640} alt={`${selected.name} astronaut`} className="aspect-square w-full rounded-xl object-cover" /><div><p className="eyebrow">{selected.category}</p><p className="my-4 text-xl font-semibold text-primary">{publicAgentPrice(selected) !== undefined ? `Starting at $${publicAgentPrice(selected)}/month` : "Enquiry-based pricing"}</p><h3 className="font-semibold">Supported tasks</h3><ul className="mt-3 space-y-2 text-sm text-muted-foreground">{selected.tasks.map(t => <li className="flex gap-2" key={t}><Check className="h-4 w-4 shrink-0 text-primary" />{t}</li>)}</ul></div></div>
            {selected.customers && <div><h3 className="mb-2 font-semibold">Designed for</h3><p className="text-sm text-muted-foreground">{selected.customers.join(", ")}</p></div>}
             <div className="grid gap-6 sm:grid-cols-2"><div><h3 className="mb-2 font-semibold">Required integrations</h3><p className="text-sm text-muted-foreground">{selected.integrations}</p></div><div><h3 className="mb-2 font-semibold">Human approval requirements</h3><p className="text-sm text-muted-foreground">{selected.approval}</p></div></div>
            <div className="border-y border-border py-5"><h3 className="flex items-center gap-2 font-semibold"><ShieldCheck className="h-5 w-5 text-primary" />Security & onboarding</h3><p className="mt-2 text-sm text-muted-foreground">Discovery, compatibility review, scoped permissions, human approval rules and validation precede deployment. Data access and activity records are agreed for each implementation. Advanced AI Security &amp; Governance monitoring is planned, not a live inclusion.</p></div>
            <h3 className="font-semibold">Available commercial plans</h3><div className="grid gap-4 sm:grid-cols-3">{tiers.map(t => <div key={t.name}><h4 className="font-semibold text-primary">{t.name}</h4><p className="mt-2 text-sm text-muted-foreground">{t.description}</p></div>)}</div>
            <p className="text-sm text-muted-foreground">Final pricing depends on task volume, users, integrations, complexity, data processing, support and security requirements. Usage allowances are agreed in your proposal. {pricingNote}</p><Button size="lg" onClick={() => setRenting(true)}>{selected.cta ?? "Request Deployment"} <ArrowRight /></Button>
          </>}
        </>}
      </DialogContent>
    </Dialog>
  </>;
}