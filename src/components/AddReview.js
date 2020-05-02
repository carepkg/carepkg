import React from "react";
import { addReviewThunk } from "../store/reviews";

const resetState = {
  rating: 0,
  title: "",
  familiarity: "",
  text: "",
  isWriting: false
};
class AddReview extends React.Component {
  constructor() {
    super();
    this.state = {
      rating: 0,
      title: "",
      familiarity: "",
      text: "",
      isWriting: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.cancelReview = this.cancelReview.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  cancelReview(event) {
    event.preventDefault();
    this.setState(resetState);
  }
  render() {
    const familiarities = [
      "Never used it",
      "I've used it once or twice",
      "I use it fairly often",
      "I use it all the time"
    ];
    return this.state.isWriting ? (
      <form className="add-review-form" onSubmit={this.handleSubmit}>
        <div className="add-review-stars-container">
          <label>
            Rating <span>*</span>
          </label>
        </div>
        <label>
          Familiarity <span>*</span>
        </label>
        <select
          className="add-address-select"
          name="familiarity"
          value={this.state.familiarity}
          onChange={this.handleChange}
        >
          <option value={familiarities[0]}>Never used it</option>
          <option value={familiarities[1]}>I've used it once or twice</option>
          <option value={familiarities[2]}>I use it fairly often</option>
          <option value={familiarities[3]}>I use it all the time</option>
        </select>
        <label htmlFor="title">
          Title <span>*</span>
        </label>
        <input
          className="add-review-title"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
          maxLength="40"
          autoComplete="off"
        />
        <label htmlFor="text">
          Review <span>*</span>
        </label>
        <textarea
          className="add-review-text"
          name="text"
          value={this.state.text}
          onChange={this.handleChange}
          resize={false}
          maxLength="400"
          autoComplete="off"
        />
        <div className="add-review-button-menu">
          <button type="submit" className="black-btn submit-review-btn">
            Submit Review
          </button>
          <button className="add-review-cancel-btn">Cancel</button>
        </div>
      </form>
    ) : null;
  }
}

export default AddReview;
