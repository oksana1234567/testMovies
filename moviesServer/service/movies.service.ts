import { getMovies } from "../models/movies.model";
import Movie from "../shared/interface/movie.interface";

export const getMoviesService = async function(): Promise<Movie[]> {
    return getMovies();
};

export const getGenresService = async function() {
        const array = await getMovies();
    return [...new Set(array.map((movie: Movie) => movie.genre1 || movie.genre2))];
};

export const getMoviesByGenreService = async function(genre: string): Promise<Movie[]> {
        const results: Movie[] = await getMovies();
    return results.filter((movie: Movie) => movie.genre1 === genre || movie.genre2 === genre);
};