import React, { Component } from "react";
import FeaturedPkgs from "./FeaturedPkgs";
export default class LandingPage extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    //fetch bundles
    //need to make them in db
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
        <div id="test-div"></div>
        {/* <h1 id="featured-pkg-text">Featured Packages</h1>
        <div id="main-half-2">
          <FeaturedPkgs />
        </div> */}
      </div>
    );
  }
}
