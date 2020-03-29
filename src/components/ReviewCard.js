import React from "react";

const ReviewCard = props => {
  const { review } = props;
  console.log(review);
  const user = review.user;
  return (
    <div className="review-container">
      <h4>
        {user.firstName} {user.lastName}
      </h4>
      <div className="review-info">Rating: {review.rating}/5</div>
      <p className="review-desc">{review.text}</p>
    </div>
  );
};

export default ReviewCard;
