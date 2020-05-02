import axios from "axios";

const ADD_REVIEW = "ADD_REVIEW";

const addReview = review => ({ type: ADD_REVIEW, review });

export const addReviewThunk = review => async dispatch => {
  try {
    console.log(review);
    const response = await axios.post("/api/reviews/add", review);
    const rev = response.data;
    console.log("review: ", rev);
    //dispatch but we dont need to update state, unless on the review list we change how we get the reviews
    //in which case we would get all reviews associated and not use the reviews from props
    //this would allow our added review to be rendered with them.
  } catch (err) {
    console.error(err);
  }
};

const reviewReducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reviewReducer;
