import React from "react";

const UserReviewCard = props => {
  const { review } = props;
  return (
    <div className="user-review-card">
      <div className="review-card-header">
        <span>{review.product.name}</span>
        <span className="review-card-rating">
          {review.rating}
          <span className="review-star">&#x2605;</span>
        </span>
      </div>
      <div className="review-card-text">{review.text}</div>
    </div>
  );
};

export default UserReviewCard;
