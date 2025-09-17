// pages/MovieDetailPage.tsx
import { useParams } from 'react-router-dom';
import { Container, Title, Text, Button, Image, Grid, LoadingOverlay} from '@mantine/core';
import MoviesGrid from '../components/MoviesGrid';
import { useEffect, useState } from 'react';
import { kinopoiskApi } from '../api/kinopoiskApi';
import { MovieDetails } from '../api/types';


export default function MovieDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      fetchMovieDetails(id);
    }
  }, [id]);

  const fetchMovieDetails = async (movieId: string) => {
    try {
      setLoading(true);
      const movieData = await kinopoiskApi.getMovieById(movieId);
      setMovie(movieData);
    }
    catch(err) {
      setError('Ошибка при загрузке данных фильма');
      console.error('Ошибка загрузки фильма:', err);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <Container>
        <LoadingOverlay visible={loading} />
      </Container>
    );
  }

  if (error || !movie) {
    return (
      <Container>
        <Title>Фильм не найден</Title>
        <Text color="red">{error}</Text>
      </Container>
    );
  }

  return (
    
    <Container size='85%' mt='md'>
       <Grid>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Image
            src={movie.poster.previewUrl || movie.poster.url}
            alt={`Постер фильма "${movie.name}"`}
            mah={333}
            maw={222}
            radius="md"
            mb="xl"
            id={id}
            />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 8 }}>
          <Title order={1} mb="sm">{movie.name}</Title>
          <Text size="lg" color="dimmed" mb="md">{movie.year}</Text>

          <Text fw={500} mb="xs">Рейтинг: {movie.rating.kp}</Text>
          <Text fw={500} mb="xs">Страна: {movie.countries.map((movie)=> movie.name).join(', ')}</Text>
          <Text fw={500} mb="md">Актеры: {movie.persons.map((movie)=> movie.name || movie.enName).join(', ')}</Text>
        </Grid.Col>
       </Grid>
      <Container p={0}>
        <Title order={3} mb="sm">Описание</Title>
        <Text mb="xl">{movie.description}</Text>
      </Container>
      <Container p={0}>
        <Title order={3} mb="sm">Если вам понравился этот фильм</Title>

        <MoviesGrid num={5} />

        <Button variant="filled" color="rgba(242, 12, 12, 1)" radius="md">{'>'}</Button>
      </Container>

    </Container>
  );
}