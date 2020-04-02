import axios from "axios";
import { nextTick } from "q";

const GET_CART = "GET_CART";
// const ADD_TO_CART = "ADD_TO_CART";
// const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const MAKE_CART = "MAKE_CART";

const getCart = cart => ({
  type: GET_CART,
  cart
});

export const getCartThunk = cart => async dispatch => {
  try {
    const res = await axios.get("/api/cart");
  } catch (err) {
    console.error(error);
  }
};
