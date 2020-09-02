import axios from "axios";

const GET_USER_WISHLIST = "GET_USER_WISHLIST";
const ADD_TO_WISHLIST = "ADD_TO_WISHLIST";
const REMOVE_FROM_WISHLIST = "REMOVE_FROM_WISHLIST";

const getUserWishlist = wishlist => ({ type: GET_USER_WISHLIST, wishlist });
const addToWishlist = () => ({ type: ADD_TO_WISHLIST });
const removeFromWishlist = productId => ({
  type: REMOVE_FROM_WISHLIST,
  productId
});

export const getUserWishlistThunk = userId => async dispatch => {
  try {
    const res = await axios.get(`/api/wishlist/${userId}`);
    const wishlist = res.data;
    dispatch(getUserWishlist(wishlist));
  } catch (err) {
    console.error(err);
  }
};
export const addToWishlistThunk = (productId, userId) => async dispatch => {
  try {
    await axios.post(`/api/wishlist/${userId}/${productId}`);
    dispatch(addToWishlist());
  } catch (err) {
    console.error(err);
  }
};
export const removeFromWishlistThunk = (
  productId,
  userId
) => async dispatch => {
  try {
    dispatch(removeFromWishlist(productId));
    await axios.delete(`/api/wishlist/${userId}/${productId}`);
  } catch (err) {
    console.error(err);
  }
};

const wishlistReducer = (state = [], action) => {
  switch (action.type) {
    case GET_USER_WISHLIST:
      return action.wishlist;
    case ADD_TO_WISHLIST:
      return action.wishlist;
    case REMOVE_FROM_WISHLIST:
      return [
        ...state.filter(lineItem => lineItem.productId !== action.productId)
      ];
    default:
      return state;
  }
};

export default wishlistReducer;
