export function goToHome(history) {
    history('/')
}

export function goToMovieDetails(history, id) {
    history(`/movie/${id}`)
}