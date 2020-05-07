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
    if (this.props.user) {
      this.props.fetchAddresses(this.props.user.id);
    }
  }
  render() {
    const {
      user,
      fetchAddresses,
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
  user: state.user,
  addresses: state.addresses
});
const mapDispatch = dispatch => ({
  fetchAddresses: userId => dispatch(getAddressesThunk(userId)),
  removeAddress: addressId => dispatch(removeAddressThunk(addressId)),
  removeDefault: () => dispatch(removeCurrentDefaultThunk()),
  setNewDefault: address => dispatch(setDefaultThunk(address))
});
export default connect(mapState, mapDispatch)(Checkout);
