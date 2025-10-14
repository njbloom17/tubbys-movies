import { TMDB_TOKEN } from "../App";
import { type Movie } from "../types/movie";
import { useState, useEffect } from "react";

export interface MoviesResult {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export const useTopRatedMovies = (): Movie[] => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchTopRated = async (): Promise<MoviesResult> => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${TMDB_TOKEN}`,
        },
      };

      const res = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        options
      );

      if (!res.ok) throw new Error(`Error: ${res.status} ${res.statusText}`);
      return res.json();
    };
    fetchTopRated().then((res) => setMovies(res.results));
  }, []);
  return movies;
};

export const useSearchMovies = (movieQuery: string): Movie[] => {
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    const fetchMovies = async (movieQuery: string): Promise<MoviesResult> => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${TMDB_TOKEN}`,
        },
      };

      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movieQuery}&include_adult=false&language=en-US&page=1`,
        options
      );
      if (!res.ok) throw new Error(`Error: ${res.status} ${res.statusText}`);
      return res.json();
    };
    fetchMovies(movieQuery).then((res) => setMovies(res.results));
  }, [movieQuery]);

  return movies;
};
