import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import solaire from "@/assets/f-solaire.jpg";
import web from "@/assets/f-web.jpg";
import cuisine from "@/assets/f-cuisine.jpg";
import { PageHeader, Section } from "@/components/site/Layout";

const PHOTOS = [
  { src: hero, alt: "Atelier de menuiserie" },
  { src: solaire, alt: "Installation solaire" },
  { src: web, alt: "Formation numérique" },
  { src: cuisine, alt: "Atelier cuisine" },
];

export const Route = createFileRoute("/galerie")({
  head: () => ({
    meta: [
      { title: "Galerie photos — Sahel Avenir" },
      { name: "description", content: "Images de nos ateliers, formations et événements." },
      { property: "og:title", content: "Galerie — Sahel Avenir" },
      { property: "og:description", content: "Nos ateliers en images." },
    ],
  }),
  component: () => (
    <>
      <PageHeader eyebrow="Galerie" title="Nos ateliers en images" />
      <Section>
        <div className="grid gap-5 sm:grid-cols-2">
          {PHOTOS.map((p) => (
            <figure key={p.alt} className="glass p-3">
              <img src={p.src} alt={p.alt} loading="lazy" className="aspect-[4/3] w-full rounded-lg object-cover" />
              <figcaption className="px-1 pt-3 text-sm text-foreground/70">{p.alt}</figcaption>
            </figure>
          ))}
        </div>
      </Section>
    </>
  ),
});
