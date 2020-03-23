import React, { Component } from "react";
import FeaturedPkgs from "./FeaturedPkgs";
import MainSearchBar from "./MainSearchBar";

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
        <div id="home-main">
          <div id="main-half-1">
            <MainSearchBar />
          </div>
          <h1 id="featured-pkg-text">Featured Packages</h1>
          <div id="main-half-2">
            <FeaturedPkgs />
          </div>
          <div id="section-one-end"></div>
        </div>
      </div>
    );
  }
}
