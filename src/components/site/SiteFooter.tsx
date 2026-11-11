import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { solutionNav } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4 lg:px-8">
        <div className="space-y-4">
          <Logo />
          <p className="text-sm text-muted-foreground">AI Business Automation &amp; Systems Engineering</p><p className="text-sm text-muted-foreground">We engineer, integrate and manage intelligent automation solutions for modern businesses.</p><p className="text-sm text-muted-foreground">kivai.dev</p><p className="text-sm text-muted-foreground">Remote-first. Supporting businesses internationally.</p>
        </div>
        <div>
          <p className="eyebrow mb-4">Solutions</p>
          <ul className="space-y-2 text-sm">{solutionNav.filter(s => s.to !== "/integration").map((s) => <li key={s.to}><Link to={s.to} className="text-muted-foreground hover:text-foreground">{s.to === "/automation" ? "Managed Automation" : s.label}</Link></li>)}</ul>
        </div>
        <div>
          <p className="eyebrow mb-4">Company</p>
          <ul className="space-y-2 text-sm">
            {([["/rent-an-agent","Rent an Agent"],["/about","About"],["/industries","Industries"],["/contact","Contact"]] as const).map(([to,l]) => <li key={to}><Link to={to} className="text-muted-foreground hover:text-foreground">{l}</Link></li>)}
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-4">Legal</p>
          <ul className="space-y-2 text-sm">
            {([["/privacy","Privacy Policy"],["/cookies","Cookie Policy"],["/terms","Terms of Use"],["/data-protection","Data Protection Enquiries"]] as const).map(([to,l]) => <li key={to}><Link to={to} className="text-muted-foreground hover:text-foreground">{l}</Link></li>)}
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} KIVAI.DEV. All rights reserved.
      </div>
    </footer>
  );
}
