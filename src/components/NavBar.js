import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../store/user";
import MainSearchBar from "./MainSearchBar";

const NavBar = props => {
  const { isLoggedIn, handleLogout } = props;
  return (
    <div id="navbar-wrapper">
      <div id="navbar-top">
        <div id="navbar-top-content">
          <div id="navbar-top-left">
            <NavLink to="/">
              <h2 id="nav-coname">carepkg</h2>
            </NavLink>
            <MainSearchBar />
          </div>
          <div id="navbar-top-right">
            <NavLink to="/cart" className="navlink">
              Cart
            </NavLink>
            {isLoggedIn ? (
              <React.Fragment>
                <NavLink to="/profile" className="navlink">
                  Welcome, {props.user.firstName}!
                </NavLink>
                <NavLink to="/login" className="navlink" onClick={handleLogout}>
                  Logout
                </NavLink>
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
      <hr className="nav-break" />
      <div id="navbar-bot">
        <div className="navlinks navleft">
          <NavLink to="/bundles" className="navlink nav-product-link">
            Packages
          </NavLink>
          <NavLink to="/products" className="navlink nav-product-link">
            Products
          </NavLink>
          <NavLink to="/bundles" className="navlink nav-product-link">
            Contact
          </NavLink>
        </div>

        <div className="navlinks navright"></div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  isLoggedIn: !!state.user.id,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  handleLogout() {
    dispatch(logout());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
