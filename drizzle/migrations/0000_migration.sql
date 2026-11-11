CREATE TABLE public.enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  enquiry_type text NOT NULL DEFAULT 'general',
  full_name text NOT NULL,
  company text,
  email text NOT NULL,
  phone text,
  country text,
  industry text,
  services text[] NOT NULL DEFAULT '{}',
  business_size text,
  project_type text,
  budget_range text,
  current_systems text,
  timeline text,
  preferred_contact text,
  message text,
  consent boolean NOT NULL DEFAULT false,
  consent_at timestamptz,
  source_page text,
  status text NOT NULL DEFAULT 'new',
  assigned_owner text,
  CONSTRAINT enquiries_status_chk CHECK (status IN ('new','qualified','consultation_scheduled','proposal_sent','won','lost')),
  CONSTRAINT enquiries_lengths CHECK (char_length(full_name) BETWEEN 1 AND 120 AND char_length(email) BETWEEN 3 AND 255 AND coalesce(char_length(message),0) <= 5000)
);
GRANT INSERT ON public.enquiries TO anon, authenticated;
GRANT ALL ON public.enquiries TO service_role;
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit an enquiry" ON public.enquiries FOR INSERT TO anon, authenticated
WITH CHECK (consent = true AND status = 'new' AND assigned_owner IS NULL);