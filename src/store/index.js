import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
import products from "./products";
import product from "./singleProduct";
import user from "./user";
import cart from "./cart";
import packages from "./packages";
import upvote from "./upvote";
import categories from "./categories";
import addresses from "./addresses";
import reviews from "./reviews";
import author from "./author";

const reducer = combineReducers({
  products: products,
  product: product,
  user: user,
  cart: cart,
  packages: packages,
  upvote: upvote,
  categories: categories,
  addresses: addresses,
  reviews: reviews,
  author: author
});

// const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware));
const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;
export * from "./user";
