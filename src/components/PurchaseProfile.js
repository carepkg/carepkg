import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const PurchaseProfile = props => {
  const pps = props.purchaseProfiles;

  return (
    <div id="pp-page">
      <h1>Select shipping address</h1>
      <div id="review-your-order"></div>

      {pps && pps.length ? (
        <div id="purch-profile-container">
          {pps.map((pp, idx) => {
            console.log(pp);
            return (
              <div className="pp-card">
                <h2 className="pp-address-no">Address {idx + 1}</h2>
                <div className="pp-ship-info">{pp.email}</div>
                <div className="pp-ship-info">{pp.shipToAddress}</div>
                <div className="pp-ship-info">{pp.shipToCity}</div>
                <div className="pp-ship-info">{pp.shipToState}</div>
                <div className="pp-ship-info">{pp.shipToPostalCode}</div>
              </div>
            );
          })}
        </div>
      ) : null}
      <NavLink to="/cart/checkout">
        <button id="checkout-btn">Checkout</button>
      </NavLink>
    </div>
  );
};

const mapState = state => ({
  purchaseProfiles: state.user.purchaseProfiles
});

const mapDispatch = dispatch => ({});

export default connect(mapState, mapDispatch)(PurchaseProfile);
