// pages/MovieDetailPage.tsx
import { useParams } from 'react-router-dom';
import { Container, Title, Text, Button, Image, Grid} from '@mantine/core';
import posterImage from '../assets/img/film1.jpg';
import MoviesGrid from '../components/MoviesGrid';


export default function MovieDetailPage() {
  const { id } = useParams<{ id: string }>();
  const movie = {title: 'Сибирский цирюльник',
    year: '1998',
    description: 'Годы правления Александра III. «Сибирский цирюльник» - паровая самоходная лесопилка, заказ на производство которой пытается получить в российских государственных органах американский авантюрист Маккрэкен. Для своей поддержки он вызывает в Москву Джейн, чья задача - обворожить генерала Радлова и уговорить его дать согласие на разработку машины. По пути Джейн знакомится с юнкером Андреем Толстым.',
    image: posterImage,
    rating: '8.1',
    duration: '180 мин',
    country: 'Россия, Франция, Италия',
    director: 'Никита Михалков'}

  if (!movie) {
    return (
      <Container>
        <Title>Фильм не найден</Title>
      </Container>
    );
  }

  return (
    
    <Container size='85%' mt='md'>
       <Grid>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Image
            src={movie.image}
            alt={`Постер фильма "${movie.title}"`}
            mah={333}
            maw={222}
            radius="md"
            mb="xl"
            id={id}
            />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 8 }}>
          <Title order={1} mb="sm">{movie.title}</Title>
          <Text size="lg" color="dimmed" mb="md">{movie.year}</Text>

          <Text fw={500} mb="xs">Рейтинг: {movie.rating}</Text>
          <Text fw={500} mb="xs">Длительность: {movie.duration}</Text>
          <Text fw={500} mb="xs">Страна: {movie.country}</Text>
          <Text fw={500} mb="md">Режиссер: {movie.director}</Text>
        </Grid.Col>
       </Grid>
      <Container p={0}>
        <Title order={3} mb="sm">Описание</Title>
        <Text mb="xl">{movie.description}</Text>
      </Container>
      <Container>
        <Title order={3} mb="sm">Если вам понравился этот фильм</Title>
        {MoviesGrid(5)}
        <Button variant="filled" color="rgba(242, 12, 12, 1)" radius="md">{'>'}</Button>
      </Container>

    </Container>
  );
}