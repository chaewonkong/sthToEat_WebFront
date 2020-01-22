import { put, takeLatest, all } from "redux-saga/effects";
import { DishAction } from "../actions/dish";
import * as constants from "../actions/constants";

function* likeDish(payload) {
  yield put({ type: constants.LIKE_DISH_ASYNC, payload });
}

function* dislikeDish(payload) {
  yield put({ type: constants.DISLIKE_DISH_ASYNC, payload });
}

function* watchLikeDish() {
  yield takeLatest(constants.LIKE_DISH, likeDish);
}

function* watchDislikeDish() {
  yield takeLatest(constants.DISLIKE_DISH, dislikeDish);
}

export default function* rootSaga() {
  yield all([watchLikeDish(), watchDislikeDish()]);
}
