import React from "react";

const CheckoutSuccess = () => {
  return (
    <div id="checkout-success-page">
      <div id="checkout-success-content">
        <h1>SUCCESS</h1>
        <p>
          Your order has been placed.{" "}
          <a id="checkout-success-details-link">See details</a>
        </p>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
