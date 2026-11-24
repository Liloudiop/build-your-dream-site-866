import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/site/Layout";
import { SITE_IMAGES, STATS, STEPS } from "@/lib/site";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — AFIJ-TOUBA" },
      {
        name: "description",
        content:
          "Notre mission, nos valeurs et notre méthode pour former, accompagner et insérer les jeunes dans la région de Touba.",
      },
      { property: "og:title", content: "À propos de AFIJ-TOUBA" },
      { property: "og:description", content: "Mission, valeurs et méthode de l'association." },
    ],
  }),
  component: About,
});

const VALUES = [
  {
    t: "Dignité",
    d: "Chaque personne a un talent. Notre rôle est de lui donner les moyens de l'exprimer.",
  },
  {
    t: "Exigence",
    d: "Des formations certifiantes, des formateurs issus du terrain, des évaluations rigoureuses.",
  },
  {
    t: "Proximité",
    d: "Un conseiller suit chaque bénéficiaire, avant, pendant et après la formation.",
  },
  {
    t: "Impact",
    d: "Nous mesurons ce qui compte : l'emploi durable et l'autonomie de nos bénéficiaires.",
  },
];

function About() {
  return (
    <>
      <PageHeader
        eyebrow="Qui sommes-nous"
        title="Relier la formation, l'accompagnement et l'emploi"
        intro="AFIJ-TOUBA est une association dédiée à la structuration de parcours de formation, d'insertion et d'entrepreneuriat pour les jeunes de Touba et de sa zone d'influence."
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <img
            src={SITE_IMAGES.hero}
            alt="Deux jeunes membres d’AFIJ-TOUBA présentent des plants dans une pépinière."
            loading="lazy"
            width={865}
            height={768}
            className="aspect-[4/3] w-full rounded-2xl object-cover"
          />
          <div>
            <h2 className="text-3xl font-semibold">Notre mission</h2>
            <p className="mt-4 leading-relaxed text-foreground/70">
              Nous organisons les parcours de formation, de sensibilisation, d'insertion
              professionnelle et d'accompagnement des jeunes afin de renforcer leur employabilité et
              leur autonomie économique.
            </p>
            <p className="mt-4 leading-relaxed text-foreground/70">
              Nous travaillons avec les institutions, les entreprises, les partenaires techniques et
              financiers pour offrir à chaque jeune un cadre structuré, fiable et orienté vers
              l'impact concret.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {STEPS.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border px-3 py-1 text-xs text-foreground/75"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <h2 className="mb-6 text-3xl font-semibold">Nos valeurs</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v) => (
            <div key={v.t} className="glass p-6">
              <h3 className="text-xl font-semibold text-primary">{v.t}</h3>
              <p className="mt-2 text-sm text-foreground/70">{v.d}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="glass p-6">
              <div className="font-display text-4xl font-semibold text-teal">{s.value}</div>
              <div className="mt-2 text-sm text-foreground/70">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/candidature"
            className="rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
          >
            Rejoindre une formation
          </Link>
        </div>
      </Section>
    </>
  );
}
