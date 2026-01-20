// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://evemontalvao.github.io',
  integrations: [mdx(), sitemap(), icon()],
  base: '/evemontalvao',
  vite: {
    plugins: [tailwindcss()],
  },
});