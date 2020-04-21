import React from "react";
import { connect } from "react-redux";
import Address from "./Address";

const AccountSettings = props => {
  const { user } = props;
  return (
    <div id="acct-settings-page">
      <div id="AS-slide-hdr">
        <span className="AS-slide-unit">Addresses</span>
        <span className="AS-slide-unit">Change Email</span>
        <span className="AS-slide-unit">Password</span>
        <span className="AS-slide-unit">Credit Cards</span>
      </div>
      <Address user={user} />
    </div>
  );
};

const mapState = state => ({
  user: state.user
});

export default connect(mapState, null)(AccountSettings);
