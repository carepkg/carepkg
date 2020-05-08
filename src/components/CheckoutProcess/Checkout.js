import React from "react";
import { connect } from "react-redux";
import Addresses from "./Addresses";
import {
  getAddressesThunk,
  removeAddressThunk,
  removeCurrentDefaultThunk,
  setDefaultThunk
} from "../../store/addresses";

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      billingAddress: {}
    };
    this.setBillingAddress = this.setBillingAddress.bind(this);
  }
  componentDidMount() {
    this.props.fetchAddresses();
  }

  setBillingAddress(address) {
    this.setState({
      billingAddress: address
    });
  }
  render() {
    console.log("checkout", this.state.billingAddress);
    const {
      removeAddress,
      setNewDefault,
      removeDefault,
      addresses
    } = this.props;
    return (
      <div id="checkout-page">
        <div className="checkout-header">
          <h3>Review and Place your Order </h3>
        </div>

        <div className="billing-addresses-container">
          <h3 className="checkout-step-header">
            <span>1</span> &nbsp;&nbsp;Select your Billing Address
          </h3>
          <Addresses
            addresses={addresses}
            removeAddress={removeAddress}
            removeDefault={removeDefault}
            setNewDefault={setNewDefault}
            setBillingAddress={this.setBillingAddress}
          />
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  addresses: state.addresses
});
const mapDispatch = dispatch => ({
  fetchAddresses: () => dispatch(getAddressesThunk()),
  removeAddress: addressId => dispatch(removeAddressThunk(addressId)),
  removeDefault: () => dispatch(removeCurrentDefaultThunk()),
  setNewDefault: address => dispatch(setDefaultThunk(address))
});
export default connect(mapState, mapDispatch)(Checkout);
