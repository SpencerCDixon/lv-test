import { fork, call, put, takeEvery, select } from 'redux-saga/effects';
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

  yield put(actions.updatePassword.request());
  try {
    yield call(Api.updatePassword, data);
    yield put(actions.updatePassword.success());
    yield put(reset('PasswordResetForm'));
    yield put(actions.increment());
  } catch (e) {
    yield put(actions.updatePassword.failure(e));
  }
}

export function* watchAssessment() {
  yield fork(takeEvery, at.REQUEST_PASSWORD_UPDATE, updatePasswordSaga);
}
