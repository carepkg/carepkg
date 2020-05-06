import axios from "axios";

const GET_SHIPPINGS = "GET_SHIPPINGS";

const getShippings = shippings => ({ type: GET_SHIPPINGS, shippings });

export const getShippingsThunk = () => async dispatch => {
  try {
    const res = await axios.get("/api/shippings/");
    const shippings = res.data;
    dispatch(getShippings(shippings));
  } catch (err) {
    console.error(err);
  }
};

const shippingsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_SHIPPINGS:
      return action.shippings;
    default:
      return state;
  }
};

export default shippingsReducer;
