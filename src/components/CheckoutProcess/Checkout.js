import React from "react";
import { connect } from "react-redux";
import BillingAddresses from "./BillingAddresses";
import ShippingAddresses from "./ShippingAddresses";
import GiftOption from "./GiftOption";
import SelectPayment from "./SelectPayment";
import {
  getAddressesThunk,
  removeAddressThunk,
  removeCurrentDefaultThunk,
  setDefaultThunk,
} from "../../store/addresses";

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      billingAddress: {},
      shippingAddress: {},
      shippingAndBilling: "same",
      isGift: false,
    };
    this.setBillingAddress = this.setBillingAddress.bind(this);
    this.setShippingAddress = this.setShippingAddress.bind(this);
    this.handleShippingAndBilling = this.handleShippingAndBilling.bind(this);
    this.sameInputChange = this.sameInputChange.bind(this);
    this.diffInputChange = this.diffInputChange.bind(this);
    this.toggleGift = this.toggleGift.bind(this);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchAddresses();
  }

  setBillingAddress(address) {
    const { shippingAndBilling } = this.state;
    if (shippingAndBilling === "same") {
      this.setState(
        {
          billingAddress: address,
        },
        () => this.setShippingAddress("same")
      );
    }
  }
  setShippingAddress(sameAddress, payload = false) {
    //the if clause below doesnt change shippingAddress when billing changes. Figure out later.
    if (sameAddress && !payload) {
      this.setState({ shippingAddress: this.state.billingAddress }, () =>
        console.log(this.state.shippingAddress)
      );
    } else if (!sameAddress && payload) {
      this.setState({ shippingAddress: payload }, () =>
        console.log(this.state.shippingAddress)
      );
    }
  }
  sameInputChange = (e) => {
    console.log("event", e.target.value);
    this.setShippingAddress(e.target.value);
    this.handleShippingAndBilling(e.target.value);
  };
  diffInputChange = (e) => {
    console.log("event", e.target.value);
    this.handleShippingAndBilling(e.target.value);
  };
  handleShippingAndBilling(status) {
    this.setState({ shippingAndBilling: status });
  }
  toggleGift() {
    this.setState({
      isGift: !this.state.isGift,
    });
  }
  render() {
    const {
      removeAddress,
      setNewDefault,
      removeDefault,
      addresses,
      user,
    } = this.props;
    const { shippingAndBilling } = this.state;
    console.log(shippingAndBilling);
    return (
      <div id="checkout-page">
        <div className="checkout-header">
          <h3>Review and Place your Order </h3>
          <h5>Enter your billing and shipping information </h5>
        </div>
        <div className="checkout-pre-form-container">
          <div className="checkout-sample-advert">
            <h3>Take 20% Off One Full-Price Item!</h3>
            <p>Complete a quick survey to redeem coupon.</p>
            <button className="medium-btn-white">Survey</button>
          </div>
          <div className="checkout-help-container">
            <p className="checkout-help-text">
              <span>Need Help?</span> Our 24/7 staff will be happy to assist
              you.
            </p>
            <p className="checkout-help-text">
              Call <span>1-234-567-8910</span>
            </p>
          </div>
        </div>
        <div className="checkout-step-container">
          <h3 className="checkout-step-header">
            1. Select your Billing Address
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
          <h3 className="checkout-step-header">2. Choose a Shipping Address</h3>
          <div className="select-ship-address-page">
            <div className="ship-address-input-group">
              <input
                checked={this.state.shippingAndBilling === "same"}
                name="shipAddress"
                type="radio"
                value="same"
                onChange={this.sameInputChange}
              />
              <span>Ship to My Billing Address</span>
            </div>
            <div className="ship-address-input-group">
              <input
                checked={this.state.shippingAndBilling === "different"}
                name="shipAddress"
                type="radio"
                value="different"
                onChange={this.diffInputChange}
              />
              <span>Ship to Different Address</span>
            </div>
          </div>
          {/* need to add a form for add address */}
          {shippingAndBilling === "different" ? (
            <ShippingAddresses
              setShippingAddress={this.setShippingAddress}
              addresses={addresses}
              removeAddress={removeAddress}
              removeDefault={removeDefault}
              setNewDefault={setNewDefault}
            />
          ) : shippingAndBilling === "same" ? null : null}
        </div>
        <div className="checkout-step-container">
          <h3 className="checkout-step-header">
            3. Select Gift Options <span className="optional">(Optional)</span>
          </h3>
          <GiftOption toggleGift={this.toggleGift} />
        </div>
        <div className="checkout-step-container">
          <h3 className="checkout-step-header">4. Select Payment Method</h3>
          <SelectPayment />
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({
  addresses: state.addresses,
  user: state.user,
});
const mapDispatch = (dispatch) => ({
  fetchAddresses: () => dispatch(getAddressesThunk()),
  removeAddress: (addressId) => dispatch(removeAddressThunk(addressId)),
  removeDefault: () => dispatch(removeCurrentDefaultThunk()),
  setNewDefault: (address) => dispatch(setDefaultThunk(address)),
});
export default connect(mapState, mapDispatch)(Checkout);
