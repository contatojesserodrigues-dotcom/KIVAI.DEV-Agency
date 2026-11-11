import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

const KEY = "kiv_cookie_consent";

export function CookieBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => { if (!localStorage.getItem(KEY)) setShow(true); }, []);
  if (!show) return null;
  const choose = (v: "all" | "essential") => { localStorage.setItem(KEY, JSON.stringify({ choice: v, at: new Date().toISOString() })); setShow(false); };
  return (
    <div role="dialog" aria-label="Cookie preferences" className="glass-glow fixed inset-x-4 bottom-4 z-50 mx-auto max-w-2xl rounded-2xl p-5 md:flex md:items-center md:gap-6">
      <p className="text-sm text-muted-foreground">We use essential cookies to run this site. With your permission, we may also use analytics cookies. <Link to="/cookies" className="link-underline text-foreground">Cookie Policy</Link></p>
      <div className="mt-4 flex shrink-0 gap-2 md:mt-0">
        <Button variant="pillOutline" onClick={() => choose("essential")}>Essential only</Button>
        <Button variant="pill" onClick={() => choose("all")}>Accept all</Button>
      </div>
    </div>
  );
}
