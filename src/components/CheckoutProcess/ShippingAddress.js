import React, { useState } from "react";
import ShippingAddresses from "./ShippingAddresses";

const ShippingAddress = props => {
  const {
    setShippingAddress,
    addresses,
    removeAddress,
    removeDefault,
    setNewDefault
  } = props;
  const [address, setLocalAddress] = useState("same");
  const sameInputChange = e => {
    setShippingAddress(e.target.value);
    setLocalAddress(e.target.value);
  };
  const diffInputChange = e => {
    setLocalAddress(e.target.value);
  };
  return (
    <div className="select-ship-address-page">
      <div className="ship-address-input-group">
        <input
          name="shipAddress"
          type="radio"
          value="same"
          onChange={sameInputChange}
        />
        <span>Ship to My Billing Address</span>
      </div>
      <div className="ship-address-input-group">
        <input
          name="shipAddress"
          type="radio"
          value="different"
          onChange={diffInputChange}
        />
        <span>Ship to Different Address</span>
      </div>
      {address !== "same" ? (
        <ShippingAddresses
          addresses={addresses}
          removeAddress={removeAddress}
          removeDefault={removeDefault}
          setNewDefault={setNewDefault}
          setShippingAddress={setShippingAddress}
        />
      ) : null}
    </div>
  );
};

export default ShippingAddress;
