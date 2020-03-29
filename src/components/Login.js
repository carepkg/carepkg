import React from "react";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
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
        <div id="login-form">
          <h2>Login</h2>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter email..."
              value={this.state.email}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
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
