import { useNavigate } from "react-router-dom";
import { Card, Image, Text } from "@mantine/core";
import { MovieCardProps } from "./types";

export default function MovieCard({movie}: MovieCardProps) {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/movie/${movie.id}`);
    };

    return (
        <Card
        key={movie.id}
        shadow="sm"
        component="a"
        target="_blank"
        onClick={handleCardClick}
        styles={{
            root: {
            boxShadow: 'none',
            cursor: 'pointer'
            }
        }}
        >
            <Card.Section>
                <Image
                h={225}
                mah={225}
                src={movie.poster.previewUrl || movie.poster.url}
                alt={`фильм ${movie.alternativeName || movie.name}`}
                />
            </Card.Section>
            <Text fw={500} size="md" mt="md">
                {movie.name || movie.alternativeName}
            </Text>
            <Text fw={200} size="md" mt="md">
                {movie.year}
            </Text>
        </Card>
    )

}