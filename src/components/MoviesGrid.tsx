import { Card, Grid, Image, LoadingOverlay, Text } from "@mantine/core";
import posterImage from '../assets/img/film1.jpg';
import { useEffect, useState } from "react";
import { Movie } from "../api/types";
import { handlerApi } from "../api/handlerApi";

export default function MoviesGrid(num: number = 10){
    const movies1 = Array(num).fill(0).map((_, index) => ({
        id: index + 1,
        title: `Фильм ${index + 1}`,
        year: 2020 + index,
        image: posterImage
    }));

    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const response = await handlerApi.getMovies({
            page: 1,
            limit: 10,
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
  }, []);

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
                    <Card
                        key={movie.id}
                        shadow="sm"
                        padding="md"
                        component="a"
                        target="_blank"
                        >
                        <Card.Section>
                            <Image
                            src={movie.poster.previewUrl || movies1[0].image}
                            h={225}
                            alt="No way!"
                            />
                        </Card.Section>

                        <Text fw={500} size="lg" mt="md">
                            {movie.name || movie.alternativeName}
                        </Text>

                        <Text fw={200} size="lg" mt="md">
                            {movie.year}
                        </Text>
                    </Card>
                </Grid.Col>
            ))}
        </Grid>
    );
}