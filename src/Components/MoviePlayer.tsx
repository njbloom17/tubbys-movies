import { useEffect } from "react";
import { TMDB_TOKEN } from "../App";
export interface MoviePlayerProps {
  movieId: string;
  link: string;
  option?: string;
}

const fetchLinkResponse = async (link: string) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TMDB_TOKEN}`,
    },
  };

  const res = await fetch(link, options);

  if (!res.ok) throw new Error(`Error: ${res.status} ${res.statusText}`);
  return res.json();
};

export const MoviePlayer = ({ option, link, movieId }: MoviePlayerProps) => {
  const fullLink = link + movieId + "/";
  const isTmdbApi = fullLink.includes("api.themoviedb");

  return (
    <div>
      {isTmdbApi ? (
        <div>{fetchLinkResponse(fullLink + option)}</div>
      ) : (
        <iframe
          src={fullLink}
          width="1200"
          height="1200"
          sandbox="allow-modals allow-scripts allow-top-navigation-by-user-activation allow-same-origin allow-orientation-lock"
          frameborder="0"
          allow="fullscreen"
        />
      )}
    </div>
  );
};
