import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/integration")({
  head: () => seo("Systems Integration", "Connect CRM, ERP, accounting, document management, communication and business applications into coordinated workflows."),
  component: () => (
    <ServicePage eyebrow="Systems integration" title="Every system," highlight="working together."
      sub="Connect CRM, ERP, accounting, document management, communication and business applications into coordinated, reliable workflows."
      capsTitle="Integration services" cta="Plan an Integration"
      caps={["CRM and ERP integration", "Accounting platform connections", "Document management systems", "Email, chat and calendar platforms", "API design and development", "Data migration and mapping", "Event-driven workflows", "Monitoring and error alerting", "Legacy system connectivity"]} />
  ),
});
