import type { Movie, TVSeries, Media } from '~/types/media'

// Function to get the title of media regardless of type
export function getMediaTitle(media: Media): string {
    return isMovie(media) ? media.title! : media.name!
}

// Function to get the release date of media regardless of type
export function getMediaReleaseDate(media: Media): string {
    return isMovie(media) ? media.release_date! : isTVSeries(media) ? media.first_air_date! : ''
}

// Function to get the poster path of media regardless of type
export function getMediaPosterPath(media: Media): string {
    return media.media_type === 'person' ? media.profile_path : media.poster_path
}

// Type Guard to check if media is a Movie
function isMovie(media: Media): media is Movie {
    return media.media_type === 'movie'
}

// Type Guard to check if media is a TVSeries
function isTVSeries(media: Media): media is TVSeries {
    return media.media_type === 'tv'
}
