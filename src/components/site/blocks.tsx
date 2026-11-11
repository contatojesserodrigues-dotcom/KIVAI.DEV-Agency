import { Link, type LinkProps } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { LucideIcon } from "lucide-react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-7xl px-5 lg:px-8 ${className}`}>{children}</div>;
}

export function PageHero({ eyebrow, title, highlight, after, sub, children, visual }: {
  eyebrow: string; title: string; highlight?: string | undefined; after?: string | undefined; sub?: string | undefined; children?: ReactNode; visual?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden">
      <Container className="relative grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="eyebrow mb-6">{eyebrow}</p>
          <h1 className="text-4xl font-semibold leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl">
            {title} {highlight && <span className="text-gradient">{highlight}</span>} {after}
          </h1>
          {sub && <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">{sub}</p>}
          {children && <div className="mt-9 flex flex-wrap items-center gap-6">{children}</div>}
        </div>
        {visual && <div className="relative">{visual}</div>}
      </Container>
    </section>
  );
}

export function SectionHead({ eyebrow, title, highlight, sub }: { eyebrow: string; title: string; highlight?: string; sub?: string }) {
  return (
    <div className="mb-12 max-w-3xl">
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="text-4xl font-semibold leading-tight md:text-5xl">{title} {highlight && <span className="text-gradient">{highlight}</span>}</h2>
      {sub && <p className="mt-5 text-lg text-muted-foreground">{sub}</p>}
    </div>
  );
}

export function FeatureCard({ icon: Icon, title, body, to, cta }: { icon?: LucideIcon; title: string; body?: string; to?: LinkProps["to"]; cta?: string }) {
  const inner = (
    <div className="glass group relative h-full overflow-hidden rounded-2xl p-7 transition hover:-translate-y-1 hover:border-primary/40">
      {Icon && <div className="glass-glow mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl"><Icon className="h-5 w-5 text-primary" /></div>}
      <h3 className="relative text-xl font-semibold">{title}</h3>
      {body && <p className="relative mt-3 text-muted-foreground">{body}</p>}
      {(to || cta) && <span className="link-underline relative mt-6 inline-flex items-center gap-2 text-sm font-medium">{cta ?? "Learn More"} <ArrowRight className="h-4 w-4" /></span>}
    </div>
  );
  return to ? <Link to={to} className="block h-full">{inner}</Link> : inner;
}

export function CheckList({ items, cols = 2 }: { items: string[]; cols?: 1 | 2 | 3 }) {
  const c = cols === 3 ? "md:grid-cols-3" : cols === 2 ? "md:grid-cols-2" : "";
  return (
    <ul className={`grid gap-3 ${c}`}>
      {items.map((i) => (
        <li key={i} className="glass flex items-start gap-3 rounded-xl px-4 py-3 text-sm">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> <span>{i}</span>
        </li>
      ))}
    </ul>
  );
}

export function CtaBand({ eyebrow = "Ready to automate?", title, cta, to = "/contact" }: { eyebrow?: string; title: string; cta: string; to?: LinkProps["to"] }) {
  return (
    <section className="border-t border-border/60">
      <Container className="flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center">
        <div>
          <p className="eyebrow mb-3">{eyebrow}</p>
          <p className="font-display text-3xl font-medium">{title}</p>
        </div>
        <Button asChild variant="pill" size="xl"><Link to={to}>{cta} <ArrowRight /></Link></Button>
      </Container>
    </section>
  );
}

export function Steps({ steps }: { steps: string[] }) {
  return (
    <ol className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
      {steps.map((s, i) => (
        <li key={s} className="glass rounded-2xl p-6">
          <span className="text-gradient font-display text-3xl font-semibold">{String(i + 1).padStart(2, "0")}</span>
          <p className="mt-3 font-medium">{s}</p>
        </li>
      ))}
    </ol>
  );
}
