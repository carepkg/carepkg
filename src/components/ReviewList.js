import React from "react";
import ReviewCard from "./ReviewCard";
import StarRatings from "react-star-ratings";

const ReviewList = props => {
  const { reviews, product, avgRating } = props;
  let avg, flooredAvg, fullstars;
  avgRating && (avg = Number(avgRating));
  avg && (flooredAvg = Math.floor(avg));

  flooredAvg && (fullstars = Array(flooredAvg).fill(""));

  return (
    <div id="sp-reviews-page">
      <div id="sp-reviews-page-header">
        <span id="reviews-header-text">Reviews</span>
      </div>
      <div id="sp-review-stats">
        <StarRatings
          // ignoreInlineStyles={true}
          rating={avg}
          starRatedColor="black"
          numberOfStars={5}
        />
        <div></div>
      </div>
      <div id="sp-write-review-container">
        <h1>What did you think about this product?</h1>
        <button className="white-btn">Write a Review</button>
      </div>
      {reviews
        ? reviews.map(review => {
            return (
              <ReviewCard
                key={review.id}
                review={review}
                author={review.user}
                product={product}
              />
            );
          })
        : null}
    </div>
  );
};
export default ReviewList;
