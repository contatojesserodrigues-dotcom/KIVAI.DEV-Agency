import { Link } from "@tanstack/react-router";
import logo from "@/assets/kivai-logo.png.asset.json";

export function Logo({ compact = false }: { compact?: boolean }) {
  return <Link to="/" aria-label="KIVAI.DEV home" className={`relative block h-10 shrink-0 overflow-hidden ${compact ? 'w-36' : 'w-44'}`}>
    <img src={logo.url} alt="KIVAI.DEV" width={768} height={768} className="absolute left-0 top-1/2 aspect-square w-full max-w-none -translate-y-1/2" />
  </Link>;
}
