import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
import products from "./products";
import product from "./singleProduct";

const reducer = combineReducers({
  products: products,
  product: product
});

// const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware));
const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;
