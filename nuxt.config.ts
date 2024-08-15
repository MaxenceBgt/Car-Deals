// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: "Car Deals | Ta voiture à moitié prix",

      htmlAttrs: {
        lang: 'fr'
      },

      meta: [
        {name: 'description', content: 'Car Deals est un site de vente de voitures neuves à prix réduits'},
      ],

      link: [
        {rel: 'icon', type: 'image/png', href: '/logo.png' }
      ]
    }
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    }
  ],

  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-lucide-icons',
    '@nuxtjs/google-fonts'
  ],

  googleFonts: {
    families: {
      'K2D': [300, 400, 500, 600, 700, 800]
    },
    display: 'swap'
  },
})