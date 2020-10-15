import React, { Component } from "react";
import { connect } from "react-redux";
import { getCartThunk } from "../../store/cart";
import { getCategoriesThunk } from "../../store/categories";
import LandingSponsors from "./LandingSponsors";
import LandingCatFooter from "./LandingCatFooter";
import CarepkgHelp from "../Universal/CarepkgHelp";
import CarepkgNewsletter from "../Universal/CarepkgNewsletter";
import FooterBottom from "../Universal/FooterBottom";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    if (this.props.user.id) {
      this.props.fetchCart(this.props.user.id);
    }
    this.props.fetchCategories();
  }
  render() {
    const { user, categories } = this.props;
    return (
      <div id="landing-page">
        <div id="bg-img-content">
          <div id="landing-text">
            <p id="landing-text-1">carepkg</p>
            <p id="landing-text-2">The One and Only Place to Shop</p>
            <p id="landing-text-3">All things nature</p>
            <button id="landing-text-btn">Shop Now</button>
          </div>
        </div>
        <div id="landing-section-2">
          <LandingSponsors />
          <LandingCatFooter categories={categories} />
        </div>
        <div id="landing-footer-main">
          <div className="landing-page-break"></div>
          <div id="info-footer">
            <CarepkgHelp />
            <CarepkgNewsletter />
          </div>
          <div className="landing-page-break"></div>
          <FooterBottom />
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({
  user: state.user,
  categories: state.categories,
});
const mapDispatch = (dispatch) => ({
  fetchCart: (userId) => dispatch(getCartThunk(userId)),
  fetchCategories: () => dispatch(getCategoriesThunk()),
});

export default connect(mapState, mapDispatch)(LandingPage);
