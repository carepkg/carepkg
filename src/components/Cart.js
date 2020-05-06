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
    let totals;
    totals = cart.length ? cart.map(item => item.product.price * item.qty) : [];
    let defaultStyle = {
      color: "gray",
      fontWeight: "300"
    };
    let activeStyle = {
      color: "black",
      borderBottom: "2px solid black",
      fontWeight: "500"
    };
    console.log(cart);
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
                  <div className="cart-item">
                    <div className="cart-item-desc-box">
                      <img
                        src={product.image}
                        style={{ width: 80, height: 80 }}
                      />
                      <div>
                        <h4>{product.name}</h4>
                        <div className="cart-item-desc-specs">
                          <span>Color: default</span>&nbsp;&nbsp;
                          <span>Size: default</span>
                        </div>
                      </div>
                    </div>
                    <div className="cart-item-edit-box">
                      <button className="white-btn">Move to Wishlist</button>
                      <button
                        onClick={() => removeFromCart(product.id, user.id)}
                      >
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
