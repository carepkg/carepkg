import React from "react";

const initialState = {
  address1: "",
  address2: "",
  city: "",
  stateAbbr: "",
  country: "",
  zip: "",
  phone: "",
  setAsDefault: false
};
class AddAddress extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address1: "",
      address2: "",
      city: "",
      stateAbbr: "",
      country: "",
      zip: "",
      phone: "",
      setAsDefault: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetState = this.resetState.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  resetState() {
    this.setState(initialState);
  }
  render() {
    return (
      <div id="add-address-page">
        <h3>Add Address</h3>
        <form className="acct-settings-form">
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Name"
            autoComplete="off"
          />
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
          <select
            name="country"
            className="add-address-select"
            value={this.state.country || "United States"}
            onChange={this.handleChange}
          >
            <option value="">Select</option>
            <option value="Canada">Canada</option>
            <option value="United States">United States</option>
            <option value="Other">Other</option>
          </select>
          <select
            className="add-address-select"
            name="stateAbbr"
            onChange={this.handleChange}
            value={this.state.stateAbbr || "State"}
          >
            {this.state.country === "United States" || !this.state.country ? (
              <React.Fragment>
                <option value="">Select</option>
                <option value="AL">AL</option>
                <option value="AK">AK</option>
                <option value="AS">AS</option>
                <option value="AZ">AZ</option>
                <option value="AR">AR</option>
                <option value="CA">CA</option>
                <option value="CO">CO</option>
                <option value="CT">CT</option>
                <option value="DE">DE</option>
                <option value="DC">DC</option>
                <option value="FL">FL</option>
                <option value="GA">GA</option>
                <option value="GU">GU</option>
                <option value="HI">HI</option>
                <option value="ID">ID</option>
                <option value="IL">IL</option>
                <option value="IN">IN</option>
                <option value="IA">IA</option>
                <option value="KS">KS</option>
                <option value="KY">KY</option>
                <option value="LA">LA</option>
                <option value="ME">ME</option>
                <option value="MD">MD</option>
                <option value="MH">MH</option>
                <option value="MA">MA</option>
                <option value="MI">MI</option>
                <option value="FM">FM</option>
                <option value="MN">MN</option>
                <option value="MS">MS</option>
                <option value="MO">M0</option>
                <option value="MT">MT</option>
                <option value="NE">NE</option>
                <option value="NV">NV</option>
                <option value="NH">NH</option>
                <option value="NJ">NJ</option>
                <option value="NM">NM</option>
                <option value="NY">NY</option>
                <option value="NC">NC</option>
                <option value="ND">ND</option>
                <option value="MP">MP</option>
                <option value="OH">0H</option>
                <option value="OK">0K</option>
                <option value="OR">0R</option>
                <option value="PW">PW</option>
                <option value="PA">PA</option>
                <option value="PR">PR</option>
                <option value="RI">RI</option>
                <option value="SC">SC</option>
                <option value="SD">SD</option>
                <option value="TN">TN</option>
                <option value="TX">TX</option>
                <option value="UT">UT</option>
                <option value="VT">VT</option>
                <option value="VA">VA</option>
                <option value="VI">VI</option>
                <option value="WA">WA</option>
                <option value="WV">WV</option>
                <option value="WI">WI</option>
                <option value="WY">WY</option>
              </React.Fragment>
            ) : this.state.country === "Canada" ? (
              <React.Fragment>
                <option value="">Select</option>
                <option value="Alberta">Alberta</option>
                <option value="British Columbia">British Columbia</option>
                <option value="Manitoba">Manitoba</option>
                <option value="New Brunswick">New Brunswick</option>
                <option value="Newfoundland">Newfoundland</option>
                <option value="Northwest Territories">
                  Northwest Territories
                </option>
                <option value="Nova Scotia">Nova Scotia</option>
                <option value="Nunavut">Nunavut</option>
                <option value="Ontario">Ontario</option>
                <option value="Prince Edward Island">
                  Prince Edward Island
                </option>
                <option value="Quebec">Quebec</option>
                <option value="Saskatchewan">Saskatchewan</option>
                <option value="Yukon Territory">Yukon Territory</option>
              </React.Fragment>
            ) : null}
          </select>

          <input
            name="zip"
            type="text"
            value={this.state.zip}
            onChange={this.handleChange}
            placeholder="Zip/Postal Code"
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
          <button className="add-address-cancel-btn" onClick={this.resetState}>
            Cancel
          </button>
        </div>
      </div>
    );
  }
}

export default AddAddress;
