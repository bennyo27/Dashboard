import {
  USER_LOGIN_INITIALZE,
  USER_LOGIN_COMPLETED,
  USER_LOGIN_FAILED
} from "../actions";

const initialState = {
  user: [],
  notes: []
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_INITIALZE:
      return { ...state };

    case USER_LOGIN_COMPLETED:
      return { ...state, notes: action.payload };

    case USER_LOGIN_FAILED:
      return;
    default:
      return state;
  }
};

export default loginReducer;
