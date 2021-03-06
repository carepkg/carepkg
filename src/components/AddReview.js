import React from "react";
import { connect } from "react-redux";
import { addReviewThunk } from "../store/reviews";

class AddReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      star: 0,
      title: "",
      familiarity: "",
      text: "",
      writing: this.props.writing
    };
    this.handleChange = this.handleChange.bind(this);
    this.clearReview = this.clearReview.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    const productId = this.props.productId;
    const userId = this.props.userId;
    const star = this.state.star;
    const familiarity = event.target.familiarity.value;
    const title = event.target.title.value;
    const text = event.target.text.value;
    const author = this.props.author;

    this.props.postReview({
      productId,
      star,
      familiarity,
      title,
      text,
      userId,
      author
    });
    this.clearReview(event);
  }
  clearReview(event) {
    event.preventDefault();
    this.setState({
      star: 0,
      title: "",
      familiarity: "",
      text: ""
    });
    this.props.isWriting(false);
  }
  render() {
    const familiarities = [
      "Never used it",
      "I've used it once or twice",
      "I use it fairly often",
      "I use it all the time"
    ];
    return this.state.writing ? (
      <form className="add-review-form" onSubmit={this.handleSubmit}>
        <div className="add-review-stars-container">
          <label>
            Rating <span>*</span>
            <div className="txt-center">
              <form>
                <div className="rating">
                  <input
                    id="star5"
                    name="star"
                    type="radio"
                    value="5"
                    className="radio-btn hide"
                    onChange={this.handleChange}
                  />
                  <label htmlFor="star5">☆</label>
                  <input
                    id="star4"
                    name="star"
                    type="radio"
                    value="4"
                    className="radio-btn hide"
                    onChange={this.handleChange}
                  />
                  <label htmlFor="star4">☆</label>
                  <input
                    id="star3"
                    name="star"
                    type="radio"
                    value="3"
                    className="radio-btn hide"
                    onChange={this.handleChange}
                  />
                  <label htmlFor="star3">☆</label>
                  <input
                    id="star2"
                    name="star"
                    type="radio"
                    value="2"
                    className="radio-btn hide"
                    onChange={this.handleChange}
                  />
                  <label htmlFor="star2">☆</label>
                  <input
                    id="star1"
                    name="star"
                    type="radio"
                    value="1"
                    className="radio-btn hide"
                    onChange={this.handleChange}
                  />
                  <label htmlFor="star1">☆</label>
                  <div className="clear"></div>
                </div>
              </form>
            </div>
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
          <button className="add-review-cancel-btn" onClick={this.clearReview}>
            Cancel
          </button>
        </div>
      </form>
    ) : null;
  }
}
const mapState = state => ({
  userId: state.user.id
});
const mapDispatch = dispatch => ({
  postReview: review => dispatch(addReviewThunk(review))
});

export default connect(mapState, mapDispatch)(AddReview);
