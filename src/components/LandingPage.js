import React, { Component } from "react";
import NavBar from "./NavBar";
import FeaturedPkgs from "./FeaturedPkgs";

export default class LandingPage extends Component {
  render() {
    return (
      <div id="landing-page">
        <NavBar />
        <div id="home-main">
          <FeaturedPkgs />
        </div>
      </div>
    );
  }
}
