import React from "react";
import { connect } from "react-redux";
import BillingAddresses from "./BillingAddresses";
import ShippingAddresses from "./ShippingAddresses";
import GiftOption from "./GiftOption";
import StripeCheckout from "react-stripe-checkout";
import RedeemCode from "./RedeemCode";
import CarepkgHelp from "../Universal/CarepkgHelp";
import CarepkgNewsletter from "../Universal/CarepkgNewsletter";
import FooterBottom from "../Universal/FooterBottom";
import axios from "axios";
import {
  getAddressesThunk,
  removeAddressThunk,
  removeCurrentDefaultThunk,
  setDefaultThunk,
} from "../../store/addresses";

//Toast success message for stripe checkout
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      billingAddress: {},
      shippingAddress: {},
      shippingAndBilling: "same",
      isGift: false,
      showRedeemCodeModal: false,
      showRedeemCodeModal2: false,
      redeemCode: "",
      redeemCode2: "",
    };
    this.setBillingAddress = this.setBillingAddress.bind(this);
    this.setShippingAddress = this.setShippingAddress.bind(this);
    this.handleShippingAndBilling = this.handleShippingAndBilling.bind(this);
    this.sameInputChange = this.sameInputChange.bind(this);
    this.diffInputChange = this.diffInputChange.bind(this);
    this.showRCModal = this.showRCModal.bind(this);
    this.closeRCModal = this.closeRCModal.bind(this);
    this.redeemCode = this.redeemCode.bind(this);
    this.toggleGift = this.toggleGift.bind(this);
    this.handleToken = this.handleToken.bind(this);
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
  showRCModal(codeObj) {
    codeObj.type === "promo"
      ? this.setState({ showRedeemCodeModal: true })
      : this.setState({ showRedeemCodeModal2: true });
  }
  closeRCModal(codeObj) {
    codeObj.type === "promo"
      ? this.setState({ showRedeemCodeModal: false })
      : this.setState({ showRedeemCodeModal2: false });
  }
  redeemCode(code, codeObj) {
    codeObj.type === "promo"
      ? this.setState({ redeemCode: code }, () => this.closeRCModal(codeObj))
      : this.setState({ redeemCode2: code }, () => this.closeRCModal(codeObj));
  }
  toggleGift() {
    this.setState({
      isGift: !this.state.isGift,
    });
  }
  async handleToken(
    token,
    addresses = {
      billing: this.state.billingAddress,
      shipping: this.state.shippingAddress,
    }
  ) {
    const response = await axios.post("/checkout-stripe", { token, addresses });
    const { status } = response.data;
    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Oops! Something went wrong.", { type: "error" });
    }
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
          <div className="billing-address-wrapper">
            <BillingAddresses
              addresses={addresses}
              removeAddress={removeAddress}
              removeDefault={removeDefault}
              setNewDefault={setNewDefault}
              setBillingAddress={this.setBillingAddress}
            />
          </div>
        </div>
        <div className="checkout-step-container">
          <h3 className="checkout-step-header">2. Choose a Shipping Address</h3>
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
          <h3 className="checkout-step-header">
            4. Verify Payment Information
          </h3>
          <div className="checkout-redeem-section-wrapper">
            <button
              className="checkout-rc-modal-btn"
              onClick={(e) => {
                this.showRCModal({ type: "promo" });
              }}
            >
              <span>+</span>Redeem a promo code
            </button>
            {this.state.redeemCode && (
              <p className="redeem-code">
                Code: <span className="bold">{this.state.redeemCode}</span>
              </p>
            )}
            <button
              className="checkout-rc-modal-btn"
              onClick={(e) => {
                this.showRCModal({ type: "gift-certificate" });
              }}
            >
              <span>+</span>Redeem a gift certificate
            </button>
            {this.state.redeemCode2 && (
              <p className="redeem-code">
                Code: <span className="bold">{this.state.redeemCode2}</span>
              </p>
            )}
          </div>
          <RedeemCode
            asteriskFillerText="Gift certificate"
            headerTitle="Redeem Code"
            redeemCode={this.redeemCode}
            codeObj={{ type: "promo" }}
            onClose={this.closeRCModal}
            show={this.state.showRedeemCodeModal}
          />
          <RedeemCode
            asteriskFillerText="Promo"
            headerTitle="Gift Certificate"
            redeemCode={this.redeemCode}
            codeObj={{ type: "gift-certificate" }}
            onClose={this.closeRCModal}
            show={this.state.showRedeemCodeModal2}
          />

          <StripeCheckout
            stripeKey="pk_test_51HmPaAAYf0d6QX7h5V5wgTn8YhKdUwC5VgYHrrUmdS1ilzcWTs9kJLndhNnT8kw1eBP7k7IKv6hRBlbKu24IqnTU00aRBFrD6f"
            token={this.handleToken}
            amount={1 * 100}
            style={{ width: "300px", margin: "8px 32px" }}
          />
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
