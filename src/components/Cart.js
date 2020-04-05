import React from "react";
import { connect } from "react-redux";
import { render } from "@testing-library/react";
import { getCartThunk, deleteFromCartThunk } from "../store/cart";

class Cart extends React.Component {
  componentDidMount() {
    this.props.fetchCart(this.props.user.id);
  }
  render() {
    const { user, cart, removeFromCart } = this.props;
    console.log(cart);
    return (
      <div id="cart-page">
        <h1>{`${user.firstName}'s` || "Your"} cart</h1>

        <div id="cart-container">
          {cart && cart.length ? (
            cart.map(lineItem => {
              const { product } = lineItem;
              return (
                <div>
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
          ) : (
            <h1>Your Cart is Empty</h1>
          )}
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
