import React from "react";
import { withRouter } from "react-router-dom";

const CartEmpty = props => {
  const goToProducts = () => {
    props.history.push("/products");
  };
  return (
    <div className="cart-empty-container">
      <h1>Your cart is currently empty.</h1>
      <h3>Want some gear?</h3>
      <p>Add items to your cart and get them delivered in no time!</p>
      <p className="cart-empty-text">
        <span className="underline">Have a question?</span>
        <span>
          {" "}
          We at Carepkg can ensure quality customer service. Just let us know
          what you need.
        </span>
      </p>
      <button className="white-btn" onClick={() => goToProducts()}>
        Continue Shopping
      </button>
      <div className="cart-empty-alt">
        <h3>Having Trouble?</h3>
        <p>
          You can also place an order at <span>1-234-567-8910</span> if
          necessary.
        </p>
      </div>
    </div>
  );
};

export default withRouter(CartEmpty);
