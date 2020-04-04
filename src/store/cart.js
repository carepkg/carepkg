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
const deleteFromCart = productId => {
  console.log(productId);
  return {
    type: DELETE_FROM_CART,
    productId
  };
};

export const getCartThunk = userId => async dispatch => {
  try {
    const response = await axios.get(`/api/cart/${userId}`);
    const cart = response.data;
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
export const deleteFromCartThunk = productId => dispatch => {
  try {
    console.log("sos");
    axios
      .delete(`/api/cart/${productId}`)
      .then(() => console.log("can you hear this"));
    // dispatch(deleteFromCart(productId))
  } catch (err) {
    console.error(err);
  }
};

const cartReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_CART:
      return action.cart;
    case ADD_TO_CART:
      return action.cart;
    case DELETE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(
          lineItem => lineItem.productId !== action.productId
        )
      };
    default:
      return state;
  }
};

export default cartReducer;
