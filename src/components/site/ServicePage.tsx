import { Link, type LinkProps } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CheckList, Container, CtaBand, PageHero, SectionHead } from "./blocks";

export function ServicePage({ eyebrow, title, highlight, after, sub, capsTitle, caps, cta, ctaTo = "/contact", children }: {
  eyebrow: string; title: string; highlight?: string; after?: string; sub: string; capsTitle: string; caps: string[]; cta: string; ctaTo?: LinkProps["to"]; children?: ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} highlight={highlight} after={after} sub={sub}>
        <Button asChild variant="pill" size="xl"><Link to={ctaTo}>{cta} <ArrowRight /></Link></Button>
      </PageHero>
      <section className="pb-20"><Container><SectionHead eyebrow="Capabilities" title={capsTitle} /><CheckList items={caps} cols={3} /></Container></section>
      {children}
      <CtaBand title="Let’s build your advantage." cta={cta} to={ctaTo} />
    </>
  );
}
