import React from "react";

const BriefOrderSummary = props => {
  const { subtotal, shippingCost } = props;
  const tax = Number((subtotal * 0.09).toFixed(2));
  const total = Number(subtotal) + Number(shippingCost) + tax;
  return (
    <div className="cart-order-summary">
      <h3>Order Summary:</h3>
      <div className="order-summary-lines">
        <div className="order-summary-line">
          <span className="order-summary-detail">Subtotal</span>
          <span>
            <span className="dollar-sign">$</span>
            {subtotal}
          </span>
        </div>
        <div className="order-summary-line">
          <span className="order-summary-detail">Shipping</span>
          <span>
            <span className="dollar-sign">$</span>
            {shippingCost}
          </span>
        </div>
        <div className="order-summary-line">
          <span className="order-summary-detail">Estimated Tax</span>
          <span>
            <span className="dollar-sign">$</span>
            {tax}
          </span>
        </div>
      </div>
      <div className="order-summary-line">
        <span className="bold">Total</span>
        <span className="bold">
          <span className="dollar-sign bold">$</span>
          {total}
        </span>
      </div>
      <button className="black-btn">Proceed With Order</button>
    </div>
  );
};

export default BriefOrderSummary;
