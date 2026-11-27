
import { getMovieCredits } from "../../servies/appi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchCast() {
      const data = await getMovieCredits(movieId);
      setCast(data);
    }

    fetchCast();
  }, [movieId]);

  return (
    <div className="cast">
      <h2>Cast</h2>

      {cast.length === 0 ? (
        <p className="cast-empty">No cast information available.</p>
      ) : (
        <ul className="cast-list">
          {cast.map((actor) => (
            <li className="cast-card" key={actor.id}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w342${actor.profile_path}`
                    : "/no-poster.jpg"
                }
                alt={actor.name}
              />

              <div className="cast-info">
                <h3>{actor.name}</h3>
                <p>{actor.character || "Unknown character"}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cast;
