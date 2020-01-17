// ///// SearchSaga.js
// import { call, put, takeEvery } from "redux-saga/effects";
// import * as actions from "../actions";
// import axios from "axios";

// interface IAction {
//   type: string;
//   payload: { title: string; imgUrl: string };
// }

// function* likeDishSaga(action: IAction) {
//   try {
//     const json = {
//       name: action.payload
//     };
//     const { data } = yield call([axios, "post"], "/api/nba/player", json);
//     yield put(actions.likeDish(data));
//   } catch (error) {
//     // yield put(actions.dislikeDish(error.response));
//   }
// }

// export default function* watchLike() {
//   yield takeEvery(actions.LIKE_DISH, likeDishSaga);
// }

export const a = 0;
