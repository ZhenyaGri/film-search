import { ApiResponse, Movie, MovieSearchParams } from "./types";

const BASE_URL = import.meta.env.VITE_API_URL;
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

class KinopoiskApiClient {
  private async request<T>(endpoint: string, params: MovieSearchParams = {}): Promise<T> {
    const url = new URL(`${BASE_URL}${endpoint}`);
    
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        if ((key === 'selectFields' || 'notNullFields') && Array.isArray(value)) {
            value.forEach(field => {
                url.searchParams.append(key, field);
            });
        } else {
            url.searchParams.append(key, String(value));
        }
      }
    });

    const response = await fetch(url.toString(), {
      headers: {
        'X-API-KEY': API_TOKEN,
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    return response.json();
    }

    async getMovies(params: MovieSearchParams = {}): Promise<ApiResponse<Movie[]>> {
        return this.request('/v1.4/movie', params);

    }

    /** 
    async getMovieById(id: string): Promise<MovieDetails> {
        return this.request(`/v1.4/movie/${id}`);
    }
    */

    async searchMovies(query: string, params: MovieSearchParams = {}): Promise<ApiResponse<Movie[]>> {
        return this.request('/v1.4/movie/search', { ...params, query });
    }
}

export const kinopoiskApi = new KinopoiskApiClient();