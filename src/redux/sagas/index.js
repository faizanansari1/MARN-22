import { takeLatest, put, call } from "redux-saga/effects";
import * as types from "../types";
import { fetchSaga } from "./helper";
import { toast } from "react-toastify";

function* getUserSaga() {
  try {
    const response = yield call(fetchSaga, `/user/getuser`, {});
    yield put({
      type: types.GET_USERS_SUCCESS,
      payload: response,
    });
  } catch (error) {
    yield put({ type: types.GET_USERS_FAILURE, payload: error });
  }
}

function* getProductSaga() {
  try {
    const response = yield call(fetchSaga, "/products");
    yield put({
      type: types.GET_PRODUCTS_SUCCESS,
      payload: response,
    });
  } catch (error) {
    yield put({
      type: types.GET_PRODUCTS_FAILURE,
      payload: error,
    });
  }
}

function* registerUserSaga(data) {
  const { name, email, password, onSuccess } = data.payload;
  try {
    const res = yield call(fetchSaga, "/user/adduser", {
      method: "POST",
      body: { name, email, password },
    });
    if (res) {
      yield put({ type: types.REGISTER_USER_SUCCESS, payload: res });
      toast.success(res.msg);
      onSuccess(res);
    }
  } catch (error) {
    toast.error(error?.response?.data?.error?.message || "somthing wrong");
    yield put({ type: types.REGISTER_USER_FAILURE, payload: error });
    toast.error(error);
  }
}

function* signinUserSaga(data) {
  const { email, password, onSuccess } = data.payload;
  try {
    const res = yield call(fetchSaga, "/user/signin", {
      method: "POST",
      body: { email, password },
    });
    if (res) {
      yield put({ type: types.SIGNIN_USER_SUCCESS, payload: res });
      toast.success(res.msg);
      onSuccess(res.msg);
    }
  } catch (error) {
    toast.error(
      error?.response?.data?.error?.message ||
        error.response.data.msg ||
        "somthing wrong"
    );
    yield put({ type: types.SIGNIN_USER_FAILURE, payload: error });
  }
}

function* rootSaga() {
  yield takeLatest(types.GET_USERS, getUserSaga);
  yield takeLatest(types.GET_PRODUCTS, getProductSaga);
  yield takeLatest(types.REGISTER_USER, registerUserSaga);
  yield takeLatest(types.SIGNIN_USER, signinUserSaga);
}

export default rootSaga;
