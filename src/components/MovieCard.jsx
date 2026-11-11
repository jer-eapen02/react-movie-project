import FallbackImage from "../assets/fallback image.png";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleImageError = (event) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = FallbackImage;
  };

  return (
    <div className="movie">
      <figure className="movie__img--wrapper" onClick={() => navigate(`/${movie.imdbID}`)}>
        <img
          src={movie.Poster}
          onError={handleImageError}
          className="movie__img"
        />
      </figure>
      <h2 className="movie__title">{movie.Title}</h2>
      <p>{movie.Year}</p>
    </div>
  );
};

export default MovieCard;
