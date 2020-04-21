import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import ReviewList from "./ReviewCard";
import { render } from "@testing-library/react";
import CompanyProfile from "./CompanyProfile";
import CarepkgHelp from "./CarepkgHelp";
import CarepkgNewsletter from "./CarepkgNewsletter";
import FooterBottom from "./FooterBottom";
import OrderCard from "./OrderCard";

// SMOOTH SCROLL FOR NAV (?)
const UserProfile = props => {
  const [profileBody, setProfileBody] = useState("cart");
  const { user } = props;
  const { reviews, orders } = user;
  let firstInitial;
  user.firstName
    ? (firstInitial = user.firstName.charAt(0))
    : (firstInitial = "");
  console.log(user.firstName);

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
      <div id="profile-top">
        <div id="profile-left">
          <div id="user-specs">
            <div id="user-initial">{firstInitial}</div>
            <div id="user-name-div">
              <h2 id="user-name">{user.firstName + " " + user.lastName}</h2>
              <h4>Sign out</h4>
            </div>
          </div>
          <nav id="profile-nav-menu">
            <div
              className="profile-nav-btn"
              to="/profile/orders"
              onClick={myOrders}
            >
              Order History
            </div>
            <div className="profile-nav-btn">Wishlist</div>
            <div className="profile-nav-btn" onClick={myCart}>
              Cart
            </div>
            <div
              className="profile-nav-btn"
              to="/profile/reviews"
              onClick={myReviews}
            >
              Reviews
            </div>
            <div className="profile-nav-btn">Account Settings</div>
          </nav>
        </div>
        <div id="profile-column-split"></div>
        <div id="profile-body">
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
                  return <OrderCard order={order} />;
                })
              : null}
          </div>
        </div>
      </div>
      <div id="landing-footer-main">
        <div className="landing-page-break"></div>
        <div id="info-footer">
          <CarepkgHelp />
          <CarepkgNewsletter />
        </div>
        <div className="landing-page-break"></div>
        <FooterBottom />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, null)(UserProfile);
