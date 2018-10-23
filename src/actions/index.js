import axios from "axios";
export const USER_LOGIN_INITIALZE = " USER_LOGIN_INITIALZE";
export const USER_LOGIN_COMPLETED = "USER_LOGIN_COMPLETED";
export const USER_LOGIN_FAILED = "USER_LOGIN_FAILED";

export const USER_REGISTER_INITIALZE = " USER_REGISTER_INITIALZE";
export const USER_REGISTER_COMPLETED = "USER_REGISTER_COMPLETED";
export const USER_REGISTER_FAILED = "USER_REGISTER_FAILED";

export const loginUser = () => {
  return dispatch => {
    dispatch({ type: USER_LOGIN_INITIALZE });
    axios
      .get("")
      .then()
      .catch();
  };
};

export const registerUser = () => {
  return dispatch => {
    dispatch({ type: USER_REGISTER_INITIALZE });
    axios
      .get("")
      .then()
      .catch();
  };
};
