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
import Auth from "../components/Auth/auth";

const auth = new Auth();

const initialState = {
  user: [],
  err: "",
  auth
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
      return { ...state };

    default:
      return state;
  }
};
export default loginReducer;
