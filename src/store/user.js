import axios from "axios";
import history from "../history";

/**
 * ACTION TYPES
 */
const GET_USER = "GET_USER";
const REMOVE_USER = "REMOVE_USER";

/**
 * INITIAL STATE
 */
const guest = {};

/**
 * ACTION CREATORS
 */
const getUser = user => ({ type: GET_USER, user });
const removeUser = () => ({ type: REMOVE_USER });

/**
 * THUNK CREATORS
 */
export const me = () => async dispatch => {
  try {
    const res = await axios.get("/auth/me", {
      withCredentials: true
    });
    console.log(res.data);
    dispatch(getUser(res.data || guest));
  } catch (err) {
    console.error(err);
  }
};

export const auth = (user, method) => async dispatch => {
  let res;

  try {
    if (method === "signup") {
      res = await axios.post(`/auth/${method}`, {
        email: user.email,
        password: user.password,
        role: "Customer",
        username: user.username,
        firstname: user.firstname,
        lastname: user.lastname
      });
    } else {
      res = await axios.post(`/auth/${method}`, {
        email: user.email,
        password: user.password
      });
    }
  } catch (authError) {
    return dispatch(getUser({ error: authError }));
  }

  try {
    dispatch(getUser(res.data));
    history.push("/");
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr);
  }
};

export const logout = () => async dispatch => {
  try {
    await axios.post("/auth/logout");
    dispatch(removeUser());
  } catch (err) {
    console.error(err);
  }
};

/**
 * REDUCER
 */
const userReducer = (state = guest, action) => {
  switch (action.type) {
    case GET_USER:
      return action.user;
    case REMOVE_USER:
      return guest;
    default:
      return state;
  }
};

export default userReducer;
