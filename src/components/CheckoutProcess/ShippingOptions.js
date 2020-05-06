import React from "react";
import { connect } from "react-redux";
import { getShippingsThunk } from "../../store/shippings";
import BriefOrderSummary from "./BriefOrderSummary";

class ShippingOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      option: "",
      cost: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.props.fetchShippings();
  }
  handleChange(event) {
    this.setState({
      option: event.target.value.split(" ")[0],
      cost: Number(event.target.value.split(" ")[1])
    });
  }
  render() {
    const { shippingOptions, totals } = this.props;
    let subtotal = totals
      ? totals.reduce((acc, curr) => acc + Number(curr), 0).toFixed(2)
      : 0;
    const [standard, twoDay, oneDay] = shippingOptions;
    return shippingOptions.length ? (
      <div className="cart-selection-container">
        <form className="shipping-option-form">
          <h3>Select Shipping Option:</h3>
          <div className="shipping-input-group">
            <span className="shipping-name">
              <input
                defaultChecked={true}
                name="option"
                type="radio"
                value="free 0"
                onChange={this.handleChange}
              />
              {standard.name}
            </span>
            <span className="shipping-free">FREE!</span>
          </div>
          <div className="shipping-input-group">
            <span className="shipping-name">
              <input
                name="option"
                type="radio"
                value="two 12.99"
                onChange={this.handleChange}
              />
              {twoDay.name}
            </span>
            <span className="shipping-cost">
              <span className="dollar-sign">$</span>
              {twoDay.cost}
            </span>
          </div>
          <div className="shipping-input-group">
            <span className="shipping-name">
              <input
                name="option"
                type="radio"
                value="one 19.99"
                onChange={this.handleChange}
              />
              {oneDay.name}
            </span>
            <span className="shipping-cost">
              <span className="dollar-sign">$</span>
              {oneDay.cost}
            </span>
          </div>
        </form>
        <BriefOrderSummary subtotal={subtotal} shippingCost={this.state.cost} />
      </div>
    ) : null;
  }
}
const mapState = state => ({
  shippingOptions: state.shippings
});
const mapDispatch = dispatch => ({
  fetchShippings: () => dispatch(getShippingsThunk())
});
export default connect(mapState, mapDispatch)(ShippingOptions);
