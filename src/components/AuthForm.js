import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { auth } from "../store";
// import {getCartThunk} from '../store/cart'

/**
 * COMPONENT FOR LOGIN AND SIGNUP
 */
const AuthForm = props => {
  const { name, displayName, handleLogin, handleSignup, error } = props;
  return (
    <div>
      <form
        className="SignupForm"
        onSubmit={name === "login" ? handleLogin : handleSignup}
        // onSubmit={name === "login" ? handleLogin : handleSignup}
        name={name}
      >
        <div>
          <label htmlFor="email">
            <small>Email</small>
          </label>
          <input name="email" type="text" />
        </div>
        <div>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input name="password" type="text" />
        </div>
        {name === "signup" && (
          <div>
            <div>
              <label htmlFor="firstname">
                <small>First Name</small>
              </label>
              <input className="Signup" name="firstname" type="text" required />
            </div>
            <div>
              <label htmlFor="lastname">
                <small>Last Name</small>
              </label>
              <input className="signup" name="lastname" type="text" />
            </div>
            <div>
              <label htmlFor="username">
                <small>Username</small>
              </label>
              <input className="signup" name="username" type="text" />
            </div>
          </div>
        )}
        <div>
          <button
            style={{ width: 50, height: 50, backgroundColor: "blue" }}
            type="submit"
          >
            {displayName}
          </button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
      <a href="/auth/google">{displayName} with Google</a>
    </div>
  );
};

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: "login",
    displayName: "Login",
    error: state.user.error
  };
};

const mapSignup = state => {
  return {
    name: "signup",
    displayName: "Sign Up",
    error: state.user.error
  };
};

const mapDispatch = dispatch => {
  return {
    handleLogin(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const email = evt.target.email.value;
      const password = evt.target.password.value;
      dispatch(auth({ email, password }, formName));
      //   .then(() =>
      //     dispatch(getCartThunk())
      //   );
    },
    handleSignup(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const email = evt.target.email.value;
      const password = evt.target.password.value;
      const firstname = evt.target.firstname.value;
      const lastname = evt.target.lastname.value;
      const username = evt.target.username.value;
      dispatch(
        auth({ email, password, firstname, lastname, username }, formName)
      );
    }
  };
};

export const Login = connect(mapLogin, mapDispatch)(AuthForm);
export const Signup = connect(mapSignup, mapDispatch)(AuthForm);

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleSignup: PropTypes.func.isRequired,
  error: PropTypes.object
};
export default AuthForm;
