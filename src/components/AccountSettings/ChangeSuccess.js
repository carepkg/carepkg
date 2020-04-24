import React from "react";

const ChangeSuccess = props => {
  return (
    <div className="change-success">
      <span>&#9745;</span>Success! Your {props.type} has been successfully
      changed.
    </div>
  );
};
export default ChangeSuccess;
