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
            autoComplete="off"
          />
          <input
            name="address2"
            type="text"
            value={this.state.address2}
            onChange={this.handleChange}
            placeholder="Address"
            autoComplete="off"
          />
          <input
            name="city"
            type="text"
            value={this.state.city}
            onChange={this.handleChange}
            placeholder="City"
            autoComplete="off"
          />
          <input
            name="state"
            type="text"
            value={this.state.state}
            onChange={this.handleChange}
            placeholder="State"
            autoComplete="off"
          />
          <select
            name="country"
            className="add-address-country-select"
            value={this.state.country || "United States"}
            onChange={this.handleChange}
          >
            <option value="">Select</option>
            <option value="Canada">Canada</option>
            <option value="United States">United States</option>
            <option value="Other">Other</option>
          </select>
          <input
            name="zip"
            type="text"
            value={this.state.zip}
            onChange={this.handleChange}
            placeholder="Zip Code"
            autoComplete="off"
          />
          <input
            name="phone"
            type="text"
            value={this.state.phone}
            onChange={this.handleChange}
            placeholder="Phone"
            autoComplete="off"
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
