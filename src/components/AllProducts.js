import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getProductsThunk } from "../store/products";
import { __promisify__ } from "glob";

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
  //   console.log("in cdu");
  //   if (prevProps.location.searc !== this.props.location.search) {
  //     this.props.getProducts(this.props.location.search);
  //   }
  //   console.log("cdu");
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
              <div>
                <h5 key={product.id}>{product.name}</h5>
                <h6>{product.price}n </h6>
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
