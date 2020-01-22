import { put, takeLatest, all } from "redux-saga/effects";
import { DishAction } from "../actions/dish";
import * as constants from "../actions/constants";
import { IDishPayload } from "../shared-interfaces";

export function* likeDishAsync() {
  // const products = yield api.fetch('/products')
  yield put({ type: constants.LIKE_DISH_ASYNC, payload: {} });
}

export function* dislikeDishAsync() {
  // const products = yield api.fetch('/products')
  yield put({ type: constants.DISLIKE_DISH_ASYNC, payload: {} });
}

function* a() {
  yield put({ type: "", value: 1 });
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
