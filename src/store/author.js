import axios from "axios";

const GET_AUTHOR = "GET_AUTHOR";

const getAuthor = author => ({ type: GET_AUTHOR, author });

export const getAuthorThunk = userId => async dispatch => {
  try {
    const response = await axios.get(`/api/reviews/author/${userId}`);
    const author = response.data;
    console.log(author);
    dispatch(getAuthor(author));
  } catch (err) {
    console.error(err);
  }
};

const authorReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_AUTHOR:
      return action.author;
    default:
      return state;
  }
};

export default authorReducer;
