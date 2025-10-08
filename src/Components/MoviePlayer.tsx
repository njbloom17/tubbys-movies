import { useEffect } from "react";
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
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1N2I5YTFmZDZkNmMzNWRjNGRjN2RiYThiYzY2NjllMiIsIm5iZiI6MTc1OTM4MzkzNC43NjEsInN1YiI6IjY4ZGUxMTdlZWQ0OTZlODNmNTQwNWI0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Is1GufhjdB3hiy22pP4tvI---Dp8AdtiH-burqyhdRM",
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
