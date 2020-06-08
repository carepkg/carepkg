import React from "react";
import { connect } from "react-redux";
import BillingAddresses from "./BillingAddresses";
import ShippingAddress from "./ShippingAddress";
import GiftOption from "./GiftOption";
import SelectPayment from "./SelectPayment";
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
      billingAddress: {},
      shippingAddress: {},
      isGift: false
    };
    this.setBillingAddress = this.setBillingAddress.bind(this);
    this.setShippingAddress = this.setShippingAddress.bind(this);
    this.toggleGift = this.toggleGift.bind(this);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchAddresses();
  }

  setBillingAddress(address) {
    this.setState({
      billingAddress: address
    });
  }
  setShippingAddress(sameAddress, payload = false) {
    //the if clause below doesnt change shippingAddress when billing changes. Figure out later.
    if (sameAddress && !payload) {
      this.setState({ shippingAddress: this.state.billingAddress });
    } else if (!sameAddress && payload) {
      this.setState({ shippingAddress: payload });
    }
  }
  toggleGift() {
    this.setState({
      isGift: !this.state.isGift
    });
  }
  render() {
    const {
      removeAddress,
      setNewDefault,
      removeDefault,
      addresses
    } = this.props;
    console.log("checkout: ", this.state.isGift);
    return (
      <div id="checkout-page">
        <div className="checkout-header">
          <h3>Review and Place your Order </h3>
        </div>

        <div className="checkout-step-container">
          <h3 className="checkout-step-header">
            <span>1</span> &nbsp;&nbsp;Select your Billing Address
          </h3>
          <BillingAddresses
            addresses={addresses}
            removeAddress={removeAddress}
            removeDefault={removeDefault}
            setNewDefault={setNewDefault}
            setBillingAddress={this.setBillingAddress}
          />
        </div>
        <div className="checkout-step-container">
          <h3 className="checkout-step-header">
            <span>2</span>&nbsp;&nbsp;Choose a Shipping Address
          </h3>
          <ShippingAddress
            setShippingAddress={this.setShippingAddress}
            addresses={addresses}
            removeAddress={removeAddress}
            removeDefault={removeDefault}
            setNewDefault={setNewDefault}
          />
        </div>
        <div className="checkout-step-container">
          <h3 className="checkout-step-header">
            <span>3</span>&nbsp;&nbsp;Select Gift Options{" "}
            <span className="optional">(Optional)</span>
          </h3>
          <GiftOption toggleGift={this.toggleGift} />
        </div>
        <div className="checkout-step-container">
          <h3 className="checkout-step-header">
            <span>4</span>&nbsp;&nbsp;Select Payment Method
          </h3>
          <SelectPayment />
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
