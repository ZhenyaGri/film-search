import { Movie, Person } from "../api/types";

export interface MovieCardProps {
  movie: Movie;
}

export interface MoviesGridProps {
  num?: number;
}

export interface ActorCardProps {
  person: Person;
}