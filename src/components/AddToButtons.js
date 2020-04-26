import React, { useState } from "react";

const AddToButtons = props => {
  const [qty, setQty] = useState(1);
  const { addToCartThunk, productId, userId } = props;

  const addToCart = e => {
    e.preventDefault();
    addToCartThunk(qty, productId, userId);
  };
  return (
    <form className="add-to-cart-form">
      <div className="sp-qty-container">
        <span>Quantity:</span>{" "}
        <input
          name="qty"
          type="number"
          min="1"
          className="sp-qty-input"
          value={qty}
          onChange={e => setQty(e.target.value)}
        />
      </div>
      <div className="sp-btn-menu">
        <button className="black-btn" onClick={addToCart}>
          + Add To Cart
        </button>
        <button className="white-btn">+ Add to Wishlist</button>
      </div>
    </form>
  );
};

export default AddToButtons;
