import axios from "axios";

const GET_CART = "GET_CART";
const ADD_TO_CART = "ADD_TO_CART";
const DELETE_FROM_CART = "DELETE_FROM_CART";

const getCart = cart => ({
  type: GET_CART,
  cart
});
const addToCart = () => ({
  type: ADD_TO_CART
});
const deleteFromCart = () => ({
  type: DELETE_FROM_CART
});

export const getCartThunk = userId => async dispatch => {
  try {
    const response = await axios.get(`/api/cart/${userId}`);
    const cart = response.data;
    console.log(cart);
    dispatch(getCart(cart));
  } catch (err) {
    console.error(err);
  }
};
export const addToCartThunk = (qty, productId, userId) => async dispatch => {
  try {
    await axios.post(`/api/cart/${productId}`, {
      userId,
      qty
    });
    dispatch(addToCart());
  } catch (err) {
    console.error(err);
  }
};
const deleteFromCartThunk = productId;

const cartReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_CART:
      return action.cart;
    case ADD_TO_CART:
      return action.cart;
    case DELETE_FROM_CART:
      return action.cart;
    default:
      return state;
  }
};

export default cartReducer;
