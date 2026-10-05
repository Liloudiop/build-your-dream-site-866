import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { FORMATIONS } from "@/lib/site";
import { PageHeader, Section } from "@/components/site/Layout";

export const Route = createFileRoute("/candidature")({
  validateSearch: (s: Record<string, unknown>): { formation?: string } => (typeof s["formation"] === "string" ? { formation: s["formation"] } : {}),
  head: () => ({
    meta: [
      { title: "Candidater à une formation — Sahel Avenir" },
      { name: "description", content: "Déposez votre candidature en ligne en quelques minutes." },
      { property: "og:title", content: "Candidature en ligne — Sahel Avenir" },
      { property: "og:description", content: "Postulez à nos formations certifiantes en ligne." },
    ],
  }),
  component: Candidature,
});

const schema = z.object({
  full_name: z.string().trim().min(2, "Nom trop court").max(120),
  email: z.string().trim().email("Email invalide").max(255),
  phone: z.string().trim().min(7, "Téléphone invalide").max(30),
  city: z.string().trim().max(80).optional(),
  situation: z.string().max(80).optional(),
  education_level: z.string().max(80).optional(),
  program: z.string().min(1, "Choisissez une formation"),
  availability: z.string().max(80).optional(),
  motivation: z.string().trim().min(20, "Expliquez votre motivation (20 caractères min.)").max(3000),
});

function Candidature() {
  const { formation } = Route.useSearch();
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const parsed = schema.safeParse(data);
    if (!parsed.success) { toast.error(parsed.error.issues[0]?.message ?? "Formulaire invalide"); return; }
    setSending(true);
    const { error } = await supabase.from("applications").insert({ ...parsed.data, city: parsed.data.city ?? null, situation: parsed.data.situation ?? null, education_level: parsed.data.education_level ?? null, availability: parsed.data.availability ?? null });
    setSending(false);
    if (error) { toast.error("Envoi impossible, réessayez."); return; }
    setDone(true);
  }

  if (done) {
    return (
      <Section className="pt-24">
        <div className="glass mx-auto max-w-xl p-10 text-center">
          <h1 className="text-3xl font-semibold">Candidature envoyée</h1>
          <p className="mt-4 text-foreground/70">Merci ! Votre dossier est maintenant « en cours d'étude ». Notre équipe vous contactera par téléphone ou email sous 10 jours.</p>
          <Link to="/formations" className="mt-6 inline-block text-primary">← Retour aux formations</Link>
        </div>
      </Section>
    );
  }

  return (
    <>
      <PageHeader eyebrow="Candidature" title="Postulez en quelques minutes" intro="Remplissez ce formulaire. Après étude, vous pourrez être convoqué(e) à un entretien." />
      <Section>
        <form onSubmit={onSubmit} className="glass grid gap-5 p-6 sm:grid-cols-2 sm:p-8">
          <Field label="Nom complet *"><input name="full_name" className="field" required /></Field>
          <Field label="Email *"><input name="email" type="email" className="field" required /></Field>
          <Field label="Téléphone *"><input name="phone" className="field" placeholder="+221 …" required /></Field>
          <Field label="Ville"><input name="city" className="field" /></Field>
          <Field label="Situation actuelle">
            <select name="situation" className="field"><option>Demandeur d'emploi</option><option>Étudiant(e)</option><option>Diplômé(e)</option><option>En reconversion</option><option>Entrepreneur</option><option>Autre</option></select>
          </Field>
          <Field label="Niveau d'étude">
            <select name="education_level" className="field"><option>Sans diplôme</option><option>CFEE</option><option>BFEM</option><option>Bac</option><option>Bac +2</option><option>Bac +3 et plus</option></select>
          </Field>
          <Field label="Formation choisie *">
            <select name="program" className="field" defaultValue={formation ?? ""} required>
              <option value="" disabled>Sélectionnez…</option>
              {FORMATIONS.map((f) => <option key={f.slug} value={f.slug}>{f.title}</option>)}
            </select>
          </Field>
          <Field label="Disponibilité">
            <select name="availability" className="field"><option>Temps plein</option><option>Temps partiel</option><option>Soir / week-end</option></select>
          </Field>
          <div className="sm:col-span-2"><Field label="Motivation *"><textarea name="motivation" rows={5} className="field" placeholder="Pourquoi cette formation ? Quel est votre projet ?" required /></Field></div>
          <div className="sm:col-span-2 flex items-center justify-between gap-4">
            <p className="text-xs text-foreground/50">Vos données sont utilisées uniquement pour traiter votre candidature.</p>
            <button disabled={sending} className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-60">
              {sending ? "Envoi…" : "Envoyer ma candidature"}
            </button>
          </div>
        </form>
      </Section>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="grid gap-1.5 text-sm"><span className="text-foreground/70">{label}</span>{children}</label>;
}
