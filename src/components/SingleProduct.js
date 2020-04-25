import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getSingleProductThunk } from "../store/singleProduct";
import ReviewList from "./ReviewList";

class SingleProduct extends React.Component {
  componentDidMount() {
    this.props.getSingleProductThunk(this.props.match.params.id);
  }
  render() {
    const { product } = this.props;
    console.log(product);
    const { reviews, productCategories } = product;
    return (
      <div className="single-prod-page">
        <div className="ad-space-thin">
          <span>This is an ad. 60% off all merchandise</span>
        </div>
        <div className="single-prod-path">
          <span onClick={this.props.history.goBack} className="path-bold">
            &#8249;
          </span>
          <span onClick={this.props.history.goBack} className="path-bold">
            Back to products
          </span>
          <span className="path-bold">/</span>
          <span className="path-regular">
            {productCategories ? productCategories[0].category.name : null}
          </span>
          <span className="path-regular">&#8250;</span>
          <span className="path-regular">{product.name}</span>
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
export default withRouter(connect(mapState, mapDispatch)(SingleProduct));
