import { Link } from "@tanstack/react-router";
import type { Formation, Offer } from "@/lib/site";

export function FormationCard({ f }: { f: Formation }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[0_10px_30px_rgba(20,45,31,0.05)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(20,45,31,0.1)]">
      <div className="relative overflow-hidden">
        <img
          src={f.image}
          alt={f.title}
          loading="lazy"
          width={992}
          height={672}
          className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute left-4 top-4 rounded-full bg-background/95 px-3 py-1 text-xs font-semibold text-primary shadow-sm">
          {f.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-xl font-semibold leading-snug tracking-tight">{f.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{f.summary}</p>
        <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-sm">
          <Link
            to="/formations/$slug"
            params={{ slug: f.slug }}
            className="font-semibold text-primary transition-colors hover:text-primary/75"
          >
            Voir le détail <span aria-hidden="true">→</span>
          </Link>
          <span className="text-muted-foreground">{f.place}</span>
        </div>
      </div>
    </article>
  );
}

export function OfferRow({ o }: { o: Offer }) {
  return (
    <article className="flex items-center justify-between gap-4 rounded-xl border border-border bg-card p-5 shadow-[0_8px_22px_rgba(20,45,31,0.04)] transition-shadow hover:shadow-[0_12px_28px_rgba(20,45,31,0.08)]">
      <div>
        <h3 className="font-sans font-semibold">{o.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {o.company} · {o.city} · {o.contract}
        </p>
      </div>
      <Link
        to="/contact"
        search={{ sujet: `Offre : ${o.title}` }}
        className="shrink-0 text-sm font-semibold text-primary"
      >
        Postuler <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}

export function Testimonial({
  t,
  i,
}: {
  t: { quote: string; name: string; role: string };
  i: number;
}) {
  return (
    <blockquote className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-[0_10px_30px_rgba(20,45,31,0.04)]">
      <div aria-hidden="true" className="font-display text-4xl leading-none text-accent">
        “
      </div>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/85">{t.quote}</p>
      <footer className="mt-4 flex items-center gap-3">
        <div
          className={`grid size-10 shrink-0 place-items-center rounded-full text-sm font-bold ${i % 2 ? "bg-secondary text-primary" : "bg-primary/10 text-primary"}`}
        >
          {t.name[0]}
        </div>
        <div>
          <div className="text-sm font-medium">{t.name}</div>
          <div className="text-xs text-foreground/55">{t.role}</div>
        </div>
      </footer>
    </blockquote>
  );
}
