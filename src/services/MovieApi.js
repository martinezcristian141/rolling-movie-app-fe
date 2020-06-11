const baseUrl = process.env.API_BASE_URL || 'http://localhost:3001'

const MovieApi = {
    getMovies: async () => {
        const url = `${baseUrl}/movies`;
        const fetchMovies = await fetch(url, { mode: 'cors' });
        const data = await fetchMovies.json();
        const movies = await data.results
        return movies
    },
    createMovie: (movie) => {

    },
    getMovie: async (movie_id) => {
        const url = `${baseUrl}/movies/${movie_id}`;
        const fetchMovies = await fetch(url, { mode: 'cors' });
        const data = await fetchMovies.json();
        const movie = data
        return movie
    },
    updateMovie: (movie_id) => {},
    deleteMovie: (movie_id) => {},
    getGenres: () => {},
    createGenre: (genre) => {},
    updateGenre: (genre_id) => {},
    deleteGenre: (genre_id) => {}
}

export default MovieApi