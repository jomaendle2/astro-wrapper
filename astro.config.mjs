// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

import analogjsangular from '@analogjs/astro-angular';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), analogjsangular()]
});