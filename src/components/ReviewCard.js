import React from "react";
import { withRouter } from "react-router-dom";

const ReviewCard = props => {
  const { review, onProfilePage, author } = props;
  return (
    <div className="review-container">
      {/* {onProfilePage ? (
        "hi"
      ) : (
         */}
      <h4 className="review-author">
        {author.firstName} {author.lastName}
      </h4>
      {/* )} */}
      <div className="review-info">Rating: {review.rating}/5</div>
      <p className="review-desc">{review.text}</p>
    </div>
  );
};

export default withRouter(ReviewCard);
