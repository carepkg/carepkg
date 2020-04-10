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
    const { packages } = this.props;
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
        <div id="landing-section-2">
          <h1>Featured Packages</h1>
          <div id="featured-pkgs-container">
            {packages
              ? packages.map(pkg => {
                  return (
                    <div className="featured-pkg">
                      <h3>{pkg.name}</h3>
                      <img
                        src={pkg.imageUrl}
                        className="featured-pkg-img"
                      ></img>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  user: state.user,
  packages: state.packages
});
const mapDispatch = dispatch => ({
  fetchCart: userId => dispatch(getCartThunk(userId)),
  fetchPackages: () => dispatch(getPackagesThunk())
});

export default connect(mapState, mapDispatch)(LandingPage);
