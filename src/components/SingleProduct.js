import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getSingleProductThunk } from "../store/singleProduct";
import ReviewList from "./ReviewList";
import AddToButtons from "./AddToButtons";
import { addToCartThunk } from "../store/cart";

class SingleProduct extends React.Component {
  constructor() {
    super();
    this.state = {
      size: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.props.getSingleProductThunk(this.props.match.params.id);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  render() {
    const { product, addToCartThunk, user } = this.props;
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
        <div className="single-prod-main">
          <div className="sp-main-left">
            <h5>Detail Images</h5>
            <div className="detail-imgs-container">
              {Array(8)
                .fill("")
                .map((img, idx) =>
                  idx === 0 ? (
                    <img
                      className="sp-img-mini bordered"
                      src={product.image}
                      alt="tent"
                    />
                  ) : (
                    <div className="detail-img">IMG</div>
                  )
                )}
            </div>
          </div>
          <div className="sp-main-center">
            <div className="sp-main-img-container">
              <img className="sp-main-img" src={product.image} alt="tent" />
            </div>
            <div></div>
          </div>
          <div className="sp-main-right">
            <h2 className="sp-co-name">Seller's Name</h2>
            <h1>{product.name}</h1>
            <h2 className="sp-price">
              <span>$</span>
              {product.price}
            </h2>
            <div className="sp-size-container">
              <label className="size-label">Select size:</label>
              <select
                className="size-select"
                name="size"
                value={this.state.size}
                onChange={this.handleChange}
                placeholder="Select an Option"
              >
                <option value="Small">Small (S)</option>
                <option value="Medium">Medium (M)</option>
                <option value="Large">Large (L)</option>
                <option value="Xtra Large">Xtra Large (XL)</option>
              </select>
            </div>
            <AddToButtons
              addToCartThunk={addToCartThunk}
              productId={product.id}
              userId={user.id}
            />
            <h6>
              Free Shipping on orders over $50<span>*</span>
            </h6>
          </div>
        </div>
        {/* /*{" "}
        <div>
          <ReviewList
            reviews={reviews}
            product={product}
            onProfilePage={false}
          />
        </div>{" "}
        */}
      </div>
    );
  }
}

const mapState = state => {
  return {
    product: state.product,
    user: state.user
  };
};
const mapDispatch = dispatch => {
  return {
    getSingleProductThunk: productId =>
      dispatch(getSingleProductThunk(productId)),
    addToCartThunk: (qty, productId, userId) =>
      dispatch(addToCartThunk(qty, productId, userId))
  };
};
export default withRouter(connect(mapState, mapDispatch)(SingleProduct));
