import { createStore, applyMiddleware } from "redux";

import rootSaga from "./sagas/saga";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers";
// import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
