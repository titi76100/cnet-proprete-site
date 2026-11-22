# cnet-proprete-site

Site officiel et commercial de CNet Propreté, logiciel de gestion pour les entreprises de nettoyage
et les structures d'insertion.

> **Statut : en construction (phase 1).** Le site n'est pas publié. L'indexation est bloquée
> (`public/robots.txt`) jusqu'à la mise en production.

## Stack

- [Astro](https://astro.build) 7 (TypeScript strict), pages générées en statique
- [Tailwind CSS](https://tailwindcss.com) 4 — identité visuelle dans `src/styles/global.css`
- Polices Inter et Plus Jakarta Sans auto-hébergées (Fontsource), icônes [Lucide](https://lucide.dev)
- Adaptateur [`@astrojs/cloudflare`](https://docs.astro.build/en/guides/integrations-guide/cloudflare/) :
  hébergement envisagé sur Cloudflare Workers (offre gratuite). Une route pourra passer en rendu
  serveur (formulaires, Stripe, assistant IA) avec `export const prerender = false;`.

## Démarrage

Prérequis : Node.js 22 (voir `.nvmrc`).

```bash
npm install
npm run dev        # serveur de développement sur http://localhost:4321
npm run build      # build de production dans dist/
npm run verify     # astro check + ESLint + Prettier + build (exécuté par la CI)
```

## Organisation

```
src/
  config/site.ts         nom, navigation, modules, liens du pied de page, interrupteurs
  styles/global.css      couleurs, polices et styles de base (charte provisoire)
  layouts/BaseLayout     balises SEO, en-tête, pied de page
  components/layout/     Header, Footer, SkipLink
  components/ui/         Button, Container, Logo, SectionHeading, ModuleIcon
  components/home/       sections de la page d'accueil
  components/mockups/    illustration HTML/CSS de l'interface (non contractuelle)
  pages/                 index, 404
docs/decisions.md        décisions validées (tarifs, contenus, hébergement)
```

## Règles de contenu

- Aucun témoignage, chiffre, logo client, certification ou lien de téléchargement non fourni par
  CNet Propreté.
- Les éléments à compléter ou à valider sont marqués `[À COMPLÉTER]` ou `[À VALIDER]` dans le code.
- Les fonctionnalités futures (paiement, assistant IA) sont désactivées : `PUBLIC_FEATURE_CHECKOUT`,
  `PUBLIC_FEATURE_ASSISTANT` (voir `.env.example`). Aucun secret ne doit être versionné.
