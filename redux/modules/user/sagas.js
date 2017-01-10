import { fork, call, put, takeEvery } from 'redux-saga/effects';
import { constants as at, actions } from './duck';
import * as Api from '../../../util/lvApi.js';
import { pushRoute } from '../../sagas/global';

function* createUserSaga({data}) {
  try {
    const user = yield call(Api.createUser, data);
    yield call(pushRoute, '/learning_profile');
    yield put(actions.createUserSuccess(user));
  } catch (e) {
    yield put(actions.createUserFail(e));
  }
}

export function* watchUser() {
  yield fork(takeEvery, at.REQUEST_CREATE_USER, createUserSaga);
}
