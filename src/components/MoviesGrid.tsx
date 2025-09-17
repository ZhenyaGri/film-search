import { Grid, LoadingOverlay, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import { Movie } from "../api/types";
import { handlerApi } from "../api/handlerApi";
import MovieCard from "./MovieCard";
import { MoviesGridProps } from "./types";

export default function MoviesGrid({num = 10}: MoviesGridProps){
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const response = await handlerApi.getMovies({
            page: 1,
            limit: num,
            selectFields: ['name','poster', 'alternativeName','year','id'],
            notNullFields: ['poster.url']
        });
        setMovies(response.docs.flat());
      } catch (err) {
        setError(err instanceof Error ? err.message : "Ошибка загрузки");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [num]);

  if (loading) {
    return <LoadingOverlay visible />;
  }

  if (error) {
    return <Text color="red">Ошибка: {error}</Text>;
  }
  
    return (
        <Grid gutter="lg" mt="md" mb="md">
            {movies.map((movie) => (
                <Grid.Col key={movie.id} span={{ base: 6, xs: 4, md: 3, lg: 2 }}>
                    <MovieCard movie={movie}></MovieCard>
                </Grid.Col>
            ))}
        </Grid>
    );
}