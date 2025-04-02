import type { FetchTv } from '~/types'

export const useTvStore = defineStore('tv', () => {
    const { data: trendingTv } = useFetch<FetchTv>('/api/tmdb/trending/tv/week', {
        onResponseError({ response }) {
            throw createError({
                statusCode: response.status || 404,
                statusMessage: response.statusText || 'Ups, something went wrong',
            })
        },
    })

    return {
        trendingTv,
    }
})
