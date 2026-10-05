import { Link } from "@tanstack/react-router";
import type { Formation, Offer } from "@/lib/site";

export function FormationCard({ f }: { f: Formation }) {
  return (
    <div className="glass flex flex-col p-5">
      <img src={f.image} alt={f.title} loading="lazy" width={992} height={672} className="aspect-[16/10] w-full rounded-lg object-cover" />
      <div className="mt-4 text-[11px] uppercase tracking-[0.14em] text-primary">{f.level} · {f.duration}</div>
      <h3 className="mt-1 text-lg font-semibold leading-snug">{f.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground/65">{f.summary}</p>
      <div className="mt-4 flex items-center justify-between text-sm">
        <Link to="/formations/$slug" params={{ slug: f.slug }} className="font-medium text-primary">Voir le détail →</Link>
        <span className="text-foreground/50">{f.place}</span>
      </div>
    </div>
  );
}

export function OfferRow({ o }: { o: Offer }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-border bg-foreground/5 p-5 backdrop-blur-xl">
      <div>
        <h3 className="font-sans font-medium">{o.title}</h3>
        <p className="mt-1 text-sm text-foreground/60">{o.company} · {o.city} · {o.contract}</p>
      </div>
      <Link to="/contact" search={{ sujet: `Offre : ${o.title}` }} className="shrink-0 text-sm font-medium text-primary">Postuler →</Link>
    </div>
  );
}

export function Testimonial({ t, i }: { t: { quote: string; name: string; role: string }; i: number }) {
  return (
    <blockquote className="glass p-6">
      <p className="text-sm leading-relaxed text-foreground/85">« {t.quote} »</p>
      <footer className="mt-4 flex items-center gap-3">
        <div className={`font-display grid size-9 shrink-0 place-items-center rounded-full text-sm ${i % 2 ? "bg-accent/40" : "bg-primary/25"}`}>{t.name[0]}</div>
        <div><div className="text-sm font-medium">{t.name}</div><div className="text-xs text-foreground/55">{t.role}</div></div>
      </footer>
    </blockquote>
  );
}
