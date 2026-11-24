import solaire from "@/assets/f-solaire.jpg";
import cuisine from "@/assets/f-cuisine.jpg";
import web from "@/assets/f-web.jpg";

export const SITE = {
  name: "AFIJ-TOUBA",
  tagline: "Association pour la Formation et l’Insertion des Jeunes",
  city: "Touba, Sénégal",
  phones: ["+221 77 557 80 38", "+221 76 538 31 49"],
  whatsapp: "221775578038",
  email: "cheikhoulxadim@gmail.com",
  address: "Touba Mosquée, Rue Sokhna May Mboup",
};

export const SITE_IMAGES = {
  hero: "/images/afij-jeunes.jpg",
  couture: "/images/atelier-couture.jpg",
  informatique: "/images/atelier-informatique.jpg",
  informatiqueCours: "/images/cours-informatique.jpg",
  plomberie: "/images/atelier-plomberie.jpg",
  accueilCaisse: "/images/accueil-caisse.jpg",
  accueilAfij: "/images/accueil-afij.jpg",
};

export const SITE_GALLERY = [
  {
    src: SITE_IMAGES.hero,
    alt: "Deux jeunes membres d’AFIJ-TOUBA présentent des plants dans une pépinière.",
    caption: "Des jeunes engagés pour un avenir durable",
  },
  {
    src: SITE_IMAGES.couture,
    alt: "Un formateur accompagne des jeunes pendant un atelier de couture.",
    caption: "Atelier de couture et de création textile",
  },
  {
    src: SITE_IMAGES.informatique,
    alt: "Des jeunes suivent une formation pratique dans une salle informatique.",
    caption: "Apprentissage des outils numériques",
  },
  {
    src: SITE_IMAGES.informatiqueCours,
    alt: "Un formateur enseigne l’informatique à un groupe d’apprenants.",
    caption: "Cours d’informatique et de bureautique",
  },
  {
    src: SITE_IMAGES.plomberie,
    alt: "Des apprenants pratiquent des travaux de plomberie en atelier.",
    caption: "Formation pratique en plomberie",
  },
  {
    src: SITE_IMAGES.accueilCaisse,
    alt: "Un jeune est accueilli au comptoir AFIJ-TOUBA par deux membres de l’association.",
    caption: "Accueil et accompagnement des jeunes",
  },
  {
    src: SITE_IMAGES.accueilAfij,
    alt: "Une membre de l’équipe accueille les visiteurs dans les locaux d’AFIJ-TOUBA.",
    caption: "Un espace d’accueil ouvert à tous",
  },
];

export const STEPS = [
  "Diagnostiquer",
  "Enregistrer",
  "Former",
  "Suivre",
  "Insérer",
  "Mesurer",
  "Partenariat",
  "Rendre compte",
];

export type Formation = {
  slug: string;
  title: string;
  category: string;
  level: string;
  duration: string;
  mode: string;
  place: string;
  seats: number;
  cost: string;
  start: string;
  summary: string;
  objectives: string[];
  program: string[];
  prerequisites: string;
  image: string;
};

