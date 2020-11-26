import React from "react";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";

const AboutNavbar = () => {
  return (
    <div id="about-content-navbar-wrapper">
      <div id="about-navbar-links-container">
        <HashLink smooth to="/about#why" className="nav-right-p">
          WHY CAREPKG
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
