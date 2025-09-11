import { Card, Grid, Image, Text } from "@mantine/core";
import posterImage from '../assets/img/film1.jpg';

export default function MoviesGrid(num: number = 10){
    const movies = Array(num).fill(0).map((_, index) => ({
        id: index + 1,
        title: `Фильм ${index + 1}`,
        year: 2020 + index,
        image: posterImage
    }));
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
                            src={movie.image}
                            h={160}
                            alt="No way!"
                            />
                        </Card.Section>

                        <Text fw={500} size="lg" mt="md">
                            {movie.title}
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