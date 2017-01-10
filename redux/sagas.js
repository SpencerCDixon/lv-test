import { fork } from 'redux-saga/effects';

// modules to watch
import user from './modules/user';

const { watchUser } = user.sagas;

export default function* rootSaga() {
  yield [
    fork(watchUser)
  ];
}
