import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/site/Layout";

export const Route = createFileRoute("/connexion")({
  head: () => ({
    meta: [
      { title: "Connexion aux espaces — AFIJ-TOUBA" },
      { name: "description", content: "Accès aux espaces bénéficiaire, formateur, entreprise et administration." },
      { property: "og:title", content: "Espaces personnels — AFIJ-TOUBA" },
      { property: "og:description", content: "Connexion aux espaces privés." },
    ],
  }),
  component: () => (
    <>
      <PageHeader eyebrow="Connexion" title="Vos espaces personnels arrivent bientôt" intro="Bénéficiaires, formateurs, entreprises : un espace dédié vous permettra bientôt de suivre votre parcours, vos présences, vos offres et vos certificats." />
      <Section>
        <div className="grid gap-5 sm:grid-cols-3">
          {[["Bénéficiaire", "Formation, progression, documents, certificats"], ["Formateur", "Sessions, présences, évaluations"], ["Entreprise", "Offres, candidatures, recrutements"]].map(([t, d]) => (
            <div key={t} className="glass p-6"><h2 className="text-xl font-semibold">{t}</h2><p className="mt-2 text-sm text-foreground/70">{d}</p></div>
          ))}
        </div>
        <p className="mt-8 text-foreground/70">En attendant, vous pouvez <Link to="/candidature" className="text-primary">déposer votre candidature</Link> ou <Link to="/contact" className="text-primary">nous contacter</Link>.</p>
      </Section>
    </>
  ),
});
