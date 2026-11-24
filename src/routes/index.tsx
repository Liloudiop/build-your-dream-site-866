import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  GraduationCap,
  Handshake,
  Lightbulb,
} from "lucide-react";
import {
  FORMATIONS,
  NEWS,
  OFFERS,
  PARTNERS,
  SITE_IMAGES,
  STATS,
  STEPS,
  TESTIMONIALS,
} from "@/lib/site";
import { FormationCard, OfferRow, Testimonial } from "@/components/site/Cards";
import { Section } from "@/components/site/Layout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AFIJ-TOUBA — Formation et insertion professionnelle au Sénégal" },
      {
        name: "description",
        content:
          "Association pour la Formation et l’Insertion des Jeunes de Touba : formations, insertion, partenariats et accompagnement des jeunes.",
      },
      { property: "og:title", content: "AFIJ-TOUBA — Un métier, un diplôme, un avenir" },
      {
        property: "og:description",
        content:
          "Formations qualifiantes, accompagnement et insertion vers l'emploi au cœur de Touba et de sa zone d'influence.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(240,243,234,0.85),transparent_48%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-14 sm:px-8 sm:pb-24 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="max-w-2xl">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-primary shadow-sm">
              <span className="size-2 rounded-full bg-accent" /> Touba · Diourbel · Sénégal
            </p>
            <h1 className="max-w-[16ch] text-4xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Donnons aux jeunes les moyens de{" "}
              <span className="text-primary">construire leur avenir.</span>
            </h1>
            <p className="mt-6 max-w-[55ch] text-base leading-relaxed text-muted-foreground sm:text-lg">
              L’Association pour la Formation et l’Insertion des Jeunes de Touba accompagne les
              jeunes dans leur formation, leur insertion professionnelle et le développement de
              leurs projets.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/candidature"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/15 transition-all hover:-translate-y-0.5 hover:bg-primary/90"
              >
                Rejoindre un parcours <ArrowUpRight className="size-4" />
              </Link>
              <Link
                to="/a-propos"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-white px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/30 hover:bg-secondary"
              >
                Découvrir l’association <ArrowRight className="size-4 text-primary" />
              </Link>
            </div>
            <div className="mt-9 flex items-center gap-3 text-sm text-muted-foreground">
              <div className="flex -space-x-2" aria-hidden="true">
                {["A", "F", "J"].map((letter, index) => (
                  <span
                    key={letter}
                    className={`grid size-8 place-items-center rounded-full border-2 border-background text-[11px] font-bold ${index === 1 ? "bg-accent text-foreground" : "bg-primary text-primary-foreground"}`}
                  >
                    {letter}
                  </span>
                ))}
              </div>
              <span>Ensemble pour l’inclusion et l’autonomie des jeunes</span>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[600px]">
            <div className="absolute -right-5 -top-5 h-32 w-32 rounded-tr-[3rem] border-r-2 border-t-2 border-accent/70 sm:-right-7 sm:-top-7 sm:h-44 sm:w-44" />
            <img
              src={SITE_IMAGES.hero}
              alt="Deux jeunes membres d’AFIJ-TOUBA présentent des plants dans une pépinière."
              width={865}
              height={768}
              className="relative aspect-[5/4] w-full rounded-[1.8rem] object-cover shadow-2xl shadow-primary/15 sm:aspect-[6/5]"
            />
            <div className="absolute -bottom-6 left-4 right-4 rounded-2xl border border-white/80 bg-white/95 p-4 shadow-xl shadow-primary/10 sm:left-8 sm:right-auto sm:w-[min(90%,390px)] sm:p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
                    Notre engagement
                  </p>
                  <p className="mt-1 text-sm font-medium leading-snug text-foreground sm:text-base">
                    Former, accompagner et ouvrir des opportunités concrètes.
                  </p>
                </div>
                <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                  <GraduationCap className="size-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-primary py-8 text-primary-foreground sm:py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 sm:px-8 md:grid-cols-4 md:gap-8">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`border-primary-foreground/15 ${i % 2 ? "border-l pl-5 sm:pl-8" : ""} ${i > 1 ? "md:border-l md:pl-8" : ""}`}
            >
              <div className="text-3xl font-bold tracking-tight text-accent sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-1.5 max-w-[22ch] text-xs leading-relaxed text-primary-foreground/75 sm:text-sm">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Section className="pt-20 sm:pt-24">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-primary">
              Ce que nous faisons
            </p>
            <h2 className="max-w-[17ch] text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Des actions concrètes pour avancer.
            </h2>
          </div>
          <p className="max-w-[58ch] text-base leading-relaxed text-muted-foreground">
            Un accompagnement adapté à chaque étape : acquérir des compétences, trouver sa voie,
            accéder à l’emploi ou faire grandir une idée.
          </p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: GraduationCap,
              title: "Formation",
              description:
                "Des compétences pratiques pour accéder aux métiers et aux opportunités.",
              to: "/formations",
            },
            {
              icon: BriefcaseBusiness,
              title: "Insertion",
              description: "Orientation, stages, offres d'emploi et accompagnement des parcours.",
              to: "/insertion",
            },
            {
              icon: Lightbulb,
              title: "Entrepreneuriat",
              description: "Un appui pour structurer les projets et renforcer l’initiative locale.",
              to: "/contact",
            },
            {
              icon: Handshake,
              title: "Partenariats",
              description: "Des liens durables avec les acteurs engagés pour la jeunesse.",
              to: "/partenaires",
            },
          ].map(({ icon: Icon, title, description, to }, i) => (
            <Link
              key={title}
              to={to}
              className="group rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 sm:p-6"
            >
              <div className="flex items-center justify-between">
                <span className="grid size-12 place-items-center rounded-xl bg-secondary text-primary">
                  <Icon className="size-5" />
                </span>
                <span className="text-xs font-bold tracking-widest text-muted-foreground/70">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-2 min-h-[3rem] text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                En savoir plus{" "}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
              Développer ses compétences
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Nos formations</h2>
          </div>
          <Link
            to="/formations"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/75"
          >
            Toutes les formations <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mb-6 grid gap-4 md:grid-cols-2">
          <figure className="group relative isolate min-h-56 overflow-hidden rounded-2xl bg-primary">
            <img
              src={SITE_IMAGES.accueilCaisse}
              alt="Un membre de l’équipe accompagne un visiteur au comptoir d’accueil et de caisse."
              loading="lazy"
              className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-primary/90 via-primary/15 to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 p-5 text-lg font-semibold text-white sm:p-6">
              Accueil, service et caisse
            </figcaption>
          </figure>
          <figure className="group relative isolate min-h-56 overflow-hidden rounded-2xl bg-primary">
            <img
              src={SITE_IMAGES.accueilAfij}
              alt="Une membre de l’équipe accueille les visiteurs dans les locaux d’AFIJ-TOUBA."
              loading="lazy"
              className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-primary/90 via-primary/15 to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 p-5 text-lg font-semibold text-white sm:p-6">
              Accueil et accompagnement
            </figcaption>
          </figure>
        </div>
        <div className="grid gap-5 sm:grid-cols-3">
          {FORMATIONS.slice(0, 3).map((f) => (
            <FormationCard key={f.slug} f={f} />
          ))}
        </div>
      </Section>

      <section className="relative z-10 bg-secondary/55 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
                Votre parcours
              </p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                De l’orientation à l’insertion
              </h2>
            </div>
            <p className="max-w-[52ch] text-sm leading-relaxed text-muted-foreground">
              Chaque étape est pensée pour accompagner les jeunes vers plus de compétences, de
              confiance et d’autonomie.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, i) => (
              <div
                key={step}
                className="flex items-center gap-3 rounded-xl border border-border/80 bg-background p-4"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-semibold">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
              Des opportunités
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Stages et emplois</h2>
            <p className="mt-4 max-w-[42ch] text-sm leading-relaxed text-muted-foreground">
              Découvrez les offres partagées avec notre réseau et avancez dans votre projet
              professionnel.
            </p>
            <Link
              to="/insertion"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              Voir toutes les opportunités <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid gap-3">
            {OFFERS.slice(0, 4).map((o) => (
              <OfferRow key={o.title} o={o} />
            ))}
          </div>
        </div>
      </Section>

      <section className="relative z-10 bg-primary py-16 text-primary-foreground sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-accent">
              Agir ensemble
            </p>
            <h2 className="max-w-[17ch] text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Partenaires pour l’avenir de la jeunesse.
            </h2>
            <p className="mt-4 max-w-[44ch] text-sm leading-relaxed text-primary-foreground/75">
              Nous collaborons avec les acteurs institutionnels, économiques et associatifs pour
              multiplier les opportunités.
            </p>
            <Link
              to="/partenaires"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary-foreground px-4 py-3 text-sm font-semibold text-primary transition-colors hover:bg-accent"
            >
              Découvrir nos partenaires <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {PARTNERS.slice(0, 8).map((p) => (
              <div
                key={p.name}
                className="flex min-h-24 items-center justify-center rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-4 text-center text-sm font-semibold leading-snug text-primary-foreground/90"
              >
                {p.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section className="py-16 sm:py-20">
        <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
              La vie de l’association
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Actualités récentes
            </h2>
          </div>
          <Link
            to="/actualites"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            Toutes les actualités <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {NEWS.slice(0, 3).map((n) => (
            <article
              key={n.slug}
              className="rounded-2xl border border-border bg-card p-6 shadow-[0_10px_30px_rgba(20,45,31,0.04)]"
            >
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-primary">
                <span className="size-1.5 rounded-full bg-accent" />
                {n.category}
              </div>
              <p className="mt-3 text-xs text-muted-foreground">{n.date}</p>
              <h3 className="mt-2 text-lg font-semibold leading-snug">{n.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{n.excerpt}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="pb-20">
        <div className="mb-7 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
            Ils en parlent
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Des parcours qui avancent
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {TESTIMONIALS.slice(0, 3).map((t, i) => (
            <Testimonial key={t.name} t={t} i={i} />
          ))}
        </div>
      </Section>
    </>
  );
}
