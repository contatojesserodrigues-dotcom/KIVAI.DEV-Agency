import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/automation")({
  head: () => seo("Managed Business Automation", "Connect applications, automate repetitive processes, orchestrate workflows and reduce operational bottlenecks."),
  component: () => (
    <ServicePage eyebrow="Managed Business Automation" title="Remove the busywork." highlight="Keep the momentum."
      sub="We design, implement and manage intelligent automation systems that connect applications and reduce repetitive work, with ongoing management and technical support according to your service agreement."
      capsTitle="What we automate" cta="Discuss Managed Automation"
      caps={["Document intake and data extraction", "Approval and sign-off workflows", "Cross-application data sync", "Scheduled reporting", "Email and notification routing", "Exception handling with human review", "Customer onboarding flows", "Back-office task orchestration", "Audit-friendly activity logs"]} />
  ),
});
