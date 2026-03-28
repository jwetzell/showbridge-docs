import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "showbridge",
      tableOfContents: false,
      favicon: "/favicon.ico",
      editLink: {
        baseUrl: "https://github.com/jwetzell/showbridge-docs/edit/main/",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/jwetzell/showbridge-go",
        },
      ],
      sidebar: [
        {
          label: "showbridge",
          autogenerate: { directory: "/showbridge" },
        },
        {
          label: "Run",
          autogenerate: { directory: "run" },
        },
        {
          label: "Concepts",
          autogenerate: { directory: "concepts" },
        },
        {
          label: "Modules",
          items: [
            {
              label: "Database",
              collapsed: true,
              autogenerate: { directory: "modules/db" },
            },
            {
              label: "HTTP",
              collapsed: true,
              autogenerate: { directory: "modules/http" },
            },
            {
              label: "MIDI",
              collapsed: true,
              autogenerate: { directory: "modules/midi" },
            },
            {
              label: "MQTT",
              collapsed: true,
              autogenerate: { directory: "modules/mqtt" },
            },
            {
              label: "NATS",
              collapsed: true,
              autogenerate: { directory: "modules/nats" },
            },
            {
              label: "Network",
              collapsed: true,
              items: [
                {
                  label: "TCP",
                  collapsed: true,
                  autogenerate: { directory: "modules/net/tcp" },
                },
                {
                  label: "UDP",
                  collapsed: true,
                  autogenerate: { directory: "modules/net/udp" },
                },
              ],
            },
            {
              label: "PosiStageNet",
              collapsed: true,
              autogenerate: { directory: "modules/psn" },
            },
            {
              label: "Redis",
              collapsed: true,
              autogenerate: { directory: "modules/redis" },
            },
            {
              label: "Time",
              collapsed: true,
              autogenerate: { directory: "modules/time" },
            },
            {
              label: "Serial",
              collapsed: true,
              autogenerate: { directory: "modules/serial" },
            },
            {
              label: "SIP",
              collapsed: true,
              items: [
                {
                  label: "Call",
                  collapsed: true,
                  autogenerate: { directory: "modules/sip/call" },
                },
                {
                  label: "DTMF",
                  collapsed: true,
                  autogenerate: { directory: "modules/sip/dtmf" },
                },
              ],
            },
          ],
        },
        {
          label: "Processors",
          items: [
            {
              label: "ArtNet",
              collapsed: true,
              autogenerate: { directory: "processors/artnet" },
            },
            {
              label: "Database",
              collapsed: true,
              autogenerate: { directory: "processors/db" },
            },
            {
              label: "Debug",
              collapsed: true,
              autogenerate: { directory: "processors/debug" },
            },
            {
              label: "Filter",
              collapsed: true,
              autogenerate: { directory: "processors/filter" },
            },
            {
              label: "Float",
              collapsed: true,
              autogenerate: { directory: "processors/float" },
            },
            {
              label: "FreeD",
              collapsed: true,
              autogenerate: { directory: "processors/free-d" },
            },
            {
              label: "HTTP",
              collapsed: true,
              items: [
                {
                  label: "Request",
                  collapsed: true,
                  autogenerate: { directory: "processors/http/request" },
                },
                {
                  label: "Response",
                  collapsed: true,
                  autogenerate: { directory: "processors/http/response" },
                },
              ],
            },
            {
              label: "Int",
              collapsed: true,
              autogenerate: { directory: "processors/int" },
            },
            {
              label: "JSON",
              collapsed: true,
              autogenerate: { directory: "processors/json" },
            },
            {
              label: "Key/Value",
              collapsed: true,
              autogenerate: { directory: "processors/kv" },
            },
            {
              label: "MIDI",
              collapsed: true,
              items: [
                {
                  label: "Message",
                  collapsed: true,
                  autogenerate: { directory: "processors/midi/message" },
                },
                {
                  label: "Note On",
                  collapsed: true,
                  autogenerate: { directory: "processors/midi/note_on" },
                },
                {
                  label: "Note Off",
                  collapsed: true,
                  autogenerate: { directory: "processors/midi/note_off" },
                },
                {
                  label: "Control Change",
                  collapsed: true,
                  autogenerate: { directory: "processors/midi/control_change" },
                },
                {
                  label: "Program Change",
                  collapsed: true,
                  autogenerate: { directory: "processors/midi/program_change" },
                },
              ],
            },
            {
              label: "MQTT",
              collapsed: true,
              items: [
                {
                  label: "Message",
                  collapsed: true,
                  autogenerate: { directory: "processors/mqtt/message" },
                },
              ],
            },
            {
              label: "NATS",
              collapsed: true,
              items: [
                {
                  label: "Message",
                  collapsed: true,
                  autogenerate: { directory: "processors/nats/message" },
                },
              ],
            },
            {
              label: "OSC",
              collapsed: true,
              items: [
                {
                  label: "Message",
                  collapsed: true,
                  autogenerate: { directory: "processors/osc/message" },
                },
              ],
            },
            {
              label: "Router",
              collapsed: true,
              autogenerate: { directory: "processors/router" },
            },
            {
              label: "Script",
              collapsed: true,
              autogenerate: { directory: "processors/script" },
            },
            {
              label: "SIP",
              collapsed: true,
              items: [
                {
                  label: "Response",
                  collapsed: true,
                  items: [
                    {
                      label: "Audio",
                      collapsed: true,
                      autogenerate: {
                        directory: "processors/sip/response/audio",
                      },
                    },
                    {
                      label: "DTMF",
                      collapsed: true,
                      autogenerate: {
                        directory: "processors/sip/response/dtmf",
                      },
                    },
                  ],
                },
              ],
            },
            {
              label: "String",
              collapsed: true,
              autogenerate: { directory: "processors/string" },
            },
            {
              label: "Time",
              collapsed: true,
              autogenerate: { directory: "processors/time" },
            },
          ],
        },
        {
          label: "Examples",
          autogenerate: { directory: "examples" },
        },
      ],
    }),
  ],
});
