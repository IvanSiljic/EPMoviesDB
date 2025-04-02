// Format number with commas
export const numberWithCommas = (number: number | undefined): string => {
    return number ? number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : ''
}

// Truncate text with a clamp
export const truncate = (text: string, length: number = 30, clamp: string = '...'): string => {
    text = text || ''
    if (text.length <= length) return text

    let tcText = text.slice(0, length - clamp.length)
    let last = tcText.length - 1

    while (last > 0 && tcText[last] !== ' ' && tcText[last] !== clamp[0]) last -= 1

    last = last || length - clamp.length
    tcText = tcText.slice(0, last)

    return tcText + clamp
}

// Format minutes into hours and minutes
export const runtime = (minutes: number): string => {
    if (minutes < 1) return '0 min'

    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60

    return hours ? `${hours}h ${mins}min` : `${mins}min`
}

// Extract only the year from a date string
export const getYear = (dateString: string): string | undefined => {
    if (!dateString) return 'N/A'
    return dateString.split('-')[0]
}
