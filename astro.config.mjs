import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  // site: "https://gridstackjs.com", // TODO : Change this to gridstack
  // output: 'server',
  output: 'static',
  compressHTML: false, // TODO : Change this to true
  build: {
    format: "directory",
    // client: './dist/client',

  },
  vite: {
    server: {
      watch: {
        ignored: ['./demo/**/*']
      }
    }
  }
});
