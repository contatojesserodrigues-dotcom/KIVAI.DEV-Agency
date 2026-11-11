import { createFileRoute } from "@tanstack/react-router";
import { Container, PageHero } from "@/components/site/blocks";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/data-protection")({
  head: () => seo("Data Protection Enquiries", "Data Protection Enquiries for KIVAI.DEV."),
  component: () => (
    <>
      <PageHero eyebrow="Legal" title="Data Protection Enquiries" />
      <section className="pb-24"><Container className="max-w-3xl space-y-4 text-muted-foreground">
        <p>To exercise your data protection rights, including access, correction or erasure, please contact us using the enquiry form and describe your data protection request in the project description.</p>
        <p>[Full Data Protection Enquiries text to be reviewed and supplied by KIVAI.DEV’ legal adviser.]</p>
      </Container></section>
    </>
  ),
});
