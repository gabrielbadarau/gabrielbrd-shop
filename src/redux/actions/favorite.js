export function addToFavorite(payload) {
    return {
        type: 'ADD_TO_FAVORITE',
        payload
    }
}

export function removeFromFavorite(payload) {
    return {
        type: 'REMOVE_FROM_FAVORITE',
        payload
    }
}