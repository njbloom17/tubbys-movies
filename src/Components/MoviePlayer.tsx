export interface MoviePlayerProps {
    movieId: string;
}

export const MoviePlayer = ({ movieId }: MoviePlayerProps) => {
    const movieLink = "https://www.vidking.net/embed/movie/" + movieId;
    return (
        <iframe src={movieLink} width="100%" height="600" sandbox="allow-modals allow-scripts allow-top-navigation-by-user-activation allow-same-origin allow-orientation-lock" frameborder="0" allowfullscreen />
    )
}