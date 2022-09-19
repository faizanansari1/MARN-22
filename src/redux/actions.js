import * as types from "./types";

export const getUsers = () => ({
  type: types.GET_USERS,
});

export const registerUser = (data) => ({
  type: types.REGISTER_USER,
  payload: data,
});

export const singinUser = (data) => ({
  type: types.SIGNIN_USER,
  payload: data,
});
