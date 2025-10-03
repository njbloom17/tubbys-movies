import React from "react";
import { Movie } from "../types/movie";

export interface MovieCardProps {
  movie: Movie;
  onClick: () => void;
}

export const MovieCard = ({ movie, onClick }: MovieCardProps) => {
  const baseUrl = "https://image.tmdb.org/t/p/";
  const size = "w342/";
  return (
    <button onClick={onClick}>
      <div>{movie.title}</div>
      <img src={baseUrl + size + movie.backdrop_path} />
    </button>
  );
};
