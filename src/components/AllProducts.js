import React from "react";
import { connect } from "react-redux";
import { withRouter, NavLink } from "react-router-dom";
import { getProductsThunk } from "../store/products";
import { addToCartThunk } from "../store/cart";
import AddToCart from "./AddToCart";

class AllProducts extends React.Component {
  componentDidMount() {
    this.props.getProductsThunk();
  }
  render() {
    const { products, userId, addToCartThunk } = this.props;
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
                <AddToCart
                  userId={userId}
                  productId={product.id}
                  addToCartThunk={addToCartThunk}
                />
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
    products: state.products,
    userId: state.user.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProductsThunk: () => dispatch(getProductsThunk()),
    addToCartThunk: (qty, productId, userId) =>
      dispatch(addToCartThunk(qty, productId, userId))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AllProducts)
);
