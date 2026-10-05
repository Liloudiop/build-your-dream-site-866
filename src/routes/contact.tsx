import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { SITE } from "@/lib/site";
import { PageHeader, Section } from "@/components/site/Layout";

export const Route = createFileRoute("/contact")({
  validateSearch: (s: Record<string, unknown>) => ({ sujet: typeof s.sujet === "string" ? s.sujet : undefined }),
  head: () => ({
    meta: [
      { title: "Contact — Sahel Avenir" },
      { name: "description", content: "Écrivez-nous, appelez-nous ou passez nous voir à Dakar." },
      { property: "og:title", content: "Contacter Sahel Avenir" },
      { property: "og:description", content: "Coordonnées et formulaire de contact." },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2, "Nom trop court").max(120),
  email: z.string().trim().email("Email invalide").max(255),
  subject: z.string().trim().max(200).optional(),
  message: z.string().trim().min(5, "Message trop court").max(3000),
});

function Contact() {
  const { sujet } = Route.useSearch();
  const [sending, setSending] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const parsed = schema.safeParse(Object.fromEntries(new FormData(form)));
    if (!parsed.success) { toast.error(parsed.error.issues[0].message); return; }
    setSending(true);
    const { error } = await supabase.from("contact_messages").insert(parsed.data);
    setSending(false);
    if (error) { toast.error("Envoi impossible, réessayez."); return; }
    toast.success("Message envoyé, nous vous répondrons rapidement.");
    form.reset();
  }

  return (
    <>
      <PageHeader eyebrow="Contact" title="Parlons de votre projet" />
      <Section>
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="glass space-y-4 p-6 text-sm">
            <div><div className="text-foreground/50">Adresse</div><div className="mt-1">{SITE.address}</div></div>
            <div><div className="text-foreground/50">Téléphone</div><div className="mt-1">{SITE.phone}</div></div>
            <div><div className="text-foreground/50">Email</div><div className="mt-1">{SITE.email}</div></div>
            <div><div className="text-foreground/50">Horaires</div><div className="mt-1">Lundi – vendredi, 8h30 – 17h30</div></div>
            <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer" className="inline-block rounded-lg bg-accent px-4 py-2 font-medium text-accent-foreground">Écrire sur WhatsApp</a>
          </div>
          <form onSubmit={onSubmit} className="glass grid gap-4 p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <input name="name" className="field" placeholder="Nom complet" required />
              <input name="email" type="email" className="field" placeholder="Email" required />
            </div>
            <input name="subject" className="field" placeholder="Sujet" defaultValue={sujet} />
            <textarea name="message" rows={6} className="field" placeholder="Votre message" required />
            <button disabled={sending} className="justify-self-end rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground disabled:opacity-60">{sending ? "Envoi…" : "Envoyer"}</button>
          </form>
        </div>
      </Section>
    </>
  );
}