export const FORMATIONS: Formation[] = [
  {
    slug: "installateur-solaire",
    title: "Installateur de systèmes solaires",
    category: "Énergie",
    level: "Sans diplôme",
    duration: "6 mois",
    mode: "Présentiel",
    place: "Touba",
    seats: 24,
    cost: "Gratuit",
    start: "12 janvier 2027",
    summary:
      "Pose, câblage et maintenance de kits photovoltaïques domestiques et communautaires pour renforcer l'accès à l'énergie.",
    objectives: [
      "Dimensionner une installation solaire",
      "Poser et câbler panneaux, batteries et onduleurs",
      "Diagnostiquer et réparer une panne",
      "Appliquer les règles de sécurité électrique",
    ],
    program: [
      "Bases de l'électricité",
      "Composants photovoltaïques",
      "Dimensionnement",
      "Chantiers pratiques",
      "Maintenance",
      "Stage en entreprise (6 semaines)",
    ],
    prerequisites: "Savoir lire et compter, 18 à 35 ans.",
    image: solaire,
  },
  {
    slug: "developpeur-web",
    title: "Développeur web et numérique",
    category: "Numérique",
    level: "Bac",
    duration: "9 mois",
    mode: "Hybride",
    place: "Touba",
    seats: 20,
    cost: "Subventionnée",
    start: "2 février 2027",
    summary:
      "Formation aux outils numériques, au web et à la bureautique avec accompagnement vers les opportunités d'emploi.",
    objectives: [
      "Créer des sites et applications web",
      "Tracer des documents professionnels et des présentations",
      "Travailler avec une base de données",
      "Constituer un portfolio professionnel",
    ],
    program: [
      "HTML, CSS et design responsive",
      "JavaScript et React",
      "Node.js et API",
      "Bases de données SQL",
      "Projet de fin de formation",
      "Stage en agence (2 mois)",
    ],
    prerequisites: "Niveau Bac, aisance avec l'ordinateur.",
    image: web,
  },
  {
    slug: "cuisine-senegalaise",
    title: "Cuisinier de cuisine sénégalaise",
    category: "Hôtellerie",
    level: "Sans diplôme",
    duration: "8 mois",
    mode: "Présentiel",
    place: "Touba",
    seats: 18,
    cost: "Gratuit",
    start: "19 janvier 2027",
    summary:
      "Techniques de base, hygiène alimentaire et valorisation des produits locaux dans les métiers de la restauration.",
    objectives: [
      "Maîtriser les plats traditionnels",
      "Appliquer les normes d'hygiène HACCP",
      "Gérer les stocks et les coûts",
      "Travailler en brigade",
    ],
    program: [
      "Hygiène et sécurité",
      "Techniques de base",
      "Cuisine sénégalaise et ouest-africaine",
      "Pâtisserie simple",
      "Gestion de cuisine",
      "Stage en restaurant (2 mois)",
    ],
    prerequisites: "Motivation, 18 à 35 ans.",
    image: cuisine,
  },
  {
    slug: "couture-mode",
    title: "Couture et création de mode",
    category: "Artisanat",
    level: "Sans diplôme",
    duration: "6 mois",
    mode: "Présentiel",
    place: "Touba",
    seats: 20,
    cost: "Gratuit",
    start: "9 février 2027",
    summary:
      "Patronage, confection et gestion d'un atelier pour renforcer l'entrepreneuriat féminin et local.",
    objectives: [
      "Prendre des mesures et tracer un patron",
      "Confectionner des tenues complètes",
      "Gérer un atelier et sa clientèle",
    ],
    program: ["Prise de mesures", "Patronage", "Confection", "Broderie", "Gestion d'atelier"],
    prerequisites: "Aucun.",
    image: SITE_IMAGES.couture,
  },
  {
    slug: "electricite-batiment",
    title: "Électricien bâtiment",
    category: "BTP",
    level: "BFEM",
    duration: "7 mois",
    mode: "Présentiel",
    place: "Touba",
    seats: 22,
    cost: "Subventionnée",
    start: "26 janvier 2027",
    summary:
      "Installations électriques résidentielles et tertiaires aux normes pour sécuriser les bâtiments et les ménages.",
    objectives: [
      "Lire un schéma électrique",
      "Réaliser une installation complète",
      "Contrôler la conformité",
    ],
    program: [
      "Lecture de plans",
      "Câblage",
      "Tableaux électriques",
      "Normes et sécurité",
      "Stage chantier",
    ],
    prerequisites: "Niveau BFEM.",
    image: solaire,
  },
  {
    slug: "entrepreneuriat",
    title: "Créer son entreprise",
    category: "Entrepreneuriat",
    level: "Tous niveaux",
    duration: "3 mois",
    mode: "Hybride",
    place: "Touba",
    seats: 30,
    cost: "Gratuit",
    start: "1er mars 2027",
    summary:
      "De l'idée au business plan : accompagnement, mentorat et recherche de financement pour lancer un projet viable.",
    objectives: [
      "Valider son idée",
      "Construire un business plan",
      "Préparer une demande de financement",
    ],
    program: ["Idée et marché", "Modèle économique", "Finances", "Pitch", "Mentorat individuel"],
    prerequisites: "Avoir un projet ou une idée.",
    image: SITE_IMAGES.hero,
  },
];

