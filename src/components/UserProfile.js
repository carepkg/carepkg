import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import ReviewList from "./ReviewCard";
import { render } from "@testing-library/react";
import CompanyProfile from "./CompanyProfile";

// SMOOTH SCROLL FOR NAV (?)
const UserProfile = props => {
  const [profileBody, setProfileBody] = useState("cart");
  const { user } = props;
  const { reviews, orders } = user;
  console.log(user);

  const myCart = () => {
    setProfileBody("cart");
  };
  const myOrders = () => {
    setProfileBody("orders");
  };
  const myReviews = () => {
    setProfileBody("reviews");
  };

  return user.type === "company" ? (
    <CompanyProfile />
  ) : (
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
          <button onClick={myCart}>Your Cart</button>
          <button to="/profile/orders" onClick={myOrders}>
            Your Orders
          </button>
          <button to="/profile/reviews" onClick={myReviews}>
            Your Reviews
          </button>
        </nav>
        <div id="profile-content">
          {reviews && profileBody === "reviews"
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
          {orders && profileBody === "orders"
            ? orders.map(order => {
                return (
                  <React.Fragment>
                    <div>{order.id}</div>
                    {order.lineItems.map(lineItem => (
                      <div>
                        <h3>{lineItem.product.name}</h3>
                        <img
                          style={{ width: "50px", height: "50px" }}
                          src={lineItem.product.image}
                          alt="product in your order"
                        />
                      </div>
                    ))}
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
