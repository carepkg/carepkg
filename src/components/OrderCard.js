import React from "react";

const OrderCard = props => {
  const { order } = props;
  const { lineItems } = order;
  const price = lineItems.reduce((acc, item) => {
    return acc + item.product.price;
  }, 0);
  return (
    <div className="order-card">
      <div className="order-no">Order #01828403</div>
      <div className="line-item">
        <div className="line-item-name-hdr">
          <h3>Product</h3>
        </div>
        <div className="line-item-qty-hdr">Qty</div>
        <div className="line-item-price-hdr">Price/Unit</div>
      </div>
      {lineItems
        ? lineItems.map((lineItem, idx) => {
            return (
              <div className="line-item">
                <div className="line-item-name">
                  <h3>{lineItem.product.name}</h3>
                </div>
                <div className="line-item-qty">x{lineItem.qty}</div>
                <div
                  className={
                    idx === lineItems.length - 1
                      ? "line-item-price underline"
                      : "line-item-price"
                  }
                >
                  <span className="dollar-sign">$</span>
                  {lineItem.product.price}
                </div>
              </div>
            );
          })
        : null}
      <div className="line-item-total-line">
        <div>Total: </div>
        <div className="line-item-total">
          <span className="dollar-sign">$</span>
          {price}
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
