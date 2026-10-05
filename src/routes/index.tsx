import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import { FORMATIONS, NEWS, OFFERS, PARTNERS, STATS, STEPS, TESTIMONIALS } from "@/lib/site";
import { FormationCard, OfferRow, Testimonial } from "@/components/site/Cards";
import { Section } from "@/components/site/Layout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sahel Avenir — Formation et insertion professionnelle au Sénégal" },
      { name: "description", content: "Formations qualifiantes, accompagnement et insertion vers l'emploi pour les jeunes à Dakar, Thiès et Saint-Louis." },
      { property: "og:title", content: "Sahel Avenir — Un métier, un diplôme, un avenir" },
      { property: "og:description", content: "Formations qualifiantes, accompagnement et insertion vers l'emploi au Sénégal." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-foreground/5 px-3 py-1 text-xs uppercase tracking-[0.16em] text-foreground/70 backdrop-blur-xl">
              <span className="size-1.5 rounded-full bg-primary" /> Dakar · Thiès · Saint-Louis
            </p>
            <h1 className="max-w-[18ch] text-4xl font-semibold leading-tight text-balance sm:text-5xl">
              Un métier, un diplôme, un avenir pour la jeunesse du Sénégal.
            </h1>
            <p className="mt-5 max-w-[46ch] text-base leading-relaxed text-foreground/70 sm:text-lg">
              Nous formons, évaluons et accompagnons chaque stagiaire jusqu'à l'emploi durable. Un parcours structuré, des formateurs de terrain, des entreprises partenaires engagées.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/candidature" className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90">Postuler à une formation</Link>
              <Link to="/formations" className="rounded-lg border border-border bg-foreground/5 px-5 py-2.5 text-sm font-medium backdrop-blur-xl hover:bg-foreground/10">Découvrir nos formations</Link>
            </div>
          </div>
          <div className="relative">
            <div className="glass p-6">
              <img src={hero} alt="Stagiaires en atelier de menuiserie" width={912} height={1104} className="aspect-[4/5] w-full rounded-lg object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 rounded-xl border border-border bg-background/60 p-4 backdrop-blur-xl">
              <div className="font-display text-3xl font-semibold text-primary">94%</div>
              <div className="mt-1 text-xs leading-snug text-foreground/70">de nos stagiaires insérés en moins de 9 mois</div>
            </div>
          </div>
        </div>
      </section>

      <Section className="pb-16">
        <div className="glass p-6 sm:p-8">
          <h2 className="max-w-[24ch] text-2xl font-semibold leading-tight sm:text-3xl">Le parcours, de la première information au suivi après l'emploi</h2>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4 text-sm">
            {STEPS.map((s, i) => (
              <span key={s} className="flex gap-3">
                <span className="text-foreground/40">{i + 1}</span>
                <span className="text-foreground/85">{s}</span>
                {i < STEPS.length - 1 && <span className="text-foreground/30">→</span>}
              </span>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold sm:text-3xl">Formations à la une</h2>
          <Link to="/formations" className="text-sm font-medium text-primary hover:text-primary/80">Voir toutes les formations →</Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-3">
          {FORMATIONS.slice(0, 3).map((f) => <FormationCard key={f.slug} f={f} />)}
        </div>
      </Section>

      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <div key={s.label} className="glass p-6">
              <div className={`font-display text-4xl font-semibold ${i % 2 ? "text-teal" : "text-primary"}`}>{s.value}</div>
              <div className="mt-2 text-sm text-foreground/70">{s.label}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold sm:text-3xl">Offres d'emploi et de stage</h2>
          <Link to="/insertion" className="text-sm font-medium text-primary">Toutes les offres →</Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {OFFERS.slice(0, 4).map((o) => <OfferRow key={o.title} o={o} />)}
        </div>
      </Section>

      <Section>
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold sm:text-3xl">Actualités</h2>
          <Link to="/actualites" className="text-sm font-medium text-primary">Toutes les actualités →</Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-3">
          {NEWS.slice(0, 3).map((n) => (
            <article key={n.slug} className="glass p-6">
              <div className="text-[11px] uppercase tracking-[0.14em] text-primary">{n.category} · {n.date}</div>
              <h3 className="mt-2 text-lg font-semibold leading-snug">{n.title}</h3>
              <p className="mt-2 text-sm text-foreground/65">{n.excerpt}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-5 sm:grid-cols-3">
          {TESTIMONIALS.slice(0, 3).map((t, i) => <Testimonial key={t.name} t={t} i={i} />)}
        </div>
      </Section>

      <Section className="pb-24">
        <div className="glass p-6">
          <h2 className="mb-6 text-center font-sans text-sm font-medium uppercase tracking-[0.18em] text-foreground/50">Ils soutiennent nos actions</h2>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-foreground/45">
            {PARTNERS.slice(0, 5).map((p) => <span key={p.name} className="font-display font-semibold">{p.name}</span>)}
          </div>
        </div>
      </Section>
    </>
  );
}
