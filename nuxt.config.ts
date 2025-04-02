// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    modules: [
        '@element-plus/nuxt',
        '@nuxtjs/color-mode',
        'nuxt-svgo',
        '@nuxtjs/i18n',
        '@pinia/nuxt',
    ],

    app: {
        head: {
            title: 'Sunny Movies',
            htmlAttrs: {
                lang: 'en',
            },
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
                { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
                { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
                { rel: 'manifest', href: '/site.webmanifest' },
            ],
        },
    },

    runtimeConfig: {
        tmdbApiKey: process.env.TMDB_API_KEY,
        public: {
            apiBase: '/api',
            tmdbImageBaseUrl: 'https://image.tmdb.org/t/p',
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
                    additionalData: `@use "~/assets/styles/mixins/_index.scss" as *;`,
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
                file: 'en.ts',
            },
            {
                code: 'hr',
                language: 'hr',
                name: 'Hrvatski',
                file: 'hr.ts',
            },
        ],
        defaultLocale: 'en',
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirect',
            redirectOn: 'root',
        },
        langDir: 'locales',
    },

    colorMode: {
        classSuffix: '',
    },

    typescript: {
        strict: true,
        typeCheck: process.env.NODE_ENV === 'production',
        shim: false,
    },
})
