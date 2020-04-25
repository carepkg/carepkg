import React, { useState } from "react";

const AddToCart = props => {
  const [qty, setQty] = useState(1);
  const { productId, userId } = props;

  const handleClick = e => {
    e.preventDefault();
    props.addToCartThunk(qty, productId, userId);
  };
  return (
    <form className="add-to-cart-form">
      <label htmlFor="qty">Qty:</label>
      <input
        name="qty"
        type="number"
        min="1"
        value={qty}
        onChange={e => setQty(e.target.value)}
        className="qty-input"
      />
      <button className="add-to-cart-btn" onClick={handleClick}>
        + Add to Cart
      </button>
    </form>
  );
};

export default AddToCart;
