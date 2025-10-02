export interface VideoPlayerProps {
    movieId: string;
}

export const VideoPlayer = ({ movieId }: VideoPlayerProps) => {
    const movieLink = "https://www.vidking.net/embed/movie/" + movieId;
    return (
        <iframe src={movieLink} width="100%" height="600"></iframe>

    )
}