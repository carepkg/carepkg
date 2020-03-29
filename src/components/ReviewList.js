import React from "react";
import ReviewCard from "./ReviewCard";

const ReviewList = props => {
  const { reviews } = props;
  return (
    <div id="single-product-review-list">
      <div id="review-list-header">
        <span id="review-list-header-text">Reviews</span>
      </div>
      {reviews
        ? reviews.map(review => {
            console.log(review);
            return (
              <ReviewCard key={review.id} review={review} user={review.user} />
            );
          })
        : null}
    </div>
  );
};
export default ReviewList;
