import { Container} from '@mantine/core';
import MoviesGrid from '../components/MoviesGrid';

export default function MoviesPage() {
  return (
    <Container>
      {MoviesGrid()}
    </Container>
  )
}