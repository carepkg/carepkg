import React, { useState } from "react";
import AddAddress from "./AddAddress";

const Addresses = props => {
  const { user } = props;
  console.log(user);
  const [adding, setAdding] = useState(false);
  const addAddress = () => setAdding(true);
  return (
    <div id="addresses-body">
      {adding ? (
        <AddAddress />
      ) : user && user.addresses ? (
        <div>
          <p>{user.addresses[0].name}</p>
          <p>{user.addresses[0].address1}</p>
          <p>{user.addresses[0].address2 && user.addresses[0].address2}</p>
          <p>{user.addresses[0].city}</p>
          <p>{user.addresses[0].state}</p>
          <p>{user.addresses[0].country}</p>
        </div>
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

export default Addresses;
