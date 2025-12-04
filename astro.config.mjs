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
          label: 'Concepts',
          autogenerate: { directory: 'concepts' },
        },
        {
          label: 'Modules',
          items: [
            {
              label: "Generator",
              collapsed: true,
              autogenerate: { directory: 'modules/generator' }
            },
            {
              label: "Network",
              collapsed: true,
              autogenerate: { directory: 'modules/network' }
            },
            {
              label: "Misc",
              collapsed: true,
              autogenerate: { directory: 'modules/misc' }
            },
          ]
        },
        {
          label: 'Examples',
          autogenerate: { directory: 'examples' },
        },
      ],
    }),
  ],
});
