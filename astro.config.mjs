// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

const isProd = process.env.NODE_ENV === 'production';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  site: 'https://life-palette.github.io',
  base: isProd ? '/site' : '/',
});
