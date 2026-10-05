import { createFileRoute } from "@tanstack/react-router";
import { TESTIMONIALS } from "@/lib/site";
import { Testimonial } from "@/components/site/Cards";
import { PageHeader, Section } from "@/components/site/Layout";

export const Route = createFileRoute("/temoignages")({
  head: () => ({
    meta: [
      { title: "Témoignages — Sahel Avenir" },
      { name: "description", content: "Anciens stagiaires et entreprises partenaires racontent leur expérience." },
      { property: "og:title", content: "Ils témoignent — Sahel Avenir" },
      { property: "og:description", content: "Paroles de bénéficiaires et d'entreprises." },
    ],
  }),
  component: () => (
    <>
      <PageHeader eyebrow="Témoignages" title="Ils ont changé de trajectoire" />
      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{TESTIMONIALS.map((t, i) => <Testimonial key={t.name} t={t} i={i} />)}</div>
      </Section>
    </>
  ),
});
