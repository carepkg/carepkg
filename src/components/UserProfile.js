import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import ReviewList from "./ReviewCard";

// SMOOTH SCROLL FOR NAV (?)
const UserProfile = props => {
  const { user } = props;
  const { reviews } = user;
  console.log(reviews);
  return (
    <div id="profile-page">
      <div id="profile-header">
        <div id="profile-user-info">
          <img
            id="profile-user-pic"
            src={user.profilePic}
            alt="profile picture"
          />
          <div id="profile-user-names">
            <h1 id="profile-user-fullname">
              {user.firstName + " " + user.lastName}
            </h1>
            <h3 id="profile-user-username">{user.userName}</h3>
          </div>
        </div>
      </div>
      <div id="profile-body">
        <nav id="profile-nav-menu">
          <NavLink to="/profile/cart">Your Cart</NavLink>
          <NavLink to="/profile/orders">Your Orders</NavLink>
          <NavLink to="/profile/reviews">Your Reviews</NavLink>
        </nav>
        <div id="profile-content">
          {reviews
            ? reviews.map(rev => {
                return (
                  <React.Fragment>
                    <div>{rev.product.name}</div>
                    <div>{rev.rating}</div>
                    <div>{rev.text}</div>
                  </React.Fragment>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, null)(UserProfile);
