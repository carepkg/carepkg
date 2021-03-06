import React from "react";
import { withRouter } from "react-router-dom";

const ReviewCard = props => {
  const { review } = props;
  const author = review.user;
  const rating = review.rating;
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const unformattedDate = review.createdAt.split("-");
  const monthAsNum = Number(unformattedDate[1]);
  const dayAsNum = Number(unformattedDate[2].slice(1, 2));
  const formattedDate = `${months[monthAsNum - 1]} ${dayAsNum}, ${
    unformattedDate[0]
  }`;
  let firstInitial;
  author.firstName
    ? (firstInitial = author.firstName.charAt(0))
    : (firstInitial = "");
  return (
    <div className="sp-review-card">
      <div className="sp-review-card-header">
        <div className="sp-review-card-rating">
          {Array(rating)
            .fill("")
            .map(star => (
              <span>&#9733;</span>
            ))}
          {Array(5 - rating)
            .fill("")
            .map(star => (
              <span>&#9734;</span>
            ))}
        </div>
        <h3>{formattedDate}</h3>
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
