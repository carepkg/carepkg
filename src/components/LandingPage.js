import React, { Component } from "react";
import NavBar from "./NavBar";
import FeaturedPkgs from "./FeaturedPkgs";
import MainSearchBar from "./MainSearchBar";

export default class LandingPage extends Component {
  render() {
    return (
      <div id="landing-page">
        <NavBar />
        <div id="home-main">
          <MainSearchBar />
          <h1 id="featured-pkg-text">Featured Packages</h1>
          <FeaturedPkgs />
          <div id="section-one-end"></div>
        </div>
      </div>
    );
  }
}
