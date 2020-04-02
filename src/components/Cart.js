import React from "react";
import { connect } from "react-redux";
import { render } from "@testing-library/react";
// import {getCartThunk} from '../store/cart'

class Cart extends React.Component {
  componentDidMount() {}
  render() {
    const { user } = this.props;
    return (
      <div id="cart-page">
        <h1>{`${user.firstName}'s` || "Your"} cart</h1>
      </div>
    );
  }
}

const mapState = state => ({
  user: state.user
});
// const mapDispatch = dispatch => ({
//   getCartThunk: () => dispatch(getCartThunk())
// });
export default connect(mapState, null)(Cart);
