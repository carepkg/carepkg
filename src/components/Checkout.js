import React from "react";

const Checkout = props => {
  return (
    <div id="checkout-page">
      <h1>Order Details</h1>
      <div className="checkout-details-box">Cart</div>
      <div className="checkout-details-box">Shipping</div>
      <div className="checkout-details-box">Payment</div>

      <button id="complete-order-btn">Complete Order</button>
    </div>
  );
};

export default Checkout;
