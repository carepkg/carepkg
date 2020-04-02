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
        <img
          src="/background-images/main-bg.jpg"
          style={{ width: "100%", height: "100%" }}
        />
        {/* <h1 id="featured-pkg-text">Featured Packages</h1>
        <div id="main-half-2">
          <FeaturedPkgs />
        </div> */}
      </div>
    );
  }
}
