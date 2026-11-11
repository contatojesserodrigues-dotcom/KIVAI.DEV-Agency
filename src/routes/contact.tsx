import { createFileRoute } from "@tanstack/react-router";
import { Container, PageHero } from "@/components/site/blocks";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => seo("Contact", "Request a consultation with KIVAI.DEV about managed automation, AI agents, bespoke AI systems or AI security and governance."),
  component: () => (
    <>
      <PageHero eyebrow="Contact" title="Let’s Automate What Slows" highlight="Your Business Down." sub="Tell us about your business operations. We’ll explore where intelligent automation can reduce repetitive work and improve efficiency." />
      <section className="pb-24"><Container className="grid gap-10 lg:grid-cols-[2fr_1fr]">
        <EnquiryForm defaultType="consultation" />
        <aside className="glass h-fit space-y-4 rounded-2xl p-7 text-sm text-muted-foreground">
          <p className="eyebrow">Company details</p>
          <p>KIVAI.DEV</p><p>AI Business Automation &amp; Systems Engineering</p><p>Remote-first. Supporting businesses internationally.</p><p>kivai.dev</p>
        </aside>
      </Container></section>
    </>
  ),
});
