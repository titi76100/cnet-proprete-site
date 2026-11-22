// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// URL de production provisoire : à remplacer par le nom de domaine définitif.
const SITE_URL = process.env.SITE_URL ?? 'https://www.example.com';

export default defineConfig({
  site: SITE_URL,
  // Toutes les pages sont générées en statique.
  // Une route pourra passer en rendu serveur (formulaires, Stripe, assistant IA)
  // en déclarant `export const prerender = false;`.
  output: 'static',
  adapter: cloudflare({
    // Images optimisées au moment du build : pas de service payant Cloudflare Images.
    imageService: 'compile',
  }),
  integrations: [sitemap()],
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
