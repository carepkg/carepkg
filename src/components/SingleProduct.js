import React from "react";
import { connect } from "react-redux";
import { getSingleProductThunk } from "../store/singleProduct";

class SingleProduct extends React.Component {
  componentDidMount() {
    this.props.getSingleProductThunk(this.props.match.params.id);
  }
  render() {
    return (
      <div id="single-product-container">
        <div id="single-product-content">
          <div id="single-product-left">
            <div className="single-product-image"></div>
            <div id="button-menu">
              <button className="single-product-button single-product-button-left">
                Buy Now
              </button>
              <button className="single-product-button single-product-button-right">
                Add to Cart
              </button>
            </div>
          </div>
          <div id="single-product-right">
            <div id="single-product-header">
              <h1 id="single-product-name">Sample Product</h1>
              <h3 id="single-product-price">$19.99</h3>
              <h3 id="single-product-avail">In Stock</h3>
            </div>
            <div id="single-product-info-cont">
              <h3 id="single-product-rating">4/5</h3>
              <p>
                Sample description of the product. Sample description of the
                product. Sample description of the product. Sample description
                of the product.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = state => {
  return {
    product: state.product
  };
};
const mapDispatch = dispatch => {
  return {
    getSingleProductThunk: productId =>
      dispatch(getSingleProductThunk(productId))
  };
};
export default connect(mapState, mapDispatch)(SingleProduct);
