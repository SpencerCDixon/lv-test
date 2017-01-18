import { fork } from 'redux-saga/effects';

// modules to watch
import user from './modules/user';
import assessment from './modules/assessment';

const { watchUser } = user.sagas;
const { watchAssessment } = assessment.sagas;

export default function* rootSaga() {
  yield [
    fork(watchUser),
    fork(watchAssessment),
  ];
}
