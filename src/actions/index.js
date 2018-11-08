import axios from "axios";
export const USER_LOGIN_INITIALZE = " USER_LOGIN_INITIALZE";
export const USER_LOGIN_COMPLETED = "USER_LOGIN_COMPLETED";
export const USER_LOGIN_FAILED = "USER_LOGIN_FAILED";

export const USER_REGISTER_INITIALZE = " USER_REGISTER_INITIALZE";
export const USER_REGISTER_COMPLETED = "USER_REGISTER_COMPLETED";
export const USER_REGISTER_FAILED = "USER_REGISTER_FAILED";

export const USER_FETCHING_INITIALZE = " USER_FETCHING_INITIALZE";
export const USER_FETCHING_COMPLETED = "USER_FETCHING_COMPLETED";
export const USER_FETCHING_FAILED = "USER_FETCHING_FAILED";

export const loginUser = user => {
  return dispatch => {
    dispatch({ type: USER_LOGIN_INITIALZE });
    axios
      .post("http://localhost:3300/login", user)
      .then(response => {
        console.log(response.data.welcome);
        dispatch({ type: USER_LOGIN_COMPLETED, payload: response.data });
        localStorage.setItem("jwt", response.data.token);
        localStorage.setItem("username", response.data.welcome);
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: USER_LOGIN_FAILED });
      });
  };
};

export const registerUser = user => {
  return dispatch => {
    dispatch({ type: USER_REGISTER_INITIALZE });
    axios
      .post("http://localhost:3300/register", user)
      .then(response => {
        dispatch({ type: USER_REGISTER_COMPLETED, payload: response.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: USER_REGISTER_FAILED });
      });
  };
};

export const welcome = id => {
  const token = localStorage.getItem("jwt");
  const options = {
    headers: {
      Authorization: token
    }
  };

  return dispatch => {
    dispatch({ type: USER_FETCHING_INITIALZE });
    axios
      .get(`http://localhost:3300/welcome`, options)
      .then(response => {
        dispatch({
          type: USER_FETCHING_COMPLETED,
          payload: response.data.users
        });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: USER_FETCHING_FAILED });
      });
  };
};
