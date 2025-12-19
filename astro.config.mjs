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
              label: "HTTP",
              collapsed: true,
              autogenerate: { directory: 'modules/http' }
            },
            {
              label: "MIDI",
              collapsed: true,
              autogenerate: { directory: 'modules/midi' }
            },
          ]
        },
        {
          label: 'Processors',
          items: [
            {
              label: "OSC",
              collapsed: true,
              items: [
                {
                  label: "Message",
                  collapsed: true,
                  autogenerate: { directory: 'processors/osc/message' }
                }
              ]
            },
            {
              label: "String",
              collapsed: true,
              autogenerate: { directory: 'processors/string' }
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
