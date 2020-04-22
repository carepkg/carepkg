import React from "react";

class AddAddress extends React.Component {
  constructor() {
    super();
    this.state = {
      address1: "",
      address2: "",
      city: "",
      state: "",
      country: "",
      zip: "",
      phone: "",
      setAsDefault: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  render() {
    return (
      <div id="add-address-page">
        <h3>Add Address</h3>
        <form id="add-address-form">
          <input
            name="address1"
            type="text"
            value={this.state.address1}
            onChange={this.handleChange}
            placeholder="Address"
          />
          <input
            name="address2"
            type="text"
            value={this.state.address2}
            onChange={this.handleChange}
            placeholder="Address"
          />
          <input
            name="city"
            type="text"
            value={this.state.city}
            onChange={this.handleChange}
            placeholder="City"
          />
          <input
            name="state"
            type="text"
            value={this.state.state}
            onChange={this.handleChange}
            placeholder="State"
          />
          <input
            name="country"
            type="text"
            value={this.state.country}
            onChange={this.handleChange}
            placeholder="Country"
          />
          <input
            name="zip"
            type="text"
            value={this.state.zip}
            onChange={this.handleChange}
            placeholder="Zip Code"
          />
          <input
            name="phone"
            type="text"
            value={this.state.phone}
            onChange={this.handleChange}
            placeholder="Phone"
          />
        </form>
        <div id="add-address-btn-menu">
          <button className="add-address-save-btn">Save</button>
          <button className="add-address-cancel-btn">Cancel</button>
        </div>
      </div>
    );
  }
}

export default AddAddress;
