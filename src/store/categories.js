import axios from "axios";

const GET_CATEGORIES = "GET_CATEGORIES";

const getCategories = categories => ({
  type: GET_CATEGORIES,
  categories
});

export const getCategoriesThunk = () => async dispatch => {
  try {
    const res = await axios.get("/api/categories");
    const categories = res.data;
    dispatch(getCategories(categories));
  } catch (err) {
    console.error(err);
  }
};

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return action.categories;
    default:
      return state;
  }
};

export default categoriesReducer;
