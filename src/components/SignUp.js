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
        <h2>Sign Up</h2>
        <div id="sign-up-name-group">
          <div className="input-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="John"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Doe"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </div>
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
    );
  }
}
export default SignUp;
