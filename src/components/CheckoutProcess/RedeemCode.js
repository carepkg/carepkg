import React from "react";

class RedeemCode extends React.Component {
  constructor(props) {
    super();
    this.state = {
      redeemCode: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  render() {
    const {
      asteriskFillerText,
      headerTitle,
      redeemCode,
      codeObj,
      onClose,
      show,
    } = this.props;
    const showHideClassName = show
      ? "modal display-block"
      : "modal display-none";
    return (
      <div className={showHideClassName}>
        <div className="modal-main">
          <div className="checkout-rc-modal-top">
            <span>
              *{asteriskFillerText} codes should be redeemed <span>here</span>
            </span>
            <button onClick={() => onClose(codeObj)}>X</button>
          </div>
          <div className="checkout-rc-modal-content">
            <p>{headerTitle}</p>
            <input
              name="redeemCode"
              value={this.state.redeemCode}
              onChange={this.handleChange}
            />
            <button
              className="medium-btn-black"
              onClick={() => redeemCode(this.state.redeemCode, codeObj)}
            >
              Redeem
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default RedeemCode;
