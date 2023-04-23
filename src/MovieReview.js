import React from "react";

const MovieReview = ({ title, review, image }) => {
  return (
    <div className="review-card">
      <img src={image} alt={title} />
      <div className="review-details">
        <h2>{title}</h2>
        <p>{review}</p>
      </div>
    </div>
  );
};

export default MovieReview;
