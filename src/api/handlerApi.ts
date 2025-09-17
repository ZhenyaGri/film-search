import { kinopoiskApi } from "./kinopoiskApi";
import { ApiResponse, Movie, MovieSearchParams } from "./types";

export const handlerApi = {
    getMovies: (params: MovieSearchParams = {}): Promise<ApiResponse<Movie[]>> => {
        return kinopoiskApi.getMovies(params);
    },

    searchMovies: (query: string, params: MovieSearchParams = {}): Promise<ApiResponse<Movie[]>> => {
        return kinopoiskApi.searchMovies(query, params);
    },

    getMoviesById: (id: string): Promise<Movie> => {
        return kinopoiskApi.getMovieById(id);
    },

}