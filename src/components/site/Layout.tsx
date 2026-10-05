import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

const NAV = [
  { to: "/", label: "Accueil" },
  { to: "/a-propos", label: "À propos" },
  { to: "/formations", label: "Formations" },
  { to: "/insertion", label: "Insertion" },
  { to: "/actualites", label: "Actualités" },
  { to: "/evenements", label: "Événements" },
  { to: "/contact", label: "Contact" },
  { to: "/connexion", label: "Connexion" },
] as const;

export function Glow() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
      <div className="absolute -top-48 -left-24 h-[600px] w-[600px] rounded-full bg-primary/30 blur-[130px]" />
      <div className="absolute top-1/3 right-[-160px] h-[560px] w-[560px] rounded-full bg-accent/25 blur-[130px]" />
      <div className="absolute bottom-[-120px] left-1/3 h-[460px] w-[460px] rounded-full bg-primary/15 blur-[120px]" />
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="font-display grid size-9 place-items-center rounded-lg bg-primary/85 font-semibold text-primary-foreground">S</div>
          <div className="leading-none">
            <div className="font-display font-semibold">{SITE.name}</div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-foreground/50">{SITE.tagline}</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-foreground/75 lg:flex">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: n.to === "/" }} activeProps={{ className: "text-foreground" }} className="hover:text-foreground">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/candidature" className="hidden rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 sm:inline-block">
            Postuler à une formation
          </Link>
          <button aria-label="Menu" onClick={() => setOpen(!open)} className="rounded-lg p-2 lg:hidden">
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-border px-6 py-4 lg:hidden">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-foreground/80 hover:bg-foreground/5">
              {n.label}
            </Link>
          ))}
          <Link to="/candidature" onClick={() => setOpen(false)} className="mt-2 rounded-lg bg-primary px-3 py-2 text-center font-medium text-primary-foreground">
            Postuler à une formation
          </Link>
        </nav>
      )}
    </header>
  );
}

const FOOTER_LINKS = [
  { to: "/formations", label: "Formations" },
  { to: "/insertion", label: "Insertion" },
  { to: "/temoignages", label: "Témoignages" },
  { to: "/partenaires", label: "Partenaires" },
  { to: "/galerie", label: "Galerie" },
  { to: "/evenements", label: "Événements" },
] as const;

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border bg-background/70 backdrop-blur-xl">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 sm:grid-cols-3">
        <div>
          <div className="font-display font-semibold">{SITE.name}</div>
          <p className="mt-2 max-w-[40ch] text-sm leading-relaxed text-foreground/60">
            Association de formation et d'insertion professionnelle. {SITE.city}.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm text-foreground/75">
            <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer" className="hover:text-foreground">WhatsApp</a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-foreground">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-foreground">Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-foreground">LinkedIn</a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-foreground">YouTube</a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm text-foreground/70">
          {FOOTER_LINKS.map((l) => (
            <Link key={l.to} to={l.to} className="hover:text-foreground">{l.label}</Link>
          ))}
        </div>
        <div className="text-sm text-foreground/60">
          <div>{SITE.address}</div>
          <div className="mt-1">{SITE.phone}</div>
          <div className="mt-1">{SITE.email}</div>
          <div className="mt-6 text-foreground/45">© 2026 {SITE.name} · Mentions légales · Confidentialité</div>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppButton() {
  return (
    <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer" aria-label="Nous écrire sur WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-accent text-accent-foreground shadow-lg ring-1 ring-border hover:scale-105 transition-transform">
      <MessageCircle className="size-6" />
    </a>
  );
}

export function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 pb-12 pt-16">
      <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-foreground/5 px-3 py-1 text-xs uppercase tracking-[0.16em] text-foreground/70">
        <span className="size-1.5 rounded-full bg-primary" /> {eyebrow}
      </p>
      <h1 className="max-w-[22ch] text-4xl font-semibold leading-tight text-balance sm:text-5xl">{title}</h1>
      {intro && <p className="mt-5 max-w-[60ch] text-lg leading-relaxed text-foreground/70">{intro}</p>}
    </section>
  );
}

export function Section({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`relative z-10 mx-auto max-w-6xl px-6 pb-20 ${className}`}>{children}</section>;
}
