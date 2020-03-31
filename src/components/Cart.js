import React from "react";
// import {getCartThunk} from '../store/cart'

class Cart extends React.Component {
  componentDidMount() {
    // this.props.getCartThunk()
  }
  render() {
    return (
      <div id="cart-page">
        <h1>Your cart</h1>
      </div>
    );
  }
}

// const mapState = state => ({
//     cart: state.cart
// })
// const mapDispatch = dispatch => ({
//     getCartThunk: () => dispatch(getCartThunk())
// })
export default Cart;
