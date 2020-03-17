import React from "react";

const NavBar = () => {
  return (
    <div id="navbar">
      <div className="navlinks navleft">
        <a className="navlink">
          <span>Home</span>
        </a>
        <a className="navlink">
          <span>Products</span>
        </a>
      </div>
      <h2 id="nav-coname">carepkg</h2>
      <div className="navlinks navright">
        <a className="navlink">
          <span>Login</span>
        </a>
        <a className="navlink">
          <span>Signup</span>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
