
import { useEffect, useState } from "react";
import { useLocation, useParams, Link, NavLink, Outlet } from "react-router-dom";
import { getMovieDetailes } from "../../servies/appi";

function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchMovie() {
      const data = await getMovieDetailes(movieId);
      setMovie(data);
    }

    fetchMovie();
  }, [movieId]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div className="movie-details">
      <Link className="go-back" to={location.state || "/"}>
        ← Go back
      </Link>

      <div className="movie-info">
        <img
          className="movie-img"
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "/no-poster.jpg"
          }
          alt={movie.title}
        />

        <div className="movie-text">
          <h1>{movie.title || movie.name}</h1>

          <p className="movie-rating">
            ⭐ User score: {movie.vote_average?.toFixed(1)}/10
          </p>

          <h2>Overview</h2>
          <p>{movie.overview || "No description available."}</p>

          <h3>Genres</h3>
          <ul className="ul-ul">
            {movie.genres?.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="movie-extra">
        <h3>Additional information</h3>

        <div className="movie-tabs">
          <NavLink to="cast">Cast</NavLink>
          <NavLink to="reviews">Reviews</NavLink>
        </div>

        <Outlet />
      </div>
    </div>
  );
}

export default MovieDetails;
