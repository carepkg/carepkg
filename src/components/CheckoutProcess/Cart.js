import React from "react";
import { connect } from "react-redux";
import {
  getCartThunk,
  deleteFromCartThunk,
  addToCartThunk,
} from "../../store/cart";
import {
  getUserWishlistThunk,
  addToWishlistThunk,
  removeFromWishlistThunk,
} from "../../store/wishlist";
import Footer from "../Universal/Footer";
import CartEmpty from "./CartEmpty";
import Wishlist from "../Wishlist";
import CartItems from "./CartItems";
import ShippingOptions from "./ShippingOptions";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      menuTab: "Cart",
      numInWishlist: 0,
      numInCart: 0,
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    if (this.props.user) {
      this.props.fetchCart(this.props.user.id);
      this.props.fetchWishlist(this.props.user.id);
    }
  }
  switchToWishlist() {
    this.props.fetchWishlist(this.props.user.id);
    this.setState({ menuTab: "Wishlist" });
  }
  switchToCart() {
    this.props.fetchCart(this.props.user.id);
    this.setState({ menuTab: "Cart" });
  }
  render() {
    const {
      user,
      cart,
      wishlist,
      removeFromCart,
      removeFromWishlist,
      addToCart,
      addToWishlist,
    } = this.props;
    const { menuTab } = this.state;
    let totals;
    console.log(cart);
    totals = cart.length
      ? cart.map((item) => (item.product.price * item.qty).toFixed(2))
      : [];
    let defaultStyle = {
      color: "gray",
      fontWeight: "300",
    };
    let activeStyle = {
      color: "black",
      borderBottom: "2px solid black",
      fontWeight: "500",
    };
    return (
      <div id="cart-page">
        <h1 className="your-cart-header">Your Cart</h1>
        <div className="cart-btn-menu">
          <div
            style={menuTab === "Cart" ? activeStyle : defaultStyle}
            onClick={() => this.switchToCart()}
          >
            <span>Cart</span>
          </div>
          <div
            style={menuTab === "Wishlist" ? activeStyle : defaultStyle}
            onClick={() => this.switchToWishlist()}
          >
            <span>Wishlist</span>
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
        <Footer />
      </div>
    );
  }
}

const mapState = (state) => ({
  cart: state.cart,
  user: state.user,
  wishlist: state.wishlist,
});
const mapDispatch = (dispatch) => ({
  fetchCart: (userId) => dispatch(getCartThunk(userId)),
  addToCart: (productId, userId) =>
    dispatch(addToCartThunk(1, productId, userId)),
  removeFromCart: (productId, userId) =>
    dispatch(deleteFromCartThunk(productId, userId)),
  fetchWishlist: (userId) => dispatch(getUserWishlistThunk(userId)),
  addToWishlist: (productId, userId) =>
    dispatch(addToWishlistThunk(productId, userId)),
  removeFromWishlist: (productId, userId) =>
    dispatch(removeFromWishlistThunk(productId, userId)),
});
export default connect(mapState, mapDispatch)(Cart);
