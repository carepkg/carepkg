import axios from "axios";

const GET_CART = "GET_CART";

const getCart = cart => ({
  type: GET_CART,
  cart
});

// export const getCartThunk = (userId) => async dispatch => {

// }
