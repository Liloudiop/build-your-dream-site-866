import solaire from "@/assets/f-solaire.jpg";
import web from "@/assets/f-web.jpg";
import cuisine from "@/assets/f-cuisine.jpg";
import hero from "@/assets/hero.jpg";

export const SITE = {
  name: "Sahel Avenir",
  tagline: "Formation · Insertion",
  city: "Dakar, Sénégal",
  phone: "+221 33 000 00 00",
  whatsapp: "221770000000",
  email: "contact@sahelavenir.sn",
  address: "Sicap Liberté 6, Dakar",
};

export const STEPS = ["Informer", "Inscrire", "Former", "Évaluer", "Certifier", "Accompagner", "Insérer", "Suivre"];

export type Formation = {
  slug: string; title: string; category: string; level: string; duration: string;
  mode: string; place: string; seats: number; cost: string; start: string;
  summary: string; objectives: string[]; program: string[]; prerequisites: string; image: string;
};

export const FORMATIONS: Formation[] = [
  { slug: "installateur-solaire", title: "Installateur de systèmes solaires", category: "Énergie", level: "Sans diplôme", duration: "6 mois", mode: "Présentiel", place: "Thiès", seats: 24, cost: "Gratuit (bourse)", start: "12 janvier 2027",
    summary: "Pose, câblage et maintenance de kits photovoltaïques domestiques et communautaires.",
    objectives: ["Dimensionner une installation solaire", "Poser et câbler panneaux, batteries et onduleurs", "Diagnostiquer et réparer une panne", "Appliquer les règles de sécurité électrique"],
    program: ["Bases de l'électricité", "Composants photovoltaïques", "Dimensionnement", "Chantiers pratiques", "Maintenance", "Stage en entreprise (6 semaines)"],
    prerequisites: "Savoir lire et compter, 18 à 35 ans.", image: solaire },
  { slug: "developpeur-web", title: "Développeur web full-stack", category: "Numérique", level: "Bac", duration: "9 mois", mode: "Hybride", place: "Dakar", seats: 20, cost: "25 000 FCFA / mois", start: "2 février 2027",
    summary: "JavaScript, bases de données et déploiement, avec stage en agence partenaire.",
    objectives: ["Créer des sites et applications web", "Travailler avec une base de données", "Collaborer en équipe avec Git", "Constituer un portfolio professionnel"],
    program: ["HTML, CSS et design responsive", "JavaScript et React", "Node.js et API", "Bases de données SQL", "Projet de fin de formation", "Stage en agence (2 mois)"],
    prerequisites: "Niveau Bac, aisance avec l'ordinateur.", image: web },
  { slug: "cuisine-senegalaise", title: "Cuisinier de cuisine sénégalaise", category: "Hôtellerie", level: "Sans diplôme", duration: "8 mois", mode: "Présentiel", place: "Dakar", seats: 18, cost: "Gratuit (bourse)", start: "19 janvier 2027",
    summary: "Techniques de base, hygiène HACCP et valorisation des produits locaux.",
    objectives: ["Maîtriser les plats traditionnels", "Appliquer les normes d'hygiène HACCP", "Gérer les stocks et les coûts", "Travailler en brigade"],
    program: ["Hygiène et sécurité", "Techniques de base", "Cuisine sénégalaise et ouest-africaine", "Pâtisserie simple", "Gestion de cuisine", "Stage en restaurant (2 mois)"],
    prerequisites: "Motivation, 18 à 35 ans.", image: cuisine },
  { slug: "couture-mode", title: "Couture et création de mode", category: "Artisanat", level: "Sans diplôme", duration: "6 mois", mode: "Présentiel", place: "Saint-Louis", seats: 20, cost: "Gratuit (bourse)", start: "9 février 2027",
    summary: "Patronage, confection et gestion d'un petit atelier de couture.",
    objectives: ["Prendre des mesures et tracer un patron", "Confectionner des tenues complètes", "Gérer un atelier et sa clientèle"],
    program: ["Prise de mesures", "Patronage", "Confection", "Broderie", "Gestion d'atelier"],
    prerequisites: "Aucun.", image: hero },
  { slug: "electricite-batiment", title: "Électricien bâtiment", category: "BTP", level: "BFEM", duration: "7 mois", mode: "Présentiel", place: "Thiès", seats: 22, cost: "15 000 FCFA / mois", start: "26 janvier 2027",
    summary: "Installations électriques résidentielles et tertiaires aux normes.",
    objectives: ["Lire un schéma électrique", "Réaliser une installation complète", "Contrôler la conformité"],
    program: ["Lecture de plans", "Câblage", "Tableaux électriques", "Normes et sécurité", "Stage chantier"],
    prerequisites: "Niveau BFEM.", image: solaire },
  { slug: "entrepreneuriat", title: "Créer son entreprise", category: "Entrepreneuriat", level: "Tous niveaux", duration: "3 mois", mode: "Hybride", place: "Dakar", seats: 30, cost: "Gratuit", start: "1er mars 2027",
    summary: "De l'idée au business plan : accompagnement, mentorat et recherche de financement.",
    objectives: ["Valider son idée", "Construire un business plan", "Préparer une demande de financement"],
    program: ["Idée et marché", "Modèle économique", "Finances", "Pitch", "Mentorat individuel"],
    prerequisites: "Avoir un projet ou une idée.", image: web },
];

