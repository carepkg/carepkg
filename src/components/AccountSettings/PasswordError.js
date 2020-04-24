import React from "react";

const PasswordError = props => {
  const { type } = props;
  return (
    <div className="cred-error">
      <span>&#10005;</span>
      {type === "same"
        ? "Password must be different"
        : type === "matching"
        ? "The passwords you entered were different"
        : type === "invalid password"
        ? "The password you entered is invalid"
        : null}
    </div>
  );
};
export default PasswordError;
