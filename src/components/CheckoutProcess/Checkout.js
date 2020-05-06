import React from "react";
import { NavLink } from "react-router-dom";

const Checkout = props => {
  return (
    <div id="checkout-page">
      <h1>Order Details</h1>
      <div className="checkout-details-box">Cart</div>
      <div className="checkout-details-box">Shipping</div>
      <div className="checkout-details-box">Payment</div>
      <NavLink to="/cart/success">
        <button id="complete-order-btn">Complete Order</button>
      </NavLink>
    </div>
  );
};

export default Checkout;
