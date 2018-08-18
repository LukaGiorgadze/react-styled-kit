// Core
import { all, fork } from 'redux-saga/effects';

// Import Sagas
import * as userSagas from 'sagas/user';

// Combine all Sagas
export default function* rootSaga() {
  yield all([...Object.values(userSagas)].map(fork));
}
