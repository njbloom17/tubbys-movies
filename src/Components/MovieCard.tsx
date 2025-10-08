import React from "react";
import { type Movie } from "../types/movie";

export interface MovieCardProps {
  movie: Movie;
  onClick: () => void;
}

export const MovieCard = ({ movie, onClick }: MovieCardProps) => {
  const baseUrl = "https://image.tmdb.org/t/p/";
  const size = "w185/";
  const img = movie.backdrop_path;
  return (
    <button onClick={onClick}>
      <div>{movie.title}</div>
      {img && <img src={baseUrl + size + img} />}
    </button>
  );
};
