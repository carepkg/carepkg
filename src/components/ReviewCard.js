import React from "react";
import { withRouter } from "react-router-dom";

const ReviewCard = props => {
  const { review, author } = props;
  let firstInitial;
  author.firstName
    ? (firstInitial = author.firstName.charAt(0))
    : (firstInitial = "");
  return (
    <div className="sp-review-card">
      <div className="sp-review-card-header">
        <h3>Rating</h3>
        <h3>Date</h3>
      </div>
      <h2>{review.title}</h2>
      <div className="sp-review-text-container">
        <h4 className="sp-review-familiarity">
          <span>Familiarity:</span> {review.familiarity}
        </h4>
        <p className="sp-review-desc">{review.text}</p>
      </div>
      <div className="sp-author-box">
        <div className="nav-user-initial">{firstInitial}</div>
        <span className="sp-review-author-name">
          {author.firstName} {author.lastName}
        </span>
      </div>
    </div>
  );
};

export default withRouter(ReviewCard);
