import React from "react";

class CarepkgNewsletter extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
    };
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  render() {
    return (
      <div className="footer-snippet">
        <p className="bold footer-header">Stay in the know</p>
        <p className="footer-sub-header">
          Be the first to see new products and sales!
        </p>
        <form>
          <label className="bold" htmlFor="email">
            Email Address
          </label>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <input
              id="email-sub-input"
              type="text"
              name="email"
              value={this.state.email}
              onChange={(e) => this.handleChange(e)}
            />
            <button className="medium-btn-black">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CarepkgNewsletter;
