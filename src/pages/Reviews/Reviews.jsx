
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../servies/appi";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchReviews() {
      const data = await getMovieReviews(movieId);
      setReviews(data);
    }

    fetchReviews();
  }, [movieId]);

  return (
    <div className="reviews">
      <h2>Reviews</h2>

      {reviews.length === 0 ? (
        <p className="empty">No reviews available for this movie.</p>
      ) : (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Reviews;
