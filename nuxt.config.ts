// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/styles/index.scss'],

  modules: ['@element-plus/nuxt', '@nuxtjs/color-mode', 'nuxt-svgo'],

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  svgo: {
    customComponent: 'NuxtIcon',
  },

  colorMode: {
    classSuffix: '',
  },

  elementPlus: {
    icon: 'ElIcon',
    importStyle: 'scss',
    themes: ['dark'],
  },
})