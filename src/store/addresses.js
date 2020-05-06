import axios from "axios";

//# ###### ACTION CONSTANTS
const GET_ADDRESSES = "GET_ADDRESSES";
const ADD_ADDRESS = "ADD_ADDRESS";
const REMOVE_CURRENT_DEFAULT = "REMOVE_CURRENT_DEFAULT";
const SET_AS_DEFAULT = "SET_AS_DEFAULT";
const REMOVE_ADDRESS = "REMOVE_ADDRESS";

// #### ACTION CREATOR
const getAddresses = addresses => {
  return {
    type: GET_ADDRESSES,
    addresses: addresses
  };
};
const removeCurrentDefault = address => ({
  type: REMOVE_CURRENT_DEFAULT,
  address
});
const setDefault = address => ({
  type: SET_AS_DEFAULT,
  address
});

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

export const removeCurrentDefaultThunk = () => async dispatch => {
  try {
    const response = await axios.put(`/api/addresses/removeDefault`);
    const removed = response.data;
    dispatch(removeCurrentDefault(removed));
  } catch (err) {
    console.error(err);
  }
};

export const setDefaultThunk = address => async dispatch => {
  try {
    const response = await axios.put(`/api/addresses/set/${address.id}`);
    const updated = response.data;
    dispatch(setDefault(updated));
  } catch (err) {
    console.error(err);
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
    case REMOVE_CURRENT_DEFAULT:
      return state.map(address => {
        return address.id !== action.address.id ? address : action.address;
      });
    case SET_AS_DEFAULT:
      return [
        action.address,
        ...state.filter(address => {
          return address.id !== action.address.id && address;
        })
      ];
    case REMOVE_ADDRESS:
      return state.filter(address => address.id !== action.addressId);
    default:
      return state;
  }
};

export default addressesReducer;
