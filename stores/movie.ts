import type { FetchMedia, FetchMovies } from '~/types'

export const useMovieStore = defineStore('movie', () => {
    const { data: trendingMedia } = useFetch<FetchMedia>('/api/tmdb/trending/all/week', {
        onResponseError({ response }) {
            throw createError({
                statusCode: response.status || 404,
                statusMessage: response.statusText || 'Ups, something went wrong',
            })
        },
    })
    const { data: trendingMovies } = useFetch<FetchMovies>('/api/tmdb/trending/movie/week', {
        onResponseError({ response }) {
            throw createError({
                statusCode: response.status || 404,
                statusMessage: response.statusText || 'Ups, something went wrong',
            })
        },
    })

    return {
        trendingMedia,
        trendingMovies,
    }
})
