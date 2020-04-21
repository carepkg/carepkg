import React, { useState } from "react";
import { connect } from "react-redux";
import Addresses from "./Addresses";
import ChangeEmail from "./ChangeEmail";
import ChangePassword from "./ChangePassword";
import CreditCards from "./CreditCards";

const AccountSettings = props => {
  const { user } = props;
  const [setting, setSetting] = useState("addresses");
  return (
    <div id="acct-settings-page">
      <div id="AS-slide-hdr">
        <span className="AS-slide-unit" onClick={() => setSetting("addresses")}>
          Addresses
        </span>
        <span className="AS-slide-unit" onClick={() => setSetting("email")}>
          Change Email
        </span>
        <span className="AS-slide-unit" onClick={() => setSetting("password")}>
          Password
        </span>
        <span className="AS-slide-unit" onClick={() => setSetting("ccs")}>
          Credit Cards
        </span>
      </div>
      {setting === "addresses" ? (
        <Addresses user={user} />
      ) : setting === "email" ? (
        <ChangeEmail user={user} />
      ) : setting === "password" ? (
        <ChangePassword user={user} />
      ) : setting === "ccs" ? (
        <CreditCards />
      ) : null}
    </div>
  );
};

const mapState = state => ({
  user: state.user
});

export default connect(mapState, null)(AccountSettings);
