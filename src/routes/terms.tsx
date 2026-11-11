import { createFileRoute } from "@tanstack/react-router";
import { Container, PageHero } from "@/components/site/blocks";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  head: () => seo("Terms of Use", "Terms of Use for KIVAI.DEV."),
  component: () => (
    <>
      <PageHero eyebrow="Legal" title="Terms of Use" />
      <section className="pb-24"><Container className="max-w-3xl space-y-4 text-muted-foreground">
        <p>By using this website you agree to use it lawfully. Content is provided for general information and does not constitute a binding offer or quotation.</p>
        <p>[Full Terms of Use text to be reviewed and supplied by KIVAI.DEV’ legal adviser.]</p>
      </Container></section>
    </>
  ),
});
