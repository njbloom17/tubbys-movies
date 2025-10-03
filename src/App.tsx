import React, { useState, useRef } from "react";
import "./App.css";
import { MoviePlayer } from "./Components/MoviePlayer";
import { TVShowPlayer } from "./Components/TVShowPlayer";
import { useTopRatedMovies } from "./hooks/useMovies";
import { MovieCard } from "./Components/MovieCard";
import { Movie } from "./types/movie";

export const App = () => {
  const [movie, setMovie] = useState(1);
  const movies = useTopRatedMovies();
  return (
    <>
      <div>Welcome to Tubby's Movies!</div>
      <br />
      {movies.map((mov) => (
        <MovieCard movie={mov} onClick={() => setMovie(mov.id)} />
      ))}
      <div>
        <MoviePlayer movieId={movie} />
      </div>
    </>
  );
};

export default App;
