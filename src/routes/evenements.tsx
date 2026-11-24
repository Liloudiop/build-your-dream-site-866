import { createFileRoute, Link } from "@tanstack/react-router";
import { EVENTS } from "@/lib/site";
import { PageHeader, Section } from "@/components/site/Layout";

export const Route = createFileRoute("/evenements")({
  head: () => ({
    meta: [
      { title: "Événements — AFIJ-TOUBA" },
      { name: "description", content: "Portes ouvertes, forums emploi, ateliers et pitch days à venir à Touba." },
      { property: "og:title", content: "Événements à venir — AFIJ-TOUBA" },
      { property: "og:description", content: "Rejoignez nos prochains événements." },
    ],
  }),
  component: () => (
    <>
      <PageHeader eyebrow="Événements" title="Rencontrons-nous" intro="Portes ouvertes, forums de recrutement, ateliers pratiques : venez nous voir." />
      <Section>
        <div className="grid gap-4">
          {EVENTS.map((e) => (
            <div key={e.title} className="glass grid gap-4 p-6 sm:grid-cols-[160px_1fr_auto] sm:items-center">
              <div><div className="font-display text-2xl font-semibold text-primary">{e.date}</div><div className="text-sm text-foreground/60">{e.time}</div></div>
              <div><h2 className="text-xl font-semibold">{e.title}</h2><p className="mt-1 text-sm text-foreground/70">{e.desc} · <span className="text-foreground/50">{e.place}</span></p></div>
              <Link to="/contact" search={{ sujet: `Inscription : ${e.title}` }} className="rounded-lg border border-border px-4 py-2 text-center text-sm hover:bg-foreground/5">S'inscrire</Link>
            </div>
          ))}
        </div>
      </Section>
    </>
  ),
});
