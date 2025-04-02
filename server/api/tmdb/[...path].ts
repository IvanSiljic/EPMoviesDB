export default defineEventHandler(async event => {
    const config = useRuntimeConfig()
    const path = event.context.params?.path
    const query = getQuery(event)
    const headers = getHeaders(event)

    const i18nRedirect = headers.cookie?.match(/i18n_redirect=([^;]*)/) || []
    const acceptLanguage = headers['accept-language']?.split(',')[0]

    const language = i18nRedirect[1] ? i18nRedirect[1] : acceptLanguage

    return await $fetch(`https://api.themoviedb.org/3/${path}`, {
        query: {
            ...query,
            language,
        },
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${config.tmdbApiKey}`,
        },
    })
})
