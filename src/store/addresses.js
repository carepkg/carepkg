import axios from "axios";

//# ###### ACTION CONSTANTS
const GET_ADDRESSES = "GET_ADDRESSES";
const ADD_ADDRESS = "ADD_ADDRESS";
const REMOVE_ADDRESS = "REMOVE_ADDRESS";

// #### ACTION CREATOR
const getAddresses = addresses => {
  console.log(addresses);
  return {
    type: GET_ADDRESSES,
    addresses: addresses
  };
};

export const getAddressesThunk = userId => async dispatch => {
  try {
    const response = await axios.get(`/api/addresses/${userId}`);
    const addresses = response.data;
    console.log(addresses);
    dispatch(getAddresses(addresses));
  } catch (err) {
    console.log(err);
  }
};

const addressesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ADDRESSES:
      return action.addresses; //state = action.addresses
    // case ADD_ADDRESS:
    //   return [...state, address];
    // case REMOVE_ADDRESS:
    //   return state.filter(); ///takes addressId will do later
    default:
      return state;
  }
};

export default addressesReducer;
