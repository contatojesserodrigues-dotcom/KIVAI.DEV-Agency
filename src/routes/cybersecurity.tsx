import { createFileRoute } from "@tanstack/react-router";
import { Radar, BellRing, ServerCog, Workflow, ScanSearch, LifeBuoy, Info } from "lucide-react";
import { ServicePage } from "@/components/site/ServicePage";
import { Container, FeatureCard, SectionHead } from "@/components/site/blocks";
import { seo } from "@/lib/seo";

const cats = [
 [Radar,"AI Agent Monitoring","Monitor agent actions, tool calls and operational behaviour."],
 [ServerCog,"Access & Permission Controls","Restrict access to systems, data and sensitive actions."],
 [BellRing,"Suspicious Activity Alerts","Flag unusual activity and deviations from established operational patterns."],
 [ServerCog,"Data Access Governance","Define scoped access to sensitive business information."],
 [Radar,"Security Audit Trails","Maintain detailed logs of agent activity and security events."],
 [LifeBuoy,"Human-in-the-Loop Controls","Require human authorisation for high-risk operations."],
 [Workflow,"Integration Security Controls","Connect to existing security tools where supported."],
] as const;

export const Route = createFileRoute("/cybersecurity")({
  head: () => seo("AI Security & Governance", "AI security and governance infrastructure in development, designed for agent monitoring, permission enforcement, audit trails and human approval."),
  component: () => (
    <ServicePage eyebrow="AI Security & Governance · In Development" title="Intelligent Automation Needs" highlight="Intelligent Oversight."
      sub="We develop security and governance controls to help businesses monitor AI-powered workflows, manage permissions and maintain oversight of sensitive operations."
      capsTitle="AI governance, scoped to your operations" cta="Discuss AI Security"
      caps={["Security posture review", "Detection rule configuration", "Alert routing and escalation", "Audit and reporting"]}>
      <section className="pb-24"><Container>
        <SectionHead eyebrow="Planned capabilities" title="Intelligent oversight." highlight="Defined boundaries." sub="AI Security & Governance is in development. The capabilities below describe the product direction, not verified live services. Any implementation-specific controls are confirmed during discovery." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{cats.map(([I, t, b]) => <FeatureCard key={t} icon={I} title={t} body={b} />)}</div>
        <p className="mt-8 flex gap-3 rounded-xl border border-cyan/30 p-5 text-sm text-muted-foreground"><Info className="h-4 w-4 shrink-0 text-cyan" />
          No security solution can guarantee prevention of every attack. These planned AI agent governance capabilities are not a complete antivirus, endpoint protection platform, network protection service or enterprise intrusion detection system. Autonomous blocking, continuous monitoring and real-time detection are not presented as live services. Broader defensive cybersecurity support is separately scoped and agreed.</p>
      </Container></section>
    </ServicePage>
  ),
});
