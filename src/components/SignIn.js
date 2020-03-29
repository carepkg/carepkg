import React, { useState } from "react";
import SignUp from "./SignUp";
import Login from "./Login";

const SignIn = () => {
  const [loginOpen, setLoginOpen] = useState(true);
  const [signUpOpen, setSignUpOpen] = useState(false);

  const showLogin = () => {
    setLoginOpen(true);
    setSignUpOpen(false);
  };
  const showSignUp = () => {
    setLoginOpen(false);
    setSignUpOpen(true);
  };
  return (
    <div id="sign-in-page">
      <div id="sign-in-container">
        <div id="sign-in-menu">
          <button className="sign-in-btn" onClick={showLogin}>
            Login
          </button>
          <button className="sign-in-btn" onClick={showSignUp}>
            Sign Up
          </button>
        </div>
        <div>
          {loginOpen && <Login />}
          {signUpOpen && <SignUp />}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
