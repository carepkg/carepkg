import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
import products from "./products";
import product from "./singleProduct";
import user from "./user";

const reducer = combineReducers({
  products: products,
  product: product,
  user: user
});

// const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware));
const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;
export * from "./user";
