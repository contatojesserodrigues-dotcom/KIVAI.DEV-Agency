import { createFileRoute } from "@tanstack/react-router";
import { Container, PageHero } from "@/components/site/blocks";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () => seo("Privacy Policy", "Privacy Policy for KIVAI.DEV."),
  component: () => (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <section className="pb-24"><Container className="max-w-3xl space-y-4 text-muted-foreground">
        <p>We collect only the details you submit through our forms to respond to your enquiry, and process them in line with UK GDPR and EU GDPR.</p>
        <p>[Full Privacy Policy text to be reviewed and supplied by KIVAI.DEV’ legal adviser.]</p>
      </Container></section>
    </>
  ),
});
