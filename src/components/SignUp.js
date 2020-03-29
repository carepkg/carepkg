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
      <div>
        <div id="signup-form">
          <h2>Login</h2>
          <div className="input-group">
            <label htmlFor="firstName">Email</label>
            <input
              type="email"
              name="firstName"
              placeholder="Enter email..."
              value={this.state.email}
            />
          </div>
          <div className="input-group">
            <label htmlFor="lastName">Email</label>
            <input
              type="email"
              name="lastName"
              placeholder="Enter email..."
              value={this.state.email}
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email..."
              value={this.state.email}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password..."
              value={this.state.password}
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
export default Login;
