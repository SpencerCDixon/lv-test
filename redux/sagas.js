import { fork } from 'redux-saga/effects';
import Router from 'next/router';

import user from './modules/user';

const { watchUser } = user.sagas;

export default function* rootSaga() {
  yield [
    fork(watchUser)
  ];
}

// Utility Sagas
export function* pushRoute(route) {
  return Router.push(route);
}
