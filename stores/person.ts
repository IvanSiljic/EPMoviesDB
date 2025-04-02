import type { FetchPerson } from '~/types'

export const usePersonStore = defineStore('person', () => {
    const { data: trendingPeople } = useFetch<FetchPerson>('/api/tmdb/trending/person/week', {
        onResponseError({ response }) {
            throw createError({
                statusCode: response.status || 404,
                statusMessage: response.statusText || 'Ups, something went wrong',
            })
        },
    })

    return {
        trendingPeople,
    }
})
