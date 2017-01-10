import { fork } from 'redux-saga/effects';

import user from './modules/user';

const { watchUser } = user.sagas;

export default function* rootSaga() {
  yield [
    fork(watchUser)
  ];
}

