import React from "react";
import { HashLink } from "react-router-hash-link";

const AboutNavbar = () => {
  return (
    <div id="about-content-navbar">
      <div id="about-nav-left" className="about-content-navbar-half">
        <h1>CAREPKG</h1>
      </div>
      <div id="about-nav-right" className="about-content-navbar-half">
        <HashLink smooth to="/about#why" className="nav-right-p">
          WHY CAREPKG
        </HashLink>
        <HashLink smooth to="/about#who" className="nav-right-p">
          WHO WE ARE
        </HashLink>
        <HashLink smooth to="/about#where" className="nav-right-p">
          WHERE WE ARE
        </HashLink>
        <HashLink smooth to="/about#when" className="nav-right-p">
          WHEN WE WERE
        </HashLink>
      </div>
    </div>
  );
};

export default AboutNavbar;
