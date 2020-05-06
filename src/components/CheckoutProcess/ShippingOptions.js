import React from "react";
import { connect } from "react-redux";
import { getShippingsThunk } from "../../store/shippings";

class ShippingOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      option: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.props.fetchShippings();
  }
  handleChange(event) {
    this.setState({
      option: event.target.value
    });
  }
  render() {
    const { shippingOptions } = this.props;
    console.log(shippingOptions);
    const [standard, twoDay, oneDay] = shippingOptions;
    return shippingOptions.length ? (
      <div className="cart-selection-container">
        <form className="shipping-option-form">
          <h1>Select Shipping Option:</h1>
          <div className="shipping-input-group">
            <span>
              <input
                defaultChecked={true}
                name="option"
                type="radio"
                value="free"
                onChange={this.handleChange}
              />
              {standard.name}
            </span>
            <span>FREE!</span>
          </div>
          <div className="shipping-input-group">
            <span>
              <input
                name="option"
                type="radio"
                value="two"
                onChange={this.handleChange}
              />
              {twoDay.name}
            </span>
            <span className="">
              <span className="dollar-sign">$</span>
              {twoDay.cost}
            </span>
          </div>
          <div className="shipping-input-group">
            <span>
              <input
                name="option"
                type="radio"
                value="one"
                onChange={this.handleChange}
              />
              {oneDay.name}
            </span>
            <span>
              <span className="dollar-sign">$</span>
              {oneDay.cost}
            </span>
          </div>
        </form>
        <div className="cart-order-summary"></div>
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
