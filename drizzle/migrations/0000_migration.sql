CREATE TABLE public.applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  city text,
  situation text,
  education_level text,
  program text NOT NULL,
  motivation text,
  availability text,
  status text NOT NULL DEFAULT 'envoyée'
);
GRANT INSERT ON public.applications TO anon, authenticated;
GRANT ALL ON public.applications TO service_role;
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit an application" ON public.applications FOR INSERT TO anon, authenticated
WITH CHECK (status = 'envoyée' AND length(full_name) BETWEEN 2 AND 120 AND length(email) BETWEEN 5 AND 255 AND length(coalesce(motivation,'')) <= 3000);

CREATE TABLE public.contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  name text NOT NULL,
  email text NOT NULL,
  subject text,
  message text NOT NULL
);
GRANT INSERT ON public.contact_messages TO anon, authenticated;
GRANT ALL ON public.contact_messages TO service_role;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can send a message" ON public.contact_messages FOR INSERT TO anon, authenticated
WITH CHECK (length(name) BETWEEN 2 AND 120 AND length(email) BETWEEN 5 AND 255 AND length(message) BETWEEN 5 AND 3000);