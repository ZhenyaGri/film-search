import { Card, Image, Text } from "@mantine/core";
import { ActorCardProps } from "./types";


export default function ActorCard({person}: ActorCardProps) {

    return (
        <Card
        key={person.id}
        styles={{
            root: {
            boxShadow: 'none'
            }
        }}
        >
            <Card.Section>
                <Image
                h={150}
                w={100}
                src={person.photo}
                alt={`актер ${person.name || person.enName}`}
                />
            </Card.Section>
            <Text fw={200} size='sm' mt="sm">
                {person.name || person.enName}
            </Text>
        </Card>
    )
}