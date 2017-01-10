import { fork, call, takeEvery } from 'redux-saga/effects';
import { constants as at, actions } from './duck';
import * as Api from '../../../util/lvApi.js';
import { pushRoute } from '../../sagas';

function* createUserSaga({data}) {
  try {
    const user = yield call(Api.createUser, data);
    yield call(pushRoute, '/learning_profile');
    yield put(createUserSuccess(user));
  } catch (e) {
    yield put(createUserFail(e));
  }
}

export function* watchUser() {
  yield fork(takeEvery, at.REQUEST_CREATE_USER, createUserSaga);
}
