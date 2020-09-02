import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
import products from "./products";
import product from "./singleProduct";
import user from "./user";
import cart from "./cart";
import categories from "./categories";
import addresses from "./addresses";
import reviews from "./reviews";
import shippings from "./shippings";
import wishlist from "./wishlist";

const reducer = combineReducers({
  products: products,
  product: product,
  user: user,
  cart: cart,
  categories: categories,
  addresses: addresses,
  reviews: reviews,
  shippings: shippings,
  wishlist: wishlist
});

// const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware));
const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;
export * from "./user";
