import { put, takeLatest } from 'redux-saga/effects';

import { AUTH_REQUEST, loginSuccess } from 'actions/user';

const delay = ms => new Promise(res => setTimeout(res, ms));

function* login() {
  yield delay(1000);
  yield put(loginSuccess('Hello from redux saga!'));
}

export function* loginSaga() {
  yield takeLatest(AUTH_REQUEST, login);
}
