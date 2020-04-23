import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const PurchaseProfile = props => {
  const [isActive, setActive] = useState(false);
  const pps = props.addresses;
  const ToggleActive = () => {
    setActive(!isActive);
  };

  return (
    <div id="pp-page">
      <h1>Select shipping address</h1>
      <div id="review-your-order"></div>

      {pps && pps.length ? (
        <div id="purch-profile-container">
          {pps.map((pp, idx) => {
            console.log(pp);
            return (
              <div
                className={isActive ? "pp-card-selected" : "pp-card"}
                onClick={() => ToggleActive()}
              >
                <h2 className="pp-address-no">Address {idx + 1}</h2>
                <div className="pp-ship-info">Email: {pp.email}</div>
                <div className="pp-ship-info">Address: {pp.shipToAddress}</div>
                <div className="pp-ship-info">City: {pp.shipToCity}</div>
                <div className="pp-ship-info">State: {pp.shipToState}</div>
                <div className="pp-ship-info">
                  Zip Code: {pp.shipToPostalCode}
                </div>
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
  addresses: state.user.addresses
});

const mapDispatch = dispatch => ({});

export default connect(mapState, mapDispatch)(PurchaseProfile);
