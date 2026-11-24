import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { ArrowUpRight, Menu, X, MessageCircle, MapPin, Phone, Mail } from "lucide-react";
import { SITE } from "@/lib/site";

const NAV = [
  { to: "/", label: "Accueil" },
  { to: "/a-propos", label: "À propos" },
  { to: "/formations", label: "Formations" },
  { to: "/insertion", label: "Insertion" },
  { to: "/actualites", label: "Actualités" },
  { to: "/partenaires", label: "Partenaires" },
] as const;

export function Glow() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-0 bg-[radial-gradient(ellipse_at_top_right,rgba(206,174,94,0.09),transparent_35%)]" />
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-30 border-b border-border/80 bg-background/95 shadow-[0_4px_18px_rgba(20,45,31,0.04)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-3.5 sm:px-8">
        <Link to="/" className="flex min-w-0 items-center" onClick={() => setOpen(false)}>
          <img
            src="/afij-touba-logo.png"
            alt={`${SITE.name} — ${SITE.tagline}`}
            className="h-[72px] w-[160px] object-cover object-center mix-blend-multiply sm:h-[84px] sm:w-[182px] xl:h-[92px] xl:w-[198px]"
          />
        </Link>
        <nav className="hidden items-center gap-4 text-[13px] font-medium text-foreground/75 xl:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{
                className:
                  "text-primary after:absolute after:inset-x-0 after:-bottom-[24px] after:h-0.5 after:bg-primary",
              }}
              className="relative whitespace-nowrap transition-colors hover:text-primary"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden whitespace-nowrap rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:bg-secondary sm:inline-flex"
          >
            Nous contacter
          </Link>
          <Link
            to="/candidature"
            className="hidden items-center gap-2 whitespace-nowrap rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 lg:inline-flex"
          >
            Déposer une demande <ArrowUpRight className="size-4" />
          </Link>
          <button
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="rounded-lg border border-border p-2.5 text-foreground hover:bg-secondary xl:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-border bg-background px-5 py-4 sm:px-8 xl:hidden">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "bg-secondary text-primary" }}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary"
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/evenements"
            onClick={() => setOpen(false)}
            className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary"
          >
            Événements
          </Link>
          <Link
            to="/connexion"
            onClick={() => setOpen(false)}
            className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary"
          >
            Espace membre
          </Link>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-lg bg-primary px-3 py-3 text-center text-sm font-semibold text-primary-foreground"
          >
            Déposer une demande
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
    <footer className="relative z-10 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
        <div>
          <div className="w-fit overflow-hidden rounded-xl bg-white shadow-sm">
            <img
              src="/afij-touba-logo.png"
              alt={`${SITE.name} — ${SITE.tagline}`}
              className="h-[112px] w-[250px] object-cover object-center"
              loading="lazy"
            />
          </div>
          <p className="mt-4 max-w-[42ch] text-sm leading-relaxed text-primary-foreground/75">
            Association pour la formation, l’insertion professionnelle et l’accompagnement des
            jeunes de Touba.
          </p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm text-primary-foreground/80">
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-accent"
            >
              WhatsApp
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-accent"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-accent"
            >
              Instagram
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-accent">Découvrir</h2>
          <div className="mt-4 grid gap-3 text-sm text-primary-foreground/75">
            {FOOTER_LINKS.slice(0, 3).map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="transition-colors hover:text-primary-foreground"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
            Nos activités
          </h2>
          <div className="mt-4 grid gap-3 text-sm text-primary-foreground/75">
            {FOOTER_LINKS.slice(3).map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="transition-colors hover:text-primary-foreground"
              >
                {l.label}
              </Link>
            ))}
            <Link to="/evenements" className="transition-colors hover:text-primary-foreground">
              Événements
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
            Nous joindre
          </h2>
          <div className="mt-4 grid gap-3 text-sm text-primary-foreground/75">
            <div className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
              {SITE.address}
            </div>
            {SITE.phones.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone.replaceAll(" ", "")}`}
                className="flex items-center gap-2.5 hover:text-primary-foreground"
              >
                <Phone className="size-4 shrink-0 text-accent" />
                {phone}
              </a>
            ))}
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-2.5 hover:text-primary-foreground"
            >
              <Mail className="size-4 shrink-0 text-accent" />
              {SITE.email}
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-primary-foreground/60 sm:px-8 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 {SITE.name}. Tous droits réservés.</span>
          <span>Au service de la jeunesse de Touba et de sa région.</span>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${SITE.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Nous écrire sur WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-xl shadow-primary/20 ring-4 ring-background transition-transform hover:scale-105"
    >
      <MessageCircle className="size-6" />
    </a>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="relative z-10 overflow-hidden bg-primary">
      <div className="absolute -right-24 -top-36 size-[28rem] rounded-full border border-primary-foreground/10" />
      <div className="absolute -right-8 -top-20 size-[20rem] rounded-full border border-primary-foreground/10" />
      <div className="relative mx-auto max-w-7xl px-5 pb-14 pt-14 sm:px-8 sm:pb-16 sm:pt-16">
        <p className="mb-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent">
          <span className="size-1.5 rounded-full bg-accent" /> {eyebrow}
        </p>
        <h1 className="max-w-[22ch] text-4xl font-semibold leading-[1.08] tracking-tight text-balance text-primary-foreground sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-5 max-w-[62ch] text-base leading-relaxed text-primary-foreground/75 sm:text-lg">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}

export function Section({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <section className={`relative z-10 mx-auto max-w-7xl px-5 pb-20 sm:px-8 ${className}`}>
      {children}
    </section>
  );
}
