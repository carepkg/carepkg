import React from "react";
import { connect } from "react-redux";
import { render } from "@testing-library/react";
import { getCartThunk, deleteFromCartThunk } from "../../store/cart";
import { NavLink } from "react-router-dom";
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
      this.props.fetchCart(this.props.user.id);
    }
  }
  render() {
    const { user, cart, removeFromCart } = this.props;
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
                removeFromCart={removeFromCart}
                user={user}
              />
              <ShippingOptions totals={totals} />
            </React.Fragment>
          ) : menuTab === "Cart" ? (
            <CartEmpty />
          ) : null}
          {menuTab === "Wishlist" ? <Wishlist /> : null}

          {/* {cart.length && (
            <NavLink to="/cart/pp">
              <button id="cart-review-btn">Review Order</button>
            </NavLink>
          )} */}
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
  user: state.user
});
const mapDispatch = dispatch => ({
  fetchCart: userId => dispatch(getCartThunk(userId)),
  removeFromCart: (productId, userId) =>
    dispatch(deleteFromCartThunk(productId, userId))
});
export default connect(mapState, mapDispatch)(Cart);
