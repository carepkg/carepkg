import React from "react";
import { updateEmailThunk } from "../../store/user";
import MatchError from "./MatchError";
import ChangeSuccess from "./ChangeSuccess";
import InvalidEmailError from "./InvalidEmailError";
import { connect } from "react-redux";
import { me } from "../../store/user";

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
    const { user, updateEmail } = this.props;
    if (this.state.email.indexOf("@") === -1) {
      this.setState({
        error: "invalid email"
      });
    } else if (this.state.email !== this.state.confirmEmail) {
      this.setState({
        error: "matching"
      });
    } else {
      updateEmail(user.email, this.state.email);
      this.setState({ success: true });
    }
    this.setState({ email: "", confirmEmail: "" });
    setTimeout(() => this.setState(initialState), 6000);
  }
  render() {
    const { error, success } = this.state;
    console.log(error);
    return (
      <div className="change-cred-page">
        <h3 className="change-email-hdr">Change Email</h3>
        <h5>Current Email: {this.props.user.email}</h5>
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
          <button type="submit" className="white-btn">
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

const mapState = state => ({
  user: state.user
});
const mapDispatch = dispatch => ({
  updateEmail: (originalEmail, newEmail) =>
    dispatch(updateEmailThunk(originalEmail, newEmail))
});

export default connect(mapState, mapDispatch)(ChangeEmail);
