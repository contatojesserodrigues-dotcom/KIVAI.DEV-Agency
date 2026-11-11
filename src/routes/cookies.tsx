import { createFileRoute } from "@tanstack/react-router";
import { Container, PageHero } from "@/components/site/blocks";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/cookies")({
  head: () => seo("Cookie Policy", "Cookie Policy for KIVAI.DEV."),
  component: () => (
    <>
      <PageHero eyebrow="Legal" title="Cookie Policy" />
      <section className="pb-24"><Container className="max-w-3xl space-y-4 text-muted-foreground">
        <p>We use essential cookies to operate this website. Optional analytics cookies are used only with your consent, which you can change at any time by clearing your browser storage.</p>
        <p>[Full Cookie Policy text to be reviewed and supplied by KIVAI.DEV’ legal adviser.]</p>
      </Container></section>
    </>
  ),
});
