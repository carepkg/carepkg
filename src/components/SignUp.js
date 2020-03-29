import React from "react";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: 0,
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
  }
  render() {
    return (
      <div className="sign-in-content">
        <div id="signup-form">
          <h2>Login</h2>
          <div className="input-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email..."
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password..."
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <button
            type="button"
            className="login-btn"
            onClick={this.handleSubmit.bind(this)}
          >
            Login
          </button>
          <p>
            <input type="checkbox" />
            Remember Me
          </p>
        </div>
      </div>
    );
  }
}
export default SignUp;
