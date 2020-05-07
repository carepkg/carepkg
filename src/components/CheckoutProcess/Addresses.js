import React from "react";

import { connect } from "react-redux";

class Addresses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { removeAddress, setNewDefault, removeDefault } = this.props;

    const addresses = this.props.addresses;
    for (let i = 0; i < addresses.length; i++) {
      if (addresses[i].default) {
        let temp = addresses[i];
        addresses[i] = addresses[0];
        addresses[0] = temp;
      }
    }
    return (
      <div id="addresses-body">
        {addresses ? (
          <div id="user-addresses">
            {addresses.map(address => {
              return (
                <React.Fragment>
                  <input type="radio" />
                  <div className="user-address-container">
                    <div className="address-header">
                      <h4>{address.name}</h4>
                      {address.default ? (
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
                      <p
                        className="address-util-2"
                        onClick={() =>
                          removeDefault().then(() => setNewDefault(address))
                        }
                      >
                        Set as Default
                      </p>
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
            <button className="black-btn">Add New Address</button>
          </div>
        )}
      </div>
    );
  }
}

export default Addresses;
