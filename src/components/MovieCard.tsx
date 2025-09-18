import { useNavigate } from "react-router-dom";
import { Card, Image, Text } from "@mantine/core";
import { MovieCardProps } from "./types";
import { useHover } from "@mantine/hooks";

export default function MovieCard({movie}: MovieCardProps) {
    const navigate = useNavigate();
    const { hovered, ref } = useHover();

    const handleCardClick = () => {
        navigate(`/movie/${movie.id}`);
    };

    return (
        <Card
        ref={ref}
        key={movie.id}
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
            <Card.Section style={{ display: 'flex', justifyContent: 'center' }}>
                <Image
                h={225}
                w={150}
                src={movie.poster.previewUrl || movie.poster.url}
                alt={`фильм ${movie.alternativeName || movie.name}`}
                />
            </Card.Section>
            <Text fw={500} size="md" mt="xs" ta={'center'}
            style={{
                color: hovered ? "rgba(242, 12, 12, 1)" : "rgba(0, 0, 0, 1)",
            }}>
                {movie.name || movie.alternativeName}
            </Text>
            <Text fw={hovered ? 500: 200 } size="md" mt="xs" ta={'center'}>
                {movie.year}
            </Text>
        </Card>
    )
}