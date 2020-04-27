import React from "react";
import ReviewCard from "./ReviewCard";

const ReviewList = props => {
  const { reviews, product, onProfilePage } = props;
  return (
    <div id="single-product-review-list">
      <div id="review-list-header">
        <span id="review-list-header-text">Reviews</span>
      </div>
      {reviews
        ? reviews.map(review => {
            return (
              <ReviewCard
                key={review.id}
                review={review}
                author={review.user}
                product={product}
                onProfilePage={onProfilePage}
              />
            );
          })
        : null}
    </div>
  );
};
export default ReviewList;
