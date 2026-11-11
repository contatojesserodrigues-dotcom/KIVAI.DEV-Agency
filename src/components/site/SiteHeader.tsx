import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { navItems, solutionNav } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 lg:px-8">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-4 2xl:flex">
          {navItems.map(n => <div key={n.to} className="relative flex items-center gap-1">
            <Link to={n.to} className="text-sm text-muted-foreground transition-colors hover:text-primary" activeProps={{ className: "text-primary underline underline-offset-[10px] decoration-1" }}>{n.label}</Link>
            {n.to === "/solutions" && <><Button variant="ghost" size="icon" className="h-7 w-7" aria-label="Solutions submenu" aria-expanded={solutionsOpen} onClick={() => setSolutionsOpen(!solutionsOpen)}><ChevronDown className="h-4 w-4" /></Button>
              {solutionsOpen && <div className="absolute left-0 top-full z-50 mt-3 w-64 rounded-xl border border-border bg-popover p-3 shadow-sm">{solutionNav.map(s => <Link key={s.to} to={s.to} onClick={() => setSolutionsOpen(false)} className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-primary">{s.label}</Link>)}</div>}</>}
          </div>)}
        </nav>
        <div className="flex items-center gap-3">
          <Button asChild variant="pillOutline" className="hidden h-11 px-5 sm:inline-flex"><Link to="/contact">Book a Consultation <ArrowRight /></Link></Button>
          <Button type="button" variant="ghost" size="icon" className="rounded-full 2xl:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}</Button>
        </div>
      </div>
      {open && <nav aria-label="Mobile" className="max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-border/60 px-5 pb-6 2xl:hidden">
        {navItems.map(n => <div key={n.to}><Link to={n.to} onClick={() => setOpen(false)} className="block py-3 text-base text-muted-foreground">{n.label}</Link>{n.to === "/solutions" && <div className="ml-4 border-l border-border pl-4">{solutionNav.map(s => <Link key={s.to} to={s.to} onClick={() => setOpen(false)} className="block py-2 text-sm text-muted-foreground">{s.label}</Link>)}</div>}</div>)}
        <Button asChild variant="pill" className="mt-4 h-12 w-full"><Link to="/contact" onClick={() => setOpen(false)}>Book a Consultation</Link></Button>
      </nav>}
    </header>
  );
}