export type Offer = {
  title: string;
  company: string;
  city: string;
  type: "Emploi" | "Stage";
  contract: string;
  date: string;
};
export const OFFERS: Offer[] = [
  {
    title: "Apprenti électricien bâtiment",
    company: "Entreprise locale de BTP",
    city: "Touba",
    type: "Stage",
    contract: "Stage 6 mois",
    date: "28 sept. 2026",
  },
  {
    title: "Assistant digital et marketing",
    company: "Mairie de Touba",
    city: "Touba",
    type: "Emploi",
    contract: "CDD",
    date: "25 sept. 2026",
  },
  {
    title: "Assistant maintenance solaire",
    company: "Centre solaire régional",
    city: "Touba",
    type: "Emploi",
    contract: "CDD 12 mois",
    date: "22 sept. 2026",
  },
  {
    title: "Commis de cuisine",
    company: "Restaurant local",
    city: "Touba",
    type: "Emploi",
    contract: "CDI",
    date: "20 sept. 2026",
  },
  {
    title: "Développeur front-end junior",
    company: "Plateforme numérique locale",
    city: "Touba",
    type: "Stage",
    contract: "Stage 3 mois",
    date: "18 sept. 2026",
  },
  {
    title: "Couturière qualifiée",
    company: "Atelier de mode local",
    city: "Touba",
    type: "Emploi",
    contract: "CDD 6 mois",
    date: "15 sept. 2026",
  },
];

export const STATS = [
  { value: "2 400", label: "jeunes accompagnés depuis la création" },
  { value: "180", label: "entreprises et partenaires mobilisés" },
  { value: "12", label: "filières de formation structurées" },
  { value: "94%", label: "de bénéficiaires suivis à l'insertion" },
];

export const TESTIMONIALS = [
  {
    quote:
      "La formation a changé ma vision du travail. Aujourd'hui, je gère mon atelier avec plus de confiance.",
    name: "Mariam D.",
    role: "Créatrice d'entreprise, Touba",
  },
  {
    quote:
      "Le suivi de l'association m'a aidé à mieux préparer mon dossier et obtenir un stage durable.",
    name: "Aïcha B.",
    role: "Jeune diplômée, Diourbel",
  },
  {
    quote:
      "AFIJ-TOUBA fait le lien entre les jeunes, les formateurs et les entreprises, c'est une vraie plateforme de développement.",
    name: "Cheikh S.",
    role: "Partenaire institutionnel",
  },
  {
    quote:
      "Grâce au module entrepreneuriat, j'ai pu transformer mon idée en projet concret et rentable.",
    name: "Fatou N.",
    role: "Jeune entrepreneuse, Touba",
  },
  {
    quote: "Les ateliers sont pratiques et connectés aux besoins du marché local.",
    name: "Ousmane K.",
    role: "Formateur, Diourbel",
  },
  {
    quote: "Une organisation claire, professionnelle et orientée vers l'inclusion sociale.",
    name: "Mariama T.",
    role: "Membre du bureau",
  },
];

export const PARTNERS = [
  { name: "Ministère de la Formation professionnelle", type: "Institutionnel" },
  { name: "Mairie de Touba", type: "Collectivité" },
  { name: "Banque de développement locale", type: "Financeur" },
  { name: "Centre de Formation régionale", type: "Technique" },
  { name: "Entreprises locales de services", type: "Entreprise" },
  { name: "ONG de solidarité locale", type: "Organisation" },
  { name: "Plateforme d'insertion professionnelle", type: "Partenaire" },
  { name: "Chambre de commerce de Diourbel", type: "Institutionnel" },
];

