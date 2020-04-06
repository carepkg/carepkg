import React from "react";
import { connect } from "react-redux";

const PurchaseProfile = props => {
  return (
    <div>
      <div id="purch-profile-container"></div>
      <div id="review-your-order"></div>
      <button id="proceed-to-checkout-btn"></button>
    </div>
  );
};

const mapState = state => ({});

const mapDispatch = dispatch => ({});

export default connect(mapState, mapDispatch)(PurchaseProfile);
