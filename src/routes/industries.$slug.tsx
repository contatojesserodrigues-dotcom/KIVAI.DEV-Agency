import { createFileRoute, notFound } from "@tanstack/react-router";
import { Info } from "lucide-react";
import { CheckList, Container, CtaBand, PageHero, SectionHead } from "@/components/site/blocks";
import { industries } from "@/lib/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/industries/$slug")({
  loader: ({ params }) => {
    const industry = industries.find((i) => i.slug === params.slug);
    if (!industry) throw notFound();
    return { industry };
  },
  head: ({ loaderData }) => loaderData
    ? seo(loaderData.industry.product ?? loaderData.industry.name, loaderData.industry.intro)
    : { meta: [{ title: "Industry not found | KIVAI.DEV" }, { name: "robots", content: "noindex" }] },
  component: IndustryPage,
});

function IndustryPage() {
  const { industry: i } = Route.useLoaderData();
  return (
    <>
      <PageHero eyebrow={i.name} title={i.product ?? i.name} sub={i.intro} />
      <section className="pb-20"><Container className="grid gap-14 lg:grid-cols-[1fr_2fr]">
        <div><SectionHead eyebrow="Operational challenges" title="What slows" highlight="teams down." /><CheckList items={i.challenges} cols={1} /></div>
        <div><SectionHead eyebrow="Capabilities" title="How KIVAI.DEV" highlight="can help." /><CheckList items={i.capabilities} />
          {i.note && <p className="mt-6 flex gap-3 rounded-xl border border-cyan/30 p-4 text-sm text-muted-foreground"><Info className="h-4 w-4 shrink-0 text-cyan" />{i.note}</p>}
          <p className="mt-4 text-xs text-muted-foreground">Capabilities describe what we can design and deliver; each solution is scoped to your requirements.</p>
        </div>
      </Container></section>
      <CtaBand eyebrow="Next step" title={`Let’s scope your ${i.name.toLowerCase()} solution.`} cta={i.cta} />
    </>
  );
}