export const NEWS = [
  {
    slug: "inscriptions-2027",
    date: "1er octobre 2026",
    category: "Appel à candidatures",
    title: "Ouverture des inscriptions pour la rentrée 2027",
    excerpt:
      "Les jeunes de Touba et de la région peuvent désormais déposer leur candidature dans plusieurs filières.",
  },
  {
    slug: "partenariat-local",
    date: "18 septembre 2026",
    category: "Partenariat",
    title: "Renforcement des liens avec les entreprises locales",
    excerpt:
      "Une série de conventions vise à sécuriser les stages, les placements et le mentorat des jeunes.",
  },
  {
    slug: "remise-certificats",
    date: "5 septembre 2026",
    category: "Événement",
    title: "Remise de certificats à la promotion 2026",
    excerpt:
      "Une cérémonie dédiée aux bénéficiaires de l’association et à leurs familles a réuni les acteurs locaux.",
  },
  {
    slug: "nouveau-centre",
    date: "20 août 2026",
    category: "Annonce",
    title: "Un nouveau centre de formation à Touba",
    excerpt:
      "Trois ateliers équipés et une salle numérique permettent d'accueillir davantage de jeunes chaque année.",
  },
];

export const EVENTS = [
  {
    date: "24 oct. 2026",
    time: "9h – 13h",
    place: "Centre de Touba",
    title: "Journée portes ouvertes",
    desc: "Visitez les ateliers, rencontrez les formateurs et posez vos questions.",
  },
  {
    date: "7 nov. 2026",
    time: "10h – 17h",
    place: "Touba",
    title: "Forum emploi & insertion",
    desc: "Plus de 40 entreprises locales et partenaires sont attendus pour le recrutement.",
  },
  {
    date: "21 nov. 2026",
    time: "15h – 18h",
    place: "En ligne",
    title: "Atelier : réussir son entretien",
    desc: "Conseils pratiques et simulations avec nos conseillers.",
  },
  {
    date: "5 déc. 2026",
    time: "9h – 12h",
    place: "Touba",
    title: "Pitch day entrepreneurs",
    desc: "Les porteurs de projets présentent leurs idées devant un jury d'accompagnement.",
  },
];

export const STRUCTURE = [
  {
    title: "Administration et membres",
    description:
      "Bureau exécutif, commissions de travail, rôles et responsabilités de chaque membre.",
  },
  {
    title: "Informations et actualités",
    description:
      "Présentation de l'association, missions, annonces, événements, formations et rapports d'activités.",
  },
  {
    title: "Base de données des entrepreneurs",
    description:
      "Entrepreneurs, secteur d'activité, besoins, budget, projet et statut d'avancement.",
  },
  {
    title: "Base de données des demandeurs",
    description:
      "Jeunes, demandeurs d'emploi, compétences, qualifications, disponibilités et suivi des dossiers.",
  },
  {
    title: "Partenaires clés",
    description:
      "Entreprises, institutions, centres de formation, organismes de financement et conventions.",
  },
  {
    title: "Gestion financière",
    description:
      "Cotisations, dons, subventions, dépenses, pièces justificatives et suivi budgétaire.",
  },
  {
    title: "Communication sociale",
    description:
      "Campagnes, publications, réseaux sociaux, vidéos, témoignages et annonces communautaires.",
  },
  {
    title: "Commissariat aux comptes",
    description: "Contrôle des pièces comptables, vérification des opérations et recommandations.",
  },
];

export const ROLE_ACCESS = [
  {
    role: "Administrateur général",
    access: "Toutes les rubriques et gestion des comptes utilisateurs.",
  },
  { role: "Secrétaire général", access: "Membres, informations, documents et comptes rendus." },
  {
    role: "Responsable de l'insertion",
    access: "Base des demandeurs, stages, emplois et suivi des placements.",
  },
  {
    role: "Responsable de l'entrepreneuriat",
    access: "Base des entrepreneurs, projets et besoins d'accompagnement.",
  },
  {
    role: "Responsable des partenariats",
    access: "Partenaires, contacts, conventions et propositions de partenariat.",
  },
  {
    role: "Trésorier / responsable financier",
    access: "Recettes, dépenses, budgets et pièces justificatives.",
  },
  {
    role: "Responsable de la communication",
    access: "Actualités, publications, photos, vidéos et réseaux sociaux.",
  },
  {
    role: "Commissaire aux comptes",
    access: "Consultation indépendante des pièces financières et rapports de contrôle.",
  },
];
