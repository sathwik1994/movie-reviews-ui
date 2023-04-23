// Review.js
import React from "react";
import { Link } from "react-router-dom";
import "./review.css";

function Review({ review }) {
  const { id, name, image, review: fullReview } = review;

  return (
    <div style={{marginTop:"10px"}} className="review">
      <img style={{marginLeft:"10px", marginRight:"10px"}} height="400px" src={image} alt={name} />
      <div className="review-text">
        <h2>{name}</h2>
        <p>{fullReview}</p>
        <Link to={`/review/${id}`}>Read more</Link>
      </div>
    </div>
  );
}

export default Review;
