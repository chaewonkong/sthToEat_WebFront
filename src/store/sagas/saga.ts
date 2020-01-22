import { put, takeLatest, all } from "redux-saga/effects";
import { Api } from "../../Api";
import * as constants from "../actions/constants";

export function* likeDishAsync() {
  const res = yield Api.postLikeDish();
  yield put({ type: constants.LIKE_DISH_ASYNC, payload: { res } });
}

export function* dislikeDishAsync() {
  const res = yield Api.postDislikeDish();
  yield put({ type: constants.DISLIKE_DISH_ASYNC, payload: { res } });
}

function* watchLikeDish() {
  yield takeLatest(constants.LIKE_DISH, likeDishAsync);
}

function* watchDislikeDish() {
  yield takeLatest(constants.DISLIKE_DISH, dislikeDishAsync);
}

export default function* rootSaga() {
  yield all([watchLikeDish(), watchDislikeDish()]);
}
