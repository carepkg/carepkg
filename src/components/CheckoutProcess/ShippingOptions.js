import React from "react";

class ShippingOptions extends React.Component {
  constructor() {
    super();
    this.state = {
      option: "",
      cost: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      option: event.target.value
    });
  }
  render() {
    console.log(this.state.option);
    return (
      <form>
        <div className="shipping-input-group">
          <span>
            <input
              defaultChecked={true}
              name="option"
              type="radio"
              value="free"
              onChange={this.handleChange}
            />
            Standard (5-10 Business Days)
          </span>
          <span>FREE</span>
        </div>
        <div className="shipping-input-group">
          <span>
            <input
              name="option"
              type="radio"
              value="two"
              onChange={this.handleChange}
            />
            Two Business Days
          </span>
          <span>$19.95</span>
        </div>
        <div className="shipping-input-group">
          <span>
            <input
              name="option"
              type="radio"
              value="one"
              onChange={this.handleChange}
            />
            One Business Day
          </span>
          <span></span>
        </div>
      </form>
    );
  }
}
export default ShippingOptions;
