import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import FallbackImage from "../assets/fallback image.png";

const MovieDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchDetails(imdbId) {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=abb25aee&i=${imdbId || id}`,
      );
      setDetails(data);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      fetchDetails();
      window.scrollTo(0, 0);
    }, 1000);
  }, [id]);

  const handleImageError = (event) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = FallbackImage;
  };

  return (
    <div className="details__container">
      <button className="btn--back" onClick={() => navigate("/")}>
        ← Back
      </button>
      <div className="details__container--content">
        {loading ? (
          <>
            <div className="movie__card">
              <div className="movie__poster--wrapper">
                <div className="card__poster--skeleton"></div>
              </div>
              <div className="movie__card--info">
                <div className="card__title--skeleton"></div>
                <div className="card__detail--skeleton"></div>
                <div className="card__detail--skeleton"></div>
                <div className="card__detail--skeleton"></div>
                <div className="card__detail--skeleton"></div>
              </div>
            </div>
            <div className="movie__details">
              <div className="movie__detail">
                <div className="detail__heading--skeleton"></div>
                <div className="detail__description--skeleton"></div>
              </div>
              <div className="movie__detail">
                <div className="detail__heading--skeleton"></div>
                <div className="detail__description--skeleton"></div>
              </div>
              <div className="movie__detail">
                <div className="detail__heading--skeleton"></div>
                <div className="detail__description--skeleton"></div>
              </div>
              <div className="movie__detail">
                <div className="detail__heading--skeleton"></div>
                <div className="detail__description--skeleton"></div>
              </div>
              <div className="movie__detail">
                <div className="detail__heading--skeleton"></div>
                <div className="detail__description--skeleton"></div>
              </div>
              <div className="movie__detail">
                <div className="detail__heading--skeleton"></div>
                <div className="detail__description--skeleton"></div>
              </div>
              <div className="movie__detail">
                <div className="detail__heading--skeleton"></div>
                <div className="detail__description--skeleton"></div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="movie__card">
              <figure className="movie__poster--wrapper">
                <img
                  src={details.Poster}
                  onError={handleImageError}
                  alt="Movie Poster"
                />
              </figure>
              <div className="movie__card--info">
                <h2>{details.Title}</h2>
                <p>
                  <strong>Year:</strong> {details.Year}
                </p>
                <p>
                  <strong>Rated:</strong> {details.Rated}
                </p>
                <p>
                  <strong>Released:</strong> {details.Released}
                </p>
                <p>
                  <strong>Runtime:</strong> {details.Runtime}
                </p>
              </div>
            </div>
            <div className="movie__details">
              <div className="movie__detail">
                <h3>Genre</h3>
                <p>{details.Genre}</p>
              </div>
              <div className="movie__detail">
                <h3>Director</h3>
                <p>{details.Director}</p>
              </div>
              <div className="movie__detail">
                <h3>Writer</h3>
                <p>{details.Writer}</p>
              </div>
              <div className="movie__detail">
                <h3>Actors</h3>
                <p>{details.Actors}</p>
              </div>
              <div className="movie__detail">
                <h3>Plot</h3>
                <p className="movie__detail--plot">{details.Plot}</p>
              </div>
              <div className="movie__detail">
                <h3>Language</h3>
                <p>{details.Language}</p>
              </div>
              <div className="movie__detail">
                <h3>Awards</h3>
                <p>{details.Awards}</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;
