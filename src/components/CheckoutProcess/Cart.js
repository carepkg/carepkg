import React from "react";
import { connect } from "react-redux";
import { render } from "@testing-library/react";
import {
  getCartThunk,
  deleteFromCartThunk,
  addToCartThunk
} from "../../store/cart";
import {
  getUserWishlistThunk,
  addToWishlistThunk,
  removeFromWishlistThunk
} from "../../store/wishlist";
import CarepkgHelp from "../CarepkgHelp";
import CarepkgNewsletter from "../CarepkgNewsletter";
import FooterBottom from "../FooterBottom";
import CartEmpty from "./CartEmpty";
import Wishlist from "../Wishlist";
import CartItems from "./CartItems";
import ShippingOptions from "./ShippingOptions";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      menuTab: "Cart"
    };
  }
  componentDidMount() {
    if (this.props.user) {
      this.props.fetchCart();
      this.props.fetchWishlist();
    }
  }
  render() {
    const {
      user,
      cart,
      wishlist,
      removeFromCart,
      removeFromWishlist,
      addToCart,
      addToWishlist
    } = this.props;
    const { menuTab } = this.state;
    let totals;
    totals = cart.length
      ? cart.map(item => (item.product.price * item.qty).toFixed(2))
      : [];
    let defaultStyle = {
      color: "gray",
      fontWeight: "300"
    };
    let activeStyle = {
      color: "black",
      borderBottom: "2px solid black",
      fontWeight: "500"
    };
    return (
      <div id="cart-page">
        <h1 className="your-cart-header">Your Cart</h1>
        <div className="cart-btn-menu">
          <div
            style={menuTab === "Cart" ? activeStyle : defaultStyle}
            onClick={() => this.setState({ menuTab: "Cart" })}
          >
            <span>Cart ({cart.length || 0})</span>
          </div>
          <div
            style={menuTab === "Wishlist" ? activeStyle : defaultStyle}
            onClick={() => this.setState({ menuTab: "Wishlist" })}
          >
            <span>Wishlist ({0})</span>
          </div>
        </div>
        <div id="cart-content-container">
          {menuTab === "Cart" && cart && cart.length ? (
            <React.Fragment>
              <CartItems
                cart={cart}
                totals={totals}
                user={user}
                removeFromCart={removeFromCart}
                addToWishlist={addToWishlist}
              />
              <ShippingOptions totals={totals} />
            </React.Fragment>
          ) : menuTab === "Cart" ? (
            <CartEmpty />
          ) : null}
          {menuTab === "Wishlist" ? (
            <Wishlist
              wishlist={wishlist}
              user={user}
              removeFromWishlist={removeFromWishlist}
              addToCart={addToCart}
            />
          ) : null}
        </div>
        <div id="landing-footer-main">
          <div className="landing-page-break"></div>
          <div id="info-footer">
            <CarepkgHelp />
            <CarepkgNewsletter />
          </div>
          <div className="landing-page-break"></div>
          <FooterBottom />
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  cart: state.cart,
  user: state.user,
  wishlist: state.wishlist
});
const mapDispatch = dispatch => ({
  fetchCart: userId => dispatch(getCartThunk(userId)),
  addToCart: productId => dispatch(addToCartThunk(1, productId)),
  removeFromCart: (userId, productId) =>
    dispatch(deleteFromCartThunk(userId, productId)),
  fetchWishlist: userId => dispatch(getUserWishlistThunk(userId)),
  addToWishlist: productId => dispatch(addToWishlistThunk(productId)),
  removeFromWishlist: productId => dispatch(removeFromWishlistThunk(productId))
});
export default connect(mapState, mapDispatch)(Cart);
