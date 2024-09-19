// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@element-plus/nuxt', '@nuxtjs/color-mode', 'nuxt-svgo', '@nuxtjs/i18n'],

  app: {
    head: {
      title: "Movies",
      htmlAttrs: {
        lang: 'en'
      },
    },
  },

  elementPlus: {
    icon: 'ElIcon',
    importStyle: false,
    themes: ['dark'],
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          additionalData: `@use "~/assets/styles/mixins/media.scss" as *;`,
        },
      },
    },
  },

  css: ['~/assets/styles/index.scss'],

  svgo: {
    customComponent: 'NuxtIcon',
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  i18n: {
    locales: [
      {
        code: 'en',
        language: 'en',
        name: 'English',
        file: 'en.ts'
      },
    ],
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirect',
      redirectOn: 'root',
    },
    langDir: 'locales'
  },

  colorMode: {
    classSuffix: '',
  },
})