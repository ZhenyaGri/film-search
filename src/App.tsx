import { BrowserRouter, Route, Routes } from "react-router-dom";
import MoviesPage from "./pages/MoviesPage";
import MovieDetailPage from "./pages/MovieDetailPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MoviesPage />} />
        <Route path="/movie/id" element={<MovieDetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}
