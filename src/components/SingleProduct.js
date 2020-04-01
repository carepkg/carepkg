import React from "react";
import { connect } from "react-redux";
import { getSingleProductThunk } from "../store/singleProduct";
import ReviewList from "./ReviewList";

class SingleProduct extends React.Component {
  componentDidMount() {
    this.props.getSingleProductThunk(this.props.match.params.id);
  }
  render() {
    const { product } = this.props;
    const { reviews } = product;
    return (
      <div id="page-container">
        <div id="single-product-container">
          <div id="single-product-content">
            <div id="single-product-left">
              <div className="single-product-image">
                <img src={product.image} />
              </div>
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
                <h1 id="single-product-name">{product.name}</h1>
                <h3 id="single-product-price">
                  <span className="single-product-dollar-sign">$</span>
                  {product.price}
                </h3>
                {product.isAvailable ? (
                  <h3 id="single-product-avail-msg">In Stock</h3>
                ) : (
                  <h3 id="single-product-out-msg">Out of stock!</h3>
                )}
                <h3 id="single-product-rating">4/5</h3>
              </div>
              <div id="single-product-info-cont">
                <p>
                  Sample description of the product. Sample description of the
                  product. Sample description of the product. Sample description
                  of the product.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <ReviewList
            reviews={reviews}
            product={product}
            onProfilePage={false}
          />
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
