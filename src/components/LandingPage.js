import React, { Component } from "react";
import { connect } from "react-redux";
import FeaturedPkgs from "./FeaturedPkgs";
import { getCartThunk } from "../store/cart";
import { getPackagesThunk } from "../store/packages";
class LandingPage extends Component {
  componentDidMount() {
    if (this.props.user.id) {
      console.log("here");
      this.props.fetchCart(this.props.user.id);
    }
    //fetch packages
    this.props.fetchPackages();
  }
  render() {
    return (
      <div id="landing-page">
        <div id="bg-img-content">
          <div id="landing-text">
            <p id="landing-text-1">carepkg</p>
            <p id="landing-text-2">The One and Only Place to Shop</p>
            <p id="landing-text-3">All things nature</p>
            <button id="landing-text-btn">See Sales</button>
          </div>
        </div>
        <div id="test-2"></div>
      </div>
    );
  }
}

const mapState = state => ({
  user: state.user
});
const mapDispatch = dispatch => ({
  fetchCart: userId => dispatch(getCartThunk(userId)),
  fetchPackages: () => dispatch(getPackagesThunk())
});

export default connect(mapState, mapDispatch)(LandingPage);
