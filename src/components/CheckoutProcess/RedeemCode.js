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
    const { show, onClose, redeemCode } = this.props;
    const showHideClassName = show
      ? "modal display-block"
      : "modal display-none";
    return (
      <div className={showHideClassName}>
        <div className="modal-main">
          <div className="checkout-rc-modal-top">
            <span>
              *Gift certificate codes should be redeemed <span>here</span>
            </span>
            <button onClick={(e) => onClose(e)}>X</button>
          </div>
          <div className="checkout-rc-modal-content">
            <p>Redeem Code</p>
            <input
              name="redeemCode"
              value={this.state.redeemCode}
              onChange={this.handleChange}
            />
            <button
              className="medium-btn-black"
              onClick={() => redeemCode(this.state.redeemCode)}
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
