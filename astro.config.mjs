import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  output: 'server',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react()],
  adapter: vercel(),
});
