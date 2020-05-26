import React from "react";
import { connect } from "react-redux";
import { withRouter, NavLink } from "react-router-dom";
import { getProductsThunk } from "../store/products";
import { addToCartThunk } from "../store/cart";
import { getCategoriesThunk } from "../store/categories";
import CarepkgHelp from "./CarepkgHelp";
import CarepkgNewsletter from "./CarepkgNewsletter";
import FooterBottom from "./FooterBottom";

class AllProducts extends React.Component {
  componentDidMount() {
    const queryCat = this.props.category;
    this.props.getProductsThunk();
    this.props.fetchCategories();
  }
  filterByCategory(name) {
    this.props.history.push(`/products/${name}`);
    this.props.getProductsThunk(name);
  }
  render() {
    const { products, userId, addToCartThunk, categories } = this.props;
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
          {filters.map(filter => (
            <span>{filter}</span>
          ))}
        </div>
        <div id="products-container">
          {products.map(product => {
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
    getProductsThunk: (queryString = "all") =>
      dispatch(getProductsThunk(queryString)),
    fetchCategories: () => dispatch(getCategoriesThunk())
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AllProducts)
);
