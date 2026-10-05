import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { OFFERS } from "@/lib/site";
import { OfferRow } from "@/components/site/Cards";
import { PageHeader, Section } from "@/components/site/Layout";

export const Route = createFileRoute("/insertion")({
  head: () => ({
    meta: [
      { title: "Insertion professionnelle : emplois, stages, accompagnement — Sahel Avenir" },
      { name: "description", content: "Offres d'emploi et de stage, coaching, préparation aux entretiens et accompagnement entrepreneurial." },
      { property: "og:title", content: "Insertion professionnelle — Sahel Avenir" },
      { property: "og:description", content: "Emplois, stages et accompagnement vers l'emploi." },
    ],
  }),
  component: Insertion,
});

const SERVICES = [
  { t: "Orientation", d: "Un bilan pour définir votre projet professionnel." },
  { t: "Coaching CV & entretien", d: "Simulations d'entretien et rédaction de CV." },
  { t: "Mentorat", d: "Un professionnel du secteur vous accompagne." },
  { t: "Entrepreneuriat", d: "Business plan, mentor et recherche de financement." },
];

function Insertion() {
  const [type, setType] = useState<"Tous" | "Emploi" | "Stage">("Tous");
  const list = OFFERS.filter((o) => type === "Tous" || o.type === type);
  return (
    <>
      <PageHeader eyebrow="Insertion" title="De la formation à l'emploi durable" intro="Nos conseillers et nos entreprises partenaires vous accompagnent jusqu'à l'embauche, et au-delà." />
      <Section>
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-3xl font-semibold">Offres d'emploi et de stage</h2>
          <div className="flex gap-2">
            {(["Tous", "Emploi", "Stage"] as const).map((t) => (
              <button key={t} onClick={() => setType(t)} className={`rounded-full px-4 py-1.5 text-sm ${type === t ? "bg-primary text-primary-foreground" : "border border-border text-foreground/70"}`}>{t === "Tous" ? "Toutes" : t + "s"}</button>
            ))}
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">{list.map((o) => <OfferRow key={o.title} o={o} />)}</div>
      </Section>
      <Section>
        <h2 className="mb-6 text-3xl font-semibold">Accompagnement</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => <div key={s.t} className="glass p-6"><h3 className="text-lg font-semibold text-primary">{s.t}</h3><p className="mt-2 text-sm text-foreground/70">{s.d}</p></div>)}
        </div>
      </Section>
      <Section>
        <div className="glass flex flex-col items-start justify-between gap-6 p-8 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-semibold">Vous êtes une entreprise ?</h2>
            <p className="mt-2 text-foreground/70">Publiez vos offres et recrutez des profils formés et motivés.</p>
          </div>
          <Link to="/contact" search={{ sujet: "Entreprise : publier une offre" }} className="rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground">Nous contacter</Link>
        </div>
      </Section>
    </>
  );
}
