import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { enquirySchema, submitEnquiry } from "@/lib/enquiry";
import { Field, Honeypot, inputCls } from "./fields";
import { agents } from "@/lib/agents";
import { industries } from "@/lib/site";

export const enquiryTypes = [
  { value: "general", label: "Managed Automation" },
  { value: "sales", label: "Rent an AI Agent" },
  { value: "custom_development", label: "Bespoke AI Systems" },
  { value: "cybersecurity", label: "AI Security & Governance" },
  { value: "consultation", label: "Not Sure Yet" },
];

export function EnquiryForm({ defaultType = "general", agentId }: { defaultType?: string; agentId?: string }) {
  const [selectedAgent, setSelectedAgent] = useState(agentId ?? "");
  const [volume, setVolume] = useState("");
  const [integrations, setIntegrations] = useState("");
  const [comments, setComments] = useState("");
  const rental = agentId !== undefined;
  const [v, setV] = useState({ enquiry_type: defaultType, full_name: "", company: "", email: "", phone: "", country: "", preferred_contact: "email", message: "", industry: "", consent: false });
  const [hp, setHp] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [formError, setFormError] = useState("");
  const set = (k: string, val: string | boolean) => setV((p) => ({ ...p, [k]: val }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormError("");
    const r = enquirySchema.safeParse({ ...v, services: rental ? [] : [enquiryTypes.find(t => t.value === v.enquiry_type)?.label ?? "Not Sure Yet"] });
    if (!r.success) {
      setErrors(Object.fromEntries(r.error.issues.map((i) => [String(i.path[0]), i.message])));
      return;
    }
    if (rental && (!v.company.trim() || !selectedAgent || !volume.trim() || !integrations.trim())) {
      setErrors({ company: !v.company.trim() ? "Please enter your company" : "", volume: !volume.trim() ? "Please estimate your monthly task volume" : "", integrations: !integrations.trim() ? "List your integrations, or enter None" : "", selectedAgent: !selectedAgent ? "Please select an agent" : "" });
      return;
    }
    setErrors({});
    setStatus("sending");
    try {
      const agent = agents.find(a => a.id === selectedAgent);
      const data = rental ? { ...r.data, enquiry_type: "sales", current_systems: integrations, services: agent ? [agent.name] : [], message: `Selected agent: ${agent?.name ?? selectedAgent}\nEstimated monthly task volume: ${volume}\nRequired integrations: ${integrations}\nBusiness requirements: ${r.data.message}\nAdditional comments: ${comments}` } : r.data;
      await submitEnquiry(data, hp); setStatus("done");
    }
    catch (err) { setFormError((err as Error).message); setStatus("idle"); }
  }

  if (status === "done") return (
    <div className="glass-glow rounded-2xl p-10 text-center" role="status">
      <CheckCircle2 className="mx-auto h-12 w-12 text-cyan" />
      <h3 className="mt-4 text-2xl font-semibold">Thank you — your enquiry has been received.</h3>
      <p className="mt-2 text-muted-foreground">A member of the KIVAI.DEV team will be in touch using your preferred contact method.</p>
    </div>
  );

  return (
    <form onSubmit={onSubmit} noValidate className="glass relative space-y-5 rounded-2xl p-7 md:p-9">
      <Honeypot value={hp} onChange={setHp} />
      {!rental && <Field label="Service Required">
        <select className={inputCls} value={v.enquiry_type} onChange={(e) => set("enquiry_type", e.target.value)}>
          {enquiryTypes.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
        </select>
      </Field>}
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Full Name" error={errors["full_name"]}><input className={inputCls} value={v.full_name} onChange={(e) => set("full_name", e.target.value)} autoComplete="name" /></Field>
        <Field label="Company Name" optional={!rental} error={errors["company"]}><input className={inputCls} value={v.company} onChange={(e) => set("company", e.target.value)} autoComplete="organization" /></Field>
        <Field label="Business Email" error={errors["email"]}><input type="email" className={inputCls} value={v.email} onChange={(e) => set("email", e.target.value)} autoComplete="email" /></Field>
        <Field label="Industry"><select className={inputCls} value={v.industry} onChange={e => set("industry", e.target.value)}><option value="">Select industry</option>{industries.map(i => <option key={i.slug} value={i.name}>{i.name}</option>)}<option value="Other">Other</option></select></Field>
        <Field label="Country" error={errors["country"]}><input className={inputCls} value={v.country} onChange={(e) => set("country", e.target.value)} autoComplete="country-name" /></Field>
        <Field label="Preferred contact method">
          <select className={inputCls} value={v.preferred_contact} onChange={(e) => set("preferred_contact", e.target.value)}>
            <option value="email">Email</option><option value="phone">Telephone</option><option value="video">Video call</option>
          </select>
        </Field>
      </div>
      {rental && <>
        <Field label="Selected agent" error={errors["selectedAgent"]}><select className={inputCls} value={selectedAgent} onChange={e => setSelectedAgent(e.target.value)}>{agents.map(a => <option key={a.id} value={a.id}>{a.name}</option>)}</select></Field>
        <Field label="Estimated monthly task volume" error={errors["volume"]}><input className={inputCls} value={volume} maxLength={120} onChange={e => setVolume(e.target.value)} /></Field>
        <Field label="Required integrations" error={errors["integrations"]}><input className={inputCls} value={integrations} maxLength={1000} onChange={e => setIntegrations(e.target.value)} /></Field>
        <Field label="Additional comments" optional><textarea className={inputCls} rows={2} maxLength={800} value={comments} onChange={e => setComments(e.target.value)} /></Field>
        <p className="text-sm text-muted-foreground">Subscription enquiry only. Availability, usage limits, integrations and final pricing are confirmed before activation.</p>
      </>}
      <Field label={rental ? "Business requirements" : "Brief Project Description"} error={errors["message"]}><textarea rows={5} className={inputCls} value={v.message} onChange={(e) => set("message", e.target.value)} /></Field>
      <label className="flex items-start gap-3 text-sm text-muted-foreground">
        <input type="checkbox" className="mt-1 accent-[var(--violet)]" checked={v.consent} onChange={(e) => set("consent", e.target.checked)} />
        <span>I agree to KIVAI.DEV processing my details to respond to this enquiry, as described in the <Link to="/privacy" className="link-underline text-foreground">Privacy Policy</Link>.</span>
      </label>
      {errors["consent"] && <p role="alert" className="text-xs text-destructive">{errors["consent"]}</p>}
      {formError && <p role="alert" className="text-sm text-destructive">{formError}</p>}
      <Button type="submit" variant="pill" size="xl" disabled={status === "sending"}>{status === "sending" ? "Sending…" : rental ? "Request Deployment" : "Request a Consultation"}</Button>
    </form>
  );
}
