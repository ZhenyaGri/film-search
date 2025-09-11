import { BrowserRouter, Route, Routes } from "react-router-dom";
import MoviesPage from "./pages/MoviesPage";
import MovieDetailPage from "./pages/MovieDetailPage";
import '@mantine/core/styles.css';
import { MantineProvider } from "@mantine/core";

export default function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MoviesPage />} />
          <Route path="/movie/id" element={<MovieDetailPage />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
    
  )
}
