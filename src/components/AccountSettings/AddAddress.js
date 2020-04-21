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
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  render() {
    return (
      <div>
        <form>
          <label htmlFor></label>
          <input name="address1" type="text" value={this.state.address1} />
          <label htmlFor></label>
          <input name="address2" type="text" value={this.state.address2} />
          <label htmlFor></label>
          <input name="city" type="text" value={this.state.city} />
          <label htmlFor></label>
          <input name="state" type="text" value={this.state.state} />
          <label htmlFor></label>
          <input name="country" type="text" value={this.state.country} />
          <label htmlFor></label>
          <input name="zip" type="text" value={this.state.zip} />
          <label htmlFor></label>
          <input name="phone" type="text" value={this.state.phone} />
        </form>
      </div>
    );
  }
}

export default AddAddress;
