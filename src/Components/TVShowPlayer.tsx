export interface TVShowPlayerProps {
  showId: string;
  season: string;
  episode: string;
}

export const TVShowPlayer = ({
  showId,
  season,
  episode,
}: TVShowPlayerProps) => {
  const movieLink =
    "https://www.vidking.net/embed/tv/" +
    showId +
    "/" +
    season +
    "/" +
    episode +
    "?episodeSelector=true";
  return (
    <iframe
      src={movieLink}
      width="100%"
      height="600"
      sandbox="allow-modals allow-scripts allow-top-navigation-by-user-activation allow-same-origin allow-orientation-lock"
      frameborder="0"
      allowfullscreen
    />
  );
};
