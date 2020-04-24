import React from "react";
import { updateEmailThunk } from "../../store/credentials";
import MatchError from "./MatchError";
import ChangeSuccess from "./ChangeSuccess";
import InvalidEmailError from "./InvalidEmailError";
import { connect } from "react-redux";

const initialState = {
  email: "",
  confirmEmail: "",
  error: "",
  success: false
};
class ChangeEmail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      confirmEmail: "",
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
    if (this.state.email.indexOf("@") === -1) {
      this.setState({
        error: "invalid email"
      });
    } else if (this.state.email !== this.state.confirmEmail) {
      this.setState({
        error: "matching"
      });
    } else {
      updateEmailThunk(this.state.email).then(() =>
        this.setState({ success: true })
      );
    }

    this.setState(initialState);
  }
  render() {
    const originalEmail = this.props.user.email;
    const { error, success } = this.state;
    return (
      <div id="change-email-page">
        <h3>Change Email</h3>
        <h5>Current Email: {originalEmail}</h5>
        <form className="acct-settings-form" onSubmit={this.handleSubmit}>
          <input
            name="email"
            type="text"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="New Email"
            autoComplete="off"
          ></input>
          <input
            name="confirmEmail"
            type="text"
            value={this.state.confirmEmail}
            onChange={this.handleChange}
            placeholder="Confirm New Email"
            autoComplete="off"
          ></input>
          <button type="submit" className="change-email-btn">
            Save
          </button>
        </form>

        {error === "invalid email" ? (
          <InvalidEmailError />
        ) : error === "matching" ? (
          <MatchError />
        ) : null}
        {success && <ChangeSuccess type={"email"} />}
      </div>
    );
  }
}

const mapDispatch = dispatch => ({
  updateEmail: email => dispatch(updateEmailThunk(email))
});

export default connect(null, mapDispatch)(ChangeEmail);
