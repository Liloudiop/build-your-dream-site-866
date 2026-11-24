import { createFileRoute } from "@tanstack/react-router";
import { SITE_GALLERY } from "@/lib/site";
import { PageHeader, Section } from "@/components/site/Layout";

export const Route = createFileRoute("/galerie")({
  head: () => ({
    meta: [
      { title: "Galerie photos — AFIJ-TOUBA" },
      { name: "description", content: "Images de nos ateliers, formations et événements à Touba." },
      { property: "og:title", content: "Galerie — AFIJ-TOUBA" },
      { property: "og:description", content: "Nos ateliers en images." },
    ],
  }),
  component: () => (
    <>
      <PageHeader eyebrow="Galerie" title="Nos ateliers en images" />
      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SITE_GALLERY.map((photo) => (
            <figure
              key={photo.src}
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_10px_30px_rgba(20,45,31,0.05)]"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <figcaption className="px-5 py-4 text-sm font-semibold text-foreground">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>
    </>
  ),
});
