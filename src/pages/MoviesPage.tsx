import { Autocomplete, Button, Container, Grid, Pagination} from '@mantine/core';
import MoviesGrid from '../components/MoviesGrid';

export default function MoviesPage() {
  return (
    <Container mt='md' w ='100%' >
      <Grid p="xs" justify="space-between">
        <Autocomplete w='75%'
          placeholder="Введите название фильма"
          data={['React', 'Angular', 'Vue', 'Svelte']}
        />
        <Button variant="filled" color="rgba(242, 12, 12, 1)" radius="md">{'Фильтры'}</Button>
        <Button variant="filled" color="rgba(242, 12, 12, 1)" radius="md">{'Поиск'}</Button>
      </Grid>

      <MoviesGrid num={10} />
      
      <Grid justify="center" mb='xl'>
        <Pagination total={10}/>
      </Grid>
    </Container>
  )
}