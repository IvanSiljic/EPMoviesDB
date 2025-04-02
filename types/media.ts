export interface Movie {
    adult?: boolean
    backdrop_path: string
    id: number
    title: string
    original_language: string
    original_title: string
    overview: string
    poster_path: string
    media_type?: 'movie'
    genre_ids: number[]
    popularity?: number
    release_date: string
    video: boolean
    vote_average?: number
    vote_count?: number
}

export interface FetchMovies {
    page: number
    results: Movie[]
    total_pages: number
    total_results: number
}

export interface TVSeries {
    adult?: boolean
    backdrop_path: string
    id: number
    name: string
    original_language: string
    original_name: string
    overview: string
    poster_path: string
    media_type?: 'tv'
    genre_ids: number[]
    popularity?: number
    first_air_date: string
    vote_average?: number
    vote_count?: number
    origin_country: string[]
}

export interface FetchTv {
    page: number
    results: TVSeries[]
    total_pages: number
    total_results: number
}

export interface Person {
    adult?: boolean
    backdrop_path: string
    id: number
    name: string
    title: string
    original_language: string
    original_title: string
    overview: string
    poster_path: string
    profile_path: string
    media_type?: 'person'
    genre_ids: number[]
    popularity?: number
    release_date: string
    video?: boolean
    vote_average?: number
    vote_count?: number
}

export interface FetchPerson {
    page: number
    results: Person[]
    total_pages: number
    total_results: number
}

export type Media = Movie | TVSeries | Person

export interface FetchMedia {
    page: number
    results: Media[]
    total_pages: number
    total_results: number
}
