// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://meshea.me',
  integrations: [
    starlight({
      title: 'meshchile.cl · meshea.me',
      description: 'Hub de redes mesh LoRa comunitarias en Chile',
      defaultLocale: 'root',
      locales: { root: { label: 'Español', lang: 'es' } },
      logo: { src: './src/assets/logo.svg', alt: 'meshea.me' },
      customCss: ['./src/styles/global.css'],
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/n3v1l/meshea.me' },
      ],
      editLink: { baseUrl: 'https://github.com/n3v1l/meshea.me/edit/main/' },
      sidebar: [
        {
          label: 'Fundamentos',
          items: [
            { label: '¿Qué es LoRa?',             slug: 'docs/lora' },
            { label: '¿Qué es una red mesh?',     slug: 'docs/mesh' },
            { label: 'Regulación Chile (SUBTEL)', slug: 'docs/regulacion-chile' },
            { label: 'Hardware compatible',        slug: 'docs/hardware' },
            { label: 'Antenas y deployment',       slug: 'docs/antenas' },
          ],
        },
        {
          label: 'Meshtastic',
          items: [
            { label: 'Introducción',      slug: 'docs/meshtastic/intro' },
            { label: 'Flashear firmware', slug: 'docs/meshtastic/flasheo' },
            { label: 'Config Chile',      slug: 'docs/meshtastic/config-chile' },
            { label: 'MQTT comunitario',  slug: 'docs/meshtastic/mqtt' },
          ],
        },
        {
          label: 'MeshCore',
          badge: { text: 'Exploratorio', variant: 'caution' },
          items: [
            { label: 'Introducción',      slug: 'docs/meshcore/intro' },
            { label: 'Flashear firmware', slug: 'docs/meshcore/flasheo' },
            { label: 'Config Chile',      slug: 'docs/meshcore/config-chile' },
            { label: 'Repeaters',         slug: 'docs/meshcore/repeaters' },
          ],
        },
        {
          label: 'Comparativas',
          items: [
            { label: 'Meshtastic vs MeshCore', slug: 'docs/comparativa' },
            { label: '¿Cuál elegir?',          slug: 'docs/cual-elegir' },
          ],
        },
      ],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
})
