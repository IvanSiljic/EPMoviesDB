module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    extends: [
        '@nuxtjs/eslint-config-typescript',
        'plugin:nuxt/recommended',
        'prettier',
    ],
    plugins: ['prettier'],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    rules: {
        'vue/multi-word-component-names': 'off',
        'prettier/prettier': 'error',
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
        'indent': ['error', 4],
        'vue/html-indent': ['error', 4],
        'vue/script-indent': ['error', 4],
    },
} 