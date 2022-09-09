import { takeLatest, put, call, select, all, fork } from "redux-saga/effects";
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

function* registerUserSaga(data) {
  const { name, email, password } = data.payload;
  try {
    const res = yield call(fetchSaga, "/user/adduser", {
      method: "POST",
      body: { name, email, password },
    });
    if (res) {
      yield put({ type: types.REGISTER_USER_SUCCESS, payload: res });
      toast.success(res.msg);
    }
  } catch (error) {
    // console.log("error>>", error.response.data.error);
    toast.error(error?.response?.data?.error?.message || "somthing wrong");
    yield put({ type: types.REGISTER_USER_FAILURE, payload: error });
    toast.error(error);
  }
}

function* rootSaga() {
  yield takeLatest(types.GET_USERS, getUserSaga);
  yield takeLatest(types.REGISTER_USER, registerUserSaga);
}

export default rootSaga;
