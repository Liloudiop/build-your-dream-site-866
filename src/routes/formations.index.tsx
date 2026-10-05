import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { FORMATIONS } from "@/lib/site";
import { FormationCard } from "@/components/site/Cards";
import { PageHeader, Section } from "@/components/site/Layout";

export const Route = createFileRoute("/formations/")({
  head: () => ({
    meta: [
      { title: "Catalogue des formations — Sahel Avenir" },
      { name: "description", content: "Énergie solaire, numérique, cuisine, couture, électricité, entrepreneuriat : découvrez nos formations certifiantes." },
      { property: "og:title", content: "Nos formations — Sahel Avenir" },
      { property: "og:description", content: "Formations certifiantes et qualifiantes à Dakar, Thiès et Saint-Louis." },
    ],
  }),
  component: Catalogue,
});

function Catalogue() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("Toutes");
  const [place, setPlace] = useState("Tous");
  const cats = ["Toutes", ...new Set(FORMATIONS.map((f) => f.category))];
  const places = ["Tous", ...new Set(FORMATIONS.map((f) => f.place))];
  const list = useMemo(
    () => FORMATIONS.filter((f) =>
      (cat === "Toutes" || f.category === cat) &&
      (place === "Tous" || f.place === place) &&
      (f.title + f.summary).toLowerCase().includes(q.toLowerCase())),
    [q, cat, place],
  );
  return (
    <>
      <PageHeader eyebrow="Formations" title="Apprenez un métier qui recrute" intro="Des formations courtes et certifiantes, avec stage en entreprise et accompagnement vers l'emploi." />
      <Section>
        <div className="glass mb-8 grid gap-3 p-4 sm:grid-cols-[2fr_1fr_1fr]">
          <input className="field" placeholder="Rechercher une formation…" value={q} onChange={(e) => setQ(e.target.value)} />
          <select className="field" value={cat} onChange={(e) => setCat(e.target.value)}>{cats.map((c) => <option key={c}>{c}</option>)}</select>
          <select className="field" value={place} onChange={(e) => setPlace(e.target.value)}>{places.map((c) => <option key={c}>{c}</option>)}</select>
        </div>
        {list.length === 0 ? (
          <p className="text-foreground/60">Aucune formation ne correspond à votre recherche.</p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{list.map((f) => <FormationCard key={f.slug} f={f} />)}</div>
        )}
      </Section>
    </>
  );
}
