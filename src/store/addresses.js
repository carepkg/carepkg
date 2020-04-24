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

const removeAddress = addressId => ({
  type: REMOVE_ADDRESS,
  addressId
});

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

export const removeAddressThunk = addressId => async dispatch => {
  try {
    dispatch(removeAddress(addressId));
    await axios.delete(`/api/addresses/${addressId}`);
  } catch (err) {
    console.error(err);
  }
};

const addressesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ADDRESSES:
      return action.addresses;
    case REMOVE_ADDRESS:
      return state.filter(address => address.id !== action.addressId);
    default:
      return state;
  }
};

export default addressesReducer;
