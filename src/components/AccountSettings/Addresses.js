import React, { useState, useEffect } from "react";
import AddAddress from "./AddAddress";
import { getAddressesThunk, removeAddressThunk } from "../../store/addresses";
import { connect } from "react-redux";

const Addresses = props => {
  const { user, addresses, fetchAddresses, removeAddress } = props;
  useEffect(() => {
    if (props.user) {
      fetchAddresses(user.id);
    }
  }, []);
  console.log(addresses);
  const [adding, setAdding] = useState(false);
  const addAddress = () => setAdding(true);
  return (
    <div id="addresses-body">
      {adding ? (
        <AddAddress />
      ) : addresses ? (
        <div id="user-addresses">
          {addresses.map((address, idx) => {
            return (
              <React.Fragment>
                <div className="user-address-container">
                  <div className="address-header">
                    <h4>{address.name}</h4>
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
                    <p
                      className="address-util-1"
                      onClick={() => removeAddress(address.id)}
                    >
                      Remove
                    </p>
                    <p className="address-util-2">Set as Default</p>
                  </div>
                </div>
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

const mapState = state => ({
  addresses: state.addresses
});
const mapDispatch = dispatch => ({
  fetchAddresses: userId => dispatch(getAddressesThunk(userId)),
  removeAddress: addressId => dispatch(removeAddressThunk(addressId))
});

export default connect(mapState, mapDispatch)(Addresses);
