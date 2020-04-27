import React, { useState } from "react";

const AddToButtons = props => {
  const [qty, setQty] = useState(1);
  const {
    addToCartThunk,
    productId,
    userId,
    inStock,
    stock,
    limitedStock
  } = props;

  const addToCart = e => {
    e.preventDefault();
    addToCartThunk(qty, productId, userId);
  };
  return (
    <form className="add-to-cart-form">
      <div className="sp-qty-container">
        <span className="qty-text">Quantity:</span>{" "}
        <input
          name="qty"
          type="number"
          min="1"
          className="sp-qty-input"
          value={qty}
          onChange={e => setQty(e.target.value)}
        />
        {inStock ? (
          <span className="in-stock">
            <span>&#10003;</span>In Stock
          </span>
        ) : (
          <span className="out-of-stock">Out of Stock</span>
        )}
        {limitedStock && (
          <span className="out-of-stock">Quick! Only {stock} left.</span>
        )}
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
