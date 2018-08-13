import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import { REQUEST_HELLO_WORLD, receiveHelloWorld } from "../actions/helloWorld";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* helloWorld(action) {
  yield put(receiveHelloWorld("Hello ownabit from redux saga!"));
}

/*
  Alternatively you may use takeLatest.
  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export default function* mySaga() {
  yield takeLatest(REQUEST_HELLO_WORLD, helloWorld);
}
