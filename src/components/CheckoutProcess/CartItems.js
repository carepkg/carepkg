import React from "react";

const CartItems = props => {
  const { cart, totals, removeFromCart, addToWishlist, user } = props;
  const handleMove = productId => {
    removeFromCart(user.id, productId).then(() => addToWishlist(productId));
  };
  return (
    <div className="cart-items-container">
      <div className="cart-items-header-table">
        <span className="cart-header-desc">Item Description</span>
        <span className="cart-header-edit">Edit</span>
        <span className="cart-header-price">Each</span>
        <span className="cart-header-quantity">Qty</span>
        <span className="cart-header-total">Total</span>
      </div>
      {cart.map((lineItem, idx) => {
        const { product } = lineItem;
        return (
          <div
            className={idx !== cart.length - 1 ? "cart-item" : "cart-item-last"}
          >
            <div className="cart-item-desc-box">
              <img src={product.image} style={{ width: 80, height: 80 }} />
              <div>
                <h4>{product.name}</h4>
                <div className="cart-item-desc-specs">
                  <span>Color: default</span>&nbsp;&nbsp;
                  <span>Size: default</span>
                </div>
              </div>
            </div>
            <div className="cart-item-edit-box">
              <button
                className="white-btn"
                onClick={() => handleMove(product.id)}
              >
                Move to Wishlist
              </button>
              <button onClick={() => removeFromCart(user.id, product.id)}>
                Remove
              </button>
            </div>
            <div className="cart-item-price-box">
              <span className="dollar-sign">$</span>
              {product.price}
            </div>
            <div className="cart-item-quantity-box">{lineItem.qty}</div>
            <div className="cart-item-total-box">
              <span className="dollar-sign">$</span>
              {totals[idx]}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartItems;
