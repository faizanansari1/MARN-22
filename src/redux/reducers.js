import * as types from "./types";

const initialState = {
  users: [],
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS: {
      return { ...state, isLoading: true };
    }
    case types.GET_USERS_SUCCESS: {
      return { ...state, isLoading: false, users: action.payload };
    }
    case types.GET_USERS_FAILURE: {
      return { ...state, isLoading: false };
    }

    default:
      return state;
  }
};

export default reducer;
