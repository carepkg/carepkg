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
    this.state = {};
  }
  componentDidMount() {
    this.props.fetchAddresses();
  }
  render() {
    const {
      removeAddress,
      setNewDefault,
      removeDefault,
      addresses
    } = this.props;
    return (
      <div id="checkout-page">
        <div className="checkout-header">
          <h3>Review and Place your Order</h3>
        </div>
        <h3>Select your Billing Address</h3>
        <div className="billing-addresses-container"></div>
        <Addresses
          addresses={addresses}
          removeAddress={removeAddress}
          removeDefault={removeDefault}
          setNewDefault={setNewDefault}
        />
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
