import React, { Component } from "react";
import { connect } from "react-redux";
import FeaturedPkgs from "./FeaturedPkgs";
import { getCartThunk } from "../store/cart";
class LandingPage extends Component {
  componentDidMount() {
    //fetch cart
    this.props.fetchCart(this.props.user.id);
    //fetch bundles
  }
  render() {
    return (
      <div id="landing-page">
        <img src="/background-images/main-bg.jpg" className="bg-image" />
        <div id="landing-text">
          <p id="landing-text-1">carepkg</p>
          <p id="landing-text-2">The One and Only Place to Shop</p>
          <p id="landing-text-3">All things nature</p>
          <button id="landing-text-btn">See Sales</button>
        </div>
        {/* <h1 id="featured-pkg-text">Featured Packages</h1>
        <div id="main-half-2">
          <FeaturedPkgs />
        </div> */}
      </div>
    );
  }
}

const mapState = state => ({
  user: state.user
});
const mapDispatch = dispatch => ({
  fetchCart: userId => dispatch(getCartThunk(userId))
});

export default connect(mapState, mapDispatch)(LandingPage);
