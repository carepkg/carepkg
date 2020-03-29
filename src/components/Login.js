import React from "react";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
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
        <div id="login-form">
          <h2>Login</h2>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter email..."
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
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
export default Login;
