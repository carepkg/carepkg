import axios from "axios";

const GET_REVIEWS_BY_PROD = "GET_REVIEWS_BY_PROD";
const ADD_REVIEW = "ADD_REVIEW";

const getReviewsByProd = reviews => ({
  type: GET_REVIEWS_BY_PROD,
  reviews
});

const addReview = review => ({ type: ADD_REVIEW, review });

export const getReviewsByProdThunk = productId => async dispatch => {
  try {
    const response = await axios.get(`/api/reviews/${productId}`);
    console.log(response);
    const reviews = response.data;
    console.log(reviews);
    dispatch(getReviewsByProd(reviews));
  } catch (err) {
    console.error(err);
  }
};

export const addReviewThunk = review => async dispatch => {
  try {
    console.log(review);
    const response = await axios.post("/api/reviews/add", review);
    const rev = response.data;

    dispatch(addReview(rev));
    //dispatch but we dont need to update state, unless on the review list we change how we get the reviews
    //in which case we would get all reviews associated and not use the reviews from props
    //this would allow our added review to be rendered with them.
  } catch (err) {
    console.error(err);
  }
};

const reviewReducer = (state = [], action) => {
  switch (action.type) {
    case GET_REVIEWS_BY_PROD:
      return action.reviews;
    case ADD_REVIEW:
      return [...state, action.review];
    default:
      return state;
  }
};

export default reviewReducer;
