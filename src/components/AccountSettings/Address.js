import React, { useState } from "react";
import AddAddress from "./AddAddress";

const Address = props => {
  const { user } = props;
  const [adding, setAdding] = useState(false);
  const addAddress = () => setAdding(true);
  return (
    <div id="addresses-body">
      {adding ? (
        <AddAddress />
      ) : user && user.addresses ? (
        <p>{user.addresses[0]}</p>
      ) : (
        <div id="addresses-dflt">
          <h2>No Addresses Found</h2>
          <h4>Need help? Contact our support team any time.</h4>
          <div>
            <h2>Call 1-234-567-8910</h2>
          </div>
          <button className="add-address-btn" onClick={addAddress}>
            Add New Address
          </button>
        </div>
      )}
    </div>
  );
};

export default Address;
