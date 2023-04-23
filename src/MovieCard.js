import React from "react";

function MovieCard({ review }) {
  const { id, name, image, review: shortReview } = review;

  return (
    <div className="movie-card">
      <img src={image} height="200px" width="200px" alt={name} />
      <div className="movie-info">
        <h4>{name}</h4>
        <p>{shortReview}</p>
        <a href={`/review/${id}`}>Read more</a>
      </div>
    </div>
  );
}

export default MovieCard;
