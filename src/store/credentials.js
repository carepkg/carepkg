import axios from "axios";

const UPDATE_EMAIL = "UPDATE EMAIL";
const UPDATE_PASSWORD = "UPDATE PASSWORD";

const updateEmail = email => ({
  type: UPDATE_EMAIL,
  email
});

const updatePassword = password => ({
  type: UPDATE_PASSWORD,
  password
});

export const updateEmailThunk = email => async dispatch => {
  try {
  } catch (err) {
    console.error(err);
  }
};

export const updatePasswordThunk = password => async dispatch => {
  try {
  } catch (err) {
    console.error(err);
  }
};
