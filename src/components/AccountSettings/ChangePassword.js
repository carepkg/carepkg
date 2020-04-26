import React from "react";
import { connect } from "react-redux";
import PasswordError from "./PasswordError";
import { updatePasswordThunk } from "../../store/user";
import ChangeSuccess from "./ChangeSuccess";
import { thisExpression } from "@babel/types";

const initialState = {
  oldPassword: "",
  newPassword: "",
  confirmPassword: "",
  error: "",
  success: false
};
class ChangePassword extends React.Component {
  constructor() {
    super();
    this.state = {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
      error: "",
      success: false
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
    const { user, updatePassword } = this.props;
    const { oldPassword, newPassword, confirmPassword } = this.state;
    if (newPassword.length < 2) {
      this.setState({
        error: "invalid password"
      });
    } else if (oldPassword === newPassword) {
      this.setState({
        error: "same"
      });
    } else if (newPassword !== confirmPassword) {
      this.setState({
        error: "matching"
      });
    } else {
      updatePassword(user.password, this.state.newPassword);
      this.setState({ success: true });
    }
    this.setState({ oldPassword: "", newPassword: "", confirmPassword: "" });
    setTimeout(() => this.setState(initialState), 6000);
  }
  render() {
    const { error, success } = this.state;
    return (
      <div className="change-cred-page">
        <h3 className="change-password-hdr">Change Password</h3>
        <form className="acct-settings-form" onSubmit={this.handleSubmit}>
          <input
            name="oldPassword"
            type="text"
            value={this.state.oldPassword}
            onChange={this.handleChange}
            placeholder="Old Password"
            autoComplete="off"
          ></input>
          <input
            name="newPassword"
            type="text"
            value={this.state.newPassword}
            onChange={this.handleChange}
            placeholder="New Password"
            autoComplete="off"
          ></input>
          <input
            name="confirmPassword"
            type="text"
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            placeholder="Confirm New Password"
            autoComplete="off"
          ></input>
          <button type="submit" className="white-btn">
            Save
          </button>
        </form>
        {error && <PasswordError type={error} />}
        {success && <ChangeSuccess type="password" />}
      </div>
    );
  }
}
const mapState = state => ({
  user: state.user
});
const mapDispatch = dispatch => ({
  updatePassword: (originalPass, newPass) =>
    dispatch(updatePasswordThunk(originalPass, newPass))
});

export default connect(mapState, mapDispatch)(ChangePassword);
