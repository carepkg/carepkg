import React from "react";
import WishlistEmpty from "./WishlistEmpty";

const Wishlist = props => {
  const { wishlist, removeFromWishlist, addToCart } = props;
  console.log(wishlist);
  const handleMove = productId => {
    removeFromWishlist(productId);
    addToCart(productId);
  };
  return wishlist && wishlist.length ? (
    <div className="cart-items-container">
      <div className="cart-items-header-table">
        <span className="cart-header-desc">Item Description</span>
        <span className="cart-header-edit wishlist-header-edit">Edit</span>
        <span className="cart-header-price wishlist-header-price">Each</span>
      </div>
      {wishlist.map((lineItem, idx) => {
        const { product } = lineItem;
        return (
          <div
            className={
              idx !== wishlist.length - 1 ? "cart-item" : "cart-item-last"
            }
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
            <div className="cart-item-edit-box wishlist-item-edit-box">
              <button
                className="white-btn"
                onClick={() => handleMove(product.id)}
              >
                Move to Cart
              </button>
              <button onClick={() => removeFromWishlist(product.id)}>
                Remove
              </button>
            </div>
            <div className="cart-item-price-box wishlist-item-price-box">
              <span className="dollar-sign">$</span>
              {product.price}
            </div>
          </div>
        );
      })}
    </div>
  ) : (
    <WishlistEmpty />
  );
};
export default Wishlist;
