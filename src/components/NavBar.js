import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../store/user";

const NavBar = props => {
  const { isLoggedIn, handleLogout } = props;
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
          {isLoggedIn ? (
            <React.Fragment>
              <NavLink to="/profile" className="navlink">
                Profile
              </NavLink>
              <button onClick={handleLogout}>Logout</button>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <NavLink to="/login" className="navlink">
                Log In
              </NavLink>
              <NavLink to="/signup" className="navlink">
                Sign Up
              </NavLink>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  isLoggedIn: !!state.user.id
});

const mapDispatchToProps = dispatch => ({
  handleLogout() {
    dispatch(logout());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
