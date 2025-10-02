import React, { useState, useRef } from "react";
import "./App.css";
import { MoviePlayer } from "./Components/MoviePlayer";
import { TVShowPlayer } from "./Components/TVShowPlayer";

export type Movie = {
  id: number;
  title: string;
};

export const App = () => {
  const [watch, setWatch] = useState("movie");
  return (
    <>
      Welcome to Tubby's Movies!
      <div>
        <button onClick={() => setWatch("movie")}>Watch a movie!</button>
        <div></div>
        <button onClick={() => setWatch("show")}>Watch a TV Show!</button>
      </div>
      <div>
        {watch === "movie" && <MoviePlayer movieId="10315" />}
        {watch === "show" && (
          <TVShowPlayer showId="1668" season="2" episode="4" />
        )}
      </div>
    </>
  );
};

export default App;
