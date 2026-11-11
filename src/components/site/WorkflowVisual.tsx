import { UserRound, Sparkles, Send, BarChart3, Zap } from "lucide-react";

const nodes = [
  { icon: UserRound, title: "New Enquiry", sub: "Website form submitted", cls: "ml-0 md:ml-6" },
  { icon: Sparkles, title: "AI Agent", sub: "Qualify, enrich and draft a response", cls: "ml-0" },
  { icon: Send, title: "Take Action", sub: "Update CRM, notify the team, create a task", cls: "ml-0" },
  { icon: BarChart3, title: "Measured Outcome", sub: "Less busywork, faster response", cls: "ml-0 md:ml-24" },
];

export function WorkflowVisual() {
  return (
    <div className="relative mx-auto max-w-md" aria-hidden>
      <div className="absolute left-10 top-10 bottom-10 w-px bg-gradient-to-b from-cyan via-violet to-cyan opacity-70 shadow-[0_0_12px_var(--cyan)]" />
      <div className="space-y-6">
        {nodes.map((n, i) => (
          <div key={n.title} className={`glass-glow relative flex items-center gap-4 rounded-2xl p-5 animate-floaty ${n.cls}`} style={{ animationDelay: `${i * 0.6}s` }}>
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet/30"><n.icon className="h-5 w-5 text-cyan" /></div>
            <div>
              <p className="font-semibold">{n.title}</p>
              <p className="text-sm text-muted-foreground">{n.sub}</p>
            </div>
            {i === 0 && <Zap className="absolute -right-3 -top-3 h-8 w-8 rounded-full border border-cyan/50 bg-background p-1.5 text-cyan" />}
          </div>
        ))}
      </div>
      <p className="absolute -right-4 bottom-24 hidden rotate-[-8deg] font-hand text-xl text-muted-foreground lg:block">From enquiry<br />to action,<br />on autopilot.</p>
    </div>
  );
}
