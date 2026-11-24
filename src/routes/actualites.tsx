import { createFileRoute } from "@tanstack/react-router";
import { NEWS } from "@/lib/site";
import { PageHeader, Section } from "@/components/site/Layout";

export const Route = createFileRoute("/actualites")({
  head: () => ({
    meta: [
      { title: "Actualités — AFIJ-TOUBA" },
      { name: "description", content: "Annonces, appels à candidatures, partenariats et vie de l'association à Touba." },
      { property: "og:title", content: "Actualités — AFIJ-TOUBA" },
      { property: "og:description", content: "Toute l'actualité de l'association." },
    ],
  }),
  component: () => (
    <>
      <PageHeader eyebrow="Actualités" title="Les dernières nouvelles" />
      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          {NEWS.map((n) => (
            <article key={n.slug} className="glass p-6">
              <div className="text-[11px] uppercase tracking-[0.14em] text-primary">{n.category} · {n.date}</div>
              <h2 className="mt-2 text-xl font-semibold leading-snug">{n.title}</h2>
              <p className="mt-3 text-sm text-foreground/70">{n.excerpt}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  ),
});
