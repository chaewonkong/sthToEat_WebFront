import { put, takeLatest, all, takeEvery } from "redux-saga/effects";
import { Api } from "../../Api";
import * as constants from "../actions/constants";
import { baseURL } from "../../Api";
import { request } from "graphql-request";

const query = `
      query {
       foods {
          name
          imgUrl
        }
      }
  `;

export function* getAllDishesAsync() {
  const res = yield request(baseURL, query);
  yield put({ type: constants.GET_DISHES_ASYNC, payload: res.foods });
}

export function* likeDishAsync() {
  const res = yield Api.postLikeDish();
  yield put({ type: constants.LIKE_DISH_ASYNC, payload: { res } });
}

export function* dislikeDishAsync() {
  const res = yield Api.postDislikeDish();
  yield put({ type: constants.DISLIKE_DISH_ASYNC, payload: { res } });
}

// Watch Functions
function* watchGetAllDishes() {
  yield takeLatest(constants.GET_DISHES, getAllDishesAsync);
}

function* watchLikeDish() {
  yield takeLatest(constants.LIKE_DISH, likeDishAsync);
}

function* watchDislikeDish() {
  yield takeLatest(constants.DISLIKE_DISH, dislikeDishAsync);
}

export default function* rootSaga() {
  yield all([watchLikeDish(), watchDislikeDish(), watchGetAllDishes()]);
}
