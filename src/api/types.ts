// services/api/types.ts
export interface ApiResponse<T> {
  docs: T[];
  total: number;
  limit: number;
  page: number;
  pages: number;
}

export interface MovieSearchParams {
  page?: number;
  limit?: number;
  year?: string;
  'genres.name'?: string;
  'rating.kp'?: string;
  'countries.name'?: string;
  query?: string;
  selectFields?: string[];
  notNullFields?: string[];
}

export interface Rating {
  kp: number;
  imdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: number;
}

export interface Poster {
  url: string;
  previewUrl: string;
}

export interface Movie {
  id: number;
  name: string | null;
  alternativeName: string;
  year: number;
  description: string;
  rating: Rating;
  poster: Poster;
  genres: Array<{ name: string }>;
  countries: Array<{ name: string }>;
}

export interface MovieDetails extends Movie {
  movieLength: number;
  ageRating: number;
  videos: {
    trailers: Array<{
      url: string;
      name: string;
      site: string;
    }>;
  };
  persons: Array<{
    id: number;
    name: string;
    photo: string;
    profession: string;
  }>;
  similarMovies: Movie[];
  sequelsAndPrequels: Movie[];
}