import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

export const enquirySchema = z.object({
  enquiry_type: z.string().min(1),
  full_name: z.string().trim().min(2, "Please enter your full name").max(120),
  company: z.string().trim().max(160).optional().or(z.literal("")),
  email: z.string().trim().email("Please enter a valid business email").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  country: z.string().trim().min(2, "Please enter your country").max(80),
  industry: z.string().max(80).optional().or(z.literal("")),
  services: z.array(z.string()).default([]),
  business_size: z.string().optional().or(z.literal("")),
  project_type: z.string().optional().or(z.literal("")),
  budget_range: z.string().optional().or(z.literal("")),
  current_systems: z.string().max(1000).optional().or(z.literal("")),
  timeline: z.string().max(120).optional().or(z.literal("")),
  preferred_contact: z.string().min(1, "Please choose a contact method"),
  message: z.string().trim().min(10, "Please tell us a little more (10+ characters)").max(5000),
  consent: z.literal(true, { errorMap: () => ({ message: "Please agree so we can respond to your enquiry" }) }),
});
export type Enquiry = z.infer<typeof enquirySchema>;

const LAST_KEY = "kiv_last_enquiry";

export async function submitEnquiry(data: Enquiry, honeypot: string) {
  if (honeypot) return; // bots fill hidden fields; silently drop
  const last = Number(localStorage.getItem(LAST_KEY) || 0);
  if (Date.now() - last < 30_000) throw new Error("Please wait a moment before sending another enquiry.");
  const empty = (v?: string) => (v ? v : null);
  const { error } = await supabase.from("enquiries").insert({
    enquiry_type: data.enquiry_type,
    full_name: data.full_name,
    company: empty(data.company),
    email: data.email,
    phone: empty(data.phone),
    country: data.country,
    industry: empty(data.industry),
    services: data.services,
    business_size: empty(data.business_size),
    project_type: empty(data.project_type),
    budget_range: empty(data.budget_range),
    current_systems: empty(data.current_systems),
    timeline: empty(data.timeline),
    preferred_contact: data.preferred_contact,
    message: data.message,
    consent: true,
    consent_at: new Date().toISOString(),
    source_page: typeof window !== "undefined" ? window.location.pathname : null,
  });
  if (error) throw new Error("We couldn't send your enquiry. Please try again.");
  localStorage.setItem(LAST_KEY, String(Date.now()));
}
