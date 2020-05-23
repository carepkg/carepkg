import axios from "axios";

const GET_USER_WISHLIST = "GET_USER_WISHLIST";

const getUserWishlist = wishlist => ({ type: GET_USER_WISHLIST, wishlist });

export const getUserWishlistThunk = userId => async dispatch => {
  try {
    const res = await axios.get(`/api/wishlist/${userId}`);
    const wishlist = res.data;
    dispatch(getUserWishlist(wishlist));
  } catch (err) {
    console.error(err);
  }
};

const wishlistReducer = (state = [], action) => {
  switch (action.type) {
    case GET_USER_WISHLIST:
      return action.wishlist;
    default:
      return state;
  }
};

export default wishlistReducer;
