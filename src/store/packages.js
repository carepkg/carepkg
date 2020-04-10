import axios from "axios";

const GET_PACKAGES = "GET_PACKAGES";

const getPackages = packages => ({
  type: GET_PACKAGES,
  packages
});

export const getPackagesThunk = () => async dispatch => {
  try {
    const res = await axios.get("/api/packages");
    const packages = res.data;
    dispatch(getPackages(packages));
  } catch (err) {
    console.error(err);
  }
};

const packagesReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PACKAGES:
      return action.packages;
    default:
      return state;
  }
};

export default packagesReducer;
