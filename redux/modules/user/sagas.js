import { fork, call, put, takeEvery } from 'redux-saga/effects';
import { constants as at, actions } from './duck';
import * as Api from '~/util/lvApi.js';
import { pushRoute } from '~/redux/sagas/global';
import { saveAuth } from '~/util/localStorage' ;

function* createUserSaga({data}) {
  yield put(actions.createUser.request(data));
  try {
    const user = yield call(Api.createUser, data);
    yield call(pushRoute, '/assessment');
    yield put(actions.createUser.success(user));
    saveAuth(user.auth)
  } catch (e) {
    yield put(actions.createUser.failure(e));
  }
}

export function* watchUser() {
  yield fork(takeEvery, at.SIGN_UP_USER, createUserSaga);
}
