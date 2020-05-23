import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUserWishlistThunk } from "../store/wishlist";

const Wishlist = props => {
  useEffect(() => {
    props.fetchWishlist(props.userId);
  }, []);
  const { wishlist } = props;
  return wishlist ? (
    <div className="cart-items-container">
      <div className="cart-items-header-table">
        <span className="cart-header-desc">Item Description</span>
        <span className="cart-header-edit">Edit</span>
        <span className="cart-header-price">Each</span>
      </div>
      {wishlist.map(lineItem => {})}
      {/* need to include product for wishlist so i can map thru */}
    </div>
  ) : null;
};

const mapState = state => ({ wishlist: state.wishlist, userId: state.user.id });
const mapDispatch = dispatch => ({
  fetchWishlist: userId => getUserWishlistThunk(userId)
});
export default connect(mapState, mapDispatch)(Wishlist);
