import React from "react";

class CarepkgNewsletter extends React.Component {
  constructor() {
    super();
    this.state = {
      email: ""
    };
  }
  handleType(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  render() {
    return (
      <div className="footer-snippet">
        <p>
          <strong>Stay in the know</strong>
        </p>
        <p>Sign up for information on carepkg sales and deals</p>
        <form>
          <label htmlFor="email">
            <strong>Email:</strong>
          </label>
          <input
            id="email-sub-input"
            type="text"
            name="email"
            value={this.state.email}
            onChange={e => this.handleType(e)}
          />
          <button className="footer-btn">Submit</button>
        </form>
      </div>
    );
  }
}

export default CarepkgNewsletter;
