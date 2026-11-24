import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { FORMATIONS } from "@/lib/site";
import { Section } from "@/components/site/Layout";

export const Route = createFileRoute("/formations/$slug")({
  loader: ({ params }) => {
    const f = FORMATIONS.find((x) => x.slug === params.slug);
    if (!f) throw notFound();
    return { f };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Formation introuvable" }, { name: "robots", content: "noindex" }] };
    const { f } = loaderData;
    return {
      meta: [
        { title: `${f.title} — AFIJ-TOUBA` },
        { name: "description", content: f.summary },
        { property: "og:title", content: f.title },
        { property: "og:description", content: f.summary },
      ],
    };
  },
  notFoundComponent: FormationNotFound,
  component: Detail,
});

function FormationNotFound() {
  return (
    <Section className="pt-24 text-center">
      <h1 className="text-3xl font-semibold">Formation introuvable</h1>
      <Link to="/formations" className="mt-6 inline-block text-primary">← Retour au catalogue</Link>
    </Section>
  );
}

function Detail() {
  const { f } = Route.useLoaderData();
  const facts = [
    ["Catégorie", f.category], ["Durée", f.duration], ["Niveau", f.level], ["Mode", f.mode],
    ["Lieu", f.place], ["Places", String(f.seats)], ["Coût", f.cost], ["Début", f.start],
  ];
  return (
    <>
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-12 pt-12">
        <Link to="/formations" className="text-sm text-foreground/60 hover:text-foreground">← Toutes les formations</Link>
        <div className="mt-6 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="text-xs uppercase tracking-[0.16em] text-primary">{f.category}</div>
            <h1 className="mt-2 text-4xl font-semibold leading-tight sm:text-5xl">{f.title}</h1>
            <p className="mt-4 text-lg text-foreground/70">{f.summary}</p>
            <img src={f.image} alt={f.title} width={992} height={672} className="mt-8 aspect-[16/9] w-full rounded-2xl object-cover" />
          </div>
          <aside className="glass h-fit p-6 lg:sticky lg:top-24">
            <dl className="grid grid-cols-2 gap-4 text-sm">
              {facts.map(([k, v]) => <div key={k}><dt className="text-foreground/50">{k}</dt><dd className="mt-0.5 font-medium">{v}</dd></div>)}
            </dl>
            <Link to="/candidature" search={{ formation: f.slug }} className="mt-6 block rounded-lg bg-primary px-5 py-3 text-center text-sm font-medium text-primary-foreground hover:bg-primary/90">Postuler à cette formation</Link>
          </aside>
        </div>
      </section>
      <Section>
        <div className="grid gap-5 md:grid-cols-3">
          <div className="glass p-6"><h2 className="text-xl font-semibold">Objectifs</h2><ul className="mt-4 space-y-2 text-sm text-foreground/75">{f.objectives.map((o) => <li key={o}>• {o}</li>)}</ul></div>
          <div className="glass p-6"><h2 className="text-xl font-semibold">Programme</h2><ol className="mt-4 space-y-2 text-sm text-foreground/75">{f.program.map((o, i) => <li key={o}><span className="text-primary">{i + 1}.</span> {o}</li>)}</ol></div>
          <div className="glass p-6"><h2 className="text-xl font-semibold">Prérequis et documents</h2><p className="mt-4 text-sm text-foreground/75">{f.prerequisites}</p><ul className="mt-4 space-y-2 text-sm text-foreground/75"><li>• Pièce d'identité</li><li>• Dernier diplôme ou bulletin</li><li>• CV (si disponible)</li></ul></div>
        </div>
      </Section>
    </>
  );
}
