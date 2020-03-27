import axios from "axios";

const GET_SINGLE_PRODUCT = "GET_SINGLE_PRODUCT";

const getSingleProduct = product => {
  return {
    type: GET_SINGLE_PRODUCT,
    product: product
  };
};

export const getSingleProductThunk = id => async dispatch => {
  try {
    const response = await axios.get(`/api/products/${id}`);
    console.log(response);
    const product = response.data;
    console.log(product);
    dispatch(getSingleProduct(product));
  } catch (error) {
    console.error(error.message);
  }
};

const productReducer = (state = [], action) => {
  switch (action.type) {
    case GET_SINGLE_PRODUCT:
      return action.product;
    default:
      return state;
  }
};

export default productReducer;
