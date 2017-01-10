import { fork, takeEvery } from 'redux-saga/effects';
import { constants as at } from './duck';

function* createUserSaga() {
  console.log('creating user yo');
}

export function* watchUser() {
  yield fork(takeEvery, at.CREATE, createUserSaga);
}
