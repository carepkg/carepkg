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
        <div id="user-addresses">
          {user.addresses.map((address, idx) => {
            return (
              <React.Fragment>
                <div className="user-address-container">
                  <div className="address-header">
                    <h3>{address.name}</h3>
                    {idx === 0 ? (
                      <button className="address-check-mark">&#10003;</button>
                    ) : null}
                  </div>
                  <div className="address-details-box">
                    <p className="address-line">{address.address1}</p>
                    <p className="address-line">
                      {address.address2 && address.address2}
                    </p>
                    <p className="address-line">
                      {address.city}, {address.state} {address.postalCode}
                    </p>
                    <p className="address-line">{address.country}</p>
                    <p className="address-line">
                      Phone number: {address.phone}
                    </p>
                  </div>
                  <div className="address-util-menu">
                    <p className="address-util-1">Edit</p>
                    <p className="address-util-1">Remove</p>
                    <p className="address-util-2">Set as Default</p>
                  </div>
                </div>
                <div className="user-address-container"></div>
                <div className="user-address-container"></div>
                <div className="user-address-container"></div>
              </React.Fragment>
            );
          })}
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
