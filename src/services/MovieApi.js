const baseUrl = process.env.API_BASE_URL || 'localhost:3001'

const MovieAPI = {
    getMovies: () => {
        const path = '/api/v1/movies';
        const url = `${baseUrl}${path}`;
        const fetchMovies = await fetch(url);
        const data = await fetchMovies.json();
        const movies = data.results
        return movies
    },
    createMovie: (movie) => {

    },
    getMovie: (movie_id) => {
        const path = '/api/v1/movies';
        const url = `${baseUrl}${path}/${movie_id}`;
        const fetchMovies = await fetch(url);
        const data = await fetchMovies.json();
        const movie = data.results
        return movie
    },
    updateMovie: (movie_id) => {},
    deleteMovie: (movie_id) => {},
    getGenres: () => {},
    createGenre: (genre) => {},
    updateGenre: (genre_id) => {},
    deleteGenre: (genre_id) => {}
}