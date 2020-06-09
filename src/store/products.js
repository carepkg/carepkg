import axios from "axios";

const GET_PRODUCTS = "GET_PRODUCTS";

const getProducts = products => ({
  type: GET_PRODUCTS,
  products
});

// export const getProductsThunk = (queryString = "") => async dispatch => {
export const getProductsThunk = category => async dispatch => {
  try {
    const response = await axios.get(`/api/products/${category}`);
    const products = response.data;
    dispatch(getProducts(products));
  } catch (error) {
    console.error(error.message);
  }
};
export const getNewestProductsThunk = () => async dispatch => {
  try {
    const response = await axios.get("/api/products/new-arrivals");
    const newArrivals = response.data;
    dispatch(getProducts(newArrivals));
  } catch (error) {
    console.error(error.message);
  }
};

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.products;
    default:
      return state;
  }
};
export default productsReducer;
