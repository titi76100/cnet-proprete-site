/**
 * Configuration centrale du site.
 * Les éléments marqués [À COMPLÉTER] ou [À VALIDER] attendent une information de CNet Propreté.
 */

export const site = {
  name: 'CNet Propreté',
  tagline: 'Logiciel de gestion pour les entreprises de nettoyage et les structures d’insertion',
  description:
    'CNet Propreté est un logiciel de gestion pensé pour les entreprises de nettoyage et les structures d’insertion : salariés, plannings, contrôles qualité, signalements, matériel, clés et badges, remplacements et devis.',
  locale: 'fr_FR',
  /**
   * Raison sociale affichée dans le pied de page.
   * Laisser `null` tant qu’elle n’est pas fournie : seul le nom du logiciel est affiché.
   */
  legalName: null as string | null,
  /**
   * Adresse de connexion au logiciel.
   * Laisser `null` : le bouton « Se connecter » reste masqué tant qu’aucune adresse n’est confirmée.
   */
  appLoginUrl: null as string | null,
} as const;

/**
 * Fonctionnalités futures, désactivées pour le moment.
 * Aucun code de paiement ni d’assistant IA n’est présent dans le site à ce stade.
 */
export const features = {
  checkout: import.meta.env.PUBLIC_FEATURE_CHECKOUT === 'true',
  assistant: import.meta.env.PUBLIC_FEATURE_ASSISTANT === 'true',
} as const;

export type NavLink = { label: string; href: string; description?: string };

/** Les 9 modules présentés, dans l’ordre fourni par CNet Propreté. Textes validés par CNet Propreté. */
export const modules = [
  {
    slug: 'salaries-plannings',
    label: 'Salariés & plannings',
    summary: 'Organisez vos équipes et leurs interventions sur chaque site.',
  },
  {
    slug: 'controles-qualite',
    label: 'Contrôles qualité',
    summary: 'Réalisez et suivez les contrôles de vos prestations.',
  },
  {
    slug: 'signalements',
    label: 'Signalements',
    summary: 'Déclarez les anomalies du terrain, ajoutez des photos et suivez leur traitement.',
  },
  {
    slug: 'commandes-materiel',
    label: 'Commandes de matériel',
    summary: 'Centralisez les demandes et le suivi des commandes de matériel.',
  },
  {
    slug: 'cles-badges',
    label: 'Clés & badges',
    summary: 'Gardez la trace des clés et badges confiés à vos équipes.',
  },
  {
    slug: 'remplacements',
    label: 'Remplacements',
    summary:
      'Organisez les remplacements et assurez le suivi des interventions avant et après remplacement.',
  },
  {
    slug: 'devis',
    label: 'Devis',
    summary: 'Créez, gérez et suivez vos devis directement depuis CNet Propreté.',
  },
  {
    slug: 'multi-sites',
    label: 'Gestion multi-sites',
    summary: 'Pilotez l’ensemble de vos sites et chantiers.',
  },
  {
    slug: 'roles-permissions',
    label: 'Rôles & permissions',
    summary: 'Attribuez à chaque utilisateur les accès adaptés à sa fonction.',
  },
] as const;

export type ModuleSlug = (typeof modules)[number]['slug'];

export const solutions: NavLink[] = [
  {
    label: 'Entreprises de nettoyage',
    href: '/solutions/entreprises-de-nettoyage',
    description: 'Équipes, sites clients et qualité de service.',
  },
  {
    label: 'Structures d’insertion',
    href: '/solutions/structures-insertion',
    description: 'Encadrants techniques et salariés en parcours.',
  },
];

export const mainNav: NavLink[] = [
  { label: 'Logiciel', href: '/logiciel' },
  // « Fonctionnalités » et « Solutions » sont des menus déroulants (voir Header).
  { label: 'Applications', href: '/applications' },
  { label: 'Tarifs', href: '/tarifs' },
  { label: 'FAQ', href: '/faq' },
];

export const ctaDemo: NavLink = { label: 'Demander une démo', href: '/demo' };

/**
 * Bouton « Démarrer l’essai gratuit ».
 * [À VALIDER] Aucun parcours d’inscription n’existe encore sur le site : le bouton mène à la future
 * page de demande (étape 2.7), avec le motif « essai » présélectionné.
 */
export const ctaTrial: NavLink = { label: 'Démarrer l’essai gratuit', href: '/demo?demande=essai' };

/** Offre commerciale validée (sans prix : ceux-ci ne sont affichés que sur la page Tarifs). */
export const offer = {
  trialDays: 30,
  annualDiscountPercent: 10,
} as const;

/** Publics cibles. Textes validés par CNet Propreté. */
export const audiences = [
  {
    key: 'nettoyage',
    title: 'Entreprises de nettoyage',
    href: '/solutions/entreprises-de-nettoyage',
    points: [
      'Organisez vos équipes et vos plannings sur l’ensemble de vos sites.',
      'Contrôlez la qualité de vos prestations et conservez un suivi des interventions.',
      'Gérez les remplacements, les signalements et les demandes de matériel depuis un seul outil.',
    ],
  },
  {
    key: 'insertion',
    title: 'Structures d’insertion',
    href: '/solutions/structures-insertion',
    points: [
      'Coordonnez les encadrants techniques et les salariés sur vos différents chantiers.',
      'Adaptez les droits d’accès aux fonctions de chacun.',
      'Centralisez le suivi des chantiers : qualité, signalements, matériel, clés et badges.',
    ],
  },
] as const;

/** Plateformes sur lesquelles les applications sont disponibles (confirmé par CNet Propreté). */
export const platforms = ['Windows', 'Android', 'iOS'] as const;

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: 'Logiciel',
    links: [
      { label: 'Présentation', href: '/logiciel' },
      { label: 'Fonctionnalités', href: '/fonctionnalites' },
      { label: 'Applications', href: '/applications' },
    ],
  },
  {
    title: 'Solutions',
    links: solutions.map(({ label, href }) => ({ label, href })),
  },
  {
    title: 'Ressources',
    links: [
      { label: 'Tarifs', href: '/tarifs' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Demander une démo', href: '/demo' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Informations légales',
    links: [
      { label: 'Mentions légales', href: '/mentions-legales' },
      { label: 'Politique de confidentialité', href: '/politique-de-confidentialite' },
      { label: 'Cookies', href: '/cookies' },
      { label: 'CGU', href: '/cgu' },
      { label: 'CGV', href: '/cgv' },
    ],
  },
];
