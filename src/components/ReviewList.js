import React, { useState, useEffect } from "react";
import ReviewCard from "./ReviewCard";
import StarRatings from "react-star-ratings";
import AddReview from "./AddReview";
import { connect } from "react-redux";
import { getReviewsByProdThunk } from "../store/reviews";
import { getAuthorThunk } from "../store/author";

const ReviewList = props => {
  const { reviews, product, productId, avgRating, fetchReviews } = props;
  console.log(reviews);
  const [writing, isWriting] = useState(false);
  useEffect(() => {
    fetchReviews(productId);
  }, []);

  let avg, flooredAvg, fullstars;
  avgRating && (avg = Number(avgRating));
  avg && (flooredAvg = Math.floor(avg));
  flooredAvg && (fullstars = Array(flooredAvg).fill(""));

  const reviewSummary = Array(5).fill(0);
  if (reviewSummary && reviews) {
    for (let i = 0; i < reviews.length; i++) {
      reviewSummary[reviews[i].rating - 1]++;
    }
  }
  return (
    <div id="sp-reviews-page">
      <div id="sp-reviews-page-header">
        <span id="reviews-header-text">Reviews</span>
      </div>
      <div id="sp-review-stats">
        <div className="sp-overall-rating">
          <h3>Overall Rating</h3>
          <h5>
            {avg} based on {reviews && reviews.length} ratings
          </h5>
          <StarRatings
            rating={avg}
            starRatedColor="black"
            numberOfStars={5}
            starDimension={"32px"}
            starEmptyColor={"rgb(150, 150, 150)"}
          />
        </div>
        <div className="sp-review-summary">
          <h3>Review Summary</h3>
          {reviewSummary &&
            reviews &&
            reviewSummary.reverse().map((stat, idx) => {
              return (
                <div className="sp-review-statline">
                  <span>{5 - idx} stars</span>
                  <div
                    style={{
                      backgroundColor: "black",
                      width: `${(reviewSummary[idx] / reviews.length) * 300}px`
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "rgb(150, 150, 150)",
                      width: `${((reviews.length - reviewSummary[idx]) /
                        reviews.length) *
                        300}px`
                    }}
                  ></div>
                  <span>{reviewSummary[idx]}</span>
                </div>
              );
            })}
        </div>
      </div>
      <div id="sp-write-review-container">
        <h1>What did you think about this product?</h1>
        <button className="white-btn" onClick={() => isWriting(true)}>
          Write a Review
        </button>
        {writing && <AddReview productId={productId} />}
      </div>
      {reviews
        ? reviews.map(review => {
            return (
              <ReviewCard key={review.id} review={review} product={product} />
            );
          })
        : null}
    </div>
  );
};

const mapState = state => ({
  reviews: state.reviews
});
const mapDispatch = dispatch => ({
  fetchReviews: productId => dispatch(getReviewsByProdThunk(productId))
});
export default connect(mapState, mapDispatch)(ReviewList);
