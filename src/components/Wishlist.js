import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUserWishlistThunk } from "../store/wishlist";

const Wishlist = props => {
  useEffect(() => {
    props.fetchWishlist(props.userId);
  }, []);
  const { wishlist } = props;
  console.log(wishlist);
  return wishlist ? (
    <div className="cart-items-container">
      <div className="cart-items-header-table">
        <span className="cart-header-desc">Item Description</span>
        <span className="cart-header-edit wishlist-header-edit">Edit</span>
        <span className="cart-header-price wishlist-header-price">Each</span>
      </div>
      {wishlist.map(lineItem => {
        const { product } = lineItem;
        return (
          <div className="cart-item">
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
              <button className="white-btn">Move to Cart</button>
              <button>Remove</button>
            </div>
            <div className="cart-item-price-box wishlist-item-price-box">
              <span className="dollar-sign">$</span>
              {product.price}
            </div>
          </div>
        );
      })}
      {/* need to include product for wishlist so i can map thru */}
    </div>
  ) : null;
};

const mapState = state => ({ wishlist: state.wishlist, userId: state.user.id });
const mapDispatch = dispatch => ({
  fetchWishlist: userId => dispatch(getUserWishlistThunk(userId))
});
export default connect(mapState, mapDispatch)(Wishlist);
