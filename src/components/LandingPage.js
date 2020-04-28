import React, { Component } from "react";
import { connect } from "react-redux";
import FeaturedPkgs from "./FeaturedPkgs";
import { getCartThunk } from "../store/cart";
import { getPackagesThunk } from "../store/packages";
import {
  getUpvoteThunk,
  addUpvoteThunk,
  deleteUpvoteThunk
} from "../store/upvote";
import { getCategoriesThunk } from "../store/categories";
import LandingSponsors from "./LandingSponsors";
import LandingCatFooter from "./LandingCatFooter";
import CarepkgHelp from "./CarepkgHelp";
import CarepkgNewsletter from "./CarepkgNewsletter";
import FooterBottom from "./FooterBottom";
import PackageCard from "./PackageCard";
class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      packages: []
    };
  }
  componentDidMount() {
    if (this.props.user.id) {
      this.props.fetchCart(this.props.user.id);
    }
    //fetch packages
    this.props.fetchPackages();
    this.props.fetchCategories();
  }
  render() {
    const { packages, user, categories } = this.props;
    console.log(packages);
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
          <h1>Featured Packages</h1>
          <h3>Our user top-rated packages for you to browse</h3>
          <div id="featured-pkgs-container">
            {packages
              ? packages.map(pkg => {
                  const price =
                    pkg.packageLineItems &&
                    pkg.packageLineItems
                      .reduce(
                        (acc, item) => acc + item.product.price * item.qty,
                        0
                      )
                      .toFixed(2);
                  return (
                    <PackageCard
                      pkg={pkg}
                      price={price}
                      user={user}
                      landing={true}
                    />
                  );
                })
              : null}
          </div>
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

const mapState = state => ({
  user: state.user,
  packages: state.packages,
  upvote: state.upvote,
  upvotePkg: state.pkg,
  categories: state.categories
});
const mapDispatch = dispatch => ({
  fetchCart: userId => dispatch(getCartThunk(userId)),
  fetchPackages: () => dispatch(getPackagesThunk()),
  fetchUpvote: (userId, packageId) =>
    dispatch(getUpvoteThunk(userId, packageId)),
  createUpvote: (userId, packageId) =>
    dispatch(addUpvoteThunk(userId, packageId)),
  deleteUpvote: (userId, packageId) =>
    dispatch(deleteUpvoteThunk(userId, packageId)),
  fetchCategories: () => dispatch(getCategoriesThunk())
});

export default connect(mapState, mapDispatch)(LandingPage);
