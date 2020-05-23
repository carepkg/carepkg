import axios from "axios";

const GET_CART = "GET_CART";
const ADD_TO_CART = "ADD_TO_CART";
const DELETE_FROM_CART = "DELETE_FROM_CART";

const getCart = cart => ({
  type: GET_CART,
  cart
});
const addToCart = item => ({
  type: ADD_TO_CART,
  item
});
const deleteFromCart = productId => {
  return {
    type: DELETE_FROM_CART,
    productId
  };
};

export const getCartThunk = () => async dispatch => {
  try {
    const response = await axios.get(`/api/cart/`);
    const cart = response.data;
    dispatch(getCart(cart));
  } catch (err) {
    console.error(err);
  }
};
export const addToCartThunk = (qty, productId) => async dispatch => {
  try {
    const res = await axios.post(`/api/cart/${productId}`, {
      qty
    });
    const item = res.data;
    dispatch(addToCart(item));
  } catch (err) {
    console.error(err);
  }
};
export const deleteFromCartThunk = (userId, productId) => async dispatch => {
  try {
    dispatch(deleteFromCart(productId));
    await axios.delete(`/api/cart/${userId}/${productId}`);
  } catch (err) {
    console.error(err);
  }
};

const cartReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_CART:
      return action.cart;
    case ADD_TO_CART:
      return [...state];
    case DELETE_FROM_CART:
      return [
        ...state.filter(lineItem => lineItem.productId !== action.productId)
      ];
    default:
      return state;
  }
};

export default cartReducer;
