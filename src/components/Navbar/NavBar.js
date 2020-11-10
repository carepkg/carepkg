import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../../store/user";
import MainSearchBar from "./MainSearchBar";

const NavBar = (props) => {
  const { isLoggedIn, handleLogout, user } = props;
  let firstInitial;
  user.firstName
    ? (firstInitial = user.firstName.charAt(0))
    : (firstInitial = "");
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
            <NavLink to="/products/all" className="navlink products-navlink">
              Products
            </NavLink>
            <NavLink to="/cart" className="navlink">
              Cart
            </NavLink>
            {isLoggedIn ? (
              <React.Fragment>
                <div className="user-dropdown-container">
                  <button className="menu-button">
                    Hello, {props.user.firstName}!{" "}
                    <div className="nav-user-initial">{firstInitial}</div>
                    <span>&#x25BE;</span>
                  </button>
                  <div className="user-dropdown-menu">
                    <NavLink to="/profile" className="nav-dropdown-item">
                      Profile
                    </NavLink>
                    <NavLink
                      to="/login"
                      className="nav-dropdown-item"
                      onClick={handleLogout}
                    >
                      Logout
                    </NavLink>
                  </div>
                </div>
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
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: !!state.user.id,
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  handleLogout() {
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
