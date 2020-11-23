import React, { Component } from "react";
import { connect } from "react-redux";
import { getCartThunk } from "../../store/cart";
import { getCategoriesThunk } from "../../store/categories";
import { getProductsThunk } from "../../store/products";
import LandingSponsors from "./LandingSponsors";
import LandingProdStrip from "./LandingProdStrip";
import LandingCatFooter from "./LandingCatFooter";
import Footer from "../Universal/Footer";

class LandingPage extends Component {
  constructor() {
    super();
    this.state = {
      recommended: [],
      bestSellers: [],
    };
    this.populateProductStrip = this.populateProductStrip.bind(this);
    this.isUnique = this.isUnique.bind(this);
  }

  componentDidMount() {
    let recommended = [];
    let bestSellers = [];
    if (this.props.user.id) {
      this.props.fetchCart(this.props.user.id);
    }
    this.props.fetchCategories();
    this.props
      .fetchProducts()
      .then(() => {
        const { products } = this.props;
        let IDArray = new Array(products.length).fill(1);
        if (products[0]) {
          this.populateProductStrip(recommended, products, IDArray);
          this.populateProductStrip(bestSellers, products, IDArray);
        }
      })
      .then(() =>
        this.setState({ recommended: recommended, bestSellers: bestSellers })
      );

    console.log("recommended: ", recommended);
    console.log("bestSellers: ", bestSellers);
    console.log(this.state.recommended);
    console.log(this.state.bestSellers);
  }

  populateProductStrip(toBeFilled, productsList, IDBoolArray) {
    while (toBeFilled.length !== 5) {
      let randomIdx = Math.floor(Math.random() * productsList.length);
      let product = productsList[randomIdx];
      if (this.isUnique(product, IDBoolArray)) {
        toBeFilled.push(product);
        IDBoolArray[product.id]--;
      }
    }
  }
  isUnique(prod, IDBoolArray) {
    return IDBoolArray[prod.id];
  }
  render() {
    const { user, categories, products } = this.props;
    const { recommended, bestSellers } = this.state;
    return products[0] ? (
      <div id="landing-page">
        <div id="bg-img-content">
          <div>
            <img
              src="background-images/main-bg.jpg"
              className="main-img"
              alt="main-bg-img"
            />
          </div>
          <div id="landing-text">
            <p className="landing-text-header-green">WE ARE</p>
            <p className="landing-text-header-red">CAREPKG</p>
            <p id="landing-text-2">
              Holiday Sale! 25% off all products thru Dec 25, 2021
            </p>
            <button className="medium-btn-white">Shop Now</button>
          </div>
        </div>
        <div id="landing-section-2">
          <LandingSponsors />
          <div className="gradient-break-lightgray"></div>
          {this.state.recommended && (
            <LandingProdStrip set={recommended} name="Recommended for You" />
          )}
          {this.state.bestSellers && (
            <LandingProdStrip set={bestSellers} name="Best Sellers" />
          )}
          <div className="gradient-break-lightgray-reverse"></div>

          {console.log(recommended)}
          <LandingCatFooter categories={categories} />
        </div>
        <Footer />
      </div>
    ) : null;
  }
}

const mapState = (state) => ({
  user: state.user,
  categories: state.categories,
  products: state.products,
});
const mapDispatch = (dispatch) => ({
  fetchProducts: (category = "all") => dispatch(getProductsThunk(category)),
  fetchCart: (userId) => dispatch(getCartThunk(userId)),
  fetchCategories: () => dispatch(getCategoriesThunk()),
});

export default connect(mapState, mapDispatch)(LandingPage);
