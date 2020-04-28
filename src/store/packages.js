import axios from "axios";

const GET_PACKAGES = "GET_PACKAGES";
const GET_PACKAGES_WITH_PRODUCT = "GET_PACKAGES_WITH_PRODUCT";

const getPackages = packages => ({
  type: GET_PACKAGES,
  packages
});
const getPackagesWithProduct = pkgLineItems => {
  const packages = Array.from(new Set(pkgLineItems.map(li => li.package)));
  return {
    type: GET_PACKAGES_WITH_PRODUCT,
    packages
  };
};

export const getPackagesThunk = () => async dispatch => {
  try {
    const res = await axios.get("/api/packages");
    const packages = res.data;
    dispatch(getPackages(packages));
  } catch (err) {
    console.error(err);
  }
};

export const getPackagesWithProductThunk = productId => async dispatch => {
  try {
    const res = await axios.get(`/api/packages/${productId}`);
    const packageLineItems = res.data;
    dispatch(getPackagesWithProduct(packageLineItems));
  } catch (err) {
    console.error(err);
  }
};

const packagesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_PACKAGES:
      return action.packages;
    case GET_PACKAGES_WITH_PRODUCT:
      return action.packages;
    default:
      return state;
  }
};

export default packagesReducer;
