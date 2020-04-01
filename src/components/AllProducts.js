import React from "react";
import { connect } from "react-redux";
import { withRouter, NavLink } from "react-router-dom";
import { getProductsThunk } from "../store/products";

class AllProducts extends React.Component {
  constructor() {
    super();
    this.state = {};
    // this.page = this.page.bind(this);
  }
  componentDidMount() {
    // this.props.getProducts(this.props.location.search);
    this.props.getProductsThunk();
  }
  // componentDidUpdate(prevProps) {
  //
  //   if (prevProps.location.searc !== this.props.location.search) {
  //     this.props.getProducts(this.props.location.search);
  //   }
  //
  // }
  // page(int) {
  //   let nextQueryStr = this.props.location.search.split("&page=");
  //   if (nextQueryStr.length === 1) {
  //     nextQueryStr = nextQueryStr[0] + `&page=${Math.max(1, 1 + int)}`;
  //   } else {
  //     const temp = nextQueryStr[1].split("&");
  //     temp[0] = String(Math.max(1, Number(temp[0]) + int));
  //     nextQueryStr[1] = temp.join("&");
  //     nextQueryStr = nextQueryStr.join("&page=");
  //   }
  //   if (nextQueryStr[0] !== "?") nextQueryStr = "?" + nextQueryStr;

  //   this.props.history.push(nextQueryStr);

  render() {
    const { products } = this.props;
    return products ? (
      <div id="products-component">
        <div id="products-header">
          <h2 id="products-header-text">Products</h2>
        </div>
        <div id="products-container">
          {products.map(product => {
            return (
              <div key={product.id} className="product-card">
                <NavLink to={`/products/${product.id}`}>
                  <img src={product.image} className="product-img" />
                </NavLink>
                <div className="product-info-container">
                  <NavLink to={`/products/${product.id}`}>
                    <h4 className="product-name">{product.name}</h4>
                  </NavLink>
                  <NavLink to={`/products/${product.id}`}>
                    <h6 className="product-price">${product.price}</h6>
                  </NavLink>
                </div>
                <button className="add-cart-btn">Add to Cart</button>
              </div>
            );
          })}
        </div>
      </div>
    ) : null;
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // getProducts: queryString => dispatch(getProductsThunk(queryString))
    getProductsThunk: () => dispatch(getProductsThunk())
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AllProducts)
);
