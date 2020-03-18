import React from "react";

const NavBar = () => {
  return (
    <div id="navbar">
      <div className="navlinks navleft">
        <a className="navlink">Home</a>
        <a className="navlink">Products</a>
      </div>
      <h2 id="nav-coname">carepkg</h2>
      <div className="navlinks navright">
        <a className="navlink">Login</a>
        <a className="navlink">Sign up</a>
      </div>
    </div>
  );
};

export default NavBar;
