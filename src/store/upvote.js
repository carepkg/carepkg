import axios from "axios";

const GET_UPVOTE = "GET_UPVOTE";
const MAP_ADD_UPVOTE = "MAP_ADD_UPVOTE";
const MAP_DEL_UPVOTE = "MAP_DEL_UPVOTE";

const getUpvote = upvote => ({
  type: GET_UPVOTE,
  upvote
});
const mapAddUpvote = pkg => ({
  type: MAP_ADD_UPVOTE,
  pkg: pkg
});
const mapDelUpvote = pkg => ({
  type: MAP_DEL_UPVOTE,
  pkg: pkg
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
    const pkg = await axios.post(`/api/upvotes/${packageId}`, {
      userId
    });
    console.log("post: ", pkg.data);
    dispatch(mapAddUpvote(pkg.data));
  } catch (err) {
    console.error(err);
  }
};
export const deleteUpvoteThunk = (userId, packageId) => async dispatch => {
  try {
    const pkg = await axios.delete(`/api/upvotes/${packageId}/${userId}`);
    console.log("delete: ", pkg.data);
    dispatch(mapDelUpvote(pkg.data));
  } catch (err) {
    console.error(err);
  }
};

const upvoteReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_UPVOTE:
      return action.upvote;
    case MAP_ADD_UPVOTE:
      return action.pkg;
    case MAP_DEL_UPVOTE:
      return action.pkg;
    default:
      return state;
  }
};

export default upvoteReducer;
