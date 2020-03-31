import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div id="navbar-wrapper">
      <div id="navbar">
        <div className="navlinks navleft">
          <NavLink to="/" className="navlink">
            Home
          </NavLink>
          <NavLink to="/products" className="navlink">
            Products
          </NavLink>
        </div>
        <h2 id="nav-coname">carepkg</h2>
        <div className="navlinks navright">
          <NavLink to="/cart" className="navlink">
            Cart
          </NavLink>
          <NavLink to="/login" className="navlink">
            Log In
          </NavLink>
          <NavLink to="/signup" className="navlink">
            Sign Up
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
