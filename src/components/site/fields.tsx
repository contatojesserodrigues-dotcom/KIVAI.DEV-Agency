import type { ReactNode } from "react";

export const inputCls = "w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-cyan focus:ring-2 focus:ring-cyan/30";

export function Field({ label, error, children, optional }: { label: string; error?: string | undefined; children: ReactNode; optional?: boolean }) {
  return (
    <label className="block space-y-2">
      <span className="text-sm font-medium">{label}{optional && <span className="text-muted-foreground"> (optional)</span>}</span>
      {children}
      {error && <span role="alert" className="block text-xs text-destructive">{error}</span>}
    </label>
  );
}

export function Honeypot({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
      <label>Website<input tabIndex={-1} autoComplete="off" value={value} onChange={(e) => onChange(e.target.value)} /></label>
    </div>
  );
}
