import * as types from "./types";

const initialState = {
  users: [],
  singleUser: null,
  products: [],
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

    case types.REGISTER_USER: {
      return { ...state, isLoading: true };
    }
    case types.GET_PRODUCTS: {
      return { ...state, isLoading: true };
    }
    case types.GET_PRODUCTS_SUCCESS: {
      return { ...state, isLoading: false, products: action.payload };
    }
    case types.GET_PRODUCTS_FAILURE: {
      return { ...state, isLoading: false };
    }

    case types.REGISTER_USER_SUCCESS: {
      return { ...state, isLoading: false };
    }
    case types.REGISTER_USER_FAILURE: {
      return { ...state, isLoading: false };
    }

    case types.SIGNIN_USER: {
      return { ...state, isLoading: true };
    }
    case types.SIGNIN_USER_SUCCESS: {
      return { ...state, isLoading: false, singleUser: action.payload };
    }
    case types.SIGNIN_USER_FAILURE: {
      return { ...state, isLoading: false };
    }

    default:
      return state;
  }
};

export default reducer;
