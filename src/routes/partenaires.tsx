import { createFileRoute, Link } from "@tanstack/react-router";
import { PARTNERS } from "@/lib/site";
import { PageHeader, Section } from "@/components/site/Layout";

export const Route = createFileRoute("/partenaires")({
  head: () => ({
    meta: [
      { title: "Partenaires — AFIJ-TOUBA" },
      { name: "description", content: "Institutions, financeurs, entreprises et collectivités qui soutiennent nos actions à Touba." },
      { property: "og:title", content: "Nos partenaires — AFIJ-TOUBA" },
      { property: "og:description", content: "Ceux qui rendent nos actions possibles." },
    ],
  }),
  component: () => (
    <>
      <PageHeader eyebrow="Partenaires" title="Ensemble pour l'emploi des jeunes" />
      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PARTNERS.map((p) => (
            <div key={p.name} className="glass p-6">
              <div className="text-[11px] uppercase tracking-[0.14em] text-teal">{p.type}</div>
              <div className="font-display mt-2 text-lg font-semibold">{p.name}</div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/contact" search={{ sujet: "Devenir partenaire" }} className="rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground">Devenir partenaire</Link>
        </div>
      </Section>
    </>
  ),
});
