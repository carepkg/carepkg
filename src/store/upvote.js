import axios from "axios";

const GET_UPVOTE = "GET_UPVOTE";

const getUpvote = upvote => ({
  type: GET_UPVOTE,
  upvote
});

export const getUpvoteThunk = (userId, packageId) => async dispatch => {
  try {
    const res = await axios.get(`/api/upvotes/${packageId}/${userId}`);
    const upvote = res.data;
    console.log(upvote);
    dispatch(getUpvote(upvote));
  } catch (err) {
    console.error(err);
  }
};
export const addUpvoteThunk = (userId, packageId) => async dispatch => {
  try {
    await axios.post(`/api/upvotes/${packageId}`, {
      userId
    });
  } catch (err) {
    console.error(err);
  }
};
export const deleteUpvoteThunk = (userId, packageId) => async dispatch => {
  try {
    await axios.delete(`/api/upvotes/${packageId}/${userId}`);
  } catch (err) {
    console.error(err);
  }
};

const upvoteReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_UPVOTE:
      return action.upvote;
    default:
      return state;
  }
};

export default upvoteReducer;
