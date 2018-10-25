import {
  USER_LOGIN_INITIALZE,
  USER_LOGIN_COMPLETED,
  USER_LOGIN_FAILED,
  USER_REGISTER_INITIALZE,
  USER_REGISTER_COMPLETED,
  USER_REGISTER_FAILED,
  USER_FETCHING_INITIALZE,
  USER_FETCHING_COMPLETED,
  USER_FETCHING_FAILED
} from "../actions";

const initialState = {
  user: [],
  err: ""
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_INITIALZE:
      return { ...state };

    case USER_LOGIN_COMPLETED:
      return { ...state, user: action.payload };

    case USER_LOGIN_FAILED:
      return { ...state, err: "Error Logging in" };

    case USER_REGISTER_INITIALZE:
      return { ...state };

    case USER_REGISTER_COMPLETED:
      return { ...state, user: action.payload };

    case USER_REGISTER_FAILED:
      return { ...state, err: "Error Registering" };

    case USER_FETCHING_INITIALZE:
      return { ...state };

    case USER_FETCHING_COMPLETED:
      return { ...state, user: action.payload };

    case USER_FETCHING_FAILED:
  }
};
export default loginReducer;