export type Offer = { title: string; company: string; city: string; type: "Emploi" | "Stage"; contract: string; date: string };
export const OFFERS: Offer[] = [
  { title: "Apprenti électricien bâtiment", company: "Société Électro Sahel", city: "Thiès", type: "Stage", contract: "Stage 6 mois", date: "28 sept. 2026" },
  { title: "Vendeur polyvalent (H/F)", company: "Coopérative Teranga", city: "Dakar", type: "Emploi", contract: "CDI", date: "25 sept. 2026" },
  { title: "Assistant maintenance solaire", company: "GreenVolt SARL", city: "Saint-Louis", type: "Emploi", contract: "CDD 12 mois", date: "22 sept. 2026" },
  { title: "Commis de cuisine", company: "Restaurant Le Baobab", city: "Dakar", type: "Emploi", contract: "CDI", date: "20 sept. 2026" },
  { title: "Développeur front-end junior", company: "Kër Digital", city: "Dakar", type: "Stage", contract: "Stage 3 mois", date: "18 sept. 2026" },
  { title: "Couturière qualifiée", company: "Atelier Ndanane", city: "Saint-Louis", type: "Emploi", contract: "CDD 6 mois", date: "15 sept. 2026" },
];

export const STATS = [
  { value: "2 400", label: "stagiaires formés depuis 2011" },
  { value: "180", label: "entreprises partenaires d'insertion" },
  { value: "14", label: "filières certifiées par l'État" },
  { value: "94%", label: "de réussite à l'examen de fin de cycle" },
];

export const TESTIMONIALS = [
  { quote: "J'ai quitté l'école à 16 ans. La formation en électricité m'a rendu mon métier et ma fierté.", name: "Mamadou D.", role: "Électricien, Thiès" },
  { quote: "Le suivi après la sortie m'a aidé à décrocher mon premier CDI dans une agence web.", name: "Aïssatou B.", role: "Développeuse, Dakar" },
  { quote: "Des stagiaires motivés et bien encadrés : nous recrutons chez eux chaque année.", name: "Cheikh S.", role: "Directeur, GreenVolt SARL" },
  { quote: "Grâce au module entrepreneuriat, j'ai ouvert mon propre atelier de couture avec deux employées.", name: "Fatou N.", role: "Créatrice, Saint-Louis" },
  { quote: "Les formateurs viennent du terrain. On apprend les vrais gestes du métier.", name: "Ousmane K.", role: "Cuisinier, Dakar" },
  { quote: "Un partenaire fiable pour former nos futurs techniciens.", name: "Mariama T.", role: "RH, Société Électro Sahel" },
];

export const PARTNERS = [
  { name: "Ministère de la Formation professionnelle", type: "Institutionnel" },
  { name: "Fonds Sahel", type: "Financeur" },
  { name: "Orange Digital Center", type: "Technique" },
  { name: "Chambre de Commerce de Dakar", type: "Institutionnel" },
  { name: "Coopérative Teranga", type: "Entreprise" },
  { name: "GreenVolt SARL", type: "Entreprise" },
  { name: "Kër Digital", type: "Entreprise" },
  { name: "Ville de Thiès", type: "Collectivité" },
];

export const NEWS = [
  { slug: "inscriptions-2027", date: "1er octobre 2026", category: "Appel à candidatures", title: "Ouverture des inscriptions pour la rentrée de janvier 2027", excerpt: "Six filières ouvrent leurs portes. Les candidatures sont reçues en ligne jusqu'au 30 novembre." },
  { slug: "partenariat-greenvolt", date: "18 septembre 2026", category: "Partenariat", title: "GreenVolt s'engage à recruter 30 techniciens solaires", excerpt: "Une convention signée pour accueillir nos stagiaires et embaucher les meilleurs profils." },
  { slug: "remise-certificats", date: "5 septembre 2026", category: "Événement", title: "212 certificats remis à la promotion 2026", excerpt: "Une cérémonie émouvante en présence des familles, des formateurs et des entreprises partenaires." },
  { slug: "nouveau-centre-saint-louis", date: "20 août 2026", category: "Annonce", title: "Un nouveau centre de formation à Saint-Louis", excerpt: "Trois ateliers équipés et une salle numérique pour former 150 jeunes par an." },
];

export const EVENTS = [
  { date: "24 oct. 2026", time: "9h – 13h", place: "Centre de Dakar", title: "Journée portes ouvertes", desc: "Visitez les ateliers, rencontrez les formateurs et posez vos questions." },
  { date: "7 nov. 2026", time: "10h – 17h", place: "Thiès", title: "Forum emploi & insertion", desc: "Plus de 40 entreprises recrutent : venez avec votre CV." },
  { date: "21 nov. 2026", time: "15h – 18h", place: "En ligne", title: "Atelier : réussir son entretien", desc: "Conseils pratiques et simulations avec nos conseillers." },
  { date: "5 déc. 2026", time: "9h – 12h", place: "Saint-Louis", title: "Pitch day entrepreneurs", desc: "Les porteurs de projets présentent leurs idées à un jury de financeurs." },
];
