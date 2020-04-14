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
class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      packages: []
    };
  }
  componentDidMount() {
    if (this.props.user.id) {
      console.log("here");
      this.props.fetchCart(this.props.user.id);
    }
    //fetch packages
    this.props.fetchPackages().then(
      res =>
        this.setState({
          packages: res
        })
      // ^^^^ not working
    );
  }
  render() {
    const { packages, user } = this.props;
    console.log(this.state.packages);
    return (
      <div id="landing-page">
        <div id="bg-img-content">
          <div id="landing-text">
            <p id="landing-text-1">carepkg</p>
            <p id="landing-text-2">The One and Only Place to Shop</p>
            <p id="landing-text-3">All things nature</p>
            <button id="landing-text-btn">See Sales</button>
          </div>
        </div>
        <div id="landing-section-2">
          <h1>Featured Packages</h1>
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
                    <div className="featured-pkg">
                      <img
                        src={pkg.imageUrl}
                        className="featured-pkg-img"
                      ></img>
                      <h5 className="featured-pkg-name">{pkg.name}</h5>
                      <h5>Total: ${price}</h5>
                      <h5>Upvotes: {pkg.upvotes.length}</h5>
                      <button
                        className="upvote-pkg-btn"
                        onClick={() =>
                          this.props.fetchUpvote(user.id, pkg.id).then(() => {
                            if (this.props.upvote.exists) {
                              this.props.deleteUpvote(user.id, pkg.id);
                              this.setState({ state: this.state });
                            } else {
                              this.state.packages[pkg.id - 1] = 1;
                              this.props.createUpvote(user.id, pkg.id);
                              this.setState({
                                state: this.state
                              });
                            }
                          })
                        }
                      >
                        Like
                      </button>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  user: state.user,
  packages: state.packages,
  upvote: state.upvote,
  upvotePkg: state.pkg
});
const mapDispatch = dispatch => ({
  fetchCart: userId => dispatch(getCartThunk(userId)),
  fetchPackages: () => dispatch(getPackagesThunk()),
  fetchUpvote: (userId, packageId) =>
    dispatch(getUpvoteThunk(userId, packageId)),
  createUpvote: (userId, packageId) =>
    dispatch(addUpvoteThunk(userId, packageId)),
  deleteUpvote: (userId, packageId) =>
    dispatch(deleteUpvoteThunk(userId, packageId))
});

export default connect(mapState, mapDispatch)(LandingPage);
