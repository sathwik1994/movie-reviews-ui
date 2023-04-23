import React from "react";

const ReviewDetails = ({ review, onBackClick }) => {
  return (
    <div className="review-details">
      <img src={review.image} alt={review.title} />
      <h2>{review.title}</h2>
      <p>{review.review}</p>
      <button onClick={onBackClick}>Back to List</button>
    </div>
  );
};

export default ReviewDetails;
