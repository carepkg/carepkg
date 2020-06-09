import React from "react";
import { connect } from "react-redux";
import { withRouter, NavLink } from "react-router-dom";
import { getProductsThunk, getNewestProductsThunk } from "../store/products";
import { addToCartThunk } from "../store/cart";
import { getCategoriesThunk } from "../store/categories";
import CarepkgHelp from "./CarepkgHelp";
import CarepkgNewsletter from "./CarepkgNewsletter";
import FooterBottom from "./FooterBottom";

const initialState = {
  PRODUCTS_PER_PAGE: 12,
  pageNum: 1,
  leftPointer: 0,
  rightPointer: 12
};
class AllProducts extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.getProductsThunk();
    this.props.fetchCategories();
  }
  filterByCategory(name) {
    this.props.history.push(`/products/${name}`);
    this.props.getProductsThunk(name);
  }
  //onClick for page numbers to be placed at top and bottom.
  shiftAndUpdatePage(pageNumber) {
    const textAsNumber = Number(pageNumber);
    const {
      PRODUCTS_PER_PAGE,
      pageNum,
      leftPointer,
      rightPointer
    } = this.state;
    if (pageNumber > 1) {
      this.setState({
        leftPointer: (pageNumber - 1) * PRODUCTS_PER_PAGE,
        pageNum: textAsNumber,
        rightPointer: pageNumber * PRODUCTS_PER_PAGE
      });
    } else {
      this.setState(initialState);
    }
  }
  changePageByOne(dir) {
    const { PRODUCTS_PER_PAGE, leftPointer, rightPointer } = this.state;
    this.setState({
      leftPointer:
        dir === "back"
          ? leftPointer - PRODUCTS_PER_PAGE
          : leftPointer + PRODUCTS_PER_PAGE,
      rightPointer:
        dir === "forward"
          ? rightPointer - PRODUCTS_PER_PAGE
          : rightPointer + PRODUCTS_PER_PAGE
    });
  }
  shopAll() {
    this.props.history.push("/products/all");
    this.props.getProductsThunk();
  }
  render() {
    const { products, userId, addToCartThunk, categories } = this.props;
    const {
      PRODUCTS_PER_PAGE,
      pageNum,
      leftPointer,
      rightPointer
    } = this.state;
    const productsOnPage = products.slice(leftPointer, rightPointer);
    const filters = ["Best Sellers", "New Arrivals", "Shop All"];
    return products ? (
      <div id="products-component">
        <div id="products-header">
          <h2 id="products-header-text">Products</h2>
        </div>
        <div id="product-categories">
          {categories
            ? categories.map(cat => {
                return (
                  <span onClick={() => this.filterByCategory(cat.name)}>
                    {cat.name}
                  </span>
                );
              })
            : null}
        </div>
        <div id="product-filters">
          <span>{filters[0]}</span>
          <span onClick={() => this.props.fetchNewestProducts()}>
            {filters[1]}
          </span>
          <span onClick={() => this.shopAll()}>{filters[2]}</span>
        </div>
        <div id="products-container">
          {productsOnPage.map(product => {
            return (
              <div key={product.id} className="product-card">
                <NavLink to={`/products/id/${product.id}`}>
                  <img src={product.image} className="product-img" />
                </NavLink>
                <div className="product-info-container">
                  <NavLink to={`/products/id/${product.id}`}>
                    <h4 className="product-name">{product.name}</h4>
                  </NavLink>
                  <NavLink to={`/products/id/${product.id}`}>
                    <h6 className="product-price">
                      <span>$</span>
                      {product.price}
                    </h6>
                  </NavLink>
                </div>
              </div>
            );
          })}
        </div>
        <div id="shop-all-footer">
          <p>Shop more:</p>
          <button className="footer-btn">Shop all</button>
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
    ) : null;
  }
}

const mapStateToProps = state => {
  return {
    products: state.products,
    userId: state.user.id,
    categories: state.categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProductsThunk: (category = "all") =>
      dispatch(getProductsThunk(category)),
    fetchCategories: () => dispatch(getCategoriesThunk()),
    fetchNewestProducts: () => dispatch(getNewestProductsThunk())
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AllProducts)
);
