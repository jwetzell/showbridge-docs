import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'showbridge',
      favicon: '/favicon.ico',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/jwetzell/showbridge-go',
        },
      ],
      sidebar: [
        {
          label: 'showbridge',
          autogenerate: { directory: '/showbridge' },
        },
        {
          label: 'Run',
          autogenerate: { directory: 'run' },
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
  ],
});
