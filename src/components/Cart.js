import React from "react";
import { connect } from "react-redux";
import { render } from "@testing-library/react";
import { getCartThunk, deleteFromCartThunk } from "../store/cart";
import { NavLink } from "react-router-dom";
import CartEmpty from "./CartEmpty";
import Wishlist from "./Wishlist";
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
            <span>Cart ({cart.length})</span>
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
            cart.map(lineItem => {
              const { product } = lineItem;
              return (
                <div className="cart-item">
                  <p>Product: {product.name}</p>
                  <p>qty: {lineItem.qty}</p>
                  <img
                    style={{ width: "100px", height: "100px" }}
                    src={product.image}
                  />
                  <button onClick={() => removeFromCart(product.id, user.id)}>
                    X
                  </button>
                </div>
              );
            })
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
