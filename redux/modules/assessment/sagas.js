import { fork, call, put, takeLatest, select } from 'redux-saga/effects';
import { constants as at, actions } from './duck';
import * as Api from '~/util/lvApi.js';
import { pushRoute } from '~/redux/sagas/global';
import { reset, getFormValues } from 'redux-form'

import user from '~/redux/modules/user';

function* updatePasswordSaga() {
  const resetId = yield select(user.selectors.getPasswordResetId);
  const values = yield select(getFormValues('PasswordResetForm'));
  const { newPassword } = values;
  const data = { resetId, newPassword };

  try {
    yield call(Api.updatePassword, data);
    yield put(actions.updatePassword.success());
    yield put(reset('PasswordResetForm'));
    yield put(actions.increment('assess'));
  } catch (e) {
    yield put(actions.updatePassword.failure(e));
  }
}

function* updateLpSaga({values}) {
  const authToken = yield select(user.selectors.getAuthToken);

  try {
    yield call(Api.updateLp, values, {
      headers: { 'Authorization': `Token token=${authToken}` }
    });
    yield put(actions.updateLp.success());
    yield put(actions.increment('lp'));
  } catch (e) {
    yield put(actions.updateLp.failure(e));
  }
}

export function* watchAssessment() {
  yield fork(takeLatest, at.UPDATE_PASSWORD.REQUEST, updatePasswordSaga);
  yield fork(takeLatest, at.UPDATE_LP.REQUEST, updateLpSaga);
}
