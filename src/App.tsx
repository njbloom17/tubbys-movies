import React, { useState } from "react";
import * as dotenv from "dotenv";
import TextField from "@mui/material/TextField";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import "./App.css";
import { MoviePlayer } from "./Components/MoviePlayer";
import { TVShowPlayer } from "./Components/TVShowPlayer";
import { useSearchMovies, useTopRatedMovies } from "./hooks/useMovies";
import { MovieCard } from "./Components/MovieCard";
import { type Movie } from "./types/movie.ts";

export const TMDB_TOKEN = import.meta.env.VITE_TMDB_READ_ACCESS_TOKEN;

export const App = () => {
  const [userPass, setUserPass] = useState("");
  const [selectedTab, setSelectedTab] = useState(0);
  const [text, setText] = useState("");
  const [key, setKey] = useState("");
  const [option, setOption] = useState("");
  const [movie, setMovie] = useState();
  const searchMovies = useSearchMovies(text);
  const topRated = useTopRatedMovies();
  const movies = text ? searchMovies : topRated;

  return (
    <div style={{ position: "absolute", top: "24px", left: "64px" }}>
      <div className="title">
        Welcome to Tubby's {selectedTab === 0 ? "Movies" : "Sports"}!
      </div>
      <Tabs
        textColor="secondary"
        indicatorColor="secondary"
        value={selectedTab}
        onChange={(e, val) => setSelectedTab(val)}
      >
        <Tab label={"Movies"} />
        <Tab label={"Sports"} />
      </Tabs>
      <div role="tabpanel" hidden={selectedTab !== 0}>
        <div className="text-fields">
          <TextField
            color="secondary"
            label="Enter Embed Url"
            variant="outlined"
            onChange={(e) => setKey(e.target.value)}
          />
          <TextField
            color="secondary"
            label="Extra Url Options"
            variant="outlined"
            onChange={(e) => setOption(e.target.value)}
          />
          <TextField
            color="secondary"
            label="Movie Search"
            variant="outlined"
            onChange={(e) => {
              setMovie();
              setText(e.target.value);
            }}
          />
        </div>
        {!text && (
          <div style={{ padding: "8px" }}>Tubby's Favorites at the moment</div>
        )}

        <div className="movie-grid">
          {!movie || !key ? (
            movies.map((mov: Movie) => (
              <MovieCard movie={mov} onClick={() => setMovie(mov.id)} />
            ))
          ) : (
            <MoviePlayer option={option} link={key} movieId={movie} />
          )}
        </div>
      </div>
      <div role="tabpanel" hidden={selectedTab !== 1}>
        <div height="1200" width="1200" style={{ top: "auto", left: "auto" }}>
          Coming Soon!
        </div>
      </div>
    </div>
  );
};

export default App;
